---
uuid: 09671828-be60-935a-2a16-c06ae94f1928
title: 新版next置换
date: 2022-01-18 15:43:40
tags: 
      - 博客
      - next主题失效
categories: 博客相关问题类
---

当旧版next主题失效时该怎么办

<!--more-->

写这篇文章主要是害怕哪天自己的博客炸了，一时找不到解决办法，所以先写好以备不时之需。

# 导入主题

```
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

然后打开站点配置，在theme里将landscape改为next，language把en修改成zh-CN。

# 基础配置

在themes\next中的_config.yml中进行编辑

```
menu:
  home: / ||fa fa-home
  #about: /about/ || user
  tags: /tags/ ||fa fa-tags
  categories: /categories/ ||fa fa-th
  archives: /archives/ ||fa fa-archive
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
  links: /links/ ||fa fa-link
```

文章分段栏

```
toc:
  enable: true #改成true以启用
  number: true #自动生成编号
  # 以下默认
  wrap: false
  expand_all: false
  max_depth: 6
```

联系方式

```
social:
  #GitHub: https://github.com/HZY030628 || github
  E-Mail: mailto:2596328958@qq.com || envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  #Twitter: https://twitter.com/yourname || fab fa-twitter
  #FB Page: https://www.facebook.com/yourname || fab fa-facebook
  #StackOverflow: https://stackoverflow.com/yourname || fab fa-stack-overflow
  #YouTube: https://youtube.com/yourname || fab fa-youtube
  #Instagram: https://instagram.com/yourname || fab fa-instagram
  #Skype: skype:yourname?call|chat || fab fa-skype
```

头像

```
avatar:
  # Replace the default image and set the url here.
  url: /images/avatar.png
  # If true, the avatar will be dispalyed in circle.
  rounded: true #若为true，则头像为圆形
  # If true, the avatar will be rotated with the cursor.
  rotated: true #若为true，则鼠标碰到头像时旋转
```

头像跟标签页图标一样，需要把图片复制粘贴到image中，再修改文件名。

