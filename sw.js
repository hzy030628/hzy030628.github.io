/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/index.html","0af3ac2c702388fd0886fb6f9e2405f2"],["/2022/01/01/ctf之reverse/index.html","7c2a2f97c51dbb26b8a7eb0e06ed90b2"],["/2022/01/02/Python程序运行常见错误总结/index.html","5a7be68c355a29ea360a68f94a16d286"],["/2022/01/08/ctf之web/index.html","97af7d54060ce3972869dcb0be27de16"],["/2022/01/11/Web刷题/index.html","f1692ad5474dd84d40d1fd75eeebd75e"],["/2022/01/11/reverse刷题/index.html","9794aed92d485e00e706a6a7c1a79a5f"],["/2022/01/11/博客制作遇到的问题/index.html","0fc593805ab88c9fb7be81ba4c9ced22"],["/2022/01/15/C/index.html","3ab7885ac9046e517cda0a185fe205e2"],["/2022/01/18/valine/index.html","347316bd8a5fea4bd886323c847f5dce"],["/2022/01/18/新版next置换/index.html","284e998c213b35fdf8f84a90bb4745ab"],["/2022/01/19/不蒜子相关问题/index.html","e903c60f696085425882c3b40a008217"],["/2022/01/19/框架问题/index.html","e33229469b7f413d7625ee07c980f687"],["/2022/01/23/misc部分解题软件命令记录/index.html","176ae1b40ae152af1824e81878510239"],["/2022/01/25/DVWA下载、安装、使用的教程/index.html","5482de12c342b1f0e5130abb8e27030f"],["/2022/02/01/684/index.html","5baddec99707140de671b990c41d762d"],["/2022/02/03/留言板/index.html","9f9e3a46743bd46a3d2fc836a0467839"],["/2022/02/04/SQL简单注入/index.html","e578534154cd8f459f7b39ebbd20b2d3"],["/2022/02/05/最全的HTTP头部信息分析/index.html","f80ffff3ec2961f9d13161e224822a66"],["/2022/02/08/ctfshow文件上传/index.html","45c878f5a46ddd906cf4ee8ae863c82b"],["/2022/02/08/常见密码类型/index.html","bd21d95c88bb2dd61e75604cdc3a98af"],["/2022/02/12/VNCTF2022WP/index.html","cedc2d9ce84d007f9b035da4e49ab306"],["/2022/02/16/rce/index.html","5fb7452d99de99441a21499347aecf1e"],["/2022/02/18/hgame2022复现/index.html","70be7753a316847be743fa7e63fb819c"],["/2022/02/20/ctfshowPHP特性/index.html","4ad16bacc3f8194c49e2a3165d9e11b3"],["/2022/02/25/php伪协议/index.html","8556cfed22ae4da8ea4b984f33a6418a"],["/2022/02/26/ctfshow文件包含78-117/index.html","14c0ed349dac0ec02b36742fca4cd1bc"],["/2022/02/26/ctfshow文件包含78-88/index.html","d57d4cbac0453fba87044fcb5cea0f20"],["/2022/03/02/Clash漏洞/index.html","836da5da856f6c83c3de8e73fc46cd3a"],["/2022/03/11/流量分析之题型解析/index.html","85954b729fb5f94ff480d89d969d7121"],["/2022/03/15/ctfshow命令执行/index.html","5df2d76bad6b867c181ba14e44f15ac3"],["/2022/03/22/CGCTF/index.html","b9f80653045bcb1d9d8a67a244293785"],["/2022/03/24/ctfshowxss/index.html","1dbb7e7099c615c075be4d62fe6f09f8"],["/2022/04/04/黑盒测试/index.html","f8e4b4333e15657d07221605d0fcf39c"],["/2022/04/11/nmap/index.html","08aa35e4eed40754ecda516a9673b44a"],["/2022/04/12/渗透流程简要记录/index.html","eb2c11604b3858538af1250a2c61309b"],["/2022/04/12/渗透测试之攻破登录页面/index.html","2ce9f18cad97c32a10553587ba24f405"],["/2022/04/14/xray扫描器/index.html","d548f193b43d3804d5766ca2f92c709a"],["/2022/04/15/ctfshow反序列化/index.html","0a2128d6994fd409751d5a9e9524837f"],["/2022/04/26/渗透测试实战/index.html","84b47d900c1d17105620860a5e1617e1"],["/2022/04/26/网刃杯/index.html","4612c3f96f522882239b37647cbaa43d"],["/2022/04/28/sqlmap教程/index.html","c5a5c8e8bf5822700dd459ffdcb0aeb1"],["/2022/04/30/认知文件上传/index.html","f0267a2db4f8b7af8c4fff02dd678bd0"],["/2022/04/30/靶场上传练习/index.html","8a6f247659893029185f89bb4652bf98"],["/2022/05/03/nahamcon/index.html","d17a42f683b7c8ed83ec06f7e30f99b8"],["/2022/05/15/awd/index.html","52ae7ee9eea48a8b5ce8142d76492cab"],["/2022/05/22/DASCTF/index.html","ef505d312e56e60d9a69d8abd39401d9"],["/2022/05/27/520/index.html","6872df1058d6e14850ab7cb1c3918d88"],["/2022/05/27/ISCC2022/index.html","4234d8a063547d9ac3a9641c24613a86"],["/2022/06/01/第五届世界智能大会/index.html","07bc2abc64ef151f8b7d32a602e4f3ad"],["/2022/06/04/SEETF/index.html","5165f5eb7db3e9eb71b4111bc1e1b895"],["/2022/06/04/bcactf/index.html","f03628f241c5117424509b493509c5d7"],["/2022/06/05/BSidesSF CTF/index.html","9285829265dc29f1bc0e878b68c542b1"],["/2022/06/07/Docker部署web题目/index.html","87f8f384b724fe30b0b380b03d98260f"],["/2022/06/09/利用oj搭建C语言考核/index.html","36414887843f1a644ee06ed429138fbd"],["/2022/06/09/论网站502/index.html","bb61df01fcba030dc219a5ba2fdb5e25"],["/2022/06/13/限免题目/index.html","441f43ac93397f6b762947f974431804"],["/2022/06/14/钉钉rce/index.html","c2396a30e82beec80f509c3697c38ed8"],["/2022/06/16/内部ctf/index.html","3390c8bf5a8fe75849d99e1799bdcfe1"],["/2022/06/25/攻防世界高手区(一)/index.html","3b5e4bea1099198c3658cc897b4a7325"],["/2022/07/01/两小时AK赛/index.html","cf8482d9b89dedf64c62dc26a699e15f"],["/2022/07/03/鹏城杯/index.html","f67c3ddb30e058b6e1a113ca743882a4"],["/2022/07/04/XXE/index.html","b7bb820a782394deb53f3fc8c4915c60"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","14289fac4e669bb2b45cb836a599b55c"],["/2022/07/08/chinaz/index.html","111c81398989dd122c96f73129b76777"],["/2022/07/09/蓝帽杯初赛wp/index.html","c3997f78f46f6322d83467e8053e6fbf"],["/2022/07/17/NepCTF/index.html","69ebe8ff876890703f07cf214cae03f2"],["/2022/07/19/ImaginaryCTF/index.html","e1d8ef31db7b29c837ec2f4605253150"],["/2022/07/20/局域网攻击/index.html","09d1aff19400508f9a1f8d3057a9a061"],["/2022/07/22/BDSecCTF/index.html","472ca6db7a75501884ad4ee269c795aa"],["/2022/07/25/DiceCTF @ Hope/index.html","be798c56c094613d8e5739be2da6e91b"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","3d1b315adc4fd48086bf40ce980b12ba"],["/2022/07/31/TFCCTF/index.html","ae03524dd2767ca84d262cbe37cc3eed"],["/2022/08/03/NSSCTF/index.html","acc68a61cf82a4c4c582a53ea0184baf"],["/2022/08/12/T3N4CI0US CTF/index.html","0a97b3318ea3a2d7a1f31dec8b4a9f0c"],["/2022/08/14/SHELLCTF 2022/index.html","fff4d88eeeacd3b167aaba21074b9be8"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","19c4bf94146afa65a8798fdb8ebe7d80"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","e52ee6e5895cf4fc3961c672b9a89d6c"],["/2022/09/16/柏鹭杯/index.html","537017cf3b33bc2af4c7fe6a9de44822"],["/2022/09/20/HUBUCTF 新生赛/index.html","b1da7df2fc50ea796fbf6aae8b6071ea"],["/2022/09/27/NewStarCTF/index.html","f302fb0709f7437db818c17221046154"],["/2022/09/27/bugku渗透1/index.html","c67bf32dfc7ee675e0fd0b173d5e3a07"],["/2022/09/29/tp6漏洞/index.html","db68aa6bd1a624e4dfa7e9fb1f52999c"],["/2022/10/02/SWPU NSS新生赛/index.html","ba50b109af50cd1d4d2354e684d977c2"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","7f96e27ac7a78709c4d665be05ae3286"],["/2022/10/27/Moectf西电CTF新生赛/index.html","556152ae7710c53e9cf33e5843ef1b78"],["/2022/11/02/HNCTF/index.html","24444dab95b58ca241d3afa7bccdd057"],["/2022/11/04/2022工控CTF/index.html","450daca15528fbc927c20c1c48de052b"],["/2022/11/21/极客大挑战2022/index.html","b3b29d35b6e6d2866f97c96c7f8a3191"],["/2022/11/27/实验室考核题目wp/index.html","3da3e159e2b5cb8f86a654e4e8ae1cdf"],["/2022/12/05/TUCTF 2022/index.html","b0a706531ff61ae5db35e8f4e85d7a4b"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","2c7f6ed3ad1a360f7527e9994af692d3"],["/2022/12/18/金盾2022/index.html","2a99567f7fff6eeece985556993a2766"],["/2023/01/01/CATCTF/index.html","d56e118c92cf7682cfd837e53ad83787"],["/2023/01/09/RW体验赛/index.html","e7a3c50500124783b9798ca5e7aa59c8"],["/2023/01/10/铁三/index.html","aef6c39316539c1300a777ecd8c49750"],["/2023/01/16/Ugra CTF Quals 2023/index.html","fdc87e58746c41e7ecbe0d23c02fc5e3"],["/2023/01/18/山石2022冬令营/index.html","b0234c6795d864a8c831911ffcda8e2e"],["/2023/01/19/SICTF/index.html","26813ebd0ef115311a62b359f88e63b8"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","452473863c300dab30e357b1e63c2d10"],["/about/index.html","1c7f2cfa2a66da65e7c1e7177f0a4c5a"],["/archives/2021/12/index.html","5fe0723201ec795f130968893eb14c1e"],["/archives/2021/index.html","bd3c589786e4f973d4fb01972c36880a"],["/archives/2022/01/index.html","9ec3a3bb84195155d8d7647769722b84"],["/archives/2022/02/index.html","f26fa7101909a9380bba4b1f1ee0ca01"],["/archives/2022/03/index.html","1aed69e387bc4d3c664c0e82400d8b28"],["/archives/2022/04/index.html","ed425bdf8836ba00289a0e6be98dc297"],["/archives/2022/05/index.html","c6c73479518a6c7475a9aa93a4bfb199"],["/archives/2022/06/index.html","2450195eeebbf9cd31b5d2a809b2185e"],["/archives/2022/07/index.html","435f3d35e0a9a5b1b916131c956b5c5d"],["/archives/2022/08/index.html","3e41571427e4b98269740b58d02038b4"],["/archives/2022/09/index.html","b6d709608b7ef7ba3ebfa3649e3bd4bd"],["/archives/2022/10/index.html","4df28dca1070c0f3d64fca3724cba3e6"],["/archives/2022/11/index.html","d692c86388488b556539a046493457e4"],["/archives/2022/12/index.html","c326796d6034114e284b031e93ba785f"],["/archives/2022/index.html","21478f047c0efa0cfcee4a6ee3d2d3dc"],["/archives/2023/01/index.html","31f1a0aa0019743044c11c65a2b47e87"],["/archives/2023/index.html","8873ae6a51294fa6800dfca4fbe235b3"],["/archives/index.html","d0b5f894d09d6663e5895524be0271fb"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","09997adb81eaf025ca54286dcdc85fa7"],["/categories/CTF/index.html","77a27f50b49842a5a9ef1cbb263170f7"],["/categories/PHP伪协议/index.html","371a8293f1cc40a8238c264e27dcebe6"],["/categories/Python/index.html","5c74750a1df7e25871756d784c54eb65"],["/categories/RE/index.html","f2adbdb783cf83c5cc66157f77c0085a"],["/categories/Web/index.html","b28cb40cd2e93884560b2d6cdf7f5e82"],["/categories/awd/index.html","62d16c6a6fe49c9a1d43c96db7537f7a"],["/categories/index.html","336a9a0f1940fa832496fdd005e15e15"],["/categories/misc/index.html","d9b820637a9418b3632d8eaf2227dd29"],["/categories/sqlmap/index.html","d836296cf1abf24ecc9c6e6b077be7ad"],["/categories/博客相关问题类/index.html","146d0040cf5097f38229af90e4da6ff2"],["/categories/局域网攻击/index.html","68e47341a9d887b17f975f32fe7221ca"],["/categories/心得/index.html","fb7d1d97e5ecc342f904eadf9bb9f0c6"],["/categories/流量分析/index.html","7fa9c296f80ca29e593bd0551f49f45f"],["/categories/渗透/index.html","d6126d16abf873b7d712a8be9bef3224"],["/categories/渗透测试/index.html","5dfc42b0846bbff582f9fdad82ea923a"],["/categories/渗透认知/index.html","61e3d336be196a2c405ceb20f0b2763f"],["/categories/漏洞复现/index.html","098488e6b46e9c811c4acd47f801030a"],["/categories/漏洞测试环境搭建/index.html","f16872d1d862d282dfc2385710a8f72c"],["/categories/赛后复盘/index.html","30c69586ecf2ef412c02b145d25ccab2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","db4c3c12e832b1cbce1bc61ad50168ba"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","d8bc1f88da57cd2bf5d4ca0ec8f7d3c7"],["/guestbook/index/E587BBE68E8C_2x.png","a44a04ce6494d4c7e6b1b80426d2e8d9"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","e7d12d51f94412816739272cc7fe172b"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d7b587d4846cdd1b9a6d4e824f272d0d"],["/page/10/index.html","adf90302a0e901660946cc29f86e886e"],["/page/2/index.html","bb99519293fa12009e00ed6933223c9b"],["/page/3/index.html","1518cdc9e9d68760050610ab59b29bb5"],["/page/4/index.html","c941869d6a74ad7bde962ca717a51eb1"],["/page/5/index.html","c0ff3318841a5b7b88c745e454dfb2ed"],["/page/6/index.html","cb2e2afd207d087486d04cf1d643eb5d"],["/page/7/index.html","ce9efd2d058325a23d72ebccd934fccf"],["/page/8/index.html","40cb0c74ab5bfa1c1d3253688f332ef2"],["/page/9/index.html","7fa3b1437a19eaa36361f5cd94fb5f20"],["/sw-register.js","e9cd07672047477c26b513dadf5ca937"],["/tags/C/index.html","c1c20bd78dd43cc6c6d34df44e056413"],["/tags/CTF/index.html","6d0f4098e3d8959d33c4c37852cdc910"],["/tags/CTF刷题平台推荐/index.html","671db9322e32bb3f4a1f016c5003995b"],["/tags/HTTP头部信息分析/index.html","f2316806e230918387f26069d8277885"],["/tags/PHP伪协议/index.html","7c00b669a83504df5abeb0f78c9d9c34"],["/tags/PHP特性/index.html","bee2f802dc151468c556751573117438"],["/tags/Python/index.html","0efbed450fd60cc626eb7ea2fa0670f0"],["/tags/RCE/index.html","31c66728f572935671073663416578ef"],["/tags/RE/index.html","42b636424546c27b0e2e10505777af54"],["/tags/SQL/index.html","87faad6a0d1c33722354f4c4a4106f11"],["/tags/Web/index.html","43393c0286c2a00b6121413d9aa729c5"],["/tags/Web工具包/index.html","26221413b63cd25a6b6d8aa63badc955"],["/tags/awd/index.html","1e680eb135cc106c0c36c7798750c0f7"],["/tags/bugctf/index.html","9b7c40dfa6a8c0536887b9eb341318fe"],["/tags/ctfshow/index.html","7ab34b5ca06c5f43985aa6a3776a6351"],["/tags/index.html","71463c47d3112ce04743f8ec08a380fa"],["/tags/misc/index.html","ea6d58d3371a3df616a50d92da462f98"],["/tags/next主题失效/index.html","6cd97a43102f4c0f14a4090c0423cfcf"],["/tags/sqlmap/index.html","e9130b26839616bd664d4c0146f5e521"],["/tags/wp/index.html","8f4aa01b681bca989c54879ef64fdf82"],["/tags/xss/index.html","b4989e55ff7add912e60f581e17f7b74"],["/tags/xxe/index.html","9f60ef61c49294d9c4b70e87eccc2e9c"],["/tags/不蒜子不显示/index.html","a92c046e67113c089a173d1053b8aec8"],["/tags/博客/index.html","1751ed28557d4d10c9f7d6c0c1e70164"],["/tags/博客主题优化/index.html","c68fe04d75b46a8ac0f72fd88629f0f2"],["/tags/博客死循环框架问题/index.html","55c0d79d947bcd3a4204b9bc69838f3d"],["/tags/博客部分问题解决方法/index.html","db978525eeac6b4264e59bc6fd0423bf"],["/tags/反序列化/index.html","062899e51ac0b667b1f1f14f9fc2424d"],["/tags/命令执行/index.html","f5771f658f370cde8748c91e2055c8f4"],["/tags/局域网攻击/index.html","12fe5ca40411dd5f721bb170dfb4e84b"],["/tags/常用指令/index.html","613c25308cc2213b5674d05c90e91ac6"],["/tags/心得/index.html","248b35cfd2b5b60c75f70144c06bf371"],["/tags/文件上传漏洞/index.html","8faeb94bee06533e7aa37e9e61493808"],["/tags/文件包含/index.html","2f63a8f038bc187c2ef72b974c787fa6"],["/tags/流量分析/index.html","4e1770d7758c6c78d85964fb2f0b1433"],["/tags/渗透/index.html","103816b84ec32deef66be6d2b55a1bd4"],["/tags/渗透测试/index.html","d1cab80aacc1914d3f4b698411cebeea"],["/tags/漏洞复现/index.html","7d98dc51f3119be50e574c8e526b2583"],["/tags/留言板/index.html","9c417e231860120019195681d178eee6"],["/tags/评论系统/index.html","139d648aa8f358d7153769c8d66b9331"],["/tags/赛后复盘/index.html","de8474a9979bfc1d9dae2d8258b3cc8c"],["/tags/黑盒测试/index.html","85bfa78b209109c7a73e165ff9e587e3"]];
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
