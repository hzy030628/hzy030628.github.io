/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","3d683f4a0b271b8410ff92938ac0f387"],["/2022/01/08/ctf之web/index.html","727573bc96376bc352925cc375a28bf9"],["/2022/01/11/博客制作遇到的问题/index.html","ed984da7b83e78a655dfc5d0ae8d2854"],["/2022/01/15/C/index.html","ee7e47af128b519b8b94266f9529a6d8"],["/2022/01/18/新版next置换/index.html","f14082d9016947efccaa4e1e4825c0a3"],["/2022/01/19/不蒜子相关问题/index.html","501fc06f8bc0b1aa31b9ad6cda170bac"],["/2022/01/19/框架问题/index.html","e86bc0852c55b8164785704651d1c321"],["/2022/01/20/ctf之reverse/index.html","0de18b93841c2968fdf1e02c3da58ba8"],["/2022/01/23/misc部分解题软件命令记录/index.html","3466747f0521f21fa43b21e4653fb930"],["/2022/02/01/684/index.html","8fd95fd548059dfc84a50e7e33462013"],["/2022/02/03/留言板/index.html","dd2eafea426d242fc4c5c107ac7ba9f3"],["/2022/02/04/SQL简单注入/index.html","5a8fbb51e56e023c608f742a612836ae"],["/2022/02/05/最全的HTTP头部信息分析/index.html","bbd96e9628ff8e8301412ca073f93b44"],["/2022/02/08/ctfshow文件上传/index.html","407646f9e88554edb8b84b1cf8ee6164"],["/2022/02/08/常见密码类型/index.html","53e80e5891b88607f5c800bf25a6c9ac"],["/2022/02/12/VNCTF2022WP/index.html","93c4e2d3ba27ad0356a098ef3c508e94"],["/2022/02/20/ctfshowPHP特性/index.html","390a9cd9cc61f68800e85c1990122c84"],["/2022/02/25/php伪协议/index.html","5a4ec3a115f38ee02e2f6c264ba1743e"],["/2022/02/26/ctfshow文件包含78-117/index.html","4b5625ae9400d6c9432386de607a3042"],["/2022/03/02/Clash漏洞/index.html","4cafbf505c5548960a06a75f3f9cfce2"],["/2022/03/11/流量分析之题型解析/index.html","e9ef2bcad2bb10159a67e006ae62b5f3"],["/2022/03/15/ctfshow命令执行/index.html","8a8041fd257e71dbbf976706598856d6"],["/2022/03/22/CGCTF/index.html","3ea9690b500d4f862c2e4b421eefece9"],["/2022/03/24/ctfshowxss/index.html","146be4b3b1cc3c8a1bf413bf4cf0a51e"],["/2022/04/04/黑盒测试/index.html","8bdd6793357c181b2468511ee8b1ffee"],["/2022/04/11/nmap/index.html","47a1b8bb85fc1290eac99b4482d55f02"],["/2022/04/12/渗透流程简要记录/index.html","5295fd48f53b0568c246fa8b6c7e1587"],["/2022/04/12/渗透测试之攻破登录页面/index.html","8e534662b17f6577cea30e39efcd7b42"],["/2022/04/14/xray扫描器/index.html","a36d275e4d0a82060e3c35166f3d55c1"],["/2022/04/15/ctfshow反序列化/index.html","6696b6d48a6327570b41d7eab6a29a53"],["/2022/04/26/渗透测试实战/index.html","5aba0d6d2eb6473a70d07d0b80754dc0"],["/2022/04/28/sqlmap教程/index.html","f3cd06afd226970bfd59328e472665c3"],["/2022/04/30/认知文件上传/index.html","78ad0f6612ea46e92c36db2e2f4f38a7"],["/2022/05/03/nahamcon/index.html","946b10cb6edb87430192ff27337585b2"],["/2022/05/15/awd/index.html","87ca133d6ad7a81919df723186d18f26"],["/2022/05/22/DASCTF/index.html","96566e3f79ca5cc5f982201a52f4ec9d"],["/2022/05/27/520/index.html","85481a543e33077d241e5704fa64e528"],["/2022/05/27/ISCC2022/index.html","654120935e2a2727653e1b55f064df91"],["/2022/06/01/第五届世界智能大会/index.html","de39cc0374d1e100b078d1cfca29bfd1"],["/2022/06/04/SEETF/index.html","ca443a585d98f87c599468bc7fa4ee1e"],["/2022/06/04/bcactf/index.html","823f265792d6fb58947ba95330678182"],["/2022/06/05/BSidesSF CTF/index.html","c137346e236953644af3ad246ff9e3ed"],["/2022/06/07/Docker部署web题目/index.html","c7aa32f1ba74b3d56b610edcc87e03d3"],["/2022/06/09/利用oj搭建C语言考核/index.html","3e95c0e002ce31a79866553e5fe65f55"],["/2022/06/13/限免题目/index.html","2744659f13d0ff3d4f387233bb4746ff"],["/2022/06/14/钉钉rce/index.html","86be880c64af902848de1d195e7fe5f2"],["/2022/06/16/内部ctf/index.html","b23e7ea079beaf3b881647a6b01ed570"],["/2022/06/25/攻防世界高手区(一)/index.html","445cc2af1139cbdb12319b5ce50da206"],["/2022/07/01/两小时AK赛/index.html","556f13cab5f9757d13c7c276b2011a7a"],["/2022/07/03/鹏城杯/index.html","378564afe54091f50156f19c7a72fc15"],["/2022/07/04/XXE/index.html","b6d8bffde17d9666284c48d6cb21d482"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","f0365291b56556b265c3ff82000c27d7"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","4ea79affaddc9bb855aff3fda53dd282"],["/2022/07/08/chinaz/index.html","b6631ac0fdb28b8b05dbb4a5295e1824"],["/2022/07/09/蓝帽杯初赛wp/index.html","965d3a2ed5e58dc208d9a12ce8e06249"],["/2022/07/17/NepCTF/index.html","6c32dcc667c3e71c2524ca75d49df3eb"],["/2022/07/19/ImaginaryCTF/index.html","4f84507e80c7582356d316afda1d884b"],["/2022/07/20/局域网攻击/index.html","b820e26997eaa560e15f5d9496c0af59"],["/2022/07/22/BDSecCTF/index.html","6b87ccdd9325e7b65808b574a990b2aa"],["/2022/07/25/DiceCTF @ Hope/index.html","8531753120a1e5c941e2703dc8266728"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","f4dc7dded7b3301f84bcec5cf307cd97"],["/2022/07/31/TFCCTF/index.html","48598240245f4d2e6a3df6a2be179094"],["/2022/08/03/NSSCTF/index.html","febd06a7035c681523b97270d00db4bf"],["/2022/08/12/T3N4CI0US CTF/index.html","c0392fe72befb3c9f293ec64091b1d8c"],["/2022/08/14/SHELLCTF 2022/index.html","e68750e96e595deb4b8e0488fbac5095"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","2d11b7abdc96e00b0a5b2da4e988fe9e"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","2df17267159868b4f11ca00fe0215deb"],["/2022/09/16/柏鹭杯/index.html","eddbd4814f8384c129fa28280538a226"],["/2022/09/20/HUBUCTF 新生赛/index.html","0d7e146f3cbe530bfc91447b31809729"],["/2022/09/27/NewStarCTF/index.html","dca570cdacce3da71025479a9b4bf2e0"],["/2022/09/27/bugku渗透1/index.html","0cde02041196db59063ab3fc9c6e33ef"],["/2022/09/29/tp6漏洞/index.html","c87ccc1041dc6065ee3f6a9b9d3159a0"],["/2022/10/02/SWPU NSS新生赛/index.html","2f9ffcfaf50b7523beb07f90a39eaf60"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","9a09dd3eaad0d25236789d27ba16daad"],["/2022/10/27/Moectf西电CTF新生赛/index.html","f3508cbda60443691f7edb84bd317de1"],["/2022/11/02/HNCTF/index.html","7fcdba5272b5852b88ad1b833f68a955"],["/2022/11/04/2022工控CTF/index.html","1e6ea3bfed31b10c224f7136cf1e38ec"],["/2022/11/21/极客大挑战2022/index.html","0b172ec33b0801f0028ecdb14ad7f707"],["/2022/12/05/TUCTF 2022/index.html","710c2b6980bad239b886cef00d4a8a44"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","a0267263d77b55615bd5c105b6b7e342"],["/2022/12/18/金盾2022/index.html","36c5d9c1a6ec4cdcf17b654a6865b228"],["/2023/01/01/CATCTF/index.html","145d903db0161b1239ade94d4f55527d"],["/2023/01/09/RW体验赛/index.html","d4839dd13ab757a8bac614a724998680"],["/2023/01/10/铁三/index.html","f0534c6ba04e9c088812116eef152443"],["/2023/01/16/Ugra CTF Quals 2023/index.html","d07a291cc40b03be8886bcacf1726887"],["/2023/01/18/山石2022冬令营/index.html","a00a0abc9cfcdea6ebf3a9ec7f538a38"],["/2023/01/19/SICTF/index.html","2427096e74b023b8a2b7990ead95583d"],["/2023/02/04/2023西湖论剑/index.html","350988224c825ac1002b5aa27059628c"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","867b750220a78a10ddeed9faecbda84f"],["/2023/03/04/公安/index.html","8bf2574d98a9c57b3ad7840bb441e9ad"],["/2023/03/07/mysql之udf提权/index.html","5b3c68fb5c57af64182c3c6edb265979"],["/2023/03/07/红日靶场练习/index.html","e4775799382f43b178c47f22085b6798"],["/2023/03/27/NKCTF/index.html","b66d0876ac8b43fb80847eddfaca600a"],["/2023/03/31/楚慧杯/index.html","6594d481edbfe00098ca314ffe78067e"],["/2023/04/23/HDCTF2023/index.html","d860f6922cd9ab8052d27d552032933f"],["/2023/07/10/CyberSecurityRumble Quals/index.html","9fa28b40ca830d5beb1e37a057125897"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","1b7362cb4f916c665e566cf08b8f52a3"],["/about/index.html","c2888bf37d1db8598be0242d7a826cab"],["/archives/2021/12/index.html","7aca419682bdddf19edd3eb5ec603a5d"],["/archives/2021/index.html","934dd215765dbc2faa5d54be5137ffa2"],["/archives/2022/01/index.html","dc4ccdd13a843b1acf1fae4bc0e055f0"],["/archives/2022/02/index.html","4aee64a3d99f595de5b12eb235f5cacc"],["/archives/2022/03/index.html","e73a22cce5284f08311117a8f3432e05"],["/archives/2022/04/index.html","02efc59e37db0205039285a8ba6c5711"],["/archives/2022/05/index.html","1780a6dd44fb9783e270363be57fcf8d"],["/archives/2022/06/index.html","7eddb4429f0b5615bec5840a1bcfb253"],["/archives/2022/07/index.html","1daa4a77ef3a2664b3b705a484879bb5"],["/archives/2022/08/index.html","0beff2d95ebed8c0e46496aa4162fbeb"],["/archives/2022/09/index.html","30f17f571983e1e9531d17cb6a158360"],["/archives/2022/10/index.html","2b78a952be2354d2f8d4f852983201a2"],["/archives/2022/11/index.html","d6961c97f064fda99151360aa090a1e8"],["/archives/2022/12/index.html","4ed67f25e4a1766a81f9b81d26abc259"],["/archives/2022/index.html","7666c29ecd8bbd86660bb530726e91d4"],["/archives/2023/01/index.html","ebb054ab6f2645364779e2507a5ec0a7"],["/archives/2023/02/index.html","03b44d233b25d6cdc78f68d98daf36e1"],["/archives/2023/03/index.html","70a973cb5e3e579d8ee52a4c6323f6c1"],["/archives/2023/04/index.html","49be18f93be8728a3b16fbffda525f73"],["/archives/2023/07/index.html","bb9c80892fbf5fac33ce1f9cff0deb70"],["/archives/2023/index.html","37a4bee7e35d21f351d27851df74f436"],["/archives/index.html","80d3b628e686cacd16c90bf8e5eca062"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","04778d82bf2403d780d76f6c2cb70f91"],["/categories/CTF/index.html","d05510089b126445b9772f0fbb61e6ba"],["/categories/PHP伪协议/index.html","51b70896c8a09f61f11674c3f5ff0899"],["/categories/RE/index.html","1a5bc0213e5e385731503ae6d1d8c209"],["/categories/Web/index.html","f2bddf1f77c57e9585de8d41d24daa36"],["/categories/awd/index.html","ac9e818291dddf8b95cfa51af28f6428"],["/categories/index.html","5ceddbcb641b0163604328da1eed6d2c"],["/categories/misc/index.html","4f394b3d7dff633b5f629e5f9ec2620f"],["/categories/sqlmap/index.html","4c78d7105b6a20de2fc48cc76e4da234"],["/categories/博客相关问题类/index.html","bfb58cffdb8142f0547b09bde77db353"],["/categories/局域网攻击/index.html","faa86f31b71af9d057b2a342736b89a9"],["/categories/心得/index.html","b3cd9b8199fdbd81bbd024588db33b0d"],["/categories/流量分析/index.html","46575e27421b25c40c6ebc165544b583"],["/categories/渗透/index.html","9a4714381632a7bd5d422159dd793c11"],["/categories/渗透测试/index.html","82ee22ac0af5eeb6ca1b0614b1b2ffa2"],["/categories/渗透认知/index.html","5d3255f5da7887f7cb8702178f16bc1b"],["/categories/漏洞复现/index.html","60f0a5519780e2948cdeb0d205590de0"],["/categories/漏洞测试环境搭建/index.html","c917cd8b57ee0875699442ecc8f56020"],["/categories/赛后复盘/index.html","09df2427051d1bc582f53317f8fb013d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","9bdaee027b23260a3a4fc9c8962340e0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","3b6a7b56110a03666ce3e6562f7359be"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","41595662d01905e43b76fdf582514d19"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b636f250c4e3e8c9ac9c12fd67badf7c"],["/page/10/index.html","c60bbe09ef11b000613d56b85f6b93f9"],["/page/2/index.html","7fa4bbde39d50f9cf83e0c69a443ca9e"],["/page/3/index.html","6ce89f3bfcdd11a24c9626ce8a39726c"],["/page/4/index.html","3781d739f6be11bd737946bfa399dbda"],["/page/5/index.html","564d79535c08065517929c459edc63d0"],["/page/6/index.html","97c84d65c19def8d941750c68872bf1c"],["/page/7/index.html","b337b08f847ff9e226f157a61a065919"],["/page/8/index.html","9d861768e5aa3894f4004d9145205d02"],["/page/9/index.html","aab4689a1bd7cb4ab04029a38c5528fb"],["/sw-register.js","9c00c7c496bccc2d24052d8f05f8bc10"],["/tags/C/index.html","f4c04ef63011fa969ebf1619dbefdf3a"],["/tags/CTF/index.html","a90fe815e47d2d0e08413a85a30d25b4"],["/tags/HTTP头部信息分析/index.html","1a8d69f090ef04d046f9526ee564e322"],["/tags/PHP伪协议/index.html","8925c65e9452ba01b063310bc74a920b"],["/tags/PHP特性/index.html","2a194b82b3f18b4b3fcdcd62ffd82c75"],["/tags/RE/index.html","e6e3c791937c87393d251cbcd17586a6"],["/tags/SQL/index.html","1431c44c879feb3ef650e6029667ba8b"],["/tags/Web/index.html","1392a0214114cb1b377901f72aad0f29"],["/tags/Web工具包/index.html","d7d28198d9243829bd928fcaf86536e5"],["/tags/awd/index.html","67850b1d6e6dea1f586e5bf92119faca"],["/tags/bugctf/index.html","655e6262c381660ea53763c665487701"],["/tags/ctfshow/index.html","65218162f980b2a75c401a7d34b20391"],["/tags/index.html","2c4068e7111569f9983877767439ee02"],["/tags/misc/index.html","54e6307ddd753783cf19533fc8a2714d"],["/tags/next主题失效/index.html","5dba42252ceb4111dde33be38181223a"],["/tags/sqlmap/index.html","d46b7b6f1d7c05a4841b26605007f7e2"],["/tags/wp/index.html","20d357d9d3d1e0aae01c0c6bcbdb452f"],["/tags/xss/index.html","ef14caafdfefbc165fd80224cccef6c0"],["/tags/xxe/index.html","5322f87edf9cd8e65a6c3d8cb387b6dd"],["/tags/不蒜子不显示/index.html","468d7d78f925db0671b30c7d944c7edb"],["/tags/博客/index.html","6882b0a0cdf4b807e7a58e5ab6cb1054"],["/tags/博客主题优化/index.html","7737feed39aa754fab4d9900f1ffa96f"],["/tags/博客死循环框架问题/index.html","5b6518a9c5484878c6e6509173174f4d"],["/tags/博客部分问题解决方法/index.html","724de23e81c94727b1bc80090aff1923"],["/tags/反序列化/index.html","45cb9f7e169fff521261bc4051645e84"],["/tags/命令执行/index.html","b743295ad8b14d86f9139a1d1a309889"],["/tags/局域网攻击/index.html","b4dbec45d1df0afd238008c6f4bd7839"],["/tags/常用指令/index.html","06525406092003e7e4debee1e468142b"],["/tags/心得/index.html","50e4be6349462914159a1d8259695370"],["/tags/文件上传漏洞/index.html","2715c851cb996b1a893e8ea799f6adfc"],["/tags/文件包含/index.html","696d2d3801f40e1edf62a5a4622d53bd"],["/tags/流量分析/index.html","68892b67c6fab8770e06676655735242"],["/tags/渗透/index.html","7a084f22320b3cfe8aa13f189ef7dddd"],["/tags/渗透测试/index.html","b28bf6b02e7afab8596cce164ba40518"],["/tags/漏洞复现/index.html","83fda27dce5354b34faa4c1a3400b00d"],["/tags/留言板/index.html","e86f2b7f0839add070beb44566ca7283"],["/tags/赛后复盘/index.html","e30d89612f882d3fb9e5693dae208b34"],["/tags/黑盒测试/index.html","a697717886798a3b0f30de0e02c1b69c"]];
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
