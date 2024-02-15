/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","fc2440b4f83c27c2cc8aceba5ef2e08a"],["/2022/01/11/博客制作遇到的问题/index.html","177d7bbb5d519a317cd71525387b87db"],["/2022/01/15/C/index.html","1664bd8d3aab8d49762f0aae2540389c"],["/2022/01/18/新版next置换/index.html","e72eddef4de411ac3d3ff9320fe10938"],["/2022/01/19/不蒜子相关问题/index.html","ee3ab04aeac04fbda9facd7c94a2c7a9"],["/2022/01/19/框架问题/index.html","fa771d2dbe4398719ce9cf066bf1f6be"],["/2022/01/20/ctf之reverse/index.html","3bbe5fc1ae4aa7513b78b1fab1492f14"],["/2022/01/23/misc隐写题目总结/index.html","23af9f965c07e5a98b8d0af176fef3e3"],["/2022/02/01/684/index.html","3c86dfc916a56cdadbe5dba851bef3b7"],["/2022/02/03/留言板/index.html","8e02bc6f4e6c6d38a973b5fc43ef9578"],["/2022/02/04/SQL简单注入/index.html","0157f0783b4639b36d4697fe81481c18"],["/2022/02/05/最全的HTTP头部信息分析/index.html","bb6cf2144a824f70b1dfcaca035a0206"],["/2022/02/08/ctfshow文件上传/index.html","969593727b8894b642d61fc8a3be50b1"],["/2022/02/08/常见密码类型/index.html","a2081faf740b30f978fb11ad36b2a055"],["/2022/02/12/VNCTF2022WP/index.html","ec00f65f08d28ac6daa91daec0903f71"],["/2022/02/20/ctfshowPHP特性/index.html","ef7e4a1251ff2571611314caa815be8d"],["/2022/02/25/php伪协议/index.html","41768f7efeb97c538aa0a3f4d2eca9e7"],["/2022/02/26/ctfshow文件包含78-117/index.html","7f7908e7a7d6fc553fd1129ce069b7b4"],["/2022/03/02/Clash漏洞/index.html","c629c542faf9dbb843ce42d06e52e0d5"],["/2022/03/11/流量分析之题型解析/index.html","24eaedf36e934efbe6ab581952163f83"],["/2022/03/15/ctfshow命令执行/index.html","8e2b9b051a8ab8962d2567fd6e8bc631"],["/2022/03/22/CGCTF/index.html","fafdf0e46318f9e5a7e9a79cc73407e4"],["/2022/03/24/ctfshowxss/index.html","6ae27977daf22e078243fce723fd8796"],["/2022/04/04/黑盒测试/index.html","71ba9ccd7ef4b75391a447fa1863c8b3"],["/2022/04/11/nmap/index.html","74b1105a94c42f29a100ad25576eb930"],["/2022/04/12/渗透流程简要记录/index.html","6df88f2afe972d019afab0ec50007567"],["/2022/04/12/渗透测试之攻破登录页面/index.html","62fc5a242f7849521cdade4b5d779b74"],["/2022/04/14/xray扫描器/index.html","14cec6853f97ab59ce9bd83b198e3679"],["/2022/04/15/ctfshow反序列化/index.html","2629d12ac8aed42da28e8c7be9fd6acf"],["/2022/04/26/渗透测试实战/index.html","2f235e2c332c4266d1bf4bb25a7e462d"],["/2022/04/28/sqlmap教程/index.html","323241ecf710139ca2ee7d617467b157"],["/2022/04/30/认知文件上传/index.html","907bdea7ea42e37a9eb4423241e51482"],["/2022/05/03/nahamcon/index.html","e637916d2ec185865e1cd7e972ef13e1"],["/2022/05/15/awd/index.html","5f71edbf98fc6899ed7b71b813727081"],["/2022/05/22/DASCTF/index.html","4956725f903b63b5022e6852664ac516"],["/2022/05/27/520/index.html","65d3d35b0b5a4d0b4d969e300079bc76"],["/2022/05/27/ISCC2022/index.html","a4f3fb53c0507be6aaa380d18a11eba7"],["/2022/06/01/第五届世界智能大会/index.html","6d61183ab3902095b600f022b2ff57cc"],["/2022/06/04/SEETF/index.html","c284f4a70a58a31daa7f2d6548671547"],["/2022/06/04/bcactf/index.html","a004731208a7ecb099f9e63ae3d06245"],["/2022/06/05/BSidesSF CTF/index.html","7fa0f486e5b23b31229eeeba01ac2a94"],["/2022/06/07/Docker部署web题目/index.html","0624027ca77307fe5ecc4c6ff170c02e"],["/2022/06/09/利用oj搭建C语言考核/index.html","47cd778752d9165448cae433b7b14fad"],["/2022/06/13/限免题目/index.html","bc5427573a0c077fb52256bde0573d30"],["/2022/06/14/钉钉rce/index.html","1fc61290e91be4ec8eacd3f2f6e927e7"],["/2022/06/16/内部ctf/index.html","b6b6b63aac4b1c27c7ba2e551ff63c49"],["/2022/06/25/攻防世界高手区(一)/index.html","af6e6ce1ed1099e71482c73b3c786e2f"],["/2022/07/01/两小时AK赛/index.html","37b1303879a190c2f281442f7b028eb9"],["/2022/07/03/鹏城杯/index.html","a8c453066db54d3f9ad302793a57f798"],["/2022/07/04/XXE/index.html","e2c05dcdc6f6bcee99bca3bd97cef69f"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e71e25d06fcc169af275b0ce6ec83f17"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","96cc0a0fd6cbfa5ceb351c9cd0e50362"],["/2022/07/08/chinaz/index.html","a12c0afb595c9b619d4d03b97809ffa4"],["/2022/07/09/蓝帽杯初赛wp/index.html","961bbc57e3cefbf2ab579e826d8b25e6"],["/2022/07/17/NepCTF/index.html","5462961fa609a29df1d6be3a5d637cb2"],["/2022/07/19/2022ImaginaryCTF/index.html","5078c8fa42923b29e9119a464ed3fc52"],["/2022/07/20/局域网攻击/index.html","28c13fedad3438dcf15c1311409f80e9"],["/2022/07/22/2022BDSecCTF/index.html","beb2e8f5212d1c787e7938fa8918a476"],["/2022/07/25/DiceCTF @ Hope/index.html","8de7d931674cde334f0b3596847e054e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","cbabddd9347d33ec9d1d5bad4df3a443"],["/2022/07/31/TFCCTF/index.html","1a9dd5ab2ed326823d5eba444095b877"],["/2022/08/03/NSSCTF-r4/index.html","9721368e191462bfa737ba78d8969f33"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","15a1dfbf915a2a003cdf20f2fb357c74"],["/2022/08/12/T3N4CI0US CTF/index.html","40ba49f63c89f9a7e233d23aa8366b72"],["/2022/08/14/SHELLCTF 2022/index.html","742d4d212f463624af6f23d3ae39fb56"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","566b88f869bb81995fb0f00bbacb6dd6"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","003e4e4a98fc6ee43b7b5a2b0a43e992"],["/2022/09/16/柏鹭杯/index.html","f529972a8ca830711f7f69c7978cd145"],["/2022/09/20/HUBUCTF 新生赛/index.html","50b6928522a451cb87e109f579197edb"],["/2022/09/27/NewStarCTF/index.html","b80f6e1d47eaf81da307ab69adf92237"],["/2022/09/27/bugku渗透1/index.html","789adf0ccadf4ffac53c3332b9f14533"],["/2022/09/29/tp6漏洞/index.html","d40cee364767893ae91b2bfa5e9149e9"],["/2022/10/02/SWPU NSS新生赛/index.html","0b76ff9ce9d6d39846a79bfe55b12378"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","bf0f316f1dd5cf487c8be3a27620e44f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","6329f3643fbd94620cca2a529a5698d6"],["/2022/11/02/HNCTF/index.html","1768f804d6d2434e2d18171693026204"],["/2022/11/04/2022工控CTF/index.html","95b89c8167ed25b59bed9fac744141b6"],["/2022/11/21/极客大挑战2022/index.html","12272274958c136e935f5a18882f62db"],["/2022/12/05/TUCTF 2022/index.html","fb4440da353bf372dfb23c9759d6663a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","aba30c40d16c8ffed994930e195df9f6"],["/2022/12/18/金盾2022/index.html","65a905ce630b813d9aac78b7295ca8e7"],["/2023/01/01/CATCTF/index.html","c5a55083b45698e46f9fbe7a31c0b67e"],["/2023/01/09/RW体验赛/index.html","f875daa9922c9ea8728b87210c027804"],["/2023/01/10/铁三/index.html","6a138c5b943ca6c05759fb70c4915b6e"],["/2023/01/16/Ugra CTF Quals 2023/index.html","3ed2b48e47dd884353ad85d7ddea8e4a"],["/2023/01/18/山石2022冬令营/index.html","929a986736f2a87135e454bbb4635b53"],["/2023/01/19/SICTF/index.html","e8e01223e02de144ef16f356f0a5a217"],["/2023/02/04/2023西湖论剑/index.html","6e4174272e3a0b614afd8b716710f09b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","5d96ba38aea26268dbe7ae50642b85fa"],["/2023/03/04/公安/index.html","63d456a2b914f512ef8388f37055b77d"],["/2023/03/07/mysql之udf提权/index.html","445fca3b58215a195db7ee8d398aab2a"],["/2023/03/07/红日靶场练习/index.html","051873eb77d5f24b123e97abfdcf2042"],["/2023/03/27/NKCTF/index.html","1a30e7583aa5831667c8f73a45ab21d7"],["/2023/03/31/楚慧杯/index.html","566951cd8cb1890475405084638bd146"],["/2023/04/23/HDCTF2023/index.html","1317a6efbb15c037967d9bc5fe42fdf5"],["/2023/06/01/2023CISCN初赛/index.html","333a6a27aee3660d70cdd3133756de28"],["/2023/06/28/2023CISCN[华中决赛]/index.html","23021ee9ffe162709fe5bf2579ebb716"],["/2023/07/10/CyberSecurityRumble Quals/index.html","02b0fc0c543c33487b7308859210edf5"],["/2023/07/22/2023BDSecCTF/index.html","ff2bcce5627f7a5d2d28bed4cda3f0f8"],["/2023/08/07/SQL手注小记/index.html","ea4345f68c80f9f38ff6c82e48f8fb42"],["/2023/08/27/2023陇剑杯/index.html","6a029755e32088c6d3acc0baa251092d"],["/2023/09/17/2023蓝帽杯半决赛/index.html","5e6d81b72c6bc30e8f9891cb40babe23"],["/2023/10/23/对于多层代理的研究/index.html","47bae085e664a337ca20839d0ef82e83"],["/2023/11/25/金盾2023/index.html","37ce8dafc9bf9fbc49fd04873d012523"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","458dc258b74ffff5129a9034283a47bb"],["/2023/12/18/2023强网杯线上赛/index.html","cefd688e9410f33a3d56d6fb31b43d35"],["/2024/01/08/基础ROP/index.html","2885e4df325621ae8a57cd62de572d20"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","3bb52fb1bee1f6857405f9f9d4ae24c3"],["/2024/02/13/打靶-Tr0ll/index.html","efaebf4476a59baf83aa9c127dc7e197"],["/2024/02/14/NSSCTF-r18/index.html","38e4154aea4686dc435690f571cb814a"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","3334f4f5436cba7ca391cc5184604dd9"],["/2024/02/15/打靶-CFS三层靶机/index.html","017212213a2ca49afdfbaf5fe3375e2a"],["/2024/02/15/打靶-应急加固【简单】/index.html","4b44c097cc87ca9766fd5a1e5191f98b"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","f85fab17a933950a6ab69dd5fdc8a64d"],["/about/index.html","0a7ef56d6044106b5d6d574df88fb96e"],["/archives/2022/01/index.html","a902abfc7bd540a8f91e1a744acb5479"],["/archives/2022/02/index.html","e73d2935b4a73c41a4df5863818bfde3"],["/archives/2022/03/index.html","6559621accaf4cb56978cfc52c33e56c"],["/archives/2022/04/index.html","b88252dbeab602d46bd7b32705becce8"],["/archives/2022/05/index.html","53b30ff52007524ec7aaf9c845202980"],["/archives/2022/06/index.html","fad5c44243e8f88644c973f42ef249d1"],["/archives/2022/07/index.html","211bab0c7b324f77888b79c3724b1f88"],["/archives/2022/08/index.html","3aa62765665fc41ec62d4f4df3ba71f0"],["/archives/2022/09/index.html","4256d18d87c7807f3c5a3bfbb675a2d4"],["/archives/2022/10/index.html","d68f783fc84aca875369552ffcf325a6"],["/archives/2022/11/index.html","0d1f6b478653a0c954a027f0dab673a6"],["/archives/2022/12/index.html","5d99d5f782e27d47cf47017955cdad0c"],["/archives/2022/index.html","946e71762e57b3b0b35cdfae651bcb91"],["/archives/2023/01/index.html","94def142131ed552ddc27bfe726a32cf"],["/archives/2023/02/index.html","e027fb747f56959bd754a5b142a8d3f8"],["/archives/2023/03/index.html","8a519ab418ddbf715ca4d6647c9c2821"],["/archives/2023/04/index.html","4bd2df7f31248b34a155cb7bd3d3ffb9"],["/archives/2023/06/index.html","72bd54f854c0d9d0a339433faa37fbf9"],["/archives/2023/07/index.html","a15af08b4b029f1fb16f866af84a9c6a"],["/archives/2023/08/index.html","63669dda25c2c1e48e1cd1866df156bf"],["/archives/2023/09/index.html","50a7d67177f83b3e22a12665e94cf7db"],["/archives/2023/10/index.html","d641c09a012f0a4e0fccc450cda2a104"],["/archives/2023/11/index.html","24da9d6c9b7241135f4ba27ee03d8508"],["/archives/2023/12/index.html","b09f30f0807c730f7791c0c44798f468"],["/archives/2023/index.html","3812d52e32b720e79da3deb7319f3acd"],["/archives/2024/01/index.html","c55b678259167675a7e4e3ff31f8932f"],["/archives/2024/02/index.html","b4ce4da7934583d001f2b708aa397d8b"],["/archives/2024/index.html","04e371b24259d4a0ade44560580890b7"],["/archives/index.html","c0c1f0561fa6ace764824bd7cb54dd76"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","4875d1848523f5218a7f8f8d11e0e885"],["/categories/CTF/index.html","586cd9db62966465f7b0e7b1496d78cd"],["/categories/PWN/index.html","724155c940c975e976a7f0477a91ccdf"],["/categories/RE/index.html","84023064995f029c0cacc13724c89cca"],["/categories/Web/index.html","1f146a7c8aa140a008fbdfa8e882abe4"],["/categories/awd/index.html","f226c5097d275ff507affd2c7703cf49"],["/categories/index.html","27dafe414073989430ddc74572f0f945"],["/categories/misc/index.html","29cf35203f4581141396c1b8a3304d90"],["/categories/博客相关问题类/index.html","1d8bc0d6daf87994afcdeae3418a521f"],["/categories/局域网攻击/index.html","4ff651fd826ea0f5ee285ff4ed7b8e2e"],["/categories/心得/index.html","063f11ff5f9161229834ee90bbafa4d1"],["/categories/渗透认知/index.html","e449a46bcef350a275724888e7dc1c0b"],["/categories/漏洞复现/index.html","0eb78a8361ef776b91a426fd0c86176f"],["/categories/漏洞测试环境搭建/index.html","9e0bb831ff32ac7eb48d4d37b1936514"],["/categories/赛后复盘/index.html","9063ba5be78b635d7ac644bd585387f3"],["/categories/靶场训练/index.html","249706cdd90e4a4f02eb2ad69f1f07db"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","0669455a1b72ffe5efaa997519abc0ee"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","44b0c2213a1735367556f1bb06b5197e"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","758851d2183b70b3290eea5af05ab40a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","1559b3c4ee8b29a00bc2fcde050ea1a5"],["/page/10/index.html","795538731b60aa0aee43e8d7e301e53f"],["/page/11/index.html","d9e57f6b3eca45e84197dfa0824702a0"],["/page/12/index.html","921a3f232df70bae12a39cd2238a2b27"],["/page/2/index.html","ac81f15dc4e23e40bb845c0607c7738a"],["/page/3/index.html","d995b9d5d5b709554c3c29d4d07429c2"],["/page/4/index.html","50f988f6eef413cf165224d442dd172f"],["/page/5/index.html","9d86402ff7384ece9cc7856fc2649f7b"],["/page/6/index.html","c4b48268936f6eb7e75d0aecbb8bef76"],["/page/7/index.html","5bf1ab137504143cd3096b3de4461b27"],["/page/8/index.html","8b5662f9a0add996007b8884660c17ab"],["/page/9/index.html","22dc809dd82d5f29beb8b75f50400c22"],["/sw-register.js","87c15c7606ec0939632ae78efcbbf9cb"],["/tags/C/index.html","acad355ea616ca92a582392023479347"],["/tags/CTF/index.html","ebee09e58f3344821180bc063f712f66"],["/tags/HTTP头部信息分析/index.html","b9928c06112cbe3a76472bfd072def39"],["/tags/PHP伪协议/index.html","cfade0f66aa7b9486224fc7a35f973a9"],["/tags/PHP特性/index.html","693af6646ca5ef4f46fb0f425e2dcf6c"],["/tags/PWN/index.html","ffe3dba37e5aa228f439dadafffe6daa"],["/tags/RE/index.html","5b9d602bf4722ee1c4ad6296a2ecd8c0"],["/tags/SQL/index.html","61b4a0dfcdf17e38cc9d9ebc150a5d40"],["/tags/Web/index.html","8f6df791ac2d1f70adcf342eb8fdc3af"],["/tags/Web工具包/index.html","8a825688ebdf046e84cf2c5e767f4459"],["/tags/awd/index.html","2b21784ec9e219f8a83f28674ca0d5f8"],["/tags/ctfshow/index.html","9990851af5eeabce956149678b312291"],["/tags/index.html","44f96061965da041f55dc9ccb4abe427"],["/tags/misc/index.html","b4b65b8ad8481b728a82b5f43ccdddbc"],["/tags/next主题失效/index.html","ecc103657f0f9b4b3dcf905bee9fca7f"],["/tags/wp/index.html","77df2661b828f0171e2691f4cab63c7f"],["/tags/xss/index.html","26a09ea83df405bc911bdd4cdbb1f248"],["/tags/xxe/index.html","27ed209011017de3b6367518d1d42e3f"],["/tags/不蒜子不显示/index.html","ebfe44a61ab69c82310098922cdb0bdd"],["/tags/博客/index.html","c8eeec006f4959d4b7e2d434c602de3f"],["/tags/博客主题优化/index.html","81c056d0021eec58ef209762213307d5"],["/tags/博客死循环框架问题/index.html","51e3d1556c4ba7b6f1cba5037e1d86da"],["/tags/博客部分问题解决方法/index.html","d4fbe7694bab52bc5986240c59e7d2cf"],["/tags/反序列化/index.html","967c86b924b5b8bdafa3e12e2eada728"],["/tags/命令执行/index.html","b79eab116f4130856ce1325942e58dc8"],["/tags/局域网攻击/index.html","a7029f88e1c80a690e15e3bf29a45b75"],["/tags/常用指令/index.html","7227284a94ee79d10ed6b85a42394478"],["/tags/心得/index.html","e3c846f7683c4a111e4f08f65934f444"],["/tags/文件上传漏洞/index.html","702cb0238716daa1e433f9e765b6898a"],["/tags/文件包含/index.html","c37d59029d3e0f35204d73b5f0b7b9d4"],["/tags/流量分析/index.html","41df4fdff949c749a91695fed822e11a"],["/tags/渗透/index.html","036c3e8534b3bebba8371abee4facf98"],["/tags/渗透认知/index.html","174e32544927c9ce9dd8e65de0fd84c6"],["/tags/漏洞复现/index.html","7f4016441d1fa8b4dcb483af6e3215db"],["/tags/留言板/index.html","7b451105a7323fb0541143b7e0a8aa5f"],["/tags/赛后复盘/index.html","98fb6040da6daf1f33a931b037f43396"],["/tags/靶场训练/index.html","40fa12a750b83c16f94c13fbdd74a36f"],["/tags/黑盒测试/index.html","5ffc7514a090e9e698bbad01f79160c6"]];
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
