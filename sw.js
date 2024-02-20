/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","959550b211f4dba5e208c4168c17ae27"],["/2022/01/11/博客制作遇到的问题/index.html","5a8ce54cd7dbbbdabbe4d2bee0cb93c9"],["/2022/01/15/C/index.html","5d01dc2452a8b239b25cc67eae73c67a"],["/2022/01/18/新版next置换/index.html","4a3ffc7f069e97f8bc93f4b2c512aae4"],["/2022/01/19/不蒜子相关问题/index.html","c6313516174a4d182573586cc3009dae"],["/2022/01/19/框架问题/index.html","2698f24def154662717ab5e214dbf767"],["/2022/01/20/ctf之reverse/index.html","65813fe09b59e6305347116d114d9382"],["/2022/01/23/misc隐写题目总结/index.html","c45ac6279981ca2cb227130ae106e7f6"],["/2022/02/01/684/index.html","aac03be6412c685519bad6bb53f9c96f"],["/2022/02/03/留言板/index.html","089fde8b74e4f0b88699a09a404df770"],["/2022/02/04/SQL简单注入/index.html","2850d923c0f77512fc89931c002b5e3e"],["/2022/02/05/最全的HTTP头部信息分析/index.html","1f8b0486076ec913b07e7e025f1ac920"],["/2022/02/08/ctfshow文件上传/index.html","d46d65d9fedc828ae16c0815e10c5d2b"],["/2022/02/08/常见密码类型/index.html","a0b60083996403ae0ed8c74f56f424fc"],["/2022/02/12/VNCTF2022WP/index.html","d9becd701cdc9c0fc343819b52edfa2f"],["/2022/02/20/ctfshowPHP特性/index.html","61e4248a247a66891cd7433e8d4fcdcf"],["/2022/02/25/php伪协议/index.html","33d1855c85adbe35ddf19a4152dfcee1"],["/2022/02/26/ctfshow文件包含78-117/index.html","cc85f97eeccd639248051bb8ce76e173"],["/2022/03/02/Clash漏洞/index.html","d02c96baa79e4ba67d195436cdb93a0f"],["/2022/03/11/流量分析之题型解析/index.html","bf5ff89f061093196e1109f2626d429f"],["/2022/03/15/ctfshow命令执行/index.html","76d3ce23c990c8390198596df2d239de"],["/2022/03/22/CGCTF/index.html","ae9a812ebc8a044c5f12343d8f1dd99d"],["/2022/03/24/ctfshowxss/index.html","052f570c624fa4caf6a28f515e4e283e"],["/2022/04/04/黑盒测试/index.html","6ff06927f5e0b73583a6434ed0a802ac"],["/2022/04/11/nmap/index.html","d7df76d4b5a686e37d8566f138747ff7"],["/2022/04/12/渗透流程简要记录/index.html","21d9fca8f0765683f8f8ad6140c0a99f"],["/2022/04/12/渗透测试之攻破登录页面/index.html","caba88b4f219575812f6671b9991e0ab"],["/2022/04/14/xray扫描器/index.html","bb8afbc2faf5262c39a7fdaa37946bbc"],["/2022/04/15/ctfshow反序列化/index.html","b4761ca52618819b3cd78ecfe651fcb5"],["/2022/04/26/渗透测试实战/index.html","011a6eaf232537edcf9f8a1b0688c1cc"],["/2022/04/28/sqlmap教程/index.html","698c165807de9f9ce87ad1e932618428"],["/2022/04/30/认知文件上传/index.html","bc79221b54566d5e987a3c3658f6bf49"],["/2022/05/03/nahamcon/index.html","97ac7021a792bf3cf1bb6cfed407b5d8"],["/2022/05/15/awd/index.html","0c7871048b050792fae7910cd55e4bb7"],["/2022/05/22/DASCTF/index.html","845ea6607af9bfaeb79c8c1ef00d3f0e"],["/2022/05/27/520/index.html","476742f3608d722cee662a3ff867d6d5"],["/2022/05/27/ISCC2022/index.html","20cafede6a66df6247dc49651ef584dd"],["/2022/06/01/第五届世界智能大会/index.html","8b1400927d832ac57d4193c72259bccb"],["/2022/06/04/SEETF/index.html","f00542693014935e828cb7ba38d5ce8d"],["/2022/06/04/bcactf/index.html","f0d900432584e740cea2da43802e8d7a"],["/2022/06/05/BSidesSF CTF/index.html","c5b5db3c63dc24d33b84f58e991113f3"],["/2022/06/07/Docker部署web题目/index.html","ba043378319e87c21dd03ac05ea2e6ca"],["/2022/06/09/利用oj搭建C语言考核/index.html","192f436b44ebfa46f8ab3810a942bd51"],["/2022/06/13/限免题目/index.html","9b190588f675f093d85d1f6cfb82360e"],["/2022/06/14/钉钉rce/index.html","804faf1ef7a69ab6f900836e42ffe3bc"],["/2022/06/16/内部ctf/index.html","fd997dedc7e8b3b46f0079eecc276189"],["/2022/06/25/攻防世界高手区(一)/index.html","bb3ec145a34c83e9b33a0381095f86a6"],["/2022/07/01/两小时AK赛/index.html","d13cbf1ee32388cb67df8825db563056"],["/2022/07/03/鹏城杯/index.html","ac01e93a72170a30ca1cbe4ea50ddaae"],["/2022/07/04/XXE/index.html","5197a91f121d09ae0613f5531a3eea9f"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","b9dac5936c29c1f611854422d161df17"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","3f9a8f2ee6014cb1be11af26e3b758c1"],["/2022/07/08/chinaz/index.html","11a8fac606792ef931752b86bbc5df5f"],["/2022/07/09/蓝帽杯初赛wp/index.html","8fd9a44dfc9c7b0d2286c55244f791ba"],["/2022/07/17/NepCTF/index.html","923bd4321e786dac4838fa7af066c176"],["/2022/07/19/2022ImaginaryCTF/index.html","eea083b1a712c70ffffd146a8c489ebf"],["/2022/07/20/局域网攻击/index.html","896dd7548d45a56f00d1ae606e146042"],["/2022/07/22/2022BDSecCTF/index.html","b79ca30df09aaa3168b17366099dab17"],["/2022/07/25/DiceCTF @ Hope/index.html","006f1435951c975895399bfc21f8c891"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","6881393cd74aae5ca406ac7270b59b6d"],["/2022/07/31/TFCCTF/index.html","01b950754cb72ca15ace4046a5172428"],["/2022/08/03/NSSCTF-r4/index.html","4b047f388b5b99f2169871f1ff2b9f33"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","764f757c6e3ca2e951663ffa4906e123"],["/2022/08/12/T3N4CI0US CTF/index.html","4fc039b43756213b4ce56bc83d666d15"],["/2022/08/14/SHELLCTF 2022/index.html","6ee8384f19026bb2074ec4ab1e121398"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","39748ce0ab097e0944dafa4749ad535c"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","513192f7d3c3f75810e42c16ea07e4c2"],["/2022/09/16/柏鹭杯/index.html","dacfe100dc3e567df00e559948ab3240"],["/2022/09/20/HUBUCTF 新生赛/index.html","393aa3b3003e025e25896054b7dd374f"],["/2022/09/27/NewStarCTF/index.html","864b88995c2c526f757d5ef0c469d8e2"],["/2022/09/27/打靶-渗透测试1/index.html","df67b294fb8466af5680b2b6171158aa"],["/2022/09/29/tp6漏洞/index.html","ffd499d997c9c72f57e057aaba9c0f66"],["/2022/10/02/SWPU NSS新生赛/index.html","527125bd3e717a47355aa91506f23b7a"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","4ba9c76fc3b6d167b0d27ac2a21775ba"],["/2022/10/27/Moectf西电CTF新生赛/index.html","d9a3543b1f85d6ac694d1e4487b00b36"],["/2022/11/02/HNCTF/index.html","927f323ee45374f89dc8ffb0d5bf894a"],["/2022/11/04/2022工控CTF/index.html","1cbf52c5628c1fb29eb9bd32b820cd21"],["/2022/11/21/极客大挑战2022/index.html","bdc871141ad64a27e9be57a6d9f0235b"],["/2022/12/05/TUCTF 2022/index.html","a7a3c382d2c70040e2320f31c2250213"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","382b38cb20ac32034558afb5432133d4"],["/2022/12/18/金盾2022/index.html","50ddd94487d12b6f0b9857313f8e1dea"],["/2023/01/01/CATCTF/index.html","9a88871a234c671e95f4e8e13a0a45dc"],["/2023/01/09/RW体验赛/index.html","9c9a30ba8444f57901b60b235e5a1fcc"],["/2023/01/10/铁三/index.html","63c43f9d89f4bc8949062f624bf64adc"],["/2023/01/16/Ugra CTF Quals 2023/index.html","b0af7246a48299002fccad4a0406388e"],["/2023/01/18/山石2022冬令营/index.html","d29f087c8d043ea4fefd3bb31b2baafe"],["/2023/01/19/2023SICTF/index.html","081fe8f82580486d77e948f86c7dc778"],["/2023/02/04/2023西湖论剑/index.html","b6e5fb0a979d012281a05fc426597ac6"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","1d0d85ae25d25d6cf36252619560777c"],["/2023/03/04/公安/index.html","cce10b5b14988137ad63740bf520063e"],["/2023/03/07/mysql之udf提权/index.html","56ddf1bcb84f5864301495a1d6b1c01d"],["/2023/03/07/红日靶场练习/index.html","70338b78b3150d961accf2889c287239"],["/2023/03/27/NKCTF/index.html","6116e4a69db79f4a7ae69062141ded03"],["/2023/03/31/楚慧杯/index.html","8ba6b56f9ddda1e3ff29b49d5dc8adbb"],["/2023/04/23/HDCTF2023/index.html","2f8d96062198fdecf1ab7eee6b787f82"],["/2023/06/01/2023CISCN初赛/index.html","b717f03b128e326bdc34d3962dc9700e"],["/2023/06/28/2023CISCN[华中决赛]/index.html","d552c44628ef393b81aad56aef9b74d8"],["/2023/07/10/CyberSecurityRumble Quals/index.html","072c479a9cfdec5eee9009ee17e72755"],["/2023/07/22/2023BDSecCTF/index.html","11b80c21c3cb94863e091445de869f5d"],["/2023/08/07/SQL手注小记/index.html","702a228a0312bf1ba96b64ef01d3d813"],["/2023/08/27/2023陇剑杯/index.html","008e0bb0e26629db2899a16032d596f0"],["/2023/09/17/2023蓝帽杯半决赛/index.html","16c6bf63c24ab8df6716fad9de52c6c7"],["/2023/10/23/对于多层代理的研究/index.html","201f0a088e7dbc455b6c8c6da5d246e0"],["/2023/11/25/金盾2023/index.html","3fcb9e6031013f7b201305f49e4086cd"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","a3b7d6aa3d1bdc362973d4ef08ebeb59"],["/2023/12/18/2023强网杯线上赛/index.html","56899ecb5c2ff40df6b1eca368d65106"],["/2024/01/08/基础ROP/index.html","6142208703fc96dfa3e55c6406eba862"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","6a2e9e88d7b9b96a2044a5949b66cc41"],["/2024/02/13/打靶-Tr0ll/index.html","33ba6a75e4acb3b4743a7e936f4c914b"],["/2024/02/14/NSSCTF-r18/index.html","b7b89bb823f22f69b78c8f27893e3bb4"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","ecfa21b119aed05afd621289cdc6242c"],["/2024/02/15/打靶-CFS三层靶机/index.html","56a0fa3e8067e9d4680735462b243f55"],["/2024/02/15/打靶-应急加固【简单】/index.html","4948ba3a262ae9b4a37cfc4b4c3e261d"],["/2024/02/17/2024VNCTF-WP/index.html","aa22dc1a8ee585b32e5f54c0db943f11"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","c504abb930ff8436e05ea089fabc0b6c"],["/2024/02/19/2024SICTF-Round3/index.html","88d8b51247042b8bff1210411aeece26"],["/2024/02/19/打靶-铁三域控/index.html","2967b1fd5e9678e16263d91a51480b0c"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","a727f9d7b5790d52a16e84bb0760fdf2"],["/about/index.html","559e12a69cc242a5a6d0ea8dac0a69b8"],["/archives/2022/01/index.html","776eaf1fcf3219490a7fa374def44310"],["/archives/2022/02/index.html","4a864dcfabbdf1d17a9a2626fb4ba94b"],["/archives/2022/03/index.html","6a051b30906a93a697f7838027208594"],["/archives/2022/04/index.html","e28602f2897d9b9720ad16defb2218be"],["/archives/2022/05/index.html","a9340c09d516e749edf7e0163c960ab5"],["/archives/2022/06/index.html","0c7b3805c930906c82d1cc433d1662c5"],["/archives/2022/07/index.html","b9b4bfed7cbba095c108240d1100bf40"],["/archives/2022/08/index.html","f7b6386de8b1366401c1626f590a7a9e"],["/archives/2022/09/index.html","12c5cd157aa38019202f1a19676cd4f8"],["/archives/2022/10/index.html","5678f5032562ca105492a8a2d775e94e"],["/archives/2022/11/index.html","982915ae3558f7acfdf1705701fb07e9"],["/archives/2022/12/index.html","56fd98ed14fcd5ea208b471eec063833"],["/archives/2022/index.html","91a27f0e88a9d1d980b2442cc7261453"],["/archives/2023/01/index.html","34e8165fa73aec27e6d44a9570e1f142"],["/archives/2023/02/index.html","cc5e5a03563cdde57bedce3ce83e0005"],["/archives/2023/03/index.html","c89fd04bf6885381ad816ae7633e7cc9"],["/archives/2023/04/index.html","fc7634363f42b5d1297bec2f882275ef"],["/archives/2023/06/index.html","eb0616e28da970f4b7b11d52d4e05ead"],["/archives/2023/07/index.html","2d3c52ed2656517c539573a8424c9019"],["/archives/2023/08/index.html","fbb11223ec6314f6cbb63ba2c40abdb9"],["/archives/2023/09/index.html","bdadfa90bfa1c792e48c793b4cb3b389"],["/archives/2023/10/index.html","300ede07a930a3d1ddf74c041f330f06"],["/archives/2023/11/index.html","d1cf1f0c667ded4675ce74b40696ea70"],["/archives/2023/12/index.html","6e9bc36d5df399d6aa017ee59e24def9"],["/archives/2023/index.html","9ca1fcadd417b905fa1682a9b6cab022"],["/archives/2024/01/index.html","e2fb1c39aa175081d389da5e8d36a42c"],["/archives/2024/02/index.html","d53cb344a0f06fa99e668b00ead47469"],["/archives/2024/index.html","9dd6cae7e7d4d4041b65346d16a937bc"],["/archives/index.html","4cb8ec972941d65c3a02c2f4c874c302"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","2d4fbddc8594fc01e33bca876218b099"],["/categories/CTF/index.html","af7fd5e6c022b12a149239eec3cebfd4"],["/categories/PWN/index.html","78b54c5bcd2c0943b84fd65ada4b56ae"],["/categories/RE/index.html","a59fb8942daf70ca7d8a32c7672b804a"],["/categories/Web/index.html","051f193cf19cbad1ce020d658ffb4933"],["/categories/awd/index.html","e699c09e07628d637b2b4fc0ed515dfa"],["/categories/index.html","d21b0ecf34a3a47454ecc7c2b010b859"],["/categories/misc/index.html","b3463d12365ae73ce4ca07f0306fb1c0"],["/categories/博客相关问题类/index.html","beb64228c67b7d2d50b2664a6f0bf0d5"],["/categories/局域网攻击/index.html","2bfbf239eb144acdd19b64fca217795b"],["/categories/心得/index.html","df42aef6b6c4706678bd971138c3e9d2"],["/categories/渗透认知/index.html","48f7c15b5701b5857b56aea82088e67e"],["/categories/漏洞复现/index.html","396e17fdaf979ccb90b0c9126cfb25db"],["/categories/漏洞测试环境搭建/index.html","c9a38180624e4a5aed27ba0830cbfd9f"],["/categories/赛后复盘/index.html","5f92292569a7b739d32f7162ce296df7"],["/categories/靶场训练/index.html","93ea961ff43c905e2599e367a6f7b782"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a8c5f09f443aceca7fb748a87ed888b7"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","960f94a01342dc848bb72b9855287ec2"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","e5af52c3081e5ec2c865c9a862a878ad"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fca8833ead51e2bba99c470af0293d2e"],["/page/10/index.html","46d9fdd6563214af79b9f7d9ebbb9968"],["/page/11/index.html","17859fd50ca540dee3148d7e89b14682"],["/page/12/index.html","c47e1efeba59e49b4bdc560b3f1850e5"],["/page/2/index.html","3fe88f40ec30b228e1a33676a196bcd5"],["/page/3/index.html","18f2849dfb3724bc9b22079b854d3ea8"],["/page/4/index.html","a71f25fd4352eb4a7c414810b27550e8"],["/page/5/index.html","18ab021a99ec9a069deb0500e1745817"],["/page/6/index.html","669fad91b9f028f073b2e71398deb44f"],["/page/7/index.html","cfe60d10f8b4cdab071decbdf75ab987"],["/page/8/index.html","658efd83bd1bdd71d0519f17e3cd7c42"],["/page/9/index.html","5ec58aa4c9e1f9ba8bbcad7c5839c470"],["/sw-register.js","ac74e1f24e64f3de2d5a0532632a1332"],["/tags/C/index.html","91a35ae256730020565f5fc23be3e004"],["/tags/CTF/index.html","add215d0aa7ca9980600c43f764aefca"],["/tags/HTTP头部信息分析/index.html","4e2042d5930016c7d4f113d77916d274"],["/tags/MSF/index.html","a0333df82407b5890e389dcedee58b8f"],["/tags/PHP伪协议/index.html","8dc75f9b685a093a4c7b53beebeafb69"],["/tags/PHP特性/index.html","00aa6230022dd7b219a823c42397447e"],["/tags/PWN/index.html","d266d38f60a09725b02bcd54229ca377"],["/tags/RE/index.html","4e091c3a4010d84314d7a062f7a31c10"],["/tags/SQL/index.html","0219f6706c3548951c4f5df67ae62e5b"],["/tags/Web/index.html","6aa4231b09dfb6afa528c30ca07bceb2"],["/tags/Web工具包/index.html","a735df5029279f860939ff21982a04db"],["/tags/awd/index.html","913259a6269b399cd4b5ca0ce08d9972"],["/tags/ctfshow/index.html","9b0176c82c28fc05bd5153ccdff8ec86"],["/tags/index.html","3509ae45051504515a9897f331c2534b"],["/tags/misc/index.html","42bd10c6e6257ed0a4b3ae7b9f9d9082"],["/tags/next主题失效/index.html","da3b2b301b80915f8a34a08614475374"],["/tags/wp/index.html","66dc63971b1f86647d2b3b605b132fe7"],["/tags/xss/index.html","ae6b47623f0d664e01824799708fc4ac"],["/tags/xxe/index.html","27f03c223d36fd19d38fd618f42f375f"],["/tags/不蒜子不显示/index.html","c390fe88a9480f5cacd3baccf9162b1c"],["/tags/博客/index.html","6f58e44c4012601341d62e5b08767ec3"],["/tags/博客主题优化/index.html","dbd611b6bf29fd054634f8403a7f943c"],["/tags/博客死循环框架问题/index.html","dd2683ba5e44aa1392910c9a3c4357c8"],["/tags/博客部分问题解决方法/index.html","c8c355ca4dea6455a18f584f3a14f10c"],["/tags/反序列化/index.html","71a38e9672080f1b74b2ab6d599373ef"],["/tags/命令执行/index.html","78e44aa5857e38e2883547a75a43f96f"],["/tags/局域网攻击/index.html","645f72a6a6b55e651f133981cbc63c21"],["/tags/常用指令/index.html","8177074b767c625a3bd2b6646d736893"],["/tags/心得/index.html","c940e37162f1def7a8f9b9eb8b730e56"],["/tags/文件上传漏洞/index.html","3bf7493bb7996952cb5b022e93b9a4fa"],["/tags/文件包含/index.html","0178312998b263226ca563de7af46292"],["/tags/流量分析/index.html","6f57321339b75339c506c694c28c17c3"],["/tags/渗透/index.html","7038061a4614dcd09348fc7caf6ba0a6"],["/tags/渗透认知/index.html","52655fb0f92e28b110e004c38ab7871a"],["/tags/漏洞复现/index.html","b4b2229ef23db0af210596518b26112d"],["/tags/留言板/index.html","8c8b46fef816a0afc57e37994e2c9b4b"],["/tags/赛后复盘/index.html","bb76f3b0ff84fda40543790c6066e4a5"],["/tags/靶场训练/index.html","6133682bc1c00ee736be8730aba3f087"],["/tags/黑盒测试/index.html","1e31d9f818958a05c931aad42cc3d5e8"]];
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
