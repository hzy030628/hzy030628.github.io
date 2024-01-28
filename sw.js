/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","849590c64e95ba7f35c22992822d3f62"],["/2022/01/11/博客制作遇到的问题/index.html","87bf86d9a3d458db6c872d6eaddf8095"],["/2022/01/15/C/index.html","d4bbcb49cddff6e8c71fb07256dab69b"],["/2022/01/18/新版next置换/index.html","3cc9c4a3c9148b82c85a316995dd6b43"],["/2022/01/19/不蒜子相关问题/index.html","090ffe15d6e01ab5b0285cef34aebea3"],["/2022/01/19/框架问题/index.html","3208afeac8884911e57b48c673824343"],["/2022/01/20/ctf之reverse/index.html","3726ab684e6830087609ccb18bb87bd2"],["/2022/01/23/misc隐写题目总结/index.html","368126357e48683de50de5fc6be65b1f"],["/2022/02/01/684/index.html","09e541a64f7c224c927af58c9ef98c49"],["/2022/02/03/留言板/index.html","cc15e9e5543cddc1f219d0740cd29591"],["/2022/02/04/SQL简单注入/index.html","ec25fb5813968d1dc0c62acd56a7a0db"],["/2022/02/05/最全的HTTP头部信息分析/index.html","7b1ca5d192f802d45f2c7572d6c18858"],["/2022/02/08/ctfshow文件上传/index.html","c257411462d495e3cb79dad67f2c70b2"],["/2022/02/08/常见密码类型/index.html","fbe8d75ced8eeb89d28d947a3fb5928b"],["/2022/02/12/VNCTF2022WP/index.html","3da23c16cb1dafdd70bcad9810df136f"],["/2022/02/20/ctfshowPHP特性/index.html","2dbfd4147d0a659de23a565e3b93e3b9"],["/2022/02/25/php伪协议/index.html","6db90b90388eb24876683b259fea5c8c"],["/2022/02/26/ctfshow文件包含78-117/index.html","cf2a092a49e3420e05ef4e5d8ba7f2d4"],["/2022/03/02/Clash漏洞/index.html","55d2cac9148e81fe7a09a50978ad7dae"],["/2022/03/11/流量分析之题型解析/index.html","24660d8ab80248a5052256873cb4ebce"],["/2022/03/15/ctfshow命令执行/index.html","306408243a24543c7e08e9e493f6d54f"],["/2022/03/22/CGCTF/index.html","3c1ee369a973cd4db6d738820da0b109"],["/2022/03/24/ctfshowxss/index.html","b9f427242907e47b3abfb7bdec8ed1ea"],["/2022/04/04/黑盒测试/index.html","10776f65454d939606cda1541ececf99"],["/2022/04/11/nmap/index.html","fd382d2877ccfece400aa86d052dabd1"],["/2022/04/12/渗透流程简要记录/index.html","4f431d381a71bd03eb907f33847c5ea9"],["/2022/04/12/渗透测试之攻破登录页面/index.html","953095cdbfeb6fbeff86802aacedbb0e"],["/2022/04/14/xray扫描器/index.html","370ecbcfe906d310b12506ad6a37fcb5"],["/2022/04/15/ctfshow反序列化/index.html","a8b9c6bad167e642c80afa6d0ecf6cb9"],["/2022/04/26/渗透测试实战/index.html","a0a96d48c11b25fc378c11e30a9abd06"],["/2022/04/28/sqlmap教程/index.html","a5fdc945c48c28afb0305a02b2289b0a"],["/2022/04/30/认知文件上传/index.html","4f8c54cec900e8508ea41defdb343e7b"],["/2022/05/03/nahamcon/index.html","578bcc172994349efe615b0c1a63fab3"],["/2022/05/15/awd/index.html","002d1694c13152e928365f189218cbc3"],["/2022/05/22/DASCTF/index.html","a76b5c00687855b654d763a7dfb5886b"],["/2022/05/27/520/index.html","5d437355f8609ad0cd92fe6a270929e4"],["/2022/05/27/ISCC2022/index.html","524f3512f8628555ac131c5d994595cb"],["/2022/06/01/第五届世界智能大会/index.html","df5585b828968e1aa6fb05ce492e2b3e"],["/2022/06/04/SEETF/index.html","43370fc0d027576f822bf77398c2f053"],["/2022/06/04/bcactf/index.html","609c2a61f0cd5916e3073b878d25ac36"],["/2022/06/05/BSidesSF CTF/index.html","72da324540a1304539462bbd196740d9"],["/2022/06/07/Docker部署web题目/index.html","3da3775d9eb407da79b0381f13983714"],["/2022/06/09/利用oj搭建C语言考核/index.html","9f9e0eba1ccc24d00cfe879f72d6a024"],["/2022/06/13/限免题目/index.html","54888878096cec985c0b0683d6048496"],["/2022/06/14/钉钉rce/index.html","44010d6dad61b4c1a6971cf36ced9fdc"],["/2022/06/16/内部ctf/index.html","50161774935d4eb9f6c4eee3b46edc3c"],["/2022/06/25/攻防世界高手区(一)/index.html","5fee3837500e35392c20c2f36c6a0a28"],["/2022/07/01/两小时AK赛/index.html","aaf2453f2686c475c98b01c8132908a9"],["/2022/07/03/鹏城杯/index.html","de4510d3d67ba3d0ccfd6da075cd0747"],["/2022/07/04/XXE/index.html","f76b7ed424baa761cb6056cc89faea86"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","15311ab4dc5fc65a59cb10b54e415f62"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","06676e5379b6f253af4bde76dbff0a33"],["/2022/07/08/chinaz/index.html","e744046e2fda3cdc949f2584ef00fd3a"],["/2022/07/09/蓝帽杯初赛wp/index.html","10089addba9c55e0193064148ebf02ea"],["/2022/07/17/NepCTF/index.html","a65e253211433ac9ad955d3d98051625"],["/2022/07/19/2022ImaginaryCTF/index.html","2fb130b7ce11e14a143aa2767c9a7727"],["/2022/07/20/局域网攻击/index.html","6551c7ce7f5ba0085fbc21817be1186b"],["/2022/07/22/2022BDSecCTF/index.html","5702075a7f020f5a4b09f4a4f6d806b9"],["/2022/07/25/DiceCTF @ Hope/index.html","5057ef6df6067e408002d4f6242b249d"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","730bf94d2fa4561a61fc8a5540dbb536"],["/2022/07/31/TFCCTF/index.html","f9562cc08649a071337d0934d0a61327"],["/2022/08/03/NSSCTF/index.html","c3f37a9be8c01d76f4ce8867d7ba1be9"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","2a6f0b6e691ead142ff166b40f8897e0"],["/2022/08/12/T3N4CI0US CTF/index.html","704cee25a5512d3c6d7c70e5949f0c19"],["/2022/08/14/SHELLCTF 2022/index.html","5f0896a170f9f6bb4c0599f529a2375a"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","8c2c3532f85aef83b50a7d469af4e025"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","3765276f897d24c3b4c9299d37603929"],["/2022/09/16/柏鹭杯/index.html","a3048b0b540f172a340a5af1e112b86e"],["/2022/09/20/HUBUCTF 新生赛/index.html","d2f57b3ec8c156d7bdc12c9badfed3d8"],["/2022/09/27/NewStarCTF/index.html","d7e5b2f145cd8c5aec56a5f361299750"],["/2022/09/27/bugku渗透1/index.html","b22d403f407ef896aafb3e5bf5c6365a"],["/2022/09/29/tp6漏洞/index.html","f04ecac27f1bcc6eb2cd9c403aabd167"],["/2022/10/02/SWPU NSS新生赛/index.html","b4c789436e465717f096a535e241b966"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","64c686041fede9201bb44cb5203642ea"],["/2022/10/27/Moectf西电CTF新生赛/index.html","6f5a3bf935e7dfeb47ba3e088eba1e75"],["/2022/11/02/HNCTF/index.html","e88bf9b1ce3065d2dddb727826e04c8f"],["/2022/11/04/2022工控CTF/index.html","bd6f0f1764c88c403440ed489dfca3f4"],["/2022/11/21/极客大挑战2022/index.html","0f3887606089f572d683467bf3c53e3c"],["/2022/12/05/TUCTF 2022/index.html","f51ae5ce37315e92e7d8a55687fba0e8"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","052afe9c62ef03839f6cf6bda49c6cc1"],["/2022/12/18/金盾2022/index.html","ecca82e921efbbf065c9ed7000aebcbb"],["/2023/01/01/CATCTF/index.html","b69d194714e148ca914c6f44c2c0e07b"],["/2023/01/09/RW体验赛/index.html","d7caacd8879deb6ce178a5d4ecbc91c2"],["/2023/01/10/铁三/index.html","1cc8e2e9a002ac5cd443497520e51879"],["/2023/01/16/Ugra CTF Quals 2023/index.html","59b760c50d68af7b5bf9544aa169d9e8"],["/2023/01/18/山石2022冬令营/index.html","b03332fb2d9730bdbab746d763ea3182"],["/2023/01/19/SICTF/index.html","61de28939a186f8d62818de9ee963616"],["/2023/02/04/2023西湖论剑/index.html","f4591c38854c461667e654916e96333c"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","4ca4629242829bb64e3fb844c2c364ec"],["/2023/03/04/公安/index.html","88eeaf9418b55de1837e8726005b459e"],["/2023/03/07/mysql之udf提权/index.html","9aef00a74d3e9c57cc0d97211350e843"],["/2023/03/07/红日靶场练习/index.html","91e37d78ab8e566e16c0feddb70630b0"],["/2023/03/27/NKCTF/index.html","b451a406168facddb44d442449cc3063"],["/2023/03/31/楚慧杯/index.html","fb209424c3322b69954550b2d27032e4"],["/2023/04/23/HDCTF2023/index.html","9fa4c7f0c5bd91d43637f46cf88e2c3c"],["/2023/06/01/2023CISCN初赛/index.html","78b06b4a1585ef69267643d2c3edbb8b"],["/2023/06/28/2023CISCN[华中决赛]/index.html","fa221313a3478da7dafa8994304dec0c"],["/2023/07/10/CyberSecurityRumble Quals/index.html","7145cd9d8cbdc724a4d34ba19b142d6f"],["/2023/07/22/2023BDSecCTF/index.html","86083ad4b557e66fdc3b5f5be36f4553"],["/2023/08/07/SQL手注小记/index.html","3b726f6d272f9bb31479fe0b4567c208"],["/2023/08/27/2023陇剑杯/index.html","805eabce28d0dfa7864890220cfac3a9"],["/2023/09/17/2023蓝帽杯半决赛/index.html","36c788955da3cb1070f2d2198bf2c123"],["/2023/10/23/对于多层代理的研究/index.html","7f3ba06e426dc087a818d66355122fe0"],["/2023/11/25/金盾2023/index.html","941d5a96bbe640655202f88510230197"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","b99a06e55b78ca4d57613ae3ae404acf"],["/2023/12/18/2023强网杯线上赛/index.html","3f71bff73aed88868afee2828a00c590"],["/2024/01/08/基础ROP/index.html","06a71929600077ed9975be404ce592e7"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","86d8e592e29b552e8ff19c5667258a07"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","80cad1b4cbf312599e3b11d43331777a"],["/about/index.html","21416bb51cb0cdce696e5227b80839aa"],["/archives/2022/01/index.html","734c24b0d368900517723e3934f9319f"],["/archives/2022/02/index.html","aeea3f0905cb8b8f64c1968752575059"],["/archives/2022/03/index.html","b378dcc20c2fb2155a01cfb26661ffce"],["/archives/2022/04/index.html","78b125d734b249f3185ae0500de8ced2"],["/archives/2022/05/index.html","0e13b00882cbbe153d909e4cf84aee9c"],["/archives/2022/06/index.html","750307cbf59e8a2520ec68d80591eb13"],["/archives/2022/07/index.html","0169ccc4c1222bfa08e6f7f3505d14ae"],["/archives/2022/08/index.html","5f2df1101b569aeddfbbcbbc9ba55986"],["/archives/2022/09/index.html","1282492b1a22a6f5d1fe39ed5bdaacfa"],["/archives/2022/10/index.html","2b00b4c5c64a59322c54e92572822d7c"],["/archives/2022/11/index.html","bd6ea4186d9bc178e72d0134c8b6e683"],["/archives/2022/12/index.html","e3efb80b84c6085668040c6cc7ae8ce7"],["/archives/2022/index.html","52589ecc207d53e0ac20810d3d85b006"],["/archives/2023/01/index.html","10789b42843446f88333f578ea0c7a68"],["/archives/2023/02/index.html","e3bb370b609e79a790c00d2851203ea9"],["/archives/2023/03/index.html","d40a1d83a1a14275debadfaa440d1e73"],["/archives/2023/04/index.html","a68c8cdd1dc4e75ea3001eece77d069b"],["/archives/2023/06/index.html","93fd7baa8ea2aecc03138bf6bc41af6f"],["/archives/2023/07/index.html","c48ef10b6bc8776f0d8ffdcbd4d54ac0"],["/archives/2023/08/index.html","b2b857d4969a2d90fa27f2e1d3a08f52"],["/archives/2023/09/index.html","cadf7229801af247ed16f1c04ca1a6ab"],["/archives/2023/10/index.html","3b826ddc1d4cec12dcdefe26da24c25a"],["/archives/2023/11/index.html","480a91e33892a123b3da42dba2b406da"],["/archives/2023/12/index.html","45294a3187b81b865be31d641b8a1500"],["/archives/2023/index.html","3fda252c00459e6f88766143d191b898"],["/archives/2024/01/index.html","d37b3da034049018435679ede6f30b85"],["/archives/2024/index.html","57204fac9704e6e97e17b4c29106df10"],["/archives/index.html","aa093af6b0741664daaaa07d3a9563dc"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","0f2ced85cbebba8b9ef42403344cf36c"],["/categories/CTF/index.html","564c8ac6ecc9fdb5f7171b84ec5a12b7"],["/categories/PHP伪协议/index.html","0b0dc6a109ec9bae5906bc26fe6726dc"],["/categories/PWN/index.html","7223ddcf4e70924183dd3c28ddf46794"],["/categories/RE/index.html","851c8b5970503e4c7a729aaf83a4b0d8"],["/categories/Web/index.html","4c2f5426f4b391d2a2ffffa3c170a46a"],["/categories/awd/index.html","8e36e034cc143ee5ca29c7778cbf53ed"],["/categories/index.html","01f392edc999cc1b4f301339ff5c444b"],["/categories/misc/index.html","b3621cc6d56b5190767ecb56677a2203"],["/categories/sqlmap/index.html","bf9034f4b3ba10b5e1b969cdb8f1ee37"],["/categories/博客相关问题类/index.html","3982a79f7fc32c4b32142a0d481ac071"],["/categories/局域网攻击/index.html","dc4642873360e55c4a6a86e5bfdafb36"],["/categories/心得/index.html","660e5876906ddac99d55c1c1e8912dbf"],["/categories/流量分析/index.html","e6e284549e9a63b4c544e0d29dbbd3de"],["/categories/渗透/index.html","808b68b0a28d88470655a614c79f9f10"],["/categories/渗透测试/index.html","561d5bf7c2fc695a8b1dedd4433c0c81"],["/categories/渗透认知/index.html","87aee234246f8b45993db0717eb3884d"],["/categories/漏洞复现/index.html","ec8e44fed36880ad43d9deabe4782794"],["/categories/漏洞测试环境搭建/index.html","3a57b0d209523f4505b073e3a71b2929"],["/categories/赛后复盘/index.html","ab998ed5e8364045cb2b77f8bedfefa5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","3cbf626ff5ca0de50b4a871d0bb0a939"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","3f92e97b77b68a41a10ab14a8d59701d"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","8d2de480617f4decf639bc88eaa046b3"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","75099271072dd6f891e0be6337920f50"],["/page/10/index.html","f7aace177390d9d96d80e9563958cf5e"],["/page/11/index.html","fff0b0b94d1275e594c05b1ee7d1be51"],["/page/2/index.html","a4c97de7c13818d47df2bf6d61970585"],["/page/3/index.html","66a5b501ae962d38d13b148fd3bd60c1"],["/page/4/index.html","cc4d84cb79c6d43129f959d74ec59641"],["/page/5/index.html","c0595ed86cf6902711249020cbfeed5e"],["/page/6/index.html","bf1753dc9f6028ba0b2b9675bfc6a625"],["/page/7/index.html","3ef29c5156b55df43ce20dcf0e43d6a5"],["/page/8/index.html","9c0b47bb7b62758f54d7c095548ddcec"],["/page/9/index.html","1749fc6040c43e3d7849d62a90d0ffcc"],["/sw-register.js","769cb7d2f6d851c35638bc99907171dd"],["/tags/C/index.html","15b170dc56e20841327b4c6f8cadc258"],["/tags/CTF/index.html","22b98aaf1691a61a90bc5a19afcd41a7"],["/tags/HTTP头部信息分析/index.html","957595b7dc712453434ee0f24ea80ffb"],["/tags/PHP伪协议/index.html","47028399b5174403f78e2c76474ed04f"],["/tags/PHP特性/index.html","a5001db9b3fc8ef130efb1a6281809d9"],["/tags/PWN/index.html","07ce1750fe00cc0388e8fe1279945989"],["/tags/RE/index.html","3928016c9a018bf449dd7d30ba16671c"],["/tags/SQL/index.html","c4dfc2dc05d4e77924da752f670c5e25"],["/tags/Web/index.html","32020a29dbcfafe8c619ad532b1629ed"],["/tags/Web工具包/index.html","620e312fa0f69428aef1037bf186a372"],["/tags/awd/index.html","b8e2fee5f70cccacbe698c7abeabc10e"],["/tags/ctfshow/index.html","e6c832866c50a4dde022468255986b52"],["/tags/index.html","e8c035b2e806e277508447013c19bfcd"],["/tags/misc/index.html","82c425415d8f0dea199f26bd70246161"],["/tags/next主题失效/index.html","8943140e97614e343293b25f9bb762d1"],["/tags/sqlmap/index.html","de8cec79288136d273c1ada804726e9b"],["/tags/wp/index.html","ff6de2e028e3bc09f491872ee421d068"],["/tags/xss/index.html","8dddb9c81ea85b1cbe601eab7e50079c"],["/tags/xxe/index.html","5b0cffedca98032a349b460af2be392f"],["/tags/不蒜子不显示/index.html","d2e5032e90e4ba1ec6bd570abdd8250c"],["/tags/博客/index.html","f32605f957ae49256556f45b2e5e8e87"],["/tags/博客主题优化/index.html","4d29e1189b66405a6961f1c1fb55c364"],["/tags/博客死循环框架问题/index.html","ba8390e503a27d94ba0d83f6084757be"],["/tags/博客部分问题解决方法/index.html","df50b166d33c5b177cfc9b7cd8d61c22"],["/tags/反序列化/index.html","84bfed519fdb4479b998bcff82744903"],["/tags/命令执行/index.html","4087df98213e26f8ac9355ff60e98b90"],["/tags/局域网攻击/index.html","0a1066ea8fac11edf2c239ce7ae53206"],["/tags/常用指令/index.html","2507d0b7a35f0a1c323a8b3bd32a3e67"],["/tags/心得/index.html","64a649383dfa9a9881f25248e61ce00c"],["/tags/文件上传漏洞/index.html","143d3c40410a8eab6135a5ebe9492d42"],["/tags/文件包含/index.html","c2b091e0aa1c0e9d89df2f9c3f48e69f"],["/tags/流量分析/index.html","861fe6c7b6569cec39a63cff7d4e61d5"],["/tags/渗透/index.html","5927a58a54b509cc6e2f98b4f143856f"],["/tags/渗透测试/index.html","e74bce38d5cb10110721e7585468b435"],["/tags/漏洞复现/index.html","fdab832ee406aa5de7be0a54a7aecc31"],["/tags/留言板/index.html","52b270264b1efa244d1926c68e08ce75"],["/tags/赛后复盘/index.html","8e31a8f903a1009af8d63c69db1f36a2"],["/tags/黑盒测试/index.html","c8277eaaddec1c086c6ca82118bb0803"]];
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
