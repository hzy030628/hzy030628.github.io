/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","ce0a858b920ac6eeec60e45995fae3d2"],["/2022/01/11/博客制作遇到的问题/index.html","fac6bec01d90ddb7ebe52bdd65c16c73"],["/2022/01/15/C/index.html","c13d7c00bef1257e4b7b9572c60a8b03"],["/2022/01/18/新版next置换/index.html","6adb6ab1901934bff8053af80be1ef56"],["/2022/01/19/不蒜子相关问题/index.html","19cd57cf92abec19142ec333d6427edb"],["/2022/01/19/框架问题/index.html","d293b5aed84f2eb28e18defa9af39730"],["/2022/01/20/ctf之reverse/index.html","8cb027e2d6b3566cdab80eee092f97b0"],["/2022/01/23/misc隐写题目总结/index.html","26735fa8a1598d9b6c93d27378ad2bcc"],["/2022/02/01/684/index.html","3030172286ccc648d82a14e025c4f4d6"],["/2022/02/03/留言板/index.html","29ea78aa8238eeea0872cb557fa5873b"],["/2022/02/04/SQL简单注入/index.html","5c974ffbcc7f7cd300a08fa0af956e14"],["/2022/02/05/最全的HTTP头部信息分析/index.html","9fc0f02762aa861a6459d247775dc661"],["/2022/02/08/ctfshow文件上传/index.html","ea8c319900a437c291d6ecc6d2e47554"],["/2022/02/08/常见密码类型/index.html","d677e2b215df0fdd2bc8eb73ade3795f"],["/2022/02/12/VNCTF2022WP/index.html","bf8a3efc23edde5cf29b4f539a533d70"],["/2022/02/20/ctfshowPHP特性/index.html","15b06509ca4230fbaa26e3c63b5a7285"],["/2022/02/25/php伪协议/index.html","0c3937735ce51a89c42b4df6f221f0e5"],["/2022/02/26/ctfshow文件包含78-117/index.html","3382fbe9e76db0b0cf082ec3b5647cd6"],["/2022/03/02/Clash漏洞/index.html","dc549071a0ef29be972f0eb807928b77"],["/2022/03/11/流量分析之题型解析/index.html","d93d18ed97bdb53efe2a15dea3a9e52d"],["/2022/03/15/ctfshow命令执行/index.html","260c79572022c0346e04aaef9743bc97"],["/2022/03/22/CGCTF/index.html","6835c5e714272c8a9691e05a70cac738"],["/2022/03/24/ctfshowxss/index.html","1bd10e8aeafdbf1ef77341ec965b98eb"],["/2022/04/04/黑盒测试/index.html","3ef63c581a54ad8af1cff4ae544af806"],["/2022/04/11/nmap/index.html","0c2736801a24213972037743e5830822"],["/2022/04/12/渗透流程简要记录/index.html","f1733068c3e5ebd08fcba33cdeaedfab"],["/2022/04/12/渗透测试之攻破登录页面/index.html","00774e5fc2ddf0726104f1c69444af10"],["/2022/04/14/xray扫描器/index.html","c843dbe12285a8d6df31096304969f58"],["/2022/04/15/ctfshow反序列化/index.html","e3b9e6984cee0d4976b44993e9f8a824"],["/2022/04/26/渗透测试实战/index.html","352092a1836a5f784f5cc7c6ac3db55a"],["/2022/04/28/sqlmap教程/index.html","70cf84d683492feebcea65347a2b91f5"],["/2022/04/30/认知文件上传/index.html","77a0a52ce97fc44c7337bcba0eb87418"],["/2022/05/03/nahamcon/index.html","3e88a9595496dd8a7fea973abd00abe9"],["/2022/05/15/awd/index.html","86cb65c7167d5eed3acda3f6814205be"],["/2022/05/22/DASCTF/index.html","b107c649a4749ab45ec731fe7718754f"],["/2022/05/27/520/index.html","25da5936637aec9f08b1f3866238fcb9"],["/2022/05/27/ISCC2022/index.html","64e000a9575e75383fe530836b398458"],["/2022/06/01/第五届世界智能大会/index.html","9fa3864ab5f89163f82279e778686175"],["/2022/06/04/SEETF/index.html","3c67fe52b215f194f4a02fe77994507e"],["/2022/06/04/bcactf/index.html","81e6e3cff667c1ada0f149d312f5ec2c"],["/2022/06/05/BSidesSF CTF/index.html","c1c19454b46f2f1252a05c7ee0779e60"],["/2022/06/07/Docker部署web题目/index.html","eb43d595772020eeb61e0d125a799222"],["/2022/06/09/利用oj搭建C语言考核/index.html","1c7a4f9fddd02f1ab6f3bfe9a8ccddb0"],["/2022/06/13/限免题目/index.html","96f9e097d0e46fe7522f86c6f084f183"],["/2022/06/14/钉钉rce/index.html","e08a084cfe5abbec8a5c5088d2127b1c"],["/2022/06/16/内部ctf/index.html","22d74a68fdccc8d902192c4227a6463b"],["/2022/06/25/攻防世界高手区(一)/index.html","90c9f1f22ca94269f8693e57e361dbc5"],["/2022/07/01/两小时AK赛/index.html","ca6b03fbf275cbf611bd0467e55268a7"],["/2022/07/03/鹏城杯/index.html","9e95497c69af29eda795df1edbe2ae5f"],["/2022/07/04/XXE/index.html","23a2c638baa4486d95778d6b6744943f"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","3ddf58bf1525fc3fbc6a0b16275a6bf4"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","9b25c3febab037da0918529dbec32057"],["/2022/07/08/chinaz/index.html","480430b01f994245865036eb8fec0349"],["/2022/07/09/蓝帽杯初赛wp/index.html","65320709cfb02c415de2e2b03cfc36fb"],["/2022/07/17/NepCTF/index.html","d9d6a7eb5bbc08b896075a2eedf78e1c"],["/2022/07/19/2022ImaginaryCTF/index.html","86d05a7db0d025fb74fef25fa4138764"],["/2022/07/20/局域网攻击/index.html","095bf0f8b74888c0db2a4bf19bf45a70"],["/2022/07/22/2022BDSecCTF/index.html","8abfdfef4962908dec7db6296b120603"],["/2022/07/25/DiceCTF @ Hope/index.html","be26dd0451c27b30e8810fdb70b88aeb"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","bfad049db0918cd94b7c0084f8b6e9f6"],["/2022/07/31/TFCCTF/index.html","46a833bc1ee4933c5c9ed743955248ed"],["/2022/08/03/NSSCTF-r4/index.html","15b76fc30a1ab45d17ec513f86e2bec4"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","bbc85bdfed94251f258cfc2ab8844811"],["/2022/08/12/T3N4CI0US CTF/index.html","477d16f65a90d7cef7eb47133cfb83b1"],["/2022/08/14/SHELLCTF 2022/index.html","0caa37d3f70030c0cec3de38dcdf06b0"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","71a01a9b792559a4d1d5308e57732cd5"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","8251a0d08960bc97c7a28b78adf368b7"],["/2022/09/16/柏鹭杯/index.html","df444b43d53457dc9c608345268805d5"],["/2022/09/20/HUBUCTF 新生赛/index.html","2f8b3235713ec27db5d9c556c9894d40"],["/2022/09/27/NewStarCTF/index.html","4f71a1d2b11ad728ed0343a0519311de"],["/2022/09/27/打靶-渗透测试1/index.html","e7440c0cb411e7b9efd4819a392ad3a6"],["/2022/09/29/tp6漏洞/index.html","11217c9fa8ecfb763fcbf4e360d98324"],["/2022/10/02/SWPU NSS新生赛/index.html","3b11a5e240aa5226eb486b2b65f1ca22"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","41ca620c4df09c0ad3b6fef277e97f64"],["/2022/10/27/Moectf西电CTF新生赛/index.html","29680d9df371d373ad3cc3d46f5aeacd"],["/2022/11/02/HNCTF/index.html","edd0d6f09f3efe251a8b1064452b06af"],["/2022/11/04/2022工控CTF/index.html","091daf2103b89856cdc32d5e114631dd"],["/2022/11/21/极客大挑战2022/index.html","ac35b3ae2eac05e5acd5407dafba2f64"],["/2022/12/05/TUCTF 2022/index.html","a9a4e5a6afec0d28bb6e625ef3ec13e6"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","76d6548187bd28ed2f792059da178d7c"],["/2022/12/18/金盾2022/index.html","b89a2bc37bb6da2ddcf5f516fb90f4ad"],["/2023/01/01/CATCTF/index.html","64f3625238199d1581200201e9d9588e"],["/2023/01/09/RW体验赛/index.html","41f7d553bf7436ee58062bfe41312807"],["/2023/01/10/铁三/index.html","fb3b01975e1683bce028116aa9ce9a4f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","28aaffcf345f587b56125a3ab7783b25"],["/2023/01/18/山石2022冬令营/index.html","c1e5b341122f7415aad3e1f7f14249bb"],["/2023/01/19/SICTF/index.html","9a58104a040e8258716dc53a5cfaa391"],["/2023/02/04/2023西湖论剑/index.html","c2eafc07f98cc85cbe23fb94a61a2db3"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f0b0ffe7effdf40af5ddc425f0d28565"],["/2023/03/04/公安/index.html","cdeb95f34cc341eacbd739b563b6936c"],["/2023/03/07/mysql之udf提权/index.html","5da47d58ea64cd230a5018b5567edec3"],["/2023/03/07/红日靶场练习/index.html","7f040962c313693e18c2c229028dfe6d"],["/2023/03/27/NKCTF/index.html","3d4653dffbcebb7497c29f9c6524e6b3"],["/2023/03/31/楚慧杯/index.html","902e70325ae9f0fff085c9c9dea7f044"],["/2023/04/23/HDCTF2023/index.html","c434a6d092e9d4363a57d8af2c118bad"],["/2023/06/01/2023CISCN初赛/index.html","6051c6cc93a10c186b35bd44ddc22fbd"],["/2023/06/28/2023CISCN[华中决赛]/index.html","40c9051855ba3083449cf73623d13d6f"],["/2023/07/10/CyberSecurityRumble Quals/index.html","5f28d134bdb2834a0f7f80a085b9e27d"],["/2023/07/22/2023BDSecCTF/index.html","4e3075fefb8e1a6a1aaf9c8f311172fa"],["/2023/08/07/SQL手注小记/index.html","8cfd40d9e1eb473ae7ff959cfbb5f7aa"],["/2023/08/27/2023陇剑杯/index.html","c6e1ca1f2c7578a1d78acc3829ff0ab6"],["/2023/09/17/2023蓝帽杯半决赛/index.html","b8c98e9df7fa964fda4ff7dcdaf8dd85"],["/2023/10/23/对于多层代理的研究/index.html","745d2cdb0d45abe0f1bfe1b4a6ce0666"],["/2023/11/25/金盾2023/index.html","539668ee989001e0b1ca1f324f1a47df"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","ccfbdbb1af84a5531f27f4c087ef93f0"],["/2023/12/18/2023强网杯线上赛/index.html","3325222a746508ac21828471d15cc886"],["/2024/01/08/基础ROP/index.html","2219b22906c3ec938657b407630840ab"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","e3d2ebf9a19c1043ceff90c3b329b4e6"],["/2024/02/13/打靶-Tr0ll/index.html","f07db0359dac8d4ae6b4877f0351d95d"],["/2024/02/14/NSSCTF-r18/index.html","837fbe5eca9225ec77e852e51ab2b6c2"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","5fa2c61bc244a919d8ba8476056869b6"],["/2024/02/15/打靶-CFS三层靶机/index.html","a8cef5d0b35ccfbb1370f1a9ab814152"],["/2024/02/15/打靶-应急加固【简单】/index.html","f4a4b168eaafc07da80658e2003ca0df"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","9cec561d28a159f8fd6012d47b2436f8"],["/about/index.html","9b9017fb90c7324d1c0d47dce6ecc31e"],["/archives/2022/01/index.html","53923d27f2dba2ba7703d1fea5cf836d"],["/archives/2022/02/index.html","d2578bf9aa47067e40aa166b804c305f"],["/archives/2022/03/index.html","c8dde5c79dae714e40549df77c0d378d"],["/archives/2022/04/index.html","0f583207580c43672b44ae9bbfc329d9"],["/archives/2022/05/index.html","50d779f674942012a0f8ea09f1d3dab6"],["/archives/2022/06/index.html","43a788e6c07b976bb9f228e0c7c6e5df"],["/archives/2022/07/index.html","62916dec03b451367960819e9cbf60ed"],["/archives/2022/08/index.html","6f3943cb519ce7cb2863ede9ef654363"],["/archives/2022/09/index.html","4b07d3ba404bf843446643f536fc8f31"],["/archives/2022/10/index.html","047d11e0a6e7cde26b4c4a5a42c5a886"],["/archives/2022/11/index.html","60f0c2f5260e744aeeb5be545b6cb66b"],["/archives/2022/12/index.html","0d18ecb9e5cc5f0270fb2f4307f35ebe"],["/archives/2022/index.html","a4390875da768c7e4dcfc78d9d95f2ce"],["/archives/2023/01/index.html","4f5a468cfa7ca73be9a3e301f50a8158"],["/archives/2023/02/index.html","63db91e87ab69694ff8fefd3eb0da54c"],["/archives/2023/03/index.html","db4e1b555b54212292fc83b0102a5819"],["/archives/2023/04/index.html","9f47ca84f4ccc4145a0dcaf960051bf6"],["/archives/2023/06/index.html","1a6d19951471de87f6ed1e836093526b"],["/archives/2023/07/index.html","17d988c14b9387259662d173bf22a3c9"],["/archives/2023/08/index.html","3627857986b79f8590e0e7a70e68e28c"],["/archives/2023/09/index.html","b759c4f1c6c719727fdfbd64bd9e069c"],["/archives/2023/10/index.html","a229bc1ac66e216c84c29726b9d3ad69"],["/archives/2023/11/index.html","471310edf5b7329d62d578af2cafed21"],["/archives/2023/12/index.html","758fcb589038911c7e3b9fe9568e5e86"],["/archives/2023/index.html","eb5f48baf010dce7d8b5b57ffd451646"],["/archives/2024/01/index.html","3dbae9e91631c68a3505f0a211d1cb59"],["/archives/2024/02/index.html","8f2c2c9f97c2ee3720b723cef3643c50"],["/archives/2024/index.html","c529cb7ada1bbb5ebdbe66dc16f22983"],["/archives/index.html","23d28b46659691450748be162d52ffd4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","a76d19e7a9b0b05f013be8ba48c36c98"],["/categories/CTF/index.html","304175a7a2d9f2a03cdf16ae6ff5cc2f"],["/categories/PWN/index.html","8373d77c41af24aff3204b1acf4d2e4a"],["/categories/RE/index.html","1fe5b1fb5646736ffa78a44a5228a8ef"],["/categories/Web/index.html","2dc764e634f45ae6ba5340fbc9d72309"],["/categories/awd/index.html","e15ca20a3333a7d06e4d0f3b219200ac"],["/categories/index.html","4e93281552eec22caaa5bf8db768e063"],["/categories/misc/index.html","a50683a9828f457372605b81a8ecbcc6"],["/categories/博客相关问题类/index.html","431bbfc4047cc9ac57a6e7453f05c544"],["/categories/局域网攻击/index.html","20d3473f876ed3190d637e51c0c34d07"],["/categories/心得/index.html","7239f3bb3bfc49b60ce0260ac8b9cf3a"],["/categories/渗透认知/index.html","f7408de2033751cf76acf6d40d2f2372"],["/categories/漏洞复现/index.html","76d7a120440ee1ec9a34ba12a1dbf14d"],["/categories/漏洞测试环境搭建/index.html","21f4087fbb8504d595d13167da1c2737"],["/categories/赛后复盘/index.html","50daf2d77152a27b8c4911269d2eccb0"],["/categories/靶场训练/index.html","926b13a875164c3a4d22f932955c7bd4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d8556aba949e2778b2af9da7d6052197"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","37b77c814d6b11e8201f442dca1dc969"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","e0f22d43fb66cf71fb4198cbfc3ebb74"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","0f1acfeb357bae4e0579340d990985a9"],["/page/10/index.html","d30764875f10392f81f72d8d8792f011"],["/page/11/index.html","0a58f9e176d7f8eed0c300fec78114ed"],["/page/12/index.html","7b1b48c3197224900821153a80a28258"],["/page/2/index.html","2cb546f54bddea30927a7af2d6856550"],["/page/3/index.html","91e8d088556f9ff64c99756d9c4db53c"],["/page/4/index.html","bd2c419adbf429ad692697dc92f5a1d5"],["/page/5/index.html","835fd1893dcf5cad86cd1e69a69b73ea"],["/page/6/index.html","242e595977b10e36355b47c2dd8ade31"],["/page/7/index.html","7c0beae140d8d3b6df8321076e1307fb"],["/page/8/index.html","cd31e62baab480c9f3f67e086587c609"],["/page/9/index.html","7eb7e40befca0e240bb15a3173876625"],["/sw-register.js","3cd8f3c201af43d325ec299d486dda63"],["/tags/C/index.html","9a16749937a3ba737fe00562f630ff65"],["/tags/CTF/index.html","cb6c53714dcd9ae991db027462271fcb"],["/tags/HTTP头部信息分析/index.html","6093f4f80dadecdde5405354301af073"],["/tags/PHP伪协议/index.html","490e7fcd30b92116171c02039e916b6e"],["/tags/PHP特性/index.html","8a29a727ceaca564771ccc4a21834644"],["/tags/PWN/index.html","24b2985a7ee7e31f8d59287cc636714d"],["/tags/RE/index.html","2f6acba5136380474dbcff092ea362a8"],["/tags/SQL/index.html","36cbbb20b8eb7859e3b0a70a49695fd7"],["/tags/Web/index.html","0c90d7be2f963ecaac181a1f77b60d09"],["/tags/Web工具包/index.html","d21321657a8a6231d7512a91f6dc82cd"],["/tags/awd/index.html","6f5c1887c775ed654b9fe2c6b227bd18"],["/tags/ctfshow/index.html","9ca6971e26b93e2b72f6025c34fcaba8"],["/tags/index.html","9dbc7c82be383cf58944da244a7eb74e"],["/tags/misc/index.html","ed939c684de8c64d1328d3c421601b59"],["/tags/next主题失效/index.html","085270eb0d5329d566bf2bdcfd4533f7"],["/tags/wp/index.html","0e6501d56500bd91ad2e286fc668c56c"],["/tags/xss/index.html","4c87cf5e411f441929ccb1cf1f0dcd40"],["/tags/xxe/index.html","8651b5f677473ca9a6d5439b25768d2f"],["/tags/不蒜子不显示/index.html","2b4b3e0618c3655dff9cae1b378e5dfc"],["/tags/博客/index.html","5172b025a5cab13bc20db242b7628025"],["/tags/博客主题优化/index.html","ef48dd7043b876dc6fda7c90e6cfb341"],["/tags/博客死循环框架问题/index.html","07a6213c3e38baeff832943fa92bd917"],["/tags/博客部分问题解决方法/index.html","80ae4538bd5fd5b81974351810864597"],["/tags/反序列化/index.html","88bac9f5b3a947a68e4fdd81bd6b81c9"],["/tags/命令执行/index.html","d49cca9f4d6411b538acc876975e378e"],["/tags/局域网攻击/index.html","721869b97f3593f03180e46ec9cfa0b0"],["/tags/常用指令/index.html","4594266d50980d889187e45eed96c98a"],["/tags/心得/index.html","51bc28767baf46c1000c7bafd6c876ce"],["/tags/文件上传漏洞/index.html","0111dc3e218031c60be23404aa6fb411"],["/tags/文件包含/index.html","a33771b56dd9d67887f37f69063a33d7"],["/tags/流量分析/index.html","d6d714765e37b1e72a58ead4fbb6f41c"],["/tags/渗透/index.html","5ef236b43a2b40b476015378a1e5d846"],["/tags/渗透认知/index.html","54d1cf8567d71181fe8d8a2b55e58ee9"],["/tags/漏洞复现/index.html","2b123e55f87ed0cb9ad3af294f7e6105"],["/tags/留言板/index.html","9a08929168cd4a59ac66ad933d2792e1"],["/tags/赛后复盘/index.html","6af94f61cca23671727ebd639c3889f5"],["/tags/靶场训练/index.html","0fd35e0abadc3e91f53b6e0fe05e218c"],["/tags/黑盒测试/index.html","9d487086d1854ff2db657ef5126d6dfc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
