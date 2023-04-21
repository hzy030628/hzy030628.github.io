/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","da16a15913fbfc5bb673e03ad120d912"],["/2022/01/02/Python程序运行常见错误总结/index.html","7049bc2af6ee24fd478be96fa5843f73"],["/2022/01/08/ctf之web/index.html","9da7ac3973dd6cc98df075fc7a0ab08b"],["/2022/01/11/博客制作遇到的问题/index.html","2485126b743421483f96d6f3225d0281"],["/2022/01/15/C/index.html","df1b831e1b221c62662ee96360b6d725"],["/2022/01/18/新版next置换/index.html","0e62a0871db270b5a1de500a6d8ccd73"],["/2022/01/19/不蒜子相关问题/index.html","87c6c505408adde6540bfd557ee73e02"],["/2022/01/19/框架问题/index.html","29f8f641f110569f2701a43a1763eac0"],["/2022/01/20/ctf之reverse/index.html","3fa45bd6d32fa724cc75882c57a4d563"],["/2022/01/23/misc部分解题软件命令记录/index.html","5f72f439bad4c20be4ef870a30eae8d0"],["/2022/02/01/684/index.html","f93911b0f9c06464a3eaf007148b0344"],["/2022/02/03/留言板/index.html","5d0e6204bc481e50d28edadf0874d6a3"],["/2022/02/04/SQL简单注入/index.html","80fc64314d4e6ac845396d7625d95641"],["/2022/02/05/最全的HTTP头部信息分析/index.html","71f27cacb4325bd0d6a8f441084f3aab"],["/2022/02/08/ctfshow文件上传/index.html","1e554254549cfbfa672a4e3ae77e301b"],["/2022/02/08/常见密码类型/index.html","ad076309d5a99c086ff140937f8b7373"],["/2022/02/12/VNCTF2022WP/index.html","e49b2bc7cbdccaffc403494f4309395f"],["/2022/02/16/rce/index.html","f69ff7e7ea7911d1094b2c9aa252c61e"],["/2022/02/20/ctfshowPHP特性/index.html","5d60e58f2f5b0130e7cce5e02bb66969"],["/2022/02/25/php伪协议/index.html","a62bf1c7e94842a897d406bdd70f14eb"],["/2022/02/26/ctfshow文件包含78-117/index.html","80af6781552e29eeb065305f77c130de"],["/2022/03/02/Clash漏洞/index.html","16d392ae64d593c927fed00bfe459194"],["/2022/03/11/流量分析之题型解析/index.html","e72e140281046620e57aa375df25e5cf"],["/2022/03/15/ctfshow命令执行/index.html","e0eb1659ebd7eb85f2081029728fd99f"],["/2022/03/22/CGCTF/index.html","fffaeb78d9b25064f270b021252f073f"],["/2022/03/24/ctfshowxss/index.html","4cd60da37983df4c7326445f9c5a0500"],["/2022/04/04/黑盒测试/index.html","645014682428d220fdd3c42437a5c38c"],["/2022/04/11/nmap/index.html","3f3fd38538d72d01fa726eab796c9fc4"],["/2022/04/12/渗透流程简要记录/index.html","b5bf1d1ac90b80033c9f2af3e3516103"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a9a38d17c7a2e8c334b9df1ec60a7527"],["/2022/04/14/xray扫描器/index.html","e98cc4a4a06850656f079b2203755433"],["/2022/04/15/ctfshow反序列化/index.html","f08fe047033724f5eefc093a1f27a651"],["/2022/04/26/渗透测试实战/index.html","ab844cf786eb2020b18ce9e3ea62a227"],["/2022/04/26/网刃杯/index.html","64f667f2277231f6b5ac7b0f48808f9d"],["/2022/04/28/sqlmap教程/index.html","faa67b29afbf03a9a983ef4d7472568b"],["/2022/04/30/认知文件上传/index.html","e91bd9be107e4736163a0b7f2e863f14"],["/2022/05/03/nahamcon/index.html","4b31a8098657e9d995a09a353c0ce237"],["/2022/05/15/awd/index.html","a5131089ea6e1037d0ed7402d9439c4b"],["/2022/05/22/DASCTF/index.html","7d5d841fa680351fe9bba88a5ae67ab7"],["/2022/05/27/520/index.html","74ab697a42e05ba97dbbf573b8a1f7ad"],["/2022/05/27/ISCC2022/index.html","faca3f3ce1751a936930b7b84f600c2c"],["/2022/06/01/第五届世界智能大会/index.html","8e59334f0885bf6b4924b3460c706a84"],["/2022/06/04/SEETF/index.html","245411dedcd4151318229bb7d8fd207c"],["/2022/06/04/bcactf/index.html","b4f392ed1a9c94f842d27773ac2ddd10"],["/2022/06/05/BSidesSF CTF/index.html","c0505dfa5cd41d4be5fcd18f3442261a"],["/2022/06/07/Docker部署web题目/index.html","bc779289b773fbd98f7d98adddf7570e"],["/2022/06/09/利用oj搭建C语言考核/index.html","cabced4ef9e0f509c77d889a3218ffe8"],["/2022/06/09/论网站502/index.html","5941d86534c9ea9e39eb1dad0757de87"],["/2022/06/13/限免题目/index.html","1e75af2db192d5ad9812bff54663a18a"],["/2022/06/14/钉钉rce/index.html","65f615f58021055be437f72876fdca74"],["/2022/06/16/内部ctf/index.html","859fd507cec20d6de449e20218ee7c27"],["/2022/06/25/攻防世界高手区(一)/index.html","7c14fd6e0df70954514f536ca6cff5e5"],["/2022/07/01/两小时AK赛/index.html","613db8b52eae7f2e2aa600b77b57be13"],["/2022/07/03/鹏城杯/index.html","4007eab38a06f819cc560168b12c75b9"],["/2022/07/04/XXE/index.html","9db6a39e8aa8c3898529ce511cb9430e"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e6d3978f46e5c34efdfc69ca1958a77f"],["/2022/07/08/chinaz/index.html","de40799a7cb91c27e6af56422ee9f05a"],["/2022/07/09/蓝帽杯初赛wp/index.html","b25557bddc67ae0040a186e01aca7485"],["/2022/07/17/NepCTF/index.html","e8e357ee9f1126725f2ed5aee5493771"],["/2022/07/19/ImaginaryCTF/index.html","5805afb372fa1b8cd9f4cadf7ae283ef"],["/2022/07/20/局域网攻击/index.html","8db67f5e24347a55312312ed1b66104d"],["/2022/07/22/BDSecCTF/index.html","64cb08b5e4314728a6333180a306699b"],["/2022/07/25/DiceCTF @ Hope/index.html","aa5324dda599b47e07c8dec55ddd3e52"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","ae38e35f34274e57a719c033fa62d1d2"],["/2022/07/31/TFCCTF/index.html","c584cdd9ecd632bbce4b89a2207e3901"],["/2022/08/03/NSSCTF/index.html","d70fdbad0a33946f85ee773a43eac46d"],["/2022/08/12/T3N4CI0US CTF/index.html","16432499c647c651a5ed98b2d157e8fa"],["/2022/08/14/SHELLCTF 2022/index.html","2dcb129ec25be87e30073b8b83848d36"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","8db6a679e1001e0da878dd1b5f953afe"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","00a843ba654dfedb15095e7072ecd09c"],["/2022/09/16/柏鹭杯/index.html","ffa05db0b62fc2b6213fb3ffe5d07571"],["/2022/09/20/HUBUCTF 新生赛/index.html","50cd066e125f27025b160e23f433ec8d"],["/2022/09/27/NewStarCTF/index.html","c29c87a942030651994dacf4047bdfa1"],["/2022/09/27/bugku渗透1/index.html","dc42b8f8151d39aa693edc461b7eab5e"],["/2022/09/29/tp6漏洞/index.html","28dee7f87e0acc11f12b57d85304f541"],["/2022/10/02/SWPU NSS新生赛/index.html","dffdfac016105cec3e7d26caa0895359"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","6a7ef1262abc80424c68c2f19b019720"],["/2022/10/27/Moectf西电CTF新生赛/index.html","cb520992f57b88d72736fe45d9c11c5d"],["/2022/11/02/HNCTF/index.html","810b26c0f76ebaedb29d53b31e927f79"],["/2022/11/04/2022工控CTF/index.html","6705ac8ca64a13d32e69ec7540e8ab2e"],["/2022/11/21/极客大挑战2022/index.html","1248fb5a11ee2c151a8d344e78a32d77"],["/2022/12/05/TUCTF 2022/index.html","e6c12287102aa75edf23b71f47a531d7"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","39c055f1d4d3503be00426a662e7441a"],["/2022/12/18/金盾2022/index.html","30709ad051ce89fa839978555820a04a"],["/2023/01/01/CATCTF/index.html","96b6645a577f166e2b5fa71d1efc026f"],["/2023/01/09/RW体验赛/index.html","ae5fdc47c177124a6a223a7e8115b445"],["/2023/01/10/铁三/index.html","a27fa66e22a05c35c56eeeb8008b6b3b"],["/2023/01/16/Ugra CTF Quals 2023/index.html","79f66100dec8547ab0771cca9fc564ce"],["/2023/01/18/山石2022冬令营/index.html","d117dea58ac981d619abf2de4e603968"],["/2023/01/19/SICTF/index.html","2b59718a0b1cafffeadae5060ca290a1"],["/2023/02/04/2023西湖论剑/index.html","1bdca005e8cd84edcf074781271f930f"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","54226db625a9759283363a4d5713e0ee"],["/2023/03/04/公安/index.html","fdfb10a4d24b5a037b200994088a8605"],["/2023/03/07/mysql之udf提权/index.html","11ca00a0a5a7cc326a16e00a7320c29c"],["/2023/03/07/红日靶场练习/index.html","5f2108feef91c535aeed8efa6c05bd8b"],["/2023/03/27/NKCTF/index.html","de025ef1c97fa26db0b7bb8593ec3670"],["/2023/03/31/楚慧杯/index.html","c1e365acaf3722f977a137fa61037a58"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","ad9965d0b9e32bdde418e7cc92e0ac1f"],["/about/index.html","96440ac9a1e43271bcb2f06c1b2b80ae"],["/archives/2021/12/index.html","f40dffd718e1596d991cd02a1fc1efd5"],["/archives/2021/index.html","ee7fc384f051c685bf8b3e6d428e1fac"],["/archives/2022/01/index.html","6b988378eb0b4864e5a3e86dbf2d93d2"],["/archives/2022/02/index.html","ddce45c865f48ae96e622885a03614f9"],["/archives/2022/03/index.html","d98e20ffd940cac8a7387c63c73d98c3"],["/archives/2022/04/index.html","bfe723d70b0a4da04f1c10729321bc9a"],["/archives/2022/05/index.html","486344186f85cf406ec207a0edd0b2a5"],["/archives/2022/06/index.html","2db313e4912890593e056c63f491c29f"],["/archives/2022/07/index.html","95a51ea9f9860715043d8d26f359f3de"],["/archives/2022/08/index.html","436a34fc072389004d2b1c07398e8052"],["/archives/2022/09/index.html","6d29540eac88306169ce09a057e860ac"],["/archives/2022/10/index.html","ba387cb04f6eb62d5412d52d01b94a73"],["/archives/2022/11/index.html","26e2e6fac96d0f72bbb6fbece2dac22b"],["/archives/2022/12/index.html","5f44c89e4fe96c2a5cf2564325859a62"],["/archives/2022/index.html","53dda84f6e0d4f268f45285ef348b006"],["/archives/2023/01/index.html","1f54d2ac0ed72559db9b75d0aab2035a"],["/archives/2023/02/index.html","83064be71a433ca9d993d554029bcead"],["/archives/2023/03/index.html","10c43adf0c525deffb98db685783c5a6"],["/archives/2023/index.html","581b0bede20cf6e5f4366e33e2e94cef"],["/archives/index.html","db334de3c5c26331b421fc27c960e0c4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","e23e510b1e240c94f83d2992c06e064f"],["/categories/CTF/index.html","890e5c47df07eb5f2d2601f9cfc01669"],["/categories/PHP伪协议/index.html","88ffc9503022913a9c2d0d7d22ad6fdd"],["/categories/Python/index.html","dac2931ce2c0b42bb5fd3cc4764b7f9f"],["/categories/RE/index.html","1ca5c7800d3007222eb6513add5e42df"],["/categories/Web/index.html","f229ee0129fc9442dcc63060e9701472"],["/categories/awd/index.html","6cd422e15992e0660b68bfc74bec95cb"],["/categories/index.html","597b544857bba570967f70a4778968a8"],["/categories/misc/index.html","54e437a82435b8b52cf78c889bb7a6d5"],["/categories/sqlmap/index.html","f854e1338839bf8eb0f7ff336548f36d"],["/categories/博客相关问题类/index.html","c4ec44537341490c29366378202719f3"],["/categories/局域网攻击/index.html","87549594bb1a27768bea33285c53ad90"],["/categories/心得/index.html","a5e716830de56a6353e8ac117b564558"],["/categories/流量分析/index.html","a4b9c4be6dc54e8e9958b9986364f47b"],["/categories/渗透/index.html","fffb63908b82405683847fda0407ebfc"],["/categories/渗透测试/index.html","1044b0ce3d40a25e6dc3d699af08df2e"],["/categories/渗透认知/index.html","4c38de3d8fcd669fc16d040f698fb80d"],["/categories/漏洞复现/index.html","936ebd749ceb9df582472ac46d4e6da2"],["/categories/漏洞测试环境搭建/index.html","9330f4612d042f5485a6ea53f372118e"],["/categories/赛后复盘/index.html","4328e9060b66cb69eb467dbebcfa85ac"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5cd50c47b797c967dcaac57a41b10d4f"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","dde16f7176f2f2fba7832b95d8c25625"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","8d073c7ce2623f9d5571a5a0bf22b46a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","3568707d7e78ca7bc87b23b8fd61f423"],["/page/10/index.html","63a65473d2e46f82fd10ad998cb5fb7e"],["/page/2/index.html","81ee20d38110ec776efc859d21d66c0f"],["/page/3/index.html","eb208b93b171244c298bb45239bbdf15"],["/page/4/index.html","db851e0fdf43428c0b8ea0566d024925"],["/page/5/index.html","7d29f390abd8de35f19eb40d838f0d29"],["/page/6/index.html","0c1d39406a99185dc2f0c029a67ae6f7"],["/page/7/index.html","96c7b2ffeb5fbe4a49bc794d419d3ef0"],["/page/8/index.html","e4648428692597c7f5d8d074b1848696"],["/page/9/index.html","ae7977f1bda240127739963265184bdc"],["/sw-register.js","9d95468aa90ea3c303d49c5a098a9b75"],["/tags/C/index.html","a714226c3e34f80c74ea6e44747d09ad"],["/tags/CTF/index.html","b13e94b4740abe80d7494239041826b0"],["/tags/HTTP头部信息分析/index.html","5872bcede8866d5cd2467cde4c4475f8"],["/tags/PHP伪协议/index.html","9bfae1cedd221ddab69709b8e7cf692b"],["/tags/PHP特性/index.html","8d26859127a5fc46341d117f3de04799"],["/tags/Python/index.html","ba9868d2bc21fcd09cc681d62bc5409c"],["/tags/RCE/index.html","6fe7c2ccf219f3b030b1a2d32015600d"],["/tags/RE/index.html","259ddafacb45a57dd662df6f47998f28"],["/tags/SQL/index.html","f357953ccb5e1ad9d122b4bdc45f8904"],["/tags/Web/index.html","c0fbebbbc8c28bba31d40f73f279a35d"],["/tags/Web工具包/index.html","8fb4b80c4eff58236fd9e3a8c2e381c8"],["/tags/awd/index.html","0911a90482eec50c3fdcc981dfcd2ee7"],["/tags/bugctf/index.html","ca1930526a74e107ae40a56d7313992c"],["/tags/ctfshow/index.html","e6054396c1930b214ded6b92e0d355b1"],["/tags/index.html","2d011f3b13c1854a46cd7e93ff80b535"],["/tags/misc/index.html","64b59e0de3ff8276ae362b1246abbc40"],["/tags/next主题失效/index.html","8e1965afc7d3ecf865beb7dc605d1d48"],["/tags/sqlmap/index.html","f969001fbdbf992ddb9552c9a12730f8"],["/tags/wp/index.html","3939831aedc77cc736aa0fc2466c4cca"],["/tags/xss/index.html","f2f3985e8962388aa01a8b678862f072"],["/tags/xxe/index.html","8c7c0529f502a811ae050b79da5d419a"],["/tags/不蒜子不显示/index.html","c588f6f33fdbbdfb87758c2eaa7e3815"],["/tags/博客/index.html","2f68a5718dd218b768ffcec4a219e608"],["/tags/博客主题优化/index.html","e09b27b883594b4181f274a327c7fba5"],["/tags/博客死循环框架问题/index.html","66a0d3ceaebb85fa10d4fa3fb6e9fa11"],["/tags/博客部分问题解决方法/index.html","61142d27edfdd24dcdb79c335ec33d66"],["/tags/反序列化/index.html","691e705f1f02b9030b572ee651b0dd36"],["/tags/命令执行/index.html","2d2030c8304feb4426708144b2f3a94c"],["/tags/局域网攻击/index.html","3f1daa2ebf74783183beae1cc1c17e3e"],["/tags/常用指令/index.html","d146033c67bc539da94150502d764dec"],["/tags/心得/index.html","2dfdbc9da300a8abea060621ed98765b"],["/tags/文件上传漏洞/index.html","e39ed548ab9e88a5bf56afb674f2cbea"],["/tags/文件包含/index.html","5d3ecfb949822b01e3673544f074c3d1"],["/tags/流量分析/index.html","e200e32de2d65f02a2bc7c01c3ab0b96"],["/tags/渗透/index.html","6bc18e7ddac8116f26809f81e7adbd32"],["/tags/渗透测试/index.html","0b7b360ca796fd07d5ee044014b2796e"],["/tags/漏洞复现/index.html","5d5d5169ba33b91920d2887c934aa75f"],["/tags/留言板/index.html","1aaa6ae2334f67d2caea0915900daebd"],["/tags/赛后复盘/index.html","0ac28c81358ff6255816413d03eaca5f"],["/tags/黑盒测试/index.html","735dc21f3332b2a5bb6cdffb7781d035"]];
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
