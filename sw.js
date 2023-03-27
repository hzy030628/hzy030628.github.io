/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","cc3294a4d6027cd3a5196a7ef28087ab"],["/2022/01/02/Python程序运行常见错误总结/index.html","cbeee331fc5bc8ccf45ee48dfbb3a528"],["/2022/01/08/ctf之web/index.html","ab4c88043c9a83d90d33f97de3c646cd"],["/2022/01/11/博客制作遇到的问题/index.html","0660d8b098eb94aa6a37c2fb667851e6"],["/2022/01/15/C/index.html","8affe572ca48819b7026515c1c8054d8"],["/2022/01/18/新版next置换/index.html","49623efa5b15282ebe4a13bbcddcf7e0"],["/2022/01/19/不蒜子相关问题/index.html","7bd926d77468ac88279d438651bc4016"],["/2022/01/19/框架问题/index.html","1420934fbaa4693a91453c527be602de"],["/2022/01/20/ctf之reverse/index.html","aa8ebbbc62ee7a0cb34e3c7043ad93f1"],["/2022/01/23/misc部分解题软件命令记录/index.html","fa1d35d702fa5cc684f865ca47f82530"],["/2022/02/01/684/index.html","277faf0a6e8c8d6206eb6ebd7bc20ce5"],["/2022/02/03/留言板/index.html","c469ab3b346699309f67618f7c27669d"],["/2022/02/04/SQL简单注入/index.html","6a65edee145cde8b979b2c577713a794"],["/2022/02/05/最全的HTTP头部信息分析/index.html","0eb7417d27ebcb521a8e43bc7fe7471a"],["/2022/02/08/ctfshow文件上传/index.html","9beb54aebc5c6e0c4b92c7e7d5186acd"],["/2022/02/08/常见密码类型/index.html","2bb6ee29587ff083caac923316f239a0"],["/2022/02/12/VNCTF2022WP/index.html","b6ab6f518850dffcaf1a32045276fcf0"],["/2022/02/16/rce/index.html","1791aa70293bad37cd24a743be5f6350"],["/2022/02/20/ctfshowPHP特性/index.html","d09a1e90d5078f72f15b21c3ec07ae72"],["/2022/02/25/php伪协议/index.html","b6eb05dca1e57f897f1f94a8ab9a3554"],["/2022/02/26/ctfshow文件包含78-117/index.html","4c317b539501aa6cdbb14ea865263660"],["/2022/03/02/Clash漏洞/index.html","2408706683fad3671b1bc6401337cbad"],["/2022/03/11/流量分析之题型解析/index.html","a051f3347a3e40554160268783b13b54"],["/2022/03/15/ctfshow命令执行/index.html","3b9153921548fb43b81a08ae39ed0361"],["/2022/03/22/CGCTF/index.html","05982f79f5c102bb1c3a572da339c76f"],["/2022/03/24/ctfshowxss/index.html","7854b8eab5be3ace6e5113c13239cec1"],["/2022/04/04/黑盒测试/index.html","0b97240c230caeb9cc4f528510720ece"],["/2022/04/11/nmap/index.html","2cd3b4ab4b62a3377fa028c46a2e9930"],["/2022/04/12/渗透流程简要记录/index.html","ef50b5818181d3714a86bcfac8332a17"],["/2022/04/12/渗透测试之攻破登录页面/index.html","046997e9eea3153c75c97475c389f5da"],["/2022/04/14/xray扫描器/index.html","c0284bc85b9f97a630dda1ca61610871"],["/2022/04/15/ctfshow反序列化/index.html","671a84e77b5e4a7cf9d4a339a006a5bc"],["/2022/04/26/渗透测试实战/index.html","2f35e257473281659371aec42282dadb"],["/2022/04/26/网刃杯/index.html","ceb775b784fbeb1b774b21ca5ceeabf8"],["/2022/04/28/sqlmap教程/index.html","722069a7678c3933a7283685e1a70370"],["/2022/04/30/认知文件上传/index.html","55b1cd86b23a1b9081555508ac97c8c1"],["/2022/05/03/nahamcon/index.html","bff519333915278d973954ad0bb81787"],["/2022/05/15/awd/index.html","f47c441aee283f165941d4dc9a72e43e"],["/2022/05/22/DASCTF/index.html","6e75b92f3b066b1fb6b6691f39a6ed88"],["/2022/05/27/520/index.html","ede6a5d54f81e8b2a0ee2276fdf20aef"],["/2022/05/27/ISCC2022/index.html","019e731acd5ee64c4d8ee1712fba8b4d"],["/2022/06/01/第五届世界智能大会/index.html","7acb03737c6422daaee7ca0920c5ba70"],["/2022/06/04/SEETF/index.html","197eacf32cebe80a162304995ec31842"],["/2022/06/04/bcactf/index.html","298abbd16cfffa7dc52797ffd8cab55c"],["/2022/06/05/BSidesSF CTF/index.html","e1ccdcb25fbe9c85baba784f991b2de3"],["/2022/06/07/Docker部署web题目/index.html","476de9a6dc9a74ad4c9ea0d8c62aa138"],["/2022/06/09/利用oj搭建C语言考核/index.html","6468ae4dbfaaa520a55ebb10158c28d4"],["/2022/06/09/论网站502/index.html","5849040d53fc696644addfdf3679eedd"],["/2022/06/13/限免题目/index.html","6aa0f00b02d30721f00cd3914c38aca2"],["/2022/06/14/钉钉rce/index.html","d994f19c062051f19ed6ec5d99df4c91"],["/2022/06/16/内部ctf/index.html","11a5e642003a4e50ff0b57dad9a00b84"],["/2022/06/25/攻防世界高手区(一)/index.html","47eb15f134b3621fa0735f7a0dcbb22a"],["/2022/07/01/两小时AK赛/index.html","69227ae49d5f78b1481ae23053321e5b"],["/2022/07/03/鹏城杯/index.html","387f7a95117880833db1ee498ad0d269"],["/2022/07/04/XXE/index.html","9577a4ec73594ba26618353af8da1912"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","da639ba985a2496c6d65a8aaee13ce36"],["/2022/07/08/chinaz/index.html","744a4e5369d29ca73f38839406afdc3f"],["/2022/07/09/蓝帽杯初赛wp/index.html","156ae4878f4a05e88745bda092b8c98f"],["/2022/07/17/NepCTF/index.html","eb289c56be6154d2aee574877964dd92"],["/2022/07/19/ImaginaryCTF/index.html","00067045e08ebd5d03fdaf5f5c636eda"],["/2022/07/20/局域网攻击/index.html","ea91b89615151182141e2214d5d3c7c0"],["/2022/07/22/BDSecCTF/index.html","0fc7824caab0e2aa0367c31232e0935c"],["/2022/07/25/DiceCTF @ Hope/index.html","5fe08997cd463dd71dcaeb4c41651c06"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","d429b7fd6350cc9715ecc3131d05db06"],["/2022/07/31/TFCCTF/index.html","20a32f8a820f54c1b77286dd2f6417f7"],["/2022/08/03/NSSCTF/index.html","51cf5ef554ee88c3b1fccf36c90a5408"],["/2022/08/12/T3N4CI0US CTF/index.html","2df078132ce7658681e6c813f7055455"],["/2022/08/14/SHELLCTF 2022/index.html","0750d8211b61cb49a137cd534471fc62"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","01c462a5cd09e5ced5babe5f7d1e912a"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","38c787ba9b9db2df07b38af1fa201148"],["/2022/09/16/柏鹭杯/index.html","5cf368ca0f0e416980aa3511f3d8e47b"],["/2022/09/20/HUBUCTF 新生赛/index.html","c554671e0394a85deedc6cd0b843ca05"],["/2022/09/27/NewStarCTF/index.html","74c565e97dcc37d17b8759c4413273bf"],["/2022/09/27/bugku渗透1/index.html","e623c3b39e3dc921e38ec15448508def"],["/2022/09/29/tp6漏洞/index.html","08eb8d691e144450c2515d5f49d0aa69"],["/2022/10/02/SWPU NSS新生赛/index.html","d4901416ef3d90b5be87e6faf6ea798d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","111b7c80989ba51dd421c2184fffe270"],["/2022/10/27/Moectf西电CTF新生赛/index.html","7bf10942836737db7b6938c62106a09f"],["/2022/11/02/HNCTF/index.html","a87aa2ba047dbe3740c58985243885c4"],["/2022/11/04/2022工控CTF/index.html","a5eba42058fcc5f827ad48d06a543b54"],["/2022/11/21/极客大挑战2022/index.html","b111d3ed74e2c9b875bf561bbe84da6d"],["/2022/12/05/TUCTF 2022/index.html","1278d2579fda583d9e438904665db007"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","0b64f38704dae543f3853aeb0b9e83f1"],["/2022/12/18/金盾2022/index.html","7127c16d041f9e12753de287e067dc9a"],["/2023/01/01/CATCTF/index.html","952caf42b6b73e59becfc4fc36344e09"],["/2023/01/09/RW体验赛/index.html","164dedab639c6272a58bb29e8f26defa"],["/2023/01/10/铁三/index.html","8ab0c93c9cceea6c6bba7394ef5ab4fe"],["/2023/01/16/Ugra CTF Quals 2023/index.html","6c2a53ad28f9194d89988b89f12a357a"],["/2023/01/18/山石2022冬令营/index.html","1b160687b69d52bca49f258c8af382de"],["/2023/01/19/SICTF/index.html","8f64bedab68ef3e7c3eb9f40d2b91dcb"],["/2023/02/04/2023西湖论剑/index.html","e25a743567576b9eefc0abf4216eac91"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","41bcc1fdcec30248eea7ed905465ff35"],["/2023/03/04/公安/index.html","534daade24442d251a6f7985d1946b51"],["/2023/03/07/mysql之udf提权/index.html","08c8f45b805b0c8fcaf822cf7a3d7c84"],["/2023/03/07/红日靶场练习/index.html","04824cb0b5e0b56a8183002730f991cf"],["/2023/03/27/NKCTF/index.html","fbd36049075d468a6c921f26f31bca19"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","0bdf03afa7a4070f21fe9c30caca96ba"],["/about/index.html","5d97e6dc9f324d6cf9ce519ab2b848b6"],["/archives/2021/12/index.html","0d00f2d6ad04229e8698fd51d080682e"],["/archives/2021/index.html","48aa80e956eab13f57d74b6b344ff32d"],["/archives/2022/01/index.html","7b8b519e474cc8f08f0663f646ab41ac"],["/archives/2022/02/index.html","df2348686c5d94e59afb2c84630351d6"],["/archives/2022/03/index.html","c5f55fc6a0c9a7b3ea5fe0d588510970"],["/archives/2022/04/index.html","4d9798b6f16d7058b479201ad5c62c92"],["/archives/2022/05/index.html","31fd85e237193f75d6114b0c464088d1"],["/archives/2022/06/index.html","c9e384eda67f55d522ed2d412cd1f902"],["/archives/2022/07/index.html","01b80ce75db21f4bc121b96ffe190ef3"],["/archives/2022/08/index.html","002f7ee3488af92c729be28c5c21ea4b"],["/archives/2022/09/index.html","a720d113cf28c9292d4176cc7f93eaf9"],["/archives/2022/10/index.html","8167e0983e9b90d20f209e5b5cf15ab9"],["/archives/2022/11/index.html","b95ad8bcffa14a5cbb335cf5ecd381d3"],["/archives/2022/12/index.html","246b82315d323480607f2fc2ff49f0c0"],["/archives/2022/index.html","254ee0ad1a7d70627a24f83c65277d1d"],["/archives/2023/01/index.html","289758f4cedf0fe0a21a69d5615c4801"],["/archives/2023/02/index.html","66a7d72863c6338bb1bb1f71ab494ea8"],["/archives/2023/03/index.html","2f960295945b93ce8e0cc441e482fb10"],["/archives/2023/index.html","555464bcce94f000aae51d897bc404c5"],["/archives/index.html","e90fc4ff409159dec320ee34e5c3a95d"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","4344d4fb4db386b0e52d73bbef686239"],["/categories/CTF/index.html","8e8e3906a76da94ebb660b293b93cd87"],["/categories/PHP伪协议/index.html","ba25ee9fe70aad9625e2f2dc00f3826d"],["/categories/Python/index.html","d190c327cac91ea62990e484a4dc63d3"],["/categories/RE/index.html","4fd45f4ef80c302ab93767b47605eebd"],["/categories/Web/index.html","4455137c99c1c6e096ef7b2e781ad733"],["/categories/awd/index.html","7e24d376270fddbf19ec6303624166b4"],["/categories/index.html","a76dd669022465f3199b322d33c99161"],["/categories/misc/index.html","499fe2ff7617dc96b9a4ec31e46d6e18"],["/categories/sqlmap/index.html","ad1d9ad8944f7f774f177e9087b3c5bb"],["/categories/博客相关问题类/index.html","5b77b548f1ffef6bfa664cbe48d31c1d"],["/categories/局域网攻击/index.html","c376ff96468979007601682ea21907c7"],["/categories/心得/index.html","0b44b00bc17ed209dfd1635f9f4ba17a"],["/categories/流量分析/index.html","31212ce914e26b6dc569be436914ff6e"],["/categories/渗透/index.html","1f31ddd82f59ff1aad119791b6b675cf"],["/categories/渗透测试/index.html","7dfdce6730f9232abfcecc3c66e8ae7a"],["/categories/渗透认知/index.html","c6f9307624bb31696419e23c39d3657a"],["/categories/漏洞复现/index.html","d8b6d2f5a9985ef3ecf44e4e34835270"],["/categories/漏洞测试环境搭建/index.html","6bf3e1c2d7bdc0b27ec7bac7c69462da"],["/categories/赛后复盘/index.html","589be68f7c4bd68ba21ab7ad5956b769"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","0281001bdc142a63c6a90f40bee4ca91"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","7b4bcf7f8e841f329ee8e04e9481cb70"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","315c06de2e4cfcb70ac5669e0d8bcc87"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f625cd5e553a72227c0ee7a478f9f4e5"],["/page/10/index.html","e29687686f524f92a127755762745033"],["/page/2/index.html","b6e6b99f1571e50410473bda6d7ffc0f"],["/page/3/index.html","996163d12abeee8e5abebf8227237808"],["/page/4/index.html","244bcc0b37b08b0831350aca855c4c9c"],["/page/5/index.html","80b5707f4574edbe3695757aee9e17c2"],["/page/6/index.html","f12d4df8a688904d8ad45ca43c42a1f8"],["/page/7/index.html","f9d468d4e14666d31227363e5aaaf883"],["/page/8/index.html","84476f1988ef3310d38cdf0c1743ba5d"],["/page/9/index.html","c64cb8d440dae2d9216888bf7103747a"],["/sw-register.js","4d7e6829fadcb87419fa741343b1bcab"],["/tags/C/index.html","f70f3ac59d5d58570ee75bf2db4bdde3"],["/tags/CTF/index.html","0ad13c22b306ea8abd67902546656285"],["/tags/HTTP头部信息分析/index.html","7bbfb631f77ae86babe9a1e908aff62e"],["/tags/PHP伪协议/index.html","4985eb400bc33c402fea2b5dc3264e48"],["/tags/PHP特性/index.html","ce7c269b13c72e29241853e6e121a5c6"],["/tags/Python/index.html","29a29e18fa8debab45c2c4ec7b394a14"],["/tags/RCE/index.html","b605dfdacab54ffb66a67a59abf6a26f"],["/tags/RE/index.html","5624c270cef02d99494adb0274024525"],["/tags/SQL/index.html","a2edb5a7bfb9b8e3517256fe10ec30b7"],["/tags/Web/index.html","a0a0f8a836c9a574c850e9c89347a310"],["/tags/Web工具包/index.html","32c8903684b7dd28e9bc9fea893b78a4"],["/tags/awd/index.html","ae598bf78e9e4afb90c343dd0e9a03af"],["/tags/bugctf/index.html","3c3d20c5951016f328f2e0fa8444c36d"],["/tags/ctfshow/index.html","8213da718188340e02a623ce30cdd502"],["/tags/index.html","2e272ff5941af00d442ab18a18f3d709"],["/tags/misc/index.html","2d0debdee5f3c11ed4dbe90094bde54a"],["/tags/next主题失效/index.html","c027e4c7fe90017e6fab8feb8a54251f"],["/tags/sqlmap/index.html","a9d748dac55cd2318d5590e5dfb90269"],["/tags/wp/index.html","1de436235878d044a521227570bd4d65"],["/tags/xss/index.html","91fbf4740a1856220cd31be7727d31f3"],["/tags/xxe/index.html","41aad47ba7eb57f04cd7190912d9e208"],["/tags/不蒜子不显示/index.html","18ec834316799d9538f7a870655310a5"],["/tags/博客/index.html","780e6896c400e44b5da5b6a999e61bdc"],["/tags/博客主题优化/index.html","ecd02e11278e90de68db2d9758d09745"],["/tags/博客死循环框架问题/index.html","eed38cd1e4647d4a305f4a31ad7641d9"],["/tags/博客部分问题解决方法/index.html","e6b2fbd284f537cb215e51fec92c8d66"],["/tags/反序列化/index.html","bded586d60e744542a094c3c37cb7fca"],["/tags/命令执行/index.html","d8fce7ecf6183ee9b4a4dd9adc109982"],["/tags/局域网攻击/index.html","0bb7c45f0ef68ea6444805bdfdddd9d4"],["/tags/常用指令/index.html","ab19f5eef3f70a97bdf22f7d5daf25e8"],["/tags/心得/index.html","184238573e24ba363667578b15350ba0"],["/tags/文件上传漏洞/index.html","11614e63c8eda7271f3191ade284c679"],["/tags/文件包含/index.html","f950c77b686c1180fe95bed900c713c6"],["/tags/流量分析/index.html","ce4e5935dd7b0970de85d5251117e175"],["/tags/渗透/index.html","c10dc730dcbbd110bba6710ba063102f"],["/tags/渗透测试/index.html","0552e85324e31a08e153eea5401d6c43"],["/tags/漏洞复现/index.html","58f26b8bf62d76a920c27ab15093676f"],["/tags/留言板/index.html","e31ec9f84ee940701561c3eaa2d09f6b"],["/tags/赛后复盘/index.html","03543bdc83e9d64b9f2dcd112bd83d08"],["/tags/黑盒测试/index.html","1cfc4b84e4605f2cf382e6ea09de5957"]];
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
