/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","5a1fe2261098ba032ee69fc982db962d"],["/2022/01/11/博客制作遇到的问题/index.html","a1d296dcad8788295c00074dfa4c610b"],["/2022/01/15/C/index.html","25b42c230c27e6fd58dbe41b2fd105df"],["/2022/01/18/新版next置换/index.html","3391df316591c88a06d915bdf2714c9d"],["/2022/01/19/不蒜子相关问题/index.html","a216fd0711a4fb264ec7d1ae1942e8dd"],["/2022/01/19/框架问题/index.html","fefef14b775422b941509a2e6d77c017"],["/2022/01/20/ctf之reverse/index.html","92198058589cd5f098aa11f2b65c9afd"],["/2022/01/23/misc隐写题目总结/index.html","14b10b9ed4b2e881bd9642ddaec17c55"],["/2022/02/01/684/index.html","0909e770b55920b5103da5ea4cd68c79"],["/2022/02/03/留言板/index.html","5842ff4c9acb22bc59911be16fe4e56c"],["/2022/02/04/SQL简单注入/index.html","342918ec8a019281aad9984551721892"],["/2022/02/05/最全的HTTP头部信息分析/index.html","2fd918487dc07e4ba45f79b362e2c142"],["/2022/02/08/ctfshow文件上传/index.html","c79e1a1df019250116def095e104146d"],["/2022/02/08/常见密码类型/index.html","92c7bd679fcbde548cbb482d1e282503"],["/2022/02/12/VNCTF2022WP/index.html","47e6e0c477c9783c59d3b31371fc5811"],["/2022/02/20/ctfshowPHP特性/index.html","2588ac4e42c575409b0ef14f9cd48cc8"],["/2022/02/25/php伪协议/index.html","4137de5c2aae7b0d1b20d89fe1d38629"],["/2022/02/26/ctfshow文件包含78-117/index.html","e0b7e04efd01b463de9aae8220c56da4"],["/2022/03/02/Clash漏洞/index.html","1d350b10ee4a667285931765f3d83f14"],["/2022/03/11/流量分析之题型解析/index.html","8553ce0c2042f1136266fdf88a390e70"],["/2022/03/15/ctfshow命令执行/index.html","92b7c7e23673670ce6e83fee0a09bf66"],["/2022/03/22/CGCTF/index.html","c5857d23e2ab8e529d0401c2cefc1970"],["/2022/03/24/ctfshowxss/index.html","fa89e67bbd9192c8c788b20b0de0cba9"],["/2022/04/04/黑盒测试/index.html","90114d8a8d61c5a4b7298aa7f19ef524"],["/2022/04/11/nmap/index.html","272020ed50f84e43e99f021b72495cb0"],["/2022/04/12/渗透流程简要记录/index.html","7ce94deed10d62750da44d9726cd8fe0"],["/2022/04/12/渗透测试之攻破登录页面/index.html","938fcbe067b52c48dfafb9c61b24dd2b"],["/2022/04/14/xray扫描器/index.html","35043dd3cbbb87fef38ca58b3ae70cb0"],["/2022/04/15/ctfshow反序列化/index.html","b4d5b0da3e5fd6c0ab853cccf5beaf82"],["/2022/04/26/渗透测试实战/index.html","05539ec5f4dcd5a470ea8afea60234f9"],["/2022/04/28/sqlmap教程/index.html","ef2dd4c9af8b0b2a4d7d57e1daaee04d"],["/2022/04/30/认知文件上传/index.html","3b3f35be80848e42a1d3f988eec768b8"],["/2022/05/03/nahamcon/index.html","5213f37a0d3f081d2b6f41a440c34558"],["/2022/05/15/awd/index.html","aafcfa4cf5640481fa35c40ce5d39edf"],["/2022/05/22/DASCTF/index.html","6f418a9b22d28a8dbea71d5542e7f526"],["/2022/05/27/520/index.html","4214c4b8add45625b2b92195ed525a52"],["/2022/05/27/ISCC2022/index.html","7b07168af66f3577664ed9b36ce3c911"],["/2022/06/01/第五届世界智能大会/index.html","8b58a5ca78ec31fbb3d4dd2b5b4249bc"],["/2022/06/04/SEETF/index.html","2f202c7eb27d8560e9ac45482f92deee"],["/2022/06/04/bcactf/index.html","0c6b121cb89df17c7753995cb81d11e9"],["/2022/06/05/BSidesSF CTF/index.html","e7e3af905b2fae784173e99dcea1a70c"],["/2022/06/07/Docker部署web题目/index.html","c2fc2dedf90547832bc6ce1ea413a79f"],["/2022/06/09/利用oj搭建C语言考核/index.html","28c516260d014069f30767d8ac43db21"],["/2022/06/13/限免题目/index.html","981af86680a9610541ea36fae9814871"],["/2022/06/14/钉钉rce/index.html","1394c0a07aa95ae6529f10c9ccdc201f"],["/2022/06/16/内部ctf/index.html","1ea3b3ee427e7f519e66178c354429dd"],["/2022/06/25/攻防世界高手区(一)/index.html","4cf7935633c00fa3232a04d3ef91cb5d"],["/2022/07/01/两小时AK赛/index.html","fa5599cfa6a80dd65eca8844e7eb56f1"],["/2022/07/03/鹏城杯/index.html","66852e7a76a7b553b99e817401ea5ef9"],["/2022/07/04/XXE/index.html","a787aec1e1e8f6c898a99a974548ce2d"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","7e77cf0b013ca6923aac9dcbb12ed0fc"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","92f0a03675b61087e2ce4ea0df1c18df"],["/2022/07/08/chinaz/index.html","3b5af86aac783b241dc0b5fc2d108bf2"],["/2022/07/09/蓝帽杯初赛wp/index.html","ee2e87cc74f351e9f6ddba5bc4ba787c"],["/2022/07/17/NepCTF/index.html","5d0cec9fefe6d6e4c42d525eb80a6e47"],["/2022/07/19/2022ImaginaryCTF/index.html","d2069d81b69f93f8c309951b33f38761"],["/2022/07/20/局域网攻击/index.html","d2fe0e24718fdfb97c2f29d2e38a3742"],["/2022/07/22/2022BDSecCTF/index.html","c88d438ae939dc3455d29e9492721508"],["/2022/07/25/DiceCTF @ Hope/index.html","7c53b822c80f0bd5ff652d8d03e15a7c"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","8f952466c2d3abfc9c9ee75a9161fa5d"],["/2022/07/31/TFCCTF/index.html","6c3af0f10d650ca55c67a3b0fc328c3d"],["/2022/08/03/NSSCTF-r4/index.html","cafabc3944fec4ae5a1d199cc52966c4"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","fe8fe3e296dbd764fa9070b4e5ef341b"],["/2022/08/12/T3N4CI0US CTF/index.html","7c4beb23a41cf39e1845fc9c0a631635"],["/2022/08/14/SHELLCTF 2022/index.html","5c6bfe4230e54d1ff3b9371a973d9be0"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","04ad404a3bf966047bb7e793bef8d57b"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","c4682981abe86be52b9e02106801624c"],["/2022/09/16/柏鹭杯/index.html","858ac762cb0e0390d3422ac488bb77f8"],["/2022/09/20/HUBUCTF 新生赛/index.html","6b7e8e1bc299ee7cfa662bbb09d3310b"],["/2022/09/27/NewStarCTF/index.html","1f6404bbf87b3e3f2c3322bc085488ca"],["/2022/09/27/打靶-渗透测试1/index.html","cabf418c8720bde793d91ba515eae360"],["/2022/09/29/tp6漏洞/index.html","805f0618fac1e976114a3a8ee6e6c3c5"],["/2022/10/02/SWPU NSS新生赛/index.html","2085c0bc14fda12b76566de61e3b6050"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","00399d866fa86ead71a0c4e5cc8c76c6"],["/2022/10/27/Moectf西电CTF新生赛/index.html","5b79093a02ad2f6adc8d6725fc7c066d"],["/2022/11/02/HNCTF/index.html","2c220609bb9c74a6950ad6bbf75e76f8"],["/2022/11/04/2022工控CTF/index.html","5232f3290006fa89b0d5ce3060d4946f"],["/2022/11/21/极客大挑战2022/index.html","8d9bfedbba29302f06d151059040a2c0"],["/2022/12/05/TUCTF 2022/index.html","e6f582a65178367a49f13503bb23e996"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","8a9215c2c9bad960de672b629dbe0af3"],["/2022/12/18/金盾2022/index.html","5cefef4633784f1d202ce9a47d99789d"],["/2023/01/01/CATCTF/index.html","f3911030678b78875e608b4768b15981"],["/2023/01/09/RW体验赛/index.html","329d98877c275baf2735dec03fcae089"],["/2023/01/10/铁三/index.html","3ad1680c032143b7fe302ffeb6d39dba"],["/2023/01/16/Ugra CTF Quals 2023/index.html","2b23edfa5d0bd3bbf35c236934ad9a11"],["/2023/01/18/山石2022冬令营/index.html","a2091322142eec5d2ae8461b7adc295b"],["/2023/01/19/2023SICTF/index.html","c8e58b41aa188d7ac55958d7f5bc2e12"],["/2023/02/04/2023西湖论剑/index.html","e8b9b42e99b40911566bd05f0591ab6e"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","d3eeaab3d8af35526b90c4a3430ff9ff"],["/2023/03/04/公安/index.html","85ff82522179374b8117d7ef7221e72c"],["/2023/03/07/mysql之udf提权/index.html","4f508f2fa43e4b93869ec0ccc1197063"],["/2023/03/07/红日靶场练习/index.html","ef8e3528f754b3702020a8e035c95492"],["/2023/03/27/NKCTF/index.html","f5987600a545df5b2c5fedd40e2617b0"],["/2023/03/31/楚慧杯/index.html","f6b5b623f2ad14791f457da3f172e493"],["/2023/04/23/HDCTF2023/index.html","b679295bb34600276908ff4963d7af34"],["/2023/06/01/2023CISCN初赛/index.html","22319c5758808289572a2fe943474df7"],["/2023/06/28/2023CISCN[华中决赛]/index.html","d04049a73d5e314bb36c24968c1d1322"],["/2023/07/10/CyberSecurityRumble Quals/index.html","10172aafa996ddc3a09628d1c89b3ffc"],["/2023/07/22/2023BDSecCTF/index.html","65f13117d87348a66777410a133aa0ff"],["/2023/08/07/SQL手注小记/index.html","62fb04001a8fc2a060e5eadfd8b14121"],["/2023/08/27/2023陇剑杯/index.html","3c000d483865796d0ea069677898f1b9"],["/2023/09/17/2023蓝帽杯半决赛/index.html","1649174279433a2a430b27af2f606dc1"],["/2023/10/23/对于多层代理的研究/index.html","ef0c180edc403ea97164a88d26a5ef44"],["/2023/11/25/金盾2023/index.html","4d11ce1251081646e437f952dae5a645"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","39bb75a6438028949d33017a04285f3e"],["/2023/12/18/2023强网杯线上赛/index.html","4781668dead6da5ad6142a83740c7af9"],["/2024/01/08/基础ROP/index.html","a30c11a5be6661975eace147077064b9"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","804339664cb868534e4307b1106de0be"],["/2024/02/13/打靶-Tr0ll/index.html","d59e3e2989a35b083c0e5ba326b74b8e"],["/2024/02/14/NSSCTF-r18/index.html","47728e87d77d58a20eceda4a5b90c3a3"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","5dcd89fd0680c74f64d47ab383723b8a"],["/2024/02/15/打靶-CFS三层靶机/index.html","3dee34ae8dd87e2b041758fecc1f1ba3"],["/2024/02/15/打靶-应急加固【简单】/index.html","65f82636d12945524c82fb2a0af24463"],["/2024/02/17/2024VNCTF-WP/index.html","646f9a7ffe25d549228b9b37493b928e"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","551d6319b55672379a9a566ff06d525e"],["/2024/02/19/2024SICTF Round#3/index.html","a4d35c26f9db6bda0924f3811b3abca4"],["/2024/02/19/打靶-铁三域控/index.html","ba73ae9946edf0b7606326738c1d9b16"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","76a7916eeae198a24be69115a59154bd"],["/about/index.html","042e07505a11a9339917b2faf9375112"],["/archives/2022/01/index.html","87c59fb4edf3e88e2020d8a74403adaa"],["/archives/2022/02/index.html","d4955f7e3bfe8473503c7902ec576325"],["/archives/2022/03/index.html","5c600380414a6d7bcf43cef56643e46f"],["/archives/2022/04/index.html","632bde1ac74bda40fc647e6fcb32a8ea"],["/archives/2022/05/index.html","ff21807315e14f60cf01036c762e7fac"],["/archives/2022/06/index.html","2f6221f8b3b86847b8a059d06745bd22"],["/archives/2022/07/index.html","1ac2c2c26ef2837923b9b0fea883cf02"],["/archives/2022/08/index.html","f85e0de7b2723fa0ceb052489539ad16"],["/archives/2022/09/index.html","d84de5cea96ac436ae21171422df540d"],["/archives/2022/10/index.html","cb353431ff5205d1b43e6fe89d052bef"],["/archives/2022/11/index.html","91a435651dd9a59d5dddee2541599152"],["/archives/2022/12/index.html","7cbf7635ec7a210dd90dcbae1c2af79b"],["/archives/2022/index.html","53973b3cf4ba11b060cf804228e67eee"],["/archives/2023/01/index.html","ff6efffda6c17b22637e99a5c01aadb2"],["/archives/2023/02/index.html","04dc49ca7d0fb545e5bfbbef5a807561"],["/archives/2023/03/index.html","75e1546853e6768569af906961e4f472"],["/archives/2023/04/index.html","804e0a3518f3187f8f1077a24f8afd68"],["/archives/2023/06/index.html","c9582a6df85a2b8fad949c0b3dbb3689"],["/archives/2023/07/index.html","21d0314d95107b8b50c103546e49a113"],["/archives/2023/08/index.html","053a7420c868b4315328b9900e9b2b91"],["/archives/2023/09/index.html","eac0282e978c5d54ea8faa3fdabb6581"],["/archives/2023/10/index.html","cc2f7c101f2423eb743fc74d2aa5ff14"],["/archives/2023/11/index.html","3fcc21dc751eba25d3360ed9acce7d3e"],["/archives/2023/12/index.html","60e55a33d3336a49644cf8f32ea367b7"],["/archives/2023/index.html","3b744336c3ebf3338573c92255d336e3"],["/archives/2024/01/index.html","146647c0a708389aefc22f450a675e07"],["/archives/2024/02/index.html","c76615984ab58b94b19983fa386db253"],["/archives/2024/index.html","092fdd56230145efc6bfd5dedbf82e1f"],["/archives/index.html","931dec102073891c47c558712f0416c0"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","e8609062502a8797f4d983fd1173943c"],["/categories/CTF/index.html","f07dc3ac635fee0e102dfe0604ea2a0d"],["/categories/PWN/index.html","4d1c6d1e8a3f8ca10b4fc22b7a70a6d2"],["/categories/RE/index.html","3b7ee9ecf13b7f8c3984188d68f87c68"],["/categories/Web/index.html","39f6943363b04ae6b657ce42f0fa75e9"],["/categories/awd/index.html","cdac472b765f2696f3b7e43d2000f174"],["/categories/index.html","33d06a56b19a4790e474b14f1baa6a8a"],["/categories/misc/index.html","d3e98847bd389457ca2c9e73654083e0"],["/categories/博客相关问题类/index.html","1011aade07e149ffc19d2296428fce7c"],["/categories/局域网攻击/index.html","718610fd6291647dc85259f9dce362ec"],["/categories/心得/index.html","508004f10cf339949e435940f360b562"],["/categories/渗透认知/index.html","6fcfa4b909bd8809874f8aa8ad77d520"],["/categories/漏洞复现/index.html","0526234150079b182da0c2157efaaaeb"],["/categories/漏洞测试环境搭建/index.html","37493d9e6718ea7b845cf851a324ba90"],["/categories/赛后复盘/index.html","e7860aef5d4efac218f5ef362c9467e9"],["/categories/靶场训练/index.html","2815dbc9246ce38349b37b96a66757da"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","4f2424e8bff11a67a272a4939c080f89"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","ea8c9a3e9b88b1769b1da2d06f56455c"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","ff7a05154ddb67366e422370d8533da7"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","4c6ad9cbbe1bce8837704a8c59b936c4"],["/page/10/index.html","59f25b36143e68f299a17ff3f526d69e"],["/page/11/index.html","02df7edcc4dfb7cf9cc8c158126bf72e"],["/page/12/index.html","2f782c9b8cbcf5db19bcea3c0fce3e6e"],["/page/2/index.html","c9279f1412d9ab42b89b65f46564ce7b"],["/page/3/index.html","1cac52b9b0f353a215fc30f0d5a6d4e5"],["/page/4/index.html","9a9b47354e624d3306e245b90f399686"],["/page/5/index.html","a536b90a282e066b7760a20b4fc61ea3"],["/page/6/index.html","1c1c07f18c331224ea8a8bfbff25fffe"],["/page/7/index.html","22afa6ba01195389db744b1f1fdab473"],["/page/8/index.html","b1f98397d1f3d6689e9ead7158093756"],["/page/9/index.html","b887ee87a16ba030dd0a859d4acffd0e"],["/sw-register.js","f13263572e5e3193f217ed404cf93824"],["/tags/C/index.html","6cec16d322fc50b2b2341d9f09301682"],["/tags/CTF/index.html","7da3aa0290ff8b87d53f9d22bc165eec"],["/tags/HTTP头部信息分析/index.html","a39adc1354922880406b5589aaa80402"],["/tags/MSF/index.html","9b2825aeab425d7c434cc73ac9e875ca"],["/tags/PHP伪协议/index.html","d7025cef621683b4eb67da9bc25c4185"],["/tags/PHP特性/index.html","b9553feb35b07f6507741230e05d2a34"],["/tags/PWN/index.html","ce15d7f87296ed9d744b331e913749cc"],["/tags/RE/index.html","0edf331ea7831c1f1f0198f99829a20f"],["/tags/SQL/index.html","14f1062f39403d70b5de3937111178e5"],["/tags/Web/index.html","785187d6cdcc32fe85955ba4ee0507d2"],["/tags/Web工具包/index.html","abf2cc5b4600f1f36f810370a4da1671"],["/tags/awd/index.html","0fda912b5f06964d27a17e10ff092a1c"],["/tags/ctfshow/index.html","28a2c88dcb4828e2ed26416862b6c38c"],["/tags/index.html","f64a5a6014d832f2056fac29d2f42c78"],["/tags/misc/index.html","013ce64f1237259c36aa20863f1e1007"],["/tags/next主题失效/index.html","97e0f156c71c14c4664fcdc682058e01"],["/tags/wp/index.html","fe7d6665fc0d1891a18e2da6165f34a7"],["/tags/xss/index.html","36b0045dd06a49cb7dd6e0149f4cf53a"],["/tags/xxe/index.html","38bfe3639b925a8b6325bfc180a1efda"],["/tags/不蒜子不显示/index.html","f35afbd73d80038548fc91244f61e55c"],["/tags/博客/index.html","3193061009cf44c2393364ba581bfac1"],["/tags/博客主题优化/index.html","f4ff86a28560ee96794f0888e6b6639c"],["/tags/博客死循环框架问题/index.html","d3f7fad24574d255148a6798379b595e"],["/tags/博客部分问题解决方法/index.html","258919378ec4b85dcc7852fe9500aecf"],["/tags/反序列化/index.html","331c5fc6f11141629e93eb241b43eb06"],["/tags/命令执行/index.html","fea5a337c94cfd54ec1b4fc2cc3d759a"],["/tags/局域网攻击/index.html","7565b955f437ec0261a2aaf5cdc089b6"],["/tags/常用指令/index.html","7c75cf7435ffd32440d6e16901fe1e47"],["/tags/心得/index.html","812ecb497ecb6d9db2b6539be4cc8417"],["/tags/文件上传漏洞/index.html","1531fb7595d41660e9c501bb88adef10"],["/tags/文件包含/index.html","0d651e847c97d490932a394b6d31fe0b"],["/tags/流量分析/index.html","619c461b237e5e7d5f31930c333c1e98"],["/tags/渗透/index.html","f9eb0fbf49b84c03c0dc88173d9c51de"],["/tags/渗透认知/index.html","92dc7f132c2e9cc54addf262484f42b7"],["/tags/漏洞复现/index.html","51857ada50d003d982bceea1ff846544"],["/tags/留言板/index.html","a41f4eb237ae4d1480f1b0b82cbe7f38"],["/tags/赛后复盘/index.html","cc300d9e02300b823f3a069975648b48"],["/tags/靶场训练/index.html","f7864e544af748aad23a671828f7fceb"],["/tags/黑盒测试/index.html","beeecc16767714af547ddaa59f9bf93a"]];
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
