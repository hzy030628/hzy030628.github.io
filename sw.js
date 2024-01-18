/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","2ce3ba875eb5feadc9c0f472453aae26"],["/2022/01/11/博客制作遇到的问题/index.html","e3b671a2b8e147125f82f9841c293966"],["/2022/01/15/C/index.html","a0809dcb95af2cbd8ef9014d04c1b1d7"],["/2022/01/18/新版next置换/index.html","c082e8e6cd8137c3792948a109818e59"],["/2022/01/19/不蒜子相关问题/index.html","3c17140e2184894dc20dc0ffcf1c928b"],["/2022/01/19/框架问题/index.html","b6d5c9f3046b6d8fbcaed437e40fab49"],["/2022/01/20/ctf之reverse/index.html","c278b16b728f18f9ecd649df322a3407"],["/2022/01/23/misc隐写题目总结/index.html","3246629bdec9360e95737e27fedee97d"],["/2022/02/01/684/index.html","619530b8f60c071bd449d848ba4027dd"],["/2022/02/03/留言板/index.html","a2830d64a8d567cd6a9bc4c80db3db12"],["/2022/02/04/SQL简单注入/index.html","8455e1fbd87c1570b8ccdcf1d853ec2e"],["/2022/02/05/最全的HTTP头部信息分析/index.html","c69740832398eaca944a425d6e5ed521"],["/2022/02/08/ctfshow文件上传/index.html","05d1c2f2128998151afe6aafb0e520d2"],["/2022/02/08/常见密码类型/index.html","faed14f6dea1497515ac1559ad06e2a3"],["/2022/02/12/VNCTF2022WP/index.html","107f45f100d1babc6cffba69e3d08595"],["/2022/02/20/ctfshowPHP特性/index.html","fce88a9216cb7acf2e992ca151a6d7c7"],["/2022/02/25/php伪协议/index.html","c18f4cf562d5693f68e79611fad455c0"],["/2022/02/26/ctfshow文件包含78-117/index.html","3ff42b732a3c92a04f6f06dac9e9435f"],["/2022/03/02/Clash漏洞/index.html","f31c55e60a0127531f2d1919312b7dad"],["/2022/03/11/流量分析之题型解析/index.html","020cf8b536328d0de6c5973b6d0bb0e8"],["/2022/03/15/ctfshow命令执行/index.html","04df955d353d9c846772c3e938c61938"],["/2022/03/22/CGCTF/index.html","b1a6c98cf2a253faada63701d3592263"],["/2022/03/24/ctfshowxss/index.html","21a84087bb660794c2935f37b2e3494e"],["/2022/04/04/黑盒测试/index.html","4960951548beb639b5228ec4967a0b90"],["/2022/04/11/nmap/index.html","57de3e2bf608f51d11f31163bf81d701"],["/2022/04/12/渗透流程简要记录/index.html","9daf9bdbbf59abfe4e3ea7732026741a"],["/2022/04/12/渗透测试之攻破登录页面/index.html","c2493345966ebbd5b6ef5d9afb70481f"],["/2022/04/14/xray扫描器/index.html","5dc37391a0a5ca40ba7ba81961bacef7"],["/2022/04/15/ctfshow反序列化/index.html","3b3ae17051166ebeb71e2c6ab787b6bc"],["/2022/04/26/渗透测试实战/index.html","9964278a1cb27c25c271bffe48ed5b84"],["/2022/04/28/sqlmap教程/index.html","7c956a69a6da7119b38fe532631f249b"],["/2022/04/30/认知文件上传/index.html","4332cb95f0f8522db19f5b0c79555f27"],["/2022/05/03/nahamcon/index.html","978d1fe4cdd61290987d484bcfc3bfb5"],["/2022/05/15/awd/index.html","abbe7cb742cce15a890ccce9fa713baf"],["/2022/05/22/DASCTF/index.html","de344288e67dad53623ef9dde3a8ff30"],["/2022/05/27/520/index.html","f6f82e4f4e0ba99d586e56ba77aa90bf"],["/2022/05/27/ISCC2022/index.html","b4af8b13e71b6202b61a1126bc145588"],["/2022/06/01/第五届世界智能大会/index.html","31f423b5c1bedc3513aae6a82bcd6c62"],["/2022/06/04/SEETF/index.html","05437837413e23051bb4021be85075d9"],["/2022/06/04/bcactf/index.html","e6a6a91108305ea9cfa61d297cc4dacb"],["/2022/06/05/BSidesSF CTF/index.html","d41fda441dd8fd3b6bb24917e6b828a4"],["/2022/06/07/Docker部署web题目/index.html","c05cd4fb6e855b8df40c3bbfe8d7dcdf"],["/2022/06/09/利用oj搭建C语言考核/index.html","223c0474bc33b885cf8aad91173c0442"],["/2022/06/13/限免题目/index.html","30b4a94f63c4c98cc83ebd5ed29d7580"],["/2022/06/14/钉钉rce/index.html","390d2687c0f5247b169a060f3361ed37"],["/2022/06/16/内部ctf/index.html","06b394afa9557251a371bbf6e0a9c5d7"],["/2022/06/25/攻防世界高手区(一)/index.html","97c86b0ec10de931fa577c20126ec704"],["/2022/07/01/两小时AK赛/index.html","a7c13a58cbd6ec888ed17461e146b32a"],["/2022/07/03/鹏城杯/index.html","b555328b848a177cf3734ae5de8419d2"],["/2022/07/04/XXE/index.html","0b366e49e7abb19ef3a404a17d6a50a9"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","0b3f1625896ffcb37103c9bdf798bbd2"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","94832c426fb81e9ca54d5924f3799e79"],["/2022/07/08/chinaz/index.html","7e33634631df9de53582ddc0e5da37cc"],["/2022/07/09/蓝帽杯初赛wp/index.html","1476a29a9d623460b9b147e6c7900d3a"],["/2022/07/17/NepCTF/index.html","a42c780e9206afe13f4b42482c19c158"],["/2022/07/19/2022ImaginaryCTF/index.html","dc930f5f2a8aa805178913500ce6e703"],["/2022/07/20/局域网攻击/index.html","c4a040dd317b577b1ac49ca5f8ed80ce"],["/2022/07/22/2022BDSecCTF/index.html","8df66f36fbdc6cd3e95b1c4791b000b3"],["/2022/07/25/DiceCTF @ Hope/index.html","4193bc369841ff36bb52f0d98150c590"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","e610c9717141bc9ab49093aeac36939c"],["/2022/07/31/TFCCTF/index.html","c1a00b714752d51643a77c7853de177e"],["/2022/08/03/NSSCTF/index.html","a0924b115f5dbcf6ab9f524f34020e15"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","ce71133abe2eb4e089cdee773d21caeb"],["/2022/08/12/T3N4CI0US CTF/index.html","f00b6328fc3e28a86f39812476c9ceed"],["/2022/08/14/SHELLCTF 2022/index.html","774cba06159fe47a7d89c3044d03b272"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","413a5551995ddda2058b3dbf5385f453"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","c5fea49004c5c1b543be5b3344658c8b"],["/2022/09/16/柏鹭杯/index.html","f8bd1cdfc6c9a389e4f747fafad67499"],["/2022/09/20/HUBUCTF 新生赛/index.html","5474af967fed690d6782694be8a16868"],["/2022/09/27/NewStarCTF/index.html","5c2492c4171dd25380b6b61dec2ad010"],["/2022/09/27/bugku渗透1/index.html","bef59cbc90d97623df766128411b2e90"],["/2022/09/29/tp6漏洞/index.html","1a435f6206bbc43d1ec7e2fb44ffe927"],["/2022/10/02/SWPU NSS新生赛/index.html","f73c4d4229d5a1c490b1a4212a8d9466"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","2977d94d90264fb4befc29d17fe64a22"],["/2022/10/27/Moectf西电CTF新生赛/index.html","5083a5badda190ad8e76063775604fed"],["/2022/11/02/HNCTF/index.html","861521bcd36b8a5dec83cfd9880b7ceb"],["/2022/11/04/2022工控CTF/index.html","0650a935f47e5b24c83d4a80c35779f1"],["/2022/11/21/极客大挑战2022/index.html","232ba0776fe7ac44e999f0cfffc39156"],["/2022/12/05/TUCTF 2022/index.html","f949d9e96d5d22834fa877c98c5acf2f"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","b754623b0eeccf2af5f5d035e0c05d64"],["/2022/12/18/金盾2022/index.html","96dd54f0e7a9ebb5d4204ebbcd07552a"],["/2023/01/01/CATCTF/index.html","e3d13228d69880144ec6efab60eb7896"],["/2023/01/09/RW体验赛/index.html","250805fba5c308f6c5172bdee46135bb"],["/2023/01/10/铁三/index.html","a6f8d326bf6ece019b3a43d6c84f03bb"],["/2023/01/16/Ugra CTF Quals 2023/index.html","fe72ebd596bd7a4396856574bc79e5d2"],["/2023/01/18/山石2022冬令营/index.html","59a4adad6d2ac35d895c10c27648943a"],["/2023/01/19/SICTF/index.html","3ffc580e48195e1f2069c19d503257f8"],["/2023/02/04/2023西湖论剑/index.html","fbf92361c57d57c26bf14c6b7ef73f73"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","56ef54f10e9537d8180871393fef71e0"],["/2023/03/04/公安/index.html","b1ddcf6516733a3ac3b87f9158691969"],["/2023/03/07/mysql之udf提权/index.html","1a1291750287ae8e18d06a99795bedff"],["/2023/03/07/红日靶场练习/index.html","9249a7723f30dd4b233c65e758da070a"],["/2023/03/27/NKCTF/index.html","bced017d89d73751ef7038855e495e91"],["/2023/03/31/楚慧杯/index.html","f22bef9a4ed57b306bbdb4f33b16167c"],["/2023/04/23/HDCTF2023/index.html","27620b6fc6ae07db05dcf5446f934bc0"],["/2023/06/01/2023CISCN初赛/index.html","8a4d3cbcbbe60e289513325e6aae2c4b"],["/2023/06/28/2023CISCN[华中决赛]/index.html","8b3a17c4c7ea75d99b5baa486f21bf3a"],["/2023/07/10/CyberSecurityRumble Quals/index.html","bd6dc14e5a12c1f468572477421149a9"],["/2023/07/22/2023BDSecCTF/index.html","00746ffc295ff7ab171fe82e714d2d50"],["/2023/08/07/SQL手注小记/index.html","d14177ea2736f334676b8f06e6f92a4b"],["/2023/08/27/2023陇剑杯/index.html","402b78488c57c7215ac43d407fb1d50a"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f7e8bb7fc26db30aafe280ddd983a2d8"],["/2023/10/23/对于多层代理的研究/index.html","ee38fd8272704f5cfe9b3d8890b03990"],["/2023/11/25/金盾2023/index.html","f6df3c840dfc99bab53c85e042dda9de"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","3f7fb04fe58b28ef0b33e662a2e22825"],["/2023/12/18/2023强网杯线上赛/index.html","f891161dadbed2c9d6fff73881586c50"],["/2024/01/08/基础ROP/index.html","1c6fd350213d4ef0dcffe6de1a6b55e7"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","13537390fcb3d6691adb040d1d1088e5"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","5e9d4db082b49419629a8b86d063fa86"],["/about/index.html","a10d9304f41703fde642fe6ee230336b"],["/archives/2022/01/index.html","8c9e9ef2fc4706bd39335eb3036bfc0d"],["/archives/2022/02/index.html","d6d215946b4d3bfeb4e5d3f577ef1051"],["/archives/2022/03/index.html","a95c41615d82c4e37172d7ab32b8cd9f"],["/archives/2022/04/index.html","dc8c761d12bcb639ecda8789bd0f7488"],["/archives/2022/05/index.html","24e47a454604bed70588c6a6495e7956"],["/archives/2022/06/index.html","62caedd1612c9faab3a8b1a4c5cef2ee"],["/archives/2022/07/index.html","4bfa4b7a750d7227f9e5aa6eafffbbe9"],["/archives/2022/08/index.html","52638bb3246d8031701f8dad05520e63"],["/archives/2022/09/index.html","a017a22fb35b44f33f465e634353662f"],["/archives/2022/10/index.html","61db18d61e77d162e9f0420f74dad076"],["/archives/2022/11/index.html","c112012bb98e020eddab2d34d28395f1"],["/archives/2022/12/index.html","05de28d0f323e55f1760b452b468e46d"],["/archives/2022/index.html","b40591c82161e56523d7c47d5ea9a363"],["/archives/2023/01/index.html","f8683ff768d46aa56603e794ee59fa83"],["/archives/2023/02/index.html","14d78ed7adbd1f7d63ebbedd947afcef"],["/archives/2023/03/index.html","d8aa8f60278ee5c55790480313d0a693"],["/archives/2023/04/index.html","949cb55ad0e5266fb5343eba4b6f63ab"],["/archives/2023/06/index.html","50eef5efc5cdfe433187a0e08dbec430"],["/archives/2023/07/index.html","dee7b56d397e4eb6981bada14a35a45a"],["/archives/2023/08/index.html","f6b7045c841f033a316e94887379b132"],["/archives/2023/09/index.html","b89e9df24d498d6e0de473740c334a0e"],["/archives/2023/10/index.html","b34fdc4e415295e49373b499239a4ac8"],["/archives/2023/11/index.html","080855b151fb01d2337b9eb539ad1db1"],["/archives/2023/12/index.html","a35e90c4bf28a06f0ad072ed70a73b02"],["/archives/2023/index.html","3f5a73596b5c7e9a99f9f775b71799f8"],["/archives/2024/01/index.html","9e63e89ad34a771dc9b49a0e453fd09b"],["/archives/2024/index.html","05f2750d14fa422773c3ef7a111c8768"],["/archives/index.html","9248cae72ce727b4085a02de7a614542"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","77308c6a122e9b508ad9ebd3773a26da"],["/categories/CTF/index.html","ce951131b2b6ae0a3d7b15eb4bb2c02d"],["/categories/PHP伪协议/index.html","f6e7d90401ba77555437ea2e790ad40a"],["/categories/PWN/index.html","cbbac617ea64cfb9b61707b9839e2792"],["/categories/RE/index.html","32c69d5b4ed4c075417d0059ccedfe91"],["/categories/Web/index.html","09a67eb569edba4e04689ab9b5efb7a3"],["/categories/awd/index.html","f36da1cc15d1c57429eb41e573f95462"],["/categories/index.html","2bbe559a395949a9464450f51d1a5c3d"],["/categories/misc/index.html","da3fe7bee1eea856546d438889c567b8"],["/categories/sqlmap/index.html","7ea585e1510f36733b7504648f4aa347"],["/categories/博客相关问题类/index.html","c0965bcde06abc8cfd949547ab2dade3"],["/categories/局域网攻击/index.html","40c9839819e092eeb225f33c32aa446f"],["/categories/心得/index.html","51971e58fe57de67e1bcd7f4b3a2b78c"],["/categories/流量分析/index.html","84fc2195292b9407bf6ba9431e7d65ad"],["/categories/渗透/index.html","172c61c4a8af7d5949fe570983730ffd"],["/categories/渗透测试/index.html","1a5867986c28fcffac8ba608fccd47cc"],["/categories/渗透认知/index.html","381f0e8eb85c44eb2403fff39e149b95"],["/categories/漏洞复现/index.html","482d6b6dd945f62bd6617f7cf6acb80a"],["/categories/漏洞测试环境搭建/index.html","36c45ce62178a49f7599c1edf42be9d2"],["/categories/赛后复盘/index.html","4bccb1106ce3bce274ced6a256fd5c00"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","6f499cdcc2dcf98f0d4479e4d6b47a5b"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","3790adfa844d1d6f54cb9c122ab664e4"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","7705a8aa8f6852e5267ad3a7e7739b74"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","0ae5ed336efc1f2655c8238fcc56c645"],["/page/10/index.html","4c28091d8bc0b8e5a9c4d2850feece7e"],["/page/11/index.html","d45696600115dd1a1b2cc3a47821d692"],["/page/2/index.html","57fac5bfaacb94a5c225642c99c27e34"],["/page/3/index.html","2d8a3dbdbba2e0fa0f65cd9223ec7764"],["/page/4/index.html","83be3215fbecf53530b16c9edf217a3c"],["/page/5/index.html","11556a20ad284793ef8f4ffc84bf5cd0"],["/page/6/index.html","0c7d08a1b3dc77622efe9333d25af93b"],["/page/7/index.html","3429fcaadca158f7ec5f01e87817bdb9"],["/page/8/index.html","3996c0fd06e344a9555a37938fea3d85"],["/page/9/index.html","4785493ea1aebec6ad19066bec65e575"],["/sw-register.js","17dffa4a55d71f1350cf334029f5a015"],["/tags/C/index.html","a2bfef4236dfb68e24a429be9aa1f8f2"],["/tags/CTF/index.html","f6c3541d9a2cde8d45aed623368272cb"],["/tags/HTTP头部信息分析/index.html","b708fa2cb3b4a316df49e5e30888e0dd"],["/tags/PHP伪协议/index.html","24c06f94aa8b8d22bbddcd56e45629a5"],["/tags/PHP特性/index.html","95a44dc5385b82414e72e1a9499ce22f"],["/tags/PWN/index.html","0ca70a59a0e2a515dfb926af017b0965"],["/tags/RE/index.html","24099726faa1bc97d35e1a1d6d4f3534"],["/tags/SQL/index.html","2577081029f682a130d13c4338396c97"],["/tags/Web/index.html","3f2cf63dda590d964b4007490b86d377"],["/tags/Web工具包/index.html","485e6b8faa90be2ad6482c91a7abb269"],["/tags/awd/index.html","ea5d3c6bb6c103b12d77fe52bae451a0"],["/tags/ctfshow/index.html","349eff0da1c7a0b0221bbb5ea5927d42"],["/tags/index.html","a0c1f119d57a0ccc69e6f53e6116411b"],["/tags/misc/index.html","888279c194b3b9ceb26cc29dc2f69543"],["/tags/next主题失效/index.html","51072d6129955b553098d3f3d9384a5c"],["/tags/sqlmap/index.html","682b6745789ff65217002afbb32dd11d"],["/tags/wp/index.html","ee569b449a5610c77048ecc5f5a1ea0b"],["/tags/xss/index.html","2b2c34b4ba95fd413c07972628516aef"],["/tags/xxe/index.html","f39bf22f30370a7ff0b67496be90d707"],["/tags/不蒜子不显示/index.html","947995fe6fff6c1962000015aa14f428"],["/tags/博客/index.html","c75d5fb6844259d303b7582c6e3c5d6a"],["/tags/博客主题优化/index.html","e22f6e39115187600753ed51d3f9acb7"],["/tags/博客死循环框架问题/index.html","49d876d6dcd2227a494ccbce54529f5e"],["/tags/博客部分问题解决方法/index.html","836045a4acc9dbbeb4dcff68facce106"],["/tags/反序列化/index.html","dcd7c254f188cfb2ae7015d5ada0ff15"],["/tags/命令执行/index.html","b134367bcab0c003b515d2b3e8f016ba"],["/tags/局域网攻击/index.html","992c88f5f055c54fca3581b4c9ed29c9"],["/tags/常用指令/index.html","441f0acced2e043d7892a2494a27fd2e"],["/tags/心得/index.html","e72ae4137c7b0f8767d01ed78465bab7"],["/tags/文件上传漏洞/index.html","1932dddca4dc7de3b02f666237cac813"],["/tags/文件包含/index.html","c373637a34892cbf85701b6597763f9d"],["/tags/流量分析/index.html","730242c4100a84eb17cb4e6de4a08a40"],["/tags/渗透/index.html","71a7eee310f58618678e735741d3047e"],["/tags/渗透测试/index.html","b23af75173f62f9f7d2206c963609603"],["/tags/漏洞复现/index.html","0184f70cbfbf72ff3b0fc55dcede7ad5"],["/tags/留言板/index.html","3f539fa865466b8b79d9e1029202eeeb"],["/tags/赛后复盘/index.html","816b6fc45063c41b36600ac7a3a2045b"],["/tags/黑盒测试/index.html","8598ec3e0c2053bd81dd143f9fa98b66"]];
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
