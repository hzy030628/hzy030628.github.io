/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","67af5b3ebc025b747393827bc7c3bdf2"],["/2022/01/08/ctf之web/index.html","efc2cb712622379a12c30bb20e7631aa"],["/2022/01/11/博客制作遇到的问题/index.html","4444417a1a4179e6fe697f066881f8e7"],["/2022/01/15/C/index.html","8cc4846f73f727711b2a1610f170f5f6"],["/2022/01/18/新版next置换/index.html","e1df6219bff5a21ff15e08b4393628fd"],["/2022/01/19/不蒜子相关问题/index.html","1c3a3bdde6719ec13ae38b421c78fb20"],["/2022/01/19/框架问题/index.html","fe007af884572d4fd02d3040b906d909"],["/2022/01/20/ctf之reverse/index.html","2cff8df1f67b6d9f6074c4f1bd4a4803"],["/2022/01/23/misc部分解题软件命令记录/index.html","a744b8b1145c9cc6b22f0660108d67c5"],["/2022/02/01/684/index.html","e78fbdca2b4d6e8e988fc2562d38d8d8"],["/2022/02/03/留言板/index.html","cf2a8d5507e235817c68daa1da33b815"],["/2022/02/04/SQL简单注入/index.html","cdfb7cb10dfde11c07b78cdcaa3e1f10"],["/2022/02/05/最全的HTTP头部信息分析/index.html","d147898b5224246a67af361f1df3eb0d"],["/2022/02/08/ctfshow文件上传/index.html","4452d9874d315fe9163d60a70f73d5af"],["/2022/02/08/常见密码类型/index.html","cd5af2eec0b8cb76850bc31f6b01c4be"],["/2022/02/12/VNCTF2022WP/index.html","531106928adde086479375c83f909d54"],["/2022/02/20/ctfshowPHP特性/index.html","078929d36450c859243e30455abc2961"],["/2022/02/25/php伪协议/index.html","63d2d7ea19b32dc0252db99ec5e087da"],["/2022/02/26/ctfshow文件包含78-117/index.html","9b6558fdee3627f106902ec63bb37116"],["/2022/03/02/Clash漏洞/index.html","4e156ce986d889b6981ab26b09cc974f"],["/2022/03/11/流量分析之题型解析/index.html","288fc344f2447e689dd009106f334eaf"],["/2022/03/15/ctfshow命令执行/index.html","98b6a2287081734083390122dbf69771"],["/2022/03/22/CGCTF/index.html","01e25878d8e3bdf95c447561781a781a"],["/2022/03/24/ctfshowxss/index.html","0ea3b27cc64256a995b62a3329aaa35a"],["/2022/04/04/黑盒测试/index.html","a480d17a3816de30d948fd42c5aa8724"],["/2022/04/11/nmap/index.html","1cfae4eea422b74958ad22e997d4171b"],["/2022/04/12/渗透流程简要记录/index.html","d82b030efcbe7a4caca1d31c439c0278"],["/2022/04/12/渗透测试之攻破登录页面/index.html","0a14ac6d5d00097209c5924c6aaacd54"],["/2022/04/14/xray扫描器/index.html","6fc9af4a83c9bc5957749c0c5e32f110"],["/2022/04/15/ctfshow反序列化/index.html","5be1c5a13b7fb4fc988cbc85da785104"],["/2022/04/26/渗透测试实战/index.html","666814b0f14fbc8cd4d4d549c5d99fa4"],["/2022/04/28/sqlmap教程/index.html","f9f02ae6b3613b3169ab1f3d07b9c094"],["/2022/04/30/认知文件上传/index.html","60f704d8236ba9aac82135775cc705b6"],["/2022/05/03/nahamcon/index.html","45817fa8ac2e2b25595ecff187b9d4ef"],["/2022/05/15/awd/index.html","af8cf00881700819c04718808ba7ef0f"],["/2022/05/22/DASCTF/index.html","9bbf9dac691cb63f7f8c3e21cc4203b2"],["/2022/05/27/520/index.html","183daf41ff5bae1a75936f73cefe7b7d"],["/2022/05/27/ISCC2022/index.html","df20fdb027d82dd8c294f275b93a79c5"],["/2022/06/01/第五届世界智能大会/index.html","ccb637611d12024883a65bebc1ce00d9"],["/2022/06/04/SEETF/index.html","2a21a6dcfc033bdccf075a1aabc2aada"],["/2022/06/04/bcactf/index.html","5034a02bbac438adef4c336b4787d379"],["/2022/06/05/BSidesSF CTF/index.html","8a3e47671fa1dac19e0cffd48c2331cb"],["/2022/06/07/Docker部署web题目/index.html","bd89fb02374a4dd3ae0778747d01de23"],["/2022/06/09/利用oj搭建C语言考核/index.html","727dfd3598689d49623d2de6153f8396"],["/2022/06/13/限免题目/index.html","15c59745db1f13da1b05e95bb42e3f6b"],["/2022/06/14/钉钉rce/index.html","5b6a38e4f8876aa3df6ac4acb171ee9f"],["/2022/06/16/内部ctf/index.html","840cb221ffcc26f48a1392c9950e3fc8"],["/2022/06/25/攻防世界高手区(一)/index.html","b8cb98d54baa4ecf5f1ddcf731180df8"],["/2022/07/01/两小时AK赛/index.html","cd6cceba68f75da4efcd964faf943cc6"],["/2022/07/03/鹏城杯/index.html","ce4850a567b1dcdbd70b69c42f33bb38"],["/2022/07/04/XXE/index.html","b6741093d6d578651bfecf9224675dca"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","71120072ef51432bce84f2934f465e11"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","c19ee0b12da6fd1c61fce9ca11738567"],["/2022/07/08/chinaz/index.html","23d32da2c56df11096be6e9f4361008a"],["/2022/07/09/蓝帽杯初赛wp/index.html","3745ad395656fbc3894c927b2975fd05"],["/2022/07/17/NepCTF/index.html","d081902c73b02c8c623273dda83e2bd9"],["/2022/07/19/2022ImaginaryCTF/index.html","90a78a370d02ad701bd1b883dc72425a"],["/2022/07/20/局域网攻击/index.html","fe94d9513c885e789860449cc7f620e1"],["/2022/07/22/2022BDSecCTF/index.html","4eaf4521bafe63ebd8f74fabf557a384"],["/2022/07/25/DiceCTF @ Hope/index.html","3d78b83a080e929c39705394af28b223"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","91c995b1e03e2c45d17a775f23cda21c"],["/2022/07/31/TFCCTF/index.html","6289c73265d5bf596e9b1107e561fdf5"],["/2022/08/03/NSSCTF/index.html","f64d7139d1b6b398e987713f722ef92c"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","c72d790a993a32c94ce057791f04a8eb"],["/2022/08/12/T3N4CI0US CTF/index.html","eeff2a8c9c699c15d15af175824e8b68"],["/2022/08/14/SHELLCTF 2022/index.html","30ad44923621641abc5e827d9a8ec4a1"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","85fd68ff818b9522419726fdde834875"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","dbf7f0786a8f7df7218f2c09a4c8ab9c"],["/2022/09/16/柏鹭杯/index.html","c95aaa6b7c9b63bdd0cc6506231301b2"],["/2022/09/20/HUBUCTF 新生赛/index.html","c2382c479f03c1b695e7ab688182cb7e"],["/2022/09/27/NewStarCTF/index.html","a6959a45a4af33c39efb1bc2ca9f5b19"],["/2022/09/27/bugku渗透1/index.html","0700bb65e1174382f245133a9eba741b"],["/2022/09/29/tp6漏洞/index.html","10fc8054c90af43466987ee64580fc9a"],["/2022/10/02/SWPU NSS新生赛/index.html","3d17a2902b76660d01a5b4fdcc973f67"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","b195ad7a3febf5b9a22d61b3f1a61863"],["/2022/10/27/Moectf西电CTF新生赛/index.html","63e2430ccb86c42376405ca2dacfde68"],["/2022/11/02/HNCTF/index.html","d5a4c9f0ce0e2ffca1cc6842f3d51f81"],["/2022/11/04/2022工控CTF/index.html","f9918167c86225918675507dac627ba9"],["/2022/11/21/极客大挑战2022/index.html","352341b2a454eb903e46995959394e98"],["/2022/12/05/TUCTF 2022/index.html","2c1586173429ae4c0045e0c53a96bed0"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","343ed9026febaa7ba03d865e0b4cb3a4"],["/2022/12/18/金盾2022/index.html","a29d33e182519f3f0f5bea8e5bdc8f43"],["/2023/01/01/CATCTF/index.html","bb6bbe56d5c8f10ced58942e3ae30b76"],["/2023/01/09/RW体验赛/index.html","63c3966d5f028f8b117b34363b5cf2de"],["/2023/01/10/铁三/index.html","dc11e13b7de865621d81173bde9fca3d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","000f5121ad18cf7b0c0f8efab4daec8a"],["/2023/01/18/山石2022冬令营/index.html","49f2ae43a3322c41b690facb0eb6fa5b"],["/2023/01/19/SICTF/index.html","76f788091d3546b10ae454c27764ffbc"],["/2023/02/04/2023西湖论剑/index.html","d27bcb9d2fd2d0198c2baf357b6d8578"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","9a8e3c456eca1311bbd3fce22fb12364"],["/2023/03/04/公安/index.html","4f67cb0c39e88568a5fd60b1289557c1"],["/2023/03/07/mysql之udf提权/index.html","eec32f59e2089254d4cb4512ad806445"],["/2023/03/07/红日靶场练习/index.html","36bf9b95e18c7052351e947fd81820cf"],["/2023/03/27/NKCTF/index.html","98c832b0db6ccd334e746e9a14c1b3d6"],["/2023/03/31/楚慧杯/index.html","c4caa1a0a4fa39d13283aebe0e341583"],["/2023/04/23/HDCTF2023/index.html","411d54c52b5adc621b1d44cbf331d14d"],["/2023/06/01/2023CISCN初赛/index.html","96adbe7f8d8f53bc29804566b61abde3"],["/2023/06/28/2023CISCN[华中决赛]/index.html","22988d496c78ffb9603520e66c22e3c5"],["/2023/07/10/CyberSecurityRumble Quals/index.html","9f6561799d199c8015ed0d439d79bd66"],["/2023/07/22/2023BDSecCTF/index.html","52709dce1e70d49366142eca6f730c46"],["/2023/07/24/2023ImaginaryCTF/index.html","c1a74976b4415ec89ee95a2834637146"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","12b8f944b8e5df0c386a43609da90f8b"],["/about/index.html","586226fac0acb0125912202dfbff6cf9"],["/archives/2021/12/index.html","a0ac8080d5f44e00c5395855be171813"],["/archives/2021/index.html","ff6943d97f8d1f1f67ec7dac81e8392b"],["/archives/2022/01/index.html","efe725ff9eecb59082eacf3b322ad676"],["/archives/2022/02/index.html","2799d66e961f139d73a306b46f9862a0"],["/archives/2022/03/index.html","87731e8ca2fe98329f468006c7e72ee4"],["/archives/2022/04/index.html","4798bb39c614f8e65422c4d22b9dd57c"],["/archives/2022/05/index.html","def284f1690fd2c8b59560c21824f82e"],["/archives/2022/06/index.html","6770602214d85a5d6158e8d9dae0c48a"],["/archives/2022/07/index.html","27e0cbe8a80c141c8f126ab51e8c386d"],["/archives/2022/08/index.html","2a168a5185635393c316f57577ad3f55"],["/archives/2022/09/index.html","78615de74d4ca99fc8f2180f36cdea79"],["/archives/2022/10/index.html","c4113850c1dad8542e20bd5bc693a19c"],["/archives/2022/11/index.html","4c706be7fb85bb2aed2a52d2e63765ac"],["/archives/2022/12/index.html","0e68749c1abb48109fc091e8e46466ac"],["/archives/2022/index.html","39f8a2497a5ac663a06ef3727c92ee36"],["/archives/2023/01/index.html","202d46e6fd86f7146c7f35da6adb538c"],["/archives/2023/02/index.html","e3e0a6936dabd2570c35f50c0728333f"],["/archives/2023/03/index.html","26fcf5ed38ad97b8f6716ce0c29ccf78"],["/archives/2023/04/index.html","0fcece72099d1d8c5452a240336dfd88"],["/archives/2023/06/index.html","909499dd77ebbf3937bff9834404bc25"],["/archives/2023/07/index.html","c8f6b043b18ac44e104fa81f61641bc6"],["/archives/2023/index.html","4e6aae6cd53bbe3507b279a9aba44c81"],["/archives/index.html","32351c1f5d3158f4875439787edf4f76"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","18daa3f813e931a838734664a106c2a4"],["/categories/CTF/index.html","1705d27e5e9f5193b2ba73e10731b1ed"],["/categories/PHP伪协议/index.html","3640b2308e827f61103391bd1199d07a"],["/categories/RE/index.html","93eff72d8bb9938f8d7f70bcf0d225fb"],["/categories/Web/index.html","e09ef702533b9eb920a99b8321118f7a"],["/categories/awd/index.html","7443dd08ea9d487381800557a9a87580"],["/categories/index.html","d822b89370de727d1304f193cae71622"],["/categories/misc/index.html","7b499310696930eef3e9fe75943dea23"],["/categories/sqlmap/index.html","761a6c0202391d1759452fa8ee863d61"],["/categories/博客相关问题类/index.html","07c341c27cdcaee262b73bcf473ac8be"],["/categories/局域网攻击/index.html","aa55d68c9bf98ccbe6376408b42185bd"],["/categories/心得/index.html","61374f4340ebf800a38351368ce0ac7f"],["/categories/流量分析/index.html","4286234625a90dbdb1ae85c5568cd4b0"],["/categories/渗透/index.html","5599ff2d13db4d78a949f78f215774b4"],["/categories/渗透测试/index.html","aab0c82720c6d9aaf1dc28555ef3b872"],["/categories/渗透认知/index.html","a61fca0b280f97c396ad0ed800e19570"],["/categories/漏洞复现/index.html","0f3a648317be808b58e760e4767d5658"],["/categories/漏洞测试环境搭建/index.html","8a5836837c34b65aca66e0552bc7b825"],["/categories/赛后复盘/index.html","bd4a33a8cb62c1d8009606d1c950a65f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","dd7c70a9e11367e040af99638ad20e2d"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","fb2e81132297a3e45758ae8e05250814"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d07324fc9b651091b25cb2bfec793d5f"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","7c2a4bdee8af68c3431bd3a3527dcdb0"],["/page/10/index.html","d5ea51ea905b8acb403332703c09e1d4"],["/page/11/index.html","5c4eb79fb4069fad9ffc7a5caacdb3a9"],["/page/2/index.html","6ef6d34a0b765de0b5bb6b246f9c7bf3"],["/page/3/index.html","9646808648f1b2a4c2b3fe157ca8b186"],["/page/4/index.html","3d9d4c158092e7932fbca7f25b93a555"],["/page/5/index.html","9ee4bea205dd26518a7273a0f78d40e6"],["/page/6/index.html","694f0e1b520b445cf8ab1f9bf00a9e29"],["/page/7/index.html","a0e191fc64338f860a74e6334bc5945b"],["/page/8/index.html","f64ce6969cff342012d28cddd619c3e1"],["/page/9/index.html","04317fe3815fb023d289c4aa362d708d"],["/sw-register.js","d875d05da2fe00e5d4c3023500255310"],["/tags/C/index.html","4ce1ae58ff8817ee72a26cb28869a42c"],["/tags/CTF/index.html","1e77982241b931e04880aceeebf868dc"],["/tags/HTTP头部信息分析/index.html","03a21fa2c585872387cff258a6086f61"],["/tags/PHP伪协议/index.html","1c861d2ea1c155526c9bd5a5c84ef11d"],["/tags/PHP特性/index.html","974a7ba978a07e20789ab693c525f417"],["/tags/RE/index.html","57d826e184557f3cd0fe9b6694b4e451"],["/tags/SQL/index.html","3ebd8d2da7e80ffde8fa5198b1230e7f"],["/tags/Web/index.html","fb08a67314aa8b739d102cba4643c234"],["/tags/Web工具包/index.html","fcd926bd0eeab0bc2ba474246b085e49"],["/tags/awd/index.html","2aa84a7bc27035e1c775dfdece2cc94e"],["/tags/bugctf/index.html","e41e4f46c9215c2c86958b97a3b0875d"],["/tags/ctfshow/index.html","89d88fb80e95c92b6bbfec770c0f3446"],["/tags/index.html","4353dcc339e4b9bfb386f975fe8ed0f8"],["/tags/misc/index.html","84530e15776eb50f281cd8a01f0ec7dd"],["/tags/next主题失效/index.html","1f858976cd1a846ec4a1272a4d07ab88"],["/tags/sqlmap/index.html","125ebbf0b43f2b94ffb1beb867649754"],["/tags/wp/index.html","693a3dfda8639e3d0eb33ddaa1e0a02c"],["/tags/xss/index.html","1644c48964b9c829f533477f64c707da"],["/tags/xxe/index.html","5a83b7af8fe8708a1e420fae0cadf723"],["/tags/不蒜子不显示/index.html","3ec14f454f483dc2d15938b7f6dbc59f"],["/tags/博客/index.html","ea0b9809e6438eed1145c1ad067b2cca"],["/tags/博客主题优化/index.html","c3fb4b4cb14d675d7f15a1585a89718f"],["/tags/博客死循环框架问题/index.html","1e2292698724f88dffa260bd39660547"],["/tags/博客部分问题解决方法/index.html","4214994ccaec47aeb47212ec1902a6ee"],["/tags/反序列化/index.html","15c3c8aec9b022639367ef5c3f1028a1"],["/tags/命令执行/index.html","e5b7e1f2905347d1a4d07f9a4acbd34b"],["/tags/局域网攻击/index.html","e1e17cd9d67c823bcc34fe983d43e63d"],["/tags/常用指令/index.html","953a82f49b2ba2b5ca3772a69deb2c4d"],["/tags/心得/index.html","6afa44602099a3bfcb4e67b17c9e8420"],["/tags/文件上传漏洞/index.html","e9394aed26a1455cd301754cd95e322d"],["/tags/文件包含/index.html","4c84958b7e07517a0ddcfac4e5fa820f"],["/tags/流量分析/index.html","a4f608be8ae0ecfdc0ab7466b42b1c36"],["/tags/渗透/index.html","7bd53befd508e968a5ad343d4443ba29"],["/tags/渗透测试/index.html","6c76e433ccd4f81e94d32a8e536578a3"],["/tags/漏洞复现/index.html","5d6a5c00c5b048d50396ec1869699eed"],["/tags/留言板/index.html","871fdc610f511de4417ee2978359a49e"],["/tags/赛后复盘/index.html","d1ca35034efa4420269d25ff2caa2cde"],["/tags/黑盒测试/index.html","1cd22c1b7970de13dcafc4dc7c68b77d"]];
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
