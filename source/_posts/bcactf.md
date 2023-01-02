---
title: BCACTF
date: 2022-06-04 19:02:58
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---
国外的比赛，参加一些，多见见题型，大部分都是web，其他的也涉及了一点,就会这些。。。我还是fw，心态炸了。

<!--more-->

# Web

## real deal html

> I have just made the most ultimate html site. This site, this html. This is the real deal

看源代码得到flag

bcactf{tH4TZ_D4_R34l_D3Al_cb8949}

## Agent Rocket

> I need to launch the BCA CTF ROCKET to the moon! Unfortunately I lost my launch code (flag). You can find the launch code in the control panel.

![image8fdfe5d87124a95e.png](https://z4a.net/images/2022/06/04/image8fdfe5d87124a95e.png)

看源码得到提示，你说不是就不是了？我偏要试试

![image992e576d4752966a.png](https://z4a.net/images/2022/06/04/image992e576d4752966a.png)

成功登陆进去![imaged0577bc4699c96a1.png](https://z4a.net/images/2022/06/04/imaged0577bc4699c96a1.png)

没啥利用点，继续看源码，得到提示![image09b1e8eda8dc3982.png](https://z4a.net/images/2022/06/04/image09b1e8eda8dc3982.png)

一开始我在想控制面板的地址是啥，一直不知道，看到题目提示说在这个页面是进不去控制面板的，很不解，问了一下学长，需要修改UA头，得到flag

![image32c6aa7d5dd39981.png](https://z4a.net/images/2022/06/04/image32c6aa7d5dd39981.png)

bcactf{u53r_4g3Nt5_5rE_c0OL_1023}

## Three Step Trivia

> Us at BCACTF love staircases so much that we decided to make a trivia quiz about them! Are you a staircase expert? Can you solve all three steps?

> hint: The internet is a helpful resource

没啥巧，都是在网上直接搜

![imaged2569720154aa63f.png](https://z4a.net/images/2022/06/10/imaged2569720154aa63f.png)

第一个答案是7.75英尺![image547dbad65283e0dc.png](https://z4a.net/images/2022/06/10/image547dbad65283e0dc.png)



![image625256e12b5f5c04.png](https://z4a.net/images/2022/06/10/image625256e12b5f5c04.png)

但是只输入7却显示![image5cf92ff82129a400.png](https://z4a.net/images/2022/06/10/image5cf92ff82129a400.png)

猜想是前端校验，f12改一下![image42087ad431c746f8.png](https://z4a.net/images/2022/06/10/image42087ad431c746f8.png)

发送之后又得到个get请求，传7_75![image005343135968cad2.png](https://z4a.net/images/2022/06/10/image005343135968cad2.png)

第二题

![imagea6c4e0c536c00460.png](https://z4a.net/images/2022/06/10/imagea6c4e0c536c00460.png)

![image4c131c41f4c3992d.png](https://z4a.net/images/2022/06/10/image4c131c41f4c3992d.png)

直接get传11674，第三题![image5f43d1c18818c2f9.png](https://z4a.net/images/2022/06/10/image5f43d1c18818c2f9.png)

依然搜素，The **16th Avenue Tiled Steps** project has been a neighborhood collaboration to create a sea to stars themed mosaic flowing up a 163 **step** stairway located in San Francisco's Golden Gate Heights Neighborhood. 

没有提交按钮，f12看一下

```
<button type="submit" class="btn" style="visibility: hidden;">Submit</button>  // hidden-->visitibly
```

![imageb809ff1013ba70c1.png](https://z4a.net/images/2022/06/10/imageb809ff1013ba70c1.png)

```
bcactf{sT41r_c4A3_m45T3R_5jfUn9Z}
```

## Cookies

> Look, I made a website to teach you how to make cookies. There's some other recipes there too, and I made a super secure portal to add more.

主界面长这个样子

![image4a72e30b6e073f8f.png](https://z4a.net/images/2022/06/04/image4a72e30b6e073f8f.png)

目录里面有个admin，点进去发现是登陆后台的界面

![imaged3f96bb0d8591577.png](https://z4a.net/images/2022/06/04/imaged3f96bb0d8591577.png)

![image847c2cf74db009c4.png](https://z4a.net/images/2022/06/04/image847c2cf74db009c4.png)

看源代码，查看adminLog.js文件发现这段代码

```
function handleInput() {
    let uname=unameElem.value;
    if (uname != "admin") {
        alert("You're not admin");
        return;
    }

    let pwd = pwdElem.value;
    let encodedPwd = fancyEncode(pwd);

    setCookie("pwd", encodedPwd, 365);

    window.location.replace("adminEditor.html");

}

//dont worry about the intricacies of the setCookie and getCookie functions
//just understand what they do and how to use them 
```

说明用户名需要修改成admin，密码的话貌似随便就行，然后就可正常登陆进去。

但是这个用户名初始是Guest，不能直接改，用f12改一下就可以。

登陆进去之后是空白页面，应该就是cookie问题吧，继续查看源代码，发现两个js文件，看一下editor.js文件，发现下面这段代码

```
if (getCookie("pwd") == "98e99e97e99e116e102e123e117e36e101e114e115e95e115e51e51e95e99e48e48e107e33e101e115e95e55e111e111e95e56e54e51e111e52e116e53e125e") {
    window.location.replace("flag.html");
}
```

意思就是把pwd这个cookie的值改成这些就会出来flag.html的页面内容，修改刷新得到flag。

![image1ddf63b9d8870070.png](https://z4a.net/images/2022/06/04/image1ddf63b9d8870070.png)

bcactf{u$ers_s33_c00k!es_7oo_863o4t5}

# Misc

## Broken Image

> My friend said that he made a really cool drawing in MS Paint but I can't open it! Maybe my computer is broken? Or the image? I really don't know. Could you try opening it for me and telling me what it is?

下载个chall.svg,010查看是png格式，改后缀得到flag

![image3a21f45ebb84c46e.png](https://z4a.net/images/2022/06/04/image3a21f45ebb84c46e.png)

bcactf{br0k3n_1m4g3_4nd_1m4g3_4nd_1m4g3}

## My New Friend

附件一个图片，lsb得到flag

![imagedca1db2c6fa8636e.png](https://z4a.net/images/2022/06/04/imagedca1db2c6fa8636e.png)

bcactf{h15_n4m3_15_g3rb3rt_4798jU}

# pwn

## Intro 2 Pwn

> So... you want to learn how to pwn?

就是玩玩wpn，我不会，这个就是送分的，nc之后是这样![imagebee2cf1d4f79d3dd.png](https://z4a.net/images/2022/06/10/imagebee2cf1d4f79d3dd.png)

```
bcactf{theysay_aflagisworth100hamsters_8e7389bc}
```

