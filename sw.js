/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","a4fce7aa39b010f7dac6d1189c2300f2"],["/2022/01/11/博客制作遇到的问题/index.html","ff963c50a1394e48b9510cd4722224a5"],["/2022/01/15/C/index.html","1b6e93642dc1ee243d198ca8f6c68e95"],["/2022/01/18/新版next置换/index.html","ab286651583cd5c7fe92a7115fdd2cd6"],["/2022/01/19/不蒜子相关问题/index.html","1e4351d11daaa317c96f3593fcb692ec"],["/2022/01/19/框架问题/index.html","13265bdce34ab33709bfb7cc86ca92b4"],["/2022/01/20/ctf之reverse/index.html","cac05a76f4b9ca1eaa0f20285fff551c"],["/2022/01/23/misc隐写题目总结/index.html","98bca480e11918bab02297cec861cc14"],["/2022/02/01/684/index.html","2be7520d184f5a5d6d4d203587608d35"],["/2022/02/03/留言板/index.html","b2d5e451b5e5424b9c5e5a30beb17635"],["/2022/02/04/SQL简单注入/index.html","ba5b6edfc27d7a32391f2252cdb50267"],["/2022/02/05/最全的HTTP头部信息分析/index.html","2e00c3a84d1f90ea86d0c084488c25f1"],["/2022/02/08/ctfshow文件上传/index.html","5c7878b5a1c169f0b2aa305e580820d9"],["/2022/02/08/常见密码类型/index.html","af217ba7293131b7070578ba5ef86cc4"],["/2022/02/12/VNCTF2022WP/index.html","4042c6883127c92b6f7fcd9e13382a6b"],["/2022/02/20/ctfshowPHP特性/index.html","3dee23d928ad95160765f87f597213ee"],["/2022/02/25/php伪协议/index.html","3ad295debecfc4cc46286975f26e9169"],["/2022/02/26/ctfshow文件包含78-117/index.html","5fe5d4bf43b510d739510baa282085c8"],["/2022/03/02/Clash漏洞/index.html","b6d3b85278a417307a37c14936eb5340"],["/2022/03/11/流量分析之题型解析/index.html","998f413d97e8494a5c9dc2eebb4760c4"],["/2022/03/15/ctfshow命令执行/index.html","8fcebd0cd2b80112101aac2b1e4ccca1"],["/2022/03/22/CGCTF/index.html","a929eb1909adf00da967f26fd662978c"],["/2022/03/24/ctfshowxss/index.html","a0e1f3c12aba73f8c3e12fa00f099a1b"],["/2022/04/04/黑盒测试/index.html","173429508b65ccc2adff29793741bf05"],["/2022/04/11/nmap/index.html","dc8bb5256e47f2f1aee6e7a9a6530522"],["/2022/04/12/渗透流程简要记录/index.html","0d8951105715e4af88cafc30dc2e9956"],["/2022/04/12/渗透测试之攻破登录页面/index.html","c20ecb17f48995a64fd29d469f957c8f"],["/2022/04/14/xray扫描器/index.html","8d207b24ee89d32591aec7beeb5c58ac"],["/2022/04/15/ctfshow反序列化/index.html","51c763590482a6927d98cb9870b1b75d"],["/2022/04/26/渗透测试实战/index.html","b1be6bc399156a384f1fdcf76bad1ce0"],["/2022/04/28/sqlmap教程/index.html","24c5a2f3aecb2d72255520f1620f6828"],["/2022/04/30/认知文件上传/index.html","c1ac9a8288c900d2dac2225decef9d89"],["/2022/05/03/nahamcon/index.html","52a06c470136bfb7750ac3cf63a99829"],["/2022/05/15/awd/index.html","2676ee6710c3b69955831223b9c404f0"],["/2022/05/22/DASCTF/index.html","85845dba01c99923c7bca59264be4147"],["/2022/05/27/520/index.html","67475510faed5f43189207e4cbd2d268"],["/2022/05/27/ISCC2022/index.html","fbfe9ee59f95ec7d3ab60fa38bfeb337"],["/2022/06/01/第五届世界智能大会/index.html","65b7199f3ac46fe4c97f0d1d94ac053c"],["/2022/06/04/SEETF/index.html","9c53903cd71d2672624a2ab4d15f9a69"],["/2022/06/04/bcactf/index.html","66ac0d3483ba89540e4daf3115f8df8d"],["/2022/06/05/BSidesSF CTF/index.html","60bbb7f03faa1f64796c2e23014ad7d7"],["/2022/06/07/Docker部署web题目/index.html","0f08ddfff34265c950681ecc4065147d"],["/2022/06/09/利用oj搭建C语言考核/index.html","56e4b2be6cc221e55bda63e59205d25e"],["/2022/06/13/限免题目/index.html","ccf1a3bab87e3e980a5a54972e0a3945"],["/2022/06/14/钉钉rce/index.html","795edfbfedf918c8570946594776da56"],["/2022/06/16/内部ctf/index.html","8897cd5280b2cd2c86388de26f1e8d39"],["/2022/06/25/攻防世界高手区(一)/index.html","f360c9bdbe16031b741e96e50c1d8e9e"],["/2022/07/01/两小时AK赛/index.html","f735118126a88a88dfc7b5205f7093a0"],["/2022/07/03/鹏城杯/index.html","a80dab5d09268ef0f1e9b35219f75a59"],["/2022/07/04/XXE/index.html","4fccd546f8064a1e4792fb4416b21d8a"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","cba4e12defcefcdf2c05ace3cdaeb9e5"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","8e1239f2e1373217f60b3879eca3ecca"],["/2022/07/08/chinaz/index.html","bd3813cf59939d0050ff8e9af9363c32"],["/2022/07/09/蓝帽杯初赛wp/index.html","34837771a9323d124810b602d681ee25"],["/2022/07/17/NepCTF/index.html","9006efa99f0fec8c5b1ef6b9dbb17554"],["/2022/07/19/2022ImaginaryCTF/index.html","bd4cf0e0432968d888cb42a15369c1b5"],["/2022/07/20/局域网攻击/index.html","876ee17d8567a27c4381ea9c60b0fdea"],["/2022/07/22/2022BDSecCTF/index.html","343393ac5c90d2b0559f88de70e4bd3b"],["/2022/07/25/DiceCTF @ Hope/index.html","6da418ff967aded596597f48643cfb97"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","284906ce6cf0d1c832344562c1d5be03"],["/2022/07/31/TFCCTF/index.html","ae62e0e677421d435566a18eac3c1d7a"],["/2022/08/03/NSSCTF/index.html","638461dbfcc7236712dbf1f38ccd0cab"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","1372e726525b756b026d0106d73f5056"],["/2022/08/12/T3N4CI0US CTF/index.html","c40ed9f0f8e4edb1c30ad5c9b9ebb0ac"],["/2022/08/14/SHELLCTF 2022/index.html","9676ad6f3699f133e3fe29625d864d2a"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","0be64a9b96644dba3462ae9937ad86b6"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","630332e2715c61ce7c00cf47d7f6e250"],["/2022/09/16/柏鹭杯/index.html","b99a2306b5e59bb04c167a23481916db"],["/2022/09/20/HUBUCTF 新生赛/index.html","a15a7226c9565a898a2f8ea9b62e9b5c"],["/2022/09/27/NewStarCTF/index.html","7e5401d7793ec396dc63ef39b4326146"],["/2022/09/27/bugku渗透1/index.html","6f5d167f1191080c65c69eed568ad645"],["/2022/09/29/tp6漏洞/index.html","bb9c92fddd99463c73ac74ed5f70cc1e"],["/2022/10/02/SWPU NSS新生赛/index.html","57425661ea137f632330172d07eb4735"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","cf809073e3d7528fd17cfda72b3d4a53"],["/2022/10/27/Moectf西电CTF新生赛/index.html","c4394fd22b5a0d7c8a45a2d17d188cc0"],["/2022/11/02/HNCTF/index.html","98e250999385056c32b4e6830683bc2a"],["/2022/11/04/2022工控CTF/index.html","39ca652a3d6b52987bff5e0a1effc77a"],["/2022/11/21/极客大挑战2022/index.html","88b3fb23c9d1948f4cd7c8047c0f0684"],["/2022/12/05/TUCTF 2022/index.html","5894c96bfd2d1f5e0b07f5ff4704988a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","3913914afa0c7f5a6c14ff5fe5db64cd"],["/2022/12/18/金盾2022/index.html","610fc3dad4b3ebc3c8b821bd7fe96fef"],["/2023/01/01/CATCTF/index.html","85e3cb977fb43480a3b7eb51426dcf11"],["/2023/01/09/RW体验赛/index.html","53c086ea33186310031100a78f18ceb5"],["/2023/01/10/铁三/index.html","4be2d717476c7ba6d1fbf21cf4c5dfe6"],["/2023/01/16/Ugra CTF Quals 2023/index.html","458e0d97f307c0037d3d2deaf8549ddd"],["/2023/01/18/山石2022冬令营/index.html","f011d4782494a7d2fdbf5bf479646ee6"],["/2023/01/19/SICTF/index.html","43da98b472f78386250600777c0b03fd"],["/2023/02/04/2023西湖论剑/index.html","88e7de0a42f852e425beae7931e6dce1"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","dc5f569060bb2ef6d1ad933cf8af9d0b"],["/2023/03/04/公安/index.html","d845d6896dfd86c7163c5b5f7c5311f6"],["/2023/03/07/mysql之udf提权/index.html","ee5f54e752104e1a579b546a077bf7b1"],["/2023/03/07/红日靶场练习/index.html","e1528d2603c742cd44e47901c0fd2c8d"],["/2023/03/27/NKCTF/index.html","b44613e2642bc78fe08cc802cf271f47"],["/2023/03/31/楚慧杯/index.html","f5c48a0e95f69631b25c4aa271e2d002"],["/2023/04/23/HDCTF2023/index.html","d10e8d7d27d47a8923b39d404dfc9711"],["/2023/06/01/2023CISCN初赛/index.html","dccdb9a95aceeab0a26aff0a3bddb491"],["/2023/06/28/2023CISCN[华中决赛]/index.html","c6f5386553abf3e02e76e40d615359a1"],["/2023/07/10/CyberSecurityRumble Quals/index.html","a7444cc92e11f4b410bca32166847d48"],["/2023/07/22/2023BDSecCTF/index.html","019f83c01d435cda10ba6c8be8d0bb84"],["/2023/08/07/SQL手注小记/index.html","8ff887159f6abf007c63469de5f1f697"],["/2023/08/27/2023陇剑杯/index.html","74295a1cf32e2a265746aa799fcc8c17"],["/2023/09/17/2023蓝帽杯半决赛/index.html","44ddbe11aa8ddab4a0b62a89e0f1eb53"],["/2023/10/23/对于多层代理的研究/index.html","3b013c9ae6e57951e2f0d113c2e626d7"],["/2023/11/25/金盾2023/index.html","72d373ff972659f09b51b26e6d9b77d5"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","18fa1c723605ee3bb25d91dd295940d6"],["/2023/12/19/2023强网杯线上赛/index.html","4777487f63bdb567537c9ff936976c3d"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","fd5b1d0a60d24304febefa4ba67db38e"],["/about/index.html","112d220f5eafcb907cb7a3975eecee24"],["/archives/2022/01/index.html","afd9d99d6f13b03e4c5ed13273d1558e"],["/archives/2022/02/index.html","60467aec81745271a10059abc7519de7"],["/archives/2022/03/index.html","9dcf08ddbd30ca4df8fb4111046f52b6"],["/archives/2022/04/index.html","d2a9150ecb5cb2282a2c5bc418e356cf"],["/archives/2022/05/index.html","5d89b48ddfddfffaebe43f3a6215c81f"],["/archives/2022/06/index.html","059656a1f0131a3d9d961bc3429ece5a"],["/archives/2022/07/index.html","282f2ab1f8f4381aca0428d18099cae8"],["/archives/2022/08/index.html","6dd7385c09b007e251d5384397d024b0"],["/archives/2022/09/index.html","8fb98772a76fff97eff01f3085a098e4"],["/archives/2022/10/index.html","348c980cf112470da475d768dbee5ca0"],["/archives/2022/11/index.html","5df05812f07158917d933c0000ebb3f2"],["/archives/2022/12/index.html","db5c1bff7d4a509dc8244954ab9bf7f4"],["/archives/2022/index.html","25989776663514f8f71943211e3d42c4"],["/archives/2023/01/index.html","700417026eb7a6b9337a6b3c7f52a06d"],["/archives/2023/02/index.html","0c4dd55ff3ab59c2992f74b365db40b6"],["/archives/2023/03/index.html","c7c35efb68bec21b49d205470fb3d494"],["/archives/2023/04/index.html","3fb0861469862331513e7f9d4909ee59"],["/archives/2023/06/index.html","862baccfd50cce89ba419cb9daadd36b"],["/archives/2023/07/index.html","db2cae560b906951ebff417a8b545daf"],["/archives/2023/08/index.html","6b368f8ffc933ece94f03263830437de"],["/archives/2023/09/index.html","fd7b09986e0615bb5cd30e39e698a58d"],["/archives/2023/10/index.html","b55cf89876a7b695f126a4d900e0b07e"],["/archives/2023/11/index.html","9c94e94dd148ff3fe8b2aea38937349a"],["/archives/2023/12/index.html","ae29dc6544e73529a231c4c038ff7364"],["/archives/2023/index.html","4c67abee3b5489886aa18a651f4fcf47"],["/archives/index.html","f2be80b0ed4059e561c62e794e6bd7de"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","f885c608c202f37a8272113eaac5725d"],["/categories/CTF/index.html","3d4c212bb06424b6d4826f5c83b7adcd"],["/categories/PHP伪协议/index.html","d45b236711900015760dbd69237dee13"],["/categories/RE/index.html","179be710dbaeacc7c019a77ed62cc281"],["/categories/Web/index.html","b509e5b4fbda4b1b8b884792ff82fde4"],["/categories/awd/index.html","9bb8f1e17b92364a40ab5104f20331ca"],["/categories/index.html","eb9fb118a14da7ed01c056520984f814"],["/categories/misc/index.html","02d99ddd3773daecc7082929b092716b"],["/categories/sqlmap/index.html","d35183a78b5d9344908def0bf55717de"],["/categories/博客相关问题类/index.html","736f2c2568e8ece202b8b4cce74b127f"],["/categories/局域网攻击/index.html","5a0b48b6daf96c2592d54ec23cc5a472"],["/categories/心得/index.html","e06e578eef676ff5028923033f1974f5"],["/categories/流量分析/index.html","e8011847bdd2362f3b5a1074fc0acb91"],["/categories/渗透/index.html","b89d89960f0268a05d93241eee175c72"],["/categories/渗透测试/index.html","d25c75e24121243000e320bda2786aab"],["/categories/渗透认知/index.html","0b5e61f6e7463f827e754dabb731fe3a"],["/categories/漏洞复现/index.html","132ca8bbc5af6e803d0d911d2c1218e3"],["/categories/漏洞测试环境搭建/index.html","58f7c0ee41cab48d05c2cb79fe9861d7"],["/categories/赛后复盘/index.html","936b21c9884e857363339c823c6f4021"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5fb311c31468e225d3898805f27334b6"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","6a121b0231f5533305e978223d06674a"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","bd6f01554f4af480b9a7e4ff045aa3d4"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c9cfce92d1a181e36ce9e187e37135b2"],["/page/10/index.html","16268ee0f61b36ef1c7c0fe4c69ecb8a"],["/page/11/index.html","ae24d808be32f7ea27f4619b5fad7212"],["/page/2/index.html","96a26163a89aaba858f5e94a74c6ae8b"],["/page/3/index.html","a710c5c5db58945004e17f7306d717fa"],["/page/4/index.html","6830f2fc590b3d2559a30dc725c770e4"],["/page/5/index.html","d7fa6d20560d4645b98c24563ca3387e"],["/page/6/index.html","a5854703a46386c83a87772beea898bf"],["/page/7/index.html","3a1a6e25dbbe9cef4e9345853ed8168d"],["/page/8/index.html","7c303c88302e32ff86f9c32346cf7f38"],["/page/9/index.html","bf0a1b7972cf94f3cbb5648a412fa762"],["/sw-register.js","29af8676d33190217009c26e45df6ad0"],["/tags/C/index.html","b6ef01e1b482defbc6f6d64b842da4da"],["/tags/CTF/index.html","2a78cc68def6736e3f41265f93d3ff87"],["/tags/HTTP头部信息分析/index.html","6e9cae521ef8d1a89e4dcff33667f2df"],["/tags/PHP伪协议/index.html","d5146fd73fa90f2e8634ae2011d970c5"],["/tags/PHP特性/index.html","13aca5d36f5c0e98d8c2ad946c6f56a8"],["/tags/RE/index.html","33d6a455c201d0b64100a0eedfa5c4a8"],["/tags/SQL/index.html","e3257468482d3c08ef9de054a4b7228a"],["/tags/Web/index.html","8afc9a9725c114e9e3e7bbc3e37b4efa"],["/tags/Web工具包/index.html","805a187d91b180474c66b33f9ec1e360"],["/tags/awd/index.html","bb9c2f45674edaf00fc0135700112e6f"],["/tags/ctfshow/index.html","7220ae024c6b1844cb3989b0a2ab9e3c"],["/tags/index.html","2bead2b3838776e021e79a673f9fd58d"],["/tags/misc/index.html","f88ec746f452d53ac2a9a86c3cceff11"],["/tags/next主题失效/index.html","f3173bb4f6cfb2be87977b2b8c626443"],["/tags/sqlmap/index.html","7a7b86da57e5e251c07cadab988c72a6"],["/tags/wp/index.html","e1782477b16acb659527dac7bd0b3274"],["/tags/xss/index.html","c2dccfa6ca37b776b55c8b6cb0fd4572"],["/tags/xxe/index.html","776b0380361fb1a2accf0ac0a9c3ab54"],["/tags/不蒜子不显示/index.html","a32b9743cf058a97eb6248d2717bf921"],["/tags/博客/index.html","84411170c6b48ce000bdf138cbf20656"],["/tags/博客主题优化/index.html","1c93cd749f819383f947d339dd25eb0e"],["/tags/博客死循环框架问题/index.html","efc1e64d7f0c4897cd7e1312908d25c7"],["/tags/博客部分问题解决方法/index.html","6995051a09110acac96a644826c1edef"],["/tags/反序列化/index.html","769d4b848c14b31a500141b04f7bccea"],["/tags/命令执行/index.html","ee5bef0c36d6a4069b465d7808372054"],["/tags/局域网攻击/index.html","832ba78541acbd356f5bfab0d0232713"],["/tags/常用指令/index.html","bd6f1f7fa58bed199387d34f47aedc41"],["/tags/心得/index.html","5a5d868c3d1cb24be7a754d317beb118"],["/tags/文件上传漏洞/index.html","d34462eed332d9e581fe653d4b98e663"],["/tags/文件包含/index.html","5596b589fe71863c13556f39b2046c71"],["/tags/流量分析/index.html","cb8fec8f6851f645716a833c20423595"],["/tags/渗透/index.html","221d9e191be129cb1c9ad370619311d0"],["/tags/渗透测试/index.html","6f774771e759242fdcfa0be02b280b2e"],["/tags/漏洞复现/index.html","9a367f040d25c05b7f1deb19de23a8c2"],["/tags/留言板/index.html","80494d731e23f9bd992cda0564602053"],["/tags/赛后复盘/index.html","9332cc0f77ef4ca63bd03e736c7b404d"],["/tags/黑盒测试/index.html","4f7873f9929dafc4798156d0819ac872"]];
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
