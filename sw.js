/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","47a6a9d5e7604e7804e943a41cef680d"],["/2022/01/11/博客制作遇到的问题/index.html","a53bece9021a18331c498ccbb497e622"],["/2022/01/15/C/index.html","10ab779fd16b4e32ba1b84756d8c81ce"],["/2022/01/18/新版next置换/index.html","e0769a74c3b271881fa06358af45afc4"],["/2022/01/19/不蒜子相关问题/index.html","b0b7d1ba1b1deffdc56ae1ea87e7eb57"],["/2022/01/19/框架问题/index.html","4d6ddafb838456bb3dbcf96d5469ee5c"],["/2022/01/20/ctf之reverse/index.html","bead89816727107df47da500a4eecd3e"],["/2022/01/23/misc隐写题目总结/index.html","c5fc61efce396b95e9ea2e645b905e73"],["/2022/02/01/684/index.html","b4a1bdaa28f29a2eeafbbf00a467f69e"],["/2022/02/03/留言板/index.html","7c724a47b8153f5dc0eaea809419ca47"],["/2022/02/04/SQL简单注入/index.html","66d7d2701231a8451f5055b22d56a4aa"],["/2022/02/05/最全的HTTP头部信息分析/index.html","1201de92645bd3601da9982b1d8fe3b3"],["/2022/02/08/ctfshow文件上传/index.html","c8318602f04d52ef772d9dbefe9efcfd"],["/2022/02/08/常见密码类型/index.html","bb91008d84ccb95dcf8fb4ca6b3b2089"],["/2022/02/12/VNCTF2022WP/index.html","e76b31143876b63332b7805c278b8f7b"],["/2022/02/20/ctfshowPHP特性/index.html","849e925552aa3159804a01fd6d4f78ae"],["/2022/02/25/php伪协议/index.html","cb02421e7f5fa6b88d5a75b309f7f83a"],["/2022/02/26/ctfshow文件包含78-117/index.html","1da63917be752a7f155a34723611eba4"],["/2022/03/02/Clash漏洞/index.html","e47bec18329da02bb47492966978d348"],["/2022/03/11/流量分析之题型解析/index.html","fd1e420d6c8994d74f359ca1402cf45a"],["/2022/03/15/ctfshow命令执行/index.html","fa45c9aa9944ac694f494050cbcf8569"],["/2022/03/22/CGCTF/index.html","cb65c10111d952a9c390a53763d57d23"],["/2022/03/24/ctfshowxss/index.html","19db09ec98cab4ffa857c9ddf8c411d0"],["/2022/04/04/黑盒测试/index.html","703a8245d77248e30a9bf66252b65fe5"],["/2022/04/11/nmap/index.html","7a416548dc7d1b8e08a524ee9c511384"],["/2022/04/12/渗透流程简要记录/index.html","2237ff16cfbfb9e7807db20a267d23bc"],["/2022/04/12/渗透测试之攻破登录页面/index.html","088aa195a8dde62c86dcd2a3aedf0232"],["/2022/04/14/xray扫描器/index.html","7fdfe5e3e084f8e91e443fb3d5980058"],["/2022/04/15/ctfshow反序列化/index.html","8ef6032e07e69d84b343472dcb930f20"],["/2022/04/26/渗透测试实战/index.html","3a03851528ffcb7aa9d47773ba96185e"],["/2022/04/28/sqlmap教程/index.html","033ed5f64b03a9f70a367f0eb0d343f7"],["/2022/04/30/认知文件上传/index.html","06ff41e7f104d682aa0017a5c1c14a5f"],["/2022/05/03/nahamcon/index.html","1b05366f11918ee5779df86bf0662d7c"],["/2022/05/15/awd/index.html","0d54ecf5f46a08bcdbe71f8a8b265513"],["/2022/05/22/DASCTF/index.html","9ca329618c494ec4da46695a52274d64"],["/2022/05/27/520/index.html","ecafc29bca90896eca70ef9fe3e9b45a"],["/2022/05/27/ISCC2022/index.html","374c9156b102e5d774bdba632231d286"],["/2022/06/01/第五届世界智能大会/index.html","08868139ffe0214f9697e5772d0e25a2"],["/2022/06/04/SEETF/index.html","f1ae49f1a4ae7582eed741a36fcc284f"],["/2022/06/04/bcactf/index.html","ac64ef3bc7dec039ea1a6f03250c3a6d"],["/2022/06/05/BSidesSF CTF/index.html","321774320c66428a24cafc2b8a71146e"],["/2022/06/07/Docker部署web题目/index.html","772be17e354d895e3fa7def145337583"],["/2022/06/09/利用oj搭建C语言考核/index.html","ea3855aa4dd184292cb949664b2463c5"],["/2022/06/13/限免题目/index.html","4523c02e7d99fd88c7160557c39c807b"],["/2022/06/14/钉钉rce/index.html","3a713b27c936114173dfab318f5ebcef"],["/2022/06/16/内部ctf/index.html","8a704b1fdec563ea95e6a7416edeb6fc"],["/2022/06/25/攻防世界高手区(一)/index.html","c833ba83f55b7a243f62b6013b03596c"],["/2022/07/01/两小时AK赛/index.html","69dd666c4c71d008438ce7deed027d49"],["/2022/07/03/鹏城杯/index.html","acc765d038d0f7f91f2e8be7413e3ab0"],["/2022/07/04/XXE/index.html","7b9bc41a538dccb73ad67321b16643e2"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","8cf8eb102d3eb097a11a9c84013fa495"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","830f16540933e3b0007665ea29f18b4e"],["/2022/07/08/chinaz/index.html","c0186589b373092696cf3a6543be3a99"],["/2022/07/09/蓝帽杯初赛wp/index.html","e66f0cfa54ba776752b2f25b54f9564b"],["/2022/07/17/NepCTF/index.html","115740123720a9d4f95ca0919e93ce97"],["/2022/07/19/2022ImaginaryCTF/index.html","8481e83ea1b6ce140797bd10a22ef7e1"],["/2022/07/20/局域网攻击/index.html","63489b6ca027cc08f39ffab4273d914d"],["/2022/07/22/2022BDSecCTF/index.html","5d8a61a85ef6f468752b1e3a9333cfc2"],["/2022/07/25/DiceCTF @ Hope/index.html","fd0ed783b1fe568514946fb5fa52a574"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","176211e3b18923ad18c91dd99ab925f4"],["/2022/07/31/TFCCTF/index.html","e7401440ea32744df0aa4fdc37ecf5db"],["/2022/08/03/NSSCTF/index.html","448946702853b4116f106de2ddbdd922"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","8f953bd8cc45bf80840ae84432c3e8aa"],["/2022/08/12/T3N4CI0US CTF/index.html","338aedb891181bf845b3658adb737c4d"],["/2022/08/14/SHELLCTF 2022/index.html","887759bb4c76af2504359726aa1e3c7c"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","389dd3756ecd180cf9db342e24aa3e16"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","89fd90b2a41859a751221bf36b8b23a3"],["/2022/09/16/柏鹭杯/index.html","50ad1a85eb92f55fbab6e19115e2368d"],["/2022/09/20/HUBUCTF 新生赛/index.html","3f04f429386640c11faaef7257550721"],["/2022/09/27/NewStarCTF/index.html","e8d5abaa4cf5183934abf638c64213ed"],["/2022/09/27/bugku渗透1/index.html","87fd3c31df07fb7f8918771ccd9b6099"],["/2022/09/29/tp6漏洞/index.html","2770525a41887031a5c9f5903705470c"],["/2022/10/02/SWPU NSS新生赛/index.html","8895e944f9a64294aa6314d3453e82b9"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","492bcba75d26b523bf02ad3a94ff9ca1"],["/2022/10/27/Moectf西电CTF新生赛/index.html","a8789e630f57ecda6fe9e3c520eeb98f"],["/2022/11/02/HNCTF/index.html","5d34d968210e91c2d8bd580c3501aae6"],["/2022/11/04/2022工控CTF/index.html","fb8cb35b04cc578b41a8363e573bea84"],["/2022/11/21/极客大挑战2022/index.html","d66a984d8856f2c1ef75d5f983e9aed7"],["/2022/12/05/TUCTF 2022/index.html","39fa55156a48e83ac640f02543ab293a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","72c9c59319c6fc51a2dc88ef22abe203"],["/2022/12/18/金盾2022/index.html","ec5ccd9be09f85592306194be08932d7"],["/2023/01/01/CATCTF/index.html","48f56310676c129324fbd714f3f03610"],["/2023/01/09/RW体验赛/index.html","fabc90e6fa26471d7c844b42bbe9d86d"],["/2023/01/10/铁三/index.html","f91ae014d301a546dc43997b5554b557"],["/2023/01/16/Ugra CTF Quals 2023/index.html","d987717e95879d7dbc926c5febb33333"],["/2023/01/18/山石2022冬令营/index.html","2dbaa7c9a6cae57fceeafe50190793d6"],["/2023/01/19/SICTF/index.html","7b45feaff7b4fcdb82dd3e3d8ac4b227"],["/2023/02/04/2023西湖论剑/index.html","17ec6ec5cb5ce409d6451298fedf0f5b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","db01c103a043b6975b555782eab4912d"],["/2023/03/04/公安/index.html","ee83e989561c65d913a1a096a23bfbf0"],["/2023/03/07/mysql之udf提权/index.html","602b7b36c6497f48cd6fb4a13328c345"],["/2023/03/07/红日靶场练习/index.html","2a117fb36a4b350c1d804fbc019dbb09"],["/2023/03/27/NKCTF/index.html","8e148ff051ded06358cf8b942b15fa87"],["/2023/03/31/楚慧杯/index.html","2a274d6c31509624b25b76cce8fd43dd"],["/2023/04/23/HDCTF2023/index.html","79222a36107fbdb143f06c89bbe297bd"],["/2023/06/01/2023CISCN初赛/index.html","a451e1b1c4e2efeac99dda52a419181b"],["/2023/06/28/2023CISCN[华中决赛]/index.html","a0c55cc77d07ead5da651ad5f347a4d0"],["/2023/07/10/CyberSecurityRumble Quals/index.html","14eeb17810ae114c6edb45cec928d5b3"],["/2023/07/22/2023BDSecCTF/index.html","22247bdee3fb3c10198292c057ed91ab"],["/2023/08/07/SQL手注小记/index.html","11093ed15546222606f65984c6e53a05"],["/2023/08/27/2023陇剑杯/index.html","ad2dfafbf4ac8bf477aef05ce9d8942e"],["/2023/09/17/2023蓝帽杯半决赛/index.html","b4948eb90b158bacdbf5d71f29f26674"],["/2023/10/23/对于多层代理的研究/index.html","08c37a644c1c75d2dad71c9ea401228d"],["/2023/11/25/金盾2023/index.html","a8aec80d29bb9c0370f2da7d1989daf1"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","e335957a9cfc454325e087ecc749d3d0"],["/2023/12/18/2023强网杯线上赛/index.html","ed60ccd5ad86e262b20d4c01cfd02818"],["/2024/01/08/基础ROP/index.html","0f536199a57b9e04701781161a1b33ae"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","8d6c593b8c1ebe751ff1d5f0292615f8"],["/about/index.html","ee76898e93b665c5962a07d0d1cfe730"],["/archives/2022/01/index.html","96f15df2a78f5ebd194c4359473221fe"],["/archives/2022/02/index.html","47bb10dd7ff7b72293d419a4d5b183da"],["/archives/2022/03/index.html","038b76b13cf78085fa448a7f53e4813e"],["/archives/2022/04/index.html","ce6c81967f8ef749bd01eeb286e3014d"],["/archives/2022/05/index.html","9b5ce30ab0ef6d3ba8d047a211d296f2"],["/archives/2022/06/index.html","46744523707f70a0b3d0ea3b5b323b52"],["/archives/2022/07/index.html","c2d6666e621c72c3bfa510b01cc53a9c"],["/archives/2022/08/index.html","0f3d4ea1a6be26e0a236a273af0c8206"],["/archives/2022/09/index.html","d4a001745ccc5c6fa164a77cea1c94e4"],["/archives/2022/10/index.html","c7f1193acfd4bb52166d0d6fc2385dd9"],["/archives/2022/11/index.html","28cdb8d96053fb623920b77eb3df1b67"],["/archives/2022/12/index.html","1075d839ee47e861c79708fe5c8a46fc"],["/archives/2022/index.html","b914db5508c87b9bbfd2f1b8be7f953c"],["/archives/2023/01/index.html","a2d2ef9a7fb1ccfaf496069610eb7587"],["/archives/2023/02/index.html","b3642b63870d911011b9a036dafc393b"],["/archives/2023/03/index.html","157fad244a2752d429873f91ca627818"],["/archives/2023/04/index.html","a543257427caaa498574ee2ee0a71ed7"],["/archives/2023/06/index.html","4f11b849c52f81273a3e439f57cf63c4"],["/archives/2023/07/index.html","4e1a5192767a0ad2f7d28e980b16e0a9"],["/archives/2023/08/index.html","036c663e580e7ff4e81f1e8a04add5ca"],["/archives/2023/09/index.html","fc891e9996d6ed1161c9ee4bb438b8cf"],["/archives/2023/10/index.html","f689f90efa5d46910c26c6e9d14e21da"],["/archives/2023/11/index.html","68e2ce6c9e7974d983a9c6c48ec13947"],["/archives/2023/12/index.html","5ba2cc65a283feacefab0cad8c8526fe"],["/archives/2023/index.html","0219bebc33e67edf3a6f0fa8dcfd2bac"],["/archives/2024/01/index.html","7160da96ce81b997a2169c8dd999d4e5"],["/archives/2024/index.html","8f7aaece1771e1f1f809179a64ba1e89"],["/archives/index.html","36478a02054a5d157540c09069f2e362"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","20a464800aed53f824594559e42004c9"],["/categories/CTF/index.html","3bd3dcd05f57ed532892192f95dadb90"],["/categories/PHP伪协议/index.html","e79cd1152d20ea8e96ddcc33d755e9d0"],["/categories/PWN/index.html","da55952b6d4e3ca2d2f52fabed9fa80c"],["/categories/RE/index.html","2323388e81e7c1e45f955cf76c098028"],["/categories/Web/index.html","44ed158e41d73dccb393cf1699381bc4"],["/categories/awd/index.html","32eaa0e3ddfa09ea172d76e5f8546876"],["/categories/index.html","e3a58ffac2f05076929ec824ce92e183"],["/categories/misc/index.html","da2e008f99c4dc15caed90e5ad6a8d0c"],["/categories/sqlmap/index.html","32cbbdddc45f001e9c3a5fc4fd0b39a4"],["/categories/博客相关问题类/index.html","74cc309c53a4903e099f34c1d2371046"],["/categories/局域网攻击/index.html","e5008447d7d0686b61b610479b052b6b"],["/categories/心得/index.html","e408c8999beb9662210b3a4157360a96"],["/categories/流量分析/index.html","a44bfa2ba0164ffd63d6557674360212"],["/categories/渗透/index.html","b03169cb4095a40528dcb6ff490664fb"],["/categories/渗透测试/index.html","20400dae4b3970b587d308813a4f2ca0"],["/categories/渗透认知/index.html","4224bdb40114de7833c3ff18e76dd62c"],["/categories/漏洞复现/index.html","c68b49676e7e7d7ed18f78654ac51622"],["/categories/漏洞测试环境搭建/index.html","a466473088b5b7e056ea9bf3165abbbc"],["/categories/赛后复盘/index.html","e8aaa0059727116285b3ce6c436e7bfb"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d778ef226f80b15816e63ba7127004c5"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","b34aaeff222b49a20acf15ed8c06ec21"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","8580aaed109dc71ae49f28cad2477db9"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","88dd66d766fefb09071eb94fc506be1e"],["/page/10/index.html","5efb0cdad91749bf9b2888a3c8e0672e"],["/page/11/index.html","d8e59908dae72b275acaf90f85f389f1"],["/page/2/index.html","54618263793b9f2309fdf9fbfd19008c"],["/page/3/index.html","3cbd949eb7d47c733a9a0653f8f3deb4"],["/page/4/index.html","7e7fab83a7e41689dc411b5dbafea934"],["/page/5/index.html","2ab8712600fe7418c211b3ea8c1b97e1"],["/page/6/index.html","41b3add5bb530d418d473e8b4fe6bedc"],["/page/7/index.html","7fd0235f0f7b8caeee584c7acc07d770"],["/page/8/index.html","83423121abfe0c33563786b8c92641bd"],["/page/9/index.html","78b00c510bfea1dd20ddecfe55a2966a"],["/sw-register.js","559cdecd75920cb4f390a4e89a8f018b"],["/tags/C/index.html","d8796cee0e18799ad8ed1f4ca0c35062"],["/tags/CTF/index.html","8eca8c1628015e4865a76881e5de009b"],["/tags/HTTP头部信息分析/index.html","f0510e14fbc704aeff0df9bcbd8f5dc6"],["/tags/PHP伪协议/index.html","435aab31c8bb9358b5416402f9fe5ef1"],["/tags/PHP特性/index.html","ca138e12e1e6f998bb11b2a82d365acc"],["/tags/PWN/index.html","1054d817d5964389d72097f05e7767d1"],["/tags/RE/index.html","01cb4efe42db5d1cbdf61113a133e096"],["/tags/SQL/index.html","3711ab3ae0d837b4f95241b3262ce4bd"],["/tags/Web/index.html","802678667193206a92a62a19f7a3c8c4"],["/tags/Web工具包/index.html","4e58578eb0ac53fe7f0f67371b10df59"],["/tags/awd/index.html","590fcebbc287c2f6440c124e42b4832f"],["/tags/ctfshow/index.html","4e2fdeda25760eda893d184406048678"],["/tags/index.html","38eb3acd43116bad50a008244fccad9a"],["/tags/misc/index.html","0445128e94d4653f7dec94736a6fdd93"],["/tags/next主题失效/index.html","e32a33fd7482d2f8f074097ad1782812"],["/tags/sqlmap/index.html","f73601df5c17d1845245173ced8bb20a"],["/tags/wp/index.html","c32af3480aaf70bfe1593076894f8017"],["/tags/xss/index.html","09e35db711f3f7a18de4c0fc87f1915e"],["/tags/xxe/index.html","ffc6e1083130fd3b913382529b90afbd"],["/tags/不蒜子不显示/index.html","bce38778b11be3c9e208bae6b5ef4ce3"],["/tags/博客/index.html","5c1278aa6ef679faa81f5d4b8aae6edb"],["/tags/博客主题优化/index.html","6069f5c6349d6b90795cdfd086c9c991"],["/tags/博客死循环框架问题/index.html","19b4f5f88fbff35d2bb88fc0c1eb104a"],["/tags/博客部分问题解决方法/index.html","ecc4771dfba4c686fccb36bfa4737e93"],["/tags/反序列化/index.html","c29985553991e718a978f9c9f630daee"],["/tags/命令执行/index.html","ec6833f6b496cfb562a46edecb30d8ca"],["/tags/局域网攻击/index.html","5b30b1b4c2c5d0d50aedbb1533e1b451"],["/tags/常用指令/index.html","f127e2113f550e283c409f67b674312a"],["/tags/心得/index.html","c92e6d5ef690a16ceff7c5b489efe507"],["/tags/文件上传漏洞/index.html","cc582b787f841b3c25a6046dc3c1f724"],["/tags/文件包含/index.html","24a1b7d3e2f18778913939ccf8b2f3cf"],["/tags/流量分析/index.html","fb1207e71b9d5258fc451f89522bccca"],["/tags/渗透/index.html","e8aace66d03b26abf36521096cebe719"],["/tags/渗透测试/index.html","318f1bf48b02e1d01adc5291cf202b84"],["/tags/漏洞复现/index.html","5b0d4285116b7592236db08894b5a1ec"],["/tags/留言板/index.html","fcd4fc927edc72ddf46c38f20b6f33b7"],["/tags/赛后复盘/index.html","2299c6b5de9c01a51a4bf3477f3ac227"],["/tags/黑盒测试/index.html","8f483d371a7c300d1434861145b59561"]];
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
