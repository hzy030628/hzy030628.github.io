---
title: ctfshow反序列化
date: 2022-04-15 21:16:59
tags: 
     - 反序列化
categories: 
     - [Web]
     - [CTF]
---

**反序列化刷题**
<!--more-->

# web254

![image-20220323213133168](https://img-blog.csdnimg.cn/img_convert/cb76207a9d72b43f3d812ae8e40e5b2f.png)

审计一下发现只需要让username和password等于所给的值即可！

> ?username=xxxxxx&password=xxxxxx

![image-20220323213621159](https://img-blog.csdnimg.cn/img_convert/506fc615db70dad57a9c72ec6f65bf5e.png)

# web255

```
<?php

/*
# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2020-12-02 17:44:47
# @Last Modified by:   h1xa
# @Last Modified time: 2020-12-02 19:29:02
# @email: h1xa@ctfer.com
# @link: https://ctfer.com

*/

error_reporting(0);
highlight_file(__FILE__);
include('flag.php');

class ctfShowUser{
    public $username='xxxxxx';
    public $password='xxxxxx';
    public $isVip=false;

    public function checkVip(){
        return $this->isVip;
    }
    public function login($u,$p){
        return $this->username===$u&&$this->password===$p;
    }
    public function vipOneKeyGetFlag(){
        if($this->isVip){
            global $flag;
            echo "your flag is ".$flag;
        }else{
            echo "no vip, no flag";
        }
    }
}

$username=$_GET['username'];
$password=$_GET['password'];

if(isset($username) && isset($password)){
    $user = unserialize($_COOKIE['user']);    
    if($user->login($username,$password)){
        if($user->checkVip()){
            $user->vipOneKeyGetFlag();
        }
    }else{
        echo "no vip,no flag";
    }
}
```

