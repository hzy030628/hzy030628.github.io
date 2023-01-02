---
uuid: 8f299a12-2dd9-c38b-5369-716d8109ea56
title: misc部分解题软件命令记录
date: 2022-01-23 11:04:00
tags: 
      - misc
      - CTF
categories: 
      - [misc]
      - [CTF]
---

misc部分工具解题的命令记录，方便后续使用到的时候能找到，所以记录一下。

<!--more-->

# F5隐写

全称是F5-steganography

1.进入该文件夹后，需要将隐写的图片复制到文件夹里然后在空白处打开终端

2.java Extract图片的绝对路径是/123.jpg -p 123（这个-p后面输入的是密码，多半题目密码就是图片名，还有一定要用绝对路径）

3.这个时候在文件夹中找到并打开output.txt文件即可得到

## steghide工具

将post.txt文件隐藏到xxx.jpg中：
steghide embed -cf xxx.jpg -ef post.txt -p 123456（不加-p参数 不设置密码 ）
从xxx.jpg解出post.txt:
steghide extract -sf xxx.jpg （图片路径）-p 123456（-p 密码）
steghide也可以用来爆破密码：
需要shell脚本：`#bruteStegHide.sh

```
   #bruteStegHide.sh
   #!/bin/bash

for line in `cat $2`;do
steghide extract -sf $1 -p $line > /dev/null 2>&1
if [[ $? -eq 0 ]];then
echo 'password is: '$line
exit
fi
done
```

用法：
\# ./bruteStegHide.sh test.jpg passwd.txt
剩下的密码就出来了。

## 文件分离工具（binwalk,foremost）

## binwalk

binwalk -D “archive:zip” -D “image:jpg” hehe.jpg 可以直接分离文件

> 也可以使用dd命令分离文件，如:`dd if=hehe.jpg of=hehe1.zip bs=1 skip=54163`

## foremost的使用

先用`foremost -h`检查一下是否已经安装，若安装之后会显示

```
$ foremost [-v|-V|-h|-T|-Q|-q|-a|-w-d] [-t <type>] [-s <blocks>] [-k <size>] 
    [-b <size>] [-c <file>] [-o <dir>] [-i <file] 

-V  - 显示版权信息并退出
-t  - 指定文件类型.  (-t jpeg,pdf ...) 
-d  -打开间接块检测 (针对UNIX文件系统) 
-i  - 指定输入文件 (默认为标准输入) 
-a  - 写入所有的文件头部, 不执行错误检测(损坏文件) 
-w  - 向磁盘写入审计文件，不写入任何检测到的文件
-o  - 设置输出目录 (默认为为输出)
-c  - 设置配置文件 (默认为 foremost.conf)
-q  - 启用快速模式. 在512字节边界执行搜索.
-Q  - 启用安静模式. 禁用输出消息. 
-v  - 详细模式. 向屏幕上记录所有消息。
```

使用方法就是将图片放进foremost目录下，输入命令：

```
 foremost -i xxx.jpg
```

在目录下会出现一个output文件夹，结果就在里面。
