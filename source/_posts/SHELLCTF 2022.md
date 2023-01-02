---
title: SHELLCTF 2022
date: 2022-08-14 17:27:31
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---



![image-20220813220717895](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208132207964.png?x-oss-process=hzy)

<!--more-->

# Misc

## World's Greatest Detective

> Are you the World's greatest detective?if yes help us decode this image and we shall reward you with the thing you truly desire. Flag Format: SHELLCTF{}

![image-20220812214842025](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122148138.png?x-oss-process=hzy)

漫威里面黑豹的语言，在线翻译一下

[Type Wakanda is a Wakanda Text Translator that turns your English text to Wakanda Font](https://typewakanda.com/)

![image-20220812214920106](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122149176.png?x-oss-process=hzy)

SHELLCTF{W4kandA_F0rev3r}

## Sanity Check

> Check the #announcement channel of the discord server .

SHELLCTF{W3lc0me_2_SHELLCTF2022}

# Reversing

## How to defeat a dragon

> Dragonairre,the dragon with the hexadecimal head has attacked the village to take revenge on his last defeat,we need to get the ultimate weapon. Flag Format : SHELLCTF{}.

主要逻辑如下

![image-20220812223302909](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122233009.png?x-oss-process=hzy)

SHELLCTF{5348454c4c4354467b31355f523376337235316e675f333473793f7d}

交了不对，发现内容是hex，转str

SHELLCTF{15_R3v3r51ng_34sy?}

## Keygen

> Enter the license key and get the flag.Simple right ? Flag Format:SHELLCTF{}.

主要逻辑如下

![image-20220812223533154](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122235225.png?x-oss-process=hzy)

发现v3是flag，跟进getstring(),得到flag

![image-20220812223841804](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122238871.png?x-oss-process=hzy)

SHELLCTF{k3ygen_1s_c0oL}

## Pulling the strings

> Can you please feed me something? Flag Format: SHELLCTF{}

主要逻辑如下

![image-20220812224023474](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122240548.png?x-oss-process=hzy)

跟进

![image-20220812224122563](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122241636.png?x-oss-process=hzy)

继续跟进，得到flag

![image-20220812224146972](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122241044.png?x-oss-process=hzy)

SHELLCTF{Th4nks_f0r_the_food}

## warmup

> Here's a quick rev challenge to get started. Reverse the binary to obtain the flag.
>
> The flag format is shellctf{...}

主要逻辑如下

# Forensics

## Alien Communication

> Aliens are trying to communicate something. They belive in seeing more than what they are hearing. can you help us trying to decode what they are trying to say?

wav音频隐写，看频谱图得到flag

![image-20220812231849286](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208122318379.png?x-oss-process=hzy)

shell{y0u_g07_7h3_f1ag}

## GO Deep!

> Our one of the agent gave us this file and said "Go Deep!"

附件一堆阴间音，Go Deep，使用这个软件

[Deepsoundinstalled | jpinsoft.net](http://jpinsoft.net/DeepSoundInstalled.aspx)

密码是shell，得到flag

![image-20220813144533282](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131445356.png?x-oss-process=hzy)

SHELL{y0u_w3r3_7h1nk1ng_R3ally_D33p}

## Heaven

> "I was in the seventh heaven painted red green and blue"
>
> Flag Format: SHELL{s0mething_here}

![Seventh_Heaven_Image](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131746308.jpeg?x-oss-process=hzy)

红绿蓝7通道，出flag

![image-20220813174638083](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131746143.png?x-oss-process=hzy)

SHELL{man1pul4t1ng_w1th_ 31ts_15_3A5y}

## Hidden File

> Our Agent gave us this image can you find whats there with this image?

![Hidden](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131849558.jpg?x-oss-process=hzy)

![image-20220813184941843](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131849906.png?x-oss-process=hzy)

steghide隐写

```
steghide extract -sf  Hidden.jpg -p shell
```

![image-20220814172701272](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208141727348.png?x-oss-process=hzy)

分出了一个压缩包，解压之后![image-20220814172736658](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208141727709.png?x-oss-process=hzy)



# Web

## Choosy

> Single solution doesn't works on all problems. One should try different solutions for different problem.
>
> Flag format:- shellctf{H3re_1s_tH3_F14g}

![image-20220813142637051](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131426169.png?x-oss-process=hzy)

试了ssti貌似不是，那就是xss

![image-20220813142736844](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131427920.png?x-oss-process=hzy)

shellctf{50oom3_P4yL0aDS_aM0ng_Maaa4nnY}

## Doc Holder

> Can you share portable document with us which looks like it when we seet portable document with eyes but ti's not actually portable document.
>
> More a misc problem ...
>
> My Favourite move is Inferno overwrite

> Hint --- Challenge is all about file extension of the file that you are uploading....
>
> Think from right to left

文件上传题，测试貌似只能上传pdf

![image-20220813151641870](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131516982.png?x-oss-process=hzy)

上传成功显示**Yummmmmmmmmmyyyyy**，上传失败显示**Not Tasty**



## Colour Cookie

> Gone those days when no colours, images, fonts use to be on a webpage. We now have various ways to decorate our webpages and here is one such example.
>
> Flag format :- shellctf{H3re_1s_F14g}

> hint: The key is finding and value is the favorite thing...

![image-20220813151542106](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131515235.png?x-oss-process=hzy)

没啥思路

## ILLUSION

> Sometimes it happens things are there but you can't see it directly. We need to change our vision to make it visible. I believe you have that vision.Flag is in flag.txt file....

![image-20220813214429690](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208132144804.png?x-oss-process=hzy)

输入的内容大部分都会被过滤

ls也不可以直接用，fuzz发现可以用的符号有\#+.;ACDFGLSTXacdfglstx\u0026

llss列当前目录无flag

![image-20220813214655640](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208132146736.png?x-oss-process=hzy)

难点就在如何换目录

双写绕过

```
ccdd%20....;ccdd%20....;llss
```

![image-20220813214832071](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208132148172.png?x-oss-process=hzy)

![image-20220813214907447](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208132149527.png?x-oss-process=hzy)

shellctf{F1l73R5_C4n'T_Pr3v3N7_C0mM4nd_1nJeC71on}

# Crypto

## Tring Tring....

> Tring Tring my mobile started ringing. "Hey Check your SMS!!"----. ----. ----. / -.... -.... -.... / ---.. ---.. / ..--- ..--- ..--- / ..--- / -.... -.... / --... --... --... / ...-- ...-- / ..--- / ...-- / -.... / ----. ----. ----. / --... --... --... --... / -.... / --... --... --... --...Flag Format: SHELL{SOMETHINGHERE}

![image-20220813175855579](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208131758670.png?x-oss-process=hzy)

```
999 666 88 2222 66 777 33 2 3 6 999  7777 6 7777

YOUANREADMYSMS

93 63 82 24 62 73 32 21 31 61 93 74 61 74

YOU_AN_READ_MY_SMS

youanreadmysms

SHELL{YOUANREADMYSMS}
```

这样交一直不行，就奇了怪了

后来队友点醒梦中人，2222分222和2，前222为23，后21，则CA

所以最后答案为SHELL{YOUCANREADMYSMS}

# 总结

这比赛质量不咋地，不想做了，就做这些吧，脑洞太大，没学到太多东西