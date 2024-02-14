/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","b88753e46487e7acd56f0fcc9dd18f8e"],["/2022/01/11/博客制作遇到的问题/index.html","eca14e4d52f801a04c53bf010cbb4cf4"],["/2022/01/15/C/index.html","91b460a7c8197530767474172da919aa"],["/2022/01/18/新版next置换/index.html","528ef06b12ef1d32b95b5bede87e9798"],["/2022/01/19/不蒜子相关问题/index.html","08e2e980a8edfacedc26a6581d3a0094"],["/2022/01/19/框架问题/index.html","6aa4413c5a03b2b551342c0395850d5d"],["/2022/01/20/ctf之reverse/index.html","f82abb14f78f27c5931cd3b67227ef41"],["/2022/01/23/misc隐写题目总结/index.html","113730c9aee08479265837272cfbeed1"],["/2022/02/01/684/index.html","b127da6131170a6383a41a02338d4081"],["/2022/02/03/留言板/index.html","c59d0336c241d1f6b8519f20e4cfeec4"],["/2022/02/04/SQL简单注入/index.html","1b54f888249aaa94f27e4cdf155a8dc2"],["/2022/02/05/最全的HTTP头部信息分析/index.html","7fbc170ba703ad616c551befadff81c8"],["/2022/02/08/ctfshow文件上传/index.html","e89b17291ba774804fe52358180decbb"],["/2022/02/08/常见密码类型/index.html","c8dcbef4d635356f06971ca4396d702c"],["/2022/02/12/VNCTF2022WP/index.html","e8721e26127f83495195213fe31d5c70"],["/2022/02/20/ctfshowPHP特性/index.html","3eef28df007db5904e6b4556afa4956c"],["/2022/02/25/php伪协议/index.html","f4e7133eaadf1f9df691e1286f1980e4"],["/2022/02/26/ctfshow文件包含78-117/index.html","e7a7575d081303c509d0b69fddca5abe"],["/2022/03/02/Clash漏洞/index.html","9433f76b4bb33dffa0c505056f589c47"],["/2022/03/11/流量分析之题型解析/index.html","9a1fd79b4a6d48f2a9278840f86fc671"],["/2022/03/15/ctfshow命令执行/index.html","67993eda3a09937e76cc1378afcb3e2d"],["/2022/03/22/CGCTF/index.html","bb93ef608c514f36942b8c1fab6928ad"],["/2022/03/24/ctfshowxss/index.html","b79772dff4b6c3f4bc4bc939ade008f2"],["/2022/04/04/黑盒测试/index.html","bded493f153c2b4b8e862a4e50434b70"],["/2022/04/11/nmap/index.html","093cec77a01b3fdfc7c5efd73e49083d"],["/2022/04/12/渗透流程简要记录/index.html","a645730523d071f5b73148356e6e3d68"],["/2022/04/12/渗透测试之攻破登录页面/index.html","056e9553f4125cb9e9a821033e8bff26"],["/2022/04/14/xray扫描器/index.html","7112ac843c3fc12e2a16e19746dc893f"],["/2022/04/15/ctfshow反序列化/index.html","40d1e5ef6de34cb8e94bf5ca207a66c5"],["/2022/04/26/渗透测试实战/index.html","b4c8d6759664034ca3d9affcfb82022f"],["/2022/04/28/sqlmap教程/index.html","5954b844a982b4240689222e41a430e3"],["/2022/04/30/认知文件上传/index.html","c704f182fde800082b3f834b865cff8f"],["/2022/05/03/nahamcon/index.html","598a1e58c18da0cd72c1de62dc072e16"],["/2022/05/15/awd/index.html","8283eea658ef14cd4755c093e5dabdfe"],["/2022/05/22/DASCTF/index.html","d9f0945935cec284c7fb98786efe56da"],["/2022/05/27/520/index.html","1428a3d701e471b2cd5ef3f6cf56f2f1"],["/2022/05/27/ISCC2022/index.html","1cce8ccff830c9019b527fe53b37411f"],["/2022/06/01/第五届世界智能大会/index.html","1d9dc87c8222a6c968eb3dd6d4cb9ec0"],["/2022/06/04/SEETF/index.html","2d0d32dacaea056101cd44f579abd2fc"],["/2022/06/04/bcactf/index.html","9de39fb766928fd20531accfcff4af01"],["/2022/06/05/BSidesSF CTF/index.html","82762a3eefae4d98219425a443ef78ce"],["/2022/06/07/Docker部署web题目/index.html","1f282787774c9eb9985fb47e46ac5b0f"],["/2022/06/09/利用oj搭建C语言考核/index.html","b2386fa8a9110954d04db3d703cada9d"],["/2022/06/13/限免题目/index.html","4dcc4f220c56c507efdbfffc985b6843"],["/2022/06/14/钉钉rce/index.html","1629b268593fa86f63a1f87c7d7c0c7e"],["/2022/06/16/内部ctf/index.html","c20ed6dbe75191c48108990bc9d2f297"],["/2022/06/25/攻防世界高手区(一)/index.html","77eec80fe24ee13e0b6637ce10963190"],["/2022/07/01/两小时AK赛/index.html","95922702ba5e600e733312e073c50d93"],["/2022/07/03/鹏城杯/index.html","6984e9948b1bbae67ccb26bea572ed87"],["/2022/07/04/XXE/index.html","2104538446855506bf14048bc2dacfde"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","7225f5d31cbde47adbcd5c5bae999fb8"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","65fef54d2ab6893abb995085a90e613f"],["/2022/07/08/chinaz/index.html","0b952ba7b1adbbc9156855c2fc2e2669"],["/2022/07/09/蓝帽杯初赛wp/index.html","18cee60dea61339d72a2dfe2e604c70b"],["/2022/07/17/NepCTF/index.html","39b7710053d1a28c6dba2c4949f16f76"],["/2022/07/19/2022ImaginaryCTF/index.html","4af1e14ad094ef8bfa57f9e34334dd05"],["/2022/07/20/局域网攻击/index.html","442f9c92860412a3eee0195437a14d34"],["/2022/07/22/2022BDSecCTF/index.html","4a268adb2d4cda44508d476bc0809e50"],["/2022/07/25/DiceCTF @ Hope/index.html","1984ebab1c5a22c6ffa1e990e14b8d4a"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","7fb3f40239acc082275cc7a4a30f59b1"],["/2022/07/31/TFCCTF/index.html","752ced7c07d7caa91d4ae2e0dcbacc1b"],["/2022/08/03/NSSCTF-r4/index.html","e8d05f201a486e24c4e38d62ce513844"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","cb71f1aaa35033dd8c977bc35c581595"],["/2022/08/12/T3N4CI0US CTF/index.html","a46439446f7a9cad43b0697bc50f107d"],["/2022/08/14/SHELLCTF 2022/index.html","f481af4bc4ee55778bbf765680e4d066"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","827c09c3be18c827cb4d4659589271af"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","4f738d48a8d69e8aa7961d370df6713e"],["/2022/09/16/柏鹭杯/index.html","b94e7f6bcce82b9908739049d0c74e06"],["/2022/09/20/HUBUCTF 新生赛/index.html","869ccd5f38f37708db110286a4c4e4f0"],["/2022/09/27/NewStarCTF/index.html","b36d338597b6a522de04e763a6045422"],["/2022/09/27/bugku渗透1/index.html","c9c5b9b0d8b3457476650bd97a2068da"],["/2022/09/29/tp6漏洞/index.html","0ca1fb30b5f962af8bbb2e0e708fc470"],["/2022/10/02/SWPU NSS新生赛/index.html","85c129fec235b6e1a397c81345c11085"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","43b005dab6a777970422bbca4776e39f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","96324bd973d24040dd5bc798376746d5"],["/2022/11/02/HNCTF/index.html","21d1a3e20efb2ec68f9d5027a8d89989"],["/2022/11/04/2022工控CTF/index.html","9f1b47c0dbf3d4b140526fbbb5733724"],["/2022/11/21/极客大挑战2022/index.html","42e9b14d5a3924f2ffd1a287f0f55e3f"],["/2022/12/05/TUCTF 2022/index.html","b5baeea69c8eeaeb4c1e39a36d0f5066"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","656ce20a8fc6b0ab6b0aee7a1bbf5e40"],["/2022/12/18/金盾2022/index.html","0356e6030c86e2c7edd474c9f1bf4507"],["/2023/01/01/CATCTF/index.html","cf3ece67685b28d07d6df0447b037bd0"],["/2023/01/09/RW体验赛/index.html","dd0f10d64a6c92469c9d0bafddd06d86"],["/2023/01/10/铁三/index.html","115ffaef344b01c4b41e68329b251a0f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","0ec3186f71fa97cca7f6c3ec9534152e"],["/2023/01/18/山石2022冬令营/index.html","d2eada1ba77633da1a07966fdbdf3ac8"],["/2023/01/19/SICTF/index.html","8f669196a2e5c7211e42ca6979b0a295"],["/2023/02/04/2023西湖论剑/index.html","0ad0a96963b0de3d209ae85765c4a639"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","04b0a1619a94d1c9d4409bab28bcb5f9"],["/2023/03/04/公安/index.html","f5f320a6a237890c70beb78ba12140e0"],["/2023/03/07/mysql之udf提权/index.html","3d366335b9824ef528e94419053e0833"],["/2023/03/07/红日靶场练习/index.html","f1e11279390878d055c2d7cc9023ea86"],["/2023/03/27/NKCTF/index.html","85f8feecc879d7427d523a4ceb49d9f3"],["/2023/03/31/楚慧杯/index.html","0fed4019a1fff7dd505047d9d26ba46a"],["/2023/04/23/HDCTF2023/index.html","a5f9c24c83e8719dc4ad1187a9539f02"],["/2023/06/01/2023CISCN初赛/index.html","5c5e11e335388ee73aa325069165534c"],["/2023/06/28/2023CISCN[华中决赛]/index.html","11439fc86ec11391d3e747ceef65c477"],["/2023/07/10/CyberSecurityRumble Quals/index.html","00c6ca462e5a4eddfc6cdfdaf24973f7"],["/2023/07/22/2023BDSecCTF/index.html","fb0e628ce9f389b721e649a76b200878"],["/2023/08/07/SQL手注小记/index.html","fe623e44b7d0000babc48647dfdc189b"],["/2023/08/27/2023陇剑杯/index.html","9a34cbe632586e60825fbd5f4f37256b"],["/2023/09/17/2023蓝帽杯半决赛/index.html","0888065df08745fe273b9d3e2b7b38e2"],["/2023/10/23/对于多层代理的研究/index.html","87ac4067f4a0bc06e691a4a4ad002da5"],["/2023/11/25/金盾2023/index.html","dedab1fafd2e71f4ff43245bfe66fc86"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","202ad5c29398ff18d33088d6392cec59"],["/2023/12/18/2023强网杯线上赛/index.html","54a69ab5d3723870ae38e90a2510c1f2"],["/2024/01/08/基础ROP/index.html","4f483c57a6d2a6312fed39fa3cd34535"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","5acbcf4381455221719bc8e908a32ee1"],["/2024/02/13/打靶-Tr0ll/index.html","66e87d70ceff6746c87571ba4aef6996"],["/2024/02/14/NSSCTF-r18/index.html","51cefeeb269aa29ef27853487a00018d"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","5b2b4f03e05ea4538251272da16fffe1"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","05711859c75fc77b9ab17ef85c2aa866"],["/about/index.html","7f72f0a3480a028d128e9d4cf0ca32e2"],["/archives/2022/01/index.html","3ad52e0e610fe67de8819d10be3e28d9"],["/archives/2022/02/index.html","2806b37c60257edb1a19297d9b73f8c5"],["/archives/2022/03/index.html","c05efc817c193df0eec233e82f8f51e5"],["/archives/2022/04/index.html","1e2053a4961fa8cacdce1232a3323543"],["/archives/2022/05/index.html","9ccca9f666befbf9662edf849b815d87"],["/archives/2022/06/index.html","e6b4323de7ed88c70d94bbc27bb04073"],["/archives/2022/07/index.html","d17625b06de40f650a12fd64956fd07f"],["/archives/2022/08/index.html","688c306fc998e479ca2c22475c42f962"],["/archives/2022/09/index.html","6cc2a85868bea5115c23282ce46ba778"],["/archives/2022/10/index.html","88e5b46ced830093d23f0b5380e422cf"],["/archives/2022/11/index.html","7e56f362126108c617c9dad4746e23a7"],["/archives/2022/12/index.html","e3a3408492969030aab1c976659770ec"],["/archives/2022/index.html","0880811d94739ef8cc5ee06519367077"],["/archives/2023/01/index.html","e4324d402b766182a1cc85275ecbf591"],["/archives/2023/02/index.html","0baed231f9695302776dcbf7ee61a894"],["/archives/2023/03/index.html","c8fb543aefd9f305a15659680e91ce08"],["/archives/2023/04/index.html","145dda3ebda6cfcf9061e4db8a7ea8ab"],["/archives/2023/06/index.html","4b042464e2c241263fed25afb7861ee1"],["/archives/2023/07/index.html","672a14712857b5698437f8420add82bd"],["/archives/2023/08/index.html","cbd0e0cea46f16fbb8293c29038b5f6c"],["/archives/2023/09/index.html","111eb62ce5b10d192abdccb642e7fc67"],["/archives/2023/10/index.html","d38bcf49b450776956a1882f80ae71e8"],["/archives/2023/11/index.html","99219b9c2bff9f09289139d423ba5bf7"],["/archives/2023/12/index.html","edf461e3a4718f330e4711beefac3c09"],["/archives/2023/index.html","3baa9c664a566543f299bdddbb77b8d4"],["/archives/2024/01/index.html","200aa63f5ffabbf140a90036ef4ec7b6"],["/archives/2024/02/index.html","b6c8ee3deeb040fc8a43dc4a7c39c1a4"],["/archives/2024/index.html","f6256fa6c5d45970376b207c6a6d480d"],["/archives/index.html","fe2ff974f2ba64d622841ecc362c5bc2"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","2865e7626f00e7c0c95e0c93620ebfb7"],["/categories/CTF/index.html","37dd79dc1f912731ba715510f8cfb5f5"],["/categories/PHP伪协议/index.html","c4c52a4b70f31e8cc0319926207113f1"],["/categories/PWN/index.html","b137378f9526a76fe7f2b2537a439437"],["/categories/RE/index.html","3d88d3141f80caa9b31c79ce73f9a774"],["/categories/Web/index.html","c659c1989054104ea56e7f6e7d730209"],["/categories/awd/index.html","03bcdd38a89059959a5a7af86b35e57d"],["/categories/index.html","ff8aee846621365fad871a85349fd202"],["/categories/misc/index.html","cf3f2c89b7defd4d899863a673b08aa2"],["/categories/sqlmap/index.html","07843328718b604e714ab2bf63cda884"],["/categories/博客相关问题类/index.html","a0a9d49cd5e502c029d7f87736e9bf04"],["/categories/局域网攻击/index.html","a87cd3c17881d2922bcdbca999266b1b"],["/categories/心得/index.html","8f50c47d8590a6c01ffa5d9ca899493e"],["/categories/流量分析/index.html","7aaac3acd32ba8acf2185cf65ce9e789"],["/categories/渗透/index.html","7ae0eea1f388c5739ba249cf08a9683d"],["/categories/渗透测试/index.html","5c52fe92f3987fe91f37204dbb3395d8"],["/categories/渗透认知/index.html","f78f31e83aef41490abc8dabad84f31f"],["/categories/漏洞复现/index.html","48a5b92bbe02b7a84243dbf773144ab3"],["/categories/漏洞测试环境搭建/index.html","c88697a7b85d4d32b1cf62f1475677b1"],["/categories/赛后复盘/index.html","b88ca1934150bde9b28bacbfed7dda5b"],["/categories/靶场训练/index.html","7d376ff1ca66b8f33f3cd2ae5f200fd3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","045895f0be219295a63d7057d71fc270"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","1ad11647b94f43a73154e6c2048fa1da"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","a309b545ed91e329003ff6fa3846ec0f"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b21f7c1e546bddb4f9318bc913874777"],["/page/10/index.html","d446cbb381fd904ef1f1d8685c4c487c"],["/page/11/index.html","022990ebab3e846f2bb7bd00b26147f1"],["/page/12/index.html","e585b4ddbedd75dbadf583e1d0a8d80c"],["/page/2/index.html","3063c4933baf4ddf482420e90da93414"],["/page/3/index.html","d08a6520d17b89f571b87ecb726e928b"],["/page/4/index.html","9bc2ada458bc68e1243a4ae8b2a7b2e4"],["/page/5/index.html","d12deb70ba6575fda7b910c2f700660c"],["/page/6/index.html","4f13de3ed424bb6b45d4667a441055bd"],["/page/7/index.html","a5dd3fae55c5022d7d0638187d36991b"],["/page/8/index.html","02951243d5a0e21a7722d56a3a44718d"],["/page/9/index.html","b53879258f0ab5702bc26a3fb39dc5dc"],["/sw-register.js","d90e1d9d4824ec458aeffea2baa9a166"],["/tags/C/index.html","9d9d5594579e990f954e97da00230342"],["/tags/CTF/index.html","90030c13582c4c32ff8bb49cb71d62bc"],["/tags/HTTP头部信息分析/index.html","2d167555d0b7537e06b47b134fb326c2"],["/tags/PHP伪协议/index.html","d52b649966673681211ceae82dfab64e"],["/tags/PHP特性/index.html","8776d0c4b5973f9091b068f86bc29608"],["/tags/PWN/index.html","9738a7d2f1862bb49ae00cd0825197fd"],["/tags/RE/index.html","4aa9aba9e679a77e76c92fbe5095b045"],["/tags/SQL/index.html","3b20590d6570cdd36aba855ae3b5fb48"],["/tags/Web/index.html","9a4cf3afca205bd6ea8e068d4db880f2"],["/tags/Web工具包/index.html","5048350f3a6ea6abbc406654ed8c71df"],["/tags/awd/index.html","614390048ffd0c61ddc989ecff0f621a"],["/tags/ctfshow/index.html","d37e2bb042cb12e641c598446f37d5e1"],["/tags/index.html","58c80c7fda19d48c5006e4752cedf971"],["/tags/misc/index.html","0b1c1b35e86d58f798d5d9a7edf5cc4f"],["/tags/next主题失效/index.html","de265b6c630ad18d7e6191c6b6882518"],["/tags/sqlmap/index.html","7f1e34fc995ff812c7ed5abbcc3199f2"],["/tags/wp/index.html","a86ace31005bcfdce38bf6e5adc33f9d"],["/tags/xss/index.html","fb1c5173096af037eb221fc38008bf95"],["/tags/xxe/index.html","8b6e2ff2568702adbceb873892b909f5"],["/tags/不蒜子不显示/index.html","98ecfaef63c6ae075816276b9e626448"],["/tags/博客/index.html","f36552330e9f802eeb92658ad6488598"],["/tags/博客主题优化/index.html","7876cf37c0f830269a4fe3291dbb8c93"],["/tags/博客死循环框架问题/index.html","32d4e33bfcb7409935fdb5cde6b36a09"],["/tags/博客部分问题解决方法/index.html","242d0cf2ed6ada318d88a1a266d5f39e"],["/tags/反序列化/index.html","f6be1dbe256231e14efde2a28b320ecb"],["/tags/命令执行/index.html","77579dfb6143521758fd27a295925b35"],["/tags/局域网攻击/index.html","1194fcdb9115a2ede734ccd4ae72a237"],["/tags/常用指令/index.html","4995c9197e642cea6eddec20641292fd"],["/tags/心得/index.html","7a5389aadda312d48e5718c2f2e116be"],["/tags/文件上传漏洞/index.html","cc82e45a98fccaa92f87ccc2d1415da0"],["/tags/文件包含/index.html","c327c76f7e236ff0441a3300d1fa2a3c"],["/tags/流量分析/index.html","6e30c2d858add3011bc30c0a0ebda52b"],["/tags/渗透/index.html","965ffc5a58e35f06ba98b5e06d98d6f8"],["/tags/渗透测试/index.html","fd408a54ce11e3bdcac6b1731dc6ccf1"],["/tags/漏洞复现/index.html","dfe3b3107ef0c29d8a281a04c2ab8bcf"],["/tags/留言板/index.html","4cf65dac503acbcf8589613c02043acd"],["/tags/赛后复盘/index.html","e0488d93426a4a6945da5b77fb10f948"],["/tags/靶场训练/index.html","0b8179207820094d0169e053d27cbe4c"],["/tags/黑盒测试/index.html","18e447a323812c8e42aee3a47af13e39"]];
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
