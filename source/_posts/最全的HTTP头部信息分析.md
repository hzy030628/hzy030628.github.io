---
uuid: 6c886f14-900a-347f-7918-ab217d1d8035
title: HTTP头部信息分析
date: 2022-02-05 14:18:55
tags: 
    - HTTP头部信息分析
    - Web
    - CTF
categories: 
    - [Web]
---
HTTP头部信息分析

<!--more-->

# 概述

HTTP得头域包括通用头，请求头，响应头和实体头四个部分，每个头域都由一个域名，冒号和域值三部分组成。

- 通用头部：指的是可以应用于请求和响应中，但是不能应用于消息内容自身的HTTP首部，取决于应用的上下文环境，通用首部可以是响应头部或者请求头部，但是不可以是实体头部。

- 最常见的通用首部包括：Date，Cache-Control，Connection

- 请求头部：是请求报文特有的，并且和请求主体无关。比如客户端希望接收到什么类型的数据，像Accept头部。

> 并非所有出现在请求中的HTTP首部都属于请求头，例如在POST请求中经常出现的Content-Length实际上是一个代表请求主体大小的entity header，当然这也可以叫做请求头。

下面这就是一个HTTP请求的请求头：

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

严格来说下面这个例子中的 Content-Length 不是一个请求头，而是一个实体头（entity header）：

```
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128    //实际是请求的body长度
```

- 响应头部：被用于http响应中并且和响应消息主体无关的那一类HTTP header。[详细的在这](https://developer.mozilla.org/zh-CN/docs/Glossary/Response_header)像Age，Location和Server都属于响应头，他们都用于描述响应。

> 并非所有出现在响应中的http header都属于响应头，例如Content- Length就是一个代表响应体消息大小的entity header，当然也是可以叫他响应头的。

下边这个就是GET请求的响应头，需要注意的是严格来说，Content-Encoding和Content-Type都属于entity headers(实体头部)。

```
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

- 实体头部：用来描述消息体内容。实体报头既可以用于请求也可以用于响应中，如Content-Length，Content-Language，Content-Encoding之类的报头都是实体报头。

> 尽管实体报头既不是请求也不是响应报头，但是它经常出现在请求头或响应头中，所以还是把他们包含在一个概念里。

# 消息头

### 1、Genaral headers

| 名称              | 作用                                                         |
| ----------------- | ------------------------------------------------------------ |
| Cache-Control     | 控制缓存的行为； [详情](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)                                  请求：no-cache（不要缓存的实体，要求现在从WEB服务器去取）<br/> max-age：（只接受 Age 值小于 max-age 值，并且没有过期的对象）<br/>max-stale：（可以接受过去的对象，但是过期时间必须小于max-stale 值）<br/> min-fresh：（接受其新鲜生命期大于其当前 Age 跟 min-fresh 值之和的缓存对象）<br/> 响应：public(可以用 Cached 内容回应任何用户)<br/>private（只能用缓存内容回应先前请求该内容的那个用户）<br/>no-cache（可以缓存，但是只有在跟WEB服务器验证了其有效后，才能返回给客户端）<br/> max-age：（本响应包含的对象的过期时间）<br/>ALL: no-store（不允许缓存） |
| Connection        | 决定当前的事务完成后，是否会关闭网络连接； [详情](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection)                                                        请求：close（告诉WEB服务器或者代理服务器，在完成本次请求的响应后，断开连接，不要等待本次连接的后续请求了）。 keepalive（告诉WEB服务器或者代理服务器，在完成本次请求的 响应后，保持连接，等待本次连接的后续请求）。                       响应：close（连接已经关闭）。               keepalive（连接保持着，在等待本次连接的后续请求）。 |
| Date              | 创建报文的日期时间；                                         |
| Keep-Alive        | 用来设置超时时长和最大请求数；如果浏览器请求保持连接，则该头部表明希望 WEB 服务器保持连接多长时间（秒）。<br/> 例如：Keep-Alive：300 |
| Via               | 代理服务器的相关信息；列出从客户端到 OCS 或者相反方向的响应经过了哪些代理服务器，他们用什么协议（和版本）发送的请求。当客户端请求到达第一个代理服务器时，该服务器会在自己发出的请求里面        添加 Via 头部，并填上自己的相关信息当下一个代理服务器收到第一个代理服务器的请求时，会在自己发出的请求里面复制前一个代理服务器的请求的Via头部，并把自己的相关信息加到后面，以此类推，当 OCS 收到最后一个代理服务器的请求时，检查 Via 头部，就知道该请求所经过的路由。例如：Via：1.0 236-81.D07071953.sina.com.cn:80 (squid/2.6.STABLE13) |
| Warning           | 错误通知；                                                   |
| Trailer           | 允许发送方在分块发送的消息后面添加额外的元信息；             |
| Transfer-Encoding | 指定报文主体的传输编码方式；WEB 服务器表明自己对本响应消息体（不是消息体里面的对象）做了怎样的编码，比如是否分块（chunked）。例如：Transfer-Encoding: chunked |
| Upgrade           | 升级为其他协议；                                             |

### 2、Request headers

| 名称                      | 作用                                                         |
| ------------------------- | ------------------------------------------------------------ |
| Accept                    | 客户端可以处理的内容类型；告诉WEB服务器自己接受什么介质类型，*/* 表示任何类型，type/* 表示该类型下的所有子类型，type/sub-type。 |
| Accept-Charset            | 客户端可以处理的字符集类型；浏览器申明自己接收的字符集       |
| Accept-Encoding           | 客户端能够理解的内容编码方式；浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法 （gzip，deflate） |
| Accept-Language           | 客户端可以理解的自然语言；浏览器申明自己接收的语言语言跟字符集的区别：中文是语言，中文有多种字符集，比如big5，gb2312，gbk等等。 |
| Authorization             | Web 认证信息；当客户端接收到来自WEB服务器的 WWW-Authenticate 响应时，该头部来回应自己的身份验证信息给WEB服务器。 |
| Cookie                    | 通过Set-Cookie设置的值；                                     |
| DNT                       | 表明用户对于网站追踪的偏好；                                 |
| From                      | 用户的电子邮箱地址；                                         |
| Host                      | 请求资源所在服务器；客户端指定自己想访问的WEB服务器的域名/IP 地址和端口号。 |
| If-Match                  | 比较实体标记（ETag）；如果对象的 ETag 没有改变，其实也就意味著对象没有改变，才执行请求的动作。 |
| If-Modified-Since         | 比较资源的更新时间；如果请求的对象在该头部指定的时间之后修改了，才执行请求的动作（比如返回对象），否则返回代码304，告诉浏览器该对象没有修改。 |
| If-None-Match             | 比较实体标记（与 If-Match 相反）；如果对象的 ETag 改变了，其实也就意味著对象也改变了，才执行请求的动作。 |
| If-Range                  | 资源未更新时发送实体 Byte 的范围请求；浏览器告诉 WEB 服务器，如果我请求的对象没有改变，就把我缺少的部分 给我，如果对象改变了，就把整个对象给我。 浏览器通过发送请求对象的 ETag 或者 自己所知道的最后修改时间给 WEB 服务器，让其判断对象是否 改变了。总是跟 Range 头部一起使用。 |
| If-Unmodified-Since       | 比较资源的更新时间（与 If-Modified-Since 相反）；如果请求的对象在该头部指定的时间之后没修改过，才执行请求的动作（比如返回对象）。 |
| Origin                    | 表明了请求来自于哪个站点；                                   |
| Proxy-Authorization       | 代理服务器要求客户端的认证信息；浏览器响应代理服务器的身份验证请求，提供自己的身份信息 |
| Range                     | 实体的字节范围请求；浏览器（比如 Flashget 多线程下载时）告诉 WEB 服务器自己想取对象的哪部分。<br/> 例如：Range: bytes=1173546- |
| Referer                   | 对请求中 URI 的原始获取方；浏览器向 WEB 服务器表明自己是从哪个 网页/URL 获得/点击 当前请求中的网址/URL。<br/>  例如：Referer：https://hzy2003628.top/<br/> |
| TE                        | 指定用户代理希望使用的传输编码类型；                         |
| Upgrade-Insecure-Requests | 表示客户端优先选择加密及带有身份验证的响应；                 |
| User-Agent                | 浏览器信息；浏览器表明自己的身份（是哪种浏览器）。例如：User-Agent：Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.8.1.14) Gecko/20080404 Firefox/2.0.0.14 |

##### Accept

[详情](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)
告诉WEB服务器自己接受什么介质类型，用[MIME类型](https://blog.csdn.net/m0_45406092/article/details/107384911)来表示。
*/* 表示任何类型，type/* 表示该类型下的所有子类型，type/sub-type

```yaml
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
123456
```

> 如果请求中的`Accept`指定的类型和响应返回的类型不一致，会出现`406`，`not acceptable`错误

发送请求时设置期望返回类型为’application/json’

```javascript
let headers = new Headers();
headers.append('Accept', 'application/json');
12
```

Dropwizard服务端实际返回

```java
@POST   
@Produces(MediaType.TEXT_PLAIN)     //返回一个字符串text/plain类型的值
@Timed
public String create(@Context HttpServletRequest request){
return "abc"      //返回一个字符串类型的值
}
123456
```

通过F12查看完整的请求

```java
Genaral 
    Request Method: POST        
    Status Code: 406 Not Acceptable
Response     
	Content-Length: 48                               //返回的消息体长度
	Content-Type: application/json;charset=utf-8    //返回的消息体类型
	
1234567
```

返回的消息体内容为 `{"code":406,"message":"HTTP 406 Not Acceptable"}`，长度刚好为48

### 3、Response Headers

| 名称                                | 作用                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| Accept-Ranges                       | 是否接受字节范围请求；WEB服务器表明自己是否接受获取其某个实体的一部分（比如文件的一部分）的请求。bytes：表示接受，none：表示不接受。 |
| Age                                 | 消息对象在缓存代理中存贮的时长，以秒为单位；当代理服务器用自己缓存的实体去响应请求时，用该头部表明该实体从产生到现在经过多长时间了。 |
| Clear-Site-Data                     | 表示清除当前请求网站有关的浏览器数据（cookie，存储，缓存）； |
| Content-Security-Policy             | 允许站点管理者在指定的页面控制用户代理的资源；               |
| Content-Security-Policy-Report-Only |                                                              |
| ETag                                | 资源的匹配信息；链接描述.就是一个对象（比如URL）的标志值，就一个对象而言，比如一个 html 文件，如果被修改了，其 Etag 也会别修改， 所以，ETag 的作用跟 Last-Modified 的 用差不多，主要供 WEB 服务器 判断一个对象是否改变了。  比如前一次请求某个 html 文件时，获得了其 ETag，当这次又请求这个文件时，浏览器就会把先前获得的 ETag 值发送给 WEB 服务器，然后 WEB 服务器会把这个 ETag 跟该文件的当前 ETag 进行对比，然后就知道这个文件 有没有改变了。 |
| Location                            | 令客户端重定向至指定 URI；WEB 服务器告诉浏览器，试图访问的对象已经被移到别的位置了，到该头部指定的位置去取。 |
| Proxy-Authenticate                  | 代理服务器对客户端的认证信息； 代理服务器响应浏览器，要求其提供代理身份验证信息。 |
| Public-Key-Pins                     | 包含该Web 服务器用来进行加密的 public key （公钥）信息；     |
| Public-Key-Pins-Report-Only         | 设置在公钥固定不匹配时，发送错误信息到report-uri；           |
| Referrer-Policy                     | 用来监管哪些访问来源信息 会在 Referer 中发送；               |
| Server                              | HTTP 服务器的安装信息；WEB 服务器表明自己是什么软件及版本等信息。<br/>  例如：Server：Apache/2.0.61 (Unix) |
| Set-Cookie                          | 服务器端向客户端发送 cookie；                                |
| Strict-Transport-Security           | 它告诉浏览器只能通过HTTPS访问当前资源；                      |
| Timing-Allow-Origin                 | 用于指定特定站点，以允许其访问Resource Timing API提供的相关信息； |
| Tk                                  | 显示了对相应请求的跟踪情况；                                 |
| Vary                                | 服务器缓存的管理信息；WEB服务器用该头部的内容告诉 Cache 服务器，在什么条件下才能用本响应所返回的对象响应后续的请求。假如源WEB服务器在接到第一个请求消息时，其响应消息的头部为： Content-Encoding: gzip; Vary: Content-Encoding 那么 Cache 服务器会分析后续       请求消息的头部，检查其 Accept-Encoding，是否跟先前响应的 Vary 头部值       一致，即是否使用相同的内容编码方法，这样就可以防止 Cache 服务器用自己     Cache 里面压缩后的实体响应给不具备解压能力的浏览器。       例如：Vary：Accept-Encoding |
| WWW-Authenticate                    | 定义了使用何种验证方式去获取对资源的连接；                   |
| X-XSS-Protection                    | 当检测到跨站脚本攻击 (XSS)时，浏览器将停止加载页面；         |

### 4、Entity Headers

| 名称             | 作用                                                         |
| ---------------- | ------------------------------------------------------------ |
| Allow            | 客户端可以处理的内容类型，这种内容类型用MIME类型来表示；     |
| Content-Encoding | 用于对特定媒体类型的数据进行压缩；WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。 <br/>   例如：Content-Encoding：gzip |
| Content-Language | 访问者希望采用的语言或语言组合；WEB 服务器告诉浏览器自己响应的对象的语言。 |
| Content-Length   | 发送给接收方的消息主体的大小；WEB 服务器告诉浏览器自己响应的对象的长度。                例如：Content-Length: 26012 |
| Content-Location | 替代对应资源的 URI；                                         |
| Content-Range    | 实体主体的位置范围；WEB 服务器表明该响应包含的部分对象为整个对象的哪个部分。                例如：Content-Range: bytes 21010-47021/47022 |
| Content-Type     | 告诉客户端实际返回的内容的内容类型；WEB 服务器告诉浏览器自己响应的对象的类型。                例如：Content-Type：application/xml |
| Expired          | 包含日期/时间， 即在此时候之后，响应过期；WEB服务器表明该实体将在什么时候过期，对于过期了的对象，只有在跟WEB服务器验证了其有效性后，才能用来响应客户请求。          是 HTTP/1.0 的头部。例如：Expires：Sat, 23 May 2009 10:02:12 GMT |
| Last-Modified    | 资源的最后修改日期时间；WEB 服务器认为对象的最后修改时间，比如文件的最后修改时间，动态页面的最后产生时间等等。<br/> 例如：Last-Modified：Tue, 06 May 2008 02:42:43 GMT |

#### Content-Type

实体头部用于指示资源的 [MIME类型](https://blog.csdn.net/m0_45406092/article/details/107384911) media type

- 在响应中，Content-Type标头告诉客户端实际返回的内容的内容类型。浏览器会在某些情况下进行MIME查找，并不一定遵循此标题的值; 为了防止这种行为，可以将标题 X-Content-Type-Options 设置为 nosniff。
- 在请求中 (如POST 或 PUT)，客户端告诉服务器实际发送的数据类型。

> 浏览器会在某些情况下进行MIME查找，并不一定遵循此标题的值，简单来说，就是`Content-Type会被传入的实际类型替换`，比如请求设置的值是`text/plain`，但是传入json形式的字符串`{‘name’:'tom','age':20}`，那么最终值仍然为`application/json`

