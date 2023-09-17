/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","8df159bf9cb26f40514ce00ebf3f4e32"],["/2022/01/08/ctf之web/index.html","789abf5cb128fc65277feea85adcd844"],["/2022/01/11/博客制作遇到的问题/index.html","f8a7200e70ec42717afe6cd4fd917556"],["/2022/01/15/C/index.html","ca948b0640accd4790de2d48cd9cd50c"],["/2022/01/18/新版next置换/index.html","2f2eb772bdc4d856e3754cd0f7516193"],["/2022/01/19/不蒜子相关问题/index.html","ed08dfba648e50604059967cdb65fef5"],["/2022/01/19/框架问题/index.html","72ba3907597206686fe331ef77ec90dc"],["/2022/01/20/ctf之reverse/index.html","10ff384ae081b3e868c1ef3d2e0b6f63"],["/2022/01/23/misc部分解题软件命令记录/index.html","d687308b60d2ebae9fb64e842f86f0a4"],["/2022/02/01/684/index.html","942fdf2bb5090f75fa33185c2e9243d0"],["/2022/02/03/留言板/index.html","c7a802b4f6125a35c9ae858fcf2a7db5"],["/2022/02/04/SQL简单注入/index.html","6a794e539e6a78cbc3bc0bce9cda1312"],["/2022/02/05/最全的HTTP头部信息分析/index.html","cd7d94bd0aefefc0ab49cd7249f46292"],["/2022/02/08/ctfshow文件上传/index.html","e550bfda4686295c429a4d4c19ea5b47"],["/2022/02/08/常见密码类型/index.html","59fc3da576bf1b7f6b5d583062fc463a"],["/2022/02/12/VNCTF2022WP/index.html","2d133763740374f00faf6b2f804451b9"],["/2022/02/20/ctfshowPHP特性/index.html","89fdf65c94371ad2c78ba3efbad29caa"],["/2022/02/25/php伪协议/index.html","4410c70f55732c4602ccc6302b59a469"],["/2022/02/26/ctfshow文件包含78-117/index.html","175c1a929e606c81b137a812945b7280"],["/2022/03/02/Clash漏洞/index.html","b27acc2e73f52e9f14a7cbe0a61b06b9"],["/2022/03/11/流量分析之题型解析/index.html","477f77118c7a507d29e5d0e91beadf55"],["/2022/03/15/ctfshow命令执行/index.html","a52395381aa345cce7556989605a3562"],["/2022/03/22/CGCTF/index.html","b68f3654bed49f076b0488a5f48d323d"],["/2022/03/24/ctfshowxss/index.html","682d638091f1a05c9775a6daa87d08b0"],["/2022/04/04/黑盒测试/index.html","652102591f6272966ea8dabcec45bd48"],["/2022/04/11/nmap/index.html","3434b4793039a11a517cbe4e75cac83b"],["/2022/04/12/渗透流程简要记录/index.html","68ad77b5fc9552d3fcdde173d4e78c5f"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a772b8a42284c9794fb45ba453ff9b0c"],["/2022/04/14/xray扫描器/index.html","3d8af0f0eb46fb09abfc67afd9e0a6d6"],["/2022/04/15/ctfshow反序列化/index.html","1c9810c0dc34bb70ca4d6ab6aa132240"],["/2022/04/26/渗透测试实战/index.html","9d0bf6af726db77875952b48630114e7"],["/2022/04/28/sqlmap教程/index.html","cc32d02f02ff2a394d4d2952b05bce54"],["/2022/04/30/认知文件上传/index.html","118fb7c7e7ee1a2ab0442dd5e61e48df"],["/2022/05/03/nahamcon/index.html","fb4720d116675cc2a879fe8ba7acd223"],["/2022/05/15/awd/index.html","55919421824816bf96b373ab3e0370ea"],["/2022/05/22/DASCTF/index.html","7e0eb46522169220afc830c316a79f29"],["/2022/05/27/520/index.html","7aabb27d2397d6b00b530d2912296a88"],["/2022/05/27/ISCC2022/index.html","a4b89242faa52ab791a8d2cc43b09fa6"],["/2022/06/01/第五届世界智能大会/index.html","21f728b1c452498f22b900f8d42a7fa5"],["/2022/06/04/SEETF/index.html","559a45d1f6acc95f5a4130e986dcd194"],["/2022/06/04/bcactf/index.html","e3bf96515095f4aa63762da429f8077d"],["/2022/06/05/BSidesSF CTF/index.html","1cb479b2c444462132dfffba63a6f6f7"],["/2022/06/07/Docker部署web题目/index.html","41ed38ef293ce857168c84713e3f75f5"],["/2022/06/09/利用oj搭建C语言考核/index.html","267fc186803bb56c706a212d591f5cae"],["/2022/06/13/限免题目/index.html","d5b5145de61c7bc7330a97c515674f0c"],["/2022/06/14/钉钉rce/index.html","ab7c2722ca23d840b4ea59cac162bf2b"],["/2022/06/16/内部ctf/index.html","46077b78a5b1123b8b838d3dee76060a"],["/2022/06/25/攻防世界高手区(一)/index.html","64461a3f5ccfcf88dea647a79b621a2f"],["/2022/07/01/两小时AK赛/index.html","9bc969c36ef08bac428f78cb16038315"],["/2022/07/03/鹏城杯/index.html","97466c87c982b9fc142c0249a39c79b7"],["/2022/07/04/XXE/index.html","3b294e02e1145bbf54f945d217e4b581"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","24b829b860694ca207f5283029d2b563"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","89815aabf321d507bfb4dcc71e51aeec"],["/2022/07/08/chinaz/index.html","37f8f1029fbcd4ad44b01145130ce386"],["/2022/07/09/蓝帽杯初赛wp/index.html","e70d633c6b822399ac7b8793658d8a4b"],["/2022/07/17/NepCTF/index.html","01f8f73d2bac29c7f668cd4d071da43a"],["/2022/07/19/2022ImaginaryCTF/index.html","f479677cfabdd37393820cf814b57041"],["/2022/07/20/局域网攻击/index.html","dac769c144ad3924ef8f8e8145f87f69"],["/2022/07/22/2022BDSecCTF/index.html","b1b375dfca2fcd476b38360158fbcaed"],["/2022/07/25/DiceCTF @ Hope/index.html","7169bb78c839710162e298dad4355d18"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","ba052e61cd90e8c1e5d569a4e982fa78"],["/2022/07/31/TFCCTF/index.html","53a30bd1495627932e57dfb0e86a3ab2"],["/2022/08/03/NSSCTF/index.html","1cd41cb0df732fe71105821e6d291b2a"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","a169dc9d7626f8fd81add3b4cc94cea5"],["/2022/08/12/T3N4CI0US CTF/index.html","c9aa95ce00cb6945f84b5556a5d0d607"],["/2022/08/14/SHELLCTF 2022/index.html","828c0fcb774c54dbd5421bc860c96147"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","f96757ee5477dba7cb2b3c6f265fada6"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","b7310a96fc637c200830d762dd2af774"],["/2022/09/16/柏鹭杯/index.html","703bdb045e9a60307f6019dc69457013"],["/2022/09/20/HUBUCTF 新生赛/index.html","c848b5b7c68d5424771fe915c85a4db3"],["/2022/09/27/NewStarCTF/index.html","f2d94fa042db36f2be06d6466a08f3ab"],["/2022/09/27/bugku渗透1/index.html","ee1b2905791a3e97b077139c831f5223"],["/2022/09/29/tp6漏洞/index.html","66f7e9c73390cf700134afe7057d7bbb"],["/2022/10/02/SWPU NSS新生赛/index.html","d10752b6d894117124236aa81fa035a9"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","820d370082a2cb07535b82017c4f819d"],["/2022/10/27/Moectf西电CTF新生赛/index.html","24a22635141b6029e8c5a207c258b4a5"],["/2022/11/02/HNCTF/index.html","ec73ada950820a9e0f893d6d701d9892"],["/2022/11/04/2022工控CTF/index.html","00f1962cba52cbdbe974ca886672b8a9"],["/2022/11/21/极客大挑战2022/index.html","6fa75c44d001b71d1a9c678b3656896b"],["/2022/12/05/TUCTF 2022/index.html","9ff1a5f675b20dcfc1f5866f1108cf98"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","eec76984c9c6fcc6e4a5cea49f939fcb"],["/2022/12/18/金盾2022/index.html","c7912cafbbc6ec755c0ee34b62959512"],["/2023/01/01/CATCTF/index.html","49e944380b6f23c81f48a0d39f3a65b9"],["/2023/01/09/RW体验赛/index.html","60122e06bcc0573c16c18b51d3002128"],["/2023/01/10/铁三/index.html","3a3820aacd75b5fc535432f397ab2adb"],["/2023/01/16/Ugra CTF Quals 2023/index.html","b40f08896d0d96cab64704be56d8eaba"],["/2023/01/18/山石2022冬令营/index.html","a33b635d2341bff3f595c9f101727aa8"],["/2023/01/19/SICTF/index.html","2ab9fdb74bbb0527fd189c983f9fe4c2"],["/2023/02/04/2023西湖论剑/index.html","540c2db004860d8ddb8fce8bd6bdb6d9"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","a2ceddfae7c1cf0baff861ce4ab941df"],["/2023/03/04/公安/index.html","e5fc0b67763a4208fe4b29f3d6454758"],["/2023/03/07/mysql之udf提权/index.html","726b891aad409ea241349b7cbd385728"],["/2023/03/07/红日靶场练习/index.html","4189d38dcb49cba586ffa514090a4cf0"],["/2023/03/27/NKCTF/index.html","f8ebc0c0a7facd75342495f92430267a"],["/2023/03/31/楚慧杯/index.html","e2ee514d126c52c4eee7b89e30f06a5c"],["/2023/04/23/HDCTF2023/index.html","eb42ede4c378f9ff250e17866b55e278"],["/2023/06/01/2023CISCN初赛/index.html","c553a330662dc43bee0f97472cebf543"],["/2023/06/28/2023CISCN[华中决赛]/index.html","c3a4608f9d308ff9343101bcbe277a2c"],["/2023/07/10/CyberSecurityRumble Quals/index.html","b930f79434d3fe61872a73ae0d1b6558"],["/2023/07/22/2023BDSecCTF/index.html","5e171b4ba0db8626a4af8fcba39b66f6"],["/2023/08/07/SQL手注小记/index.html","765593a94f677353cf825b636123a11e"],["/2023/08/27/2023陇剑杯/index.html","ddbf56b298d29fa9d6780033ea24b5cc"],["/2023/09/17/2023蓝帽杯半决赛/index.html","4d1c82ace4fb2eca84e03bff0608fc1e"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","2cfc6bed2b267fc7ee91a6a5b6cc8e13"],["/about/index.html","d6f228b10a258dd812ee3fbb71bcda67"],["/archives/2021/12/index.html","659a64a31a760def909743829c146ed9"],["/archives/2021/index.html","3a682738804d8f304cf77287ec543e8b"],["/archives/2022/01/index.html","b662b39cef6ea2199935554ebd266324"],["/archives/2022/02/index.html","db5c067086fb15a11f418de887cfcbcf"],["/archives/2022/03/index.html","8b7b5121655650e0c501fe41bbbbc34f"],["/archives/2022/04/index.html","cae01f082d3a29e99ea7718e3d1bb62d"],["/archives/2022/05/index.html","78531dac52fb31b2bd7b9f39bc38f637"],["/archives/2022/06/index.html","5bc5288021894299ba02bb1c4e05d06b"],["/archives/2022/07/index.html","6bd6dab9dc9dcb3f6907749b5efc55d1"],["/archives/2022/08/index.html","0ff5c624c0053876b35b7e2361877307"],["/archives/2022/09/index.html","f3e726e08a00970f5be365d28d1266c8"],["/archives/2022/10/index.html","f71e877ece4a214cb75f6212e2191012"],["/archives/2022/11/index.html","3dd1ed44bb5bbec8fd1828ba3e8ce78d"],["/archives/2022/12/index.html","a7ded5526f858b112e6fcc4cee001368"],["/archives/2022/index.html","6fb401e579f04cf626420fbfe4d1a5b8"],["/archives/2023/01/index.html","bd77c3bb7430199023f9c347903ed276"],["/archives/2023/02/index.html","da1aa14eb54161a4101a8077e6eb2023"],["/archives/2023/03/index.html","0c9dc4cca4512f82d8c56a943e11cf0c"],["/archives/2023/04/index.html","c0dd7a904b970ed416b64b3fe627286f"],["/archives/2023/06/index.html","149fdf290107580d22b46507a7636af5"],["/archives/2023/07/index.html","254cb3b9f09816c2d7fe15a4b0874cd1"],["/archives/2023/08/index.html","de31e9a36344af7e9cc3cc2e9ef86255"],["/archives/2023/09/index.html","281ac7b35a88d163a89ab19f823f4cac"],["/archives/2023/index.html","fe5ebf3d9ed821c47e5aff786d4ffac7"],["/archives/index.html","547a873144c89056bb351d8b0c937e1b"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ddb3cfac4026fb34f4f65b12868af2e3"],["/categories/CTF/index.html","9354ebe9ef4c9175893021f05f27a7e4"],["/categories/PHP伪协议/index.html","87732145640f03cdfe1dc97c98914036"],["/categories/RE/index.html","34a189a4f1c470333c78195327181b31"],["/categories/Web/index.html","c747b7238f128e2daa298ea8659cf63c"],["/categories/awd/index.html","d2b45130132fa73ffafcf23a97c40c2a"],["/categories/index.html","502569da10434fee95e675e39b09678c"],["/categories/misc/index.html","d8e1894eda03a2e2980e5296ce6f8757"],["/categories/sqlmap/index.html","b288fb2d384f30c626381916146ef160"],["/categories/博客相关问题类/index.html","4a42112e36b8c6b5fea26bd47e455f84"],["/categories/局域网攻击/index.html","26bfb71fb012c6fe1ce4b05fa02733d6"],["/categories/心得/index.html","5c41894cf8d6f5f1c0c39336363db1e2"],["/categories/流量分析/index.html","dc36ce7054f91abe3ba40823e8b6a376"],["/categories/渗透/index.html","2b6fff936a872390d9e29375e9f4fc18"],["/categories/渗透测试/index.html","7a64aafd759be7f365c6ff5f9fc63608"],["/categories/渗透认知/index.html","5875e8c68da95546f1d2b0fd82cb350c"],["/categories/漏洞复现/index.html","b7328f256400d7d555d13e4eca5e8885"],["/categories/漏洞测试环境搭建/index.html","96908bc5edb9b45c68466c9b1a52ac93"],["/categories/赛后复盘/index.html","25948f2becdb57dfd533196516dfce2f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","5f3d3a8640e16f7787878904f81b1a56"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","89cdbe73a73fcc6b03ea3a50ee377a39"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","44db1fe252b6c9661344d2ee14808588"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6acd71f08000e5e89785841f9572640d"],["/page/10/index.html","6179269d78282229a7d446f21c9b6f37"],["/page/11/index.html","e97e65ccb1610748c7a26f1cff950627"],["/page/2/index.html","fadacf4d8f0b35cc0f2f30215b5508fd"],["/page/3/index.html","4423c93da53b3652bbc93d435114f639"],["/page/4/index.html","13e3cb952193ffb21559d11daa09c956"],["/page/5/index.html","64cef696770f256dd67ff97d6f5a9607"],["/page/6/index.html","712e91a1c88e7e23c06db93adf1a065d"],["/page/7/index.html","e12aba4cb81c32e73afe628571ed4b93"],["/page/8/index.html","99c6210a78581bb7a40667781bc4b556"],["/page/9/index.html","94d6e08d7e6cff971c6349fc7085e1da"],["/sw-register.js","69d543de59e5235d5ec7143dfd9489c9"],["/tags/C/index.html","3ce73b823e998983a46db591bc943e7b"],["/tags/CTF/index.html","00e4e546ca53ddbe4d267befcd752861"],["/tags/HTTP头部信息分析/index.html","84a787c80e3f6e3b7e942d17deb34b16"],["/tags/PHP伪协议/index.html","913561c767a7f844e61709a8eec2364b"],["/tags/PHP特性/index.html","7d42e492d506858f3ac286ef991249c6"],["/tags/RE/index.html","9e2154b15edd2d2d75e9c791967f2bcd"],["/tags/SQL/index.html","71f5bdcc6663d8c45cade5110c0e7acb"],["/tags/Web/index.html","f94a1ff745869686993ab938347f6519"],["/tags/Web工具包/index.html","d47af8ad1e9f62c56e498ebd0cd44dae"],["/tags/awd/index.html","74553170ad010237282df07a5ba8166e"],["/tags/ctfshow/index.html","6f18ac9beba87bb2e34f0fa353b45806"],["/tags/index.html","5d2228936339f90be071c97b577c8806"],["/tags/misc/index.html","4c72a0e2b46032c3db4be81bba4ed857"],["/tags/next主题失效/index.html","2544eb75234eb7ce55e515b7b746ed51"],["/tags/sqlmap/index.html","ff8e5168ddda9c3dd83769a30ef6cc41"],["/tags/wp/index.html","f5b539b29aa3c8aaaa7fd52881c3d2e3"],["/tags/xss/index.html","1610f156bd0883edcc68e7ea9e99b998"],["/tags/xxe/index.html","b604bb19b0599e00fe49bda397af21d8"],["/tags/不蒜子不显示/index.html","1543ae04bd264c5db70c26d993a1dda4"],["/tags/博客/index.html","89067efeefe02df64c1947ec7f0f3508"],["/tags/博客主题优化/index.html","66c9f2a251ead933c9bf2d10b92783e3"],["/tags/博客死循环框架问题/index.html","ec7f34f4500b35d811be0444c8a3a0dd"],["/tags/博客部分问题解决方法/index.html","a64c1bedf182d8751732921bc8141b96"],["/tags/反序列化/index.html","9c6d8127dabc25ddd54616e5e4123325"],["/tags/命令执行/index.html","4451bbe2a31430e2430881cdcd8b5158"],["/tags/局域网攻击/index.html","e55257c51d56fc757f0616eb3c84ef0a"],["/tags/常用指令/index.html","ca096e44b1b00aa40fa90a44e44b370b"],["/tags/心得/index.html","da32ab4700dbe96dd28a16bda4fe322a"],["/tags/文件上传漏洞/index.html","e56d6a9fde7322a684556e0c37118b2e"],["/tags/文件包含/index.html","b7aa0983c57c0a28ed5f9699ba51658f"],["/tags/流量分析/index.html","6b766359f5f32759346b01b2d2565b9b"],["/tags/渗透/index.html","1fc17983fcfc7cf89a6ab1f3d6d86424"],["/tags/渗透测试/index.html","641050116a59c83b06f47c178f441336"],["/tags/漏洞复现/index.html","95be5bde3c120c58e5a6dff27e071b10"],["/tags/留言板/index.html","4449a0f610ab9cac0ea2d2d3c0dbc19a"],["/tags/赛后复盘/index.html","7fda34cbec2047ddffe16ee6b8326d78"],["/tags/黑盒测试/index.html","262711d6e9cbcb0c7a60f01433ccbdc0"]];
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
