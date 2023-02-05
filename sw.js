/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/index.html","54feb64a06bd8ff720719e5efe0789b0"],["/2022/01/01/ctf之reverse/index.html","39bc285fd9078dba2aabacf44f4b4068"],["/2022/01/02/Python程序运行常见错误总结/index.html","c9d54c7ea3ece2ebdfd1ec64a27f208c"],["/2022/01/08/ctf之web/index.html","5221815c3c442993767932549a532c7b"],["/2022/01/11/Web刷题/index.html","31b50f6c9423d7705c72cdaa54055353"],["/2022/01/11/reverse刷题/index.html","65db742b31e615588c9295467d38cea8"],["/2022/01/11/博客制作遇到的问题/index.html","b8c851b491d236eb42b94cb1f8fa1ce4"],["/2022/01/15/C/index.html","e9037ea4de62a2051bfd97cd86284301"],["/2022/01/18/valine/index.html","7218db9c09d8237c7d202a9c98a2a584"],["/2022/01/18/新版next置换/index.html","88e3e559940a4b95ba3972fa013bb2e6"],["/2022/01/19/不蒜子相关问题/index.html","e7b4314e463198912b75db85c69f505f"],["/2022/01/19/框架问题/index.html","895817cd04a645537597d6c80afd0029"],["/2022/01/23/misc部分解题软件命令记录/index.html","db16f51ced5bc982244bda8c8c237c16"],["/2022/01/25/DVWA下载、安装、使用的教程/index.html","a2aa2dc6575e75dfb96a3e414ec379ad"],["/2022/02/01/684/index.html","9f9edd29c2a5660102a793f42dfcbeae"],["/2022/02/03/留言板/index.html","07b1c151d337cb8a976ce97d097d7a8c"],["/2022/02/04/SQL简单注入/index.html","2771a183d9e64dac15b7e8593f6db9a1"],["/2022/02/05/最全的HTTP头部信息分析/index.html","e0c0fcb50e9dc8db1d4588dd768ca404"],["/2022/02/08/ctfshow文件上传/index.html","f6640b21cdfc4087a091944bb11a8182"],["/2022/02/08/常见密码类型/index.html","547adb0a89b72b23beddd636d6d20188"],["/2022/02/12/VNCTF2022WP/index.html","841f4611c6f5ee4674215eea99585f13"],["/2022/02/16/rce/index.html","ad5800b77adaa15efaa8aea1b6e72f6d"],["/2022/02/18/hgame2022复现/index.html","5262311c8b7d9830aa53df385a7dae2d"],["/2022/02/20/ctfshowPHP特性/index.html","8dc480f82a5f0700cf75d1065b905d57"],["/2022/02/25/php伪协议/index.html","f3f2cde5e3b34406d4316763a2a917bb"],["/2022/02/26/ctfshow文件包含78-117/index.html","a5b6c8630d7af338e64e250c1ce6349d"],["/2022/02/26/ctfshow文件包含78-88/index.html","c5e6b71c4c21d2597f94a8c3a95e1788"],["/2022/03/02/Clash漏洞/index.html","2376a188c5273d241f520ab82b50594b"],["/2022/03/11/流量分析之题型解析/index.html","b4d72c67aacd3f10348c55e4b629ee1d"],["/2022/03/15/ctfshow命令执行/index.html","0747e4fa636b4841851408ddd9fd7adb"],["/2022/03/22/CGCTF/index.html","e6702e06589a37febcbaec9b9767a14c"],["/2022/03/24/ctfshowxss/index.html","54dc22ab9cace329f78ee8810fb3ac11"],["/2022/04/04/黑盒测试/index.html","6cfc6b63298286d3426d57bd91e9a97f"],["/2022/04/11/nmap/index.html","33b3cf70896a87f70375ff9a8ce7cc3c"],["/2022/04/12/渗透流程简要记录/index.html","d59bed362defcb1ff7a4e09b63877642"],["/2022/04/12/渗透测试之攻破登录页面/index.html","09485d9c702284d99e84fc1eb3cb5cd9"],["/2022/04/14/xray扫描器/index.html","7d84e903fca379c0b28316e6b7edd7cb"],["/2022/04/15/ctfshow反序列化/index.html","7104cad635bcf5966f3da42de5df3a57"],["/2022/04/26/渗透测试实战/index.html","c360a908086775e4e57e0813bb199a6e"],["/2022/04/26/网刃杯/index.html","8cb0db2f60757e0c03651bfd946b4780"],["/2022/04/28/sqlmap教程/index.html","8a3ac708815b8efcaa69bcadb75671ee"],["/2022/04/30/认知文件上传/index.html","3cd0e365cf8b5856b58497902bb4b3f6"],["/2022/04/30/靶场上传练习/index.html","de40cda3014776e56ee21c821b41f3b5"],["/2022/05/03/nahamcon/index.html","0e4fe06ef78874a0962fca71f992a305"],["/2022/05/15/awd/index.html","b1fbd56a09b90ee8db405ba882243aff"],["/2022/05/22/DASCTF/index.html","cf5c8b711d392bf91abd3c75e8dc4ed1"],["/2022/05/27/520/index.html","e94feff9e6628e6187cb71a54f177957"],["/2022/05/27/ISCC2022/index.html","57cdd2263e0327abb31e30691181cc20"],["/2022/06/01/第五届世界智能大会/index.html","168db5d35e06f71c778e04f93ad42926"],["/2022/06/04/SEETF/index.html","f0ca4dda064257f67389734802f0d9ec"],["/2022/06/04/bcactf/index.html","a50e763c35fa2aedebb49c9d26447bbc"],["/2022/06/05/BSidesSF CTF/index.html","b9de9fcc1e213540570ea6df65ce4ecf"],["/2022/06/07/Docker部署web题目/index.html","38877024ac6c0dc8d41ca99b43a1b2fd"],["/2022/06/09/利用oj搭建C语言考核/index.html","0f49766ff66b540482939d8713fe468f"],["/2022/06/09/论网站502/index.html","2bd6cd817a59d76f9651bf6f63089749"],["/2022/06/13/限免题目/index.html","28dea2884f9cb9422a52dee8d5247d98"],["/2022/06/14/钉钉rce/index.html","01f4d1ec8acc8fc48a1afbe1589ed5cd"],["/2022/06/16/内部ctf/index.html","3feb391dc3bf56338c9bda149a5ca386"],["/2022/06/25/攻防世界高手区(一)/index.html","41087ae98d8662a50397f62f5035fbf8"],["/2022/07/01/两小时AK赛/index.html","9afebc6c58db2658f598b8da24249576"],["/2022/07/03/鹏城杯/index.html","c315b76fdea55aff406c957f3467dcaf"],["/2022/07/04/XXE/index.html","c34fb0202e9a299267b3e6e09ca16fe1"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","8cfe48326becacb3a7e24a0177fa1673"],["/2022/07/08/chinaz/index.html","e9141b110e2266c7221de64ec0470031"],["/2022/07/09/蓝帽杯初赛wp/index.html","bff4b89d78b52c8d683f98a92274288c"],["/2022/07/17/NepCTF/index.html","7c6a82f181258752f78ebb88e5e06f1c"],["/2022/07/19/ImaginaryCTF/index.html","d633d97567b7572790793eb658874fbe"],["/2022/07/20/局域网攻击/index.html","608d3d371e7df6a3d7147271c66cf568"],["/2022/07/22/BDSecCTF/index.html","12b6385dcf05a310bd911763ba3dcea1"],["/2022/07/25/DiceCTF @ Hope/index.html","dc52f569753146d34fed51ade0714895"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","ba640f3b722c09336fb063a0e0e1b059"],["/2022/07/31/TFCCTF/index.html","1a30cf58048444fce96a93ca768c0d16"],["/2022/08/03/NSSCTF/index.html","a0aa2cfd86aeb546adc92be905b9368f"],["/2022/08/12/T3N4CI0US CTF/index.html","b984a03cdeebd590886e8ef998339122"],["/2022/08/14/SHELLCTF 2022/index.html","7b3bdd248f5cbc3f6af4ef4852060353"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","f79b31a1e8df4928ba36dc501d12e873"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","78ab649495e020bb436867d60dbdcfc8"],["/2022/09/16/柏鹭杯/index.html","56e39d2d33d89de9d4e44e24f830f3af"],["/2022/09/20/HUBUCTF 新生赛/index.html","b3c83fd57da9370916638dd585999450"],["/2022/09/27/NewStarCTF/index.html","9fcb2ce2a30d514640b04ca5cab04525"],["/2022/09/27/bugku渗透1/index.html","c689a0ed4ac3ee5bb32db2ddc7d1d790"],["/2022/09/29/tp6漏洞/index.html","76763034ca8983665870022d65b3b205"],["/2022/10/02/SWPU NSS新生赛/index.html","5105dc57fbfb77910f8a6ddc10edd11b"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","0d368b89915168af116a7b8b6a47dab3"],["/2022/10/27/Moectf西电CTF新生赛/index.html","2f89ab610af07270a26030f538556696"],["/2022/11/02/HNCTF/index.html","54990a2895b298bd3cf630436c48abb7"],["/2022/11/04/2022工控CTF/index.html","aebada2b49aef2b4d219ac8bbceb56ca"],["/2022/11/21/极客大挑战2022/index.html","db7c17a4a3eefbb4be873c03a02d9b2f"],["/2022/11/27/实验室考核题目wp/index.html","fd6880432d70d15b40638d70afb376fa"],["/2022/12/05/TUCTF 2022/index.html","33a93a26ede2271b9d33836c975e2cbf"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","353beb75a1c8570059bb4ef9d73610b5"],["/2022/12/18/金盾2022/index.html","be043356202d390b1c3d4756b2f45fe4"],["/2023/01/01/CATCTF/index.html","12bc00dfcaa38be74ec631e723bac1ce"],["/2023/01/09/RW体验赛/index.html","dc1dbeb6159ebc94919d0c7df0fa1662"],["/2023/01/10/铁三/index.html","b8575c609e0636407eea27038cc27028"],["/2023/01/16/Ugra CTF Quals 2023/index.html","f577abc1431304b93265c001c89409de"],["/2023/01/18/山石2022冬令营/index.html","62e9dabd06f7bbf5ce5ac6503d6b69b7"],["/2023/01/19/SICTF/index.html","2a5d4e4f64daff4f4b212c33bddf221c"],["/2023/02/04/2023西湖论剑/index.html","3b176f99577d6ea9941023a46a65fb5a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","31a8eb9194a7ff5abcf08c1484056563"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","c11550db8824399ec94c5782927ffbf6"],["/about/index.html","22468b288590dae64569d2b8261a8218"],["/archives/2021/12/index.html","1d7e4bc87e46b61f98bf9d92f5cab9c1"],["/archives/2021/index.html","1114ceff20a651b983cc0dfbd08b3b44"],["/archives/2022/01/index.html","55397a0fec24519f3997bc97f6e1c0f7"],["/archives/2022/02/index.html","a8d8efdc02b48ebdbc220e3d61d941aa"],["/archives/2022/03/index.html","30e80a36668f22abebabc64ff808d582"],["/archives/2022/04/index.html","4b2a79bbf7528476a4822de0002cb232"],["/archives/2022/05/index.html","1c7b86f10b693c98f540a4eb16fa576d"],["/archives/2022/06/index.html","530b16c79ca4785c75bfe758c1d4098f"],["/archives/2022/07/index.html","aae11de66ad61ff668f6a2a74cbf5687"],["/archives/2022/08/index.html","cbd70329fabe270ff91a77f3f21e6d24"],["/archives/2022/09/index.html","3eacdad310c9ad942f9c52866666ed59"],["/archives/2022/10/index.html","f4f9160688a8a737934e022c42309a0a"],["/archives/2022/11/index.html","2813f090dc267e13d527d023e34f3761"],["/archives/2022/12/index.html","d503083d55a344dd30d2bcb6da62a692"],["/archives/2022/index.html","fe7a748a67a0911cfb7688c8d2d42e5e"],["/archives/2023/01/index.html","688a3cbe957cee6facd39f6eb3e2df08"],["/archives/2023/02/index.html","7911e6088e7ab17ee32851c1f2dd7e1d"],["/archives/2023/index.html","a310bc1e9405930b3acbdb1f1447c03a"],["/archives/index.html","d5b43c39855adbcb0f7ea336a90a4700"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ee5b9badb766652970963d7066be442b"],["/categories/CTF/index.html","8727ba11855b226413452f5016c5669d"],["/categories/PHP伪协议/index.html","b69ff6846a16b15b3dfec904b2381975"],["/categories/Python/index.html","3dc65b6a6df59ea8d78353d2ef54b63b"],["/categories/RE/index.html","2469d8cd7133e0fca97a9767f3856691"],["/categories/Web/index.html","a21fef220982a7741f9cac29d3b48ae7"],["/categories/awd/index.html","b21b8f85313ef7a38300659e8d36bc75"],["/categories/index.html","aa3cef4df82bb0c506e348d50838bc76"],["/categories/misc/index.html","e3ab1ea53683b94e157bc6bea90c04a2"],["/categories/sqlmap/index.html","d497a2e588a6a59dc96fd6462d006e90"],["/categories/博客相关问题类/index.html","a160afdf84c8e2d92fdce368f2828f81"],["/categories/局域网攻击/index.html","76da4ae34ce421d0e01e3de582f9574a"],["/categories/心得/index.html","8696a02f0dc72045cc37bec01bd09762"],["/categories/流量分析/index.html","7ae2460765cce8983b3e73e93e3be5a7"],["/categories/渗透/index.html","00fc6715ce0432ea8b6ebf042da344c6"],["/categories/渗透测试/index.html","ec294de41b29e7241d6865ff4546f068"],["/categories/渗透认知/index.html","cf5158fe83a01435e499261582ad8122"],["/categories/漏洞复现/index.html","9de8b8f7ec49aa6fdb526b0e131b00d4"],["/categories/漏洞测试环境搭建/index.html","20e373539d78cf55916cd2f68876a8a7"],["/categories/赛后复盘/index.html","21ff47fcfeae19f8adaddaf60c5e40cc"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","fb0d529c94ec7cf9ccc17871dc98d1e4"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","7ef867986dee532845dc7921acbb598e"],["/guestbook/index/E587BBE68E8C_2x.png","a44a04ce6494d4c7e6b1b80426d2e8d9"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","88fd572b3513638924dfdefdacc159aa"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d745e80be01a7cdb4024c91974ce8411"],["/page/10/index.html","f7e8927915d4fbed9a0b895f9ffe12de"],["/page/2/index.html","88ed2d0da63e0ef8a80c228a08ae7a25"],["/page/3/index.html","153dde24880665acec16005fd9f2e09d"],["/page/4/index.html","9bef5030ef0d6b0595c8e66472d9c812"],["/page/5/index.html","4e7b45e3204d25ae91514769c2eee4c4"],["/page/6/index.html","a6f63c152b94276bce05ca4328482fc9"],["/page/7/index.html","94aeb4eda9e87889609064f8fc510379"],["/page/8/index.html","b6f568e1f0e12e41c4871950a283fb65"],["/page/9/index.html","0f08611b7ceecd0f8444b52bc957df47"],["/sw-register.js","5f9c71df7c36f5bf3c11dfdacf39a3ec"],["/tags/C/index.html","6c4817d92b0c00e7e78ca49120d4a94e"],["/tags/CTF/index.html","a609f9d8054133bc64c92ce8b6e43caa"],["/tags/CTF刷题平台推荐/index.html","e8f790e6a5792f7bbcc044a49951f2ee"],["/tags/HTTP头部信息分析/index.html","d369b566ba2a14bd6fcf2b0ddb3c8938"],["/tags/PHP伪协议/index.html","1d112fad11778658a37303bbe42a6c67"],["/tags/PHP特性/index.html","5eb9d2d02a17f35ccee4a4ec74df5f66"],["/tags/Python/index.html","c3d5b788fb8da8b640fbfbadb3dea536"],["/tags/RCE/index.html","76337a06cf45e63117b91fe8578626bc"],["/tags/RE/index.html","d4a11db74bf3ac9c45b3a4b3bb1d049e"],["/tags/SQL/index.html","0adc72687f5e78026c2575b9ea1ed81a"],["/tags/Web/index.html","e85fb71c5f9a6bd5444bcd1d23e72cbd"],["/tags/Web工具包/index.html","d2b8b23b08c2c6b4c6aa2838e38503ba"],["/tags/awd/index.html","dd03c8db0a3df8eedb85fc55b653e1a9"],["/tags/bugctf/index.html","ca99c87e67a4334deea0171ab82d002a"],["/tags/ctfshow/index.html","ac1d7bd674ec730e511730f9b4937557"],["/tags/index.html","ab4524317caefa3cd9582dfb5648bf46"],["/tags/misc/index.html","d34da2773ad02464b00140417981392a"],["/tags/next主题失效/index.html","8f255f544e034bb717b816f04ac9a5c0"],["/tags/sqlmap/index.html","85113ff87f5d4616325f08ad4c5c7ea3"],["/tags/wp/index.html","19ccfedb7ca8ae6f3842cecc7906c06f"],["/tags/xss/index.html","e2182c0e4d3b92f75d4367b8ca9a6619"],["/tags/xxe/index.html","5e0cb8f36c9fca9765353a17bd15cf8b"],["/tags/不蒜子不显示/index.html","ceb2b5f58cb736ca578c04e7a5244a23"],["/tags/博客/index.html","1e3838ccc116430a55db808067da621d"],["/tags/博客主题优化/index.html","2887a53369b233d7b0de316d77f615f7"],["/tags/博客死循环框架问题/index.html","80abdb59a28ca520c5507108b76070f6"],["/tags/博客部分问题解决方法/index.html","fa3bebd66fcf77792a3f9b3eb73ae847"],["/tags/反序列化/index.html","559364934b147cd80754b37acdf70628"],["/tags/命令执行/index.html","cc894b71bee39c493a61f2f8843e73fd"],["/tags/局域网攻击/index.html","ee52fb6a8f9365e5b67a1265723f9076"],["/tags/常用指令/index.html","29d4871d3f9e98dd52b00659b760691b"],["/tags/心得/index.html","c1a11896632a4e56efbebe6e3ca75ac5"],["/tags/文件上传漏洞/index.html","464b84cef41da7b3718fafb011ba5cd3"],["/tags/文件包含/index.html","dd3563d41f90a2ff5c435e042af19a7e"],["/tags/流量分析/index.html","0929369b61d544a18b57dc353011eed0"],["/tags/渗透/index.html","e38cc76d44b4e5b854c906d21cbba324"],["/tags/渗透测试/index.html","d9ed8ac965f8db6adc35e2e8e821079f"],["/tags/漏洞复现/index.html","63b1eddee60052e85fcdfc06f6a27f9e"],["/tags/留言板/index.html","952c9a8b8054a6dd6efcd334db9ed020"],["/tags/评论系统/index.html","7585148b3c7553e4f1b94f1818177c93"],["/tags/赛后复盘/index.html","68784949b2a13378921445cb68486d8b"],["/tags/黑盒测试/index.html","1d7e344d45630bbb9d26d9c13639dc8a"]];
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
