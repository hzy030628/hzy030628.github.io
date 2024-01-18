/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","0f8567c2a812225d433b903d6f96b730"],["/2022/01/11/博客制作遇到的问题/index.html","2fe7fab54945d170466c28c5c17b85ec"],["/2022/01/15/C/index.html","8f30c4bf9bd57dba17628d3c19ad88e8"],["/2022/01/18/新版next置换/index.html","97c904ca49e85edea5a5db8e2664ec79"],["/2022/01/19/不蒜子相关问题/index.html","a48c3f2e46cb60ee9703fd34b819861b"],["/2022/01/19/框架问题/index.html","341c7100720d3fb9fc2d288746f26aa0"],["/2022/01/20/ctf之reverse/index.html","624f28ff07d9572d75a7255234ed8286"],["/2022/01/23/misc隐写题目总结/index.html","358e14c56686033634b1b2426d91ec59"],["/2022/02/01/684/index.html","00e592fc492aac39f269c4ff45a3626e"],["/2022/02/03/留言板/index.html","f80fbc84456566934ea04fcac9fc5e12"],["/2022/02/04/SQL简单注入/index.html","a29e394c0630fd93737df81fcb7d63fc"],["/2022/02/05/最全的HTTP头部信息分析/index.html","4ead2b8a4bcdc0cc80f8804911f9d7ec"],["/2022/02/08/ctfshow文件上传/index.html","3a5c3c950145ebbdd526ed1356d79c0a"],["/2022/02/08/常见密码类型/index.html","ba6f54811e8f8de56fbde7445665be50"],["/2022/02/12/VNCTF2022WP/index.html","af2e3879528582e1528c60ddaeafde17"],["/2022/02/20/ctfshowPHP特性/index.html","f1ce2b6769e7c62576596ce088d6e955"],["/2022/02/25/php伪协议/index.html","8c6b2d4e6e7ed0dbe17f1bd32e52669f"],["/2022/02/26/ctfshow文件包含78-117/index.html","781b3c2b88f047bea1809102343d4f5e"],["/2022/03/02/Clash漏洞/index.html","46ed439b3b4e54e98a87ade74e1f71c3"],["/2022/03/11/流量分析之题型解析/index.html","174be2cacde8234e9c0fad8fa5a1694f"],["/2022/03/15/ctfshow命令执行/index.html","485b11808fe81a93643e4653d4f6b6d9"],["/2022/03/22/CGCTF/index.html","82005dd94527731ec29dd6dc55c4416e"],["/2022/03/24/ctfshowxss/index.html","fe4501680465a9c70eaf2f86220be33f"],["/2022/04/04/黑盒测试/index.html","ea279caaae92ae42367a5b93ab55bfdc"],["/2022/04/11/nmap/index.html","64c78f6e39949b8a683f872b1a9b3ed3"],["/2022/04/12/渗透流程简要记录/index.html","0edccd01509f83bbb1360d0381e85a1f"],["/2022/04/12/渗透测试之攻破登录页面/index.html","c1bc5454da42f0438f063beae2905137"],["/2022/04/14/xray扫描器/index.html","08cfe876d3307bd2233d530bce21457d"],["/2022/04/15/ctfshow反序列化/index.html","a7d4f48d402ae1156294bef5aa4040e8"],["/2022/04/26/渗透测试实战/index.html","f63136971101ad279bf4c833d9464e07"],["/2022/04/28/sqlmap教程/index.html","5a7b6533f2621bf1c8670042abaa05a7"],["/2022/04/30/认知文件上传/index.html","f3f6863e20b62e2e6dd1f33bfcf4076a"],["/2022/05/03/nahamcon/index.html","ff963a62677ae39d21d0308bd3cb183d"],["/2022/05/15/awd/index.html","71f1633935984dd0864e7a67dd022ed6"],["/2022/05/22/DASCTF/index.html","d6321c153bf106223520f79de96592eb"],["/2022/05/27/520/index.html","d412aad79fd0d4b6296fa356c68303fe"],["/2022/05/27/ISCC2022/index.html","1548cfba847b87d6786627fa3d022d32"],["/2022/06/01/第五届世界智能大会/index.html","c4cf53f26618e996bf15e444e883a6b6"],["/2022/06/04/SEETF/index.html","78a073730be343eb729847b2de2ed630"],["/2022/06/04/bcactf/index.html","3dadfceb0ac4b8a2461010d97e5e88fc"],["/2022/06/05/BSidesSF CTF/index.html","50fb460e74de44bed0f86b324fef0667"],["/2022/06/07/Docker部署web题目/index.html","ed536ce1f7df142de94c786d2ea54eb4"],["/2022/06/09/利用oj搭建C语言考核/index.html","dd6c6c0b9039b18413bdbfe4d88f79a9"],["/2022/06/13/限免题目/index.html","0d9e6395e96c43606a8d184d4b409896"],["/2022/06/14/钉钉rce/index.html","8664715cfaa7042fbbd11c83ba3ba784"],["/2022/06/16/内部ctf/index.html","54a8ef7a0e3128857acac165e2dbb71f"],["/2022/06/25/攻防世界高手区(一)/index.html","25b8630a23470c4c7c0ad60dac726bb2"],["/2022/07/01/两小时AK赛/index.html","17edf4bdb398fc9ccb30d3d3454c8746"],["/2022/07/03/鹏城杯/index.html","6d150b338b096ffebb3a365abd8081a4"],["/2022/07/04/XXE/index.html","0556767ba8668afd82f809343858ca1d"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","628878d6f4590132692b92e67d254bbd"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","2b54b0b1028e952c28979c7935e11953"],["/2022/07/08/chinaz/index.html","3f255395a0e7924535f26f6dda5f096a"],["/2022/07/09/蓝帽杯初赛wp/index.html","5d045a025b59b89fe6379d0f98224a4e"],["/2022/07/17/NepCTF/index.html","2160cd5052f69f8c9a24cae4bdfb69e8"],["/2022/07/19/2022ImaginaryCTF/index.html","383abe9edab80014ae8d8c59a35ceaab"],["/2022/07/20/局域网攻击/index.html","bcbc417df73df0d61b52c106a8b86c5b"],["/2022/07/22/2022BDSecCTF/index.html","0f17dcf082f13a458fd149b0abe983a3"],["/2022/07/25/DiceCTF @ Hope/index.html","1cfbbcedc31f42623a078122a6845c5b"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","e448e5c5e058ae508ee146a691f66652"],["/2022/07/31/TFCCTF/index.html","72dbd7f754e1332b9e97c4a5d12227b1"],["/2022/08/03/NSSCTF/index.html","18750c90c9e9daf95980b5b83e1cdcab"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","c99be3fb32c8bb3eccc613d2c2c3a0d8"],["/2022/08/12/T3N4CI0US CTF/index.html","167467c9a03d7f5a4b03a203f3f9f377"],["/2022/08/14/SHELLCTF 2022/index.html","f842763e9bad675aca19c2a3728651b0"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","5f3eef03712144ae433afb3d1b5274af"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","d7dcaebd558296515d77d8e3ca0d942c"],["/2022/09/16/柏鹭杯/index.html","20cb4df9b44d330153e94db52108b3e8"],["/2022/09/20/HUBUCTF 新生赛/index.html","2c441e44de5e90563fc0d35eb23764fc"],["/2022/09/27/NewStarCTF/index.html","61f6271487849fbf186f996b265304ca"],["/2022/09/27/bugku渗透1/index.html","4f1b8e520eb6ec6b28c730f4145a8323"],["/2022/09/29/tp6漏洞/index.html","9c4c524d4530697dcb1a8aeedbc42c22"],["/2022/10/02/SWPU NSS新生赛/index.html","a932dbaad6080de8b4ba8b6170b38bb5"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","655fed6909de21c3602dd37ba46cff0a"],["/2022/10/27/Moectf西电CTF新生赛/index.html","769e9a23386132f4b8121ff836c691a1"],["/2022/11/02/HNCTF/index.html","419fec43ee9511db57d44b682438e610"],["/2022/11/04/2022工控CTF/index.html","f3ea5d019d8c26e362d742dd9e80b904"],["/2022/11/21/极客大挑战2022/index.html","66f4efd7200cbfe7cccef5ff59a8c608"],["/2022/12/05/TUCTF 2022/index.html","b91bcb280c9b27d58fbac217cc3e08b1"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","e818ce7d8215004966c99b8591190d28"],["/2022/12/18/金盾2022/index.html","362fae0e8847ce51797f5219fe5ab0a4"],["/2023/01/01/CATCTF/index.html","eeee17276d0c28cb514e3aa193a8e1d3"],["/2023/01/09/RW体验赛/index.html","96b4bff52574ca3e0210277b39d1497e"],["/2023/01/10/铁三/index.html","55bbe76e18efc2e844590f87a1b1a15c"],["/2023/01/16/Ugra CTF Quals 2023/index.html","61b2175d1c580b7e656567aa4b32aabb"],["/2023/01/18/山石2022冬令营/index.html","35f4cc6136037264899fdea87f4da70a"],["/2023/01/19/SICTF/index.html","4299eb29481def08e036a077d9c456b2"],["/2023/02/04/2023西湖论剑/index.html","13eba5bd461dd366420faea7264dd3d0"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","fef0acf81bc42139fd38b67a1eace4b3"],["/2023/03/04/公安/index.html","a5bb00d95fd06478457aa2764c2cb482"],["/2023/03/07/mysql之udf提权/index.html","7bb45a4b5caca075e35fdb60bfc8d485"],["/2023/03/07/红日靶场练习/index.html","65822a4e31187b6b7b952fc108552abc"],["/2023/03/27/NKCTF/index.html","41a8596ac4ca80bf8eb98be97b37cbaf"],["/2023/03/31/楚慧杯/index.html","459342bf05604ce7684800047d046a8c"],["/2023/04/23/HDCTF2023/index.html","3521c1a2d3258b4240abf56e6959368c"],["/2023/06/01/2023CISCN初赛/index.html","6af3f26a219e1e9118ec9741d9200823"],["/2023/06/28/2023CISCN[华中决赛]/index.html","c046d86c61fcae15cde3cf1e5b36aab2"],["/2023/07/10/CyberSecurityRumble Quals/index.html","7386d0d4bca245d95a8044100bd43090"],["/2023/07/22/2023BDSecCTF/index.html","c4ebe8aee716f8aa6906d3cf70a1123b"],["/2023/08/07/SQL手注小记/index.html","95c3efa007a19304e6057f9f2979ee00"],["/2023/08/27/2023陇剑杯/index.html","c38032822693069e24ade73210eb23ed"],["/2023/09/17/2023蓝帽杯半决赛/index.html","67125061bc51918d1f04625fd203a494"],["/2023/10/23/对于多层代理的研究/index.html","dca6c8029c2ddc5822ddc259d23a29d6"],["/2023/11/25/金盾2023/index.html","39d691144132fd303a8f547d9e27bf8a"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","2a04b3889d6b4590ff2b42772f8e0c69"],["/2023/12/18/2023强网杯线上赛/index.html","2708eec17fb016b3f670e9867812fb9d"],["/2024/01/08/基础ROP/index.html","1a6a41aa65407cefefe9ccbe7516534d"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","e23cb8120bf85a4003dbdd65286fa0c2"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","f248c5ae2d32d92e53fc287125345dac"],["/about/index.html","e161e4d409932777bcde8ca948361033"],["/archives/2022/01/index.html","65ca669518e761cb03bbe572b203369b"],["/archives/2022/02/index.html","8d27b7465c895b1aea6bb7b0c8d1ddb9"],["/archives/2022/03/index.html","98857626a259945298de13c1a3210d20"],["/archives/2022/04/index.html","d470912380283e74d1abadead8145b87"],["/archives/2022/05/index.html","eca51529a5dd769d57b742f4992e65e6"],["/archives/2022/06/index.html","befc94da8936e2bed7eaf851633dc4eb"],["/archives/2022/07/index.html","1fa79e26e33bd9d882355c2b1bafd521"],["/archives/2022/08/index.html","8cc19f7aee2f88c351c6d719da6009d5"],["/archives/2022/09/index.html","357298578e5631a14acfbb0c45dfd9fe"],["/archives/2022/10/index.html","d6e557f23f74e0c62ac47a436d462b44"],["/archives/2022/11/index.html","4cc7ec7f1999c72bc251da72dc97bbfb"],["/archives/2022/12/index.html","798b7c02e23152154ccaf5fd0e8fe07a"],["/archives/2022/index.html","6dadb89d68d727026c6bc0cf3fb92ce4"],["/archives/2023/01/index.html","0bebbdfb9de8fbc81258e5d6073ed6e0"],["/archives/2023/02/index.html","822f3a8ea5e2a1b36cf2d11f3b0de771"],["/archives/2023/03/index.html","634ae4fc0b9021620c426c5bbc8ae506"],["/archives/2023/04/index.html","3ab396ae6f2c66a904b62a1a17f5a35c"],["/archives/2023/06/index.html","af7b2b525ce559489a087d72bef6f54c"],["/archives/2023/07/index.html","3ab9c8dff22d389ce748d3787be13d7a"],["/archives/2023/08/index.html","aec55d1abe4daf4b5385da57d3f9b74a"],["/archives/2023/09/index.html","2c5bd0178f5844d63aec9612393b499b"],["/archives/2023/10/index.html","9d83cdc8b3714b4c94d6e6f15ffb0b49"],["/archives/2023/11/index.html","eeb7f32ce3a80c2591a02c4ebe91c22b"],["/archives/2023/12/index.html","d87d7974166cac6aef29c6c5ba633189"],["/archives/2023/index.html","c0e8270aa06410d58d21c6b3001bc2b3"],["/archives/2024/01/index.html","1deeb49804cafdca1a3232b4296ddb10"],["/archives/2024/index.html","3551dc14535b177aefdfa77e46082f6e"],["/archives/index.html","ead81018672980c94b9fb63f5b49ec4b"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","9dcdfdc1ef8983e42f79d5137523992d"],["/categories/CTF/index.html","a5a04280efcc7ad6ac4868a8aa2bbf98"],["/categories/PHP伪协议/index.html","aac0ee05bd1045032de81d7e709a567b"],["/categories/PWN/index.html","0a81b66caeb810fc5a4fdbd7a7feab3e"],["/categories/RE/index.html","5c1a58f773ba2636a1c4480d3ae9358c"],["/categories/Web/index.html","3c46a547b4cc612e41747aad406ec09d"],["/categories/awd/index.html","6a3465e13ead0094a8440a458949be94"],["/categories/index.html","d3a8fec00beb2231d2ff3e86ae821fb5"],["/categories/misc/index.html","9cd17587c5a5a940cce26afaf66cf656"],["/categories/sqlmap/index.html","4b1b14b506250beec0dd870c056f0d3b"],["/categories/博客相关问题类/index.html","bc12c64c3a1aedaa0e61317633b3f723"],["/categories/局域网攻击/index.html","2d6cd3be1f836526700aa11a5cc3fea3"],["/categories/心得/index.html","06c8555055db7cf83d1a0befaacac08a"],["/categories/流量分析/index.html","fbef6cb9e59718a7d5621ba4eb1249fd"],["/categories/渗透/index.html","541241384812ce297120c616efe98b7c"],["/categories/渗透测试/index.html","aa26deaf31187657a8040a17586d1165"],["/categories/渗透认知/index.html","cb6083f7e27970bb757245841227b615"],["/categories/漏洞复现/index.html","ed313ecf96165d6da9ba3804bc202838"],["/categories/漏洞测试环境搭建/index.html","9725cea60bdb0273805c34bee8585def"],["/categories/赛后复盘/index.html","89705c78d94be095e9de9ed7935ef443"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","adeaf642ff8fbd08dd4e116db41a43b4"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","9c44baf627d94911a5fa0a82fdf2c663"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","b69b00b518813307b402bb83b2ef4476"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b53b8e225b27d5628882578b6cd8ec46"],["/page/10/index.html","449cba7aafa64357650c80b027bef62c"],["/page/11/index.html","1d4c88d6d611aac1e85189d19911cd5b"],["/page/2/index.html","ff7968b8339a60003f2d834524201c84"],["/page/3/index.html","ec52ea286f022808b431086cb04662e1"],["/page/4/index.html","76d78080d684b4aeb1a13e12d7d99321"],["/page/5/index.html","a41be966a2f321b598e2bb61ce3b703d"],["/page/6/index.html","c786aa17edf39f02b88e4dca8249aa47"],["/page/7/index.html","fc1ba22ddef14bcf809abf48fa41a2f6"],["/page/8/index.html","150b0a682e64e724dc477c2d5a8d027e"],["/page/9/index.html","9c374233e65afaed55ac44ac50e63fcf"],["/sw-register.js","2a81904b29e53f386d2ba625c6615976"],["/tags/C/index.html","5dd6220ca93375709368f4b5df7b56d0"],["/tags/CTF/index.html","a572e25ac09f842e8b6f2108f56ef977"],["/tags/HTTP头部信息分析/index.html","f68c9a828b4b893e63e15364afc66ca9"],["/tags/PHP伪协议/index.html","861f236c468f631e4471b5bbfb0ab7f7"],["/tags/PHP特性/index.html","575a158e94ba36650ab9a7ac49b6fafe"],["/tags/PWN/index.html","ef24fb4058b8fb88db2171b34f93bf48"],["/tags/RE/index.html","0fbec47dbae265e2660bc2604a1035ae"],["/tags/SQL/index.html","bf2a5dacd3cba222392892f7a5529319"],["/tags/Web/index.html","2df48ee9e1eef1da47c20279ff7220f9"],["/tags/Web工具包/index.html","f8fdbb84a9c2ce765b794b9998f758a9"],["/tags/awd/index.html","e8258c4bd153427c4cdec84ed9cad1f1"],["/tags/ctfshow/index.html","db86ba6963d83801ab507861fba1ed39"],["/tags/index.html","76ea9156379e348dfb96f71e1ebacf03"],["/tags/misc/index.html","5114182650a525c7b6caf2c36063c44a"],["/tags/next主题失效/index.html","83837f17ce3b4a318e40733dc10d5905"],["/tags/sqlmap/index.html","d8d19d2998e174fefac165324b22616f"],["/tags/wp/index.html","17139162ffd42d5d7e49958ad7609934"],["/tags/xss/index.html","96085008e3e823260ccaea5e06210f5d"],["/tags/xxe/index.html","fe0c5ec374a40120119e6754facf84b4"],["/tags/不蒜子不显示/index.html","ec3c9ebfb0ad5b5b288fed2af5bba53a"],["/tags/博客/index.html","0d0a526a254ff376cf054f83c5b50adc"],["/tags/博客主题优化/index.html","c63732022870b7fae231d3decec78b0a"],["/tags/博客死循环框架问题/index.html","517b58c20694719f1ba70558d18def05"],["/tags/博客部分问题解决方法/index.html","2ec05ff4e630069b4e90bd46bdb270f3"],["/tags/反序列化/index.html","1295aa5e656414aa3321fc0ac0cd1294"],["/tags/命令执行/index.html","aeb1dfa171056cb7f3c0d7de68be3a1e"],["/tags/局域网攻击/index.html","3ab4617db0fe90f31c0c87e0bffea2d6"],["/tags/常用指令/index.html","722dae5c658447de424cae75f9fa7eae"],["/tags/心得/index.html","16449281c247a8c915c63c48eb04bed1"],["/tags/文件上传漏洞/index.html","31b95e33446dd331746f3147b5a41dea"],["/tags/文件包含/index.html","189fe17a8bb2aa9792a68d56a67f247d"],["/tags/流量分析/index.html","33742f7b134a6898f2678b41e388ed27"],["/tags/渗透/index.html","aab98c7766d91835dd7b42301b5c6ca3"],["/tags/渗透测试/index.html","3c644af680106e7f04fd341951006a0f"],["/tags/漏洞复现/index.html","a26951b17d5672776e53ffe626991a5a"],["/tags/留言板/index.html","fd1d954068d327b9cb055f0c20f16dd7"],["/tags/赛后复盘/index.html","0a091fc9db199050321c7caafb757987"],["/tags/黑盒测试/index.html","c3e4ea1d69c7441b02da9d1e5c8b33ca"]];
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
