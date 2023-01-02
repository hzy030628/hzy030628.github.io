---
uuid: 5597a0ed-6c91-d58a-1640-b7162eb0a6ed
title: bugcf里的一个游戏题
date: 2022-03-05 10:52:55
tags:
      - bugctf
      - CTF
      - Web
categories: 
      - [Web]
---
闲着无聊，比赛的题太难，闲来无趣做一个游戏题玩玩。

<!--more-->

![image-20220305105426370](https://img-blog.csdnimg.cn/img_convert/3824b1a40e7bd88d03c28707e0bbe6cd.png)

就是一个盖楼的游戏，随着分数的不断增加，摇摆速度不断加快，想通过过关游戏获得flag还是有点难度的，反正我做不到。

首先想到的是bp抓包然后修改成绩，从而过关，因为要修改的是最后的成绩数据，所以抓的包应该是游戏结束那一瞬间的包。

![image-20220305105630196](https://img-blog.csdnimg.cn/img_convert/372352e305e6b3599b15b628713fbc6e.png)

这里说一下，我们可以看到get的有三个数据，第一个就是成绩，那么我们先把成绩修改高点，最后一个要求是有base64加密的，那么先把抓包的原始数据删除，然后把对应的修改的成绩进行base64加密，然后再放到第三个参数的数据，然后send，得到flag！
