/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","61d32d824257796b913e52c534b7d8e2"],["/2022/01/11/博客制作遇到的问题/index.html","595947dce98751f149db2b28f8902e07"],["/2022/01/15/C/index.html","faca3444666cbc59602794a13e5712d7"],["/2022/01/18/新版next置换/index.html","88bc5737e30c4f9acac19db23649d17e"],["/2022/01/19/不蒜子相关问题/index.html","4630bf12cce9ac5ababb3219da8eb35d"],["/2022/01/19/框架问题/index.html","5c788d6e813b3adf88ce90869fc597ce"],["/2022/01/20/ctf之reverse/index.html","bae1dc7723c917b99561ed9798e2fbaf"],["/2022/01/23/misc隐写题目总结/index.html","67482469145674d7532ba1d24fdac970"],["/2022/02/01/684/index.html","f811f2433037d7852406d929538c6125"],["/2022/02/03/留言板/index.html","c1940bc70ab8778999185e507985fe95"],["/2022/02/04/SQL简单注入/index.html","dca1a864c2bdc16010da6518226ec563"],["/2022/02/05/最全的HTTP头部信息分析/index.html","92c4993e1550d98499dbf814217a5727"],["/2022/02/08/ctfshow文件上传/index.html","b64539195faa66e61141fcab25f91dff"],["/2022/02/08/常见密码类型/index.html","d2e1719e7fff3ffd7922746521cb3666"],["/2022/02/12/VNCTF2022WP/index.html","c9ac637835fbbcd0bfb393a99328b507"],["/2022/02/20/ctfshowPHP特性/index.html","32cb3911318e7c021914c7ee9a9f282b"],["/2022/02/25/php伪协议/index.html","ed4eb80e7ea8044a65e97ccc4ebf7d8a"],["/2022/02/26/ctfshow文件包含78-117/index.html","27baf4ff2e367d03496c4f89fa18328d"],["/2022/03/02/Clash漏洞/index.html","8a4e98a24be1276c384f4227cfd1de52"],["/2022/03/11/流量分析之题型解析/index.html","2aa59baabcafbc75fabe86dc81dca882"],["/2022/03/15/ctfshow命令执行/index.html","4f70a86fa4bfa7dd9be814a69868fc94"],["/2022/03/22/CGCTF/index.html","4cc851edf0af1195bcb1dd8492484853"],["/2022/03/24/ctfshowxss/index.html","8f60382a580e53d589d1932fb30488fe"],["/2022/04/04/黑盒测试/index.html","c764a7351e3c22bdf24bd43f2439640b"],["/2022/04/11/nmap/index.html","11ac6e308c50c2d2aee5ad0bf4683a15"],["/2022/04/12/渗透流程简要记录/index.html","0c41da3ac317f209422375781c005ea0"],["/2022/04/12/渗透测试之攻破登录页面/index.html","d50abc6a46c1c8de897d2adca1e73fe5"],["/2022/04/14/xray扫描器/index.html","6458215fff30115fd027a42694ca52b1"],["/2022/04/15/ctfshow反序列化/index.html","40f7a84bdbd1b49c065625132dcfe1a5"],["/2022/04/26/渗透测试实战/index.html","130e4bab93e27091329d607ec7b8cff8"],["/2022/04/28/sqlmap教程/index.html","fccb857b2355925f014f77abc4507d00"],["/2022/04/30/认知文件上传/index.html","5e395df1106ac7282c354753f8d39b49"],["/2022/05/03/nahamcon/index.html","c167ab3f0797163e871416bdfa65653c"],["/2022/05/15/awd/index.html","fd209c86d4f804ccefe28fe836ebde75"],["/2022/05/22/DASCTF/index.html","3907159805ee3847c3d6e3729f2fb23f"],["/2022/05/27/520/index.html","63a6986891f3007e85495f1ab2f3d321"],["/2022/05/27/ISCC2022/index.html","72171d85abf4e8159a88019ecbb6bec2"],["/2022/06/01/第五届世界智能大会/index.html","7f1caa043b8ccff5c732ae6e311daf9e"],["/2022/06/04/SEETF/index.html","363cdd0be987f99164b7bde3a8070066"],["/2022/06/04/bcactf/index.html","eb56132613feaaf98c5d0f6a0471652e"],["/2022/06/05/BSidesSF CTF/index.html","c0b11bcb6841b64da6224d27f770834e"],["/2022/06/07/Docker部署web题目/index.html","7c45a622f8e13bc1413697c0838d8301"],["/2022/06/09/利用oj搭建C语言考核/index.html","0279f1188336cb928820615a7e71ad2d"],["/2022/06/13/限免题目/index.html","62e16414df8f081141ca870d6f531ec0"],["/2022/06/14/钉钉rce/index.html","36d2b5c9d88eaf417f59988d8ff5a94b"],["/2022/06/16/内部ctf/index.html","886b229abbefc137c09a00aff47c6711"],["/2022/06/25/攻防世界高手区(一)/index.html","af58a277e372bec36bfd80077ecd4dd8"],["/2022/07/01/两小时AK赛/index.html","9c6d588010a130cfcc4ae7c9d3319810"],["/2022/07/03/鹏城杯/index.html","a458aca44e50189bb832ec0af4efdfe3"],["/2022/07/04/XXE/index.html","84fa8e5adc825fc10a9d7767e98d7182"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","a20303e3ba6104a349345640e780dad5"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","699776a9290d5f93e4205bcda9442306"],["/2022/07/08/chinaz/index.html","f4924aee325cd96a937cb6fe320f0da4"],["/2022/07/09/蓝帽杯初赛wp/index.html","6318e1521a5413b27a972a886f7b6996"],["/2022/07/17/NepCTF/index.html","b611730c513c17fa048176f7ae81aecc"],["/2022/07/19/2022ImaginaryCTF/index.html","6171db6d1026670efb8111c0a0559bd8"],["/2022/07/20/局域网攻击/index.html","338c5695d3f3e78c07e0a96a0d92a9af"],["/2022/07/22/2022BDSecCTF/index.html","e997d0802184418f9737627658c2dec8"],["/2022/07/25/DiceCTF @ Hope/index.html","2dc908e73645e75bc2557f4951879d9b"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","9241b84b2dfcddef1e85d3740f1939a4"],["/2022/07/31/TFCCTF/index.html","0b02e35add412fbaed4f749211e540b1"],["/2022/08/03/NSSCTF-r4/index.html","1093f8d0f78c7072233c36372bb443d4"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","eff920c78eb8cdc22c27f46b9cd59bd2"],["/2022/08/12/T3N4CI0US CTF/index.html","7d02263a07f22682354e23f9f05b6038"],["/2022/08/14/SHELLCTF 2022/index.html","2396f809abf15d1186a12aa3647607db"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","37178f9361f75855e059db940a100ec4"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","c9d8186307f0339ca09c68b209776764"],["/2022/09/16/柏鹭杯/index.html","9d4d0d14267288c45bc091655757ca41"],["/2022/09/20/HUBUCTF 新生赛/index.html","ab9ee718f2ad4ec132d236ef334e850f"],["/2022/09/27/NewStarCTF/index.html","349d5a3e77a01e78fbcf07f1ae358014"],["/2022/09/27/bugku渗透1/index.html","4afdeed26e100857512b40810be927dd"],["/2022/09/29/tp6漏洞/index.html","284019e4876d2b809e4c0d0bde9c2eea"],["/2022/10/02/SWPU NSS新生赛/index.html","a78c9035f34bba261a68617a4307b2cd"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","14cb34ce60e77f9498fb085810741d14"],["/2022/10/27/Moectf西电CTF新生赛/index.html","106d4ea9106b5453f7bf614a39298351"],["/2022/11/02/HNCTF/index.html","c02026c6f7e422234b06123fae620451"],["/2022/11/04/2022工控CTF/index.html","74a5416c8e694f41b5b6d6d5c1abf39b"],["/2022/11/21/极客大挑战2022/index.html","c20af342e037d7989864d2efcfdfab3e"],["/2022/12/05/TUCTF 2022/index.html","7d5c8a74d7031af4a5efde4815a9a0bb"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","97fd5e90d3f039f5f2efb8dc1fb64e41"],["/2022/12/18/金盾2022/index.html","fc8d1c16d911e0ffe657fb9d68fe6ce2"],["/2023/01/01/CATCTF/index.html","79c7915cc8e09d1756a60753ddc54e9d"],["/2023/01/09/RW体验赛/index.html","554549a60e6d42d4f674576f4d650b83"],["/2023/01/10/铁三/index.html","e3e2e6e6daeb93c9aca6b13e5c64ee64"],["/2023/01/16/Ugra CTF Quals 2023/index.html","88b1a475ead7bb808dfb3dc348fe41ca"],["/2023/01/18/山石2022冬令营/index.html","f0c4f6762a7b419cb68068a8a887df18"],["/2023/01/19/SICTF/index.html","7fb28d192e89ff2d6ac5a057abd6ca9a"],["/2023/02/04/2023西湖论剑/index.html","9a1b3b72020635c6ea8b43c1a270ea10"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f8fa6a4868198e1f16b3f2da16f229ce"],["/2023/03/04/公安/index.html","30c2937765718bf6b7536da0c15d7578"],["/2023/03/07/mysql之udf提权/index.html","6835b4facb1f98468716e62a3ff3f758"],["/2023/03/07/红日靶场练习/index.html","6fc08b9694c7e95fef9bd3043f74af90"],["/2023/03/27/NKCTF/index.html","bc04fad0b93fd8cf8ab84d716990219b"],["/2023/03/31/楚慧杯/index.html","f9f9894e0ce1e07720460beca1ea6e6b"],["/2023/04/23/HDCTF2023/index.html","ccdc7cec72e9e9c96d1bfc40f38b1509"],["/2023/06/01/2023CISCN初赛/index.html","03632188009459f73f032fff5f7d7e98"],["/2023/06/28/2023CISCN[华中决赛]/index.html","7622a91316aae1c389dd8d2fb56a4e3a"],["/2023/07/10/CyberSecurityRumble Quals/index.html","e0e8651aacc176cda914a84d835320f7"],["/2023/07/22/2023BDSecCTF/index.html","3907a500f527f952c395cad606bcb8e3"],["/2023/08/07/SQL手注小记/index.html","bb83fe78d348871a4db17b1feab01b1e"],["/2023/08/27/2023陇剑杯/index.html","032e5e21452ed1befb584d0d3aa8d5ce"],["/2023/09/17/2023蓝帽杯半决赛/index.html","fe712e951fa838beb11ec8181cd85121"],["/2023/10/23/对于多层代理的研究/index.html","0af6381820776f2b80dea515ee26a21a"],["/2023/11/25/金盾2023/index.html","f4c7b426fd714cbcddccab0adb19b13e"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","a1cb37e7c50c9ff250aa079003cf9376"],["/2023/12/18/2023强网杯线上赛/index.html","2be9d7d2e2bbd1aaa42777a3ce7b3ecb"],["/2024/01/08/基础ROP/index.html","fc3fe8080c2d6c006e5c261751bba50d"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","b8d4a23f1c27a5f36d0bad353a101ba1"],["/2024/02/13/打靶-Tr0ll/index.html","8639c2b597f7f8e5ad01372b8d74d248"],["/2024/02/14/NSSCTF-r18/index.html","e7017f6ed71c7ea4dd4b308d0dac18fd"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","935fa924bcf20555b7c872505fc26cc1"],["/2024/02/15/打靶-CFS三层靶机/index.html","9ec49d69ebfcb784b091c865520dd2db"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","b0fb23aaee58169cf3cff56096e8c268"],["/about/index.html","199bcebc49d0f0e6eb536e9ba6c990c7"],["/archives/2022/01/index.html","70c82e58343c883cd4ec9aabc3ba3eb7"],["/archives/2022/02/index.html","5823235f24e853d9e740f11e9e8fa380"],["/archives/2022/03/index.html","19598e428659eba0793133d9a2e99ec6"],["/archives/2022/04/index.html","05cb1697d9d40527d4d5ba0af79087fd"],["/archives/2022/05/index.html","28ef72bc77d28d77f7ee82597c956c52"],["/archives/2022/06/index.html","51b15aa24a99d48170966e966746c17e"],["/archives/2022/07/index.html","2fe03b63dee07a71b28246fe6a4ba910"],["/archives/2022/08/index.html","c4f875801499f2fa1d4ccbad85e0dd3f"],["/archives/2022/09/index.html","528686832669ccdd244e5e0fd8fff41d"],["/archives/2022/10/index.html","0ceef523d59ee751ec7aba4d418b7e33"],["/archives/2022/11/index.html","61845b1ca91089107de1225f86e8c4bc"],["/archives/2022/12/index.html","c96d9c63d4bdb0b958d8cd43e0b89629"],["/archives/2022/index.html","cb67db8326c30a04c9125f2269e31fd0"],["/archives/2023/01/index.html","1c9faa95590d1fe72694540b4d6a1b00"],["/archives/2023/02/index.html","d6bfb2573e5fe2855638af79b2210773"],["/archives/2023/03/index.html","dd21e89bbaaae700445a60b33f53f3d6"],["/archives/2023/04/index.html","6ce4c54e5703a3663d88ad38dad580c6"],["/archives/2023/06/index.html","d6eef5f6e935019837a3d380e7b706e4"],["/archives/2023/07/index.html","8e76be2ce2c125f200cb14141bcb9a06"],["/archives/2023/08/index.html","2c370053e4f273864e3453e7145db818"],["/archives/2023/09/index.html","0335545b8ed1539b4884cdb78d321cdd"],["/archives/2023/10/index.html","b4e0979873375c62c52b7be01cfa93ba"],["/archives/2023/11/index.html","8fb9b5836884e544faab0d3750c55f0a"],["/archives/2023/12/index.html","2b47a3ba08497a90f70285ce0f547e0f"],["/archives/2023/index.html","53dccf7049a587537e90eff908f4a425"],["/archives/2024/01/index.html","afb3c1925528cffa5360f076cec8cdc3"],["/archives/2024/02/index.html","425db32254f849d887f55a8aa45566b5"],["/archives/2024/index.html","df015a12e7d30368484cdb6239688a1e"],["/archives/index.html","80ce00f315358b4a4e2aec29d7ebe736"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","9f4e17c96d65a96e65c44e4012617626"],["/categories/CTF/index.html","980d0bf116ff4fa49f96d66953d4e75f"],["/categories/PWN/index.html","b4f1b31c504e5d88707774ae4f92cb08"],["/categories/RE/index.html","08910a3b2246410698c6b46d89df55c5"],["/categories/Web/index.html","90d58c31712a114696049890a26f2e96"],["/categories/awd/index.html","1ff32079edb6878681237306e756120a"],["/categories/index.html","407d8af07971d7703cfbde12aa11f3cc"],["/categories/misc/index.html","e2591fbc5b62cf20085cd0421b4dcc18"],["/categories/博客相关问题类/index.html","f46521d38f19d602ad4baaa7e18e65ca"],["/categories/局域网攻击/index.html","8e05b0f75062c52cd0a60c1fe41c9e77"],["/categories/心得/index.html","0c76e23eea83e381a6dc1bf7ec4f364f"],["/categories/渗透认知/index.html","d2941c61e726b0502959d7445382298d"],["/categories/漏洞复现/index.html","11d3c94a502dc93a57e6668531549e1e"],["/categories/漏洞测试环境搭建/index.html","f7d098c131367f159e121ec087cbcf23"],["/categories/赛后复盘/index.html","266798c877335fce50208d9e4085cda0"],["/categories/靶场训练/index.html","ab24d19421a913ef9e866646410075f5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","456e8e58505d703a0509c9f51c6ca56d"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","393d5358dc2f00adbccdde4c72837967"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d4714d5eaf0a65db78a1747389480380"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","83cd8370d3b258071f1c4bb1daf93394"],["/page/10/index.html","61f257bc43868e26ecab19a0811ce5e3"],["/page/11/index.html","726c3b0692cafdcbf84da0b8bbff4fd6"],["/page/12/index.html","8361c059dbb83390bdd89b75a2e3c262"],["/page/2/index.html","61d18591162b8d4c7e984b9e34ceea49"],["/page/3/index.html","146b13fc1ea3d58d882f8d3c9be33e76"],["/page/4/index.html","699b3b269509638ed35261988eeaf410"],["/page/5/index.html","a0e903de405fae6b801522d1a7d9cd73"],["/page/6/index.html","af37e3e6cf7861970e1d7162f8f6bb01"],["/page/7/index.html","81658bcee74a6a89dbc777b15eb00dc5"],["/page/8/index.html","a27514628a6fc72c5254f3c8d6068388"],["/page/9/index.html","02659ea0c5d25f77d7ebc278600d30a3"],["/sw-register.js","eefcb87620d3aa006f33ef7d2e32c916"],["/tags/C/index.html","af3e2c4ca2a41aefb1c0ad8772c12919"],["/tags/CTF/index.html","32529cb9091e45dbb69a384ab950552d"],["/tags/HTTP头部信息分析/index.html","5e9c7a1fbb512433b47546339542e996"],["/tags/PHP伪协议/index.html","52e2bc61d6de6bbe9791bb5f20efee66"],["/tags/PHP特性/index.html","e32bca55c0f30292cd054056a13fdd6f"],["/tags/PWN/index.html","a7f61e140182748ec073a2c8b1bae449"],["/tags/RE/index.html","b9a54c4aaf93c65d7bb8e71f583fea11"],["/tags/SQL/index.html","036694d5f73af9c2ad508e65cf29d8a4"],["/tags/Web/index.html","aacf350249b45c50b5cf4bd0c6884337"],["/tags/Web工具包/index.html","d153fc38b69c1a3f635869b20f9a4efd"],["/tags/awd/index.html","4e3d2a49992cf543b7817fff1b4a6991"],["/tags/ctfshow/index.html","720ea6c34f765495c46bc5228a6377bf"],["/tags/index.html","7911c6df8aedfdabb5e7437439d6dd1c"],["/tags/misc/index.html","3967670f75af343660d2a7e21d8ccfbf"],["/tags/next主题失效/index.html","454b4d245365f9bbe4b6c3a79d3d5e3b"],["/tags/wp/index.html","e92a1f9ab976fe4a00146ed4f27a6bb2"],["/tags/xss/index.html","7dac4df2e73a1f48a992a49766385a87"],["/tags/xxe/index.html","b35a22fe8198cf4a0ceef8f54e889829"],["/tags/不蒜子不显示/index.html","33f24d6685f3ddceadc65a94857cc5b7"],["/tags/博客/index.html","f6c9489969f8d17975b3f025cf49bf7e"],["/tags/博客主题优化/index.html","b38437b7e13e00ec39c3514b5d4c1590"],["/tags/博客死循环框架问题/index.html","1fde3d86ab44db6b4a551d0acaa8b813"],["/tags/博客部分问题解决方法/index.html","5960e6ea03c3724aa341c44cd4f6f3c1"],["/tags/反序列化/index.html","16d0a8d256046dd3219fd9a277123325"],["/tags/命令执行/index.html","9b28fff2c82dd410586f5b8dfb0b06bc"],["/tags/局域网攻击/index.html","712591b02454667e1a3ffba7d7e7178e"],["/tags/常用指令/index.html","e6d0a0de4fd44dc50fcd9c6aede07f53"],["/tags/心得/index.html","5adcb6e5f2c5cf679878dbb0749189c6"],["/tags/文件上传漏洞/index.html","4a6024436d5a24d1d84e88e6cf1ac8a3"],["/tags/文件包含/index.html","c6b66b4bf5efe87b2fd3f627a0e552af"],["/tags/流量分析/index.html","f6639dbce01539c3ced306d5189f2fa8"],["/tags/渗透/index.html","d688e94d45a9be2be6849be9e39017fd"],["/tags/渗透认知/index.html","57c19380caff25242b402876eb6e1791"],["/tags/漏洞复现/index.html","23cbf3c7f46ccf97e159d5822f64aeb5"],["/tags/留言板/index.html","2ec88819dd53663bc4052fca0226aaa7"],["/tags/赛后复盘/index.html","daad6a6a052e211a7c773daefae4be42"],["/tags/靶场训练/index.html","c4194746f650b560923d44462c95b3b9"],["/tags/黑盒测试/index.html","33c8ed62cdbf406e677958f88b99da7c"]];
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
