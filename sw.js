/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","7bdef4ebd394926cba25d1cc081fab02"],["/2022/01/08/ctf之web/index.html","243e964391e149c659c52cfcac683872"],["/2022/01/11/博客制作遇到的问题/index.html","ebee1092cceb0d714b9c7c640a1adfc1"],["/2022/01/15/C/index.html","d0c8aff98fdd61580c25acd80f7457ab"],["/2022/01/18/新版next置换/index.html","6005fe7a8df6218f21d0840d1f1ec226"],["/2022/01/19/不蒜子相关问题/index.html","9fa6291a90d18dac9ed144ad10d31107"],["/2022/01/19/框架问题/index.html","b8d9eac8b7fb2933704ef01a5c795d34"],["/2022/01/20/ctf之reverse/index.html","b27b4d2288ecf4c4346e13c69924dc52"],["/2022/01/23/misc部分解题软件命令记录/index.html","f1a72af36673f71da4fc02a27658bba0"],["/2022/02/01/684/index.html","46aa6905dfd7b3187919c06986244ee7"],["/2022/02/03/留言板/index.html","f56bfc9bc0f5fc33474a701093e564a3"],["/2022/02/04/SQL简单注入/index.html","90a59bfec30290f5787ea8ebdac5ec14"],["/2022/02/05/最全的HTTP头部信息分析/index.html","be5f6b4856800ce6da866a35ac4df1b5"],["/2022/02/08/ctfshow文件上传/index.html","5fc660838ee26ed7cf4ea51a373aa25b"],["/2022/02/08/常见密码类型/index.html","ffb26076dbdf1a2b6068cfe0bffefa38"],["/2022/02/12/VNCTF2022WP/index.html","ddf3ccc268eb4e67d0ad2b28480b9cea"],["/2022/02/20/ctfshowPHP特性/index.html","4043bfbf0a12c503133e9647ab1ada00"],["/2022/02/25/php伪协议/index.html","daac9973191d306f75a7e7c10e616ad7"],["/2022/02/26/ctfshow文件包含78-117/index.html","151c5b10bdebfb37cbf85b529b3743c1"],["/2022/03/02/Clash漏洞/index.html","7e297ca70e3dc05680b0b376bb65d939"],["/2022/03/11/流量分析之题型解析/index.html","2f5381602282a39e766e111ba59e912b"],["/2022/03/15/ctfshow命令执行/index.html","30f43038127e5c6ddb76ff2efa1b41c5"],["/2022/03/22/CGCTF/index.html","db272b3e8f03fc453c0f3694898648fe"],["/2022/03/24/ctfshowxss/index.html","4592fd018a9ef2c3e8d8f7f6f44e66f5"],["/2022/04/04/黑盒测试/index.html","4ac777636f90857272dfabcfacf5b4c8"],["/2022/04/11/nmap/index.html","f2b3e541328d7788aaaab0c50a98aeaf"],["/2022/04/12/渗透流程简要记录/index.html","ea504c5dd2cb232979712ddf005f5ca8"],["/2022/04/12/渗透测试之攻破登录页面/index.html","7869c3300a138ea81823a5e8c73bc964"],["/2022/04/14/xray扫描器/index.html","57e9c3a7b8124a99f4bc5501c51aeaf2"],["/2022/04/15/ctfshow反序列化/index.html","00b1a2cf18441da84405ded7f79e87a1"],["/2022/04/26/渗透测试实战/index.html","936c657428295b558e06613ef7aee0be"],["/2022/04/28/sqlmap教程/index.html","2e117a56a90e065b1ab2e19b00076b8a"],["/2022/04/30/认知文件上传/index.html","b9b4e3cd7b6f52c087294e33244d1628"],["/2022/05/03/nahamcon/index.html","b0c6888b752f90787f0d81cbd6348e08"],["/2022/05/15/awd/index.html","367cac097e97b6c69e57016079d11370"],["/2022/05/22/DASCTF/index.html","29b59d8e005f791a2da107588d3bd84d"],["/2022/05/27/520/index.html","e35e10a1688ee761ccf34a5d7952cece"],["/2022/05/27/ISCC2022/index.html","7a785728d38d8907708766be498eff9d"],["/2022/06/01/第五届世界智能大会/index.html","9060dcdb0cc5aa952be13e60925ac835"],["/2022/06/04/SEETF/index.html","073305134792a2f75b9f16944ae274d5"],["/2022/06/04/bcactf/index.html","ec464d01eeeaa7cdd6316fc07ff6c0c4"],["/2022/06/05/BSidesSF CTF/index.html","74b93de50ef4e477eee986684ec328ac"],["/2022/06/07/Docker部署web题目/index.html","b9c7372131218ff9a9d26c8a0f3beb30"],["/2022/06/09/利用oj搭建C语言考核/index.html","2fc9ea895512070958f3fe7e3af0a7d0"],["/2022/06/13/限免题目/index.html","6f7ca949d6ba249a503bab5b176d0df2"],["/2022/06/14/钉钉rce/index.html","711344fcf155b71a54dd582b7af2691e"],["/2022/06/16/内部ctf/index.html","b5ed6ec337848437b1661ac71853fefb"],["/2022/06/25/攻防世界高手区(一)/index.html","a7dddf99b364ad3b16c0d1a107daaed0"],["/2022/07/01/两小时AK赛/index.html","175ee383e6f99987d8765da01f9cbd87"],["/2022/07/03/鹏城杯/index.html","f947d89482e38dbc2d276432e5f01364"],["/2022/07/04/XXE/index.html","44f32987d8b4c63b9cc74600260789af"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","b6f0330d83ae5b504d2cda9b58dd7573"],["/2022/07/08/chinaz/index.html","bf89c6e38af2487fdb120a5fd7ed2aad"],["/2022/07/09/蓝帽杯初赛wp/index.html","c342668adffff9e2da4e0c3ceecc2775"],["/2022/07/17/NepCTF/index.html","c4cb341bdccb7c8a63e0bd9abb64b1ce"],["/2022/07/19/ImaginaryCTF/index.html","c35e9cf621a7a53ffbad0b8b2168490d"],["/2022/07/20/局域网攻击/index.html","6ba43154fd3c11c9224d727f59ee43e4"],["/2022/07/22/BDSecCTF/index.html","3c3e35426aaff6df4ca27f54e523b72c"],["/2022/07/25/DiceCTF @ Hope/index.html","89c7a7bdff902e3cb6f525d9f4a067fb"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","4eb63237608438daa9857219680970c6"],["/2022/07/31/TFCCTF/index.html","74073ba0956287eb2b862de3eada83ab"],["/2022/08/03/NSSCTF/index.html","d9fe695d67dd2cc622e11acb025b1fcd"],["/2022/08/12/T3N4CI0US CTF/index.html","1f87a637fc859bcd631e9f2ec571c7ab"],["/2022/08/14/SHELLCTF 2022/index.html","5addb02d7f924b0cc75d0baf866c5cbc"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","6005b3b499af018a96e895ffaa37d2c5"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","08001ee69ef9b5778db8daa1a187dd84"],["/2022/09/16/柏鹭杯/index.html","6091a075af7358f1cfe1b09cc1c466b0"],["/2022/09/20/HUBUCTF 新生赛/index.html","42c7bd602397732936dae22ee4261204"],["/2022/09/27/NewStarCTF/index.html","7b1a51150d04b781661e541d5932fda5"],["/2022/09/27/bugku渗透1/index.html","a1d8eca9853c437eee509c78585acfec"],["/2022/09/29/tp6漏洞/index.html","bfecaa4626388aa4aa2360e674c3058d"],["/2022/10/02/SWPU NSS新生赛/index.html","fe78903ed62de23203346eeee115cfcd"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","cdaf2f1e759bef304b17314a79d47aa4"],["/2022/10/27/Moectf西电CTF新生赛/index.html","0d678d3b0a9da39f538fa426d37477e5"],["/2022/11/02/HNCTF/index.html","83c62fbcb39df3d9f98bae4beca3e2a8"],["/2022/11/04/2022工控CTF/index.html","5cffcdeebdfe6eb368cee8bdbdeb8211"],["/2022/11/21/极客大挑战2022/index.html","d1bb1f5103ab9d2f2d550be27f323476"],["/2022/12/05/TUCTF 2022/index.html","4b949880172df2978397054f0a1274d9"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","773a473e5ed2d20981da886bceb3d75f"],["/2022/12/18/金盾2022/index.html","71bb85f1567bf80dfaa71f003470b2df"],["/2023/01/01/CATCTF/index.html","a6e80e32a345dff9eb9858ada8ad5c6e"],["/2023/01/09/RW体验赛/index.html","344dc069f486d83f3ec820159e10947f"],["/2023/01/10/铁三/index.html","d8b033ba3e956b2f0d69c40ba88c1f53"],["/2023/01/16/Ugra CTF Quals 2023/index.html","31083c65a03fb29d2bddb735466bf3f8"],["/2023/01/18/山石2022冬令营/index.html","690f5f31982e2e968df0a0f60b4f5f59"],["/2023/01/19/SICTF/index.html","31580b217c7df97f11000dd2d518cf45"],["/2023/02/04/2023西湖论剑/index.html","cf4932fe0aa61112a30d8282dd581ba0"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","26c86dc80e54e3bb99e8a911aed77a14"],["/2023/03/04/公安/index.html","8312ea4fe7d1dbc5a3fe521e5ec3163b"],["/2023/03/07/mysql之udf提权/index.html","81464fa173590ccaa6ce1d0e711afb38"],["/2023/03/07/红日靶场练习/index.html","e314c63d553f2b18270022f803d0852a"],["/2023/03/27/NKCTF/index.html","a4f7ebcfcbcb998e9d125c2a0e91504a"],["/2023/03/31/楚慧杯/index.html","de20ba31fdfdb6e159a2873dc0af648a"],["/2023/04/23/HDCTF2023/index.html","2f7cc00973af00c5f22e0fb6ce3d1cd9"],["/2023/07/10/CyberSecurityRumble Quals/index.html","86101c829aec734b6c93026267f697e3"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","89b1b0e43561cd22eb9a7161530bc0da"],["/about/index.html","a67ea1bc413b132e14465276a9f1cf77"],["/archives/2021/12/index.html","810ac20111064b581f5eed34070af743"],["/archives/2021/index.html","5912312823424981766fc40e58ad0d02"],["/archives/2022/01/index.html","9d08a7de71496680603cab02f24ef2d0"],["/archives/2022/02/index.html","7c0e402b6d85da81692beb495bc6387b"],["/archives/2022/03/index.html","407685f2f2e622fb9f68ba121e2dd62a"],["/archives/2022/04/index.html","6ada95fb924f2062cbba95ec7907c7c5"],["/archives/2022/05/index.html","ec1684d850b9d16bed5a53f344741324"],["/archives/2022/06/index.html","a7e49c6bfff777df4d9dfe439bca3e46"],["/archives/2022/07/index.html","f6b1d1822fad65f754643b1d62a3c6a8"],["/archives/2022/08/index.html","a491d7cb4778f2e4a47a9697ae750d53"],["/archives/2022/09/index.html","9582d79c1ee4ed787f537db5b3de00b8"],["/archives/2022/10/index.html","474c94c5f11f55afb420b57d892ddad7"],["/archives/2022/11/index.html","108f64033da68c357199f571b6fe8f6c"],["/archives/2022/12/index.html","af3701ede1080da73df91cc305e0d1c6"],["/archives/2022/index.html","24f4fd1d11b37c03e2147dd132546c22"],["/archives/2023/01/index.html","17d776f02b008eef17534b409718e3e1"],["/archives/2023/02/index.html","25f414705117d07a1c489a681ed1de04"],["/archives/2023/03/index.html","57185613a73ed83a2150676b579bbb89"],["/archives/2023/04/index.html","98ad3d97b8ac83ea5f092efbafd3220b"],["/archives/2023/07/index.html","ae414e5c3e7e29f3438143b60893afd5"],["/archives/2023/index.html","1ff0be2a0bc5e72a38155e31d383b86e"],["/archives/index.html","9480445d8474ed8efdee66768dd6a9b3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","d4094b4cab3289b93646d6b1f45bb1e1"],["/categories/CTF/index.html","fbbebea4fac018e33d625fff684a6588"],["/categories/PHP伪协议/index.html","4bed37cd19a7b3175a05da0516307b8c"],["/categories/RE/index.html","ed4f19520e3f6b6a08ceb67fffae6112"],["/categories/Web/index.html","ea74e24141bd8170a0466b9cb327fbfa"],["/categories/awd/index.html","1482d0e7dfec82359ba2081714d00a55"],["/categories/index.html","86737522aec06773d1f763eee7d74e37"],["/categories/misc/index.html","853dbdbcaccdfbe0186242d60f404bf8"],["/categories/sqlmap/index.html","eed32fb08eff46068c7cc6365eacab85"],["/categories/博客相关问题类/index.html","1ee9c6241b29453cbdd631184ff48c64"],["/categories/局域网攻击/index.html","0dd147431660afa42a420d0a69bc4ba8"],["/categories/心得/index.html","6cf67043e1977b7dee724e2d6ee25682"],["/categories/流量分析/index.html","9ad68319b0b7635d5c1f23db816bb9cb"],["/categories/渗透/index.html","747c4842982fe61710444de6e46b0aba"],["/categories/渗透测试/index.html","23c64ee30bf1c3c9208bb329d9366a84"],["/categories/渗透认知/index.html","40fade07fe15193b08597470ac599fe6"],["/categories/漏洞复现/index.html","bac9d5c744a924c555a8537036a577ef"],["/categories/漏洞测试环境搭建/index.html","ee6172ada2c8cc4b92b5c731a96dd6de"],["/categories/赛后复盘/index.html","a8469005d0b7fe4467c7b5c5a1369c3d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","230ed8ae073fce8e5287d85df396d621"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","41fe21aae7b03451740c68a30b091700"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","0a542e1563303c197f75c111c2f4f074"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","dd28e4323def4190e1159f0abc61c8a1"],["/page/10/index.html","ef3de97fd42bbcef33bc2476e952945a"],["/page/2/index.html","6d8aa11ec4084f51860199446655220e"],["/page/3/index.html","996deccb7d52dff893bc1977554be488"],["/page/4/index.html","57f29896db2a74dcaab6fbc55f91b402"],["/page/5/index.html","9f4775a009a072b7e428700e17d611d6"],["/page/6/index.html","d4a142c2025b11eed1d5ff70c9f6830a"],["/page/7/index.html","f074720bc4ab4506a55e933f0f149cf0"],["/page/8/index.html","7fa75e336af261d48f53b2b096c31983"],["/page/9/index.html","670d0f9321c3a5ed25d1e7a68b81de09"],["/sw-register.js","72408ec0d31193a57422cbf753b356ed"],["/tags/C/index.html","9478f6b6f5d20c12e69b8794d23c2d70"],["/tags/CTF/index.html","4c306d775990b4f04e886ac7d06fe78d"],["/tags/HTTP头部信息分析/index.html","fb190bea1662f683ff4eb01793b14730"],["/tags/PHP伪协议/index.html","562d293aa028df5c2da9323804895a9e"],["/tags/PHP特性/index.html","b7e9bb38e7c337649b178ce9c6fe95fc"],["/tags/RE/index.html","3bc9ade033c5b93bfc6dd7d6a192a358"],["/tags/SQL/index.html","5ff8f7228c5d5d036e3680d25e668492"],["/tags/Web/index.html","20ac27c983f9cf8732cc4f988bcaa237"],["/tags/Web工具包/index.html","22b704cb6be35ab2062653e62921e953"],["/tags/awd/index.html","04ef7d0d6fab627c6d40e0129a322eb3"],["/tags/bugctf/index.html","39dc2f6f2208361ed830d6180c9fa50c"],["/tags/ctfshow/index.html","db822ecbb3df11d5a414737b71ed4074"],["/tags/index.html","71fab3bca46de090f0a768011d3f1758"],["/tags/misc/index.html","8a48e601831f8200d989334b83053481"],["/tags/next主题失效/index.html","3bdde8714bd19cde8d10411ece347270"],["/tags/sqlmap/index.html","8a01fd1751c18ccb07b7ed09431bb5fc"],["/tags/wp/index.html","a4b54ec76255c57b8da1e47106d4e388"],["/tags/xss/index.html","bc33a4c062115ec9ca1c84122c5a577b"],["/tags/xxe/index.html","63ea917ba773fb721325b042312670de"],["/tags/不蒜子不显示/index.html","e44c44c821f995f6659b4ac2e954a2e9"],["/tags/博客/index.html","7fd35358472913b8d3721be32bd862a9"],["/tags/博客主题优化/index.html","847809a83e74d0f9b8df05e233c6fe9c"],["/tags/博客死循环框架问题/index.html","add2b93db2f5beccb89ea4400e8d9e4f"],["/tags/博客部分问题解决方法/index.html","3bc2c75d963e313e74b60d078bd31cb1"],["/tags/反序列化/index.html","35fd60875ac960acbb9daaafa8e57d2c"],["/tags/命令执行/index.html","f836f6065c8306d62e4ddb1994af9d61"],["/tags/局域网攻击/index.html","f8fff8a3e3ff903e579fabb3d345d718"],["/tags/常用指令/index.html","b3c03c1608af293ec8d8d9e87a60ec81"],["/tags/心得/index.html","8c8c228b737b146119c28e4d624edbdb"],["/tags/文件上传漏洞/index.html","d868f799a2259a0ade62c4cfe312e853"],["/tags/文件包含/index.html","e6dcca0a96fe4da190d377997f9cb9aa"],["/tags/流量分析/index.html","c2b0c75500b2c5ebf293c97be7492c07"],["/tags/渗透/index.html","a8a2c12e78c197ef2e5adac6455677b3"],["/tags/渗透测试/index.html","dec9a17fc0e8ec4b978b5e6dfc090f4a"],["/tags/漏洞复现/index.html","73660e252110fddeb7e02995b7bcd4d0"],["/tags/留言板/index.html","d6a8a8665adb6b91c754ab686432cfd7"],["/tags/赛后复盘/index.html","8c4b853222f70bd80879977e909c0a1b"],["/tags/黑盒测试/index.html","520853d4ac631e82772e66accd7c083d"]];
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
