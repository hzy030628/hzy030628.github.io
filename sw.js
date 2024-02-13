/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","e1e974897fa7e2c43ca5a739d87d6b11"],["/2022/01/11/博客制作遇到的问题/index.html","7353c662db6af95f723b9d1dfd80adfe"],["/2022/01/15/C/index.html","3152cc72ae7f05e321e2edacab6419f6"],["/2022/01/18/新版next置换/index.html","887ab7eb6e050de6f077293aa11acbad"],["/2022/01/19/不蒜子相关问题/index.html","f90fde5fe5655e4d9996841fd600e138"],["/2022/01/19/框架问题/index.html","6a9000aa497953a93a0caae3a024b6fb"],["/2022/01/20/ctf之reverse/index.html","99a12a5c0a71740ca01393b76b15eb2a"],["/2022/01/23/misc隐写题目总结/index.html","cbacac57a80c50656c641f4f989ed709"],["/2022/02/01/684/index.html","482cc97540eb7f30689aa2ab834d7b82"],["/2022/02/03/留言板/index.html","1b471a9e96218720de8a8f4da6b95958"],["/2022/02/04/SQL简单注入/index.html","5c98f61521fd3d603e65bec410e84177"],["/2022/02/05/最全的HTTP头部信息分析/index.html","0ce2ea634f22bddfb708b3159a503681"],["/2022/02/08/ctfshow文件上传/index.html","b688175fde3568cc301bb15995364a53"],["/2022/02/08/常见密码类型/index.html","0fe04f7f12eaddf80e43360ca1b5f1fa"],["/2022/02/12/VNCTF2022WP/index.html","69d2753d1dfa521abc0e9ee29f5a4a94"],["/2022/02/20/ctfshowPHP特性/index.html","139c3abaa7338b85ea8844cb18dffbba"],["/2022/02/25/php伪协议/index.html","9baee6654529dc75f1213f232688bf78"],["/2022/02/26/ctfshow文件包含78-117/index.html","758c28b6bdb644231d55be565a2f2ae0"],["/2022/03/02/Clash漏洞/index.html","962842db370012322ed6bcebeb5a3d42"],["/2022/03/11/流量分析之题型解析/index.html","83b605916a7f8e7eee7a15ed1e911856"],["/2022/03/15/ctfshow命令执行/index.html","4c790e1afb77086c91601feb34a9b1f2"],["/2022/03/22/CGCTF/index.html","c3a353052aca2f3303480a84fa778759"],["/2022/03/24/ctfshowxss/index.html","1c948bc90b48b3f3f28882851f44aa1c"],["/2022/04/04/黑盒测试/index.html","dea84a99db2ebec265fd98e3dbd1ff4c"],["/2022/04/11/nmap/index.html","8b5243d19dbc0f4352f89219197aedfc"],["/2022/04/12/渗透流程简要记录/index.html","5f764ec4744c34619fe63eda1b98f59b"],["/2022/04/12/渗透测试之攻破登录页面/index.html","64eed11ad8e37468c60c95d8c62c31c0"],["/2022/04/14/xray扫描器/index.html","0296a52b0ece77f5593b72c79aaaae86"],["/2022/04/15/ctfshow反序列化/index.html","35f5cfca068216c239afb872920fb0c9"],["/2022/04/26/渗透测试实战/index.html","c8f7573049fb25797d67eaa9858101d1"],["/2022/04/28/sqlmap教程/index.html","dcde06cb0f7a91d81c73ee7cea24bc52"],["/2022/04/30/认知文件上传/index.html","17c9c12f45f5ddf589424b4615734d63"],["/2022/05/03/nahamcon/index.html","6427a75aa898716e4ba286f26723bf16"],["/2022/05/15/awd/index.html","ea1da169c1f8cdb123e327fae7307923"],["/2022/05/22/DASCTF/index.html","2f5dfbcf76e359a105bde19801fc1134"],["/2022/05/27/520/index.html","b9195cce0881569d3b791e0f991dd3a3"],["/2022/05/27/ISCC2022/index.html","4f39bce1e7262e0761c760618ce36348"],["/2022/06/01/第五届世界智能大会/index.html","095ca58291d4470cc36fbeedfa872414"],["/2022/06/04/SEETF/index.html","a9bc1715a22a1accb9915b5726cb8ca1"],["/2022/06/04/bcactf/index.html","60129f8ee8c30ebf93cfb6c724478151"],["/2022/06/05/BSidesSF CTF/index.html","3b154881dba09e9f50e3a2961eeff343"],["/2022/06/07/Docker部署web题目/index.html","adf6a606aa04f18f7fda0a18d054b5e3"],["/2022/06/09/利用oj搭建C语言考核/index.html","02bd4257d7a49864deb73e6a7b85e814"],["/2022/06/13/限免题目/index.html","3705791267b02d4603635623e5861909"],["/2022/06/14/钉钉rce/index.html","315b774c67d86484a3b4d13da4f641e7"],["/2022/06/16/内部ctf/index.html","d55c5cdc604a0fac5e85beb4dd1f792f"],["/2022/06/25/攻防世界高手区(一)/index.html","bf2ea2e0ec220445003687ab7dc3da36"],["/2022/07/01/两小时AK赛/index.html","b11a3932ae8ccbcaad72189c5afbd16d"],["/2022/07/03/鹏城杯/index.html","45929fc51459ee100b54aad29624c442"],["/2022/07/04/XXE/index.html","4c95e6e165fbd147a47498a469dd4250"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","0ed0311e275909535d3344d08c70166c"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","61b7d766488d04ab3c21e4f60aa84f41"],["/2022/07/08/chinaz/index.html","d86a5234aa96de15b647d4a4cef962fe"],["/2022/07/09/蓝帽杯初赛wp/index.html","54ec6e0ee18fa28b0ec29fd56c63fda2"],["/2022/07/17/NepCTF/index.html","0bbd65577eddab59de1d3e11f4471ebd"],["/2022/07/19/2022ImaginaryCTF/index.html","20bea00de41e564ae270da02ce0820d2"],["/2022/07/20/局域网攻击/index.html","3ba9bc88780589520c636978def5b1e5"],["/2022/07/22/2022BDSecCTF/index.html","2a01d3e97b47024542730122767d2d30"],["/2022/07/25/DiceCTF @ Hope/index.html","bfd63d4743426c5a89bf89d82040440d"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","c012abb595e8f3a9b9ca272f12b8e3fe"],["/2022/07/31/TFCCTF/index.html","10a3f86341cb93cd9a3bd90f12519a10"],["/2022/08/03/NSSCTF/index.html","378412d2156e42ad9df99a85b81d19ed"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","ec92e70f107525e6118f68d845fabc25"],["/2022/08/12/T3N4CI0US CTF/index.html","6d67023672fa750fa9c139d399180b50"],["/2022/08/14/SHELLCTF 2022/index.html","9af74ce97770953c1abec1faf667552b"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","0fca34ee5593b92059cc75bcbfe97308"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","babb65650a24b33e8c251dba345f23cc"],["/2022/09/16/柏鹭杯/index.html","752f60a88ff0eb39856b29a5ab5b44b3"],["/2022/09/20/HUBUCTF 新生赛/index.html","81168703d5965a1acb63fd626a0b0acf"],["/2022/09/27/NewStarCTF/index.html","447e036b10817a2334a8ded6d2a90564"],["/2022/09/27/bugku渗透1/index.html","8eed530343e375f5b68fd24f89869f9b"],["/2022/09/29/tp6漏洞/index.html","9c54bd1cdd3263f20c6ced5ae6a3efa3"],["/2022/10/02/SWPU NSS新生赛/index.html","6c84f092336516d522ce10e6867c7211"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","ae6a0fed060f0da3eb3bb370b531f094"],["/2022/10/27/Moectf西电CTF新生赛/index.html","507c856128d61648cdf0edeb2e2c307a"],["/2022/11/02/HNCTF/index.html","00b01fd9166714c9e56969a25beb9a16"],["/2022/11/04/2022工控CTF/index.html","59d1b926fd132e2d9705acc1907809f8"],["/2022/11/21/极客大挑战2022/index.html","6ceded1b1c6c582a0eea0d45f927144c"],["/2022/12/05/TUCTF 2022/index.html","f5d1b5fa0eced74032de26298486aa06"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","a09fbda8471772424c9219cfdf1c4d31"],["/2022/12/18/金盾2022/index.html","c34d21ef8666573b3f5d96ae3b2011e1"],["/2023/01/01/CATCTF/index.html","ea5f016aff8cdfaf6f4badb7e2fd7341"],["/2023/01/09/RW体验赛/index.html","390a7ef48c92c50509e273a98b197492"],["/2023/01/10/铁三/index.html","5cc5880ce787c256c28f1331aa325eca"],["/2023/01/16/Ugra CTF Quals 2023/index.html","d3e70eb68dc1d6aca28c8cd0088ec059"],["/2023/01/18/山石2022冬令营/index.html","401b70c07a38af828881f61a283b6d96"],["/2023/01/19/SICTF/index.html","8df7cd9b52169fcd920490bbdc8d1b2f"],["/2023/02/04/2023西湖论剑/index.html","089ec5ed3f04f1898a1095e71fe0c8a9"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","df38b52ff8090566e6df8a8785683378"],["/2023/03/04/公安/index.html","8eb8e524bac5431f307939b1d40f5d65"],["/2023/03/07/mysql之udf提权/index.html","030f8f1de6cd84d8a4f655708a449afb"],["/2023/03/07/红日靶场练习/index.html","94c343d6bb9e39bb894e14173422a564"],["/2023/03/27/NKCTF/index.html","1ed91e2d261e93a6fda7a285fb272bd4"],["/2023/03/31/楚慧杯/index.html","0d5ba4918608321e3c268d10719aac19"],["/2023/04/23/HDCTF2023/index.html","d69b1d2f8d3ec7022387edcb220663be"],["/2023/06/01/2023CISCN初赛/index.html","42d7b80aa02c1e5fe942c77768261ff3"],["/2023/06/28/2023CISCN[华中决赛]/index.html","2fb01e683f897432446325852ef373b9"],["/2023/07/10/CyberSecurityRumble Quals/index.html","fd3c90265c9c48a4c2c78ff32011063d"],["/2023/07/22/2023BDSecCTF/index.html","ec898bbc8d0373bd8bf80d241d2ea777"],["/2023/08/07/SQL手注小记/index.html","780e846f274f8dcbfdc138aa6a4a3f40"],["/2023/08/27/2023陇剑杯/index.html","f8b9687228718156f3ecb4e689ce8ec3"],["/2023/09/17/2023蓝帽杯半决赛/index.html","c44e7c16539e7a3859ad31e38b72c3b4"],["/2023/10/23/对于多层代理的研究/index.html","a9deb1b3522b67ff7b97498d788d4d6a"],["/2023/11/25/金盾2023/index.html","d4184fc7fc17b9171b9ba3d31925d8cb"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","8c9f657b238adf10369abf0b8484ec7a"],["/2023/12/18/2023强网杯线上赛/index.html","a02901793e602f3c78dfa0bc7eca1b3d"],["/2024/01/08/基础ROP/index.html","65bcc7316def7ccc67cb66d9c4f861c4"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","0e1516e771063e937fdd23cf30d3c766"],["/2024/02/13/打靶-Tr0ll/index.html","576f1e8d8ab6f728f508364f04b63a2a"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","5cc044904252276ad6c7390b1918661c"],["/about/index.html","75a7f48e073297481dc87d3011170150"],["/archives/2022/01/index.html","48985174fc633eb1f68fa1d940dce1ec"],["/archives/2022/02/index.html","e9a704172c975e65ba41dc5a92a61351"],["/archives/2022/03/index.html","2fb5b29e6f5ca9f552628b0e75e3d135"],["/archives/2022/04/index.html","0161f3510b9c5320e4d0dc2c761e29f8"],["/archives/2022/05/index.html","3575b6260c715ad865f454a02251eb63"],["/archives/2022/06/index.html","3fd312d00f30018b84c50737632784f1"],["/archives/2022/07/index.html","afc1fca3f83550dc21f10bb79900b413"],["/archives/2022/08/index.html","877ad4ae0d66cf0cebd0c26d1c839448"],["/archives/2022/09/index.html","3d056c42e2b95bf9d303168c99654ebe"],["/archives/2022/10/index.html","da7ba9523bc60c9b40110d1257b85ae4"],["/archives/2022/11/index.html","8ad6d8d156c4199e50184c48b132c439"],["/archives/2022/12/index.html","569fc8f9c8869a1751766379e85ca54b"],["/archives/2022/index.html","1f773d14ac9a25870de2d63cdfc24a17"],["/archives/2023/01/index.html","d44332bac04e28a3cb3911f924e2b991"],["/archives/2023/02/index.html","b2056e6185562670a2c79990266849bf"],["/archives/2023/03/index.html","8dbae1f440ec5de1115d8c474afcdba6"],["/archives/2023/04/index.html","a61ba6a0a69fe37efdbbb8a0e6551955"],["/archives/2023/06/index.html","dca7b2ddec040c229b77ae5fb8c114db"],["/archives/2023/07/index.html","cff6896923706c90880ac6b3520a499c"],["/archives/2023/08/index.html","c81b820e53aafc4f0b1764ba36fd6563"],["/archives/2023/09/index.html","1d32de72e82c600d9c4a053e485c3c97"],["/archives/2023/10/index.html","f05b9b2157f272ccf496d182e2dc981e"],["/archives/2023/11/index.html","79eafbaef860441cf4f2b969236b1400"],["/archives/2023/12/index.html","25ad715ca00a863214851f4cd6664518"],["/archives/2023/index.html","9d611bd69399580d612265f0a7460e10"],["/archives/2024/01/index.html","72eee71d5cb5be10cc54fa40c4e5444c"],["/archives/2024/02/index.html","7d89da864363efedfd80915a476611fd"],["/archives/2024/index.html","b7f6b02b7ad480540626f60052d1d206"],["/archives/index.html","0e253a75b2cf8a568c8913615be8c9ec"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","9febf97c1bc939c21f224bd28629b916"],["/categories/CTF/index.html","8400c82240d6727b37ed898b37db21b8"],["/categories/PHP伪协议/index.html","6ccba1ab8b3dbd72d6f8d5c4d4510130"],["/categories/PWN/index.html","c731ff42f7fdf2bff4907c9aad3ab0b7"],["/categories/RE/index.html","37e078c6fe0f3c9be6e2ea6be5ed88f4"],["/categories/Web/index.html","c14d430b30499ae4fc0930ec9888af68"],["/categories/awd/index.html","cd3c89ff1f34fa5ce7baad8a90d035aa"],["/categories/index.html","6bda1a19ab30525a0551bbe85db21b7b"],["/categories/misc/index.html","de214177f15ebe020ee673bb6d673132"],["/categories/sqlmap/index.html","b46416fafaf2dabc83a2748ec01d6ab1"],["/categories/博客相关问题类/index.html","bfd0fda8dd3beb2b40c41888f523ee26"],["/categories/局域网攻击/index.html","b3da58eafdf5659b10145e6bbe2477c6"],["/categories/心得/index.html","1e1234075c8002d489e490cc34ec3741"],["/categories/流量分析/index.html","f07f60ae136f1dadc2ccfdeb267ce37c"],["/categories/渗透/index.html","e274da9243deb1fac1339902aed1417f"],["/categories/渗透测试/index.html","d5c2962a84dc1b07619047dec9f8c2dd"],["/categories/渗透认知/index.html","05ef6bf936ada8a0a7df3065fc582a03"],["/categories/漏洞复现/index.html","f4953e2090dec483b79fb8052f4a2d62"],["/categories/漏洞测试环境搭建/index.html","3aba79f237f22b9692a9e76c7b2d8ef6"],["/categories/赛后复盘/index.html","90190477789e754d121522bf841f36c4"],["/categories/靶场训练/index.html","43527b7fffe03303789271eac28c0d07"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","74b3a2177ee52d4bb994310ed203f460"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","d6f12604857d16027dcecb2f1a57bc4d"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","c959b85f5345f2e6007b5dc9dddcc6ab"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5f4bf427a4923f9b5cd603aad0090b9d"],["/page/10/index.html","4b9530a70fc8ff9eb14ae271689a188a"],["/page/11/index.html","1229a9ad06e0fc212c89a100267f57a5"],["/page/2/index.html","0a9aa8996f5f599ec5b3a28019e4348e"],["/page/3/index.html","de1f8d7153dee049fc2242f14a5369ba"],["/page/4/index.html","864c9eb02161c08dd501d7ae280a1e34"],["/page/5/index.html","2f0cb09cf5ea8fd20c0e0a152063cbd1"],["/page/6/index.html","209971ddfae108c13a62d4d9860047d8"],["/page/7/index.html","ca4dc583e342e95a56aab7a738deb01d"],["/page/8/index.html","af14b5ff8b9d584897812fe7f6caa107"],["/page/9/index.html","f6b664f2687fe935c1dccec101a82f46"],["/sw-register.js","c1287cc87e1aba6404edfa57eed7dd4d"],["/tags/C/index.html","dba13313bfa3f0b1598640dd51df2a41"],["/tags/CTF/index.html","82e7e0285ac9fc97b63257097de57033"],["/tags/HTTP头部信息分析/index.html","9338d7c3e7eec167d5839c2cdee5dede"],["/tags/PHP伪协议/index.html","f9c9b090ba8af0b6d8aad52e79fe7e04"],["/tags/PHP特性/index.html","903136b87c0253289c3ad2aa1524428e"],["/tags/PWN/index.html","df856e84fd5adc77afb46f194692501d"],["/tags/RE/index.html","6f672587d420d64f05c40b2f5a9a114f"],["/tags/SQL/index.html","a4179b016bc93ab8853668de86202044"],["/tags/Web/index.html","70af9e4a4f8989de20b1f398f55bb3b6"],["/tags/Web工具包/index.html","0c86789752473a070c7a5f90940262d3"],["/tags/awd/index.html","1d34ba94fec056e2f7727ec23ef7078f"],["/tags/ctfshow/index.html","b2c657101b8a737ec326c2c11befb625"],["/tags/index.html","35d05c3a4b16fd8be04f34c185914a4c"],["/tags/misc/index.html","02aad7cdb65a4fcc5e4ec56c180b5f27"],["/tags/next主题失效/index.html","4d2fddfb9ad7737d90a9e97877f17c7c"],["/tags/sqlmap/index.html","460ee007bcd74bb195eeadbfbd323760"],["/tags/wp/index.html","b87cc617f52742ccc44e3697fa01e541"],["/tags/xss/index.html","d5aa51cd0af75604c3c6e2086726de73"],["/tags/xxe/index.html","88628ceac4654c73592f4a0ee465f82d"],["/tags/不蒜子不显示/index.html","fb2f0cd858ed07d2c54f991307e5ec54"],["/tags/博客/index.html","5171df90c5d52412eaaf17a8a85cd93a"],["/tags/博客主题优化/index.html","cdc9ef4e7b548734b6233eeb13604ea6"],["/tags/博客死循环框架问题/index.html","6148d6b11f09a426477e304ece912589"],["/tags/博客部分问题解决方法/index.html","b9dcf0f0e3d7da67dbbcfea1b785e48c"],["/tags/反序列化/index.html","59f03603eff6c666593b98e761752757"],["/tags/命令执行/index.html","8438ad9dca4b8147bcec30881b346ffe"],["/tags/局域网攻击/index.html","b4e931b0bf31d9e67f90546b3e31e4b3"],["/tags/常用指令/index.html","b309ecc1b6489600e763c1c969710b2e"],["/tags/心得/index.html","78168c8a462eb7cde4058fa3c1e0443c"],["/tags/文件上传漏洞/index.html","3477b9ed04cb5aec9f8cde727f89c2a6"],["/tags/文件包含/index.html","03ee07ae141ee210ebee111180254cee"],["/tags/流量分析/index.html","6cd267c5f47b9a3ae6a039c70e13f5d4"],["/tags/渗透/index.html","9037a415f2f440fbab41730f80a17a3a"],["/tags/渗透测试/index.html","5790534d3e69798d6689f03d8ce22b55"],["/tags/漏洞复现/index.html","828ca5be84578283b7e69b713ca2e4d8"],["/tags/留言板/index.html","471af3bc490b96005b836a2d7c8b48e8"],["/tags/赛后复盘/index.html","11b5935f4b146bb5c00ee7172af8a26f"],["/tags/靶场训练/index.html","d81459c648551a3b7ca1e8c4b676614f"],["/tags/黑盒测试/index.html","78bbabefc6fca99bd8558fa7a730994f"]];
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
