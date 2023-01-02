---
uuid: 7978645a-1b70-8ae9-1617-ff1db17519da
title: hgame2022复现
date: 2022-02-18 12:07:36
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

hgame2022复现记录一下！

<!--more-->

# web

## Tetris plus

![image-20220218121200922](hgame2022复现/image-20220218121200922.png)

![image-20220218121311068](hgame2022复现/image-20220218121311068.png)

是个游戏题，分数到3000就是胜利，闲着无聊打通关了！但是没有flag，欺骗我，但是我感觉这个红色字体特别想base64，尝试了一下！![image-20220218121352025](hgame2022复现/image-20220218121352025.png)

下面的注释是jsfuck，应该是加密吧，把下面的jsfuck复制到控制台，enter出flag!![image-20220218121558360](hgame2022复现/image-20220218121558360.png)

## webpack-engine

![image-20220218165405533](hgame2022复现/image-20220218165405533.png)

这又是个啥玩意，看源代码！没有发现啥有用的，搜索一下flag试试![image-20220218165503318](hgame2022复现/image-20220218165503318.png)

显然这个应该flag就在源代码里吧![image-20220218165632252](hgame2022复现/image-20220218165632252.png)

base64解码，得到flag！（两次）![image-20220218165712951](hgame2022复现/image-20220218165712951.png)

# re

## easyasm

根据汇编写个c,直接输出

```c
#include<iostream>
int main()
{
	char ds[0x1c]={0x91,0x61,0x1,0xc1,0x41,0xa0,0x60,0x41,0xd1,0x21,0x14,0xc1,0x41,0xe2,0x50,0xe1,0xe2,0x54,0x20,0xc1,0xe2,0x60,0x14,0x30,0xd1,0x51,0xc0,0x17};
	short ax,bx;
	char al,bl;
	char c;
	for(int i=0;i<0x1c;i++){
		c = ds[i];
		c = c^0x17;
		for(char j=0;j<128;j++){
			 ax = 0;
	         al = j;
	         al = al << 4;
	         ax += al;
	         bx = 0;
	         bl = j;
	         bl = bl >> 4;
	         bx += bl;
	         ax += bx;
             al = (ax << 8) >> 8;
             if(al == c){
             	printf("%c",j);
             	break;
			 }			
		}
	}
 } 
```

![image-20220218171919352](hgame2022复现/image-20220218171919352.png)

推荐：

速成x86汇编学习网址：https://www.cnblogs.com/YukiJohnson/archive/2012/10/27/2741836.html
