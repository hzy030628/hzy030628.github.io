/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","a69612fce50afe278a526c59329b8cf8"],["/2022/01/11/博客制作遇到的问题/index.html","a3b7018d21c27431ca0c5f9b6309ee55"],["/2022/01/15/C/index.html","54fd42bc7f574c74af643aeb91890766"],["/2022/01/18/新版next置换/index.html","ae6d9d6b5d37f5cd286eeea4ebb16e69"],["/2022/01/19/不蒜子相关问题/index.html","a286342c9a9a67f23dfe13e553f46763"],["/2022/01/19/框架问题/index.html","58d7457bca18ffbc0cf592668758aed0"],["/2022/01/20/ctf之reverse/index.html","df767a4e8676e76d51add97dae395227"],["/2022/01/23/misc隐写题目总结/index.html","c2ef4e8e9921ffb00995080c3441c36b"],["/2022/02/01/684/index.html","ba444ec480b4a4c40f24830ca41a992a"],["/2022/02/03/留言板/index.html","05ec832d4903ae6357b8941657c49093"],["/2022/02/04/SQL简单注入/index.html","b3948b90b10fc1bff5d1f69b63ba92ff"],["/2022/02/05/最全的HTTP头部信息分析/index.html","eea025ae59c83d80abb5e6d85e07e223"],["/2022/02/08/ctfshow文件上传/index.html","a2080202e691d3094fea15002cebf372"],["/2022/02/08/常见密码类型/index.html","ffe1c350b0b905bbe0a09edb70c0b417"],["/2022/02/12/VNCTF2022WP/index.html","0b57fc42772cf27201ce75b5432615c3"],["/2022/02/20/ctfshowPHP特性/index.html","4f0dd3fb702c8a4ba5891e2b5c2b2989"],["/2022/02/25/php伪协议/index.html","d71fc66230ce1cdb7823e75980730dbe"],["/2022/02/26/ctfshow文件包含78-117/index.html","b1d8a53e322e2afd19ef0fe2dacadf41"],["/2022/03/02/Clash漏洞/index.html","60550e619e50047a6a289a76251c6b15"],["/2022/03/11/流量分析之题型解析/index.html","a8d80d425ac429182cd883315cbf1510"],["/2022/03/15/ctfshow命令执行/index.html","89fbbba4a974101f39e30fc6646017a0"],["/2022/03/22/CGCTF/index.html","631c93144cba95e8bb6f164a7f60cff0"],["/2022/03/24/ctfshowxss/index.html","aadb52331946b1e0121baeec4bbb87d0"],["/2022/04/04/黑盒测试/index.html","ea0a4d72d3aa7f272d5bc198ab6b2291"],["/2022/04/11/nmap/index.html","8d746ec307e3779cdfc74c872d27af8e"],["/2022/04/12/渗透流程简要记录/index.html","7c639d5b5e470cc3b6cab9b4a6eb7364"],["/2022/04/12/渗透测试之攻破登录页面/index.html","b0a37acf20e87eec2fe9341d2380e136"],["/2022/04/14/xray扫描器/index.html","4de5fb76ff9b70a4273805ba7818b660"],["/2022/04/15/ctfshow反序列化/index.html","8ab1fc7938a0969aada6f85808cba6d6"],["/2022/04/26/渗透测试实战/index.html","3c7c9d8ae4234691a87d3aa98731e64e"],["/2022/04/28/sqlmap教程/index.html","c4b7c631a85daf340f1e13a63bfcf886"],["/2022/04/30/认知文件上传/index.html","5ca801497accfbc50626801401baff67"],["/2022/05/03/nahamcon/index.html","b75b727b36bc1891d191ddc1e2c6eee3"],["/2022/05/15/awd/index.html","f00937418a72184e969ddb42019e26de"],["/2022/05/22/DASCTF/index.html","8b11b484d5893ab78e4adce345bb683d"],["/2022/05/27/520/index.html","b90353a4b61ded9bb3f463f61d3b1948"],["/2022/05/27/ISCC2022/index.html","cc197b166d4bc4d94d5ab6ac01c48aa4"],["/2022/06/01/第五届世界智能大会/index.html","244b560e4ba0b18159ab80a1d36601c5"],["/2022/06/04/SEETF/index.html","0d6a9fd9f8b1ebfee0ab2e298c0ab7d1"],["/2022/06/04/bcactf/index.html","b7cbdb25d96721b4fdaf7528473fc7c7"],["/2022/06/05/BSidesSF CTF/index.html","47f53f1fe3cbe43e2fa89e05d0a2551a"],["/2022/06/07/Docker部署web题目/index.html","f70f8dcefc1c281c79dfa242ad38d75d"],["/2022/06/09/利用oj搭建C语言考核/index.html","c2fa5852fd69eb881d06703bcfe42560"],["/2022/06/13/限免题目/index.html","03337196737f426c4f7abf29fa6cfe2f"],["/2022/06/14/钉钉rce/index.html","da10d3d1e096dbb05a13400ccbdc84ea"],["/2022/06/16/内部ctf/index.html","ee5e41a4e18d76290acd6ef23eb92d2e"],["/2022/06/25/攻防世界高手区(一)/index.html","d5eaa82794ea49404340b3c24cbf6d4b"],["/2022/07/01/两小时AK赛/index.html","d4ac12a462e820f2354e737bcc676cbf"],["/2022/07/03/鹏城杯/index.html","02e2f2dce2eea9ae0f0d6f99f2d0ff40"],["/2022/07/04/XXE/index.html","6fad96071b4d34d2c69f981483d44ab9"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","05d9add66dcd3c8f3b9ee58d2b5cf7f3"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","a663c6465ed570baca2e1b1921def152"],["/2022/07/08/chinaz/index.html","ea755c344d4cb0f5c151618f3ea8b5c8"],["/2022/07/09/蓝帽杯初赛wp/index.html","3a4c3425df8d16d2707c9d5c7085b5d5"],["/2022/07/17/NepCTF/index.html","ea8fbfc400b117e409b9994b86153cee"],["/2022/07/19/2022ImaginaryCTF/index.html","291f2b14b1577000c58fbeb9362d1b6a"],["/2022/07/20/局域网攻击/index.html","95517893d1ca6aefb8d8c4083bae51f1"],["/2022/07/22/2022BDSecCTF/index.html","1e88be4554777da67baaa227ff8c2812"],["/2022/07/25/DiceCTF @ Hope/index.html","2d88f879f755d1a8ec720f6656925ca2"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","6854af2d1fbe00d4047676ffd1b0468b"],["/2022/07/31/TFCCTF/index.html","e8c01200ba8cb6627466da5170971e93"],["/2022/08/03/NSSCTF-r4/index.html","6097e910bb5ef448c03057b74b760f3b"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","514e392c28e5e7f61e3e8e3857af3dff"],["/2022/08/12/T3N4CI0US CTF/index.html","8af8989c71ddc63f0fa7e8870087eb3a"],["/2022/08/14/SHELLCTF 2022/index.html","395c1c36332bd6e905306e5bf83e10df"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","f47ef8a2d982dfa0d0424d5aa65c60bc"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","487f8eca90b06261559d8533acc6f0af"],["/2022/09/16/柏鹭杯/index.html","90506de10b1d29d35b908354e8e83336"],["/2022/09/20/HUBUCTF 新生赛/index.html","277c5509d19fed843f0fa93599cb43b8"],["/2022/09/27/NewStarCTF/index.html","1bfc2bd530b4a13a4519d1f1966ff3d9"],["/2022/09/27/打靶-渗透测试1/index.html","97b3da0336a4f95cf7785ada43b3b1ad"],["/2022/09/29/tp6漏洞/index.html","c746ade37b256a6b248ad749269903bd"],["/2022/10/02/SWPU NSS新生赛/index.html","8293f45be4af15cbba14246a94469a30"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","63c25ed1ee8d926f3f21b1f66cf142d6"],["/2022/10/27/Moectf西电CTF新生赛/index.html","50fadb442250d8c93cc6294440253bca"],["/2022/11/02/HNCTF/index.html","5e4e93cce948c6d6f4ec68ce6740b05d"],["/2022/11/04/2022工控CTF/index.html","45a9ce0687f7dd5bfb39b11e7291a0d9"],["/2022/11/21/极客大挑战2022/index.html","70694787ba95056c32873fb6630d8ab2"],["/2022/12/05/TUCTF 2022/index.html","7b13ed5e566940a02b6a13211d7007bf"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","3f59d6dc33743ee0312ea234fa2df59d"],["/2022/12/18/金盾2022/index.html","49e054c2136a85c51d746832719e6bfd"],["/2023/01/01/CATCTF/index.html","e339f25fe493645801d3bea187c7d89c"],["/2023/01/09/RW体验赛/index.html","7bd3f0ff3eac41db06117e297dfb80c6"],["/2023/01/10/铁三/index.html","f232b24ed164c9007a8dd8188e93de4f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","abf64d9a693073ad3f50f2a8db668db4"],["/2023/01/18/山石2022冬令营/index.html","079a1ed8127045f7f0f2855ed982bec8"],["/2023/01/19/SICTF/index.html","795a3fac04a812d394da7ee30ba4bbf2"],["/2023/02/04/2023西湖论剑/index.html","bae77fb41a26c86f24cf14552f6be88d"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","31956143613cdd5f2e92fd5ff06d0233"],["/2023/03/04/公安/index.html","558805982e732f4c212968453a3f5ee1"],["/2023/03/07/mysql之udf提权/index.html","82bbcea50d103f0ced38e25b8377f080"],["/2023/03/07/红日靶场练习/index.html","209289f6306f99721eb43b8085f852fe"],["/2023/03/27/NKCTF/index.html","9a4dd1906532e33358cba050be040d87"],["/2023/03/31/楚慧杯/index.html","83c1b29b0637153980a1da895bc9ac9e"],["/2023/04/23/HDCTF2023/index.html","e7509ced68bd0bb12f0d3978baa0c056"],["/2023/06/01/2023CISCN初赛/index.html","6cd9663b4fe329e32d2f6028763125d3"],["/2023/06/28/2023CISCN[华中决赛]/index.html","adca4cc21ada23c4fb6311a87e106a3e"],["/2023/07/10/CyberSecurityRumble Quals/index.html","e7a2746aaa35e5e95b8f526a3bd7e329"],["/2023/07/22/2023BDSecCTF/index.html","6c0053483308521515064cf79ce541e1"],["/2023/08/07/SQL手注小记/index.html","d9e1be17117dc08918158e1f62198c72"],["/2023/08/27/2023陇剑杯/index.html","d30629668c70ead251a6f22e471ae99c"],["/2023/09/17/2023蓝帽杯半决赛/index.html","163894c089220a1c8f7a208eaf340aa4"],["/2023/10/23/对于多层代理的研究/index.html","8c3a7345d277ced906df7aaaae275454"],["/2023/11/25/金盾2023/index.html","8b97a3c987245e7b1fd698e14a4ba6db"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","992c0df6082983ca5c6364b1e81b03da"],["/2023/12/18/2023强网杯线上赛/index.html","8a9dde6d3350d4fe4d1c3c5f7473f528"],["/2024/01/08/基础ROP/index.html","518652b5b29c0498f50dd45596542e69"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","5400a79875d26ea6c22b4cb868c92d89"],["/2024/02/13/打靶-Tr0ll/index.html","6707c4f6d677834c51b18802193a6280"],["/2024/02/14/NSSCTF-r18/index.html","fa4f549beed6b69a1ec4186af0c03b98"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","b567d13c4915b20c97cf38fd028a07a1"],["/2024/02/15/打靶-CFS三层靶机/index.html","79c8beb5de67b6a470b62ff78bdef6b3"],["/2024/02/15/打靶-应急加固【简单】/index.html","1c55fa17fa26958efec9c47b8120aa1b"],["/2024/02/17/2024VNCTF-WP/index.html","228f5ad9c7d74c7f3d49a87d4e72941a"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","69cb19f909fdbbb383505b1b14ff6f59"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","7055234d553802bdbc5b82c81b4baf57"],["/about/index.html","2cf05faefb4de206ee6d92bab3386c0f"],["/archives/2022/01/index.html","f7d91ac56b6a72ca4731d8798b9b5d4c"],["/archives/2022/02/index.html","fd29eabdb0b67ea22dfa3f379e0a9af6"],["/archives/2022/03/index.html","48dc4d12db8695ff0b88b154087ec05a"],["/archives/2022/04/index.html","4356379609a8f9ee60219975374f7d20"],["/archives/2022/05/index.html","7641633995b307d7740142006e24e941"],["/archives/2022/06/index.html","aec2ee8044d4c88fcfb9c77dbde7a017"],["/archives/2022/07/index.html","3ac1b2798784ccebed2b6832ebe6b474"],["/archives/2022/08/index.html","643046ef9e860a22b89c5d86ad5e4bfb"],["/archives/2022/09/index.html","ca71406e11fe9420ce9674fabc1969e6"],["/archives/2022/10/index.html","c13271b3fe998f83885882d9040202b4"],["/archives/2022/11/index.html","0f6030cf900fbd9d5e05c68d8d1b6ae2"],["/archives/2022/12/index.html","b45b27a2665eb8586133fb60f511ab34"],["/archives/2022/index.html","3b6e97a269104f4aa46b41e52601bae6"],["/archives/2023/01/index.html","1a1192b177bfd351179d844adf2148c9"],["/archives/2023/02/index.html","3fcae558287d18f30a96550dd682ef17"],["/archives/2023/03/index.html","93427c2602c59bd64e5b1b98c973dbbd"],["/archives/2023/04/index.html","420d881b444ed5d40da3b04bfd3d2b7b"],["/archives/2023/06/index.html","b25a6f5bc72b5371c482930718ecf0c1"],["/archives/2023/07/index.html","b65cc25bcd57d2951d170f9f43a629cd"],["/archives/2023/08/index.html","64b08cf9bc588a732f1b9316c887a5ae"],["/archives/2023/09/index.html","823198de1ad57d5412eea4bf222ab6e0"],["/archives/2023/10/index.html","f965bf4178bc4e7264945e407aae7342"],["/archives/2023/11/index.html","3af1af880c284016b6aa79c9268a0219"],["/archives/2023/12/index.html","7a1deaa308cf6cf1183ff309295f1361"],["/archives/2023/index.html","327b0c972af657a4b147e6130b970716"],["/archives/2024/01/index.html","a21389ab51bd5015312297cf529d6d38"],["/archives/2024/02/index.html","adce6490d5713d3c166277145e55bd38"],["/archives/2024/index.html","a759a86065eb5e9a5435a343975bde00"],["/archives/index.html","4c66b9c992e477acc859b637be068890"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","f54dbec50816c702e28449270d0250db"],["/categories/CTF/index.html","43610e0e8d1b1a300cc43794ea067962"],["/categories/PWN/index.html","05adf6d4b8de2eeeee58b86cf5d7f8e3"],["/categories/RE/index.html","223a61e17a6c74dbc12d46748d97a838"],["/categories/Web/index.html","4b1eee020790d5de9b1debbadd682edd"],["/categories/awd/index.html","df620e38d578fee5b92ca271a93b5558"],["/categories/index.html","6b82a98c5bb9be190e02dbd3b444e8cb"],["/categories/misc/index.html","b44311870dfc836fca65cf0edc89909e"],["/categories/博客相关问题类/index.html","eb4010b617c7d8fd4652c952d1f49576"],["/categories/局域网攻击/index.html","e5e7878a4bc96f6a87a4a908dcbc2714"],["/categories/心得/index.html","ddf638e00faf3a07d91a432e185ecf48"],["/categories/渗透认知/index.html","947250255c85c348bbe1df6a71ea9894"],["/categories/漏洞复现/index.html","4a3feb919626ea8d8c816973746fe7f5"],["/categories/漏洞测试环境搭建/index.html","c80352187f4bc47662f8f2d93b060d0d"],["/categories/赛后复盘/index.html","0c7339ecc3e783168b687a0f73cb79f1"],["/categories/靶场训练/index.html","246abdbeafd484276126ad7ea77d8f99"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e3200b5dbec3a2ec7ca55301f8a81a6b"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","a07382cca24e4e807243d3cecc86964c"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","50f0227d4f58d950f795356fea8a3b00"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","dfd52be2f06447e1dd5466f49d11c519"],["/page/10/index.html","1a26247aad1dc01bb047c4ff3d3eab6d"],["/page/11/index.html","ac82ee3bb6799e4987b8f703138d98d6"],["/page/12/index.html","2ea87ba44153174ee91087f0df91a1f4"],["/page/2/index.html","323b08d6da0241b95a1d5927bb8aaec3"],["/page/3/index.html","2395bc70ca47a2681455c23b224fb2f4"],["/page/4/index.html","846a94814a375e83b59750396be0f657"],["/page/5/index.html","66a4c19baa3945400fab47f68b39bfed"],["/page/6/index.html","a8f547624a1f5b0002d94b9a434be541"],["/page/7/index.html","c907fc5553b36027b0dccb7b661c4ed5"],["/page/8/index.html","bb2062cddd73b072c8f99f105dfd7b51"],["/page/9/index.html","65cdff69720163aa47b99c621d089bf7"],["/sw-register.js","34c49a93e2831cfd5c7ca8a9a36c1623"],["/tags/C/index.html","93c3390f7a0c583c9de22ebb00e1c8eb"],["/tags/CTF/index.html","6cbe3c08ddfa466b2654376e0211f513"],["/tags/HTTP头部信息分析/index.html","6b4c7387b7cd3585c1ee3d4e4932f969"],["/tags/PHP伪协议/index.html","86fe28b93a7df5c6040f4ae700b01788"],["/tags/PHP特性/index.html","961dcde59ce6c9ff751a1d24b29cbd58"],["/tags/PWN/index.html","06bce9957a468ee47eb7c130e9f563eb"],["/tags/RE/index.html","8a06354345190f524e863d0c907841f6"],["/tags/SQL/index.html","d83a7bc600b1e3dac80cf3583f8e7a8d"],["/tags/Web/index.html","d5bd1dd27474ab73299ceb93bbdd3e87"],["/tags/Web工具包/index.html","19f218fc89d0f4b23b11597523a0648b"],["/tags/awd/index.html","bfb8f72fab6dda0bbf22b87bd2bdd6e6"],["/tags/ctfshow/index.html","e503e152b349e5983fe0bdf039c162a3"],["/tags/index.html","28e284ba214c4d3faae59083931a8e38"],["/tags/misc/index.html","0d37c9326988237e0b173741a6086db8"],["/tags/next主题失效/index.html","9716fc0d72cf52924da6863b049c91ea"],["/tags/wp/index.html","30c88782f35e30179b005ab78f99c547"],["/tags/xss/index.html","c4d14fe3f4c9e686271963ee05c68860"],["/tags/xxe/index.html","e164ccf5e8802490cc5be8da9e23df50"],["/tags/不蒜子不显示/index.html","63a57782cf492ad76e2deb0dc0d864d5"],["/tags/博客/index.html","1edc8be0f55fc0d52a1ca0d37c0c2738"],["/tags/博客主题优化/index.html","934f134a9448068440750330dede758f"],["/tags/博客死循环框架问题/index.html","0e450253dddb6ceab6936325e48849c5"],["/tags/博客部分问题解决方法/index.html","5b5bceb7dec899590ec35b9837f746ad"],["/tags/反序列化/index.html","df963baa48e37cc9727a34b9d50f559f"],["/tags/命令执行/index.html","1473baa7b6af1607f2487d762df5b461"],["/tags/局域网攻击/index.html","2f16fd9a447ee4b22276f31dd9188771"],["/tags/常用指令/index.html","d19ffbb1cc5dc313c1a40ab551164828"],["/tags/心得/index.html","ae9cc0c0bcbc65088fe6115d7513714b"],["/tags/文件上传漏洞/index.html","f8db5b4926ad01a9d59a1ec352c1e3bf"],["/tags/文件包含/index.html","8e579de7acaa62821ca73a402534cf2e"],["/tags/流量分析/index.html","781ee60d2b0a2a03b0ea6cebb633007b"],["/tags/渗透/index.html","9100d99096a400a71e832488a8c6fa34"],["/tags/渗透认知/index.html","fa4a9fd518082dbc81c4a97b24ef155c"],["/tags/漏洞复现/index.html","47a48667e018aae04017747bb2641357"],["/tags/留言板/index.html","8644476a4a25c9fe55b00f30be1a0dfb"],["/tags/赛后复盘/index.html","744ef95a3ef3022dd9b3a5bda79fd305"],["/tags/靶场训练/index.html","2031014d746b169c60e7df62ac40c9b7"],["/tags/黑盒测试/index.html","c9e1db6d59484374647dfa09c0e702d6"]];
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
