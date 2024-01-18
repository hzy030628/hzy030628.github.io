/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","8c3e2cbcaa333b0f28fd5288f1298f1c"],["/2022/01/11/博客制作遇到的问题/index.html","058b69d10acc54f50570fc2e103a50a7"],["/2022/01/15/C/index.html","4a17c876471437c2e10edc668d5b6836"],["/2022/01/18/新版next置换/index.html","50811dffeb2b4472b780f5cdc38d53a4"],["/2022/01/19/不蒜子相关问题/index.html","d5d363bd49ba96031947d98784e1cf10"],["/2022/01/19/框架问题/index.html","2c87993b300630f5f938af9c7d593bf0"],["/2022/01/20/ctf之reverse/index.html","4adf0732b44f144797efedb49c9b975d"],["/2022/01/23/misc隐写题目总结/index.html","4fb6d3542cd5668fe766cfaeb02e314a"],["/2022/02/01/684/index.html","b900400170f5df5079714247a4066904"],["/2022/02/03/留言板/index.html","b4a07cc96e6ea51ef19a8914c80bb67f"],["/2022/02/04/SQL简单注入/index.html","7e4a351b56e867e266f66cadd2176556"],["/2022/02/05/最全的HTTP头部信息分析/index.html","e2d58041f007701464ef24f7a16b8332"],["/2022/02/08/ctfshow文件上传/index.html","cdfe9a456e77d2d5f10b0c6ce97c69b2"],["/2022/02/08/常见密码类型/index.html","a416431aff6aead4090b591d1924513a"],["/2022/02/12/VNCTF2022WP/index.html","9918308a7329e3d5cc0a85aa71f56ca7"],["/2022/02/20/ctfshowPHP特性/index.html","a78f6ceb56bf2d328392fb32288717ed"],["/2022/02/25/php伪协议/index.html","e3e444b30fe67fb6a0f527752a15d386"],["/2022/02/26/ctfshow文件包含78-117/index.html","0659a78029256f38c78dd29f9e847f23"],["/2022/03/02/Clash漏洞/index.html","f77ee767fcafa57433cf53c0e48ed74f"],["/2022/03/11/流量分析之题型解析/index.html","91a38a5b5525801dc673cda878f5261c"],["/2022/03/15/ctfshow命令执行/index.html","c2acc81c829e6956964f207a53bf8c4d"],["/2022/03/22/CGCTF/index.html","1071d62addd92c73753a27fd93325861"],["/2022/03/24/ctfshowxss/index.html","03a199ecc1e32398681ca7fcf2039e03"],["/2022/04/04/黑盒测试/index.html","625d314cdfa8bef7868cbe1b8a599d36"],["/2022/04/11/nmap/index.html","1275b5ea0cc34eb148612ceb1692ab16"],["/2022/04/12/渗透流程简要记录/index.html","ea0e7542d9c7769e3d7e198cfc5adc42"],["/2022/04/12/渗透测试之攻破登录页面/index.html","ae5bc0146a5fe6ab82fc5b3aaf2d22bc"],["/2022/04/14/xray扫描器/index.html","117c4d8433b3ec5071ec95805eef342f"],["/2022/04/15/ctfshow反序列化/index.html","1944b804bc55d72323d31dde8debedb7"],["/2022/04/26/渗透测试实战/index.html","8636b12ad46327c1818e001c1beb5208"],["/2022/04/28/sqlmap教程/index.html","47f057144d51c4d29145b892c3c624a0"],["/2022/04/30/认知文件上传/index.html","6de1426281d7b3a3cd8fce1f27f2c349"],["/2022/05/03/nahamcon/index.html","2c4df6107da57eb64129578edbcaa6cf"],["/2022/05/15/awd/index.html","9003f477926dc150ea678c80ff127ec9"],["/2022/05/22/DASCTF/index.html","03a980a12331b6b7a2a969f9a9288780"],["/2022/05/27/520/index.html","7ef3e8b45feee6dcdd15e92185335f33"],["/2022/05/27/ISCC2022/index.html","3f35c9fa297b2fb1fb8991e08f9756b5"],["/2022/06/01/第五届世界智能大会/index.html","6dd9267cf6015ae2f652a072ace63ca4"],["/2022/06/04/SEETF/index.html","a9ac3b407095048349b542ba8bb8af03"],["/2022/06/04/bcactf/index.html","41055a299cc373d52477e3668d47e797"],["/2022/06/05/BSidesSF CTF/index.html","53bec9c8fa4b2af64921df98d07594c0"],["/2022/06/07/Docker部署web题目/index.html","8664e55247c06a96d7e24705d574697a"],["/2022/06/09/利用oj搭建C语言考核/index.html","a5220c08cddc2d22b75b363d666f860f"],["/2022/06/13/限免题目/index.html","3a45bcf46666519eaf29eb82bb1dffc5"],["/2022/06/14/钉钉rce/index.html","8a37533ae6e660ed0e41621f748ad29b"],["/2022/06/16/内部ctf/index.html","4c62415e8cf2550911661a19ce909573"],["/2022/06/25/攻防世界高手区(一)/index.html","08740de4436ee5e10f43306f15ec9408"],["/2022/07/01/两小时AK赛/index.html","9d4ba72d1c77983d5e91da8628322321"],["/2022/07/03/鹏城杯/index.html","6b5825e988e284cb47154ca6723b6838"],["/2022/07/04/XXE/index.html","96792eac36f0fcd19fe7615066b98952"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e6c47d0c023aa1142ef0dd67ccc8effc"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","bcc2a616bf8cf591406cafc8f466ad6c"],["/2022/07/08/chinaz/index.html","1fd710bcc22626822cfdb903e9d763a9"],["/2022/07/09/蓝帽杯初赛wp/index.html","12bfc6d771f9d2716b4733cb57287e87"],["/2022/07/17/NepCTF/index.html","8bea218c4dfe211695bafa0233a53a48"],["/2022/07/19/2022ImaginaryCTF/index.html","25cf47ce96ca15a7912962694854e57f"],["/2022/07/20/局域网攻击/index.html","1fef0059e4f65b9d5d6cd3d95d9fb728"],["/2022/07/22/2022BDSecCTF/index.html","ad3d0f4761c631754c2a4dca066cbbf7"],["/2022/07/25/DiceCTF @ Hope/index.html","4171304e86dbaa4bf1acea53fb8bd083"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","4e899d44e17838e126b09ab2da6fca47"],["/2022/07/31/TFCCTF/index.html","eeb8382045181929eafb308769812ac6"],["/2022/08/03/NSSCTF/index.html","6697055cb6dfbc228d4fccbc26cadb96"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","da7526552e29527770e48e3584ce74e2"],["/2022/08/12/T3N4CI0US CTF/index.html","d37dc97d2d37880c0516115b9714258f"],["/2022/08/14/SHELLCTF 2022/index.html","d7cfcab4bb6152da9fe7fc0418a0d0b5"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","66381472695fe42317ff099232fff793"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","3be814f923b20068f8444f47dbc5a406"],["/2022/09/16/柏鹭杯/index.html","9269751bb66f61a9b336f549ff89471b"],["/2022/09/20/HUBUCTF 新生赛/index.html","acc826a9e373a5337bbda0c1cd96a9c4"],["/2022/09/27/NewStarCTF/index.html","552b73db42beec7a71255b743d70d0b6"],["/2022/09/27/bugku渗透1/index.html","bf1f99ab5ed225b445d29171eb33fce7"],["/2022/09/29/tp6漏洞/index.html","e91fbdb2bef821f382d410aa4614f429"],["/2022/10/02/SWPU NSS新生赛/index.html","ca4f02dd31d830f8aeb6ac6e917fdf6a"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","eeb0ff99d54aa94531a0ff92d668f57f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","ad0f40ce4bf2223c08e8896f34a4711c"],["/2022/11/02/HNCTF/index.html","68ea9446ddd6f23df96b2ac76ddfaca5"],["/2022/11/04/2022工控CTF/index.html","8234cdcf110039ca51dabc004c794950"],["/2022/11/21/极客大挑战2022/index.html","ff98533a8da522e118bca871a3713582"],["/2022/12/05/TUCTF 2022/index.html","cabb613d0bea06cd58bfc398e42fba5a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","014b6ebe14f27b54d3603dccc1343d1c"],["/2022/12/18/金盾2022/index.html","36c01a11fb104563eb95a1b268191d65"],["/2023/01/01/CATCTF/index.html","7832e08c43e16612c4d1a402101c5c86"],["/2023/01/09/RW体验赛/index.html","1e01747ce39027f6b2a610ebbcc483c2"],["/2023/01/10/铁三/index.html","5336871770263791d08fbbae430db720"],["/2023/01/16/Ugra CTF Quals 2023/index.html","ef911d6f95b1c7844989052628a67737"],["/2023/01/18/山石2022冬令营/index.html","be7f49bafeecbf026b57a906e9b5d620"],["/2023/01/19/SICTF/index.html","c71d0b079363cc50eae6c28acf95b942"],["/2023/02/04/2023西湖论剑/index.html","55308c13315ae50127fe3ebe1bae3e9b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","309749a98db626493b8547853c94cee8"],["/2023/03/04/公安/index.html","12fa9e0678e7957b92b4c615f35d3d05"],["/2023/03/07/mysql之udf提权/index.html","1b5338ebde6c6a8e69bd161c8d7628b1"],["/2023/03/07/红日靶场练习/index.html","f4b47dce31d6672852dc33700f2e15ba"],["/2023/03/27/NKCTF/index.html","1af5bc5926e7f607d1208e5b65cc5afc"],["/2023/03/31/楚慧杯/index.html","b8d37eb93ca6ecbd17d093dcc2f1162d"],["/2023/04/23/HDCTF2023/index.html","d0d062f93f9f0d92b4fed2dafe3cfd3d"],["/2023/06/01/2023CISCN初赛/index.html","f632c45384eb70736b3502a43acd228a"],["/2023/06/28/2023CISCN[华中决赛]/index.html","a84d9180478b740fcb0409b0871e875d"],["/2023/07/10/CyberSecurityRumble Quals/index.html","3d4ac42a6375ecd0833eebd571372dd9"],["/2023/07/22/2023BDSecCTF/index.html","8c5c865a21d8783c10d08b3d1629cf4c"],["/2023/08/07/SQL手注小记/index.html","6bc5381912e00400b6d1e6edd84cda04"],["/2023/08/27/2023陇剑杯/index.html","bb9021d59d10b81450c751943c7f89b3"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f33e550de34ae51aafb05ac3df40ae95"],["/2023/10/23/对于多层代理的研究/index.html","b66ebc7859e3476e90def9f83a58ea72"],["/2023/11/25/金盾2023/index.html","9e000388dae149876cfb8e93a47e96ca"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","adbd4e7880dd9a79fb2887fd83a2eb95"],["/2023/12/18/2023强网杯线上赛/index.html","f355f500f9327c1f906df7ccc79d814c"],["/2024/01/08/基础ROP/index.html","cb26f4fd8a07bd999b93773988e88ba7"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","e4d5e9f1569adde39d24be882ca25ae5"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","f4c7f89f74f48e7a3869b0f07769c5b6"],["/about/index.html","e5dd1a0f0afe0480c1c1fc55a7986e06"],["/archives/2022/01/index.html","31c1ae7ff0f0efc27ece5bd1380eb86a"],["/archives/2022/02/index.html","cd6daf917244cfff0f4dfef7d05501a1"],["/archives/2022/03/index.html","653ba1304b1b7c70af438005b9306601"],["/archives/2022/04/index.html","bfe281ffcf6ae1539bececdb2f5637b4"],["/archives/2022/05/index.html","47aff6e6908424e83455dee93760beee"],["/archives/2022/06/index.html","e5d984a7f0f0e5f10aab3ad43d2df46b"],["/archives/2022/07/index.html","5e078f9189a284d40c429c8c1e31c837"],["/archives/2022/08/index.html","c4f730863d288cd04c3935351711e53d"],["/archives/2022/09/index.html","1454b7c5b3ed1258ccf577c4c58de657"],["/archives/2022/10/index.html","8bbf7d9dd09ce613b262e0dc41322335"],["/archives/2022/11/index.html","64a6134a8a7246bc44ff78513b40f412"],["/archives/2022/12/index.html","8bb2a37217bd1ac1ca21378b2dc53813"],["/archives/2022/index.html","b562121eed82bc7da59ae246e3d1ca94"],["/archives/2023/01/index.html","b01f18ebd6f0797778c6ba8135c2574e"],["/archives/2023/02/index.html","a7181a31de11144e2a856082c7fae0fc"],["/archives/2023/03/index.html","0b7971df094df0b853dd4916ab848aa1"],["/archives/2023/04/index.html","a9129c508b599f8121257ba750f6fdb0"],["/archives/2023/06/index.html","7d8784d1f3a5a6abdad04c309a254074"],["/archives/2023/07/index.html","1ea85bb40bacf4c424de3d7944a0c6a3"],["/archives/2023/08/index.html","5824e606d89545cefb868a68e73625cf"],["/archives/2023/09/index.html","8cf3c89ce929df2d4b5870f1e3c8c770"],["/archives/2023/10/index.html","99875d58699ebd9de9f82c9a845ede60"],["/archives/2023/11/index.html","252e9803b3270efa58aa1b4b04a1f070"],["/archives/2023/12/index.html","f37801f73120be199b1d0368555bd002"],["/archives/2023/index.html","cbf6eb53c499cf1deaf2d560469fc6bf"],["/archives/2024/01/index.html","6291ec72093e567fc7ec05d41f3ae698"],["/archives/2024/index.html","f8d73ec981aa99102c69a56c1a60f34e"],["/archives/index.html","4c392ef6eaf5ffc8fdca50731e8d009f"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","7051aa0cf4dc294d9ce76e7f1331eca0"],["/categories/CTF/index.html","6a7488243716e20f4f9710434e035c0e"],["/categories/PHP伪协议/index.html","8e10bcca68ca91e1e13d656c0e31cfac"],["/categories/PWN/index.html","1a34c9771840ba7df30d47b1d4c0cb12"],["/categories/RE/index.html","6e3577deb6f9fa30b0d0979e11e1bab1"],["/categories/Web/index.html","c747beae1881e359aae75c152853f762"],["/categories/awd/index.html","91453b3107bf3b4fcee6f5a33745da37"],["/categories/index.html","52ed44cc7de4626878af4d65c5ff8ee9"],["/categories/misc/index.html","baed00a4baac685709d8612c26ee1b0a"],["/categories/sqlmap/index.html","39634254c92b140d65aabad17d512b34"],["/categories/博客相关问题类/index.html","987898fa7886bd34a1df78c74c4e1864"],["/categories/局域网攻击/index.html","2feec4787d5691c0725d7f944e2ed63b"],["/categories/心得/index.html","77283ed72d8a89c6806c3c027058647d"],["/categories/流量分析/index.html","4c3964647375b96ebd3937318f935a5b"],["/categories/渗透/index.html","026ebfd04b1aae3bdf6b10db0ada399a"],["/categories/渗透测试/index.html","e3f65225f85e72eb3b7fe32b70b89c12"],["/categories/渗透认知/index.html","c5b3f522ae42ff74cbefba839ce56d21"],["/categories/漏洞复现/index.html","e17aa623a1f8f69d50a28552227b12b8"],["/categories/漏洞测试环境搭建/index.html","be5b6bd4727abda5b6fb482b563224e7"],["/categories/赛后复盘/index.html","5bbb4cd24866acf8dfed5e8b44ecafc5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","6ec1de6bb7ec47b608e489e8a7170d11"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","cb3b71c09fcf64d8b4753b98bf486cd4"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","03e9263079730a61150f020b8d4b1d28"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","901a1ff1d9757953bb13df8e878f4796"],["/page/10/index.html","4c094f02978efaad117816537913fbb5"],["/page/11/index.html","7951a2b367dc9a20e1b2a96af7606167"],["/page/2/index.html","5130ae54bdf368798209251e59d4847e"],["/page/3/index.html","3b1bc6c3bbf9875ab32e12b703f3d653"],["/page/4/index.html","ad223bab6292d0cb1658586b800ef21e"],["/page/5/index.html","5989c9bbd2f22cc5dd07de49df514d68"],["/page/6/index.html","d720b855c3da7851916b260eecf15699"],["/page/7/index.html","dc9863123ade24c145e0f514bed7862f"],["/page/8/index.html","0ea0786ffb8b3d981c9d7ad3c7739626"],["/page/9/index.html","9a9c0f3ea447ac68deb05d616204b55a"],["/sw-register.js","4dd329ebe70b0692b0010b17cfb0abc1"],["/tags/C/index.html","528b960dcdd320e539a182ef42ead95b"],["/tags/CTF/index.html","c38b0be299b4a853e592b09c16f3b2d4"],["/tags/HTTP头部信息分析/index.html","58e6a2cd4ebe7c3a4e3b77b088656784"],["/tags/PHP伪协议/index.html","6a62f781b4da888408a12157cd448502"],["/tags/PHP特性/index.html","40cf8db7e13c42c3bf0dbbe809342250"],["/tags/PWN/index.html","15859d0cd9c52a086e8bdca546266833"],["/tags/RE/index.html","617bbff86196a745b162638c962af97e"],["/tags/SQL/index.html","f2d2829ac57a9e62b23392e4bf4e2ef9"],["/tags/Web/index.html","a2eaf2e082b94ad434c12b8692a7472c"],["/tags/Web工具包/index.html","339ba32160a346ecdad5476134e27db8"],["/tags/awd/index.html","df56155f3380625ad3294d99f009f81b"],["/tags/ctfshow/index.html","c6afc022731683cded5f56613a12f183"],["/tags/index.html","4669074cb5224f238b2308651d2eebd2"],["/tags/misc/index.html","d378a98d70b7945c9fa84443703a2036"],["/tags/next主题失效/index.html","08a92b9f751799e7a60baf5283292f78"],["/tags/sqlmap/index.html","70c54ffc37a41f1d7d8ac956de9a6670"],["/tags/wp/index.html","3436161d94af7532fc915c063dcbb077"],["/tags/xss/index.html","859a6b27fd78bf1e725ef8b2d0370326"],["/tags/xxe/index.html","2b1c6ec92683c925de2c0719d91fea10"],["/tags/不蒜子不显示/index.html","40cba50d8aeef4ed3ed52432f46b8dc2"],["/tags/博客/index.html","ca3c4c15a16a5addace88f7cad9c5597"],["/tags/博客主题优化/index.html","ac3b2f7e6935af19ed58e6a4dad772cf"],["/tags/博客死循环框架问题/index.html","83bcd8ee8f3756f5db1f8e754ea7eb1a"],["/tags/博客部分问题解决方法/index.html","9fd8d08b191612aebe8b8b93bc1fc03f"],["/tags/反序列化/index.html","ed8f356aca1e444e1c23267a429eedfa"],["/tags/命令执行/index.html","9ff740ebf0f7effeec05e80f62845be5"],["/tags/局域网攻击/index.html","788a48e98b1910a56a1770f06c61439a"],["/tags/常用指令/index.html","01da126fe8fcc821f70334f163e83912"],["/tags/心得/index.html","887abe58385df4928acddc8827dd4d8f"],["/tags/文件上传漏洞/index.html","69f33c5874f9cdad76fb674f2a7c0359"],["/tags/文件包含/index.html","bcf641c54794a69797833af532761f55"],["/tags/流量分析/index.html","8feb21aefd65b782aea4addc6a273ba1"],["/tags/渗透/index.html","28280a42ac0eb26654192104384cf38d"],["/tags/渗透测试/index.html","c5391f8dc96d6bc0f3cf0a61c252a113"],["/tags/漏洞复现/index.html","a97cd34d2dc9b7fc7a31b2c60af467a1"],["/tags/留言板/index.html","adaf03748a439e3c8b4714a79a63eb15"],["/tags/赛后复盘/index.html","d42b8001f18c9e3d52a80dd79ddc8bfb"],["/tags/黑盒测试/index.html","3544696a002d59150cccec25468d8dbf"]];
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
