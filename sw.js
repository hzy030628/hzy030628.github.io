/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","1d69d7560e1fd68aad9446a84716a96c"],["/2022/01/11/博客制作遇到的问题/index.html","92cb1e9f19f17c4d95ed9dce8f124fa3"],["/2022/01/15/C/index.html","a4e679a393be311f7b677b51b15b92d9"],["/2022/01/18/新版next置换/index.html","7cac92f5bcc46d9cdf6623f643fc3ff9"],["/2022/01/19/不蒜子相关问题/index.html","9815261fd7b342c226133b1e90b17888"],["/2022/01/19/框架问题/index.html","a27fa74e7339f25093b63d82eda148a5"],["/2022/01/20/ctf之reverse/index.html","9779c172fe9d9e210c6c132f17a3c98b"],["/2022/01/23/misc隐写题目总结/index.html","4b3ee3b2b259aa30dd0fae414a1c39ef"],["/2022/02/01/684/index.html","e808f461d6647894354f2800712b549b"],["/2022/02/03/留言板/index.html","5332a997e9ef9899e6acfc88240fb9c4"],["/2022/02/04/SQL简单注入/index.html","33872564d38f988b695da28e36002f30"],["/2022/02/05/最全的HTTP头部信息分析/index.html","277d72337cdba9192d8f28598b425c61"],["/2022/02/08/ctfshow文件上传/index.html","cb022a3bd3fc6dfccd81412e0091c363"],["/2022/02/08/常见密码类型/index.html","d0400291ce488a6496a3c4223164806b"],["/2022/02/12/VNCTF2022WP/index.html","a728f6af0dfdbcb01b14b7b6ad3e6355"],["/2022/02/20/ctfshowPHP特性/index.html","f84add75759224d1cdd78effb9f96e3a"],["/2022/02/25/php伪协议/index.html","0ca112ada859a41ea382876a55b8c1f6"],["/2022/02/26/ctfshow文件包含78-117/index.html","48a83d72c7b16239f589b4da8bbf291e"],["/2022/03/02/Clash漏洞/index.html","bcbf1e2ff118059272a6d684aeab88bf"],["/2022/03/11/流量分析之题型解析/index.html","612a354c57fa533b0463d100da7dade3"],["/2022/03/15/ctfshow命令执行/index.html","9f3dccedae8fb1a76fe5b7eef853c2ab"],["/2022/03/22/CGCTF/index.html","5fc931c5d494fa5e86f286c84140a817"],["/2022/03/24/ctfshowxss/index.html","187506a2a4f65020f47677d1a0379db2"],["/2022/04/04/黑盒测试/index.html","b43ae93418fa03573d060c5ad91700b0"],["/2022/04/11/nmap/index.html","180463a3ddf405cc3f2cdafa5f203c8d"],["/2022/04/12/渗透流程简要记录/index.html","469b5c277d2ed6242f71eecaf501e300"],["/2022/04/12/渗透测试之攻破登录页面/index.html","3942e67db52f09de96b05be9290e6da5"],["/2022/04/14/xray扫描器/index.html","be80c751b98e2b142eee6b5434ef8d10"],["/2022/04/15/ctfshow反序列化/index.html","88b769a281d69e8325b16b58fb167881"],["/2022/04/26/渗透测试实战/index.html","5b36502bd42df2582d155d58a8a8e8c8"],["/2022/04/28/sqlmap教程/index.html","cea8889417eb058b469154cd4746c934"],["/2022/04/30/认知文件上传/index.html","fe08228aa71ecef065f830ec06845731"],["/2022/05/03/nahamcon/index.html","e9c3a15a770fedb645aa01d8a784a8cd"],["/2022/05/15/awd/index.html","ed0b6d72e9d3df85962596a84b923ac6"],["/2022/05/22/DASCTF/index.html","cd93584164a7709efad6fbfdb42453dc"],["/2022/05/27/520/index.html","eb074fdc75202e30af809ed827a05ccd"],["/2022/05/27/ISCC2022/index.html","161c03d5d61551fe449c47d0c1a3eb87"],["/2022/06/01/第五届世界智能大会/index.html","63fa4843e4d013202cc53ffe490bd0a9"],["/2022/06/04/SEETF/index.html","aff7e929c20e4bf1d27e12b08f16e03f"],["/2022/06/04/bcactf/index.html","cdf244aa40f6d0237f83c1ea4364b98d"],["/2022/06/05/BSidesSF CTF/index.html","2eae0a51cb1f7c041e2817d62c556947"],["/2022/06/07/Docker部署web题目/index.html","554f4577ba547f0324e989abf2026b65"],["/2022/06/09/利用oj搭建C语言考核/index.html","34e06278186c1ed465708751b6b30f52"],["/2022/06/13/限免题目/index.html","f47e4d242076c146b39bc42b686d8a15"],["/2022/06/14/钉钉rce/index.html","60e90af31f1def57551317b4602b4b78"],["/2022/06/16/内部ctf/index.html","f86ff94e66dcb1c65eed1ac255903ea4"],["/2022/06/25/攻防世界高手区(一)/index.html","366a5c34f1ecb86cdd0df8022e60ebeb"],["/2022/07/01/两小时AK赛/index.html","48beef336415a55cf4047b2ca2d770e6"],["/2022/07/03/鹏城杯/index.html","5aa08bfda1634d1ca94df231b068cbe0"],["/2022/07/04/XXE/index.html","e81cfed54abd52ee26fbb69e6dbb5e40"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","effd6f499f54e5b8a6eae1e83c03cf82"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","112036025185a8a35c128ff71fb95c65"],["/2022/07/08/chinaz/index.html","e24bd9f0a643a7d6b2249b88ffdf4917"],["/2022/07/09/蓝帽杯初赛wp/index.html","e7c9f9bc3343a16f2174cd963a1542ca"],["/2022/07/17/NepCTF/index.html","9b1178fcecaffbfdf2b94b11da627650"],["/2022/07/19/2022ImaginaryCTF/index.html","7f894309694d879ddc345046731f86fd"],["/2022/07/20/局域网攻击/index.html","7b9684703900219be86b27200388494e"],["/2022/07/22/2022BDSecCTF/index.html","749a121f5445d1160a682ed28bdcf93b"],["/2022/07/25/DiceCTF @ Hope/index.html","35675614607bd5c81baf33e1127b4c1a"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","81f38af2221aa626c017931ab429dcb2"],["/2022/07/31/TFCCTF/index.html","ee381554266bdfd3bf00dc7d02401e66"],["/2022/08/03/NSSCTF/index.html","5489c1a1004c00ea1de2811dda818bb2"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","00cff22d03118b4cdfc208fcb5d00fae"],["/2022/08/12/T3N4CI0US CTF/index.html","2e9daa84d5cde897b442f07c53f58fcc"],["/2022/08/14/SHELLCTF 2022/index.html","51fc3004ea99e5beba8f7fdad9f17819"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b892b175fec7ab6e5230333a8de57554"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","b8c4dbe85e019bad027ba406306c80d3"],["/2022/09/16/柏鹭杯/index.html","15f1633e0411c6e258714c4dcbccd56a"],["/2022/09/20/HUBUCTF 新生赛/index.html","a250a79f67979075912d5ed44b0bbe69"],["/2022/09/27/NewStarCTF/index.html","5dc2d9e59975b20ae7d92af8f6e82830"],["/2022/09/27/bugku渗透1/index.html","35538e3a523cd61d88b6f646f1367946"],["/2022/09/29/tp6漏洞/index.html","ebeeb98e9c3f43dce6e0ad0e5759a956"],["/2022/10/02/SWPU NSS新生赛/index.html","5a8a6d5342e64d499f5c718b76e41272"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","a260cf473b75cd7f3aa1b5ecff041a1e"],["/2022/10/27/Moectf西电CTF新生赛/index.html","cd71f9a2d13e03910ce22be1a2444ea0"],["/2022/11/02/HNCTF/index.html","6564eb6f91ecfc438647e977a42f6b6d"],["/2022/11/04/2022工控CTF/index.html","82b1a4d917ef7bb0369de2d532201126"],["/2022/11/21/极客大挑战2022/index.html","46bc0eb4c5894d54d9a7bcea88c449b9"],["/2022/12/05/TUCTF 2022/index.html","fa2f76e88807f49604bc984783bb0639"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","d26f0c95c8e7b285852cb9b2642a2743"],["/2022/12/18/金盾2022/index.html","bfb80ca241267d3d44400101c33760cc"],["/2023/01/01/CATCTF/index.html","df0f3277cb10f61cfdfdd81a5ae42992"],["/2023/01/09/RW体验赛/index.html","31ad2f650fd0474e1332e6fc0db3827a"],["/2023/01/10/铁三/index.html","74aef5c04ee488091a2e47eff25272d6"],["/2023/01/16/Ugra CTF Quals 2023/index.html","140acf283036f23c615d84e7e47473a9"],["/2023/01/18/山石2022冬令营/index.html","4aa221584c75ee431ce1a5d617b2dd8b"],["/2023/01/19/SICTF/index.html","830bf7780e45a8f263c186a7a5a45fb0"],["/2023/02/04/2023西湖论剑/index.html","edfc2e36c7bf4fbd0bd126a7a91e0ee5"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","3eb43cf92ee00a1bb68ae3c3a9714ecd"],["/2023/03/04/公安/index.html","43b3aeac5e9c3af7ce2467ee4995434d"],["/2023/03/07/mysql之udf提权/index.html","3ef9e59f15d21157103892bf5bdee4e4"],["/2023/03/07/红日靶场练习/index.html","4c796cb56f5859e04bf0b25aae9f48ca"],["/2023/03/27/NKCTF/index.html","92adaa2cc1ae15a3afced07d6fc8bb63"],["/2023/03/31/楚慧杯/index.html","10bcef73865d5b25ef90743485c937ec"],["/2023/04/23/HDCTF2023/index.html","cdbb89da4cbe10e5626214f4bc44b9e0"],["/2023/06/01/2023CISCN初赛/index.html","37c7fec4935e2edc683f5bc25d1c2727"],["/2023/06/28/2023CISCN[华中决赛]/index.html","869e411ac01aec8f1cd4b8af84193729"],["/2023/07/10/CyberSecurityRumble Quals/index.html","7eee7dad28fe916b67cfd2ef40bff286"],["/2023/07/22/2023BDSecCTF/index.html","6f40d3b0f4dd685074c042022dc44cb9"],["/2023/08/07/SQL手注小记/index.html","b2249fd18bd20b40b3a998d5a633d95a"],["/2023/08/27/2023陇剑杯/index.html","100384d600dc2fcdd64c0c63adca2b3a"],["/2023/09/17/2023蓝帽杯半决赛/index.html","3b41bf9f14b634905a29d1fd5a42f8da"],["/2023/10/23/对于多层代理的研究/index.html","eacf7366eb01c9b0e1cef9c5a1c40716"],["/2023/11/25/金盾2023/index.html","ebd83c0eedb3892e018325e7fe889c08"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","5b8da77bd697b955e5a980682d34e6ff"],["/2023/12/18/2023强网杯线上赛/index.html","0575cb6ba97d2ac7fbdbb72a85da70f6"],["/2024/01/08/基础ROP/index.html","87118985817eac2a05c076e5c764eec0"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","14a9cd6086eb0b5e95000a70cbb4f503"],["/2024/02/13/打靶-Tr0ll/index.html","08b66e0983e1189fcbf411898cfd7c8e"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","a332601b083c22dff5271f350eaa6a10"],["/about/index.html","8ab67128d70e5fd3a533185b02b1716b"],["/archives/2022/01/index.html","8bddb98f0c8601d2433bba90497ec34e"],["/archives/2022/02/index.html","5af1208c28ff51040e7703aff1990c42"],["/archives/2022/03/index.html","218c068276a5ac674994f38564c668f6"],["/archives/2022/04/index.html","834f868481389da6105eb17737e38cf6"],["/archives/2022/05/index.html","12c0d6c3e154c9b31839d2e2b93254bd"],["/archives/2022/06/index.html","40ad12537af2e208de292fea525d86d3"],["/archives/2022/07/index.html","0283e247cd0deb8e5bcdc79a50b66bfe"],["/archives/2022/08/index.html","306cf1b514f4be9fa7c1c5af1d10db8b"],["/archives/2022/09/index.html","08ac204338aafc7c350b8e64cb3dfa11"],["/archives/2022/10/index.html","4c5605feba8753c18d38613ad1667f64"],["/archives/2022/11/index.html","ea477c1c2f7df681c5d8cc1efceb9bf4"],["/archives/2022/12/index.html","6851e62e3bf305aa8fd17de890183263"],["/archives/2022/index.html","37a409546298b14fe8a419627406b295"],["/archives/2023/01/index.html","56b35c91cbea64f1e8e888ecdd70d0a1"],["/archives/2023/02/index.html","8ffd8847f50ffd54244933dd1eae6a77"],["/archives/2023/03/index.html","99b44d1474068e36a7abe721f37fc609"],["/archives/2023/04/index.html","6b6db2dbaf0581ecaed03b9f7cf5983a"],["/archives/2023/06/index.html","47f06ffec4c6a3c827d73ec5e1095882"],["/archives/2023/07/index.html","83aecb7fb1e89d83bb2254d259f462cd"],["/archives/2023/08/index.html","40fb963c2936b0cf84485711f2d822ea"],["/archives/2023/09/index.html","0ee849319ad71136de8e266ceb7996ac"],["/archives/2023/10/index.html","107d21450b3bdb473f70634517807d98"],["/archives/2023/11/index.html","7c8a7c17221e63e9f0f3202b3465fd07"],["/archives/2023/12/index.html","a73536798d7d235b4d23af22927c5702"],["/archives/2023/index.html","12cabd4d390989d298b3fb0c0b69870e"],["/archives/2024/01/index.html","9afa707ec1e30361e4946cd8d9c1a52f"],["/archives/2024/02/index.html","d602390c2d9ce3a84e83d1ac6b662af1"],["/archives/2024/index.html","8b1ccc503126aef9ffef92f363875460"],["/archives/index.html","6e246038f245a95cfe24f47c965edb03"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ccff8d3f6bdbaa2542b7bd7137baec70"],["/categories/CTF/index.html","3f24381253152ecf40b55dd2ca2f80ca"],["/categories/PHP伪协议/index.html","551470a9e9ab84cfbbe1e53dca6e56af"],["/categories/PWN/index.html","793d413281893e5f8f11da9772155052"],["/categories/RE/index.html","0608770ad79cf644feea1a628b440f6e"],["/categories/Web/index.html","b9c1c6ebf16e99d2b291078f2bbe0184"],["/categories/awd/index.html","7da3f3ba66569657c70c49ba20235d06"],["/categories/index.html","8ca96e116d9b25a41617507bd0ae5ffc"],["/categories/misc/index.html","30f799d31c015cc79a2893e43d4d61c8"],["/categories/sqlmap/index.html","890e7cf457c564fc65c6273ba7c6767c"],["/categories/博客相关问题类/index.html","e083fefea4b665ce4e4d0d71287834d2"],["/categories/局域网攻击/index.html","314b978c8394db96ffca26cf3c4101bb"],["/categories/心得/index.html","09438d341ac4625c4127b264edeb2bba"],["/categories/流量分析/index.html","56ba68088d0dfdd89eb8c9f94be2d932"],["/categories/渗透/index.html","0aba72e2b90a483244a615695583370e"],["/categories/渗透测试/index.html","90ed712c15a0fb81c030665c590b226a"],["/categories/渗透认知/index.html","4db22f1fedd9aba6a0c8563c8a85c431"],["/categories/漏洞复现/index.html","c35fa075378483212ae00b4d9d983910"],["/categories/漏洞测试环境搭建/index.html","b434972a18efef677990374f7b40cc0e"],["/categories/赛后复盘/index.html","74af2b56dbd5cbfd23e4c5ff1b43ae2e"],["/categories/靶场训练/index.html","6a3ad7682324f2b6b77e4a983891ee0a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","7e99718069a711d48f99c12b67a84566"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","6673882d0bbc77c25f09ebe2a121fb4f"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","26ce467ccaf15713a1d6d1e4f4041693"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","040a23c55c4c4d1fa8a6eb1e1800af4d"],["/page/10/index.html","c11096cb3f50d54d7aad2d8c2656cfe5"],["/page/11/index.html","01cf8230c2c4fe3d5fed8187ae6854a6"],["/page/2/index.html","c3acb190e0f48055533b2a317aad9c0a"],["/page/3/index.html","66b1f0d7a90c24389801559553374dfc"],["/page/4/index.html","35a57fb458b62dd8373d91936f825ee3"],["/page/5/index.html","bc374b4d7d88ae26bc19c80b9b540ba0"],["/page/6/index.html","2b3d60f8bf1ef57adb473a023cabe2fe"],["/page/7/index.html","45ffabab63b434db070837d8a90eb7f0"],["/page/8/index.html","8b17cf32c9bd96e2f2b99a54690ed553"],["/page/9/index.html","7516ee52f92837e5aa8e31e022728765"],["/sw-register.js","05cd516b26a9f1d300d4c41097b09ebc"],["/tags/C/index.html","89098a8dcedbda4255e4de9a599de4fc"],["/tags/CTF/index.html","b941eb9f0f21e04c1a704134c827e230"],["/tags/HTTP头部信息分析/index.html","cfc3e2796dded0b740164a0e9dd2cad7"],["/tags/PHP伪协议/index.html","ee1e8acabdd19a7407d6cb84be8a9549"],["/tags/PHP特性/index.html","0527bf50cbe5f2e768a8df334c093d32"],["/tags/PWN/index.html","550cbe4c0de7db8e7df2ca13fb157098"],["/tags/RE/index.html","91b30578058edb36eb96c45e6800b488"],["/tags/SQL/index.html","74e68e6ea5d6995d78a4d86af52203c7"],["/tags/Web/index.html","269a1481414c9dbf420b63c4a3ee149c"],["/tags/Web工具包/index.html","f8309dca287892dabee4279d4e89c1a3"],["/tags/awd/index.html","35dec8744b76c3744419908e9a8fa8a2"],["/tags/ctfshow/index.html","d9c1b8a64a11df37f5142f5157aa49d7"],["/tags/index.html","528ff550debb5b61ee25963cf7eb7a60"],["/tags/misc/index.html","992cb807806ce6657f0fa06b41109c04"],["/tags/next主题失效/index.html","737be28a1f585b3c5b7f42f81ad960f2"],["/tags/sqlmap/index.html","687061c5699a15f27cb53548ec1228eb"],["/tags/wp/index.html","d0a158f14395dcf111e2200e5af86f2c"],["/tags/xss/index.html","cffe7ec25f2298f7a30fe6ebdb9ab3e4"],["/tags/xxe/index.html","cdb1071ebba8b38e262816b7e144e377"],["/tags/不蒜子不显示/index.html","50bc6147103abd05bcf0fb76d54d050e"],["/tags/博客/index.html","c816d987312486fafa500c6bb527db0b"],["/tags/博客主题优化/index.html","06e9ae8fbc6cac180f5250e912d29689"],["/tags/博客死循环框架问题/index.html","0aded8e6f8a1cced242ac1ff5b25b6c5"],["/tags/博客部分问题解决方法/index.html","25a0648f22204a9196b9c8c692885ff5"],["/tags/反序列化/index.html","b99cf044e83e3103bbb30188d7df3dc7"],["/tags/命令执行/index.html","b807cf98ca61c36111065a82d83424ab"],["/tags/局域网攻击/index.html","31aa9df05e8d382c0ac3e029ad9d8daa"],["/tags/常用指令/index.html","363f7062eef6cbe591f95807db2e222a"],["/tags/心得/index.html","412684f125cfd35958e21349eb913c21"],["/tags/文件上传漏洞/index.html","aa0452192afe4bd376138195186adbde"],["/tags/文件包含/index.html","48aef88f787fddd937eb2a053daef7e2"],["/tags/流量分析/index.html","789dd5346962f12aa20ae83787654d86"],["/tags/渗透/index.html","e03911ea497ab6e081b612a3ab982c07"],["/tags/渗透测试/index.html","1b69d7b64ad9ac06a3cef9e38251eab5"],["/tags/漏洞复现/index.html","4e66d67191ddba0d50335fa48cc30762"],["/tags/留言板/index.html","da2fc5e952bafe4093eeb7087bfaf556"],["/tags/赛后复盘/index.html","2eb053fe44894ddab483d4f51446319f"],["/tags/靶场训练/index.html","27d95603344f79cfc53d808257adc3de"],["/tags/黑盒测试/index.html","e82792b09fd744c6f1b90980cfb7434b"]];
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
