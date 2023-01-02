---
uuid: 96a21882-0150-96af-9103-51ed2f1eefd1
title: PHP伪协议
date: 2022-02-25 18:49:45
tags: 
      - PHP伪协议
      - Web
      - CTF
categories: 
      - [PHP伪协议]
      - [CTF]
      - [Web]
---

PHP伪协议相关知识点在这里做个记录。

<!--more-->

PHP常见的伪协议如下：

| file://     访问本地文件系统                |
| ------------------------------------------- |
| http://    访问HTTP(s)网址                  |
| ftp://       访问FTP(s)URLs                 |
| php://     访问各个输入/输出流(I/O streams) |
| zlib://      压缩流                         |
| data://    数据(RFC 2397)                   |
| glob://     查找匹配的文件路径模式          |
| phar://    PHP归档                          |
| ssh2://     Secure Shell 2                  |
| rar://         RAR                          |
| ogg://       音频流                         |
| expect://   处理交互式的流                  |

在这里详细说一下这个`php://filter`

,这个是常用的伪协议，一般用于任意文件读取，有的时候也可以用在getshell，在双off的情况下也可以使用。

在这里举个例子

> file=php://filter/read=convert.base64-encode/resource=index.php

关于上面这个，解释一下，首先file关键字的get参数传递，php://是一种协议名称，php://filter/是一种访问本地文件的协议，/read=convert.base64-encode/表示读取的方式是base64编码后，resourse=index.php表示目标文件为index.php。

上面举的常用的伪协议的用法：

1.php伪协议
用法：
`php://input`,用于执行php代码，需要post请求提交数据。
`php://filter`,用于读取源码，get提交参数。

?a=php://filter/read=convert.[base64](https://so.csdn.net/so/search?q=base64&spm=1001.2101.3001.7020)/resource=xxx.php
需要开启allow_url_fopen:php://input、php://[stdin](https://so.csdn.net/so/search?q=stdin&spm=1001.2101.3001.7020)、php://memory、php://temp
不需要开启allow_url_fopen:php://filter

2.、data协议

用法：
`data://text/plain`,xxxx(要执行的php代码)
`data://text/plain;base64`,xxxx(base64编码后的数据)
例：
?page=data://text/plain,
?page=data://text/plain;base64,PD9waHAgc3lzdGVtKCJscyIpPz4=

3.、file协议
用法：
`file://`[本地文件系统的绝对路径]
