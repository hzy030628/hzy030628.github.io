/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","41fada26b88348ae66cc38aa70c373e9"],["/2022/01/11/博客制作遇到的问题/index.html","a3f0ffad5da74c038df5d0bc9be65a2f"],["/2022/01/15/C/index.html","db82095bbe75ca2e303c62b2fac218d9"],["/2022/01/18/新版next置换/index.html","b54b578bf956f107eb898e9f6847bb56"],["/2022/01/19/不蒜子相关问题/index.html","1cf938a9fc2d622fcdd943c9edadc553"],["/2022/01/19/框架问题/index.html","65d3f9b7444d00f8e2b2bb428de2053f"],["/2022/01/20/ctf之reverse/index.html","2c6d3851a782a03ccf10ba2180b9655e"],["/2022/01/23/misc隐写题目总结/index.html","110a9fbe3539394725c1ee6657f0d696"],["/2022/02/01/684/index.html","7dbc7ae1cd4304b7a129d3ad090ea4a5"],["/2022/02/03/留言板/index.html","84c1f63654ff34300f9feb805ee16ddf"],["/2022/02/04/SQL简单注入/index.html","c634ed079eb8589d8c82a1371215c7ae"],["/2022/02/05/最全的HTTP头部信息分析/index.html","08eb3b547eebbbde14d5ec575470a4ad"],["/2022/02/08/ctfshow文件上传/index.html","32c1645a7fce965f1574d3d2a1572584"],["/2022/02/08/常见密码类型/index.html","b2b1031982a0147df0d9bb5b49cd62f4"],["/2022/02/12/VNCTF2022WP/index.html","df70cac0327eae63b73244110d9ae9a6"],["/2022/02/20/ctfshowPHP特性/index.html","b50ba0fbe7b13bae39dad453f7bcf6ac"],["/2022/02/25/php伪协议/index.html","73c56bb5093f1c8790adba8e2c6b6f93"],["/2022/02/26/ctfshow文件包含78-117/index.html","c883c06ee184a903bac0d6dd9552d3cd"],["/2022/03/02/Clash漏洞/index.html","5537768f6847e1c4286952e84698f7c7"],["/2022/03/11/流量分析之题型解析/index.html","4581f1e4dccf2aa49f701084ad838771"],["/2022/03/15/ctfshow命令执行/index.html","026c1ef02644c2539f71f8ffb5c8d355"],["/2022/03/22/CGCTF/index.html","ab28608bb551352adbbc2ca72dfb2a99"],["/2022/03/24/ctfshowxss/index.html","2bbbdc397edb4b247536f9aa9b3d9760"],["/2022/04/04/黑盒测试/index.html","5295bf2ec5cdd76a105bcb41e418ede7"],["/2022/04/11/nmap/index.html","e9a0a7fb451cd6efc98ca27bea576e7c"],["/2022/04/12/渗透流程简要记录/index.html","59082919125cb2d08214456540afb1d8"],["/2022/04/12/渗透测试之攻破登录页面/index.html","becf928e5c8822b3a1d0b454d0378e04"],["/2022/04/14/xray扫描器/index.html","1c01317872c44a18902a3d8cebadcd57"],["/2022/04/15/ctfshow反序列化/index.html","32de7037816bdd37f4c2805899dcc574"],["/2022/04/26/渗透测试实战/index.html","03befbe50cd9fa2c629604a9cfec0882"],["/2022/04/28/sqlmap教程/index.html","e09983c4a628d01a0a44ff020457100c"],["/2022/04/30/认知文件上传/index.html","8a9d31fbbacc8460c177684d72c63079"],["/2022/05/03/nahamcon/index.html","db7228a346cd23229c6bba9bf7b8c1b8"],["/2022/05/15/awd/index.html","e14a2005606149ed99f8f2759e647898"],["/2022/05/22/DASCTF/index.html","163eb1d68b53fffe4683c96a6c56b342"],["/2022/05/27/520/index.html","41e1a4fcca62c015f3eb4bc21dd4135c"],["/2022/05/27/ISCC2022/index.html","0d54b78219f7c658b95c322417911dca"],["/2022/06/01/第五届世界智能大会/index.html","a25e8e86d8f2545c250efc7f6681a0d3"],["/2022/06/04/SEETF/index.html","f097e11a4abe804daa356865590768a7"],["/2022/06/04/bcactf/index.html","89167761cae604c809a387478babcd6b"],["/2022/06/05/BSidesSF CTF/index.html","1a220f539e0051bb0d44144ce4e308c0"],["/2022/06/07/Docker部署web题目/index.html","2745565993571024418219125faa3d54"],["/2022/06/09/利用oj搭建C语言考核/index.html","b5f7f5f1c17625bc05d3dc32d3f7ab9f"],["/2022/06/13/限免题目/index.html","60d6fb7ffd24adb26ab8a36c85f434d2"],["/2022/06/14/钉钉rce/index.html","30c48bdf5bdf98991b0522ab908b566f"],["/2022/06/16/内部ctf/index.html","f081e130297e10ddd14759a2792abe9c"],["/2022/06/25/攻防世界高手区(一)/index.html","a3ac31e0b772ade81056ff8c082167a8"],["/2022/07/01/两小时AK赛/index.html","820dd942fc73256212df09eda74abdaf"],["/2022/07/03/鹏城杯/index.html","db58379be5021a2d432fa8169c0c425a"],["/2022/07/04/XXE/index.html","85b8dc1a3deb88abfb1bb0e864fe5cef"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","f49eed6b48215db98a56c70d842915c0"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","b5f9ac1f9ab4269e7f8169e947270c1c"],["/2022/07/08/chinaz/index.html","d6d2179a932af813c4c4f82d1b14dfd7"],["/2022/07/09/蓝帽杯初赛wp/index.html","9041e8e4f0c09a890ff7018c10c30112"],["/2022/07/17/NepCTF/index.html","a492ab7a252c60145e8629c4dfa7d99f"],["/2022/07/19/2022ImaginaryCTF/index.html","52fc28c40a62ba74a8aa6f95057ebbc7"],["/2022/07/20/局域网攻击/index.html","4cb6ee09b31331164e123cc3ed1038fe"],["/2022/07/22/2022BDSecCTF/index.html","df32046f062e9165cc6c1e75455f16ce"],["/2022/07/25/DiceCTF @ Hope/index.html","2a43fd8e26a95e4a236188bebcff8061"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","7c67ea8a083525ec4e2eea9280f59c66"],["/2022/07/31/TFCCTF/index.html","a5bb7c5ed909a82e5a3ee3f3636724bb"],["/2022/08/03/NSSCTF-r4/index.html","cd66a3ad3e49cbdddee947ec9baa426d"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","2d623aef3e6c64bf4266d7958ec1f556"],["/2022/08/12/T3N4CI0US CTF/index.html","211086039ffa04237becad27dc546ed3"],["/2022/08/14/SHELLCTF 2022/index.html","8f7691570b5dfd59b146d20480a57ceb"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","305ebc670a4ba18a54fb4c34043f1793"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","6e7931c590a1b597edf0ea6fb497902c"],["/2022/09/16/柏鹭杯/index.html","275e5248dcec353f47841724c4da0803"],["/2022/09/20/HUBUCTF 新生赛/index.html","0d648419b09c11220de92979c43def5a"],["/2022/09/27/NewStarCTF/index.html","4f5069da4028d1c33a69c46198536212"],["/2022/09/27/打靶-渗透测试1/index.html","4df86842bd5d0aa4b1631831feefc884"],["/2022/09/29/tp6漏洞/index.html","9670db764e023637edf390421e2a3393"],["/2022/10/02/SWPU NSS新生赛/index.html","00a413c59d266b473969677c0aa57c9c"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","747c8dd0154ee11170e0d8c2ac415f25"],["/2022/10/27/Moectf西电CTF新生赛/index.html","9c1e6232fad8c81a2ad5808e06330c4c"],["/2022/11/02/HNCTF/index.html","e250b5ec4a81dc86ea31f1d20651bfe2"],["/2022/11/04/2022工控CTF/index.html","27cea285fe3be3694539e6a3dd204d43"],["/2022/11/21/极客大挑战2022/index.html","99703b30c4f27bfce62b95104bb5963f"],["/2022/12/05/TUCTF 2022/index.html","73d455ff43b647c032e5d9fdfc49b74e"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","fc6c2e6851ce2383b32dfe141de60fee"],["/2022/12/18/金盾2022/index.html","9099c953266f207cb16364c1da0d290b"],["/2023/01/01/CATCTF/index.html","2f6479a27755e40b0cd0176a283ff61e"],["/2023/01/09/RW体验赛/index.html","c982f09cbb560f63ae5d319d08a40c74"],["/2023/01/10/铁三/index.html","86d5272ffca68532a08505ea34de5c1f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","9ce92ab82d01aff51546ec42017f1604"],["/2023/01/18/山石2022冬令营/index.html","6aa1b4d2986940890e8607be27b6e427"],["/2023/01/19/SICTF/index.html","c762622445353bc737ba0bbffe237bb7"],["/2023/02/04/2023西湖论剑/index.html","965e0c5815fbaa5922c1ba7038594b79"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","96eff97f8f28205a051bb9bda913dd67"],["/2023/03/04/公安/index.html","33a435fc0dcef6816fd9afb18d79455d"],["/2023/03/07/mysql之udf提权/index.html","52a0c878374500222e19a322eb332499"],["/2023/03/07/红日靶场练习/index.html","faeef26dafb80e941d2182317d8fd7af"],["/2023/03/27/NKCTF/index.html","4171fe67469d52ef01b10de331522673"],["/2023/03/31/楚慧杯/index.html","305f82e75eae5c72bf54d19beef6471c"],["/2023/04/23/HDCTF2023/index.html","c0ed4c0ea62975078709f5e52308d5fe"],["/2023/06/01/2023CISCN初赛/index.html","b8ecf8730ed34a083dce127d823e5185"],["/2023/06/28/2023CISCN[华中决赛]/index.html","dddef3e9fa4d1a7526bdce44afdcc46b"],["/2023/07/10/CyberSecurityRumble Quals/index.html","dfe0431a8889b9ca75207d911a32feda"],["/2023/07/22/2023BDSecCTF/index.html","34f63e4f7f146a912925547e5bc2ccdb"],["/2023/08/07/SQL手注小记/index.html","5e0ac2246384bd990070942f51725de0"],["/2023/08/27/2023陇剑杯/index.html","fb2b866bc1dd4faa6fca29511eb8cce6"],["/2023/09/17/2023蓝帽杯半决赛/index.html","05f07fa845f86a7caadbe45534d23db8"],["/2023/10/23/对于多层代理的研究/index.html","3656f864d8e3abd5b1cdf46fef57805d"],["/2023/11/25/金盾2023/index.html","dbb11c79e1137bcfc2a3457f572fcb1f"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","ac517509c4425285631d5b0684b2fe87"],["/2023/12/18/2023强网杯线上赛/index.html","7cc00b72052a754363a0e94c40f1559b"],["/2024/01/08/基础ROP/index.html","a17f73e5504bbf1d9cc10809e7dfcb81"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","815119a7b73f0636e50db1d062691f97"],["/2024/02/13/打靶-Tr0ll/index.html","8e807ed3ac454e905bd1f9d5a5be97a3"],["/2024/02/14/NSSCTF-r18/index.html","adefa2f602e14415a6cf199827d5c52c"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","2a99932e80af470ea0382736ace12bc0"],["/2024/02/15/打靶-CFS三层靶机/index.html","100000ff58917e7b9cd99ecc73ef6131"],["/2024/02/15/打靶-应急加固【简单】/index.html","0a11a2afc042682de6da752fe1652b8e"],["/2024/02/17/2024VNCTF-WP/index.html","1e430b2764735846c7128045952df26d"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","18295bdd3c46dd7e11c1e7cb4e5c5636"],["/about/index.html","17b56c659de2f166d6a02dd60b7c2e34"],["/archives/2022/01/index.html","55aa76e27082cda1db086b3a75d26c44"],["/archives/2022/02/index.html","6440c46786c5a99590eb40ed7160a2d8"],["/archives/2022/03/index.html","c855cceff87f19e340f2b5807c923112"],["/archives/2022/04/index.html","48c7c73df41439623e9b82ed94847316"],["/archives/2022/05/index.html","23785f08c05d32c2d0936a5b1d39b887"],["/archives/2022/06/index.html","54622f6eaa7cf04d459a9ed99db9e724"],["/archives/2022/07/index.html","d53a44ecc6ddd1813923fa6121edc95f"],["/archives/2022/08/index.html","7b83801ec604a622a6dc62d26e350ba8"],["/archives/2022/09/index.html","b7f2b64249914a34fd7656ae48417158"],["/archives/2022/10/index.html","45e438644c4149cf6a2d303acc8fff57"],["/archives/2022/11/index.html","aba4e725897b0d5585d68d7d2153af8c"],["/archives/2022/12/index.html","123cc9bff93dc3263a8dadc82abb24c3"],["/archives/2022/index.html","e8197c1405eff87589d5101d99733dfa"],["/archives/2023/01/index.html","dbd6f882906855163ea3073dad94dd27"],["/archives/2023/02/index.html","49cee4bd900e295572c5dba10e2c2c47"],["/archives/2023/03/index.html","20ca2b7c7e0227764b0b70158059c100"],["/archives/2023/04/index.html","3e65c869e22e4f39cf80fbbdeb54f6b9"],["/archives/2023/06/index.html","ad22759a3ffc5a4bc00a92e381350886"],["/archives/2023/07/index.html","23c8f3becadb3ec6596e09813653b031"],["/archives/2023/08/index.html","f87e0066f2da75ee0c4074813daa8b95"],["/archives/2023/09/index.html","49817e180b600cba01bea8df468acbe5"],["/archives/2023/10/index.html","782941aa7761559abe377a653b498878"],["/archives/2023/11/index.html","164ec01f30c507a02cc32c1aefe2fd22"],["/archives/2023/12/index.html","9361c2e0c921e18b59e6e1fb49dd6817"],["/archives/2023/index.html","8c048ab0fbe2592677459976ecaa00c3"],["/archives/2024/01/index.html","70d1cb6beaae87d8de403b8bf37c2816"],["/archives/2024/02/index.html","2afff5b468c409b7df4f071a6d6a7661"],["/archives/2024/index.html","1a8227aa7d7e17176c6bc3fdb89e131c"],["/archives/index.html","f72fbe87736182ca11a6acc7521c2a53"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","94d506e8bcf415fa1f8dd3d74e74041a"],["/categories/CTF/index.html","24037ccd660cf1f6608c362c9c0bde30"],["/categories/PWN/index.html","4291349e9479bb4c4767bf50d8c63b20"],["/categories/RE/index.html","f4207c7996edd524d54e48e97b95435b"],["/categories/Web/index.html","7de5ac317eef48ad6cb0eeebbf03af39"],["/categories/awd/index.html","4534a6e759db71db0c5c54494f591620"],["/categories/index.html","2c5be68260c3ba4c30f4ebf136815737"],["/categories/misc/index.html","6eb835a359c41baea3f97f9748b9cc65"],["/categories/博客相关问题类/index.html","4d326fd9aa7548211647ca581a10d040"],["/categories/局域网攻击/index.html","e13185b46100a429b5bbd0bd92cd9a87"],["/categories/心得/index.html","dc39adbb7ba53a2c39472cbaab2325da"],["/categories/渗透认知/index.html","7fc45f69ef3705795228b252f2f6f8bf"],["/categories/漏洞复现/index.html","f3b93a98df116d34d3d3596279125fea"],["/categories/漏洞测试环境搭建/index.html","6d2efc1beab31dc4ddef713a3510973e"],["/categories/赛后复盘/index.html","9d087bd438f14e87c25296bf48866063"],["/categories/靶场训练/index.html","cc7a09b9c9e361257e7511a6f213688a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","917800ccc984206a4084968ca078cea4"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","90225e1cc23557cfe7e09ea6650a0de1"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","50dbb2707d439fae6648f405e6b1ea99"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","9a3ab2e4c0ad5ccd0f90c3c52c75b325"],["/page/10/index.html","3690b7982cc3b41ce61bb0933ff2ba13"],["/page/11/index.html","ac4b616d47ee111d0bd397725be75e07"],["/page/12/index.html","b071176380388bfddfc541b959509255"],["/page/2/index.html","9d9045127ef208f1df6f1172df8f63f5"],["/page/3/index.html","83c7a87a9495b58e98a4baa1a770237a"],["/page/4/index.html","45341d96a3715dd5cfa38892cc875c26"],["/page/5/index.html","a0b9f38db1738396a31292d4e6e8909e"],["/page/6/index.html","b1d7b55ebb4fc9f0aabdcd41eba7bf3d"],["/page/7/index.html","d8502a8ba724ef87d6bb2137a20dfa34"],["/page/8/index.html","64214cd226d01a3d4b95b44a1b2a3530"],["/page/9/index.html","79d21b086ef59779b20e73a25acb6dae"],["/sw-register.js","5ae303c78478cabb20418437d1433200"],["/tags/C/index.html","8ede11dee8903d12b7158cd0d4327c6c"],["/tags/CTF/index.html","81152ab3c169d3bd3bb2e016e4e9d2be"],["/tags/HTTP头部信息分析/index.html","1c0a1767e31b138738e0e6dbd664e3f2"],["/tags/PHP伪协议/index.html","172689571fe24ac3ca15c637a8d88acc"],["/tags/PHP特性/index.html","639bc7ed20b5e5c9c37b4e5ccdf128c7"],["/tags/PWN/index.html","6886b92956f3bae9265e5358d1b0742f"],["/tags/RE/index.html","e0f13628c3b912c7c366797b49fd6905"],["/tags/SQL/index.html","881fe94860e173d0b2c24ef0cc2f852d"],["/tags/Web/index.html","b12b3ba32f24c114d0c0601f6706d021"],["/tags/Web工具包/index.html","bc4c2384f298a2a5116a76014b2d916f"],["/tags/awd/index.html","f64d0405db7ad36ae371730f580c4808"],["/tags/ctfshow/index.html","9596997cf98dca5094528a10c5b5aa86"],["/tags/index.html","43fddaae16804f51826c118d9da8c90d"],["/tags/misc/index.html","7eaca3d05564c0742b29755ac2220609"],["/tags/next主题失效/index.html","24c9d602868a1b4f3c1d714b83dc7dd2"],["/tags/wp/index.html","88232779d287a4f602fdb5aa149cd597"],["/tags/xss/index.html","e697273cf7b4af76ee4a1639057df585"],["/tags/xxe/index.html","50a4740240a10165719a429ed2be1088"],["/tags/不蒜子不显示/index.html","0d953b9544ef0a192fef2ea87c303358"],["/tags/博客/index.html","9ec7666c7883e2c0d8a72daddfa76934"],["/tags/博客主题优化/index.html","8f6355e17bee3c81d3df4a5b8f9155dd"],["/tags/博客死循环框架问题/index.html","b047102dacddde5f013ddafe4ea1769e"],["/tags/博客部分问题解决方法/index.html","69c9cd83ca7a86d21eca62716e8f0844"],["/tags/反序列化/index.html","ccf774fd407f7cfbfa2822d84ce57ca2"],["/tags/命令执行/index.html","ef49364bd556d994e507c10244c18755"],["/tags/局域网攻击/index.html","3f4872d3f544f2bb132ef6753662e833"],["/tags/常用指令/index.html","e2243f4d6da20589ea0a813d987d6dc3"],["/tags/心得/index.html","c4138cf386669fe8f30d57c082487db1"],["/tags/文件上传漏洞/index.html","f2e061ce2ae7c4e68aee8ab16fe00ad9"],["/tags/文件包含/index.html","2ea9f69aea3d628ce04928380dc22ab4"],["/tags/流量分析/index.html","315501a045887722e6a1e6ec0d25d488"],["/tags/渗透/index.html","d98a2086cb8e6220bf8b36984a907be8"],["/tags/渗透认知/index.html","f389312cbd054c53562e0e3ba0b7ecef"],["/tags/漏洞复现/index.html","846bc34fdbab6d4148cf4d4333481080"],["/tags/留言板/index.html","ea2fc0dbfad4f7189cbf4008ead68b80"],["/tags/赛后复盘/index.html","60b327d6dc1d124c0183c0231efdbaa5"],["/tags/靶场训练/index.html","389f8cae0b841e37efc89ce931de83c8"],["/tags/黑盒测试/index.html","10e43a462106f6221e0d64937c5b406b"]];
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
