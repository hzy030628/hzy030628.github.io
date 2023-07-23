/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","416d8b844e25c5d56992143d03556d13"],["/2022/01/08/ctf之web/index.html","c262493ff63bcfa2262f1aaf9b1db6c6"],["/2022/01/11/博客制作遇到的问题/index.html","a02dda9a89b7db8167c9d7c042af4436"],["/2022/01/15/C/index.html","83a08fbea23dc70f34c097267c6402ec"],["/2022/01/18/新版next置换/index.html","415be5c25e5a0b60f03c8e6da7611cd8"],["/2022/01/19/不蒜子相关问题/index.html","9f0e845748e9b93b69d51dab5a902edc"],["/2022/01/19/框架问题/index.html","94ed2cbf1908b00dac16503d94e2e028"],["/2022/01/20/ctf之reverse/index.html","314b524e1323acb5c16c9dcbd9bc7318"],["/2022/01/23/misc部分解题软件命令记录/index.html","cf93b99d931a2f6bfdb4af1009e9e81a"],["/2022/02/01/684/index.html","b47c1f0e284a01a8614d29375e3503ff"],["/2022/02/03/留言板/index.html","1bc912b142aaa9ca632203cef6684bc4"],["/2022/02/04/SQL简单注入/index.html","ee7f70bfc1cd1b6194d0a3e583894a53"],["/2022/02/05/最全的HTTP头部信息分析/index.html","38ab2d2515e1636265ba0765f45ea7fa"],["/2022/02/08/ctfshow文件上传/index.html","79b3680dce0865da3423cd2651fb4cd7"],["/2022/02/08/常见密码类型/index.html","ffdcec2b4816992335b8825435bfb219"],["/2022/02/12/VNCTF2022WP/index.html","73fa2af9199d041966bf8f25e58e4de2"],["/2022/02/20/ctfshowPHP特性/index.html","9d0bdf78c59fd75a802f02c7836e7260"],["/2022/02/25/php伪协议/index.html","ff79c7f151aa80fec72ecdd46751f711"],["/2022/02/26/ctfshow文件包含78-117/index.html","65c458be77ef014a484c18aa99924551"],["/2022/03/02/Clash漏洞/index.html","cbcacba86935b95bb432a03c0987001c"],["/2022/03/11/流量分析之题型解析/index.html","1281a52ac91eecea0304c73e05c1001e"],["/2022/03/15/ctfshow命令执行/index.html","2f535fa6756ef0793701908ed4b3cf56"],["/2022/03/22/CGCTF/index.html","5a4d289d73ec581c75ebfe1df64f3cee"],["/2022/03/24/ctfshowxss/index.html","83961d23eec9bef3e1864804ab41c9a3"],["/2022/04/04/黑盒测试/index.html","a66c16d53046f8f8e5cd376465da7105"],["/2022/04/11/nmap/index.html","170e1ab10dfc04ebb1c544efd933acaf"],["/2022/04/12/渗透流程简要记录/index.html","f19742f3ff6e665933ff6ef6d4120e83"],["/2022/04/12/渗透测试之攻破登录页面/index.html","2f1f5b319a35bb07166a5c56d1a500aa"],["/2022/04/14/xray扫描器/index.html","4d27633e71b36cd6cb3d098e61611359"],["/2022/04/15/ctfshow反序列化/index.html","a94de0ecc705a8482e7affaacba1dffb"],["/2022/04/26/渗透测试实战/index.html","32e056bb21c21189617adb8ff2741c3f"],["/2022/04/28/sqlmap教程/index.html","cd61e4802a96f5d28f2a0b6b3e517d53"],["/2022/04/30/认知文件上传/index.html","fb01d534f43a3547e3034b31e5aca9e7"],["/2022/05/03/nahamcon/index.html","0a6dcf27c5aeaee0888483c0cfd81341"],["/2022/05/15/awd/index.html","14f75b1693663d7dfa7477ddafe9fde1"],["/2022/05/22/DASCTF/index.html","ddc79ef7bf71f170b9f63bc1d85f993e"],["/2022/05/27/520/index.html","8d5fab1dc51ef7d6f9fdfbc9ed023060"],["/2022/05/27/ISCC2022/index.html","f037de0c83e2128b384d45953c4cbe66"],["/2022/06/01/第五届世界智能大会/index.html","2bf5c3de74d5262f32db40b73e09d799"],["/2022/06/04/SEETF/index.html","9357e99f3319e8808cbc7989e1d905e3"],["/2022/06/04/bcactf/index.html","9981ce3c0330795f55843617438a2c43"],["/2022/06/05/BSidesSF CTF/index.html","8f81695e36879271534e917a1e3a0f08"],["/2022/06/07/Docker部署web题目/index.html","afb0a2b724e6a2bf814c9adbb2340c75"],["/2022/06/09/利用oj搭建C语言考核/index.html","8eba03985b4da7073f8a7e12ec933cfd"],["/2022/06/13/限免题目/index.html","46ca4f6c432bf27ebace605ecec1eda9"],["/2022/06/14/钉钉rce/index.html","1d2d1e06f51b31673520a966eef3c2b4"],["/2022/06/16/内部ctf/index.html","afc43c1b3803aceff7d0465a55bcc734"],["/2022/06/25/攻防世界高手区(一)/index.html","a510da07edc30a0b768032efa9fef308"],["/2022/07/01/两小时AK赛/index.html","cdade467b55079baef6cf6873c083768"],["/2022/07/03/鹏城杯/index.html","d8e89b6549deb3ba8ae7e3615418001b"],["/2022/07/04/XXE/index.html","9c7bb7b9cb14090a90b4670c3f62f049"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","01d525befc04d68913003d43f412c583"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","e84b818e838defc64c9fc43e8db3c6bb"],["/2022/07/08/chinaz/index.html","f51c9e29a00f8be99041b11c8a615544"],["/2022/07/09/蓝帽杯初赛wp/index.html","ab85bcf6d77a75c76d585c82c7323734"],["/2022/07/17/NepCTF/index.html","d9a83a6ca1cacd0a5392d2b93f883bbf"],["/2022/07/19/ImaginaryCTF/index.html","e2e085755cfadc8b7adf9185e903164b"],["/2022/07/20/局域网攻击/index.html","8f3ad448bc07f82ff7169f9dc4a18045"],["/2022/07/22/2022BDSecCTF/index.html","dea0117a6ca3b4ee440fc7ef5dea945f"],["/2022/07/25/DiceCTF @ Hope/index.html","2e917a37511ad011916e26d39884cb26"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","d4252d3d9ed12c3ca3f5cb92a81e90a6"],["/2022/07/31/TFCCTF/index.html","31ca2c5879e8b098d3ce460fa9aeac7f"],["/2022/08/03/NSSCTF/index.html","6dad4a58be69b17526216a30032d0bf4"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","2ae4c488d5657856185162bdb45f4d15"],["/2022/08/12/T3N4CI0US CTF/index.html","a78bf5ae49f6fd775af862e16ca4a618"],["/2022/08/14/SHELLCTF 2022/index.html","97adc2bb24b08d6a46a78ad007bbd665"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7b140f30052ced41cfeba6ca36e2cc2d"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","5056dc90ca86480a48c12698d152f9f0"],["/2022/09/16/柏鹭杯/index.html","5ed98fe789bfb527699a3a942b637dbd"],["/2022/09/20/HUBUCTF 新生赛/index.html","f56544230a70a40089330af97f4b0d8c"],["/2022/09/27/NewStarCTF/index.html","cde44b00f8f3f273425862c8df74130d"],["/2022/09/27/bugku渗透1/index.html","479975a4c20d2abd52f6cdc1a02ac978"],["/2022/09/29/tp6漏洞/index.html","6edfcd768ba05301add0d04a05881381"],["/2022/10/02/SWPU NSS新生赛/index.html","5a8982283b30a9aa5ff34d8ec26ab35b"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","0de27f48590ff2b1ebd4034bfd76ff63"],["/2022/10/27/Moectf西电CTF新生赛/index.html","53306758166b6b3a197595019792a729"],["/2022/11/02/HNCTF/index.html","e88358550ffd847c6f15b085368dfab6"],["/2022/11/04/2022工控CTF/index.html","187d9b894322d7236810397cce6d8a23"],["/2022/11/21/极客大挑战2022/index.html","d849d05299e45798791163c9b0308800"],["/2022/12/05/TUCTF 2022/index.html","8757ca76b5d273fb5a1800b557b55fc2"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","133ef9d07ca0a79c4fd435e85ddcb6b3"],["/2022/12/18/金盾2022/index.html","27377a39637b029f5d64b2cec9277fbf"],["/2023/01/01/CATCTF/index.html","110c5cb3c55494b5fae25ed899bff899"],["/2023/01/09/RW体验赛/index.html","acecbcfe6c06376d4ffaac7f01235371"],["/2023/01/10/铁三/index.html","911ca3ddca986b2c5435656b8c808ec7"],["/2023/01/16/Ugra CTF Quals 2023/index.html","9cd52ee0dbc16d70848d21919b9e256a"],["/2023/01/18/山石2022冬令营/index.html","36392358e02c626b70cb3c4da38f6f5a"],["/2023/01/19/SICTF/index.html","050fed0ffa618a82645cd35e861aa446"],["/2023/02/04/2023西湖论剑/index.html","bd2364fbb3c316dc3e1951ac05cf2b51"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","1fbcf2ad4568ffb5d814d29a1ce7e4b8"],["/2023/03/04/公安/index.html","b80b311cdb563123cdcf44220f14c539"],["/2023/03/07/mysql之udf提权/index.html","0ba112141663b4985361b8cb97419e6c"],["/2023/03/07/红日靶场练习/index.html","f8f4d714d80b77a34db361c3a540b0be"],["/2023/03/27/NKCTF/index.html","64f63a12c3cae6ef7fa3c9b70e5cbe23"],["/2023/03/31/楚慧杯/index.html","7ba22f20b8b5f8b81cdaa00fc20bcef8"],["/2023/04/23/HDCTF2023/index.html","2d141fdd2e208bb52ceb0819b43b5800"],["/2023/06/01/2023CISCN初赛/index.html","9f27d277e368e10c6f3fd6b38beb8b05"],["/2023/06/28/2023CISCN[华中决赛]/index.html","82ce81de1f09f5a2a6c3087e50c152ed"],["/2023/07/10/CyberSecurityRumble Quals/index.html","5f4fbd3af9bf7ae4eee13ffe1a00caba"],["/2023/07/22/2023BDSecCTF/index.html","a13df577841711a58725e04ed1f740bc"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","85a9a1f473659442b6233471f5a71265"],["/about/index.html","18dc5faa7c02fc9af51c5c8f07daaec9"],["/archives/2021/12/index.html","0aab7adac615d47991e8c762e4f63209"],["/archives/2021/index.html","268a6ce80027fa63153f8983dee4761f"],["/archives/2022/01/index.html","ee9be2f0b6375d424c5e3c0089ceb577"],["/archives/2022/02/index.html","6e6a81b5c0791b739f699237fc63ac7b"],["/archives/2022/03/index.html","22a72235180a87fe15bd4d0a70b5efc8"],["/archives/2022/04/index.html","fd515f9e8823f78d569202f476808241"],["/archives/2022/05/index.html","bca80044a23a1613f5d8334ec2225171"],["/archives/2022/06/index.html","ab4b267abbd3728c59e9c2effde9b43a"],["/archives/2022/07/index.html","e82b683a768b0d0408f597f0c65f38c0"],["/archives/2022/08/index.html","cc32f2b8e1d53174dbf41a3cf7a51fe8"],["/archives/2022/09/index.html","a9a33a891578b7e9019cf56c87a2ba93"],["/archives/2022/10/index.html","76288065991bd0b8a3ac2171a296c954"],["/archives/2022/11/index.html","8b87f87fb7a62fbb555f69ee6a017d15"],["/archives/2022/12/index.html","7ceeb2335a90dc1b6563b415e5d05c8e"],["/archives/2022/index.html","2c4260e74653e19c7f24b43cebb621ca"],["/archives/2023/01/index.html","fe6fc51cf600a27fb8404a9bbb50ce35"],["/archives/2023/02/index.html","d23628780a20700c67f0dd1a0ea806f0"],["/archives/2023/03/index.html","91ea0f109e00a8b22bd8d8cf29c2374e"],["/archives/2023/04/index.html","9300cb6e65102ae69c22e9f14be30d98"],["/archives/2023/06/index.html","80a1712db0bfdd96b3328e6f0ae4f20b"],["/archives/2023/07/index.html","d0e23740e8d8a718c401aef700a7881e"],["/archives/2023/index.html","1d4e082ad7597b983c5bf9061a218cc8"],["/archives/index.html","3d9be0bca11f2f99aeeadc163502fa02"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","3e56d1764ae82936e57c419aca2f01f9"],["/categories/CTF/index.html","1dcb62b4d7e165cf863f32e23c65e24d"],["/categories/PHP伪协议/index.html","ef969a84b6d01f6c3593f2d35d833506"],["/categories/RE/index.html","f726cbd954836d9e31c1f4893b854cf9"],["/categories/Web/index.html","b1bf72a64701759cc5ff195e89626384"],["/categories/awd/index.html","77b2efa56b54d2e1eef1edcc2e274ca8"],["/categories/index.html","14b6db6e827736159d6aac65656be2a7"],["/categories/misc/index.html","eceb414d4ce64feadb7734e4797215f0"],["/categories/sqlmap/index.html","b172b6ab09f5641a9ab8396a38934d0b"],["/categories/博客相关问题类/index.html","9311392f86ba1b3b1e4b24570d2967d7"],["/categories/局域网攻击/index.html","083cc6e769454ef3dccaef4d53997ea9"],["/categories/心得/index.html","5a3feb0ce970bfb8f5a005f2188b393f"],["/categories/流量分析/index.html","37c46cbbea70395b88427fb172768bbf"],["/categories/渗透/index.html","bdb0171535d8bd85d93d04ac5e584334"],["/categories/渗透测试/index.html","15fb0bc99ecec8bf20c46e99ced779d7"],["/categories/渗透认知/index.html","c366d9f3cd4ce7e4eb540b200ae74ca6"],["/categories/漏洞复现/index.html","71d8aedd44d0296e97bf678bad6afe8f"],["/categories/漏洞测试环境搭建/index.html","d0bb2dc94706d6a597ec462c526c99b6"],["/categories/赛后复盘/index.html","eb6f64f716a21f060aa104e05a9ed307"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8bba0c4158d9639927b0e25bdd34d139"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","4822e7a88045c7de7e3a8cef4f994a26"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","631bb85e27c7fe3e9d8153cdae3819fa"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f2a555502436342949daab6801e39a12"],["/page/10/index.html","2e2d45d8b8e0ceb7320fda33ec1f0137"],["/page/2/index.html","fe7dcd39055be0c8cf81f4b4ac543ab5"],["/page/3/index.html","a4c1e2656fba2d8a08e307d2480f1bf3"],["/page/4/index.html","62260c04834d3e2abde8b62b49aa0f75"],["/page/5/index.html","27a3e37678cdb283ae2bd0b245c4b319"],["/page/6/index.html","938f06f1c5f449ed97fc32d875b31b79"],["/page/7/index.html","053bb79a4f7c7477941b08e1a75bdf12"],["/page/8/index.html","278e524b9f110e68cfc75cbea95b2495"],["/page/9/index.html","438f2ceb4c4febf67fa4ce1aad7e99e7"],["/sw-register.js","6280cff2ee88a1eac22026ee5213f4bd"],["/tags/C/index.html","9f04938d768ac11538a0047e873cc43a"],["/tags/CTF/index.html","d7c6c073d085fa0df72e97d198261415"],["/tags/HTTP头部信息分析/index.html","96d4b1a013a0ac03d78f20eb67f4bc2d"],["/tags/PHP伪协议/index.html","50760d991fcec65067c76d436f9e080c"],["/tags/PHP特性/index.html","4bde611e6e40bb9328dab2863a605c37"],["/tags/RE/index.html","db4ef1107304b3c21d97f23778003374"],["/tags/SQL/index.html","3d909fcd2315441f0cff4f8f40e38103"],["/tags/Web/index.html","5ab3ae24debea1e88dbe35e42b64cdef"],["/tags/Web工具包/index.html","5d46a011c4e2c682ae36ec4143475bf3"],["/tags/awd/index.html","84d36f908d214f5c1df172cdef75901f"],["/tags/bugctf/index.html","ebbb786baa1e47860c5b43b270b50381"],["/tags/ctfshow/index.html","34f75484670b85b010ee0dc3e51a985e"],["/tags/index.html","e540d033cdd82d91989c203a1684c863"],["/tags/misc/index.html","3944041c41c2c7f4c277fb49a54ebe02"],["/tags/next主题失效/index.html","e254235925c6721a170afd62c019c51a"],["/tags/sqlmap/index.html","033d5e950fd327be3ae9590b773a955f"],["/tags/wp/index.html","828a2b0ccefe42b50d71c5963e61a581"],["/tags/xss/index.html","9b80005b50b75ff6787a733156669fe9"],["/tags/xxe/index.html","da823239c8f0946420a452d2110fa482"],["/tags/不蒜子不显示/index.html","2ed278726426711bc774a33e6b7b055b"],["/tags/博客/index.html","8fe24c0b191fcf00feb56f0fca11941c"],["/tags/博客主题优化/index.html","041932e6aee22edda782897503c1c630"],["/tags/博客死循环框架问题/index.html","3eeffc00efe20f30e32e123dfdc27255"],["/tags/博客部分问题解决方法/index.html","d665abd35bd5fb7690e4302a785532e6"],["/tags/反序列化/index.html","20fa25b742a6c3fb3284ab2fe57a8e31"],["/tags/命令执行/index.html","c071212380cbd1123cc7eda408f15fec"],["/tags/局域网攻击/index.html","cf33c130e07d79e09da1c21aa517850a"],["/tags/常用指令/index.html","71cd98bb6fcd35ebf68738eb1917b605"],["/tags/心得/index.html","bbee5a3df6970f11fdf9f553814c089a"],["/tags/文件上传漏洞/index.html","dbd0778b06e00bdf03cc40e3988481a6"],["/tags/文件包含/index.html","861ce3d6702e334c14c97abcd2935687"],["/tags/流量分析/index.html","95b9cb004e17207d2a332d022d09f0fe"],["/tags/渗透/index.html","f9727aee9d5337f89bb4373db5b530ce"],["/tags/渗透测试/index.html","90d43969ddcf0d41e4bea3ac92b975b6"],["/tags/漏洞复现/index.html","176bb84647eb1d437d8203959b139a84"],["/tags/留言板/index.html","d2fb1bed44a2ceaac75fba5e9729fab1"],["/tags/赛后复盘/index.html","1cbfa583eb2f8f153e078b8b2dadc328"],["/tags/黑盒测试/index.html","a27fe3f9eb94d7f4414e266bf9936fd6"]];
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
