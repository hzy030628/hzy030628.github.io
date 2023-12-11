/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","852c4aef3112474d28d6dfb7843ec9eb"],["/2022/01/11/博客制作遇到的问题/index.html","616806b849d15b2132c9f01c54e6653b"],["/2022/01/15/C/index.html","4f4bd44c40ec33f323dd0fb3ccf92f09"],["/2022/01/18/新版next置换/index.html","c5fcfbbd5ac0c8a9b1fd0244d9fd5eee"],["/2022/01/19/不蒜子相关问题/index.html","78e6ae329b811b494ec9d495d9651f09"],["/2022/01/19/框架问题/index.html","ecaeebf577f5f38058e80f119a46afe6"],["/2022/01/20/ctf之reverse/index.html","66a2a6d1f2ff5bbc6b44d3100e4a5d9d"],["/2022/01/23/misc隐写题目总结/index.html","799d3e6e9dc51e86087a16ee217a4d90"],["/2022/02/01/684/index.html","2a07cdff8817e3ff276cf8951719258c"],["/2022/02/03/留言板/index.html","a36515b83ca395bb9e0204a15b7a3496"],["/2022/02/04/SQL简单注入/index.html","973e074c93f2e6d6995053a57f1a17be"],["/2022/02/05/最全的HTTP头部信息分析/index.html","ff3714391eb4beac646388914a755daa"],["/2022/02/08/ctfshow文件上传/index.html","8d197f61f731ab3f387056614d7c35ff"],["/2022/02/08/常见密码类型/index.html","619759d41b0cb4ef1e99a2a810ad2c82"],["/2022/02/12/VNCTF2022WP/index.html","00feb2f554231c2a1c0c071783118ccb"],["/2022/02/20/ctfshowPHP特性/index.html","aa7927fb078c4e1a14f06f66f9c31249"],["/2022/02/25/php伪协议/index.html","fd0d836164799b2282b3e8d630817e85"],["/2022/02/26/ctfshow文件包含78-117/index.html","80bd2a702406ac30138fd444ad896f9f"],["/2022/03/02/Clash漏洞/index.html","f54ffd28c05f2f76c78f91e0e7992a8e"],["/2022/03/11/流量分析之题型解析/index.html","7efa559f1cd2cea6492295cce8088bf2"],["/2022/03/15/ctfshow命令执行/index.html","a65e73e8686d136e9e66c1e9a32419fb"],["/2022/03/22/CGCTF/index.html","4662213148025197534b2ff7be6d69cc"],["/2022/03/24/ctfshowxss/index.html","3d463875e4c528742e70b47086e9cfd7"],["/2022/04/04/黑盒测试/index.html","2493f16d9eddfd38361b41a10b50f130"],["/2022/04/11/nmap/index.html","ef4367258486ed884829f7fbbe7bffce"],["/2022/04/12/渗透流程简要记录/index.html","08fd2f6c48dde1a2cc3c2dd97963f52c"],["/2022/04/12/渗透测试之攻破登录页面/index.html","381f76bf119cb51d91777905df4053d9"],["/2022/04/14/xray扫描器/index.html","31907158ae4312c9dfa68dbb3b393591"],["/2022/04/15/ctfshow反序列化/index.html","e7b5a72d73118d853f36097a2d1d7634"],["/2022/04/26/渗透测试实战/index.html","71555cccb157c0847789651b6b864bf5"],["/2022/04/28/sqlmap教程/index.html","eb0acfdf5e864150ca6772b67f848c33"],["/2022/04/30/认知文件上传/index.html","96f476065b9444819d2556d2799d864a"],["/2022/05/03/nahamcon/index.html","d88865dcdbf787fe984528500e67c874"],["/2022/05/15/awd/index.html","6b54c0a8be2fddadcc9a5929ef54be47"],["/2022/05/22/DASCTF/index.html","1f9ff0e10a4a92b103b3a038ab36fa84"],["/2022/05/27/520/index.html","7815cd1f8428afd63fd8f3816d628962"],["/2022/05/27/ISCC2022/index.html","79befe9d451f2341640be4025dcd0d15"],["/2022/06/01/第五届世界智能大会/index.html","a56ec876c0c63de6991dc4166744eb33"],["/2022/06/04/SEETF/index.html","0aeb9dc1d968e524f7a21816374e84be"],["/2022/06/04/bcactf/index.html","73317123507228806b849b2b77e9ac6a"],["/2022/06/05/BSidesSF CTF/index.html","edbd42f32b821cb2b74135ab7bd5759d"],["/2022/06/07/Docker部署web题目/index.html","e1525f94967cf7a57c786344bb7fcaa5"],["/2022/06/09/利用oj搭建C语言考核/index.html","bf2cf20c269fd3b74f4f9a6a7b295e49"],["/2022/06/13/限免题目/index.html","b990198219249fc4f0fc94fc282cec7c"],["/2022/06/14/钉钉rce/index.html","ce40cede4f0da8b611d1b3b9d5d43950"],["/2022/06/16/内部ctf/index.html","0c1cd2f0127967c285b962d14a7f37ef"],["/2022/06/25/攻防世界高手区(一)/index.html","fd7a4b662158487faf42fc5a58aa3d40"],["/2022/07/01/两小时AK赛/index.html","c6286fbc361c7133949c8d4051a69215"],["/2022/07/03/鹏城杯/index.html","6beba2758ef11f2d5c7b66d29dc5bc87"],["/2022/07/04/XXE/index.html","e44e397362912a220639ab677b24a759"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e79e2a8c2bf8c5e04b08ac3a090ee92a"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","3eb228af83dc24769dc4713993299b0a"],["/2022/07/08/chinaz/index.html","281749fb0886832f03f87d0155bb02ac"],["/2022/07/09/蓝帽杯初赛wp/index.html","c07aac27d229671a715dc42cec4a6605"],["/2022/07/17/NepCTF/index.html","30afe1926f6fd5ad3c16ec2df20f0175"],["/2022/07/19/2022ImaginaryCTF/index.html","bd08b4f2c40f8aa35b72dfffce4d1fbd"],["/2022/07/20/局域网攻击/index.html","b432e64786a721095e96caba3dfd9627"],["/2022/07/22/2022BDSecCTF/index.html","1d26a0a23bcc5363d95dc6349e045890"],["/2022/07/25/DiceCTF @ Hope/index.html","8454fc14f1e38bf18f345fdbd292f5a3"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","80269e77378b8611b0d4e57c82e800bd"],["/2022/07/31/TFCCTF/index.html","7fb53120422146c82e560db282e6af27"],["/2022/08/03/NSSCTF/index.html","e6d788d34314a5a779b30502b632512e"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","c6fe08160b95453c550a006e6948ba20"],["/2022/08/12/T3N4CI0US CTF/index.html","1148b48dca665b298359473ab20f15b0"],["/2022/08/14/SHELLCTF 2022/index.html","4a1ff63902f8ae2d4e7da68194fd608e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","ea1e29324d53563efe69f514421f353e"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","8f2c5e7319c022b0e0f02a88e8a350cc"],["/2022/09/16/柏鹭杯/index.html","9266476a8b13de7fffbf434190dbf917"],["/2022/09/20/HUBUCTF 新生赛/index.html","d575eb60ab2dc0b022106cb6800b2da1"],["/2022/09/27/NewStarCTF/index.html","0b9360623605f6487d3b29b4075e6244"],["/2022/09/27/bugku渗透1/index.html","0e4a289b5d0b5f744a593cc7a1a9095f"],["/2022/09/29/tp6漏洞/index.html","1b58a808230b8dcfa1d577d18195470f"],["/2022/10/02/SWPU NSS新生赛/index.html","64a246a5d037b2e3f65507963707c02a"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","67291b69aaac27e0f68957b43218f1b9"],["/2022/10/27/Moectf西电CTF新生赛/index.html","97a2f7ac41af0a13ea55546c2e9139f0"],["/2022/11/02/HNCTF/index.html","356f56bd87eeecd628c9164de8506182"],["/2022/11/04/2022工控CTF/index.html","d8b8fe02c0e77c79637bab58ab3ddfd4"],["/2022/11/21/极客大挑战2022/index.html","ef8078170510879d9d283e5624f02c5f"],["/2022/12/05/TUCTF 2022/index.html","4a888d57bc82324bd50bb332dd72a738"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","6f18903b92bc2f3035e3ae045ada34af"],["/2022/12/18/金盾2022/index.html","6e3848462f0cde8c69181315fd9948f5"],["/2023/01/01/CATCTF/index.html","1fd9fe3ac8d46a498bd553eeec561edb"],["/2023/01/09/RW体验赛/index.html","3faf92149288c693e497e37de458a564"],["/2023/01/10/铁三/index.html","0a6181ae0a3c7f00ad978ea91dd02bb9"],["/2023/01/16/Ugra CTF Quals 2023/index.html","df56b8da52162550cf7de72116685542"],["/2023/01/18/山石2022冬令营/index.html","fbe70f81b5c68668036d1bd93b1d8cf4"],["/2023/01/19/SICTF/index.html","ec153c875f3c05e18b271f33e96189e6"],["/2023/02/04/2023西湖论剑/index.html","53c5253aa9c2d187c833995517378b30"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","fb72d7e9fb24979d14582c9271fedffe"],["/2023/03/04/公安/index.html","52bc26005a4ba3bfdfc3a6001cf02b1a"],["/2023/03/07/mysql之udf提权/index.html","04a0ec6ad41b6a5ffb34fcaaabbaaed7"],["/2023/03/07/红日靶场练习/index.html","417cd97a76784cd0f9d41275dc5d50e5"],["/2023/03/27/NKCTF/index.html","7ca6d9cc8aacddd2e3b45318ae4581b7"],["/2023/03/31/楚慧杯/index.html","2576c8007c80f818870e5c34a69575ee"],["/2023/04/23/HDCTF2023/index.html","f49f9e72cadc88cba705b6e83c87e5b4"],["/2023/06/01/2023CISCN初赛/index.html","90905a06f61875b8ecf56dc4bbbc06c0"],["/2023/06/28/2023CISCN[华中决赛]/index.html","5d1091b4c8d545790256f9c102bbec37"],["/2023/07/10/CyberSecurityRumble Quals/index.html","bf3dde1c2334b3de82c021736738c9ac"],["/2023/07/22/2023BDSecCTF/index.html","32fc438c070c6935b392b6c62d8c6acb"],["/2023/08/07/SQL手注小记/index.html","afa3e93770df587fe0c8c0b99da9e5c9"],["/2023/08/27/2023陇剑杯/index.html","a5a9f92622ffa19d288cac8c63066d69"],["/2023/09/17/2023蓝帽杯半决赛/index.html","92f2b7c205e5e1e109b5f0ab5cfbf5f1"],["/2023/10/23/对于多层代理的研究/index.html","b5937b3f5cfdab55b31ad5362c10fc1c"],["/2023/11/25/金盾2023/index.html","d8984b0b654734335369c63e166fe723"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","386563873ec14b472ff07d443addc49f"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","543e3e138cfff3aa89f35b3690d6efde"],["/about/index.html","567b10e70d4f31389e8cbb06591fe6ea"],["/archives/2022/01/index.html","35ce66de969f2679d7b1ac7d1ec96ff3"],["/archives/2022/02/index.html","931c3c1824a299e5547b9e400c710730"],["/archives/2022/03/index.html","ff9c1608475a61647f14d43fffb83d42"],["/archives/2022/04/index.html","083624b7b5ed78d64b1489e4d79ee45d"],["/archives/2022/05/index.html","9014d3006ce7c0c0de00c4bc3dbd1b1f"],["/archives/2022/06/index.html","0337ba8078f91eaf5f934841955e925a"],["/archives/2022/07/index.html","60bef3f5ca3375f3bb79fd5d7f93b8ce"],["/archives/2022/08/index.html","cb0d2df66603c72b6e6cd868f2e66bd7"],["/archives/2022/09/index.html","3cc48bc530a4e4306a8633c31e02ea6c"],["/archives/2022/10/index.html","1a4e97cbfc4f7a575f9bf21caaff677c"],["/archives/2022/11/index.html","cfae86eec00ecf5cd3e56db9f275a828"],["/archives/2022/12/index.html","3daf6c3e37929746fa1d12f4d7cdffc1"],["/archives/2022/index.html","68af6ed899a0da230607176073fc3afd"],["/archives/2023/01/index.html","49b533935aa24e22f055aee175ab78e6"],["/archives/2023/02/index.html","8baca8194211245b77c7e2aa654c2802"],["/archives/2023/03/index.html","e5ad099de30374cd5f25bd47575f3905"],["/archives/2023/04/index.html","e8f3c692d1de4d42fb647a22d0fef3c3"],["/archives/2023/06/index.html","60e136c31f141b495cf8ddc7d2487f62"],["/archives/2023/07/index.html","fbf2de20057454411b921ac0fef621c9"],["/archives/2023/08/index.html","884d00c01b91736a190895101b5001b8"],["/archives/2023/09/index.html","f0f9c4538aa946afd02c5a43b14fab40"],["/archives/2023/10/index.html","86ded9fc18f6058aad3d224ceeb8e982"],["/archives/2023/11/index.html","734ff98333a0116f0c8640bdd6f2bb6f"],["/archives/2023/12/index.html","86340ef1a7b2f74779075875a816e0bd"],["/archives/2023/index.html","7f32c7beb954b55927750bf3ed3b7bed"],["/archives/index.html","c4eb834b56d5a9f039afbca4589b2d9a"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","59847caf3230963b7326eb2d27f30fcd"],["/categories/CTF/index.html","863db913cceefb94cf4feea7c3ab4e09"],["/categories/PHP伪协议/index.html","86e9bf4c03203d87aa835ee7ea365316"],["/categories/RE/index.html","09a380331d7ddb5b42a56b1c4ff69d96"],["/categories/Web/index.html","43af69b4d1c0d7ae2a2eba8bb2cb3393"],["/categories/awd/index.html","f4c1bf66a04a8e6288a26c304c1fd062"],["/categories/index.html","150ee7602fbf724c6379991a8812d3d3"],["/categories/misc/index.html","2f47c75ccc3e8eced0dd70be60fe2f19"],["/categories/sqlmap/index.html","a3a3c468fef91ad590567074a1f5502b"],["/categories/博客相关问题类/index.html","cb4662ead6250dfe770388085a87342e"],["/categories/局域网攻击/index.html","2d6aa5b058d576a525cf600f177eb62c"],["/categories/心得/index.html","da2940c99c12b74979046e38661f5da9"],["/categories/流量分析/index.html","2b868fb5323c028e4ed19d268da47f68"],["/categories/渗透/index.html","3f4d84644515008f71c48a8906ff6be3"],["/categories/渗透测试/index.html","1781b2845085d808999e4b914d004b19"],["/categories/渗透认知/index.html","0e80d1e2eade2dd7aa962e78a0b61254"],["/categories/漏洞复现/index.html","3ae5944f7d3ef3319aee89ee3671de94"],["/categories/漏洞测试环境搭建/index.html","95b7cf4704924ac02629e788bd10a095"],["/categories/赛后复盘/index.html","e21a15cfcaf70d3b41a87688a1740828"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a2f583ac5ca7db6035b549983e5996c0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","e9ebbf067380ef7a12cd44d296a29dd1"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","31807e4cc14ac7173478a4a659cafef8"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","550874f700546cf9abc8f0f1c9aa1cec"],["/page/10/index.html","a0693ebba3c0290a30a3cdc459e78391"],["/page/11/index.html","d0d1ea922beb027e1135de5e6427f011"],["/page/2/index.html","bd1fdd3d4fbbcf40cea246c6ed1e2561"],["/page/3/index.html","9f8f5d1206a9a075d052ec354d38149f"],["/page/4/index.html","32f2e558a5e6ea2aea07982914828a37"],["/page/5/index.html","9d32a5d215422fa3a89a0c6ced8a3232"],["/page/6/index.html","33df99bd356d6a143396bdb4b9871037"],["/page/7/index.html","73862d0feb1b3dc5bda8b750e5539ca3"],["/page/8/index.html","02604e70f8da2a501ffaadfa04f7d266"],["/page/9/index.html","05165c2c3b1884f9220eab900d859152"],["/sw-register.js","4147ba0c2499125d5a57aac49e32f060"],["/tags/C/index.html","d386c61b550fe4d0e33e318dbd7b1ecb"],["/tags/CTF/index.html","56e7e0fe1ff5b685f455d4ef2e6348cf"],["/tags/HTTP头部信息分析/index.html","312bd5592d17642186503232f71d293b"],["/tags/PHP伪协议/index.html","ef2afa1e43422cbdb1d10eea5788af77"],["/tags/PHP特性/index.html","18870fde2a4dbaf333b3882a02fcefb2"],["/tags/RE/index.html","201545e9d7f689e17ad075a3f2ee4255"],["/tags/SQL/index.html","35e15bfe82980321eac7aa3ab1bfe907"],["/tags/Web/index.html","f10179508986f1810f926ee0cd79b76d"],["/tags/Web工具包/index.html","6f3571ef98b5cce9f380f06b7a6c1ea8"],["/tags/awd/index.html","4cd3f987855b2bf9733d489a64b70cec"],["/tags/ctfshow/index.html","41bb74db05518aa68914bc037b631358"],["/tags/index.html","9c6a55e28c34f0380d51442b9ae7301d"],["/tags/misc/index.html","652f60f2ec2c30dafe6a70283f6f0468"],["/tags/next主题失效/index.html","51eb56c84449201718712fb060764fe6"],["/tags/sqlmap/index.html","cebc0ef8fc7a8a876cd227248088d29a"],["/tags/wp/index.html","ac226e1a5a48508b3aa2ff35ab613fe1"],["/tags/xss/index.html","1d28296d0c2c4b02f5e9c8447b53bea3"],["/tags/xxe/index.html","f6650ca59f8a7df1a5a683fb2d0b3592"],["/tags/不蒜子不显示/index.html","3fa33917771a8d90d495f971a577bd4c"],["/tags/博客/index.html","0c9adbaff3c5d53fa71b8c8f261f5cb6"],["/tags/博客主题优化/index.html","532103e94197289b654e4dc916ee617a"],["/tags/博客死循环框架问题/index.html","418fb7346645942a08c8cbbc07c77e9c"],["/tags/博客部分问题解决方法/index.html","21d4f3f751ba1fc6f4a4d8a8cf8872f4"],["/tags/反序列化/index.html","40d0d3c4e79413dc62fdc112ec284107"],["/tags/命令执行/index.html","8b7f60d70951b7e4236e16eba8898292"],["/tags/局域网攻击/index.html","5f5cb5632bacaa66a351dd8df70692a9"],["/tags/常用指令/index.html","6025a9114017c3df1b8c5f08a414fd6f"],["/tags/心得/index.html","0555014f4338629ef53a38491ddcf0b1"],["/tags/文件上传漏洞/index.html","31a7c90e0359c5a84e488d3cda11cca9"],["/tags/文件包含/index.html","2700d340ddd88497a7b0fc85bf547981"],["/tags/流量分析/index.html","1a0f30362b2df93dfc7a23a2eeea5b7f"],["/tags/渗透/index.html","66b0db39712e4b92cb27c3ab24d8d99a"],["/tags/渗透测试/index.html","0bc8e18bb0a32ba34f32c5b0eadd62c4"],["/tags/漏洞复现/index.html","6a0ad39911da44ce0aeec7c00ca22bf2"],["/tags/留言板/index.html","26c999897984dd2b966211e098ef3a5b"],["/tags/赛后复盘/index.html","9e91efaa8f2b5e28f0d34d92043c78d2"],["/tags/黑盒测试/index.html","05903dca6d23edac8e487f07be2e0a06"]];
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
