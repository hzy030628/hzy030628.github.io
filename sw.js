/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","bc4e0f59b8dd561a627404d2a16a85ff"],["/2022/01/11/博客制作遇到的问题/index.html","a33cc2a1f2d7aebbaaeb6fc9b7a3607e"],["/2022/01/15/C/index.html","bb3c5fd31ae1c8d5a034a2c47f17a19a"],["/2022/01/18/新版next置换/index.html","b37311e8e0c7d4b41c229fa1f16aef5b"],["/2022/01/19/不蒜子相关问题/index.html","3198464df83eb1e739403220fb07694c"],["/2022/01/19/框架问题/index.html","9dd74b26da3f109303a723e85f616e78"],["/2022/01/20/ctf之reverse/index.html","b54100b5b22cd97d228b5bff98b10fca"],["/2022/01/23/misc隐写题目总结/index.html","75996089ea2b2b10b1f90f24da6d3680"],["/2022/02/01/684/index.html","be201f2a1e37eb30c2bcffc86e504edb"],["/2022/02/03/留言板/index.html","e3e5f69cdeb674bf64e0797f59e5d35d"],["/2022/02/04/SQL简单注入/index.html","e302a34adc4d1b65d137a464715ab9da"],["/2022/02/05/最全的HTTP头部信息分析/index.html","474fe091e15113000a5316fd4ea1a8f2"],["/2022/02/08/ctfshow文件上传/index.html","28e2a7d24d981a4d8d99b5b29c2faeab"],["/2022/02/08/常见密码类型/index.html","d71ba7d9b97aef35383c964f8248462f"],["/2022/02/12/VNCTF2022WP/index.html","50a169f295d09d107887d0c56a704bc4"],["/2022/02/20/ctfshowPHP特性/index.html","6cd89c1cecff107fe625a5ec41cd3186"],["/2022/02/25/php伪协议/index.html","1002c11f17469a133c337a985cab98c5"],["/2022/02/26/ctfshow文件包含78-117/index.html","3862fdfcb1ff616b045f4922ad722dc5"],["/2022/03/02/Clash漏洞/index.html","0c039d3b6fc9d6b6ef1050581539e82f"],["/2022/03/11/流量分析之题型解析/index.html","05a43b529b2036df531978c05921040c"],["/2022/03/15/ctfshow命令执行/index.html","7db9f416eb05dae8ac85ca2469398b67"],["/2022/03/22/CGCTF/index.html","0072d943f684771c4287026c87db8e36"],["/2022/03/24/ctfshowxss/index.html","9ec25e27b4f958e2105a46c3ca471a06"],["/2022/04/04/黑盒测试/index.html","7974276e0906f7845183817079e2602c"],["/2022/04/11/nmap/index.html","c0a3fd26eaea912aabf9d5ee96ce3087"],["/2022/04/12/渗透流程简要记录/index.html","b48e4dbd55de90093d68f44546a7e2ca"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a9b6142510167fc16f97970d9b6b2ced"],["/2022/04/14/xray扫描器/index.html","d6940f558f9370d5412ffb237deb99be"],["/2022/04/15/ctfshow反序列化/index.html","6419b84148d274312a135c5dfa6932a2"],["/2022/04/26/渗透测试实战/index.html","fb04cd5e23bf735534e1791289529edb"],["/2022/04/28/sqlmap教程/index.html","390ece5809f29c0298aedab3377d52dc"],["/2022/04/30/认知文件上传/index.html","1a32bb54958a36bbf33fac5bf45ea4c9"],["/2022/05/03/nahamcon/index.html","fc74aae87821e556288ab9c2f12f7024"],["/2022/05/15/awd/index.html","b6fc718429e4aa26f41163f59ae2a43b"],["/2022/05/22/DASCTF/index.html","69ae449c2ebe23bd300fcf310504f496"],["/2022/05/27/520/index.html","95538c6be82634704f39a0400b6d9238"],["/2022/05/27/ISCC2022/index.html","9c43e664c8d2b9449a4b3684010e8c3c"],["/2022/06/01/第五届世界智能大会/index.html","06f366df190c10d1775adb356b982477"],["/2022/06/04/SEETF/index.html","d01f7939f5864b8d4138c2f1ede8bb7a"],["/2022/06/04/bcactf/index.html","709b3a577940224ac774f1eaafe819ed"],["/2022/06/05/BSidesSF CTF/index.html","8aa25f96a825a3bfb7f0da4bee23e631"],["/2022/06/07/Docker部署web题目/index.html","9774cade4c9e8e522958a0f3d5647e49"],["/2022/06/09/利用oj搭建C语言考核/index.html","7508debafaa7306b910daaf9673b5b35"],["/2022/06/13/限免题目/index.html","ea2235d2bb145e3ebc2f24742741476d"],["/2022/06/14/钉钉rce/index.html","8b56be19f6fda9f87bafacdd13204608"],["/2022/06/16/内部ctf/index.html","a4ffc0cf4bde52cd26f7183791daa1c3"],["/2022/06/25/攻防世界高手区(一)/index.html","52eb2feee95ed58c494b539681dae479"],["/2022/07/01/两小时AK赛/index.html","9509612959607c643b5f6492b2d3d30a"],["/2022/07/03/鹏城杯/index.html","16ffa7d0c11e37a25882cb203d9452c7"],["/2022/07/04/XXE/index.html","4f37783e7fda68580dce5874384b3e84"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","190abb56fbbef6f2ce248afb5a00d054"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","9fbe3119b63a9806517d4b1cde62d0f7"],["/2022/07/08/chinaz/index.html","6eddd53aefce368941695601ed80ec90"],["/2022/07/09/蓝帽杯初赛wp/index.html","ce0185a22a253034e3dd9801b536abdf"],["/2022/07/17/NepCTF/index.html","3c0c2e56d5a1e74d96e961d3f0fb8b3a"],["/2022/07/19/2022ImaginaryCTF/index.html","d25bcffad8d9e67ad4a0d946f4fde367"],["/2022/07/20/局域网攻击/index.html","dd081ad1f5035da81687cafd79b68872"],["/2022/07/22/2022BDSecCTF/index.html","b24e43e573f0872c1676df117b781e71"],["/2022/07/25/DiceCTF @ Hope/index.html","ac1a0f20ee31ffedd27d6a660d8445ac"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","51cba1dc520e2e5475d61c5b684e8465"],["/2022/07/31/TFCCTF/index.html","cfa75c38ff75390efaf19f9e4bfd5888"],["/2022/08/03/NSSCTF/index.html","2f274c7a190cfc5bb6de8b5c0eb4fec7"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","fcbca3eb874acdd87c7f747994b73b0a"],["/2022/08/12/T3N4CI0US CTF/index.html","b601e7f8b3a1df527af0344893cfe76c"],["/2022/08/14/SHELLCTF 2022/index.html","924f9a3faf7684e8dc31c0b54dd294ea"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","d96f267607a9ad17915b42e539b309d1"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","d25de93e16c30bbacebf2a8f8feaba10"],["/2022/09/16/柏鹭杯/index.html","d933f64b07ef111abeb536b873c49b52"],["/2022/09/20/HUBUCTF 新生赛/index.html","087f89edb3398f49640ebe9d4128ceba"],["/2022/09/27/NewStarCTF/index.html","1f660cce6767ff4c5c0d4f9190ff5ff1"],["/2022/09/27/bugku渗透1/index.html","2fc19d91f1ccfa78a4ea43f7336e4f84"],["/2022/09/29/tp6漏洞/index.html","237576eec0f1a3b25051780b476eb4ae"],["/2022/10/02/SWPU NSS新生赛/index.html","a9ad8a117404d57cb19f899393d70856"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","8e2003e4478bdb3cc45ea7d62c9dab02"],["/2022/10/27/Moectf西电CTF新生赛/index.html","d049e2bc44fb3b483dfd7e0cd294c94d"],["/2022/11/02/HNCTF/index.html","5895f6dd824fe1b059cf44e2abbe8b23"],["/2022/11/04/2022工控CTF/index.html","1be58fdc0d5192801cc26cf578b85f8d"],["/2022/11/21/极客大挑战2022/index.html","4218818e92c6ef55ec323ce6e9f39634"],["/2022/12/05/TUCTF 2022/index.html","c22b655ec4812f841ce8d65e0d2e24d3"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","ea7fef6eaec2934af3568582af9388d6"],["/2022/12/18/金盾2022/index.html","50084c99b12ce436c435c17a9a7dce62"],["/2023/01/01/CATCTF/index.html","086c6d2fcfbc619453304ac153c7a23f"],["/2023/01/09/RW体验赛/index.html","f6c2a4b0159e564f4ecae512586cc460"],["/2023/01/10/铁三/index.html","4cef5bba2877f9d42e1733bfa764c3fe"],["/2023/01/16/Ugra CTF Quals 2023/index.html","701833e4532cabd0dd90a2d14ff6ac27"],["/2023/01/18/山石2022冬令营/index.html","15c978e81d177cf1734dbfb14762011e"],["/2023/01/19/SICTF/index.html","722f15ab29b56203ff0a22fdcc406615"],["/2023/02/04/2023西湖论剑/index.html","d93ecb6805929aa362bb5cadb662720b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","7db88f72610612014a729397ec48a4a5"],["/2023/03/04/公安/index.html","f7bae68915abb077bd3e9e6283069507"],["/2023/03/07/mysql之udf提权/index.html","4fa66fd02d6e2168c5f7e20b6dc107e4"],["/2023/03/07/红日靶场练习/index.html","be855cf680816c7afb9974bd231b8465"],["/2023/03/27/NKCTF/index.html","fde954ef9420ac31d1b389fc711a2a7f"],["/2023/03/31/楚慧杯/index.html","3c4d4e0e97beb0381c2c94bfa61101aa"],["/2023/04/23/HDCTF2023/index.html","d580ffe9b080f204b9fa431ed0d2eed0"],["/2023/06/01/2023CISCN初赛/index.html","865bfdd98bb3873543d7020cd68dc0ad"],["/2023/06/28/2023CISCN[华中决赛]/index.html","09acbf51e6d84720046212996ff1d54f"],["/2023/07/10/CyberSecurityRumble Quals/index.html","d99057d0c2cf89dcf18dab431ccccf04"],["/2023/07/22/2023BDSecCTF/index.html","9a181d772a44a33715cee036068d6710"],["/2023/08/07/SQL手注小记/index.html","be57235888ba4846d4c10f20880debd3"],["/2023/08/27/2023陇剑杯/index.html","db734387e62cdc4c7aa601eeff3a42b7"],["/2023/09/17/2023蓝帽杯半决赛/index.html","549c019a1aac5004dbf89a4d4f1b2e5e"],["/2023/10/23/对于多层代理的研究/index.html","ade73378111de596dd40c9f857172924"],["/2023/11/25/金盾2023/index.html","b0097b5f44ab299144f490600d2c03e4"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","08df52567266a3db636cc53709cdcb71"],["/2023/12/18/2023强网杯线上赛/index.html","33183d3b60f6bca9c8419eda226086c4"],["/2024/01/08/基础ROP/index.html","ac98d5c64a20f54a3895305718b4be5f"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","6ac95fd999eb7f697935a1213418a069"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","962f2c2ab8d2953bcd1ce3a6ee5e9d9c"],["/about/index.html","414216f03a4288e856783600803a799b"],["/archives/2022/01/index.html","abdb89555b7f737d83665f02d3719cde"],["/archives/2022/02/index.html","e99bb7a8be26abfce75f1068acdcb4b9"],["/archives/2022/03/index.html","3c542e11140234a604eade1d9a409f75"],["/archives/2022/04/index.html","6ddbd0196a016fd2518fdccd5b75101d"],["/archives/2022/05/index.html","15c0d50d4d0766b73bbe180861e27989"],["/archives/2022/06/index.html","97f28cf546c3ff18e1f01310ac1c51e1"],["/archives/2022/07/index.html","134be53f33eede7cec81373dc5c724b2"],["/archives/2022/08/index.html","966c317d7a21f81da2e6a51de34bd606"],["/archives/2022/09/index.html","fd0b6114b7192eb5a944874c0de6c533"],["/archives/2022/10/index.html","5aca13a42b45760b5a4c8b3f8f6b8118"],["/archives/2022/11/index.html","d0f57d210ac6ae4d87ebd422885c5935"],["/archives/2022/12/index.html","28ce284e38f60f376134c6b0ea529e49"],["/archives/2022/index.html","b3bac8535825c9c758b787247b184a19"],["/archives/2023/01/index.html","8fee4399433241abd1614c62b35ef736"],["/archives/2023/02/index.html","beb86f57cde325396aecefc6309a5011"],["/archives/2023/03/index.html","c1a6e1346f0f6496a9084c00260ae994"],["/archives/2023/04/index.html","f636b795a5853ab109a2a6c2b0ef8cbc"],["/archives/2023/06/index.html","1399352ab230e6f0203459a6882b46cf"],["/archives/2023/07/index.html","4735b203d9059136374e07dc78c3b483"],["/archives/2023/08/index.html","76a4bd9f13ae559fc474df16701d72a1"],["/archives/2023/09/index.html","0b9c68d22ad43fb47d1159b58cb798d8"],["/archives/2023/10/index.html","76c069b6c473cabc2c694e3a6eb43e88"],["/archives/2023/11/index.html","97d0df8ebaeb94ffbb4d6f25ce246da8"],["/archives/2023/12/index.html","6da7b0625e17960a96069db0ba53662b"],["/archives/2023/index.html","3b1d382f79ca6d22d5740d62aef41c4d"],["/archives/2024/01/index.html","1132a107ec468bc9a07d74d189fa9660"],["/archives/2024/index.html","eed823030cc2d316bda1c0cd00f91721"],["/archives/index.html","042582d552e1ec7e2497eeb863249b32"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","6896a725032cebc46392868cfadcba68"],["/categories/CTF/index.html","896a347ff56336a1e1b55d5a5dd5a69d"],["/categories/PHP伪协议/index.html","c3d7ac7bd005e1f49431dc30dfb01fe6"],["/categories/PWN/index.html","f0e8c37e06186a24ecb079e044c07a7b"],["/categories/RE/index.html","ab05b5f677a05d94ced7f0b157c9c811"],["/categories/Web/index.html","a6a7fb54cfcee2de27318024665ae3ce"],["/categories/awd/index.html","ae87e37eff4cf379936442cdf8c39ea1"],["/categories/index.html","04caa34c7182b8e0b57fa22d2226c83a"],["/categories/misc/index.html","ca0a00946c1c7cc86607db8eee4c872a"],["/categories/sqlmap/index.html","88fa4b5171571ddd583a2127b416ac0d"],["/categories/博客相关问题类/index.html","f1be5a7baf243d7ba27f5ca6100f6e8c"],["/categories/局域网攻击/index.html","1d51a435e5b85a7faf664a586a72d2c9"],["/categories/心得/index.html","ce1094456f2e448278d202239302f74b"],["/categories/流量分析/index.html","809e012a0e8b7e8828c865bf4666cef7"],["/categories/渗透/index.html","43b7edbd83fe1de001cee4260b1364a4"],["/categories/渗透测试/index.html","d6eb392655879fa517b1fa0f01c688af"],["/categories/渗透认知/index.html","9af96fe169383e721d12f09ea30a9284"],["/categories/漏洞复现/index.html","6a91fb3f6342e604118e076e6036992c"],["/categories/漏洞测试环境搭建/index.html","5c36585036175b8824cbc419ac1331ed"],["/categories/赛后复盘/index.html","fa19391e78a32001c9c75e292ee181e7"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f416c202f9e2a7b2d18e94ae980db8f7"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","a6a66cc51d2d6de46ac80c64330afdd5"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","55ea6a637b451d301f42fb5edcb2d8f2"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","61ccc27bf05ffcf56888b4b03c3e9da6"],["/page/10/index.html","2bcdaa349057d002cf02cf3842a33ef7"],["/page/11/index.html","5f3c9da9d9d124fc991986c57d68a863"],["/page/2/index.html","3bbee88b3f12b06ee1b9c5d6a0881b45"],["/page/3/index.html","82a8682ab795f66cdca87917cb7724d4"],["/page/4/index.html","88b870a7e04721f05c8821496a9a7a74"],["/page/5/index.html","c2dc2f7b29af2770e26092dd5497ab65"],["/page/6/index.html","86fb1a6f79ecf6a40d94ee4855ef4d29"],["/page/7/index.html","b20cf1ab2e24dff57b1564e4b3d5b49a"],["/page/8/index.html","efafef1d15f63c13a890fe55bd6e470c"],["/page/9/index.html","b9bda706e4c80632d50e6773211efc17"],["/sw-register.js","43edf107a4b2078865134f2bd8084103"],["/tags/C/index.html","174e344d1b4e5ea124c7904ad86b23db"],["/tags/CTF/index.html","0253f9b6b2b8bb3404ee724caee98280"],["/tags/HTTP头部信息分析/index.html","455dd10f6e3c69d2ecd3c6c12d74c521"],["/tags/PHP伪协议/index.html","42fb88ed63503e9a0e62f0a453c7307c"],["/tags/PHP特性/index.html","d44521065d047f6bd2058b2d5b872875"],["/tags/PWN/index.html","320f33c98bbc352540d1af81bef7dad3"],["/tags/RE/index.html","7f388d2baefd5780d787364afadbf335"],["/tags/SQL/index.html","a6aadec601d499e9fb1e98765865930d"],["/tags/Web/index.html","917a6561e23c684c7d9bc847dd073294"],["/tags/Web工具包/index.html","c07121c330c02bc49cc7ac83c17f5735"],["/tags/awd/index.html","2a8943f5235ce1bd72bf85ec2bebdd12"],["/tags/ctfshow/index.html","07ea090842e54118bf026a359492dbac"],["/tags/index.html","43b662194e2a51fac3dee8df787dba4b"],["/tags/misc/index.html","5948e8e45756c41477f2febe85e1c53c"],["/tags/next主题失效/index.html","0087fd6c1be4a6a4ad98823dd90c8c87"],["/tags/sqlmap/index.html","cecfba6e2c6801a1f7aca461571f185c"],["/tags/wp/index.html","e42dd6261f6174dca83133d1e3944dec"],["/tags/xss/index.html","20755d152c721615a3ddf86c18e5e16a"],["/tags/xxe/index.html","4f5e050ce4f69a69a12f4e406af74c56"],["/tags/不蒜子不显示/index.html","1a051c8d7d60f5d6877647f51a77f278"],["/tags/博客/index.html","57276570a30b661f5a861e53b4d7dd7e"],["/tags/博客主题优化/index.html","059178820b0c9d15129b7251393baddb"],["/tags/博客死循环框架问题/index.html","f749dbbb66ab0b5bd2822b64090f0d06"],["/tags/博客部分问题解决方法/index.html","fb94ad573c58d90574f18cc39c56a078"],["/tags/反序列化/index.html","6496f4731f2f5844a0c705540abe6a32"],["/tags/命令执行/index.html","197927cca47023fe8cc1594088b2b151"],["/tags/局域网攻击/index.html","76033662cbc91b857d2fd1d6015db372"],["/tags/常用指令/index.html","169ec2be67140fa30e5b984acb26f926"],["/tags/心得/index.html","cef37b9c3f8a0a2e58648e86ab495f49"],["/tags/文件上传漏洞/index.html","ec662ffe2214e95b1c55542e1567ebb4"],["/tags/文件包含/index.html","53be67439769175f89e489576aacaf6d"],["/tags/流量分析/index.html","96bec9496a9ac1ca15ed62b7e0fe36e6"],["/tags/渗透/index.html","c44f8aee3b4aa601462f2c231a4685f4"],["/tags/渗透测试/index.html","e4289939b16a383a6b86e37d73bc42db"],["/tags/漏洞复现/index.html","57f87ca11e10decd94fa3345b28bdab4"],["/tags/留言板/index.html","ef0559bea3970d20772ac1da313102c4"],["/tags/赛后复盘/index.html","8a5885673311716749e365d64e8425b0"],["/tags/黑盒测试/index.html","2b0feda66daeb80b532b8bd4be936086"]];
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
