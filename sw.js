/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","be4992885ad2d4b3453f6c7a0c6cd19f"],["/2022/01/11/博客制作遇到的问题/index.html","7ce602145ae3c9ad6c73d8752b1fb795"],["/2022/01/15/C/index.html","24509a7cad29a40617507a9ff98e0c4d"],["/2022/01/18/新版next置换/index.html","bd068f62dc8bc9ae298791b509e3dc8a"],["/2022/01/19/不蒜子相关问题/index.html","b1026e660fc2cf0cbc602dbd37e661b7"],["/2022/01/19/框架问题/index.html","2d969451f102f443aa9ca49ea0d74fc8"],["/2022/01/20/ctf之reverse/index.html","78513d6f0d8f70cec9cd7cd99c1c94f9"],["/2022/01/23/misc隐写题目总结/index.html","c2b56e1fc9493d370abbd8e950f18751"],["/2022/02/01/684/index.html","fcfa69302e629db0ada9bbf37442df72"],["/2022/02/03/留言板/index.html","b45a9da6efc2d251357184bdcec5417e"],["/2022/02/04/SQL简单注入/index.html","428bf3db11d4af6795f938ad05aa6617"],["/2022/02/05/最全的HTTP头部信息分析/index.html","dc2da288a669752eafb2704693913bdc"],["/2022/02/08/ctfshow文件上传/index.html","562189da03279b6563ee51b5a7639781"],["/2022/02/08/常见密码类型/index.html","359eeed8f77b7a896a5e41643f60642d"],["/2022/02/12/VNCTF2022WP/index.html","23fda45222d016be4e7145c2c29e06fc"],["/2022/02/20/ctfshowPHP特性/index.html","e73b6dcb91dfe11f06ecc6d3a51ba13a"],["/2022/02/25/php伪协议/index.html","484001d44788d23b695948d806a99cf5"],["/2022/02/26/ctfshow文件包含78-117/index.html","0b14605d9a8e878ad09b87548cf039c5"],["/2022/03/02/Clash漏洞/index.html","9563f1247b2793559a2f5f82ae398b92"],["/2022/03/11/流量分析之题型解析/index.html","62a3d125557fa635e6014de0b231aab2"],["/2022/03/15/ctfshow命令执行/index.html","bb5f7173cc0e59ec4f141b2b58172bd4"],["/2022/03/22/CGCTF/index.html","f4f6417a5a52d7b22c536e9314fda474"],["/2022/03/24/ctfshowxss/index.html","2e9ce9b5cc890e254c811702d16c78c3"],["/2022/04/04/黑盒测试/index.html","a949716496b478528f6dfa21a69af41d"],["/2022/04/11/nmap/index.html","95daece00cbb165e77c2aede94f01ba9"],["/2022/04/12/渗透流程简要记录/index.html","ed7f3e1ceeef338c54281eae7aea1d59"],["/2022/04/12/渗透测试之攻破登录页面/index.html","4169da10abf769ab3a54a0a15be383f7"],["/2022/04/14/xray扫描器/index.html","1cb00e2f3b733b0d1d898bfaf0564973"],["/2022/04/15/ctfshow反序列化/index.html","84b5a58c4956f0b0948bdb0d872733d1"],["/2022/04/26/渗透测试实战/index.html","ba12232003ac598f5f6b6eaae8cf2968"],["/2022/04/28/sqlmap教程/index.html","3f7c570243a457723017dd77f873a5bb"],["/2022/04/30/认知文件上传/index.html","65f189e4a63506c8e230b80142d603e6"],["/2022/05/03/nahamcon/index.html","06c69e07fc2c813f7806a3b33b2e8d4a"],["/2022/05/15/awd/index.html","51448fc8ea2bb1f0ca34fbcec36f6c8c"],["/2022/05/22/DASCTF/index.html","f30b13be6bf7fd39dbf38d583e43bfaf"],["/2022/05/27/520/index.html","758b56ec5f1689b987ca2079914f7ec4"],["/2022/05/27/ISCC2022/index.html","fd2e4d64e391da228b13576fe5e0d7e7"],["/2022/06/01/第五届世界智能大会/index.html","e683c20e32982da3e293f5346c82b7ff"],["/2022/06/04/SEETF/index.html","0a8a85dde7f6b2ea3b6f1a367e052fac"],["/2022/06/04/bcactf/index.html","7750a94b74d085f2a01d61048ad6a421"],["/2022/06/05/BSidesSF CTF/index.html","c8fe58755e98c1cbeeb35aa9afe3b477"],["/2022/06/07/Docker部署web题目/index.html","7edce6c871ddbd763fa6d3bec1b26322"],["/2022/06/09/利用oj搭建C语言考核/index.html","3bb920046e0c9219fcb064317e4dd1fe"],["/2022/06/13/限免题目/index.html","65651d4aab92d84c13efe6990bdcda95"],["/2022/06/14/钉钉rce/index.html","daa46b9ed57f301907765d246c04993a"],["/2022/06/16/内部ctf/index.html","82732cfee71fcd74fb77792a9a8dfec4"],["/2022/06/25/攻防世界高手区(一)/index.html","60972ebfded8b444879439c57bcd3201"],["/2022/07/01/两小时AK赛/index.html","32561888324a68a92f7623db54b3ba3f"],["/2022/07/03/鹏城杯/index.html","04a02ca0175e2db7924bba5bc5f8fa41"],["/2022/07/04/XXE/index.html","f61e12fbd06a1972a946401395325b1e"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","785e622761d8dbd966709e78ecd5b4cd"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","78b8e3a1c5120526846475faa74b75f9"],["/2022/07/08/chinaz/index.html","f8021b25d6d3b85d729ab1817149ad47"],["/2022/07/09/蓝帽杯初赛wp/index.html","41e28d9155d6bee5538e567b6828fb1b"],["/2022/07/17/NepCTF/index.html","6519c1fe08910eb7875fa646c333a64d"],["/2022/07/19/2022ImaginaryCTF/index.html","b910f7333ce3bebb002be7537f61f1d0"],["/2022/07/20/局域网攻击/index.html","24f487f7dbeaccb0e7db401ab0d84394"],["/2022/07/22/2022BDSecCTF/index.html","7a9fd93d0dcc1e00019156cdd84f4ddc"],["/2022/07/25/DiceCTF @ Hope/index.html","2a525779618490e28a6c46f18923f413"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","2f4cc78521b25bc9dfd547ea38daa73d"],["/2022/07/31/TFCCTF/index.html","d377dba879b5bb7bc234047f554c9c2b"],["/2022/08/03/NSSCTF-r4/index.html","a61d6058860fafcc664b2d56084d85a6"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","858cb1a985291473368923a3ece2afb2"],["/2022/08/12/T3N4CI0US CTF/index.html","e04ea408a0f38222bf15be71f6b44cb1"],["/2022/08/14/SHELLCTF 2022/index.html","14e4c0c2d5f4fde3458a04f0d27e2e5e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","1c22345f9ac876d03ee522b88f049fbe"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","8f97c00b1eaa28e88792a6d1db8ac79c"],["/2022/09/16/柏鹭杯/index.html","2756e1cb9b8d57fb777db69747dfe805"],["/2022/09/20/HUBUCTF 新生赛/index.html","0e572a2be44becd90c2c6fc7614f4f45"],["/2022/09/27/NewStarCTF/index.html","a25a2c73169bbd3b66548d658a33c947"],["/2022/09/27/bugku渗透1/index.html","43efb7694d65bc07a1c6d58632e6f354"],["/2022/09/29/tp6漏洞/index.html","bab093d9d401ba6f5bfb29a40b39f7f9"],["/2022/10/02/SWPU NSS新生赛/index.html","019c8836e5859a14f1248139a97692b1"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","dc33a766d3c0454cbe140da7b4e6c742"],["/2022/10/27/Moectf西电CTF新生赛/index.html","c250a63745b6c8007aa0129e04a3fcd5"],["/2022/11/02/HNCTF/index.html","25afae1bc034bb30812d05da8d742972"],["/2022/11/04/2022工控CTF/index.html","e206c2730d08800226e665bf23ea645b"],["/2022/11/21/极客大挑战2022/index.html","a48fc522452d6eb525b4ac811704c8fd"],["/2022/12/05/TUCTF 2022/index.html","9066a8ab861468ae6e5f7078645866a4"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","c84e9b473e1cb77fe9bfe1d3d20fd386"],["/2022/12/18/金盾2022/index.html","9253c10601edf979e6bc1a27c49649ec"],["/2023/01/01/CATCTF/index.html","d9b1579602138bbc64c6ad80729c7153"],["/2023/01/09/RW体验赛/index.html","3164823a18a0f29d4b1b1dba0c73da52"],["/2023/01/10/铁三/index.html","c153fcb985ec6d362a83804a8ccba7bd"],["/2023/01/16/Ugra CTF Quals 2023/index.html","1676b3b30a2d7dd438087315bf3d0397"],["/2023/01/18/山石2022冬令营/index.html","6699163a4c2f2cde2e2fcf9b24194dc7"],["/2023/01/19/SICTF/index.html","bed4059e2a008efe0eaa814e1443ed3a"],["/2023/02/04/2023西湖论剑/index.html","1001f774a2bddc6cb40a6c14f2668f15"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","21ab2e5f739d689b4abdf6684df78a5c"],["/2023/03/04/公安/index.html","4faa3bfca2aaf1180ab00b80a8e051d6"],["/2023/03/07/mysql之udf提权/index.html","74123f1143af28576762bd02d3b4f94c"],["/2023/03/07/红日靶场练习/index.html","07b59a55b07140d41afa03746757f9d1"],["/2023/03/27/NKCTF/index.html","0283a8c55def2b5b336a39dc5dc92558"],["/2023/03/31/楚慧杯/index.html","a099258c3c43822e04c8286ede771d64"],["/2023/04/23/HDCTF2023/index.html","5dade437c9e85273efff37d37f74f54a"],["/2023/06/01/2023CISCN初赛/index.html","7049795d8054faa7f75edd6f77cd13e9"],["/2023/06/28/2023CISCN[华中决赛]/index.html","8fe193bcd6b416962d052a6888458fdd"],["/2023/07/10/CyberSecurityRumble Quals/index.html","2ca47a6d32d384f6b34f58ea8c1de3c6"],["/2023/07/22/2023BDSecCTF/index.html","33dcbe9ae18987f0ed0733c7cd68493f"],["/2023/08/07/SQL手注小记/index.html","f7961a1e8a3d67176bb9d7eb26acd34b"],["/2023/08/27/2023陇剑杯/index.html","323edcb1c84e73688bcadfd995557492"],["/2023/09/17/2023蓝帽杯半决赛/index.html","52c5b26aabe2f927322b1954091a3b6d"],["/2023/10/23/对于多层代理的研究/index.html","85d3431d7e52b993d3a5926a33cd3299"],["/2023/11/25/金盾2023/index.html","7fbd3e68994297f0bf99ed307b48604a"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","d1f28bca601c7b9f9f8de61e1535e92f"],["/2023/12/18/2023强网杯线上赛/index.html","eb443f6091b5a901602731e252b8b50f"],["/2024/01/08/基础ROP/index.html","2501c4688bfa9c75995f9c9917b50946"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","d240901e605e032c5653fa1500b2dcb0"],["/2024/02/13/打靶-Tr0ll/index.html","680e9bb5b02a9dea0fe6fbb5be98a9e5"],["/2024/02/14/NSSCTF-r18/index.html","6728d1b64be68d347c8ad8caaafeeb58"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","c58204376ee312d75bd4c466908f4bb8"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","0c2a7e8e4de96b24ce2bd5768e129ec0"],["/about/index.html","fa408610aaec51826b8ac8497397659b"],["/archives/2022/01/index.html","78d7ba0bb63b45fc06c3cf9bdd926d3c"],["/archives/2022/02/index.html","664b33ab110af51e45e4f69974481686"],["/archives/2022/03/index.html","6411e2a4ad243d18d40493383c09f9d9"],["/archives/2022/04/index.html","61c926c5a95d1fa57d883743c7e86396"],["/archives/2022/05/index.html","a84370389aa3f2b8ae1be5e9d96488c1"],["/archives/2022/06/index.html","a7947308d8d8955351b894c5f636c971"],["/archives/2022/07/index.html","a347e23a8d4d61781fe05f274686cac7"],["/archives/2022/08/index.html","102f575d8a9a9fa2997fa0357b07458a"],["/archives/2022/09/index.html","16388495e182fd0548d9fbdb2e349630"],["/archives/2022/10/index.html","aa4ba18834d7e46052ad6f32d593ff40"],["/archives/2022/11/index.html","89a172359c8a8aab61be5faef8bf7558"],["/archives/2022/12/index.html","eeff5221f6b9d92f5432038a7967fb4b"],["/archives/2022/index.html","5ad453758a4a5700f9248f28015100ee"],["/archives/2023/01/index.html","665ce2774fb8d09c976337168ae99489"],["/archives/2023/02/index.html","a1c884cc91e6c486bd34485cc60576cd"],["/archives/2023/03/index.html","876bb99aeb3438f1144812a8c4b5634c"],["/archives/2023/04/index.html","c438f3e641551461983c3a5989a6b315"],["/archives/2023/06/index.html","c2de55a44c9bb99c06e5c80f18db5c3e"],["/archives/2023/07/index.html","3af431da3104d8797da30765c6f6467d"],["/archives/2023/08/index.html","6d34c874e52f67a57c61949e679102c1"],["/archives/2023/09/index.html","751ba27797cf7262798dea853a2a1843"],["/archives/2023/10/index.html","726b3724f36e983b0c8847cac2f77ae2"],["/archives/2023/11/index.html","ca29dac445df953b2121d516b27c9d75"],["/archives/2023/12/index.html","69dadea2d547292099ae68ca63535082"],["/archives/2023/index.html","c8602b396019a16ed447ed9b6818149f"],["/archives/2024/01/index.html","e3bb40da6c1eb92969c30610ad6d8d78"],["/archives/2024/02/index.html","851724899f279338755e5e41c6bbe741"],["/archives/2024/index.html","f706900bd75538044a31d42c55ab92d2"],["/archives/index.html","5c3d4c77f096003a8d8896e740800714"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","7278843b42dd70132631931564200fdc"],["/categories/CTF/index.html","3d5b75d44bbaa24e08447044a3e79334"],["/categories/PWN/index.html","909ed9a78014c038a44153a5c4e7597a"],["/categories/RE/index.html","a79dcd33ea823f24b2e37c3b48a7934c"],["/categories/Web/index.html","f51eb4db1af29058c58a648eb25e85ad"],["/categories/awd/index.html","2f5ae76a56ec32430bbbfa13fc7356bc"],["/categories/index.html","7b80c76e36881928fe19a908d71cebb9"],["/categories/misc/index.html","8bf0f2cc55e7c50c2b49b768f6cd1adb"],["/categories/博客相关问题类/index.html","61d8c98bb10a8f2bc0200336bd1fa801"],["/categories/局域网攻击/index.html","c4ea0a0348fcad8e8d1fd8e80292903c"],["/categories/心得/index.html","e0cbe32e07b7c982c61c5ce2bcf8f934"],["/categories/渗透认知/index.html","8b3c7ee6649f297ebe5110c03636161d"],["/categories/漏洞复现/index.html","36d61e0ed62adc5b3e427dcafa2e08cb"],["/categories/漏洞测试环境搭建/index.html","7c94d1c9b3dfdbc91527c37cba044343"],["/categories/赛后复盘/index.html","642ee0e672c25b25948bf3be73f8a148"],["/categories/靶场训练/index.html","0a8cb9064662c12a8bb3b2485138425e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","2be9345183889c835e2ce7e613bf7a6b"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","9917c3ccf6222960110d5400701222f3"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","b507044f2fd1b1e7c41e13c5496ef518"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","735f131c946b3167fcff5cc75ee940d9"],["/page/10/index.html","cb08358377ca8fbfe17dfde7c38e90c2"],["/page/11/index.html","3596115c5a69e97827db2866b975c17e"],["/page/12/index.html","f8237cdee029a267d147e269e47f7e09"],["/page/2/index.html","338b674aa0f7e3b31f85cb0633576029"],["/page/3/index.html","96dfaaa43611e71d2c957a2653cb7d3f"],["/page/4/index.html","33681063b66a3f0f11dc0e8d5ab80c2e"],["/page/5/index.html","1a26e42a08bb0abaf1ca15bdf90d3f8c"],["/page/6/index.html","81eec22a5853877785a800d848d1c13a"],["/page/7/index.html","ce384bdf0f3484f32fd1fb9475ba44eb"],["/page/8/index.html","536ebcbc3fec5a237fea03057bd42093"],["/page/9/index.html","7aa3cf1952147813c9c7ae4f4c5483dd"],["/sw-register.js","5f866d41e8170beeb5824d91f3ef2be5"],["/tags/C/index.html","dff7a074f1c28391d997b982c9d5f748"],["/tags/CTF/index.html","92349b55ddf986d4af4922046228a22f"],["/tags/HTTP头部信息分析/index.html","e8588aefdca7a447354a4d8770e208d2"],["/tags/PHP伪协议/index.html","5aa69aecd6ef7b20dd0d0674d633ed17"],["/tags/PHP特性/index.html","69620a5ac4690d9510626f5011ed9c9e"],["/tags/PWN/index.html","8129853645365c114feeeaceec454a87"],["/tags/RE/index.html","3a4223ea38df5d06f25e62b6616d3441"],["/tags/SQL/index.html","ee4fffb0e23277f5a5f79c61084aa5ce"],["/tags/Web/index.html","5842184225a51c799bd62c8eeab215e7"],["/tags/Web工具包/index.html","f947e38fa70558f03d745f9819029607"],["/tags/awd/index.html","b0669d4ffa8da6d16f8d96877b4db248"],["/tags/ctfshow/index.html","48d6af7d1e8f711be8069e368223049b"],["/tags/index.html","f5505bcfbdb3425c14350ca752379e1b"],["/tags/misc/index.html","9f295adfbd65c9d4556c5d0a7fae11b8"],["/tags/next主题失效/index.html","6cc8d158e90c97a29c4e10f6593c3907"],["/tags/wp/index.html","e6351a956b678fc4bc62a321baf07570"],["/tags/xss/index.html","3ff58c395d1ccb705da6fb7d793254ea"],["/tags/xxe/index.html","3cc331e55a34a066d14101673d72b1d0"],["/tags/不蒜子不显示/index.html","d4aa1be4ff468ba9844bc3b27167c45c"],["/tags/博客/index.html","294d50c4d1d4cdc44dbb6d376c95740e"],["/tags/博客主题优化/index.html","ee47a6f60642b55f176bb90274e7eb7a"],["/tags/博客死循环框架问题/index.html","771f2f97ebdb339a160d4e8178ac7dde"],["/tags/博客部分问题解决方法/index.html","3e3668f06bce325ee42219c5e0ea07ca"],["/tags/反序列化/index.html","46670a5b09e36cc7ffa317030835e125"],["/tags/命令执行/index.html","52c5bdd50b70e11aae9108fcc4070f7c"],["/tags/局域网攻击/index.html","f45a6dd005eeb4815e462dfb1dd8b72f"],["/tags/常用指令/index.html","8dfbac9fdf64b6f78cbd36208cc11cde"],["/tags/心得/index.html","15260e36e93429cbaa71030fbd4da92d"],["/tags/文件上传漏洞/index.html","45d0b1851463e91b96bcf48ee26f32d0"],["/tags/文件包含/index.html","a7f04f6377a191fcc1f58d4e0de4d384"],["/tags/流量分析/index.html","23a291611ca5f5ee01c5e4807e5ebf55"],["/tags/渗透/index.html","8775192bcb093a00f83425f17d0c12f4"],["/tags/渗透认知/index.html","a931b11c6f8ce98d1d9ae0a2e2f8072e"],["/tags/漏洞复现/index.html","454e27fd86454bad2dd20810564f7195"],["/tags/留言板/index.html","747aa08cfeac7e8efc8e368b80f02b7f"],["/tags/赛后复盘/index.html","d452ccbc18669f0cd2407534e54d0868"],["/tags/靶场训练/index.html","e2df07f1458ecf9c6b91920d7fe9a741"],["/tags/黑盒测试/index.html","73d5b7c23f2ed3a549694b7f1ce4ab15"]];
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
