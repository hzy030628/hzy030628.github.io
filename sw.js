/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","8e24517f9a5769e45c0fed8dfb992f9e"],["/2022/01/11/博客制作遇到的问题/index.html","98e9f1fcd19035602885358d8bc9bba5"],["/2022/01/15/C/index.html","bc813672a2accd6a812181377b2d15e4"],["/2022/01/18/新版next置换/index.html","f5b2441e5799882bbbec6295bafeb0cd"],["/2022/01/19/不蒜子相关问题/index.html","b537f349539080e6e6050eb8daac97e5"],["/2022/01/19/框架问题/index.html","6f0e7e992f76408516d892060f0fb91a"],["/2022/01/20/ctf之reverse/index.html","6d002f034a9296fa03cd3822b27b927a"],["/2022/01/23/misc隐写题目总结/index.html","2db46948c1362280f26dcc863bd3c018"],["/2022/02/01/684/index.html","42eb0ec22dd25df8f3739dc72bc7c8bf"],["/2022/02/03/留言板/index.html","9a35ca988c498e7c08ad800ddecf039c"],["/2022/02/04/SQL简单注入/index.html","2539e6cd7ce33fef8e944369cfa25227"],["/2022/02/05/最全的HTTP头部信息分析/index.html","aab44453c17f3bcbe6eb5812ad4e2ffd"],["/2022/02/08/ctfshow文件上传/index.html","8aee9def6dbdc7ba3cc8ddd083896e4a"],["/2022/02/08/常见密码类型/index.html","112518b4b2d494931fe97e4c194952ea"],["/2022/02/12/VNCTF2022WP/index.html","e963348cef97ae18215ba0c65293e0c1"],["/2022/02/20/ctfshowPHP特性/index.html","716ee5f3c4f221bc4743dab2a23c20d7"],["/2022/02/25/php伪协议/index.html","aa52a4d6963fde00809f58be1f18737c"],["/2022/02/26/ctfshow文件包含78-117/index.html","36fac5caf7a0ffd3edaff451c31ccc50"],["/2022/03/02/Clash漏洞/index.html","5bd9d7adca3c8f2833d6859d5dcdcb42"],["/2022/03/11/流量分析之题型解析/index.html","76d2d02b743c94907ed552e79bb3c133"],["/2022/03/15/ctfshow命令执行/index.html","276ca19df4f7da2c96057b058ee84622"],["/2022/03/22/CGCTF/index.html","5e41be0933510dfe606bde51cff9967e"],["/2022/03/24/ctfshowxss/index.html","5198317f0e6e64780519cf6834ff2a8d"],["/2022/04/04/黑盒测试/index.html","f61b41a8bd7591239428b386f86af7ec"],["/2022/04/11/nmap/index.html","ec34e819ae89095f8a464a80b2cd9a01"],["/2022/04/12/渗透流程简要记录/index.html","17f9743b8af7634bb59f577fbb0246c4"],["/2022/04/12/渗透测试之攻破登录页面/index.html","8f4887b15fa0eed66489f5ee3c89cab2"],["/2022/04/14/xray扫描器/index.html","7dfa7acd268e9c6573624e7294e8c7d7"],["/2022/04/15/ctfshow反序列化/index.html","9a6ddcd56de71e472fc71e428861cd0f"],["/2022/04/26/渗透测试实战/index.html","82889e248c66414903f867744674ccca"],["/2022/04/28/sqlmap教程/index.html","89aa2e1ef47ac97b5e3f37b7613c0f1a"],["/2022/04/30/认知文件上传/index.html","579dd8ecdb6f95f7290fe2c012a38a9e"],["/2022/05/03/nahamcon/index.html","4e2bbcf7403e57c881a3683035fc2f65"],["/2022/05/15/awd/index.html","e6c785b636f4c525ae9f97feb6cbf03f"],["/2022/05/22/DASCTF/index.html","806f6a251d6680fe41131cb56fa5b09d"],["/2022/05/27/520/index.html","3503207173946091682be3fc07f245fd"],["/2022/05/27/ISCC2022/index.html","90307383958903a454c9a49612c09196"],["/2022/06/01/第五届世界智能大会/index.html","3b3731519cc0d54a9c264685028b6505"],["/2022/06/04/SEETF/index.html","b3fcd0feb011895be39b7c5626fefaa8"],["/2022/06/04/bcactf/index.html","e38b5d5ae56ebe2c75227e316a270fcf"],["/2022/06/05/BSidesSF CTF/index.html","60268de1e8de5eb3eb38452746efc9d3"],["/2022/06/07/Docker部署web题目/index.html","6ab8dbfdc207eb85f35a8cbdb67817ca"],["/2022/06/09/利用oj搭建C语言考核/index.html","eaf4a7eb721df2d98e8c32c682905386"],["/2022/06/13/限免题目/index.html","81104652003541aace157195c2d11d9d"],["/2022/06/14/钉钉rce/index.html","cb007c3b3d62b5dce2214beeff85b1bb"],["/2022/06/16/内部ctf/index.html","a8104cd918a72d0eeb672fc8e9cb9c99"],["/2022/06/25/攻防世界高手区(一)/index.html","996c62235245fa62ffe81e61b1fa04b4"],["/2022/07/01/两小时AK赛/index.html","88c76ffc04daf026b4c3f3b7139eeaa2"],["/2022/07/03/鹏城杯/index.html","3ba082abc685390024725efe6ddd1f4a"],["/2022/07/04/XXE/index.html","f4d75c18b0a37f503b490c19d9cecf1d"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","997538b14ba525e9c98bcf9ae554a361"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","29c3833dc92229a5bcd52150b74f119f"],["/2022/07/08/chinaz/index.html","ea3ac1d642d67912b39cc956e3553625"],["/2022/07/09/蓝帽杯初赛wp/index.html","b2cafe057bffe018bab63285b14cd63c"],["/2022/07/17/NepCTF/index.html","f76307376a7d6614d89c508f34b92ac2"],["/2022/07/19/2022ImaginaryCTF/index.html","5f3afce10101a9cd22be92fa3d01edbc"],["/2022/07/20/局域网攻击/index.html","eb43997b9b7879f14f818040af2a4e39"],["/2022/07/22/2022BDSecCTF/index.html","bea801a4480bf94faffdf5e115455cd4"],["/2022/07/25/DiceCTF @ Hope/index.html","2859a414108330c2f4b45c8b0ff49eb0"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","ed7ebef83bd2c8cea5cd0c5c8ed2c57a"],["/2022/07/31/TFCCTF/index.html","a624fa29d99f63b593ba6ed2ae8c830c"],["/2022/08/03/NSSCTF-r4/index.html","e5cde9c12b53db9f04223d22a2683e88"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","4965a87043b190a1933e00c761338cb2"],["/2022/08/12/T3N4CI0US CTF/index.html","b55c6038f55f33c9b3f33486daec065b"],["/2022/08/14/SHELLCTF 2022/index.html","a208c7dbc39b83b2786b39f3b549d428"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","93ce255080581211d95ad0e0c146f779"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","d21c47dfa239a176008773bc7640a9cf"],["/2022/09/16/柏鹭杯/index.html","350e775b36e37102bd85abfe2cd90d71"],["/2022/09/20/HUBUCTF 新生赛/index.html","7fec94adb5ce5a4a27074df8d2e63a15"],["/2022/09/27/NewStarCTF/index.html","f92cb1f7f7a2ef25678e6b6bf6646eff"],["/2022/09/27/打靶-渗透测试1/index.html","d5ad828b8744eb4d769532b92113936e"],["/2022/09/29/tp6漏洞/index.html","66e391f13d55918ddfa6a96104afd6da"],["/2022/10/02/SWPU NSS新生赛/index.html","8bff03bab3f5531164dd1f77b70459b8"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","a7cb2b4628f034ac32283e9923aea66c"],["/2022/10/27/Moectf西电CTF新生赛/index.html","e3f433a80ba79cbbea067db955ddfa7f"],["/2022/11/02/HNCTF/index.html","2486b42a7416be87fbac30d175b65a6a"],["/2022/11/04/2022工控CTF/index.html","21e8a13419bf79b235b4c8c07b89b36f"],["/2022/11/21/极客大挑战2022/index.html","bf5003135a1312e08c5ec037aaeb730e"],["/2022/12/05/TUCTF 2022/index.html","426544ea3ba740bb7bb2b5fd209c14c8"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","9319aa6168975be79910e46133f80c34"],["/2022/12/18/金盾2022/index.html","6ee423af4af80242e7fd8a6f28c3e9ca"],["/2023/01/01/CATCTF/index.html","4f56f1ab7f12338104aeeef95d4dc394"],["/2023/01/09/RW体验赛/index.html","dfbe9ee6d6ac32f66a92f0d2e074b1c6"],["/2023/01/10/铁三/index.html","c4066e5b2ae1efc8d0aef79357d4c62b"],["/2023/01/16/Ugra CTF Quals 2023/index.html","19af0f389c398b9baa9f74abea179687"],["/2023/01/18/山石2022冬令营/index.html","fc2d3dcb6b0a54b8227c3ec35c61bf4c"],["/2023/01/19/2023SICTF/index.html","fa1b533733952e8d077941abd34522e2"],["/2023/02/04/2023西湖论剑/index.html","528bce2ec5ea5df6d20419ced4510b2d"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","6afcfb479560b24fcfddd6e81ee58484"],["/2023/03/04/公安/index.html","d0765d209445a1dc034400fe0c44f194"],["/2023/03/07/mysql之udf提权/index.html","66edb055335ff627faff373553d34b3e"],["/2023/03/07/红日靶场练习/index.html","536c9d4cb36eb5f91c204724eacb95f3"],["/2023/03/27/NKCTF/index.html","976c9f0b4a46ad4b9183b2934ceda233"],["/2023/03/31/楚慧杯/index.html","69eb9635b4b35dfda5b177ace9cc44bc"],["/2023/04/23/HDCTF2023/index.html","fb8f8f440547c39e103bde703981a567"],["/2023/06/01/2023CISCN初赛/index.html","bb8917c1af95a1d599bc902a09cb2bcb"],["/2023/06/28/2023CISCN[华中决赛]/index.html","024832f5a47c427e3d0f67c74785c19a"],["/2023/07/10/CyberSecurityRumble Quals/index.html","0ced40dbaac21c396973aa43c5090528"],["/2023/07/22/2023BDSecCTF/index.html","40a4aa3671c2c2d5e2d5692229048446"],["/2023/08/07/SQL手注小记/index.html","f91704cca425ffa572fe50e3e0bb5f59"],["/2023/08/27/2023陇剑杯/index.html","3829db9639eedadd4a5da40cf1396ac4"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f9575a85c5f6371e48571fff35b000c4"],["/2023/10/23/对于多层代理的研究/index.html","702b4bb4b3de53800622a250c23d9784"],["/2023/11/25/金盾2023/index.html","70676968f061dd9cc089d5d17d7f4959"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","18ed979de5b2938f99141a8f4b605592"],["/2023/12/18/2023强网杯线上赛/index.html","3c1c3f5fec1671f93defdb01bfac0c9b"],["/2024/01/08/基础ROP/index.html","2c320c0aff699d2f2e1d1db5a0eabc40"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","7f427b726126c33cf419ad0226f6e37d"],["/2024/02/13/打靶-Tr0ll/index.html","bda17793e2875406b4c3bb56935146de"],["/2024/02/14/NSSCTF-r18/index.html","54102a4d7af772231e043a2587bee9b7"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","197c33728f9a4dc466e6cf1ba83ed05e"],["/2024/02/15/打靶-CFS三层靶机/index.html","f433bfb5ddfe257d7d58eefa685c4f36"],["/2024/02/15/打靶-应急加固【简单】/index.html","a6f10c4a2dec695022f308136cd1cd1c"],["/2024/02/17/2024VNCTF-WP/index.html","7177bb3f58ee59503d9878ae0b95e067"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","c8cda1974de4b824e6ab9c3ed56cce08"],["/2024/02/19/2024SICTF-Round3/index.html","2793387c58b0b968056ca7e5e55abaaf"],["/2024/02/19/打靶-铁三域控/index.html","73ca4d87accdda3d3384f6909105eb54"],["/2024/02/23/ctfshow终极考核/index.html","01759dd8433a89ef63bf3edd7029b431"],["/2024/02/25/打靶-应急加固1 /index.html","d185558474e421ae9b2354ba83011795"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","b350dd710db50c97debf6acb48215eb9"],["/about/index.html","a5ae24c99680c9c00f1a89cb7d726d9c"],["/archives/2022/01/index.html","1e5748b735e514de4aa0e91e49144cea"],["/archives/2022/02/index.html","319a62f447615ee9d9a018a650ba64b8"],["/archives/2022/03/index.html","04104c84ca1b069d66c75e975da4aec9"],["/archives/2022/04/index.html","d9dc43071393b05d9ce917ff3a0990ac"],["/archives/2022/05/index.html","c1d92170e3c89250164ffdadbe2d8e3e"],["/archives/2022/06/index.html","72f45444b74b628c7b9940457cf4d815"],["/archives/2022/07/index.html","f18afa43c7efbe835c3ffc1f46bffffd"],["/archives/2022/08/index.html","d1fbd98965d37a7f8ae7a2314128924e"],["/archives/2022/09/index.html","600190e2be5b60acb1f51f8625239f42"],["/archives/2022/10/index.html","bde751dab67fc749a143f74423caf83e"],["/archives/2022/11/index.html","09ad48a3350e85670cc828404744d4ea"],["/archives/2022/12/index.html","3a21d1ffeecdc7019087f2777b85da11"],["/archives/2022/index.html","2b6d177316101c9c4e622f8a0bae96ac"],["/archives/2023/01/index.html","7251621d2fdff123cffe578367c03e8c"],["/archives/2023/02/index.html","f2e98d66fbd70cbb849ce2b1e774aee0"],["/archives/2023/03/index.html","7f4939d786705b893c902cdf5b3ea2c6"],["/archives/2023/04/index.html","9a61c1f36ab75de284606942690987cd"],["/archives/2023/06/index.html","6a101cb3b9c383616796b19edd8c7c42"],["/archives/2023/07/index.html","1a2e9d80decd215307615605cfb4b0ee"],["/archives/2023/08/index.html","033dacf78069a8939fd1c8a13e4ad491"],["/archives/2023/09/index.html","dfe442a729af16a3d27c7cccd03ffba8"],["/archives/2023/10/index.html","a6e00934f08d4b40b1ca9fe6ac50a148"],["/archives/2023/11/index.html","8bb2965f5fcdf35f140ed0df74c1e498"],["/archives/2023/12/index.html","9a1d059c5cfb64933d9b6e8bfd3bb87a"],["/archives/2023/index.html","9475743584116695b7ddf1bfdd9f58f6"],["/archives/2024/01/index.html","0d507e1bb1aff989556a34c3db105570"],["/archives/2024/02/index.html","f339879bbe99d89a893b99de46f150a3"],["/archives/2024/index.html","deb52705ba70aef9b52757d24ef27b71"],["/archives/index.html","95c40de9d90bcdf46a7e35ee67614458"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","0eeb3232991da288a36bb68b685ede55"],["/categories/CTF/index.html","80a4b739b99dadefe29b4fb6c56f8bce"],["/categories/PWN/index.html","72dcb4c17e478581d46b55ecd9d0a946"],["/categories/RE/index.html","c58bd5ade6caf36106c8396279423e6f"],["/categories/Web/index.html","a1e8c0a06e34732b5174165df32a2903"],["/categories/awd/index.html","e28f2165b6a3bc379ce593462bc32e34"],["/categories/index.html","db7956aac4b3856419999fdb53d8a5b6"],["/categories/misc/index.html","ca4ca3ac9354f4198bcf9a9b5b18d40a"],["/categories/博客相关问题类/index.html","4c92b3b9fa448d8715221f6286b0c46c"],["/categories/局域网攻击/index.html","25b54920d36193f005d4febcfce71d1e"],["/categories/心得/index.html","be345c8818ef40e9b5dbf097a03219d1"],["/categories/渗透认知/index.html","29f69cafc063cfe6e64432a759f436e9"],["/categories/漏洞复现/index.html","9ff6238a2625e191289531a1fae155bf"],["/categories/漏洞测试环境搭建/index.html","835a7b30dd5b2691be32b42c745c2138"],["/categories/赛后复盘/index.html","468428d0bc9eadfe776fa32095a59489"],["/categories/靶场训练/index.html","3d4637496342e09da4f4d13c763c8527"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","357b27edca8e978ab75ef18afdaa9c50"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","509de8f9549dd2f4978d711352221c86"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","064c6b72881aca13f4b53858ad9fff71"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f95d312e65e2deea4398cf830d8c638f"],["/page/10/index.html","b6e8b9e7a6cf10807879f237f91f7a6e"],["/page/11/index.html","b1df1e664f0192227cdb2ab70696fa93"],["/page/12/index.html","944ae74b094c7f2349d5719903ed2dcf"],["/page/2/index.html","0efccd06cfaef90abb3d46c843f36b20"],["/page/3/index.html","6f19405cc5c1b9c8cb9f9587a933dedf"],["/page/4/index.html","ff9f692f836eb042978019e58995a047"],["/page/5/index.html","641b2daccb3100253891408011e79c51"],["/page/6/index.html","4185f3fa6dd6cc47a4d475837d8f70df"],["/page/7/index.html","a6ebc9483cbb44945fb900678170cfea"],["/page/8/index.html","f125bbb261759f1b3266256356640bbb"],["/page/9/index.html","9a7e5119bc80dfe1af172fc1fd9bdd6e"],["/sw-register.js","68d8ca03f6943dce80b2a988f986b873"],["/tags/C/index.html","956b11bbbd074c9fa8fd2404df156d59"],["/tags/CTF/index.html","2c0efcdc9d5188f377ce8ae5f8c1cbeb"],["/tags/HTTP头部信息分析/index.html","8df459208e3959ee6209797d9cdc400b"],["/tags/MSF/index.html","23510f4c5d55d44c12c5afa6d1abcd18"],["/tags/PHP伪协议/index.html","cab95d7c8347262698454001d051735e"],["/tags/PHP特性/index.html","c319638620b587b141b60e95816173b8"],["/tags/PWN/index.html","f2bf3a6bda21e93248fa4d0d0927801c"],["/tags/RE/index.html","0cdf3ba41f191f7c78e2b8cee4bc70ff"],["/tags/SQL/index.html","2687f401c7f102ce1185a8250a9888a3"],["/tags/Web/index.html","f93b8f358563759cc613b0a018d2aa5d"],["/tags/Web工具包/index.html","271b289e2a19f2570f224ac80a8a7bf8"],["/tags/awd/index.html","8f82547dc654a29fe498db863ea91e3b"],["/tags/ctfshow/index.html","d63f3ce6b67f73ffc052c0644526224d"],["/tags/index.html","46d91b8cd841f568537e11cf527641fe"],["/tags/misc/index.html","72299f23b53f5ad51b61d622fac8b6f6"],["/tags/next主题失效/index.html","3bac8ee5ce65fc3023255b5008f97621"],["/tags/wp/index.html","175e428e26e11cc9a4477b409fc1c400"],["/tags/xss/index.html","18fb6e54b53cfdb1796ba557b900b10c"],["/tags/xxe/index.html","296b7dadb94d73871c628e8098fc2a74"],["/tags/不蒜子不显示/index.html","276253d255ac57b807793fe3bc3967c1"],["/tags/博客/index.html","4579562b8f33cc5cce0e1bd595313405"],["/tags/博客主题优化/index.html","4a3083dc74a0c29aa1398793beafda24"],["/tags/博客死循环框架问题/index.html","0ae3316d4cc5952eeacd00fbcd751772"],["/tags/博客部分问题解决方法/index.html","590dede145e6b1730f1ef6dcc30a0a6b"],["/tags/反序列化/index.html","3510efb5cc044e00391b67cbdeae78e6"],["/tags/命令执行/index.html","a9aa4a47356774de38da9595c88e06f7"],["/tags/局域网攻击/index.html","1fd2dafeddedab0fcc14926c478b8309"],["/tags/常用指令/index.html","e623b8bbe34b15df9cdb230527613d5a"],["/tags/心得/index.html","cf45389a078502a1b7fb6680d32f3c73"],["/tags/文件上传漏洞/index.html","39f1c764aa2a22136add8222fcd5b517"],["/tags/文件包含/index.html","7450cfd971fbed23aca22a351772e7cf"],["/tags/流量分析/index.html","0efef4e68b1584aca67d3dc962b7cd7e"],["/tags/渗透/index.html","3bc029eeb2737bae7e5c3c79b7e5e6c9"],["/tags/渗透认知/index.html","cdfd64913b5f4a39ef0fbd2a1c7981c6"],["/tags/漏洞复现/index.html","5348a9c45cbd14871f63b1433f6014e4"],["/tags/留言板/index.html","0c03995d31f41dff283d6cbd7828da78"],["/tags/赛后复盘/index.html","c524330520c1ffe756bdcb1cd865c755"],["/tags/靶场训练/index.html","c496b2f6a284801a1f2987a1cc55e509"],["/tags/黑盒测试/index.html","5295079f098d22b34b95e46119a53f0f"]];
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
