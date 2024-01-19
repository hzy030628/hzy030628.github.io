/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","fd42036ca89aa3c6864fae4286e45082"],["/2022/01/11/博客制作遇到的问题/index.html","8c36a995a6a3c62713827f674d3563be"],["/2022/01/15/C/index.html","cd86b9613cc423d6e3c095b010c1e623"],["/2022/01/18/新版next置换/index.html","5c7586fd14713c3915d82739d1e656ec"],["/2022/01/19/不蒜子相关问题/index.html","907f289a8c0a0ac94e0ee94c6ddb8098"],["/2022/01/19/框架问题/index.html","ac6c686ffc3b506ebd1cc4eff1692360"],["/2022/01/20/ctf之reverse/index.html","3ba60bf85bea72ad9ef2e7ab53c25a37"],["/2022/01/23/misc隐写题目总结/index.html","146812a3e838172c4b110cca6d853caf"],["/2022/02/01/684/index.html","292ebefec230bd105613799836e3592b"],["/2022/02/03/留言板/index.html","72252fe29a0b0bb3cace62e3eb9e2a15"],["/2022/02/04/SQL简单注入/index.html","a47433233dc42dcd5913eeaf803115cf"],["/2022/02/05/最全的HTTP头部信息分析/index.html","8d67d61bb545abe6d7005214564909fc"],["/2022/02/08/ctfshow文件上传/index.html","98bc7ed3886598924802ecb639dd5933"],["/2022/02/08/常见密码类型/index.html","99dc75f9ad8fafe1014ae07bd84393a5"],["/2022/02/12/VNCTF2022WP/index.html","808722c6813678d4bf08cfd13e115175"],["/2022/02/20/ctfshowPHP特性/index.html","896d2123e2e4ed07d335801d3e1efc2d"],["/2022/02/25/php伪协议/index.html","f8ff9a7d3ef448b38af9acb275dc0b31"],["/2022/02/26/ctfshow文件包含78-117/index.html","de79f6c5862e3ef2462f8d4e50a4210b"],["/2022/03/02/Clash漏洞/index.html","d29d6a27572057ac6e5b807d2255021a"],["/2022/03/11/流量分析之题型解析/index.html","0d08356298e57684b166e32b33297673"],["/2022/03/15/ctfshow命令执行/index.html","21ecbeb403c030e4ac6483059f4fdf39"],["/2022/03/22/CGCTF/index.html","9f07e806461d106cffc55c12fd4b27e8"],["/2022/03/24/ctfshowxss/index.html","4d6ff5eb8c0280e36e44578b3b70e66b"],["/2022/04/04/黑盒测试/index.html","7c2fed36d6b48bb0a6120a9c62e67d58"],["/2022/04/11/nmap/index.html","51f2976ba3d5811c6c6d6864cc2e6985"],["/2022/04/12/渗透流程简要记录/index.html","653ca590e61a8011594b5a951af776f2"],["/2022/04/12/渗透测试之攻破登录页面/index.html","c09bcaf41619308e522f03bddada3759"],["/2022/04/14/xray扫描器/index.html","48c36c504448cbeb50b13631792083ab"],["/2022/04/15/ctfshow反序列化/index.html","b55f2bdf415dd36e368af0d119c3edc7"],["/2022/04/26/渗透测试实战/index.html","867eb5cb14bbf536f6c7c6393cf6ae0d"],["/2022/04/28/sqlmap教程/index.html","e0efe1241b2ee61483259dab3a06094f"],["/2022/04/30/认知文件上传/index.html","4b11cffc03a2665cfc22e6b2b2269175"],["/2022/05/03/nahamcon/index.html","1698a85f3e9883411ee1f6a9897bce18"],["/2022/05/15/awd/index.html","7c0d976e83952e01d5db0b560e9b051c"],["/2022/05/22/DASCTF/index.html","d59bd2da424cb3e33194fa84bb8abce5"],["/2022/05/27/520/index.html","2ca1a9f6dc692e07da9328673944b328"],["/2022/05/27/ISCC2022/index.html","c0c2c31645ae49dc0675c43bc2d6fd04"],["/2022/06/01/第五届世界智能大会/index.html","4c3bfedbca1ac54d8e5b214be46fef2b"],["/2022/06/04/SEETF/index.html","0076d32567274759831db3f427ef76e5"],["/2022/06/04/bcactf/index.html","32b7e69502d6dedfcaa1dc9013e6aeaa"],["/2022/06/05/BSidesSF CTF/index.html","c3d4c39fe7903fec584179eb6768718e"],["/2022/06/07/Docker部署web题目/index.html","d539dd1db8f84ea0e7357dfd5877486e"],["/2022/06/09/利用oj搭建C语言考核/index.html","61fbd090de4730c37217d83b90253895"],["/2022/06/13/限免题目/index.html","a6ae48d271c5dae5935454751a961926"],["/2022/06/14/钉钉rce/index.html","8552eb3ade5010544999b36582b04259"],["/2022/06/16/内部ctf/index.html","2844c9c8a8762ea91f0a2c238217c3d7"],["/2022/06/25/攻防世界高手区(一)/index.html","63925001dfa2472761ebe82bb8edb05c"],["/2022/07/01/两小时AK赛/index.html","89a08217af5b03f0993a383ebb850530"],["/2022/07/03/鹏城杯/index.html","b2b2fc58dd52ad50c4f93b6b75e6997a"],["/2022/07/04/XXE/index.html","6c81e1c1633e96c376bb2d3e7f56f529"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1b1d41c2a974816a7ecf38f992e17b1f"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","5317419634963b307698a2d57869fd12"],["/2022/07/08/chinaz/index.html","1d1a6cc0932637923e6e3a1718d19c5f"],["/2022/07/09/蓝帽杯初赛wp/index.html","d8fb1675688026dfb18ba5eabc32e675"],["/2022/07/17/NepCTF/index.html","5a9d08bce25bb7de3c9acc023ce22270"],["/2022/07/19/2022ImaginaryCTF/index.html","a76c2bc4dcb32e6b8847c595edaf96fb"],["/2022/07/20/局域网攻击/index.html","19ad921412ea1df3bd8edcd3a8efc3dc"],["/2022/07/22/2022BDSecCTF/index.html","71108cd9ef6efb912a306b20d71ed631"],["/2022/07/25/DiceCTF @ Hope/index.html","2b82cc1e620ddb3c19cbd9c95f17d3e6"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","96e311bb2bd75b7e3c86e7a49a97a1fd"],["/2022/07/31/TFCCTF/index.html","b12213e5c22b4f8bb8792be7b3c9ced6"],["/2022/08/03/NSSCTF/index.html","90f8d648dc906e4c53280cb63fa431a7"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","cb4c3c98f5aa9b52cba6522e1fd2ee24"],["/2022/08/12/T3N4CI0US CTF/index.html","74419ccba36da3f6a5af037642104608"],["/2022/08/14/SHELLCTF 2022/index.html","29957198b0f4235ff2dc22eb01ad1c91"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","9a1268f9d7fda69050bae28673537eda"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","f673c2e0037db291fea7eca842f5507a"],["/2022/09/16/柏鹭杯/index.html","eff1bf3d15224aa333010cf8c5517e7b"],["/2022/09/20/HUBUCTF 新生赛/index.html","0a364c3c78507d477c9f99e70887a343"],["/2022/09/27/NewStarCTF/index.html","46a167292e152c2a916798bba833f2cc"],["/2022/09/27/bugku渗透1/index.html","763c8d17b8d1c47973eba52ccdbf2166"],["/2022/09/29/tp6漏洞/index.html","35bdf3fa0117f0e866dbe8b4c45b3663"],["/2022/10/02/SWPU NSS新生赛/index.html","7690626998e66eeb34051cc561498096"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","1b893e193fa9157cd6fcf17455bac98e"],["/2022/10/27/Moectf西电CTF新生赛/index.html","64eaf1fc68e7dcb7e3fda60d4ddda988"],["/2022/11/02/HNCTF/index.html","de9eec5ccf5b44e8cc9bf55b0895c400"],["/2022/11/04/2022工控CTF/index.html","a85170dc333293fcf37b77936397015a"],["/2022/11/21/极客大挑战2022/index.html","6cd385e7b8fcd5c7b8022e30c54b75a4"],["/2022/12/05/TUCTF 2022/index.html","1d81de668a019ec808cebcbb38707eb4"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","2f5d9a821414fc8a7eaf945d8a5009c5"],["/2022/12/18/金盾2022/index.html","df028cf29ba65eadedec10e8bda07b57"],["/2023/01/01/CATCTF/index.html","688fbb637b03234e616cc29588dfe86f"],["/2023/01/09/RW体验赛/index.html","93b1c985553fa2a245e52885ba9fd67c"],["/2023/01/10/铁三/index.html","ffda308008a97cf22461af4270c330af"],["/2023/01/16/Ugra CTF Quals 2023/index.html","f5fbc4070f873bc1505014571a5693ad"],["/2023/01/18/山石2022冬令营/index.html","44e6327ecf8cf832c7f75579d4285305"],["/2023/01/19/SICTF/index.html","942604629eba985dc8701b1feaa9e1cc"],["/2023/02/04/2023西湖论剑/index.html","84658e97f49b62b77b90f71799bf3919"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","e1737910c8c950adf8fecb4f950ed066"],["/2023/03/04/公安/index.html","fc2b3e86be47c575719752ae0cdbaf5f"],["/2023/03/07/mysql之udf提权/index.html","dc7433f81ed49085f5febebdf069a8ba"],["/2023/03/07/红日靶场练习/index.html","7e42c7e2fcd8cdaf974153028e763821"],["/2023/03/27/NKCTF/index.html","31e756f82be30d335bb694cc4868b81a"],["/2023/03/31/楚慧杯/index.html","467a4a98a11023c976f545e4985692e9"],["/2023/04/23/HDCTF2023/index.html","28179ad23535714cfe100e457c1ae0c0"],["/2023/06/01/2023CISCN初赛/index.html","f55d256c3224ead6ce09c6c2ebabd2ea"],["/2023/06/28/2023CISCN[华中决赛]/index.html","8e6e2d9fae7329e1fba74f57c293dc94"],["/2023/07/10/CyberSecurityRumble Quals/index.html","16ded599f12445bda7bd4914034bacba"],["/2023/07/22/2023BDSecCTF/index.html","5789353bf7bd75fa066ff6ee74422828"],["/2023/08/07/SQL手注小记/index.html","264b2cc454cf14a67ad41f8a4cbbf03f"],["/2023/08/27/2023陇剑杯/index.html","b65afad3dfdad123f78e42f42ed58f09"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f70f8e2dd23176cacc41342dd7ed9fa6"],["/2023/10/23/对于多层代理的研究/index.html","f1b98000f0ba2bdd5ece50ecc0c55e03"],["/2023/11/25/金盾2023/index.html","5f574ab15804aa842e11244b543a8b1e"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","910d989e89c9031392778e5f93d349db"],["/2023/12/18/2023强网杯线上赛/index.html","ebc55b92a91071aa8e1bb6e0732d3319"],["/2024/01/08/基础ROP/index.html","708608fa5d502d1ec27cff90e59ef058"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","17d6208306483820dacad2b274e70923"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","6b9c332152d367d8bb7ee3a94e505ac1"],["/about/index.html","9096e9455aba2597a391bc14515bb9ed"],["/archives/2022/01/index.html","c5de1aa2e9d0d742e10de2884df64b16"],["/archives/2022/02/index.html","ea60b6466f4905dbfffb0338c332adca"],["/archives/2022/03/index.html","665c6331a91cbe7b9e4ef3abc6f26269"],["/archives/2022/04/index.html","15cb88538dd9577d35574f46188df89f"],["/archives/2022/05/index.html","a9f26c765404262479cba087c7d54bf1"],["/archives/2022/06/index.html","415154ba1cb9d3482f40cc3c96ce4414"],["/archives/2022/07/index.html","ad71ea6c7a871276e1a00d2cf892a05b"],["/archives/2022/08/index.html","b8f5d0cd08bca72aad4c954ccd5fcd20"],["/archives/2022/09/index.html","4f2262a709284d1cfa03f6e4edf63852"],["/archives/2022/10/index.html","27a7cdd045b028ce2ed465686a084d25"],["/archives/2022/11/index.html","545edc76347bdf273865d198061b49b9"],["/archives/2022/12/index.html","c892ec6e1c77da0c89ab4d5edf317064"],["/archives/2022/index.html","e15a4b0eca26613177ce1c684812d73b"],["/archives/2023/01/index.html","00977c7d359450fed072d3355b30dd8f"],["/archives/2023/02/index.html","d5029d8bb645c590a1bc673f2bc8f889"],["/archives/2023/03/index.html","2087c86e6f8eaf36be90c04c3db18b2d"],["/archives/2023/04/index.html","d267d9a8a64b6001b3a7e17a55a4dfbc"],["/archives/2023/06/index.html","ab9d2f8a5d2de37394e43614bcc1f645"],["/archives/2023/07/index.html","339a56483b3d0c7e513befd51b71114c"],["/archives/2023/08/index.html","a4ac143df0fe397a44a40ebe3284e718"],["/archives/2023/09/index.html","57f5bdaa38194316e233a4dba568dfd7"],["/archives/2023/10/index.html","ab94694e179cde5f97b27ebf077a7e53"],["/archives/2023/11/index.html","f94712cdb0159e026f8abba74262b25c"],["/archives/2023/12/index.html","be07dc5fd868bad8b087c322cb8183a5"],["/archives/2023/index.html","cec1b67002c678d85f584030610ebc78"],["/archives/2024/01/index.html","e3bc4f5f3ae555ff494be1ae22100b18"],["/archives/2024/index.html","aa6c968d40fa27b2d26d5e2fc0031b44"],["/archives/index.html","d5fbc05aeb57ddf2985f92d94f10531d"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","48668f06aa039ad14f1790cff4b9142d"],["/categories/CTF/index.html","78489256c591f256f2c443e563d945d3"],["/categories/PHP伪协议/index.html","a1c6598d9abb0200cfe8568d3c923d6a"],["/categories/PWN/index.html","6bfd602269e2009fe1cd21ab31ff81a3"],["/categories/RE/index.html","211da6657069f650d3c978dc71afc9cc"],["/categories/Web/index.html","0800f0af21c1c49966a6950458cfd556"],["/categories/awd/index.html","092f7cf67cd1d443728de136511f5016"],["/categories/index.html","4454608e1e90dafe5de40e6f9b992e26"],["/categories/misc/index.html","142a3bff77b6ed1269aeeb42eeaaf433"],["/categories/sqlmap/index.html","bae1a52909fabf64139e6d414fec6113"],["/categories/博客相关问题类/index.html","90a714c76ac0b9f39d8f649a1963bca1"],["/categories/局域网攻击/index.html","ae3943c6b21487b8aff8166ea81c5a28"],["/categories/心得/index.html","6c05d4961b0ba03a0a0837768f7e3fee"],["/categories/流量分析/index.html","7930d10b2471a11826d632e886c331f2"],["/categories/渗透/index.html","f44bbab07e5a835a454b914983aa5a48"],["/categories/渗透测试/index.html","512607ad7f54291a21649c77e9032d6c"],["/categories/渗透认知/index.html","e8603007b578db618f4f3b78652bed01"],["/categories/漏洞复现/index.html","87de3551c6c2916ca0f62a176a2afccc"],["/categories/漏洞测试环境搭建/index.html","92f3d22b429240ab1dc24a3fead085a7"],["/categories/赛后复盘/index.html","3348b38e851ea1bfcc52c2cf6cb9cfa7"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ac8d86a93c5b9e6c11a3b2825dc5d387"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","44cd75edab4152cc8b955fc956febfdd"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","023328b80759f29b2a7baeb5297a2cc6"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b2398276024cfb555154be60fbd3c615"],["/page/10/index.html","4ae58b613ca5d77d6de165344745baf9"],["/page/11/index.html","7635d086827d2133907676e4045ffaaf"],["/page/2/index.html","43d4707ee2a8785c758dd5e2f11bfc06"],["/page/3/index.html","51b7330a49003f992fe5d15a9ff303e8"],["/page/4/index.html","ca14fcbfb4b1dc8eef350a6f9df3d6cc"],["/page/5/index.html","532c35ad12d8cfe5987f6fa3193fe32a"],["/page/6/index.html","d499f80180d8f7d33bfea359149621ac"],["/page/7/index.html","62535b1b69ecd11e82fb2e6d40979736"],["/page/8/index.html","fad366c9b06d13f996c1b37b8512a315"],["/page/9/index.html","4c76fb6e71f562b8ef883625418410a6"],["/sw-register.js","a8b98a33ab6e7ccb02f4e7a0181f879a"],["/tags/C/index.html","e6492920293d2a39d28c76af0f11b383"],["/tags/CTF/index.html","3f1e4e25064e4d4f73676fcbfd5bc4d2"],["/tags/HTTP头部信息分析/index.html","f1fb0e69c97bac4f39ca80add6dc63ce"],["/tags/PHP伪协议/index.html","06e935bdfdccb7d3b69ff0ebf31dca25"],["/tags/PHP特性/index.html","0e5ccbd4382de8fa82eb8dbbfc88908a"],["/tags/PWN/index.html","f62d38676f7274af6c3a7cac31ee6895"],["/tags/RE/index.html","ec3e9849bf5a2e65b84a214518deddb4"],["/tags/SQL/index.html","82abb98a2c10ffd45fe98993efd4c959"],["/tags/Web/index.html","2d12d36830f528077e268db3c914424e"],["/tags/Web工具包/index.html","083aae73827b53a9027f769fbe1e2ed6"],["/tags/awd/index.html","6198ee99dcd46f7f212013ac7a65f106"],["/tags/ctfshow/index.html","8900a76be33bd2baa03bb6e5f87782c5"],["/tags/index.html","33d5b415926837cfad13a23e0397baf3"],["/tags/misc/index.html","92aee222a8a406cda1d33295a8125fb5"],["/tags/next主题失效/index.html","7ed116128e9e14fdf74c80c9f4231d91"],["/tags/sqlmap/index.html","aff76f84831d7213d505c8f54f3cff49"],["/tags/wp/index.html","d9d848c32a9af6949b55926b1c30e343"],["/tags/xss/index.html","503e61ce205aa4b045b0d299b5e1404b"],["/tags/xxe/index.html","327c14dc30410d3e2b116156fa9501b6"],["/tags/不蒜子不显示/index.html","85369b9fbdc6d126ecab92fb48b85f31"],["/tags/博客/index.html","a7ed83b4448cd58f8bd048859c72a86e"],["/tags/博客主题优化/index.html","d25ec85cc1e86ee1ad36b1fa0f6d107e"],["/tags/博客死循环框架问题/index.html","ff03225a38575a8e8e3df892ac0c8f8c"],["/tags/博客部分问题解决方法/index.html","1be28c209351dec4f00b80478b6b7ca0"],["/tags/反序列化/index.html","60872b96a1a4e2de98ba1516080d7eec"],["/tags/命令执行/index.html","5b42f24952b75b6c94886ab054043738"],["/tags/局域网攻击/index.html","f262cab5608a02df16f8cb395827c97f"],["/tags/常用指令/index.html","13ab2744ed1c2cafed52d9f3cb0d6cf5"],["/tags/心得/index.html","9602b8782a1e2b9571b75fa3995d95b1"],["/tags/文件上传漏洞/index.html","ee623a613b137d2a8378a9560bda7355"],["/tags/文件包含/index.html","d195795f4fb2ee95041187ca6687c048"],["/tags/流量分析/index.html","4ae18cf32723c7aa6b65f55289cd7e70"],["/tags/渗透/index.html","92a1f06913d08f3b4d0b3b11512fb0d5"],["/tags/渗透测试/index.html","db1e59e359e5e8369d57fc1c81213e07"],["/tags/漏洞复现/index.html","7dbfc8d956f0ba5b5788ddd46b8dae62"],["/tags/留言板/index.html","2eaa616c906797815df10b22856b6b9f"],["/tags/赛后复盘/index.html","53797e917a81ea1d2f140f5e6d8a315a"],["/tags/黑盒测试/index.html","d961e13c05484bdd5127563532e44623"]];
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
