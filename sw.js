/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","a30bf2154bbf7a7b78b32bceab110b64"],["/2022/01/11/博客制作遇到的问题/index.html","3c2d013ae3a971c0de681f1cf145a138"],["/2022/01/15/C/index.html","1e23a404c1d0fc801f0af2143fece853"],["/2022/01/18/新版next置换/index.html","153eac3717a5cddcef692f47ad2c8697"],["/2022/01/19/不蒜子相关问题/index.html","4f2b37ace88f3a815830b19b65616178"],["/2022/01/19/框架问题/index.html","eb34251d27f72f1322b60b4ae1be0a3b"],["/2022/01/20/ctf之reverse/index.html","36be4f5e5116f1f4892d8355b316df25"],["/2022/01/23/misc隐写题目总结/index.html","ed04feae05d4fcfdb8290ecf45bf9000"],["/2022/02/01/684/index.html","f28910d0be4eac31fbd6c2aab9217a47"],["/2022/02/03/留言板/index.html","06fe37589636095255dc4902659db5f1"],["/2022/02/04/SQL简单注入/index.html","1fda68c6ee563e9c0a8bec2aedfb3065"],["/2022/02/05/最全的HTTP头部信息分析/index.html","a7c44a73194b57915c20e0be5a38c928"],["/2022/02/08/ctfshow文件上传/index.html","cea38a72fc7cfbcb09805240fb25db6d"],["/2022/02/08/常见密码类型/index.html","9390efee62edfae01861358875b86e6f"],["/2022/02/12/VNCTF2022WP/index.html","290a18501d42e667ce81b887ecd7e784"],["/2022/02/20/ctfshowPHP特性/index.html","86cd07b1cd884606e90d0a0fb5796456"],["/2022/02/25/php伪协议/index.html","736a2b54e66d4de3afa7325aecaf1239"],["/2022/02/26/ctfshow文件包含78-117/index.html","4ee744c34e35eee05c56de6e8a4036ca"],["/2022/03/02/Clash漏洞/index.html","6b1961473e3a3c15d28d4c81acb3ea15"],["/2022/03/11/流量分析之题型解析/index.html","7b91ebb8baea269bf849806690451736"],["/2022/03/15/ctfshow命令执行/index.html","cca64fda07dc08192e1eb37f04958f67"],["/2022/03/22/CGCTF/index.html","06a5944d54c2eb08999dc946d78c4328"],["/2022/03/24/ctfshowxss/index.html","0eb92f42a5c390311a931a39c60851bf"],["/2022/04/04/黑盒测试/index.html","52a68ff2c555c82340442855d5e3d900"],["/2022/04/11/nmap/index.html","fde664e76be428a523aa7e139a1291a9"],["/2022/04/12/渗透流程简要记录/index.html","db281e2c2f369f447a13cb160bcc8a64"],["/2022/04/12/渗透测试之攻破登录页面/index.html","181fa493365ed0f910781cdbce49c44e"],["/2022/04/14/xray扫描器/index.html","db375ea08803fc93d2220ace78524840"],["/2022/04/15/ctfshow反序列化/index.html","a3ffe779e4fad6acd99947566aae4a57"],["/2022/04/26/渗透测试实战/index.html","ac6964ba686b4bc3bece026502a6cdeb"],["/2022/04/28/sqlmap教程/index.html","b4c1d338ea027fdbc5694db2572afa35"],["/2022/04/30/认知文件上传/index.html","7675b1512095c97ef69198d34cd701af"],["/2022/05/03/nahamcon/index.html","059b8e4aedd86fee2278987a1294718b"],["/2022/05/15/awd/index.html","63cdd7c746c5115e1bb4451763792918"],["/2022/05/22/DASCTF/index.html","2abbeee340fb83ce7776630035dbcc80"],["/2022/05/27/520/index.html","f08502d61d3a79b18da72bb5dd059231"],["/2022/05/27/ISCC2022/index.html","abe3dff173ed505cdbb8353f48eb3798"],["/2022/06/01/第五届世界智能大会/index.html","a2c5d75d7eb61c4c3ffa78e942ca46ba"],["/2022/06/04/SEETF/index.html","129a55ce58a6b25a1f3273884b5f2062"],["/2022/06/04/bcactf/index.html","f3bd83352cd5d79c4a92b6b812f6274d"],["/2022/06/05/BSidesSF CTF/index.html","563ef0e75016725c9dfc2da2dd92bef8"],["/2022/06/07/Docker部署web题目/index.html","2f145b59ae787f618c6924484bc1912a"],["/2022/06/09/利用oj搭建C语言考核/index.html","7493ffa3a228b5f8880d62640177d21e"],["/2022/06/13/限免题目/index.html","060f0738e320a0faebe7f987e2608e0d"],["/2022/06/14/钉钉rce/index.html","6b77156e099df2736888612825f85a70"],["/2022/06/16/内部ctf/index.html","771e091eb66d59af2ecad81eef723009"],["/2022/06/25/攻防世界高手区(一)/index.html","de6c9fdc9ebb69394fdfeb43647359fe"],["/2022/07/01/两小时AK赛/index.html","00bc966fb8cf4ce80d9421404bd2bd98"],["/2022/07/03/鹏城杯/index.html","97f5c0d826c33dab33d55d8d32ce00fa"],["/2022/07/04/XXE/index.html","9389115286e6cc123b9dbc5e8faa41d7"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","375d4d07cc79ee39d703521aedf9dc9e"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","443b976cc42dca267bd0e3152fd24ed5"],["/2022/07/08/chinaz/index.html","9ca00ca8b261cd17e7c1174fef389713"],["/2022/07/09/蓝帽杯初赛wp/index.html","b8c91aa15b8c7612e87971857a22666c"],["/2022/07/17/NepCTF/index.html","a895770ac3d30dcdb27a6f83b44b62ec"],["/2022/07/19/2022ImaginaryCTF/index.html","6f3888bc1aab1870d81b7106ea782c10"],["/2022/07/20/局域网攻击/index.html","146755c2d01d5948a6e4be0915877e80"],["/2022/07/22/2022BDSecCTF/index.html","e809efb9e70c5ceef1df113cab93ec05"],["/2022/07/25/DiceCTF @ Hope/index.html","a2c27e5ff2d5b3024ee29d75b031ae21"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","b0b3e82093eb5f8cd9d38989e4f9d6ab"],["/2022/07/31/TFCCTF/index.html","1833772e73df9d7dac976327071fb674"],["/2022/08/03/NSSCTF/index.html","53aab682c6332eb3a86b6fb2437d560a"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","b4a91298e1ea07e7fbdc6466a26c2132"],["/2022/08/12/T3N4CI0US CTF/index.html","ecdca698ea4eda47ee35ecfabc13d99e"],["/2022/08/14/SHELLCTF 2022/index.html","676ab20a3cfc791915f7cd3c6dd726f2"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","a5dd60e519d13b08aa8339ba937d71e4"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","94f66ff3b6cd5263f51892c55622355d"],["/2022/09/16/柏鹭杯/index.html","59f1455739e7c57827b734b7d9d7f0e5"],["/2022/09/20/HUBUCTF 新生赛/index.html","6e3d70f647fc3d375dac5fba2d25af78"],["/2022/09/27/NewStarCTF/index.html","4ada485b6aca1639cf76985f321888ca"],["/2022/09/27/bugku渗透1/index.html","b2ad22e2fd86cc2fb96cf15044d79c4c"],["/2022/09/29/tp6漏洞/index.html","9c5621e8442bbbdda0c98de5d5aa5360"],["/2022/10/02/SWPU NSS新生赛/index.html","a94b81804a479656d20cb892ff06be6b"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","0b8fd4986deef4525cb753f5e3c4317f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","3652f8c080a5c09b09b415a16eb41efa"],["/2022/11/02/HNCTF/index.html","3088dbe4061ded1c310dd1db0ea1675c"],["/2022/11/04/2022工控CTF/index.html","af1561406e2c9a191458ee22625a3eb1"],["/2022/11/21/极客大挑战2022/index.html","2a00407fef24d8286d1cd9eb79cbfd33"],["/2022/12/05/TUCTF 2022/index.html","bcf57fe9a136e7044f91bb72fbb8efc7"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","4c8fbcdd1369f29fba0b72b8596afc4a"],["/2022/12/18/金盾2022/index.html","6c6b088b065191fbf76803ef7db7f684"],["/2023/01/01/CATCTF/index.html","054da2c2a0171f4fb491de20574eca17"],["/2023/01/09/RW体验赛/index.html","ec6c29aaeea10afee3eda9ae05b1ea62"],["/2023/01/10/铁三/index.html","62298a48fabda116a787f6c39dfda050"],["/2023/01/16/Ugra CTF Quals 2023/index.html","13f14e5e52c7494ab7d0bea062476eda"],["/2023/01/18/山石2022冬令营/index.html","7665bc7c5a01f38af516f033315926cf"],["/2023/01/19/SICTF/index.html","4881abc5cdfcc39c180836ec76acf00c"],["/2023/02/04/2023西湖论剑/index.html","dbc1564a409cd766ceef42572077b4a7"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","cfbf3438c1d8d07309696726fbc0cd3f"],["/2023/03/04/公安/index.html","02a23d3e7b4fb7345c23a517ea61ab14"],["/2023/03/07/mysql之udf提权/index.html","4acc7ff5d290e21640a59c3752ed78c3"],["/2023/03/07/红日靶场练习/index.html","fa02cdab94edbbbd460346496fb0501e"],["/2023/03/27/NKCTF/index.html","6efd7dce94b8b7be1b41ed399f997785"],["/2023/03/31/楚慧杯/index.html","f6c8d249723b21b9656a531c25b784e8"],["/2023/04/23/HDCTF2023/index.html","483acd1a3e8e85da05c48abc52332422"],["/2023/06/01/2023CISCN初赛/index.html","55dcb219c7f395a8367346ce2f8e49e6"],["/2023/06/28/2023CISCN[华中决赛]/index.html","3a6387a13ed54b5e703023c41387f4a9"],["/2023/07/10/CyberSecurityRumble Quals/index.html","aefe2a4e384066fbebbef4dad8057f36"],["/2023/07/22/2023BDSecCTF/index.html","0255bed8b2862efc9325c1efad19218a"],["/2023/08/07/SQL手注小记/index.html","965059a299ec9583645c5d28e24e2ba7"],["/2023/08/27/2023陇剑杯/index.html","86d5e6741eeef12f06af7ad3e881f772"],["/2023/09/17/2023蓝帽杯半决赛/index.html","d4b13b10a93e979f42d07289f88d95a3"],["/2023/10/23/对于多层代理的研究/index.html","d81dbe39502ca1bfcab41f8f2e1bd814"],["/2023/11/25/金盾2023/index.html","4b500972f597a60828488eb7dcb747f9"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","257410f28342dd1ad770a8ec4451a05f"],["/2023/12/18/2023强网杯线上赛/index.html","3b8d750153749fc1f68186ec96a02043"],["/2024/01/08/基础ROP/index.html","b2f7020277938f4660f962ba09334edf"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","ab1adc2218ccb8d12cea29b7b4569847"],["/2024/02/13/打靶-Tr0ll/index.html","8c789ad06ee24b12ba0d338d2af222e2"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","cbd75b9bbd754b1edfb932e7d2377bf0"],["/about/index.html","b879d3d005199609a9f164993f440962"],["/archives/2022/01/index.html","af6b47d8f396c5b52a69df6351045be3"],["/archives/2022/02/index.html","d17f890ca2cf2052e5204cfe72ecb27a"],["/archives/2022/03/index.html","8ac4e8edb6c5e8888e928ec2c2b5eac1"],["/archives/2022/04/index.html","3c923ebf53ac4c99a4be759ff236427b"],["/archives/2022/05/index.html","51ae5330ce46fe0fd7f2095cd8eefc72"],["/archives/2022/06/index.html","4e667ae5e40800d1d7327b1c17abd083"],["/archives/2022/07/index.html","f6f17bb909ce4171d1f5516820c0c59d"],["/archives/2022/08/index.html","ade8050e51e010850507e56537a99a89"],["/archives/2022/09/index.html","63ff3181e553f438f96ede9f17f0f91c"],["/archives/2022/10/index.html","0920a4f83e4a4b0b00a70b7865d9dcc3"],["/archives/2022/11/index.html","bf87ab543b926b700b16a0b8e2d87b0e"],["/archives/2022/12/index.html","0c98ecfa81313521c798d80cdf41ae7b"],["/archives/2022/index.html","1284b1c331fd14ee4f846d4953e456e5"],["/archives/2023/01/index.html","7c66205247593c6d4a19839ea4bfefa1"],["/archives/2023/02/index.html","5b151ed950a5bc8712ac863f0dafbb00"],["/archives/2023/03/index.html","11fa35fb8f8c86ff4433a7d69cd725af"],["/archives/2023/04/index.html","eb053b96d3116106064a13b35c60be8a"],["/archives/2023/06/index.html","2e508cd57ef185049fe460db772f1651"],["/archives/2023/07/index.html","c6a7eecc5472cec111c18ddd9bbdfdfc"],["/archives/2023/08/index.html","7e97cc599b50672d5d264ec05ab2da9d"],["/archives/2023/09/index.html","c00491c4bcb4291d97aac307021c8ef5"],["/archives/2023/10/index.html","fd4e4aad5e8f0c66c618e543ef3e1fc5"],["/archives/2023/11/index.html","50545f0f8b5c6733476e1cdadc4e7891"],["/archives/2023/12/index.html","6c3c16700be6e4e67be6e92c78fdbce8"],["/archives/2023/index.html","20ca7d6e907adc08bc559cfdf746776b"],["/archives/2024/01/index.html","0eab9cad554a90b039f62845f2e0dc3e"],["/archives/2024/02/index.html","2083e233162b641a67eed130e87d43ed"],["/archives/2024/index.html","d6cdb15d0edef7e6541d46bfff99c46b"],["/archives/index.html","14cab25545097185e2a20942f0a7d17b"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","8082a0aa579f547b2d3ee460b403ea6e"],["/categories/CTF/index.html","fa09a1023451652cc8b86aabaab229e3"],["/categories/PHP伪协议/index.html","df2372fab8809959f3a1444ff463306a"],["/categories/PWN/index.html","eda99229141c17a46d71113539308242"],["/categories/RE/index.html","5a942f399b13b41e974bf6d762a07e24"],["/categories/Web/index.html","b9e74a1a0be8c75e9bf7e497407672cf"],["/categories/awd/index.html","1fd821cf12accb6232526d58fa06b172"],["/categories/index.html","a26d08d0bb0fb6c2f027515bbd047e41"],["/categories/misc/index.html","1abb70888cb8f610a403ed251dac1679"],["/categories/sqlmap/index.html","962181238808afedd0fe49191ef1996a"],["/categories/博客相关问题类/index.html","814e86b60260ba9f20e11913ac67fb46"],["/categories/局域网攻击/index.html","d8bafdcafd0cfda424e8c43e627d3985"],["/categories/心得/index.html","d3022ea36f9923d80a1597d44d693a65"],["/categories/流量分析/index.html","59473abb86066e8adf470fe1c1359dc6"],["/categories/渗透/index.html","2deb0887072062606e28fd4c1182ed6b"],["/categories/渗透测试/index.html","2a3a98c59f3647676d147d5460f36e9d"],["/categories/渗透认知/index.html","db22cb4f90e59d753a0ab576a8fe66ce"],["/categories/漏洞复现/index.html","7fb3c42c2414fcd1fa65523efcfb7060"],["/categories/漏洞测试环境搭建/index.html","ce266cb54048b9cf9c6a556f3b550f07"],["/categories/赛后复盘/index.html","e79602dd7bfd1852b9bdfd537f47dd87"],["/categories/靶场训练/index.html","4fd3d3a2f5ac6f2f9b64fd61c6b20e59"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","046efa2bfcef8b5b7181048e5de5e151"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","6575cf0cff8126692a814576f2b30fba"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","95bf5253973f0a3e44526b9a4f0905ec"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5d65547d07a7699f72245d687807ea10"],["/page/10/index.html","1df02115d7dc25c277c772975e4053d4"],["/page/11/index.html","987a2f5f5bf88d1f27bdb1227ffcf33d"],["/page/2/index.html","fe816988f2575b3defc4391299ce36b5"],["/page/3/index.html","3f063386c5cbb9f14558e38c07b50a26"],["/page/4/index.html","5fc34fd8adfbae5bfc8173c750bc94f2"],["/page/5/index.html","f5bf52403f5361fcab0af66e4683ea78"],["/page/6/index.html","8967209fd10aab313b35b4e2c89d02f1"],["/page/7/index.html","531142c51924df15976bc7f9882228f5"],["/page/8/index.html","ff66cf6191143027e7269c10f97e3770"],["/page/9/index.html","dfd827c388f96b78efc30633151a7292"],["/sw-register.js","44b19ed5d044d0f159984f4564fed308"],["/tags/C/index.html","ed7bc4413b4afd42db41026fe1c5343b"],["/tags/CTF/index.html","f93e9cb31c399824c6958d7f4fa686b8"],["/tags/HTTP头部信息分析/index.html","be80ebeeb8a1e23f7e4927d88c3eec78"],["/tags/PHP伪协议/index.html","c7a8b86681406825cf521928f0573444"],["/tags/PHP特性/index.html","8529b15633cba3d5734c288956ddb15b"],["/tags/PWN/index.html","7fb01871f58663bb125340a38d11591a"],["/tags/RE/index.html","b5893653c15126aade11870ecfd03d5e"],["/tags/SQL/index.html","f517f00ce907c0581b05ac0fd6d1c26e"],["/tags/Web/index.html","f8c9720bcc9c270b4255a80d44ff7d4d"],["/tags/Web工具包/index.html","128b8321348babd7651b1696a796d402"],["/tags/awd/index.html","126c638bc76bc7b08d38192ea61c4c33"],["/tags/ctfshow/index.html","0888e702aa9384b62cad676c2b2b14b8"],["/tags/index.html","2f4103aadaea720516e29b430d5a8104"],["/tags/misc/index.html","91697186db18d8e71e60166609dfbe02"],["/tags/next主题失效/index.html","3487d8c04bd5a7932ad84551addda471"],["/tags/sqlmap/index.html","c1570669d2a9a390c20d9afdb1186219"],["/tags/wp/index.html","ac6d8ee7164d87c6f0f8e5e64f72c464"],["/tags/xss/index.html","47217d5d835c52a47b2d529e64306e19"],["/tags/xxe/index.html","b162b9432759293fe20900afe1c17d14"],["/tags/不蒜子不显示/index.html","e5f1f73b825a960b76e1be8bd3a0c265"],["/tags/博客/index.html","dee4e014a9f71f2a0df3c57acb0a9831"],["/tags/博客主题优化/index.html","99f9f4529026918d2d87650b3fb563bc"],["/tags/博客死循环框架问题/index.html","c0e771efef8f7057ac05692fb294b424"],["/tags/博客部分问题解决方法/index.html","531f9cb51a34a601d34c33cb35b726bc"],["/tags/反序列化/index.html","ff0f800f2a342c6545a562135d87cea9"],["/tags/命令执行/index.html","18f28476bb8bf878baff853394012294"],["/tags/局域网攻击/index.html","7e691eb524f37effe442c4cd7f5cc715"],["/tags/常用指令/index.html","262bc32c67a837ede9b0e8c64032ceed"],["/tags/心得/index.html","aa1e3a186ec65277a06505283d00b0b1"],["/tags/文件上传漏洞/index.html","652a403867d18d3faf9bbdfeb0f88367"],["/tags/文件包含/index.html","1ba7e2f52dfe5f69bc9b6893ffc8fe33"],["/tags/流量分析/index.html","0b893aeb6cddb0b19acd6e116de2e48e"],["/tags/渗透/index.html","7e22556ca78a4b006f85c2276a07317f"],["/tags/渗透测试/index.html","c3dbce8091c0d48841b7220f9fd82b6a"],["/tags/漏洞复现/index.html","38947b2ccfb43750eab483f8a5008465"],["/tags/留言板/index.html","28bfd3d23980dcc5971c8cd569bb1fc9"],["/tags/赛后复盘/index.html","e8a039bad358e0c4339c52862dea2250"],["/tags/靶场训练/index.html","aa776cccf2fda4a9d1a1b8952b956af7"],["/tags/黑盒测试/index.html","f1b739c76e1231bfa46fb004be9ff6e1"]];
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
