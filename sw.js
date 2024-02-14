/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","e4f7cc0127aafd91f2b6b47929e1653d"],["/2022/01/11/博客制作遇到的问题/index.html","50e0910a7dc57e748ca276a11213cdbb"],["/2022/01/15/C/index.html","b0782fc81d61f108e3b8e349ca2e9903"],["/2022/01/18/新版next置换/index.html","4772153f51711bd27bdc65532705ef32"],["/2022/01/19/不蒜子相关问题/index.html","e05c34a0a12a27354457bb912b01bcde"],["/2022/01/19/框架问题/index.html","bb69a6c6ca5456737ec9588bb9f418d4"],["/2022/01/20/ctf之reverse/index.html","f3d793eb2cfd20f4083a9150fcc23a96"],["/2022/01/23/misc隐写题目总结/index.html","2ece98d1128ca30c85b41978fcbdbf2b"],["/2022/02/01/684/index.html","abc0a9d645b006fbc4f241b9eea8e209"],["/2022/02/03/留言板/index.html","ab525602af91bacbdd27d980dba1fdc1"],["/2022/02/04/SQL简单注入/index.html","836cbc8d0004deea66ce94176ff5e14a"],["/2022/02/05/最全的HTTP头部信息分析/index.html","04f5d81c2d0122accfc50adeda8dfc6d"],["/2022/02/08/ctfshow文件上传/index.html","0db7d7235cd674d9c593ee85f62fd56e"],["/2022/02/08/常见密码类型/index.html","4ae5900fae7421c73b3f3f8efe3ccb10"],["/2022/02/12/VNCTF2022WP/index.html","17df1dbbbb747bb553f8f01bb2cbe2c8"],["/2022/02/20/ctfshowPHP特性/index.html","407c26e019c4cc734fd96c03cdb2ef12"],["/2022/02/25/php伪协议/index.html","9b3a349f48d3ce6cde244c197b1e4f62"],["/2022/02/26/ctfshow文件包含78-117/index.html","f28bf8b6f293cdad01b483e274a79df8"],["/2022/03/02/Clash漏洞/index.html","d2ffa073bc06a2332ea57c39eb357f40"],["/2022/03/11/流量分析之题型解析/index.html","163ea5216c83eccb511b6105efbac0c8"],["/2022/03/15/ctfshow命令执行/index.html","96cedaacaa7f805465d98383ef25169a"],["/2022/03/22/CGCTF/index.html","5b74f561731185bd21eb1a6d2d6d8f1c"],["/2022/03/24/ctfshowxss/index.html","70c6a737225045c543ffe4ef773be2cb"],["/2022/04/04/黑盒测试/index.html","ddef0666ff6a66e21d68ebf13656990c"],["/2022/04/11/nmap/index.html","b332f8eeadd6fad7b5f1de4125140869"],["/2022/04/12/渗透流程简要记录/index.html","6f715ebeaa87f09a3379cbe0c6861db6"],["/2022/04/12/渗透测试之攻破登录页面/index.html","2c196d21e75eecbb09601f6aa14f5c42"],["/2022/04/14/xray扫描器/index.html","0e51f57ea3945dfaefe12f37a3e7299e"],["/2022/04/15/ctfshow反序列化/index.html","4a342ffc5197eb217853b46e7da2d16a"],["/2022/04/26/渗透测试实战/index.html","0d033c5982ed72352fdff57e8a0fdc72"],["/2022/04/28/sqlmap教程/index.html","2f0ee12ab1ec29f405f1041e901a0b28"],["/2022/04/30/认知文件上传/index.html","272b14463c2dae6c5b9eaebc2dada73d"],["/2022/05/03/nahamcon/index.html","0c66a48cbfb63b0d615b44e8fded0721"],["/2022/05/15/awd/index.html","c1707762a739d94552810247e4d989ed"],["/2022/05/22/DASCTF/index.html","6dc8363dc912f2ce6d526101ec77d51d"],["/2022/05/27/520/index.html","9b2d59fda8947a75fe4be3a07e2a51ab"],["/2022/05/27/ISCC2022/index.html","a5376cde7d33027472bfd4e1bfc619e6"],["/2022/06/01/第五届世界智能大会/index.html","345e57c70d84fc189bda4ad79b873de7"],["/2022/06/04/SEETF/index.html","283fce4faf5d0a5ba01acfc9ebc6b70b"],["/2022/06/04/bcactf/index.html","7a7bd8a77ad7618d3df4a013549eef14"],["/2022/06/05/BSidesSF CTF/index.html","f61cfad200a664aff07e9287bd1056a5"],["/2022/06/07/Docker部署web题目/index.html","c8c2e97f0a81735978253928f4a7bb24"],["/2022/06/09/利用oj搭建C语言考核/index.html","b4dda1de4e76e78c5bd371d443684196"],["/2022/06/13/限免题目/index.html","702ddf63f669e1d69557620950c47146"],["/2022/06/14/钉钉rce/index.html","2a4fd01b41ac400d5eb00ac4cc6edb08"],["/2022/06/16/内部ctf/index.html","dd79979873fc128a7818882ece13d438"],["/2022/06/25/攻防世界高手区(一)/index.html","63d0ef753b88ae185b2e29fbba47c817"],["/2022/07/01/两小时AK赛/index.html","beb31c16f5729eafdfd183e12092c95b"],["/2022/07/03/鹏城杯/index.html","dfbe3c495bd842fe25b83d1eaa1901de"],["/2022/07/04/XXE/index.html","9319c66b67d4345aaaafaaa1d8510214"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4e8ee5adaecea7e7fdc3ebd4005d84ce"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","9564b149204e6caf81c6cb5a3a0fc553"],["/2022/07/08/chinaz/index.html","8a3e6e9d2cb500ceb8b063490a9e3906"],["/2022/07/09/蓝帽杯初赛wp/index.html","a4f79737d0ef09a668ebc48be9bcb5cc"],["/2022/07/17/NepCTF/index.html","d9fad3350dfa50eb0a7120aa35bbe69c"],["/2022/07/19/2022ImaginaryCTF/index.html","d324c5594253318859fec5d20b443745"],["/2022/07/20/局域网攻击/index.html","59ffeb321cacb3aaf66ef2243358209c"],["/2022/07/22/2022BDSecCTF/index.html","16a64b7dbf4cc77bc99390bbb8091138"],["/2022/07/25/DiceCTF @ Hope/index.html","054a716463827d52b0ab5a8c25b4dad5"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","b90ba916527737d94044a416f78653d5"],["/2022/07/31/TFCCTF/index.html","bfd87d42ec7561e07376e089b496723f"],["/2022/08/03/NSSCTF-r4/index.html","34b0d77b67afb92974b449548e8fe9a2"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","547dc7c50ca979869174bc7260cd3abc"],["/2022/08/12/T3N4CI0US CTF/index.html","66faeca8ae6a3f0ca921ff04bdb170d9"],["/2022/08/14/SHELLCTF 2022/index.html","4f7cc00e23bbe93fd7dd737eaa24bd3e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","6b5dbb51f60905626eaf5c52566668b0"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","61bdfd6b32dc74f66af584c42c676b79"],["/2022/09/16/柏鹭杯/index.html","b9299187921124f06a54eb3123df198d"],["/2022/09/20/HUBUCTF 新生赛/index.html","604574856e85d35fd58e601053d248e4"],["/2022/09/27/NewStarCTF/index.html","e6ddfd7c6db02074b4475224833d8aa5"],["/2022/09/27/bugku渗透1/index.html","fbef9d2e5795a709597510003bbd29c4"],["/2022/09/29/tp6漏洞/index.html","6fd199b5674b7548c9cdacc8f6a02488"],["/2022/10/02/SWPU NSS新生赛/index.html","488008245012810a3303e0e14a099a04"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","32eb5d03f507b6e8aafa2ed893c38998"],["/2022/10/27/Moectf西电CTF新生赛/index.html","ae3191bc2158d39850554b169620dfa9"],["/2022/11/02/HNCTF/index.html","7530e6cba637b1dd6729971463ce3809"],["/2022/11/04/2022工控CTF/index.html","1cf328b5de80015b49163059e132f862"],["/2022/11/21/极客大挑战2022/index.html","f2480c665801b8c7e0e88df8364a5138"],["/2022/12/05/TUCTF 2022/index.html","34616ba2a6939a0c269ab2cdb7593ce5"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","4479d8f5eb9e200b0065fbc917849c44"],["/2022/12/18/金盾2022/index.html","1a690c52d5cdb71ad62325b5630f456e"],["/2023/01/01/CATCTF/index.html","02835bed0d7ecb2ad6f0d7978225b6ca"],["/2023/01/09/RW体验赛/index.html","50acf33dd762e5bb67f1694b69097c2a"],["/2023/01/10/铁三/index.html","a580ae05ff0785f2c4bab4cd36bbbda8"],["/2023/01/16/Ugra CTF Quals 2023/index.html","0c3c4e8e90dab828a81ae73c56cfec05"],["/2023/01/18/山石2022冬令营/index.html","512726ee3b478c39315f847f5feaf239"],["/2023/01/19/SICTF/index.html","3620504f470c843f88418b87fc6a8517"],["/2023/02/04/2023西湖论剑/index.html","5b3447b9bf05c2a87b4aab3e92a9336a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","03d90776b5a102b537425db99b404154"],["/2023/03/04/公安/index.html","26f621d2ac71f8acb4b9896e3034f8b5"],["/2023/03/07/mysql之udf提权/index.html","3ff7b9fe0992cb7a7e251114be44a2f8"],["/2023/03/07/红日靶场练习/index.html","05284d7d3efa3b874b75de8ecb319e28"],["/2023/03/27/NKCTF/index.html","ef12d0dc05e55d5217dd0b32c3294ad7"],["/2023/03/31/楚慧杯/index.html","29a9a7bfebc0ec32c51e4ffc775c5e32"],["/2023/04/23/HDCTF2023/index.html","e8b527b2b88fa138dcae5c5ee24c794e"],["/2023/06/01/2023CISCN初赛/index.html","3e8923089e08b2311aa332cdc878298c"],["/2023/06/28/2023CISCN[华中决赛]/index.html","a15ec6945330e3f9b4ad1143cdd19ac2"],["/2023/07/10/CyberSecurityRumble Quals/index.html","92452e4bfd30ac8de22f442c36ff0a89"],["/2023/07/22/2023BDSecCTF/index.html","bc6bfe6fa003c72cee710a469878da4f"],["/2023/08/07/SQL手注小记/index.html","895a4d5d3fd60027c9655b341bc0aa02"],["/2023/08/27/2023陇剑杯/index.html","932362bc129437f4aa5fc109bad68103"],["/2023/09/17/2023蓝帽杯半决赛/index.html","f89cb36c9e5709a000df5a7f9c79b36d"],["/2023/10/23/对于多层代理的研究/index.html","5107373b660f2804ebb720c5971322fe"],["/2023/11/25/金盾2023/index.html","9afc4bf8655abaa486d180f00c27e9e5"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","653b7e968acb94ea65b233a77ac45329"],["/2023/12/18/2023强网杯线上赛/index.html","9a825336194d338803f2d3dc6a705f52"],["/2024/01/08/基础ROP/index.html","aa884065ca167baa44210b2b4b20c9da"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","307288a91dbed74fa931aa80ea2a21a6"],["/2024/02/13/打靶-Tr0ll/index.html","36c86e2a851167c9648b0303adebc23b"],["/2024/02/14/NSSCTF-r18/index.html","9c309ae6469e55e246f2d344eee288e4"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","a348b7d2b4b131f447465b31812c8d63"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","42032d2bf47c11be4e0665f545d6edbe"],["/about/index.html","4934f3e873dfec5bfee0431ee9f364c8"],["/archives/2022/01/index.html","732432d6755269a844e15ed300324967"],["/archives/2022/02/index.html","f00a59334db674d9ee32830ab7504c6c"],["/archives/2022/03/index.html","c8c1958522372aed709757443667c804"],["/archives/2022/04/index.html","17dee614549065f4e7052b7c54b43096"],["/archives/2022/05/index.html","5d48bce6e32e3e35126eabbbc3137731"],["/archives/2022/06/index.html","eadc2264984ce27429cea14419e5908c"],["/archives/2022/07/index.html","6b27777e71dc24c60cbf4d67072125ce"],["/archives/2022/08/index.html","500a0a3bd159ef5fb3f7072c26b9d320"],["/archives/2022/09/index.html","75f0c28f4f40c1f8e53f10fc4c8ee1ae"],["/archives/2022/10/index.html","08588d37b83f880807c1b284a9ac458a"],["/archives/2022/11/index.html","eb5c34d0d9607cda0fd53a2886461f1b"],["/archives/2022/12/index.html","969502f6cec08dc44af3d1895383c1e6"],["/archives/2022/index.html","827edfde3e348bf857782a05d12a0645"],["/archives/2023/01/index.html","026124c9a571268a1877719683233455"],["/archives/2023/02/index.html","6129391fadc4a7a5ac762ca348e29fdf"],["/archives/2023/03/index.html","b80d1c99cb1bcc429c742dd33c829936"],["/archives/2023/04/index.html","503c9eb4565d3f2b27875e702186feb6"],["/archives/2023/06/index.html","a69f3eac9fe3208358927755b4a822bd"],["/archives/2023/07/index.html","89eb366eab7551318cdb8aae9c842e11"],["/archives/2023/08/index.html","47337a2897b71e819ac215f5204d12f0"],["/archives/2023/09/index.html","4b020f98153778f0a9b7f559309c170a"],["/archives/2023/10/index.html","1fb6d1b8b23f18312869b91347546c3e"],["/archives/2023/11/index.html","d384bc47e1a84b93d2b4df078e41aa8c"],["/archives/2023/12/index.html","3cca515d1dd141cdda619002aed2e692"],["/archives/2023/index.html","5fc3f3c8c7100a7db1b6f4e69a10c863"],["/archives/2024/01/index.html","52243972ac39ae9ee6dedab4fc548b65"],["/archives/2024/02/index.html","8d6dbdfdd5f601dce91048cc38412c84"],["/archives/2024/index.html","0cf7994db2dda9aeb4b1ea52042d4c20"],["/archives/index.html","31d4791ba78bce1bc9eda909f968f05d"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","4d7786d85e6472fd0257638a98ab90c8"],["/categories/CTF/index.html","3702b41cdd4aec923968b7b942c15bb5"],["/categories/PWN/index.html","a268b2c78c2aba786ebe8208343f3f9e"],["/categories/RE/index.html","926020eb1ad9d65a30bf31ea65085ef3"],["/categories/Web/index.html","07bed23405391ad8e48a1dae7ab89e41"],["/categories/awd/index.html","5e9ca454514b3e80993444e20c7bf719"],["/categories/index.html","ba470e250615b78e769307fdd1c6ea6f"],["/categories/misc/index.html","68297835f4b09083b84d8d7ecded4fc8"],["/categories/博客相关问题类/index.html","d14e02cb28affd3fbb4b3074fafc3aae"],["/categories/局域网攻击/index.html","d067c3a746c50dcff2af2af4fefcb5de"],["/categories/心得/index.html","1c5af87e890da874ca7833f38e15587e"],["/categories/流量分析/index.html","11f1bf79115e84414d3a2301010a9fae"],["/categories/渗透认知/index.html","6ae37816289385e7183e3dd7280f9d32"],["/categories/漏洞复现/index.html","3ec9a904c3511a4e1806e1f6ce8cce26"],["/categories/漏洞测试环境搭建/index.html","166aa66872359d55fa6c836cbccaadfb"],["/categories/赛后复盘/index.html","56e75cf82e297f0fec0ec3695e8a65db"],["/categories/靶场训练/index.html","486d2995030b23a654a7f9940b055d22"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f2b36b17b602a244dbc1a3b1d1de7620"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","3940b1d49308084ea6eef6bc861fdeca"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","5b3c6bb9c9084b526b0b0c67edf80cac"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","665903392ac9855e95e745a66ed5222f"],["/page/10/index.html","c9d615d2b401bf834b37325e2f6f9501"],["/page/11/index.html","143c7749edea17e6bd7e79563258ede9"],["/page/12/index.html","b4a4d6185e28e7ddf235ab62e2ed562b"],["/page/2/index.html","614d5d0578bc67a6ee8377d1df66969c"],["/page/3/index.html","4254c00eda50fb8eb7bc17b2b36856cb"],["/page/4/index.html","b495e9566444f0f5334afd42197d95e6"],["/page/5/index.html","4cb4de97245ae21caffe914df30dae3b"],["/page/6/index.html","fbb946e91b676b9c69b61b9dfb5ae04d"],["/page/7/index.html","cd13fe08f3420faafc70d6e9b79113d2"],["/page/8/index.html","38568115fea022da4cffdcb48fc9b29e"],["/page/9/index.html","b422c4ca37934430014522242594f388"],["/sw-register.js","6b3f5338a6adecd18dc8020c1fefe4a2"],["/tags/C/index.html","2953c56c8a0edad919ac7175feb47ec8"],["/tags/CTF/index.html","521f6f4ddc139f601c16a5385bb56c66"],["/tags/HTTP头部信息分析/index.html","42e210327651100ab6bfcf65fa92e2bb"],["/tags/PHP伪协议/index.html","6cdfb1dcf745e547124c6e88d24eb84c"],["/tags/PHP特性/index.html","fd215660b03022dc34df270335769b2b"],["/tags/PWN/index.html","278c3cdebfed875453b0ed37570806af"],["/tags/RE/index.html","ffb782b479c2af4fb4659659a602d842"],["/tags/SQL/index.html","969e0674731e74e40ec17f5b33a70016"],["/tags/Web/index.html","c7d566da2e0e4c33f00ac4736d925d06"],["/tags/Web工具包/index.html","b80b5ca0f0fd192818f4a316219bab7c"],["/tags/awd/index.html","7c9931466624396955257cd208eb40a5"],["/tags/ctfshow/index.html","3324bf5b14bfc29f1f985ab65453782e"],["/tags/index.html","0a2e6e1c7ce1c2906a8ccf0a7c6efa65"],["/tags/misc/index.html","220e429a80ff854cacefbd624ae60b14"],["/tags/next主题失效/index.html","a2581505429d37e68b90e4d3ccb71872"],["/tags/wp/index.html","b4ad0115b56e6738873d6c2a72d88eaf"],["/tags/xss/index.html","75f760c75896493fc1d1d12dedcd2c61"],["/tags/xxe/index.html","ec1920425719a43e4182a4e51e6fded2"],["/tags/不蒜子不显示/index.html","7fe6b06789d3f69da4c637d2c6e8245f"],["/tags/博客/index.html","c2935663fa67f4b74327fec83d223a8e"],["/tags/博客主题优化/index.html","2fa5dc108ed0c238ca6918bf9b293389"],["/tags/博客死循环框架问题/index.html","5a98cb90dc3a110237a745af13821a3e"],["/tags/博客部分问题解决方法/index.html","1b58e6a298be545ddac6d591bfe006ef"],["/tags/反序列化/index.html","92f0707fd854a4a11cde59af977006b5"],["/tags/命令执行/index.html","72216ace8e68322070868e9357f3c2ff"],["/tags/局域网攻击/index.html","18364b492ac36e5d98fba09d802918b4"],["/tags/常用指令/index.html","993905d0e9c094b56ea2fa7fba181b72"],["/tags/心得/index.html","d45934b5a2b5ce542874dca2472c9548"],["/tags/文件上传漏洞/index.html","00a08d9d73de0ee2e4227796087a48cf"],["/tags/文件包含/index.html","1556270ac7ba6f664fe730c0f156cafe"],["/tags/流量分析/index.html","cb275e8aa063e07fc14ceb1059ceac9f"],["/tags/渗透/index.html","b4a1d7f67a8b98325e3a5d8e932899d7"],["/tags/渗透认知/index.html","9919635efc31d780edc763e43ae30c3a"],["/tags/漏洞复现/index.html","ee1d2c73d0d385193762c57c6129b7db"],["/tags/留言板/index.html","7c2e0f94a7afcfa91a9334b557bc6d0a"],["/tags/赛后复盘/index.html","dc9f47ee160d566a6352730e52ff38dd"],["/tags/靶场训练/index.html","6f5d52c971e9aa3fa1430576154205ca"],["/tags/黑盒测试/index.html","e4a1a4a2815747743dfb76e406b5cd37"]];
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
