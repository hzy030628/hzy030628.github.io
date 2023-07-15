/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","93a2486a6a51a7c55e42dc83a9bc663a"],["/2022/01/08/ctf之web/index.html","5d8df7927617220ddf4372f954de4309"],["/2022/01/11/博客制作遇到的问题/index.html","57775a91edfc6c2442fb834f66a87640"],["/2022/01/15/C/index.html","5cc3dff1868609b8bc14f7a42104cf57"],["/2022/01/18/新版next置换/index.html","0a3a67b88b641037d6618c94ea8246a2"],["/2022/01/19/不蒜子相关问题/index.html","e9f5d7c7a6e4cb2523a84d775bd69476"],["/2022/01/19/框架问题/index.html","973c21ebc5901120061de94d8746d674"],["/2022/01/20/ctf之reverse/index.html","ebaa0bb46cb70f0487c0c5bb73055eb3"],["/2022/01/23/misc部分解题软件命令记录/index.html","947a8abbf6277cbb5442276ce20787f9"],["/2022/02/01/684/index.html","8f9e366b73749c50abae16468de4307f"],["/2022/02/03/留言板/index.html","c4b84208b22d6daa55b5869f75ac2c9e"],["/2022/02/04/SQL简单注入/index.html","1dd0bf8f385203971181fa3e7b38a764"],["/2022/02/05/最全的HTTP头部信息分析/index.html","3fccdb654a6558039c8949101165254c"],["/2022/02/08/ctfshow文件上传/index.html","ac0e54e6d0231fe51cd29115aaa555be"],["/2022/02/08/常见密码类型/index.html","78e61b720fa685c7145683ddc0f48fc7"],["/2022/02/12/VNCTF2022WP/index.html","f75fb97c2c5143bb71ac03fb410316f6"],["/2022/02/20/ctfshowPHP特性/index.html","8e240eb0a90fe46aed18c89ff4be50f9"],["/2022/02/25/php伪协议/index.html","92cd5fe0374150bd1f48802ae5fff264"],["/2022/02/26/ctfshow文件包含78-117/index.html","8074b3271de9b3c3889d8e9b16ad077e"],["/2022/03/02/Clash漏洞/index.html","93959a87936240650c0646df8ac36e69"],["/2022/03/11/流量分析之题型解析/index.html","806506709a9966c9bd9a5c605b5cfa2d"],["/2022/03/15/ctfshow命令执行/index.html","a1b5037d373d0fcaa6601b32aecafcd9"],["/2022/03/22/CGCTF/index.html","df0a3c2ca92914bc1787302651fefe5c"],["/2022/03/24/ctfshowxss/index.html","3eb5d70d781697df94af283b31b404f4"],["/2022/04/04/黑盒测试/index.html","3c613d5bec531caaef264a11c5805fdd"],["/2022/04/11/nmap/index.html","e41ffc4621d04c23f64569446024e5d2"],["/2022/04/12/渗透流程简要记录/index.html","b5b9518dcbe105d036471a38a3f8c15b"],["/2022/04/12/渗透测试之攻破登录页面/index.html","dfaf6ba3b99f0154d4cf9d27c9e8faaa"],["/2022/04/14/xray扫描器/index.html","a897f1fcf68141263447fdb1b4e0c091"],["/2022/04/15/ctfshow反序列化/index.html","caf3155e29d6e390c5bd226b3c9b3b0e"],["/2022/04/26/渗透测试实战/index.html","ebbe99e17ce962d4b134fc87f9e32319"],["/2022/04/28/sqlmap教程/index.html","4414153c9e7f67ea531ec418ef580d09"],["/2022/04/30/认知文件上传/index.html","3835de9f0f4b679e488d42bd0b3c50ce"],["/2022/05/03/nahamcon/index.html","2e99526c759b708f421a07138689d431"],["/2022/05/15/awd/index.html","af375225af96b398588f0be546beaf07"],["/2022/05/22/DASCTF/index.html","801eb987e7fa1e3aa85962e3121993d8"],["/2022/05/27/520/index.html","a4b4a2f0db65ad3a3400f0b02945cb65"],["/2022/05/27/ISCC2022/index.html","9ee924ec6011d0cb13ab653bc17c3330"],["/2022/06/01/第五届世界智能大会/index.html","34de20dce104a470d43b64b49fb08044"],["/2022/06/04/SEETF/index.html","4ef937fe3ffe6decf0097694ab3b7a1b"],["/2022/06/04/bcactf/index.html","2ddd35972def3405f07a63adf1712c1e"],["/2022/06/05/BSidesSF CTF/index.html","d0bcfe4f47e1a4d7566b88935838e3e8"],["/2022/06/07/Docker部署web题目/index.html","4c9338290fe4a0a33dcc85439cca5b5b"],["/2022/06/09/利用oj搭建C语言考核/index.html","352b82c1a51895c8bde5f31888b83ca9"],["/2022/06/13/限免题目/index.html","cba42ad2456a053141f7c2fc7d523b79"],["/2022/06/14/钉钉rce/index.html","0d9a946c2cd7fb6bafe0f9ef3d2e2aab"],["/2022/06/16/内部ctf/index.html","e14fbafa4cd2e4cdd01218f974d0d000"],["/2022/06/25/攻防世界高手区(一)/index.html","1c9ed665687e7666afcc53b5ab092cd1"],["/2022/07/01/两小时AK赛/index.html","8bdbf885def420bc3f5c3e73de2c78db"],["/2022/07/03/鹏城杯/index.html","beaf10ced3e7b09b072a39d683a9d1c1"],["/2022/07/04/XXE/index.html","a99da59c978ddcda6a0b0072192c04a0"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","dad327f2632847711ff43f3d1dcd3b17"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","705c2c73b4367d30b298f96c5d7556b9"],["/2022/07/08/chinaz/index.html","7c6fcdd5dd497e6cdbf5d382b7b2af11"],["/2022/07/09/蓝帽杯初赛wp/index.html","8e984606ea84f8041ce61c60e0a119b9"],["/2022/07/17/NepCTF/index.html","d069842dd8938dbfad3f46f330c5856d"],["/2022/07/19/ImaginaryCTF/index.html","fe3f94bbcfe3017e08af97ace784fd51"],["/2022/07/20/局域网攻击/index.html","012a089761a7c69ce25d486dc037ccef"],["/2022/07/22/BDSecCTF/index.html","6b38ac48352cd5193d5dac54512eede5"],["/2022/07/25/DiceCTF @ Hope/index.html","9acb2c669b7ba010c7efeee9959d53aa"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","d5f9f8d79c8326d1389a5e4af7b2921e"],["/2022/07/31/TFCCTF/index.html","a1a276a15dddaa524d311f1b95ef07c2"],["/2022/08/03/NSSCTF/index.html","b5603d79e3df7b2ba1769a2aa9e072fb"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","b44d2898b5cab92e0fd3864c4ab745e5"],["/2022/08/12/T3N4CI0US CTF/index.html","f78278e0e7cd583ec3af1e8ccff23487"],["/2022/08/14/SHELLCTF 2022/index.html","09e41dbc13069ae19a28a3b750cbb187"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","c40273e3436c705fdd7166fb180bdb49"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","7cb5f9fcc922df4c4699ec625d436b55"],["/2022/09/16/柏鹭杯/index.html","df8d42b8b15376f4b28942953c534be9"],["/2022/09/20/HUBUCTF 新生赛/index.html","56e265db81cad7c18123c7a83a26b61d"],["/2022/09/27/NewStarCTF/index.html","8538c1dc1e16c79e680eba7812166057"],["/2022/09/27/bugku渗透1/index.html","e7e69b5b8c87b20891ba168e62432370"],["/2022/09/29/tp6漏洞/index.html","22fcbbb763b6bce2c0cd24614a131001"],["/2022/10/02/SWPU NSS新生赛/index.html","0ac8b44cd487fd427611ca45d0a70e3d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","220dceacb85787b0b1d44ace2e713986"],["/2022/10/27/Moectf西电CTF新生赛/index.html","a279ba2aeef61822d6e430dd109a9359"],["/2022/11/02/HNCTF/index.html","c6529bca2bf4c73508b88f735cc69db6"],["/2022/11/04/2022工控CTF/index.html","4e6e0ce631f45c3c2b39f24a137100b2"],["/2022/11/21/极客大挑战2022/index.html","d8f7ed8b75d393345dd0d9f9770e4908"],["/2022/12/05/TUCTF 2022/index.html","19549d2e49f49548d9c1d12ab7482814"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","4b680c2b86ca8060895cef58ecf9a4af"],["/2022/12/18/金盾2022/index.html","a16cad5ff99a10e222a9b4c7a6338501"],["/2023/01/01/CATCTF/index.html","82644d26f5669ad9eb1ac2f93712a209"],["/2023/01/09/RW体验赛/index.html","145a2365cbcfd4d52e4745d9832d8134"],["/2023/01/10/铁三/index.html","4ca5de08ae7ddf461688f352457b724f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","e5cd548dfb6cb00e21da45ef690b3e61"],["/2023/01/18/山石2022冬令营/index.html","80b714c9c47a92b5f7396521246c46d1"],["/2023/01/19/SICTF/index.html","5d1b93cbd8f6c0b44c93bad6bd640334"],["/2023/02/04/2023西湖论剑/index.html","8ff54e6caa1b40bb0ceb670609139590"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","ab8299768a5153b343242210ca74d6d8"],["/2023/03/04/公安/index.html","0ebc41624cbf58782b7d90a898468bdf"],["/2023/03/07/mysql之udf提权/index.html","1b52d986f3dbde1c2e462a1f824176fa"],["/2023/03/07/红日靶场练习/index.html","09216cc204b53805bca74c8c2dd00c55"],["/2023/03/27/NKCTF/index.html","fcb44a322b79efa15c9e4270f2525373"],["/2023/03/31/楚慧杯/index.html","a6687021d8a44292595eaafcf33bcde5"],["/2023/04/23/HDCTF2023/index.html","662bae5a3693f1fb7b57cf0c773b85d0"],["/2023/07/10/CyberSecurityRumble Quals/index.html","d3220af46096a529085058347f7d6291"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","48ef27a88b6efc406943325a91ba5061"],["/about/index.html","c58c6e0660bb4732201f405d2d1fbdd1"],["/archives/2021/12/index.html","497d2cce31ba6c9a69d6cfc81b05cfd2"],["/archives/2021/index.html","aa8f4b3cf8a06381c43dc39a0a75b70e"],["/archives/2022/01/index.html","99b6b0c47d9d2714a64a5c47e0e71c27"],["/archives/2022/02/index.html","75c5c2bf7796c8555c11b0171253e9a7"],["/archives/2022/03/index.html","e681157f638efeb8bef8c00e0ac56ef4"],["/archives/2022/04/index.html","5d21007b06349ee7178d5447f652a213"],["/archives/2022/05/index.html","66ce3fa81b91c1f5151a850ec3640ec6"],["/archives/2022/06/index.html","d726139448258adebcb1d0e599f1758d"],["/archives/2022/07/index.html","3017c6436a96badd3e917aa45e336609"],["/archives/2022/08/index.html","8e57370619edb80af4718a99e6f88b0f"],["/archives/2022/09/index.html","a22a9fe83a1061bb256a6117865d8750"],["/archives/2022/10/index.html","1bdb183883dfeec9065e236e2f30f2e1"],["/archives/2022/11/index.html","5216ac1bd5efd629aec37b882e976658"],["/archives/2022/12/index.html","bef7ca5ef3dbd4431c12b5f118f76258"],["/archives/2022/index.html","5bddf94d1a7d89ea8434d2d939a5dcf8"],["/archives/2023/01/index.html","ffad932f195f5383f2aca89200406d4e"],["/archives/2023/02/index.html","30decb06d533260f7f3f36a0c1854756"],["/archives/2023/03/index.html","47d55fac1291cd78d6580daac8b62c4c"],["/archives/2023/04/index.html","14c3416d0eb2c21509cd0eacba8620a5"],["/archives/2023/07/index.html","e89b7497bc908664a6ac2663869ccf5f"],["/archives/2023/index.html","eefdaa34a5bf5028a4ff3ea54d8c532e"],["/archives/index.html","4320d8fa2668f5a7e676f8e96354147c"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","aa3ff714bc644b67ab028aaa0caf16c9"],["/categories/CTF/index.html","647f01e7ea2443132638f8900d8e0c26"],["/categories/PHP伪协议/index.html","815a95ab09f29af68706867f1df89993"],["/categories/RE/index.html","0dec1b29d210db4eb3158d4fa5d90d41"],["/categories/Web/index.html","7a021dbca71f4bf18ee23828be2aba47"],["/categories/awd/index.html","fb4e23465bc3a7766e05fbeb9dacf8dd"],["/categories/index.html","b2e12973f34f3a1eb44956491f9b6c62"],["/categories/misc/index.html","7f68c6df58fea259b217ba7e8d1c18c5"],["/categories/sqlmap/index.html","c94b6b2060d7cb62c3acf747e90e84fc"],["/categories/博客相关问题类/index.html","87c585e3d2618a00b0cfcce7fdf6b778"],["/categories/局域网攻击/index.html","a5907d800fa6d1addd623a60c4c820bc"],["/categories/心得/index.html","efaefbca94a233e6cf96357109998b71"],["/categories/流量分析/index.html","e3fdbb6072652d1c82942928b363d358"],["/categories/渗透/index.html","32713cf8f897da50e9fff121b0892f0a"],["/categories/渗透测试/index.html","ead7ce3be13691bcf792047f0f47d170"],["/categories/渗透认知/index.html","5f968d1629cda30c90f0845ea80e3ec9"],["/categories/漏洞复现/index.html","51e6c765196d69ca3971fb3e90036bcc"],["/categories/漏洞测试环境搭建/index.html","730e2424b253a1215736d23a19d59436"],["/categories/赛后复盘/index.html","7ef2f0b8256d8e33da77b6233f70f499"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","444fc913f65d6d5df0feec2319d96af4"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","65f0a0b4a8f6d556f0fe4a46a8e9319e"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","adae26a7ce0cc5a62df7bfad17e618e4"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","13c383a1e737f04a86b5c352a4d1d8ec"],["/page/10/index.html","7dccb02a1ebd600441b9e460562c769e"],["/page/2/index.html","8ca6acd3a8910457bb8e810ebcdd589f"],["/page/3/index.html","d9ac3d8bf9c385c82603d5b5fe41d0c4"],["/page/4/index.html","9b82601736dc6b76c4d6d61b9eae7a2c"],["/page/5/index.html","e4133c8df69ae8611b4666042ea63ef9"],["/page/6/index.html","f1aaf31498d2582b65c3575ffb093806"],["/page/7/index.html","bcfc371d87f692f1e5b58474bcca925b"],["/page/8/index.html","fbb888786e8f9528046cec4a213c4605"],["/page/9/index.html","708c7fe9c25c695c53d46c145eb3850e"],["/sw-register.js","1792207fd4032ab00e9bc30f3cb5fc69"],["/tags/C/index.html","b819c5d08f86ddd2fd70c75d15f39512"],["/tags/CTF/index.html","e1e679fe4c6341ea4cb6d1468aee8666"],["/tags/HTTP头部信息分析/index.html","8260baee0f4fcfb4ff805fe8f3d68f75"],["/tags/PHP伪协议/index.html","00e86343d87828b8f9c6559cd0b4397b"],["/tags/PHP特性/index.html","2eb47fb9c75f2f44c9e6b27a55504994"],["/tags/RE/index.html","a3fbd0e21cd1d1c7553565f9cc2cd8af"],["/tags/SQL/index.html","f26efc2df506a7bd602d087c60632be1"],["/tags/Web/index.html","461a26211b99d98b8ab916a390396733"],["/tags/Web工具包/index.html","9f694e6d3098b7afed7b32a595c46133"],["/tags/awd/index.html","913219904415742d07ecb6931ccd117d"],["/tags/bugctf/index.html","abc41a29fc7b404e91713488c67ca929"],["/tags/ctfshow/index.html","c4a57549aae49f35a81e83ed0aee9905"],["/tags/index.html","ca40ffce7631ac9f7b04d151bb22839d"],["/tags/misc/index.html","d4221910c8b26131dfe648bc83195874"],["/tags/next主题失效/index.html","8d161fe6dc702f66f0fa737bbac6e4b9"],["/tags/sqlmap/index.html","579ba90fb5ee421ddcd00db620dbc181"],["/tags/wp/index.html","c516c50f4b8c30e21c5a5ce43c4945d9"],["/tags/xss/index.html","3afa68fa657ffdebd691d41223dd840f"],["/tags/xxe/index.html","12c6f989acb1f9687d1fe25231472a84"],["/tags/不蒜子不显示/index.html","0204eee6c5cc3c81a93019df619cee19"],["/tags/博客/index.html","c3dd34b2b6209ca69e48daddc3719d2e"],["/tags/博客主题优化/index.html","b21c625fbed5faa21139e996c46302c5"],["/tags/博客死循环框架问题/index.html","66a8c8cd388e31c1e7372fe1954fb196"],["/tags/博客部分问题解决方法/index.html","249aea202ecc2ad2364a41248d09b1b4"],["/tags/反序列化/index.html","ac7528fb1429533f688b5129fedf3b95"],["/tags/命令执行/index.html","f898c95ca74fee4c7284d570bc6116fd"],["/tags/局域网攻击/index.html","78e1f6c96c0a80e296378726872b80c8"],["/tags/常用指令/index.html","1f7f8c9339c7854a5181951c87993880"],["/tags/心得/index.html","528bd0d465ffbc2cf663cad10d6a4e95"],["/tags/文件上传漏洞/index.html","0d0988a8f6ff94285f44a28f28e6f05b"],["/tags/文件包含/index.html","6ee8debbb1465b55f939044c3e0554e4"],["/tags/流量分析/index.html","f5e0e5eab12bcdb8f28fe6ae7993b1ad"],["/tags/渗透/index.html","c51a92a1cb47d04af50070768b4363b1"],["/tags/渗透测试/index.html","27b31c5cc8a4daba8ce35c7e07336e3a"],["/tags/漏洞复现/index.html","7cce32ff1b7d9c4befc0828a11d2f323"],["/tags/留言板/index.html","39aff88ccc35cfad9d94ae6fb9dce3ab"],["/tags/赛后复盘/index.html","8fcdc92f97a314b7586a7b314f348d53"],["/tags/黑盒测试/index.html","04b1288e87cfd97fc7c46e404d281a29"]];
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
