/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","b95ee97636a97ee33dd4d8e1134c0b57"],["/2022/01/11/博客制作遇到的问题/index.html","463a64abbcf7382ce12756a9d0f14ec1"],["/2022/01/15/C/index.html","d5f39c48241a3f7140d060ddce881b82"],["/2022/01/18/新版next置换/index.html","b59f6d4268b063a4b7f68c07035601ef"],["/2022/01/19/不蒜子相关问题/index.html","6545e5c6e4e8d12df48acf4c542f2baa"],["/2022/01/19/框架问题/index.html","b90ff3a3a8f78c79667a29513776fa53"],["/2022/01/20/ctf之reverse/index.html","ebe9c694ef64066ecaebddae4207e78b"],["/2022/01/23/misc隐写题目总结/index.html","54c204f94a4e04339f9cc532812fdca9"],["/2022/02/01/684/index.html","83b0f8f011d7506c742dc9bc5b42a0b6"],["/2022/02/03/留言板/index.html","621733ab1275c8bfb1b25f99d0652c93"],["/2022/02/04/SQL简单注入/index.html","1ddb1c6ad87c8cb93252b3b24fc87790"],["/2022/02/05/最全的HTTP头部信息分析/index.html","ed311aa032902d806480e1a2f90a4e7f"],["/2022/02/08/ctfshow文件上传/index.html","9580c136839da4d46e1726c6f7749c7c"],["/2022/02/08/常见密码类型/index.html","68ba80f9045cab9f6cccc650d49d1ad9"],["/2022/02/12/VNCTF2022WP/index.html","67eb45179e4a774322facf6c3ab54602"],["/2022/02/20/ctfshowPHP特性/index.html","6cd41db7a122c318baf4b4a522b53c11"],["/2022/02/25/php伪协议/index.html","8f4f811acbdeeb67ee431b6ab88e34c5"],["/2022/02/26/ctfshow文件包含78-117/index.html","b2b9f37ba18978651d522f437868ace7"],["/2022/03/02/Clash漏洞/index.html","2f1286cb1c8421de05c507e30b8e4aaf"],["/2022/03/11/流量分析之题型解析/index.html","f45919f0ffb17987ced932182be6ca9a"],["/2022/03/15/ctfshow命令执行/index.html","e227a7fff9d1b1bcee7a0611ccff48df"],["/2022/03/22/CGCTF/index.html","070e214562c7ce1665b2222d4022911f"],["/2022/03/24/ctfshowxss/index.html","e669fec8b7b70c388dee5f97d145ce46"],["/2022/04/04/黑盒测试/index.html","1ca68aea05feef011f070eda11a014e7"],["/2022/04/11/nmap/index.html","0d051f95245ca28a435bd44ffe13444e"],["/2022/04/12/渗透流程简要记录/index.html","7d5d8cf27c79fc9e6fa4351aa4266959"],["/2022/04/12/渗透测试之攻破登录页面/index.html","aa4939bba25606f243815bf7aec250ab"],["/2022/04/14/xray扫描器/index.html","8a8b09acb4775aadbec4dfd5b4355998"],["/2022/04/15/ctfshow反序列化/index.html","6f9cb04bcad9d06502f2ade63f5f898a"],["/2022/04/26/渗透测试实战/index.html","7837340ccb9f6df543cc7aaa5855390b"],["/2022/04/28/sqlmap教程/index.html","0d0faf4a81358b99e1f35fcc91cd4fa8"],["/2022/04/30/认知文件上传/index.html","a1539489d5e2ea86d85b119bdd2a49c9"],["/2022/05/03/nahamcon/index.html","f3666d96afa99f2076e66b0ca78c77b4"],["/2022/05/15/awd/index.html","a65335209e80c179ae1a035f72512828"],["/2022/05/22/DASCTF/index.html","62b4d994f1a4e1f435121a50a00ab719"],["/2022/05/27/520/index.html","eac87b93134a24b3f7800dd931100e2c"],["/2022/05/27/ISCC2022/index.html","9a19d9ad3f76942d060aefc243405ab0"],["/2022/06/01/第五届世界智能大会/index.html","215c1b1e08168ccb1d5dd36cea44f8fa"],["/2022/06/04/SEETF/index.html","0577e8599d9e9cc4807c6a718377475b"],["/2022/06/04/bcactf/index.html","a91c4fb6389e1cdc8c53bafcd799fd69"],["/2022/06/05/BSidesSF CTF/index.html","2fe65ced60891fc0341156390c91e1e0"],["/2022/06/07/Docker部署web题目/index.html","795a232f63d9cd229d3f95bac0f7879f"],["/2022/06/09/利用oj搭建C语言考核/index.html","d9303964829e0407ba62396c4a534c1f"],["/2022/06/13/限免题目/index.html","274cfe031b45a0305c3cabfdd648bb57"],["/2022/06/14/钉钉rce/index.html","abc6c165b9106ad47ec705e927491ea0"],["/2022/06/16/内部ctf/index.html","5ce85fe132edab23dff0d86a7c96ddbc"],["/2022/06/25/攻防世界高手区(一)/index.html","a934c93cd109d9229a2585246cfc234d"],["/2022/07/01/两小时AK赛/index.html","414ddacef948805ced6e19e01c10c1aa"],["/2022/07/03/鹏城杯/index.html","8f75bf0f8b1fac37522699eea1129ab7"],["/2022/07/04/XXE/index.html","228fcec0d4e4e50de84d41a996cbc819"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4491fb6d3d3e7832829dad3c8289a1d3"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","3b11843084ae083b8fb8b58c17d44957"],["/2022/07/08/chinaz/index.html","06a8505f7f8d1d08ab2bcb2b69fc795d"],["/2022/07/09/蓝帽杯初赛wp/index.html","1d7a04cb745814fbbcd1e7ce183f01a6"],["/2022/07/17/NepCTF/index.html","b3d536e686f4884d2116ee76c6065377"],["/2022/07/19/2022ImaginaryCTF/index.html","ee674b3d8ef2e7f58768b4ada6f58869"],["/2022/07/20/局域网攻击/index.html","a5546ea68982307bcf768fbe28d17ba8"],["/2022/07/22/2022BDSecCTF/index.html","314253c1711cdd69f57f74eb0719edc2"],["/2022/07/25/DiceCTF @ Hope/index.html","db86d42c6bbc5ac4932d34d1d2e7f8cd"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","ada76fc4f18d991810bf6b9a7876a642"],["/2022/07/31/TFCCTF/index.html","5dff051743e9bd6402ed91176b0b64d8"],["/2022/08/03/NSSCTF/index.html","5e7be5aecac10501db909ade94a3c05d"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","60e40ac91026a332665dcfe3ddd4eec8"],["/2022/08/12/T3N4CI0US CTF/index.html","6eb34d2eb1180014afd7699fa40e270d"],["/2022/08/14/SHELLCTF 2022/index.html","9c0d5cf9422628ae2fb822277876fc55"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","1cafca2a10f98cdf7d35ea46d8751d0c"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","cd5ca7f6bd0784d14bfc67be121c8be7"],["/2022/09/16/柏鹭杯/index.html","0ebe33f6a9f263c5bac6de66784bd250"],["/2022/09/20/HUBUCTF 新生赛/index.html","38475dd7b4fdcac4f27b1aecdbc828b6"],["/2022/09/27/NewStarCTF/index.html","056e86eabb813199d6d566734486572a"],["/2022/09/27/bugku渗透1/index.html","861352f64b4c6ab4f9ed4eaeb878a769"],["/2022/09/29/tp6漏洞/index.html","a090be65408599919458dc2ad7a257c2"],["/2022/10/02/SWPU NSS新生赛/index.html","69f5a02b88f8d31d900ef4b857863cc5"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","bd44544cae298cc0874c3813995e86f6"],["/2022/10/27/Moectf西电CTF新生赛/index.html","a3a404c37761c5948ee6e5dca332dac2"],["/2022/11/02/HNCTF/index.html","e21bd69b4f60bc234705e2a23b8f07d8"],["/2022/11/04/2022工控CTF/index.html","619b96b873128a69789ecf223747b920"],["/2022/11/21/极客大挑战2022/index.html","97e347057d8f789efb9343e5820f1f37"],["/2022/12/05/TUCTF 2022/index.html","8f14e4e932c0b3a83dc53aab6e832308"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","8ac50a12b8152465f7b2779d131ff38b"],["/2022/12/18/金盾2022/index.html","fae6b580b84d5ed3049b23d04adfccfe"],["/2023/01/01/CATCTF/index.html","eeecdd00d95f03d81ca57f99bbc78efc"],["/2023/01/09/RW体验赛/index.html","3896e9193b9b72e5f1c15ef89346b7db"],["/2023/01/10/铁三/index.html","67f31f72deb8761c04370128f7f0b27f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","cb51ed296a44a295c17dfc6053d3a3a0"],["/2023/01/18/山石2022冬令营/index.html","57d7456cb548b0e9e2ca3a4f08b17e07"],["/2023/01/19/SICTF/index.html","7a585d8240a21415664378440cf4cf6e"],["/2023/02/04/2023西湖论剑/index.html","7ea20d1437d153821ec9dc88643be13d"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","b07bc0cb12772c230f1d4531af6b4d52"],["/2023/03/04/公安/index.html","68c650135bce880eff4028ac3f3541f1"],["/2023/03/07/mysql之udf提权/index.html","0da275c1c3ae15064d1dedc59287b8d9"],["/2023/03/07/红日靶场练习/index.html","750f4fc689973e6346b861ae8e88e053"],["/2023/03/27/NKCTF/index.html","f10670264ab17ea0c1ae4966ff09a212"],["/2023/03/31/楚慧杯/index.html","02aed6ab53fa9bfe79352503787f5951"],["/2023/04/23/HDCTF2023/index.html","4b8ebce2b09df11e9918b9c4f73057ee"],["/2023/06/01/2023CISCN初赛/index.html","1eb3f960d511517c3f062b4e25d8d4f6"],["/2023/06/28/2023CISCN[华中决赛]/index.html","5985fb0bc99228b4b9d2a977097feb09"],["/2023/07/10/CyberSecurityRumble Quals/index.html","3a06ed4b642391985d520426071b523e"],["/2023/07/22/2023BDSecCTF/index.html","47d7b6a03e6a5c4e3d57e0752d1c1c26"],["/2023/08/07/SQL手注小记/index.html","90e7004eee581bcc280acaf9e5954cf4"],["/2023/08/27/2023陇剑杯/index.html","a189600b864893e49c7ec88d9e7244e0"],["/2023/09/17/2023蓝帽杯半决赛/index.html","3c381a2bdb4282de063b4d7b0b524b94"],["/2023/10/23/对于多层代理的研究/index.html","eee175f43008362c342ffb71788cfed3"],["/2023/11/25/金盾2023/index.html","9e4d917ce9d85200d82eafa3ee1a6934"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","555065a4f72626ad0fbc91b8ec28bbd5"],["/2023/12/18/2023强网杯线上赛/index.html","bf65a222f1a028b93c5bd477031b290f"],["/2024/01/08/基础ROP/index.html","bbe0f6fe9a1ef3fad803d83cc309d9c5"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","983354a0fc04d445263ec06d46b9916d"],["/2024/02/13/打靶-Tr0ll/index.html","2aa50fa1ec9a45c76711a1b123d27d0d"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","ccaf3d889bdacb49051458ec2bce48ee"],["/about/index.html","9008b61f856772f83ce29683bf680f49"],["/archives/2022/01/index.html","22d32926c7a30793b5a72a4237df5f10"],["/archives/2022/02/index.html","9400b5d57d17a1755d3c8bbd40dde271"],["/archives/2022/03/index.html","2e0ed27f273e6cd819a7ddbd14d2f389"],["/archives/2022/04/index.html","c392622814fb0e8062a14a0caaaad969"],["/archives/2022/05/index.html","82e96b0b348ddb457600d8c3b93c7a99"],["/archives/2022/06/index.html","fee315e6af377255c5947930580e084e"],["/archives/2022/07/index.html","a6a097787f93fa1a45f49da568536c9d"],["/archives/2022/08/index.html","2915e4bf7d198e3f933fe5ba3f91b26c"],["/archives/2022/09/index.html","d0573e3093d3dfa021df3f1c1349f7e9"],["/archives/2022/10/index.html","52a95c2c5163e056235d25b9c8cdbc1c"],["/archives/2022/11/index.html","0dd63f6506026af10b5de2af49e8053c"],["/archives/2022/12/index.html","585d1f9650b810217d30c6b76854e5bc"],["/archives/2022/index.html","c027ddef0cbd60d51076dd8be210240c"],["/archives/2023/01/index.html","e1101d95250f72c32f40665c38191224"],["/archives/2023/02/index.html","f29ce06ef149b374f80ecf80d18b8f09"],["/archives/2023/03/index.html","1fb9dc02b6751ae841a7be4216b30a81"],["/archives/2023/04/index.html","add9a332bd72b1a3f1d3cf670388d881"],["/archives/2023/06/index.html","d0cca6341556ebf9b2258048c3bc5470"],["/archives/2023/07/index.html","cf4f1491dc7ed9fcd59151eed8c9613a"],["/archives/2023/08/index.html","959cd12ebcecdfa4d584cb97b16a4e02"],["/archives/2023/09/index.html","d4804a8c6515a5cba3b960adedc7d265"],["/archives/2023/10/index.html","fb964f2b592eec30db24f18868a65dfb"],["/archives/2023/11/index.html","0cfe932baf84965a9f6d1772f7931afd"],["/archives/2023/12/index.html","7da54070b554a72a911afc203c79055c"],["/archives/2023/index.html","031937d553b65ddc1de8cf798125f34e"],["/archives/2024/01/index.html","83eeb92e765b60f23239f0f37a34b95f"],["/archives/2024/02/index.html","52305f0e819134e94cb8acd7918eb5ba"],["/archives/2024/index.html","3ee9b0588402d2831f12f60eb8405c69"],["/archives/index.html","7d92caa1199ed0e4781c409a46b07dd3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","204c68a990154f96a8147dc7d6d71c9b"],["/categories/CTF/index.html","6c754be4ba25fd7e307f84f1492aa59f"],["/categories/PHP伪协议/index.html","be14cfd0424f492fd52bb7ab9466f75a"],["/categories/PWN/index.html","0066aa5ca7bf265ab9ae76c2d210a3bc"],["/categories/RE/index.html","cee15da3f0e59c18f8f3ee3ad0b4df9c"],["/categories/Web/index.html","2083c65867036d717dbd4c2438b0898e"],["/categories/awd/index.html","1ec86fb70ca0e064f9d752a8362a49c8"],["/categories/index.html","6b6fc605cc5a5dfcd46891643dc0258f"],["/categories/misc/index.html","56c944b9e3bd106e7a1b4f5792b12991"],["/categories/sqlmap/index.html","7de2c2c4f807d335f2c8a4ad47ae6296"],["/categories/博客相关问题类/index.html","581625c116b9719c5aa3c97d23644947"],["/categories/局域网攻击/index.html","7c7ab08f7706d3d4578bb1da82458a66"],["/categories/心得/index.html","eb4294a6033543f23bcc895cc54d226a"],["/categories/流量分析/index.html","885a10e2be75f60a8dfb636a9d37b2f1"],["/categories/渗透/index.html","e9d7130b0a55b6c7925c3ed684cd2c89"],["/categories/渗透测试/index.html","9a0af843c4be0d2e6aa1cd11c0544494"],["/categories/渗透认知/index.html","5bf2dc2b93cbaaeb2bc2bf648eca80a0"],["/categories/漏洞复现/index.html","8154beed6a2f52074a1f9c8206f09af3"],["/categories/漏洞测试环境搭建/index.html","86850dd974898769a7d9bf4dce2c7ed4"],["/categories/赛后复盘/index.html","f644d2c648bcc90a2872d98081752166"],["/categories/靶场训练/index.html","894cb8d79360597540cd579563d325b6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d6349464d0a94670207a97b2e0e7e87d"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","a434e92a85252abcc92ab65674552dac"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","14784e337ef88430ebc5e56fc04c8834"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","877436126192be3e480c7733312a1162"],["/page/10/index.html","98dac203a47ae481122268941b6f53b9"],["/page/11/index.html","e5297d328e67ef5811ee5cf659386c16"],["/page/2/index.html","6a27139779b775eb5d76ada1bef06c6d"],["/page/3/index.html","6056288521a84649361b2ec71652b95a"],["/page/4/index.html","2442647c5a0353c5d0e3bc617ba7ef81"],["/page/5/index.html","4944fda2059d73d0583add4a285aeaff"],["/page/6/index.html","5ea8dfcede4f38172e656b906c264360"],["/page/7/index.html","b36b93732ea34f937bba78ffd49ac680"],["/page/8/index.html","91b9784615f5ab94fee526befefd4b9c"],["/page/9/index.html","00c9e857269e0fd18259517f0aad1b29"],["/sw-register.js","4d80372172fb90efce4054ba7470d335"],["/tags/C/index.html","a4206f2ebd634e94b03d5cf512fa7919"],["/tags/CTF/index.html","4536c40353abba4181a4724cdf19245c"],["/tags/HTTP头部信息分析/index.html","f612ae1386429fef04ee240cc3cb2231"],["/tags/PHP伪协议/index.html","48fc9a1c5dc47f723af707a0ad3816ce"],["/tags/PHP特性/index.html","60cbb3dab106dd5691005a304fd9c318"],["/tags/PWN/index.html","dcb9f1c5bfdfd7c027e535ca13ffa6f9"],["/tags/RE/index.html","1ac2e47041e602217c49ef726e1b1a94"],["/tags/SQL/index.html","537508a0aa29d2c21dbca9385f1d6003"],["/tags/Web/index.html","831b44a2bb7e3c47309a1eb19bac9d0d"],["/tags/Web工具包/index.html","e72b5051e4ee0fbbc9da089bab925aa1"],["/tags/awd/index.html","1a1b637ab1bd28a16b2c92cce7800e0f"],["/tags/ctfshow/index.html","858aa089c1d8142d4b774d256ff81faa"],["/tags/index.html","1a2056223b8fbbe08f7b48cb9f21b460"],["/tags/misc/index.html","479b2cbb04c6ea0020b70b8348ca0291"],["/tags/next主题失效/index.html","17dc2e17ace1cd7d760eccb534038a33"],["/tags/sqlmap/index.html","4fc95995326ba6438e031ce9ab342d31"],["/tags/wp/index.html","2da9276d7170b611afdea02cb30fd8c0"],["/tags/xss/index.html","067a5540b9226eeba880485f7573ea4a"],["/tags/xxe/index.html","4d642aad059c9a1ee9e968de37bc3030"],["/tags/不蒜子不显示/index.html","135770095957b5165247f971e5c094a0"],["/tags/博客/index.html","d869573d5eae65b563bd3c7a5dadc2e4"],["/tags/博客主题优化/index.html","eb7260cc6ec5ae6d2219ec29c548e926"],["/tags/博客死循环框架问题/index.html","d06aa8ac66066519fef618cb1a06ea6c"],["/tags/博客部分问题解决方法/index.html","e267787f72947d6514c0af9523836ae9"],["/tags/反序列化/index.html","936797935dd5ec47be3b6cdc48b0367a"],["/tags/命令执行/index.html","d2d8f7e240644e0db431d760d89bbc1f"],["/tags/局域网攻击/index.html","c7bbb242711569c49cf4eaae40249ed0"],["/tags/常用指令/index.html","6bef8693b3bdf2f95684f8f7036c418b"],["/tags/心得/index.html","2592a11a90b9c47c9eea6b2a00d66e48"],["/tags/文件上传漏洞/index.html","05aec1b47b82130913fe62a331f3ad93"],["/tags/文件包含/index.html","3d7808c29f28ec0cab869985a42bca5c"],["/tags/流量分析/index.html","e2db45f63836ce3aa44082f0b1ca2ed5"],["/tags/渗透/index.html","18909508aa9e471d46e624074ab1fc48"],["/tags/渗透测试/index.html","d80b5f69960999d7cf743e5880a90c63"],["/tags/漏洞复现/index.html","a9e61a52dab7352804a2c195a5daf12d"],["/tags/留言板/index.html","a9ab8d12b18c4759c9e6879230cb3a59"],["/tags/赛后复盘/index.html","97a72549a3ef31a9210017eb9ead1b4d"],["/tags/靶场训练/index.html","e3829a24e5408db37a7c88092dc5e4f7"],["/tags/黑盒测试/index.html","1cd78e44db32288b697912f6fb98b90d"]];
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
