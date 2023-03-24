/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","139fb0f04f8733555c520bcd12f410f4"],["/2022/01/02/Python程序运行常见错误总结/index.html","7d59a3d326c72b722b40a03b6c66ff55"],["/2022/01/08/ctf之web/index.html","5419bbdc142b2877cfa20a45ea9ec9c9"],["/2022/01/11/博客制作遇到的问题/index.html","3bd5dc66432aa195c1a594397380a24c"],["/2022/01/15/C/index.html","c548a1236136e9e9a1f4e30803d55419"],["/2022/01/18/新版next置换/index.html","5c8c583bf61e325fa8f04f3c9d464ea6"],["/2022/01/19/不蒜子相关问题/index.html","6bce29f519f6d34ad5888e205fffa617"],["/2022/01/19/框架问题/index.html","14ef408c692b4b542564b46c3f1f8260"],["/2022/01/20/ctf之reverse/index.html","4f4bbedcf1160039d4d09d7fbd54339f"],["/2022/01/23/misc部分解题软件命令记录/index.html","f99708addaf2565ec83ed2c5c27cc8cd"],["/2022/02/01/684/index.html","9be915c8fea2d0b8a8b536444897bffa"],["/2022/02/03/留言板/index.html","e91af466193fb926b8af7bae58577af7"],["/2022/02/04/SQL简单注入/index.html","58d312abb5c0d44c2063f279f0dde985"],["/2022/02/05/最全的HTTP头部信息分析/index.html","d913ec1c9bb952a4a4c71cab06eb73da"],["/2022/02/08/ctfshow文件上传/index.html","3848c14278d35f3c8ed608bdf4120152"],["/2022/02/08/常见密码类型/index.html","cb7ca80b646c50c6c1304fdb97de8ff2"],["/2022/02/12/VNCTF2022WP/index.html","187e638405a2fe466f12b6e34a11eaa1"],["/2022/02/16/rce/index.html","51403ff974272b5da1f259b3d396f649"],["/2022/02/20/ctfshowPHP特性/index.html","f93ffa34f7ed76cf5dcf80dc7ab27a17"],["/2022/02/25/php伪协议/index.html","e066b95e91e0b2d2a997db9a05932173"],["/2022/02/26/ctfshow文件包含78-117/index.html","d14c4f2e4f6c03fbba4cb8e7250ab56e"],["/2022/03/02/Clash漏洞/index.html","23d64773a3a3ebb78d0e241a0b0b91c1"],["/2022/03/11/流量分析之题型解析/index.html","ddfb93d9ebc70a5e0918187abeefcf54"],["/2022/03/15/ctfshow命令执行/index.html","a0e2a571570f1bf815daef2ac98b0b2c"],["/2022/03/22/CGCTF/index.html","df514ce8da7e4126e716f6645e3c90f0"],["/2022/03/24/ctfshowxss/index.html","94742b68287da6be9083783cd8e94c61"],["/2022/04/04/黑盒测试/index.html","5f4340317a60c7e6e57289f96b283a7a"],["/2022/04/11/nmap/index.html","3be208f0d7b6485c4d981cced6688cd0"],["/2022/04/12/渗透流程简要记录/index.html","707b298c3ab9e66f21f4766a1f3b3b9c"],["/2022/04/12/渗透测试之攻破登录页面/index.html","79dc00084ed2429133e4130d3b51f5f9"],["/2022/04/14/xray扫描器/index.html","14640d49d9e2e236f3478672d6997c0f"],["/2022/04/15/ctfshow反序列化/index.html","7d4168e0fcffad3d9babe6c164e1526b"],["/2022/04/26/渗透测试实战/index.html","9e3fe258b46f3955c30e558b50e792b2"],["/2022/04/26/网刃杯/index.html","cd32f7007b7f7d1456960d9a1665682e"],["/2022/04/28/sqlmap教程/index.html","fe186378ddc894a57d038c2a38d71a73"],["/2022/04/30/认知文件上传/index.html","1c8cf0dc77e96dd84704f9c889556ad8"],["/2022/05/03/nahamcon/index.html","ce9cf89b8ec49d934830205b24a9661f"],["/2022/05/15/awd/index.html","181ff5decb179e5f753eab8a1a41b180"],["/2022/05/22/DASCTF/index.html","df0a5dd28f7c3d602998b84fbdb8c5c5"],["/2022/05/27/520/index.html","5ff747f9ebb784f8b4626df450d98fa6"],["/2022/05/27/ISCC2022/index.html","3c85c41c041330f69aaccfb57d533b72"],["/2022/06/01/第五届世界智能大会/index.html","234ad1fe907871fc06c0179727739b88"],["/2022/06/04/SEETF/index.html","3339a72498bcccc4dd0cef6a8474ded2"],["/2022/06/04/bcactf/index.html","c0824ee2170f5ffdeb0e3abbbc739f22"],["/2022/06/05/BSidesSF CTF/index.html","ba7b83c485b12c81816bc58419c45b79"],["/2022/06/07/Docker部署web题目/index.html","c5beb96243fe06cc7be0c2c9cb6bc7f8"],["/2022/06/09/利用oj搭建C语言考核/index.html","2c303074205dd85ecdd631b4c0364014"],["/2022/06/09/论网站502/index.html","ae00cbd392ddea5af9f0fb9b671e3d06"],["/2022/06/13/限免题目/index.html","c33a2f32fdbfb8dc33a2b14501f4bec2"],["/2022/06/14/钉钉rce/index.html","cf54862d98ae58974c16194ebffeee0e"],["/2022/06/16/内部ctf/index.html","e7c9be7a1871b006edbeb3cbd1e89291"],["/2022/06/25/攻防世界高手区(一)/index.html","b456fa275f175bc06ec68aff87bb5995"],["/2022/07/01/两小时AK赛/index.html","0f9798aca4a877bad7997b6e6ae896fd"],["/2022/07/03/鹏城杯/index.html","8b7d4ef93bd9b76536821caddc4f9105"],["/2022/07/04/XXE/index.html","c409b57fef82359d72ff34f09789806b"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4292ff5c980768e7dff5d54b7e47e6e7"],["/2022/07/08/chinaz/index.html","ff0b9c1a22cc0983d6e38fcba2fc7d4e"],["/2022/07/09/蓝帽杯初赛wp/index.html","996a8b1701ed9bd8dec680cafb46ab6e"],["/2022/07/17/NepCTF/index.html","42330cbc92e590353b0bf08aa2c77177"],["/2022/07/19/ImaginaryCTF/index.html","d1ad239be95dbe589217e484d312b588"],["/2022/07/20/局域网攻击/index.html","564804c41a1f8e7db854fa930f259d99"],["/2022/07/22/BDSecCTF/index.html","d2e4c320c21db06cfa596a633dee63c9"],["/2022/07/25/DiceCTF @ Hope/index.html","8c28d4089530998fc9a367bad94af243"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","4e7190c0a342dca02787f7d7acccf30d"],["/2022/07/31/TFCCTF/index.html","5254610e162f3b9404998c624354b1fd"],["/2022/08/03/NSSCTF/index.html","421a6f098a125b1f3fc1e0a8e07a97d4"],["/2022/08/12/T3N4CI0US CTF/index.html","7fe4f400f3f34cdfcad561fa85b67cc8"],["/2022/08/14/SHELLCTF 2022/index.html","e3318a45c63acf2d06247a246252f5eb"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","2641db63859948ae602943390621a722"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","18cc3d8a9d59286b73e568de73ff5cb9"],["/2022/09/16/柏鹭杯/index.html","fc5ce3fcf44ab6a8068fd75e64e67a2b"],["/2022/09/20/HUBUCTF 新生赛/index.html","6ab970cd825dfe4cfd6b950cbcfa5d12"],["/2022/09/27/NewStarCTF/index.html","dc0711af0b5042406fd50c2b1ab368a0"],["/2022/09/27/bugku渗透1/index.html","ff814166392685d0c38011a0d437eca7"],["/2022/09/29/tp6漏洞/index.html","d20451ac626847558c3f88f7b32d719c"],["/2022/10/02/SWPU NSS新生赛/index.html","290dbe3ba94d65c8f92d72353d7c5689"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","62ae87d061bad6df91963be17e665264"],["/2022/10/27/Moectf西电CTF新生赛/index.html","bc1577379cdf3752906c1c5808244c13"],["/2022/11/02/HNCTF/index.html","26a01d5ecd5fa853cb4d5080c892e916"],["/2022/11/04/2022工控CTF/index.html","b401bdbb0bec46fa84de50c2532d87be"],["/2022/11/21/极客大挑战2022/index.html","427b266d69b6c52ed7985bb13a83ffd1"],["/2022/12/05/TUCTF 2022/index.html","d6e28bef4a0d8ef58358773c272225b3"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","9a92a31cda4c3f82a9754ccfa1722380"],["/2022/12/18/金盾2022/index.html","6ed9a83d6834cc3646875981bca8b16c"],["/2023/01/01/CATCTF/index.html","3272f1b45b39dd0480f8fc9ccb804f3e"],["/2023/01/09/RW体验赛/index.html","235247b0dc1b3031131a7abab8d5ad03"],["/2023/01/10/铁三/index.html","5aa68f18b6e61725a9f0da9d57201188"],["/2023/01/16/Ugra CTF Quals 2023/index.html","2eebd181d849a302bd40648550c7864b"],["/2023/01/18/山石2022冬令营/index.html","6ed7dbbade6a6759fe65bd78bc96595a"],["/2023/01/19/SICTF/index.html","406a0d58b782df3ec39e60ccce0c7c1e"],["/2023/02/04/2023西湖论剑/index.html","b79b218bec3b7a62deb13717273d8415"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","397b68de1b5d2887e3c47931a8a80de2"],["/2023/03/04/公安/index.html","8a239dbecd04c7f6655f1519309179cb"],["/2023/03/07/mysql之udf提权/index.html","e37348808bee285cd8875f09a1bf4510"],["/2023/03/07/红日靶场练习/index.html","b8248a5b898bc436a10526957ead7c53"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","b414efd0bffeb4920d7cf2e73e1fb02f"],["/about/index.html","801b9ba1821c048eac16e71146374923"],["/archives/2021/12/index.html","cd2f8f7688a0e9ead2ee1c5cb638e3fa"],["/archives/2021/index.html","0147fd76409f85820d1714eea44f3675"],["/archives/2022/01/index.html","3f89dfce5a5e87dbbf2146ba3db46414"],["/archives/2022/02/index.html","03cabc873b82ce7d5b9b109250273cbb"],["/archives/2022/03/index.html","dbd78165d162af76a6bf0d0566da768e"],["/archives/2022/04/index.html","1596a656a1742109ae74ce7c8548a3d9"],["/archives/2022/05/index.html","d34a5265b746e4a5a3edcafa672e2521"],["/archives/2022/06/index.html","4a2b3b1aa36d0de5c887d88194fc0709"],["/archives/2022/07/index.html","e8012b288e0d98d329fe78ebb00f593a"],["/archives/2022/08/index.html","d5348a8fb92894ad86b099ac962efcfb"],["/archives/2022/09/index.html","010bc8facb3360b42dfcce92a6dd8581"],["/archives/2022/10/index.html","a202194066e80f891c34af8a37ebe20b"],["/archives/2022/11/index.html","454960577462b5bc059a724510f7e7d3"],["/archives/2022/12/index.html","d6af9952e34c779c4b4e34b4fc439689"],["/archives/2022/index.html","8621b2c9400a3481603e3c5ed9f05cca"],["/archives/2023/01/index.html","d7a4125120baab33a846d72dccbd3110"],["/archives/2023/02/index.html","ff99335039a6514a226054079b29f61f"],["/archives/2023/03/index.html","e982a3ab41a5b1d7f1995e1ea89f13d6"],["/archives/2023/index.html","0a4d6d87fa9666caf795b0bcf594bb79"],["/archives/index.html","7131c6ed9199b153c00fca7459fe6d63"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","187f77e805d13ef4f31f45c0d09c45f2"],["/categories/CTF/index.html","f6852a6a8c8ce81b52222104b9565921"],["/categories/PHP伪协议/index.html","0d6fa75549a2b85518a1cebb3e7b9711"],["/categories/Python/index.html","775f806ff32986c05de423f43046210e"],["/categories/RE/index.html","eddc3256baae81b61c7ad1806520b02b"],["/categories/Web/index.html","28833decda7d08c166a77a05fd3d0868"],["/categories/awd/index.html","18a8c1e89e2b02a04fd4c32890eb80fd"],["/categories/index.html","d7bb4420881d4c30cab3c5ec3796933c"],["/categories/misc/index.html","af1351459dd3d5058ed05adfdebae2ae"],["/categories/sqlmap/index.html","e600a229cac78dc5b0b836c6ae5bd9e4"],["/categories/博客相关问题类/index.html","3ff80ea7df34147b946b99f4a37a6b0b"],["/categories/局域网攻击/index.html","e361268d8ec73ad11fad49cb8b17e400"],["/categories/心得/index.html","ae85a762eda90b8b5beed71fc3bf4464"],["/categories/流量分析/index.html","6a7c6670e8d98ab9e8daf362a38f9770"],["/categories/渗透/index.html","4f08ac8ce39b75fd3b2dbc848ba77d4d"],["/categories/渗透测试/index.html","d7aff881d25e3389881627f1470ff2c8"],["/categories/渗透认知/index.html","aa40d60420619994a121a8c14ccc0533"],["/categories/漏洞复现/index.html","83936bcccf96453e98b6918c9059ab9a"],["/categories/漏洞测试环境搭建/index.html","cce74d2951f445bc11de9853b93f20e8"],["/categories/赛后复盘/index.html","50cfe19558675a609864e5da61c7f3ad"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c7d7e451a08efbef53005f4d6a9dbd6a"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","0144207ee99a482d3cbf14e3a86b8796"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","44452fdf2dacb2127c0c01cabd810a99"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","3ef258b62a20ee56bde227049a762170"],["/page/10/index.html","f2016fb89038792e382cd4f1d6bc90bb"],["/page/2/index.html","4748aa0af352a386d51f35fe17584945"],["/page/3/index.html","f1fa3da042aa010d5062a1a0136a9eea"],["/page/4/index.html","ddaae249b686eddcb0fa85f10c6f7df0"],["/page/5/index.html","316452c9f468f20caddd52c20f0e3d3a"],["/page/6/index.html","3572b138381614789644eea8926ec03b"],["/page/7/index.html","2d44e2ed68378a985a93e4065edf00f2"],["/page/8/index.html","7e9c6eb3552a8e4f94870963b178be1c"],["/page/9/index.html","8ae1b22040fea731ed89c64ad372aa3e"],["/sw-register.js","324c36dfd2b41833794ff771d3aa6c84"],["/tags/C/index.html","f7462bf08b140575a0493004ffe969e1"],["/tags/CTF/index.html","c5badc814222d6b5446b71e6e325e6a6"],["/tags/HTTP头部信息分析/index.html","15c5f680289715621270706baab86f1b"],["/tags/PHP伪协议/index.html","c2265c5cc0d115f7676c6ae7518be4d7"],["/tags/PHP特性/index.html","2f7e43d640fe6c09dda6f6b31c605cc8"],["/tags/Python/index.html","1b8999a802edf6eb5b8368ca3a87fbd4"],["/tags/RCE/index.html","7a03798e083135d3f03848bb5895ccb5"],["/tags/RE/index.html","d3988e7a8382b0615045ec6b32acca20"],["/tags/SQL/index.html","813783592892b3641074c1a673e1c59c"],["/tags/Web/index.html","3ae05584a872f07d6515d1c64da3a09f"],["/tags/Web工具包/index.html","42ea70d410f289364f24d28445e324b1"],["/tags/awd/index.html","6706c1e732b1c7fda2b62e7b8da16496"],["/tags/bugctf/index.html","5b44d0f022581cfcfb0adbba23726f9c"],["/tags/ctfshow/index.html","432dffc644586ad9b8ef322164193b30"],["/tags/index.html","4c3c02ebc43a46f095a91e6391749275"],["/tags/misc/index.html","c4a6bb0d7a6c8ae91545ab5a725fdee0"],["/tags/next主题失效/index.html","9acf1f5424b51ac2598e50e13cd9106d"],["/tags/sqlmap/index.html","b26830bc7dac3e25dcc8361d4b220c60"],["/tags/wp/index.html","5cceac8a54dce0ca1e337ddafdd37376"],["/tags/xss/index.html","21818f847163c576a85334dd3cfdcf0d"],["/tags/xxe/index.html","36567b7d6af7d99a9a1942576cfa0e33"],["/tags/不蒜子不显示/index.html","1809b14a6b80fe089345c4d280b73dc7"],["/tags/博客/index.html","a3401b1652936cb32369ac6ecb623248"],["/tags/博客主题优化/index.html","c3ecca164cc46b067851ff9519ce1b23"],["/tags/博客死循环框架问题/index.html","452f0ea5846c82aa29a263a29fdf166c"],["/tags/博客部分问题解决方法/index.html","d6a5c0027b3b9d94b77007df03214bc0"],["/tags/反序列化/index.html","f998e1961478999ce2693fe4fa2a6c47"],["/tags/命令执行/index.html","3841388fd36cae4a2f2d0d801bd792a1"],["/tags/局域网攻击/index.html","836fe0d207df8f275704139e2f2d5ad6"],["/tags/常用指令/index.html","e854929c8588a777631e98c24eb8cae4"],["/tags/心得/index.html","c0d82c0569d92abc890f153a5a395500"],["/tags/文件上传漏洞/index.html","3dbe29bb2dfbe4456d026af9dd20956c"],["/tags/文件包含/index.html","242fa1bba77c6f45b19bf59310cbd872"],["/tags/流量分析/index.html","e9a38c4856529cd8692aa6fd4149c31c"],["/tags/渗透/index.html","b1f8810d0fbe1c6fd3dad2e148695ef4"],["/tags/渗透测试/index.html","1ac2ed4cf1333a5f54dc7c3bd1319bb8"],["/tags/漏洞复现/index.html","2f509bcdbdd6f819aeb24855410ecdc5"],["/tags/留言板/index.html","7695119f66b391cfad973521f4ff9649"],["/tags/赛后复盘/index.html","5f918810481e3c66ab3bea63493d4409"],["/tags/黑盒测试/index.html","87984fd4f19b10f8b0126155b44104b7"]];
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
