---
uuid: a370e007-8e3d-3444-d937-b98369433843
title: reverse认知
tags: 
      - CTF
      - RE
categories: 
      - [CTF]
      - [RE]
passward: 123456
---

CTF中的Reverse领域的入门学习

<!--more-->

# 逆向

​     不说题外话，经过一学期的学习和参加一次CTF大赛后，对于reverse的最直观的印象就是写脚本，写各种程序，不论是很简单的reverse题还是较为复杂的，甚至有时候思路很明确，写出来脚本之后flag就到手了。

​      总而言之，对于reverse，如果想学精学透，最基础的应该就是从脚本下手，多刷题，多写脚本，而对于解题方便，脚本语言习惯上使用python，所以学好python，非常重要，不仅仅是python，多掌握一门语言没有坏处，学习C语言也是必不可少的。

# 逆向的核心

​      学习逆向不仅仅要学好语言，最重要的核心是破解验证算法，要学好算法！

## 验证算法如下

   输入：key

   验证：if H(key)==Secret

```c
    {
        flag=O(key);
        print flag;
    }
```
   输出：flag

## 验证算法分类

1.简单比较验证

2.密码算法验证

3.算法求解验证

## 算法举例如下：

### 1.key直接比较

```c
#include<stdio.h>
#include<string.h>
int main()
{
	char szKey[20];
	printf("input Key:");
	scanf("%16s",szKey);
	if(strncmp(szKey,"Thi5_i5_TOo_E4sy",16)==0)
	{
		printf("flag is your key!\n");
	}
	else
	{
		printf("please decompiler or debug me!\n");
	}
	return 0;
}
```

 这种类型flag就在其中，善于观察即可！

### 2.key简单变换

```c
char secret[]="\x58\x31\x70\x5C\x35\x76\x59\x69\x38\x7D\x55\x63\x38\x7F\x6A";
int main()
{
	char szKey[20]={0},szXor[20]={0};
	unsigned int i=0;
	printf("input Key:");
	scanf("%16s",szKey);
	for(i=0;i<strien(szKey);i++)
	{
		szXor[i]=szKey[i]^i;
	}
	if(memcmp(szXor,secret,sizeof(secret))==0)
	{
		printf("xman{%s}\r\n",szKey);
	}
	else
	{
		printf("please reverse me!\r\n");
	}
	return 0;
}
```

这个用异或，再进行一次就出来了，见识短浅的我表示还再学习学习才能明白。

### 3.key编码转换

```c
char secret[]="QjRzZTYOX2k1X2MwbW1vbg==";
int main()
{
	char szKey[20]={0},szBase64[40]={0};
	unsigned int i=0;
	printf("input key:");
	scanf("%16s",szkey);
	Base64encode(szBase64,szKey,strlen(szkey));
	if(memcmp(szBase64,secret,sizeof(serect))==0)
	{
		printf("xman{%s}\r\n",szKey);
	}
	else 
	{
		printf("please reverse me!\r\n");
	}
	return 0;
}
```

这种转换常见为Base64，也不排除会出现其他编码！

### 4.key散列计算

这种类型的，可以用md5进行反查

## 验证算法逆向思路

### 简单变化验证

----人工逆向，找到可逆运算，按位分步破解

### 密码算法验证

----识别密码算法，针对性解密

### 解题算法验证

----理解算法原理，针对性解题

### 验证常见漏洞

----直接输出flag

----密钥空间过短

----伪随机算法

### 现实竞赛

----分段，嵌套验证

### 爆破奇招

----简单验证（按位破解）

----密码算法（密钥部分已知）

----解题算法（暴力搜索）

## 解题

要学会用F5做签到题，害，暂时就写到这吧，先学好就是多刷题，goodbye！！！

# 练习平台

1.i春秋训练平台：https://www.ichunqiu.com/battalion

2.We Chall:  http://www.wechall.net/sites.php

3.很炫酷游戏化————https://microcorruption.com/login

4.[攻防世界 (xctf.org.cn)](https://adworld.xctf.org.cn/)

