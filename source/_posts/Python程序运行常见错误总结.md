---
uuid: b3f6be76-e681-4415-f159-59519e890cd2
title: Python程序运行常见错误总结
date: 2022-01-02 15:30:03
tags: Python
categories: 
       - [Python]
---

Python程序运行常见错误总结

<!--more-->

## 1.SyntaxError:invalid syntax  

语法错误：非法的语法。这种错误很常见，根据系统提示好好检查代码即可，看报错信息在第几行，从这一行往上找错误。

错误例子：

```python
>>> if i=3:	

SyntaxError: invalid syntax
```

## 2.NameError: name 'q' is not defined

变量名错误：’q’未定义。解决方法是在前面给q赋值，还有一种可能是变量或者函数名拼写错误。

错误例子：

```python
>>> q

Traceback (most recent call last):

 File "<pyshell#0>", line 1, in <module>

  q

NameError: name 'q' is not defined
```

## 3.Indentation Error

缩进错误：Python的缩进非常严格，行首多个空格，少个空格都会报错。 像def，class，if，for，while等代码块都需要缩进。

错误例子：

```python
i=2

j=3

if i<j:

print(i)

IndentationError: expected an indented block
```

## 4.IndexError: string index out of range

索引错误：字符串超出了范围。解决办法：查看字符串的长度，索引要小于长度。

错误例子：

```python
>>> s='hello'

>>> s[6]

Traceback (most recent call last):

 File "<pyshell#8>", line 1, in <module>

  s[6]

IndexError: string index out of range
```

## 5.ValueError: substring not found

值错误：子字符串未找到。

错误例子：

```python
>>> s1='hello'

>>> s2='ei'

>>> s1.index(s2)

Traceback (most recent call last):

 File "<pyshell#11>", line 1, in <module>

  s1.index(s2)

ValueError: substring not found
```

## 6.IndexError: list index out of range

索引错误：列表索引超出范围。解决办法：查看列表的长度，索引要小于长度。

错误例子：

```python
>>> L=[1,2,3]

>>> L[4]

Traceback (most recent call last):

 File "<pyshell#5>", line 1, in <module>

  L[4]

IndexError: list index out of range
```

## 7.AttributeError: 'tuple' object has no attribute 'remove'

属性错误：元组对象没有属性'remove'。

错误例子：

```python
>>> t=('a','b','c')

>>> t.remove('a')

Traceback (most recent call last):

 File "<pyshell#13>", line 1, in <module>

  t.remove('a')

AttributeError: 'tuple' object has no attribute 'remove'
```

## 8.KeyError: 'ff'

key 键错误：没有指定的键值“ff”

错误例子：

```python
>>> dict={'a':1,'b':2,'c':3}

\>>> dict['ff']

Traceback (most recent call last):

 File "<pyshell#3>", line 1, in <module>

  dict['ff']

KeyError: 'ff'
```

## 9.TypeError: pop expected at least 1 arguments, got 0

类型错误：pop方法希望得到至少一个参数，但是现在参数为0。

错误例子：

```python
>>> dict={'a':1,'b':2,'c':3}

>>> dict.pop()

Traceback (most recent call last):

 File "<pyshell#7>", line 1, in <module>

  dict.pop()

TypeError: pop expected at least 1 arguments, got 0
```

## 10.TypeError: Can't convert 'int' object to str implicitl

类型错误：不能转换整形成字符串。解决办法：使用+拼接时必须使用字符串，或将数字转化成字符串str()

错误例子：

```python
>>> 'hello'+9

Traceback (most recent call last):

 File "<pyshell#9>", line 1, in <module>

  'hello'+9

TypeError: Can't convert 'int' object to str implicitly
```

## 11. SyntaxError: EOL while scanning string literal

语法错误：在字符串首尾忘记加引号。

错误例子：

```python
>>> print('hello)    

SyntaxError: EOL while scanning string literal

12. TypeError: 'range' object does not support item assignment
```

类型错误：range不支持item操作。range() 返回的是“range object”，而不是实际的 list 值。

错误例子：

```python
>>> l=range(10)

>>> l[3]=16

Traceback (most recent call last):

 File "<pyshell#8>", line 1, in <module>

  l[3]=16

TypeError: 'range' object does not support item assignment

可改为：

>>> l=list(range(10))

>>> l[3]=16
```

## 13. IndentationError:unindent does not match any outer indentation level

缩进错误：未知缩进不匹配任何缩进等级。缩进混乱造成。

错误例子：

```python
>>> if i==1:

​	j=2

​    k=3    

SyntaxError: unindent does not match any outer indentation level
```

## 14. FileNotFoundError: [Errno 2] No such file or directory: 'file1'

文件不存在：尝试打开一个不存在的磁盘文件或目录。

错误例子：

```python
>>> f=open('file1')

Traceback (most recent call last):

 File "<pyshell#15>", line 1, in <module>

  f=open('file1')

FileNotFoundError: [Errno 2] No such file or directory: 'file1'
```

