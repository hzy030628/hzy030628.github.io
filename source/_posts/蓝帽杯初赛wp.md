---
title: 第六届蓝帽杯初赛
date: 2022-07-09 22:36:39
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---



![image-20220709225327592](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207092253814.png?x-oss-process=hzy)

<!--more-->

今天打了一天这个比赛，也是第一次接触取证题发现还可以接受,这个比赛拿了个稍微好点的成绩，但是身为web手两个web题都没写出来，说来有点惭愧，也进了半决赛,再接再厉吧

![image-20220709225526962](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207092255149.png?x-oss-process=hzy)

# misc

## domainhacker

流量导出数据压缩包

![image-20220709090851162](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207090908250.png?x-oss-process=hzy)

解压需要密码，在这找到base64解码

![image-20220709091234727](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207090912798.png?x-oss-process=hzy)

![image-20220709091342563](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207090913620.png?x-oss-process=hzy)

解压密码为SecretsPassw0rds

然后分析得到flag

![image-20220709091415666](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207090914728.png?x-oss-process=hzy)

flag{416f89c3a5deb1d398a1a1fce93862a7}

## domainhacker2

首先流量分析获得base64加密的压缩命令，从中可以得到解压密码

![image-20220709134500768](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091345175.png?x-oss-process=hzy)

![image-20220709134544370](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091345427.png?x-oss-process=hzy)

即解压密码是FakePassword123$，解压压缩包发现是注册表文件

用[DSInternals](https://github.com/MichaelGrafnetter/DSInternals/releases/download/v4.7/DSInternals_v4.7.zip)将文件从 Active Directory 数据库中检索有关单个帐户的信息

```
$key = Get-BootKey -SystemHiveFilePath 'C:\Users\25963\Desktop\new\Active Directory\SYSTEM'
```

```
Get-ADDBAccount -ALL -DBPath "C:\Users\25963\Desktop\new\Active Directory\ntds.dit" -BootKey $key
```

![image-20220709134823665](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091348729.png?x-oss-process=hzy)

得到flag为flag{07ab403ab740c1540c378b0f5aaa4087}

# 电子取证

## 手机取证_1

下载附件进去一把梭，直接搜索图片名得到图片

![image-20220709102729426](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091027558.png?x-oss-process=hzy)

![image-20220709102751110](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091027158.png?x-oss-process=hzy)

所以最终答案是360x360

## 手机取证_2

搜素姜总得到关键信息

![image-20220709104451004](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091044127.png?x-oss-process=hzy)

所以结果是SF1142358694796

## 程序分析_1

先把附件进行反编译

```
apktool.bat d EXE.apk
```

![image-20220709151340386](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091513477.png?x-oss-process=hzy)

得到AndroidManifest.xml，发现程序包名![image-20220709151440024](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091514079.png?x-oss-process=hzy)

即flag为exec.azj.kny.d.c

## 程序取证_2

继第一题，第二题，第一个显示的activity就是在xml配置中的入口，查看得到如下

```
<activity android:enabled="false" android:label="@string/app_w_name" android:name="minmtta.hemjcbm.ahibyws.MainActivity" android:screenOrientation="portrait">
```

![image-20220709154200919](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091542992.png?x-oss-process=hzy)

即flag为minmtta.hemjcbm.ahibyws.MainActivity

## 程序分析_3

首先进行反编译，审计源码得到关键代码

![image-20220709162612137](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091626230.png?x-oss-process=hzy)

分析后得服务器地址的密文就是aHR0cHM6Ly9hbnNqay5lY3hlaW8ueHl6

即flag

## 计算机取证_1

直接导出用户哈希，taqi7的hash值是7f21caca5685f10d9e849cc84c340528

```
volatility.exe -f 1.dmp --profile=Win7SP1x64 hashdump
```

![image-20220709165019266](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091650328.png?x-oss-process=hzy)

解密得到开机密码![image-20220709165245843](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091652888.png?x-oss-process=hzy)

所以flag为anxinqi

## 计算机取证_2

先获取内存操作系统

```
volatility -f 1.dmp imageinfo
```

![image-20220709120844206](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091208284.png?x-oss-process=hzy)

内存网络扫描，进程列举，审计进程确定是MagnetRAMCaptu.exe

![image-20220709120636820](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091206981.png?x-oss-process=hzy)

即pid是2192

## 计算机取证_3

首先将1.dmp和G.E01放到Passware Kit Forensic 2021 v1 (64-bit)中进行解密并提取得到线索

![image-20220709183218465](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091832563.png?x-oss-process=hzy)

发现ppt和word文档都需要密码，爆破word文档密码得到为688561

pptx密码为287fuweiuhfiute

![image-20220709183405263](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091834324.png?x-oss-process=hzy)

输入发现只能只读模式打开，打开后得到flag

![image-20220709183418862](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091834985.png?x-oss-process=hzy)

flag{b27867b66866866686866883bb43536}

## 网站取证_1

下载附件放D盾扫一下，得到assert后门一句话木马

![image-20220709140219719](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091402806.png?x-oss-process=hzy)

所以flag是lanmaobei666

## 网站取证_2

www文件拉入vs审计，全局搜索password，经筛选发现database.php关键函数（pgsql数据库配置）

![image-20220709155407343](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091554426.png?x-oss-process=hzy)

跟随函数，发现加密的密码

![image-20220709155513940](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091555027.png?x-oss-process=hzy)

分析一下得到解密过程

密文先进行base64解密之后再进行AES解密，其中相关数据如下：

```
密文是$str = 'P3LMJ4uCbkFJ/RarywrCvA==';
密钥是$key = 'PanGuShi';
偏移量是	Iv（UTF-8）：130f028b5c4b9e1b
填充采用ZeroPadding
模式采用CBC
```

解密后得到数据库连接的明文密码

![image-20220709160320205](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091603277.png?x-oss-process=hzy)

所以flag为KBLT123

## 网站取证_3

首先通过数据库交易信息得到表名![image-20220709161111807](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091611892.png?x-oss-process=hzy)锁定目标文件是WWW\application\admin\controller\Channelorder.php

![image-20220709160812796](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091608866.png?x-oss-process=hzy)

![image-20220709160843059](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091608133.png?x-oss-process=hzy)

审计发现关键key即为数据库金额加密混淆使用的盐值

即flag为jyzg123456

## 网站取证_4

分析数据库，发现张宝和王子豪分别是id3和id5，所以也就是id3转账id5，以这样的形式

```
INSERT INTO "public"."tab_channel_order_list" VALUES (3662, '307325933084', 'GG币', NULL, '2022-04-23 03:45:09', 4, 5, 'mpRrlWhm');
```

顺序是收款人-->付款人

![image-20220709165339271](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091653337.png?x-oss-process=hzy)

同时在数据库文件内可以找到相关交易记录

![image-20220709163316997](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091633111.png?x-oss-process=hzy)

将记录dump一下，并整理出3-->5的交易数据

![image-20220709164038622](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091640699.png?x-oss-process=hzy)

这是相关汇率

![image-20220709164516572](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091645657.png?x-oss-process=hzy)

发现整理太麻烦，直接脚本里加个过滤吧

```
import hashlib
import base64
def decrypt(data):
    data = base64.b64decode(data)
    mystr = ''
    for i in range(6):
        temp = data[i] - ord(key[i])
        mystr += chr(temp)
    # print(mystr)
    return mystr
key = hashlib.new('md5', b'jyzg123456').hexdigest()[:6]
# print(key)
bargain = [0.04, 0.06, 0.05, 0.07, 0.10, 0.15, 0.17, 0.23, 0.22, 0.25, 0.29, 0.20, 0.28, 0.33, 0.35, 0.35, 0.37]
fileme = open("./jy.txt", "r").readlines()
sum = 0
for i in fileme:
    if "', 5, 3, '" in i:
        temp = i.strip().split()
        date = int(temp[0][-2:])       
        data = temp[-1].replace('\'','')
        # print(date, data)
        sum += (int(decrypt(data)) * bargain[date-2])
        # print(sum)
        # input()
    else:
        pass
print(sum)
```

运行得到总和

![image-20220709165540641](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207091655693.png?x-oss-process=hzy)

即flag为15758353.760000002。交了发现不对，因为是rmb，只到小数点后两位，所以最终flag是15758353.76