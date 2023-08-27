/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","8c95acac6e368ecbb84ccfe65a53ddfe"],["/2022/01/08/ctf之web/index.html","c394a2740269346491ff5f6ced27411f"],["/2022/01/11/博客制作遇到的问题/index.html","cbb57b1685a17b0970b6ecd1a15569ee"],["/2022/01/15/C/index.html","bab988ff301d78a0b2f592905ba5470c"],["/2022/01/18/新版next置换/index.html","da2540205fe825624ab1ca8c2c2d4c0b"],["/2022/01/19/不蒜子相关问题/index.html","b95d53e530b24c775fbc5058136bdc2e"],["/2022/01/19/框架问题/index.html","3f12d07718958a5dffcc143b6d9050a9"],["/2022/01/20/ctf之reverse/index.html","00adb92e663457ad270e88addde4baba"],["/2022/01/23/misc部分解题软件命令记录/index.html","b2a5b6317262702b7562687d1c137133"],["/2022/02/01/684/index.html","8afed8b3fdb8856b21e34de1dda7f100"],["/2022/02/03/留言板/index.html","c34e22b3bd0ff9e4fb08d46a94194f60"],["/2022/02/04/SQL简单注入/index.html","22431344408b9e2af9697a98b81d53e9"],["/2022/02/05/最全的HTTP头部信息分析/index.html","b4da2616c3a09ecb613a4656840bac3e"],["/2022/02/08/ctfshow文件上传/index.html","280b2de9ec72c99b846fb51d40183879"],["/2022/02/08/常见密码类型/index.html","2c8975be2fadb9c3fb38c4de68865814"],["/2022/02/12/VNCTF2022WP/index.html","51c1f04da40aaa45bf8df1fac9b34d1d"],["/2022/02/20/ctfshowPHP特性/index.html","85241ef4b0677e568f60bdba50308ca3"],["/2022/02/25/php伪协议/index.html","61a698d34aa62d6b653c42402a2ccc69"],["/2022/02/26/ctfshow文件包含78-117/index.html","c36d28ff6713f17957ba9e0ed34f3d3b"],["/2022/03/02/Clash漏洞/index.html","801df61dca4c8a0e9e1b48341e82c3f8"],["/2022/03/11/流量分析之题型解析/index.html","6f8acd152d55f60dd79a0103f44975ab"],["/2022/03/15/ctfshow命令执行/index.html","834d13f1ed5993ea216895db4460f7ed"],["/2022/03/22/CGCTF/index.html","91da916cbf41b01136ae47c6590ab483"],["/2022/03/24/ctfshowxss/index.html","4f93b69defeced589acc77f975c880c4"],["/2022/04/04/黑盒测试/index.html","e661f03dc2affa91ad3d763396745e58"],["/2022/04/11/nmap/index.html","79906da9795371495a7fbef9d9b452b9"],["/2022/04/12/渗透流程简要记录/index.html","6cc3e6950284bf9b7a4b0b64036fe690"],["/2022/04/12/渗透测试之攻破登录页面/index.html","43d4ceba6b379363d481da2deb0f8385"],["/2022/04/14/xray扫描器/index.html","7afffb5c6d69f416d5b6b2badbe553f8"],["/2022/04/15/ctfshow反序列化/index.html","0bf975f00d32b3a8986b17686c6db03e"],["/2022/04/26/渗透测试实战/index.html","148b5e993451cb4b05868b7d3b946063"],["/2022/04/28/sqlmap教程/index.html","c3250e21bff894ecc629bcee35a45b56"],["/2022/04/30/认知文件上传/index.html","3ad1d02d21da6f2a4507b94ccc9d951d"],["/2022/05/03/nahamcon/index.html","826e7d3389afd0e915d224c335ff10eb"],["/2022/05/15/awd/index.html","a38115e8d146a74cf2fd7e94c23daea3"],["/2022/05/22/DASCTF/index.html","6f4e03fae00ff75b3c495b50b2f5b4fa"],["/2022/05/27/520/index.html","93f2f3f03afa5368c0f37045137aab7a"],["/2022/05/27/ISCC2022/index.html","06827c2074a38fb52d0c0436d62d7c65"],["/2022/06/01/第五届世界智能大会/index.html","d323576a8654be5191d4b66ad05e8496"],["/2022/06/04/SEETF/index.html","c5179819690e23b3abf0b91e813c5c30"],["/2022/06/04/bcactf/index.html","78bef9ce90fa889cb8747e58f08f23b6"],["/2022/06/05/BSidesSF CTF/index.html","fe7a9c2ca83905c566ff1cc216dc3a00"],["/2022/06/07/Docker部署web题目/index.html","473fcd61fd79be3606cce86937bcde5c"],["/2022/06/09/利用oj搭建C语言考核/index.html","533b5b4fd0d858390c3d3595115859e4"],["/2022/06/13/限免题目/index.html","0cb3a886cc60423a010e775569efbb4f"],["/2022/06/14/钉钉rce/index.html","acd3b1d3be57afb138427a2af1d2920b"],["/2022/06/16/内部ctf/index.html","2ed42cad41e445d29a9942e20901a37f"],["/2022/06/25/攻防世界高手区(一)/index.html","f4bf933e7aa1d58c8fd0bd8a691dbba3"],["/2022/07/01/两小时AK赛/index.html","9c9973da6eba470ad1753d83f8ecfb95"],["/2022/07/03/鹏城杯/index.html","1ae63cc6f65f71510cf758a213ea3892"],["/2022/07/04/XXE/index.html","06915dcd538b8aac2d227af89dd8b573"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","b5abd019044fc2f95c2e2749aa1bf141"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","2f1e2a6190487f17d7fbedb5ac0d39b4"],["/2022/07/08/chinaz/index.html","0a43b6517f70dcd0ef4d4a75d67d1677"],["/2022/07/09/蓝帽杯初赛wp/index.html","2b14419743c91112910dea7eb6dc42b1"],["/2022/07/17/NepCTF/index.html","45c16a39e46881f76ac01290426f74db"],["/2022/07/19/2022ImaginaryCTF/index.html","37068dbd1a4b9f0ddbdc6d7650538078"],["/2022/07/20/局域网攻击/index.html","497f26d4fc1658b9fae10ea644210ba5"],["/2022/07/22/2022BDSecCTF/index.html","d338784d2d46e085dbd6f7dc5ae03f51"],["/2022/07/25/DiceCTF @ Hope/index.html","4f006060bc39d3a5534588cc2093e1b6"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","6febc88c7af9f3bb9143724e3a3d1802"],["/2022/07/31/TFCCTF/index.html","9e3b9e58bd8833ea310704b13c2e58f7"],["/2022/08/03/NSSCTF/index.html","02fe9f4e5f4eda89b8ad002bf7e55837"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","333c7c07213fbe158057ff3364b7cb2d"],["/2022/08/12/T3N4CI0US CTF/index.html","f70aeca425394b5724813cea75e57132"],["/2022/08/14/SHELLCTF 2022/index.html","e7469ca024c9e22dffd4225a5e18373d"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7de0527af12b627e5d7a92e624343047"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","530e736e5cb6690e014ad390ab9ea9e6"],["/2022/09/16/柏鹭杯/index.html","9e9dad5d6bba2ab9ae950c2e27855dd3"],["/2022/09/20/HUBUCTF 新生赛/index.html","eebed4bcec621adfb62b64d28c7f3271"],["/2022/09/27/NewStarCTF/index.html","e5531dcca210b6f91ccc182744755a9b"],["/2022/09/27/bugku渗透1/index.html","f5adbbcd262e1e060e8548eff137d569"],["/2022/09/29/tp6漏洞/index.html","ee229c265ef3fb9a8aff42f7c94aca4e"],["/2022/10/02/SWPU NSS新生赛/index.html","41b15ec7cfba6d4428a8dea127a37fcd"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","9878ec4e565bafa224b8a63ed9824334"],["/2022/10/27/Moectf西电CTF新生赛/index.html","e22afe18cb5c21df093809aa541c69ed"],["/2022/11/02/HNCTF/index.html","2e0bfcc01ac4a1990a736e79331e6666"],["/2022/11/04/2022工控CTF/index.html","be7a36145e950430e8bad46574af7040"],["/2022/11/21/极客大挑战2022/index.html","c2063e3fa181928a01c83e0f42eb5052"],["/2022/12/05/TUCTF 2022/index.html","8efafcd0532e0582c84e1df5911272d1"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","7ef05f20bec7025e3753721fc3b2889f"],["/2022/12/18/金盾2022/index.html","76efd22d56dd83c42f3d9466b29fa0c5"],["/2023/01/01/CATCTF/index.html","e0a11c74d67d678fe21721f98d88d7b5"],["/2023/01/09/RW体验赛/index.html","00bb62920e1216f37e08f964ce54a7d3"],["/2023/01/10/铁三/index.html","cb44e5fb240396d496d6f4850560e5c6"],["/2023/01/16/Ugra CTF Quals 2023/index.html","43ffeb569ff7d950f5cc0520f2a65871"],["/2023/01/18/山石2022冬令营/index.html","4e6187c1497af7003f46851d4a2780a1"],["/2023/01/19/SICTF/index.html","0f4fdb2232e00ebc6aa39f0fb3ec679c"],["/2023/02/04/2023西湖论剑/index.html","885f02461b8e78573f5f705474560102"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","71b9dd60ae044ad68d483e057747ccbf"],["/2023/03/04/公安/index.html","51fb99a21343c412df7b941aab8fa910"],["/2023/03/07/mysql之udf提权/index.html","191099f0f12fd41130c9ecabeec94cbf"],["/2023/03/07/红日靶场练习/index.html","6cab3f19647a61a623c39163b32b6a4c"],["/2023/03/27/NKCTF/index.html","ed665ec94b3f289f271bbb46e010caf6"],["/2023/03/31/楚慧杯/index.html","85ebf06002add625989baa49fc960834"],["/2023/04/23/HDCTF2023/index.html","1e2108c3c8a68047831d32de8ec8e5c5"],["/2023/06/01/2023CISCN初赛/index.html","d498034375636496e4fb22138309e3ca"],["/2023/06/28/2023CISCN[华中决赛]/index.html","3515d2d8412cf76b3fa7be074d4f2f55"],["/2023/07/10/CyberSecurityRumble Quals/index.html","0ac0e681afa899ac9611abdeb443cc7c"],["/2023/07/22/2023BDSecCTF/index.html","77d844ca4308dd41259f21bec7f4cce5"],["/2023/08/07/SQL手注小记/index.html","18321886ee64c76ad76cf8361ad8fb53"],["/2023/08/27/2023陇剑杯/index.html","f18de0ecd99867104721ce5580c1f2ec"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","b217b27d77c63fcacbbee25bcad786db"],["/about/index.html","29afece34447b1b4746c527b23a0ea8d"],["/archives/2021/12/index.html","6e884e8e4e9998abfa558561e6f21137"],["/archives/2021/index.html","ee4ca1f6a0aef8af3c25fa25f295db57"],["/archives/2022/01/index.html","481c9de5bd158766b756da5f5c4ea00d"],["/archives/2022/02/index.html","08e813a7fb91f731bfe460e4cbe5fd4d"],["/archives/2022/03/index.html","abe6a8934545dd7f885f345e1fa56931"],["/archives/2022/04/index.html","500f6674cf958dea1a414d04acff74a4"],["/archives/2022/05/index.html","16652d6b0f710e3aa1933963a37fe5e0"],["/archives/2022/06/index.html","a08546e4cff5cb69e7e3a5e1ceefe651"],["/archives/2022/07/index.html","befa8889b4d850ee80902e351eb53bcd"],["/archives/2022/08/index.html","5e3c5e753e43e1eb3031a4a4babf5e0d"],["/archives/2022/09/index.html","dcd94b74f7e3dc86a220bcafc2134767"],["/archives/2022/10/index.html","44ddc4137bcd22fd8813fa9b9a81d2f1"],["/archives/2022/11/index.html","3c52d62b6a164a09eb218522342351df"],["/archives/2022/12/index.html","ea343107741882c0087d93e863f650f4"],["/archives/2022/index.html","12002af05f59379df3155ce1545540e9"],["/archives/2023/01/index.html","08404dfccc8833b861271c476d66b294"],["/archives/2023/02/index.html","552022051c7d9992ca4d39e11a227560"],["/archives/2023/03/index.html","8d82ac5418e7808a59b09fe2492016d4"],["/archives/2023/04/index.html","f2c670934ad6b8f77241dd6334feddad"],["/archives/2023/06/index.html","c23b5e9c84e06265bf96ef1dbbb2bfb7"],["/archives/2023/07/index.html","2e2f8d42ce9066f5d894ea29e5bee69e"],["/archives/2023/08/index.html","90e6b530bca9785e35da17715840f986"],["/archives/2023/index.html","67815f907fe30075cc5797759e510136"],["/archives/index.html","fbb0ff0a45cf78fc69ddac54d6f991d4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","6ceea245cfc89b54445b2b8aab66f389"],["/categories/CTF/index.html","6205f25525f54441374c05c230d4c9a0"],["/categories/PHP伪协议/index.html","500e941ebaa79b86a956adf884d98908"],["/categories/RE/index.html","85e9a8e8a4e9f428c83766171abaab0c"],["/categories/Web/index.html","bf73203f583b5f93a0feec632617af10"],["/categories/awd/index.html","6543247999f3b7c7dfb0abc6982e648c"],["/categories/index.html","49999901d36dbd1631decc4fa7f159a7"],["/categories/misc/index.html","3488d8bd2ad6415e102a6869f246d911"],["/categories/sqlmap/index.html","2cc4fb6f9cdc9cf6f40e795fb0839aca"],["/categories/博客相关问题类/index.html","a78f4a288077773bb2b32cd32c1c4fdb"],["/categories/局域网攻击/index.html","e8142f961cfb805a955bad1438f8fe87"],["/categories/心得/index.html","8714f165320af1349a35e1032344e131"],["/categories/流量分析/index.html","b50df09e0e20565d713bc22c4e09864c"],["/categories/渗透/index.html","e4a007511cf1ae531017e6f146b324e6"],["/categories/渗透测试/index.html","83b6f6397d1ec3bf2eae4a3bbc28b0dc"],["/categories/渗透认知/index.html","1338deeb48f3808c81ca135db3b1a7a6"],["/categories/漏洞复现/index.html","4d86b30ba13e63c89765a3742f6b2745"],["/categories/漏洞测试环境搭建/index.html","2289d6e40f0ac20c7e8912cc6cc17919"],["/categories/赛后复盘/index.html","fb5a264eeae9c347d871244130b172de"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","511a8c47823c6491f16fe0e14fcb875a"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","71b2064cef87f683b8fcdae437bffec3"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","50d6451cd89961568ed095c2bc60e299"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","047c6338be0103014c1a38deabb1a90f"],["/page/10/index.html","b5fcf351fbf97e217001904a8773e257"],["/page/11/index.html","3dbc0284482108c9433dd3a5f64f164d"],["/page/2/index.html","997d6b555f6dd55fb00a886ecb3428c1"],["/page/3/index.html","c79feb762cf074ac72033997c4045f45"],["/page/4/index.html","4650833242e40b8fa63aa35d5ccfc2bb"],["/page/5/index.html","9e8554e69d2fe08256a6372624e4202c"],["/page/6/index.html","ae370167f8cb296286de64a1e8eadf5b"],["/page/7/index.html","8e0c1be519e34ba1b864d406d3933b2c"],["/page/8/index.html","d40dd74edbb6b596c849f5c766ca4de0"],["/page/9/index.html","a40004aaa16f1eb02a97515064cad580"],["/sw-register.js","038c1281430f97ea19617ff11f50e33c"],["/tags/C/index.html","d90bf9c11683867c4ffac19192ffe9a3"],["/tags/CTF/index.html","77fa178fd4605ef10eb606380b0f375d"],["/tags/HTTP头部信息分析/index.html","4847ff4d04a341cd0713b32f744fabd6"],["/tags/PHP伪协议/index.html","f9fa61040e9b9224f0d4dde0e0972ff8"],["/tags/PHP特性/index.html","4ae727f286995df721dda87d8cca6b1f"],["/tags/RE/index.html","9aa21e5dddfbc5e24a806a5fac339b96"],["/tags/SQL/index.html","f264a2f9ef868025b34aa3979008d9ea"],["/tags/Web/index.html","d1282dc23d32833fcdd8ef02b42e1d2f"],["/tags/Web工具包/index.html","158c00e7a8e845fb4a5f449f49cd6a50"],["/tags/awd/index.html","40b6b112e507701037897efa93ef8ce1"],["/tags/ctfshow/index.html","b322f351288a8d062e20730b25af0757"],["/tags/index.html","679738c3a60fbd1c5f49f5ce9588cb63"],["/tags/misc/index.html","5e6ded8c5f6e298540191cf7036d1059"],["/tags/next主题失效/index.html","d2f53ca7c40d4559f05554cb0296cd28"],["/tags/sqlmap/index.html","3cbdc06c3aaea251030bb7866e9f0130"],["/tags/wp/index.html","aa082cd45216fe35327c40f710b1d1e9"],["/tags/xss/index.html","cb3a03ac216f07fce9ed8c9228ae049e"],["/tags/xxe/index.html","e7a7f0e8f776836d161f4a92a3c4ac3f"],["/tags/不蒜子不显示/index.html","9aa0e5bc0ac68a114f8bcd1f262a3588"],["/tags/博客/index.html","334ba43d6df6e49d778b4531d3df0d8b"],["/tags/博客主题优化/index.html","caf8132badba409e46b0c0f77600dc3c"],["/tags/博客死循环框架问题/index.html","111cfa174cbcf9e3b8f983c67cf649b5"],["/tags/博客部分问题解决方法/index.html","9b89fb6947deb43ea31163bc0739827f"],["/tags/反序列化/index.html","6658b8047580c0f7cdda60f2df80b2e0"],["/tags/命令执行/index.html","79129931cef59322f4525a1410dec194"],["/tags/局域网攻击/index.html","aba0e510c450014a05f7f700e2c6fc37"],["/tags/常用指令/index.html","caea67505af1c506cf7087e8a8b22860"],["/tags/心得/index.html","029ec97f9e392330a0104a7eeafe0ae6"],["/tags/文件上传漏洞/index.html","8e86df9c2ec5337d1d44c308422b25e1"],["/tags/文件包含/index.html","5b4d6d5cd9a37f4938b554eb9c2ec524"],["/tags/流量分析/index.html","88523505ef333be74ef785f33bbc0a7a"],["/tags/渗透/index.html","4760ecea4fa6b7c986685789aad72599"],["/tags/渗透测试/index.html","d4dcc1e085bab48edd018ff8d33c1289"],["/tags/漏洞复现/index.html","184571b539017a75f42db165292777d1"],["/tags/留言板/index.html","26a52ddb46787c8c981967626d285c2b"],["/tags/赛后复盘/index.html","b98c839be9fe96e1dfacf36f3d89bc7a"],["/tags/黑盒测试/index.html","2b9b226dd464df0aa764d96ffee8765c"]];
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
