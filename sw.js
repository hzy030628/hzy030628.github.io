/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","413d2b7c5a72f5e04ab105092540555f"],["/2022/01/08/ctf之web/index.html","40dafeb5b8c85ecf0b5def6819a9285c"],["/2022/01/11/博客制作遇到的问题/index.html","71f80f655794937a9e109343d5db2d84"],["/2022/01/15/C/index.html","fdf33bc8725a2e13895a8a22e1e92b40"],["/2022/01/18/新版next置换/index.html","91474902de7cbd192839254b87ab68ca"],["/2022/01/19/不蒜子相关问题/index.html","06fb0745fc9f3d80662de5b4095b12bf"],["/2022/01/19/框架问题/index.html","637e685b6796105010dc5fbcb18449c0"],["/2022/01/20/ctf之reverse/index.html","060b0e95c5bfe59dc8c6dc176ab68de4"],["/2022/01/23/misc部分解题软件命令记录/index.html","a1fb880c29757cb842f4758e6374cdd8"],["/2022/02/01/684/index.html","04f93d085a1a79e72ed3b502adf96090"],["/2022/02/03/留言板/index.html","038b026cc436051104451c8cb061d149"],["/2022/02/04/SQL简单注入/index.html","fcc8c3e4d63034c1c50491a6bfaa5c40"],["/2022/02/05/最全的HTTP头部信息分析/index.html","24394962c8ac4400f94c70e26119cf88"],["/2022/02/08/ctfshow文件上传/index.html","d81b667ca8842722ffdc7b852b42fd01"],["/2022/02/08/常见密码类型/index.html","5547eb1b72f75d6d40e2cdfd233e83e3"],["/2022/02/12/VNCTF2022WP/index.html","af4bf65b2b66f718385a5b9fec9fd306"],["/2022/02/20/ctfshowPHP特性/index.html","4f3d4f390a00f55bb58ff219aa5f2623"],["/2022/02/25/php伪协议/index.html","f9250ec2cf7ea28f5bb88ce11cc1beb3"],["/2022/02/26/ctfshow文件包含78-117/index.html","aad2958de514e702d64201fec0557aea"],["/2022/03/02/Clash漏洞/index.html","79b60206f36d0607e3f752cf51f45b90"],["/2022/03/11/流量分析之题型解析/index.html","686db76fe92911a48b36094d305a7760"],["/2022/03/15/ctfshow命令执行/index.html","06ea09456c84b3d14b8b61a9b3c31edf"],["/2022/03/22/CGCTF/index.html","963f6594b58754df9e8bfdd8d5440357"],["/2022/03/24/ctfshowxss/index.html","e6b4b4cfefe64f767ba944c8b39a50a2"],["/2022/04/04/黑盒测试/index.html","de238892d3fcaac34bbda469fe7be72a"],["/2022/04/11/nmap/index.html","bbf9bd3208465bc5fd64dad8b1a8a56d"],["/2022/04/12/渗透流程简要记录/index.html","4c8c249dfc2044d59753f0eaacea969e"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a23cbaa0bc2f089370a0086baaeceeed"],["/2022/04/14/xray扫描器/index.html","2658e540e7c0b7da1e586f50a11120ab"],["/2022/04/15/ctfshow反序列化/index.html","adcb3ea3f763f4d7bb2ad9009fcaa6ef"],["/2022/04/26/渗透测试实战/index.html","ff4812d05a25d9dc498a321afef91170"],["/2022/04/28/sqlmap教程/index.html","e06102224330e839df9e70e6af363961"],["/2022/04/30/认知文件上传/index.html","e80939fac7ab2b295740a4bdffc8cb1c"],["/2022/05/03/nahamcon/index.html","cf9bc16df340f19f39f6b52553a76e25"],["/2022/05/15/awd/index.html","87ff1ba91cda886749fc89bb1c9901ec"],["/2022/05/22/DASCTF/index.html","298a0a900c7d929f42d6cd26042afb28"],["/2022/05/27/520/index.html","51a830e0d8a6b6f4fa683efd45f0038f"],["/2022/05/27/ISCC2022/index.html","3f3fb1ccaade2b12cd15bd8b5ade96d7"],["/2022/06/01/第五届世界智能大会/index.html","18aedd3f066dbe857f53e89557d4016e"],["/2022/06/04/SEETF/index.html","5b557a7644df38875ab2d499f7ba251e"],["/2022/06/04/bcactf/index.html","8b141c27ce656cfb4df1f9b4ff548300"],["/2022/06/05/BSidesSF CTF/index.html","a0dd95391a06bb8e722e22a7b55657ff"],["/2022/06/07/Docker部署web题目/index.html","7556aa885877887d383ad673a6b13ec0"],["/2022/06/09/利用oj搭建C语言考核/index.html","618d8ac235084511ad7a0844e524427b"],["/2022/06/13/限免题目/index.html","c55777dc6ecefbfa1c8d4d267e6d5906"],["/2022/06/14/钉钉rce/index.html","8188d7d836cb71d67a75fb6b42cd4fa6"],["/2022/06/16/内部ctf/index.html","74b4c75bbd74bcd3d0bc2c32ccbe4025"],["/2022/06/25/攻防世界高手区(一)/index.html","3e59e3205f65e65df4ee5754e1013dc0"],["/2022/07/01/两小时AK赛/index.html","cb2e13b1ec26c6ba3137481f148388d3"],["/2022/07/03/鹏城杯/index.html","01b9a7491e985c0c549f2a72cf166faf"],["/2022/07/04/XXE/index.html","49794944401ac56d3daadce089545e7c"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","b6242215e8240d1c36dde74fe4d84f64"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","fd8fb23ef5293b48bf206de653cdcea0"],["/2022/07/08/chinaz/index.html","14cd91db69e9dd3eb9f909b341010dec"],["/2022/07/09/蓝帽杯初赛wp/index.html","f7844f8aa5148bcac55ac1bc6649ab99"],["/2022/07/17/NepCTF/index.html","db8abfdba712084d1a8a96d5848ff302"],["/2022/07/19/2022ImaginaryCTF/index.html","d63061d6f07bfeaf4d3b779db19c2dae"],["/2022/07/20/局域网攻击/index.html","4620bb6203f37d033062b3152deca91d"],["/2022/07/22/2022BDSecCTF/index.html","0ddfc61bcfb9d55be80c217a71401394"],["/2022/07/25/DiceCTF @ Hope/index.html","8183a7757b4f78f89f626398fceec780"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","453545562be0238f349f897306fc1ce8"],["/2022/07/31/TFCCTF/index.html","68b4e1e58e143205d5299edc198cd4e7"],["/2022/08/03/NSSCTF/index.html","44a403003e51daf1c608e6ea7eb37704"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","49ca75c14c653e289d69e6b27e1ca38e"],["/2022/08/12/T3N4CI0US CTF/index.html","52c9e5b9fc1ed6c7f0a3644580da99a6"],["/2022/08/14/SHELLCTF 2022/index.html","aa7ce55a0b3cb0d117ed2bfb038ff92a"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b7b6233a302e9351cc78276f4ee1723a"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","cd76d089c8c5d1bb92166736857c0adf"],["/2022/09/16/柏鹭杯/index.html","ca8aa8ba139bf15dad1d60fb5078456d"],["/2022/09/20/HUBUCTF 新生赛/index.html","71f8ffca4aa1e994abe3ec988cfbc6d3"],["/2022/09/27/NewStarCTF/index.html","ae88bac48c36258bc857d933f183effd"],["/2022/09/27/bugku渗透1/index.html","a76c839cb7d8e38986df40a7c544926e"],["/2022/09/29/tp6漏洞/index.html","b98398be50c60aee81c72cb9ab0b5cdd"],["/2022/10/02/SWPU NSS新生赛/index.html","533ac91fef529f6e546f9e1464ef7918"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","d18fcf5f8b5ae3470f1b0783245f6410"],["/2022/10/27/Moectf西电CTF新生赛/index.html","aa3c3e45d322d64135e4ab3d4d45a8e1"],["/2022/11/02/HNCTF/index.html","8d31b8915cd5df48d8d3b195fafb173b"],["/2022/11/04/2022工控CTF/index.html","e67b599cf692996780f42f523b2e96ed"],["/2022/11/21/极客大挑战2022/index.html","5537b6aef67d674c9db9678ab2eeff77"],["/2022/12/05/TUCTF 2022/index.html","5ac35985080293afa6dee81a20834562"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","ae75a59c622e19cb0da15ce2e36ae1bf"],["/2022/12/18/金盾2022/index.html","07c98e260450f822716bd115097cef9b"],["/2023/01/01/CATCTF/index.html","2a3f0edaf57fde2a9b4dd1f17522c350"],["/2023/01/09/RW体验赛/index.html","338d6c96c3e562ef38e1dd55534a4fb8"],["/2023/01/10/铁三/index.html","3952007cb4bea4fce319c1a89dfc2f84"],["/2023/01/16/Ugra CTF Quals 2023/index.html","e01e80653fbfe55b8c45b9e3240e3dc4"],["/2023/01/18/山石2022冬令营/index.html","b7fc4703e82d0853b3e802f992c13e74"],["/2023/01/19/SICTF/index.html","0b76654a12abf720cf2f43d19995e748"],["/2023/02/04/2023西湖论剑/index.html","7daf74b9af8417cf8146d7ccc460ed9b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","e24e72c1c788e65f009f4312da01e35f"],["/2023/03/04/公安/index.html","6b75350170b40c180294c4ab727c3813"],["/2023/03/07/mysql之udf提权/index.html","15cf7ba461aa4a7d63b414dbcda0a60a"],["/2023/03/07/红日靶场练习/index.html","d48ba8d63ac80f4a66b8fc62c07d0160"],["/2023/03/27/NKCTF/index.html","8831abe7fda51e13c5afc3b149ff2e25"],["/2023/03/31/楚慧杯/index.html","f5596dcddb5dd9e42c67f0a22f3ae87d"],["/2023/04/23/HDCTF2023/index.html","a2fbaf11bc12feaea1db2c3901eb108f"],["/2023/06/01/2023CISCN初赛/index.html","1e832eaa6e98521065dd164a33ac5c39"],["/2023/06/28/2023CISCN[华中决赛]/index.html","dad11fba1afe363cf84b782e2f5a344e"],["/2023/07/10/CyberSecurityRumble Quals/index.html","5cbdaf66c5da5853fb51547313fb66b4"],["/2023/07/22/2023BDSecCTF/index.html","9667ee4ac705b8c206e63bf5d78959e6"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","b2ab29235f774ae8346555ec5769a0cb"],["/about/index.html","99ad9f5e46d63cdb4ba026a67c30548d"],["/archives/2021/12/index.html","fef4c595712dab7f37c8e0491ca4df55"],["/archives/2021/index.html","5def0c109c439c0f8ed5bd4954b57ce9"],["/archives/2022/01/index.html","d95febef82b18eeb51f945a44f903a39"],["/archives/2022/02/index.html","67729755d5247323386eb690f224528f"],["/archives/2022/03/index.html","5a7df4a43b9568a2d409c08bba890803"],["/archives/2022/04/index.html","372dd803ae81b5763959598ce376fd5e"],["/archives/2022/05/index.html","4629b77e3705a934c7b4f31e0a203564"],["/archives/2022/06/index.html","315f9d4d7a787adf65df8a90ad7f54dc"],["/archives/2022/07/index.html","95948eed852c2d8680b602a6dced0377"],["/archives/2022/08/index.html","c253a79531c1e2fa50d1a7b5fed9c911"],["/archives/2022/09/index.html","0ee5dc3aac4383967ca2b69dd1f8ef63"],["/archives/2022/10/index.html","573fc81d8d3544706fcca0492e745091"],["/archives/2022/11/index.html","54cb0786f73b239742767fb23dc6e365"],["/archives/2022/12/index.html","d8e026e5fed37992577ca94cdc0389a9"],["/archives/2022/index.html","2d7365b663c6664aa0a925835b4b4a9b"],["/archives/2023/01/index.html","6ef8ca219f9591aa817f51f2d50377aa"],["/archives/2023/02/index.html","4481bb0624c82f563031a5076fe5bbe2"],["/archives/2023/03/index.html","b5f49aae846e11a6091b542151bcb94d"],["/archives/2023/04/index.html","e4a87f4a54875abb7da25735dbf49ba7"],["/archives/2023/06/index.html","0dae41261a7bb001e4e28459fc2e9174"],["/archives/2023/07/index.html","091b97bc522535dd3b7472099aef0712"],["/archives/2023/index.html","2f0cc4e12c50d61105ed973dea7ec6c8"],["/archives/index.html","5ce0aa7a1056492d925e9be3f101fc6d"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","209043c3ad3543c178651591d5cc9cfa"],["/categories/CTF/index.html","469ba83adc40cb57a4a99054c86dd27d"],["/categories/PHP伪协议/index.html","2fa088b497092777e50b541d756d07c1"],["/categories/RE/index.html","69bb9078d09804e357c3a001e2974bc3"],["/categories/Web/index.html","f1dfd76228cdfb5d64642b88d3cc0f3a"],["/categories/awd/index.html","962d8f35fd3b92bf1ab47830bdcb6027"],["/categories/index.html","094a73e17bd74f8e0f94db38057a68a2"],["/categories/misc/index.html","4c0c13b3b141accaa453f0f4f3a4536b"],["/categories/sqlmap/index.html","a27c0a0ceff4d873ec92d631252e2e18"],["/categories/博客相关问题类/index.html","757875954584366702b458df0fc44829"],["/categories/局域网攻击/index.html","3f657c01f7634f8d9d1822e30a64a091"],["/categories/心得/index.html","0784635f75823cc4deedd2dc817c8931"],["/categories/流量分析/index.html","848da268616f301b753b55d64b1b7c27"],["/categories/渗透/index.html","42312da13374e20e226dd705daa638c9"],["/categories/渗透测试/index.html","2bfe56061db585266fb27e86667e62a5"],["/categories/渗透认知/index.html","827486da73d75a98cf167f5515868e60"],["/categories/漏洞复现/index.html","371207f655b64ea6dd369378a0d22d96"],["/categories/漏洞测试环境搭建/index.html","59638bff43a8c42ec32808cb52649f4e"],["/categories/赛后复盘/index.html","4554a2c21cfad9022f18dfede1619641"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","a48c1161ea2308bffa5e13032d5205a9"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","a64b3fd046573cededf628cc7d4c0c9c"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","5f3798db5e1e51655ec8ce399f553df8"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f16d39454906e9b74dabe776a8fb06c5"],["/page/10/index.html","48dafaefbb9d451704aea7adc8b88c22"],["/page/2/index.html","00fa2abfec957626b39963ace3ce4cbc"],["/page/3/index.html","228ce04c89db985833bdb0b0ce26889a"],["/page/4/index.html","86f9b1b51d03809ce3eb7ecd6cfbce81"],["/page/5/index.html","8f9e038a2db18454104f7a44a275aee1"],["/page/6/index.html","0da654035c514439181cb2b2765a14cf"],["/page/7/index.html","52b785247c134e6cef9b47198bc24f45"],["/page/8/index.html","c23151d7e645c321e2a0547e9dc7cc1b"],["/page/9/index.html","3ca71ae67a392a7fb70c420f44d2ad6a"],["/sw-register.js","37c9d1c643d5de7a251b213958ab607d"],["/tags/C/index.html","efec7142452db83a36033866bdb95f8f"],["/tags/CTF/index.html","8d3912af2f8f4172022f287f640e5376"],["/tags/HTTP头部信息分析/index.html","4997214aa529862630e1f9e961adc433"],["/tags/PHP伪协议/index.html","58f5c944521ea872fc245b2dfb3ee62c"],["/tags/PHP特性/index.html","111202495ede2ff780e7a69236df66d1"],["/tags/RE/index.html","5378b3e9de679a6f7bc4cf034db89fc5"],["/tags/SQL/index.html","d100d75594ead5b61adc531e7dd074ea"],["/tags/Web/index.html","45094a44159721fdb5c255dfaf16ab9c"],["/tags/Web工具包/index.html","b14b62d4a8611b251db39c84a533e0a2"],["/tags/awd/index.html","da7437ffa4b501c67c3dfe912fb64545"],["/tags/bugctf/index.html","716e53278dce8a219c05458a21291639"],["/tags/ctfshow/index.html","5c7b23a8597b251ea18427268c642c93"],["/tags/index.html","c4c03b9404798e5a6b49e15d13cb51c7"],["/tags/misc/index.html","dff44b9aea3fe3bb2caa6f4b30438623"],["/tags/next主题失效/index.html","c5c7285a55cee67a3b1feb607968a2e7"],["/tags/sqlmap/index.html","804d4f6d1075672294c2ae958b92b160"],["/tags/wp/index.html","59d618a6680d585019f65ea22f4fae8e"],["/tags/xss/index.html","ed4b016aa2900d5c28b18d6a40108f8d"],["/tags/xxe/index.html","6531192301868faca7d9ddd89994574c"],["/tags/不蒜子不显示/index.html","c836da6e64f79b027038a5c8d601c854"],["/tags/博客/index.html","d70f6e57d5e320f7b2a19e4172af8115"],["/tags/博客主题优化/index.html","b778416da447fb611261a8acac64f3a3"],["/tags/博客死循环框架问题/index.html","d85d055d7dab818fd403157ab442b74f"],["/tags/博客部分问题解决方法/index.html","b0ff5e1848a1645260d8b37a710e39c4"],["/tags/反序列化/index.html","9f0d702b35b25010d42f46dfabcaf0ba"],["/tags/命令执行/index.html","fa791e204db2a7321b9724bf2b6ac6c5"],["/tags/局域网攻击/index.html","cbc266693c5ed36c0580a3cb2250a8ea"],["/tags/常用指令/index.html","28cd8a57d616de6af6fa3c6e968b072c"],["/tags/心得/index.html","a4d5c456a0ac2aabad00a046ada2df0a"],["/tags/文件上传漏洞/index.html","7ad68eb9304ce927d6fe25db33e967b1"],["/tags/文件包含/index.html","9cdee6a2673107fae954018561594b35"],["/tags/流量分析/index.html","6d67b2243f9d76e43babf6f9bc342475"],["/tags/渗透/index.html","8063bd17370b4175dd748e42653b60f4"],["/tags/渗透测试/index.html","f20cd717dd362ce6fec41cd08febe610"],["/tags/漏洞复现/index.html","5f6df098fabced26d1cb4ee579b8883d"],["/tags/留言板/index.html","7e09f2c0cfec242f114c1229fdb7c6ac"],["/tags/赛后复盘/index.html","eb0b31e4f17fd6adddff37627c87f476"],["/tags/黑盒测试/index.html","198a284a8d626096efdec7d0afb224e6"]];
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
