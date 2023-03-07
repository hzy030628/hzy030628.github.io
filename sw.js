/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","6707dfd0f8f1bb13303585b27b55e5f1"],["/2022/01/02/Python程序运行常见错误总结/index.html","acabf53a496643805f7e9921e29c34cc"],["/2022/01/08/ctf之web/index.html","bc32cce85f844287d59660ae672bfb17"],["/2022/01/11/博客制作遇到的问题/index.html","ffe23df07d414cf131dc0621b43504fe"],["/2022/01/15/C/index.html","d46f55d945dbd55bb1caa546a80aba2b"],["/2022/01/18/新版next置换/index.html","264c6729e0565812bb2c9c495329b2bc"],["/2022/01/19/不蒜子相关问题/index.html","746a72de8751ad63abdf454502081ff6"],["/2022/01/19/框架问题/index.html","ea73643b80dd48fa7495895401e81ddc"],["/2022/01/20/ctf之reverse/index.html","a3be9f2dd0514ef3e9089a4c442b517a"],["/2022/01/23/misc部分解题软件命令记录/index.html","c5e5f3b13172aba2a9fe171934254517"],["/2022/02/01/684/index.html","c68205bdcbf2a0b138f9a214924e0731"],["/2022/02/03/留言板/index.html","8056ad615e6d24e9f6a59f5037372fa8"],["/2022/02/04/SQL简单注入/index.html","423d385c821cefbf96725a954e50a10b"],["/2022/02/05/最全的HTTP头部信息分析/index.html","94d2fd31de741fe03f36c3822dc4edb2"],["/2022/02/08/ctfshow文件上传/index.html","52b5538c2f9d32ca0508271eee001635"],["/2022/02/08/常见密码类型/index.html","24ed1c4e528e9ed3567155864da4490e"],["/2022/02/12/VNCTF2022WP/index.html","2e885754279874488718f0e370d45ae3"],["/2022/02/16/rce/index.html","c92414ff4b86b4d9802959b5b6c19eae"],["/2022/02/20/ctfshowPHP特性/index.html","37912cc41fd05f6375520843b5ddb78f"],["/2022/02/25/php伪协议/index.html","4ca45a65b6b14abefa03836e02e81796"],["/2022/02/26/ctfshow文件包含78-117/index.html","358ea9799f09b1a73d1fcd59338b0d3a"],["/2022/03/02/Clash漏洞/index.html","4825ccd021b381b2d499639593d03627"],["/2022/03/11/流量分析之题型解析/index.html","2b0e049da0dabe16b6d3f403c704478d"],["/2022/03/15/ctfshow命令执行/index.html","d9da8c397c25f2fea840e614fab7b887"],["/2022/03/22/CGCTF/index.html","93681b1c79821f76a2fa683e2906baed"],["/2022/03/24/ctfshowxss/index.html","456ef6b2480e3ffb0300837f10bcaf37"],["/2022/04/04/黑盒测试/index.html","a08e9c58cc724a2e8ddd03f443da4ebc"],["/2022/04/11/nmap/index.html","55908433c91f302b59b9f10253ea70b2"],["/2022/04/12/渗透流程简要记录/index.html","11545e1a6bb7180788d5c3c4b30b4753"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a62e8d799a8f107bef70da65605c155e"],["/2022/04/14/xray扫描器/index.html","ca4c30750c3a54758c540516a272f1d2"],["/2022/04/15/ctfshow反序列化/index.html","066555188a225f507d50f4cf9058342b"],["/2022/04/26/渗透测试实战/index.html","204516b5bc3d3f01b9b9689d8f1295d0"],["/2022/04/26/网刃杯/index.html","a9dc48f5acd7c1a29d308059852eb36d"],["/2022/04/28/sqlmap教程/index.html","386759a2b7c92f988536560c02fae06c"],["/2022/04/30/认知文件上传/index.html","60153ea1e04fd30c2b5a323c404c88cc"],["/2022/05/03/nahamcon/index.html","78dfbcdc5f2c73f27e5bc87db9cf5b34"],["/2022/05/15/awd/index.html","90db5e7f7788705740a46af0e67ee0cf"],["/2022/05/22/DASCTF/index.html","d54383d28491e645f81d0a84e9ed972b"],["/2022/05/27/520/index.html","633a0bace59474c017293bcffca719ee"],["/2022/05/27/ISCC2022/index.html","508761f0569a1010e5b6a94e8a933340"],["/2022/06/01/第五届世界智能大会/index.html","14415f654e16b89b658de6e543ca7ff9"],["/2022/06/04/SEETF/index.html","6bf97d2bb41695c0cefbdd2f8bf48fa7"],["/2022/06/04/bcactf/index.html","40db749663c07c1b6b3bd40025795292"],["/2022/06/05/BSidesSF CTF/index.html","01a3551cef63648e0795cf3662861702"],["/2022/06/07/Docker部署web题目/index.html","b43fa0b5d36d4297f7e7aa4894b93e59"],["/2022/06/09/利用oj搭建C语言考核/index.html","9941284bdce6b699c4967ea243c2f9f3"],["/2022/06/09/论网站502/index.html","871c662233d2df0a31b26851b1d38775"],["/2022/06/13/限免题目/index.html","67daef0bdfb2bd9949dc8dca63e73f8a"],["/2022/06/14/钉钉rce/index.html","bc38d97d69c7140bfbf6d8fa2cf05366"],["/2022/06/16/内部ctf/index.html","d9d080d0ee61de8e4cbe60939b2f8cf0"],["/2022/06/25/攻防世界高手区(一)/index.html","27b3b3bead27d4dad0e937fe74bbf7d4"],["/2022/07/01/两小时AK赛/index.html","eedb396574ba95bda7fdde2fd0f19e05"],["/2022/07/03/鹏城杯/index.html","1a81ebbc21639b4cf6236ebbe012767e"],["/2022/07/04/XXE/index.html","8784a3fc2c52ea32e645885db627f1a0"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","a380907088a9cf403add6b3a7b6af6cc"],["/2022/07/08/chinaz/index.html","a2f0ea14a5ceef0e036a8302b1bc94e4"],["/2022/07/09/蓝帽杯初赛wp/index.html","d6afad6f49b35a5172505a16050f6329"],["/2022/07/17/NepCTF/index.html","721faa2ca28a160b93a5bdb1102bfed3"],["/2022/07/19/ImaginaryCTF/index.html","12e199c5fe1f2c0fa18138a9248a1bf4"],["/2022/07/20/局域网攻击/index.html","db78d37493399c61af217e1faecc2a38"],["/2022/07/22/BDSecCTF/index.html","df072b2d0392cb2a54e981daf2818e6b"],["/2022/07/25/DiceCTF @ Hope/index.html","4c0a3f3e1d2dc74cc87160cbcf349f5b"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","1a42fa8f23289562eba1edd0d80a9af6"],["/2022/07/31/TFCCTF/index.html","b08402ba46133d17d2c9528aea72b042"],["/2022/08/03/NSSCTF/index.html","ac20488974d10f5a1e58f23489b53293"],["/2022/08/12/T3N4CI0US CTF/index.html","c108c82573fb0be53a3228d29ff136f2"],["/2022/08/14/SHELLCTF 2022/index.html","c3150ad6590298062cde311906cbe3e3"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","55f5607c413bde523b15118e815f2ed6"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","ae59b7f16a3b73402d7c80c05d10ffae"],["/2022/09/16/柏鹭杯/index.html","a588e85042b15e2b0d51a8a9decaaadb"],["/2022/09/20/HUBUCTF 新生赛/index.html","341f04d75b6006072a19545ec3c232d4"],["/2022/09/27/NewStarCTF/index.html","8f99a52ff0f6a5b2f6d7b14304afdabf"],["/2022/09/27/bugku渗透1/index.html","2f973c5c151d8caf5fdb9f016bf3dffb"],["/2022/09/29/tp6漏洞/index.html","61c32bcf75a58a66004799617e875818"],["/2022/10/02/SWPU NSS新生赛/index.html","e870a6734bd90939664b616f7d9d84f1"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","e5d64c352ee7b303856159b9275c65aa"],["/2022/10/27/Moectf西电CTF新生赛/index.html","c43d7a7d069ec4404abe88fe0fa18984"],["/2022/11/02/HNCTF/index.html","451ed5432899b3e52796644b87a58a55"],["/2022/11/04/2022工控CTF/index.html","9b838aeae90e46b7c9d87acb7127e7da"],["/2022/11/21/极客大挑战2022/index.html","b763f7b370017c26adc18b94be122949"],["/2022/12/05/TUCTF 2022/index.html","376e464dd7a07d4c1494d8831ed9dce4"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","179a0219c3450b03881d3a35d9f926c8"],["/2022/12/18/金盾2022/index.html","4eeb9da0a21e68b6dc378e3bcc59dd04"],["/2023/01/01/CATCTF/index.html","2cbfef9e921a7bdb7a287541ac2ea1c4"],["/2023/01/09/RW体验赛/index.html","9070b0853f1ac25a0d0ad59f51a72024"],["/2023/01/10/铁三/index.html","65a1b0ad1048b9cb44cbcc45aa886765"],["/2023/01/16/Ugra CTF Quals 2023/index.html","43f22ba09951deebb6badef1b0a79ebd"],["/2023/01/18/山石2022冬令营/index.html","66cc9ffb7c1a6c7e88fa43c2bf4e08e2"],["/2023/01/19/SICTF/index.html","936755116f983b254d48d7556e0864ea"],["/2023/02/04/2023西湖论剑/index.html","1a66c5137cd4b3f0844cf0c42dfdc768"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","36ffbffaed9a3ba8865d354cb623ff79"],["/2023/03/04/公安/index.html","61ed19a945daf55362892a13df0031b1"],["/2023/03/07/mysql之udf提权/index.html","4f5dfcfad72df79ac75f1968da526a73"],["/2023/03/07/红日靶场练习/index.html","5fa1165f81217fdde9caac04a1e9ebef"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","772a9dd02a703aa11f1fd3ac0881d43f"],["/about/index.html","269c42372b85d7dfaf41a1080fae062d"],["/archives/2021/12/index.html","c99846932bd6d4cac4bc74190910121f"],["/archives/2021/index.html","4d8a0c9af8177cdd1105deb846f4220f"],["/archives/2022/01/index.html","8390bc11470f792029a2caf244c64ad1"],["/archives/2022/02/index.html","9ca93c59d6c355f82480ae684ef4e1aa"],["/archives/2022/03/index.html","96718f384c341aa948519054fbc8091b"],["/archives/2022/04/index.html","7e03003b87ab44a6c0c21c27d52cd78b"],["/archives/2022/05/index.html","4198fabf99975b504b10991841112c19"],["/archives/2022/06/index.html","9f2d8ada17db8ad931c23f096854e051"],["/archives/2022/07/index.html","caa174469804f1366ae3a3011fc37cd0"],["/archives/2022/08/index.html","bcacd79e3a55f92fc7ce113fef92c9f0"],["/archives/2022/09/index.html","7e0c53449f6e3a4def34bc5fe64ffb51"],["/archives/2022/10/index.html","228e74a1687857944bb2137f11da6347"],["/archives/2022/11/index.html","358a858e8b17b0271b430c22a9957265"],["/archives/2022/12/index.html","d1c90b57985e064be44a0e1c6a0e51de"],["/archives/2022/index.html","ee6b66165313762ad9c4b173cf0f4fef"],["/archives/2023/01/index.html","b416558f51567ebf42723b7cd0005a0e"],["/archives/2023/02/index.html","bd43870454695e4efa11aec894bc1d91"],["/archives/2023/03/index.html","e761f8679244fe5416e6eef069aff7e6"],["/archives/2023/index.html","bbf46abe22e05bdf4e9a5afb728a41bd"],["/archives/index.html","c977e24f65ae90859e0746e8e19696b0"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","2c8e0b52bdfbf2c695da1f225392963c"],["/categories/CTF/index.html","4684a22b633c7928371b57ec455f038b"],["/categories/PHP伪协议/index.html","7395ade2db8208b6368191625a0cbaf0"],["/categories/Python/index.html","bdccde79f0d6bbccfb39ffccf662e0be"],["/categories/RE/index.html","df784469f9c3e0daf04d7005b96665ce"],["/categories/Web/index.html","27d27fe256dbcb68b92b038556302791"],["/categories/awd/index.html","78576a169fb61102b319a97df0d85e8d"],["/categories/index.html","868ee6a5befe397cb5efe55568e8714a"],["/categories/misc/index.html","b0eac8b6c15c254a0477427b98ef8d13"],["/categories/sqlmap/index.html","abb15c581cf76b1dd37e7a9eaa7a5fa1"],["/categories/博客相关问题类/index.html","fe2f25127344ed2f4b30aea9e0161abf"],["/categories/局域网攻击/index.html","2c5b4def7dfd3aa185641c4ba584fa13"],["/categories/心得/index.html","3edaaca459524f4b6a32c423dca6f66a"],["/categories/流量分析/index.html","83b3760eb4fd9fcf664446735d2e003e"],["/categories/渗透/index.html","f74c4bdb1a086b5f62ac4e03fc84a446"],["/categories/渗透测试/index.html","7eb5ef9487f81e7221be1476fc640c04"],["/categories/渗透认知/index.html","28628c94b52dd96f33d0623e795ac545"],["/categories/漏洞复现/index.html","d4e516e9f81d5e8ccca630e648baa3cb"],["/categories/漏洞测试环境搭建/index.html","3ad2d10a2d07217ab100a936e67c386a"],["/categories/赛后复盘/index.html","c54b114f643c438a12c5eead9bc56b4d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","56fc69cd196fabc597486f3a29fd5f48"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","aa97439fd4be40e80996bb99c697144b"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","03278b49168b0e95323ac8daad5bb194"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","17c973c02ad74107fbab882ab611d377"],["/page/10/index.html","8bd66202a89d01aa0b02aed43b1bf5c2"],["/page/2/index.html","3367aa80d2269b834c9f1dc9c8dad989"],["/page/3/index.html","76ba71276906ba966c7f28b8a38894be"],["/page/4/index.html","0bc79a1c5d0678481e22d82aabe9d494"],["/page/5/index.html","4a7169035848f86e1f2637e8a87e1c74"],["/page/6/index.html","be025c04b93567dd930fd1822fb83d44"],["/page/7/index.html","cd03c2a32da261e797b6c0a5a2ccd2f8"],["/page/8/index.html","61678c5844f9eeb0ef55cf7ae2d81830"],["/page/9/index.html","bd74084a30dfe42a0682e4b570e997ed"],["/sw-register.js","1f38f28f609a103667b8162d84d78cdf"],["/tags/C/index.html","42f707e4f139b5c028751cfa958d2e1d"],["/tags/CTF/index.html","f58500bd04250fff5886ccd42fd93fe9"],["/tags/HTTP头部信息分析/index.html","db433f8dfe23943dba03451b4885c2ea"],["/tags/PHP伪协议/index.html","6247eb15029e06e3528897fda7417594"],["/tags/PHP特性/index.html","8f26cf97c62a73039bb0a66dc752ff67"],["/tags/Python/index.html","99420919031c17df5377bcb1b77ae0aa"],["/tags/RCE/index.html","399775f192a5c9508e1c34459de7df43"],["/tags/RE/index.html","0b18eaacf88a350691d7651ea4329388"],["/tags/SQL/index.html","deb4656e9cde2a39df55195b561f065f"],["/tags/Web/index.html","4963e0ec19dec05ec9d19acb8b979384"],["/tags/Web工具包/index.html","9ed40a72666c1318832f5541096d1227"],["/tags/awd/index.html","b7c6555b54165c8773a3181f73431a60"],["/tags/bugctf/index.html","5303e8a90c207f93f2fc07b5c0ef5b51"],["/tags/ctfshow/index.html","cf8d7a37929c2e99c54056dd945619ef"],["/tags/index.html","b18d383b692b7839df6e3f20f997b47f"],["/tags/misc/index.html","00e2688c7e6ff613d0a99e17f8691e32"],["/tags/next主题失效/index.html","3252e94631952ad712d00fedda6c33d4"],["/tags/sqlmap/index.html","8114af4d1bba22a2fa4b9440b0b19e3c"],["/tags/wp/index.html","c5ab3f1e7a85eb3b6156e711d0edc511"],["/tags/xss/index.html","a85679f59627af89d1a2b350a80e2906"],["/tags/xxe/index.html","3ba12aaaa10d217008581947d345c3d0"],["/tags/不蒜子不显示/index.html","b62623de052299f8f2589e5de9215adf"],["/tags/博客/index.html","11013fae65320565e637d594328b7d11"],["/tags/博客主题优化/index.html","6d285bddb02f5ab47f66a42fb6147b9f"],["/tags/博客死循环框架问题/index.html","156c597d8a27b00518b1243cba99b616"],["/tags/博客部分问题解决方法/index.html","3009d21d0da3c53a41b7ab6e764bf117"],["/tags/反序列化/index.html","26a66fe413c044134dfa1ec5960e5d6f"],["/tags/命令执行/index.html","c98a465dd0002b449d5c8c802a9ead3b"],["/tags/局域网攻击/index.html","e7395d86eadc65f944878a41703077ae"],["/tags/常用指令/index.html","62ab9fcd42de7604ab25f0a20a5050c8"],["/tags/心得/index.html","6bb644309c5ff79203da7dac333f7caa"],["/tags/文件上传漏洞/index.html","cd5f1f06db2bb0e5bda9d3126d1bb85f"],["/tags/文件包含/index.html","7a8fca79ea38e578e44040a20342766a"],["/tags/流量分析/index.html","522fbca9edff58b262ce5b6a8d038d0f"],["/tags/渗透/index.html","59e95b163d77d7259e8e7143bcc20652"],["/tags/渗透测试/index.html","41dec627c5d3f488f78a237eea6bbd5c"],["/tags/漏洞复现/index.html","4a7d8bfa1050122905b5d7468221f469"],["/tags/留言板/index.html","8d2aee61faf0e55ce6fa1b13a32a24e8"],["/tags/赛后复盘/index.html","0833a8017b19a50d1bdd3a15fd8a5d3b"],["/tags/黑盒测试/index.html","9a9a8e12f6b8ccd26cf2613624f0c262"]];
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
