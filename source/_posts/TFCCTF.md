---
title: TFCCTF
date: 2022-07-31 22:27:31
tags:
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220731220657941](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312206056.png?x-oss-process=hzy)



<!--more-->

------------------------------------------------------

TFCCTF

# 前言

这个比赛也是挺好，题目有难有易，考察点有的很新颖有的很常见，总之都是正常题目，这两天打强网杯真的是坐大牢，强网杯结束之后这个也快结束了，就浅看了一下，相比之下，还是国外的CTF适合我，giao

# MISC

## RULES

> Make sure you read the rules!

TFCCTF{Fr33_fl4gz_f0r_U}

## DISCORD SHENANIGANS V2

> We know that our Discord flags are the most specials ones. They raise our **status**! We plan to keep this tradition going, no matter what!
>
> This one is hidden in plain s̷̤̎i̷̡͝g̴̤̿ḧ̴͚́ṫ̵̹.
>
> Note: |̸̥͔͚͕̟̔̓̚|̴̨̫̿̎|̷͈̓̌̈|̷̼̱̦̲͐́́|̷̧͍̥͚̈̅͜͝|̷̱̱̭̏̓̈́̍̚|̴̨͚̫͇̽̌̽̕͝|̸͚̏|̴̨̬͉͔̩̈́̉͆̂͋|̸̟͇̈̾͝|̸̱͇̔̓ might be able to help you... if you ask nicely. He's a bit shy, though.
>
> Hint: Read the message he gives you when you ask nicely very carefully!

这个dicord直接找flag一直都是常规，这次的有意思

刚开始直接在频道通信会回复![image-20220731211722648](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312117694.png?x-oss-process=hzy)

私聊他就显示说我问的不好

![image-20220731211755843](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312117904.png?x-oss-process=hzy)

所以加了一个please

![image-20220731211948159](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312119219.png?x-oss-process=hzy)

![image-20220731212002507](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312120552.png?x-oss-process=hzy)

也许它与exif有关，exif是保存在图像文件中的元数据。

挑战描述说答案是在*公告Discord*频道中，所以下载了其中的一张图片，使用工具读取exif数据

![current-50](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011153243.png?x-oss-process=hzy)

![image-20220801115323383](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011153429.png?x-oss-process=hzy)

TFCCTF{h1dd3n_1n_pl4in_br3ad!...1_m3an_s1gh7}

# WEB

## ROBOTS AND MUSIC

> Do you like old music?

![image-20220729193533364](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291935896.png?x-oss-process=hzy)

访问robots.txt

![image-20220729193616167](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291936215.png?x-oss-process=hzy)

![image-20220729193635214](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291936261.png?x-oss-process=hzy)

TFCCTF{Kr4ftw3rk_4nd_th3_r0b0ts}

## PONG

> Some random website that can ping hosts.

![image-20220729193739676](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291937724.png?x-oss-process=hzy)

考虑使用分隔符执行多个命令

![image-20220729193941983](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291939038.png?x-oss-process=hzy)

成功，直接找flagcat出来就行

![image-20220729194036616](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291940664.png?x-oss-process=hzy)

![image-20220729194049645](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207291940714.png?x-oss-process=hzy)


TFCCTF{C0mm4nd_1nj3c5i0n_1s_E4sy}

## ARE YOU THE ADMIN?

> Do you have what it takes to be the admin?

![image-20220801123116527](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011231592.png?x-oss-process=hzy)

index.tsx源代码如下

```
import type { GetServerSideProps, NextPage } from "next";
import type { User } from "@prisma/client";
import { prisma } from "../globals/prisma";
import { useState } from "react";
import { useRouter } from "next/router";

type Props = {
  users: (User &
    (
      | {
          flag: string;
          isAdmin: true;
        }
      | {
          flag?: never;
          isAdmin: false;
        }
    ))[];
};

const Home: NextPage<Props> = ({ users }) => {
  const [username, setUsername] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("/api/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username,
      }),
    });
    await router.replace(router.asPath);
  };

  return (
    <div>
      <div>Create user:</div>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={create}>Create</button>
      <div>Users:</div>
      {users.map((user) => (
        <div key={user.id}>
          <div>Username: {user.username}</div>
          <div>Is admin? {user.isAdmin ? "yes" : "no"}</div>
          {user.isAdmin && <div>{user.flag}</div>}
        </div>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const users = (await prisma.user.findMany()) as Props["users"];

  for (const user of users) {
    if (user.isAdmin) {
      user.flag = process.env.FLAG!;
    }
  }

  return {
    props: {
      users,
    },
  };
};
//主要功能是创建用户
```

![image-20220801123359706](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011233767.png?x-oss-process=hzy)

再看这个文件

![image-20220801130040083](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011300142.png?x-oss-process=hzy)

这个调用了sqlite DB，然后最后我们看到个格式化以下json有效负载并尝试创建管理员用户名，所以我们只需要自己写进去isadmin就可以了![image-20220801131255957](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011312028.png?x-oss-process=hzy)

![image-20220801131424894](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011314963.png?x-oss-process=hzy)

![image-20220801131516706](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011315749.png?x-oss-process=hzy)

当然也可以直接用linux命令

```
curl -i -H 'Content-Type: application/json' -d '{"username":"huang","isAdmin":true}' 'http://01.linux.challenges.ctf.thefewchosen.com:49293/api/auth'
```

![image-20220731211605753](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312116807.png?x-oss-process=hzy)

![image-20220731210928710](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312109066.png?x-oss-process=hzy)

TFCCTF{S4n1t1z3_Y0ur_1nput5!}

## DEEPLINKS

> My intern configured my iOS app and my website to handle deeplinks, but they didn't tell me the path :( Can you help me find it?

ios的一项新技术，deeplinking，了解一下

> 适用于 iOS 和 Android 的深度链接是自定义网址，用于在移动应用程序中打开特定页面或事件

![image-20220731211522014](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312115093.png?x-oss-process=hzy)

https://www.adjust.com/ja/glossary/deep-linking/

[ios - How do I find an apps/websites Deep Link? - Stack Overflow](https://stackoverflow.com/questions/48443050/how-do-i-find-an-apps-websites-deep-link)

[App Search Programming Guide: Support Universal Links (apple.com)](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html)

![image-20220731211408744](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312114841.png?x-oss-process=hzy)

![image-20220731214911417](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312149505.png?x-oss-process=hzy)

访问路径*/apple-app-site-association*，得到一个文件打开之后就能找到flag

```
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "ABCDEFGHIJ.com.example.example",
                "paths": ["TFCCTF{4ppl3_4pp_51t3_4550c14t10n}"]
            }
        ]
    }
}
```

TFCCTF{4ppl3_4pp_51t3_4550c14t10n}

> ps:扫目录也行

## CALENDAR

> Are online calendars trusty?
> Note: The website displays "Error establishing a database connection" at startup. Please wait ~10 seconds and refresh
> The flag is format :TFCCTF{FOUNDPASSWORD}

wordpress漏洞，，打强网杯就遇到这个玩意了，麻了，出场率这么高

![image-20220731212537815](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312125929.png?x-oss-process=hzy)

这个题目描述说是日历问题，看一下

![image-20220731212607886](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312126965.png?x-oss-process=hzy)

有个留言框，但是测试之后貌似没啥用，然后考虑到可能是插件漏洞，ctrl+u走起来

![image-20220731212734560](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312127620.png?x-oss-process=hzy)

漂亮，5.16.2日历插件

https://www.exploit-db.com/exploits/50084

![image-20220731213445428](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312134496.png?x-oss-process=hzy)

直接利用这个poc就可以了

```
/wp-admin/admin.php?page=MEC-export&mec-ix-action=export-events&format=csv
```

![image-20220731213507092](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312135157.png?x-oss-process=hzy)



passwordwpne3mgfsnj8e8f6d

TFCCTF{wpne3mgfsnj8e8f6d}

此外还有一个未授权访问漏洞也是可以得到password的

![image-20220801114913564](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011149938.png?x-oss-process=hzy)

```
?page_id=2   // 参数直接改，试试能不能未授权
```

![image-20220801114952985](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011149075.png?x-oss-process=hzy)

继续走几个看看，到5的时候就是password

![image-20220801115029350](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011150447.png?x-oss-process=hzy)

## DIAMONDS

> Write something nice that passes our filter.

![image-20220801131925454](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011319521.png?x-oss-process=hzy)

过滤器来绕过他然后执行命令

看源码知道是ruby编写的

![image-20220801132045652](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011320721.png?x-oss-process=hzy)

fuzz测试了一下，是只能传0-9，a-z，A-Z

![image-20220801132323974](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011323048.png?x-oss-process=hzy)

正则表达式绕过姿势有很多，找了一下

[使用换行符绕过正则表达式检查 - David Hamann](https://davidhamann.de/2022/05/14/bypassing-regular-expression-checks/)

所以使用%0a换行符绕过，成功![image-20220801132407100](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011324176.png?x-oss-process=hzy)

```
<%= IO.popen('ls /').readlines()  %>
<%= IO.popen('ls -a ./').readlines()  %>
<%= IO.popen('cat ./flag.txt').readlines()  %>
```

![image-20220801132933516](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011329593.png?x-oss-process=hzy)

![image-20220801132958869](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011329935.png?x-oss-process=hzy)

![image-20220801133030685](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011330760.png?x-oss-process=hzy)

TFCCTF{02718f35dddc266e0ac40c0c0dcc98c34edd545678dc752ba9831b6d73bc706f}

## INCLUDE WHAT MATTERS.

> Flag Format : TFCCTF{}
> The flag file has a random name and it's in a random location .

![image-20220801133235556](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011332609.png?x-oss-process=hzy)

目录穿越

![image-20220801133352871](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011333940.png?x-oss-process=hzy)

查看日志

![image-20220801133454063](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011334147.png?x-oss-process=hzy)

这个是考察日志攻击种马，bp抓包改UA

![image-20220801134212150](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011342234.png?x-oss-process=hzy)



![image-20220801134522392](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011345471.png?x-oss-process=hzy)

种马成功，直接执行命令得到flag

![image-20220801134643742](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011346814.png?x-oss-process=hzy)

![image-20220801134700423](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011347498.png?x-oss-process=hzy)

TFCCTF{LF1_1S_D4NG3R0US_4ND_L34DS_T0_RC3}

# CRYPTO

## BASIC

> This guy keeps insulting my girlfriend! His last message confused me, though! Can you help me decode it?
>
> /Rn/X7n#bUc.rjzh,|eEsg,?&QI;@^ARm}UKOkICi#X.ixEmN]D

base91解码得到flag

TFCCTF{sh3's_4_10..._but_0n_th3_ph_sc4l3}

## MAFIOSO

> A soldier was walking around the streets of Sicily, late at night, with THE Consigliere. Same soldier, the very next day, found in a ditch with a note in his breast pocket. It read:
>
> f433c3e883a1389482c0b652660580f36ea037434fd4a67d193bc1cdc9b2cc34
>
> Flag format: TFCCTF{secret_message}

不知道是啥加密，看样子应该就是在线解密就可以，真的感觉就是md5加密

在这里不由得感慨一下，国内的md5解密真的是不想说啥了，哈希解密真的是一个能用的都没，找了半天还是国外的，在这留一下，省的以后再找了

[CrackStation - 在线密码哈希破解 - MD5，SHA1，Linux，Rainbow Tables等。](https://crackstation.net/)

![image-20220731215408414](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312154503.png?x-oss-process=hzy)

TFCCTF{ snitchesgetstitches}

## OBSCURE

![image-20220729200312976](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207292003032.png?x-oss-process=hzy)

纯纯考眼力的好吧,但是发现直接看的结果不对

TFCCTF{s3curlly_thr0ugh_0bscurlly}

然后f12大法提取出来flag了

```
T̶̨̧͈͍̥͚̭̜͇̻̥̘̹̝̩͍̦̜͕͉̥̳͑̎͋͊͛͗̆͐̄͂̀̒͛̉̿̏̈̕̚̚̕͝͝͝ͅF̶̡̛̛͖̝̹̹͔̟̝̟̠̩̲̱͉̻̭̻̮͓̲̮͈̜̅̔̈͐̀̾̋͊̈́͛͆̿̀̓͐̓͋̃͛̃́̑̀̽͂̋̌̐̎̕̕͘͝͠͝͝ͅC̵̢̨̨͓̞̥̠̲̗̝̯̥̥͚̙̰̣̼̻̤̳͓͙̺̤͊̍͊̌̍̎̀̅̽͊͘͘͘͜͝͠͝͝ͅÇ̶̼̫͎̬̰͓̰̭̺̼̥̮͖͗̾͐́̉͂͂͗̏̿̂̀͝͝Ṭ̷̛͓̑̓̓̒́̋̒̃̋͊̑̎͐͐̋̈̆̉́̀̏͑̀̾̎͒̾̉̃̄̊͂́͐̈́͘͘͜͝͝F̴̢̨̡̛̥̠̪̤̞͔̝̞̳̱̙̰̲̙̠̬̻̥̜͔̲̯͚̳̖̩̺͈̬͍̪̥̯͙̱͙͔̞̰̮̦̼̼͐͒͆̿̓̓͑̎͊̋͂͑̅̈́͗̃͆͊̓̆̈́͂́̆͌͂̈̔́̔̎̀̾̕̕̚͝͝͝͝͠ͅ{̴̧̡̡̛͈̻̥̙̯̜͓̥̣͔̣͐̄̂̋͋̏͋̌̍̔̀̎̿̍̈́̐̏͒̓̒̉̐́̓̓̽̕̕͝͠s̴̝̬͒̾͗̌̓͊̚ͅ3̷̢̧͓̬̳̯̜̦͉̜̗͚̗̳̩̻͉͍̼͓͍̼͚̝͔͙̗̞͎͚̼͈̹̞͋̉̆̈́͊̐̓̔͋̈͂́̔̈́͒͗̀́̂̏͒͜͝ç̷̛͉͔̮̯̳͚̘̜͇̗͖̟̫̇͋̇̑͆̀͊̈̌̅̀̿̓͊̓̀̉́̀̓̋̊͐͊̒̌͒͒̈́̒̅̀̽̾͗̾͌̃̉̾̚̚̕̕͝͝ư̵̼̑̔͌̉͆͒̅͗̆̑̌̀̀͗̒̾̎͆̇̄̃̀̒̉̂͂̀̍̃̄̈͐̈́̔̔̈́̽̚͘̕͘ͅr̵̛̼͊̽̔̋͠1̶̧̡̨̡̢̧̡̛̗̼͓̣͖̖̖̫̲̻̰͇̫̘̖̞͖̬̤͔̙̠̪̦͙̮̝̫͔͕͈̗̙͇̫̩̫͔̩͂̾͆̈́̂̌͋̕͜͜ͅͅṭ̶̡̢̢̧̨̡̡̨̧̨̛͔̜̳̥̤̰̖̩̟̬̰̖̥̹̼͈̦̥̣͇̭͎̻̻͔̪͍̻̜͎͉͙͇̣̿̑̂̈́̇̉̄͑̅͂͐̒̽́̀̏̓̂͑͐͌̈̂̔͑̐͆̐̏͆́́̾̑̈́͑͌͐̓̊̕̚͘͜ͅẙ̸̢̨̛̹̻͉͇͎̭̻̙̭͔͎̺̤̤̻͓̼̮͈̤͈͈̠̞̪̠͉̗̺̟̙͈̖̲̪̫̖͔̟̟̇̇̿̎̊̀̊̔͌̀̀͒͐͋̀̍̃͒̂̈́͆͋̍͐̑̀̓̿̓̈́͑̊̇͆̿̓͐̓̉̕͘̕̕̚͜͠͝_̷̡̡̨̡̛̛̗̩͔̫̗̭̟̣̗͙͇͇̩̣̼̟̱͖̯̥͎̽͋́̽̈́̎͗̿͊͗͂̒̓͑͛̾̄̿͛̄͛͛́͌͐̀t̷̢̛̰̟̹͖̪̝͕̭̩͚̬̙̃͐̎͐͂͒͆̒̔̊̀͛̂̿̑̀̇͊͋̇̌̅͛̀͂͋̿̈́̈́̽̍̕͝͠͝ḩ̶̢̡̡̛̺͈̺̙͚̪͕͚̹̺̥͚̦͚̺̯̬̣͚͕͔̖̝̞̖͔̙͉͔̟̼͕͖̙̐̃͋̈͛̽́̔̈͐́́̒̏̂̄̊̔̿̍̀̓̅̽̆̍̐̌̈́̋̈́̀̿̓̐́̐͌̓͘̚͘͜͠͝͠͝ͅr̸̢̡͙̼̜̬̤̗̯̪͇̩͓͕͓͓̝͇͖̎͂̏͆͝ͅ0̷̨̛̛̛̛̯̖̞̮̦̞̫̜͕̱̻̞͎̯͎̮͑̿͆̀͛̔͆̈́̈̆̑̄̅͂̇̄́̀́̒̋̇̓̍̀̈́̂̈́̀̀̂̅̅̑́͌̋̈́͘̕̕̕̚͝ų̶̧̡̢̖͓̲̞̭̗̦̠̹̥̙̱̙̥̯̗̭̩͙͔̜̙̼̻̼̞͛̂͆̀̾̃̈́͑̈́̔̈́̾̉̄̌͗̀͊̔̈́̌́͜͠͝͠g̷̢̨̡̜̩̘̺͎̮̻̼͙̱̱͈̣̳̣̻̜͒̓͗̍͌̈́͌̉͑̽̕͝͝ͅh̸̛̛͓̯̣̼̫̦̐͗̀̾̉̅̑́͌̈́͌́͑̔̈́̇̄͘̕͝͝_̶̭̹̩̳̯͙̯͕͔̼̔̈͑̉͗͌̚͜͝0̵̢̧̛͎̭̣͈̼̳͍͚͖̲͚̗̮͖̲̼͍̼̮̖̩͖̫͔̱͓̥̯̹̥͎͖̳͈̻̝̬̪̙̪̩̬̀̉̽̂̑̓̓͐̂̐̉͆̇́̂͌̈́̏͆͗̒̋̅̋̚̕͜͜͜͝͠ͅḇ̵̨̡̨͍͖͔͚̰̠͚͇̤̝̦̺͎͙̱̭̥̼̹̞͓̜̙͕͕͚͍̩͈̭̱͖̍̌̇͆̄̏̃͌͆͛̑̀͑̂̅̍̔̐̾̽̓̑̈̇͑̃̉̎͂̐̅̆́͐̿͌͗̕͘̚̕͘̕̚͘͜͝͝͝ͅͅs̸̡̨̯̬̰̠̖̟̹͈̞͎͉͉͓̠̺̹̣̲̺̬̜̝͓͓̰͍̖̹̮̹̩̥̆̾̐͘ͅç̷̡̩͍̥̘̳̺͎͉͓͖̭̝̖̹̬̗̞̲̞̬̹̼̱̫͓͙̤̤̖̦͕͓̱̝̯͇̼͚͕̳̿͆̀͒͊̎̅͐̂͗̾̀͊͑͊́̊̈͒͂̾́͂̓̓̀̏͋͂̿̆̀͒̇̚͘͝͝ͅü̶̧̨̡̲̩̥͇̘͇̣͕̞̗͓̳̗͉̲͔̻̪̪͕̖͈̪̳̤̤͈̫̹͉̞̝͖͎͕̥̻̣̖̼̰̣̰̦̈̂̿̉̋̂̔̎̓͂̎̍̾̉͂̆̈͌̐͆̓̊͋͑͒̚͜͜͠͝͠͝͝ͅr̵̨̢̨̡̡͓̭͍̲̗͍̼̬̰̗̱̩̼̰̤͓̞̤͔͇͎̪̱̱̺͈̭͆͜ͅ1̶̡̧̨̛͕̟̹͚̹̫̮̖͚̯̲̰̤̙͉͌͆̈́̽̀͗̿̓̑͒̄̌̓̓̓͗̇̒̃̑̏̊͑̋̅̎̔͂͑̔͑̈̄̉̚͘͝ṭ̶̡̼̲͓̺̝̱̮͈̱͈͔̞̙͚̝̬̳͑͌͆̀̆̄͆̀͌͐̂̽̓̾͂̀́͗͗̍͒̆̏̓͌͒͌́̒̑̐́̃͘͝͝ẏ̸̨̡̨̞̰̜̜̟̦͎̣͍͎̳̝̮̼̦͚̮̖͈̺͓̮̲̤͙̞͕̰͖̩̭̮̯̆̌̊́̀̈́̈́̓̈́͛̌̈́́̄͋̍̇̍͌͑̃̀̈̐̋̄̐̈́̉͌̀̀̀͑̏͐̄́̿̅̽͊̉͘͘͜͝͝͠ͅͅ}̴̨̧̡̨̛̛̞̝̼̫͈̝̞̣̣͈̥̫͙̻͓̯̮̻͇̤̦̼͍̱̥̞̥͔̙̹̲͈̲̥̤͚͚͕̺̫̗͍͖͎̆͗̍̈͠ͅͅ
```

感谢腾讯，qq自动转义只留下了flag

![image-20220729200743021](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207292007077.png?x-oss-process=hzy)

所以最终flag为

TFCCTF{s3cur1ty_thr0ugh_0bscur1ty}

> ps:其实这是毛刺文字(Glitch Text Generator)，有专门的毛刺文字修复网站
>
> [[Glitch Text Generator― LingoJam](https://lingojam.com/GlitchTextGenerator)](https://lingojam.com/GlitchTextGenerator)

# FORENSICS

## BBBBBBBBBB

> BBBBBBBBBB BBBBBBBBBB BBBBBBBBBB BBBBBBBBBB BBBBBBBBBB BBBBBBBBBB BBBBBBBBBB BBBBBBBBBB

给个jpg附件，打不开，hex打开![image-20220731214605921](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312146005.png?x-oss-process=hzy)，好多BBBBBBBBBB,暂时没啥思路

握草了，后来尝试了一下把BBBBBBBBBB全部删除，tmd，妥妥脑洞题

![chall (1)](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202207312146466.jpg?x-oss-process=hzy)

TFCCTF{the_fI4g_1s_th4_w4y}

# REVERSE

## SOURCE

> My intern likes to hide things in apps, but they don't give me the source code. What can I do?

签到题，shift+f12就出了

![image-20220801135810494](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011358577.png?x-oss-process=hzy)

![image-20220801135820798](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011358868.png?x-oss-process=hzy)

TFC{3v3ryth1ng_1s_0p3n_5ourc3_1f_y0u try_h4rd_3n0ugh}

# pwn

## RANDOM

> I created a random number generator as a project. Unfortunately it only has one option, but I will add more soon (or not)!

pwn签到题

![image-20220801140028072](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011400156.png?x-oss-process=hzy)

nc之后是这样

![image-20220801140219945](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011402997.png?x-oss-process=hzy)

分析一下main函数构造，可以发现输入一个数，然后先判断这个数和1是否相等，若相等就会随机打印一个数并输出

> rand ()函数是**Excel中产生随机数的一个 随机函数** 

否则他就会判断是否等于1337，是的话就会打印出来flag

![image-20220801140543689](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202208011405755.png?x-oss-process=hzy)

TFCCTF{Th3r3_w3r3_m0r3_0pt10n5_4ft3r_4ll!}