/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","5f5780c5210eb188c8f3ec19e6662583"],["/2022/01/08/ctf之web/index.html","f5e6ed7a989d475fbde181063992b40d"],["/2022/01/11/博客制作遇到的问题/index.html","b00ac1812ed5c069f40b0e37ad3ff71a"],["/2022/01/15/C/index.html","b8cfccc301a15fd7dbd7eb549aea1e5e"],["/2022/01/18/新版next置换/index.html","be8a351f8a3670a195645af0f409c54e"],["/2022/01/19/不蒜子相关问题/index.html","41bad75243f26d0cf86c54aec8364751"],["/2022/01/19/框架问题/index.html","1a14ee40fd8a099f74b43819553d9352"],["/2022/01/20/ctf之reverse/index.html","b5bf2a0b9623002e5d67919a9c54f63a"],["/2022/01/23/misc部分解题软件命令记录/index.html","e4df19a4105dd1de09757ff5fd25fc17"],["/2022/02/01/684/index.html","7bce2f86fd876f596e47460d3ec14c17"],["/2022/02/03/留言板/index.html","c448a163bf4075ae0700dd72c5f7ce02"],["/2022/02/04/SQL简单注入/index.html","a73f5520934252ba52822f0b556c615b"],["/2022/02/05/最全的HTTP头部信息分析/index.html","601cbebddf3121f2099d969b8b94ce54"],["/2022/02/08/ctfshow文件上传/index.html","ad78e72bc528b3476bf4391e406e7a43"],["/2022/02/08/常见密码类型/index.html","4cb0b7c2d8618fd4bc25090168cc1dde"],["/2022/02/12/VNCTF2022WP/index.html","6e6fa5a53d1bfa8960235574a7f941da"],["/2022/02/20/ctfshowPHP特性/index.html","3310db779086d25c9923d95445b8b2ea"],["/2022/02/25/php伪协议/index.html","2252ffc49cbc6ea08c02e1cc38c883e5"],["/2022/02/26/ctfshow文件包含78-117/index.html","501112f02f1c97853b4bf0db470d3418"],["/2022/03/02/Clash漏洞/index.html","365ebfb3a7f740559d7332784dcb175e"],["/2022/03/11/流量分析之题型解析/index.html","64e248e767d189c70e1cd0d4efdc91f8"],["/2022/03/15/ctfshow命令执行/index.html","97c2a130e4cc1332764b745ce37deac8"],["/2022/03/22/CGCTF/index.html","8330d18063bea02d267926bc11cac803"],["/2022/03/24/ctfshowxss/index.html","12dea78b8e9491adea6cc2a941440e49"],["/2022/04/04/黑盒测试/index.html","5ee90be7b69cb71fcbf15ec6c92b1004"],["/2022/04/11/nmap/index.html","bc3843590a461c20f83d7fc1a78161d5"],["/2022/04/12/渗透流程简要记录/index.html","8080c04f394552c6dc97eff7a47f3505"],["/2022/04/12/渗透测试之攻破登录页面/index.html","61dd2e1f8085a0eefc784f9d01419da2"],["/2022/04/14/xray扫描器/index.html","fd59135156425a0fb839c1536b2912f2"],["/2022/04/15/ctfshow反序列化/index.html","2416e7bafbfd17d7190addfc83b6e378"],["/2022/04/26/渗透测试实战/index.html","a21109cde12695105fe3eec172d21922"],["/2022/04/28/sqlmap教程/index.html","b44a701ac9321666378ddb2b88ad5d79"],["/2022/04/30/认知文件上传/index.html","a6943949c22a67ff46a11707596ebc91"],["/2022/05/03/nahamcon/index.html","1b1ba036704de7760b84ecaaf1c98bad"],["/2022/05/15/awd/index.html","9789027586b0b045765536cd44a681ef"],["/2022/05/22/DASCTF/index.html","d8b72f03170050266787ea0def9cfeae"],["/2022/05/27/520/index.html","7176d24492af90472d5ef13466c08aed"],["/2022/05/27/ISCC2022/index.html","7cdf087acafebb0016d087560113c435"],["/2022/06/01/第五届世界智能大会/index.html","52c65d020601a1f66e0dbbc559f0021e"],["/2022/06/04/SEETF/index.html","9db4ebfc53fcc7de9e7820789f85d446"],["/2022/06/04/bcactf/index.html","70d883db22353cbd734b5d725251cdd2"],["/2022/06/05/BSidesSF CTF/index.html","18523120be8b10775bd127b7b31d42f1"],["/2022/06/07/Docker部署web题目/index.html","e97df257fc593a16539de05b085ac5fb"],["/2022/06/09/利用oj搭建C语言考核/index.html","f33fdcd30ec0fdda585011de82b5338b"],["/2022/06/13/限免题目/index.html","a0b4bae68c6ae95e8bf72c89dc0414fb"],["/2022/06/14/钉钉rce/index.html","2d87e8a4088dc1b9b6620b0fe6133ba4"],["/2022/06/16/内部ctf/index.html","5847fbe899ca3922b88ab4a2f6a17b7b"],["/2022/06/25/攻防世界高手区(一)/index.html","d5387758e80e6e9e81f573425aa1aed2"],["/2022/07/01/两小时AK赛/index.html","d48d8a46294508d4b1dac7fd728c4f3a"],["/2022/07/03/鹏城杯/index.html","540326e25c29d185ee0b0a3118b4a6c2"],["/2022/07/04/XXE/index.html","5eedeb86fd3f9db3191dda3c18b6b42d"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","df3573f651f5eebb6fc17c6f41917686"],["/2022/07/08/chinaz/index.html","a0ba16671461ab0027a111e2af9fa097"],["/2022/07/09/蓝帽杯初赛wp/index.html","7f3779d8c77d434e9690a93e03c8eb3a"],["/2022/07/17/NepCTF/index.html","c570754c4235327dd9fef9cf0d7ab2a0"],["/2022/07/19/ImaginaryCTF/index.html","c173476e48d87d05030348368e55bd4e"],["/2022/07/20/局域网攻击/index.html","352a8d500a3aa7d8203dff8e53c602ad"],["/2022/07/22/BDSecCTF/index.html","8ca114f5d8edbd7fc4aff0113c07df0c"],["/2022/07/25/DiceCTF @ Hope/index.html","38f5351cd451de5335b144b9c5f322d6"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","2e63939ab142f2bffa8ca8c725891149"],["/2022/07/31/TFCCTF/index.html","066036606767c9e023c92f7b32dadf71"],["/2022/08/03/NSSCTF/index.html","19be8b60b7362533f916c624d99a4a3f"],["/2022/08/12/T3N4CI0US CTF/index.html","cb8d775e9a090b0b1fb6c099b40c01a7"],["/2022/08/14/SHELLCTF 2022/index.html","9804e9821fc373b0d18dd84161fd0d61"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","1ba0365b7ca94432935981fe533ed1eb"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","bcfea40a925ac1b43cfc9d3c28a68b58"],["/2022/09/16/柏鹭杯/index.html","374c4cd6d9b18036759f2df13bda09ac"],["/2022/09/20/HUBUCTF 新生赛/index.html","b1d9775f4abb223d11047dc7da292eb8"],["/2022/09/27/NewStarCTF/index.html","2621d084e28ab781fdd7efc2c107da0b"],["/2022/09/27/bugku渗透1/index.html","db3814b43cfdb894465acd5b3787528e"],["/2022/09/29/tp6漏洞/index.html","bfd5a2e128c8d1a266e981c2fec3019e"],["/2022/10/02/SWPU NSS新生赛/index.html","c4a156713e65a2a51c1b9370dcb1636d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","fc8b845307d93a0e324654405561fb8a"],["/2022/10/27/Moectf西电CTF新生赛/index.html","8624787742539e4ce44e9562e5d7c0fb"],["/2022/11/02/HNCTF/index.html","d56d8c30e848ca24eb4e862525029033"],["/2022/11/04/2022工控CTF/index.html","a91d802ef4bb4454c927eafb905a63b2"],["/2022/11/21/极客大挑战2022/index.html","88d9dd44349e85e9f5554b2fa95c886e"],["/2022/12/05/TUCTF 2022/index.html","8e038c4d5d4a083ecfa2ed4a2dfa9811"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","25ca2649a457016a56bb6f236569b576"],["/2022/12/18/金盾2022/index.html","0b75aa71ce122eee45ebf51a27206c26"],["/2023/01/01/CATCTF/index.html","9d0f384ea9a6f1e150e8df99082f0fa0"],["/2023/01/09/RW体验赛/index.html","9c111440e1ca1d34007322a5718bfdc4"],["/2023/01/10/铁三/index.html","38ba357acb7bd3e31fc480d1fd79c77e"],["/2023/01/16/Ugra CTF Quals 2023/index.html","2721a9b476009e1aa03f41563e059d42"],["/2023/01/18/山石2022冬令营/index.html","47aacac0d05e472894a4ef90b1f55fa1"],["/2023/01/19/SICTF/index.html","df4bcc53a3945003ec1579159e116443"],["/2023/02/04/2023西湖论剑/index.html","0980ea40d130a6964001c25630e012f0"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","6f83daa408cc673ebdaccd2789c4a604"],["/2023/03/04/公安/index.html","154bcab9cc376ee05b4eacc2ee4cfe39"],["/2023/03/07/mysql之udf提权/index.html","dd7c92298af9e025178f80103f7d0949"],["/2023/03/07/红日靶场练习/index.html","5b0a93cc1fd4cbbad39e351397f0d252"],["/2023/03/27/NKCTF/index.html","3d6f318ff77e61a51715967d09b426fd"],["/2023/03/31/楚慧杯/index.html","ff8acce132171320c46c8ce9ef237870"],["/2023/04/23/HDCTF2023/index.html","229d8d1867ead69a2fc78f9638b51fa7"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","31ca6c4538180b726c3ad34d8857b6de"],["/about/index.html","7026149fd27a89542e84c10b4bb1ffee"],["/archives/2021/12/index.html","1caad4efd1d14766aed2a905d857b6ef"],["/archives/2021/index.html","ed249defbeec3cb37320ccd1c14fda8f"],["/archives/2022/01/index.html","00b263bd91f859a8b4105649c82589aa"],["/archives/2022/02/index.html","9eaaad77a46b5d1ec7052fdee5a329c5"],["/archives/2022/03/index.html","e62c54f93d5fff3b63ead588bb8094a2"],["/archives/2022/04/index.html","b685f4e364f6cc5b3106456ae8272a77"],["/archives/2022/05/index.html","0d5be629105f84b97576c3665f246654"],["/archives/2022/06/index.html","3721b4d1707042f42715dd90100f526a"],["/archives/2022/07/index.html","aa4e498f4cb9b8f8c20a42f0cb1d7d64"],["/archives/2022/08/index.html","f7515ff2ad8a4be70812c96741e8c558"],["/archives/2022/09/index.html","9726c8749ecfacdc4fea5192a1efa734"],["/archives/2022/10/index.html","4f822618ca73d0d26fb736aaa3791141"],["/archives/2022/11/index.html","6794492d05a1c883fc47e2804f234e9d"],["/archives/2022/12/index.html","b19a369c255f480441b414ca30a22f13"],["/archives/2022/index.html","62154316f5304913ebcef3d85cfb7edc"],["/archives/2023/01/index.html","a84e73c242f67d41fe7a36688fc0e3a2"],["/archives/2023/02/index.html","c23028b08c4d1e46d46ce57ecb13ba9d"],["/archives/2023/03/index.html","6252163b0f775895a510a9376fc7977e"],["/archives/2023/04/index.html","f32316c08c456adce5d3a6be1da7293c"],["/archives/2023/index.html","9dbac411bb94727364ffac6ca2c8814f"],["/archives/index.html","ff19c0543a761dbac4b1b782fa6775cd"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","0ac785fd389047b447ed8c79bbf2704a"],["/categories/CTF/index.html","5c65ee9b54c235a36c758499cdb2c83b"],["/categories/PHP伪协议/index.html","691d8fad1890d50cf9c3e22f8a940f3c"],["/categories/RE/index.html","f46b6eb455449e8db5693b072082f21f"],["/categories/Web/index.html","3e3826e01e5b41fbb5a7c7e3e68fb4e0"],["/categories/awd/index.html","7007412ba85d8324f61a6e786289e667"],["/categories/index.html","9a891790a41461e1be08265b3dc4cdea"],["/categories/misc/index.html","3757278f4ce611b72d2bd3c26b32e5dc"],["/categories/sqlmap/index.html","e35bf7143d6ec29d187873e9e3ee681e"],["/categories/博客相关问题类/index.html","1eb5d47dac8830bb018df9e190aca342"],["/categories/局域网攻击/index.html","bb3bcc5d6987291a25506c641bd581b7"],["/categories/心得/index.html","7efc388f20a6a7b1ba8cde7402731116"],["/categories/流量分析/index.html","a0848aabdd66046777faeca3ba5698ba"],["/categories/渗透/index.html","2f4d1c08cde1f9b3147d0cad74a1e0b9"],["/categories/渗透测试/index.html","86c46b7e774903e9532310c2d3f1091c"],["/categories/渗透认知/index.html","b49004c1e88f9665733199ed80238429"],["/categories/漏洞复现/index.html","35c29707523bb30e1eaa3c3ec66f7c28"],["/categories/漏洞测试环境搭建/index.html","f02e6b004cc153a4bcf172e345aace99"],["/categories/赛后复盘/index.html","751ca26034d263ffa84b2e6509470d80"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","babe6a1ed13f212b74401f9f81348c98"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","a0a5fc1ae3c27ee59dc7ae409e8bfb38"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","de40466ec676f40ab5c4c2ef9c4c38b9"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","496a4aa248d47a68a9bc7834afb546e2"],["/page/10/index.html","9fd16afa31da5b508c9d42e55a3e7098"],["/page/2/index.html","25947f31e1c985499b702925f17b6135"],["/page/3/index.html","fd695e640270a259967862119fbecf63"],["/page/4/index.html","ea8e43a5a85cb77e1f9e3708bd637e42"],["/page/5/index.html","417f6aea778d70c31dc97acec82bc056"],["/page/6/index.html","c8a8d97c64ed125a21ac097535c59a28"],["/page/7/index.html","30e53a965686ea01a0b7803a0d0d41f5"],["/page/8/index.html","5fbd3350aaf365f57201983cb78824b4"],["/page/9/index.html","cb9a29d3b7df84ad589a94b09f250fc9"],["/sw-register.js","25b858085f436122e481f20d166c6f3f"],["/tags/C/index.html","9c30ed2f0e4bcf6673d936a83d6cf369"],["/tags/CTF/index.html","05e7a24bd898d2f29b0a4bc0634fcc54"],["/tags/HTTP头部信息分析/index.html","1d79bb9029f071b558479fff8cae6c05"],["/tags/PHP伪协议/index.html","2bba0d5e6aef11c8a66d5a44004ca1f0"],["/tags/PHP特性/index.html","39c1d2058337b3aadb2313ce9f93ad90"],["/tags/RE/index.html","69d74973e5041a8088140d66140813fd"],["/tags/SQL/index.html","0a953b3d8e1823cb62f9a0d1ff23b945"],["/tags/Web/index.html","556a385d50b7baa47125adebab400398"],["/tags/Web工具包/index.html","44a2034583eb3bd0d52b3286221bc976"],["/tags/awd/index.html","2c64c8a5c19d5e29848c6243d1b551b6"],["/tags/bugctf/index.html","f6667c907ced11c51466690947766869"],["/tags/ctfshow/index.html","ce0c2d67011194f4398648dfb8a975f3"],["/tags/index.html","4eae6f09937ec8e11c974a7d55203074"],["/tags/misc/index.html","ab6841f4becfd22c9b3bd3d65e8e6a4f"],["/tags/next主题失效/index.html","eb14fcdc4793a10ef841fde6ec241377"],["/tags/sqlmap/index.html","1241114e025b8a32bcdf20583d7be00f"],["/tags/wp/index.html","5cea9de0f60864a39e338b1663052d78"],["/tags/xss/index.html","e3c5ddfb51e24e7d6424c501f6e3823a"],["/tags/xxe/index.html","83812ebcf9243c35f09fe0a087ca0306"],["/tags/不蒜子不显示/index.html","b257e8d18744555b756f3a66291b1e85"],["/tags/博客/index.html","7d5986a56afec08d72da326d10f12899"],["/tags/博客主题优化/index.html","1585c2dda8a2158264dec5f9f5944e1a"],["/tags/博客死循环框架问题/index.html","b56c9bc147297d413eba8dd1cd85cd52"],["/tags/博客部分问题解决方法/index.html","7b1bdfb7c25e3d23ace7de7d53354c9d"],["/tags/反序列化/index.html","3b7630a053640239ef51bb20f6822f9a"],["/tags/命令执行/index.html","78a1e45e0c0fd0b9df823f43843fd6a7"],["/tags/局域网攻击/index.html","dcdd65a174163c844df67034e732bd6c"],["/tags/常用指令/index.html","8042e6af5710632dd17e6c975a1c1f79"],["/tags/心得/index.html","19c86922554e6bf9c8fc3f440e406694"],["/tags/文件上传漏洞/index.html","2655ace7ef813772989aab2b4f0f05e4"],["/tags/文件包含/index.html","314b8a321de69082f6a97b66ace6b763"],["/tags/流量分析/index.html","8979702507937606cff938443ca0df12"],["/tags/渗透/index.html","219c2711bdf291b85c1808db25d11516"],["/tags/渗透测试/index.html","0abe375ff3af9e3714d11937ff560a97"],["/tags/漏洞复现/index.html","0260c0cd0b9fa2905ed88cd60ad739b6"],["/tags/留言板/index.html","aa15d2fc62629943a34b280e2c24e596"],["/tags/赛后复盘/index.html","141df736286a158f594acd9149846a14"],["/tags/黑盒测试/index.html","94e5ad159a951d2b943c4728297f4c78"]];
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
