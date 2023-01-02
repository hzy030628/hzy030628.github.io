---
uuid: 41b8dc68-9550-0fd7-f063-eba12ebdac9c
title: RCE
date: 2022-02-16 22:30:12
tags: 
     - Web
     - RCE
     - CTF
categories: 
      - [Web]
      - [CTF]
---

web中RCE漏洞的相关题型
<!--more-->

# eval执行

![image-20220216223729477](https://img-blog.csdnimg.cn/img_convert/5236edddbb6431dba34869dc0f7830a5.png)

先看一下php代码，这个题要求需要将命令赋值给cmd之后执行，先看一下根目录文件`/?cmd=system("ls");`

> 最后的分号不能少

![image-20220216224010950](https://img-blog.csdnimg.cn/img_convert/af1c8d8129c8988b4d330dc1543ade71.png)

并没有发现有用的文件，那么查看上一级的文件夹`/?cmd=system("ls %20/");`

![image-20220216224237692](https://img-blog.csdnimg.cn/img_convert/1ed6951f10d67105fb94d4d6261f9e0e.png)

看到flag，那么接下来抓取flag片段`/?cmd=system"cat%20/flag_22831");`

![image-20220216224433182](https://img-blog.csdnimg.cn/img_convert/ca9ddb680f260490793991ad7c481c6c.png)

# 文件包含

![image-20220216224658663](https://img-blog.csdnimg.cn/img_convert/8b085995d6cbfd48feca40787bc4ac72.png)

点击shell后会出现这个页面![image-20220216224851279](https://img-blog.csdnimg.cn/img_convert/c6279f8ef3ee501daf92c61a16aa2acd.png)

这个时候应该用hackbar进行post注入，首先先查看这个目录

，这里需要注意审题，我们需要先get`?file=shell.txt`,然后用hackbarpost传参，`ctfhub=system("ls");`

![image-20220216230251734](https://img-blog.csdnimg.cn/img_convert/e902036244e62ba1f459cfe143550fdb.png)

跟上提一样，这个目录没有找到想要的东西的时候就去找上一个目录！（这题是直接列出来根目录）![image-20220216230445443](https://img-blog.csdnimg.cn/img_convert/8b4f3ecd46bae63c19cc1b91c232669b.png)

看到了flag，直接cat！![image-20220216230549909](https://img-blog.csdnimg.cn/img_convert/fc0c015d3f3c50d33051d2ff8e62e24e.png)
