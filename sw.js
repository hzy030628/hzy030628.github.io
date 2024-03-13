/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","bd40179550dfd9dda8094e435da81785"],["/2022/01/11/博客制作遇到的问题/index.html","0d110e2f863cf354682c67006b101936"],["/2022/01/15/C/index.html","3261feba72c28c471718dfb0b0e1ba66"],["/2022/01/18/新版next置换/index.html","6673348dec482b1b65c535cb3d987ab4"],["/2022/01/19/不蒜子相关问题/index.html","3ff6c85f94452797fcd42116fc1c9482"],["/2022/01/19/框架问题/index.html","613438c51dca0633f4480eb97453a6da"],["/2022/01/20/ctf之reverse/index.html","a2736a7e875960a2a4120d1996c22b93"],["/2022/01/23/misc隐写题目总结/index.html","a110f820d88213f1f1054c53125f5ff1"],["/2022/02/01/684/index.html","d27c25f4aa62b916bb67d0b2c6b6f8fc"],["/2022/02/03/留言板/index.html","84d921120cbe88f130fb283bbed58b30"],["/2022/02/04/SQL简单注入/index.html","b100091b01b5406d2248690b2562a154"],["/2022/02/05/最全的HTTP头部信息分析/index.html","162d5fa7ef3c74a9e71033c1acb638a5"],["/2022/02/08/ctfshow文件上传/index.html","e6e3a438760712224888b5b696ea2782"],["/2022/02/08/常见密码类型/index.html","4cd4c62537e327a3b540cd508abcd983"],["/2022/02/12/VNCTF2022WP/index.html","48acb78a4da89dc3a1b9c937a45aad86"],["/2022/02/20/ctfshowPHP特性/index.html","7e6379aff7c4850490f248b4b0ecb4b9"],["/2022/02/25/php伪协议/index.html","ac9b111083a0b7c34eb31b9721403476"],["/2022/02/26/ctfshow文件包含78-117/index.html","8676544d42831b2ae776173a1f39bae4"],["/2022/03/02/Clash漏洞/index.html","7fb37cb2b916a4033163b036d5c5b77d"],["/2022/03/11/流量分析之题型解析/index.html","32bb640e8bb7b52900491c171c420125"],["/2022/03/15/ctfshow命令执行/index.html","f3afa64603acae82e7cf8cd9eecf902b"],["/2022/03/22/CGCTF/index.html","740accb952c31fbdd4e5c32b46120220"],["/2022/03/24/ctfshowxss/index.html","df151fe4288ed8f0a100ff06f4fd5b43"],["/2022/04/04/黑盒测试/index.html","62a4383462d56d9dc2cb03a29db81a96"],["/2022/04/11/nmap/index.html","588707782314b01dfd77340ea6a1f4d6"],["/2022/04/12/渗透流程简要记录/index.html","615f09bc30bb1804e78cfb52325f121f"],["/2022/04/12/渗透测试之攻破登录页面/index.html","5ddeb33d562d1628ae543852d80fda5d"],["/2022/04/14/xray扫描器/index.html","1c0953a205459569b09489cad9ad1cd0"],["/2022/04/15/ctfshow反序列化/index.html","70ce2bfa49e9950c30dd7256d56386b2"],["/2022/04/26/渗透测试实战/index.html","02ebdda886eb05365b3067ec1b55331f"],["/2022/04/28/sqlmap教程/index.html","ca6e8c24689b8ca72ced5d6c90be25f5"],["/2022/04/30/认知文件上传/index.html","13b33442767e7c5f46faf52d98db1caf"],["/2022/05/03/nahamcon/index.html","02edead09af689ef740dce7ce49ce59b"],["/2022/05/15/awd/index.html","328148db1e4dce51b7e0072e9eb48f22"],["/2022/05/22/DASCTF/index.html","88a74a61ccddac7a18744ec150cbfcdb"],["/2022/05/27/520/index.html","3a80c9faee43acb1ff4118b15098183e"],["/2022/05/27/ISCC2022/index.html","4d0706dc1a0b38be81ef1b27bc63d990"],["/2022/06/01/第五届世界智能大会/index.html","53ef4360b981f9bfca43d66e064c9b2b"],["/2022/06/04/SEETF/index.html","a8cce60a7ce94821c3f79243464adefa"],["/2022/06/04/bcactf/index.html","b6bcc9ede29c0e20bd19b7e0de6b2f82"],["/2022/06/05/BSidesSF CTF/index.html","7d35b29f6ec4a117fceb24b627fff1bd"],["/2022/06/07/Docker部署web题目/index.html","3a1ddd13f1b3ee2912f0f84f5b0407c6"],["/2022/06/09/利用oj搭建C语言考核/index.html","2f87acb3d5f6b169e34340cf0517d311"],["/2022/06/13/限免题目/index.html","eefe0b183a1001270b0861e9eff7c546"],["/2022/06/14/钉钉rce/index.html","8b57f329bffd45512d3141a10f01658a"],["/2022/06/16/内部ctf/index.html","8530630d676184c64e05b25c661e3022"],["/2022/06/25/攻防世界高手区(一)/index.html","c0ee93b11110481ee4a7700f9a651efb"],["/2022/07/01/两小时AK赛/index.html","29a9d8d2c6534d6677d274777044af6b"],["/2022/07/03/鹏城杯/index.html","e011837876730402e90ea08335c421a1"],["/2022/07/04/XXE/index.html","ade7864ab210614499cd855ab90f124e"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","18ec240514df2f8cafe735d5edf010ec"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","37ee403141827db56846e89908973756"],["/2022/07/08/chinaz/index.html","de73e66a284238708d941d2ea2f95325"],["/2022/07/09/蓝帽杯初赛wp/index.html","75da1338df270c73d85945eeb0c4e8ec"],["/2022/07/17/NepCTF/index.html","6f5da2069ab19d4f2bff8464da33b328"],["/2022/07/19/2022ImaginaryCTF/index.html","fbe40b9ef6cf25ec2fead495cebb8cce"],["/2022/07/20/局域网攻击/index.html","84ab9cba300e9bf4c4211952f83f3a06"],["/2022/07/22/2022BDSecCTF/index.html","c33fad48ddd3faead7f104de52ee2de8"],["/2022/07/25/DiceCTF @ Hope/index.html","b3eaeaf97d62e0f35cf9a4baf243d11e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","a21620bb696848feef68591300286163"],["/2022/07/31/TFCCTF/index.html","f6d0d4b24cfa358add79c4a272a1c066"],["/2022/08/03/NSSCTF-r4/index.html","12b37fb35f1b5e5d5f085a28bb18f396"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","6e8b14e249ff4d6d1f79651eab6b658d"],["/2022/08/12/T3N4CI0US CTF/index.html","0b9ef2f120c605a8823c41662f7c3d99"],["/2022/08/14/SHELLCTF 2022/index.html","71636a94ce3e468edb2ce917f640f31e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","8290c045a6149b66b23efea0ce361a7c"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","bd4f312f745a3d9fec46a792550fd085"],["/2022/09/16/柏鹭杯/index.html","7be35516eb3bb49cae33563b24dd46c0"],["/2022/09/20/HUBUCTF 新生赛/index.html","9c5fca95ec315517ea62b94ff87b87ce"],["/2022/09/27/NewStarCTF/index.html","1ff1b111aeca406e02db199c528a4440"],["/2022/09/27/打靶-渗透测试1/index.html","71f08290ca225d4ce69614682aa47535"],["/2022/09/29/tp6漏洞/index.html","ad60e5d8f30706b4254dabb46b6ce4c9"],["/2022/10/02/SWPU NSS新生赛/index.html","fcf8bc233c7451c5820549f93e22a414"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","d5f0c0deb8fbc140ab833e231443fbbd"],["/2022/10/27/Moectf西电CTF新生赛/index.html","203f6547861dba8447dc93e761d88c8d"],["/2022/11/02/HNCTF/index.html","a431ef64ad47433efbc6b0355b2d5391"],["/2022/11/04/2022工控CTF/index.html","d4c510f24dad6278e717634c11d18fb9"],["/2022/11/21/极客大挑战2022/index.html","cfcff4b38c8a6b9beb94f8985caf52b6"],["/2022/12/05/TUCTF 2022/index.html","33c53a70daec6db71089e273107ec865"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","8c54d7edfe7e667860054b749fdfee9a"],["/2022/12/18/金盾2022/index.html","b206c2df6b8ff02e53dfe4d7fa948493"],["/2023/01/01/CATCTF/index.html","b56975d9fe5e9e1352f11aecdcd4206e"],["/2023/01/09/RW体验赛/index.html","796bc38da99287d0db23035e9fe38537"],["/2023/01/10/铁三/index.html","f57238da05b1c20a599b21cc8c43d1af"],["/2023/01/16/Ugra CTF Quals 2023/index.html","6eb1d302d9a9990c740734335ddb0f23"],["/2023/01/18/山石2022冬令营/index.html","b21743580149842c61cc9c2e91beaf4d"],["/2023/01/19/2023SICTF/index.html","b49cfc58401ba52c83edb7633e8ba724"],["/2023/02/04/2023西湖论剑/index.html","1cf5399f9a59656e508bac3acfff0b7a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f8fa631dd33f689e145501c49233c3e4"],["/2023/03/04/公安/index.html","e6efc9b6db1f074164bb71588d859607"],["/2023/03/07/mysql之udf提权/index.html","fd3525270a28060d3eb4faaa4c2423e2"],["/2023/03/07/红日靶场练习/index.html","cb99972db6d2a1a80dff7f1dc8653cc2"],["/2023/03/27/NKCTF/index.html","2fc41db6b5511eed9110a9ef0ccf4c03"],["/2023/03/31/楚慧杯/index.html","e97d672c2682c9fecd7af2b8ec64db99"],["/2023/04/23/HDCTF2023/index.html","12657c606c19226b2036e9e839889cb1"],["/2023/06/01/2023CISCN初赛/index.html","612e908cf0bbe4fc473261142f511a16"],["/2023/06/28/2023CISCN[华中决赛]/index.html","4f42ef2f92f630f4b547caf58ffb0229"],["/2023/07/10/CyberSecurityRumble Quals/index.html","a58d349253170e05c9edafb3d54f1d2a"],["/2023/07/22/2023BDSecCTF/index.html","5b38a113b7e46c64c0afc17951cd7019"],["/2023/08/07/SQL手注小记/index.html","268063446442aca15a4d8c3cd5ba0027"],["/2023/08/27/2023陇剑杯/index.html","3d153c66cd7e74e5b13a17933aa29b4f"],["/2023/09/17/2023蓝帽杯半决赛/index.html","6837922cec50ae61496740df0e241876"],["/2023/10/23/对于多层代理的研究/index.html","5d561ce52e6fcba088f60e2906ec3d7b"],["/2023/11/25/金盾2023/index.html","07f6b013f5a6c7404733b44eb7f4c90d"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","92e135a805ad8e51a163b08d8364fb1b"],["/2023/12/18/2023强网杯线上赛/index.html","caac77606eedc0223a352d441dcf69ab"],["/2024/01/08/基础ROP/index.html","ba133d4e024061bcc0aeee36a8d6809c"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","0355d43c0a0ccc45fb32ff2e6f56a928"],["/2024/02/13/打靶-Tr0ll/index.html","f68390d81131d7c85e90a3eb5568a1a3"],["/2024/02/14/NSSCTF-r18/index.html","875ff6f2696ac0e714daadc092960bab"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","9ff02c68a3eb5648cdba2373e0991e6c"],["/2024/02/15/打靶-CFS三层靶机/index.html","11c7e3eb31a9375f7b05aee613208ad2"],["/2024/02/15/打靶-应急加固【简单】/index.html","50c0ddb65dd887c3d88df013704ac939"],["/2024/02/17/2024VNCTF-WP/index.html","4f107db0aec9b39b6294acc2928d484f"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","c15f3115058664a71031f5d8983ed319"],["/2024/02/19/2024SICTF-Round3/index.html","ea2a7e7ac743531cd9994633f216409c"],["/2024/02/19/打靶-铁三域控/index.html","27d157dd7b2795bc4603ba854fca099b"],["/2024/02/23/ctfshow终极考核/index.html","5388329dae675b76cc7646e9518f41f4"],["/2024/02/25/打靶-应急加固1/index.html","e746ee18e0ef08993a7e2a31503cc4b1"],["/2024/03/13/2023第一届古剑山决赛/index.html","3e3b02bb272375f1947831e480f18472"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","68047b0375dfed359d4e37e9477f5431"],["/about/index.html","47d2557547b0649682eb8554898f5235"],["/archives/2022/01/index.html","011b180b8438998461761a45944997ff"],["/archives/2022/02/index.html","d56bb66de3caa0d968f1c0ff18aaa573"],["/archives/2022/03/index.html","4a133624ec43d4aab1fcde949603fc87"],["/archives/2022/04/index.html","ad1ccec84619a82b898aeb4048c61c21"],["/archives/2022/05/index.html","a045cfc98a8985115c10b321b97bf8d4"],["/archives/2022/06/index.html","8cd06f34042e203796bd1c91eee9d489"],["/archives/2022/07/index.html","39387936069eb925e523e47402a084a8"],["/archives/2022/08/index.html","408a2fbf1f12f8ee3f035e6054ea3f85"],["/archives/2022/09/index.html","02dbe3b5aa13245f570247ac70ee95c9"],["/archives/2022/10/index.html","246ebc21696d4f2d35f266551a539273"],["/archives/2022/11/index.html","74c7352c374711dbcfaf70e5b796ce25"],["/archives/2022/12/index.html","b7ba4710b17caaea759275aa66b9064b"],["/archives/2022/index.html","ea3bab0e8a93a1a5be9b6d00dc02b9ad"],["/archives/2023/01/index.html","0ba077320e15ae58e8e475408fc6d7a8"],["/archives/2023/02/index.html","fca52e73bd3abaedd9dbfa72b47b3d29"],["/archives/2023/03/index.html","13f302956cc50cd474340a3db74ca775"],["/archives/2023/04/index.html","22599c5bc5afe5f92a33e128b6ec180a"],["/archives/2023/06/index.html","136ea3e4471ca5d296472c464b4607ac"],["/archives/2023/07/index.html","97aad852d2a564be455c8a8e277db2d7"],["/archives/2023/08/index.html","1b2c43811bb148a417ea1097bc4bc925"],["/archives/2023/09/index.html","5afc4863e8b9a725db04e32cab43231b"],["/archives/2023/10/index.html","b9075567b865b0437ad41bc39f985af8"],["/archives/2023/11/index.html","daf739066ca03df3ba7a84a57ef3a106"],["/archives/2023/12/index.html","2501fa538d3fc732a5becabb495e30db"],["/archives/2023/index.html","983d54542fe49ca0e48f2be08efcffe8"],["/archives/2024/01/index.html","3db0e7bfee54abe38e4583a8112bc3af"],["/archives/2024/02/index.html","1c341c19e133c1a64aff56ee0b697763"],["/archives/2024/03/index.html","ebc0216c2d24c308ac17f2a0fc6711ac"],["/archives/2024/index.html","558423b5272250f368de4bae61f89f09"],["/archives/index.html","6fb516d72670925dc84f259bac53847e"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","2e3363c65233e994ea0817320b88f551"],["/categories/CTF/index.html","00580fe81705f82fa6db1ee4a1cfb916"],["/categories/PWN/index.html","2e6de51e28add0e35490182fbc0c1c53"],["/categories/RE/index.html","bdedb73783ee0dc5df94fb913a6829c5"],["/categories/Web/index.html","8b88b9158c0b9e0bc22d93ac217f9707"],["/categories/awd/index.html","c547ec52fc47eb1a124ba07aa18cc7d8"],["/categories/index.html","395bfd5e27b7a10f6859165719ef5e09"],["/categories/misc/index.html","6a8c9129c611991ea01ca30dd35fff50"],["/categories/博客相关问题类/index.html","dc0cd72631f2d895765c174e79ab7ee9"],["/categories/局域网攻击/index.html","1dda58c1a455aaeeae4984e120c72a24"],["/categories/心得/index.html","8c8a2b5878a226e0f930ca670498b180"],["/categories/渗透认知/index.html","17a3f336bcea3188b58158cfa05c1f6f"],["/categories/漏洞复现/index.html","4ae97aeb09247cc2b218bfd1c182bc4f"],["/categories/漏洞测试环境搭建/index.html","6b735a3873b54a6c59cecac2f3ae41c4"],["/categories/赛后复盘/index.html","893c3e447022416ee01dbad4770f89d7"],["/categories/靶场训练/index.html","a8cf72445dfb277efe3952582c34e073"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","74cda67fb53a61571c613ee62b3b5f64"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","ac8bcabfa77b79351610485bc0f93ce2"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","4075978ffbc791931295fd41681eb3ec"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","bc35118f7f902dc8c61ebbf6797692f1"],["/page/10/index.html","af5aa8ca361570b3dccb5e2a4e84a9e5"],["/page/11/index.html","03e39fd3009cbf2a860dc3520d0d3891"],["/page/12/index.html","d3e7810d1044d8aabf03f89229a7c399"],["/page/2/index.html","0b22ce4e4cc4915f3871055e7e3a76b4"],["/page/3/index.html","da534cb3bc76918cac885fe62cde4e68"],["/page/4/index.html","c3c48bc64dde7b210819327c52ddac1b"],["/page/5/index.html","874b4330550154cfc85cbe9785d2b788"],["/page/6/index.html","097e516ca2b6aea1a5ab0b8bbf95caba"],["/page/7/index.html","92e36e810c345040fb3de2202195f21b"],["/page/8/index.html","ed1127e58330a500254e5822d632631a"],["/page/9/index.html","91db467e332a311840708fbf3655ccd4"],["/sw-register.js","10bd9c99cc4fb8193728010e1aae3326"],["/tags/C/index.html","ba4e8df5018f6d60acb520bd9908ecb4"],["/tags/CTF/index.html","94548de7536a613c08efe78c46a788e5"],["/tags/HTTP头部信息分析/index.html","1e72575a1fa0acfcaae506ac8a7b1c01"],["/tags/MSF/index.html","45c9f0c46278956b9edaf936bb899c18"],["/tags/PHP伪协议/index.html","b0f35b58468b48c9a20251413e05f72d"],["/tags/PHP特性/index.html","975ce572799aa17befa24a7faeb48330"],["/tags/PWN/index.html","a3eb2718d132dfb335dae68182967e19"],["/tags/RE/index.html","48a899596eb427b15e43c3162cb97220"],["/tags/SQL/index.html","a59355ddd79675e83ee0983a7765b329"],["/tags/Web/index.html","80d4a083270a0df82fff078a86602a4c"],["/tags/Web工具包/index.html","9b3aab57fe1c649ecf4d10a79eb029e0"],["/tags/awd/index.html","41aafc5a7fe81a0cef40573156b8c9b7"],["/tags/ctfshow/index.html","c197bbeccf1e24b01918778c6a302f84"],["/tags/index.html","c2c3eba7c0ca02454e115dab1cfb4dfd"],["/tags/misc/index.html","065c023106602951cce490dfa61f18bd"],["/tags/next主题失效/index.html","db38215679607e68470f5f32f798ca9e"],["/tags/wp/index.html","100bb66c5040e2b88c64646ddb062435"],["/tags/xss/index.html","4e5f7f5c833cd8666da3f5e0a15c5602"],["/tags/xxe/index.html","76bc03c0a0f17f5847107d6d625779e3"],["/tags/不蒜子不显示/index.html","f714012c65a0a53d6617803d0ff7e6d4"],["/tags/博客/index.html","9eebae834cb44a3735e44bd2493a0a4e"],["/tags/博客主题优化/index.html","359316413bae2189fa2061bec6a88e07"],["/tags/博客死循环框架问题/index.html","30514a57551557a3797bad51f6264d08"],["/tags/博客部分问题解决方法/index.html","ab0029a94bf8ea64cd3b2137ebcce05d"],["/tags/反序列化/index.html","9efcc98a2b4b3b6dcdb5f940daa87c2b"],["/tags/命令执行/index.html","87eda539c035e0c95cb8ba5396a7adc3"],["/tags/局域网攻击/index.html","7a2d2f2b8da4768c1e99c5f5ef80ea55"],["/tags/常用指令/index.html","f98f313e191de0945cf8046998c2f733"],["/tags/心得/index.html","ebdf1139272d93b9c0d8e719222e4aa6"],["/tags/文件上传漏洞/index.html","3103ffea6676530e7578c2292486270c"],["/tags/文件包含/index.html","6a0d3da65d2e23d28028c20598a16211"],["/tags/流量分析/index.html","019d70c8fec6bca25940b4a73161cafb"],["/tags/渗透/index.html","f190669ffe66847a8b090b487c99398b"],["/tags/渗透认知/index.html","21cd69d8d3a7d6e7ac0074097eafe893"],["/tags/漏洞复现/index.html","6d2317fb4be156188a07baf1f9503c93"],["/tags/留言板/index.html","9b56f56b1d9edb31b47e05a227e81c5f"],["/tags/赛后复盘/index.html","cf173ad976cebfbb18f01b84fa550a7d"],["/tags/靶场训练/index.html","dda169fac895efd21eb9bd3720a928be"],["/tags/黑盒测试/index.html","61fabb245db1302fa2a5bf84f0fbc90e"]];
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
