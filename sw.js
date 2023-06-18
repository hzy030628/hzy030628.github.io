/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","000924724b4e5ebda2191a8d300d7a35"],["/2022/01/02/Python程序运行常见错误总结/index.html","ac8a532ef7e6602bb935db55ffd05d97"],["/2022/01/08/ctf之web/index.html","f04440c46f8d900e521d9547876a2cf0"],["/2022/01/11/博客制作遇到的问题/index.html","20f50a96b3488e4f86101d0186a7fada"],["/2022/01/15/C/index.html","218d84ed5510143afb0c99b7031f187e"],["/2022/01/18/新版next置换/index.html","3ad8bd3e598571e13c511825dd2b2336"],["/2022/01/19/不蒜子相关问题/index.html","0690a7ab892ca100782bd9ab13713a53"],["/2022/01/19/框架问题/index.html","863009dc3decd83a6494fa582a1f7122"],["/2022/01/20/ctf之reverse/index.html","a790ff3f5584ac5cbe8bc499fc3e486b"],["/2022/01/23/misc部分解题软件命令记录/index.html","dee5a9906570b52b92cdd1be2c5fa92c"],["/2022/02/01/684/index.html","503e815b93089c6c4056d7a8971c4c8b"],["/2022/02/03/留言板/index.html","75ee42ccdeed01c7e65fbff9e89dee73"],["/2022/02/04/SQL简单注入/index.html","baad6e6fbddfbfb9e4c94a872b0f6d16"],["/2022/02/05/最全的HTTP头部信息分析/index.html","fd89e674e1bbb969bc5ed0bc81db88d3"],["/2022/02/08/ctfshow文件上传/index.html","fe597a6017663fdddf0891d9f2603284"],["/2022/02/08/常见密码类型/index.html","17ec60d9ed19984909325c92b20c80a7"],["/2022/02/12/VNCTF2022WP/index.html","b3cc60aab744c1ff30d81369d87361eb"],["/2022/02/16/rce/index.html","de857c23f45b20635d42af3d4ffaaf53"],["/2022/02/20/ctfshowPHP特性/index.html","78bfd7636f6b050b1a827bbd42fa69ff"],["/2022/02/25/php伪协议/index.html","758222a128dcb1783ea9c90fdd21c4b1"],["/2022/02/26/ctfshow文件包含78-117/index.html","2743827244ec7ce833f4442a995a718f"],["/2022/03/02/Clash漏洞/index.html","6d63866b3beb37c397a884a3debbf21f"],["/2022/03/11/流量分析之题型解析/index.html","10c3e04e277bcafe96ca78dbf01a1556"],["/2022/03/15/ctfshow命令执行/index.html","4d28b2b00d0ab29985987c750922f0ae"],["/2022/03/22/CGCTF/index.html","8505b172df97c96faa90dd6544365688"],["/2022/03/24/ctfshowxss/index.html","0a418995e7ec3ee8908514930768a65b"],["/2022/04/04/黑盒测试/index.html","b2a540df63261350c5e27d5ca433abcf"],["/2022/04/11/nmap/index.html","8e8fe2abc4d3a866a8a535a2c33a973d"],["/2022/04/12/渗透流程简要记录/index.html","3075ed5e6270c635f8bbc760c7395ee4"],["/2022/04/12/渗透测试之攻破登录页面/index.html","cb10406fc8b7b7536747f4eab6052399"],["/2022/04/14/xray扫描器/index.html","f2c967ab520f268e99d40eec1c183a51"],["/2022/04/15/ctfshow反序列化/index.html","73e3133f8e86a16b872ab5d021e7ed64"],["/2022/04/26/渗透测试实战/index.html","b49cf1751720d1c8e4884c5ea2436135"],["/2022/04/26/网刃杯/index.html","4e08fc420b4b23da85ec53258d40d0c5"],["/2022/04/28/sqlmap教程/index.html","c3517740f920772b4d9e81b67e474b1e"],["/2022/04/30/认知文件上传/index.html","82277d9f50c82c4ff239166813914218"],["/2022/05/03/nahamcon/index.html","263128cc6a245b12c48c54fb82a3e7b8"],["/2022/05/15/awd/index.html","398dc0d781e83d6155c6163b3939bb68"],["/2022/05/22/DASCTF/index.html","e476223864d5e9978aabc950af3ad05f"],["/2022/05/27/520/index.html","0cd5180b87b63cdc0aa74c3fe235da44"],["/2022/05/27/ISCC2022/index.html","a1f94c4ca030cc879e205ccb0a58df4a"],["/2022/06/01/第五届世界智能大会/index.html","ad21ae531f560aa4cea635670fdc2eea"],["/2022/06/04/SEETF/index.html","290ff394eab0177b5ecbf61390e9c15f"],["/2022/06/04/bcactf/index.html","551729d460c89eca2ebe50a7b98c2011"],["/2022/06/05/BSidesSF CTF/index.html","caefe4e284a970c8bd5a53c3cf5ad63f"],["/2022/06/07/Docker部署web题目/index.html","260be5ec03081ef95ea4f6d80b6180fd"],["/2022/06/09/利用oj搭建C语言考核/index.html","5c4dea1bd36a1e62acd7aeeb3d579139"],["/2022/06/09/论网站502/index.html","142753bc6e1004836a834af0d10cb12f"],["/2022/06/13/限免题目/index.html","4530d127ec6da53e84fd26d2db628b40"],["/2022/06/14/钉钉rce/index.html","5e3a8b469a013a988463d3cd6fcc0d37"],["/2022/06/16/内部ctf/index.html","9dd4e137a9454d12c23e749c132e0616"],["/2022/06/25/攻防世界高手区(一)/index.html","99291618ff3ca1a2367b88c1b36d3597"],["/2022/07/01/两小时AK赛/index.html","5eb45740b69c0601e81e5af62b8cbaee"],["/2022/07/03/鹏城杯/index.html","839a6153c015706d6867ed0922b73c98"],["/2022/07/04/XXE/index.html","9884be7d351ced4d44384bf2f7d22832"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","3d444d42ead314566b6b61af83b923ad"],["/2022/07/08/chinaz/index.html","fa6942c974f887608eb2ede96653d594"],["/2022/07/09/蓝帽杯初赛wp/index.html","7a4203696e8db5db29504702e280b5c6"],["/2022/07/17/NepCTF/index.html","2183c74ea1e3e6533f47d99786be7fb6"],["/2022/07/19/ImaginaryCTF/index.html","516aa5fa29405124b55fec3585f09646"],["/2022/07/20/局域网攻击/index.html","c62cec35c40ee571e25dc26bcf9564d3"],["/2022/07/22/BDSecCTF/index.html","3a195101ddd7fdf24c459d270bac1c31"],["/2022/07/25/DiceCTF @ Hope/index.html","a9c6e486ecaf85b34be9fbe5d3cfc140"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","1d2edfa6eb33075a949398beacad58a1"],["/2022/07/31/TFCCTF/index.html","e04cb1c3f46bc029dd50f15d190d76ea"],["/2022/08/03/NSSCTF/index.html","a784141725d3b1d5e5d9076e5f319b5e"],["/2022/08/12/T3N4CI0US CTF/index.html","a145311bdd17493d3fa1042deba73651"],["/2022/08/14/SHELLCTF 2022/index.html","063334bb6adf264b3274a5debda31aa3"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","9a0d5d8b4dd597075f7dc831fecfa032"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","c48166fbffc12dc184e278b02a0cacdd"],["/2022/09/16/柏鹭杯/index.html","9dc1aea20bc756fd9e4b158dad2502de"],["/2022/09/20/HUBUCTF 新生赛/index.html","2928da8500004114b5f5847b933d9bfd"],["/2022/09/27/NewStarCTF/index.html","d5187db96ac8c4a9df89d4ac06f64312"],["/2022/09/27/bugku渗透1/index.html","db520ee6675ae89cb5b7724c67b52ff4"],["/2022/09/29/tp6漏洞/index.html","b9609be3ff6de6e7c57236e83b1c8a7a"],["/2022/10/02/SWPU NSS新生赛/index.html","78f5bb67df53dbd97454f040fb257910"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","8cdbf74554f3819f9b995890909970f7"],["/2022/10/27/Moectf西电CTF新生赛/index.html","9819378f01e4014600a192c437f0e7f7"],["/2022/11/02/HNCTF/index.html","5ae295b7d09a1b343ecb02d30c21afe5"],["/2022/11/04/2022工控CTF/index.html","b0999a1c1c74794b6579c1fa66774842"],["/2022/11/21/极客大挑战2022/index.html","c971054e4a5a47e58a6d70573cf1519e"],["/2022/12/05/TUCTF 2022/index.html","68b96e973917ae0c4ca940bd3b86c14e"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","a74a83320eb2aa3aae209f0dc71b36b7"],["/2022/12/18/金盾2022/index.html","60506a2b8729708063e400354d1fbc01"],["/2023/01/01/CATCTF/index.html","6d26578381cae86b0b348aeacd6b8639"],["/2023/01/09/RW体验赛/index.html","800a1101f0c3e922bb290e5799408fe3"],["/2023/01/10/铁三/index.html","6cc0dfc4fbe1eb938b0bbf096dc89682"],["/2023/01/16/Ugra CTF Quals 2023/index.html","adc9ef24bb5fd2d0de4cdf5d71d1e409"],["/2023/01/18/山石2022冬令营/index.html","ed5239c929cfbb2131317e316b738d90"],["/2023/01/19/SICTF/index.html","adce3535f033f8bb960c7b8ed58e89fd"],["/2023/02/04/2023西湖论剑/index.html","6862c7d87f02ba4976754acbc532da4a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","9ae5071e7f4653d5bc56a1acca63be65"],["/2023/03/04/公安/index.html","cb28d7e5c333bbe60de9b340228cc213"],["/2023/03/07/mysql之udf提权/index.html","700daaa7688ed6bfbef36f4fc2969fb1"],["/2023/03/07/红日靶场练习/index.html","018997e33a0c5baa2c0c83ec85d6b616"],["/2023/03/27/NKCTF/index.html","5062d0c7350ee659f7d24752c94b3e96"],["/2023/03/31/楚慧杯/index.html","a572ad2063fb48bba7facd8572c3f04d"],["/2023/04/23/HDCTF2023/index.html","4618b668d11a32fa5c0211b4bbf9e9de"],["/2023/05/05/暂停/index.html","2a106c705dea7d26654ea5b696b952e6"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","c93d53350093d929373aa7d2854d57f6"],["/about/index.html","32c579a95ddc022f061c5b47a9b21288"],["/archives/2021/12/index.html","a38d08271f5bd4c931aadd031085fc5d"],["/archives/2021/index.html","e3ef1be61102552ff0a7193b7c1b4a73"],["/archives/2022/01/index.html","19bc4a128a3fc3e64e5576345a1c14e1"],["/archives/2022/02/index.html","5a2dd6f9f15e51410e3ee79208a7092d"],["/archives/2022/03/index.html","726fe1becf229ca84ced84dc5e920808"],["/archives/2022/04/index.html","815cff4aad36a64e7bd7af97a02ab5dd"],["/archives/2022/05/index.html","56da9d37b5062c34e6a3d91eb63f555d"],["/archives/2022/06/index.html","50726aa143192a13440b83c3f5aae464"],["/archives/2022/07/index.html","5c0f586e3357640bb8926c7244718ddf"],["/archives/2022/08/index.html","1179e58e729a5044e8e52b45ca55b4f5"],["/archives/2022/09/index.html","db2bf3d7551b7ff0a3e409d586d31052"],["/archives/2022/10/index.html","096b29a557c4365d0fa7886283d2c6ac"],["/archives/2022/11/index.html","0b6699e7df0e924ab987ba3bd9df9fe6"],["/archives/2022/12/index.html","fb3350a06652a6d86c62875a35728c80"],["/archives/2022/index.html","104fe8e1003dbcb2a93fc241d92f5e3d"],["/archives/2023/01/index.html","8c7ecd6d56806ce16feb233d117ab5c9"],["/archives/2023/02/index.html","377c49f28466ff234d1a77ef53136941"],["/archives/2023/03/index.html","d65dacbcf2595d259e257b95df23a49c"],["/archives/2023/04/index.html","15f312fa524807c4b8e2485298f1bd61"],["/archives/2023/05/index.html","e7e1da1f368d8c9ae478e348deb50733"],["/archives/2023/index.html","0e0b13d659b6fb2647b6f06531ce28ea"],["/archives/index.html","2c4b34f7ba9871e3a0cf5ca5ab4a40e3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","1a3411d8559a8343159d62927dddebcd"],["/categories/CTF/index.html","9e92ba926c44b6f65d5d6024a0728f36"],["/categories/PHP伪协议/index.html","cd10f830e22289249a97893459becff4"],["/categories/Python/index.html","80f10d619d169ccf7121b5ecb3158229"],["/categories/RE/index.html","fd2142e7254ac091181f4d57b2edda24"],["/categories/Web/index.html","2b3db57296a07e1032f4c1f6a1f5c3f7"],["/categories/awd/index.html","12930c6dda384af63673b8ca1344b22d"],["/categories/index.html","6129b4bde44b81236f3c574dee6e5e97"],["/categories/misc/index.html","32e6343fb3dc15e6d071eccd21cdabac"],["/categories/sqlmap/index.html","f0c45c0ca42cb6c6fc9d140eb3648021"],["/categories/博客相关问题类/index.html","958eb1d84bff5a74cf5ed332407beb33"],["/categories/局域网攻击/index.html","06bf8b7c4b3cd4c82aba5e4fb2cbfd43"],["/categories/心得/index.html","d9dcc4b11a5ed735f5e03b70e662344e"],["/categories/流量分析/index.html","4745ba5187390691860c7c3ec8c1963b"],["/categories/渗透/index.html","8cdfcef564891870892b1f482949f489"],["/categories/渗透测试/index.html","827e3de3f5b246450b71120ade3e43b1"],["/categories/渗透认知/index.html","455ceff73e9d7cb085f038140b9b6af9"],["/categories/漏洞复现/index.html","bdc98a429c3eb3978cade497aa3a7f01"],["/categories/漏洞测试环境搭建/index.html","3c258e6544eb1628f40cc168495de241"],["/categories/赛后复盘/index.html","9a8b001c9fe180a6e2cffb2ba6ae26a8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","e3adf0920d6c877416ed31e2fac78254"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","bedaff907632765cf7905a98852a4b13"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","17a2e0b9c64dbd72795846c52758fce2"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c98b0913c4afa8407f0a12684b87812e"],["/page/10/index.html","68b1a38d2788d44eb8982541db8dbb35"],["/page/2/index.html","7bcb2b45a1feeb9c0ad0feb0bd258154"],["/page/3/index.html","40534f7d0847fb9ec79929f29ee3f319"],["/page/4/index.html","93300471c68c512b16ef75c7c8aff0f9"],["/page/5/index.html","69f586a99e95a030e375081ac3961e45"],["/page/6/index.html","5e70c43ab90395ba14593588d6982671"],["/page/7/index.html","3def223a58e90cb19d4740f0f99d381f"],["/page/8/index.html","8470985d9f326fcf3e1572ad4b057ab6"],["/page/9/index.html","ca0532ae4abeb46bfc12cb9814c71dcf"],["/sw-register.js","e37517f1c7caed855dcf8e85c3c26a66"],["/tags/C/index.html","dc2686f34d8d011c6947ede34fcbcfbb"],["/tags/CTF/index.html","4cb58fbdd9cd92a8da1828a707cde5d7"],["/tags/HTTP头部信息分析/index.html","4ea3e32584a1b1517c8bd0b11b1bda1d"],["/tags/PHP伪协议/index.html","d165e8034a4c443b23513cc93bd84be2"],["/tags/PHP特性/index.html","4bfb95d63c4dc72a187213ab723aa1db"],["/tags/Python/index.html","3356160242fb4c36e55d63ce0dcb9263"],["/tags/RCE/index.html","922af8a240c84612687cc90898e92440"],["/tags/RE/index.html","22e6f2287254057169c500b4e4f75a39"],["/tags/SQL/index.html","49d6272357197303ef9bf314a3a2517d"],["/tags/Web/index.html","cf7c377d41279c956712bbe01713ff2e"],["/tags/Web工具包/index.html","00b9706fcb69c3f76ca5b383705aa4dd"],["/tags/awd/index.html","73710a177763c5179fba3c883a22fa80"],["/tags/bugctf/index.html","b5b72f8f67f2483cc998e203c95873ff"],["/tags/ctfshow/index.html","60663259541ac08d206004992a074176"],["/tags/index.html","40131c64a5d552ed9c4910cb37a18f89"],["/tags/misc/index.html","c5f057d7f67185d4206f36a468b0b4fe"],["/tags/next主题失效/index.html","252ecbb8742c9c0c592ef549f97c9dee"],["/tags/sqlmap/index.html","22c9870ec561bd4834e648c29dc99a89"],["/tags/wp/index.html","2a08005d6d713f0ac7ca5651ae4bea30"],["/tags/xss/index.html","0737dcaf815f8d2db1e518756473e9ad"],["/tags/xxe/index.html","ec1fef0fc00ff4e39d4bb7375577f007"],["/tags/不蒜子不显示/index.html","94bbc5a472f1798f207eb8669d1cbb87"],["/tags/博客/index.html","06cb7a4a8f8520a6e0de64dc2114164b"],["/tags/博客主题优化/index.html","28e8e378d58fc5892bbada0b320661c7"],["/tags/博客死循环框架问题/index.html","9967cd2226e73b8f3a51cbbf6490f634"],["/tags/博客部分问题解决方法/index.html","3d2254be90710df649853eed293bb825"],["/tags/反序列化/index.html","e67ea0fc85d97b2c84ec62bdd8ce819e"],["/tags/命令执行/index.html","bbd8f90d2caa571d680787360b0bb350"],["/tags/局域网攻击/index.html","4d0d72d7ed0597614f3da422bfab8135"],["/tags/常用指令/index.html","89f8639b1b4864ab3911056eba8dc940"],["/tags/心得/index.html","b0f361ad2ec38e14f8f54c42f4432cd7"],["/tags/文件上传漏洞/index.html","aae073c1ce9bc6bcd6eecc3a84630b15"],["/tags/文件包含/index.html","ac946bb532c209387dc22cf46bc5d83f"],["/tags/流量分析/index.html","72b7fd672667ec92528d8baa7b85fcf0"],["/tags/渗透/index.html","aa11b500d6aded9b66823a506aac2170"],["/tags/渗透测试/index.html","a44cf3d5c9e460b5240a19977cfcbe01"],["/tags/漏洞复现/index.html","ffe35dc4f8c33441ba0616c685d04813"],["/tags/留言板/index.html","71992ace523dfd8a96991d11ea613e28"],["/tags/赛后复盘/index.html","c58ef49e70546ebb6aa0464e68c42936"],["/tags/黑盒测试/index.html","180dea193ec99c5f88d93223d81c9266"]];
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
