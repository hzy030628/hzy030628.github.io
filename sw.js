/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","b4807145f334d7fc7c368d9921977585"],["/2022/01/11/博客制作遇到的问题/index.html","6783f59719cec5aa65dd713fbfe0709b"],["/2022/01/15/C/index.html","27e4519743998e5c29d85a42f7866ebb"],["/2022/01/18/新版next置换/index.html","64b464f589a95ca162227ea607a87cdb"],["/2022/01/19/不蒜子相关问题/index.html","6ff66da5141a8ddb5610d76f6560be34"],["/2022/01/19/框架问题/index.html","c5a2ec25123cca5b695aef25d41ed5b5"],["/2022/01/20/ctf之reverse/index.html","8f92840e1b7484ea34ee571eac76e64f"],["/2022/01/23/misc隐写题目总结/index.html","ce6ce6769cf00dbecd7fad3bc1ca547e"],["/2022/02/01/684/index.html","5ea50b80e9c6ec928516f4a6df93e974"],["/2022/02/03/留言板/index.html","bd4002e6bb694b7e3172edb51f95b15f"],["/2022/02/04/SQL简单注入/index.html","7d59b9890192df718342d65199f13cbc"],["/2022/02/05/最全的HTTP头部信息分析/index.html","811a898a67bad150f9000a8f2f7bddb6"],["/2022/02/08/ctfshow文件上传/index.html","25114498afdd8662cc96e3d65dc61d88"],["/2022/02/08/常见密码类型/index.html","eb1c4dde4b028a57b2b75b02e219b7b0"],["/2022/02/12/VNCTF2022WP/index.html","998682095c7691c682e9aaa5e1fae81d"],["/2022/02/20/ctfshowPHP特性/index.html","f22945e5ec93005cc3eeb4fbb6252d4d"],["/2022/02/25/php伪协议/index.html","5bacc44aeb21ced9294f3ad39d73458d"],["/2022/02/26/ctfshow文件包含78-117/index.html","b126e3a4630f35e00952cfacdda4a303"],["/2022/03/02/Clash漏洞/index.html","6649762dd9983b5ad723629e9bf000e3"],["/2022/03/11/流量分析之题型解析/index.html","ec090ac65e81ebbac79039bfd8ad5706"],["/2022/03/15/ctfshow命令执行/index.html","2eb6b3ec5af0394bb7a58b65dd3ebeb8"],["/2022/03/22/CGCTF/index.html","7fb8de2e19d5f8e5df9e0d7cc3235d8e"],["/2022/03/24/ctfshowxss/index.html","d1b7ce1a9aef775911499a3fde176b1d"],["/2022/04/04/黑盒测试/index.html","ba6ce147d50e666768d575d0279d05e3"],["/2022/04/11/nmap/index.html","77641c24556b9dc9b9eca1c27e742893"],["/2022/04/12/渗透流程简要记录/index.html","1fe6e1b0bc26adb22e21cf5f0cf13514"],["/2022/04/12/渗透测试之攻破登录页面/index.html","b4a0b6212787ce6ffca70334b209763e"],["/2022/04/14/xray扫描器/index.html","bf12644d85627495baa4b88552a53730"],["/2022/04/15/ctfshow反序列化/index.html","d97e249b261a54e5a7de07422de6e701"],["/2022/04/26/渗透测试实战/index.html","aec759bd54ad1e4aa071270243811ad4"],["/2022/04/28/sqlmap教程/index.html","9ae2c5d47b4ac29071a7b217254b767c"],["/2022/04/30/认知文件上传/index.html","bbf9c8adc71bac10e58490b59593c245"],["/2022/05/03/nahamcon/index.html","d621117bc072f3a565183cabbb95dfcb"],["/2022/05/15/awd/index.html","1d6f0c8cb36ced8795a9f3b37f3f6a32"],["/2022/05/22/DASCTF/index.html","ac23bcbfcdafc23362fbea25193dd87a"],["/2022/05/27/520/index.html","bb984ed411dca9d55d54627aba91ada2"],["/2022/05/27/ISCC2022/index.html","f5e5d81c211e4f5afc8c7f3f99cf6321"],["/2022/06/01/第五届世界智能大会/index.html","6389b3a88b4085d2f6db66e1313e71a3"],["/2022/06/04/SEETF/index.html","b0edbd2d77fb0ac00ce2fda453ef7ffc"],["/2022/06/04/bcactf/index.html","dabeb38eb07800ef23bfb1f768bd06b2"],["/2022/06/05/BSidesSF CTF/index.html","68c989016ef4716165833b81360303a2"],["/2022/06/07/Docker部署web题目/index.html","2b769f728e7f2d15861c1f7e0de724f2"],["/2022/06/09/利用oj搭建C语言考核/index.html","1dc391bd7fe07f340c6b615a3282d70c"],["/2022/06/13/限免题目/index.html","15204e04ea5eadcc39c630e6dd1036be"],["/2022/06/14/钉钉rce/index.html","5eb140aee24a9dd78567534386684857"],["/2022/06/16/内部ctf/index.html","7ae042323cb52ca31966650ec79cef39"],["/2022/06/25/攻防世界高手区(一)/index.html","9f74e6b2da7cd0b6efc9d229ffe1f75e"],["/2022/07/01/两小时AK赛/index.html","636cff9e8c37c67d3fdd10bf811ac9e5"],["/2022/07/03/鹏城杯/index.html","6dce6f0381490dc29b34cc014b445393"],["/2022/07/04/XXE/index.html","366a3307069ef20c5d9d9984b491b84f"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","c74a8edc43073cc9d1ef0133ea44840c"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","c8abe45d78a44c4b0ac493bee52aa2b7"],["/2022/07/08/chinaz/index.html","61218e757c5cabc1dcf936f546b65d12"],["/2022/07/09/蓝帽杯初赛wp/index.html","defec45c618a10a25c3b7b68206a8e25"],["/2022/07/17/NepCTF/index.html","352500cf469027634f1d828ccd51bb1a"],["/2022/07/19/2022ImaginaryCTF/index.html","c5e0771fb3228526c3723490fd5698bd"],["/2022/07/20/局域网攻击/index.html","3dd6def4b98ea43b87094384d4516290"],["/2022/07/22/2022BDSecCTF/index.html","1c1979b01b5aecbfd6b6aeba6480dbdb"],["/2022/07/25/DiceCTF @ Hope/index.html","4490bf45b0df348bbed22a5eb71116ba"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","01d6261463d5b81646a75615bbe43152"],["/2022/07/31/TFCCTF/index.html","f42aa8c740fedf30c99343f1a40d903f"],["/2022/08/03/NSSCTF/index.html","d75f1ce8739d948dd9926e9d0a7debec"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","00a7d94fe13699dcf1f461244b979db9"],["/2022/08/12/T3N4CI0US CTF/index.html","51dfe7d9e612c4dfac3223e0a42a61a5"],["/2022/08/14/SHELLCTF 2022/index.html","75c38826663f5edadff0b799b44c4341"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","5d0e3360cd4a17c8fd88ec8f0a2e0ba7"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","d23347ec7bad7cad822fe5422a9aa85b"],["/2022/09/16/柏鹭杯/index.html","b5b610a287e6c7f6170acb161b20b90b"],["/2022/09/20/HUBUCTF 新生赛/index.html","d7f44cd1c0dff8614f5c3bdf09e0a7c5"],["/2022/09/27/NewStarCTF/index.html","5f818aab862c91172e8719298de7c92e"],["/2022/09/27/bugku渗透1/index.html","2821509fb5f2f7c1c0c202d7da4c6ecd"],["/2022/09/29/tp6漏洞/index.html","82457d7421b029c17020c44a5800a799"],["/2022/10/02/SWPU NSS新生赛/index.html","b715b898a2701a57a13366a2b88a4531"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","97300536dc6fe1848b7d9a30cbafff25"],["/2022/10/27/Moectf西电CTF新生赛/index.html","d99aa8d27d96e78983597bceb6d38234"],["/2022/11/02/HNCTF/index.html","caf1ff0fd2cffd520c943eae1c9c979d"],["/2022/11/04/2022工控CTF/index.html","db1befbb56e10b1762507bab62baa955"],["/2022/11/21/极客大挑战2022/index.html","2cffa63c5ca4dab6d96b716a83a6641b"],["/2022/12/05/TUCTF 2022/index.html","c7c9580072fa222fc0eedd61a9ceea1e"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","33fa5f251301448a6b3427e770fd4b00"],["/2022/12/18/金盾2022/index.html","e2ea20aebbf694d1ff009d67928f12fa"],["/2023/01/01/CATCTF/index.html","c2306aeedf47a16b4c5d28eec7c8fa8a"],["/2023/01/09/RW体验赛/index.html","4d06487e20719de04e58c61cac097381"],["/2023/01/10/铁三/index.html","db6ecce6b54faf992cd2ea091f0ef234"],["/2023/01/16/Ugra CTF Quals 2023/index.html","35251f5865149897e7563d6d1c8a09e0"],["/2023/01/18/山石2022冬令营/index.html","427730742cf649e47a5780af58a033ae"],["/2023/01/19/SICTF/index.html","b869b43ba6dedd5c2f9b6e11788636d0"],["/2023/02/04/2023西湖论剑/index.html","d644865ec63a0d26c8bca237aaf60588"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","7f4a25b1984d6c81f095684895f728d8"],["/2023/03/04/公安/index.html","09a8b23afc475df837a0b9a348b16c90"],["/2023/03/07/mysql之udf提权/index.html","df5ccfec41ef60fd552d03b6388ac5e0"],["/2023/03/07/红日靶场练习/index.html","68b51ab2435b82e6ef28c19afd7bb867"],["/2023/03/27/NKCTF/index.html","cf51550534c181b074dbeb3994cb3edf"],["/2023/03/31/楚慧杯/index.html","dd11d366386fac71af48bb3ec43edeff"],["/2023/04/23/HDCTF2023/index.html","4add0b318bd80d19cff2d3e0f2863b31"],["/2023/06/01/2023CISCN初赛/index.html","cb4c03ef98a8792367dede32b2a93c28"],["/2023/06/28/2023CISCN[华中决赛]/index.html","882d9039a844b78c4f5ca88ae31030f1"],["/2023/07/10/CyberSecurityRumble Quals/index.html","7105ff3a4a7da6f1835a61ee7bb05eb7"],["/2023/07/22/2023BDSecCTF/index.html","6bdfecb7cbb3f76baed20b44dec44651"],["/2023/08/07/SQL手注小记/index.html","dddabe9a5091a9102910b5a4e00ce766"],["/2023/08/27/2023陇剑杯/index.html","8d66e5a4de40eaab00526de9ab83ed23"],["/2023/09/17/2023蓝帽杯半决赛/index.html","cce24c493522c5c150505f112308ddd9"],["/2023/10/23/对于多层代理的研究/index.html","df33cbb0fa04859c9655d6d2104ba61d"],["/2023/11/25/金盾2023/index.html","3210583a7c2c5f28bfecc8dafd980b5e"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","30bb023fa588fe0f9ce1fcad91bb0c0c"],["/2023/12/18/2023强网杯线上赛/index.html","9308ba79a97e76628cee48d0e6c28d79"],["/2024/01/08/基础ROP/index.html","caab6cfa80356c809dd24f78e0e4b957"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","10574d5d8b203e9fba82e9dcf43d797c"],["/2024/02/13/打靶-Tr0ll/index.html","5ada584b0727756db0bdbf25ddbdda94"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","024c41936ce6f82543dc165eefb8d741"],["/about/index.html","a865fbd99079015eb705e9d06235f275"],["/archives/2022/01/index.html","f520969877d067039e82a1655c236d7e"],["/archives/2022/02/index.html","ebc54e900283f28babf050466e411d8e"],["/archives/2022/03/index.html","a9282eb5ba3cf5f6ad7e51d5e3fa970d"],["/archives/2022/04/index.html","aba603c1962480a90a06c4c34d903e8e"],["/archives/2022/05/index.html","f165eb524c71dcf2e3ec309ce98067f0"],["/archives/2022/06/index.html","3088bdb76c970bd22726577ee4961f03"],["/archives/2022/07/index.html","bdb4861b6e6f5009aa5d6dc7e53b3a1b"],["/archives/2022/08/index.html","7ec1e962c0aa25fbe52982587f854cb7"],["/archives/2022/09/index.html","f52bf729e8e67da7b5f3575dc81bbdd1"],["/archives/2022/10/index.html","aa89c6a448adf93b5368562c43a59f3b"],["/archives/2022/11/index.html","15e523ce2305a29b98ab5afa2d418236"],["/archives/2022/12/index.html","011b3699f0fe59884717125c3f7d0819"],["/archives/2022/index.html","09a6e5435f3d3a35a428a6c262016dde"],["/archives/2023/01/index.html","91de20f275b92f8d9af5024d811a6582"],["/archives/2023/02/index.html","2388f255dc89d0cf0ef0b02ba2b47c75"],["/archives/2023/03/index.html","c831e1332b9c8a8bbaf20ca37e830c27"],["/archives/2023/04/index.html","1e37cf6b85babef9db7244a8a25569fa"],["/archives/2023/06/index.html","c22eb0623ef00af30cfaac9cc8dc19d9"],["/archives/2023/07/index.html","596585b2f18f8b4e502cddead5f47ac7"],["/archives/2023/08/index.html","8bea5e300fc5409e6364f4d91ee76cb9"],["/archives/2023/09/index.html","241861cb5e6c85d02d43864796843bf4"],["/archives/2023/10/index.html","6e994fa2463d20c1faf819b03a4461bd"],["/archives/2023/11/index.html","ff7f59f22ebbe649b29bbcdcd579ae85"],["/archives/2023/12/index.html","09da5e3e55c01b6b5c02a765af65b507"],["/archives/2023/index.html","9225a5c628c5e11717eff54e6f81149a"],["/archives/2024/01/index.html","3a9a911f3bc46c0400b4cb18d678862f"],["/archives/2024/02/index.html","e1ed830da14adcf21bb450714b684b58"],["/archives/2024/index.html","978303b2cd9ccb1cb78bccadd41eece4"],["/archives/index.html","888ce54bbb5907310c4bf4eb781c293d"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","6896d8b86a36aa04e0c0878de437b3d4"],["/categories/CTF/index.html","e224f156a1d9417ffe2650ed3bdfc4a8"],["/categories/PHP伪协议/index.html","b02bfc58969a0fdbf25ec3bd1beebebc"],["/categories/PWN/index.html","9e2d4fed59596884f7c2484a10589ffb"],["/categories/RE/index.html","82eee9969e046ac0bf638cf3ba204618"],["/categories/Web/index.html","b2eb6e31365fb651c1e34daec2ccf2f3"],["/categories/awd/index.html","d58ff57ad961b83300be82821c0ed1db"],["/categories/index.html","1b5c49501b98671730434fb7610bd1dd"],["/categories/misc/index.html","988c438aacf15eaf02b1273a16844425"],["/categories/sqlmap/index.html","f7a9bfd644b49f91bbc50984cccd171d"],["/categories/博客相关问题类/index.html","4b8147c541793de93a88e5405d18baa7"],["/categories/局域网攻击/index.html","2c8033d6be0ba2b57f2523505e12729d"],["/categories/心得/index.html","ad3abbadf864b7ae87d5ae53b6032eba"],["/categories/流量分析/index.html","1577af7b023acf4246a5d13a7e69fcd2"],["/categories/渗透/index.html","0c2eb232111ff9df3cfad26a6b335dd2"],["/categories/渗透测试/index.html","1e3eec3abc2b592ad588e6259dac7a4e"],["/categories/渗透认知/index.html","d83824707e27354111bf488f2d78519f"],["/categories/漏洞复现/index.html","2804e927f1530ff0150b4c0dba56d7bf"],["/categories/漏洞测试环境搭建/index.html","3778c414d86964a799cb378295d61c51"],["/categories/赛后复盘/index.html","2688c49eaff3dcfcc23b9694b213e6f8"],["/categories/靶场训练/index.html","0052c6ce539c34f19b7a02cdb91bb19d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","2abd611362f30a3eceead62d49e298e5"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","16f51c93189da4073b06781bf5f31479"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","af2f47170af687dc4a2913f244998b69"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","3b8a173dee1b2afb2f72f5835616bad7"],["/page/10/index.html","9ea8bc884cf6df8d470ec05ec4437753"],["/page/11/index.html","5b42c777d4c03814215fcf301c3c4fea"],["/page/2/index.html","efaf15545c460751e8186053449250b4"],["/page/3/index.html","132e23eb071b6a84da501b26de34e428"],["/page/4/index.html","10e7439ed599a8f28dbbb9ccaa39f5a1"],["/page/5/index.html","c90542a4fa07e5f979f2f5d08ddc4aac"],["/page/6/index.html","c6c480fcf3293a058f2ed4c7669b003b"],["/page/7/index.html","ebcae8c6aa38a40e547e84c8014cd950"],["/page/8/index.html","3b5a7b34aa90960e62b73d65d0a32fd3"],["/page/9/index.html","5ec3661093807b4e8d041c70cbdedab4"],["/sw-register.js","ec7a55165de5a3ec73c9612b051e5261"],["/tags/C/index.html","77b667691b68cd20cc1c36737977e995"],["/tags/CTF/index.html","5b3e20273893dea9fb66d7b25322be58"],["/tags/HTTP头部信息分析/index.html","6943828d0bd2667efac1004c83c6b754"],["/tags/PHP伪协议/index.html","02b33d9547d5db2aec88d40265aed5e8"],["/tags/PHP特性/index.html","73d374e5f51d537be265639ca404748e"],["/tags/PWN/index.html","40ace301af514d7c1c17a91e8bacb3b4"],["/tags/RE/index.html","fd82084512b929d93f8ca2e6e3b51f2f"],["/tags/SQL/index.html","b78c1c32067d975d4f9c332c48361cd2"],["/tags/Web/index.html","a15c98c7fd611ed2b2d97cc9949e7f7a"],["/tags/Web工具包/index.html","101142c3d3376690932b9eb361cf5f9b"],["/tags/awd/index.html","e6ae9480a2405c11f28c7b847720a756"],["/tags/ctfshow/index.html","b6306804952063b2589096d9b23a3080"],["/tags/index.html","35b4773236a2d3fa60b73f2f155d43f5"],["/tags/misc/index.html","83f0069dac34bfd85079b8f6ccb6deea"],["/tags/next主题失效/index.html","ff0e1b7441d12bc2830d6f874aa23de8"],["/tags/sqlmap/index.html","d21d4767b19a28d2b20c77364a2c760d"],["/tags/wp/index.html","4433d1b38577e5da5eebe5f03d47409a"],["/tags/xss/index.html","8e8c7a380230fc65ee61a6eecbf84ae0"],["/tags/xxe/index.html","e55b5877f9b42736da2a263dadd97c4a"],["/tags/不蒜子不显示/index.html","6d15b6c4a19b52f5662c7cee47f8ce8f"],["/tags/博客/index.html","f192c8fb53a485898eb1fe3e6fbcd633"],["/tags/博客主题优化/index.html","0f02cb0d73bdef15cae4460872996c43"],["/tags/博客死循环框架问题/index.html","d581e7aba8bc02b862970210a5c19aa3"],["/tags/博客部分问题解决方法/index.html","c3a79e93e9a17d6c2918f2e0ecf5d74b"],["/tags/反序列化/index.html","6bf7fbe0bd6391cabc7587624f0c8f7c"],["/tags/命令执行/index.html","cbc0050603860a28e8760c2b4980b3f8"],["/tags/局域网攻击/index.html","77e4f47fcbf900ee69086062ca1636b7"],["/tags/常用指令/index.html","6b900493230897636b5e6e643dd86a43"],["/tags/心得/index.html","98ea50a7bd912f4f7a030e0b9c512b59"],["/tags/文件上传漏洞/index.html","a68f34e2228bd41cf5c592fe5c8b3425"],["/tags/文件包含/index.html","92167be311e7ceb90b9650ceb177a2e4"],["/tags/流量分析/index.html","da79517375fa7909f38c9ff5b36d89bb"],["/tags/渗透/index.html","cc53f50c1bd61de184693d6fa0fa67e8"],["/tags/渗透测试/index.html","7308c945a90c14d9c260419bc7800dd7"],["/tags/漏洞复现/index.html","44dd9a790d771ffaf406cae4403c76ab"],["/tags/留言板/index.html","806bbcc4da373aa296dcdd867d5db962"],["/tags/赛后复盘/index.html","0bbe907c909506d28431382bd37512ca"],["/tags/靶场训练/index.html","c93a06fc797e1994db607bf924f1a732"],["/tags/黑盒测试/index.html","c9ce599fc7ebaf1b9574d4b8518b2e25"]];
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
