---
title: TUCTF 2022
date: 2022-12-05 22:27:31
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![ctf](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052134060.png?x-oss-process=hzy)

<!--more-->

TUCTF 2022

# Web

## Tornado

![image-20221205193744717](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212051937845.png?x-oss-process=hzy)

考虑到是ssti漏洞，测试一下

![image-20221205193823467](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212051938520.png?x-oss-process=hzy)

直接读取config报错，试了好多其他payload也是报错

![image-20221205193902483](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212051939542.png?x-oss-process=hzy)

可以利用popen函数完成读取文件的目的，调用这个函数会返回一个文件的句柄，然后再配合read函数即可实现读取

该函数会执行fork一个子进程执行command这个命令，同时将紫禁城的标准输出通过管道连接到父进程，对于文件在父进程调用read函数读取即可。对于执行的命令会在父进程被执行

现在目的只有一个就是找到这个popen函数，由于想找的是一个子类，所以第一步就是找到其对象基类，也就是class ‘object’，方法就是使用__mro__属性来访问对象的继承类，但是目前没有对象所以先构造一个空字符串

*`{{“”.__class__.__mro__}}`*,其中这个class用于返回调用的参数类型

![image-20221205195431297](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212051954366.png?x-oss-process=hzy)

可以看到该子类继承class'str'与class'object'并以一个元组返回，可以通过索引获得对象类名`{{"".__class__.__mro__[1]}}`

紧接着列举所有继承自object的子类，通过对该对象调用subclasses方法

`{{“”.__class__.__mro__[1].__subclasses__()}}`

![image-20221205195834866](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212051958014.png?x-oss-process=hzy)

但是可以看到输出子类太多，可以切片查找，逐步定位

`{{"".__class__.__mro__[1].__subclasses__()[230:]}}`

![image-20221205195946330](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212051959410.png?x-oss-process=hzy)

从而确定popen函数位于233

这个时候使用该函数去调用执行命令

`{{"".__class__.__mro__[1].__subclasses__()[233]("ls",shell=True,stdout=-1).communicate()}}`

但是发现还是报错了，这条路走到这是死掉了

![image-20221205200310946](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052003001.png?x-oss-process=hzy)

比赛结束后看老外的wp才知道原来我想复杂了，直接读app下的那个文件即可

`{{ open('/app/web2.py','r').read()}}`

![image-20221205200539561](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052005639.png?x-oss-process=hzy)

TUCTF{t0rnad0_1snt_v3ry_s3cur3}

还有一个payload是有效负载可以正常使用

`{% import os %}{{os.popen('ls').read()}}`

![image-20221205203919510](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052039568.png?x-oss-process=hzy)

![image-20221205204026918](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052040961.png?x-oss-process=hzy)

路径/parttwooftheproblem

cookie对应提示12957293 从而得到flag

![image-20221205204254454](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052042512.png?x-oss-process=hzy)

## Hyper Maze

> Welcome to my }HYPER{}MAZE{!
>
> Try to find out way out of my evil maze! There is a gift waiting for you at the end!

maze，是个迷宫题

![image-20221205204658391](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052046451.png?x-oss-process=hzy)

start之后就变成了这样

![image-20221205204824496](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052048569.png?x-oss-process=hzy)

看源码可以看到从一百到99跳转

![image-20221205205022438](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052050498.png?x-oss-process=hzy)



99->98跳转

![image-20221205205127006](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052051055.png?x-oss-process=hzy)

不难想到，应该需要跳转到1才是flag的页面，写个简单的脚本跑一下

```
import requests

s = requests.Session()

url = "https://hyper-maze.tuctf.com/pages/"

page = "page_aesthetician100.html"

for i in range(99):
    page = "page_"+(s.get(url+page).text.split("page_")[1].split(".html")[0])+".html"
    print(page)
```

![image-20221205210414903](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052104967.png?x-oss-process=hzy)

跑完之后访问第一个页面page_lagenaria1.html，再看源码得到flag页面

![image-20221205210449854](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052104908.png?x-oss-process=hzy)

![image-20221205210517749](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052105800.png?x-oss-process=hzy)

TUCTF{y0u_50lv3d_my_hyp3r73x7_m4z3_38157}

## Vertical Traversal

> We recruited a rock to be our web application firewall.

> hint:You are trying to find `flag.txt`

![image-20221205210637030](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052106087.png?x-oss-process=hzy)

初步断定应该是目录穿越

![image-20221205210709470](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052107521.png?x-oss-process=hzy)

![image-20221205210732815](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052107865.png?x-oss-process=hzy)

测试一下有无过滤

![image-20221205210831309](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052108362.png?x-oss-process=hzy)

![image-20221205210843461](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052108509.png?x-oss-process=hzy)

发现俩点会换成一个点，但是三个点真的只会变成俩点

![image-20221205211058158](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052110217.png?x-oss-process=hzy)

![image-20221205211108558](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052111611.png?x-oss-process=hzy)

url编码一下

![image-20221205211234956](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052112021.png?x-oss-process=hzy)

![image-20221205211315357](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052113427.png?x-oss-process=hzy)

成功绕过，直接读取flag

![image-20221205211503302](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052115362.png?x-oss-process=hzy)

```
TUCTF{d0nt_us3_r3g3x_f0r_sanitization_416589}
```

## Swapping Heads

> Trying out a unique access process for my website. Can you get past it?
>
> Note: Server time is computed using UTC+0

访问题目

![image-20221205211648326](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052116727.png?x-oss-process=hzy)

head，所以我们可以试试抓包，直加入规定的时间

![image-20221205212009923](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052120023.png?x-oss-process=hzy)

这结果是问题不是2009的三月。修改UA头，改成2009.03发布的浏览器

![image-20221205212204657](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052122751.png?x-oss-process=hzy)

然后继续改，电子邮箱，加进去这个比赛的电子邮箱

![image-20221205212343929](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052123017.png?x-oss-process=hzy)

得到flag

TUCTF{s0_m@ny_h11p_h3@d3r5}

# Cryptography

## That One RSA Challenge

> Every CTF needs an RSA challenge, right? This one is pretty easy, but it's a good warmup for the harder ones.
>
> nc chals.tuctf.com 30003

RSA解密，nc得到数据

![image-20221205204513171](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052045258.png?x-oss-process=hzy)

```
n:9485617987806706299131247776466066367809938974970055865380294247238770694891739867376223018874375879714997107037740309334952957232380620942369059299915046070326520804023632807969393450262857945485791854014950104444137529299258769400518631572400245843789419685432346975170642019241202057940814339369003423789312251289004158977581560819324386281826630693497886175987

e:5

c:3939576766768376763961405582521543334021934514950892859323028296903375959099172979885272281538172303841975145817998784463308709702183899488377424082851763106850349079809316431283635641105910994747748501769481061061860265928123380738805313890512159984000841962302724291349991025550366136992045593173221270436096235781550054498742353003142428431700520457366886751244
```

直接爆破，脚本如下

```
from Crypto.Util.number import  *
import gmpy2


n=8346425840345037198129807199954937513125401478961025053438500009262959483940555502608532588666628916939574878135218855958821064838203228082983723434620238007105016628268464539273261229744292297640361962072437956843948295958466836540951955424109567151570099392506528987866673342131787718676889995125410609830917106914342065379286418563488386309724204814943128871119
e=5
c=890620492926502102321644049026872388378498414827953826131346197384557852833466825919448308696314073085933961953691570137956771071596742543745375687720240553544749955984069277312962665151448350105067655613387030994086162903274410383691948894524235546954806222699808006175418241236189457310283573332687555189286927373038549938732981897169435703218096242083962769102

for i in range(10000000):
    if gmpy2.iroot(c+(n*i),5)[1]:
        print(long_to_bytes(gmpy2.iroot(c+(n*i),5)[0]))
```

![image-20221205204549718](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202212052045776.png?x-oss-process=hzy)

b'TUCTF{0bl1g4t0ry_RSA_chall_l0l}'