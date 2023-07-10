/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","ff66b02e78d76e0b81eaabc61171e206"],["/2022/01/08/ctf之web/index.html","3784038d3e5425264171828ba98e4209"],["/2022/01/11/博客制作遇到的问题/index.html","8f830dfe4da1a3267e681f810a761f53"],["/2022/01/15/C/index.html","3edf50960fe78ef8ba4de82fc60fc374"],["/2022/01/18/新版next置换/index.html","39adf7090163117a8a6d4bbd2c7235ff"],["/2022/01/19/不蒜子相关问题/index.html","e3bf11cb1afe6acb3aacc7fe6688404a"],["/2022/01/19/框架问题/index.html","01e81b4a25494256b2db82c80e3f98f3"],["/2022/01/20/ctf之reverse/index.html","31e28c8f9b509b45ce62d613fc19f518"],["/2022/01/23/misc部分解题软件命令记录/index.html","b8ecf80866bcf15f6534918df4a7b8db"],["/2022/02/01/684/index.html","22e9e974e4083b0f0477aaa335a455d8"],["/2022/02/03/留言板/index.html","8dca6e1a505f44a6549526db61a95ab8"],["/2022/02/04/SQL简单注入/index.html","bfd1e0b76f3eb1314c3d9ca93e73be9b"],["/2022/02/05/最全的HTTP头部信息分析/index.html","e5e67016e463a38f3560623c8d78fd6d"],["/2022/02/08/ctfshow文件上传/index.html","3f19b8028c233b3efcac5e7f71c14b0a"],["/2022/02/08/常见密码类型/index.html","fd5a6e9f510f2907474cca1c672b8833"],["/2022/02/12/VNCTF2022WP/index.html","642515998cb2dfaa83d2753e4d46a452"],["/2022/02/20/ctfshowPHP特性/index.html","eafe3f22671600b3b9aaa61936178b6e"],["/2022/02/25/php伪协议/index.html","531d1ac48bb206e860bc6ed42cdd1308"],["/2022/02/26/ctfshow文件包含78-117/index.html","fc14cbfd4b5f4e8a308f8257cfbf57b6"],["/2022/03/02/Clash漏洞/index.html","4ed191a928aad9912c9e8c50e2dc0545"],["/2022/03/11/流量分析之题型解析/index.html","aa7174d61a57a22473e9f37941dc7f26"],["/2022/03/15/ctfshow命令执行/index.html","35e80642f20db03b4f47195ba437c87f"],["/2022/03/22/CGCTF/index.html","af58871f71e59fa36f68f640a565fc48"],["/2022/03/24/ctfshowxss/index.html","7b356d01c67adba54af78798971c71af"],["/2022/04/04/黑盒测试/index.html","1ebdf613b12f3be441077ff5330e4eb0"],["/2022/04/11/nmap/index.html","fc43377ad463162c8594723181923192"],["/2022/04/12/渗透流程简要记录/index.html","10a307d24e4716239afd0d0e79d0059e"],["/2022/04/12/渗透测试之攻破登录页面/index.html","7c00bdcab1683181fd167f753af35202"],["/2022/04/14/xray扫描器/index.html","460015474f50d48690bd8c0eae42ccb6"],["/2022/04/15/ctfshow反序列化/index.html","9b33b13e39adf709b1f59314c788f55a"],["/2022/04/26/渗透测试实战/index.html","fa39f50025e72b5ca6e9677ccde587da"],["/2022/04/28/sqlmap教程/index.html","304945a68a4af4081f5386f925ba4226"],["/2022/04/30/认知文件上传/index.html","d678ab842402702af8e241f4747ad8b0"],["/2022/05/03/nahamcon/index.html","edecb7c4b11e195136430ee17509ceb6"],["/2022/05/15/awd/index.html","e4395766684f10b4ece1a6bafdef5092"],["/2022/05/22/DASCTF/index.html","41be57d66d860e0e32040261e3146ec3"],["/2022/05/27/520/index.html","c8cd05f52af09ffe9b4f6a336c770467"],["/2022/05/27/ISCC2022/index.html","ae7e2a7abbc01feab59ac6a7d3251b0f"],["/2022/06/01/第五届世界智能大会/index.html","56f1ea57ea0e3a049746744ba742bf2d"],["/2022/06/04/SEETF/index.html","fe0ec6b1b65804ccd59671da48ec47f2"],["/2022/06/04/bcactf/index.html","c68c55a99ef58857c5bb7f16c41c3182"],["/2022/06/05/BSidesSF CTF/index.html","d84c52af96ac04249247bfc63b309636"],["/2022/06/07/Docker部署web题目/index.html","342d4fced0fd508c67254cc89e947a03"],["/2022/06/09/利用oj搭建C语言考核/index.html","abcab11c85adfd6176e33f836f47f010"],["/2022/06/13/限免题目/index.html","e7cde57befaaa28d75cdbdd8a5fec5f1"],["/2022/06/14/钉钉rce/index.html","01b99dab15bcda492556352ab4d9d4bd"],["/2022/06/16/内部ctf/index.html","f985d3b9c3a4d04c8f69238b77655c03"],["/2022/06/25/攻防世界高手区(一)/index.html","25ce2c66deca3505c52a048aba613dc7"],["/2022/07/01/两小时AK赛/index.html","e7bbf7c91c51debce2ad0e180f13d981"],["/2022/07/03/鹏城杯/index.html","451a84143391d4687d2488a4f4dd40de"],["/2022/07/04/XXE/index.html","7c8fb00da6eb0ee50c34d6b9cbfdc01b"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","fc43feb0f0b16c8884581152a91fc5e3"],["/2022/07/08/chinaz/index.html","d40560e6a7fd1f4a8531ac627a2317d4"],["/2022/07/09/蓝帽杯初赛wp/index.html","37a1ec4fe315b24c116e6475ce38921f"],["/2022/07/17/NepCTF/index.html","dc420dfe048e1ddad510eb14650300cf"],["/2022/07/19/ImaginaryCTF/index.html","d773edcc2dc8279b9f4f0710d5c78f8d"],["/2022/07/20/局域网攻击/index.html","d45a37dd784b1b44dd4c18e118a29327"],["/2022/07/22/BDSecCTF/index.html","b0dded131141ff4f7c0aaf0a9709a21e"],["/2022/07/25/DiceCTF @ Hope/index.html","671aa6cbba3ea042225364d0bd5537d1"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","d93944ba95f21ca5101a3fb3445c9b9c"],["/2022/07/31/TFCCTF/index.html","d30c61f0ad9511ee83aa4f0d6ed909e8"],["/2022/08/03/NSSCTF/index.html","f294a91daf5656a969c7e139124110d6"],["/2022/08/12/T3N4CI0US CTF/index.html","0279cf3b08beb46ade666cdeae8110b6"],["/2022/08/14/SHELLCTF 2022/index.html","862d3268a6b50c131352fe20925876ee"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","9cba8ffee2ce5a59211afe5c8d42a7f7"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","4cf4174c594ac85bea523aba2975a7ac"],["/2022/09/16/柏鹭杯/index.html","295949d794e9906702ef36bdad78c0f7"],["/2022/09/20/HUBUCTF 新生赛/index.html","99a34102b493947cbf0baa739a8d9d93"],["/2022/09/27/NewStarCTF/index.html","3550426934db52027e82ba1c2e7c5c84"],["/2022/09/27/bugku渗透1/index.html","35200f6436995af1c3f63bd5a9e0c0a5"],["/2022/09/29/tp6漏洞/index.html","90c065872a4e91d133fc0ec4ec808d61"],["/2022/10/02/SWPU NSS新生赛/index.html","8e31484dd866a8e0935cfc36fd98bbf8"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","c80977826ce160b6db6f3fb26669c707"],["/2022/10/27/Moectf西电CTF新生赛/index.html","3f3069590cc95a97d5b7b7a26ad7bb80"],["/2022/11/02/HNCTF/index.html","fea542df61df09fda97cba2806d92d44"],["/2022/11/04/2022工控CTF/index.html","7f5ae8a2322baec7b5467c1b2b49d8a0"],["/2022/11/21/极客大挑战2022/index.html","695bd57a76eb852cc4e91a6a3a33fc13"],["/2022/12/05/TUCTF 2022/index.html","c9276b6f910aabe64efd7a18978660f9"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","1107ded24c34bcdf51fc13c57c3511b8"],["/2022/12/18/金盾2022/index.html","f37f4658ccef49895f4cbeb62f8ebac7"],["/2023/01/01/CATCTF/index.html","64a6564e4533ed3729405792658ae5ef"],["/2023/01/09/RW体验赛/index.html","666a0eaa81a4e74a38d146c2b8c5692e"],["/2023/01/10/铁三/index.html","f696254f8e14fae7cffd77795f764aca"],["/2023/01/16/Ugra CTF Quals 2023/index.html","51eaaa8901024a697bb9cf455c6e1c5d"],["/2023/01/18/山石2022冬令营/index.html","273c1cf639b0bd084f603d8311a40fe0"],["/2023/01/19/SICTF/index.html","40758e29b87f63ce46ca343dcc8b5973"],["/2023/02/04/2023西湖论剑/index.html","900dfa8cc2dc332e5d44aa9215f9639f"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","4ef59d70775a94f8dfb48cf2ff9a37d7"],["/2023/03/04/公安/index.html","b4669f2d6f38014b911c934c52626da9"],["/2023/03/07/mysql之udf提权/index.html","4cf25d462affe50a7487986c26b1a6f1"],["/2023/03/07/红日靶场练习/index.html","4707e7d8a2440593b9b2cb72305927e6"],["/2023/03/27/NKCTF/index.html","f635bdc30abb76d523df2c13b07d09e1"],["/2023/03/31/楚慧杯/index.html","65ebfd38cb901622592346eb18969e5b"],["/2023/04/23/HDCTF2023/index.html","a42d075ee78f77ed2988363cd5a4d980"],["/2023/07/08/buuctf-web刷题记录/index.html","8a1efdd19604d14bed9af6d284a064ac"],["/2023/07/10/CyberSecurityRumble Quals/index.html","57e59a6a4805f2bb36dc9a09bdb9508a"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","2ea4beed0e74991e2729da62fe519205"],["/about/index.html","1b78f351ab0f44990c6492f0d64b3ef1"],["/archives/2021/12/index.html","c9911b81b26753f8e8021bc21af1107f"],["/archives/2021/index.html","d8b352bde8908152606f719779682741"],["/archives/2022/01/index.html","60d94f0e8b45f8f2938b6959c89e81cc"],["/archives/2022/02/index.html","8a7ab77b4d122a854a79d1b0caddf656"],["/archives/2022/03/index.html","a73a1820df0457659e6db2291ed3913f"],["/archives/2022/04/index.html","2f352287a56404d20983f50fdf290b7f"],["/archives/2022/05/index.html","3dc204a65329751910b248fdddaba93f"],["/archives/2022/06/index.html","b2144b07b23193acf21e75f076b9c8d7"],["/archives/2022/07/index.html","08d15c398a434fe72a892a7415196c71"],["/archives/2022/08/index.html","6efe424ba1d5c49a742916c15a226929"],["/archives/2022/09/index.html","0900d53bff011094e7c748ee2a74c16c"],["/archives/2022/10/index.html","48ae71419e8063a69f5a8eb160b6c2f6"],["/archives/2022/11/index.html","35dc2964913e9bb56b0ce6a984b8865c"],["/archives/2022/12/index.html","14592be31ef6f4a2c77cbc49c7c96dd4"],["/archives/2022/index.html","8f1ffb773dab70859879bf336d75ae3a"],["/archives/2023/01/index.html","57033cf23f1fe3776ee43be0aaf5e1e6"],["/archives/2023/02/index.html","73132ab395a383ca751f6d39fd29df11"],["/archives/2023/03/index.html","1448cad6f5917f238e474a80575fc668"],["/archives/2023/04/index.html","3ab86090b5f77fb92dea2cc6208b031f"],["/archives/2023/07/index.html","3abac56413c5e58cd5f3c54c3cda8429"],["/archives/2023/index.html","72aed907fdac9734f986127459c769cf"],["/archives/index.html","91074e11adb551a5ac63d12e90a8a6be"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","1591adb35d89f2bc374351443224ddda"],["/categories/CTF/index.html","4c2428f6c73efaa7825274e7e76c5079"],["/categories/PHP伪协议/index.html","59516303d0a687618d200e0db6727afb"],["/categories/RE/index.html","8683fde1e5bb777fd20083f87e243b6e"],["/categories/Web/index.html","87acb8541f1589f76ae8df27e6dcbd4c"],["/categories/awd/index.html","66d4f9368729b788bfbefbdd7b923bdd"],["/categories/index.html","825bc4b7074f9726118ddfc933bfcc81"],["/categories/misc/index.html","27f4ef14dc956336da061adea78213b2"],["/categories/sqlmap/index.html","4e382a23c5f9a2b82d9c4efecc11c65a"],["/categories/博客相关问题类/index.html","5ac4513c0840be652cd5aa21a9f40280"],["/categories/局域网攻击/index.html","584b881e05857524df1861cf39800c93"],["/categories/心得/index.html","557a8c74dcc753873a7ff713f25da769"],["/categories/流量分析/index.html","49f2f935efdb25b4aceed91be7da7ca1"],["/categories/渗透/index.html","a7d923dfc5ec5f97d1b236e7a1ee69fb"],["/categories/渗透测试/index.html","a8eb5da87639c6eebed64b813ca5dbb3"],["/categories/渗透认知/index.html","dbcfc3c54fc02bb3ff19d636ceef51f0"],["/categories/漏洞复现/index.html","c534e83c5eb8e042b75b828ff276855e"],["/categories/漏洞测试环境搭建/index.html","8053056a7ccdc07ab5fa4dc4eb8226d5"],["/categories/赛后复盘/index.html","b3543052e95060a1e7d49eac3a9870a3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","de83218b8fadcbfc2a2be4e2100cb858"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","fa7f89d24a5e74de171eb604275946aa"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","311b9e354d8c70b5a5fba7cbccd11c45"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f636951dda35c1150e5e0c31e9d9912c"],["/page/10/index.html","9ae6892372646c277642d59e24488658"],["/page/2/index.html","b8d806ad3067b16d02db72e985afd6ee"],["/page/3/index.html","858f17e6e138ea5857ba39ac9ef0f528"],["/page/4/index.html","660973b2cd64efe6cf43e7bcd3ff635f"],["/page/5/index.html","ce0fc68745042c9386f77610c84aec39"],["/page/6/index.html","ee5561a4324e7dc8543acbe8c326323f"],["/page/7/index.html","8477e2f49ef0837e6f2f90ccc9898c7f"],["/page/8/index.html","8e3a8bafe4b7fd316dae9089b5c3d965"],["/page/9/index.html","7d82ad4b9e83733a440de70aead4268e"],["/sw-register.js","ad6d585bc3dfb3cde0f3901460faa80d"],["/tags/C/index.html","c417937718bafd9af6befde0b835b3bf"],["/tags/CTF/index.html","cf77b0e7293f0152da9a2f981bd070f6"],["/tags/HTTP头部信息分析/index.html","fae525d0d469e384bdfeaf5ad55ac95c"],["/tags/PHP伪协议/index.html","45d623bd0790ade0e9d58948ffb990ee"],["/tags/PHP特性/index.html","4d2e4dbf9e58272dd7da343c8c575f9c"],["/tags/RE/index.html","762160b1cca6daed7693fa0ae5f98aad"],["/tags/SQL/index.html","286ff817526a974fd680ef6914101708"],["/tags/Web/index.html","8696a4e67d868f42240db7df4900abe8"],["/tags/Web工具包/index.html","3794cfe9313d8aeae38b18be312a0e93"],["/tags/awd/index.html","54aca76763939c27d67f51008687d23e"],["/tags/bugctf/index.html","15a7de38b560b7b1bbbeb4b813c2e0b6"],["/tags/ctfshow/index.html","9234642a23726b12ac6366d0e7da97a5"],["/tags/index.html","88b413ab161a86932f1d8db8a57a1d71"],["/tags/misc/index.html","337e36166c3570567e48cec863dbf305"],["/tags/next主题失效/index.html","8ad1e84f4791d28cc893932e8ac7b825"],["/tags/sqlmap/index.html","1e68e7f3eaa16df57d562cb0e4d216d3"],["/tags/wp/index.html","429931b7dc2159ccbd3e5329dea6b7f2"],["/tags/xss/index.html","2355885c183afb43e980ea8107e2bd1e"],["/tags/xxe/index.html","b28dde3eeb4b4880359bfdc249241538"],["/tags/不蒜子不显示/index.html","80569866d75311fe1d0b3d9d26df9b03"],["/tags/博客/index.html","63a440fbf17e1aceec2dc95e7190e0fe"],["/tags/博客主题优化/index.html","92ca4f0c17ccf37e5b9687ce7090becd"],["/tags/博客死循环框架问题/index.html","785f8cfbe07b0f2e335a395ed97ed37f"],["/tags/博客部分问题解决方法/index.html","b9e031dd35b4585154d8f5768234976a"],["/tags/反序列化/index.html","b4f88db75d6d7fcdcad52ea07877302a"],["/tags/命令执行/index.html","aedd50fceaf3ec0d5989a66dd4c621a2"],["/tags/局域网攻击/index.html","b5ab8dc76402daca9bc489080db1a370"],["/tags/常用指令/index.html","0f4aa38178f817a47953265764aef6be"],["/tags/心得/index.html","df64244a9b41bee11564b4c960300cd5"],["/tags/文件上传漏洞/index.html","4d00389db3ddf2114b60ed5cfb13addc"],["/tags/文件包含/index.html","3bb33275fe5ca0daf86037803caa8e56"],["/tags/流量分析/index.html","258fc04be5899743309e242704d38e93"],["/tags/渗透/index.html","7b17302ca6c5c59e4e0168778dcd250d"],["/tags/渗透测试/index.html","f0ccecf9fc80bf3ed8cd95bd64a71258"],["/tags/漏洞复现/index.html","15427f9e0361295e01b0eb527e2b000a"],["/tags/留言板/index.html","5691bdb094d3ef7391b36f777962b336"],["/tags/赛后复盘/index.html","35ee336e9d102a27103aeb732f431718"],["/tags/黑盒测试/index.html","c09e1c522da909d6e2c22242bfb94b24"]];
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
