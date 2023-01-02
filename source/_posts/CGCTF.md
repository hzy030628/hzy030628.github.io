---
uuid: 1c3e0d06-8d4c-5ba4-6732-df9c07df03ec
title: CGCTF
date: 2022-03-22 18:51:58
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

某大学新生题

<!--more-->

# 签到题

![image-20220322185411172](https://img-blog.csdnimg.cn/img_convert/ad2c4afe270374af7bc5d4339554c720.png)看源代码即可！

# md5 collision

![image-20220322185443074](https://img-blog.csdnimg.cn/img_convert/a96ff731f446d94dd7c67868e9d912c6.png)

这道题只看php代码感觉是有点矛盾的，get传参a。同时还不能让a是QNKCDZO，但是又要求md51必须等于md52，而md51又是QNKCDZO的md5加密，显然这是矛盾的，通过md5加密看一下是啥样的形式。![image-20220322190407943](https://img-blog.csdnimg.cn/img_convert/f869ce9ebfbfe123e8fa33cd98f5aa6c.png)

是0e开头的，所以只需要让a也等于0e开头的形式就可以。这个题目利用了php弱类型。比如在`==`判等时，`0exxxxx`=`0xsfdsf`=`0`.而在源代码中直接给出了`QNKCDZO`的md5就是`0e`开头，使用a传输一个md5也是`0e`开头的即可![image-20220322190801506](https://img-blog.csdnimg.cn/img_convert/ad192b64ddad0b4de7b8850e89116c73.png)

# 签到2

![image-20220322190921096](https://img-blog.csdnimg.cn/img_convert/e981a35eecf5cc2d517507daa4a4e83a.png)

这道题说输入口令就可以，但是输入的时候发现只能输入11位，可以通过f12修改数据来输入

![image-20220322195654635](https://img-blog.csdnimg.cn/img_convert/8300a44e7f754695c31ccb58e32c0dde.png)

# 这题不是WEB

![image-20220322195854718](https://img-blog.csdnimg.cn/img_convert/90140934b8fd06a051f17a150ad87da0.png)

题目说这题不是web，看源代码发现也无果，结合发现这个图片应该可以下载到本地用stegsolve看一下![image-20220322200042315](https://img-blog.csdnimg.cn/img_convert/7ef11314c3a10514700a0be8bdb5c6fb.png)

# 层层递进

![image-20220322204944031](https://img-blog.csdnimg.cn/img_convert/d913adf704528327b08f6b3a82cd58ab.png)

查看源码，代码审计

![image-20220322205209599](https://img-blog.csdnimg.cn/img_convert/59b8c206f3b5a4c52e96183bdd9a8763.png)

![image-20220322205303809](https://img-blog.csdnimg.cn/img_convert/4d76bd4d7c5070eb951b85b0823794ff.png)

# AAencode

![image-20220322205400607](https://img-blog.csdnimg.cn/img_convert/1501ed9bbb219aa44e3e728ba20aefde.png)

崩了，这个跳过

# 单身二十年

![image-20220322205457034](https://img-blog.csdnimg.cn/img_convert/37a35fdf5b908f48e73389f48b93491b.png)既然已经说了靠手速，一般这样的题就是bp抓波send就得到flag！

# php decode

![image-20220322205632090](https://img-blog.csdnimg.cn/img_convert/0410057f404f821a5bce91dfc33391bc.png)

就是直接php运行即可，把eval改成echo，输出！

![image-20220322205859772](https://img-blog.csdnimg.cn/img_convert/f7dc48d4935ae3efc259918963db7555.png)

# 文件包含

![image-20220322205942560](https://img-blog.csdnimg.cn/img_convert/e6a691d4731a6629fa521ddf8aca7bf9.png)

直接payload:

> ?file=php://filter/convert.base64-encode/resource=index.php

![image-20220322210311271](https://img-blog.csdnimg.cn/img_convert/25b121ce7d95aa4acabfe9da7e527c7e.png)

![image-20220322210328401](https://img-blog.csdnimg.cn/img_convert/706d9381fa30c5a311aedb87fd680855.png)

单身一百年也没用

![image-20220322210423830](https://img-blog.csdnimg.cn/img_convert/ff5249d083425ab0f8552351a36f6dcf.png)

抓包得到![image-20220322210537128](https://img-blog.csdnimg.cn/img_convert/df56fd89ac7353e8f3984008ca9550df.png)

# Download~!

挂了

# COOKIE

![image-20220322210639051](https://img-blog.csdnimg.cn/img_convert/df6769ecad9bc915ad1933f649cf6678.png)

看cookie发现值为0，改成1试试

![image-20220322211009783](https://img-blog.csdnimg.cn/img_convert/3b6d127f26bc29afe33c55c2e27639ba.png)

# MYSQL

![image-20220322211053784](https://img-blog.csdnimg.cn/img_convert/2615a0d6416c0c7a5b827e8e2e3934db.png)

访问一下robots.txt![image-20220322211149934](https://img-blog.csdnimg.cn/img_convert/9b15ef57092ce13430648dd43ec4e336.png)

这里只是一个提示，审计一下发现是get传参id，代码表示如果输入的值是1024，就显示no，但是测试其他数据并没有回显

这是考察`intval($_GET[id]);`的作用获取变量的整数值，所以只要传递一个1024的小数即可！

![image-20220322211739227](https://img-blog.csdnimg.cn/img_convert/8ac7e111535b7a314eee425e6ba3cb40.png)

# GBK Injection

![image-20220322211811210](https://img-blog.csdnimg.cn/img_convert/ea8aadb373558431e35b207f02d3537d.png)

`GBK Injection`也就是宽字节注入，原理：

> GBK 占两个字节
> ASCII占一个字节
> 常见的宽字节有: GB2312、GBK、GB18030、BIG5、Shift_JIS等这些都是常说的宽字节，实际上只有两字节。宽字节带来的安全问题主要是吃ASCII字符(一字节)的现象。
> 通常来说，一个gbk编码汉字，占用2个字节。一个utf-8编码的汉字，占用3个字节。
> 大家都知道%df’ 被PHP转义（开启GPC、用addslashes函数，或者icov等），单引号被加上反斜杠\，变成了 %df\’，其中\的十六进制是 %5C ，那么现在 %df\’ =%df%5c%27，如果程序的默认字符集是GBK等宽字节字符集，则MySQL用GBK的编码时，会认为 %df%5c 是一个宽字符，也就是縗，也就是说：%df\’ = %df%5c%27=縗’，即单引号逃逸，有了单引号就好注入了。
> %df吃掉 \ 具体的原因是urlencode(’) = %5c%27，我们在%5c%27前面添加%df，形成%df%5c%27，而上面提到的mysql在GBK编码方式的时候会将两个字节当做一个汉字，此事%df%5c就是一个汉字，%27则作为一个单独的符号在外面，同时也就达到了我们的目的。

![image-20220322212339070](https://img-blog.csdnimg.cn/img_convert/b36ae320898ea701af9cc36e856e6228.png)

sql注入，得到flag！

# /x00

![image-20220322212436100](https://img-blog.csdnimg.cn/img_convert/0863c64d06504cf96557fe9887f8f9a8.png)

需要绕过ereg()函数，有两种方法：

> payload1
> http://teamxlc.sinaapp.com/web4/f5a14f5e6e3453b78cd73899bad98d53/index.php?nctf[]=#biubiubiu
> payload2 00截断
> http://teamxlc.sinaapp.com/web4/f5a14f5e6e3453b78cd73899bad98d53/index.php?nctf=1%23biubiubiu

![image-20220322212812889](https://img-blog.csdnimg.cn/img_convert/6dd6f5b75648361f0ead3df28e402c0c.png)

# bypass again

![image-20220322213000572](https://img-blog.csdnimg.cn/img_convert/93c52986279b443fac141fabfc372088.png)

代码审计和上面那个md5题一样的原理，就是让开头的标志一样，然后就可以通过。

![image-20220322213258772](https://img-blog.csdnimg.cn/img_convert/2a47268dd21f8fb4c14d539036d011bb.png)

# 上传绕过

![image-20220322213812013](https://img-blog.csdnimg.cn/img_convert/c5fab755acef595fa369f21772ad3f70.png)

这道题先正常上传一个图片显示必须上传php格式的文件![image-20220323190037077](https://img-blog.csdnimg.cn/img_convert/4aa55dca3e515e5ade47a2ea9bbaf4b6.png)

再上传php文件又显示只能上传图片![image-20220323190128511](https://img-blog.csdnimg.cn/img_convert/768abded5dae4136a30f03ec879a7aec.png)

正确的做法是先抓包把2文件名改成muma.php.jpg，然后dir路径改为uploads/muma.php+

然后因为“+”的十六进制值为2b，这个时候再去hex找+，把2b改成00之后再放包!![image-20220323190359584](https://img-blog.csdnimg.cn/img_convert/8bc9b02a21b9dcd997e91eec086a1fe5.png)

# 变量覆盖

![image-20220323190500865](https://img-blog.csdnimg.cn/img_convert/2de4df5d4adc83e9e31d66d9908ee952.png)

下面给了提示，访问一下那个路径发现源码![image-20220323190618568](https://img-blog.csdnimg.cn/img_convert/1efe019c30c47321427e0788b7bd4593.png)extract() 函数从数组中将变量导入到当前的符号表。

该函数使用数组键名作为变量名，使用数组键值作为变量值。针对数组中的每个元素，将在当前符号表中创建对应的一个变量。

第二个参数 *type* 用于指定当某个变量已经存在，而数组中又有同名元素时，extract() 函数如何对待这样的冲突。

该函数返回成功导入到符号表中的变量数目。

所以这道题给pass和thepassword_123用post传一个相同的值即可

![image-20220323191016328](https://img-blog.csdnimg.cn/img_convert/208f464f6397d3e111314959f4865c87.png)

# PHP是世界上最好的语言

挂了

# 伪装者

![image-20220323191313280](https://img-blog.csdnimg.cn/img_convert/22662c55a402f329b2d9800ee8e0cb37.png)

抓包修改一下地址![image-20220323191549273](https://img-blog.csdnimg.cn/img_convert/a1cf9d02633484a67d8bfbf4b6b706cb.png)

> X-Forwarded-For:127.0.0.1

理论上这样就行了，但是不行，在网上找应该是题目出了问题！

# Header

![image-20220323191825565](https://img-blog.csdnimg.cn/img_convert/b18de2a56853547a954c53f9514fd366.png)

挂的题太多，不想做了，就到这吧！
