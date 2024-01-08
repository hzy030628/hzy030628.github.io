/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","a8ba1bde99752fb43537ec65d4afdd34"],["/2022/01/11/博客制作遇到的问题/index.html","465b25e1353d755b7e34269412b20c46"],["/2022/01/15/C/index.html","3820c68ae9c78f572496de54de87ca7b"],["/2022/01/18/新版next置换/index.html","b44ed4646a7da541a5b87f98377d1267"],["/2022/01/19/不蒜子相关问题/index.html","d9d1d9ebbf12a615da155237cf381857"],["/2022/01/19/框架问题/index.html","95ee973110617b289d880f3fbfc40259"],["/2022/01/20/ctf之reverse/index.html","16e7acd38af4b60720bb356876914435"],["/2022/01/23/misc隐写题目总结/index.html","225a5f8418035affb78f0ba7f9b2a56f"],["/2022/02/01/684/index.html","5a089b0ce85905e26f4758d1e0c6304e"],["/2022/02/03/留言板/index.html","f86b3ef0b69d6a19cf59f7fb10a77aac"],["/2022/02/04/SQL简单注入/index.html","74ebd248abe6fd79dd6696bce1f7c9a3"],["/2022/02/05/最全的HTTP头部信息分析/index.html","6a68aaf8bfd3a6b2435594aead6bf3ee"],["/2022/02/08/ctfshow文件上传/index.html","01afed22ef27847294e8b2bb8ee87adf"],["/2022/02/08/常见密码类型/index.html","4d8403a463bec7a41a9b24da1cb78a3a"],["/2022/02/12/VNCTF2022WP/index.html","b98bad630708d9f76e84ebd9f75e42f2"],["/2022/02/20/ctfshowPHP特性/index.html","6fc299ce4a4732964fbf20f4afc2c4f7"],["/2022/02/25/php伪协议/index.html","90fd7f9e3afface909d7674ead3f09dd"],["/2022/02/26/ctfshow文件包含78-117/index.html","c25be4ff82d3e534aa28a976bdce5ae4"],["/2022/03/02/Clash漏洞/index.html","76375a850d8263981fe1590e8efecb9d"],["/2022/03/11/流量分析之题型解析/index.html","75f517c901319ba10e2bd58b374fa12a"],["/2022/03/15/ctfshow命令执行/index.html","7118d13f402db22c7e2fd377494fcdfb"],["/2022/03/22/CGCTF/index.html","deb2fe84b0e7f6d430f67811b4f835b2"],["/2022/03/24/ctfshowxss/index.html","5c7bc7d9ea0d9f4d2bccda2084b8b3a6"],["/2022/04/04/黑盒测试/index.html","1922d2c86509607f364fb5cf509e5ec0"],["/2022/04/11/nmap/index.html","8ea79db298faae9a02c285e28e0330ca"],["/2022/04/12/渗透流程简要记录/index.html","a9337e376fd4da86d0167d79ba9104f9"],["/2022/04/12/渗透测试之攻破登录页面/index.html","4e4e6bb00cdea4478892e30d6a4d18ed"],["/2022/04/14/xray扫描器/index.html","b6b495ca8e0e76379cba5267da3fb1c5"],["/2022/04/15/ctfshow反序列化/index.html","e22a598a25c4fe8c39317bc510a28964"],["/2022/04/26/渗透测试实战/index.html","34b13e570939f7eb07b45b09fcff2522"],["/2022/04/28/sqlmap教程/index.html","3629166716756fe32085a3fa36418ffa"],["/2022/04/30/认知文件上传/index.html","ebc5bbc94ceff95818491a7c5d946485"],["/2022/05/03/nahamcon/index.html","22090150c811a9ba8ea6367d37d64165"],["/2022/05/15/awd/index.html","91d5f06f1706f43781bd727e5f944ed4"],["/2022/05/22/DASCTF/index.html","12cd02eab498cea287b4b45bb649ec19"],["/2022/05/27/520/index.html","18175c2fa8cb98e4d88f2aff623ab6f0"],["/2022/05/27/ISCC2022/index.html","d0faaf1103092a31eaa76f60b4b1423b"],["/2022/06/01/第五届世界智能大会/index.html","18f815be3e895baf5aa7c7bae2acb760"],["/2022/06/04/SEETF/index.html","2d4d36014f7601af74964482ef9d46f4"],["/2022/06/04/bcactf/index.html","1b72e0a252874e608561ff9b11ea8b64"],["/2022/06/05/BSidesSF CTF/index.html","39f19e4d595d1a25102156535360e2c9"],["/2022/06/07/Docker部署web题目/index.html","8d677b5ccbdeb0a8276ac2f7b0fda02d"],["/2022/06/09/利用oj搭建C语言考核/index.html","63c4cc4b119e6f5b28dfd18f1a13ae81"],["/2022/06/13/限免题目/index.html","2bed4ac07f14d045ea0f56300ed190a3"],["/2022/06/14/钉钉rce/index.html","0b86d6e1adbd14f3dfd0e775fca42c4b"],["/2022/06/16/内部ctf/index.html","51cbbb3384b0a826a6ae352f6f3ff992"],["/2022/06/25/攻防世界高手区(一)/index.html","a29a427eb3a1179d1b6246594ede6d4f"],["/2022/07/01/两小时AK赛/index.html","96d86116f14afa4092c6d0efbda40885"],["/2022/07/03/鹏城杯/index.html","d0f8ad674d054519b93a46fe3bb9c4e8"],["/2022/07/04/XXE/index.html","da91dadb3c1a2238f28c49fa187d995c"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e6b52450fc22809fbfcd6090b4bd896e"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","152f48ec766252608509e105ada09444"],["/2022/07/08/chinaz/index.html","c0ae0cadaffc98ecf95f0409871caca9"],["/2022/07/09/蓝帽杯初赛wp/index.html","11658621540491bc4977e1eaaf549a09"],["/2022/07/17/NepCTF/index.html","f3bea04bc7605e706ccf1189295fcc6f"],["/2022/07/19/2022ImaginaryCTF/index.html","f1306bd053475b6c03bbe594787b914b"],["/2022/07/20/局域网攻击/index.html","1488fbda83dd66cc37ec554cca219a2c"],["/2022/07/22/2022BDSecCTF/index.html","76a0529acd46187542fbaec1af5d667c"],["/2022/07/25/DiceCTF @ Hope/index.html","125f3012e4b0c5eee212fe0e007617d3"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","1004a195cd07d47d04bf17fca0112650"],["/2022/07/31/TFCCTF/index.html","ef91375ce44e9b6cc19030fb9ba3f21b"],["/2022/08/03/NSSCTF/index.html","b9d77fceb7b03de7b3df1b437f6ca699"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","e3c1398cd93619ff676aa9ed255dfcba"],["/2022/08/12/T3N4CI0US CTF/index.html","1563e8b9d5d9ca39f77da7d4d9dc6589"],["/2022/08/14/SHELLCTF 2022/index.html","ca00c9e90128809ce37985a826b85c82"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","eaa75e44921b0bab5ab737fd4d3805d6"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","8913469744f8c9160274554984bd5335"],["/2022/09/16/柏鹭杯/index.html","ee8cbe61825d70ae104dc0fe5ae0a2c9"],["/2022/09/20/HUBUCTF 新生赛/index.html","8bb4ca6c176a59aaedde6e287a1a46cb"],["/2022/09/27/NewStarCTF/index.html","2b8cac57b186f5cda2d97ef3e2188936"],["/2022/09/27/bugku渗透1/index.html","8cbb8c3805fa37a02c37501be511bca5"],["/2022/09/29/tp6漏洞/index.html","65d4395dbe93408b1809fe024cc6278a"],["/2022/10/02/SWPU NSS新生赛/index.html","d9eb3a1122bc1fe36470ac1365574ea7"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","fc676099635053a0b8fb5a9f60d9a37b"],["/2022/10/27/Moectf西电CTF新生赛/index.html","e9f08dcfed0a48a6b78ce72552b40ddb"],["/2022/11/02/HNCTF/index.html","91a0b1e266b2f4c81b449df0024a6a17"],["/2022/11/04/2022工控CTF/index.html","90d93fedb62cefe9d45e972556c84238"],["/2022/11/21/极客大挑战2022/index.html","90c527dd92f7f3a4ebc26ba1f1b64fdd"],["/2022/12/05/TUCTF 2022/index.html","b371699a01013ce5a37a96ac3c6a3cb1"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","2a435e8b3883fb5f67756e7ab3768a45"],["/2022/12/18/金盾2022/index.html","474ac261a75bb60e09733b7c8a081e5d"],["/2023/01/01/CATCTF/index.html","95e5ef9e4832bf51b5d6d75fb7307546"],["/2023/01/09/RW体验赛/index.html","d0b55728d08999004112d5cb38d7cfb7"],["/2023/01/10/铁三/index.html","1c17909588e1fb52154a625a12991707"],["/2023/01/16/Ugra CTF Quals 2023/index.html","6064da0d36d99f47fdff366695d4f271"],["/2023/01/18/山石2022冬令营/index.html","5885f4f64873b34cd6f6a6cee613e5b9"],["/2023/01/19/SICTF/index.html","3510a08b22129d584b1997c2fd3cd130"],["/2023/02/04/2023西湖论剑/index.html","90f1380378a645c353f4654e430d6b40"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","26afc4d122912ae006980e685692681e"],["/2023/03/04/公安/index.html","d97664712b593814130af9f0b2bca375"],["/2023/03/07/mysql之udf提权/index.html","58a5c9581ea39c83988e8e3ad33ed7c9"],["/2023/03/07/红日靶场练习/index.html","4f66944da41acc4eaf2d0c1ac002afad"],["/2023/03/27/NKCTF/index.html","5f705e521232303705922322f8d8f23c"],["/2023/03/31/楚慧杯/index.html","fabdd61df1a3fcab18039f6005fa9527"],["/2023/04/23/HDCTF2023/index.html","c5ced0737bbf5f33d79d7ae90848639b"],["/2023/06/01/2023CISCN初赛/index.html","288432fe90ca7c0d29d5c532a1def740"],["/2023/06/28/2023CISCN[华中决赛]/index.html","32469b0eb01a8160445d92bc606b6c98"],["/2023/07/10/CyberSecurityRumble Quals/index.html","dd75c5e367bdd81393e656c8897795e4"],["/2023/07/22/2023BDSecCTF/index.html","d776be02be94e6a0bf9c7bfcce1df891"],["/2023/08/07/SQL手注小记/index.html","8b5d9ae5bc2b5fb2b0d1a51a5c8ab64a"],["/2023/08/27/2023陇剑杯/index.html","f3054fcc145b8c4aa99cc060c78ea635"],["/2023/09/17/2023蓝帽杯半决赛/index.html","71547d47cb15ba51476419179208c200"],["/2023/10/23/对于多层代理的研究/index.html","6d7d9e076c32c7d5e4586d5d3c523c5f"],["/2023/11/25/金盾2023/index.html","cfd747f8d2923a4edfb5615db098b988"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","3ff7d72c0badcb7f0cc1ded81ca5ed0d"],["/2023/12/18/2023强网杯线上赛/index.html","3ae9c8dabead6afc6920d0c0394b4b19"],["/2024/01/08/基础ROP/index.html","44815f2a45932976e0c2393ad177e96a"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","ec46b5ebc6957f12e7b5258dcc075be1"],["/about/index.html","6d74678ae6f08bfe6c28c9d3bf73aafb"],["/archives/2022/01/index.html","d8d6cd9425c0dae49b6e69375bdaf1f3"],["/archives/2022/02/index.html","675b1f192cb29b70c04d6db80ae85865"],["/archives/2022/03/index.html","ccfac10d8c471fb21ab9db3b3701d56d"],["/archives/2022/04/index.html","cd6482d3b5f210111c1e637ece1740c9"],["/archives/2022/05/index.html","777a39b7a143d3e83a8d58f37c6ed8b5"],["/archives/2022/06/index.html","b0656d9512d0b7ee1f69855e95e0d233"],["/archives/2022/07/index.html","dd1855bd4a323de02ca2e07c6c5f5480"],["/archives/2022/08/index.html","c29b189a896fbaa454786879ec1854bd"],["/archives/2022/09/index.html","03f2ee1260568be636b81b6df3b38a9c"],["/archives/2022/10/index.html","3107f41505c55917c373728dd3a95a8c"],["/archives/2022/11/index.html","6f7b732eb0528bbead02859170f0a669"],["/archives/2022/12/index.html","127228a1dcc062b5f707f802570a86f6"],["/archives/2022/index.html","00f0cb148c9e026e32d7d78365bb0508"],["/archives/2023/01/index.html","e98e760f2422141dd0a3a2866cb0a51e"],["/archives/2023/02/index.html","e9b8109a05f91d4af48ceddfb8d0a7ff"],["/archives/2023/03/index.html","9358cd08db2e830f0d5db81d266bfc04"],["/archives/2023/04/index.html","d4e3e65b7c798a15b12eab8a7e5cc6f9"],["/archives/2023/06/index.html","8a7ca73826d1e41b02f35e446c96fdc0"],["/archives/2023/07/index.html","3c5f8d4475bcf02ca22fecc95cf0958e"],["/archives/2023/08/index.html","ce6fb939b3f2bafce069a760e6803ba8"],["/archives/2023/09/index.html","6bab834d231234b65ca22c52fffb6a66"],["/archives/2023/10/index.html","32bab55b4ca0512995ad322cdc1d7676"],["/archives/2023/11/index.html","d0619bf4dcd96b9f2874c324a64aa68e"],["/archives/2023/12/index.html","cb9f94aefa0543014fb99eca18b1ddd8"],["/archives/2023/index.html","4188dc20cbf0d33f0566d00ab6496aca"],["/archives/2024/01/index.html","513bcf475b144ab434d2b4161ec4b8d8"],["/archives/2024/index.html","8a7e981d0f9f044773cb46c6115940bc"],["/archives/index.html","aca6ead4fe31fe10de9afd15837002a9"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","823eb032aa3feba6d022f0b31ccbacff"],["/categories/CTF/index.html","f65960284ca53a111b872b3c1a0b0310"],["/categories/PHP伪协议/index.html","e03213e58186b2a5383cb6241974ffc1"],["/categories/PWN/index.html","95be6ba5c2ba4b7d583c9668a9f29ad0"],["/categories/RE/index.html","e07f36a8b478922167a63bfaf5b2915d"],["/categories/Web/index.html","1058e586eed3cbbbbc0d064471f84636"],["/categories/awd/index.html","3a0a30b95f2c37e87431520e345139ed"],["/categories/index.html","4fd32b27d2be9145033f9241c0627893"],["/categories/misc/index.html","945b7b2485743fce1188dbb5ec0b1d10"],["/categories/sqlmap/index.html","615c5b3101b8ec096aa30ad6d6781e47"],["/categories/博客相关问题类/index.html","a568f130e87cb4ad69dede10b1b71f59"],["/categories/局域网攻击/index.html","9c916a8d2c40046ccfb7facb75c701e5"],["/categories/心得/index.html","f9d4d845aa78c53e2a0bd63de38fe813"],["/categories/流量分析/index.html","a5d8796900c09a24e6fc144f93ad103c"],["/categories/渗透/index.html","277e7e17e4d27cacbb0e0ed88303a2eb"],["/categories/渗透测试/index.html","ab5f0b93191b5b44617869fcb6f28775"],["/categories/渗透认知/index.html","f89a0f6eb14fbed5fbe3357b6ad8eb17"],["/categories/漏洞复现/index.html","3c448f917754db3bb9885f8fb64f2c51"],["/categories/漏洞测试环境搭建/index.html","9d3de07e2b97fd5e85c52962d5697d45"],["/categories/赛后复盘/index.html","40e67e81d45658ef88cd193648f7eafa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e270d82724e4b928c6bb2714489dbe99"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","e37c1e3a8e817397d8bffed76cb370b6"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","3e36b097ecfd8d5c982b9688465c60c2"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","848f4ef80dd78a4c932597a82e4773c4"],["/page/10/index.html","446df958f76b6ba96e2c17a984a8cbae"],["/page/11/index.html","7aac7a31053dd3b41fe97687106b0a4f"],["/page/2/index.html","c02eba5d40fd9fc0450d903895bf43c0"],["/page/3/index.html","574f4b50b098db7f9a08652aa7eaf34a"],["/page/4/index.html","e187a9402d124cd6d1ddc28f7ad7a53a"],["/page/5/index.html","c16ccdb8efc1f28c40d84bfd6f7c04ba"],["/page/6/index.html","a79947d1fe64660f17f50d059bd96250"],["/page/7/index.html","7578e464542e3ebea409ce8772ea7243"],["/page/8/index.html","b4d170e89db636518517fc6da42ce53d"],["/page/9/index.html","3c112da6cc86999eb6f62e2d6bc20e2a"],["/sw-register.js","3d8ba4c0f8ba614eb92c16783dcdf526"],["/tags/C/index.html","5d66c3d2bae0de84e142689284452be3"],["/tags/CTF/index.html","001f723dd4302de98369b7d332f07d70"],["/tags/HTTP头部信息分析/index.html","9f00d31adae184dae54ee9caaf1c99ce"],["/tags/PHP伪协议/index.html","afcc98f7f35663bd75436ae1be0a3de4"],["/tags/PHP特性/index.html","87647cc593cc74bd7f1db13363e4d014"],["/tags/PWN/index.html","df4488920ddd55ad6b39d718aecf3a95"],["/tags/RE/index.html","9fdca866ae75eb1f093119c1bd89c26c"],["/tags/SQL/index.html","ffd8a6b8e64bd200b524b445767ab462"],["/tags/Web/index.html","13e43c51296c9cd76e0d5823e68bafed"],["/tags/Web工具包/index.html","ee98b4a192d7fa7790d1dedc26cfdf3c"],["/tags/awd/index.html","9fae080f3b529792e8df3af770010cc4"],["/tags/ctfshow/index.html","61a6be6fa9a676b4d4bd9f69c068a850"],["/tags/index.html","0060bfdb515c95933896739a32782ce8"],["/tags/misc/index.html","9b136d8dea9116428b93ecbc35c80d5e"],["/tags/next主题失效/index.html","9fe4616818d3d2c426536410454ff3de"],["/tags/sqlmap/index.html","95b7cd6ee269e0586cb83afa0a8e1686"],["/tags/wp/index.html","6eb687e8c4167a7bdd4d09f35a77c206"],["/tags/xss/index.html","43e1dcd7ca0fc35de5923cd2c930a66c"],["/tags/xxe/index.html","c7d921cc44f60e413ab790ba60147d2c"],["/tags/不蒜子不显示/index.html","e20a85407f342da16be6183666e003e6"],["/tags/博客/index.html","367df32591827acc893abf28410f1a71"],["/tags/博客主题优化/index.html","e029c30e9b5922e6b5bceae5cba9e18f"],["/tags/博客死循环框架问题/index.html","449e606b84bdb7c95e09a7d514146c72"],["/tags/博客部分问题解决方法/index.html","29fca690b76d7eaac2d0e582b26540c8"],["/tags/反序列化/index.html","6461f8e930dfa520417f413261438ee8"],["/tags/命令执行/index.html","b44bac670a096f2f2f176211ce618a69"],["/tags/局域网攻击/index.html","3fa3550c048e1e00c9f40f5d77ccfb8e"],["/tags/常用指令/index.html","5b0cd421d081c14c3118c2c3197bdbd9"],["/tags/心得/index.html","a0fc1dc8cada50cae3597ec235b4fd5f"],["/tags/文件上传漏洞/index.html","929df9ffb8747678724ef096654e2730"],["/tags/文件包含/index.html","35020dc9e81833537fdcbfee64b2a4cd"],["/tags/流量分析/index.html","15308ab14a6f5221203d3cdfccfa87de"],["/tags/渗透/index.html","88a31a479006b065ab7aa4cd4c09ac46"],["/tags/渗透测试/index.html","783c0f4a9af81d46ac08f28f471cc8f7"],["/tags/漏洞复现/index.html","5efda26ec066c37b0b33600b74d53fcb"],["/tags/留言板/index.html","47ba08491866fabacccf8c4509822017"],["/tags/赛后复盘/index.html","534aa2f294d009b4c2566517153cb9a7"],["/tags/黑盒测试/index.html","827abfaab6da05d9719c16bbd02106d6"]];
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
