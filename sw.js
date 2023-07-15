/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","ba0825a75e7e282c8101958041138602"],["/2022/01/08/ctf之web/index.html","6f9fb4b191fe92f9ecbb10ba8fecdbc2"],["/2022/01/11/博客制作遇到的问题/index.html","da9858a2aeb66dada802744552c58c76"],["/2022/01/15/C/index.html","a491a8ca4dd09f9c424b75aece26453a"],["/2022/01/18/新版next置换/index.html","22d18563f133fa0e44942d1086917244"],["/2022/01/19/不蒜子相关问题/index.html","d444b216a6983434f5562281eb103aee"],["/2022/01/19/框架问题/index.html","e50848ff0b367484a96bfd71fcf3ee8a"],["/2022/01/20/ctf之reverse/index.html","9765c087ec4ddb188286fe58e6fca1b9"],["/2022/01/23/misc部分解题软件命令记录/index.html","1d1f60335453d27c4c35d7bd7404876f"],["/2022/02/01/684/index.html","d568de854c077538eddc18977326b2fc"],["/2022/02/03/留言板/index.html","969e916d486f284be98e9b935320482f"],["/2022/02/04/SQL简单注入/index.html","2947f98c9fbfa4a0ee2a342372943fec"],["/2022/02/05/最全的HTTP头部信息分析/index.html","1b6ab0dded010eacdd539d5ddcf38fbe"],["/2022/02/08/ctfshow文件上传/index.html","2830a2c3fa6e8cfe7f5b93d28329b403"],["/2022/02/08/常见密码类型/index.html","62ec865548535b1df379aa1d8bf6ec8f"],["/2022/02/12/VNCTF2022WP/index.html","106366fce97253b4e99fa2437be13516"],["/2022/02/20/ctfshowPHP特性/index.html","2915012632f79489ec3a7afb8428d085"],["/2022/02/25/php伪协议/index.html","fd0bb912039bd8a66c1224dc6ef3dbb0"],["/2022/02/26/ctfshow文件包含78-117/index.html","551f3ff500c30f05c72cdd5607f13914"],["/2022/03/02/Clash漏洞/index.html","9da4d6ec418f3ee897ad6e89038e286a"],["/2022/03/11/流量分析之题型解析/index.html","e829b939eac883e60e3fd025a823813d"],["/2022/03/15/ctfshow命令执行/index.html","cca86a99a35bc336d5f4e69e48f64f4e"],["/2022/03/22/CGCTF/index.html","d87abb7769449a457256cdf323e7b80f"],["/2022/03/24/ctfshowxss/index.html","34aefba9352bec7eb62f7f545ba8c556"],["/2022/04/04/黑盒测试/index.html","e6b3645993f1851f882076d49de05e7d"],["/2022/04/11/nmap/index.html","d2616655825eab6365d76cd9014ea406"],["/2022/04/12/渗透流程简要记录/index.html","8371e63d36bda35a0c677d42b2dd9e0d"],["/2022/04/12/渗透测试之攻破登录页面/index.html","5e281b0b3f9b9d3a538f349ed7131bc7"],["/2022/04/14/xray扫描器/index.html","cee00d02e64dde314bdec9441c0ae6e9"],["/2022/04/15/ctfshow反序列化/index.html","74b4900527299a5d238bd23a4663f210"],["/2022/04/26/渗透测试实战/index.html","3565635401f009fbb459d1a22599ac13"],["/2022/04/28/sqlmap教程/index.html","d902de536772c2a60b3c5195172c79b6"],["/2022/04/30/认知文件上传/index.html","cd25a2e35730148ecc3645688bd1e34e"],["/2022/05/03/nahamcon/index.html","f033ffbb35da8271e449e45a4c653d8c"],["/2022/05/15/awd/index.html","e2210da53c9d72ebf3fb624a6ccee9ae"],["/2022/05/22/DASCTF/index.html","eadee078d7c3bd9169c88f2e32914f79"],["/2022/05/27/520/index.html","2793b42d5b9334fcc7695bcd7a88c431"],["/2022/05/27/ISCC2022/index.html","1c76af749064d6b4c44255555a9bed28"],["/2022/06/01/第五届世界智能大会/index.html","6ec3ccfaae1a4a529200fc9292c9582e"],["/2022/06/04/SEETF/index.html","5310e4d6c8a0b9106c09f7201c3082f8"],["/2022/06/04/bcactf/index.html","8b47d5e1b6254630c60ae495cc308e1c"],["/2022/06/05/BSidesSF CTF/index.html","1391c563d3d8605ef704a2cb9d9fd425"],["/2022/06/07/Docker部署web题目/index.html","e36c875a844769694d813cf6b1248372"],["/2022/06/09/利用oj搭建C语言考核/index.html","890af3e28e782e08a8f5f9c5e27db84c"],["/2022/06/13/限免题目/index.html","c724fe1511babd7b3c1eb4a8feb641ab"],["/2022/06/14/钉钉rce/index.html","4d2f795de614fee66b73c9e5649aec2a"],["/2022/06/16/内部ctf/index.html","1e7e43a7810a49f5e54cf75762318241"],["/2022/06/25/攻防世界高手区(一)/index.html","d0871ecbda43f940691eeff00608a52c"],["/2022/07/01/两小时AK赛/index.html","83459dcbc8204a01364a778a7d33ccd7"],["/2022/07/03/鹏城杯/index.html","d2290b86cc2b0a1bc1836b5809aca0ea"],["/2022/07/04/XXE/index.html","43f10a2b3312773aa36fa9627b67e499"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","6443c3903fe56846a3976fb2f16a5e62"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","4ef12db21dcb8eb67aebc1771acae38c"],["/2022/07/08/chinaz/index.html","64397b2e9b50c145e465b861d45ea2e7"],["/2022/07/09/蓝帽杯初赛wp/index.html","8376fa41ec19b25b8a96db4169e36ef0"],["/2022/07/17/NepCTF/index.html","9b2989b96546005f0673afede96ffe21"],["/2022/07/19/ImaginaryCTF/index.html","25226d5472eaec662d2538237bd29caa"],["/2022/07/20/局域网攻击/index.html","2e3acf552720c06c5c8bcbd0609e8244"],["/2022/07/22/BDSecCTF/index.html","b5bc94270952fcb926a7d4d946194ce4"],["/2022/07/25/DiceCTF @ Hope/index.html","223d9ed1ad8891c1542c8fae873ef206"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","f1ba0a7553ef13558d6714ddef2af88d"],["/2022/07/31/TFCCTF/index.html","f779991875887c3dbc0cf755148c7b1e"],["/2022/08/03/NSSCTF/index.html","39ada84164747c52bbb6c591239182ed"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","db66b68c02f24480ff061372c12438fc"],["/2022/08/12/T3N4CI0US CTF/index.html","c0ae57b357ff75943a3d503410f76b74"],["/2022/08/14/SHELLCTF 2022/index.html","a789546b4b710da609860941dc56bf0b"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","d27e15712ab9d73315b1bd13765f458b"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","e35bc4e0f483869cef416c3a88e51a9e"],["/2022/09/16/柏鹭杯/index.html","0ece2af47c65f4db550609f754a4dee6"],["/2022/09/20/HUBUCTF 新生赛/index.html","a79c160936a65a04f6441ac458483814"],["/2022/09/27/NewStarCTF/index.html","bb9bae9fce02165b2abaef4d909d45a8"],["/2022/09/27/bugku渗透1/index.html","e5234e9cc6fe2909573fbe0d709e6fef"],["/2022/09/29/tp6漏洞/index.html","da5eede4be696ac135cdae87267c449f"],["/2022/10/02/SWPU NSS新生赛/index.html","bf27c0014bf8ed4056a9d4c697f3b0e8"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","49c8ef5488957a45d4b22681b1a4f575"],["/2022/10/27/Moectf西电CTF新生赛/index.html","251bb0078efc117a386fe2107ddb6c66"],["/2022/11/02/HNCTF/index.html","5fb5fcbac46e2991193ee5ae15d3db17"],["/2022/11/04/2022工控CTF/index.html","cb62988179bebd3fa7fcb99723894f7a"],["/2022/11/21/极客大挑战2022/index.html","056011101e56d699052e2367cde280dc"],["/2022/12/05/TUCTF 2022/index.html","66ef4bcc7a40664d000986c4112a6be1"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","b19776272c334cedc5b0f01fe55cb7a4"],["/2022/12/18/金盾2022/index.html","c9ef2ef6faa238664faea95e623d1fcf"],["/2023/01/01/CATCTF/index.html","1c320734e2588a5b90902693eb7688ba"],["/2023/01/09/RW体验赛/index.html","dd5ceff3b7d24d17e4d6bcf0304014a7"],["/2023/01/10/铁三/index.html","6b41a72be26f58161f8112d677cb3f8c"],["/2023/01/16/Ugra CTF Quals 2023/index.html","f1aaa24a3f8187a6775b640523a2f47a"],["/2023/01/18/山石2022冬令营/index.html","f6b4b94eaae41e1f6ba6fa62563468a3"],["/2023/01/19/SICTF/index.html","09d42eeb9fa151e4fd2dea46580a9a4a"],["/2023/02/04/2023西湖论剑/index.html","a87dfa366496fd1d6175ae76756ac9de"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","dfae71f114ab5790ca2a11dc0c828bff"],["/2023/03/04/公安/index.html","5206348315ec0e49ce9fd9325c5eac60"],["/2023/03/07/mysql之udf提权/index.html","b9fa01c40980e0927a4bfbcf59d5d7b1"],["/2023/03/07/红日靶场练习/index.html","8ef546646aba55bde2f937c73a54fd08"],["/2023/03/27/NKCTF/index.html","5a27937a871f163e68c19508f1859cc4"],["/2023/03/31/楚慧杯/index.html","cb03ccb7d44999d05a55294b2f6e3647"],["/2023/04/23/HDCTF2023/index.html","f2402a0ca45c2af7471abca6009f9b20"],["/2023/07/10/CyberSecurityRumble Quals/index.html","945822dd21b1cd147a893c75669f25fb"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","ee2354c1702f16184a210de70c8cafc4"],["/about/index.html","de19021bf8d83367ac89dd03335310aa"],["/archives/2021/12/index.html","93be75c11f908c6aa0668aa3df83cdf3"],["/archives/2021/index.html","7271f2a11f9fffc3d232345ea4297204"],["/archives/2022/01/index.html","10bed365b41b405af207c19fd1769ed2"],["/archives/2022/02/index.html","3cf6a9a3a72599e215fdd7391dc91ada"],["/archives/2022/03/index.html","3d63f8fc0099b5505105d845548db7e9"],["/archives/2022/04/index.html","3d6966f82a6f12da1ee6392b947dfef2"],["/archives/2022/05/index.html","3ff0f293063d73e8d993e8e613aefaf2"],["/archives/2022/06/index.html","41108b18785e1ce8842092ccdb716837"],["/archives/2022/07/index.html","c0e3b1c79b6b90705fa9330e58e4f273"],["/archives/2022/08/index.html","df835c276b1dbe2eea8df317a217940a"],["/archives/2022/09/index.html","fc618c2f22c1a641a011e1be6fb11b33"],["/archives/2022/10/index.html","46a719f46f5f0fa38a3576fbb4199494"],["/archives/2022/11/index.html","e4e7f0c7239fbfcbdc9b4a394809126d"],["/archives/2022/12/index.html","ec03bd3a074db2c585288e2ab8358441"],["/archives/2022/index.html","73b8241b8c8e3e4a3cf7b4aa351227f8"],["/archives/2023/01/index.html","5406be5803ab6b2b754e51015e05d537"],["/archives/2023/02/index.html","1a038c8bcca7aee94f96eaadca15c385"],["/archives/2023/03/index.html","7d618001578c7bc6741ab6a22c781e94"],["/archives/2023/04/index.html","663e9aa9746d1871e68a701a288f6d35"],["/archives/2023/07/index.html","1b8c97d69d1b609b29051eb9e16a49ef"],["/archives/2023/index.html","82f76dd1401714eda22827f5889e60d9"],["/archives/index.html","22c83b7bb232c2878834db3eefe151b0"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","7a49d273f9f6415ed16b29f7807e4262"],["/categories/CTF/index.html","29c568ad0c3a37c2f5de3aa4f9dd27c3"],["/categories/PHP伪协议/index.html","699b1d11e2391b32a6e511233f4e8bb9"],["/categories/RE/index.html","75b2d31efcc897d0393fe59122cc5ec1"],["/categories/Web/index.html","dff5dcca82a582d8ab99225a1ab05aab"],["/categories/awd/index.html","9607eac92be2fb2c0c0ab7e450cb242e"],["/categories/index.html","ac36c9102baa1f8b3ebd5c654dffac0c"],["/categories/misc/index.html","5fc766baccba58bb7ab65cc923d3e84c"],["/categories/sqlmap/index.html","5917d22b060999d58d997fae5bfaef48"],["/categories/博客相关问题类/index.html","923d6b330c019cf51363513e2e5d410c"],["/categories/局域网攻击/index.html","f6070baf44dd1c18bf0309810c4a048b"],["/categories/心得/index.html","2533768c7d44c7dadc50d1669b6f4f54"],["/categories/流量分析/index.html","94ce0d102e5814a82f9bbad5fcf11e03"],["/categories/渗透/index.html","a05115ea67d345e5691844eb6467eee7"],["/categories/渗透测试/index.html","a1ce12ee10ce28476f09a36a6bef0c28"],["/categories/渗透认知/index.html","49d0b3b34bf69a0d8f6a2a0de74097c4"],["/categories/漏洞复现/index.html","d2070abe150dcf358e787c770f7c35e3"],["/categories/漏洞测试环境搭建/index.html","b9f444123efb31dc938e27543c407d6e"],["/categories/赛后复盘/index.html","bc1ef71b963bc8f99c217a25ae6ff148"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3b0930b786c68603212bede4916491b2"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","398a8d591b20d3bc71b48bac0234779c"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","349b64199a8c07e92916dd1b9d7ea889"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","10ee28dfdc272c9d8965ae3191d10a3a"],["/page/10/index.html","0dd78ab638af61a4e9a2dc8815820986"],["/page/2/index.html","acfee3fd1a0248d9028ec108f437b3fb"],["/page/3/index.html","f0b56ac8d4190355a04cdc8344c03ba5"],["/page/4/index.html","bd2ff249e263591f6c99316c6e104f6b"],["/page/5/index.html","b5d8bfa9f60377a2b1f1ed86acfb1817"],["/page/6/index.html","c575ad480037f48034c0b6281bc24104"],["/page/7/index.html","186b45e5826e03fd3f399cec6e65b749"],["/page/8/index.html","bd54e0e2b075a0456d355690075a413b"],["/page/9/index.html","dd51856aa2d553470abc28764e8362bb"],["/sw-register.js","b4e7d9a653903faaa3ad8babc2897b78"],["/tags/C/index.html","f1c112207a7a403e20ef3e2a6f4cb1f7"],["/tags/CTF/index.html","73b74b6add947489a48e031ea5985c76"],["/tags/HTTP头部信息分析/index.html","400c46008e82cb43857c1ab8a9ca42d9"],["/tags/PHP伪协议/index.html","f58709e1885958112952715df564efcb"],["/tags/PHP特性/index.html","d14c9d08c03aa88d474e07b8f918868f"],["/tags/RE/index.html","c91018bae5dababa2fab2a7923141dbc"],["/tags/SQL/index.html","0c1ce17d229c22d4eb039cc906c0622b"],["/tags/Web/index.html","86788e4e0b629b08fb501ea857d17530"],["/tags/Web工具包/index.html","8c028ca747cfe055d0d99acd779f87d4"],["/tags/awd/index.html","1d4f6fffa01e58cbd434beb01ff16f7c"],["/tags/bugctf/index.html","d58e23db060d6481caafc99cb3574bd3"],["/tags/ctfshow/index.html","80f8572dd86b22a0525318c73471811f"],["/tags/index.html","0e0ed8660d68b1efdfc4bbccaa474cb7"],["/tags/misc/index.html","3d06c13cfaa05a762796d07dfb674af6"],["/tags/next主题失效/index.html","70f57307a21ee5c81ca6deb56a73ba4e"],["/tags/sqlmap/index.html","2c29744a807b1933252e6cf7f07a0edf"],["/tags/wp/index.html","58f3d822f18f2c7c4a85baa86a9fe795"],["/tags/xss/index.html","49ec6c843d5a25dad22cb1a3b5a70a72"],["/tags/xxe/index.html","7e125125326c1ce21fefd2c6112d0bb6"],["/tags/不蒜子不显示/index.html","f05361d674c1b1214c4ec9d581d153c4"],["/tags/博客/index.html","8b2e64136e3b0942277ce37731fbee64"],["/tags/博客主题优化/index.html","141b118dcdd8608bfb462ec195c26f9c"],["/tags/博客死循环框架问题/index.html","5c630ee0f4da1cbef5ee813ede1621ca"],["/tags/博客部分问题解决方法/index.html","a06a6277f1bc9a6cdcc4a2fd3ac366ef"],["/tags/反序列化/index.html","4d97c43ba5ac2e3bbeb36297ef11db77"],["/tags/命令执行/index.html","e9c0bc047897c6b3bc247546e683c262"],["/tags/局域网攻击/index.html","55afcac2f62b62b65954f3f03dc4c8f3"],["/tags/常用指令/index.html","0b288e833b1b218707fe899f91fec53d"],["/tags/心得/index.html","5e5987df1b74bba4032a1d570db25370"],["/tags/文件上传漏洞/index.html","99d9ae2785557a528ac4134f8e4b27fd"],["/tags/文件包含/index.html","c94d92771269257c5be15a040ea2e011"],["/tags/流量分析/index.html","cf8f943fb97d6db63ba41291e589caa6"],["/tags/渗透/index.html","ca53f73467b6fa6b3e32ed5b42c62681"],["/tags/渗透测试/index.html","f972703c8f453b475be84417853b6c42"],["/tags/漏洞复现/index.html","775fc6d986c5ae535ec6cd1b5c5b0677"],["/tags/留言板/index.html","80f3ba0f345b5a737f7f4c6ae14e7b34"],["/tags/赛后复盘/index.html","c884e891a78ba2377bdbbe75cf99c0f3"],["/tags/黑盒测试/index.html","6ba1dde6f655ba00e365977ed0561604"]];
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
