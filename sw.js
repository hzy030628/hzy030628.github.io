/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","b3852876ea61bbccac487aeec02849dd"],["/2022/01/11/博客制作遇到的问题/index.html","1dd023e252585398b81cdb0bdd621485"],["/2022/01/15/C/index.html","8734ca0bb06ab74280f99944fc3ba862"],["/2022/01/18/新版next置换/index.html","b1a4bc07549915da58bbb1868963dd98"],["/2022/01/19/不蒜子相关问题/index.html","ed2a3257ef5eea6049d3da9e5d486d3a"],["/2022/01/19/框架问题/index.html","19112b164563b4b192e5ba264d567772"],["/2022/01/20/ctf之reverse/index.html","7405212683b7cea186c8b4ea60bdbbdb"],["/2022/01/23/misc隐写题目总结/index.html","aa99babdadbebfa2916e25c5eda7d4a7"],["/2022/02/01/684/index.html","239765b47796e9ad10243ff241f8c7bd"],["/2022/02/03/留言板/index.html","e00074af8ede310fe89ace2a49107c7d"],["/2022/02/04/SQL简单注入/index.html","b0c6478547170db941ee1a122a42f44a"],["/2022/02/05/最全的HTTP头部信息分析/index.html","fac6d387fd6147f28edb6260be4d34d7"],["/2022/02/08/ctfshow文件上传/index.html","b09996e972569e8a785da5809c736be0"],["/2022/02/08/常见密码类型/index.html","e175012b63ba328bcf6d9912b07a7afb"],["/2022/02/12/VNCTF2022WP/index.html","ab9cf5016d9d0efba49d2a4141bf0659"],["/2022/02/20/ctfshowPHP特性/index.html","4a71e2250f003847b085d432c90b8387"],["/2022/02/25/php伪协议/index.html","a0108e0cecb6585432cfb935d76b520e"],["/2022/02/26/ctfshow文件包含78-117/index.html","d21cac248d87d230ca9133cda69b8d33"],["/2022/03/02/Clash漏洞/index.html","73c9a0812ae5c14073dafd0f7e6437bf"],["/2022/03/11/流量分析之题型解析/index.html","0d0c6fb81ffab5b20a15108de8b75812"],["/2022/03/15/ctfshow命令执行/index.html","1df3c7ed37530bc8f2c96079ecee1cd5"],["/2022/03/22/CGCTF/index.html","2b1c9e722005b7a651fa37ad014db46a"],["/2022/03/24/ctfshowxss/index.html","56b06d2e5c3c44df5f833a222d1d3eba"],["/2022/04/04/黑盒测试/index.html","64c3bdd7add83638e19e1bea67c8f588"],["/2022/04/11/nmap/index.html","86a6d6ee8dfe807256bc054dba7c53ef"],["/2022/04/12/渗透流程简要记录/index.html","4f4cf1516116e526c6cf7640dab7fc3b"],["/2022/04/12/渗透测试之攻破登录页面/index.html","755059ec9cb9faa26ba7ff4c362dcb61"],["/2022/04/14/xray扫描器/index.html","2886cf2b254b0372665732deba1bfc66"],["/2022/04/15/ctfshow反序列化/index.html","803eb6bc1b2c2a93f1a066906ccd3bb2"],["/2022/04/26/渗透测试实战/index.html","83c3673f93f28cf528d87dd24e1e5a99"],["/2022/04/28/sqlmap教程/index.html","16c08190caea966123a9baafdda086aa"],["/2022/04/30/认知文件上传/index.html","1991941b5e2cb5e3b42d0d49a6ea3603"],["/2022/05/03/nahamcon/index.html","3d4e060e89592a553cfbb54da2248317"],["/2022/05/15/awd/index.html","3cbbcb3e5d9ce2ef8b1908d0bf3e8fb4"],["/2022/05/22/DASCTF/index.html","3b71d6736b16a1f58b5cca73caf2cd46"],["/2022/05/27/520/index.html","ab621de1639b9103aa55d86f5d6dbb38"],["/2022/05/27/ISCC2022/index.html","731cbae822c9271103ded6702c6b9f5e"],["/2022/06/01/第五届世界智能大会/index.html","5f130c5d419e0decb79f47d801ea932e"],["/2022/06/04/SEETF/index.html","85bbe38e836de78aece1762557ad185b"],["/2022/06/04/bcactf/index.html","d5648dddedbd554b05e64ae15686013a"],["/2022/06/05/BSidesSF CTF/index.html","5b4b91edfaf0aabfcc512355175f665b"],["/2022/06/07/Docker部署web题目/index.html","a9df1a22eb4ca88995819bcc4e89360b"],["/2022/06/09/利用oj搭建C语言考核/index.html","37843befdd10523a47fd7dc9cf401b61"],["/2022/06/13/限免题目/index.html","e2974199a4cd95bed57f650af4e8ac8d"],["/2022/06/14/钉钉rce/index.html","15aab1ce5eae58590a1e9410afe1f2d6"],["/2022/06/16/内部ctf/index.html","a2b238f26488086ffadb563b1e81859b"],["/2022/06/25/攻防世界高手区(一)/index.html","33bad06e974d534c1842d42dc5650180"],["/2022/07/01/两小时AK赛/index.html","528327d02825701a6f3b4f80897e6f67"],["/2022/07/03/鹏城杯/index.html","f29667fd2c9cddfe7f0315a79a44d230"],["/2022/07/04/XXE/index.html","9178794ee7e220899b664abeec6b73a9"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","5ec2827238117fa6cc7eddb54407ff75"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","580dab0139c07d3bb0cfabb16fa9903f"],["/2022/07/08/chinaz/index.html","7c6147f7bc2c54b269395d5b0b337478"],["/2022/07/09/蓝帽杯初赛wp/index.html","2f69d18454c1cdbc19e3c697c3170741"],["/2022/07/17/NepCTF/index.html","7f78699e2782be54252eb05912957bd7"],["/2022/07/19/2022ImaginaryCTF/index.html","eb978f65a000934316b1e6539c7ad2b8"],["/2022/07/20/局域网攻击/index.html","bf0d888fa7c2a2e10212fe4b0f240069"],["/2022/07/22/2022BDSecCTF/index.html","70c1aff05c91e124ca9c6f1e7c1bbe04"],["/2022/07/25/DiceCTF @ Hope/index.html","511bb38dba4a23fd7260bc2df0a600c7"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","720bfafd2f3550a8694c2f5bb6158bd7"],["/2022/07/31/TFCCTF/index.html","df1c9df85c99c638d3fef063c85cb77b"],["/2022/08/03/NSSCTF/index.html","88d4413d460448a7f7dc9a04f5c9f11e"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","6bcf6b1ea2b9b8fdaab7bef474736642"],["/2022/08/12/T3N4CI0US CTF/index.html","2e8117c23e5b3a56e70888a584c339a9"],["/2022/08/14/SHELLCTF 2022/index.html","8728f07d84802b87775e92f3a4df77ba"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b4ce6eebac6fb1778992dda6781ae162"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","3cd8bbbd64f759dbd87d8c123b905698"],["/2022/09/16/柏鹭杯/index.html","d10f8f7dcfdaa4c0b2784498f58c3cc8"],["/2022/09/20/HUBUCTF 新生赛/index.html","8f9c17cbe1e0482c336d4b7292e4b6ca"],["/2022/09/27/NewStarCTF/index.html","4a9bf6a4a7042a7acb4c2440cc311bd2"],["/2022/09/27/bugku渗透1/index.html","aca4d07f671e86aa8086ea0f2e1465e9"],["/2022/09/29/tp6漏洞/index.html","734f79cce65f62ac882dd09c9be30989"],["/2022/10/02/SWPU NSS新生赛/index.html","60577e359a40d43f2f6f2ea8b11295aa"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","113477f3a1aa62f0d1e122efc3d0c256"],["/2022/10/27/Moectf西电CTF新生赛/index.html","399d18ac668d88b9f31401b8c60101a5"],["/2022/11/02/HNCTF/index.html","ef24d07f604c1eccafbc61ba9522d00e"],["/2022/11/04/2022工控CTF/index.html","6984929de2aab27d5b1e604c86a7a31d"],["/2022/11/21/极客大挑战2022/index.html","ba1daefd7de9b8ea04955718dd803ecc"],["/2022/12/05/TUCTF 2022/index.html","19aab8c3489cd8d9d56db625d43bb4f0"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","947e7d6a5cbce00fd487e4a93c29c549"],["/2022/12/18/金盾2022/index.html","a3039b1b89b2291eb157a18e940678bf"],["/2023/01/01/CATCTF/index.html","154028b50e06ff3fe3b05b114b042f92"],["/2023/01/09/RW体验赛/index.html","a12bff4bd8372538f465760eb28937f9"],["/2023/01/10/铁三/index.html","9a28b8d0613d0fd15944a4a503c46c60"],["/2023/01/16/Ugra CTF Quals 2023/index.html","837ef5b427e7e5508fa78025fc59411f"],["/2023/01/18/山石2022冬令营/index.html","55ad864eb8e78e20b801416e035760aa"],["/2023/01/19/SICTF/index.html","fea7550da0c3d180e3f8e04f481ff6e5"],["/2023/02/04/2023西湖论剑/index.html","d52824741789966be2b7613206ca6712"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","e84c1c8fb9bafa033c38780ab775aa3f"],["/2023/03/04/公安/index.html","e864919175593ca153cc5c2ae9387340"],["/2023/03/07/mysql之udf提权/index.html","a64fabe3c36e9fff2b9bab40fc9303aa"],["/2023/03/07/红日靶场练习/index.html","c02dbe8189a8001fbac460b3103755db"],["/2023/03/27/NKCTF/index.html","ef8ce7471ef6f16e31a8e9dabbfffe1c"],["/2023/03/31/楚慧杯/index.html","9a0d0c22038ea019afd9e4f6a39319df"],["/2023/04/23/HDCTF2023/index.html","34a37646b624033d6ad6c1fa9f5bd05c"],["/2023/06/01/2023CISCN初赛/index.html","3e292575f4f09bc0a21d5a2c487569ea"],["/2023/06/28/2023CISCN[华中决赛]/index.html","9955b72ae1fb4216cdc1333908e9063b"],["/2023/07/10/CyberSecurityRumble Quals/index.html","5b01cddcf7ad638b58c255ce166fb5a9"],["/2023/07/22/2023BDSecCTF/index.html","9543e1d036d8ac24efe468073be9d492"],["/2023/08/07/SQL手注小记/index.html","a37385c0ffac1e79564c049b1bea4bb1"],["/2023/08/27/2023陇剑杯/index.html","400321aa0daa5206a9256bafbb871e9c"],["/2023/09/17/2023蓝帽杯半决赛/index.html","218e25d4a882fdb2a5c3d32cac47ac23"],["/2023/10/23/对于多层代理的研究/index.html","6c188089d3ed657a286792f67de9b262"],["/2023/11/25/金盾2023/index.html","9e990c8da05b8d75561ae41dc087ff8f"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","c7d36ad0c770fb4a344610157fbde73f"],["/2023/12/18/2023强网杯线上赛/index.html","b41c5aa2a83299a3271fe19926d8ebe1"],["/2024/01/08/基础ROP/index.html","3fcdddbbdb78b571fb7c123e9b417f73"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","ae4846c83275dfd28d7d0b7d09fed31d"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","952e605b733ac612f486b4d3cb9cc123"],["/about/index.html","10a99855a296484f2f7448b1c7a62cce"],["/archives/2022/01/index.html","82a8ee0f8487657b01b73bc376bd65bd"],["/archives/2022/02/index.html","dbc7bb4e3a8e4b181cd5b6c47928448f"],["/archives/2022/03/index.html","23e37937abc28456b9400c2993285e96"],["/archives/2022/04/index.html","81da38a75f97d8ecae8dc75c05f291ca"],["/archives/2022/05/index.html","81c575402a16a059bd6fa0b8b891cdcb"],["/archives/2022/06/index.html","cdfc09b7807f5bc2074d5b9a8825a6de"],["/archives/2022/07/index.html","c94de4a3769919f62383b4861cac53c7"],["/archives/2022/08/index.html","3bf1022671d8e8b17de1067b426eb130"],["/archives/2022/09/index.html","a9b3aae3f9cc2b5e98988e4885b0c9fb"],["/archives/2022/10/index.html","43a3e62aab12ed490ae9b7e025c74838"],["/archives/2022/11/index.html","ed7250420677c6fc77dcc78743d81e8b"],["/archives/2022/12/index.html","a516b1475e1dddbbcbc159f9f569eb8d"],["/archives/2022/index.html","374fadfef941957fefc401c8e6c71e62"],["/archives/2023/01/index.html","15ea9e248d830a9061b51056dcabbba6"],["/archives/2023/02/index.html","8d5ede4c446620f80cdb033cd0d7ec4f"],["/archives/2023/03/index.html","6b0a27991a590c9503c596a5e2879689"],["/archives/2023/04/index.html","41015c1710e1f0e6e88dd45b1206c84f"],["/archives/2023/06/index.html","508213126926bf9594ac7ee3fc5fffb4"],["/archives/2023/07/index.html","c39f29eb0f58e41f6c41d6d48f9c91be"],["/archives/2023/08/index.html","d7087a7be70a08d91d120a43dea26e7d"],["/archives/2023/09/index.html","5e958319f5d4698d25e0de58ca7804f2"],["/archives/2023/10/index.html","c1c497a7e7c10b33754e2da478e19153"],["/archives/2023/11/index.html","2e72955f296211d6f787e5dc8192ee7a"],["/archives/2023/12/index.html","e429b83903995ba0752053f5b0243c9f"],["/archives/2023/index.html","c1c3da370bb359f1b65ec47100c1c9e2"],["/archives/2024/01/index.html","77d00af91376af6b45d4cac4697ab154"],["/archives/2024/index.html","59cf21aa27a7073de1cdac1284d50ed7"],["/archives/index.html","d3c22845bebeff206b807d410e342eb3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","e9a3d024d37e6d417f34fccc7fd42fde"],["/categories/CTF/index.html","9823b5f3817df23a9b2bcdf7a9f8ef91"],["/categories/PHP伪协议/index.html","556af0c425637fccb757adbf20e01433"],["/categories/PWN/index.html","379acdaa21fed2e4a36107089d842381"],["/categories/RE/index.html","0640950cc74e6b652a8b69328fa60de7"],["/categories/Web/index.html","8cf35635c5cff790dbe4b9aec9c54604"],["/categories/awd/index.html","88b1ea48acff7b72627a036a0c09dda7"],["/categories/index.html","89df19e6e7af7e9330828f0a9461f75e"],["/categories/misc/index.html","3f92ab75dbee809dda2c49f924a187a6"],["/categories/sqlmap/index.html","dfca399370f0feaff29f3d240832cbc7"],["/categories/博客相关问题类/index.html","35a498f8be59d66377c8088e33b543bd"],["/categories/局域网攻击/index.html","16bfbb8e61203311d184e269de543b2f"],["/categories/心得/index.html","c587f0010fceb797205c1ad0323b5bc6"],["/categories/流量分析/index.html","097c9e97f70e45a166850585546da3c3"],["/categories/渗透/index.html","adc73847a74ca3e44367293e483a26a1"],["/categories/渗透测试/index.html","54658c030c19ed6f80c10fb2d627184f"],["/categories/渗透认知/index.html","a036ef174ab601e328322a8710cc8e17"],["/categories/漏洞复现/index.html","79fb6091a3dd99b2b801ef1d60b5fb2b"],["/categories/漏洞测试环境搭建/index.html","749f55c21a0d15dd8d10f50d14b46504"],["/categories/赛后复盘/index.html","32e180684e17ecb4bd6bd7b661406650"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c8552ef43d8ecc78bcce324f3f3e00b6"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","87ea5124bf2ef62489eadc0eecaa6e42"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","279ef31f6c58966cbf823e989e1e7d5e"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","423a056d54fa5316cade61c2f0a30ac7"],["/page/10/index.html","b6e3ac92227f79506d241b2ed90f0e95"],["/page/11/index.html","b8c05f2248d33d8fdc7734234b2fc45b"],["/page/2/index.html","7bdce5b0173da53a17a3636223005dcb"],["/page/3/index.html","1d63b440173eac7a1483b9f6030560e6"],["/page/4/index.html","1815cc6769dc0ac1062b4df43d95b4d8"],["/page/5/index.html","35559ec61406ee57334470e1efbe06e3"],["/page/6/index.html","c00acd20724a790ad5d0f5cbc552b443"],["/page/7/index.html","75ac9a27c86786d08bd3d9c460cb71f8"],["/page/8/index.html","80c240bebbf93d4f3df6fd246cd48a32"],["/page/9/index.html","222bf8b3ea508ead7b606bf972b49f99"],["/sw-register.js","bce07fc982dae637894974d4335a7bbd"],["/tags/C/index.html","a56c089c7c9090af28a109315e73eb7c"],["/tags/CTF/index.html","767260a6dc6cc036001bf3de9b752203"],["/tags/HTTP头部信息分析/index.html","c751a90eaf4b9dcbcb4adea815c24b02"],["/tags/PHP伪协议/index.html","405fd5c2a631639942d60039a9e63b43"],["/tags/PHP特性/index.html","839506784e4704df8c50e12686440aa2"],["/tags/PWN/index.html","9b50d9aece00286eef24f7fade6bb81b"],["/tags/RE/index.html","ba1e7c3224f1ddf8cf68c7a2a8900e6b"],["/tags/SQL/index.html","6a418264f02455acdff309879b067d41"],["/tags/Web/index.html","6c0e51c4946cec825d92f858dd9c74fa"],["/tags/Web工具包/index.html","2604075467037347ab84758c3156fb59"],["/tags/awd/index.html","2fff412aa9924cdf1d0bd307defadce7"],["/tags/ctfshow/index.html","328bed062d2d253d0a3deb4820ada49e"],["/tags/index.html","a35b9f4957d72ac9ed875388a205d5a7"],["/tags/misc/index.html","79b328d6f7abc4f03f2a0f27c3b329a7"],["/tags/next主题失效/index.html","37bdbac777f30bb3a2b7cefaba0ab7df"],["/tags/sqlmap/index.html","571888a345957fe48b0dc51446ca906d"],["/tags/wp/index.html","d16c37ec75aef3c71117fbede0b42e39"],["/tags/xss/index.html","7b3a61e02faed4140439bdf8491ff12c"],["/tags/xxe/index.html","90d5c2f5e539f81d9a6facc967804c8b"],["/tags/不蒜子不显示/index.html","7894b99c209fcfdf87a3435735663a7f"],["/tags/博客/index.html","dc8f31748fc97a49605fc31c25ddfb01"],["/tags/博客主题优化/index.html","5b711e776b737314c7e2c4d45414216c"],["/tags/博客死循环框架问题/index.html","8895efe51f0d283f7cd82320e46d0bd0"],["/tags/博客部分问题解决方法/index.html","62d341d541f261ba0ff3704b06133fe1"],["/tags/反序列化/index.html","2d093deb304a981b5efd61a2dd5e685f"],["/tags/命令执行/index.html","b9ddf3f0c227f11d92399b5b5623bcd5"],["/tags/局域网攻击/index.html","8e709746a46413d4961936e4193a9511"],["/tags/常用指令/index.html","c46c6f5c5cde7ae1d48b7991887a82f1"],["/tags/心得/index.html","e8290a9e209ff85cb739d5af17927bc3"],["/tags/文件上传漏洞/index.html","c7d647904a447e272da8461ce1fb93c6"],["/tags/文件包含/index.html","b3c7ff6e5be57577360ded7ed19c6ec4"],["/tags/流量分析/index.html","b91f73b951adb9fbe16896c6d7a54283"],["/tags/渗透/index.html","7772b1486a0310631420ac0c09f267a4"],["/tags/渗透测试/index.html","2971c7ef8640b94e714997a4600c484f"],["/tags/漏洞复现/index.html","dedf974f243327d105fa13a1a1dc3aab"],["/tags/留言板/index.html","15e5c775e6a97489bef69900104ed063"],["/tags/赛后复盘/index.html","bff8206b1d1a2ff834296c9df47d3562"],["/tags/黑盒测试/index.html","49c2dc608ff97a04668fcbc15ecaa858"]];
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
