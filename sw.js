/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","0555e4f014b4716271bb427cb071a186"],["/2022/01/11/博客制作遇到的问题/index.html","009723bd9f08faa8b1a87fd47e1fdb57"],["/2022/01/15/C/index.html","faba50279ab2d029b24e06df99e3b4a0"],["/2022/01/18/新版next置换/index.html","da62f4f630f0b3c5da4c9f8b6a76bfff"],["/2022/01/19/不蒜子相关问题/index.html","de194b0e4f4d4755fac8ec4d92a65326"],["/2022/01/19/框架问题/index.html","4b7e1be4d354224404722feb583dfb70"],["/2022/01/20/ctf之reverse/index.html","a373fcb324dd8eb1c9043d3552d71fcb"],["/2022/01/23/misc隐写题目总结/index.html","0319f12a58ce58965cd6ca93520671bf"],["/2022/02/01/684/index.html","100e86052cdecdefeaa6d1d1b1c14b2f"],["/2022/02/03/留言板/index.html","b36f7482f8d2d32e89044ea903baa001"],["/2022/02/04/SQL简单注入/index.html","f801ab9627047ac369eaa46d6bd5433c"],["/2022/02/05/最全的HTTP头部信息分析/index.html","143a33793804ca64d07b77debb5155c7"],["/2022/02/08/ctfshow文件上传/index.html","ca33aaa0203edb4785d86490f9986a82"],["/2022/02/08/常见密码类型/index.html","9a934f4eb35d6a422dad82657af3190c"],["/2022/02/12/VNCTF2022WP/index.html","4df0811d070f4a95125da70bcfdc1048"],["/2022/02/20/ctfshowPHP特性/index.html","6a267596b749f47ba5255b37a9bd82f4"],["/2022/02/25/php伪协议/index.html","763770aece06f936db1ed34e44b64c95"],["/2022/02/26/ctfshow文件包含78-117/index.html","3f9d5d291b936885e8691488fafe4f3c"],["/2022/03/02/Clash漏洞/index.html","5e8c391b5403548030cc26eb308ca404"],["/2022/03/11/流量分析之题型解析/index.html","b849d786be78b33492f59bb5ed40a985"],["/2022/03/15/ctfshow命令执行/index.html","3dccf746eddfb8630fab4e62bf0d235b"],["/2022/03/22/CGCTF/index.html","bd134e9eb876ee628e5fd9845b21bb92"],["/2022/03/24/ctfshowxss/index.html","b74c26ffbde55c60f921628995319fe4"],["/2022/04/04/黑盒测试/index.html","c2427a503aef2ba1fed9e4d71c0f60aa"],["/2022/04/11/nmap/index.html","d2f7d0e4d38b8184e098b625253ff91f"],["/2022/04/12/渗透流程简要记录/index.html","9d8f0714c0d8dd756d9143ac00a4537c"],["/2022/04/12/渗透测试之攻破登录页面/index.html","00271aad86aeac50b08d960175f310b9"],["/2022/04/14/xray扫描器/index.html","92bb2d5c8d48fcb4cbf8c5a23bbf2e74"],["/2022/04/15/ctfshow反序列化/index.html","bb4f87e64705e72d8663bafefde74e89"],["/2022/04/26/渗透测试实战/index.html","c4bc605815229d2bde64f7587c23724a"],["/2022/04/28/sqlmap教程/index.html","077c4f5b3b6fbb519a1e686045d77865"],["/2022/04/30/认知文件上传/index.html","26e79ed11f74f038b30b23e5ae1a0681"],["/2022/05/03/nahamcon/index.html","c420a555bc2485a4328bb3d81850cbda"],["/2022/05/15/awd/index.html","f32edad1e5682bd2693ce109a9a8085d"],["/2022/05/22/DASCTF/index.html","f27dd96f0a467b93e34c4d7e9492056e"],["/2022/05/27/520/index.html","6a1a8d1af09b5b3ba9ba7b25dd05740b"],["/2022/05/27/ISCC2022/index.html","a852b896f4e7fd6bf0ab53553aed2ccb"],["/2022/06/01/第五届世界智能大会/index.html","d5b41aff31cbbfa64ac41aec2c19bcb8"],["/2022/06/04/SEETF/index.html","7946dd3b9e6eb178d87322df07aa1ad5"],["/2022/06/04/bcactf/index.html","177ebeb7bc8ae800283eea335dfbc230"],["/2022/06/05/BSidesSF CTF/index.html","2060454abdef59521f98dcd8a511b28d"],["/2022/06/07/Docker部署web题目/index.html","f1e652ed2c250aa5d8418860dad0f85e"],["/2022/06/09/利用oj搭建C语言考核/index.html","ab84ab023823c8b1576b6d39a8da369d"],["/2022/06/13/限免题目/index.html","1abd8bf0465c6f1917ca963f29114b77"],["/2022/06/14/钉钉rce/index.html","4ca219c9c41d1a9d8c8f9e6f50d9846c"],["/2022/06/16/内部ctf/index.html","ce8ddd9a6c5b83272ec86617b59d473d"],["/2022/06/25/攻防世界高手区(一)/index.html","19d0eca36a95fc75b9675d1b8b609045"],["/2022/07/01/两小时AK赛/index.html","d517fa6508dcd32d8e1de30d4d739902"],["/2022/07/03/鹏城杯/index.html","3df8f4c66143c1c8a24c9d81878be3f9"],["/2022/07/04/XXE/index.html","6143d071a3160942f115e7afd63f65c0"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4a6c8d36a04e22668fadd89b7138671b"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","4f14050c854168564770022e411a0dac"],["/2022/07/08/chinaz/index.html","2f8ff7f6bcacafcad29faefb10500ec1"],["/2022/07/09/蓝帽杯初赛wp/index.html","3a90792b1bfbc4f20781ff708918bc5f"],["/2022/07/17/NepCTF/index.html","5da01c7d5d25dae73f5d526dde3f17ad"],["/2022/07/19/2022ImaginaryCTF/index.html","5f934d1dec83894359033b28f6e1e44e"],["/2022/07/20/局域网攻击/index.html","f1fc413c2cbc418a77606dae4d02fe6f"],["/2022/07/22/2022BDSecCTF/index.html","2a5acc89c02ca710601892f4331074e8"],["/2022/07/25/DiceCTF @ Hope/index.html","5feaf82079a099952660817acb5c0963"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","2e251acd07c621663ccc710b8528e5c3"],["/2022/07/31/TFCCTF/index.html","1120884a3c339406313870e58d42d3ca"],["/2022/08/03/NSSCTF/index.html","3f15e221f59b8bd5d4a682de628e6eeb"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","eca75e248b91931c5c19f6997cc4fd2f"],["/2022/08/12/T3N4CI0US CTF/index.html","b4880e7f1b84445f4d692727dd814fce"],["/2022/08/14/SHELLCTF 2022/index.html","847cf594a403f4fd85e3ea53feec8786"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","e2ad06c3b7c8c351992272f2daea3f36"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","425e741ac725860fb459931460dceccd"],["/2022/09/16/柏鹭杯/index.html","1ae05c16d07d7d89d7407028af073675"],["/2022/09/20/HUBUCTF 新生赛/index.html","9d884ef1a53f39e77e25b8caa49d29d7"],["/2022/09/27/NewStarCTF/index.html","b7ff3a46625c55cefc178e092cf30665"],["/2022/09/27/bugku渗透1/index.html","e1e09fdc2dfd7d5dea6cefedf6d5741f"],["/2022/09/29/tp6漏洞/index.html","5ac1220816314cd9b692c3af63818cc1"],["/2022/10/02/SWPU NSS新生赛/index.html","9f9be69e5fc65bc3d96680015dccc193"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","c3e581e5eb574ff1ebd41843913aa3de"],["/2022/10/27/Moectf西电CTF新生赛/index.html","75a63017ce04a22567abd8a6f6948b69"],["/2022/11/02/HNCTF/index.html","27d80a5ae6a0333c309876759b8ce05f"],["/2022/11/04/2022工控CTF/index.html","952233a266f197cb1b59b0ae045aea13"],["/2022/11/21/极客大挑战2022/index.html","2bc1b2cd5ee898857abe08ad054e9ca6"],["/2022/12/05/TUCTF 2022/index.html","87d82a69ee447e81ffd3d697d91e3dc8"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","73994b5add9273372e55c2efe3f18763"],["/2022/12/18/金盾2022/index.html","36e5310b8bd2384abd7668a1d91eb649"],["/2023/01/01/CATCTF/index.html","70ec74e3abba6354a8556397e88c018d"],["/2023/01/09/RW体验赛/index.html","444f7b571c6fb2da6a9345914abd5e95"],["/2023/01/10/铁三/index.html","42a9f4c1767fbe093372f92746fa7fa4"],["/2023/01/16/Ugra CTF Quals 2023/index.html","3b321ef8b85eb12ad7e8d63e441dd555"],["/2023/01/18/山石2022冬令营/index.html","d55925a7c2ab939bfd721280811df4bb"],["/2023/01/19/SICTF/index.html","b2e50fef6feaa866f171c2641e8dd77d"],["/2023/02/04/2023西湖论剑/index.html","e9773d485b61d5b00ed3b1b2ef396b72"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","7b43bb2b5f4d63e51f34b8ba47f9643f"],["/2023/03/04/公安/index.html","84fd08c1fba39d033c8a94e554c186d8"],["/2023/03/07/mysql之udf提权/index.html","f4e034ad5fc8f25ed83ae7f48b015cc1"],["/2023/03/07/红日靶场练习/index.html","ac8cf4f2dbe69123101cec922d968fd4"],["/2023/03/27/NKCTF/index.html","d9676585a8e4cf73a624169913e06c0e"],["/2023/03/31/楚慧杯/index.html","12f1e3292ce07281d8adba0a1174df8c"],["/2023/04/23/HDCTF2023/index.html","e7d8eb4ef11622fbd9d8b006fff9afd4"],["/2023/06/01/2023CISCN初赛/index.html","51d2de0870ecc02e0168fa0e0e95e080"],["/2023/06/28/2023CISCN[华中决赛]/index.html","1c6cf49a5b71cf7ed7aa1413d8271a8d"],["/2023/07/10/CyberSecurityRumble Quals/index.html","9eac8cb3ae18bf4d8a0a49365fed7781"],["/2023/07/22/2023BDSecCTF/index.html","3c5dd8d71a1eee53e6bed607344d4eb2"],["/2023/08/07/SQL手注小记/index.html","8aa0816794e4b730fd3593c89e0f0de0"],["/2023/08/27/2023陇剑杯/index.html","25b37ee70699af8f1c9fcaab80c85aeb"],["/2023/09/17/2023蓝帽杯半决赛/index.html","6ce7dc48e2773c17f2726a3b191cb5c2"],["/2023/10/23/对于多层代理的研究/index.html","e2f25171d0db077bdc4edbd2cd864990"],["/2023/11/25/金盾2023/index.html","db702408f466fe12f1bd556eca8742c6"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","b14d8b696cd1fc315c2499255597ac03"],["/2023/12/18/2023强网杯线上赛/index.html","08d0edaf4e93e303d94dbf7eceb6bdc1"],["/2024/01/08/基础ROP/index.html","44351715b0f4e95012045ea11f042aed"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","1cc055d0ee861aba6ec15f785e919833"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","656ff0132274ec558f29a89abf79e8a0"],["/about/index.html","d8a56c844f077aa7b7c800bc23fbec18"],["/archives/2022/01/index.html","fa94de3fc0a39a35618d774897dd363b"],["/archives/2022/02/index.html","94524355aa6d13bcc30a6266a38ea2af"],["/archives/2022/03/index.html","45c147e485d36f9b27bdc17373479149"],["/archives/2022/04/index.html","658a85856192a74ae8652a3f7b46e132"],["/archives/2022/05/index.html","a36abc5f23315003bc29b47b313081b0"],["/archives/2022/06/index.html","0c8dbe7c9dd7c878bbae3330d7bc8fb0"],["/archives/2022/07/index.html","184fd705606296edab6dddcd4031fa4c"],["/archives/2022/08/index.html","fe4b3f4deb181822c184a6ad7266d2fe"],["/archives/2022/09/index.html","c4614efd6ff233c41b565c5a463849c6"],["/archives/2022/10/index.html","c0ee7df07ac7d906ee9bbf7502427d03"],["/archives/2022/11/index.html","937e4369202f13e81bae2b8fb5d5bcc0"],["/archives/2022/12/index.html","99acacb7f665fa72c83907c0ba6fcd29"],["/archives/2022/index.html","076332904aa598fcb1e160816a980f05"],["/archives/2023/01/index.html","6c4afd43aa744cea809053cf934a9718"],["/archives/2023/02/index.html","9d867ab5f23690faefb2786f26c15ec0"],["/archives/2023/03/index.html","567625f343b728c6040e1f78940bd5e1"],["/archives/2023/04/index.html","dba805b1fa1efd1fa32a67f1a52ff4ff"],["/archives/2023/06/index.html","7152587c66541b5822af30968f1af6fb"],["/archives/2023/07/index.html","f219a57bc59d18f75253bbd4288d2c6d"],["/archives/2023/08/index.html","e78dcc0ce70a5f8fa7ea9cf117520f53"],["/archives/2023/09/index.html","ac9f0d74d91bac584cc70634d8e8ca35"],["/archives/2023/10/index.html","dd898fe5b3a0ecff01c2eae2fd55969a"],["/archives/2023/11/index.html","fa85cdfe03331c19c836ac3b30cf580f"],["/archives/2023/12/index.html","c73e8a1e5852bac6473f3efbf9f46491"],["/archives/2023/index.html","607c69919fe848de7e629ef5f73de002"],["/archives/2024/01/index.html","af6271d791b3d813f167bf64741efc5e"],["/archives/2024/index.html","6d6451cb70cacfac42cc1ccab0b511db"],["/archives/index.html","5bc6cc8776e6aae462a7e78fda8fa1c4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","a3124959925f281b941e2744668adfa2"],["/categories/CTF/index.html","c822ff54d5f169d5360a722064e3fb71"],["/categories/PHP伪协议/index.html","6847da28c316250d9378a70244acda6d"],["/categories/PWN/index.html","ce1596cf6c8745ff52542cae77d08119"],["/categories/RE/index.html","3cb1abdd2057a3c36b58619907fb05d8"],["/categories/Web/index.html","6051bd465bc695568f5ac1aee9cb6d67"],["/categories/awd/index.html","518c49a8b65d60a32a3d0301a7fc8c82"],["/categories/index.html","c8f062644ae2320410b57593db80dd04"],["/categories/misc/index.html","819a7cd485aed42f4e97029ae8e66b87"],["/categories/sqlmap/index.html","0f14a5b11bbd40cb52719822ba7b2606"],["/categories/博客相关问题类/index.html","2ffc300fa05f021350e8d0d92f0be557"],["/categories/局域网攻击/index.html","8a62bf082a2508fdcd7cb5bfb27194e4"],["/categories/心得/index.html","5271b8b1c2a96638b5b6731bc6560c7d"],["/categories/流量分析/index.html","837efa2efd64c7da3e3a8cf3e2896e52"],["/categories/渗透/index.html","b56a5bebb0ab8c7d68b9f3018e236469"],["/categories/渗透测试/index.html","71c4ceea0ea2cc161b9fc5429672fa68"],["/categories/渗透认知/index.html","18c1f6ecd901e815d0ecd6ae25f886b7"],["/categories/漏洞复现/index.html","ddc27c6b5a7779c49762a566d42d044f"],["/categories/漏洞测试环境搭建/index.html","674746e9d9b8336183e3231eef0d95f7"],["/categories/赛后复盘/index.html","e9408a124ff41cce7bdd7bef83a4743b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d49d8eac87198a68acc60768d285c55b"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","f7716dfec3ce7ddae22b7ff2dd53cfe2"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","330e30b3bcb78827dafa9e738cc42cfe"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","ed68ca6b81eb67c50f3d85e57c93caa4"],["/page/10/index.html","dd509359b6c5113f447f5f8fea5d77c0"],["/page/11/index.html","15788003460c5b267cf0c6cb10614337"],["/page/2/index.html","43229c3d74be4e084ee9247c50401e1f"],["/page/3/index.html","e04e8b7d4c0b66588ac49e28ead00ec1"],["/page/4/index.html","49592bfd2db50903124cd7fc6c52c404"],["/page/5/index.html","69ed7c8137132b8e2c592158a392c78a"],["/page/6/index.html","689502ed3acbdac86e8f3c24dcaeaa7d"],["/page/7/index.html","65caac23b72b500a3a1d80772b53e3ea"],["/page/8/index.html","e2f21f731d972c001295960f129912a2"],["/page/9/index.html","8b8b5e53a2e9c9814407915e7051cc17"],["/sw-register.js","ac47b27630759d4656a6773f29a855b4"],["/tags/C/index.html","6f92cdc42e83ee934e74ff5cfd286074"],["/tags/CTF/index.html","8a766433231c66586bcd8011580f0f8f"],["/tags/HTTP头部信息分析/index.html","d2ade4b376dcddf07a1b2e5dd0576928"],["/tags/PHP伪协议/index.html","91bd517a5f18a9eda7cb8184a06bf017"],["/tags/PHP特性/index.html","ac1409695a589c7dc0889b598e652b1c"],["/tags/PWN/index.html","eb51fc91eb40b169ff9b95a273e40b80"],["/tags/RE/index.html","ba017eb5a60bf27f14056bde79b27edd"],["/tags/SQL/index.html","c57f8bae854ee0a7a13db248fe7e1b04"],["/tags/Web/index.html","1aa00ee7dd4a6c862b7f8e558f2b0b32"],["/tags/Web工具包/index.html","f92b325f21f6b4a90d13d043dcab1908"],["/tags/awd/index.html","7d4640e337074863dbd7d6e00b8c5b66"],["/tags/ctfshow/index.html","28d38b10a2af10355f9fd68d44ab217f"],["/tags/index.html","fec75ca321dc2e1732d922ef99c3dde8"],["/tags/misc/index.html","64226e90f185c5c555a26fb905f25957"],["/tags/next主题失效/index.html","1c5ffb87214430a7d10ceeb17b16a2dd"],["/tags/sqlmap/index.html","d6c4ec55a69328313790f8b08b624ec1"],["/tags/wp/index.html","c1ca199a8d9ab18261132b6a94bb4654"],["/tags/xss/index.html","1e1122415776089d7a161e736de9323e"],["/tags/xxe/index.html","2773bdb590ae754daa67d48d3448f86e"],["/tags/不蒜子不显示/index.html","587e97ea4a011216846f078c21cba73d"],["/tags/博客/index.html","b431a1bc491c1390c17e544cbc02d2cd"],["/tags/博客主题优化/index.html","3570003a4cb9ea5c2623440d8874b37f"],["/tags/博客死循环框架问题/index.html","acbeb113d3a0a476eed639713f3f57e0"],["/tags/博客部分问题解决方法/index.html","654272983be68520226f1f5e037f73ce"],["/tags/反序列化/index.html","06909f7c0ce5f507a5e927096c6b4db7"],["/tags/命令执行/index.html","801374b562ab305938105dd58da55bf3"],["/tags/局域网攻击/index.html","df1f7ffba23cf7f207f3b544388adcbb"],["/tags/常用指令/index.html","2a17c635dd4ff47103b789b4ed069c02"],["/tags/心得/index.html","bde687ce0f6c717f8389982d5f3996c4"],["/tags/文件上传漏洞/index.html","fce13e6a2cacfb97c8665c24e84171aa"],["/tags/文件包含/index.html","a3b3acedc665d4d5c68fc2b1c5fbba96"],["/tags/流量分析/index.html","224f92f7549aabd26d33627c8ac3aabf"],["/tags/渗透/index.html","7de47ae46dc0bb89676fee0356aa34e2"],["/tags/渗透测试/index.html","5b661cfaa21ff05dd81cdf6686ef4880"],["/tags/漏洞复现/index.html","799342d6b99c02154f1ac20bda0898d1"],["/tags/留言板/index.html","ae3408febe5eb91ebcf8ac444ef9216a"],["/tags/赛后复盘/index.html","daf8ff888b28462f5d6d22b1cb7fd74c"],["/tags/黑盒测试/index.html","f79a41bc588cbf933a11305e5b6d2c02"]];
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
