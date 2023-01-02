---
title: 利用Docker部署web题目
date: 2022-06-07 21:28:01
tags: 
      - CTF
categories: 
      - [漏洞测试环境搭建]
      - [CTF]
---
记录一下使用docker出题的过程

![image693c2ec4ce219022.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/20220624163835.png?x-oss-process=hzy)

<!--more-->

# 什么是Docker

Docker 是一个开源的应用容器引擎，基于Go 语言并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

一个完整的Docker有以下几个部分**组成**：

1. DockerClient客户端
2. Docker Daemon守护进程
3. Docker Image镜像
4. DockerContainer容器

# Docker安装

```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

# Docker使用

使用之前先启动docker

```
systemctl start docker
```

然后拉取docker镜像

```
docker search lamp
```

![image14304ce2a02df540.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/20220624163903.png?x-oss-process=hzy)

> 参数说明：
>
> NAME: 镜像仓库源的名称
>
> DESCRIPTION: 镜像的描述
>
> OFFICIAL: 是否 docker 官方发布
>
> stars: 推荐指数
>
> AUTOMATED: 自动构建。

使用 docker pull 命令来载入镜像

```
docker pull mattrayner/lamp
```

下载之后就可查看镜像看到你下载的那个

![image95df70202579b0d2.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241645734.png?x-oss-process=hzy)

有这个镜像之后就可以开始创建容器

获取所有容器信息

```
images ps -a
```

创建容器

```
docker create -p 5001:80 --name sign-in mattrayner/lamp
```

> 这个5001就是映射端口 
>
> sign-in是自己起的容器名

启动容器

```
docker start sign-in
```

这个时候访问5001端口就能看到启动成功，显示对应的镜像首页

比如我这个是这样的![image2250ba84226ecc41.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241645528.png?x-oss-process=hzy)

接下来将题目复制到容器里面

```
docker cp ./sign-in/* sign-in:/var/www/html
```

使用下面这个命令可以直接进入容器进行相关修改

```
docker exec -it 04fc bash
//但是这个要保证容器前四位不能有一样的
```

![imageb6010bb7b6b8e69c.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241645520.png?x-oss-process=hzy)

但是这个时候还是只能显示镜像主页，我们需要把那个页面给删除，也就是图上的index.php

> 可能会用到以下几个命令(包括但不限于这些)：
>
> 删除文件     rm -f 文件名
>
> 删除文件夹    rm -rf 文件夹名
>
> 新建文件 cat > 文件名

这个时候再访问端口就可以看到题目部署完成

为了能随时让大家访问到该站点，采用后台启动方式

```
[root@localhost CTFd]# pwd
/root/CTFd-3.5.0
[root@localhost CTFd]# nohup python3 serve.py &
[1] 7129
[root@localhost CTFd]# nohup: 忽略输入并把输出追加到"nohup.out"

[root@localhost CTFd]#
```

![image9e6aeb29b3e415c7.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241646602.png?x-oss-process=hzy)

> [nohup 命令](https://www.runoob.com/linux/linux-comm-nohup.html)
>
> **nohup** 英文全称 no hang up（不挂起），用于在系统后台不挂断地运行命令，退出终端不会影响程序的运行。
>
> 语法格式:   nohup Command [ Arg … ] [　& ]
>
> **Command**：要执行的命令。
>
> **Arg**：一些参数，可以指定输出文件。
>
> **&**：让命令在后台执行，终端退出后命令仍旧执行。

就·如同上边我用的这个命令来后台运行这个程序，给我的返回

```
appending output to nohup.out
```

可以看到生成了 nohup.out 文件![imagef5980e7715a7f8ed.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202206241646933.png?x-oss-process=hzy)

如果要停止运行，需要使用以下命令查找到 nohup 运行脚本到 PID，然后使用 kill 命令来删除：

```
ps -aux | grep "runoob.sh" 
```

参数说明：

- **a** : 显示所有程序

- **u** : 以用户为主的格式来显示

- **x** : 显示所有程序，不区分终端机

另外也可以使用 **ps -def | grep "runoob.sh**" 命令来查找。

找到 PID 后，就可以使用 kill PID 来删除。

```
kill 10632  进程号PID
```

鉴于考核还未开始，所以把题目测试完之后关闭所有容器，用到这个命令

```
docker stop $(docker ps -a | awk '{ print $1}' | tail -n +2)
```

一键开启使用下面这个命令

```
docker start $(docker ps -a | awk '{ print $1}' | tail -n +2)
```



# 靶场优化

解决CTFd页面访问慢的问题

原因是用了一个all.css。这个样式文件是从外网加载过来的。修改一下网址即可实现快速加载。这个样式文件的位置在：/CTFd/CTFd/themes/core/static/css下的fonts.dev.css
将
`@import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css)');`
替换为
`@import url('https://cdn.bootcss.com/font-awesome/5.13.0/css/all.css');`
然后重新启动docker
`systemctl restart docker`

# 其他常用命令

停止某个容器

```
docker stop +id
```

停止docker服务

```
systemctl stop docker
```

修改某一个容器对应的端口

```
cd /var/lib/docker/containers/bf96392335e8*
```

```
vim hostconfig.json
```

进去之后大致是这样的

```
{"Binds":null,"ContainerIDFile":"","LogConfig":{"Type":"journald","Config":{}},"NetworkMode":"default","PortBindings":{"8080/tcp":[{"HostIp":"","HostPort":"8888"}]},"RestartPolicy":{"Name":"no","Ma
ximumRetryCount":0},"AutoRemove":false,"VolumeDriver":"","VolumesFrom":null,"CapAdd":null,"CapDrop":null,"Dns":[],"DnsOptions":[],"DnsSearch":[],"ExtraHosts":null,"GroupAdd":null,"IpcMode":"","Cgro
up":"","Links":[],"OomScoreAdj":0,"PidMode":"","Privileged":false,"PublishAllPorts":false,"ReadonlyRootfs":false,"SecurityOpt":null,"UTSMode":"","UsernsMode":"","ShmSize":67108864,"Runtime":"docker
-runc","ConsoleSize":[0,0],"Isolation":"","CpuShares":0,"Memory":0,"NanoCpus":0,"CgroupParent":"","BlkioWeight":0,"BlkioWeightDevice":null,"BlkioDeviceReadBps":null,"BlkioDeviceWriteBps":null,"Blki
oDeviceReadIOps":null,"BlkioDeviceWriteIOps":null,"CpuPeriod":0,"CpuQuota":0,"CpuRealtimePeriod":0,"CpuRealtimeRuntime":0,"CpusetCpus":"","CpusetMems":"","Devices":[],"DiskQuota":0,"KernelMemory":0
,"MemoryReservation":0,"MemorySwap":0,"MemorySwappiness":-1,"OomKillDisable":false,"PidsLimit":0,"Ulimits":null,"CpuCount":0,"CpuPercent":0,"IOMaximumIOps":0,"IOMaximumBandwidth":0}
```

找到

```
“PortBindings”:{“8080/tcp”:[{“HostIp”:"",“HostPort”:“8888”}]}
```

> HostPort的值就是端口映射，改成需要的保存退出即可
> 如果这样还是不行的话，那就是config.v2.json也记录了端口，把这个也修改一下爱就可以了

> 在进行修改端口的过程中需要先把这个容器停掉

启动docker

```
systemctl start docker
```

启动镜像

```
docker start bf96392335e8
```

> 访问出现502状态码的解决办法:
>
> 原因：502是报错类型代码bad gateway错误的网关
>
> 1.DNS缓冲，可以尝试cmd下使用`ipconfig /flushdns`刷新一下DNS缓冲
>
> 2.CTRL+F5强制刷新
>
> 刷新的原理 ：很多人可能不知道 刷新也是有两种的。所谓刷新其实就是从服务器下载数据到本地的硬盘浏览器, 再从本地硬盘种读取数据到浏览器显示给我们看。 　　
>
> ①基本刷新：就是点击刷新或者使用F5快捷键,基本刷新只是从本地的硬盘重新拿取数据到浏览器，并不重新向服务器发出请求。大部分用户很多时候都是这样刷新的，遇到502报错的就没有任何效果。 　　
>
> ②从服务器刷新： 如果你重新直接点击你想要浏览的网页链接，你会发现刚才还是显示502 bad getway的页面现在又可以正常浏览了！明白道理了吧？当你点击你想要浏览的网页链接的时候，是会从服务器重新下载数据的。 解决方法就是从服务器上刷新：快捷键 ctrl+F5，这样就是重新向服务器发送请求了。如果服务器能正常给予你响应你就可以看到页面了。

> ```bash
> # 基本操作
> docker run -d -p 物理端口1:容器端口1 -p 物理端口2:物理端口2 --name 容器名 <image-name>:<tag>
> docker exec -it 容器名/ID bash
> 
> # 磁盘挂载
> docker run -d -p 8080:80 -v 本机路径:容器路径 --name 容器名  <image-name>:<tag>
> 
> # 容器打包镜像
> docker commit -a "作者" -m "备注" 容器ID <image-name>:<tag>
> 
> # 物理机拷贝到容器
> docker cp test.txt 容器ID:/var/www/html
> 
> # 容器拷贝到物理机
> docker cp 容器ID:/var/www/html/test.txt 物理机路径
> 
> # 查看容器 COMMAND
>  docker ps -a --no-trunc
> 
> # 停止所有容器 以此类推
> docker stop $(dokcer ps -aq)
> 
> # 将容器打包成规范的镜像
> docker commit <exiting-Container> <hub-user>/<repo-name>[:<tag>]
> 
> # 将镜像修改成规范的镜像
> docker tag <existing-image> <hub-user>/<repo-name>[:<tag>]
> 
> # 登录 Docker Hub
> docker login
> 
> # 上传推送镜像到公共仓库
> docker push <hub-user>/<repo-name>:<tag>
> 
> # 当前目录的 Dockerfile 创建镜像
> docker build -t <image-name>:<tag> . 
> 
> # 指定文件构建镜像
> docker build -f /path/to/a/Dockerfile -t <image-name>:<tag> .
> 
> # 将镜像保存 tar 包
> docker save -o image-name.tar <image-name>:<tag>
> 
> # 导入 tar 镜像
> docker load --input image-name.tar
> 
> # docker-compose 命令相关
> ## 基本操作
> docker-compose up -d
> 
> ## 关闭并删除容器
> docker-compose down
> 
> ## 开启|关闭|重启已经存在的由docker-compose维护的容器
> docker-compose start|stop|restart
> 
> ## 运行当前内容，并重新构建
> docker-compose up -d --build
> ```

其次我还在网上看到了这个方法，原理如下

> /[www/server/php/80/etc/php-fpm.conf](https://blog.csdn.net/qappleh/article/details/www/server/php/80/etc/php-fpm.conf) request_terminate_timeout = 100 //  100-->5

[php-fpm超时时间设置request_terminate_timeout资源问题分析](https://cloud.tencent.com/developer/article/1723651)

对此我不知道原理的说一句，貌似不要科学上网就不会出现502

这里附上国光的文章，对docker写的很详细

[Docker入门简明教程](https://www.sqlsec.com/2017/01/docker.html#toc-heading-10)
