/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","91952a01d91f2166781a4d9540f144fc"],["/2022/01/02/Python程序运行常见错误总结/index.html","c20037a443bf4cfa4261779177e71d17"],["/2022/01/08/ctf之web/index.html","e674ded5a67f7cd7dd05ae1c75d1340e"],["/2022/01/11/博客制作遇到的问题/index.html","ac76ea72ff96c1ae722f491269f93e65"],["/2022/01/15/C/index.html","9c7490dc9ed684a9884b22ce465a9ea3"],["/2022/01/18/新版next置换/index.html","eb6e7a613fee444785cb2a5c3dfc9ec4"],["/2022/01/19/不蒜子相关问题/index.html","bbe2cb78852011602bbaefe1fe7edfa4"],["/2022/01/19/框架问题/index.html","45c6f0614f0e55ea5b0ad11f9c6dc266"],["/2022/01/20/ctf之reverse/index.html","87066b6c835f75682acc43a80284426b"],["/2022/01/23/misc部分解题软件命令记录/index.html","fecaeb332bc072597a3e2bbee981d0bf"],["/2022/02/01/684/index.html","c4e1dd163aac9972152119fbde58d2df"],["/2022/02/03/留言板/index.html","1226cf6997ea2d0ece0e3726c83b46f5"],["/2022/02/04/SQL简单注入/index.html","d5c3c6b44f9b1d896449f93f4a8b2769"],["/2022/02/05/最全的HTTP头部信息分析/index.html","0e2b74aecb8cb8cae3631be0bf253429"],["/2022/02/08/ctfshow文件上传/index.html","fab47532e6f322415bd0bbeb85ac7f07"],["/2022/02/08/常见密码类型/index.html","7526e72b7564782a85b4d19899fe5768"],["/2022/02/12/VNCTF2022WP/index.html","6df5dcc102f2adc7068665583da6538b"],["/2022/02/16/rce/index.html","4b7ce62a673e794282112355c6916f29"],["/2022/02/20/ctfshowPHP特性/index.html","5b7c7236095604da44fd823433245c8e"],["/2022/02/25/php伪协议/index.html","4488591fbbf7f47694fd20ae6dc59cdf"],["/2022/02/26/ctfshow文件包含78-117/index.html","63425f9bfb96d6eccc958274e4135231"],["/2022/03/02/Clash漏洞/index.html","b4b02a7d4a533c7287d7cd0565d36b4f"],["/2022/03/11/流量分析之题型解析/index.html","6a7a05d308b84d574dc10917b5e63f06"],["/2022/03/15/ctfshow命令执行/index.html","3b0030300f024f6bb2bdcd0b19f8495e"],["/2022/03/22/CGCTF/index.html","5e3dc939f7794cab61d371e660b9571c"],["/2022/03/24/ctfshowxss/index.html","f178507b1f332534fe0fa337083300f8"],["/2022/04/04/黑盒测试/index.html","022eb8dfdabdadcefdc53ea07a136082"],["/2022/04/11/nmap/index.html","76f65f3e7a1325811e2268b86579af0c"],["/2022/04/12/渗透流程简要记录/index.html","1af6df03c703430c62c8c242b8b76174"],["/2022/04/12/渗透测试之攻破登录页面/index.html","556660915fbfd4c7ceb4ccb075afc1e6"],["/2022/04/14/xray扫描器/index.html","57b0b9897ab17dc9368b5275dae43ad6"],["/2022/04/15/ctfshow反序列化/index.html","58fdb2e8f2ebc6c4c06d7045f3d2ddda"],["/2022/04/26/渗透测试实战/index.html","e6cac60ffcb2ce8ef89905ddf0a586b8"],["/2022/04/26/网刃杯/index.html","eb09d9d8d5a3ef930d900e22c8177a43"],["/2022/04/28/sqlmap教程/index.html","a2298c2bc14d41a38ff5510d53be2b7d"],["/2022/04/30/认知文件上传/index.html","9e68c5584316b55b54866e380f6cacc8"],["/2022/05/03/nahamcon/index.html","385371f17ec3562446946e3686e3e393"],["/2022/05/15/awd/index.html","8b4029e12d32ea1c82832f04c888c212"],["/2022/05/22/DASCTF/index.html","6a85a3c39df7fd6a578b3dbb4c738f7b"],["/2022/05/27/520/index.html","2cd6bd0fbdc89f512896495a1f0ad33f"],["/2022/05/27/ISCC2022/index.html","9b87bc94bd8e41d4530a0f8630b3f893"],["/2022/06/01/第五届世界智能大会/index.html","de0a5783697210b70acc484bed7b36f2"],["/2022/06/04/SEETF/index.html","f57e7e08c7771c6c4e6eefdadeed38d8"],["/2022/06/04/bcactf/index.html","38f19f6b9a2d0466923de366c79e9cac"],["/2022/06/05/BSidesSF CTF/index.html","2989fec1c278968a0cd778ad0f3c5054"],["/2022/06/07/Docker部署web题目/index.html","7f2526173c79a8169ed48a17a5caf6bf"],["/2022/06/09/利用oj搭建C语言考核/index.html","62c5f107ed9437eb0c26396b7226b432"],["/2022/06/09/论网站502/index.html","6dbdad39e11238bb06973581d2bb8d48"],["/2022/06/13/限免题目/index.html","7db2d3b630703cfc8ef1d4a4074b1798"],["/2022/06/14/钉钉rce/index.html","ecd3007f19309feed93b1136bed62cf7"],["/2022/06/16/内部ctf/index.html","d1bdd798e10c994f2c363ba7a2592cc3"],["/2022/06/25/攻防世界高手区(一)/index.html","5b0a5d5a09aadeafd7d711b9e18709ea"],["/2022/07/01/两小时AK赛/index.html","d0e91f203976f47a49d2f8f4b5747135"],["/2022/07/03/鹏城杯/index.html","739d4fb25e9d70e809a974963fbf3e21"],["/2022/07/04/XXE/index.html","95ea80dd4268e534e81029314bc631f5"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1040df46291bca15f272081e2d250362"],["/2022/07/08/chinaz/index.html","9d41ab70037e462f1eb07051010e5af6"],["/2022/07/09/蓝帽杯初赛wp/index.html","0b5e0ef2a350aeaa0da94b35997332e5"],["/2022/07/17/NepCTF/index.html","ec9b90ca76950fe51c56edc35f0c6c8d"],["/2022/07/19/ImaginaryCTF/index.html","2fd82566b145713a67a6825ed90e2cf7"],["/2022/07/20/局域网攻击/index.html","3fbcb692a7fd949ddb2e28dfb24318dd"],["/2022/07/22/BDSecCTF/index.html","bba1aa8c503a1e8de60290e30a3eb5d7"],["/2022/07/25/DiceCTF @ Hope/index.html","97fceda1c69efb620ca3362072b420fc"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","f6e1d57f1420987c11dd2cc01499da4e"],["/2022/07/31/TFCCTF/index.html","ae5a84f9952eb5cce9c630036162574e"],["/2022/08/03/NSSCTF/index.html","180f7b0d924d848c10c94f9000b06aa1"],["/2022/08/12/T3N4CI0US CTF/index.html","36dfb4a55ed65cce64fbfecec6efa6ee"],["/2022/08/14/SHELLCTF 2022/index.html","9aa7e4e28094b49b38be7716dd05b980"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","d4abfbf5ddcc23e73181b501ecc1c26b"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","e4b7f7b747b387255fd74c29340b9fdb"],["/2022/09/16/柏鹭杯/index.html","12abe479ecc310144b172fc429637846"],["/2022/09/20/HUBUCTF 新生赛/index.html","c80a01241a9330b121779c8f268d55ce"],["/2022/09/27/NewStarCTF/index.html","bccf56eb410ccac58754b70c58c51bb3"],["/2022/09/27/bugku渗透1/index.html","4296c2f5ea734a42802d48778921b0e9"],["/2022/09/29/tp6漏洞/index.html","2c6d54bbc31982b9342a4b3286b96ee9"],["/2022/10/02/SWPU NSS新生赛/index.html","d7fcba292df1b6fb48509eeb06ca97c5"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","904031f530a7e9345520f9a178c66b8d"],["/2022/10/27/Moectf西电CTF新生赛/index.html","69ac926700a3999bd5ceb56dc28e5d73"],["/2022/11/02/HNCTF/index.html","c5c81b2ff994a4562c7437d5c5d4c909"],["/2022/11/04/2022工控CTF/index.html","1eaa4f96d2cbf17058351c2774394fa6"],["/2022/11/21/极客大挑战2022/index.html","d982e81f94aad1bf194d6a89ce45a10c"],["/2022/12/05/TUCTF 2022/index.html","70f9b266a4e006d8b1aededaf9eedc81"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","f72f1e496d4f0cb89b584ff4e745b0ee"],["/2022/12/18/金盾2022/index.html","1ea8ed0bf23c6725d4d0b53ab07f5ed1"],["/2023/01/01/CATCTF/index.html","eea5a4f2db4b73775d08cd8e66afbdb8"],["/2023/01/09/RW体验赛/index.html","7b4d9ff270063d489a7ee31d4aa2e2a4"],["/2023/01/10/铁三/index.html","00612f3a51966f6396531aecc0b5a75d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","c5350e12e792f311b165d9b39dc1c290"],["/2023/01/18/山石2022冬令营/index.html","908997f45221a03f5031cd1fb5726acd"],["/2023/01/19/SICTF/index.html","8592facf2840dafcc47ea7e641c0e0e2"],["/2023/02/04/2023西湖论剑/index.html","9501f9957d7fa7725ea57abb9c1385e8"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","058a46b494c60c6229ec1d5c77e7bc0a"],["/2023/03/04/公安/index.html","7f6520dceb5a190b7b84eca227b9a3e0"],["/2023/03/07/mysql之udf提权/index.html","62881cb279a6e1845fbdbe2b8f317a3a"],["/2023/03/07/红日靶场练习/index.html","01ed89e257f5a0362fdb577eb19953f5"],["/2023/03/27/NKCTF/index.html","d322a64f86982f38ad052567596265c1"],["/2023/03/31/楚慧杯/index.html","911508e0381950db45b31061b8d39fa9"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","129031c3c1497ccbecec060e976d4824"],["/about/index.html","4d08f07a5041dc7bf7da9bc8cf803de9"],["/archives/2021/12/index.html","1513a057b4688290dd026a42d21769c7"],["/archives/2021/index.html","3a937317cdbac3b03e3425a4e6c85efb"],["/archives/2022/01/index.html","892cb4beaaca54be8d6e7948fa4ed4c2"],["/archives/2022/02/index.html","771a93ebb3a42500ac669de0ecb25e83"],["/archives/2022/03/index.html","99ebc61dabdbd4642dbf8c4671e2500d"],["/archives/2022/04/index.html","365ea774c5a92a0872bb4b223870c760"],["/archives/2022/05/index.html","167f9720074839a5f74e1337430d9bfa"],["/archives/2022/06/index.html","fa818d74755e8bab829b61f035dc199a"],["/archives/2022/07/index.html","61b5cae3a2c790fb516e048e85feb589"],["/archives/2022/08/index.html","e9c9bae7c5c21bc20a7dac18ee0ac333"],["/archives/2022/09/index.html","1fc836da133998e2398db86319af58a3"],["/archives/2022/10/index.html","564dc8be205a250c45ed843ced491efa"],["/archives/2022/11/index.html","2453d7834b522078ed95034e4931936f"],["/archives/2022/12/index.html","80e0cff6f4fa7e1e336dd97a33b851c0"],["/archives/2022/index.html","3e0577c67d781843f4ea3c6c354c2594"],["/archives/2023/01/index.html","93483d3f0f9060904f60bcefadb6c80d"],["/archives/2023/02/index.html","343ff49a32e0d78e8352397ca6a3abbc"],["/archives/2023/03/index.html","8d5ec82180ed0c6bd3dee4bf6b69fd30"],["/archives/2023/index.html","525491895b4b4f76bda58e1c7ed2b687"],["/archives/index.html","f5b95c53688725c031fd3c5c12ec7e45"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","691a41e26c62a5ea81b54bc0ecddd9ba"],["/categories/CTF/index.html","0a3929c8d89525fb781852a52b0744d8"],["/categories/PHP伪协议/index.html","81fae5832adda9c1542610662584b2f7"],["/categories/Python/index.html","927cc2be7c89023f1210a6b61b70dd06"],["/categories/RE/index.html","a993464a1df00877810fe2b335b51f28"],["/categories/Web/index.html","383de4ac2e0f736bea940cd957631deb"],["/categories/awd/index.html","a21810724225b5bb67e385bf9f5d1f4d"],["/categories/index.html","f8a4e5a292ba3a225687b520829573d6"],["/categories/misc/index.html","192159784fe56b6e266151000b7ff40d"],["/categories/sqlmap/index.html","44c245d694470affe7d5d8ced696a44a"],["/categories/博客相关问题类/index.html","8af018c34fdd0f1be48278c2a91215bf"],["/categories/局域网攻击/index.html","5a9520d5a42fd693e0693f943379aa60"],["/categories/心得/index.html","0790255d27be60be16ab1020f036244c"],["/categories/流量分析/index.html","d8709c3ee39f883640c596f0a23b25d3"],["/categories/渗透/index.html","6103f277c8c350ac3f89a978490756c3"],["/categories/渗透测试/index.html","2f398480e100848d99cc4339faadcdb6"],["/categories/渗透认知/index.html","d6e36002c95505bc84d4925bc2a9f5ea"],["/categories/漏洞复现/index.html","e03e59f5e7d3afdd5a1d8d3a9c9ce130"],["/categories/漏洞测试环境搭建/index.html","16ab53a827f8a01f430e7796b56b201e"],["/categories/赛后复盘/index.html","2bc0c5c6b6c96afa82cd4bc54d93db71"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1c54ebf0bacc9a99dafc0bc8d2516ca4"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","2881f80ffa8de7d1e62328e5de6cb023"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","46c9f179d6c4297c78164ab43f03d89f"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","9e7519e2c5c275022434d76529ac0a03"],["/page/10/index.html","d53e703f9ce0f2f2a54b4a87b7ac163e"],["/page/2/index.html","60c6d2a478a85f384d8eb269499dba7e"],["/page/3/index.html","b125804d07841f1dff468b164122b950"],["/page/4/index.html","3c64dd3db19b3418e4d6df5ef25bda32"],["/page/5/index.html","479d35906b2e335a692906d94712f443"],["/page/6/index.html","5d0de0013f165d3850ca5b9553b31a5d"],["/page/7/index.html","f602ce65c76eb170021fb16b615d785e"],["/page/8/index.html","0782f0a8b8d165609ec552b61ce7b78f"],["/page/9/index.html","e2475ec5a7087d8debfce414aff43ab5"],["/sw-register.js","7d06a5138b82480dae800a24b859bd39"],["/tags/C/index.html","1d8b88e2baac6d892d17a359045ef9d7"],["/tags/CTF/index.html","3a9e04baf5f0ca082372465a3c65e653"],["/tags/HTTP头部信息分析/index.html","a2e1aab5c8fd28073e21e6c098d3de0d"],["/tags/PHP伪协议/index.html","a4b13057e446f66ef400a1ffe976abf8"],["/tags/PHP特性/index.html","5b487a84699a66ad2ded93605f731dab"],["/tags/Python/index.html","46723170ae04216203560e2fcd507f1e"],["/tags/RCE/index.html","142ea12673278de8b0e9bd1eb70086b5"],["/tags/RE/index.html","4b57171b20c8742d0d8a8134b88b35ea"],["/tags/SQL/index.html","60b98dbab427af17545fc5200a3beef8"],["/tags/Web/index.html","03a80fbe6aed89edcda15b568c82fea4"],["/tags/Web工具包/index.html","bae7c2e257666b2bc7b72c09f921b165"],["/tags/awd/index.html","224e931c215e92baee1e3a4a0a7488b7"],["/tags/bugctf/index.html","355cb92b8c17d1c3ec93effb6069cae6"],["/tags/ctfshow/index.html","14f4ca5d69f9da325f5ab9f6f85826f4"],["/tags/index.html","1d616559b415c38b13dc57b460983e6d"],["/tags/misc/index.html","9caec3f253d6e708f1d11fa6a0a3cc8e"],["/tags/next主题失效/index.html","72cad976eee9dda72cda0b1d55960368"],["/tags/sqlmap/index.html","bc28e36900a71d7937ffb26aaba7e065"],["/tags/wp/index.html","5b8e9ab8cff02a99fe4bb5fd36b6fe57"],["/tags/xss/index.html","97fd68857905e07b3d00094b6efae561"],["/tags/xxe/index.html","61668d05948d125e9044f7f3a591c5d5"],["/tags/不蒜子不显示/index.html","669c3b0019e7f21dbb666d472ea18d39"],["/tags/博客/index.html","9fa2e7d615c4106a2c23a87986d8caad"],["/tags/博客主题优化/index.html","fc86ba89c9931942f1bcf497ee81fe82"],["/tags/博客死循环框架问题/index.html","c3f6cbeb054257ea06dbbc8d628cc6c8"],["/tags/博客部分问题解决方法/index.html","cbc540b35f2a827306cff38ec7054471"],["/tags/反序列化/index.html","a3bf36e72805a37d1158121308585556"],["/tags/命令执行/index.html","90530853b37dc5238d245e96e5e15369"],["/tags/局域网攻击/index.html","10aa61d68e22dd82365f81018d3a4e4d"],["/tags/常用指令/index.html","02a0d4b73448a3463b772eeacc9b2520"],["/tags/心得/index.html","9107ed052b1fc513326d805add9f7cf7"],["/tags/文件上传漏洞/index.html","60c49c6721268aa656832f1e256c8f78"],["/tags/文件包含/index.html","d31f669770af2fbf7a1869001b803208"],["/tags/流量分析/index.html","8aae1bfd756a29e1b4c7b7b433207072"],["/tags/渗透/index.html","3e5fef9b8aacbf3d60135ad00f7102a2"],["/tags/渗透测试/index.html","bb6aeaea57f3f62ab41613e588b4e708"],["/tags/漏洞复现/index.html","adacfc524bcbe616ebb9986e08a29bc2"],["/tags/留言板/index.html","b6f20b7c1eb644752f00b9d08c378fe9"],["/tags/赛后复盘/index.html","555bce6a5991de75e8dbaa3774c4b201"],["/tags/黑盒测试/index.html","6d3d3b0207e6a19e285b0132951643a3"]];
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
