---
uuid: d0b8bd22-a9fb-d52e-d2c2-ad7967517b5a
title: xray扫描器
date: 2022-04-14 17:25:02
tags: 
      - 渗透
      - Web
categories: 
      - 渗透
---
### xray扫描器
<!--more-->

xray是一种功能强大的扫描工具。xray 社区版是长亭科技推出的免费白帽子工具平台，目前社区有 xray [漏洞扫描](https://so.csdn.net/so/search?q=漏洞扫描&spm=1001.2101.3001.7020)器和 Radium 爬虫工具，由多名经验丰富的安全开发者和数万名社区贡献者共同打造而成。

### 下载地址

https://[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020).com/chaitin/xray/releases

## 版本选择

![img](https://img-blog.csdnimg.cn/img_convert/1a2c05da7f1e1933a5ee99179f24d98c.png)

- `darwin_amd64` 苹果系统
- `linux_386` Linux x86
- `linux_amd64` Linux x64
- `windows_386` Windows x86
- `windows_amd64` Windows x64
- `sha256.txt` 校正文件，内含个版本的sha256的哈希值，请下载后自行校正以防被劫持投毒。
- `Source Code` 为Github自动打包的，无意义，请忽略。

### 基本使用

下载对应系统的版本后，解压缩zip文件，Linux / Mac用户在终端（终端）运行，Windows用户请在Powershell或其他高级Shell中运行，在CMD中运行可能体验不佳。

- 使用基础[爬虫](https://so.csdn.net/so/search?q=爬虫&spm=1001.2101.3001.7020)爬取并对爬虫爬取的链接进行漏洞扫描：

  ```javascript
  xray webscan --basic-crawler http://example.com --html-output xxx.html
  ```

- 使用 HTTP 代理进行被动扫描：

  设置浏览器 http 代理为http://127.0.0.1:7777，然后使用浏览器访问网页，就可以自动分析代理流量并扫描。

  ```css
  xray webscan --listen 127.0.0.1:7777 --html-output xxx.html
  ```

- 快速测试单个 url, 无爬虫：

  ```ruby
  xray webscan --url http://example.com/?a=b --html-output single-url.html
  ```

- 手动指定本次运行的插件：

  默认情况下，将会启用所有内置插件，可以使用下列命令指定本次扫描启用的插件。

  ```css
  xray webscan --plugins cmd_injection,sqldet --url http://example.comxray webscan --plugins cmd_injection,sqldet --listen 127.0.0.1:7777
  ```

- 生成 ca 证书：

  ```undefined
  .\xray_windows_amd64.exe genca
  ```

### 与burp联动使用

**转自**：

d
  .\xray_windows_amd64.exe genca
  ```

### 与burp联动使用

**转自**：

https://blog.csdn.net/qq_32393893/article/details/109471385
