/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","0c74c01b7bb554aac479718e98ab8cfd"],["/2022/01/11/博客制作遇到的问题/index.html","0ddf03661b02e3caa986674e89a0dff6"],["/2022/01/15/C/index.html","c8ab4c682ef653cd9b3448b7b00e1ce4"],["/2022/01/18/新版next置换/index.html","fad735ea485272182301df72d2412268"],["/2022/01/19/不蒜子相关问题/index.html","8272ac8609f986ad49ca4d63474e8e41"],["/2022/01/19/框架问题/index.html","d03a5a04af0832d8dec8bdb3b4bfa2ac"],["/2022/01/20/ctf之reverse/index.html","3f0c3812add5ae553cefb106bf7c49a0"],["/2022/01/23/misc隐写题目总结/index.html","d45c488793ac31d65b257376dc4ea175"],["/2022/02/01/684/index.html","100f3e20efdd96b2bb53dcf25085343b"],["/2022/02/03/留言板/index.html","dcce6bcdecec46d80abd43fa5470700c"],["/2022/02/04/SQL简单注入/index.html","f796a5c1c8d2dd7bfc5d7f8062c1c332"],["/2022/02/05/最全的HTTP头部信息分析/index.html","825d92589d705756230430aa4c33b850"],["/2022/02/08/ctfshow文件上传/index.html","67caeab10cff1d20625a900fc68d7fa2"],["/2022/02/08/常见密码类型/index.html","a32a808ba7aae7f19044daa8f227c1ac"],["/2022/02/12/VNCTF2022WP/index.html","62e8651df7c042d0eb18882bbad823fc"],["/2022/02/20/ctfshowPHP特性/index.html","02801a15b12a1e0ae3f6b8901e2c579e"],["/2022/02/25/php伪协议/index.html","a8b6a2398e6b0d8e07c1063b20fda042"],["/2022/02/26/ctfshow文件包含78-117/index.html","f66b901bf9120cc4a6aa9f0db5cedadb"],["/2022/03/02/Clash漏洞/index.html","f29a1060da8e6ca3c66e61617ff4f646"],["/2022/03/11/流量分析之题型解析/index.html","f8a7fa21783cf2ca76f0b4d8cd26ca48"],["/2022/03/15/ctfshow命令执行/index.html","1359560c4d5a796e55832e5f9d002f99"],["/2022/03/22/CGCTF/index.html","5a8e73c42c45f905f61da99894d5a32b"],["/2022/03/24/ctfshowxss/index.html","65ad29c860a3c20c4dc16e692f7ade71"],["/2022/04/04/黑盒测试/index.html","2082a524e94abf13d2a43eba5ee5d183"],["/2022/04/11/nmap/index.html","7458783d2bb5a5cafb59d58833b90c67"],["/2022/04/12/渗透流程简要记录/index.html","67c77b8a06322f0e7059f8c09ce94001"],["/2022/04/12/渗透测试之攻破登录页面/index.html","8ae6e0a3619629dfe321a314c667f193"],["/2022/04/14/xray扫描器/index.html","8337fc0a2db23d9b7d8e47e50b837b32"],["/2022/04/15/ctfshow反序列化/index.html","2e51ac3194581169cc59dac615f36b53"],["/2022/04/26/渗透测试实战/index.html","11533e1e655f4ca36154b5b0522db0e1"],["/2022/04/28/sqlmap教程/index.html","59a61a5ebc05f3875b9da29054f4bde0"],["/2022/04/30/认知文件上传/index.html","c4be4b260946359d8c64646f0cc8fc15"],["/2022/05/03/nahamcon/index.html","97037c6b0796305fb0876b7465d67c9d"],["/2022/05/15/awd/index.html","dfccec24709a8099cf221557a35b6a94"],["/2022/05/22/DASCTF/index.html","6078baf2cbacbe908c0835a6babc4969"],["/2022/05/27/520/index.html","3f423fb0c351ab3e12e10b288c28f94e"],["/2022/05/27/ISCC2022/index.html","a9d5f5f17bc6bf4c6aec174886032cca"],["/2022/06/01/第五届世界智能大会/index.html","f23a0b3c97a704a92b0f0825bc9a2413"],["/2022/06/04/SEETF/index.html","bab413f65052cb2f77c5fb9658de2316"],["/2022/06/04/bcactf/index.html","54b86ca336e3ecd7c45ca481c7dc2b7a"],["/2022/06/05/BSidesSF CTF/index.html","c8155c8c51b7971ca573d52bb98fa3c3"],["/2022/06/07/Docker部署web题目/index.html","21a821ae58e67d0cfd9246303d657d67"],["/2022/06/09/利用oj搭建C语言考核/index.html","e824c563429c3e286993cd8c80e71d55"],["/2022/06/13/限免题目/index.html","72add21abaedfb6d26275fd48a0cb95b"],["/2022/06/14/钉钉rce/index.html","a9d67170873295d3d4b5a08c9dac16a7"],["/2022/06/16/内部ctf/index.html","662b36ad27c401fb247231fbffd8c66f"],["/2022/06/25/攻防世界高手区(一)/index.html","442f1b6339eaa92905be46dc80271523"],["/2022/07/01/两小时AK赛/index.html","00f1ad058c6f31d83b0a462bfb7186ed"],["/2022/07/03/鹏城杯/index.html","95cd6a220cba7dc132bbd738b772e53b"],["/2022/07/04/XXE/index.html","5d92c36882bfd53f99f51da956e14035"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","26addae031eeb442e2120741feecd0a9"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","ed50a46185010aa3208fbd81a5c12828"],["/2022/07/08/chinaz/index.html","d934786b3618fa9e9847d8bbf78a36a0"],["/2022/07/09/蓝帽杯初赛wp/index.html","880ed8300202f097c04e0df65e06ecad"],["/2022/07/17/NepCTF/index.html","600bf1ec3b446f33587aebd433dbf547"],["/2022/07/19/2022ImaginaryCTF/index.html","bad4403dd120a4249568b1c8af0abddb"],["/2022/07/20/局域网攻击/index.html","813a04f9c8df26d7cd0320442a264ae9"],["/2022/07/22/2022BDSecCTF/index.html","422bbf96334eb1672004d9a7a6467f73"],["/2022/07/25/DiceCTF @ Hope/index.html","6ae1e05941c1440cbccc5552c86811d8"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","aed57f32e74cc19fcc8c3136c0e39be3"],["/2022/07/31/TFCCTF/index.html","09560f40b7a25d451d02e1bfe7226907"],["/2022/08/03/NSSCTF-r4/index.html","035b06bc871ef5d42a6c7d48eb6084a7"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","72624d6a603af256e53ab1aa58139a57"],["/2022/08/12/T3N4CI0US CTF/index.html","3022d05d390a1b2636bcb9ec98267582"],["/2022/08/14/SHELLCTF 2022/index.html","b5c324f2b1d92a8ff1e1d7a50f52c41e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","8113eb904b56ccda7f8de61410eaf97a"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","28f29c367d5004194718154a88b2e0a6"],["/2022/09/16/柏鹭杯/index.html","23738abb9b7d908cbec89b93868c9dfb"],["/2022/09/20/HUBUCTF 新生赛/index.html","6c76e9359b3cbc87f1fc297e156bcb40"],["/2022/09/27/NewStarCTF/index.html","2699b1dc62f51c518abae7274d90598d"],["/2022/09/27/打靶-渗透测试1/index.html","4fabe5429be7c5128e825cf73c1adab1"],["/2022/09/29/tp6漏洞/index.html","339a614baa43d6ccce81a89c70d6708b"],["/2022/10/02/SWPU NSS新生赛/index.html","8604d5ac910feb7e1dcee2b392d7d194"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","c52ad43d3b94a685b42843bf7940c52a"],["/2022/10/27/Moectf西电CTF新生赛/index.html","2ff3aa267fa188e3896fa3f12a529334"],["/2022/11/02/HNCTF/index.html","ed0b7efefc3c75b95107b513ef81e9d1"],["/2022/11/04/2022工控CTF/index.html","d9b4cf24167fd2bb6f731e13979a4643"],["/2022/11/21/极客大挑战2022/index.html","f74e307d0c149ec11d494ae5863965a0"],["/2022/12/05/TUCTF 2022/index.html","590048f6391428bb3879e07fcd713456"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","d00d8ac7e0e38b6d2a5678629e1cba94"],["/2022/12/18/金盾2022/index.html","2b4282e281ec37a79935c1d875ae44e0"],["/2023/01/01/CATCTF/index.html","da97575551da1b22d160be91699561d0"],["/2023/01/09/RW体验赛/index.html","1ef3e7aef3ebd289cd1d35d4e4eb79a9"],["/2023/01/10/铁三/index.html","542a68475d3b90b34a263c7ca86a3ed0"],["/2023/01/16/Ugra CTF Quals 2023/index.html","57a21592debcdbbb6509207bf27c6f00"],["/2023/01/18/山石2022冬令营/index.html","370cf5b237edbb473e02faf03e26b27f"],["/2023/01/19/SICTF/index.html","d9b151d8407b857df8ee827c8303518a"],["/2023/02/04/2023西湖论剑/index.html","c2aae8f033aee4a5dea22c66139fe9c7"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","2fb91d44358b6b061647280f3a66cecd"],["/2023/03/04/公安/index.html","aea5e952dae5ded762d375f497e4a7dc"],["/2023/03/07/mysql之udf提权/index.html","274722f4a68e6fcd95237e358e0e3f7a"],["/2023/03/07/红日靶场练习/index.html","6b3ea3a1404c2a8592dce5bd85896641"],["/2023/03/27/NKCTF/index.html","abfb666b6cf7e978d29464c490e5e138"],["/2023/03/31/楚慧杯/index.html","e4c174b962231060f21194fa7c187462"],["/2023/04/23/HDCTF2023/index.html","493ced41f17c6169d9db6f8b9af8fe92"],["/2023/06/01/2023CISCN初赛/index.html","26b4219b13f4468ab21edcfce8bd7b3b"],["/2023/06/28/2023CISCN[华中决赛]/index.html","0137514b086b68d4eb9eb0ac24ad2972"],["/2023/07/10/CyberSecurityRumble Quals/index.html","455991cd7da377ba61beee0700240802"],["/2023/07/22/2023BDSecCTF/index.html","b0fe42ed5e437ea93567134057ad8b92"],["/2023/08/07/SQL手注小记/index.html","c027e9e9dac8046487412d1460853d89"],["/2023/08/27/2023陇剑杯/index.html","0c698bab57e80f8cd5b4288ec7f7a3de"],["/2023/09/17/2023蓝帽杯半决赛/index.html","9e7473abbaf0834a404e27f9e6359ad0"],["/2023/10/23/对于多层代理的研究/index.html","4952959ca694358bdf2fe36cef09c91c"],["/2023/11/25/金盾2023/index.html","eb2a0890e1962e7dc7216d7a94d5ac89"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","9693f8fc4a305d1d85a2d7c437232062"],["/2023/12/18/2023强网杯线上赛/index.html","c7320566084591be1ef39e3e1d435ccd"],["/2024/01/08/基础ROP/index.html","21e4004e09ebfea6291fac67469cf8fd"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","b82209d524e5701199b9bb4bd5f32b40"],["/2024/02/13/打靶-Tr0ll/index.html","d72ccef10987d23baed9e5a24203fb85"],["/2024/02/14/NSSCTF-r18/index.html","8861b3b9afabf2e6e1e1afb8b3beb25f"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","77a0a90d5f7702aaf6a31cfb77f01a28"],["/2024/02/15/打靶-CFS三层靶机/index.html","2f8215ec986e0e3644a6b957fe1673b7"],["/2024/02/15/打靶-应急加固【简单】/index.html","2963d1892a757b90a4946a43449ecc66"],["/2024/02/17/2024VNCTF-WP/index.html","db4cf8ca9497b05d01eafdf8faced46a"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","cd0f8f60b82adb2cd6cdedcb45d72e2d"],["/2024/02/19/打靶-铁三域控/index.html","295ec46b2866e0864411703f126d9a0c"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","5b05ffb8c31f52f3f3e698362c973b16"],["/about/index.html","5231e2fd47aac33e8c02876eed7cde95"],["/archives/2022/01/index.html","4ea12c249adb940e1143fa8f9dd375cf"],["/archives/2022/02/index.html","475848f344b9da9cee4591a9318f9c13"],["/archives/2022/03/index.html","d4e0878bd7662d347136833708c14fba"],["/archives/2022/04/index.html","dc8b81b42dd7684359513f94fb888a43"],["/archives/2022/05/index.html","c5d1bfebb1ceadcda3094563ffc8161f"],["/archives/2022/06/index.html","07fbce17f705540bfb419c045e8b8f7e"],["/archives/2022/07/index.html","fab3d92f991d01506b20d80c35f7be01"],["/archives/2022/08/index.html","84fbd1e0ac675dc72a51fbb677c7508a"],["/archives/2022/09/index.html","88307690d52f74c720b0a53e68ba6fdf"],["/archives/2022/10/index.html","8f1c6dd7d3a4e79b8a07228416fe56f7"],["/archives/2022/11/index.html","132bb9489f4fbb752bbec15f882f3d8d"],["/archives/2022/12/index.html","1ba9d24ebd9ebbf0622edd46962f7a84"],["/archives/2022/index.html","b2f8ae3406e5c6891be2029f812fa581"],["/archives/2023/01/index.html","aec77c952120864973b3454e46fc14a4"],["/archives/2023/02/index.html","f6c9decb58430bf36a15a0205f46120f"],["/archives/2023/03/index.html","370cac32758232e75cee4c45a0e41f03"],["/archives/2023/04/index.html","addf275bb73c29878e7a963180bfbe15"],["/archives/2023/06/index.html","b9e34a9e4ab7088540ae4e559ff25a02"],["/archives/2023/07/index.html","7d683401a8fb0cf9db4dd23542d44591"],["/archives/2023/08/index.html","26d57d801d83dc0b3acd4d2f1dd2536e"],["/archives/2023/09/index.html","7ecb8d22ef1a4c7097d79d63d6551fd5"],["/archives/2023/10/index.html","130ff14ee3467202c9b92a14c44fd902"],["/archives/2023/11/index.html","e83b10098e448b91c45586d00b38eaa6"],["/archives/2023/12/index.html","b6aca1e6f0c63c8f07a9f0b343752746"],["/archives/2023/index.html","50e99c5c6da238f26afcc8558e6f1c16"],["/archives/2024/01/index.html","e1e7486814b1925a58c7a1cfc353e4b7"],["/archives/2024/02/index.html","dc352a11d3d538eddbb578549ad8e57f"],["/archives/2024/index.html","44a26c02fe5af0b74617b72c845a9364"],["/archives/index.html","b5b75b2d5be52874dfc1d3e18f96a8b4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ad7fab7904c87ac0c233354f528e06c0"],["/categories/CTF/index.html","4eab76071fc62787eb82bcb929879bb1"],["/categories/PWN/index.html","74c954b3abb69f6481fc3f1630f04d7c"],["/categories/RE/index.html","5a00d993fa0d65bfe28f297d6ef7616b"],["/categories/Web/index.html","5282d2f2ab8e1ea53fb3a53fea1ca75b"],["/categories/awd/index.html","1a1aabeede1501864caffb9a7443c897"],["/categories/index.html","c346364092099a83689a074a751dc538"],["/categories/misc/index.html","9a420d956e6a57eda6549e26b33e8c3d"],["/categories/博客相关问题类/index.html","5492a64130d4161c8c65f843a938091c"],["/categories/局域网攻击/index.html","d23a0f4981c9a7fdff43dccc85731191"],["/categories/心得/index.html","ef81f82db216c5dab031e41858a84b3b"],["/categories/渗透认知/index.html","5f32d65a45679fdedf98298b1f50b19a"],["/categories/漏洞复现/index.html","c52777e738efc60d5a25854ed124c9a9"],["/categories/漏洞测试环境搭建/index.html","91f9914c4f7c83853cba3190cfc9b93b"],["/categories/赛后复盘/index.html","555714b811a14e2f7e59de7f80395627"],["/categories/靶场训练/index.html","0d6b74240755d34fe59e50737548da26"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e3682cc6f35ad17e9ad5966bed08bf41"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","ff1d5c1a83475ee6751696ef746d47ec"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","ad7e9e63a256ac7823598e2488cdf5e0"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b1f67b6513771615be810f67f764a81c"],["/page/10/index.html","5b7b2b83232ba707def063673875044f"],["/page/11/index.html","6bad7c0b678898548f85f67fe904bbda"],["/page/12/index.html","625bcabc61972880a3f0172314b4e5e8"],["/page/2/index.html","63b429b4b66c710383fbfc0e37cc9644"],["/page/3/index.html","e67bdf8120126c0abbab6b13921e3df2"],["/page/4/index.html","f13ce581ba24160552bae00a3c604ab0"],["/page/5/index.html","4909f457d16621c1f05af8badb2e0ee6"],["/page/6/index.html","074ba9844528eb7da8f6fa1daa5c4629"],["/page/7/index.html","1cbb4a789c29c5596dd2c8913d8598ac"],["/page/8/index.html","0fe8f3e526bf65cb3b5e1f5e41970ceb"],["/page/9/index.html","c1b1c2efebadebc137e984d213a58cae"],["/sw-register.js","a5b8d011b157cf14e043ff2dd5df15b2"],["/tags/C/index.html","cf47939e6fc847f8034d7f640267d6af"],["/tags/CTF/index.html","926b02fe50200db05676461a717fba7b"],["/tags/HTTP头部信息分析/index.html","b2a960780f2dd6d80ddcac73b1ca6a00"],["/tags/MSF/index.html","aed0c319a0ec722bfde8f14a368c9530"],["/tags/PHP伪协议/index.html","aebd9eac3c60d384d716203f6596793b"],["/tags/PHP特性/index.html","71f4536319a5eda960046c87f1c413f1"],["/tags/PWN/index.html","60ef051641060c24cac58e10b484b932"],["/tags/RE/index.html","3a0043314de906679d74581d380eead7"],["/tags/SQL/index.html","cd5df0217f0bb76dafa8eb4da61c0825"],["/tags/Web/index.html","4df45665d6e2dc2de795a2fdf2a7996b"],["/tags/Web工具包/index.html","c81ce4e06b3f7bb52fd9668a66ef3552"],["/tags/awd/index.html","5920ac1df9a9af23351bf8df4bef04f5"],["/tags/ctfshow/index.html","2903f830739640d8d73abb487bf7c01e"],["/tags/index.html","7176dcc6733666eac57dc4ebd1f2f5a4"],["/tags/misc/index.html","98c72a0d4c2e863a2150f145848db7ef"],["/tags/next主题失效/index.html","747ee0539a333fcc04624b1c4720478c"],["/tags/wp/index.html","01d80a7efcb72328c2b5d34b149225ee"],["/tags/xss/index.html","1261ab5f119630d037c21eb831d58a00"],["/tags/xxe/index.html","5cdd2675d2cfb3eea6b67f4bbb876aea"],["/tags/不蒜子不显示/index.html","23ed09674ccc3a8a4be7c6d2d5e89389"],["/tags/博客/index.html","0b251b8df7646d964790501281c37f6e"],["/tags/博客主题优化/index.html","087917d1bc6423dd83ee7c85e0acefcc"],["/tags/博客死循环框架问题/index.html","bd4513a3cd0190afb08bef07138ab22a"],["/tags/博客部分问题解决方法/index.html","4ab820d8da6ec79262ce1e0bc220feeb"],["/tags/反序列化/index.html","214c0eeb68a5d03ef064d22c7f395069"],["/tags/命令执行/index.html","957b908cf38a668351f5fbbbf45410b6"],["/tags/局域网攻击/index.html","713c1773d38d5b03a550382289e74395"],["/tags/常用指令/index.html","f9fff0786909a2b1c02be1c558329e69"],["/tags/心得/index.html","47cd5feeae9a100d217e935dadd6f32a"],["/tags/文件上传漏洞/index.html","e0e83d9828efdca6c526761a4a71e918"],["/tags/文件包含/index.html","bd35787e191272b974ff50599f16a8d1"],["/tags/流量分析/index.html","9fa0615879a451d460c2807d1b97ad06"],["/tags/渗透/index.html","a7d69e0147c9d93894398df26280830a"],["/tags/渗透认知/index.html","fa80a99707c2c180f89391b97e6f7263"],["/tags/漏洞复现/index.html","817a2db93f60eb215601514dacbc5d26"],["/tags/留言板/index.html","6273ac4a8493f138a686351fe118023f"],["/tags/赛后复盘/index.html","9015b831b22bfadde667b14a01ac6ff2"],["/tags/靶场训练/index.html","77524710690f7b8ae1f246da783460c5"],["/tags/黑盒测试/index.html","79551f5459bec8cf0b8ad92fd7700a03"]];
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
