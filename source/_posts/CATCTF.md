---
title: CATCTF
date: 2023-01-01 18:51:58
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/953d7a72-b66d-472c-b93d-d5ed39955524.png?x-oss-process=hzy)

<!--more-->

# 前言

2023新年跨年，别人看晚会，我打CTF，整挺好，祝大家2023年新年快乐

# **WEB**

## **ez_js【SOLVED】故里学长**

js敏感文件泄露得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-Yb3bORotH-paEf-U3At6U.png?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C8SGLFyTpZCAZrP9_fSz6dX.png?x-oss-process=hzy)

flag{7s_g4m3_ju5t_f1nd_1t}

## **ezbypass【SOLVED】故里学长**

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C86NgGGWJ9Ax4qJ2m0_5ibz.png?x-oss-process=hzy)

通过回显可以得到貌似是只有admin用户名，题目说了不用爆破，通过审计js代码得知密码是md5加密形式，爆破了也没找到密码

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C9n--fNReRHs4IgMFj83Feu.png?x-oss-process=hzy)

用dirsearch刚开始扫的时候没得到有用的信息，又扫了一次扫到了doc.html

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_eG9FA7BdJ2LtuPQITgm8b.png?x-oss-process=hzy)

抓包拦截存在路径穿越漏洞，直接读flag.html即可

![image-20230101144249573](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/image-20230101144249573.png?x-oss-process=hzy)

cyberpeace{80cfb7b2f4862c4b717d0a92ec1ac09b}

## **catcat【SOLVED】故里学长**

存在任意文件读漏洞，可以读取/etc/passwd和hosts

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C9UKspYxF5AMbRO7nz4BXon.png?x-oss-process=hzy)![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_F08iZv3xBaalC6Bu3YIX_.png?x-oss-process=hzy)但是读不到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-3VXZF2sBNo693V0Lf5qyf.png?x-oss-process=hzy)

同时这里存在session

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C8JvprGn01H9pqIUTG0inxS.png?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_1gQ1QN7dLko3VyHp3da4b.png?x-oss-process=hzy)

先通过任意文件读取来读源码/app/app.py

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_VN799CppOcq3bGzGARmN3.png?x-oss-process=hzy)

分析源码可以看出来/admin目录访问时当session不对就会返回NONONO，/info就是任意文件读，当满足if session.get(**'admin'**) == 1:就会return flag

其中session前半段是uuid()+***abcdefgh**

```
app.config[(**'SECRET_KEY'**)] = str(uuid.uuid4()).replace(**"-"**, **""**) + **"\*abcdefgh"**
```



先根据/proc/self/maps来获取内存情况之后再从/proc/self/mem中读取指定偏移量的内存数据，从而找到**SECRET_KEY 的完整数据**

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-GeInujtFH3aMUAVRoUAqU.png?x-oss-process=hzy)

测试后得到key：6f9ba0f4cab24776b669e16cb383d300*abcdefgh

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_VJoU8gIFInoHcvB_2kSrz.png?x-oss-process=hzy)

然后使用Flask Session Cookie Decoder/Encoder进行伪造session



![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C9gkfAaPpVGOp4HmCOBDifu.png?x-oss-process=hzy)

验证成功密钥正确，伪造admin=1即可

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-HHbG-RFlPAKb8UYiFaJM5.png?x-oss-process=hzy)

替换cookie得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-BJ0eA6Z9ABYfqkjjN8tVD.png?x-oss-process=hzy)

![image-20230101110540019](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/image-20230101110540019.png?x-oss-process=hzy)

catctf{Catch_the_c4t_HaHa}

# **MISC**

## **miao~【SOLVED】故里学长**

附件给了个jpg文件，formost分离出一个wav文件

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C8j5o8TSbZHc7pTLQivD2Qz.png?x-oss-process=hzy)

频谱中得到提示CatCTF

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_-k6VdMO1HII0A14mIPwn7.png?x-oss-process=hzy)



这个应该是图片隐写解密的密钥，但是我知道的图片隐写都试了，都不行，应该是某个刁钻的罕见的隐写吧

1.1晚凌晨一点，突发奇想从分离出来的音频下手，使用deep发现里面还藏有flag.txt

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C9GJfBF9LZPhrOziUWR_IFr.png?x-oss-process=hzy)

decode出来flag.txt之后是



![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C8UlX3GS4pJU5q0fhDyHXwT.png?x-oss-process=hzy)

兽语解密

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C87h_4mN55LgJnZtqjPUDGZ.png?x-oss-process=hzy)

CatCTF{d0_y0u_Hate_c4t_ba3k1ng_?_M1ao~}



## **Cat_Jump【SOLVED】故里学长**



通过搜索flag头，发现flag的前半部分，然后用这个前半部分去搜索，找到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_W5RckiOlB6aguimpiQQF6.png?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-bIy4tJuhFt4badzLy1xUz.png?x-oss-process=hzy)

CatCTF{EFI_1sv3ry_funn9}

## **MeowMeow【SOLVED】故里学长**

隐写，题目描述说都是大写字母

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C82Ft1m6SREa7i0ErKaIIyZ.png?x-oss-process=hzy)

附件png图片010打开，看左边的总览最后能看到字母样

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-nwkbfbe1M94ffY7P3IdOm.png?x-oss-process=hzy)

得到flag

CatCTF{CAT_GOES_MEOW}

## **CatchCat【SOLVED】故里学长**

这道题目查看附件可以看到给了一堆GPS坐标

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_SyFVgOxBFh6ZocCbaD-ON.png?x-oss-process=hzy)

属于GPGGA协议，分析一下列出csv表格

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C8HWLGhdUlL3rmxUYUdN-1y.png?x-oss-process=hzy)

前面这些都很容易得到，需要修改一下部分数据，对时间戳进行处理





```
import csv
import os

odata = '1.csv' 
data = [] 

if not os.path.exists(odata):
    print('wrong path!')
    
with open(odata) as csvfile:
    csv_reader = csv.reader(csvfile)
    header = next(csv_reader) 
    for row in csv_reader:
        mm = row[1].split('.')[0] 
        ss = row[1].split('.')[1] 
        if len(mm)<2:
            mm = '0' + mm 
        timestamp = '00:' + mm + ':' + ss 
        row[1] = timestamp
        data.append(row)
        
data.insert(0,header) 


with open('2.csv','w') as csvfile:
    writer = csv.writer(csvfile)    
    for row in data:
        writer.writerow(row)
        
```





把B列，UTC时间hhmmss.sss 小时、分钟、秒 这个格式，之后将该表格导入ArcGIS Pro，即可呈现flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C9DzMnXGuRJ7LiAHu5_ES3l.png?x-oss-process=hzy)

![屏幕截图 2022-12-31 235055](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-12-31%20235055.png?x-oss-process=hzy)

CatCTF{GPS_M1ao}

## **Peekaboo【SOLVED】故里学长**

题目附件给的是不夜长安

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C-JaNoyl39GSbzMdaVEZsNS.png?x-oss-process=hzy)

其实是社工题，图片右下角有QQ空间图标加QQ号，搜索qq号看空间

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_JXvmEq11Kw4avx1sHunv6.jpeg?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C_stxFiLTxBR5LrFSNiRY_v.jpeg?x-oss-process=hzy)

然后也没得到啥有用的信息，蔡文姬试了不是，加好友也没同意，直接上bp爆破	，最终得到原来是百里玄策，所以flag为CatCTF{bailixuance}

## **CatFlag【SOLVED】故里学长**



看题目描述

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/AgAABcay3C9qiN29sRFNrYhahCweNvW7.png?x-oss-process=hzy)

附件下载之后直接cat flag得到flag

![image-20230101111608843](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/image-20230101111608843.png?x-oss-process=hzy)

CatCTF{!2023_Will_Be_Special,2022_Was_Not!}

## **Nepnep 祝你新年快乐啦！【SOLVED】故里**

看指定视频下面评论有flag

![image-20230101112044270](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/image-20230101112044270.png?x-oss-process=hzy)

CatCTF{H4ppy_n3w_y34r}

