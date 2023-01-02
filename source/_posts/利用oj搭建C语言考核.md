---
title: 利用OJ搭建C语言比赛平台
date: 2022-06-09 19:28:01
tags: 
      - CTF
categories: 
      - 漏洞测试环境搭建
---

下一届实验室的C语言考核平台的搭建

![imageabdeef81597754c7.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648267.png?x-oss-process=hzy)

<!--more-->

# 安装依赖环境

ubuntu系统用户：

```shell
 sudo apt-get update && sudo apt-get install -y vim python-pip curl git
 pip install docker-compose
```

centos系统用户：

```shell
 yum update && yum install -y vim python-pip curl git
 pip install docker-compose
```

# 安装docker

```
sudo curl -sSL https://get.daocloud.io/docker | sh
```

# 安装OJ

## 克隆源码

```
  git clone -b 2.0 https://github.com/QingdaoU/OnlineJudgeDeploy.git && cd OnlineJudgeDeploy
```

## 启动docker

```
docker-compose up -d    // ROOT
```

# 可能遇到的问题

## 问题一

![image8c7a4b216534400c.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648185.png?x-oss-process=hzy)

错误出现的原因是，之前启动的 [docker](https://so.csdn.net/so/search?q=docker&spm=1001.2101.3001.7020)-compose 没有关闭。

## 解决方法

先把之前的 docker-compose 关闭

```python
docker-compose down
1
```

之后再执行

```python
docker-compose up
```

![imagec72cd8d7a675f2e2.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648356.png?x-oss-process=hzy)

## 问题二

一般情况默认端口都是80和443，但是这两个端口一般都是占用过了，所以需要修改

## 解决办法

```
vim docker-compose.yml
```

最下面的端口改一下

# 出题方法

[关于oj导入题库简单介绍](https://blog.csdn.net/qq_43516113/article/details/101517639)

# 至此CTF和C语言的考核平台都搭建完成了

![imaged09d0ae16b493475.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241648026.png?x-oss-process=hzy)