/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","e5e13c64e109ba3feaf3725f2d3432af"],["/2022/01/11/博客制作遇到的问题/index.html","62373d8e53ea51aa65a119df876590e7"],["/2022/01/15/C/index.html","ba097a3471b306c0b416fa5ce213fc6d"],["/2022/01/18/新版next置换/index.html","8629e81a6e1edd0d288649806c0a48b6"],["/2022/01/19/不蒜子相关问题/index.html","efb1b225a35b84ac3c80c1a542dc9981"],["/2022/01/19/框架问题/index.html","f799c100290c1a37965a5fe17c72af1d"],["/2022/01/20/ctf之reverse/index.html","3a72c2a3dde550079806e77afbf570b3"],["/2022/01/23/misc隐写题目总结/index.html","08d8394511d198cf68de0aea710fe30a"],["/2022/02/01/684/index.html","067fa67002c38c1b6b80e132b6942e5c"],["/2022/02/03/留言板/index.html","8d291a8ea077c8841f6a954f04844804"],["/2022/02/04/SQL简单注入/index.html","238fc297b4a8f69f9e7e16592d7cfa18"],["/2022/02/05/最全的HTTP头部信息分析/index.html","44d376fcac78e4033d08f868e62045a0"],["/2022/02/08/ctfshow文件上传/index.html","77b7a921ab14d8f2bec9b8e0b7332f2c"],["/2022/02/08/常见密码类型/index.html","9757c4c700c2bd9adc1e5c4d054e4856"],["/2022/02/12/VNCTF2022WP/index.html","546ad6a5d97208364036a8e9c262996e"],["/2022/02/20/ctfshowPHP特性/index.html","544d4c6e012203e573f17ac85fe96c78"],["/2022/02/25/php伪协议/index.html","dfcb661bf7fc4eb1546d88692216714a"],["/2022/02/26/ctfshow文件包含78-117/index.html","c663f082911bc24250a6d03b1df1b8a3"],["/2022/03/02/Clash漏洞/index.html","c6e414b8f112e736e11d8705ad5663a3"],["/2022/03/11/流量分析之题型解析/index.html","279e5709f63bf0a3146d78c15425c989"],["/2022/03/15/ctfshow命令执行/index.html","be58bf0f39bf1512d3bcc70ea53a0c3c"],["/2022/03/22/CGCTF/index.html","651109e58df51e97253d323db2b418d6"],["/2022/03/24/ctfshowxss/index.html","fb90bc417eea344b65e1a0d3056b4459"],["/2022/04/04/黑盒测试/index.html","875801f7a62ee93b5205b8e1238645f3"],["/2022/04/11/nmap/index.html","9c34d258e8d9d6c9af1dc39831f1618c"],["/2022/04/12/渗透流程简要记录/index.html","6ef552f721bca22c96ffc7cf4be96647"],["/2022/04/12/渗透测试之攻破登录页面/index.html","c82563b8dbf1c5ce9a99257cd8aa0abe"],["/2022/04/14/xray扫描器/index.html","fb9a97094d813f1a63635b12f506f3a9"],["/2022/04/15/ctfshow反序列化/index.html","a1c1158189088a79587fb405cd955b4b"],["/2022/04/26/渗透测试实战/index.html","5ca12fcf56577d74a3382013523c46b9"],["/2022/04/28/sqlmap教程/index.html","6eaf84cfcbfcdc50af79b7f1c0a5bf01"],["/2022/04/30/认知文件上传/index.html","e483552c05a3094ba78a52da645b889e"],["/2022/05/03/nahamcon/index.html","976b2ca2310afa5dc045d365fc9f8099"],["/2022/05/15/awd/index.html","5a3be843bc88cc8796bb70a99a824d88"],["/2022/05/22/DASCTF/index.html","56c28764f74f69e3486afedeaf78df7e"],["/2022/05/27/520/index.html","77fa39135bd3d97adbfa50826d320926"],["/2022/05/27/ISCC2022/index.html","2c614abc8f12fd8d110c3bbb7536c0e1"],["/2022/06/01/第五届世界智能大会/index.html","f87be49bb6e4a7cfd4265814a28fb8f0"],["/2022/06/04/SEETF/index.html","5bbaee63c7d5b83c1f00c7700afa1080"],["/2022/06/04/bcactf/index.html","ed37ebd8bb1467ce4db3a5ae677c6670"],["/2022/06/05/BSidesSF CTF/index.html","dae056e906bce746e1cabcbeab8a4c28"],["/2022/06/07/Docker部署web题目/index.html","85cccd2cab8fd02be2d2f93acc66ccf4"],["/2022/06/09/利用oj搭建C语言考核/index.html","79a8f61b8aee8c64a8f6c91384838bcd"],["/2022/06/13/限免题目/index.html","3c0fad9fb63c70e94e1ce0553dc35706"],["/2022/06/14/钉钉rce/index.html","500f264a135ea156ef082c40d06b709b"],["/2022/06/16/内部ctf/index.html","8a42155520be5367a3eef0911a036741"],["/2022/06/25/攻防世界高手区(一)/index.html","243fa2c9e79880c9f24fce40a318e0ea"],["/2022/07/01/两小时AK赛/index.html","bb56bafc4211e420ba0b092d47eb507b"],["/2022/07/03/鹏城杯/index.html","a887bafa3cc2c9f0aefc98719e0eb4a4"],["/2022/07/04/XXE/index.html","11101ea3a21fd8549c6c4d936da6912e"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","66def9ede5e7695b2fd6d075ee5fe039"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","83ebd2b5efd98ade763f4aaeb679dee4"],["/2022/07/08/chinaz/index.html","74bfda6fccdba84b79cb5f293c15be5f"],["/2022/07/09/蓝帽杯初赛wp/index.html","0ca9f74613deea4cdfb0260c3bd4c918"],["/2022/07/17/NepCTF/index.html","a6a0a8232cbef25646629198ab5209bc"],["/2022/07/19/2022ImaginaryCTF/index.html","34b6ccb137df9fdf6ecffd769a7561ad"],["/2022/07/20/局域网攻击/index.html","802884c6dffa77194a3d113ac8c12b83"],["/2022/07/22/2022BDSecCTF/index.html","3fe7f49c15954e77011ab96da0491803"],["/2022/07/25/DiceCTF @ Hope/index.html","543f296ee1c901737f1a90eb294277ac"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","8d31a2b65fcd0ebb0637f78e03ce189e"],["/2022/07/31/TFCCTF/index.html","d4b9a1300171ceb4ce45a094114f9f46"],["/2022/08/03/NSSCTF-r4/index.html","c801acf6839e2bf12eaf9410b05f3922"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","e3e68ed95aa490b6bc9f4dee4b995540"],["/2022/08/12/T3N4CI0US CTF/index.html","5351b6d8786fdb448864ebc8d42d11ce"],["/2022/08/14/SHELLCTF 2022/index.html","16aece63e397e06bdcaadaa3476022c6"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","649a327e4cf29a9c5aabb4b076a4ffd6"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","69165ed5888e2df6cddd21ea710ca81f"],["/2022/09/16/柏鹭杯/index.html","ba51acab3ebc3eaad30c63674538237d"],["/2022/09/20/HUBUCTF 新生赛/index.html","a236cf30ccb87c961c25971a0336f4e9"],["/2022/09/27/NewStarCTF/index.html","009ff63da68637bb894c1d285622f41c"],["/2022/09/27/打靶-渗透测试1/index.html","641479dd698e5e719858e3481ddc15cc"],["/2022/09/29/tp6漏洞/index.html","a0203cf6700aeb579392fe19a61eb774"],["/2022/10/02/SWPU NSS新生赛/index.html","f91aefa8bfe3e0f38e5e39fbedbb68a8"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","424b48a40146d72627fea4a08292ca6e"],["/2022/10/27/Moectf西电CTF新生赛/index.html","760ddf329a497d1bf543bcad4440a967"],["/2022/11/02/HNCTF/index.html","6f5d7d77bd357719497d6e2e720b9f35"],["/2022/11/04/2022工控CTF/index.html","bc145ba8a87cf726ede8c27e9af471bd"],["/2022/11/21/极客大挑战2022/index.html","ae411014bc7e57f26c1719bed82ab52c"],["/2022/12/05/TUCTF 2022/index.html","f3eff5dfd3d5fb48af1b68d43d317c53"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","2cbc341fc33e82c7037df881723f1040"],["/2022/12/18/金盾2022/index.html","0eef125ec44b3b3edae40cb63969f456"],["/2023/01/01/CATCTF/index.html","3874069f8ad5599db44d38c7c7c9a331"],["/2023/01/09/RW体验赛/index.html","e43cf134f91d84835efe12b0c315890d"],["/2023/01/10/铁三/index.html","f89d9680d95fe6467b628922cf98ba0e"],["/2023/01/16/Ugra CTF Quals 2023/index.html","567d96f5e098a4a53d3d28ec949f3549"],["/2023/01/18/山石2022冬令营/index.html","199b60745c96d1d3fd3b11c379addcb9"],["/2023/01/19/2023SICTF/index.html","dfb5a510f0cd676962dfe842b7a17dea"],["/2023/02/04/2023西湖论剑/index.html","0610d6b06c72d2c3e9c6502478d10808"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","1d697516f2474128a1a74ece9e72e6a9"],["/2023/03/04/公安/index.html","752913e88316744240d48df885889a0a"],["/2023/03/07/mysql之udf提权/index.html","efecdcc015b90d5d4d6a848a1c0d5745"],["/2023/03/07/红日靶场练习/index.html","88067b9a124d4c2203d2e12fcd75def6"],["/2023/03/27/NKCTF/index.html","fbba2919a8414d2e014b157a15205653"],["/2023/03/31/楚慧杯/index.html","052f2cbf0eefd6bd26aa37c387f510fd"],["/2023/04/23/HDCTF2023/index.html","2aa54fc2c2f897df3d4b4c343ea8e3ef"],["/2023/06/01/2023CISCN初赛/index.html","fbe153bdb643dbdb2c5b56a3ad64c47f"],["/2023/06/28/2023CISCN[华中决赛]/index.html","b8d534d890e4f200147a4d3a87d1fa6f"],["/2023/07/10/CyberSecurityRumble Quals/index.html","82b77a348ab562e23c360d9600a97f38"],["/2023/07/22/2023BDSecCTF/index.html","8bc4636c6da39ec34b673c0cf632979a"],["/2023/08/07/SQL手注小记/index.html","f78d32ea0c2e491cff7d06cfddbd734a"],["/2023/08/27/2023陇剑杯/index.html","34e99319a339e0a5b9555741e7db664f"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f581f493d07222d8b5ba4bfe3d212636"],["/2023/10/23/对于多层代理的研究/index.html","e57f7d9bcaebdfc8b85b20640e7b9388"],["/2023/11/25/金盾2023/index.html","5e431a770b1f6f194134fa2f091b2612"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","f8915250c73770f0b491c00a9d288032"],["/2023/12/18/2023强网杯线上赛/index.html","f62a0c5d129d6f93493be4c8fff19e3c"],["/2024/01/08/基础ROP/index.html","e5f42ac121a8dbc38cde86fda5ced791"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","24e141a19eb5f2ec76c1cd5af10b7c2e"],["/2024/02/13/打靶-Tr0ll/index.html","f0863d7d52a4ef5c8085b99a2a21c2a7"],["/2024/02/14/NSSCTF-r18/index.html","9c134ddbedec9466b3b3e810ed64f9c9"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","23ede0b46c59945afae0ce86f07fd400"],["/2024/02/15/打靶-CFS三层靶机/index.html","44af93b1e356849af7b49d73c2f809d0"],["/2024/02/15/打靶-应急加固【简单】/index.html","fe756af20e03fbd59b6fccb1a5fa113d"],["/2024/02/17/2024VNCTF-WP/index.html","5ef699b997c25f1e2d26f3a27df9ef4c"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","a1afdec0ad34b8f7b010afee3eec0592"],["/2024/02/19/2024SICTF-Round3/index.html","d12beed470f0fbe02244eb1465a9439a"],["/2024/02/19/打靶-铁三域控/index.html","9e46056b828847d7a10bbca568e0d903"],["/2024/02/23/ctfshow终极考核/index.html","404830b3a00ba311e5368a5d04829d60"],["/2024/02/25/打靶-应急加固1/index.html","cf0bc4852aaec4bb64bcd1bfa5260285"],["/2024/03/13/2023第一届古剑山决赛/index.html","766ea804bc779f62a8cb00e78b1de68a"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","400ea335c368ca531396e004c9350e17"],["/about/index.html","b25b4fcbd5fb2378c07fe0ade6de82dc"],["/archives/2022/01/index.html","c37ee33177cbca808db67ed6dc24b108"],["/archives/2022/02/index.html","c2c9c075d103874985b0b8d5711c6692"],["/archives/2022/03/index.html","c66d32e28e0a6b5242e458cece22430e"],["/archives/2022/04/index.html","a1d128a5c7439252aedbcfe7d914f39b"],["/archives/2022/05/index.html","406b260cb99f42ea8ad7e206fe8ee6ea"],["/archives/2022/06/index.html","c233c6923b940bc412a55b25ff7b42ba"],["/archives/2022/07/index.html","89f45ec468df46ac5dcf8aba90e79f21"],["/archives/2022/08/index.html","be0a259fa909638b92927badc767cb3e"],["/archives/2022/09/index.html","98733ce75fef9473decd3c556e599970"],["/archives/2022/10/index.html","db7061b0dc07b30db1bbc298bd4e4eda"],["/archives/2022/11/index.html","28335094ca1b059f8f6ef6dfe268fb23"],["/archives/2022/12/index.html","0fcbb80435f2638e0e07bd9368e9cb77"],["/archives/2022/index.html","c8502e99be38403b83bd0c6a2d0e8e85"],["/archives/2023/01/index.html","7ef0bf46bc7bb3832214a991e293482a"],["/archives/2023/02/index.html","2ec72136f92dfcf4699fdd316923facb"],["/archives/2023/03/index.html","03222b8620feffe7c3343ed518c35c47"],["/archives/2023/04/index.html","2786970b337832da74b65221c985ad85"],["/archives/2023/06/index.html","373afc402f3e6cb45e7312c9263f979c"],["/archives/2023/07/index.html","413934104622b68727e550e4c7ba709d"],["/archives/2023/08/index.html","ff23f28a78d26bc6a968371aafe48d44"],["/archives/2023/09/index.html","ab80c87bcf4a23a9953c686c21f540e0"],["/archives/2023/10/index.html","fd4c3fd930a3126d2b7354b5422e5aa9"],["/archives/2023/11/index.html","88eabd12eaf423655b90d5897701a969"],["/archives/2023/12/index.html","800af85b7d7d877c6c33c8bf11570c14"],["/archives/2023/index.html","12ce341522a4064275d4b595d17042a8"],["/archives/2024/01/index.html","e2cf6b155eaf5d8f9ad3d97500209d3c"],["/archives/2024/02/index.html","ddcee006e794bc08ad71355dcb2477e6"],["/archives/2024/03/index.html","27f9017c66aac985100aa8e85de1bcc5"],["/archives/2024/index.html","43d397bfa59e74baf39d5495e57ac124"],["/archives/index.html","7bceb2faa2490eba75bf7c924d1e8031"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","95c2f46e183a871be13ceec86e59b071"],["/categories/CTF/index.html","48e7e7f07efd0444e3b7e4e31398a00c"],["/categories/PWN/index.html","69d204048572498b9966d97559336428"],["/categories/RE/index.html","a57fd570a21a7dded5eee0c58b832bbe"],["/categories/Web/index.html","6a0a36efbc2c4fee0a63e544e82f5698"],["/categories/awd/index.html","1e2f552f484686b767a2262746a1acb9"],["/categories/index.html","a19345b5059a6a4b442a1d764b283a1c"],["/categories/misc/index.html","d3078fe22eecc5ab2dad31f5e5a2287e"],["/categories/博客相关问题类/index.html","d0c18aca176a7a225f35dd87fa6d7fb2"],["/categories/局域网攻击/index.html","ecb907dc1f5206dcc685e9eb7ceef8f8"],["/categories/心得/index.html","1cf6c648aa4d94932b7f8d7b86c29462"],["/categories/渗透认知/index.html","c5257be044f4c1113f4cd45c0e0ba599"],["/categories/漏洞复现/index.html","bae814ee6ce0e4afc557f1a1320b6b9a"],["/categories/漏洞测试环境搭建/index.html","84639dd88ac3810408fa62b557762b41"],["/categories/赛后复盘/index.html","47deee370ee29ee92e0285e9a3eaca6d"],["/categories/靶场训练/index.html","a5afe30a3b6cbbb2d096747b9a6d056c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ff5c8ffef5c3dfd9661e01fa92e76685"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","c79b59a531b2f0de7fe6777415acb83a"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","e68af0cac0e86d96f59f62b51cbf4f2d"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","bc3fdc00f0de9aa7e36f7c152d65bb3f"],["/page/10/index.html","c31d3c05925be0c47725f95502732b11"],["/page/11/index.html","1fa0915531676bb2b3a2aaa16fbcb21c"],["/page/12/index.html","1bd383509d8dc382bea996d7df612c2c"],["/page/2/index.html","d510a0eb4437cad7acedc8f30a0b9c08"],["/page/3/index.html","3e326e46f4a05b33724d525b00c1d7c5"],["/page/4/index.html","790183eb8ea85b5ea27aefe1d2400af1"],["/page/5/index.html","383a3efa18d5752f29724926f6ce1a4a"],["/page/6/index.html","720af8d2aac439c3fc3c521909332b67"],["/page/7/index.html","b20d53da23c3bc6f6f316af285eed15b"],["/page/8/index.html","3c2a00e8de0eba9fd3aef34204351fb9"],["/page/9/index.html","f9a5814e4fac63039424bca5292d5a56"],["/sw-register.js","d60c67e6c1fdae53ad079bd0361326dd"],["/tags/C/index.html","52cc77bb6c2ff315012545cec339d103"],["/tags/CTF/index.html","6316232089bc5e5c399ab903884acb92"],["/tags/HTTP头部信息分析/index.html","3ea2524766673cffb3da54d9c66e1c08"],["/tags/MSF/index.html","9e780c8043c16311033f0bcf03559985"],["/tags/PHP伪协议/index.html","2892ad395390161240ba1e972ba482b3"],["/tags/PHP特性/index.html","d27ccc5e2da2a3bc2d1efbcdc2b45c65"],["/tags/PWN/index.html","bd7141133ad1ae52b48e383e39e204a9"],["/tags/RE/index.html","0ff83dc8d0af0d8c70a641d5e96b1072"],["/tags/SQL/index.html","7dfb6143b69bab9c3e05daec347a994e"],["/tags/Web/index.html","b0d08a82e23b6948c99e462d58517265"],["/tags/Web工具包/index.html","b4cb1d355088ddcf944e5207f00d286b"],["/tags/awd/index.html","9ee39fe153304be6adda0bc90f973ed3"],["/tags/ctfshow/index.html","e51ff1d1733da6b8d6eddbdd4ec97db3"],["/tags/index.html","972cd715173f98dfb457c8be4e7a2053"],["/tags/misc/index.html","db15ac37b9d8345c9e32b6149fc40ddd"],["/tags/next主题失效/index.html","93d115c35fb49f397aec0bba6c9ae0d5"],["/tags/wp/index.html","c3c1b2e0b948e082bd41b13b48e2bc4d"],["/tags/xss/index.html","bff7869f189943f299a44c4bfb75ff7d"],["/tags/xxe/index.html","1cf8f778c1c3b0c2c1ad162a20ad353c"],["/tags/不蒜子不显示/index.html","aae243c31fd197b9de9f14cd447afc07"],["/tags/博客/index.html","fa9b3da453114507555dddde71eb0433"],["/tags/博客主题优化/index.html","9188255faef80130694fb674cd8677e9"],["/tags/博客死循环框架问题/index.html","0fb4f51fc86437f6520b85fd39d0864a"],["/tags/博客部分问题解决方法/index.html","2171daa1bd483c6318dd828771d6a419"],["/tags/反序列化/index.html","3ce0cfb87b8523c96ea02db30a3f66d0"],["/tags/命令执行/index.html","e7e8169d71bc749e9f0e3483f5c51ce2"],["/tags/局域网攻击/index.html","eb593ae880803e409f5aba0ffd71a984"],["/tags/常用指令/index.html","8305ddc0ad7b43eec73430342399b861"],["/tags/心得/index.html","cd8542b41270fda05d47b04d41d2524c"],["/tags/文件上传漏洞/index.html","6e3ec04ffa9594b9c0ae1ab1fa7e92c5"],["/tags/文件包含/index.html","3196706ccf2e5857fb85232adf48ae19"],["/tags/流量分析/index.html","b96352ac48f12a2a003bc511db1c23a3"],["/tags/渗透/index.html","75e2567d093d4531f9df47778fc1ce71"],["/tags/渗透认知/index.html","be0fe421569fb6eaef2592160275d9b8"],["/tags/漏洞复现/index.html","e6f0d2e240cbed3a615a23ae114b77f8"],["/tags/留言板/index.html","2ce5962cd64dc231a118e53b73e0423e"],["/tags/赛后复盘/index.html","0bb8a419abe68317c553caab99ac472b"],["/tags/靶场训练/index.html","e6ce6942a0b241b660033756007c7631"],["/tags/黑盒测试/index.html","c76154c5ebf2d2c5d9fc145722e522c1"]];
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
