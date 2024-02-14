/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","5767a16dbd695cce3332789e16c9d789"],["/2022/01/11/博客制作遇到的问题/index.html","c6a8a63abff593b63c15dd08622b7cf0"],["/2022/01/15/C/index.html","a99423d8ce56d372eff3c0585b0caa30"],["/2022/01/18/新版next置换/index.html","d97164fc88ae96535e1d64722300088b"],["/2022/01/19/不蒜子相关问题/index.html","562e14b6d7dedf3e8f722a01784736cb"],["/2022/01/19/框架问题/index.html","29d85e7d28819a469aae9a692eb1555f"],["/2022/01/20/ctf之reverse/index.html","59f079e7ad20b39fe2a861d8047cdd79"],["/2022/01/23/misc隐写题目总结/index.html","55f189993396a37c5332a7684557414d"],["/2022/02/01/684/index.html","15b7f2f5a286bb2d9dc5cb6fc8b17d76"],["/2022/02/03/留言板/index.html","512fedf884be0386e50200e2f945900d"],["/2022/02/04/SQL简单注入/index.html","f08509d316ec8f5e2d0b9f98ebcc0200"],["/2022/02/05/最全的HTTP头部信息分析/index.html","89e1fbb6c8bc2247fc55c327db67af7e"],["/2022/02/08/ctfshow文件上传/index.html","8f753903080943c089c7905eae6c6095"],["/2022/02/08/常见密码类型/index.html","6b1cb784f73670dab7b05280278d8400"],["/2022/02/12/VNCTF2022WP/index.html","0c541ba20a3c3d8587b4e3b21d8903ae"],["/2022/02/20/ctfshowPHP特性/index.html","c1c51c8e5a98cf2048f95d62a95ff724"],["/2022/02/25/php伪协议/index.html","129a12c92a737a392f44d91761c1662b"],["/2022/02/26/ctfshow文件包含78-117/index.html","d7cb167de01df0b1adefa786e1316a1c"],["/2022/03/02/Clash漏洞/index.html","4eabd562525dc7bc2b99cddf17ff1a9f"],["/2022/03/11/流量分析之题型解析/index.html","ddb278f11aa985a93ca9b274f7eb4770"],["/2022/03/15/ctfshow命令执行/index.html","108f58e4964e5c4a7948c35fc345353e"],["/2022/03/22/CGCTF/index.html","94a529a41521b173a089b1424d2e62e6"],["/2022/03/24/ctfshowxss/index.html","07c8293ed1862121458eee3a1c063497"],["/2022/04/04/黑盒测试/index.html","210ef952060c707e49f852f8d8668dea"],["/2022/04/11/nmap/index.html","ce194ecc51a30d235be060f1bf67382a"],["/2022/04/12/渗透流程简要记录/index.html","7ba6db7435c98bafb38c866bf17b3e03"],["/2022/04/12/渗透测试之攻破登录页面/index.html","484ea8e5481d91b31fd243eb1764566a"],["/2022/04/14/xray扫描器/index.html","4a5d41b3c373dabe24af3e769d9b3f41"],["/2022/04/15/ctfshow反序列化/index.html","be54097c0f3f398fa074238288dbefa6"],["/2022/04/26/渗透测试实战/index.html","9ee271918ecd5c710c136d5ef236a0b6"],["/2022/04/28/sqlmap教程/index.html","0538fc038e9bd267e2cebd849fde4dd8"],["/2022/04/30/认知文件上传/index.html","9fbcc740565b1994bc55a086c6c765ad"],["/2022/05/03/nahamcon/index.html","042f4ded7d4e343f019a8a8cc119fcbb"],["/2022/05/15/awd/index.html","1e44b72f6a0b1924c0f715a241ea8359"],["/2022/05/22/DASCTF/index.html","904ddcd6fecaf7aad5d82777864db5fe"],["/2022/05/27/520/index.html","7a32205f9b82932b5d5af64796cc5f4e"],["/2022/05/27/ISCC2022/index.html","380dbc32ab2c76b4e21a34b46343f042"],["/2022/06/01/第五届世界智能大会/index.html","d42c25cbff7ebfbdaaca6380c1bd991d"],["/2022/06/04/SEETF/index.html","e39d392841145b507fc3fce004d5212e"],["/2022/06/04/bcactf/index.html","9169138400bf481998f566bda6b30fa5"],["/2022/06/05/BSidesSF CTF/index.html","0cf68a4339b6cc7856004e0e834ec57a"],["/2022/06/07/Docker部署web题目/index.html","2c1f900f06e043e45a954443ed1e7d0f"],["/2022/06/09/利用oj搭建C语言考核/index.html","4398f9c3abafebb22244aa0f6677f7ac"],["/2022/06/13/限免题目/index.html","57faaf1b9801d4d5c98d1f1382828411"],["/2022/06/14/钉钉rce/index.html","8b8c58927ad657cc079516926a224f3d"],["/2022/06/16/内部ctf/index.html","1956e91f0d71c78861b5ffe1905d4569"],["/2022/06/25/攻防世界高手区(一)/index.html","5d2a014ade8c532f667eac4fce0c2034"],["/2022/07/01/两小时AK赛/index.html","1542e560c16b24336b74939a1c39f389"],["/2022/07/03/鹏城杯/index.html","dacec3fc9c391cd66a1bb860e34a5388"],["/2022/07/04/XXE/index.html","0f8ff08aabce1f9f95d61598b8b4e298"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","abd3c7fecbef58ab376db864eaf76161"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","ad309c6906ef47e8ada76ba0f54fe55e"],["/2022/07/08/chinaz/index.html","c55e8f128117d7fbabd47c3196f007c8"],["/2022/07/09/蓝帽杯初赛wp/index.html","5464b1b7b332183812173b2a9dd1f709"],["/2022/07/17/NepCTF/index.html","e7a2820b44bc54c44b19398160d1fb83"],["/2022/07/19/2022ImaginaryCTF/index.html","d562d4cfddff607b75ffcfc148b09e38"],["/2022/07/20/局域网攻击/index.html","4a566a558c07c2874eb5ae3b5a2b0db1"],["/2022/07/22/2022BDSecCTF/index.html","1d288f7f6c58408df719bb7dc726bd67"],["/2022/07/25/DiceCTF @ Hope/index.html","adcb1cad8a171b2737a7ee36a608bc62"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","fb4d1903336593e49d4e81668c06eb0a"],["/2022/07/31/TFCCTF/index.html","19991bd541d79534afa7fb99c5b53fe3"],["/2022/08/03/NSSCTF/index.html","db86e7782653c947381148a268712850"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","347b6056e121edf3efc489942b7ce3cb"],["/2022/08/12/T3N4CI0US CTF/index.html","71d3709a79ea9e6b552cd9f52e957f80"],["/2022/08/14/SHELLCTF 2022/index.html","0e561b16b033d839fffefb7edc425a54"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b676ce23b96894fa0108a5ad196d9b67"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","cbf6e74e5cc1f10feefeabfe5d92ec75"],["/2022/09/16/柏鹭杯/index.html","79d87a4bd17e022caf4e500f50c1f939"],["/2022/09/20/HUBUCTF 新生赛/index.html","954ccb725543a3ad8d09d57e82b55c7e"],["/2022/09/27/NewStarCTF/index.html","fde2049780907db85bd6958fc031e672"],["/2022/09/27/bugku渗透1/index.html","f2000986ce65a8fd38925181c7d3410a"],["/2022/09/29/tp6漏洞/index.html","5a791dfe67a006cbd589424dd2a17e51"],["/2022/10/02/SWPU NSS新生赛/index.html","861e8a9bee0ec20a47366c5c5a0a22a7"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","29fa7d256c21e7f8756b544f02c49a68"],["/2022/10/27/Moectf西电CTF新生赛/index.html","599db0fb03b0d33545797cd9628fe8f2"],["/2022/11/02/HNCTF/index.html","9d6b3005405dfa6dda866ab802a7ca5a"],["/2022/11/04/2022工控CTF/index.html","5e6703f5a9e5fb38f1301cf2d01f6d39"],["/2022/11/21/极客大挑战2022/index.html","bcb6be76a29993cf8e16e9e1589ebc1b"],["/2022/12/05/TUCTF 2022/index.html","80ac6c0efd9658743af4285f08134cc7"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","d78069e993215da810bb6b389ab82537"],["/2022/12/18/金盾2022/index.html","3adb9a07f73cadad838f3af964d31d42"],["/2023/01/01/CATCTF/index.html","04979757f7359e5f2c96574a70209791"],["/2023/01/09/RW体验赛/index.html","bced564517fa1d1c655b9f073d95a173"],["/2023/01/10/铁三/index.html","5ec05480609822da766c24dc54f112c2"],["/2023/01/16/Ugra CTF Quals 2023/index.html","f65bd8950d92604a63b1cd456c288ffd"],["/2023/01/18/山石2022冬令营/index.html","5f3d99f1d6695daef5e31b4862fcb36b"],["/2023/01/19/SICTF/index.html","47c21d91286a7b6baaef7c4e93a37087"],["/2023/02/04/2023西湖论剑/index.html","34ae98f3680895f9b438a6533cc08cff"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","e755bc33c33b7980ca58829ad5ef0c8c"],["/2023/03/04/公安/index.html","44a0923f86e44e450a267e3bb5a1c8cc"],["/2023/03/07/mysql之udf提权/index.html","5b27faebd156f306378b90a2d64745fb"],["/2023/03/07/红日靶场练习/index.html","30944900ada8d1d89bb535c3d54b691e"],["/2023/03/27/NKCTF/index.html","e5969c844755f6c834ef5f3f5965037e"],["/2023/03/31/楚慧杯/index.html","8972204f678e38ef218cd112d3faf7d0"],["/2023/04/23/HDCTF2023/index.html","91abd5c2ca40f80f5325f4683ab4d590"],["/2023/06/01/2023CISCN初赛/index.html","05e2ed6ca93f3934e8f3cc087c22d018"],["/2023/06/28/2023CISCN[华中决赛]/index.html","5b5960f3db81d5e55e1c819216b9869d"],["/2023/07/10/CyberSecurityRumble Quals/index.html","4ac143c8c8cb10ae84091fb1ca38c399"],["/2023/07/22/2023BDSecCTF/index.html","b464e7a8c5c3d2bec2e9a3ed2c4fba65"],["/2023/08/07/SQL手注小记/index.html","b66652446ee4060a4e5f0263b7127515"],["/2023/08/27/2023陇剑杯/index.html","80b672bdd8b42ae3872ef281c9fc1cb7"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f5d85e80f805cb20d6d37539de31a8dc"],["/2023/10/23/对于多层代理的研究/index.html","9bd3f05790841ed666240b70b6d68134"],["/2023/11/25/金盾2023/index.html","1e59d02d4573074b7cb31263dadc28d1"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","7cbbb79c237425d258d5b9388a36b9e1"],["/2023/12/18/2023强网杯线上赛/index.html","a92394768d9052abd63c07c50c61d278"],["/2024/01/08/基础ROP/index.html","a7027448e862cdef44dd75926bc8b0dc"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","11aa0b48250aae3288100b70a587c859"],["/2024/02/13/打靶-Tr0ll/index.html","b8c50a2aa3778cff1a1ad2236126b517"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","d9824e722ac5101fa616370a54c63a7e"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","312fbfbbed432ed6a059609c4703cace"],["/about/index.html","71f2c0b408606495212d8c46395d80aa"],["/archives/2022/01/index.html","220ec1b498421450384af7144b1ea567"],["/archives/2022/02/index.html","9f534721c3bd83bc6b702c14682e21f4"],["/archives/2022/03/index.html","608b53bd0a98d3119d215f27f11fd8ae"],["/archives/2022/04/index.html","f68ca1e5524ee2b0056355c8386b82d1"],["/archives/2022/05/index.html","3707cb7068f3747089b37d3e87f14967"],["/archives/2022/06/index.html","b4127b1f6921d4d3afa5d93d7e961065"],["/archives/2022/07/index.html","854ecd49bef87b6e3eed4bb8647fa83d"],["/archives/2022/08/index.html","ffbf291a3047113e93625f0345ec03a2"],["/archives/2022/09/index.html","9f19f7b056512d3d5cce9f39f7a437c0"],["/archives/2022/10/index.html","068e002fede3b1f2cf9d5c90cc650b92"],["/archives/2022/11/index.html","d4c7028b62ca9d8ad8055bc5c2eccc46"],["/archives/2022/12/index.html","c849fa7dc65cebbb55a1c4e40520772c"],["/archives/2022/index.html","fae996fbef224d655f4f50939611e652"],["/archives/2023/01/index.html","d8764799155a2f45d2ea245994b8d0c7"],["/archives/2023/02/index.html","ac74ebc9ce0585c5244b8c5b78767073"],["/archives/2023/03/index.html","94cc7349bdc70e1200b236329b20bd3e"],["/archives/2023/04/index.html","d4243d2eaed30f993c768b0cc394d23f"],["/archives/2023/06/index.html","4d281f302c2dc704677b23306bd0cf0b"],["/archives/2023/07/index.html","4c23b4483283329e59a3f43733870008"],["/archives/2023/08/index.html","7a593f549ad76100428369a045c0d038"],["/archives/2023/09/index.html","b45ae4943fc9c9791a7eb5815581570d"],["/archives/2023/10/index.html","da236389a0b25b51d5ccec2544ba2d6f"],["/archives/2023/11/index.html","8f33ad88e0ffdfa140813059b19829b2"],["/archives/2023/12/index.html","66761bf2f8923dfcd19b9d7705eee9d6"],["/archives/2023/index.html","238bb9fbb27b54ad267d0e92dee229e4"],["/archives/2024/01/index.html","241e726a5dd6185aefd198c236a28a60"],["/archives/2024/02/index.html","f37600dbaac7fb911459429943f64b98"],["/archives/2024/index.html","9cd219b55dac62c9a58d56060dba9c85"],["/archives/index.html","6340325e7f8246c404c5ffa0a8bdd799"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","8281a122a6cbdd1100e0beac6bd3270d"],["/categories/CTF/index.html","64f7f1a5116aad36981b03731e592af9"],["/categories/PHP伪协议/index.html","44cc20db535216bdaaa74dec143cfe23"],["/categories/PWN/index.html","ae1d9395bd41b1553b7f1785a43fdba0"],["/categories/RE/index.html","b93678a5bcefac0210722b679d0f4c72"],["/categories/Web/index.html","337a23057881b05091bf9830a9a7ff2f"],["/categories/awd/index.html","52d6df269d4dae21d7dbc1720dcd3fa2"],["/categories/index.html","aea5a5fff66cb85c355d17b0a0cdac02"],["/categories/misc/index.html","fdb6f71fa3ba629521febe1dd1183377"],["/categories/sqlmap/index.html","6f321654a099b180db1b008cf9954a19"],["/categories/博客相关问题类/index.html","247d03cf2b2e69ade38801410777e6c8"],["/categories/局域网攻击/index.html","f3f840e4acac0815be42f06ef10dc8e4"],["/categories/心得/index.html","f55400a7f12b22f1fe1ef3bee91cf415"],["/categories/流量分析/index.html","e37b397030868d2a1843fe7f3cabd7f7"],["/categories/渗透/index.html","66eceed95b4d5b35e951e69e5abfacf3"],["/categories/渗透测试/index.html","15fc3bf1715036488d2fcf4aa07f5382"],["/categories/渗透认知/index.html","164df1f5aa7c4dda7a486e3035ebf00e"],["/categories/漏洞复现/index.html","a560003f8c286930566b6def16075f91"],["/categories/漏洞测试环境搭建/index.html","8a37634359e389de30fa4f5866691fa3"],["/categories/赛后复盘/index.html","1961ec21b1577cd6732693fed18d5e6b"],["/categories/靶场训练/index.html","f1f443f586be3faa7995b888d09cb6a2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","838a818652ccb2a1d2415842bb4f5637"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","2154caac015fd32d8f79475129473bd7"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","25003b0461397747b4fd473090232817"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","71e2c812007ab3a8c09e1b304c18cdcf"],["/page/10/index.html","651742f5258e3ea356ab646680d225ab"],["/page/11/index.html","c9d9c50ca7eac534d80d0e0941640be4"],["/page/2/index.html","73916c596f699b2c99332e82e7bec6e4"],["/page/3/index.html","dce7903bce4208c053cda2164872bad7"],["/page/4/index.html","5b4a94aaeb87e939b949e4e76e01e3ef"],["/page/5/index.html","f71b4394d63906ea65df6a38a6c8c38e"],["/page/6/index.html","5b3282c1418388ce8a2885c242c1c649"],["/page/7/index.html","12f8386ab8dd655763c6dc6dea6598ba"],["/page/8/index.html","f6702a3429a753183ae963f2b5abb994"],["/page/9/index.html","2d55ff21f8428b5e734c182b8f19722d"],["/sw-register.js","1ca4ba12ff289e5c717c339032fb3e57"],["/tags/C/index.html","aeeb7d394fd5ab7fcb002a7e275165a3"],["/tags/CTF/index.html","211b52f96d03eb09f7420ad144d7120b"],["/tags/HTTP头部信息分析/index.html","742434608c979d350c098e9ec4f3a1c3"],["/tags/PHP伪协议/index.html","6bc5c5f8b24f99399dd89f1274b039c3"],["/tags/PHP特性/index.html","f54bfcc19916091db76109bc3a6db7a0"],["/tags/PWN/index.html","dbeca5ea534f2ce6d46ce9c589fed7df"],["/tags/RE/index.html","8e340665f62f5ffa3fe69df2c1d1139a"],["/tags/SQL/index.html","33e0bb65f6a5d4fd077e346f6a8731e0"],["/tags/Web/index.html","0f6fce429e4bc104c59e3a4140b7eadd"],["/tags/Web工具包/index.html","b09dad2b062053ffb7ba14225819c954"],["/tags/awd/index.html","3e2373af881d36215f6f3b9e5e66dc00"],["/tags/ctfshow/index.html","a9c679bb6625b5ef99566ed026a78f9d"],["/tags/index.html","0f42f7839da7d891c2ffbb9cb06df262"],["/tags/misc/index.html","14b7dd7b55ad6831912745c6eed2249c"],["/tags/next主题失效/index.html","283c8a7f71e30bdf6e86cd1171a5e791"],["/tags/sqlmap/index.html","1ae14ff23a8c775d29f3166cb9a647f8"],["/tags/wp/index.html","99973daad910a71f284b75ec603fae29"],["/tags/xss/index.html","4c13c3a8d41c5a89d959e77f1a8d28e9"],["/tags/xxe/index.html","9014107eee4d8a84d774cb4c90696355"],["/tags/不蒜子不显示/index.html","817c331ac55a5c1edc1a21a07758ed32"],["/tags/博客/index.html","a7a41c11bbf6ee49ef52ed6d6f81f749"],["/tags/博客主题优化/index.html","3126f3af6be7d308c4202641d6bf2ea7"],["/tags/博客死循环框架问题/index.html","4b6229a72fcb9e89e3a9efd096578c29"],["/tags/博客部分问题解决方法/index.html","2b7f778223b8218d6904aafbe20ac301"],["/tags/反序列化/index.html","b26ba9bf578203209ec01ff56e24e563"],["/tags/命令执行/index.html","6eff79f31b735bb9c539e0647e257117"],["/tags/局域网攻击/index.html","2ebd7916a8a5d3522982aaf67db283b7"],["/tags/常用指令/index.html","52b56110841badee4a2ccdcbd547a64d"],["/tags/心得/index.html","178e227d938a07cb0448c0a1ec375d5c"],["/tags/文件上传漏洞/index.html","4e13edb6668bddcc8acd8fb7248bd8af"],["/tags/文件包含/index.html","de3a5278271f3489c9cce60e980e4612"],["/tags/流量分析/index.html","25509e1a91549a818f1a38dd333aa5fe"],["/tags/渗透/index.html","1117a93be72006fdfe8d9ff3373c20a3"],["/tags/渗透测试/index.html","7a9e765acf5361e10e5146958f6fe640"],["/tags/漏洞复现/index.html","0e94c848e97aabfaf044d1d1bcea5233"],["/tags/留言板/index.html","95488c6155f7d1d1b8fb361132920567"],["/tags/赛后复盘/index.html","4b535f9d0aa883d23120e47ac8dad586"],["/tags/靶场训练/index.html","ad240e9628c049e80a0701aafd41fb61"],["/tags/黑盒测试/index.html","44a297df2ec0f3aa617005c6cc6bd7dd"]];
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
