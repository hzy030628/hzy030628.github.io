/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","905e238db2a96209057621acbe72304e"],["/2022/01/08/ctf之web/index.html","5235541b75356e0b7dbd8ae0d78efbc0"],["/2022/01/11/博客制作遇到的问题/index.html","ac4ac617a8b47fd53a902b22e5e1f947"],["/2022/01/15/C/index.html","624b5dec5dad16c31724a7b57567cc69"],["/2022/01/18/新版next置换/index.html","ffb016e32ab0670710634468041aadf4"],["/2022/01/19/不蒜子相关问题/index.html","d4b56670774fd2fbf8474fb44cc7e9f9"],["/2022/01/19/框架问题/index.html","ac64cb9b99d3955dab9a369652615c00"],["/2022/01/20/ctf之reverse/index.html","d829cea643c9fdf412297afe4726f769"],["/2022/01/23/misc部分解题软件命令记录/index.html","7797040ac995ea2f6dc356a9ce4f86a6"],["/2022/02/01/684/index.html","3b6230f52488fca8f2e3242893f5a5ac"],["/2022/02/03/留言板/index.html","6132e0cd30fd5d960aa04c3caed0b537"],["/2022/02/04/SQL简单注入/index.html","37b47f1e4eeba2aeab9be6c15c539004"],["/2022/02/05/最全的HTTP头部信息分析/index.html","5749aabd39e9d200ac25fb18a5166a79"],["/2022/02/08/ctfshow文件上传/index.html","56c16d6f6834fe6ea60a58593055efb6"],["/2022/02/08/常见密码类型/index.html","52dafb2b8383de3fb7010760f12d9d73"],["/2022/02/12/VNCTF2022WP/index.html","fe440d0e8e3505474ec222d73abe0a04"],["/2022/02/20/ctfshowPHP特性/index.html","87fd7e551543374ecf0fa5144f486811"],["/2022/02/25/php伪协议/index.html","b222f86f82056f209c98a70603c0f697"],["/2022/02/26/ctfshow文件包含78-117/index.html","9fd8ace022cb51bde88bb3c208db38d6"],["/2022/03/02/Clash漏洞/index.html","8d0ebbc2a72ae18bf21aa7882876da19"],["/2022/03/11/流量分析之题型解析/index.html","5a767f33cdfe5ec4938c077a3129be9a"],["/2022/03/15/ctfshow命令执行/index.html","8c76d75cd439716de57f932771b51b7b"],["/2022/03/22/CGCTF/index.html","7b700cf1b01f7fca5331741ff745012e"],["/2022/03/24/ctfshowxss/index.html","dc2895cb5068857abcd907c33a49c435"],["/2022/04/04/黑盒测试/index.html","928754a10c66f69d643c34ef96b74416"],["/2022/04/11/nmap/index.html","5b4df95c8e0df0cdb1393598694bddd3"],["/2022/04/12/渗透流程简要记录/index.html","93c81cebcd91d7ece93a6a1bec8cb184"],["/2022/04/12/渗透测试之攻破登录页面/index.html","4d443b1f7d6552828040298a9e0e2269"],["/2022/04/14/xray扫描器/index.html","f8742545694202a724d8f03bc16ebb64"],["/2022/04/15/ctfshow反序列化/index.html","247a6f8ff7750600277cc20ed37dd29c"],["/2022/04/26/渗透测试实战/index.html","fbacd58e106276336df26fd5da259202"],["/2022/04/28/sqlmap教程/index.html","bddbab2554493f831220ae29b2ff0fc6"],["/2022/04/30/认知文件上传/index.html","2a4b0fc915494b2226c52d951c2700d0"],["/2022/05/03/nahamcon/index.html","db7745cb77f2c8f999638b6e12bfe0ed"],["/2022/05/15/awd/index.html","e93df96e8d8309e88803b1625cada054"],["/2022/05/22/DASCTF/index.html","03bbc3e5ee9e2b70b6843eea2ec64628"],["/2022/05/27/520/index.html","287d8389d0ce92548779e4c460efaf76"],["/2022/05/27/ISCC2022/index.html","48e11d2bc9ecb9f663cff584ea0472e1"],["/2022/06/01/第五届世界智能大会/index.html","0aa5664e733916ac6429c219eed432ee"],["/2022/06/04/SEETF/index.html","41872ca303a16d679efcca634807eb7b"],["/2022/06/04/bcactf/index.html","e3191fd879cd6f5590697d0842bbfd50"],["/2022/06/05/BSidesSF CTF/index.html","abe85483faa1dcd2dc12f262fa864933"],["/2022/06/07/Docker部署web题目/index.html","5fa79dee998fa4f7d54ef6209f177e46"],["/2022/06/09/利用oj搭建C语言考核/index.html","e048c0006ef7a0b7c868631f93273e11"],["/2022/06/13/限免题目/index.html","4da71cdd69c64b3ed068873bf5c5764d"],["/2022/06/14/钉钉rce/index.html","0fe5fc93a8a31e602f9e81471d3f761f"],["/2022/06/16/内部ctf/index.html","250606c1ed7fb118d0680d7ced1c5aed"],["/2022/06/25/攻防世界高手区(一)/index.html","2e61119582733a8fd3f74acbd51b1626"],["/2022/07/01/两小时AK赛/index.html","2eae116b02f106a94f7ac7948c04a425"],["/2022/07/03/鹏城杯/index.html","458d9ea77e39b7c3e0b3801be3cd2183"],["/2022/07/04/XXE/index.html","81a8a6cab2dd638ee1bb08ea9f2a6546"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","832bff0fd422b443d656f5e4955c155c"],["/2022/07/08/chinaz/index.html","c8f9064f4a303bae98083752280f6f73"],["/2022/07/09/蓝帽杯初赛wp/index.html","fd996295fd6ac9fe7c3b5edd3db9791f"],["/2022/07/17/NepCTF/index.html","554d52bdac8fedecefa34357caa625c9"],["/2022/07/19/ImaginaryCTF/index.html","ff65c02e83f00ea86581f56761facbbd"],["/2022/07/20/局域网攻击/index.html","4ed0275d2dba0e4d00bd87034be45164"],["/2022/07/22/BDSecCTF/index.html","3aa9ac761abf8317c19b033bc468a75a"],["/2022/07/25/DiceCTF @ Hope/index.html","c5e0c3094584a5a6eae35e17d2f7a54c"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","7c997b10006f850ce2f50d777fdeb33d"],["/2022/07/31/TFCCTF/index.html","8c63a218012b9a0537ca5fd64be4d07d"],["/2022/08/03/NSSCTF/index.html","a23052abd6464489b3468d157603e73a"],["/2022/08/12/T3N4CI0US CTF/index.html","557ea17a302309dd8640a9df9efcbedc"],["/2022/08/14/SHELLCTF 2022/index.html","509c02fcff7d7fdd418bf81c0d8028f5"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","85fdf8a637d0ebb2d7b95b12a2f997f8"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","99657bdcb0c584b8915c4f66ec280a7f"],["/2022/09/16/柏鹭杯/index.html","d7d8104ac9140885fc3d22651b56c1ff"],["/2022/09/20/HUBUCTF 新生赛/index.html","77b17e5a31dc12df372c0ede51add544"],["/2022/09/27/NewStarCTF/index.html","9246ec0cedff99a7c7c479ac6161d0e1"],["/2022/09/27/bugku渗透1/index.html","afe35da0ac465a5e77b9c4fee07195a5"],["/2022/09/29/tp6漏洞/index.html","b86424df8bcb81a8dad19e2bc6011b33"],["/2022/10/02/SWPU NSS新生赛/index.html","959e6619f002611c17823b81cdcce2fb"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","81830d70a77f46a515f855fe0f32a0db"],["/2022/10/27/Moectf西电CTF新生赛/index.html","afc8c15efe3f76a51ef28b35cc009f28"],["/2022/11/02/HNCTF/index.html","b12e86719e16751d107715279022ebc4"],["/2022/11/04/2022工控CTF/index.html","044127ba8e1fcfece1c9f700ebaeaa16"],["/2022/11/21/极客大挑战2022/index.html","ccf3354894db07af26847e7e75d7d1a4"],["/2022/12/05/TUCTF 2022/index.html","090caf277753bf902b36be826a19e3b6"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","955a877d91fcf38c4c3e5606ad681d49"],["/2022/12/18/金盾2022/index.html","c83f46225e2a458cf6b8867debb172b7"],["/2023/01/01/CATCTF/index.html","48eddc401a0b83be5c06d8780679f740"],["/2023/01/09/RW体验赛/index.html","983ad06e5a14493cdb52266b9283e85a"],["/2023/01/10/铁三/index.html","0a818a1868c88d21f0b235db33ae8134"],["/2023/01/16/Ugra CTF Quals 2023/index.html","3448962ab0bf2ad3ae5f1afd89f1bb65"],["/2023/01/18/山石2022冬令营/index.html","5523da18a848cc038242b911b437fa56"],["/2023/01/19/SICTF/index.html","bd03b17e033152d8bdb44972e7d805c0"],["/2023/02/04/2023西湖论剑/index.html","6dd735b341813e43c22cae8a0f706b70"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","179420f0872046d1f90d3c89434be2ae"],["/2023/03/04/公安/index.html","4278438c76e8cb7ef4932ae974c821d0"],["/2023/03/07/mysql之udf提权/index.html","ec84d6db363517423604db0d74b8db2f"],["/2023/03/07/红日靶场练习/index.html","0f753fe58029470134bd8443e605b674"],["/2023/03/27/NKCTF/index.html","8aff2fad2d48e8c6b96e5875a49f7e18"],["/2023/03/31/楚慧杯/index.html","63bc452b886f608e056a13523e203609"],["/2023/04/23/HDCTF2023/index.html","2c5cefaa500e5a5f2292df5cab4fc547"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","942d519871a6552c89d66c7e67e784e6"],["/about/index.html","5c8a35ab78ff743559d5396207b02632"],["/archives/2021/12/index.html","75b0d1243315fd28f0b7b0ce44dea111"],["/archives/2021/index.html","9aed96f97d1ef1c839e90d187d5852e1"],["/archives/2022/01/index.html","87204c60370f24a8741f16b02e5caa65"],["/archives/2022/02/index.html","727d8b67ec946a8448c1796b4a7b80cc"],["/archives/2022/03/index.html","d809adff70c60a20b64335ba049a5c34"],["/archives/2022/04/index.html","6c3b7c877c7306c7c4a23af7421a92fc"],["/archives/2022/05/index.html","fb11cc9f940cf26221c2b20fe8066f16"],["/archives/2022/06/index.html","bc32f3de61bd2be5b47de38e867696db"],["/archives/2022/07/index.html","47ffa7424723cdd05937e1179de33fc7"],["/archives/2022/08/index.html","6c2b03bb9a3d3e550bf94c94c5ce2f25"],["/archives/2022/09/index.html","6898cbf662c25a8f86eed10fae5bc29c"],["/archives/2022/10/index.html","2bac3eba9c87f563a80e35090a99527d"],["/archives/2022/11/index.html","7c2fdcda1da2d7109bf7914f73b39984"],["/archives/2022/12/index.html","7423805af2e673c73eeefd3ef1135a21"],["/archives/2022/index.html","a576acebd4a91dcb57d719bcc30596dc"],["/archives/2023/01/index.html","c1ff7c8273a07808e317c5ecb6a6e621"],["/archives/2023/02/index.html","992b763546ec4a6cb12f494cacceaa5f"],["/archives/2023/03/index.html","5f07d1af7ad6f1beea614e9df1cf39d0"],["/archives/2023/04/index.html","60b17f4d13d4af67bbf374789407deb8"],["/archives/2023/index.html","9abe63211e43555f8d39aadd77bbb2c1"],["/archives/index.html","1fffca028edb42a4799673c80df5e169"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","f83040849ccb23160b3cce4b8a0282c2"],["/categories/CTF/index.html","c3263c277e2423f9f63a19bfe79da395"],["/categories/PHP伪协议/index.html","e7fa7d37766792551443c569fe60228a"],["/categories/RE/index.html","3db2c9de2d27dc36d1fb805666dac09e"],["/categories/Web/index.html","10e46186a23531cd8df615984806ae4c"],["/categories/awd/index.html","797d5002c26a7e89757f457e0d35076f"],["/categories/index.html","0055432422d2aee7a382773121d92057"],["/categories/misc/index.html","d4ad8a0e9ef6d0999e59e1e398730d00"],["/categories/sqlmap/index.html","b296ecdddfb33ac7f60e006cdad4dbf2"],["/categories/博客相关问题类/index.html","69faaddd19cef719b8904c0d497981ae"],["/categories/局域网攻击/index.html","d07edbaded0f322a055c0d4c8d9eb6ad"],["/categories/心得/index.html","047c6e8b69322c7f82a0420ec2130f69"],["/categories/流量分析/index.html","e04cb88bca11d1398a5aa4f93ffaa4a6"],["/categories/渗透/index.html","9ab922acf589281420aa1cf0615936dd"],["/categories/渗透测试/index.html","3e70f9ff5b1d2cb4798c8d8069ded631"],["/categories/渗透认知/index.html","1f0caf259468dae574d23d90f348f6ed"],["/categories/漏洞复现/index.html","8573a20f098d0d0680ea291615e583fd"],["/categories/漏洞测试环境搭建/index.html","ab01f381ca9f90510ff6143a1ba667b0"],["/categories/赛后复盘/index.html","ca87fcfc07c6a35250037fb21d28d62e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a3c1c7854b35545a78876a327a25d9fc"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","a533cc9d7f3e68f1f90674646962639b"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","9b3b13b7cfb71dd48e7911d13d04c30c"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d3c3561568466a2064634b05585eebba"],["/page/10/index.html","634ec731647cda8583c387e7c785eca8"],["/page/2/index.html","67885af42de762e917d0e128e36938fa"],["/page/3/index.html","531521386626e90ace853079f6deed15"],["/page/4/index.html","d550bcf080e17cfc042678129b6632dc"],["/page/5/index.html","1c796712a9333b6f73b3e7bd6743509d"],["/page/6/index.html","a25aa5fa0de8bbd3cef946961c143b55"],["/page/7/index.html","6df211702fd7d5d62e8657ae0139ed7c"],["/page/8/index.html","1e9716bb85d8b64aa38f45a2b931a0d1"],["/page/9/index.html","bcca93f46dc7ca1be3df798562e50b92"],["/sw-register.js","11b6dce91dcb4bc3300f4d606b04560c"],["/tags/C/index.html","44d72af5766d187919138b2a1d996702"],["/tags/CTF/index.html","c9e3953b59c988fac7968126b4137a33"],["/tags/HTTP头部信息分析/index.html","0c78302a84416019507e9844eb11f692"],["/tags/PHP伪协议/index.html","e300108e2191f12b9f9c601c01356293"],["/tags/PHP特性/index.html","8deed359f9e29e6250af70defd410af3"],["/tags/RE/index.html","39283cec0aa79edc7be5b2fbc83dcbe2"],["/tags/SQL/index.html","7c61066a04e4d3acc91c77c9a54f842b"],["/tags/Web/index.html","914f9d7cd0063966f5475e34553b7f9c"],["/tags/Web工具包/index.html","48c6eead90eba74c0d06b5ce6e6c9dc9"],["/tags/awd/index.html","6fcbdbf1e10bcf6b515a9d24754a9fbc"],["/tags/bugctf/index.html","a87fa5da94551474213a2ac3cc10c840"],["/tags/ctfshow/index.html","00625523c353d1d23e5f91350fdcddcc"],["/tags/index.html","ef473d9d973e9eeaa21f92cfc47e7682"],["/tags/misc/index.html","8669eb03ae94dcb62016aa5162be3f23"],["/tags/next主题失效/index.html","d1aa4bb52818d460a2ce6caacd29ba29"],["/tags/sqlmap/index.html","f68c99a1bf60a8bdec102d67bf28f6ac"],["/tags/wp/index.html","7e48ff14737feb2937021e6d7c8e2fc4"],["/tags/xss/index.html","3e3b11ba21efb342db8ebe1d9facf60f"],["/tags/xxe/index.html","a2471759a1927edea6581f06698d3bdd"],["/tags/不蒜子不显示/index.html","2ba2f4b64e98218ba4da47b3180e363a"],["/tags/博客/index.html","143e143a66849dd586ec4d4fb5e56e30"],["/tags/博客主题优化/index.html","684f555c71d023b7dd5e5020679263c5"],["/tags/博客死循环框架问题/index.html","4545b0f9b3645f2cd7342d7ca2ef7bb4"],["/tags/博客部分问题解决方法/index.html","41b2516a1df22cf90ce9ed429a929f55"],["/tags/反序列化/index.html","83d46d1716207f2056e2719e6b1490f6"],["/tags/命令执行/index.html","7e299b0d4ffb93fd70052cec3304bb5c"],["/tags/局域网攻击/index.html","96820fafef49c99a8d924c592e7fe757"],["/tags/常用指令/index.html","bef31f4d15d112ccc2873b4664983319"],["/tags/心得/index.html","034a9e9b4c57b0b3ba86c15705c2746d"],["/tags/文件上传漏洞/index.html","d3dd8cc17048536f6e65c2d9ce54e7e1"],["/tags/文件包含/index.html","bf7fa12fd4ec4bd1709ca33918a79397"],["/tags/流量分析/index.html","314115f07d58e29a82f465f03936b9c2"],["/tags/渗透/index.html","a9f275b3bd216edb1cf3eebb12bba234"],["/tags/渗透测试/index.html","85e2aa704517174219e2000eadff3484"],["/tags/漏洞复现/index.html","3ce63f4a7e011978e5f241a74eecd2d7"],["/tags/留言板/index.html","fd50d9faa687d2f8235512480af35984"],["/tags/赛后复盘/index.html","3a9a625e4a213371a4f89438319c1edc"],["/tags/黑盒测试/index.html","b7698e92708e85ae3655f37de78bcad7"]];
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
