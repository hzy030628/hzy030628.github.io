/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/index.html","79b9cd79e23df533bca4e715f5060dad"],["/2022/01/01/ctf之reverse/index.html","5a78c9973ddeadf425e05287e372265b"],["/2022/01/02/Python程序运行常见错误总结/index.html","3b6920390b09cd24a6fdf8a5f161216c"],["/2022/01/08/ctf之web/index.html","7264e9f481e419c73500f732083d6290"],["/2022/01/11/博客制作遇到的问题/index.html","7bdf29c0376a28733170ca6b32ae5f12"],["/2022/01/15/C/index.html","914930cce284007ee788c7e358d22184"],["/2022/01/18/新版next置换/index.html","c863f502fcaab19f8151e5e36ced269d"],["/2022/01/19/不蒜子相关问题/index.html","665d4879ff06175713050ed3ad4cdd01"],["/2022/01/19/框架问题/index.html","4a095e7219672b341514a72bfa098de1"],["/2022/01/23/misc部分解题软件命令记录/index.html","cb253a634f1ddbc3ac4430adcc711d43"],["/2022/02/01/684/index.html","307fc80ba957b090571130a9225978d5"],["/2022/02/03/留言板/index.html","d06a6d3b0548941e0ccb446b8ee4923c"],["/2022/02/04/SQL简单注入/index.html","22b93a5ceae8b202b611782535b2bf96"],["/2022/02/05/最全的HTTP头部信息分析/index.html","2f4e0eaac24237ea4ecd29c54c1f2b42"],["/2022/02/08/ctfshow文件上传/index.html","89f13687d30ba2b9c811a7ad6d398730"],["/2022/02/08/常见密码类型/index.html","8c5d6e0c56cc539e012ef2d59f459fff"],["/2022/02/12/VNCTF2022WP/index.html","3943b1aac086f099c2e940d67ecc0dcc"],["/2022/02/16/rce/index.html","3ffb08887330129b69848c7442f584f4"],["/2022/02/20/ctfshowPHP特性/index.html","477ca605168addfd4fde9407f449030e"],["/2022/02/25/php伪协议/index.html","0c7d8f2bc1aabd1111c64c03d4198bc5"],["/2022/02/26/ctfshow文件包含78-117/index.html","e38ffb443e41c68129418ce61a9ebb14"],["/2022/03/02/Clash漏洞/index.html","12de5fc207c084c15c79b64c271f72f2"],["/2022/03/11/流量分析之题型解析/index.html","91b2a60b3b3e33ad45f5f6465541b0fa"],["/2022/03/15/ctfshow命令执行/index.html","d90184b520f77d9d7d21bd1756498880"],["/2022/03/22/CGCTF/index.html","6718112f2393a5917d5b06e25c145e2c"],["/2022/03/24/ctfshowxss/index.html","04761afeb872ff3faf4b7161c5b73109"],["/2022/04/04/黑盒测试/index.html","886c450bb7c9950eb6787bfaa77ac3e4"],["/2022/04/11/nmap/index.html","98b3ba8ad02467b2820437034dcef0f0"],["/2022/04/12/渗透流程简要记录/index.html","19c5fb832ffeddaf0a39840ea61ddf33"],["/2022/04/12/渗透测试之攻破登录页面/index.html","83d613e7cc72f09671fbbf7ae5cae15a"],["/2022/04/14/xray扫描器/index.html","a50de1ea777de416d236bd4db6594635"],["/2022/04/15/ctfshow反序列化/index.html","7256fa1b8c2382897bcf102f67cf5133"],["/2022/04/26/渗透测试实战/index.html","082c1522001213be3f34b1bacc177c20"],["/2022/04/26/网刃杯/index.html","d754c683279eec377d4ecff19b8dd1d0"],["/2022/04/28/sqlmap教程/index.html","1bbb8ca988c331a75a99837406abb8d9"],["/2022/04/30/认知文件上传/index.html","009a86bffd9f0bd3b96b555ad5278a78"],["/2022/05/03/nahamcon/index.html","556d4b7c66fab63d99c8a253e76bb08d"],["/2022/05/15/awd/index.html","fe5e82f120d1418a05de2aabed1fe9e2"],["/2022/05/22/DASCTF/index.html","7413b2468a74e4cef0ef9d5f3cf8e744"],["/2022/05/27/520/index.html","6c11c40a21b8fa291cd8d869a3cf4f68"],["/2022/05/27/ISCC2022/index.html","16f226e371a1259cd5a0b8f8ed2c3a10"],["/2022/06/01/第五届世界智能大会/index.html","03ce4f5068af5b8efc0a24f26451a04e"],["/2022/06/04/SEETF/index.html","130468934769250d325e5cd1db486e46"],["/2022/06/04/bcactf/index.html","10b1695da6d15b8a4e33b4beef3f6b9a"],["/2022/06/05/BSidesSF CTF/index.html","2fa3419f9a0b43d1814768d946a65db2"],["/2022/06/07/Docker部署web题目/index.html","af407e57d12983b99d9786def03dae60"],["/2022/06/09/利用oj搭建C语言考核/index.html","0c14488148f7db6a58261ac8abdb8b26"],["/2022/06/09/论网站502/index.html","978607cf87ba6e977f9f9c47b03782df"],["/2022/06/13/限免题目/index.html","db1fea44cbe515540a71c01bc24dd080"],["/2022/06/14/钉钉rce/index.html","96236ccff486676119a9dcf09f104fab"],["/2022/06/16/内部ctf/index.html","28f4e3235e00c02766e5a42701bb5c55"],["/2022/06/25/攻防世界高手区(一)/index.html","f17f7eef7cc8b0b1ed1d0516d673c148"],["/2022/07/01/两小时AK赛/index.html","eba43c70a03d96adeab7a50d18e3d2d5"],["/2022/07/03/鹏城杯/index.html","55a9dbcca315bf4838134202316ebafc"],["/2022/07/04/XXE/index.html","dec1927f9aa486434f9f7250e125f2f8"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","206a6074de6d944539434f5240f13c4e"],["/2022/07/08/chinaz/index.html","caf9857d8763db04f8dc0a5d0230a709"],["/2022/07/09/蓝帽杯初赛wp/index.html","9fd052e5ec89ab0e614ab4506032d311"],["/2022/07/17/NepCTF/index.html","ed9d4d550bdcff9dbc1ba25af49b195f"],["/2022/07/19/ImaginaryCTF/index.html","c045d01903c7bb650af2cc597c23125a"],["/2022/07/20/局域网攻击/index.html","2652730456940e112a60cdb9c49f5db7"],["/2022/07/22/BDSecCTF/index.html","925b818f75c9f9f5999802b373de4a0d"],["/2022/07/25/DiceCTF @ Hope/index.html","2d11a8d98cac7ffcf58413edb796732e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","23e29b677cd2ecbd772d45c321179a0f"],["/2022/07/31/TFCCTF/index.html","e023eedda8412035de9f99a28fc2e798"],["/2022/08/03/NSSCTF/index.html","fc8509eacaf15d32ff8a70508cf5dd78"],["/2022/08/12/T3N4CI0US CTF/index.html","d9c45f17b4c695d0048c6c376ebe5ca4"],["/2022/08/14/SHELLCTF 2022/index.html","17d82a8960bba9c65ee00360d21b44fc"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7d5fe19b498f426cc3a93fea97bd4a78"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","1e7ad16d86e1238bf0252d53f816aa30"],["/2022/09/16/柏鹭杯/index.html","06c56f275c8368c506c8b3aad357cb80"],["/2022/09/20/HUBUCTF 新生赛/index.html","a4818bb42a50cb190289559d085f3927"],["/2022/09/27/NewStarCTF/index.html","2c6ac07fe4c4cf18041418912242da01"],["/2022/09/27/bugku渗透1/index.html","46a6128129418531c526cd45ddb93bcf"],["/2022/09/29/tp6漏洞/index.html","44e95af5d140dbf5fca6a8f18cfe37fc"],["/2022/10/02/SWPU NSS新生赛/index.html","65f670d75a6a331e249aef23ab881926"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","df479cdaf5c8072738b0006c94202e0f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","1a0673fb7349496619b99be93b9048a3"],["/2022/11/02/HNCTF/index.html","f7f383c274a5164784da881c6967c1db"],["/2022/11/04/2022工控CTF/index.html","48713e1d88bf9a1d8dddf6b677bf55a1"],["/2022/11/21/极客大挑战2022/index.html","f021899fc900145a6b82821a599a546b"],["/2022/12/05/TUCTF 2022/index.html","ff37f8969f0c6b08b95c6be3bbb85fa4"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","ae9b978763841088a36d7bf489490576"],["/2022/12/18/金盾2022/index.html","34c052cc6310ca60e574b1a12d8ebea6"],["/2023/01/01/CATCTF/index.html","8ac8b63883d39ff45066812ffa80a808"],["/2023/01/09/RW体验赛/index.html","592d8b248754f45d434c2a42f23b1ece"],["/2023/01/10/铁三/index.html","419dab4d677130693d36aa0e3e305403"],["/2023/01/16/Ugra CTF Quals 2023/index.html","fc4c08e0358ab758405c93594dedfaea"],["/2023/01/18/山石2022冬令营/index.html","f1728419459a0228f66687fd0ebf2766"],["/2023/01/19/SICTF/index.html","c80a2e2e750ac5ab265b11a3bd2597a6"],["/2023/02/04/2023西湖论剑/index.html","9857b08f3324c7999351d0a643e664c8"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","e64bcd6fce5b4df38a8eae9485283bd7"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","c35c5c9748ce3461726f315d8469c2f8"],["/about/index.html","8b21022ac38f9426543f92f321d36484"],["/archives/2021/12/index.html","10e04ac278013d72d872a6078264a5f6"],["/archives/2021/index.html","59472979de2eaa1f7cd60b5f061d7c0f"],["/archives/2022/01/index.html","2dd73f0f16280dfa0e5f6b72be7867b1"],["/archives/2022/02/index.html","fa20b7a56d8c12152dd76f24f8fb5087"],["/archives/2022/03/index.html","25d42d7242055286dcb54cad5220d558"],["/archives/2022/04/index.html","6873f2b7504a87af597b1d41b7030426"],["/archives/2022/05/index.html","0ce3a1b867e2ca16028c76ba89a69427"],["/archives/2022/06/index.html","2e5d04c55a217c077fa03bccbee5eda4"],["/archives/2022/07/index.html","d1e9ec865a36ba35332c2bf35abbc8a3"],["/archives/2022/08/index.html","9123b0afbd7ccdf50b59331efaebc4e4"],["/archives/2022/09/index.html","db4952cae587a1ae4686c1ac6625186d"],["/archives/2022/10/index.html","6a0818389cbd562c0388d2fb96ecb918"],["/archives/2022/11/index.html","6148816283bc09ada9fc8e1fe0c43e19"],["/archives/2022/12/index.html","31c7a6f058b488f91781d3bd9a80fe0c"],["/archives/2022/index.html","bbecd0a27901490f77b96ff415a48689"],["/archives/2023/01/index.html","69731cfc0312c9fa59a796b830ac4453"],["/archives/2023/02/index.html","e80c2d671d2104e720560906704001c3"],["/archives/2023/index.html","d22fedc292ca4b0fea6e75cd1387caa9"],["/archives/index.html","bfc8c26d736b5f2aa4b6d7f0a595f5e4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","992516fa76ed961a023c1846fd46db00"],["/categories/CTF/index.html","6f79862adb3c2910b0c52ad4b85a0e67"],["/categories/PHP伪协议/index.html","6772bbadab934c8bcca695e4944337f6"],["/categories/Python/index.html","d6e353aa993cdc773cb4bd22be62e391"],["/categories/RE/index.html","9284165a0bb10119ada16e2bb590a433"],["/categories/Web/index.html","885a2691c5dd1e9e13c680505d81d440"],["/categories/awd/index.html","09363d2b4b00148afc7a3ad6f74addb7"],["/categories/index.html","4af2cdc7435c22a7472c2bdd36327849"],["/categories/misc/index.html","40fad42b27a22a6e316e27da02ea81db"],["/categories/sqlmap/index.html","f46b64ba50d77fa42b80593db10ece63"],["/categories/博客相关问题类/index.html","8c429449f39ab498fed0eaa158837738"],["/categories/局域网攻击/index.html","e5a4196abb023f1fdebb5f73e72e32a3"],["/categories/心得/index.html","d01c1a8f0ed8b8aeae8290e96d694968"],["/categories/流量分析/index.html","e7b35cf67f2b7294073e8f1e94d6337d"],["/categories/渗透/index.html","43aa2db3f65228c6b741ac17933f67dd"],["/categories/渗透测试/index.html","1e1d1c0c56040e8fb1dd57ad93e8025a"],["/categories/渗透认知/index.html","c65d4cc3b652f24d6f34842771e30b3e"],["/categories/漏洞复现/index.html","d5e55667dd971211b39dacc40570c1d2"],["/categories/漏洞测试环境搭建/index.html","60afa1afac4af1e2f0db27d824712f8e"],["/categories/赛后复盘/index.html","b9ce486c81dcc4b4e5352484994c6e04"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","60c07402e88bf34aad9003d40715d30c"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","9fe64ffd12c0744b23891a5d39cc7c82"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","efa7c37b116c9afa7ae989fdffcef762"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","65e3954f1fbd29414b386820a280c5f8"],["/page/10/index.html","6f59a04da2e7fc9a403cf203ed236d65"],["/page/2/index.html","89ee9840e18c5cd336a33b32b89c6edb"],["/page/3/index.html","108f34d560042b4b960bdc5a642f62e9"],["/page/4/index.html","e93b7e2b286ca36fc4773aa01a222c01"],["/page/5/index.html","d3e07f3520927d4ce5d8f5e9a0522d0f"],["/page/6/index.html","cc2a332b71d02fa83358db1c4d09f1e0"],["/page/7/index.html","365d03e1256e0b6ff95f01735e05e76a"],["/page/8/index.html","0e4c12578c675b04e691f23a6fdd7fa2"],["/page/9/index.html","17f26229786848f654f8218992e8b5fc"],["/sw-register.js","db4ed5bd68e396fa1f0d8521f70f2c01"],["/tags/C/index.html","7d5be60a6f364dfdeae403978a37015e"],["/tags/CTF/index.html","ec33d381a6685cd079ac65acf206c03f"],["/tags/HTTP头部信息分析/index.html","694da88aef6c4cbd1cd5f5933851051e"],["/tags/PHP伪协议/index.html","8558cfd62e1bffed3040779392e841f0"],["/tags/PHP特性/index.html","55c7006d0a65058e29dacc629b12dd91"],["/tags/Python/index.html","407f47a791810c388e004a56a6041a0f"],["/tags/RCE/index.html","a599fd532b310e6250cba38d7da5d647"],["/tags/RE/index.html","0a78ac9d71380ec9c9e222c79408917e"],["/tags/SQL/index.html","53242415d7bb0db18a9f913396e0fe82"],["/tags/Web/index.html","5a29f616b5a8beb4e8d7d4962d041ec5"],["/tags/Web工具包/index.html","cd95391ed7686954f128a3e9b5d29fac"],["/tags/awd/index.html","7fb0a31dc2e11fa03ad51e3879861989"],["/tags/bugctf/index.html","55f3bfa7eba381bd50daa89eaa74efcd"],["/tags/ctfshow/index.html","bb4cfbdba97ce015dc2cade67de0c9e0"],["/tags/index.html","d085407f30f82f0beeb26211c402afa8"],["/tags/misc/index.html","b2f60a42234480fb95333bd857005978"],["/tags/next主题失效/index.html","633348fae839336cc640a8700fb44e84"],["/tags/sqlmap/index.html","2628a8ca5b9c0e35ad848f63b964cfd9"],["/tags/wp/index.html","f3c302eb4c1159af29479ae75f3f84a1"],["/tags/xss/index.html","70b5da39e62a27c311c0c201b330b6ad"],["/tags/xxe/index.html","5ad40f52c7803f04be2f77b8ef6b07e2"],["/tags/不蒜子不显示/index.html","e410a57067bfa612ac546bdb59aa1cc0"],["/tags/博客/index.html","b92fe04dc54d40ee5741e54788bf0675"],["/tags/博客主题优化/index.html","74828298d75272e51a8f0663483fd5ff"],["/tags/博客死循环框架问题/index.html","6dc99addbb83f500d3f449f4fb96628d"],["/tags/博客部分问题解决方法/index.html","2501c034ba262eb010dadf8cb94c7c80"],["/tags/反序列化/index.html","11737273806b553ea76d2298ac5c4fba"],["/tags/命令执行/index.html","d685a9098a99ba0aadcbe370bce26c0b"],["/tags/局域网攻击/index.html","143ecf1f8470236a8e4af3a462aa02f7"],["/tags/常用指令/index.html","8869602a3e4d811c916e2be0d3baa07f"],["/tags/心得/index.html","f7b34ee9331198d4dae5b76fd7c40578"],["/tags/文件上传漏洞/index.html","ec33d924abc82fd1c358f1e3db4d3be7"],["/tags/文件包含/index.html","90c8c6bd16d0f4cea175d94bb2d9c5bb"],["/tags/流量分析/index.html","e00c144601180811b341604f526fabd0"],["/tags/渗透/index.html","a532a74a8a4699623eab4ca0343b5598"],["/tags/渗透测试/index.html","2c18ea7ec31ff9aeca99bd613a3d8726"],["/tags/漏洞复现/index.html","f1916e1ca931dae81fcb76abd8ccfb67"],["/tags/留言板/index.html","235559ca1d0817376a6b5697988aa591"],["/tags/赛后复盘/index.html","2196a162c73b43ba060eab606b788185"],["/tags/黑盒测试/index.html","d60fe42aa0b5d22e139579d30903b7c0"]];
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
