/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/index.html","1b5a3ab0e3ad53eda4d0bae658199257"],["/2022/01/01/ctf之reverse/index.html","cfcfa12cc09c4ca5cc54bed2be0d242d"],["/2022/01/02/Python程序运行常见错误总结/index.html","7e3632f8141c7851fec52811cd4082f5"],["/2022/01/08/ctf之web/index.html","68bdd099aeed430138aa44e6297d1c30"],["/2022/01/11/博客制作遇到的问题/index.html","bcbf83d1b1310c905f8498a40af15997"],["/2022/01/15/C/index.html","38437473c92016b1e42833aeb2c173e7"],["/2022/01/18/新版next置换/index.html","c94a1def08b409f15fb55b41f51848a3"],["/2022/01/19/不蒜子相关问题/index.html","35d2decff906747115bd0993f674c3fa"],["/2022/01/19/框架问题/index.html","771302356d02aa126a6d45ffa391fb0f"],["/2022/01/23/misc部分解题软件命令记录/index.html","8f15064619dddba46905cde30daa9778"],["/2022/02/01/684/index.html","016429a864a969355eec329a88fd6ac2"],["/2022/02/03/留言板/index.html","f3320b7efa130028013cb3eb65106e94"],["/2022/02/04/SQL简单注入/index.html","29c45bab5dccc9129596e985e60708bd"],["/2022/02/05/最全的HTTP头部信息分析/index.html","b0d27a6c1fc6f36e0a2082772e82aa50"],["/2022/02/08/ctfshow文件上传/index.html","610d1882afd55c4756a5123b08912a36"],["/2022/02/08/常见密码类型/index.html","1cf036243ab14f8b6e5295e5bfa41567"],["/2022/02/12/VNCTF2022WP/index.html","35013edf17735d92616b4ff06685ae05"],["/2022/02/16/rce/index.html","9489d19172eb3a60628bfbb3f323a9d0"],["/2022/02/20/ctfshowPHP特性/index.html","7d1adccd081bd338077be7cbe3738678"],["/2022/02/25/php伪协议/index.html","97b77791e3f2cc13c97d670bf2f29341"],["/2022/02/26/ctfshow文件包含78-117/index.html","e592d7de4c1a534b3862bc04e584b99f"],["/2022/03/02/Clash漏洞/index.html","9c6be6cb132c516cb2f6a9870f2c4883"],["/2022/03/11/流量分析之题型解析/index.html","6a570c1721f996418eb1eb5c6282b146"],["/2022/03/15/ctfshow命令执行/index.html","74f9386221b4d26b2daab2cd3abb2a56"],["/2022/03/22/CGCTF/index.html","d7b2f0fe62f6119539741118060149d8"],["/2022/03/24/ctfshowxss/index.html","3b843ef633b93254baeece06f757f939"],["/2022/04/04/黑盒测试/index.html","bc4a8a5608d50c58d719fe234ec2b3c3"],["/2022/04/11/nmap/index.html","35605e84d075a19acba39ed2231c2c08"],["/2022/04/12/渗透流程简要记录/index.html","dfae12940a1364449737519b8a9e9d55"],["/2022/04/12/渗透测试之攻破登录页面/index.html","512904da459bf336ba888daa025b3bf8"],["/2022/04/14/xray扫描器/index.html","7800e7616ced7d5a9012efb93ad18abc"],["/2022/04/15/ctfshow反序列化/index.html","77daeb9d3172508de92c88df35b69253"],["/2022/04/26/渗透测试实战/index.html","cdf3e19da5446b69abe9b98e583414b6"],["/2022/04/26/网刃杯/index.html","bb26872e0b7f5b630275f02bf6546c73"],["/2022/04/28/sqlmap教程/index.html","fe9d890ad4b598117a91f797ad94bede"],["/2022/04/30/认知文件上传/index.html","6483eb36a8a67a5a0adc3329c753b4ad"],["/2022/05/03/nahamcon/index.html","a629d5cc90b15004f16bb961c9688a64"],["/2022/05/15/awd/index.html","82cca14593a2ea3f294b81e503d2fdd1"],["/2022/05/22/DASCTF/index.html","7aeef0e61248a145b0324e7e78197663"],["/2022/05/27/520/index.html","9dc79a3c160ac745d0f2024815e0130d"],["/2022/05/27/ISCC2022/index.html","88016a9f888ff2d0cf997c1458fcca05"],["/2022/06/01/第五届世界智能大会/index.html","4bfe62901070f1835048835404e2ab90"],["/2022/06/04/SEETF/index.html","15ea04bed7ee4d1c3df11e2834ebf643"],["/2022/06/04/bcactf/index.html","7a8c1a051601cbd1688f1491283521b7"],["/2022/06/05/BSidesSF CTF/index.html","0e6d3ff9f099d98146fcf7844146c11f"],["/2022/06/07/Docker部署web题目/index.html","823bce2a795853a3aa0776383914d2f8"],["/2022/06/09/利用oj搭建C语言考核/index.html","d9c7c7374d92ad48444f7f8fd8877e14"],["/2022/06/09/论网站502/index.html","24a951adf394308a22fe6d61438a5ecc"],["/2022/06/13/限免题目/index.html","c154ba3c3df5ecf99d43d79b51e2f4a1"],["/2022/06/14/钉钉rce/index.html","79b0e4a6298cccd6c0f7a503d0f6dcab"],["/2022/06/16/内部ctf/index.html","c9c6e90c333c748fdc401780ad129433"],["/2022/06/25/攻防世界高手区(一)/index.html","437f6e4db6522c7c29a17f3d2b91d9ca"],["/2022/07/01/两小时AK赛/index.html","328cef84b5d1c1bc35121015d7816a1b"],["/2022/07/03/鹏城杯/index.html","de443b60dfa1db03a8558020e76417c8"],["/2022/07/04/XXE/index.html","04be7d81e21f82063c31f25ec8874c94"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","b2be228ca527e1b3f9d451b457100758"],["/2022/07/08/chinaz/index.html","3496cf381ed33988237c4269016de34c"],["/2022/07/09/蓝帽杯初赛wp/index.html","126c2259dde8198cb158a0f37b52f237"],["/2022/07/17/NepCTF/index.html","d831d860ed8cd3148312310b2506b4bf"],["/2022/07/19/ImaginaryCTF/index.html","7bda0cea07f6050f04b4f06b0388dcbf"],["/2022/07/20/局域网攻击/index.html","865f10d4c35b214fc817bf37b69c5eff"],["/2022/07/22/BDSecCTF/index.html","79de98e65a447c46efd8cd41f34691d0"],["/2022/07/25/DiceCTF @ Hope/index.html","7477bae5105e2930459436f52d5d6366"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","26abf8013ca6bbba78eb04e8a79e5426"],["/2022/07/31/TFCCTF/index.html","676edfc9836ec1a5ac7a2d9eb52d226e"],["/2022/08/03/NSSCTF/index.html","0aa36f5a3fef9363f3073c76f5429226"],["/2022/08/12/T3N4CI0US CTF/index.html","f27d2402ac8550d871053370f8aef2fe"],["/2022/08/14/SHELLCTF 2022/index.html","593f48053f808257834e90987c115ce8"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","abb730e0dd5473206abe56d1e9ceb783"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","ff57564194da62bb03ff26dd759f8cac"],["/2022/09/16/柏鹭杯/index.html","0178a9d9f1341618f6e9d1b5d6ed1136"],["/2022/09/20/HUBUCTF 新生赛/index.html","8efa97fe9be41a09bd3120afc6329354"],["/2022/09/27/NewStarCTF/index.html","aedd6422a93154f34346db4a5fa98d93"],["/2022/09/27/bugku渗透1/index.html","f076e8bbf3d51696420b7c559d93b779"],["/2022/09/29/tp6漏洞/index.html","60be1b1ce008021459be57c94fea34c4"],["/2022/10/02/SWPU NSS新生赛/index.html","457cdcc2f8b4309598656eee81af361a"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","d031cab52f933120f1f7b19082f863f3"],["/2022/10/27/Moectf西电CTF新生赛/index.html","391fa2bfaba873f70acb3bcbef0cf120"],["/2022/11/02/HNCTF/index.html","3cb3eeb95743f47e7f2114d50fd2b095"],["/2022/11/04/2022工控CTF/index.html","e94e17a47aa2c24ec47d1ffc310304f7"],["/2022/11/21/极客大挑战2022/index.html","da25c08c419973696e6850c90a9fe8e2"],["/2022/12/05/TUCTF 2022/index.html","82bd717d75be726063578edcd6cb9a95"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","e0a8ecafe5f82ab24f9cd636cbf91270"],["/2022/12/18/金盾2022/index.html","9f815f7c7f5dcc0575cf31e38d5a29b8"],["/2023/01/01/CATCTF/index.html","662fe837535cbe1fe5d544fbdb562bc6"],["/2023/01/09/RW体验赛/index.html","adc262df2b1a7e7c44fc8e4126ac0f13"],["/2023/01/10/铁三/index.html","ae17ca49091e4a237c1c6f3c4920601d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","20a48a2256304bc53d14a15e15d2f166"],["/2023/01/18/山石2022冬令营/index.html","b0fb2b42f3d13c41301b682c6fdcfcc9"],["/2023/01/19/SICTF/index.html","1870bd5c62ba8c8ebbb406450376a95f"],["/2023/02/04/2023西湖论剑/index.html","c9ed30f4bc2209bfca7da0ed7c7ac083"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","8acda4f97d7003fd368a1ba761794d83"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","ef4fd1b29f983fb0ff382cb81b85d888"],["/about/index.html","ff0eb873b33560c30893b96763a718e1"],["/archives/2021/12/index.html","42c06a9fcef754f30a838d7d7dde8c51"],["/archives/2021/index.html","421d3435970cb7c8475ee28a5b3516fa"],["/archives/2022/01/index.html","4e4a472c824eea19d88618f030b4338d"],["/archives/2022/02/index.html","bdc8ff091a3f7274fe2ca22170f657b2"],["/archives/2022/03/index.html","b982fe7122ff43e8eb5a2810b642b0fb"],["/archives/2022/04/index.html","9163c50c56afa422a12e7e288819efbd"],["/archives/2022/05/index.html","3fefc69b00c8094b0a8dc363f3fdefc8"],["/archives/2022/06/index.html","bdc561c20478ac675d6cf3453692286c"],["/archives/2022/07/index.html","6fd2be22a3d53ae751bce0a353bafe52"],["/archives/2022/08/index.html","3dad82cb0db2493201d85df734871b22"],["/archives/2022/09/index.html","41d1330618ae6ca18fa67a5544cbfee2"],["/archives/2022/10/index.html","232096947b525fe67bdaab8cea2b86ae"],["/archives/2022/11/index.html","22a569b58feba893ba3cc15974a84f7e"],["/archives/2022/12/index.html","3d247a05a2178ffd5e9911a78d002ffd"],["/archives/2022/index.html","50a3f55b767512e1b5d2088e13c51e1c"],["/archives/2023/01/index.html","4d99be54d5a68c8d9f46fec2105f0f76"],["/archives/2023/02/index.html","0d9bb1f13e880ba8a7b85685517916af"],["/archives/2023/index.html","a70568eb30c590ccb9f1d567fbfcec2d"],["/archives/index.html","faedbc4acbcbe3865131f3bea992a3ac"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","8c127f90f71c736aaeefc66298c2bae7"],["/categories/CTF/index.html","7e69acc754d7e8e491e849cb26a99f5c"],["/categories/PHP伪协议/index.html","e2e6e02d0e574954a70c62ca8ead7a08"],["/categories/Python/index.html","4a3b39daa8ccfb0516fb21092f3d0fcd"],["/categories/RE/index.html","4fb1a75d941a95cfb148c25f8c19b5c6"],["/categories/Web/index.html","18580ad89c8bbab5abe4cb6761065a16"],["/categories/awd/index.html","e55e648c359cff3e782073e9ba0fb629"],["/categories/index.html","659029df5f0746601ea056379fdb9032"],["/categories/misc/index.html","93f6b36fa000c0c2719ec55a88999b9b"],["/categories/sqlmap/index.html","7b4939adb6cf2ee0d943a13e10765427"],["/categories/博客相关问题类/index.html","4343d6acf88ef2aa46b9f1ecd7934a2c"],["/categories/局域网攻击/index.html","88a56723c4ddc5b7c8a9ee3f762f4405"],["/categories/心得/index.html","e86028bb7c1171cc85f5e2187dda8bec"],["/categories/流量分析/index.html","4bc5ecae9d6dd8dd15e14f84e6a1a5d0"],["/categories/渗透/index.html","db77a57500b1efefc1281df386bf3026"],["/categories/渗透测试/index.html","e31fc6d66536642d8740711a0f8fb0f5"],["/categories/渗透认知/index.html","513b23dfcecdc37aee0c5a02e7ed2462"],["/categories/漏洞复现/index.html","2dc4958cbf53cf4e8f5732bd71e11df4"],["/categories/漏洞测试环境搭建/index.html","4b158e2c72e9214f39727d6779db7fbb"],["/categories/赛后复盘/index.html","cc53a4fdf79f79886f2af5ef54ede90b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8d29b762858926dd092660cb81a54d06"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","97df57235435dfede1f9d339dcd0ad71"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d623b26e4648040302b616762d27e0aa"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","3e165519b7c1b8206d148c72c2c9ff8d"],["/page/10/index.html","b15b54c72b0507ceca4623a02bcffe78"],["/page/2/index.html","d5eb6231388cba73d1e86bfe56d9bd49"],["/page/3/index.html","5aca5b6a7ec1c8572209608ab88bb607"],["/page/4/index.html","79add6302558b7c6831ffdf9cb39caa0"],["/page/5/index.html","fb2d960a7aaf22b9dd58ca2062b69ef7"],["/page/6/index.html","079768dc41f5f39c824a97226ad5bc14"],["/page/7/index.html","21088dd0e315a3f3ccf6389db54af18e"],["/page/8/index.html","fdd93b5e6412296cd0125a913bd3f27c"],["/page/9/index.html","d365e5da1ab6555426fc149b3ecf1a99"],["/sw-register.js","ae3b42a2e2786134d408e71603d81b32"],["/tags/C/index.html","42aa5c461896f8c1836e02cd1b491886"],["/tags/CTF/index.html","00fb6a70e0209ad656735ff66675f063"],["/tags/HTTP头部信息分析/index.html","5f0ea17d3673385e577bc12c100abb38"],["/tags/PHP伪协议/index.html","55b7960edef46573fad230a492419465"],["/tags/PHP特性/index.html","fc9bdcb0284c0c0f7e090d411c2e5a21"],["/tags/Python/index.html","e6b480ea5bb6e79e5581d30019ee2f72"],["/tags/RCE/index.html","854358c62fc5e69d7e23f747cd1fc6b9"],["/tags/RE/index.html","8297e255a5d8d55020ed8be55fcc3a43"],["/tags/SQL/index.html","d9e013e98875722cf86da23eee95b3d8"],["/tags/Web/index.html","9e0e97d9ead8a411409e03a9c83beb97"],["/tags/Web工具包/index.html","014dd850a0c37bf4c387d5113972b768"],["/tags/awd/index.html","024d71c5c6b774522466fd610656e840"],["/tags/bugctf/index.html","66159917142e106e11f4b3fbf01989ee"],["/tags/ctfshow/index.html","62ff208f9fae70a609526ed64f9a6f6c"],["/tags/index.html","d60addcd377a6bf474df6ba2a9d1455a"],["/tags/misc/index.html","ec91e58e700ed4a308cf681c8d1c2293"],["/tags/next主题失效/index.html","0e2c7b5311759f31cc2bf7ec9182075d"],["/tags/sqlmap/index.html","fbda03a86462925d8556693fc0c55cf2"],["/tags/wp/index.html","06998ed769f4512314e0a1d3ceca3463"],["/tags/xss/index.html","06e1019961e1fb281aa9cf1cc9284f9a"],["/tags/xxe/index.html","176dcd5c807e0e5fcbbee4152f6ca121"],["/tags/不蒜子不显示/index.html","19fca82fe018d8156a71d09340a960bf"],["/tags/博客/index.html","cbbb46bcf26061d3d2bf20b4afb22abf"],["/tags/博客主题优化/index.html","092e37fd34afbc9f06faa4c876efdc70"],["/tags/博客死循环框架问题/index.html","4f5988c55d331f516ac4d4fd2ce7b6d3"],["/tags/博客部分问题解决方法/index.html","abd3b7ef57e1f3cf3dc0259d8f19a61c"],["/tags/反序列化/index.html","17cf3d7934e17a6fb5f2464ad6bf59b3"],["/tags/命令执行/index.html","79493b9de0f6ea9ce18b6c21aad9da5c"],["/tags/局域网攻击/index.html","7732becb38db9d9058b0d4d8cdb124e4"],["/tags/常用指令/index.html","ec22fa03a57c9aeb367328f78d451835"],["/tags/心得/index.html","6cb9a1a7488baf108fff9cea3e05326f"],["/tags/文件上传漏洞/index.html","e21901bfedcea1c5451c3ed8653c814a"],["/tags/文件包含/index.html","edc4b130b8b411a4c3ca999ba9315d13"],["/tags/流量分析/index.html","0abd332175c19a44d3dd0e7ad8e5eb13"],["/tags/渗透/index.html","435370156cd88f28f5af73e2bb108f7b"],["/tags/渗透测试/index.html","5595237fb34edbe88a00f7cce0c17071"],["/tags/漏洞复现/index.html","11ad50b4cef325cc505f20f8d2a52aa8"],["/tags/留言板/index.html","e3ede010aebad297ad38f276de23c3b6"],["/tags/赛后复盘/index.html","2b7d8c2bd61b51e52278ee0c0236c2d5"],["/tags/黑盒测试/index.html","6479e5bd8cfbb1d04f015e2b2acce840"]];
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
