---
uuid: fc7cedb1-122b-6350-07ab-a3a128711b4d
title: nmap常用操作
date: 2022-04-11 22:15:21
tags:
    - 渗透
categories: 
    - [渗透]
---

**nmap是扫描端口不可或缺的一个工具，在这里记录一下，方便后续使用!**

<!--more-->

### nmap输出的端口状态

1. Open（开放的）： 意味着目标机器上的应用程序正在该端口监听连接/报文
2. Filtered（被过滤的）：意味着防火墙，过滤器或者其他网络障碍阻止了该端口被访问，Nmap无法得知它的真实状态。当nmap收到icmp报文主机不可达报文或者目标主机无应答，常常会将目标主机的状态设置为filtered。
3. Closed（关闭的）：端口上面没有应用程序监听，但它们随时可能开放。
4. Unfiltered（未被过滤的）： 这种状态和filtered的区别在于：unfiltered的端口能被nmap访问，但是nmap根据返回的报文无法确定端口的开放状态，而filtered的端口不能被nmap访问。只有用于映射防火墙规则集的ACK扫描才会把端口分类到这种状态。
5. Open|filtered状态： 这种状态主要是nmap无法区别端口处于open状态还是filtered状态。 UDP，IP协议， FIN，Null，和Xmas扫描可能把端口归入此类。
6. Closed|filtered状态 ：这种状态主要出现在nmap无法区分端口处于closed还是filtered时。此状态只会出现在IP ID idle scan。

### nmap语法

我们在使用Nmap的时候大多是在命令行下进行的，即使是使用可视化Zenmap也是需要遵循Nmap固定的语法格式的。
Nmap的固定语法格式如下：

```bash
nmap 【空格】【选项|多选项|协议】【空格】【目标】
```

ps：*所有的选项与命令及选项参数都是用空格进行分割的，有时候选项与参数直接可以不用空格分割，如-p80，-p是选项，80是参数。为了使Nmap语法更加严谨，建议严格按照空格进行分割*

#### 全面扫描：

```bash
nmap -A 目标  //指定IP或域名的所有端口及其目标系统信息等，耗时会有点长。
```

#### 扫描指定段：`例：nmap 192.168.126.1-200`

#### 扫描整个C段：`例：nmap 192.168.126.0/24`

### nmap基本选项及解释

#### 主机发现：

| 选项        | 解释                 |
| :---------- | :------------------- |
| -sP（-sn）  | Ping扫描，不扫描端口 |
| -P0         | 无Ping扫描           |
| -PS         | TCP SYN Ping 扫描    |
| -PA         | TCP ACK Ping 扫描    |
| -PU         | UDP Ping 扫描        |
| -PE；PP；PM | ICMP PINg Types 扫描 |
| -PR         | ARP Ping 扫描        |
| -n          | 禁止DNS反向解析      |
| -R          | 反向解析域名         |
| –system-dns | 使用系统域名解析器   |
| -sL         | 列表扫描             |
| -6          | 扫描IPv6地址         |
| –traceroute | 路由跟踪             |
| -PY         | SCTP INIT Ping 扫描  |

#### 端口扫描

| 选项          | 解释                            |
| :------------ | :------------------------------ |
| -T            | 时序扫描                        |
| -T            | 时序扫描                        |
| -p            | 端口扫描顺序                    |
| -F            | 快速扫描                        |
| -r            | 排序                            |
| –top-ports    | 扫描开放概率最高的1000个TCP端口 |
| –port-ratio   | 扫描一定概率以上的端口          |
| -sS           | TCP SYN 扫描                    |
| -sT           | TCP 连接扫描                    |
| -sU           | UDP 扫描                        |
| -sN；sF；sX； | 隐蔽扫描                        |
| -sA           | TCP ACK扫描                     |
| -sW           | TCP 窗口扫描                    |
| -sM           | TCP Maimon 扫描                 |
| –scanflags    | 自定义扫描                      |
| -sI           | 空闲扫描                        |
| -sO           | IP 协议扫描                     |
| -b            | FTP Bounce 扫描                 |

#### 指纹识别

| 选项                 | 解释                                                   |
| :------------------- | :----------------------------------------------------- |
| -sV                  | 版本探测                                               |
| –allports            | 全端口版本探测                                         |
| –version-intensity   | 设置扫描强度（0~9,默认为7）                            |
| –version-light       | 轻量级扫描（即强度设置为2）                            |
| –version-all         | 重量级扫描（即强度设置为9）                            |
| –version-trace       | 获取详细版本信息                                       |
| -sR                  | RPC扫描                                                |
| -O                   | 启用操作系统探测                                       |
| –osscan-limit        | 对指定的目标进行操作系统探测（需要配合-O或-A选项使用） |
| -osscan-guess;–fuzzy | 推测系统识别                                           |

#### 定时选项

| 选项                 | 解释                   |
| :------------------- | :--------------------- |
| –min-hostgroup       | 调整并行扫描组的大小   |
| –max-hostgroup       | 调整并行扫描组的大小   |
| –min-parallelism     | 调整探测报文的并行度   |
| –max-parallelism     | 调整探测报文的并行度   |
| –min-rtt-timeout     | 调整探测报文超时       |
| –max-rtt-timeout     | 调整探测报文超时       |
| –initial-rtt-timeout | 调整探测报文超时       |
| -host-timeout        | 放弃低速目标主机       |
| –scan-delay          | 调整探测报文的时间间隔 |
| –max-scan-delay      | 调整探测报文的时间间隔 |

#### 逃避防火墙/IDS

| 选项                                 | 解释                                                         |
| :----------------------------------- | :----------------------------------------------------------- |
| -f                                   | 报文分段                                                     |
| –mtu                                 | 指定偏移大小（偏移量必须是8的倍数）                          |
| -D 【decoy1，decoy2… or RND:number】 | IP欺骗（进行版本检测或TCP扫描时无效）                        |
| -sI                                  | 源地址欺骗                                                   |
| –source-port                         | 源端口欺骗                                                   |
| –data-length                         | 指定发包长度                                                 |
| –randomize-hosts                     | 目标主机随机排序                                             |
| –spoof-mac                           | MAC地址欺骗（0：随机生成一个MAC地址，MAC Address：手动指定一个MAC地址，Vendor Name：从指定厂商生成一个MAC地址） |

#### 信息收集

| 选项                                | 解释                          |
| :---------------------------------- | :---------------------------- |
| –script ip-geolocation-*            | IP信息搜集                    |
| whois                               | whois查询                     |
| http-email-harvest                  | 搜集E-mailxnxi                |
| hostmap-ip2hosts                    | IP反查                        |
| dns-brute                           | DNS信息sbji                   |
| membase-http-info                   | 检索系统信息                  |
| smb-securi-mode.nse                 | 后台打印机服务漏洞            |
| smb-check-vulns.nse                 | 系统漏洞扫描                  |
| http-stored-xss.mse                 | 扫描web漏洞                   |
| snmap-win32-services                | 通过Snmap列举Windows服务/账户 |
| dns-brute                           | 枚举DNS服务器的主机名         |
| http-headers/http-sitemap-generator | HTTP信息搜集                  |
| ssl-enum-ciphers                    | 枚举SSL密钥                   |
| ssh-hostkey                         | SSH服务密钥信息探测           |

#### nmap数据库渗透测试

| 选项                  | 解释              |
| :-------------------- | :---------------- |
| mysql-databases       | MySQL列举数据库   |
| mysql-variables       | 列举MySQL变量     |
| mysql-empty-password  | 检查MySQL密码     |
| mysql-brute           | 审计MySQL密码     |
| mysql-audit           | 审计MySQL安全配置 |
| oracle-brute          | 审计Oracle密码    |
| ms-sql-brute          | 审计MSSQL密码     |
| ms-sql-empty-password | 检查MSSQL空密码   |
| ms-sql-tables         | 读取MSSQL数据     |
| ms-sql-xp-cmdshell    | MSSQL执行系统命令 |
| pgsql-brute           | 审计Pgsql密码     |

#### nmap渗透测试

| 选项                                                         | 解释              |
| :----------------------------------------------------------- | :---------------- |
| http-brute                                                   | 审计HTTP身份验证  |
| ftp-brute                                                    | 审计ftp服务器     |
| http-wordpress-brute                                         | 审计WordPress程序 |
| http-joomla-brute                                            | 审计Joomla程序    |
| pop3-brute                                                   | 审计邮件服务器    |
| smb-brute.nse                                                | 审计SMB口令       |
| vnc-brute                                                    | 审计VNC服务器     |
| smtp-brute                                                   | 审计SMTP服务器    |
| stuxnet-detect                                               | 检测Stuxnet蠕虫   |
| snmp-netstat；snmp-processes；snmp-win32-services；snmp-brute | SNMP服务安全审计  |

#### nmap技巧

| 选项          | 解释               |
| :------------ | :----------------- |
| –send-eth     | 发送以太网数据包   |
| –send-ip      | 网络层发送         |
| –privileged   | 嘉定拥有所有权     |
| –interactive  | 在交互模式中启动   |
| -V            | 查看nmap版本号     |
| -d            | 设置调试级别       |
| –packet-trace | 跟踪发送接受的报文 |
| –iflist       | 列举接口和路由     |
| -e            | 指定网络接口       |
| -oG           | 继续中断扫描       |
| firewalk      | 探测防火墙         |
