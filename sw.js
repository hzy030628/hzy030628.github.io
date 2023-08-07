/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","979474ab70cf042c9e1fc8a460d7d48f"],["/2022/01/08/ctf之web/index.html","11c10e86f9174dc153800e4902cda4ce"],["/2022/01/11/博客制作遇到的问题/index.html","820379f3878ae9644d1ef2205f5ee2b5"],["/2022/01/15/C/index.html","aed4b0fb70307057451c0b9213b9f31a"],["/2022/01/18/新版next置换/index.html","dfbe115c95c1c5d7ebe4f322bcc752b9"],["/2022/01/19/不蒜子相关问题/index.html","cff89071b6ea49bc0e77fa5786ade53a"],["/2022/01/19/框架问题/index.html","8b52af6cbd272c9643a56d7d1c673307"],["/2022/01/20/ctf之reverse/index.html","49108f1de0de942d7c3b56969fefdc3b"],["/2022/01/23/misc部分解题软件命令记录/index.html","420888723c9ec76a2f5d44244ec4f58c"],["/2022/02/01/684/index.html","e6235bc84320fd8ac7aadf9f832262a8"],["/2022/02/03/留言板/index.html","25496432199b231c913cec58eaefa95d"],["/2022/02/04/SQL简单注入/index.html","862f071f6960e2bb4e536e8b3934a3b5"],["/2022/02/05/最全的HTTP头部信息分析/index.html","68604c92f99084d76f1ee1ce0435d175"],["/2022/02/08/ctfshow文件上传/index.html","f4356938a3637fbcd066f759d655e9c3"],["/2022/02/08/常见密码类型/index.html","41de648b0a6836409b2a2da4a6558068"],["/2022/02/12/VNCTF2022WP/index.html","8c8dc81134c13f90a746414f720c4622"],["/2022/02/20/ctfshowPHP特性/index.html","54d682d7dffde545998680bb9f670404"],["/2022/02/25/php伪协议/index.html","87168acad1e3664e0f791f4e40047ee2"],["/2022/02/26/ctfshow文件包含78-117/index.html","1509e649d9e41dc73250cf6471103b2b"],["/2022/03/02/Clash漏洞/index.html","d7f733b3014d60047b32fc8019abdaac"],["/2022/03/11/流量分析之题型解析/index.html","52429f088b31b36201d055e052a0b9f1"],["/2022/03/15/ctfshow命令执行/index.html","a3654d5456d96836f1379a15c9e50a80"],["/2022/03/22/CGCTF/index.html","7bc632e6a88600723f684fe137c1a65f"],["/2022/03/24/ctfshowxss/index.html","62d2d1981269a3e2c323164ac4e13ddd"],["/2022/04/04/黑盒测试/index.html","fe040da9824d1f0ebdc3a82c737cf310"],["/2022/04/11/nmap/index.html","13e8095a005c4891ce9d5346f0ae020e"],["/2022/04/12/渗透流程简要记录/index.html","f12e3dac6fce048ecf6e4f0bece73e53"],["/2022/04/12/渗透测试之攻破登录页面/index.html","b3592d4337db95b96332e6a0ca42cce3"],["/2022/04/14/xray扫描器/index.html","0d7cc4e272fe272ea977aadd0c72d058"],["/2022/04/15/ctfshow反序列化/index.html","b09caa45ec021caa826659b1d5e020fa"],["/2022/04/26/渗透测试实战/index.html","10763bfb78de33661cd9ea6200fecd6e"],["/2022/04/28/sqlmap教程/index.html","3862f89eba8e9305ac24b119c87ed049"],["/2022/04/30/认知文件上传/index.html","a028dced8db2961fcf0663e759b8fc67"],["/2022/05/03/nahamcon/index.html","1c5ea32134f6e4bb80739fee9f9ca83b"],["/2022/05/15/awd/index.html","713213e9fb1f27a68d272eee94fa691f"],["/2022/05/22/DASCTF/index.html","2840aad2cc9f5bb2a8e28b5771bc6891"],["/2022/05/27/520/index.html","846310ec2f9995cdbde5f6bc327bdab6"],["/2022/05/27/ISCC2022/index.html","1cef995aa0c43d4a7985bc15f8f6aa22"],["/2022/06/01/第五届世界智能大会/index.html","4f182c74df66a48e82c6ab28d9203c0a"],["/2022/06/04/SEETF/index.html","de45304c9af7671cc6d4ba5abf44b720"],["/2022/06/04/bcactf/index.html","08ec3b59a8958e6a30e83fa9f6051ab4"],["/2022/06/05/BSidesSF CTF/index.html","0b3b0140e2f81fee8d96fa41cfdfb1ca"],["/2022/06/07/Docker部署web题目/index.html","3b90fcfcb04181639685a229499fd762"],["/2022/06/09/利用oj搭建C语言考核/index.html","8d9c27ae923e48f5761227b60fdcac25"],["/2022/06/13/限免题目/index.html","cf4dbb54925720a7a07c02d4d3f08371"],["/2022/06/14/钉钉rce/index.html","5b3b105ea01b08dc7cd2ae6f22a20c0f"],["/2022/06/16/内部ctf/index.html","01cea28cacbaf9378d70605623de047f"],["/2022/06/25/攻防世界高手区(一)/index.html","ec65a4923a2794cd4ec6d01b55adee2e"],["/2022/07/01/两小时AK赛/index.html","2bc7beecdba1506ad7bca9ed365ba72b"],["/2022/07/03/鹏城杯/index.html","6875b76ce40c9ffed14f56c21f428814"],["/2022/07/04/XXE/index.html","a486b7da5497a3b8a66d16a3e25e040b"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","9d5be46e9f09ee0084ee1c1d538bf9ae"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","c37f72c4a19a0dc3998ffbe3117ac73b"],["/2022/07/08/chinaz/index.html","93e83ce35dff22d8c93cbfbad38a6a6c"],["/2022/07/09/蓝帽杯初赛wp/index.html","3daeba5940cf76888da01f0fa3d09090"],["/2022/07/17/NepCTF/index.html","1018538b664d843f6fef713b344064ba"],["/2022/07/19/2022ImaginaryCTF/index.html","e9369e771a3ddc16ffb417fd7d539a86"],["/2022/07/20/局域网攻击/index.html","c7e1715137588c56ed60b7bb9ee58493"],["/2022/07/22/2022BDSecCTF/index.html","61b3efce8fd52fe8c853b80ead3f14c4"],["/2022/07/25/DiceCTF @ Hope/index.html","4a48473d53bd678980e7a4973f4141cf"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","2e459a76d49b2a4339c3488bb9a51e06"],["/2022/07/31/TFCCTF/index.html","f379f89a8c062ca69a207a699371a133"],["/2022/08/03/NSSCTF/index.html","6ca5cf575cde51ced5333e96bdb64b20"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","76c025cef29eb3e6445e820390313f43"],["/2022/08/12/T3N4CI0US CTF/index.html","d6a281b2be7b2379fa35b11beb785651"],["/2022/08/14/SHELLCTF 2022/index.html","bc77fac1e6d7f010adc82ff8fc9193b6"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","716597b4fac90a01566be8ac53ec1836"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","0448bc0a34eafbc3c35da0e6e010ba37"],["/2022/09/16/柏鹭杯/index.html","9866a4dee251d3fffb085319e88438f0"],["/2022/09/20/HUBUCTF 新生赛/index.html","45b15e376f6ee0068a9cfdcfb0800420"],["/2022/09/27/NewStarCTF/index.html","8307c2111ebd789ed867ec40cb10cdba"],["/2022/09/27/bugku渗透1/index.html","719e1afa2014ad3f520dec8d1ebdb90b"],["/2022/09/29/tp6漏洞/index.html","867e6994e51ecd5ff0e51287a28e5dd8"],["/2022/10/02/SWPU NSS新生赛/index.html","7c172e533525e5ae03ac02457b9b8ad5"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","f2d17fd93de14fb561731cfffd905ea5"],["/2022/10/27/Moectf西电CTF新生赛/index.html","d08430e37b288224deeb13037f8fd057"],["/2022/11/02/HNCTF/index.html","f14b851c4e8d156827d65ad000583a7c"],["/2022/11/04/2022工控CTF/index.html","a669d7880a31fcfd6d32c50653708778"],["/2022/11/21/极客大挑战2022/index.html","2377cb31e535e45b37c496dc57e81c5b"],["/2022/12/05/TUCTF 2022/index.html","d1d3308ea9f7770037155ce9a726a2ba"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","94b6fb6c01ebdf28c1f5157cb02c31d7"],["/2022/12/18/金盾2022/index.html","607f9c3aa702d076ba1faad2d2b8dd96"],["/2023/01/01/CATCTF/index.html","4687a99ba6391a0516af572ef480052f"],["/2023/01/09/RW体验赛/index.html","512c2582f407aa1080a59e2b07eb1b42"],["/2023/01/10/铁三/index.html","69b91afe8224002990fbcb40980a9483"],["/2023/01/16/Ugra CTF Quals 2023/index.html","a2b75a144e07d1c952b5e4925b25aa61"],["/2023/01/18/山石2022冬令营/index.html","5726442864dd05bbfaad92344da84acc"],["/2023/01/19/SICTF/index.html","0ce58fb58b3c908790d4f35ec4833c88"],["/2023/02/04/2023西湖论剑/index.html","d40705cf2556a4d82e69b5a63ce3c77b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","a2948b08648cd2bd6dce46e59326ff90"],["/2023/03/04/公安/index.html","57e727c4265c6244f55643cd4072cd5c"],["/2023/03/07/mysql之udf提权/index.html","6910e53ee1146fcc98b7dca38643ead1"],["/2023/03/07/红日靶场练习/index.html","8260c90e496e5f6dd71fa99549705d23"],["/2023/03/27/NKCTF/index.html","b8af4c2756833e3f00700ce63b2ca8fd"],["/2023/03/31/楚慧杯/index.html","7be810781c1a4a30eaa50099022c83a3"],["/2023/04/23/HDCTF2023/index.html","ef46daecbbfe4953c80a04fcdaa20deb"],["/2023/06/01/2023CISCN初赛/index.html","956b5053e53b5637e4af5c147d89a904"],["/2023/06/28/2023CISCN[华中决赛]/index.html","da3d932f2df6062a3fab6d7b9eb54794"],["/2023/07/10/CyberSecurityRumble Quals/index.html","6de0222be4a89b0ff2c877ea7ad6aa1b"],["/2023/07/22/2023BDSecCTF/index.html","036a29b1f926e9d2ccd4d02d2009beec"],["/2023/08/07/SQL手注小记/index.html","41b251133d6028acb03d4abde6fc8080"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","dddbddeba4f5fedb8b7e28cf78d1dd6d"],["/about/index.html","37e8877a4be1b87401ee03d3bc133485"],["/archives/2021/12/index.html","9fdd5e50bdec3a80b04f088e697e748f"],["/archives/2021/index.html","62005b23b26b78c742e7b7cfd2a44b2d"],["/archives/2022/01/index.html","7767e54b0089f6965bb481b98524ffb1"],["/archives/2022/02/index.html","16d1886430fe433210dbb0944a418efa"],["/archives/2022/03/index.html","ac37810a2e39c39dba954e55a04a3272"],["/archives/2022/04/index.html","f5d8e02ec2e300bf12253094de72f170"],["/archives/2022/05/index.html","298d7defe9eb0cf706d0d8bb43bd59ee"],["/archives/2022/06/index.html","2a113b40d202a4fe3b41491c8891410e"],["/archives/2022/07/index.html","a8970ed0c2b1490526d7531a92b1aa76"],["/archives/2022/08/index.html","dfcf15ae25c0e9297cec5cce1726c50a"],["/archives/2022/09/index.html","07a57d435efcd61b73235f28a7836343"],["/archives/2022/10/index.html","37f30216cb5a5b98884065c78772d898"],["/archives/2022/11/index.html","820e948c633c50925b29ca6bb1604101"],["/archives/2022/12/index.html","c2fc0ef11ff4b41cb650bfb9584dbbb8"],["/archives/2022/index.html","87f7b978bfe0cc7532de7788f537e7d7"],["/archives/2023/01/index.html","6403806067bbd012602ebb390e5ae3d2"],["/archives/2023/02/index.html","9347c95122b059efdbcacacddfa6ca2c"],["/archives/2023/03/index.html","30a3d1f159906fef1e07df5bfa5e183b"],["/archives/2023/04/index.html","7614fa6395020c987d24c03252cbb89b"],["/archives/2023/06/index.html","ebf29b4962e421a5eeb137adf2c2573a"],["/archives/2023/07/index.html","126b6bf73b07cba5af5fffbfafee6574"],["/archives/2023/08/index.html","a81fc270f1d47514de532a7599a6aa03"],["/archives/2023/index.html","eb08f7d902b80269c75e41601ced5d67"],["/archives/index.html","fede2f59d4542d0f055488a603cac52a"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","5cca81f091c722039e3e3aa7402f581e"],["/categories/CTF/index.html","ca5c61ed4585268cc92af200ea777386"],["/categories/PHP伪协议/index.html","ffea28782b9f922a40496fff521860aa"],["/categories/RE/index.html","accfd3b6991141795656c5d9cf30cdac"],["/categories/Web/index.html","17171e8dfacd216423021511bba891c8"],["/categories/awd/index.html","09399bd37455cb235bfbb209efcc36ff"],["/categories/index.html","17847487f59130eb359522a5b0146478"],["/categories/misc/index.html","63cfec53ad77d21a7b49440b5c3c0c07"],["/categories/sqlmap/index.html","1eb3319a3961647106951d775999a8e2"],["/categories/博客相关问题类/index.html","fa73dc2c058b2a5ff842f03d0c440867"],["/categories/局域网攻击/index.html","d42760f66ba2069a5bcad3f8d060c86d"],["/categories/心得/index.html","5a6ae98fb7d94515e64fbb5783e9aba8"],["/categories/流量分析/index.html","afeb9893b69d3a29e4c1358cb34e6903"],["/categories/渗透/index.html","e5ea7f6690fa92dbdd386f20b12c77ca"],["/categories/渗透测试/index.html","a4f0011bccceb4b219be481a3d9e04c7"],["/categories/渗透认知/index.html","882032facb2a7b1d0a016bbeb98ed69b"],["/categories/漏洞复现/index.html","8cd195aac13545553ffb4853d2df427e"],["/categories/漏洞测试环境搭建/index.html","b3c564bb5053392b48514653289db2ab"],["/categories/赛后复盘/index.html","e7dde653a171295eb8108d0b14b3d999"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1bcf5cc3682d22b53daf0acdc5d8cd2c"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","1fa3bca6455df2d4f36c1d2648068e3e"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","91330e4311bf7bb906424b53428de58c"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6c6c3009f147b1bb025c31ad8d40216e"],["/page/10/index.html","2df61f2efefddbf451a7f342a953b163"],["/page/11/index.html","5061ccc109cbdd42c312233ee8e2cd02"],["/page/2/index.html","821c999b16581a3c84a2435a0fc2fa78"],["/page/3/index.html","e1472e52b0d4933a633d0063a1e36edf"],["/page/4/index.html","88cb8ecf0b5d49d931e6611f97a5e555"],["/page/5/index.html","89e1fc4de6ea36f8fd60edf55c6ab4ff"],["/page/6/index.html","7f17faaab8211818d8d2832c55d06817"],["/page/7/index.html","0e216577388db040e337ab37a303b9b0"],["/page/8/index.html","7e65dfadefd9d4e724eaddded0bdb122"],["/page/9/index.html","4c8146bec8ddf4bc57cb12590a84faae"],["/sw-register.js","de5c7c898588a75aa03114b4ca6dc59b"],["/tags/C/index.html","41a843b3ab7a6192652d30d3188c1f3c"],["/tags/CTF/index.html","5489f6544cc478582061e4d1042239cb"],["/tags/HTTP头部信息分析/index.html","820ed234c73d315f8cecd2c3c9d834d9"],["/tags/PHP伪协议/index.html","2cde29132065c49ceda24ab7aa09ca87"],["/tags/PHP特性/index.html","47cf39d7eab6fefc3c785379719d4a6f"],["/tags/RE/index.html","0d110c3c359a2cb290d7fac9fe78d2ac"],["/tags/SQL/index.html","989eccc807032297b1bcb7c97f479797"],["/tags/Web/index.html","e4164192b218ccde9531da0c725466ee"],["/tags/Web工具包/index.html","31cf59043fecfd19adfec84e362df61c"],["/tags/awd/index.html","b054b16af584d3f761c0c3555fae6b7c"],["/tags/ctfshow/index.html","807297c8d0799aa2cff9e972ebe212ae"],["/tags/index.html","7d132ea483e2fc329be24b0c02a3480a"],["/tags/misc/index.html","b22c8c77521ff4ed10b9fa5c470f94f6"],["/tags/next主题失效/index.html","e13996e53e797af00987cc121d801e13"],["/tags/sqlmap/index.html","62f9da21d4b9324adc9d7a73c103af8a"],["/tags/wp/index.html","de4f211b1768cce1e2c19375640ada4e"],["/tags/xss/index.html","c0a18971e2279311ad59a3cc330d1ebd"],["/tags/xxe/index.html","6461ca1f53fac297bf2cdbf04937d13b"],["/tags/不蒜子不显示/index.html","f35ef66b175cc5bb91b15124895dff93"],["/tags/博客/index.html","8585995e39eabf658c38478c7833222c"],["/tags/博客主题优化/index.html","a729630c4ebee90603486164f443b345"],["/tags/博客死循环框架问题/index.html","33c89b03a11a665ccaa5be6d07eda22d"],["/tags/博客部分问题解决方法/index.html","b43548de3b960cb73adadc5740bbff33"],["/tags/反序列化/index.html","34997597da10a938888014e393d50569"],["/tags/命令执行/index.html","266c8f5059619c2d79fd476894aeb455"],["/tags/局域网攻击/index.html","e132f0f0aba158d5c40b8589531b0735"],["/tags/常用指令/index.html","9c2d0e7bb8a8bb48c161b1094e0a41fb"],["/tags/心得/index.html","fb77800ac59ec5c19d8a02c4ac58350b"],["/tags/文件上传漏洞/index.html","7d8c4814a8ce4dd0cf33c4d44cca4fb0"],["/tags/文件包含/index.html","3c4c0be7f273d76bac7164abdf5f5be5"],["/tags/流量分析/index.html","5e8a2d44334f1dede936647ac4d53ce2"],["/tags/渗透/index.html","fa9cef6c82e4092a046cf670d8da2928"],["/tags/渗透测试/index.html","731da741d39944984eb2b6d8b03fd0c0"],["/tags/漏洞复现/index.html","298ebf19c3b22b8f2e55c1b9b85b3c98"],["/tags/留言板/index.html","7d667397a206d68c07781df238a9cefb"],["/tags/赛后复盘/index.html","a675caa818d9f49d93a7d6bb66f85e59"],["/tags/黑盒测试/index.html","b52f081832763d6e0b1183e75f7e8164"]];
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
