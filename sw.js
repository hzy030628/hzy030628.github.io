/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","f958cf493d68682e8f77640b00c47e14"],["/2022/01/11/博客制作遇到的问题/index.html","250790894acb82d1a19c438e71b8bca0"],["/2022/01/15/C/index.html","8df4e53ca9c6f5d0aecd1857acfb070b"],["/2022/01/18/新版next置换/index.html","2fa3f085b618c4a1e8ba1a59e7a0cb6f"],["/2022/01/19/不蒜子相关问题/index.html","8234c25bf06eaf4375ae2fe642d99ebd"],["/2022/01/19/框架问题/index.html","9997c1112e523b27fd8535a3d8ef88a2"],["/2022/01/20/ctf之reverse/index.html","da6f12ca4f8fbf6a2e9fc2cfcec73506"],["/2022/01/23/misc隐写题目总结/index.html","0fcd362ee369d595cbd9ba43783380fa"],["/2022/02/01/684/index.html","3ce53b709659955b0eae31e4d464b55a"],["/2022/02/03/留言板/index.html","445c58456eff4bb2a25a6939f4c90f64"],["/2022/02/04/SQL简单注入/index.html","d99b21db398c1bed7f8b6ed79c8474ee"],["/2022/02/05/最全的HTTP头部信息分析/index.html","9104e0035524a9c59b71ce756986aaf5"],["/2022/02/08/ctfshow文件上传/index.html","28e54f701cdbba017ad6452ab5a40b62"],["/2022/02/08/常见密码类型/index.html","60bf7228fbbd28aa932d7febb78967d6"],["/2022/02/12/VNCTF2022WP/index.html","8cfd3c646213bdc0e98932e1d660de21"],["/2022/02/20/ctfshowPHP特性/index.html","f4eb972f8987e72c7231723a9d815a2d"],["/2022/02/25/php伪协议/index.html","720ddbbd1b3f00f1aa4d07581089af58"],["/2022/02/26/ctfshow文件包含78-117/index.html","105684cccd40e86cb3a3dd998cf534ce"],["/2022/03/02/Clash漏洞/index.html","e02a2c13d7245685593b932a678b97e3"],["/2022/03/11/流量分析之题型解析/index.html","1de05ce39e07d21978bf880aff9bf21d"],["/2022/03/15/ctfshow命令执行/index.html","2eb0a97f404b4f2818c5fce20d272680"],["/2022/03/22/CGCTF/index.html","807685c0ac6bfc24a76b22110fca582e"],["/2022/03/24/ctfshowxss/index.html","6ac7d7e52f21f8ad4a7c2535bc3ff600"],["/2022/04/04/黑盒测试/index.html","6bd798895272941b673cddcd5daff92d"],["/2022/04/11/nmap/index.html","a32b05da2b3c6a00454f01bc68a15dcd"],["/2022/04/12/渗透流程简要记录/index.html","b7a2d91e27bb78f3b38bc2c1e4f93e1f"],["/2022/04/12/渗透测试之攻破登录页面/index.html","8f2603c7377986d15e4880aae1ffd955"],["/2022/04/14/xray扫描器/index.html","50a7bf9c38a03999391819512be18afa"],["/2022/04/15/ctfshow反序列化/index.html","460869ce4e94e9e0b8c27c155446daa7"],["/2022/04/26/渗透测试实战/index.html","4f20223915a88c6ab10a202381606023"],["/2022/04/28/sqlmap教程/index.html","5937ee0dd5b79742dc1d2c846091136c"],["/2022/04/30/认知文件上传/index.html","4876ec3f3e70c5a4a0465fc7990c4bdc"],["/2022/05/03/nahamcon/index.html","f9c5d2738718c4d5eceff2d9be7a0302"],["/2022/05/15/awd/index.html","ca953e57695003ed4b8383b26c2a055c"],["/2022/05/22/DASCTF/index.html","2ba03606129eff488e37fd9917d4f132"],["/2022/05/27/520/index.html","1a0650aa50e8f3c0aa853f2533c4c52a"],["/2022/05/27/ISCC2022/index.html","02d57556f24a9ff7a49fa7df1e231c4a"],["/2022/06/01/第五届世界智能大会/index.html","8f0389e3d2ea9c1d06f13650a16a506a"],["/2022/06/04/SEETF/index.html","5e6dd21ffeaacf8af0150e57c07f2d0f"],["/2022/06/04/bcactf/index.html","e8c4f02b2e52e29b325238795209ee8a"],["/2022/06/05/BSidesSF CTF/index.html","98d0ede4425bfc328f537663d1820f15"],["/2022/06/07/Docker部署web题目/index.html","5ccda0ca7adb9807a9867a9b7084efd5"],["/2022/06/09/利用oj搭建C语言考核/index.html","0535a8c4733599e3f9088092e21926ea"],["/2022/06/13/限免题目/index.html","4ef05cdd209595667035590d21f66124"],["/2022/06/14/钉钉rce/index.html","3eb95ceccc809639f2cd600060ec768b"],["/2022/06/16/内部ctf/index.html","883333b11dd38c59d31b3229b6a83448"],["/2022/06/25/攻防世界高手区(一)/index.html","7fb78e58a6e17116d016dea9c61dd629"],["/2022/07/01/两小时AK赛/index.html","c41689ed5ef1301017d60951b2fa71e7"],["/2022/07/03/鹏城杯/index.html","c9598569483cd52374dba8443eb79363"],["/2022/07/04/XXE/index.html","a96b87cbd3027eeed2821575d12fe2e1"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","f11344f10a2d81e3db52e1fd3b40267c"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","a204e116db851195e1893dc821e266fe"],["/2022/07/08/chinaz/index.html","0b86181da2beef08f07d711b76ed0b75"],["/2022/07/09/蓝帽杯初赛wp/index.html","5d8e85478603d0b36889255f636b4217"],["/2022/07/17/NepCTF/index.html","35e26ff0a8750c4657635d61fee03e70"],["/2022/07/19/2022ImaginaryCTF/index.html","4f14d2e7881caabf487febc50033f20b"],["/2022/07/20/局域网攻击/index.html","843b8d17cf7d70c74cf0bad7d7fddc9f"],["/2022/07/22/2022BDSecCTF/index.html","1be9e904393d9d17413c4ffefccddfc1"],["/2022/07/25/DiceCTF @ Hope/index.html","c6ecaefe0dead489e17cdf302dcc37bc"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","9703d02151f21169b65725596f77319a"],["/2022/07/31/TFCCTF/index.html","77291c8efc9eeef30e7897f65a22ea90"],["/2022/08/03/NSSCTF-r4/index.html","e38f6e9c2dba4c0d0a1be579a289dcc9"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","b48f87d6dc5cb9eea2dff43bdf9e5c4f"],["/2022/08/12/T3N4CI0US CTF/index.html","e5dea088ced33b96bed4bcad1d3ceda2"],["/2022/08/14/SHELLCTF 2022/index.html","bf43bd32300804b055c048c6c13ec3ae"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","99cf0ce0779082326ce6829d0d1de2a1"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","4d176cb26713a006b75be0d4cc8b2eae"],["/2022/09/16/柏鹭杯/index.html","b6377d3542521f57090c3e6fce826c95"],["/2022/09/20/HUBUCTF 新生赛/index.html","fe72906bacbca850a067b9bd1af049af"],["/2022/09/27/NewStarCTF/index.html","b6021d15a98389a36efab447bc422c7e"],["/2022/09/27/打靶-渗透测试1/index.html","69c624b0aaed7fb69fe72a4fe77069b4"],["/2022/09/29/tp6漏洞/index.html","ae40e36eaa46f3742d89acae05353960"],["/2022/10/02/SWPU NSS新生赛/index.html","269b5f4274b0e6baab090d24a1723fb9"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","443b94a6e394bdb9351634c3d5cea2b1"],["/2022/10/27/Moectf西电CTF新生赛/index.html","e98889216c9f0b144576a067f03e837c"],["/2022/11/02/HNCTF/index.html","149ee87e6ca3487d8f4fc8612bf75a3e"],["/2022/11/04/2022工控CTF/index.html","65da1033a0db6bf806765b79496e1322"],["/2022/11/21/极客大挑战2022/index.html","49c2a46ef8b3216849372faa1ad0fef4"],["/2022/12/05/TUCTF 2022/index.html","bb6c6c9363ce5fd1ca3cc02548e2bd3d"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","3dc24ce99976e1786b36aed815fddabb"],["/2022/12/18/金盾2022/index.html","ecf1f2ac014a6fd5e3318ccdcf008919"],["/2023/01/01/CATCTF/index.html","6d8561fcae80c3b12713d464fd330b3d"],["/2023/01/09/RW体验赛/index.html","549b50fe54220145366414c57c9e7b82"],["/2023/01/10/铁三/index.html","a1ef860324b1aef41f7b328fda89c7ae"],["/2023/01/16/Ugra CTF Quals 2023/index.html","72379d91a19b21693fdb8ee52fb33fad"],["/2023/01/18/山石2022冬令营/index.html","e310a05522b313606bd29a9fd43fca07"],["/2023/01/19/2023SICTF/index.html","545089ffbc832061968dacc2c514436d"],["/2023/02/04/2023西湖论剑/index.html","a86c7cae34ac4e993c81d639c3d7115b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","99707c0287ed989b9cbd7acbe79b5ef8"],["/2023/03/04/公安/index.html","022fae23ace12c429d1955ab80fbef46"],["/2023/03/07/mysql之udf提权/index.html","0b9384fa3e5104818b9edc916b33585b"],["/2023/03/07/红日靶场练习/index.html","cd473c00e34e4254e56ee6fb3fd8098a"],["/2023/03/27/NKCTF/index.html","5dadec19ce52ad0f2f9c348308bfaf85"],["/2023/03/31/楚慧杯/index.html","88a7e7ce15d4615f470fb73c5d783c5a"],["/2023/04/23/HDCTF2023/index.html","3e5def8528f818933e687c6f71910c15"],["/2023/06/01/2023CISCN初赛/index.html","7aeb32a52a98a1d2af83f8df91b203e6"],["/2023/06/28/2023CISCN[华中决赛]/index.html","a3dd52b57494e0c9dd2d979e772119e1"],["/2023/07/10/CyberSecurityRumble Quals/index.html","89e77fa1c6cf6dc7e438367df51d75c4"],["/2023/07/22/2023BDSecCTF/index.html","260bf48a7df62331618de35497844e0d"],["/2023/08/07/SQL手注小记/index.html","9473771e5fb6a7753c727c36b2513c36"],["/2023/08/27/2023陇剑杯/index.html","61bd54262dffafa0861e55626991c86f"],["/2023/09/17/2023蓝帽杯半决赛/index.html","54398fd4386a47a8d332af3897fdc7f0"],["/2023/10/23/对于多层代理的研究/index.html","6cb6761bcd99af2a331cb7f6b62ab44b"],["/2023/11/25/金盾2023/index.html","fea5629a60d9dfe6168f1b54fd05c68d"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","6c83be4eaf59a58fafae69b2f5c4cece"],["/2023/12/18/2023强网杯线上赛/index.html","ed4f9f2ec800342802ac6b892ab3135e"],["/2024/01/08/基础ROP/index.html","48758665fbd26ed08687e639dbd9acb9"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","dbf94068ad31943208cba54359324ed1"],["/2024/02/13/打靶-Tr0ll/index.html","46432b984a1f092ade3b3797807bf70c"],["/2024/02/14/NSSCTF-r18/index.html","2cb8ed69e7d893c7507c95abc29a350f"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","ff753ee1467be9639ef52000576812cf"],["/2024/02/15/打靶-CFS三层靶机/index.html","1c18e39696f0ca68d53740617ecce0ca"],["/2024/02/15/打靶-应急加固【简单】/index.html","e1371e90f469e3d330439b1e4ed51bd4"],["/2024/02/17/2024VNCTF-WP/index.html","570336e2a90b09a48463034cede6eaec"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","a7edc765030e7c14f5899b92b4556e8f"],["/2024/02/19/2024SICTF-Round3/index.html","f94e90c2894a1b5eb439a93a234f66d7"],["/2024/02/19/打靶-铁三域控/index.html","144a39b8d6afe2449cb5d345d9ccf467"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","3ef0ab76fd5151ad472c3985e45ac9ac"],["/about/index.html","e9ac6fe8a528f35cca917787472e995e"],["/archives/2022/01/index.html","27b85c87f3d0158f02921ba2afa8d293"],["/archives/2022/02/index.html","a4d8ab707dcac9d2ab7cf417e5ea864f"],["/archives/2022/03/index.html","ea4ad008dcdd02bc3736386686db2d47"],["/archives/2022/04/index.html","77cadf06af179e28327e8624f55ba4f5"],["/archives/2022/05/index.html","1cce89e67095da4b99689d7a3c92d452"],["/archives/2022/06/index.html","de1b9405565b97e390c585e10f235d65"],["/archives/2022/07/index.html","0a2bf8a1d72bd012fe4e3d101965cd49"],["/archives/2022/08/index.html","d6b4612475a7e27ff8afde69d7e26b37"],["/archives/2022/09/index.html","7fbbaa0781f19f7d5944b035739c6702"],["/archives/2022/10/index.html","b129b95f5481358806404428f138a19b"],["/archives/2022/11/index.html","bf5fb087266526f9a1608d8f1a87bb48"],["/archives/2022/12/index.html","d536fd1d67234716226d08ecfdcde72e"],["/archives/2022/index.html","24477d88caaffb7f1e954b92dc46c236"],["/archives/2023/01/index.html","36a3d948cde4bd4b0c3947f2bdd331e2"],["/archives/2023/02/index.html","9f9ea1eaa77b92b0f39b201602acf812"],["/archives/2023/03/index.html","6b4553c6ca0e6b18b1eb7889937b591a"],["/archives/2023/04/index.html","0102044c4d3cd4391ce805685a2c9e6d"],["/archives/2023/06/index.html","7d6ed89930a32a4a7d149e0df7debdf8"],["/archives/2023/07/index.html","a524885e1b2a5b9f838f43151ed3a9c9"],["/archives/2023/08/index.html","71580d60166df8a0374ab79410093344"],["/archives/2023/09/index.html","505e44e2a6cb1674800f80ebe0642129"],["/archives/2023/10/index.html","d4b890f7c0ea851f2ba1b1d8469d012f"],["/archives/2023/11/index.html","029ff5e8022c0ddf5c2a5605f5ca32ce"],["/archives/2023/12/index.html","8528c4545687daa68874c466fad5e499"],["/archives/2023/index.html","1ef50328f1bd8b9b3afe0f6ff365ad00"],["/archives/2024/01/index.html","4b92d79bb2e8244a186ff2c33f45bc5a"],["/archives/2024/02/index.html","b4f5d95c5ea22b2096d5e5e68be12176"],["/archives/2024/index.html","ee5761a067c0aa20cf56e937d690b905"],["/archives/index.html","4b0d2840d605f620aa45a7c66a852af3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","d40f0e512e525bd466bc3a7bbc937e45"],["/categories/CTF/index.html","887ca185a6da0289769d437a3cf18f61"],["/categories/PWN/index.html","c31fca61da739f43b9d461c2ffc50a9f"],["/categories/RE/index.html","c56ddd8543a22d04bb7fc0170b96bb02"],["/categories/Web/index.html","53bbab71df87740bb4734c550498a86c"],["/categories/awd/index.html","0e6b9bfcc03b5b30b3631f23d3adefc7"],["/categories/index.html","c91b605578ac58f266e255e68bb1a492"],["/categories/misc/index.html","37b58fd44e2026b71640e2c6235304ab"],["/categories/博客相关问题类/index.html","4ae816ab132c44b416546b638c184623"],["/categories/局域网攻击/index.html","89e8a78908bcfa7a1e72040f25c1f102"],["/categories/心得/index.html","d80a71db51311d5b96dcd6cee0d90cfb"],["/categories/渗透认知/index.html","20b42601c9f038e5f46b6196427d76b5"],["/categories/漏洞复现/index.html","94df035f6cc36685d0087c923ab1edd0"],["/categories/漏洞测试环境搭建/index.html","e3fd4afc5459ffae1f9ce404bb1d4d29"],["/categories/赛后复盘/index.html","9764878e5c291c509378f6174c9a44bd"],["/categories/靶场训练/index.html","f81583ecd62c68d855ff5314c05da8d9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1068e8cbe850702e377742ceadb10781"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","44d626a6df7ca06758f2b6d171327b51"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","0c848228d19dd3b852d20efedc4723be"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fdc9108c55e61881c1a141e79a142886"],["/page/10/index.html","d64d9d71daae721f6aaef510578061d8"],["/page/11/index.html","762ca4fee6dd52ae9b3433d33026c67e"],["/page/12/index.html","f9507b321d6dd9a702096f220afe06db"],["/page/2/index.html","5e91d248ad445f66cbaddcd715817b84"],["/page/3/index.html","42ae58761ba0a935cea1ef9083d730f7"],["/page/4/index.html","acd536584e823bd522f6990b36d74b26"],["/page/5/index.html","2f00e1e3becd1d484babc3455905e677"],["/page/6/index.html","f7cd7cd30d172a2914705d781585005b"],["/page/7/index.html","aaafdb854931d02eaaae38f4375585c9"],["/page/8/index.html","7d1ed9e4d7cb0b0f3be06af87a29bf78"],["/page/9/index.html","c6229e973c46576caba120a2a42bc6ae"],["/sw-register.js","510a86b8fdcd19b664b7d861a5ef855c"],["/tags/C/index.html","d67851ee599a40a24027286853dfe95c"],["/tags/CTF/index.html","eac582308373ba550ff0bf8470ebfe94"],["/tags/HTTP头部信息分析/index.html","42de98d5d477b1fcc3aa6353387c44fb"],["/tags/MSF/index.html","cf9a167e842a09a0802152bb1fff0290"],["/tags/PHP伪协议/index.html","69c4fb10993a7f9a6d0bd88d53a978e1"],["/tags/PHP特性/index.html","e0668293bc4081063c63effa67228276"],["/tags/PWN/index.html","ac60408ca3fbf6284624208998f5762e"],["/tags/RE/index.html","33bccacd4c2fa5824e26e261526dab07"],["/tags/SQL/index.html","f22614139af73842b4372bdfd7bf8c70"],["/tags/Web/index.html","6cd29421c2fc2ba9e565ab50d834c4dd"],["/tags/Web工具包/index.html","ba0aa84c9394ffc51f763a92a1615ac8"],["/tags/awd/index.html","d7f224174c4d740a633bf9d012e368b5"],["/tags/ctfshow/index.html","3b7dc2ba109bf6962e5c60dedb22b384"],["/tags/index.html","6baf46bd9f7f2f3f77f2b2111810d51d"],["/tags/misc/index.html","8af041a8573ee4e927e61020ba575c15"],["/tags/next主题失效/index.html","104c7ac566d2b419c6001caa8217638a"],["/tags/wp/index.html","059c816451a715075ebc6553061e38e6"],["/tags/xss/index.html","e60c9d0ec96caa509d5a1638c1a8ec32"],["/tags/xxe/index.html","b30b981ea64f3d99d5c69b07f9719187"],["/tags/不蒜子不显示/index.html","d69bc2e10113768e2b46970919f8c189"],["/tags/博客/index.html","8a3ac54117475276bf36009a45a282e4"],["/tags/博客主题优化/index.html","452ddfbc23c0fc76bee22f7f589675d0"],["/tags/博客死循环框架问题/index.html","78cc6a436fc88a08284604717039a995"],["/tags/博客部分问题解决方法/index.html","2a3ee9fe4efe7fbfc351066a77fa4064"],["/tags/反序列化/index.html","061dedaff1815b0f5cfba01a71a91707"],["/tags/命令执行/index.html","52eb770bed12323d99f7a42731bc3684"],["/tags/局域网攻击/index.html","fa019eef1e9a2bcb737cdc66c90ad0af"],["/tags/常用指令/index.html","7d6840e04ef4f4df0df550b0e6c13400"],["/tags/心得/index.html","183466f594062bd93552616cca975747"],["/tags/文件上传漏洞/index.html","ea7c77de22717e619fa12aa67d9c08d3"],["/tags/文件包含/index.html","131306f4ba15d8565183f20f49b275e5"],["/tags/流量分析/index.html","8ed0132ccbebc6b8fc45824d77af954d"],["/tags/渗透/index.html","e2eb5d8f350acae42776f8d46a81398e"],["/tags/渗透认知/index.html","3e8af5103ac3720f1c401deb8e1e95a8"],["/tags/漏洞复现/index.html","0ff1f24bb5504a85011dd2ba3dbad062"],["/tags/留言板/index.html","5433960dc9540c1dfba0aeb81a3c3042"],["/tags/赛后复盘/index.html","45e8ad90e9dc483f7cfec791eabe7c30"],["/tags/靶场训练/index.html","e53afcd7dae38441e26a6281b907f858"],["/tags/黑盒测试/index.html","a272d0fc19b64d1042b3373499a9de98"]];
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
