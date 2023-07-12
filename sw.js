/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","a780a195b760107382eba804fce495bc"],["/2022/01/08/ctf之web/index.html","54c4432b3f833461dc72ac9558da1e22"],["/2022/01/11/博客制作遇到的问题/index.html","16cc982a4ff34d0707e1c9ec38fd1458"],["/2022/01/15/C/index.html","8f440396717054461a9a08491dd3143b"],["/2022/01/18/新版next置换/index.html","9f547024b490c54045d25fff0884a617"],["/2022/01/19/不蒜子相关问题/index.html","b92ee8b2eb644e11cfb383bbf99219f8"],["/2022/01/19/框架问题/index.html","76ea612678f416a8a794aa1f595ddfd7"],["/2022/01/20/ctf之reverse/index.html","221b23a5f1b2e6502156968706a47b00"],["/2022/01/23/misc部分解题软件命令记录/index.html","7151eadb32b392361b5c510d7956b6f6"],["/2022/02/01/684/index.html","a0a49f78f76cd519974aa09c8ed53329"],["/2022/02/03/留言板/index.html","55e1d625ef6592fad38215eeff646447"],["/2022/02/04/SQL简单注入/index.html","e0b0db584243ac6b8f65969ed38b32b0"],["/2022/02/05/最全的HTTP头部信息分析/index.html","f2af0fd91159f2ae7f1a94eea96fcca1"],["/2022/02/08/ctfshow文件上传/index.html","c5ec415ee264f8f2c4209cadab4fd0b7"],["/2022/02/08/常见密码类型/index.html","09dfa4d0d69362087ff7d288ab719294"],["/2022/02/12/VNCTF2022WP/index.html","4b189989a8f0a0144abd947ac2e9fce9"],["/2022/02/20/ctfshowPHP特性/index.html","d0eef924078b8c3ad5e5babbffbd7c80"],["/2022/02/25/php伪协议/index.html","4025a06dd631be82437a7ad76efc10c7"],["/2022/02/26/ctfshow文件包含78-117/index.html","7058dcb48a0ff8122554f3febab5fdb1"],["/2022/03/02/Clash漏洞/index.html","e13449fab9060c5a0da06abf6ece4bf8"],["/2022/03/11/流量分析之题型解析/index.html","3d2775fdbed43669501fd7f04731389d"],["/2022/03/15/ctfshow命令执行/index.html","3d9a6deaeab7e955764fd6a5fdd3d186"],["/2022/03/22/CGCTF/index.html","6ddff40adcfe8edf8ade793c6971d9f3"],["/2022/03/24/ctfshowxss/index.html","be4fe4afd86418a3ef52bdafcb207dd9"],["/2022/04/04/黑盒测试/index.html","ae6239e60f9f21a39c7d37ac48571357"],["/2022/04/11/nmap/index.html","bb75ecd36babbd539a20047193e6fed0"],["/2022/04/12/渗透流程简要记录/index.html","9e8627b8031b822444f76a6e6e73ba97"],["/2022/04/12/渗透测试之攻破登录页面/index.html","0aec19cdc2575351c169097a29154165"],["/2022/04/14/xray扫描器/index.html","4a68aa71ebd54909e1b6c05078097923"],["/2022/04/15/ctfshow反序列化/index.html","fff8595f1e07cb8fccaccb301fe0dcf5"],["/2022/04/26/渗透测试实战/index.html","a183752b2311f8064c191926dab0493b"],["/2022/04/28/sqlmap教程/index.html","64425959675bd0f1cbe8253cd485f3d5"],["/2022/04/30/认知文件上传/index.html","cc3c798e63a8f586c5150a74fe886430"],["/2022/05/03/nahamcon/index.html","18f9058e858d85553af1e04082b8ca82"],["/2022/05/15/awd/index.html","96e0ffad4bac395d284f4647dcc96ced"],["/2022/05/22/DASCTF/index.html","b38f0ae0e2cb21b0982b6f7905c1b026"],["/2022/05/27/520/index.html","04c69b1d43973363a5983aa2a9ae585e"],["/2022/05/27/ISCC2022/index.html","4820d5702c4555f85ba1e09901ede1a4"],["/2022/06/01/第五届世界智能大会/index.html","936c0dd1a1ce9f16f159a0020f3013e7"],["/2022/06/04/SEETF/index.html","7b36f15c6415ed7d9e825b23ca2a9000"],["/2022/06/04/bcactf/index.html","928137043181a5046a7a12ea9c8a391e"],["/2022/06/05/BSidesSF CTF/index.html","9851e00402b7b5dcea00abf458265b84"],["/2022/06/07/Docker部署web题目/index.html","e67c6a36fa491d4019942732b184dbd9"],["/2022/06/09/利用oj搭建C语言考核/index.html","51a4cbc32173d9328e73e0598c2bad9e"],["/2022/06/13/限免题目/index.html","016ce8460c0b55e70135baaeaa9dc4cd"],["/2022/06/14/钉钉rce/index.html","7d5ae3f558e8e32435ca10af10329331"],["/2022/06/16/内部ctf/index.html","3c4a5bc3148ba3eb14cd1934eec67d5f"],["/2022/06/25/攻防世界高手区(一)/index.html","c22ad639d73866e11832e943f911bb0b"],["/2022/07/01/两小时AK赛/index.html","6d4736807c9930fedf26b0dc00e0656b"],["/2022/07/03/鹏城杯/index.html","aa7cd0def629078f5e719d0b5e046d6f"],["/2022/07/04/XXE/index.html","3cf9adf47759a35f72832382d7023603"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e1a8870a8b3d13b60aa64d664e7524e9"],["/2022/07/08/buuctf-web刷题记录/index.html","87ff505117ee233a6fa22ce6e1d5970a"],["/2022/07/08/chinaz/index.html","917c48c2487dbf66443b6f572fd31a54"],["/2022/07/09/蓝帽杯初赛wp/index.html","2940f7ba31d246a606304c3a2b25f26b"],["/2022/07/17/NepCTF/index.html","5e5f08114ccf9d4aacaafe1ce7f706ed"],["/2022/07/19/ImaginaryCTF/index.html","c411a6ae1ed5e31fa0db929d48071d7f"],["/2022/07/20/局域网攻击/index.html","ee4c8ce8b30afae4a09d2044e48f228b"],["/2022/07/22/BDSecCTF/index.html","7b0dd93139b0d82d194150c8dc8cd715"],["/2022/07/25/DiceCTF @ Hope/index.html","9ced195c917caff62bf3e32cc6a8fbdb"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","891819c633af52a4441a4cab85bd2164"],["/2022/07/31/TFCCTF/index.html","ce92d60b6a47ad9fd591f5d56878e224"],["/2022/08/03/NSSCTF/index.html","c3c837640f0c2093ef4f01c594247c86"],["/2022/08/12/T3N4CI0US CTF/index.html","0da3ba6f302c2c43b198cf5abb2a6f76"],["/2022/08/14/SHELLCTF 2022/index.html","b6c0cf9527c9b284b36c43b4ee6f9c10"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","462a36aba2c9b4df16faa6fa249b1afc"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","ad0bbb5c220a92d5423da1ae21121a8a"],["/2022/09/16/柏鹭杯/index.html","a892c21cca371a26247dd8c5e838f0f9"],["/2022/09/20/HUBUCTF 新生赛/index.html","c7a4081d99476ee148dba53a1439137e"],["/2022/09/27/NewStarCTF/index.html","ff6807f8b32a74c45765bc289b26fa9b"],["/2022/09/27/bugku渗透1/index.html","253b80dfede826fbf9edc3e952e9d8c4"],["/2022/09/29/tp6漏洞/index.html","f8836a4dab592cf16bcee4293d5a97d9"],["/2022/10/02/SWPU NSS新生赛/index.html","909781cf68e526307f08259ab1839ce0"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","e46ac75f90750e01dd795b93a85e0fbc"],["/2022/10/27/Moectf西电CTF新生赛/index.html","2542817a5c109772f2bbb7753f522475"],["/2022/11/02/HNCTF/index.html","3c8ca7b0a2908b051cb51b778c5e2e0e"],["/2022/11/04/2022工控CTF/index.html","000daee7878646f39c43fd2dabbed5d9"],["/2022/11/21/极客大挑战2022/index.html","3271b201f5e39d23ec544ddaa7b831d0"],["/2022/12/05/TUCTF 2022/index.html","cf9eb6254cb1aa33514adc9190330565"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","38d7996f7c21370a914456f47727f98b"],["/2022/12/18/金盾2022/index.html","8698daba1501b15e99017ab06121d8bf"],["/2023/01/01/CATCTF/index.html","686aff708fd5e29ebaf1685224565978"],["/2023/01/09/RW体验赛/index.html","c6ffbc6bd040c6b667aa9a3271b4dd2f"],["/2023/01/10/铁三/index.html","ec1ece1d1d0ffb174b1d2b5f8e8a6215"],["/2023/01/16/Ugra CTF Quals 2023/index.html","169173850865cdf6aa48c680aad098db"],["/2023/01/18/山石2022冬令营/index.html","28fe858c18a80219f679230c11da190c"],["/2023/01/19/SICTF/index.html","23bc65825e4f92770c140f77274cfea6"],["/2023/02/04/2023西湖论剑/index.html","71e6795a78a3b18b54ef0e99b8f78caf"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","82159ea1b4e60a69d1e632233197230c"],["/2023/03/04/公安/index.html","873cc8c79b3c09a724f9ea1fb7ea9d99"],["/2023/03/07/mysql之udf提权/index.html","c1052785e59e733db0c16a58fc6c8929"],["/2023/03/07/红日靶场练习/index.html","122e89fc0f98c4c862d08977fffd4a9d"],["/2023/03/27/NKCTF/index.html","f8c45c8cb6d219f948b085f471c7e6e0"],["/2023/03/31/楚慧杯/index.html","0439c398d6e0bdba560ce8c9b0c4f932"],["/2023/04/23/HDCTF2023/index.html","178d0e109513220eeed8a6020e8e78b0"],["/2023/07/10/CyberSecurityRumble Quals/index.html","91b80097cf29c4bd6157fbcfbc5be0b2"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","f657992f4caec94d9fadc46b16e63132"],["/about/index.html","025c3e7f12f2379513370f9758a2f500"],["/archives/2021/12/index.html","b19ea3ee5187d0d327a39c6d409a8916"],["/archives/2021/index.html","ec0ebc7e1cfd940f7f40a039a4afffa8"],["/archives/2022/01/index.html","1a51567a1774c15293ef908efd9a385b"],["/archives/2022/02/index.html","9ce9d572e99647f59dae8027c85a4300"],["/archives/2022/03/index.html","1cdae4251ae70caa65c6fa416d757c53"],["/archives/2022/04/index.html","ab295f4d8a055f2f5ef96a58a833e404"],["/archives/2022/05/index.html","c850f75c4cfd4a61d9776b6da2bdfecd"],["/archives/2022/06/index.html","bc1eb611ceaa0838b0d4a8cdaabc0e7c"],["/archives/2022/07/index.html","823a1927c64f481127461c04a1372f6d"],["/archives/2022/08/index.html","cef5984b43eb07fb8c86f758f3393291"],["/archives/2022/09/index.html","2095917b8e0da63968c8d51b7b0a3658"],["/archives/2022/10/index.html","685f63e9d8690af6f16c367c778f83a0"],["/archives/2022/11/index.html","08465b992549d90df4083913ef02d784"],["/archives/2022/12/index.html","2c083d1f7723fc26cd9e201db9e2ddae"],["/archives/2022/index.html","ad00726e84945e81a62a639ea8b28827"],["/archives/2023/01/index.html","19dc331898cddcc5d3a95de06cf1afb0"],["/archives/2023/02/index.html","abafad2e030f718376303f8094176682"],["/archives/2023/03/index.html","b3a5f8853d0cc41c31ff748e67265522"],["/archives/2023/04/index.html","e632f16e5787ec7f462231e99e7f7fbc"],["/archives/2023/07/index.html","76d54947ce85ce5e079724e4f00a429c"],["/archives/2023/index.html","b81cfbc975552f184d231f098a1e3bc1"],["/archives/index.html","1f4c8c72cdf8249a52723d588c138134"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","c1d9902021917532eb3904df91e48ad0"],["/categories/CTF/index.html","7f522837874a21c1de0e52786daa1cb8"],["/categories/PHP伪协议/index.html","b7e3d0f1d9e433dbe604f8694d989a72"],["/categories/RE/index.html","aea54ba6419ea704f4f63f7bf7471727"],["/categories/Web/index.html","6adb354b3852f1501420f0d5df117ebc"],["/categories/awd/index.html","783ebc349690a10f10dd83de9b96feec"],["/categories/index.html","90bde9a76cb84e1b82a9a40dd49d368e"],["/categories/misc/index.html","4d0de1edd4f3ee14c9f4f9af3ef0d9df"],["/categories/sqlmap/index.html","d305d5a6eb23e01e8bda5968dd5dce5d"],["/categories/博客相关问题类/index.html","5a4c1a47fecf5bb8e8584c51e37f6c7d"],["/categories/局域网攻击/index.html","250f784c1cc3dda11788743f45242e11"],["/categories/心得/index.html","c525681e29924bbb0040b2cace9166e1"],["/categories/流量分析/index.html","04a11f8c6fd40b83c0510aecfc7e383b"],["/categories/渗透/index.html","a8fe3a2a778efdb8d7cfc36fda4fec37"],["/categories/渗透测试/index.html","3ef004dea480ed075e969d73736a6607"],["/categories/渗透认知/index.html","8fa109859e388f5340bedb3b389e33c5"],["/categories/漏洞复现/index.html","9524f0e3ee95eebaeedf8651cddb53a5"],["/categories/漏洞测试环境搭建/index.html","d8291f32b1f5edd6ac242737ee6c3e5d"],["/categories/赛后复盘/index.html","cc217dabbc0dc9a880bb2331a4d63b8f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","fbddfc39bbb8a8a378074669554aece8"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","cf475907225ce1ea24fd0c5f2305e2d5"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","55caa43f8f3e3706ff5873252924482d"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","3792845c7ad5a796ed7918cc85e80144"],["/page/10/index.html","7cbaaacc9ef989068e1c9020d5ba8b7a"],["/page/2/index.html","6f5c58f610d9caa99c82fb448feba8e4"],["/page/3/index.html","7588a5a7cb6f3d12512144dc225c47d0"],["/page/4/index.html","1b4a57c0e60279146734dda60d5da684"],["/page/5/index.html","61fc06beeb4c7c5af6c2a7c05881b3ec"],["/page/6/index.html","52e8310596aa31e4f11c4f0156f8d9be"],["/page/7/index.html","923e896a6e0be27f9787af1ea14f8d1e"],["/page/8/index.html","38c5e2e66910d62f0943c704e97a827f"],["/page/9/index.html","8a9893c699c8770bcd56c299d498aca5"],["/sw-register.js","e53ea687b0846d2cf4de1a429c9a9f49"],["/tags/C/index.html","d3bff425271851fc4c5bda32aeb276ad"],["/tags/CTF/index.html","ca2a4566baafbb5253ff44c01825135f"],["/tags/HTTP头部信息分析/index.html","345d3d39740ff8186fa0b9b62851d2b3"],["/tags/PHP伪协议/index.html","f614a8f15e84aae09f3847fa99a233be"],["/tags/PHP特性/index.html","a121f55633606ee756fd9a0712195b89"],["/tags/RE/index.html","93defb07960fd26eacc67b7d32a7b32f"],["/tags/SQL/index.html","235c00e1bdb0a331f08899bff53e6136"],["/tags/Web/index.html","2de54ebe730986517b69313d18ba51cb"],["/tags/Web工具包/index.html","b9193d2a883f4138b793c38b7b1e3953"],["/tags/awd/index.html","e24ae20a4c6845e4563242185263f210"],["/tags/bugctf/index.html","ac5e9099fdd461611dc85282c61fa2bc"],["/tags/ctfshow/index.html","81a3cd3cf088e167bcf02dfaea27e99f"],["/tags/index.html","5694e74b89b01eb192c3f71e8b6e6750"],["/tags/misc/index.html","3f8a2b01d0aa2df72a8fb10a2d06b442"],["/tags/next主题失效/index.html","74c51289eeafb4bccf72530eff2c0d6e"],["/tags/sqlmap/index.html","aa517d8229b258d9e339823429b69e36"],["/tags/wp/index.html","1ae3ac0c9702beee07b913c4c48d05cd"],["/tags/xss/index.html","add9c7e9e36bb1cec1774a8e3f441149"],["/tags/xxe/index.html","e04a2ac767359812e6ead32771a60c67"],["/tags/不蒜子不显示/index.html","91f826a81218cb64de1128016503d3bc"],["/tags/博客/index.html","26601afb75c5595ed5613794efa425bd"],["/tags/博客主题优化/index.html","b9641b2dabba3cacb08b3f6b4d894b81"],["/tags/博客死循环框架问题/index.html","04261caa3aab5b354cfe90f3b99b0468"],["/tags/博客部分问题解决方法/index.html","193e9f1758ca2e34b4758dbaf9cb673e"],["/tags/反序列化/index.html","7515d3f9fbef819ee52730504fadae46"],["/tags/命令执行/index.html","362f1e512186b991ee1b240444f2e03d"],["/tags/局域网攻击/index.html","7f294031eb0bcdff328c81ea6bae7696"],["/tags/常用指令/index.html","4b03afc9b1300cdbd72cf0384da6f7a0"],["/tags/心得/index.html","0d1b1c6191cd18bc2b7b954bc28de3f0"],["/tags/文件上传漏洞/index.html","5c156baf4349eab761a1e61b4bbd3142"],["/tags/文件包含/index.html","f2d5a0fedb85a218651facd011f96d50"],["/tags/流量分析/index.html","e57c0d9ea34bf1c3ea07a412d452e70a"],["/tags/渗透/index.html","3966120805066cb65439772e1b415f5a"],["/tags/渗透测试/index.html","98ca50f6837142c4ee8bdf6e9702033b"],["/tags/漏洞复现/index.html","47984a9808ffe083b4c4a22a7bdf5c7a"],["/tags/留言板/index.html","b33de1bca7b143406eff0a099b2082dd"],["/tags/赛后复盘/index.html","f593063ccdf6bcea23c0b6a2c7470860"],["/tags/黑盒测试/index.html","6fcc94387eafbca06ca3f219f595255a"]];
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
