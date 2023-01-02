---
title: SEETF
date: 2022-06-04 19:25:00
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

今天一天打了几个国外的比赛，这个比赛直接给我打自闭了，web就会一题，我是fw。。。

![imagec81257c0e3c4ef50.png](https://z4a.net/images/2022/06/10/imagec81257c0e3c4ef50.png)

<!--more-->

# web

## Sourceless Guessy Web (Baby Flag)

> WHY SO SERIOUS? WHY NEED SOURCE?
>
> Contrary to the title of this challenge, you do not need to guess. As usual, do not bruteforce or scan our infrastructure, it is not allowed.
>
> **Note:** There are two flags for this challenge.
>
> [http://sourcelessguessyweb.chall.seetf.sg:1337](http://sourcelessguessyweb.chall.seetf.sg:1337/)
>
> For beginners:
>
> - https://portswigger.net/web-security/file-path-traversal

![image.png](https://z4a.net/images/2022/06/04/image.png)

目录遍历漏洞`../../../etc/passwd`,看源码得到flag

![image34e14558ea6901bd.png](https://z4a.net/images/2022/06/04/image34e14558ea6901bd.png)

# MISC

## Regex101

> Our team stored a flag on our machine, however, we were hacked by someone, and he generated 2999 flags and hid our original flag in the .txt file. The flag consists of 5 uppercase letters, followed by 5 digits and another 6 uppercase letters. Can you find it for us?

签到题，一个一个找自然能找到，但是学到了一个新的[方法](https://regexr.com/)

直接使用

```
SEE{[A-Z]{5}\d{5}[A-Z]{6}}
```

即可找到flag![image.png](https://z4a.net/images/2022/06/10/image.png)

```
SEE{RGSXG13841KLWIUO}
```

