/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","c3cb47d8421a6aeaab56295ef68befd9"],["/2022/01/11/博客制作遇到的问题/index.html","f276f6734a7c8e1ce20c22e8fdec0f6f"],["/2022/01/15/C/index.html","d710db47f2ae1a268939e74b77aa8e4d"],["/2022/01/18/新版next置换/index.html","e004903cfef020c9e50ac0f3a3b4204f"],["/2022/01/19/不蒜子相关问题/index.html","2deefadb5cce1a09f4e9251e12b1ddb0"],["/2022/01/19/框架问题/index.html","b56d40fcc74778ef74d80fbbfd0084df"],["/2022/01/20/ctf之reverse/index.html","4d5a0b6e357d1f585ff4fc3165119d2d"],["/2022/01/23/misc隐写题目总结/index.html","74d9048a41e4142db3ff4b26d4090de1"],["/2022/02/01/684/index.html","6e9a26f91e6ea00a2214d524f4515777"],["/2022/02/03/留言板/index.html","36081d271c33260e7efbbe622d0b28e6"],["/2022/02/04/SQL简单注入/index.html","3a9a819f8cd4b6b6f9b27a5312d083f4"],["/2022/02/05/最全的HTTP头部信息分析/index.html","239ffe78e465e8aa34693997f1b76b61"],["/2022/02/08/ctfshow文件上传/index.html","7c18ab1631c639b03fcca70e65ca0d85"],["/2022/02/08/常见密码类型/index.html","c73437664d7ac5c59c33f10f633f4ea1"],["/2022/02/12/VNCTF2022WP/index.html","1ab4fb30c3f0b7b91f71f13c6f55672d"],["/2022/02/20/ctfshowPHP特性/index.html","d4d95537bb22c36b21c04960fdb22fb4"],["/2022/02/25/php伪协议/index.html","c1ded4b8fb1ea97d897a154128f1a67a"],["/2022/02/26/ctfshow文件包含78-117/index.html","0ef547bd5fa5b7a0678b2cd0efbfc54d"],["/2022/03/02/Clash漏洞/index.html","12d551839e034e430567cf850555247f"],["/2022/03/11/流量分析之题型解析/index.html","4b912e6df17c86ad44c70e68a54586d8"],["/2022/03/15/ctfshow命令执行/index.html","dd336e2549a37aea0cbc033582abd687"],["/2022/03/22/CGCTF/index.html","490d84c1da851b70a68b7b039045bce8"],["/2022/03/24/ctfshowxss/index.html","03a3f3e919ca591414d6a00022dd197b"],["/2022/04/04/黑盒测试/index.html","caf2373295b4cfb3fc85ae1849ee55f2"],["/2022/04/11/nmap/index.html","0ef332d3825a3a8f0985f0628aee968a"],["/2022/04/12/渗透流程简要记录/index.html","1524139b8257fd9f92270ad9d84a5913"],["/2022/04/12/渗透测试之攻破登录页面/index.html","3273c7391f34d31093238b79098370ef"],["/2022/04/14/xray扫描器/index.html","4e71c11571f4d2b4e65bc5b2c2e60b54"],["/2022/04/15/ctfshow反序列化/index.html","4d42c32b02dbbe4ee506906194263bbf"],["/2022/04/26/渗透测试实战/index.html","307c11ed4058b929f2b1fd5f9010316a"],["/2022/04/28/sqlmap教程/index.html","ac23441b52e5b3b5af69080af34b2b38"],["/2022/04/30/认知文件上传/index.html","f041e002b98cd81c5ec0d7193ec58e55"],["/2022/05/03/nahamcon/index.html","49e03142faf8535dfe44b38f15cd631f"],["/2022/05/15/awd/index.html","27d3a3dc02036144a8d14686a0a6c2fa"],["/2022/05/22/DASCTF/index.html","859bcbdba42eb1befbdbbe46cca63883"],["/2022/05/27/520/index.html","abbf7393a9701fd3d2f9af447613d2db"],["/2022/05/27/ISCC2022/index.html","93a8fb7997aa84235feb7d16f749ecb1"],["/2022/06/01/第五届世界智能大会/index.html","c9445ab4f6777b4ce244bf0d1c4bfb6b"],["/2022/06/04/SEETF/index.html","ebbad43adf5d0b19e156a1fc34fdcba2"],["/2022/06/04/bcactf/index.html","e083ad4f4857cfa54232f5200ab5c29b"],["/2022/06/05/BSidesSF CTF/index.html","8be053ea866c175c3741248fe2228281"],["/2022/06/07/Docker部署web题目/index.html","a72b4620941f0881d57707c022afefc5"],["/2022/06/09/利用oj搭建C语言考核/index.html","672d90250dd46ec2c47d05995e592c0b"],["/2022/06/13/限免题目/index.html","c31649cec29324993e9aacb0bc85eb71"],["/2022/06/14/钉钉rce/index.html","b12795e969444c59f160317b436a8a26"],["/2022/06/16/内部ctf/index.html","f5eee15cc1ac7ea92e2339cd7aee75e0"],["/2022/06/25/攻防世界高手区(一)/index.html","c0cd9cf1145d3bb28158c7f86c897c42"],["/2022/07/01/两小时AK赛/index.html","6a15a0ec5d595c6b6bcb1a6de2f25c68"],["/2022/07/03/鹏城杯/index.html","1e4db755227fae2dfd32b2daeba159fd"],["/2022/07/04/XXE/index.html","3d91b81dbca7e83e1be665dc3c0b1e01"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","45f386d575cf3458272d7764aa848a44"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","df3fd50580cc8fa9246e996db36514d3"],["/2022/07/08/chinaz/index.html","400decafbef35282f10af2e7025119d1"],["/2022/07/09/蓝帽杯初赛wp/index.html","67df1c905b51a63fd49311dc37894794"],["/2022/07/17/NepCTF/index.html","c94151fa57890152f02ce31475f52495"],["/2022/07/19/2022ImaginaryCTF/index.html","c2ba995dc41feb71978a4f390887798a"],["/2022/07/20/局域网攻击/index.html","47b283bba7eaa77ff2ea7c32f820d0b4"],["/2022/07/22/2022BDSecCTF/index.html","99cd3042e61cac0f99c012676b227ccd"],["/2022/07/25/DiceCTF @ Hope/index.html","5768722d54bec2ca1af922e13e875b0e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","beeac91b0a4091d8b319a7d95de3ed25"],["/2022/07/31/TFCCTF/index.html","69a7403137971c73c2923eff663a0fd3"],["/2022/08/03/NSSCTF-r4/index.html","e5a18d382f531c794da52af91951cd3e"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","6d3bb1281d67f035c5adb72ca9bdaa67"],["/2022/08/12/T3N4CI0US CTF/index.html","4172763a224d2b563b594080bf7bec39"],["/2022/08/14/SHELLCTF 2022/index.html","1108bfe72d4bfc8c9a7b45a2b233428b"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","591acbdcc17042e52a6c151b9f98ba0d"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","2aaaa75a5f2afa1425fa58d6af3722f4"],["/2022/09/16/柏鹭杯/index.html","196baf7e4ca9e9a54ab50af76f4acd7a"],["/2022/09/20/HUBUCTF 新生赛/index.html","a784475f309209ec756a4a741e78658a"],["/2022/09/27/NewStarCTF/index.html","fb0672ed7e59aa663b57e14339874c5d"],["/2022/09/27/打靶-渗透测试1/index.html","6ef7d328808697304da458f7bd97d046"],["/2022/09/29/tp6漏洞/index.html","020d15ff6d5ba04c37fac9f9f92d1f22"],["/2022/10/02/SWPU NSS新生赛/index.html","425c378932648d0525780d839cd67fd7"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","bc1ae2acc2dfb9d9f3962be5c05e4306"],["/2022/10/27/Moectf西电CTF新生赛/index.html","38648438c9184da527d74dc81595d89a"],["/2022/11/02/HNCTF/index.html","82238a14e89e2d9ac505b97a81455df7"],["/2022/11/04/2022工控CTF/index.html","67e85797f99687c61cb5b808d6e2184e"],["/2022/11/21/极客大挑战2022/index.html","5c6ea42323e8623d1e00ca042a90bbc5"],["/2022/12/05/TUCTF 2022/index.html","051244e05f5cc1ab409a4c80b8223356"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","521d120bf99cdfe96b9bee11abb796d2"],["/2022/12/18/金盾2022/index.html","fd6eed130486cf8f5a795f2ced162cda"],["/2023/01/01/CATCTF/index.html","8450da598d1a591fd9448b013a495f84"],["/2023/01/09/RW体验赛/index.html","e98d8e70794b42afde85750ac04edd59"],["/2023/01/10/铁三/index.html","3689d964dbca5200f8c33a40226b65ad"],["/2023/01/16/Ugra CTF Quals 2023/index.html","839cd37fa5498f3318bbc55a85ddcda2"],["/2023/01/18/山石2022冬令营/index.html","c0828b73cc59fd182f070d3bdf92fa0d"],["/2023/01/19/SICTF/index.html","41ab6cc27792d2a0b957122dc1fc9ade"],["/2023/02/04/2023西湖论剑/index.html","3f0e767e32613ec1951fb600140d8dc5"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","d3f9b0617efdeb16d3a365b8d028dec0"],["/2023/03/04/公安/index.html","993322bd0592dcb4030a20b2cfdf6d4c"],["/2023/03/07/mysql之udf提权/index.html","569e143be47106d07276c6c3b010048c"],["/2023/03/07/红日靶场练习/index.html","4422228ced52b82f19b3797ac811cdb4"],["/2023/03/27/NKCTF/index.html","508cb5490fdca82f18c55f5101c0ee0a"],["/2023/03/31/楚慧杯/index.html","b3195afec70e9c2e92514e9f4ba3c845"],["/2023/04/23/HDCTF2023/index.html","1d33180d8f95ab09567653b0b7927e1e"],["/2023/06/01/2023CISCN初赛/index.html","abd212a04d71b54060a245148206593e"],["/2023/06/28/2023CISCN[华中决赛]/index.html","6f9441df3fbff4f770ede01c3379fcf6"],["/2023/07/10/CyberSecurityRumble Quals/index.html","6e8ff565a10dcaab50a4ec8cd52872fa"],["/2023/07/22/2023BDSecCTF/index.html","664a714c817e3ccbbd2f51424f2dd9b5"],["/2023/08/07/SQL手注小记/index.html","16fb463199246449ae4d42b21b5accad"],["/2023/08/27/2023陇剑杯/index.html","9c878c804249ace660c881753bc3d8b3"],["/2023/09/17/2023蓝帽杯半决赛/index.html","414afc2e1c312877c8869c7b3c6243dc"],["/2023/10/23/对于多层代理的研究/index.html","f26cd316d4b78979697a68988ab27b2b"],["/2023/11/25/金盾2023/index.html","7cb3bace11c922bc220655a2121557bd"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","374d42f8fd3a77bf8bcaacdba1b11220"],["/2023/12/18/2023强网杯线上赛/index.html","aaf967d4edb827e190030cc83d83f3e7"],["/2024/01/08/基础ROP/index.html","20229e97b57855f6806e5f63938ef186"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","f43781296881858fff4e3eaea4a56b4a"],["/2024/02/13/打靶-Tr0ll/index.html","9ccf231e1a28801c602b97bf6aa589dc"],["/2024/02/14/NSSCTF-r18/index.html","c9a8faaf4dc78396727ada8e2a0ac5a5"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","c2bb92d515180ee694e9c03a61f6fed4"],["/2024/02/15/打靶-CFS三层靶机/index.html","74d5a541d2291adca4a1ae48b339ce0c"],["/2024/02/15/打靶-应急加固【简单】/index.html","0b12fdbfcf86189853959e74fdf3cecb"],["/2024/02/17/2024VNCTF-WP/index.html","948e813786684eef1d9a4067df65fb86"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","e0713d424e22fad52c8cd670bb56dab0"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","8bdbf946f61d2cd1a2daa7e5d9520a67"],["/about/index.html","04a2afe1848c0bb0b1695f64a5c1be23"],["/archives/2022/01/index.html","6f5ae1189f0923114131eba5768c2fdb"],["/archives/2022/02/index.html","f73898b64a44dfd0317c1744c1f11159"],["/archives/2022/03/index.html","a8b4c7776c7bb5ad80262953e22bd8da"],["/archives/2022/04/index.html","7e35287c0bcabe7bc79ad8f177a9b596"],["/archives/2022/05/index.html","609cbd8aaebc9e466fc1f60826f1cde8"],["/archives/2022/06/index.html","5034d1a5bc56e669e00c17c4c42b296d"],["/archives/2022/07/index.html","d8c2b1172fadcab3a82df68d69fd88eb"],["/archives/2022/08/index.html","1eba1e4fff301ed09129b545598e53c6"],["/archives/2022/09/index.html","ede148e01079087388ee1f879f9345c4"],["/archives/2022/10/index.html","9501fdbecd09566dc70b4cdcfec578c8"],["/archives/2022/11/index.html","9f102865a3f73e34e08a6b30f6a33dc4"],["/archives/2022/12/index.html","3cece27a32909d7fe06286a96ab98955"],["/archives/2022/index.html","be10c147d3233878569da184e73b5df0"],["/archives/2023/01/index.html","0e453d7874963f66640f6bf936938038"],["/archives/2023/02/index.html","ee4837bb0a6ca0da11f0a7a16391ddea"],["/archives/2023/03/index.html","794736d822258e5e18e1b57690ed8db0"],["/archives/2023/04/index.html","e97641744db9d2c0cd7aa22d85c7a349"],["/archives/2023/06/index.html","7e8f7f86433da9b2455e62e31832c18d"],["/archives/2023/07/index.html","306aaebfb257ed185c3212006c513221"],["/archives/2023/08/index.html","2d55d0a14e74a513f547679e6ffae442"],["/archives/2023/09/index.html","e2fd0503c827d61a3dc9835f16382894"],["/archives/2023/10/index.html","49d8ddfed139e9b5a7672826344e130b"],["/archives/2023/11/index.html","a1e46d10c550d9852b3e89bdd903cd9c"],["/archives/2023/12/index.html","57339e5913a0aed530a1dbe8ce527439"],["/archives/2023/index.html","b1c550feb4244744184c4d6deda8b05d"],["/archives/2024/01/index.html","6e9de8e9268aff01b8036e49567b925a"],["/archives/2024/02/index.html","53b4d8c2f675b98bc71441de1a74ea5d"],["/archives/2024/index.html","7907f94cf2133af6d1da840b65416cc7"],["/archives/index.html","5b6abf7c2a2b9133c1cfc18d2bc826d7"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","b9e3d749ed6f099d632444928f7cb988"],["/categories/CTF/index.html","f394cc79d7bb531ad293702c34de4795"],["/categories/PWN/index.html","a97494b08239b921ba0d141f216e25b2"],["/categories/RE/index.html","c9dd30233b59cf20a6ee050590c967f3"],["/categories/Web/index.html","57f8efde3bc87a6a1d59c10e0feedac9"],["/categories/awd/index.html","d3de410c961f2709a96c2bca5078212e"],["/categories/index.html","06091a9dbf597b648309cab1d18f706e"],["/categories/misc/index.html","106c5f8ffa1dbc9683aa3e742551f84a"],["/categories/博客相关问题类/index.html","9a13918d0c967ae5fa778db44e050801"],["/categories/局域网攻击/index.html","1238d0b6759309c24cb7ab1deb4de553"],["/categories/心得/index.html","cd7199ca5847ea02a03f37162b1a0ea4"],["/categories/渗透认知/index.html","249ef24529d54309c0e77acd99c56ab2"],["/categories/漏洞复现/index.html","0fb51f1f0638a2024d0ecf82813b5ad7"],["/categories/漏洞测试环境搭建/index.html","544f736b0bc3310f70b9f72bd968ee81"],["/categories/赛后复盘/index.html","4d52f23680ad81772ffeef97328cf7bf"],["/categories/靶场训练/index.html","fbad34b13fee65cef6c591183de5bfff"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9ea8150b00fc0c1f74652a8c4b7c034d"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","f7c3cd3fcb22e5104bceb2e66ba5477b"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","016f28fdb6e0d8beb960e6ee35a2e25b"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","734037c39762be4cc5788fc028405d82"],["/page/10/index.html","6a827c879e566d54e4356ae1020d4bc0"],["/page/11/index.html","58346de1e902ead9602c3b3e217a91cb"],["/page/12/index.html","8ea8de423c7188d0076fd1ea9b81d50d"],["/page/2/index.html","03fe901f5d107ab867938d2dfca2e6af"],["/page/3/index.html","2d071fba1a17d3b355ab6e2e6d60b50e"],["/page/4/index.html","50670f55f222b3590616974298a4c2c6"],["/page/5/index.html","9121a46f93fb87f2bd435ea3984184df"],["/page/6/index.html","a67d3fe6a8d546d6a2784127e0ec0a99"],["/page/7/index.html","536dfa7ebb31b8365d900a8f6fd792ec"],["/page/8/index.html","b839606c379c2b310439386e19d8ee68"],["/page/9/index.html","d83dcc53292928063a12c27c8e1c8c48"],["/sw-register.js","74bef554493752288a3301fddff99ab7"],["/tags/C/index.html","72bb4d2464378838fea0f6786ad2f45d"],["/tags/CTF/index.html","1b3a7f1293838d6d465ab2fbeba3a574"],["/tags/HTTP头部信息分析/index.html","b94a0f5ab3246e3fe0dc6e2141988f09"],["/tags/PHP伪协议/index.html","b3566baaaceaf4f04f9c6b96a5181c7a"],["/tags/PHP特性/index.html","527d1799dcdc475bc7e587541979a7ca"],["/tags/PWN/index.html","e60af2514eef5849d4c74785852d33b9"],["/tags/RE/index.html","dcf96e0c6f5a7231e41009a2dab3ed15"],["/tags/SQL/index.html","5c153228022ff7bb805c540c4333c84c"],["/tags/Web/index.html","1d39ae4aa64b1a524b5e5ffefeb8b2b5"],["/tags/Web工具包/index.html","041440bce811169d7b7eb2f6a9059312"],["/tags/awd/index.html","64623fa1a39909002245d2125ed8dad7"],["/tags/ctfshow/index.html","f61dac21586ce705d3c810bee8a898a8"],["/tags/index.html","93f42f96f33c477353cc5a93cba9b6f4"],["/tags/misc/index.html","8149c65a5328f00eb9a73e8873f895f1"],["/tags/next主题失效/index.html","58e7130a65302db69f2a156661165ef3"],["/tags/wp/index.html","bf7ae444972f9aa40d867b9106e53d97"],["/tags/xss/index.html","4d276325f421b603216fc3a248328ed4"],["/tags/xxe/index.html","d8bf4609f1b42ab950a08ae8325e10ea"],["/tags/不蒜子不显示/index.html","4a3610b6f5992da50e11c37890eccff6"],["/tags/博客/index.html","89b011d9d3693ccea1f8c672f8ad8d2f"],["/tags/博客主题优化/index.html","9631e9c544eb3a5aa5879af875da72b7"],["/tags/博客死循环框架问题/index.html","14bd0ed738e38c27d1edbf6ca9b5c5be"],["/tags/博客部分问题解决方法/index.html","83123e5ed5ba08161d387c998ee2866b"],["/tags/反序列化/index.html","0b5316495c8b60d4987b9caacef41eea"],["/tags/命令执行/index.html","6529c78e19736d885569ae1c2e50f8cf"],["/tags/局域网攻击/index.html","21290e8074d8beca6b9c292c54714e6b"],["/tags/常用指令/index.html","7cc8700a567ab4eceb09745c54b5a5bc"],["/tags/心得/index.html","6ab086e5cf22241939ff021655df179a"],["/tags/文件上传漏洞/index.html","916bd4f36205a7a78bf797aa5b9cff14"],["/tags/文件包含/index.html","a37af47135d25cf7daa320b77edbd576"],["/tags/流量分析/index.html","9d5c550ed60ed31b9f7fba58ef06573d"],["/tags/渗透/index.html","7e943246a7e0c8705fd73593cdd7d0ae"],["/tags/渗透认知/index.html","bf024a35f6705f9f3ae13e57a76c3d6c"],["/tags/漏洞复现/index.html","720197915a3a3de4637e26d9358d342d"],["/tags/留言板/index.html","b2b2dbda4236d5409138f5710a8ed677"],["/tags/赛后复盘/index.html","a3e747f19706cc7b664ac7c3a7601f5d"],["/tags/靶场训练/index.html","57eab9e602cde7407fbbc987936c88d3"],["/tags/黑盒测试/index.html","de626cfabb3185e32d9aa0c13a6c4644"]];
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
