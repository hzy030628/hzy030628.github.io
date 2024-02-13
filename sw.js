/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","45aa10b1568f6ed766e4bf8a13e70ce4"],["/2022/01/11/博客制作遇到的问题/index.html","98eff4009799d5f3ae0c8870f7ec22b5"],["/2022/01/15/C/index.html","924b38769dfec6906f86d18d0d70a436"],["/2022/01/18/新版next置换/index.html","4f0adde3c2c3ebf81087ae926cb94865"],["/2022/01/19/不蒜子相关问题/index.html","3aaf7cc59595a7d05c1f739d10c9d82b"],["/2022/01/19/框架问题/index.html","c3a5bd901621e45c0421d030376c6328"],["/2022/01/20/ctf之reverse/index.html","d047c2bedb4538ae5811539b6cbc1058"],["/2022/01/23/misc隐写题目总结/index.html","69d9c7c3eadddc676e9361b6a8b83be6"],["/2022/02/01/684/index.html","86169087a11f9587ac76e76ad4825dfa"],["/2022/02/03/留言板/index.html","58a0c5b5de3b6533eef4e50274871948"],["/2022/02/04/SQL简单注入/index.html","39c5d706054237baa2f6813dfbb341fa"],["/2022/02/05/最全的HTTP头部信息分析/index.html","e9c6889071e2566147086d6f17ff80ee"],["/2022/02/08/ctfshow文件上传/index.html","36403edacbca456c311e96099bde0ba9"],["/2022/02/08/常见密码类型/index.html","59addbf427d3e2ba6202e2b710971a76"],["/2022/02/12/VNCTF2022WP/index.html","f0f5001da1b44774c3512580b74a287f"],["/2022/02/20/ctfshowPHP特性/index.html","131c92184a6839ccc3adb09d1de8aed8"],["/2022/02/25/php伪协议/index.html","ec5b9bee9ca7f1b98ed0f1cb73eddb5d"],["/2022/02/26/ctfshow文件包含78-117/index.html","d653aed379c0f7e50824062bc5a55d57"],["/2022/03/02/Clash漏洞/index.html","ea9e7a7a5423d5ed7741333b9283b77f"],["/2022/03/11/流量分析之题型解析/index.html","d4afb42e96bbc7cea93c7886f91bcb63"],["/2022/03/15/ctfshow命令执行/index.html","b6a01cc04044e8606049c73853591e70"],["/2022/03/22/CGCTF/index.html","ad608603dcdd18b6ea9f606900e30b5f"],["/2022/03/24/ctfshowxss/index.html","e7819cb697ce0b0dbb7864f87704dbeb"],["/2022/04/04/黑盒测试/index.html","8768fff5f61391674b305e5501b850fd"],["/2022/04/11/nmap/index.html","400dfb2e93441567135b35f470fb346b"],["/2022/04/12/渗透流程简要记录/index.html","5ad10e0ea365e43a03ee1f3269c49f41"],["/2022/04/12/渗透测试之攻破登录页面/index.html","0448ce316b693e73eaf9f5b55c97cb2b"],["/2022/04/14/xray扫描器/index.html","037710d4b78a541388f62a4b5c8d140d"],["/2022/04/15/ctfshow反序列化/index.html","eb4fe14735306cde7b245a98c9667290"],["/2022/04/26/渗透测试实战/index.html","b49655d83627fb493fbb9ccf984ea015"],["/2022/04/28/sqlmap教程/index.html","a46ef18945e788c35fdd0e6e9aaacc1d"],["/2022/04/30/认知文件上传/index.html","e25e483a91cd85b97501ebb85262d5dc"],["/2022/05/03/nahamcon/index.html","78a7f7ca354e384136e9f7ef18395fc9"],["/2022/05/15/awd/index.html","918c4142850d60f854aaac95ba40929b"],["/2022/05/22/DASCTF/index.html","71bf26784d8e155d1a401d061fcde8b7"],["/2022/05/27/520/index.html","23bf3d9566a50207a26a10b9eb0c6882"],["/2022/05/27/ISCC2022/index.html","dec039d3e48f975b6affb61a5ccbeeaf"],["/2022/06/01/第五届世界智能大会/index.html","e3b608b1399a950a30eb65378319812c"],["/2022/06/04/SEETF/index.html","9c1ee1dba052d034906d69335c485a52"],["/2022/06/04/bcactf/index.html","05bf1b8158c306a607a5013f51f2721a"],["/2022/06/05/BSidesSF CTF/index.html","39fa871283cbb9d640484601bd0cb8b5"],["/2022/06/07/Docker部署web题目/index.html","531558152b0b221e1ad8473743fac14e"],["/2022/06/09/利用oj搭建C语言考核/index.html","c528034cc83f8205e9ad126358478e5d"],["/2022/06/13/限免题目/index.html","9d87054a9adeeb41ff18407ec48a8317"],["/2022/06/14/钉钉rce/index.html","35c43237b7e53978cb6e228bba637d7d"],["/2022/06/16/内部ctf/index.html","828bd0f87a0162cbaf3cbb5eefaafa82"],["/2022/06/25/攻防世界高手区(一)/index.html","af761fefa706fb0b87507758f5b78a46"],["/2022/07/01/两小时AK赛/index.html","28c983c2cd14a2a31da01cd74b41fd0c"],["/2022/07/03/鹏城杯/index.html","44d2160252229a5cc94c9c8f21375e7a"],["/2022/07/04/XXE/index.html","077a3a53fcb38451befceecd27236183"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","0ab6448c464fe22d62c86fb0eabc06c8"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","f68ad8fdcef93a389fb78d85c51ee913"],["/2022/07/08/chinaz/index.html","7b37761179d19dc9cd568efeb745eaa7"],["/2022/07/09/蓝帽杯初赛wp/index.html","a3f10334212bb08847a8f04ca271a416"],["/2022/07/17/NepCTF/index.html","c7c66ec89f2c80ac1205a4f138866201"],["/2022/07/19/2022ImaginaryCTF/index.html","fe88b74b36b70a33ad3b3096f3e6ee9d"],["/2022/07/20/局域网攻击/index.html","6eb16bda856957133e290fea88922f41"],["/2022/07/22/2022BDSecCTF/index.html","f1bd3f868c8b8c2698b0fe31b57a3f8b"],["/2022/07/25/DiceCTF @ Hope/index.html","a19ad850ff7111c055c748641cb7bfb3"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","5064d085b94ca151c7e328092919a715"],["/2022/07/31/TFCCTF/index.html","69091bcf339090c0832871325ab2e065"],["/2022/08/03/NSSCTF/index.html","977708242133b11fcd12accf6f6ce243"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","cb823ce9d9af2cf638bbcf902438f338"],["/2022/08/12/T3N4CI0US CTF/index.html","864902fd171192430e05b88acdae4dbe"],["/2022/08/14/SHELLCTF 2022/index.html","bcff95235bc1631c1e976e5bb25ce694"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","1527b59b18345f62ac182c77e8f299f5"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","988ffba56f2525811327c996999d2e84"],["/2022/09/16/柏鹭杯/index.html","15a5086c7be7fad4a57161fa0a15d198"],["/2022/09/20/HUBUCTF 新生赛/index.html","cad6476cc9bf69e943b1bc62788b0f39"],["/2022/09/27/NewStarCTF/index.html","2f442e03485b4677c80ef24e8e98af09"],["/2022/09/27/bugku渗透1/index.html","10ad4564a48132b4b6c53cc7b27495a5"],["/2022/09/29/tp6漏洞/index.html","af6c1482f34a3e64e4027cd7c5a81165"],["/2022/10/02/SWPU NSS新生赛/index.html","835ce518a90791701f9d89e003055a13"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","fc50ca3efc87106ea6c4bde3dd8811ce"],["/2022/10/27/Moectf西电CTF新生赛/index.html","1af70c0803347cf42722a09cd19306f1"],["/2022/11/02/HNCTF/index.html","005bb68a6ed2c5e7c7e65b0cf9516c84"],["/2022/11/04/2022工控CTF/index.html","a76db4d2899202ee09a1b8636e54f439"],["/2022/11/21/极客大挑战2022/index.html","a09a3763dc8d6fbe66283045fbc6cc76"],["/2022/12/05/TUCTF 2022/index.html","924fed044a6d5023ef18c59e6dbce204"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","f229abc563323ec0e0aa7b45d170c0a0"],["/2022/12/18/金盾2022/index.html","ea77bba8ae5f59cab705ac467e4d6233"],["/2023/01/01/CATCTF/index.html","22130c14539a03c093473ac490726084"],["/2023/01/09/RW体验赛/index.html","fa9a36d7dca7cced2c0bc30127086ccd"],["/2023/01/10/铁三/index.html","5549d75e96d5af3b6c618918fb079fcc"],["/2023/01/16/Ugra CTF Quals 2023/index.html","3554dd976c0a3e63d2c329130d12989f"],["/2023/01/18/山石2022冬令营/index.html","8973797a3d62a953dd98103a507e8110"],["/2023/01/19/SICTF/index.html","1bc8c78050df0feff414f5988ee71aec"],["/2023/02/04/2023西湖论剑/index.html","060aab4c6ad9ae502ed93165d12d2934"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","48ca8017f51755680afa9e08337f9dea"],["/2023/03/04/公安/index.html","d50b79ff3ec50a5a35ddc12fde47cab2"],["/2023/03/07/mysql之udf提权/index.html","ee2c611be7114eb37119af3a261a8550"],["/2023/03/07/红日靶场练习/index.html","937ed4b45d611c77eafe0dfd7cdf8f40"],["/2023/03/27/NKCTF/index.html","7323922541dcf050369e8473a519dd9b"],["/2023/03/31/楚慧杯/index.html","1b0521937dbabe5ee03fdb2b8d902615"],["/2023/04/23/HDCTF2023/index.html","4d606e64baa439768d0be2a117b2e3d3"],["/2023/06/01/2023CISCN初赛/index.html","36a5b20d802d743e34cb59abfe33a098"],["/2023/06/28/2023CISCN[华中决赛]/index.html","677c22ced8540f3490ba584c772511ce"],["/2023/07/10/CyberSecurityRumble Quals/index.html","b03187bde5468443aafc6438fb2bec2b"],["/2023/07/22/2023BDSecCTF/index.html","abc50223ed1b18bf32e694bf8f04be21"],["/2023/08/07/SQL手注小记/index.html","cdbf841087acb8f503a97e7affc4b3b6"],["/2023/08/27/2023陇剑杯/index.html","1952e6803104c5d027a4c0090fe7874e"],["/2023/09/17/2023蓝帽杯半决赛/index.html","387ca487377311e6eecfb58ffb25e2b9"],["/2023/10/23/对于多层代理的研究/index.html","28a8a80e15b0009de0204d8a3795c49b"],["/2023/11/25/金盾2023/index.html","25909c6db4ab7cf1afbc410d67c813fb"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","319609fac07ec3100a0cd48337afe518"],["/2023/12/18/2023强网杯线上赛/index.html","fe05e2a31d0d1128a1fb0c515b2d17a2"],["/2024/01/08/基础ROP/index.html","86864c41e7c6364cd6aa44bfd200b480"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","ea17524c5de20512d98504b8b5eebf62"],["/2024/02/13/打靶-Tr0ll/index.html","487a8914a7fe153c3990966e6332a3c4"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","396243bf8eaf75de969648b41f3b20b2"],["/about/index.html","cde8a0684c84c4a82f24990fe9f5c97f"],["/archives/2022/01/index.html","8431b1e5b8e6aa93296e7950bfb7dffd"],["/archives/2022/02/index.html","670bcf6c19849e71503ea74d6675a9b0"],["/archives/2022/03/index.html","30e71ae997519941efb5639cb1c57157"],["/archives/2022/04/index.html","c26253bc6a71d375c793e5686a576290"],["/archives/2022/05/index.html","7089c12899b6933d217e819a942b3ea7"],["/archives/2022/06/index.html","f85ac63c467336af5eb1a4ffadbed20e"],["/archives/2022/07/index.html","f300d1e6ade071db2ff42946bc4b995e"],["/archives/2022/08/index.html","87c0777594759990d0c3e8b426947681"],["/archives/2022/09/index.html","b8b61d53a83d55cfcb09c12882b51229"],["/archives/2022/10/index.html","ab2cc9e304c8ee590dd83586997e5dc2"],["/archives/2022/11/index.html","60b9e908b9330333639ba99e4e737cfc"],["/archives/2022/12/index.html","b60525fd493c280edffa26bac24ce39d"],["/archives/2022/index.html","df63b4f890e97bd590c12d146420df1a"],["/archives/2023/01/index.html","331aff27191e83e0980129e76cc1d416"],["/archives/2023/02/index.html","9986eb6af1a923f2ed1669771617ddb2"],["/archives/2023/03/index.html","1c829c41a5b8cca1d62976aed415a61b"],["/archives/2023/04/index.html","84a6db997a3c4673ae51015971db1cfd"],["/archives/2023/06/index.html","b1d4cb176c77c2ecd7e20a811757139a"],["/archives/2023/07/index.html","24f1181c549878552c1625dea11e9ef8"],["/archives/2023/08/index.html","3d8cdbb3711142a50ee7a563312788d2"],["/archives/2023/09/index.html","195606f03335f3fc3d995b664efd3604"],["/archives/2023/10/index.html","8982d4abf34b24940543c8441357e204"],["/archives/2023/11/index.html","66190e8cbe7363e6a2e6cd08586707f4"],["/archives/2023/12/index.html","c917ef723b33c0c0ca60cb6aea96b1e9"],["/archives/2023/index.html","751bc8d9e21f9c29151d0c2b26f73924"],["/archives/2024/01/index.html","9409a35c2bd17f924942d8c5bf374285"],["/archives/2024/02/index.html","60c8df99932a62197631d76cefb480dc"],["/archives/2024/index.html","38a1ee32e97747c8700928f1219ce19c"],["/archives/index.html","e777438eacc853bea21300f5cd59fe68"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","cfe756d741caa41ae7146f7ff7e6a63e"],["/categories/CTF/index.html","d0ca32555452dbef4b69df1c67cde38b"],["/categories/PHP伪协议/index.html","8fbd6dd825fea48356faa955f7f28097"],["/categories/PWN/index.html","c5c9971804600eb659d2c4e474302d3e"],["/categories/RE/index.html","e11e2a4107048425b133bc6ddfaffb47"],["/categories/Web/index.html","756762cc34d82c62bafa4f0fddcea5d3"],["/categories/awd/index.html","506be6bc1b5a2f6ab2aa2b856167ad83"],["/categories/index.html","a7b9f80f810ebc732489d03cf412c953"],["/categories/misc/index.html","6aba00d3a7c50670c4a6692f4fb6c26b"],["/categories/sqlmap/index.html","d6e3b0b3e1aa8444e1df08db719b327d"],["/categories/博客相关问题类/index.html","7f9a8d9b1ee14f250c31a9207a5d4b93"],["/categories/局域网攻击/index.html","5d7ecc407adb87f663be0ea4d7615603"],["/categories/心得/index.html","d53f16943864fcc93c9db01fa08073cc"],["/categories/流量分析/index.html","371437a97db6a53dcf8191403de474b0"],["/categories/渗透/index.html","97c16f0981a7f19a7b7c116070d53470"],["/categories/渗透测试/index.html","f9aa8c9bee249b67f6d05d4797b64b3b"],["/categories/渗透认知/index.html","c8b339ebdad5cc95331cc03c1d1a9df3"],["/categories/漏洞复现/index.html","6367fd938b7f2edcf7ef1b6b6e520691"],["/categories/漏洞测试环境搭建/index.html","0f4b01af233e35800dd3d4f5ba7ea531"],["/categories/赛后复盘/index.html","fdcd0d02eee3bf320938b9d7cd5d4865"],["/categories/靶场训练/index.html","189b42e11b74516833c4ebf669dd5563"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","027e68d740c5834ea719bb35758bf061"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","52d5b2cae03c0e49dd431d1f94ad5bf6"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","92f65ada24e90f70e8a1133978bc1bd9"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","715ea3fbcac892e63f67741ad7b1eb43"],["/page/10/index.html","ffb8e0b64a943c87ae153198e0a1ab22"],["/page/11/index.html","f451febec1e4b97fe0043e963df89ee1"],["/page/2/index.html","3343d9ffb66a1d2778f28de95b8cb06b"],["/page/3/index.html","88dc377ec048c174d192564297ab7145"],["/page/4/index.html","021ee2e06487e74ae1886475920476b6"],["/page/5/index.html","462f2f41a54a19baaebbee4e2c82354e"],["/page/6/index.html","b5ca7e3ea9b257361890bf869de206bd"],["/page/7/index.html","e9ea561554499d2c4c46baadc39eba60"],["/page/8/index.html","fe575649abe688dbe460595462216728"],["/page/9/index.html","762a2c48278e94c4c0e90178ae52bbd7"],["/sw-register.js","05acff566ef764308bebf84f8b1d7b17"],["/tags/C/index.html","67c1fc5c9340d29fb419c04a8ff000e2"],["/tags/CTF/index.html","238389a705222bc23937b0114264c921"],["/tags/HTTP头部信息分析/index.html","c7f2993cad24d1a8a982fbd67b383042"],["/tags/PHP伪协议/index.html","f674542fe8e29e43fa4f1dbfaf09c83f"],["/tags/PHP特性/index.html","a9724542170e220f14a2d9298d9f989c"],["/tags/PWN/index.html","7cfd30aeb2484cf3df5ad54a1669997d"],["/tags/RE/index.html","fc9e50fca743b934b611632fd0383e75"],["/tags/SQL/index.html","e685235e6f5bac8ea34cec9865d29ad5"],["/tags/Web/index.html","12e743add6ef1c848d378138441786ed"],["/tags/Web工具包/index.html","d56f0d55ba3be66867ce386d4ce3921b"],["/tags/awd/index.html","5bc9208042c2ad900d9b1e860a1da6bb"],["/tags/ctfshow/index.html","ec1ae2e6ed675b46c4516c33f9eb5c0a"],["/tags/index.html","f4e6a1c49f754cb83d1e9c74d192b063"],["/tags/misc/index.html","691ab748dd3d8348b81882a796418103"],["/tags/next主题失效/index.html","3b1889762c911d114f274d4fa78c44ae"],["/tags/sqlmap/index.html","e86575e07d395a32de573041bae01fd4"],["/tags/wp/index.html","0a5d92482a46cb9099ab639fb3f7e191"],["/tags/xss/index.html","103021396c4d0044982e3ef94d63b0de"],["/tags/xxe/index.html","73a1292fd196061fb116c356efb003cc"],["/tags/不蒜子不显示/index.html","5cfece143fd86f44b69767402832d3d2"],["/tags/博客/index.html","353f9d7489e80e6b760f04a6c6e8aa9a"],["/tags/博客主题优化/index.html","9cbb68800316a1e70fd9de5a66cefc76"],["/tags/博客死循环框架问题/index.html","3975f09cebdc6860bdcd794167e95027"],["/tags/博客部分问题解决方法/index.html","73ddb1d660a5808bdbe8c65976649a5a"],["/tags/反序列化/index.html","98745e0c682a6b9ecdd3a24bfd6a4f3d"],["/tags/命令执行/index.html","0f8bf296bbbfb05b9152f759069cdd1e"],["/tags/局域网攻击/index.html","1f0e644c3fecebf6d9dfe2eeabe5c1ce"],["/tags/常用指令/index.html","8b4dff7db114652e2d243c62ee82d3eb"],["/tags/心得/index.html","dc6869fb1378a6c2363228bf9fcef643"],["/tags/文件上传漏洞/index.html","f3c62f610ba2e0de918d55900129f083"],["/tags/文件包含/index.html","c6e092de726e0857641e4750cd44ae68"],["/tags/流量分析/index.html","31f17a22acff864807b04159e29e6da2"],["/tags/渗透/index.html","099b25e849d8eb417cc61dd28deb07d2"],["/tags/渗透测试/index.html","c72152b4a2f23a29206ef6e68592eb9d"],["/tags/漏洞复现/index.html","6ec62a00bc48b6aaf245d038efc8a120"],["/tags/留言板/index.html","c9580919f134ec69ff91d0de5b9587be"],["/tags/赛后复盘/index.html","09cdd24a79d2a1ef2e6d2615053f3e6e"],["/tags/靶场训练/index.html","0ff4da76cba25bd2562964ca46814e9b"],["/tags/黑盒测试/index.html","92ff7b5b473e587c83a0516cd3ca236d"]];
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
