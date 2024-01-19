/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","11635cecdfe4b8d50cb5bab405806c69"],["/2022/01/11/博客制作遇到的问题/index.html","abc25db84dd7e8a01836d4ccde722ce6"],["/2022/01/15/C/index.html","7f1d0af30722446ccb9551b74dbd374f"],["/2022/01/18/新版next置换/index.html","feda33927b9238b1324e88413e1d9fac"],["/2022/01/19/不蒜子相关问题/index.html","748263313c6bc1ff98439f17e4bef542"],["/2022/01/19/框架问题/index.html","7ae68a6180d06ec9a79f6c787943ff89"],["/2022/01/20/ctf之reverse/index.html","c59f164461884085b0dcfdc6560843f9"],["/2022/01/23/misc隐写题目总结/index.html","4e28e661bab22f45ab3d51f790896fd0"],["/2022/02/01/684/index.html","e58f3892b35aa1788410a2409c9ad806"],["/2022/02/03/留言板/index.html","e57dbfb09f0c8186c66470ff12d4a46d"],["/2022/02/04/SQL简单注入/index.html","eaea73f2929164a7c5de8f65e688e10c"],["/2022/02/05/最全的HTTP头部信息分析/index.html","a1159f2d4022aa2f62d6349238e16d62"],["/2022/02/08/ctfshow文件上传/index.html","e007edcf6e5a3f3122fc93409ed9b557"],["/2022/02/08/常见密码类型/index.html","b1bf25d4621df7eed47a36dd1adfebe8"],["/2022/02/12/VNCTF2022WP/index.html","9735b6879de8de58175e240e7f21ec73"],["/2022/02/20/ctfshowPHP特性/index.html","c2ca86c7871d990fd8f6cec44e963e8f"],["/2022/02/25/php伪协议/index.html","e20eab49f898d6dc4df9ae1a6effc7d9"],["/2022/02/26/ctfshow文件包含78-117/index.html","b16f1cb53d1433981e51376e39ec0c48"],["/2022/03/02/Clash漏洞/index.html","d1f297964c818d3dd17a0a883d723c65"],["/2022/03/11/流量分析之题型解析/index.html","65b13262c31d7ea98a50b10c5be809f2"],["/2022/03/15/ctfshow命令执行/index.html","170129f29cc1b950f586c6b91758f47a"],["/2022/03/22/CGCTF/index.html","02f29f9f67055537cc9ec5aa96ca6fa8"],["/2022/03/24/ctfshowxss/index.html","3dc6a753ea6421cb28c8c36f125bd658"],["/2022/04/04/黑盒测试/index.html","cc91563d6bf003bce7c79361528468f5"],["/2022/04/11/nmap/index.html","47c115a19e0ab9ca7a05da52dcbd22d4"],["/2022/04/12/渗透流程简要记录/index.html","a90106b50e03f3d5aaada01ddb3d32cf"],["/2022/04/12/渗透测试之攻破登录页面/index.html","b9cf78d294e3af1511ce1bb3d1653175"],["/2022/04/14/xray扫描器/index.html","dbb6ebb6a880244f2c73f94607ad472b"],["/2022/04/15/ctfshow反序列化/index.html","1b3a0666e74c6c0dcdd8a74d012c7f2a"],["/2022/04/26/渗透测试实战/index.html","989ac019f38d0ee8cdf0223d658fecf6"],["/2022/04/28/sqlmap教程/index.html","75f52a0ad1cc7bd81c5ff1dbbe94a676"],["/2022/04/30/认知文件上传/index.html","a64ef284ea3367b17e1ce6565300b20d"],["/2022/05/03/nahamcon/index.html","2da59329283e935a994d48d9b797a361"],["/2022/05/15/awd/index.html","7422541b2fd1e2de5b60e4b793422f6b"],["/2022/05/22/DASCTF/index.html","461ad02a55da0c631c93001b35780f0e"],["/2022/05/27/520/index.html","4cbfde697fd62824c532baa29b6ece3e"],["/2022/05/27/ISCC2022/index.html","96785b736f4fcce6782ff50cf1dc24a3"],["/2022/06/01/第五届世界智能大会/index.html","ff99e4a1bd9785836e84578216063ecb"],["/2022/06/04/SEETF/index.html","b44a0d1a4379093b94cea8051666fbb8"],["/2022/06/04/bcactf/index.html","67d43bd5b94e84fbb1265e45232c891b"],["/2022/06/05/BSidesSF CTF/index.html","e26ae3dbf5802d4fa7fbe8eb1a18b99a"],["/2022/06/07/Docker部署web题目/index.html","91cca95850f0202e0963a85db37a7bf1"],["/2022/06/09/利用oj搭建C语言考核/index.html","07222c391b9b60d2742da81e7ea492e5"],["/2022/06/13/限免题目/index.html","885736dcbfd5e625fb7a5f3f1c590501"],["/2022/06/14/钉钉rce/index.html","fd1254c57ad0d01094878bdbecec587b"],["/2022/06/16/内部ctf/index.html","d6b6f8ca5665d30d3e7d06d0d3a7a9ef"],["/2022/06/25/攻防世界高手区(一)/index.html","faca7ef38b74b27276f8c5356553b376"],["/2022/07/01/两小时AK赛/index.html","07d79df76824a3c7ad95844a5fc51666"],["/2022/07/03/鹏城杯/index.html","be50b71f17193d64e1626d2ead6ac989"],["/2022/07/04/XXE/index.html","8343309a9941a66e1822b3ad4d820153"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","9aaf348eac45436b633238040a648e33"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","db2d919af88e375921057b8b11e19df5"],["/2022/07/08/chinaz/index.html","cf9a6379aa020d06340a90ac9e8cc656"],["/2022/07/09/蓝帽杯初赛wp/index.html","2c26a9225fd3f712d9a097cca9190d64"],["/2022/07/17/NepCTF/index.html","d5470cee162f13ea5480515240493d71"],["/2022/07/19/2022ImaginaryCTF/index.html","338952f5a9add0a55ef0e15f4ee911aa"],["/2022/07/20/局域网攻击/index.html","2182fc5eb6350407ad016c044a59a109"],["/2022/07/22/2022BDSecCTF/index.html","e77fedeb719b3b74a298c8634fa96386"],["/2022/07/25/DiceCTF @ Hope/index.html","b307509d565b425bcb6f505af7424f9e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","7f13d44668696787c58a711e96432898"],["/2022/07/31/TFCCTF/index.html","39832b13de2ee777d3814cc24e42777a"],["/2022/08/03/NSSCTF/index.html","2c5e3f49973f4d4e8e90f63dca021ef0"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","fb0e87317f8fbf51b783aecedb1f8bd7"],["/2022/08/12/T3N4CI0US CTF/index.html","035b7e89470fe00e47636652b67a8fc6"],["/2022/08/14/SHELLCTF 2022/index.html","1f846882ee95f31321511719a6cb5a59"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","08ab5d21052426501e475776c06975ac"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","63b9c8057f7a1a88a5842c4e33353964"],["/2022/09/16/柏鹭杯/index.html","d7359f1ad77923a9d6f0011f80c4d2de"],["/2022/09/20/HUBUCTF 新生赛/index.html","2c6f6eb6c8dfd763ac5ecb7f2761e9e0"],["/2022/09/27/NewStarCTF/index.html","b19acf8e093065ab4b3b0cbae811b2b3"],["/2022/09/27/bugku渗透1/index.html","8955fe2477db92bc02937ba8e75cba30"],["/2022/09/29/tp6漏洞/index.html","6eacf64364d67e1b1cef1c608dbb4f64"],["/2022/10/02/SWPU NSS新生赛/index.html","ea92061efc16ca994c86fc2e398d5b03"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","3a89cfa638992f0680bd4bcea611a600"],["/2022/10/27/Moectf西电CTF新生赛/index.html","a02ebbe0de9a6ff60db8b1339dea4235"],["/2022/11/02/HNCTF/index.html","104464f590adaf595468269ff9052315"],["/2022/11/04/2022工控CTF/index.html","976736ac053461d7810c4f027eacda41"],["/2022/11/21/极客大挑战2022/index.html","d5ad4b23c3df55b90a184794cfa101ba"],["/2022/12/05/TUCTF 2022/index.html","8a6909107393d032606061b9c17d3cc3"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","71b8a31583d39e9ed1dc48ed09fc1bc4"],["/2022/12/18/金盾2022/index.html","1bab1a220ff29e4dacee3f0960a8810b"],["/2023/01/01/CATCTF/index.html","af50cdd4deb18f642d6572747668c525"],["/2023/01/09/RW体验赛/index.html","a23ee5f443addae0a2c69dee425b13fc"],["/2023/01/10/铁三/index.html","968abcce2e34d3136e6459caab26faea"],["/2023/01/16/Ugra CTF Quals 2023/index.html","a49556db7048e2948bdf9e295ee975de"],["/2023/01/18/山石2022冬令营/index.html","6b9c87908059e09c9da45ff520b55829"],["/2023/01/19/SICTF/index.html","569328d8b2568ca8273c438872aa2541"],["/2023/02/04/2023西湖论剑/index.html","ab4cc24787c8980b774d87b8b6fe4e05"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f9795ef3a160adbd0ef8ddc3bd59f1d2"],["/2023/03/04/公安/index.html","99f91d62cc0de6b98ab63dc4f6ace127"],["/2023/03/07/mysql之udf提权/index.html","06d0c19956621beacbf3d51f4fdb437d"],["/2023/03/07/红日靶场练习/index.html","1bacc3fbdd1d35e4a285876f3c0fbbcd"],["/2023/03/27/NKCTF/index.html","9b96293a04ba832312c9fd4d21b0bacc"],["/2023/03/31/楚慧杯/index.html","0889ef6960927d8e187e4e0551a8a16f"],["/2023/04/23/HDCTF2023/index.html","0e7ec3631157500c871235c3a6fa4027"],["/2023/06/01/2023CISCN初赛/index.html","46eb22ba1187100d8bc193f12d4311e4"],["/2023/06/28/2023CISCN[华中决赛]/index.html","61fb5bb85c316fd65ab5e34bfd8f0d3b"],["/2023/07/10/CyberSecurityRumble Quals/index.html","5908137b8191dd277704857824ea22cc"],["/2023/07/22/2023BDSecCTF/index.html","e65ace475aa41a5a9b0fc78d2515d58f"],["/2023/08/07/SQL手注小记/index.html","fb149a2c98e767c96411ba52e3a1d4fa"],["/2023/08/27/2023陇剑杯/index.html","0206ab1b60bbcb002e5124da425dd50b"],["/2023/09/17/2023蓝帽杯半决赛/index.html","ed76f68a21691fb11d4d59f7d22ac25f"],["/2023/10/23/对于多层代理的研究/index.html","2da7793150396f54f34337e26d52be6b"],["/2023/11/25/金盾2023/index.html","624a38ac4f8de6f6928902319ee3b797"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","e0bf535a12543e32fabf85114ffa47ac"],["/2023/12/18/2023强网杯线上赛/index.html","a732d0b0a5e89c3ecfb7188270e055ba"],["/2024/01/08/基础ROP/index.html","7512ae8cdf6314b7270fe45eafbb8d68"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","316d1299dc9b5be96e341c4015acc129"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","ec21fd5b8a8333ee7cc0ac35dd50ea0c"],["/about/index.html","d1c63ff6d0d6d0e833c4a25c11c331f9"],["/archives/2022/01/index.html","f956a951c9a2aef8d1647bf6e19e28da"],["/archives/2022/02/index.html","c48acafa97af150b3cdf9def1651c824"],["/archives/2022/03/index.html","0908003d0f7c37ad3597cd7913de9b15"],["/archives/2022/04/index.html","80ac87eeff4ce630794066be6f81b123"],["/archives/2022/05/index.html","9a9b7d4b73f7391e89fdde1c3d67cc7c"],["/archives/2022/06/index.html","9e2519df776e8fa7cee2874e2ce8cd3d"],["/archives/2022/07/index.html","6d8f2230cd6436e0f716b1ac1f76d38d"],["/archives/2022/08/index.html","9cd9321d42855987d93a2b3d374fe6bc"],["/archives/2022/09/index.html","fc2c9a0e645ea2d38810ddad0f0cc650"],["/archives/2022/10/index.html","8aecc2eb30cb97bddfddfd22d1a896f3"],["/archives/2022/11/index.html","e1678670bedff414947e069c02930757"],["/archives/2022/12/index.html","ac534a86a02b59201d4571c7805e99db"],["/archives/2022/index.html","e55c4cbc0c9e6de0e08a9f1b0f9ed6e5"],["/archives/2023/01/index.html","ac693ecf3b56f0b7368e2c8f1d883d5d"],["/archives/2023/02/index.html","62fa6ebdb03e12a6a511883cb55d2b27"],["/archives/2023/03/index.html","98050649714e341b1620a13b3c6adfb0"],["/archives/2023/04/index.html","fe67d1af024f43d9a58457a28ff90fb1"],["/archives/2023/06/index.html","2e61e6885417ba6e565e4771d39ce981"],["/archives/2023/07/index.html","41d16d475078ab3f70c0489134c014df"],["/archives/2023/08/index.html","a6d1567ae13c29c1dbbbd3461a17ff5b"],["/archives/2023/09/index.html","d47dbe29549b54df8ea916b38d6f058e"],["/archives/2023/10/index.html","8c0b169416d640124fa4092617993733"],["/archives/2023/11/index.html","d4ca63e68f22d7ea26550a5c9a528515"],["/archives/2023/12/index.html","cb6cdcfb92260a77c6ae119230120bdc"],["/archives/2023/index.html","f5ec0456b6f919ee5a9b21509cebc734"],["/archives/2024/01/index.html","24187fa9c759a964633f5e364da8812a"],["/archives/2024/index.html","a5c01ede80508a44549e4c27e0b08efd"],["/archives/index.html","97fa4eb45608638f50f4f6a9be470128"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ab81b9bd29d9b4948dd1a8cd9a724839"],["/categories/CTF/index.html","c297fa2cc432895b48bad2875e5f21fe"],["/categories/PHP伪协议/index.html","23cd7b30a468d9df3faf96db68379cd9"],["/categories/PWN/index.html","1aa5f074081b10aeb1455edcdb630dc9"],["/categories/RE/index.html","fc214138fb957130e48d703035307b16"],["/categories/Web/index.html","342b7a763c62744a06c0583ef177ea6c"],["/categories/awd/index.html","4fb98241bc7ce8373f1a59f749527efe"],["/categories/index.html","eef55f37b6eb4d79eb13be806d5b7ad0"],["/categories/misc/index.html","55cf7cb083518b62b549273d9acbae68"],["/categories/sqlmap/index.html","998ca28fc435e0076c2b778f644ccb93"],["/categories/博客相关问题类/index.html","8570e16e8f148b0ee5bf34cadff67d56"],["/categories/局域网攻击/index.html","521995bb47f6e668ea05aef34b9a0d18"],["/categories/心得/index.html","92558e99d57c1ae0fc19a1757355e119"],["/categories/流量分析/index.html","b827ce2daf16a6a300bed042f773880e"],["/categories/渗透/index.html","3199db5b253a9293fdd8a3c02b875153"],["/categories/渗透测试/index.html","8069165bf58bacb703b69756dbc8d4ce"],["/categories/渗透认知/index.html","d326124b70bb5f31b66b92f61a1c5879"],["/categories/漏洞复现/index.html","14d6d569f84abe33624057322e59baeb"],["/categories/漏洞测试环境搭建/index.html","5f1f8be0e8d2f4eb0d5c98a5ee704bb7"],["/categories/赛后复盘/index.html","f814bb3c41c38f76414feb5f1626ccd9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5e13372097030fffc8e823b4657340f8"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","873d3bf0c142c4a8ddfeaf6351457718"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","1f09ba3594f406d1443f232051448b22"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b71877e470df5d2ab911c65cebb27bc4"],["/page/10/index.html","9862095be08197136d570709bd28db48"],["/page/11/index.html","aa22eaad100eb20ee48ef52e9c566f51"],["/page/2/index.html","e9c677dc53ca381815d180b44d1cb9e3"],["/page/3/index.html","e34f4093d216309987b89c33152fea95"],["/page/4/index.html","51ab4d873eda71a6f0b0f4719e7f8a91"],["/page/5/index.html","a94a1209c8636250b14527c23969930d"],["/page/6/index.html","a88595cfeb4d2e04889cddfcccb774ee"],["/page/7/index.html","973eb4fc4d99ca22ccaaf35b56d02276"],["/page/8/index.html","44c3db9327c6c7374d7551c802b20ed7"],["/page/9/index.html","056b278a5176c307e3d174cf11154ba2"],["/sw-register.js","2328a3de83549de5be29ef0402b8b2a6"],["/tags/C/index.html","208190dba81153c4c2f4fcc00544830c"],["/tags/CTF/index.html","e0b569f628aeed5ede5319a90332d7bd"],["/tags/HTTP头部信息分析/index.html","27ab02ebf18ff010321a113b1f3243c1"],["/tags/PHP伪协议/index.html","f60bb315577a484ca5ea1c9802f0f866"],["/tags/PHP特性/index.html","ebcf96b7504dc54fc23f2bbe79673cd6"],["/tags/PWN/index.html","fcc5bccea52b8ce078007e120d64afd5"],["/tags/RE/index.html","55cd89959f3b75f74a09ac1811c4aa52"],["/tags/SQL/index.html","4505a448735e06ed397cc3d2baab9e60"],["/tags/Web/index.html","0195078882742a0bc9da240a63fbfc98"],["/tags/Web工具包/index.html","006207688f98a189710c0ba55ad64028"],["/tags/awd/index.html","0b988926edf2394979b4c87735881b1d"],["/tags/ctfshow/index.html","a1641afdbcb59b6833ee3202f77ed93e"],["/tags/index.html","054d006115a30299363a1f489710a86f"],["/tags/misc/index.html","1cd350468de4a333932ca061e615b1c4"],["/tags/next主题失效/index.html","2c5f13c0cbcd30cc7fc3ee73a287e458"],["/tags/sqlmap/index.html","a81abd5ac74ea755e1fac449837e8050"],["/tags/wp/index.html","436a6f16080cfc85dcf2cfdd4f3ba8ab"],["/tags/xss/index.html","dc62c87e82695319b9144c93529f888e"],["/tags/xxe/index.html","8edac7426a8e92494a7e1bc6713484c5"],["/tags/不蒜子不显示/index.html","06ea38665ed25526cd7386f7ed404cf3"],["/tags/博客/index.html","c61f1fd7d2e908e82af1ad08d5190b59"],["/tags/博客主题优化/index.html","ce8d8822137b14a17a40e721cd5cdb62"],["/tags/博客死循环框架问题/index.html","46043a79ce6673359a7a75274b551f40"],["/tags/博客部分问题解决方法/index.html","9e7d4f6cf6bed524dfdeb4f85640aeed"],["/tags/反序列化/index.html","e53ebbe00fadaf4b719f1c06825a4938"],["/tags/命令执行/index.html","f31542ac609a11dd5ce25ac914515792"],["/tags/局域网攻击/index.html","c5c6cffa2a8fa94f0236782bedc7e0c4"],["/tags/常用指令/index.html","7cdd3665cb113fc00bd42d9b5163c711"],["/tags/心得/index.html","4b371fd0efe3119a97a1eaaf2bfdd1d7"],["/tags/文件上传漏洞/index.html","2519d3da8205083fb00092c650c87abf"],["/tags/文件包含/index.html","9e3c0544b55e6a691fd6c95700200885"],["/tags/流量分析/index.html","df81d41bb2040906ddf82e90b0567f9a"],["/tags/渗透/index.html","e99a9f1e1139e6000ff1df199586ce7a"],["/tags/渗透测试/index.html","a816f4ea5428b4eed25bce66576822de"],["/tags/漏洞复现/index.html","a5e603d9e53c1bd55aebf344f4c3264a"],["/tags/留言板/index.html","f83f3a343743b68f1cc5fccfc02d2cf3"],["/tags/赛后复盘/index.html","d8d6861ade7780e05dd6aaf07f074702"],["/tags/黑盒测试/index.html","ee7e047dc5f4c1293d8d0fb43ecf5903"]];
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
