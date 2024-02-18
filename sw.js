/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","6378ceba6a270ca962b687a652084cdd"],["/2022/01/11/博客制作遇到的问题/index.html","5b27aaac3795d5f4ae82e5246a01dd65"],["/2022/01/15/C/index.html","0637d4ffdb6d2b83235edfa8726f636e"],["/2022/01/18/新版next置换/index.html","51e90a04c114eef19b9ffd1bffc72e3b"],["/2022/01/19/不蒜子相关问题/index.html","fc5b0f75b48e5e978bd0f5e9775d4560"],["/2022/01/19/框架问题/index.html","e3dda493f857d55dab3a89e8af9d4e3b"],["/2022/01/20/ctf之reverse/index.html","c42fa9e8db4c6483ea5888bba0cbaacd"],["/2022/01/23/misc隐写题目总结/index.html","53a30451ef78995b601e9628671b5c12"],["/2022/02/01/684/index.html","10116ad9574c26a4aae466d3d6700957"],["/2022/02/03/留言板/index.html","73e829347ee8e2f9c8aa2ce44dbaf807"],["/2022/02/04/SQL简单注入/index.html","5970448512576cdd07b7680677d2b4df"],["/2022/02/05/最全的HTTP头部信息分析/index.html","e321ed9c9ea5f19877cca1236a443807"],["/2022/02/08/ctfshow文件上传/index.html","1c82333cea31f0e605478202c0923fa6"],["/2022/02/08/常见密码类型/index.html","b5285959587bc02e8a120c0e67eaea99"],["/2022/02/12/VNCTF2022WP/index.html","90c40deb569e0c4ea073e694b35a471a"],["/2022/02/20/ctfshowPHP特性/index.html","e52e9c6759e350157d157a5850c0e494"],["/2022/02/25/php伪协议/index.html","57d9a0728048d953a6e733625e4a8f93"],["/2022/02/26/ctfshow文件包含78-117/index.html","a2df7f6c5c749975093b00b2e1114aef"],["/2022/03/02/Clash漏洞/index.html","cca8ce0fbea4053b47a4b21afdb328fb"],["/2022/03/11/流量分析之题型解析/index.html","fb64a6bcd20e58e85d9bb56957fcb371"],["/2022/03/15/ctfshow命令执行/index.html","ba573eebf064142ad7bf78a631784f1a"],["/2022/03/22/CGCTF/index.html","2592083b5f332b4bff93aa7011a70bd4"],["/2022/03/24/ctfshowxss/index.html","89ceff06500f025b688a60f3c3cc2006"],["/2022/04/04/黑盒测试/index.html","68cce751d157aaf2086c3ed2463b0bcf"],["/2022/04/11/nmap/index.html","eaa78a8e7ba54afef84b5936b77ea289"],["/2022/04/12/渗透流程简要记录/index.html","71533785381ed66710363f12c7ff38ce"],["/2022/04/12/渗透测试之攻破登录页面/index.html","c241fa51d585135d4950d56cc37f4561"],["/2022/04/14/xray扫描器/index.html","8ada6d7910696b0d6ee5a76521c009e2"],["/2022/04/15/ctfshow反序列化/index.html","15f56318f27929aba442ce21b27a213e"],["/2022/04/26/渗透测试实战/index.html","17ccc6255a8f12f25950e12400dcc48d"],["/2022/04/28/sqlmap教程/index.html","f1cb5c268178fef64d50086c23959487"],["/2022/04/30/认知文件上传/index.html","e4602013a33b5ef8a5a83783dd67bb63"],["/2022/05/03/nahamcon/index.html","31cd1e4f1753412616af8d7203b656fd"],["/2022/05/15/awd/index.html","ed42b35c8ba22e7875ca3ff91e3d01ac"],["/2022/05/22/DASCTF/index.html","311af3e33f4be4a7192c7c2cadd27c39"],["/2022/05/27/520/index.html","be474d177cf6d356f6c5df54e6dcf253"],["/2022/05/27/ISCC2022/index.html","b7b1d8675f6abdf1e011e72229711751"],["/2022/06/01/第五届世界智能大会/index.html","5a33f7c057c15b3317951b2f1800a066"],["/2022/06/04/SEETF/index.html","1c6f7a9318f1dfb2850552e5720a0e41"],["/2022/06/04/bcactf/index.html","08aaa86ce781bd6b49576bfa67b47e33"],["/2022/06/05/BSidesSF CTF/index.html","3bfa72484e10e76bfdbe24a8586bf1fd"],["/2022/06/07/Docker部署web题目/index.html","12c5b291d6d127a63071ab307d30c3e3"],["/2022/06/09/利用oj搭建C语言考核/index.html","0808211e10dff6df28f4999cdd8f95d4"],["/2022/06/13/限免题目/index.html","252f3ea31b0e198a62551ee98b26015e"],["/2022/06/14/钉钉rce/index.html","8806aa1323ac7e29b2bf70f65f2f4207"],["/2022/06/16/内部ctf/index.html","a43c0502f3ff91faf55af815a24ac260"],["/2022/06/25/攻防世界高手区(一)/index.html","8f281525484c1ee89cf28e993bb88f0c"],["/2022/07/01/两小时AK赛/index.html","f7a05045dee591109d2c96d0dd6a3899"],["/2022/07/03/鹏城杯/index.html","ebdf5868a9ea62c667300d6837216528"],["/2022/07/04/XXE/index.html","e77cf45bd8515f1866bf97ceea8542f1"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","c6de0aa61835a7e3cafa8a6205a15a25"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","8806f09791dc48e90e68209b2a88e08d"],["/2022/07/08/chinaz/index.html","e503e239f6e2c51afce4d65b8a06391b"],["/2022/07/09/蓝帽杯初赛wp/index.html","4057f7baaf3f2c89f006791bca4d9d0b"],["/2022/07/17/NepCTF/index.html","c354df2133296dd8ebcc9911eb913253"],["/2022/07/19/2022ImaginaryCTF/index.html","45427c357ea2b149980d541d3e7f1c13"],["/2022/07/20/局域网攻击/index.html","adafa1dc32ce1fc70adbaca493fbe89a"],["/2022/07/22/2022BDSecCTF/index.html","55911c0cd3f04ec3a307a6dd34981b79"],["/2022/07/25/DiceCTF @ Hope/index.html","14a655f6a6e89859164c5135805b230e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","b6de94beac07e4cc879981fadd7131b0"],["/2022/07/31/TFCCTF/index.html","2d880b5137b3040e26f53bab06086310"],["/2022/08/03/NSSCTF-r4/index.html","32402bc571318f6637cd4c58756bd75b"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","e8d455fd31a2461c99c129d04125ba04"],["/2022/08/12/T3N4CI0US CTF/index.html","d30b87b9c94af36ce581d5cb6c675bc5"],["/2022/08/14/SHELLCTF 2022/index.html","c355bc03ec41ca1b8f05e418df8b4082"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7a17cee0f39002ffb316b9ded5e667c1"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","76138bcb32298e549d53d5ee8f8be07d"],["/2022/09/16/柏鹭杯/index.html","8d8639472828fee4abdfa87560bd43d6"],["/2022/09/20/HUBUCTF 新生赛/index.html","e766ef8831187cb3f4298ac840809336"],["/2022/09/27/NewStarCTF/index.html","4419ec2b8a90701efc7ce776734058de"],["/2022/09/27/打靶-渗透测试1/index.html","3e0e3e6ca37feff706024bad81216ce8"],["/2022/09/29/tp6漏洞/index.html","2606ceb7b3d0e2029aa3bafac305611e"],["/2022/10/02/SWPU NSS新生赛/index.html","ac2e31940bc5ffac53559d7e77f6c735"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","323b5ab47ee3cd964bd1cbf8a196bbc1"],["/2022/10/27/Moectf西电CTF新生赛/index.html","f8e67a0b1bb1fb6c67b593d3d9f39feb"],["/2022/11/02/HNCTF/index.html","6d2ff51654a88300da6b681eb76d9df1"],["/2022/11/04/2022工控CTF/index.html","0267e284fdaa33c32832560bac081d2e"],["/2022/11/21/极客大挑战2022/index.html","f80575bfa28dda7c6ce4382872fbbc87"],["/2022/12/05/TUCTF 2022/index.html","4244cf0c9c8df4e099dc3226cff994b5"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","50a92b627588f68833aa92647a51fa58"],["/2022/12/18/金盾2022/index.html","87a2046f83c26a6602b5707e44d36e38"],["/2023/01/01/CATCTF/index.html","2c4c6af7d8d906bf6cd911e173066b7a"],["/2023/01/09/RW体验赛/index.html","f8631c49f17a652c1ccbe22a63811aa4"],["/2023/01/10/铁三/index.html","8a2751598498d1c6c34d35d8f8f75eec"],["/2023/01/16/Ugra CTF Quals 2023/index.html","61b4127943cdbdb9714460201e1f79f5"],["/2023/01/18/山石2022冬令营/index.html","0e5f2cadb31369c3b80665166364a286"],["/2023/01/19/SICTF/index.html","b3dfb6c63ff0b25003c7ef0bce446140"],["/2023/02/04/2023西湖论剑/index.html","1cdcb37da21e369faec05aec447418d1"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f2c484da27066432a24a9fe0ce4e05eb"],["/2023/03/04/公安/index.html","6a80ce6411bad4a6380ac5e2b2539a30"],["/2023/03/07/mysql之udf提权/index.html","7158cec6cee473c8f389a34137b6bff8"],["/2023/03/07/红日靶场练习/index.html","a11737001fd3b1d502379ef0241700d4"],["/2023/03/27/NKCTF/index.html","9b254940e5fb3fb16e3a87f3879f4eb6"],["/2023/03/31/楚慧杯/index.html","2df2eaf45d5d59528513922a40632196"],["/2023/04/23/HDCTF2023/index.html","452b232442a075f8912d491680bbaa67"],["/2023/06/01/2023CISCN初赛/index.html","f61c7e5cc21f774c7fe99a9a17a7954b"],["/2023/06/28/2023CISCN[华中决赛]/index.html","eeec5f52c6299e14b63ccec76214ed0e"],["/2023/07/10/CyberSecurityRumble Quals/index.html","4dc6cdb138c280087b1d90c18022bdb7"],["/2023/07/22/2023BDSecCTF/index.html","6aebc2e691d40ca7ed41b3fba08d01f6"],["/2023/08/07/SQL手注小记/index.html","bb8398ee0334722500d1bcbe54d801d8"],["/2023/08/27/2023陇剑杯/index.html","21e95116221905c6dc76e085f565b9ec"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f81ba104a43a5293ac1d7c5ef2d25463"],["/2023/10/23/对于多层代理的研究/index.html","2f755d1ac301747c6ad84ee6fb510c69"],["/2023/11/25/金盾2023/index.html","66a7047f6884b5dc721888e458f52f23"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","d3d8b7ef62aea0686b1c0885fbf4fae0"],["/2023/12/18/2023强网杯线上赛/index.html","e504ad4713eaae1b37f4e84a2a05f1eb"],["/2024/01/08/基础ROP/index.html","6e949fb6e775be9e0b111a1c3aa66856"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","c3f8c038539f264659eb56d7951cd261"],["/2024/02/13/打靶-Tr0ll/index.html","8b679ba92e01a634bffbd6f80d162ba4"],["/2024/02/14/NSSCTF-r18/index.html","3faf360a3ae3d2328747a2ff09c7e2ca"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","46c93c1ab4a090237765a9f3ad6a8f39"],["/2024/02/15/打靶-CFS三层靶机/index.html","61d13a9a0ae018b2ebbc6c8e7108542a"],["/2024/02/15/打靶-应急加固【简单】/index.html","3e9c5f5ee1397b38a0f310e43d7af174"],["/2024/02/17/2024VNCTF-WP/index.html","93bc09bae4fea1c14ca9aa622fb465a0"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","b27f4bb1a0e897a7354cc15d9696676e"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","6736254463f05e4c9a7aef5e0809f3b9"],["/about/index.html","6b7a9969358b20943f869735631d6f1d"],["/archives/2022/01/index.html","8368af036d09c9f06db99111eaa7fd86"],["/archives/2022/02/index.html","ef7527e1cf03049415b2b3e4c603affb"],["/archives/2022/03/index.html","a0184bfbf4d777657ef4f1c9a832b411"],["/archives/2022/04/index.html","e663987352fcb17532d984a9e5547133"],["/archives/2022/05/index.html","602ce729b04b65809715c4f6b6d1dc7e"],["/archives/2022/06/index.html","6f239ff604486347b777279e7bfaebdf"],["/archives/2022/07/index.html","a182cbbf84bcf5b626c407570f1e3a14"],["/archives/2022/08/index.html","7a9064008ae23a0f97801df3492f53ba"],["/archives/2022/09/index.html","7c7fb974c6722631c5f855350af4e576"],["/archives/2022/10/index.html","dfffa838c0b491903ae74061fa5839f1"],["/archives/2022/11/index.html","a176cbcb7975954c2ddc3600927a7923"],["/archives/2022/12/index.html","2c12e7e6eb3e5c218b5c6ec3c6e9c72d"],["/archives/2022/index.html","7c8ae0565f15eb2cd23f65cac9fab04c"],["/archives/2023/01/index.html","5b70b6d8e35658917102095976fed05a"],["/archives/2023/02/index.html","b33e9ac90fe9e310e3459a3985f4344e"],["/archives/2023/03/index.html","2b8905fddd9fd618a13cdff7d037a22d"],["/archives/2023/04/index.html","dc963c65e52f172f78f4cd341a5a6477"],["/archives/2023/06/index.html","14076659a9d2743747b006d0c6b6e1c1"],["/archives/2023/07/index.html","3559a4fe90c47af6eae682c3536c32cf"],["/archives/2023/08/index.html","3eab2d189ed4d4c47a248617527fe786"],["/archives/2023/09/index.html","fe11a02c93b3005daa5afee2e5b68457"],["/archives/2023/10/index.html","190f3101a7b559cde1c5586c81a62687"],["/archives/2023/11/index.html","d1f7d1428b45f7f75bd097f86169b43e"],["/archives/2023/12/index.html","939c0be82c305704b7d4898dbdbf6833"],["/archives/2023/index.html","43c45a96dfb99cece8dc6799892514c4"],["/archives/2024/01/index.html","7fe96fa168186cc93fc7768daaf55b30"],["/archives/2024/02/index.html","d2c4fc44a4f2795d58c42c2e34bac72b"],["/archives/2024/index.html","342b9408c77a73897d49ed1c07028f1d"],["/archives/index.html","6b464b8e055fdb6a477f7edcb74b1415"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","c5d72ed2bbdae606058579ac5c9911b2"],["/categories/CTF/index.html","23388bdc811e504bd28a52e1a060c4ad"],["/categories/PWN/index.html","f0ba3e7979a8d31713663c7238c638b2"],["/categories/RE/index.html","f7d62ef447d9b15770d7b2228c12f147"],["/categories/Web/index.html","7b7e4471f9178070f1014f55609b56eb"],["/categories/awd/index.html","085f8ec40c0a4cfc658a5da85d601c48"],["/categories/index.html","62b9548b517bc2a6ccac840c0558f31a"],["/categories/misc/index.html","07ff4cc5d1da0b4b091083e483d30cb6"],["/categories/博客相关问题类/index.html","7d8fe0e33b87edfae28af87d8c7684cd"],["/categories/局域网攻击/index.html","0d7564a434b2334f0ed804485bbc23fa"],["/categories/心得/index.html","9dabcbcc333d909041d1b60fece96572"],["/categories/渗透认知/index.html","a4c15887d19bdd685a0cb1367ed67500"],["/categories/漏洞复现/index.html","10be950834a91681443ce63d1efe27dc"],["/categories/漏洞测试环境搭建/index.html","3ad560f74049da7235e2f3ec0ae27c86"],["/categories/赛后复盘/index.html","dcdcf06169c25188aa891c42bac2ed38"],["/categories/靶场训练/index.html","324f3166d091cd8bd6a3029b52f69647"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","068dc9126cb4d18abea0ba82b7e4a3f1"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","b9b1f782507dad794be0dd60a3f002d5"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","0f97ce5e18530711842d94139b321f6a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b640c7183c116cf32bf2eb59467996c8"],["/page/10/index.html","9b5a8d9f166357ea7c7cade1fc1f5e28"],["/page/11/index.html","b372798080aa102fb4dd06fa59b97b47"],["/page/12/index.html","98416db6768cbe4dc52465a808a94fc3"],["/page/2/index.html","9c91e403a8638db3d1b1b99e2500a0a4"],["/page/3/index.html","42c1c3684366c3b70290b69436fb3bfe"],["/page/4/index.html","abbced35c833038c7a0e5a1400cad8a7"],["/page/5/index.html","fc1dad8389cf094b5de351d1dd28afca"],["/page/6/index.html","6fce2519637d65987228a0c9d0ec30ae"],["/page/7/index.html","0b39faa566307d1bc5d4fdcacfaeb281"],["/page/8/index.html","9165c0f9bd4833c4d27efaec90763c15"],["/page/9/index.html","0d93368e8d130573e0f2047ad09c78a6"],["/sw-register.js","6b34a33db8d726909f68a47414485865"],["/tags/C/index.html","f4cb212166317c5df889cf9340b56db6"],["/tags/CTF/index.html","2b67e570b2cb199c4e1047642cece45d"],["/tags/HTTP头部信息分析/index.html","67ad75cff921a911999909ad44ffe028"],["/tags/PHP伪协议/index.html","a11d66b6c6ceea571c5e733b3b244746"],["/tags/PHP特性/index.html","1d45870963390704031728c4c233f768"],["/tags/PWN/index.html","605b655cbd6f5ae8e564b790d3d69743"],["/tags/RE/index.html","c15498f75357c459c93e75931def2b37"],["/tags/SQL/index.html","f6665d1d0fb23cdcbb864675c45f6080"],["/tags/Web/index.html","defbd8abcb30ab24693ba6a6bddaf5b1"],["/tags/Web工具包/index.html","335e6898112eb9bc1f906d989c36ccda"],["/tags/awd/index.html","0229462820a3d0d1bbe22ec66fb6cf18"],["/tags/ctfshow/index.html","7c3a3212d9918fecf82b4a974897bc7d"],["/tags/index.html","643ddaa8a3236a22b27c4a8715d23fee"],["/tags/misc/index.html","74c697d7171cc2a5b1d5ac32b3e0a6d1"],["/tags/next主题失效/index.html","d8233ba0497ba72d46c44c2c9c2028c9"],["/tags/wp/index.html","9e063a98dcd1a5494e2ee30d84445fd1"],["/tags/xss/index.html","7f1583585a5c8e4d494f0484505277c3"],["/tags/xxe/index.html","16cfaa2268dfb81bc748da8c79e2e3e3"],["/tags/不蒜子不显示/index.html","e2ef7dc8bd09e020690bce791ca3e995"],["/tags/博客/index.html","b6b483cd5e77bfedd37b1281f54daf2f"],["/tags/博客主题优化/index.html","1e6a0fb504fd7ffbed5c797d5e33d360"],["/tags/博客死循环框架问题/index.html","e2574ca67db8ad44195a16b677e9bf28"],["/tags/博客部分问题解决方法/index.html","52ea83c4a08d8b64b16fb753a5cebb13"],["/tags/反序列化/index.html","8e40f2fc6c1866b1c20b37ffbb7908d5"],["/tags/命令执行/index.html","b84933f99706c9f4494a9d81f2b8f8c3"],["/tags/局域网攻击/index.html","7f1396d31384ca6456354d19bc1249f6"],["/tags/常用指令/index.html","b82de1d2b08ad6fe5cd2644cf1f2e9f5"],["/tags/心得/index.html","caba46d43454741607bbffcecbf0f683"],["/tags/文件上传漏洞/index.html","6b85a28852d70f7744a056c4316dcdb3"],["/tags/文件包含/index.html","9b6f5204a743e828f024c8cfe26bc4ba"],["/tags/流量分析/index.html","640f16d1310b7d90879b18a96d355c27"],["/tags/渗透/index.html","e3072aa5633a1e18cf17da16b26b8c15"],["/tags/渗透认知/index.html","2c778a51002febc6aaf4d8034e11a751"],["/tags/漏洞复现/index.html","162d037e3f81ba5b23e561a22c4c98e2"],["/tags/留言板/index.html","8023d1aaafcd2a6ffc93b1da8a7b879f"],["/tags/赛后复盘/index.html","8e8307c27d478fc4abb59844e061bb06"],["/tags/靶场训练/index.html","7d7b8cc5ae688a9f585034e5623a7a37"],["/tags/黑盒测试/index.html","3919bc5630e07230952ce34e56b66353"]];
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
