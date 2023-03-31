/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","8b5cfca0dc886a25b566c1a71f75bdc5"],["/2022/01/02/Python程序运行常见错误总结/index.html","eb353215231e8f4bbd5d024fb913b1a4"],["/2022/01/08/ctf之web/index.html","a007fdd11b7043bbcc6f6e92c9b5c72d"],["/2022/01/11/博客制作遇到的问题/index.html","b495c3c6cf1d0870925808697abf502d"],["/2022/01/15/C/index.html","6be8011305b1fcba08b29f68c891e843"],["/2022/01/18/新版next置换/index.html","716f59b546f5b3ebc1f7c423492a2973"],["/2022/01/19/不蒜子相关问题/index.html","f7246c619c76b2a198f917775d9ce09c"],["/2022/01/19/框架问题/index.html","f73cf7f8ab7a0bd45aabfc3ece12f5a0"],["/2022/01/20/ctf之reverse/index.html","2c7246faf95e70d232f55fc4736082f4"],["/2022/01/23/misc部分解题软件命令记录/index.html","ca891a9ada8d8487883cf0d57b384e39"],["/2022/02/01/684/index.html","732654ecb647677c292cb42104efd258"],["/2022/02/03/留言板/index.html","2511177032a5009865589dce9329b84e"],["/2022/02/04/SQL简单注入/index.html","f94fa2d16dc72b5874818ec5a3e16d12"],["/2022/02/05/最全的HTTP头部信息分析/index.html","1dd0c276fa2460d463e03949de918f83"],["/2022/02/08/ctfshow文件上传/index.html","bbd3b6f97bc2e53e9e02e6f4a57926cf"],["/2022/02/08/常见密码类型/index.html","abf673875800dad84f656d1b7b77b7bb"],["/2022/02/12/VNCTF2022WP/index.html","d45d1f572debc9e44a8bf94ff6924734"],["/2022/02/16/rce/index.html","cb5e3f3646b1be2565dffc462f5b3c76"],["/2022/02/20/ctfshowPHP特性/index.html","639119acbf6de0e7a427e04927bdfd05"],["/2022/02/25/php伪协议/index.html","91292a7f465171d028dd92b097a8533c"],["/2022/02/26/ctfshow文件包含78-117/index.html","a55615aa085e1b5c08ee4bb4fc3abfed"],["/2022/03/02/Clash漏洞/index.html","c74d25c755e6dc9bca6bdc98e90ee688"],["/2022/03/11/流量分析之题型解析/index.html","d7c358f2b1a746b0aaf68a19e6e0d821"],["/2022/03/15/ctfshow命令执行/index.html","084aed931d4ab2a1f0e93467f58a7356"],["/2022/03/22/CGCTF/index.html","bcbe8b028f4e9bdd30f670e2c74d7a9e"],["/2022/03/24/ctfshowxss/index.html","b6a3df363f832b3e13d8b0a2a712a691"],["/2022/04/04/黑盒测试/index.html","8171c3ba9c9adb409b15e6b627524c05"],["/2022/04/11/nmap/index.html","cb033314bac3415cfb750284ffd8e593"],["/2022/04/12/渗透流程简要记录/index.html","64449884448e1d259032715a9f9336f4"],["/2022/04/12/渗透测试之攻破登录页面/index.html","d2249ace4302ec984b4f079810493709"],["/2022/04/14/xray扫描器/index.html","2fc78e7d94def6559b1210fc80ded7d1"],["/2022/04/15/ctfshow反序列化/index.html","f69d5a85203c5b623b78fbdc0b6a1e30"],["/2022/04/26/渗透测试实战/index.html","1ae5aa2a4bcc663867fc50d1579e5f2b"],["/2022/04/26/网刃杯/index.html","4bdbe7f48b1a08789a04f3425b6294eb"],["/2022/04/28/sqlmap教程/index.html","b1bb04527067bc7c9a30bc9768ce7797"],["/2022/04/30/认知文件上传/index.html","7fe31c661a3a2b050a4820d6d890bf7d"],["/2022/05/03/nahamcon/index.html","fac9e7bff6701bf7d1a1994a8ea85d51"],["/2022/05/15/awd/index.html","1cd0bf2618052f97b31f476bcb9281b6"],["/2022/05/22/DASCTF/index.html","8f72aea47d9f457c38ecd82914b46bf2"],["/2022/05/27/520/index.html","a690b466459f253dcfa22acc644e70c6"],["/2022/05/27/ISCC2022/index.html","7b84c8748656daf029e1ed2b3e4aab52"],["/2022/06/01/第五届世界智能大会/index.html","a65168698b209df809dc3e4c6d45cdc9"],["/2022/06/04/SEETF/index.html","2245cb70765ed07a4590cc9a70cc0b82"],["/2022/06/04/bcactf/index.html","1ed758737dd8f25d73b35e43ae03bd05"],["/2022/06/05/BSidesSF CTF/index.html","ad093a344afa38f3ad2d61759164be02"],["/2022/06/07/Docker部署web题目/index.html","ea3752ec4f0195757128e69292526b74"],["/2022/06/09/利用oj搭建C语言考核/index.html","85ae634c2002f6c7be2b9f8cc3dd3016"],["/2022/06/09/论网站502/index.html","8e53b6b6ac15322594cfae61aae3508e"],["/2022/06/13/限免题目/index.html","86ff136e0b02962a52b011464ed39204"],["/2022/06/14/钉钉rce/index.html","f5307587ea70d8a574c0b7b5f4cc1a9e"],["/2022/06/16/内部ctf/index.html","bfa02be1f7a18efbbc4dc980bc7a5e9e"],["/2022/06/25/攻防世界高手区(一)/index.html","7ee937c0840592fecabda1932b58ba33"],["/2022/07/01/两小时AK赛/index.html","564bd6247e9a592c66a075e40cdecc72"],["/2022/07/03/鹏城杯/index.html","2c41ce3fe28d3c1b8b7e117dc6e214e2"],["/2022/07/04/XXE/index.html","224095e7eb5816b6352703e720454059"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","cee3ff97087a4d122367b4524c288c78"],["/2022/07/08/chinaz/index.html","4964f5ed1d28a8b03ba332b5903f1422"],["/2022/07/09/蓝帽杯初赛wp/index.html","56626102504596d44e392203dd1a1732"],["/2022/07/17/NepCTF/index.html","680d40c6ad2e29737c6ea600dcac6239"],["/2022/07/19/ImaginaryCTF/index.html","069a5a4b669ec7325bb964cb22036d4b"],["/2022/07/20/局域网攻击/index.html","728b312af25bd20e22ef8a12d744d155"],["/2022/07/22/BDSecCTF/index.html","131b080bed6e72a909bc437d8189b68b"],["/2022/07/25/DiceCTF @ Hope/index.html","92baf3bf2041ef8856230a5b14c81750"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","0cd9154410c1d2c697c946148b436ca9"],["/2022/07/31/TFCCTF/index.html","a0016d3fe21b8974c72bbd2428c209cf"],["/2022/08/03/NSSCTF/index.html","a714e3e176d52b62c3e77d52a10266e1"],["/2022/08/12/T3N4CI0US CTF/index.html","5a821e53c09a29fe29369c6bd1be49d6"],["/2022/08/14/SHELLCTF 2022/index.html","8051fdc151d2fa779168d3d916b71be7"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","35aaf42ae745e488b66cc40df05154be"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","741c3e024adf92783af8e4a8a4205e60"],["/2022/09/16/柏鹭杯/index.html","72ce4115380715750fc514f24b329a26"],["/2022/09/20/HUBUCTF 新生赛/index.html","759299f8f0cb0dc9ef848ab8f56b9600"],["/2022/09/27/NewStarCTF/index.html","1df64c6eb985aa8837952ad57470fa12"],["/2022/09/27/bugku渗透1/index.html","0fc4dc5eb46a06ebc9e2afa51184a37f"],["/2022/09/29/tp6漏洞/index.html","bb3eb32e6f6bdc4c77f5f5f667da14e3"],["/2022/10/02/SWPU NSS新生赛/index.html","81c7e8c27748be8f79f196dacd199d4d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","b6d095a362e120446410ba19748f78b7"],["/2022/10/27/Moectf西电CTF新生赛/index.html","781097d86e49597b12c4856473c0a7d5"],["/2022/11/02/HNCTF/index.html","a9f5cb680e27c1c1b66f24b83281fbe5"],["/2022/11/04/2022工控CTF/index.html","a0fb1ac210ddb5951061be30a16ead56"],["/2022/11/21/极客大挑战2022/index.html","eb37e94a5676fb55834667b8bfc6b322"],["/2022/12/05/TUCTF 2022/index.html","4b309707b95ec5f6930f3383a8d8567d"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","b036384832a374a32d5c82ac41174913"],["/2022/12/18/金盾2022/index.html","f2384e338edcc2e6bc8343e39d657da9"],["/2023/01/01/CATCTF/index.html","91ad079c4329ca6cdd39be277800fb82"],["/2023/01/09/RW体验赛/index.html","920971bd8df9dbec03e767b9de58fb18"],["/2023/01/10/铁三/index.html","78f245eddaf47b59d210ce07ea7eff5d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","3e0d48870fa1c912204600af87dae22a"],["/2023/01/18/山石2022冬令营/index.html","445c5390b15c8c13103c0bc236e613e6"],["/2023/01/19/SICTF/index.html","666f2f2943f514d331033312ac1973e0"],["/2023/02/04/2023西湖论剑/index.html","49a6657c066afb09ea5f35d7d0a27682"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","7d6d62a87cd56b6730b01aab445b805d"],["/2023/03/04/公安/index.html","c4b56df5ad85af412ec3f4b0976381b0"],["/2023/03/07/mysql之udf提权/index.html","783af0e07b8b55183023bb9625a5ba63"],["/2023/03/07/红日靶场练习/index.html","c21c477dbd5568195fb2be1789711f77"],["/2023/03/27/NKCTF/index.html","744fa9980e689fe84064a9e03571194b"],["/2023/03/31/楚慧杯/index.html","0e120e22f84b75b923a2583e1f4fcfa6"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","6776caa0aee7c8d35a5a1b2c6ece9f12"],["/about/index.html","d225c7d9caf79a92d31f2d21e9c8f71b"],["/archives/2021/12/index.html","50249af7702e929f52825408f6e968bd"],["/archives/2021/index.html","a2c75bb534370bcde99c758cb629cc72"],["/archives/2022/01/index.html","de48191fcde20b1fff78b02566285de7"],["/archives/2022/02/index.html","982f309f3af147117a2b3acf1d1e6dcc"],["/archives/2022/03/index.html","cc1a7da28736287eea012158fadfe6bf"],["/archives/2022/04/index.html","73a2b841aa69d83f337142f3fec42147"],["/archives/2022/05/index.html","29a1e6d79ae3ffa488639732ca60fd95"],["/archives/2022/06/index.html","2e06235cf627f631fe1bc8dcd16fa1bd"],["/archives/2022/07/index.html","63a62ac908e1a072cabae23d7d11f271"],["/archives/2022/08/index.html","ec2f8e61885dd7a6de662e59fda95cb2"],["/archives/2022/09/index.html","35c77d5d0c6cf67104b5ec7602a97047"],["/archives/2022/10/index.html","b60974629abda62680486a044e1f40a4"],["/archives/2022/11/index.html","e72e7eb87aa866f7e267d6b3ba157052"],["/archives/2022/12/index.html","5cef718910d4185124b78c289350d51b"],["/archives/2022/index.html","269dea48e9f1977a739819c1a55a7342"],["/archives/2023/01/index.html","c697e7c74237b0bdc5769e5fa88c4735"],["/archives/2023/02/index.html","d3665b7ba458636ff179e7580f3bddd3"],["/archives/2023/03/index.html","934a8a973512052185ab78f949e05686"],["/archives/2023/index.html","45ebe1c68a21ee5b7f09b72f0a0d38c9"],["/archives/index.html","9c23b14a97b76ee868b0052b61450742"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","7c375726f128f597b9a4afcf6b049ea4"],["/categories/CTF/index.html","12a8dba2c90ff366aeedfd6b7a3cf244"],["/categories/PHP伪协议/index.html","d0d8186be91ae0e26c9744dcfdb53256"],["/categories/Python/index.html","46937ac11d1c6b4f973ae137ea5559f3"],["/categories/RE/index.html","1b32544310ee377bdf9905b8ae82e339"],["/categories/Web/index.html","d90c8140d1e501dd25917a37e1f65b46"],["/categories/awd/index.html","0f0e62fe90c522112449691f547f1d53"],["/categories/index.html","3a0213d4aa78de1f637beed35e315862"],["/categories/misc/index.html","deaa88df2b7710e7546a15ca43bd232b"],["/categories/sqlmap/index.html","090c897e278f87f006747dd52a0676a9"],["/categories/博客相关问题类/index.html","bd2425b142fdd7cda8d7b43c8265e264"],["/categories/局域网攻击/index.html","6897c1a132794e7d13cc48039f8b921f"],["/categories/心得/index.html","00466d129ce60ad80515b37d1812954b"],["/categories/流量分析/index.html","e6a4005df2a1ad0af374af6f640dbc78"],["/categories/渗透/index.html","86bd0c70a407d120ab998562a3cdde72"],["/categories/渗透测试/index.html","93dbaf867b309d617c8d438bf7ca6f61"],["/categories/渗透认知/index.html","b96fb9708c67a4796e8e44001a7d59a7"],["/categories/漏洞复现/index.html","af5ad2d398f2e5b3dd354cb208660f4d"],["/categories/漏洞测试环境搭建/index.html","1b691268fb3e3813b8cf4db0c42ae518"],["/categories/赛后复盘/index.html","053dae6552e7459b8a96e2c059a6a871"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8a07ca1cafb9b888e87c63cfb1a1a907"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","ff72dbb16b58aff24cb66b6472a94ed2"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","3a3a48c767e2dba9ffd41354a5ea5ec1"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fddd947835e0407484594fbe329ffec5"],["/page/10/index.html","624242b5aa6ac99bb9b19568f67f125f"],["/page/2/index.html","db20112e98cfd59c6ecaa5ab918361ec"],["/page/3/index.html","05aea278774503ca52422c0776479fdc"],["/page/4/index.html","e4ccb23dd4f169f58845e339dd5d8bce"],["/page/5/index.html","734c64525057cbf38701968b47ec3a08"],["/page/6/index.html","6f82c8eecebf852d0fe782f52ee3f277"],["/page/7/index.html","14640c30988706a1099ffbc409f353ef"],["/page/8/index.html","99a8afd76553141864ee260ca11ca51e"],["/page/9/index.html","b301bc7d9c48e0324baa93eb39cf5ddb"],["/sw-register.js","9f8aadaf2ca317205c474fe5908fe4a8"],["/tags/C/index.html","7edbcb8448adfc93951d27e3141f1ebe"],["/tags/CTF/index.html","859b3c2d8ede68e854b9696ec4bd9104"],["/tags/HTTP头部信息分析/index.html","db97c20c2b9843ba000415d5295d993f"],["/tags/PHP伪协议/index.html","527ef97f7c797e126562bb998dbbecad"],["/tags/PHP特性/index.html","a6b8d921331729ee9b74026d1822ad62"],["/tags/Python/index.html","e5a4501a1774335124c426ba0f4d661d"],["/tags/RCE/index.html","0501a73f693840e164ba9edcf71dec19"],["/tags/RE/index.html","f1b2b7db46cee278cf3b773f83727fab"],["/tags/SQL/index.html","6fb3256800799bcc6941c75368254069"],["/tags/Web/index.html","e96a3099799548f3b0bf43c3eee55277"],["/tags/Web工具包/index.html","f8ec358cfbe491500961cd18a1080b52"],["/tags/awd/index.html","85617ab13b64fd5e46a9bb043ebdf552"],["/tags/bugctf/index.html","8601532e15ac599ede695ea410c0cbcd"],["/tags/ctfshow/index.html","99a1d8a96e1afc2ae928ccf128af5715"],["/tags/index.html","307f9a681b4520a631942ffbaf8bc057"],["/tags/misc/index.html","1099291b14c487c751832ee5cbc4b702"],["/tags/next主题失效/index.html","6045b0422dc6096ea5cc422223c17573"],["/tags/sqlmap/index.html","731846f464e0a95d9c179f3012f4c59a"],["/tags/wp/index.html","10ed572d73ebe3f8b6a11badd58d369f"],["/tags/xss/index.html","7a0cd0005a5baec05482597c4f440d9e"],["/tags/xxe/index.html","bcb0b123861993f7013572ed58de2cdd"],["/tags/不蒜子不显示/index.html","43a4cffb293e5f2f8317ccc6bbe3b2d9"],["/tags/博客/index.html","dd4e838ba8a6db52f023fc751a09c9e9"],["/tags/博客主题优化/index.html","8fe8c48e82581d05d63dddfa7e21e043"],["/tags/博客死循环框架问题/index.html","69546a8d6d0a1864fe9e294ce6fc811e"],["/tags/博客部分问题解决方法/index.html","1f380d785ca58f179de83ccfce5caf04"],["/tags/反序列化/index.html","c6bb99a8a2c459ea8c12c63160252826"],["/tags/命令执行/index.html","56f41d0baf6a52ffec4660dbbcc5d8e4"],["/tags/局域网攻击/index.html","2a3de36467b87f0271eda6bac1b1bd22"],["/tags/常用指令/index.html","f07cd71502ca30d836088a10495f0960"],["/tags/心得/index.html","dd272b09961fd9713b2fe1712583ecee"],["/tags/文件上传漏洞/index.html","d1cb77c112072a53adde1d47a641ad82"],["/tags/文件包含/index.html","180fd8fd9520871c8e24ba7419ca6d8a"],["/tags/流量分析/index.html","7c913c79ca9f28b3034fdf8b7f0c4da6"],["/tags/渗透/index.html","938cc4e2f9238518c22def39731a3fd7"],["/tags/渗透测试/index.html","79e2610dec7e65494d1d6d95d78c2fcf"],["/tags/漏洞复现/index.html","d4fb3788b6f86257a6bb3007ea014e4f"],["/tags/留言板/index.html","31a531f541501646eea57a45423f8a3d"],["/tags/赛后复盘/index.html","ba437bfbeedd3f7dbf114063b4dcc415"],["/tags/黑盒测试/index.html","8456aa2a60f631735103e513d25a106d"]];
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
