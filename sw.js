/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","1df3b2e3a14506fd548607550c30948e"],["/2022/01/11/博客制作遇到的问题/index.html","cc21b3412197ad0402cbab24d7e00250"],["/2022/01/15/C/index.html","3790848c6a97b1cea97753286b15eaf5"],["/2022/01/18/新版next置换/index.html","4bc52b72bd0e9f4bd5c4fa82a58e4a51"],["/2022/01/19/不蒜子相关问题/index.html","8a5445e9e0364d7b8d25e0455d2a3c33"],["/2022/01/19/框架问题/index.html","9b0384ab5b049f185644ea20b2a83954"],["/2022/01/20/ctf之reverse/index.html","676e9ceff863f1d610a6e9598cc98318"],["/2022/01/23/misc隐写题目总结/index.html","5aec948a164a7725a032b42c14599559"],["/2022/02/01/684/index.html","b0f0243d573d6b174a9c93aa5429d2e4"],["/2022/02/03/留言板/index.html","a2ec91acea50b70c02c2a839d1674e76"],["/2022/02/04/SQL简单注入/index.html","0bd30ace4c3bc02695d15a337e68dfbb"],["/2022/02/05/最全的HTTP头部信息分析/index.html","9228c7e68d814716230abdb4f0e7baf2"],["/2022/02/08/ctfshow文件上传/index.html","ce4ae1b31ea219118f7d4d7e9b3c85c9"],["/2022/02/08/常见密码类型/index.html","7fb159f2e13396d216fec9aea557e036"],["/2022/02/12/VNCTF2022WP/index.html","af09dfb3335afa866ff8e15f0191b9a8"],["/2022/02/20/ctfshowPHP特性/index.html","f9fb842257bd8e78bb4f869f300cc305"],["/2022/02/25/php伪协议/index.html","d5d1c3caa0283d983bc8a2dec3dda94c"],["/2022/02/26/ctfshow文件包含78-117/index.html","7b7a07c44143625b7c06bc2a8faaa656"],["/2022/03/02/Clash漏洞/index.html","dfbe06dcc2c26d61e5207665387d3ce0"],["/2022/03/11/流量分析之题型解析/index.html","cf3d5407038fe43fdc9822905a1eb722"],["/2022/03/15/ctfshow命令执行/index.html","c8995a811160135c33b31a359c487556"],["/2022/03/22/CGCTF/index.html","f319e020e1140e561b4300a75d2c0cfe"],["/2022/03/24/ctfshowxss/index.html","c6eb43f50f6eb1bde101602d8b3104eb"],["/2022/04/04/黑盒测试/index.html","1cd7803a7b7cc77ad6c84990b03764df"],["/2022/04/11/nmap/index.html","e405489d69a4d1584c36237b1cc69338"],["/2022/04/12/渗透流程简要记录/index.html","ac13a83d7e4a02193593422ecb925b0e"],["/2022/04/12/渗透测试之攻破登录页面/index.html","e3cbda480d1296f43c79fc19207b1d02"],["/2022/04/14/xray扫描器/index.html","685650259068ca0a5ad378d685857e56"],["/2022/04/15/ctfshow反序列化/index.html","ddbf169e10938002af44666642c6d86c"],["/2022/04/26/渗透测试实战/index.html","0be18aac32b252b2e194770a387de95e"],["/2022/04/28/sqlmap教程/index.html","473b18f6fe36ef9961fce49082f733cf"],["/2022/04/30/认知文件上传/index.html","d49f1c7f03317bfad42525c94441cda3"],["/2022/05/03/nahamcon/index.html","43d85a200d4d2a139889970d9340292c"],["/2022/05/15/awd/index.html","c11fce6387c30576d2af0b966d8701a9"],["/2022/05/22/DASCTF/index.html","a66221309345146896d713982542df26"],["/2022/05/27/520/index.html","0e313b86dfbfcd7e1053cb7a6ad03136"],["/2022/05/27/ISCC2022/index.html","c045083734993fc333e970e362d741ee"],["/2022/06/01/第五届世界智能大会/index.html","62ae54e73a136e427b9ed146e990e8d7"],["/2022/06/04/SEETF/index.html","da82cef123653ffac31cfc870b88724a"],["/2022/06/04/bcactf/index.html","6c1ace1571f704bf92f05e48377de2d9"],["/2022/06/05/BSidesSF CTF/index.html","ea7b4fd492a2a432c2bbc3a832411159"],["/2022/06/07/Docker部署web题目/index.html","2c3f0e84ac13eea4eff96f3614c9ac88"],["/2022/06/09/利用oj搭建C语言考核/index.html","ad573555cef3ae5e266769a8aa8e6462"],["/2022/06/13/限免题目/index.html","0f66a6cf5055ad89d6753a35824fcddf"],["/2022/06/14/钉钉rce/index.html","11199830e7427a82dbdad68ec49f4605"],["/2022/06/16/内部ctf/index.html","e9d97612f60c1e2f24524383a723c5c6"],["/2022/06/25/攻防世界高手区(一)/index.html","af832b8b7b262da96b45b88bcaeddc20"],["/2022/07/01/两小时AK赛/index.html","28d893ad564aa1c52005c4667504cbce"],["/2022/07/03/鹏城杯/index.html","d74f25097b5b635a23df1a027e44f87b"],["/2022/07/04/XXE/index.html","e401f9252e778edcefb9dbbe363cab2e"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","251f25570041beea44627917764d55f0"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","9b2c85eaef58d4b41c46dbab3e84e851"],["/2022/07/08/chinaz/index.html","7051d839f4b43a3941bc38abf6e7cbd6"],["/2022/07/09/蓝帽杯初赛wp/index.html","b00411b32f4882816e55d32120942094"],["/2022/07/17/NepCTF/index.html","2402c46ad2879affce1719aa55f166b4"],["/2022/07/19/2022ImaginaryCTF/index.html","058a1cc128830451ecb76b17a3bfaaa7"],["/2022/07/20/局域网攻击/index.html","2b970282deecc3ed09e5365cc6c4a542"],["/2022/07/22/2022BDSecCTF/index.html","0b01fd7ef07eed9bcd78f86ebc8d22a5"],["/2022/07/25/DiceCTF @ Hope/index.html","f7b80ed9045de65d27e641066d78eaa9"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","6479447047ec1fd96269ea9c259f828e"],["/2022/07/31/TFCCTF/index.html","0ef3916e25c6898d571f461c946d159c"],["/2022/08/03/NSSCTF-r4/index.html","5e6eba91fb7db2c5f2a1fe1fe7cb8ebc"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","c6f5a8179722a64d3ded864068243eac"],["/2022/08/12/T3N4CI0US CTF/index.html","46076ecc96566d456713308599989172"],["/2022/08/14/SHELLCTF 2022/index.html","4ec0d28f4da1a53a8a898bf932b16bd3"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","db048b568c872b87203a7e949ad838e9"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","b23e07d24916af25b81ddc17bbdd10c6"],["/2022/09/16/柏鹭杯/index.html","c27f8f33cae209cd2bfe031a1f0e2015"],["/2022/09/20/HUBUCTF 新生赛/index.html","92a9e1209aa14e99fdd36b02aa2a8960"],["/2022/09/27/NewStarCTF/index.html","f8e0023896985892c058f012273ed8c7"],["/2022/09/27/打靶-渗透测试1/index.html","9d9406fc06df404213751dfa5766e61d"],["/2022/09/29/tp6漏洞/index.html","f890ac3e8594940825f5dcc4f238c714"],["/2022/10/02/SWPU NSS新生赛/index.html","6da4adb50183a3f6617d922b09b1a33d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","a375830909b11f1c2d9157a7b67b77d3"],["/2022/10/27/Moectf西电CTF新生赛/index.html","a93d3bf3b1075db0071ce7f1fe5d5d71"],["/2022/11/02/HNCTF/index.html","8f4d907eaf1205a64b4b1243ecc73fda"],["/2022/11/04/2022工控CTF/index.html","6db507dabf49db3d51310ef2c3b39497"],["/2022/11/21/极客大挑战2022/index.html","b83bcce2a281107915bd783fb1fa252b"],["/2022/12/05/TUCTF 2022/index.html","f29a3f87d4e1200596ead65145e3a4fd"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","80d3b182b98e99f854f003103ca1b048"],["/2022/12/18/金盾2022/index.html","4585816c50f381a35f152c97123ec9e5"],["/2023/01/01/CATCTF/index.html","df13be8888da004218e7429a1a3d0b23"],["/2023/01/09/RW体验赛/index.html","a6ab985609e5c6ef979a34be56992918"],["/2023/01/10/2023铁三初赛/index.html","4a768cd7f7b5e75e0f491418d1a5920d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","58c3fcd47fda27a74dbc55486a0ca098"],["/2023/01/18/山石2022冬令营/index.html","66be6323a0f07d411b953327cc27bf43"],["/2023/01/19/2023SICTF/index.html","b7824d0c28e493590d639c493d4f80b8"],["/2023/02/04/2023西湖论剑/index.html","53b5217c2666e9ee11415383fc349232"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","e79d3890bd2b7b803007a94212f760e6"],["/2023/03/04/公安/index.html","e585fe8fa6aa4a9ff8f6006de65c6c1f"],["/2023/03/07/mysql之udf提权/index.html","ceee48b550c449fcf102a8d73938fd10"],["/2023/03/07/红日靶场练习/index.html","86e441bc3c3cca920c8fee67ef1ee3b2"],["/2023/03/27/NKCTF/index.html","2e0986262ab85ccce78a2090afef7a83"],["/2023/03/31/楚慧杯/index.html","aa3d8cf810bed6adf11a26b848d92064"],["/2023/04/23/HDCTF2023/index.html","d1c6a4375f27c23f406bb153a8b998df"],["/2023/06/01/2023CISCN初赛/index.html","1b25d8edc4c028e99a980f08ba965d12"],["/2023/06/28/2023CISCN[华中决赛]/index.html","4a00be76c8dcb796bb9207155a7c0b69"],["/2023/07/10/CyberSecurityRumble Quals/index.html","36b54d445d9fea6a7b7791f2d1abccb0"],["/2023/07/22/2023BDSecCTF/index.html","76c158d126128af82d64a01bc4a6bf82"],["/2023/08/07/SQL手注小记/index.html","b3c548af9d2f58414c6d012d74dcec83"],["/2023/08/27/2023陇剑杯/index.html","c35c0eb99dd6f8b739846406d127d982"],["/2023/09/17/2023蓝帽杯半决赛/index.html","0b53f191008ef22bfeca6e8bbf48629a"],["/2023/10/23/对于多层代理的研究/index.html","1579ffb8c82ba8d91a7350657cfdc903"],["/2023/11/25/金盾2023/index.html","b821cafba7319512c9c2f5f0e159de65"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","7ef4fd61ab2e4812bdf4c17b8db54c74"],["/2023/12/18/2023强网杯线上赛/index.html","73eb4eb776600fb2e3fb80efdbb7bb62"],["/2024/01/08/基础ROP/index.html","3095d02b5da2a06b933122b74ef802dc"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","db6f4042a72dfd81686470a4db4e3ea1"],["/2024/02/13/打靶-Tr0ll/index.html","6842458220d1324407eab8fefe172f34"],["/2024/02/14/NSSCTF-r18/index.html","ca3da654ec9149fe44c4613fbf82fa6d"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","af4a7d8891ff5e49f6502cc1513d1e9a"],["/2024/02/15/打靶-CFS三层靶机/index.html","3a382511fd35958fc724488a7df09166"],["/2024/02/15/打靶-应急加固【简单】/index.html","f17c473b84e54d3dbe6f7aa3e27e46eb"],["/2024/02/17/2024VNCTF-WP/index.html","a9690af3e33f0869dfdad12df838e68f"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","45a5a07154f4df92aa2888fd9d3f6970"],["/2024/02/19/2024SICTF-Round3/index.html","71d81176e6e6c34265a769f5a8ce1072"],["/2024/02/19/打靶-铁三域控/index.html","d8dac61d5034cbadf88c87c9e04d4928"],["/2024/02/23/ctfshow终极考核/index.html","c9645a93c40decf11ed10f33b1459dbe"],["/2024/02/25/打靶-应急加固1/index.html","305fa7113abd72d74eb0987a8d750655"],["/2024/03/13/2023第一届古剑山决赛/index.html","bbecb25c6ba2ccbf021448df8e7a1e8c"],["/2024/04/01/2024铁三初赛/index.html","88cb8bb5d4f9dfa9ceff3d9f253dddb9"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","4b5be7f47b0ec4c672e0dda5825929b5"],["/about/index.html","659b4e7193dfaf5724ff3cbfd45285e1"],["/archives/2022/01/index.html","376a771eb5e230b4b9a853426bf4cfd2"],["/archives/2022/02/index.html","3dac89bfe1a3bf76f4928738281c92e4"],["/archives/2022/03/index.html","5679c94a2aa38be4a28233a450417085"],["/archives/2022/04/index.html","ed25c65ca5edc5a12078f699c753e62d"],["/archives/2022/05/index.html","a5cc03cb12615a68b44a71ba4fe82de6"],["/archives/2022/06/index.html","0a90431e4cfd1c1af8a88d733ba995c7"],["/archives/2022/07/index.html","ece2760d2c064b545108d06aba55f218"],["/archives/2022/08/index.html","0b7999f2eb2bbfe39c76d474499899f3"],["/archives/2022/09/index.html","4d7f8f37fffc38afcf559b5bcd046b26"],["/archives/2022/10/index.html","fd4f5614f2f688eb82af31ef77dd0ec6"],["/archives/2022/11/index.html","ba5b1cfc0e09c126b933e12f48af920f"],["/archives/2022/12/index.html","50ee0918792c70d05f1e89f0ad034cca"],["/archives/2022/index.html","28ba8edebabdfb45968b63f2b33f9b17"],["/archives/2023/01/index.html","79a32dce02f2b36512a20551b64ed00d"],["/archives/2023/02/index.html","fa054368a5323c8eac104e4a44cc5b34"],["/archives/2023/03/index.html","d63f2e7a59718653ed86d498b7f8f2f6"],["/archives/2023/04/index.html","4d72f45562d56dd0ac7fe12ad429ee00"],["/archives/2023/06/index.html","d19c39ed4fb249b59ececfaef9f7702d"],["/archives/2023/07/index.html","4d9e3c0bcb7dd2ad99eb8e93998a0117"],["/archives/2023/08/index.html","ad8ce64667c62c93cd3c9855c7a24ac7"],["/archives/2023/09/index.html","36ee3fb6f9bcccc33ad3b5345a26a57b"],["/archives/2023/10/index.html","c5d9b4869a88937496fb1aa9a6ebc97a"],["/archives/2023/11/index.html","6d37c0b7a614960664c7ea0631f056e9"],["/archives/2023/12/index.html","bb917d96bc0d77bdcac3b27db5b00d05"],["/archives/2023/index.html","4edf03493bfcfbc951feab721b6af9f5"],["/archives/2024/01/index.html","f0d368cff96d760ec580a8447febbdbe"],["/archives/2024/02/index.html","49b4b4c1dde44e158c5d068ea3f4070d"],["/archives/2024/03/index.html","be7403da9619c3a19de00b6fde4f611d"],["/archives/2024/04/index.html","7d69d1771115c78963538522203b6dc2"],["/archives/2024/index.html","9f090b0f65ea5e4fed72869308e99e6b"],["/archives/index.html","e811906f391c5c5a032a624e49a84d9e"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ee4da265dba63b476957b78f2ac0ffca"],["/categories/CTF/index.html","9f1d8f98a21802f3a5db515acf76eef3"],["/categories/PWN/index.html","febc6073cf06e2520a277086bf1aa2b9"],["/categories/RE/index.html","f3860a71843f37e31c2b1c4a2444145e"],["/categories/Web/index.html","2bf69c9ebc399ec644117189c4c9baf4"],["/categories/awd/index.html","663fd0ee1455d0a1e715f2b6acd63021"],["/categories/index.html","9a557c2a026d096e090973a59b2ecc82"],["/categories/misc/index.html","ae6f0c581df118c9db59f16ce4c76a05"],["/categories/博客相关问题类/index.html","1e20ceb3ececa2514424047800fe621a"],["/categories/局域网攻击/index.html","a938b6ca58894f4706028bedad79c55c"],["/categories/心得/index.html","e9c9c077d03bd832f408d4281724ba90"],["/categories/渗透认知/index.html","52a9779b3a9ec53a0f02599ded1ed734"],["/categories/漏洞复现/index.html","29465a2e623957cd52c18edf3a850de8"],["/categories/漏洞测试环境搭建/index.html","34cf40b27773888c184cbf3966e247bd"],["/categories/赛后复盘/index.html","ce305ae2067499861cbead0620311d3d"],["/categories/靶场训练/index.html","130129e8e1d6536a430cf60411296105"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","484160cd4eac66b878df6b0d0ea3fddc"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","933154cdbeaff55cb94ce48aa726a772"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","0ce8e8fe656ff0a929a6991be3a371a9"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d47992d93ccf4619de4a9069ccf852a1"],["/page/10/index.html","9948ccf05eef4377d9a0604643e41352"],["/page/11/index.html","0e781bee6b4959ccf440f9400f9184c5"],["/page/12/index.html","0a6ebd8489ac3c7d309a646ba05644b1"],["/page/13/index.html","fbd180fe3b81a12384a7c6b1932ec9c4"],["/page/2/index.html","5870c20e431bec1f411f08504eb6cad0"],["/page/3/index.html","2fa7ebfcd0b1ff7de5d930dc2d2a5911"],["/page/4/index.html","90929a4806e62a36dc96a3f4e7509ea1"],["/page/5/index.html","99cd512b6e0033a990705df01d7dcbd1"],["/page/6/index.html","c9050878a5b7dfaa35c52e91059453b8"],["/page/7/index.html","4f64643f1fae19d286e520f84fb21447"],["/page/8/index.html","c4171d7a5da278f20406a1816b986420"],["/page/9/index.html","2afdbaebffbaad839936ff71d5342114"],["/sw-register.js","7b562593de5ebd6ccc3b8e0231270f88"],["/tags/C/index.html","659b0617228ca75412b8b7fcb2c3a017"],["/tags/CTF/index.html","b7704cf95deb7d0a116182325074f3fe"],["/tags/HTTP头部信息分析/index.html","49208000735a5e4b0311c124e962ea21"],["/tags/MSF/index.html","a365fb3b910a9ae302358b3913879548"],["/tags/PHP伪协议/index.html","3c2107afa68ada96897989231f7caae6"],["/tags/PHP特性/index.html","5074091a040b9e1685ad8269a40faf22"],["/tags/PWN/index.html","67cd904559ca4e18a87261a54a4a5e78"],["/tags/RE/index.html","0878684f5b8d48acbb23579f6e3ec00c"],["/tags/SQL/index.html","ff86b6d1c9ec38319749bf3efb7c1375"],["/tags/Web/index.html","7393426c22116b3849756d803f74d50e"],["/tags/Web工具包/index.html","b671f6fd566b8588704ec462465a4b8d"],["/tags/awd/index.html","70d5f1718b4d86b46a5fb7442ee8134c"],["/tags/ctfshow/index.html","ff725ddbbc3d2f92756c464ac74c6acd"],["/tags/index.html","bc9f03f3c8d2fa0224cd8985e4e6dcbf"],["/tags/misc/index.html","f63094634fb1ac95bbe4c4e3fa60e607"],["/tags/next主题失效/index.html","da2bd1e9934bd604529905a93b3721e6"],["/tags/wp/index.html","fd772d04f119529eac15d3d421cd2c53"],["/tags/xss/index.html","40d50915efd13f98daef24daaa7a27a4"],["/tags/xxe/index.html","9417ebf6b459575864eccfccf5570a30"],["/tags/不蒜子不显示/index.html","91313ff71cecdfd2bb12b07bedf3c510"],["/tags/博客/index.html","8b022d25b75ba3f2ee38dda54edbd1fd"],["/tags/博客主题优化/index.html","a2dfff8c193157308e07a40f4b76db8f"],["/tags/博客死循环框架问题/index.html","7d00bb492f7935ec970255002894ba40"],["/tags/博客部分问题解决方法/index.html","f5e8d56bad767df0ab6dba6a640b29bc"],["/tags/反序列化/index.html","cae89d665df85c33638c26ab21058dad"],["/tags/命令执行/index.html","919e86072a79ce7b0942c20896018f39"],["/tags/局域网攻击/index.html","0890abc41aaf971139b361a6a153445e"],["/tags/常用指令/index.html","6f5e4f6231170d0fa55cf6ecab90bda6"],["/tags/心得/index.html","30f99510c2932435879dfd5be7f54998"],["/tags/文件上传漏洞/index.html","d2abe380a74924874ff5fff030ce6b47"],["/tags/文件包含/index.html","ebb7290f9f06db7792ebc9c7bc5e1d8e"],["/tags/流量分析/index.html","2a1f5a81e007916d3015bfbbc1be856e"],["/tags/渗透/index.html","2fd1baaaeed09299a1ecc86cb7c5ac8a"],["/tags/渗透认知/index.html","704cff155330b2da8320c1679daaf2b6"],["/tags/漏洞复现/index.html","7936d617795f94dbf46391c4157e0bb8"],["/tags/留言板/index.html","535246196603e0e167904f377e9a2cb0"],["/tags/赛后复盘/index.html","97132804406b53c808dec56fed6e0c48"],["/tags/靶场训练/index.html","ba99064e813cbf76c7f22155fec46ad9"],["/tags/黑盒测试/index.html","ae6a1e52f5aafb9a45d8b6f977bc72e1"]];
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
