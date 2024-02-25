/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","76b02156b01b777871001b41c7b426ed"],["/2022/01/11/博客制作遇到的问题/index.html","ba316db1338a4f5dec3835da81b1e397"],["/2022/01/15/C/index.html","d43434a4f6838f610e609f9c530e0b83"],["/2022/01/18/新版next置换/index.html","a8c2634865cc8a35974eb4c73968617c"],["/2022/01/19/不蒜子相关问题/index.html","47aeb062ccc7578a6d884f2ea480d736"],["/2022/01/19/框架问题/index.html","f67feaf7ca313647569a14c62e05e2f2"],["/2022/01/20/ctf之reverse/index.html","bf8917c371a19a1347fd3a445c6ddc77"],["/2022/01/23/misc隐写题目总结/index.html","9081df4b58303c8303602e84c6e98ecf"],["/2022/02/01/684/index.html","a4695c7cabd8c2582ca00dc98b9fbcc6"],["/2022/02/03/留言板/index.html","a1cb12dfebf76cdf539df1858a46dbb3"],["/2022/02/04/SQL简单注入/index.html","4c39837e89b0d95d9e0a763248ea5ee6"],["/2022/02/05/最全的HTTP头部信息分析/index.html","bd136c382b7d698f042bc87c73d6ff9e"],["/2022/02/08/ctfshow文件上传/index.html","bcadc4f209ce07df07410007f0a645b3"],["/2022/02/08/常见密码类型/index.html","59b0e6f1f04cf92897fbad875b120cfc"],["/2022/02/12/VNCTF2022WP/index.html","5d2d4ba24a8f4d4670d2624d00fb37c0"],["/2022/02/20/ctfshowPHP特性/index.html","6f780fe43ee732c0289366455a9ccf91"],["/2022/02/25/php伪协议/index.html","46cb312ac9f8cc658662aee921d25fee"],["/2022/02/26/ctfshow文件包含78-117/index.html","63cd04e74b32dd4c675bd2a116a59c34"],["/2022/03/02/Clash漏洞/index.html","10e45a7d13b7412f6ffeb1843a5c21df"],["/2022/03/11/流量分析之题型解析/index.html","d0fa89d3498062b4e63d868ec80c1ba6"],["/2022/03/15/ctfshow命令执行/index.html","e5b5bb7b544ad77d4687f1e9acf23aba"],["/2022/03/22/CGCTF/index.html","ae5bf0af8acb53db3587ed8e30a900a1"],["/2022/03/24/ctfshowxss/index.html","60f813323164a13cb0f6eb2148d23647"],["/2022/04/04/黑盒测试/index.html","4391efb9bf9aa5de6c296afa9d5c84bd"],["/2022/04/11/nmap/index.html","49f0498117ee32eb0c1641b8287ca083"],["/2022/04/12/渗透流程简要记录/index.html","ada7761270fb06fec86b6c0bd55aa840"],["/2022/04/12/渗透测试之攻破登录页面/index.html","1cea04316a709663c63466f41af48e6b"],["/2022/04/14/xray扫描器/index.html","f7a45c870f55045f148ebf0e3250e809"],["/2022/04/15/ctfshow反序列化/index.html","421589bd1dfecc55a303d7b98a150006"],["/2022/04/26/渗透测试实战/index.html","a110992111e679ece26731144026af91"],["/2022/04/28/sqlmap教程/index.html","5fb3e41c3884df5fee14f53227f625f3"],["/2022/04/30/认知文件上传/index.html","b6ae0f9aacaeb0278157dc7b54f4d3ed"],["/2022/05/03/nahamcon/index.html","8468cfc941c73f95fc1a37b878c84638"],["/2022/05/15/awd/index.html","e908c0d0f777c4ab0658337d9555b77c"],["/2022/05/22/DASCTF/index.html","d93ca0e50ab360781b1ab579d4c17bd5"],["/2022/05/27/520/index.html","4f61ad60ab09ff41c3b92bce0178ff2b"],["/2022/05/27/ISCC2022/index.html","5215b44fe5bd6a27867908c2e81c17db"],["/2022/06/01/第五届世界智能大会/index.html","12d024d764f1c2f256df9d3d40e88a3d"],["/2022/06/04/SEETF/index.html","155744f6b484fc6ec22e6bc3d751d271"],["/2022/06/04/bcactf/index.html","1d8ac7c73a4a78306d6303de1d8a2494"],["/2022/06/05/BSidesSF CTF/index.html","767205ae8e22b1891afffbb152da2085"],["/2022/06/07/Docker部署web题目/index.html","c26ec0db464cc2a24656091532105111"],["/2022/06/09/利用oj搭建C语言考核/index.html","316a3368ec3ffa595e791d6a03d552fe"],["/2022/06/13/限免题目/index.html","e30f57acbcf00a7998e421c520f227e2"],["/2022/06/14/钉钉rce/index.html","44cc31696265ef0bffc36e383744177b"],["/2022/06/16/内部ctf/index.html","b47c62beb3c93ca2573818e17cf5a629"],["/2022/06/25/攻防世界高手区(一)/index.html","8e96cd1752acb2bdd7b5834074d2bac0"],["/2022/07/01/两小时AK赛/index.html","834c088cc3fd59e29a7b399fa84b0925"],["/2022/07/03/鹏城杯/index.html","121e8e6a239085389b588a7f8741c2dc"],["/2022/07/04/XXE/index.html","1343fac75ce7d7f3fbb1110b4c1525d2"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","12678235a59b64e40275ca05d3d1bcd0"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","1c881aa84ad5d013dfcc0210817000d7"],["/2022/07/08/chinaz/index.html","df81178e0eb3022bf824d32e1bfad2bf"],["/2022/07/09/蓝帽杯初赛wp/index.html","d94ef6a11da1c7601a2502087009b61a"],["/2022/07/17/NepCTF/index.html","79dd90fab086e28806cc513ee52d7e0a"],["/2022/07/19/2022ImaginaryCTF/index.html","c7a096ec291a7035fcb837b2f0071a31"],["/2022/07/20/局域网攻击/index.html","9efcf7a3a973230acfa96fff5e5b6b98"],["/2022/07/22/2022BDSecCTF/index.html","e1f4d2106ac60bd5505331a86c02b7b5"],["/2022/07/25/DiceCTF @ Hope/index.html","fe2fddc054c43279af316e19e66f0c36"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","219b87a7541326d527fc98b617d1b8f3"],["/2022/07/31/TFCCTF/index.html","3712703c88a65c42defbb150fac30006"],["/2022/08/03/NSSCTF-r4/index.html","9c9cc41c765c2352ee317729fc827010"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","fa8f044d7ab448b71c32bfe112126a27"],["/2022/08/12/T3N4CI0US CTF/index.html","7d00fdf84660fedd5758b4f4668d80ce"],["/2022/08/14/SHELLCTF 2022/index.html","ca82ec86afc03a6107aca045659413ca"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","53305c9a84fc77a3138a1651ce7c0bce"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","3ae408b03eb7ca61fe229bf3906716df"],["/2022/09/16/柏鹭杯/index.html","a3bfc6029789b7e895ccb3f0a120e717"],["/2022/09/20/HUBUCTF 新生赛/index.html","18ce2a2c70e3ec5849309238b4d39197"],["/2022/09/27/NewStarCTF/index.html","f54beecbc8dff159966350d13878b4b7"],["/2022/09/27/打靶-渗透测试1/index.html","c254c45710c664f87a25abb0fce511a5"],["/2022/09/29/tp6漏洞/index.html","acbf55741d0ce6e30d47ec3eabc3832b"],["/2022/10/02/SWPU NSS新生赛/index.html","d93ffc1f1c828c8d829c7bc8b304970d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","f5cf962020cbffee93692e52ed1ac5d6"],["/2022/10/27/Moectf西电CTF新生赛/index.html","0aaffe773a64b5fe5174870bf0c20a95"],["/2022/11/02/HNCTF/index.html","f67c385a21db9a30b3e96d27f6596672"],["/2022/11/04/2022工控CTF/index.html","d5ebacaa0ffd7ef5d3d2a4ece7f2a74d"],["/2022/11/21/极客大挑战2022/index.html","6762eecfbeec190200a33d3aee31c41e"],["/2022/12/05/TUCTF 2022/index.html","bff1269fcf7699266f11668fb2cd3cef"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","b149318d20a660ac5907d117e3d85939"],["/2022/12/18/金盾2022/index.html","9c1b793bbbcca2ceb2440a181753b38b"],["/2023/01/01/CATCTF/index.html","6da3e1facdd873de1f9a3cc7dea18d49"],["/2023/01/09/RW体验赛/index.html","ee863692e12410423d91a179e29e9aea"],["/2023/01/10/铁三/index.html","f33208e0164400b3b4934d4eb548a021"],["/2023/01/16/Ugra CTF Quals 2023/index.html","aa58b96e7707278c95347d5e4ecad5b1"],["/2023/01/18/山石2022冬令营/index.html","5bf161ec5ec66113c6f1271992d3de37"],["/2023/01/19/2023SICTF/index.html","ca0c098acdd1180fd8635ceffd54c7ed"],["/2023/02/04/2023西湖论剑/index.html","2042b6374671115156e18cd074b8d65c"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f28f1fa0f3edc8ce58db99bef2db5058"],["/2023/03/04/公安/index.html","2bfea93aa03bac605137f3481c8fbe58"],["/2023/03/07/mysql之udf提权/index.html","bbd84d812b060778f961f3002b3f1a60"],["/2023/03/07/红日靶场练习/index.html","c7f672e3664170927df7eaf9447f5ee4"],["/2023/03/27/NKCTF/index.html","9850f4404da3fddf2d471700f1f61e95"],["/2023/03/31/楚慧杯/index.html","a4164b4a7f34395d7ea9da821b7d920c"],["/2023/04/23/HDCTF2023/index.html","24d9de00ed2ed67f88467a85cd54cf20"],["/2023/06/01/2023CISCN初赛/index.html","8d7bc0dae56d85d37de16144c8cd5d13"],["/2023/06/28/2023CISCN[华中决赛]/index.html","5e57223ae7298be6ac062926150521d1"],["/2023/07/10/CyberSecurityRumble Quals/index.html","c253e1b03c25b5ecb343da0faf4bb871"],["/2023/07/22/2023BDSecCTF/index.html","ea3a7f081de63315204412603b0c128c"],["/2023/08/07/SQL手注小记/index.html","37e5a198ad4d4c4150cdcbdd9ea385f6"],["/2023/08/27/2023陇剑杯/index.html","597caa886fc6d2ed1e83192e9a2b743e"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f4adf5b65d8a1adc44c87dd326053723"],["/2023/10/23/对于多层代理的研究/index.html","586010adf12bf3401e2b469bdd0179ad"],["/2023/11/25/金盾2023/index.html","fa12b366d7d04ceea5e2ae59ae8586ae"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","5fa63f777c5d30375592f89b9b2f79d4"],["/2023/12/18/2023强网杯线上赛/index.html","22b1416ff9c01e6d2917dd93e5c857cb"],["/2024/01/08/基础ROP/index.html","33f7053a7ca12e25ccde689015298ca5"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","954aa2b1e0b1ca0d28adb4ba1720ed66"],["/2024/02/13/打靶-Tr0ll/index.html","568003d931bba6a74a176a086f5d8410"],["/2024/02/14/NSSCTF-r18/index.html","25aeb9554417a88f48ae2c61db255f9a"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","968ae873ead05617ece2f2e6d289dc0a"],["/2024/02/15/打靶-CFS三层靶机/index.html","2fe48d96a1e0638ff88f22d70082cd6e"],["/2024/02/15/打靶-应急加固【简单】/index.html","5e84066f90bd7caea010d3c2ffb08dcc"],["/2024/02/17/2024VNCTF-WP/index.html","4cb998bd76cf3c82612a3990362b1a4a"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","b99bd87c13ed412defb09f134283d25d"],["/2024/02/19/2024SICTF-Round3/index.html","6803dd88c9796af9f7c326aa6d98b4e7"],["/2024/02/19/打靶-铁三域控/index.html","287983b26d3f28ba181e7a5586b1ece6"],["/2024/02/23/ctfshow终极考核/index.html","7dd7a2e49e918f7cc9ef8cb27458e040"],["/2024/02/25/打靶-应急加固1/index.html","bd8cc6b1fa6d51ec4fa6894fb45e1e8d"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","3de0ba427a957441598a055311f27f7e"],["/about/index.html","2cb323b5c2f6569bb44644738496e491"],["/archives/2022/01/index.html","a8e23b7c5f133355065d321c147b659d"],["/archives/2022/02/index.html","0a4d3d938d9cdf9c57534c7d09d883fc"],["/archives/2022/03/index.html","7c1362b321959ed5e20b1185f8f3f4d2"],["/archives/2022/04/index.html","e86d7d628fcf01dff4c09bd34bb455ea"],["/archives/2022/05/index.html","b1747f070a79363213840b2ba9fb37de"],["/archives/2022/06/index.html","28abd3d17c007bd2340ce621c01137ae"],["/archives/2022/07/index.html","b83fd926a680befaa4de6bfe8f3ec137"],["/archives/2022/08/index.html","616e7d6bc137ee41734aba071d430e30"],["/archives/2022/09/index.html","269cb72dc42c83cb4b4cf4ccccbf8e17"],["/archives/2022/10/index.html","2cbb70ceff496e3080b10cd4d367d124"],["/archives/2022/11/index.html","f06c3f0753ec8187d72a617330014797"],["/archives/2022/12/index.html","c13413094cfcbd6eec39ee27c19c4420"],["/archives/2022/index.html","68833b2c631e961b56cd85f3af9f6bb0"],["/archives/2023/01/index.html","372c3f1f2262466375bf9c0a254b0846"],["/archives/2023/02/index.html","600c8d539661107225fd62ee0ecd0f23"],["/archives/2023/03/index.html","f0598e603938af5851e26c166de0c2d0"],["/archives/2023/04/index.html","64f99480a4c69c34f965c1d8adda2ddd"],["/archives/2023/06/index.html","d5aa2e3cce980e50b3e443f16d15b7ec"],["/archives/2023/07/index.html","ca03271fb1e5e81864a71c28285d4f5a"],["/archives/2023/08/index.html","881bf3a07ebd34c0d0c0a8e17deaea75"],["/archives/2023/09/index.html","30d76c6be7ea3f40448434eb10ebd15e"],["/archives/2023/10/index.html","a65bfcf93a89380b3396aa473d250a86"],["/archives/2023/11/index.html","b9fcc81777fd266b917a9d50e9dd4460"],["/archives/2023/12/index.html","28f29a939b851d653999e4459394c152"],["/archives/2023/index.html","f4b32c47d8622120c06c52e52d9fdf3b"],["/archives/2024/01/index.html","7a9ba130dfc3a4cef969571f615f89b2"],["/archives/2024/02/index.html","fec531127e184b348db344a11e9a67eb"],["/archives/2024/index.html","87d1e2d08f9e4282db1aa5152ea34f88"],["/archives/index.html","6c3d0eed1ccd975f7c797f4d027654a2"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","6f5e646729b010a8fa9c218c689e712a"],["/categories/CTF/index.html","e66213a63cffd3796a6cb1cafc27d89c"],["/categories/PWN/index.html","e9460a5c27048786a95cdbf4e2db86cd"],["/categories/RE/index.html","ee2222ec225ffee912785b9737891677"],["/categories/Web/index.html","f60c62d99903cc959732fa80e316dfa9"],["/categories/awd/index.html","6b741494cf9e24e318f9433251c95766"],["/categories/index.html","989a39e1a709d674547f09d70fe8b74f"],["/categories/misc/index.html","1c3ac4fb469d4dbd73bd22431e208d93"],["/categories/博客相关问题类/index.html","3668c0ec6c2a2bc97ac4f891c0418afa"],["/categories/局域网攻击/index.html","bbee475950a24a05b1769138b3574606"],["/categories/心得/index.html","ec3a540cca7077fcd943a373c7d3b20f"],["/categories/渗透认知/index.html","25befa607b86b7ddf98885e3e887f720"],["/categories/漏洞复现/index.html","7340da60d6e8a5fb676933da68dc1e87"],["/categories/漏洞测试环境搭建/index.html","3f0106e5d1e0153bd9af22c91e157ec2"],["/categories/赛后复盘/index.html","5f9715344fd81617bd064394ba163170"],["/categories/靶场训练/index.html","bdca3d8c6f96556fd132da4f0e3cad87"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","1359dd93bad1b1bd447db219785c4d20"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","8b27fcc7a1ac2d1d88db676425ff4180"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","0c39937c208526d757afb9aa737df0b5"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","78c0ff1c64070dddd80e83ef36ed5a61"],["/page/10/index.html","c936b4b2d81f63d054301bd053ca0f06"],["/page/11/index.html","ad8d905cf7838aa4c61baa8b6566db69"],["/page/12/index.html","1b3a770664aa1dff3b2c68ea6a26d809"],["/page/2/index.html","82ce2a78f6635853e66a087e704a729d"],["/page/3/index.html","433f3ba817e50771f783199d45e9997f"],["/page/4/index.html","db53f6426074eb4da750fcf8a6ab4102"],["/page/5/index.html","d9a41f6d9661cb4b5effc628ec56ae8f"],["/page/6/index.html","20368755c7ea7f13128aa30633b74424"],["/page/7/index.html","b3765d3219ae8b55d19a0196a256eabc"],["/page/8/index.html","a23015d9fda50c46297a672514b63672"],["/page/9/index.html","65cd96830a96c48eea0d578e651e7d61"],["/sw-register.js","d7ca62ea0e236dc247604cba8a9c3705"],["/tags/C/index.html","34efa23ff14b5a615fca3abc6d32dcec"],["/tags/CTF/index.html","70af6364c0e56b8a9d058c677a45aad6"],["/tags/HTTP头部信息分析/index.html","96c7bd43ac74ac09317d6b472b97ae45"],["/tags/MSF/index.html","08bafd505844b274d9a89ca0834b369c"],["/tags/PHP伪协议/index.html","b12afb83a339cc163100eda447f87fc3"],["/tags/PHP特性/index.html","0c13755794aecafcc69a058afefa0b19"],["/tags/PWN/index.html","c639b95cd9ca1949798ae3691886a6dc"],["/tags/RE/index.html","18d19e2cb69a288eecbc67c553833923"],["/tags/SQL/index.html","8144daa901431c4db29aeece10f86b3c"],["/tags/Web/index.html","7cfbe668af7439bda64a67b0e8b7b558"],["/tags/Web工具包/index.html","09891c1aef53a8c1aea725b91118ef9d"],["/tags/awd/index.html","431a1b0dd8d3df2ed386d756b83a6dfa"],["/tags/ctfshow/index.html","9ee30263f4be4eab2fb7ecb700f531d3"],["/tags/index.html","38d8e4eb576fdaf5df43bedfcb20d727"],["/tags/misc/index.html","14f4d33a554f862b54ce743a2f0131ae"],["/tags/next主题失效/index.html","56af227e29467b25df144e1fda293255"],["/tags/wp/index.html","cd5f70d7d51546f352275a24fb53ffac"],["/tags/xss/index.html","b3a8618375e1b17b22eb6e7bc6dd2564"],["/tags/xxe/index.html","ad600bf04661e2b11f2e687b7105428a"],["/tags/不蒜子不显示/index.html","c547a7c139e1cfeb814b25f95f72e7e3"],["/tags/博客/index.html","8c0295db15d837c5cc89e5cea2cfde56"],["/tags/博客主题优化/index.html","fcfb37a72da1bac4402d18e641a2b8b6"],["/tags/博客死循环框架问题/index.html","671353d4997aac5dfd252964e15c82a3"],["/tags/博客部分问题解决方法/index.html","a47d7b07e97a99fcad9862aa52a8a373"],["/tags/反序列化/index.html","0a9c3601f133e4b47fe8a87d8e0abf12"],["/tags/命令执行/index.html","03b190f0746b742945fe78777f5f57f0"],["/tags/局域网攻击/index.html","c940ff1bc7a449af0f8e0525d48076db"],["/tags/常用指令/index.html","dc75feca754489b68d493ec72f7b2321"],["/tags/心得/index.html","233e3f26c286c7c5ade1ad62e08faabe"],["/tags/文件上传漏洞/index.html","1172e266f0c16dc768f3c9f8e80fa139"],["/tags/文件包含/index.html","77df83d80fdec090f576b0fe89d9198b"],["/tags/流量分析/index.html","36983d97b8abd17e73decfed31524b87"],["/tags/渗透/index.html","8977fa518c4f47edb3e8768d233cb99b"],["/tags/渗透认知/index.html","c922ae761c5b35818cb7ca60bfb90073"],["/tags/漏洞复现/index.html","55721d9f07692168a5866c9435dc46d7"],["/tags/留言板/index.html","a918c4377b818ab27de5b6f273ee62b9"],["/tags/赛后复盘/index.html","039a6c03ae6f61ccf0e3f83b34e1c351"],["/tags/靶场训练/index.html","8a34789c486c2b54b6d4454405b4bbc2"],["/tags/黑盒测试/index.html","a977ef45feb0269c2b2267fa42d47e0d"]];
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
