/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","8fb5aeb057f734220a2a6ac5ea26c6d1"],["/2022/01/02/Python程序运行常见错误总结/index.html","5abdbc37775d8e8758d2508f39c4f1b0"],["/2022/01/08/ctf之web/index.html","0ec627742e941796cec07a0ef1bb43f7"],["/2022/01/11/博客制作遇到的问题/index.html","b005940b107783929d142a6e8b902133"],["/2022/01/15/C/index.html","e19f692edb912041e6f67e0d00471017"],["/2022/01/18/新版next置换/index.html","da03de30635952b1c94bb5b775935889"],["/2022/01/19/不蒜子相关问题/index.html","6caa755536df91fee5e242b69a61a2c5"],["/2022/01/19/框架问题/index.html","33315d51e1b7b15f5a0d74ae9237a1b4"],["/2022/01/20/ctf之reverse/index.html","bf8563524936cb1b6daac4bf99d420cf"],["/2022/01/23/misc部分解题软件命令记录/index.html","fa73c2c02587f92defb8eed8e10de8de"],["/2022/02/01/684/index.html","596e505d541e5800d0c4baecc225c303"],["/2022/02/03/留言板/index.html","b8782ea0deadd25b3c65d5c9e9fd3d6d"],["/2022/02/04/SQL简单注入/index.html","6d77bd4039d7afbe68abcffedcbc3d8d"],["/2022/02/05/最全的HTTP头部信息分析/index.html","ff3c684ab58b7d6388b1469f3179a8e7"],["/2022/02/08/ctfshow文件上传/index.html","bc1117dc37b3823e0418950806a1a8f5"],["/2022/02/08/常见密码类型/index.html","03121bddd9fe1035d23f92fa5684553d"],["/2022/02/12/VNCTF2022WP/index.html","271bf5708f4d4053438eaa8f25451841"],["/2022/02/16/rce/index.html","95298abc5b39e61ab3fdcba84fed88cf"],["/2022/02/20/ctfshowPHP特性/index.html","72550d6b82f0237b0f2f3c4fccfd5628"],["/2022/02/25/php伪协议/index.html","b8b126b12cbffabe8561118d004f720c"],["/2022/02/26/ctfshow文件包含78-117/index.html","c7375a8acd825e1dff4f6f7c7c50264d"],["/2022/03/02/Clash漏洞/index.html","42f4a2386d28b5e08d65c843e9062b8b"],["/2022/03/11/流量分析之题型解析/index.html","f16a34b6c79d54f240c907d1a87d59f2"],["/2022/03/15/ctfshow命令执行/index.html","ba001a8a4b9d726bbb36250b795376ad"],["/2022/03/22/CGCTF/index.html","508b56751a4533a5581b0fb1fd24f78e"],["/2022/03/24/ctfshowxss/index.html","7cf59560b3e5e9fa2fd9a0557af23a4e"],["/2022/04/04/黑盒测试/index.html","3557f8bca4cbcd628d43aadbc4c35ab6"],["/2022/04/11/nmap/index.html","e2e9122a4cd624502fa0c1be9ad9fd18"],["/2022/04/12/渗透流程简要记录/index.html","1802d72de1f334e08d0fefc5cc54f993"],["/2022/04/12/渗透测试之攻破登录页面/index.html","4e3be548030bd93f397c80442baa8d14"],["/2022/04/14/xray扫描器/index.html","6aef09d3957664799afcb80bc59bbba7"],["/2022/04/15/ctfshow反序列化/index.html","d1e04dcc81d3db39d5d82d5a7189f313"],["/2022/04/26/渗透测试实战/index.html","c75c10b9e57771fba9976c57061d11f0"],["/2022/04/26/网刃杯/index.html","d19344ce34ec96f86891c0801938ecd2"],["/2022/04/28/sqlmap教程/index.html","2ef1d08c98dc5980f50a64e3fc3c3b1e"],["/2022/04/30/认知文件上传/index.html","bf2c48cff6e0f731e537d4e88f6779b4"],["/2022/05/03/nahamcon/index.html","3c882aa7ffac358c06fd6d2f4f85f230"],["/2022/05/15/awd/index.html","b707b7d676eca1d6485eda1f447fd5ef"],["/2022/05/22/DASCTF/index.html","3829fd1754ae0dde839863e8f3e652fe"],["/2022/05/27/520/index.html","0da464a3e8bad3fa41c57b95239ac132"],["/2022/05/27/ISCC2022/index.html","bceb75b96a7c6c5e81a450b8b3fa962c"],["/2022/06/01/第五届世界智能大会/index.html","88fee2c5c1737bc66f8d786f5f39f664"],["/2022/06/04/SEETF/index.html","0effd9bf28271c06b2e3f2423bb72fa3"],["/2022/06/04/bcactf/index.html","37dad19f4e64c575f6de1f3aeb3ef2bf"],["/2022/06/05/BSidesSF CTF/index.html","4324063471adfa1cf79f3198ab760738"],["/2022/06/07/Docker部署web题目/index.html","b9d4b5e0a49bc4a9a91a5a31f8794351"],["/2022/06/09/利用oj搭建C语言考核/index.html","2c967bf4f8ffd7910e544cbc173b5b72"],["/2022/06/09/论网站502/index.html","0f34560a09cd9b26e8650ffa8a213150"],["/2022/06/13/限免题目/index.html","5a2e647345579cb721eea33c9a7ff499"],["/2022/06/14/钉钉rce/index.html","4c3417907d9526167a9c0bc831018978"],["/2022/06/16/内部ctf/index.html","12e437cba7b778e89b73d9f0005ef77c"],["/2022/06/25/攻防世界高手区(一)/index.html","4af6ecf44b848e9d153277d09f6194c7"],["/2022/07/01/两小时AK赛/index.html","b661982b2d96a0d77b515b025da70ea6"],["/2022/07/03/鹏城杯/index.html","6c3218d13a0eafc8232a13369e50dafc"],["/2022/07/04/XXE/index.html","cac32c04dff3ce62c06dddc93265b321"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1365699fbb9adbb020ae77a08c790c0c"],["/2022/07/08/chinaz/index.html","3a8ea12cb57304e43fd75d786a276a72"],["/2022/07/09/蓝帽杯初赛wp/index.html","01b04eea8bc81db701869087df36aa9a"],["/2022/07/17/NepCTF/index.html","900baf03c68176a8e223b2274ae07d3b"],["/2022/07/19/ImaginaryCTF/index.html","6580860f65f10f3a001bd2bb0d599405"],["/2022/07/20/局域网攻击/index.html","66dc0cf7ec5e3059306a8ae05793c07b"],["/2022/07/22/BDSecCTF/index.html","e73324bd11e95717bf3a15bf76314099"],["/2022/07/25/DiceCTF @ Hope/index.html","c4b64a2f13573c5503d80f68d1623a92"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","7240852b0e7b7ab441ed7822de78287a"],["/2022/07/31/TFCCTF/index.html","d813428ab23de6a61de6c91274206d3a"],["/2022/08/03/NSSCTF/index.html","b501e5dad4263f1c0b9594b309c1bed5"],["/2022/08/12/T3N4CI0US CTF/index.html","5b24f55f868596a92ef7fe256ae56e24"],["/2022/08/14/SHELLCTF 2022/index.html","3780cbd5af0307cb95c087c45a419a9b"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b47f5502b2f4790a9d8a28c807dcaabf"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","015f015857e01c3fd8cf0d173f9180c6"],["/2022/09/16/柏鹭杯/index.html","72323cd39dc3d78a70d31add06f8369a"],["/2022/09/20/HUBUCTF 新生赛/index.html","4842f97c6bfbd1efeac191ebf6c4cac9"],["/2022/09/27/NewStarCTF/index.html","5924ccd201296564f02576364d806ef4"],["/2022/09/27/bugku渗透1/index.html","adbb419e91359746de209d5758ccb6ff"],["/2022/09/29/tp6漏洞/index.html","387dba0b1a2ab1b161b8523e74ccf90e"],["/2022/10/02/SWPU NSS新生赛/index.html","b178537e00e5e8b694dee159bca8f997"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","b8dd290400b31f693b86dde4fcdccd4e"],["/2022/10/27/Moectf西电CTF新生赛/index.html","3cad773570c6f58593a3f1247b808c09"],["/2022/11/02/HNCTF/index.html","c30e47eb7d46697764cd0a9668275f16"],["/2022/11/04/2022工控CTF/index.html","cc762ac0680a977b95a2e9aedd281cdf"],["/2022/11/21/极客大挑战2022/index.html","b6b6050ce33f740961e5d294cc69ec6e"],["/2022/12/05/TUCTF 2022/index.html","b6bc7948a9174feac8e5d06685dd29ea"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","01ef07c6f57e181dae44afb7d718e73c"],["/2022/12/18/金盾2022/index.html","5bb37d0e2d3317dc64be77a03f7a5d22"],["/2023/01/01/CATCTF/index.html","5cc2383076231c7b8571e4e47cf60df4"],["/2023/01/09/RW体验赛/index.html","4e56a900f06f08d3017c5144d096f856"],["/2023/01/10/铁三/index.html","a68a4a1dc0960a16362eab0c8d35780c"],["/2023/01/16/Ugra CTF Quals 2023/index.html","7ab94b84c53c775fad2442d36ed48812"],["/2023/01/18/山石2022冬令营/index.html","863648ad6c731a6e0f1fa14841571e82"],["/2023/01/19/SICTF/index.html","8f87471704fb73004303f17ed6e324ca"],["/2023/02/04/2023西湖论剑/index.html","0f4f365673b388970ab14b9f21ad1fbb"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","4c2fb0857412ac6bfc9da96254fbd3a5"],["/2023/03/04/公安/index.html","8fed659b4e39e5d434eceb9074c46a9f"],["/2023/03/07/mysql之udf提权/index.html","eabfa4813e6672378e689d8e55cd5c7e"],["/2023/03/07/红日靶场练习/index.html","a2a82f229e7d1f8f0a506969ca4d092a"],["/2023/03/27/NKCTF/index.html","bff9e05a67a85d3414a16c63d3fd9f99"],["/2023/03/31/楚慧杯/index.html","46df0a9f8ad1142a75527a6e007aadfa"],["/2023/04/23/HDCTF2023/index.html","c254a0a09f39cdfc125a30cf14012259"],["/2023/05/05/暂停/index.html","7f72173117e473dcf65e8d579e7b41ba"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","f231807e19a4c3e87db29c3c7996a89a"],["/about/index.html","ebf226b24e8e4525de5dcc5d570acc72"],["/archives/2021/12/index.html","f795aef3c03e11df88ee2b0dbd34e1a6"],["/archives/2021/index.html","30e69dcbaa8d2b7c5b13359ad73168af"],["/archives/2022/01/index.html","30b0f3ea746dd07c6731c939aa39ddd1"],["/archives/2022/02/index.html","69f80294fe2cbb61aee25ea4eac3fef0"],["/archives/2022/03/index.html","c9739fb494c95f01368758d3bb0eaa0a"],["/archives/2022/04/index.html","6b773f2436a5c172aaf89db6f37dbc2b"],["/archives/2022/05/index.html","dff22e79fa4e0a5fb2768483e978310a"],["/archives/2022/06/index.html","9885ead881af9ffc1147040dce739c7c"],["/archives/2022/07/index.html","08940258301f452692a95657984d3752"],["/archives/2022/08/index.html","82bfb9ed65d3a179d79f12b4af0482a0"],["/archives/2022/09/index.html","0e7a7fe90860c0748fb6ed8d06cbd554"],["/archives/2022/10/index.html","e547d0ada1ba009d6af1fb73492c3b0c"],["/archives/2022/11/index.html","e4baacbc3f6c2525a3faf6090cd0f34e"],["/archives/2022/12/index.html","e14f72f9a8b062eb8948637421841044"],["/archives/2022/index.html","702f27e01c5e845e283eb08cd84cd944"],["/archives/2023/01/index.html","0df4550d2251554b725150c84a91cfd1"],["/archives/2023/02/index.html","e2b65c591caf8f9e205e496fd9916f35"],["/archives/2023/03/index.html","36ceddda15477907f9599d90b8587ff7"],["/archives/2023/04/index.html","7c10ae50ed776bcee8a603e5723578c7"],["/archives/2023/05/index.html","eff5291df9143570a24cac15d8f5b251"],["/archives/2023/index.html","71424723071517057b311fac5441aec7"],["/archives/index.html","67956e6aa33b7ca50e18c635bf938fbc"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","a6b514d8dfe36414a59e4ba99068ca99"],["/categories/CTF/index.html","545e9a25b301e28dd0c52fc35cda7210"],["/categories/PHP伪协议/index.html","a10beb5bb078ff5f16b0b8b6ad77daa3"],["/categories/Python/index.html","8acf1582f48212b731e8ddcc0bf1624e"],["/categories/RE/index.html","59567ff7f9b2cf06b7579afa965d2a53"],["/categories/Web/index.html","edd2e6ae6c7b3195b7c581890379b128"],["/categories/awd/index.html","9249e6cce8ced207784bde32fb9d77e4"],["/categories/index.html","be8fd8a7e22c968103f694839a93e321"],["/categories/misc/index.html","70cccf9486d56da6464f1263c33afe3f"],["/categories/sqlmap/index.html","4b8d1232b810bde2ef5d4e82f94d9143"],["/categories/博客相关问题类/index.html","cc482859ea0bee82ee412709ab6f54a3"],["/categories/局域网攻击/index.html","2a7a28f66af1c0e02d8eff2c800fdb9a"],["/categories/心得/index.html","bad76ff500adf650b966fd9cdc438296"],["/categories/流量分析/index.html","1f436aa1a5a927b3ad30cacb79a24755"],["/categories/渗透/index.html","8ceab26e88645d86f3398dbf9f5263e3"],["/categories/渗透测试/index.html","242dc0ce3dfe5632171642d1e23a7f15"],["/categories/渗透认知/index.html","b1498781ef8a0dce31b93f2d5d7cb922"],["/categories/漏洞复现/index.html","9f63226e820dfd2eff13d9a9e208b747"],["/categories/漏洞测试环境搭建/index.html","154753b47575a10e0a35b7653c9d48ea"],["/categories/赛后复盘/index.html","3236bd1aea709a175296cb4dad2ea0a0"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e11ae11890ee0489362db8ddb5c662c9"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","d627de35834d6daecbe3cb84d9142197"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","4745f22ea27f6f82fa86b838bc04429d"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","ba956fa92c6f5caf3fe89afc11c34a31"],["/page/10/index.html","60ed6a266d37e79973eb97f6b39abebe"],["/page/2/index.html","dd0510cdcf86bd2544b78bf15d007588"],["/page/3/index.html","3909c14a574b7503c50aef0beb84860e"],["/page/4/index.html","890d49b3f023987290139885e83c3fd4"],["/page/5/index.html","7181b1be01f4bd7d8dbdd9c2cbb3cf36"],["/page/6/index.html","232756ed0a9f2425f32412a566cb0276"],["/page/7/index.html","fc21ac4718b7d998f0350f699d22078e"],["/page/8/index.html","466d01822649cee2056c91eb04b6b175"],["/page/9/index.html","49588d9c372c6c4467e77badfa079fd2"],["/sw-register.js","1cb4fcdf6502b6494dd5488a04b23042"],["/tags/C/index.html","d8a229c6bc1a567d7d1cb11cd21ad169"],["/tags/CTF/index.html","16deb7e196c133d4f3fc3a2d36333fcc"],["/tags/HTTP头部信息分析/index.html","bb76bc066110d8c85a163194cdb2a497"],["/tags/PHP伪协议/index.html","a2835bc20d17d5f20cffe33f61e52f13"],["/tags/PHP特性/index.html","2dc9fc496759c0971ea8b08cee9407f3"],["/tags/Python/index.html","a38c36acac6fa1f2c952d8558eb1a2ef"],["/tags/RCE/index.html","c6c79e01361c7d49fbbebda3f52ba567"],["/tags/RE/index.html","1ce345e391fb8f4b324e0ae81c30b1c0"],["/tags/SQL/index.html","a9c11f3b6ef787ca8b7344d849d5e1f6"],["/tags/Web/index.html","2247a3b2b838d7a165ad61dc7816f67d"],["/tags/Web工具包/index.html","583051eab09c1b6bf18649a3d06e7562"],["/tags/awd/index.html","1376d0a39bb3842da4b6a261b6a74d70"],["/tags/bugctf/index.html","9e07954b3ec3d17827b15bb5823970e4"],["/tags/ctfshow/index.html","75ada53078b6e2873ba2bf204f0cda33"],["/tags/index.html","395f96e9a0154cdf38f46cfce3331529"],["/tags/misc/index.html","2341bae828a68a81a81920247493adee"],["/tags/next主题失效/index.html","a71b851c9d4c8a9a8e5949b4e5f252de"],["/tags/sqlmap/index.html","b9b8e942df367b29051795eefebf9905"],["/tags/wp/index.html","8046cc6d8b658a37c8bc06958b895dd0"],["/tags/xss/index.html","3d7d8f629bda79782d4e482e5ecc2e38"],["/tags/xxe/index.html","f2e94914b91ad5d60701653ef54d828c"],["/tags/不蒜子不显示/index.html","9863b8f9e6112483e30ae30bd2f6c4c0"],["/tags/博客/index.html","1facb681538cc4992b5832566f71b700"],["/tags/博客主题优化/index.html","eca2dbbef77c30ec5eaf9ac79d33f52f"],["/tags/博客死循环框架问题/index.html","f2f92d8ae08348c69f8ca5f437112d8e"],["/tags/博客部分问题解决方法/index.html","83dc6a1b2346599a095d3504e03bc09b"],["/tags/反序列化/index.html","799899321c5a66061449ac89c02cc553"],["/tags/命令执行/index.html","b08bfbf8c4fcc2b03d10ae57d8075ac5"],["/tags/局域网攻击/index.html","a77492d9ab3877d90868769e46db5adf"],["/tags/常用指令/index.html","840c00388b0a3f44b86bbdd2a8405b5f"],["/tags/心得/index.html","f2a8436d679a7c47263191be937e072a"],["/tags/文件上传漏洞/index.html","b9fb8c9257322b6a9d5c82fc7767ea09"],["/tags/文件包含/index.html","1b44ea4c989cc6e48de7cc155adc0391"],["/tags/流量分析/index.html","0776301de5635ff9ab8d3f4abb821207"],["/tags/渗透/index.html","aca57a3edbc2f0f688490a4227b341bc"],["/tags/渗透测试/index.html","8668755b304e109b43c1738f16378a91"],["/tags/漏洞复现/index.html","53525b1cf2120f77a3e450e2ff4e44fc"],["/tags/留言板/index.html","5cd79e3e774fe1a8e3975c3c1a2b5820"],["/tags/赛后复盘/index.html","0c562c3a783c1a950ef8e1538f488f8f"],["/tags/黑盒测试/index.html","0abf1762acb9be3c30ebbf1df66d56e5"]];
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
