/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","6f0f6cda529d245e8a4296c5b75fe1fd"],["/2022/01/11/博客制作遇到的问题/index.html","0e80945340f5ded94bdf939788f78e54"],["/2022/01/15/C/index.html","6cac993a727f0e546fcabe2f2f24d180"],["/2022/01/18/新版next置换/index.html","1b363057891bb3f512d2ede85f41605c"],["/2022/01/19/不蒜子相关问题/index.html","08f80732723a6681b95cc4a8377cc10d"],["/2022/01/19/框架问题/index.html","cfac70dddcf6a1cb43cbafac70601692"],["/2022/01/20/ctf之reverse/index.html","d75f147f943ce77184564c149b45c559"],["/2022/01/23/misc隐写题目总结/index.html","414dfe5065fbf3e2a8d0206ddf3c6eb1"],["/2022/02/01/684/index.html","5055f13fc36b9c25de302c02a71abae9"],["/2022/02/03/留言板/index.html","23699f5d6ac45382a84e9f14105d526c"],["/2022/02/04/SQL简单注入/index.html","77e96cd86780347ccf079301270a9353"],["/2022/02/05/最全的HTTP头部信息分析/index.html","21fde395cb1466fa169f805bdbe2d8a7"],["/2022/02/08/ctfshow文件上传/index.html","42ac09ad491e0b02a385ac5f36648dbc"],["/2022/02/08/常见密码类型/index.html","68d96564f07accca47955eec20fdb1ec"],["/2022/02/12/VNCTF2022WP/index.html","8501c7ee0d98a720b93a632a9a94fe1d"],["/2022/02/20/ctfshowPHP特性/index.html","87469477f041665e3057dab26ab915cf"],["/2022/02/25/php伪协议/index.html","65535e829c414e033909b55d4ac29b8e"],["/2022/02/26/ctfshow文件包含78-117/index.html","e7217624af22dff99f6419a129386788"],["/2022/03/02/Clash漏洞/index.html","b0d2edea088837a8147554eb5ec1ceff"],["/2022/03/11/流量分析之题型解析/index.html","8ca6535c64e1ae3c5bb5e27e1ecaf919"],["/2022/03/15/ctfshow命令执行/index.html","22138c1b7da1196a73e37db53a5a084b"],["/2022/03/22/CGCTF/index.html","0a7bad94c174549a665961143edade06"],["/2022/03/24/ctfshowxss/index.html","38f7e13f05b28a2814e78518879eaa07"],["/2022/04/04/黑盒测试/index.html","b9c4600076e77b4bcecfe582619dba07"],["/2022/04/11/nmap/index.html","cf899b8f3c6981a38eb5403d39b292c8"],["/2022/04/12/渗透流程简要记录/index.html","9b26c2e980f255f6c314aad827187c23"],["/2022/04/12/渗透测试之攻破登录页面/index.html","5e27881cbe93517cbbce3525d717a0f4"],["/2022/04/14/xray扫描器/index.html","3ed0ae3970b28494f9d73ef23a0e47ad"],["/2022/04/15/ctfshow反序列化/index.html","fa93c225623ca29e0e8c1aaad4c9df15"],["/2022/04/26/渗透测试实战/index.html","5e8342ed6b91aab9ea7e38956b1e8c78"],["/2022/04/28/sqlmap教程/index.html","2c854001d0610629a9584aa8f8c31c1e"],["/2022/04/30/认知文件上传/index.html","4ee924489eb441297af38d5bf70e2514"],["/2022/05/03/nahamcon/index.html","893d9491efd06032e00f79091f9baa88"],["/2022/05/15/awd/index.html","112650e1b8989af5daf700ad5fa835f7"],["/2022/05/22/DASCTF/index.html","3ac595ec924edcc5123a9523468ffc74"],["/2022/05/27/520/index.html","2dca35557e147b9563d3fa4c38c1e968"],["/2022/05/27/ISCC2022/index.html","dc0d595b2b6f6883c19f5f8cd071573b"],["/2022/06/01/第五届世界智能大会/index.html","7fc7ced6ed6e13aee1e2189c4ccedb38"],["/2022/06/04/SEETF/index.html","dd587d72b9c509e74e8681a31f19f76d"],["/2022/06/04/bcactf/index.html","d337d30a258dd648169ab2f79836c23e"],["/2022/06/05/BSidesSF CTF/index.html","a998b73253186d2106115d23ae9182a1"],["/2022/06/07/Docker部署web题目/index.html","97b24a7944196b76fc314a60684a3b6b"],["/2022/06/09/利用oj搭建C语言考核/index.html","b99a8a5e754ecd6509c52be9cd13e0f7"],["/2022/06/13/限免题目/index.html","d27e24d90cec051707cfc320bf624e77"],["/2022/06/14/钉钉rce/index.html","b8c6177f3ed2df2f8d2f4af948a05e3f"],["/2022/06/16/内部ctf/index.html","6e6c313cf9606746447d8232147c8a2d"],["/2022/06/25/攻防世界高手区(一)/index.html","0c84f00945078dcbe2b8533ad37291f7"],["/2022/07/01/两小时AK赛/index.html","043878fa1dd4db99612df73f0a68b581"],["/2022/07/03/鹏城杯/index.html","3737eb77073a1fbeec3cd81d3d3e5817"],["/2022/07/04/XXE/index.html","4ba73b872454a6cbe545fb8ed37b7f07"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4b55a3911af4c88b5c42ecb8cab9832f"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","fcefe6aa51df4498f5f67e50dbe48fdd"],["/2022/07/08/chinaz/index.html","940351d26a935a1fc95b1da14d9cba99"],["/2022/07/09/蓝帽杯初赛wp/index.html","94d65f831c5946a31c706e99b6926011"],["/2022/07/17/NepCTF/index.html","3d0380e36f977317efd74407af6e5d91"],["/2022/07/19/2022ImaginaryCTF/index.html","b7cc83fd64c03daab833c474752261a4"],["/2022/07/20/局域网攻击/index.html","55a598b74b32ff401ae827f52b105635"],["/2022/07/22/2022BDSecCTF/index.html","c49cf1b804e2d886a366617f558eece8"],["/2022/07/25/DiceCTF @ Hope/index.html","118647ae0f9df360e16d0df388bc3c2c"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","82e49585324a405cda1bb126c930844a"],["/2022/07/31/TFCCTF/index.html","6081a49d154df6cc37282dab8f5ebc4d"],["/2022/08/03/NSSCTF/index.html","0edd6fd9247acf86180db01a0d351e6b"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","456aa00b44f554d71b85b6104d6a052c"],["/2022/08/12/T3N4CI0US CTF/index.html","f31b378e361a05c09750fae4cd48d1ad"],["/2022/08/14/SHELLCTF 2022/index.html","c994c49361b2d221b1f19ae51fbada15"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","be6bca7ab578cd3f93110f482b738013"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","90c54a103af76c0eb97fc4cd1647ef29"],["/2022/09/16/柏鹭杯/index.html","90b0e94d6f4791c629fcdced92cee93f"],["/2022/09/20/HUBUCTF 新生赛/index.html","0d0f3ee25b392ea78e1ee21f19a9bb1c"],["/2022/09/27/NewStarCTF/index.html","cf738b8c7b76dffd7efc5e68ac2d1469"],["/2022/09/27/bugku渗透1/index.html","9b06286319ac297f1c674fb609a087c1"],["/2022/09/29/tp6漏洞/index.html","b0c39fe27725d166af30d6363069ac6a"],["/2022/10/02/SWPU NSS新生赛/index.html","bd21a82b2b040aad99a7694dde8b319e"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","ffd5a05ea106bd8c2a800a275eeac5a2"],["/2022/10/27/Moectf西电CTF新生赛/index.html","6377f7c8c3bc00b1cf7aa237e19fd6fa"],["/2022/11/02/HNCTF/index.html","85ac33d1b847feb07b21b633f4f44f67"],["/2022/11/04/2022工控CTF/index.html","754f0d19e265a9eb3939d504125289dd"],["/2022/11/21/极客大挑战2022/index.html","b2a69f861b8e74326a27a538730e22e2"],["/2022/12/05/TUCTF 2022/index.html","fa8bd65f4d3ba4b3e3f124145f42e89a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","a15413eeacc231f02c3fb46ac297c0f9"],["/2022/12/18/金盾2022/index.html","55cfc4d81e0a3352f9130974a21349f5"],["/2023/01/01/CATCTF/index.html","303f12f60672ce6b0a4fb92e1c406360"],["/2023/01/09/RW体验赛/index.html","45777864df71293cd72e0df58fd62fbe"],["/2023/01/10/铁三/index.html","f8ae31d1684b232dc24d1bbf36ef31a7"],["/2023/01/16/Ugra CTF Quals 2023/index.html","342258874b6f58d41b1d329c9f6523a2"],["/2023/01/18/山石2022冬令营/index.html","242c0860d51a04310b36626abdac08ec"],["/2023/01/19/SICTF/index.html","38706299326cafca12c28b4312f83272"],["/2023/02/04/2023西湖论剑/index.html","101f72bdbc21d6d3e4dc1074816abb54"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","865e7f1371ca953d1b6e2936e1b06d36"],["/2023/03/04/公安/index.html","6f8b96000f3ced95e9c72c81b0c564a8"],["/2023/03/07/mysql之udf提权/index.html","d63d6c5182d0589965809bc682d51801"],["/2023/03/07/红日靶场练习/index.html","5b3964ebd250c0a85cd90818a2f11186"],["/2023/03/27/NKCTF/index.html","a7841bc01159e6214b1f721235729feb"],["/2023/03/31/楚慧杯/index.html","8c4b987c51917090a15b367203d58487"],["/2023/04/23/HDCTF2023/index.html","945505126585cbef1d5a674b30a666d4"],["/2023/06/01/2023CISCN初赛/index.html","c1df7ec1f8c5fe6fd10201a58bed06a0"],["/2023/06/28/2023CISCN[华中决赛]/index.html","072eb08e8de4c26dce09a65646bfb39a"],["/2023/07/10/CyberSecurityRumble Quals/index.html","aec0ee0231c3e3afd6ad6e997f3a095c"],["/2023/07/22/2023BDSecCTF/index.html","9efc1ba96588e201eab54133c62d89d5"],["/2023/08/07/SQL手注小记/index.html","ae4defadbe2754ea6f5cb09a98642ebe"],["/2023/08/27/2023陇剑杯/index.html","3142e3d133e1c1a61dd2b0cb89170749"],["/2023/09/17/2023蓝帽杯半决赛/index.html","5a587fde013381f6ce94a0a3aa057f61"],["/2023/10/23/对于多层代理的研究/index.html","443b97fa1957aa384fe6725a874aff4f"],["/2023/11/25/金盾2023/index.html","b574afadc2e9d776f44b82e44bc984ba"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","eafd32f0d50ea71c5286f7c2c59dcd2b"],["/2023/12/18/2023强网杯线上赛/index.html","c9a1523cfc707aabbddd9549afbb1e4d"],["/2024/01/08/基础ROP/index.html","3cb41672437daa08fd0d927a11c38678"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","5777a774d697ff69e9f4ce3d3a206f39"],["/2024/02/13/打靶-Tr0ll/index.html","79282d114179659ee5938a1b526566b6"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","798521316125f38e1ed44e136358d19a"],["/about/index.html","274fe2d49c8f77e32567746595f34f64"],["/archives/2022/01/index.html","34b6c1bc6e212365520522cb95a3156c"],["/archives/2022/02/index.html","10472e5df033050501cb99226fe2f16d"],["/archives/2022/03/index.html","8dcf88fff7804a09374604b047f4827b"],["/archives/2022/04/index.html","4b0b71ba9a5e4fd79b4efe9a78ff09c1"],["/archives/2022/05/index.html","86baf1bfdcf17987bec403aca8127e66"],["/archives/2022/06/index.html","95b5194bb87e7d96075d57f575d4bd07"],["/archives/2022/07/index.html","0f0a6977cf210453f9d0857405c2c10a"],["/archives/2022/08/index.html","07da07c33f7ac03df85c3be207ffbda8"],["/archives/2022/09/index.html","b6feddcc0541dc23c16372da38bfd8be"],["/archives/2022/10/index.html","725582b3dfea3d94df932243eca1964f"],["/archives/2022/11/index.html","afff607c22e7dff5d7d17318e1cfdb13"],["/archives/2022/12/index.html","a424fbb1390ce88459b4ffd77964899c"],["/archives/2022/index.html","94e9f2bcfbc3a782c91127f40d7d85a7"],["/archives/2023/01/index.html","c2ae52826cd6bd3f1c4d49fb6f60f9be"],["/archives/2023/02/index.html","01cc5ca06a1761c600f92ec6ee132a1e"],["/archives/2023/03/index.html","717bc2d5384cda1d6395f469087d2d79"],["/archives/2023/04/index.html","5049cafb845fee92cef6a3d7c8f6a07d"],["/archives/2023/06/index.html","1d196dbc4049083949a57c4ac0edc0b3"],["/archives/2023/07/index.html","769f93c853423b885f6bae33b3ce5e18"],["/archives/2023/08/index.html","03e9d43397c617c0473d1a02f39e7c92"],["/archives/2023/09/index.html","10919a2c883ca47e93e09b5be88d3201"],["/archives/2023/10/index.html","560ee951a35255db341f28c5974a3289"],["/archives/2023/11/index.html","2f79074ed6435153e11cf1e68d716120"],["/archives/2023/12/index.html","015d8e6fbbf59f37ef82d7ad9724bf13"],["/archives/2023/index.html","36bd9fb6bee90fb7eafa5b8a62a123e7"],["/archives/2024/01/index.html","fb0753b5284cde8fc513222e20daa22d"],["/archives/2024/02/index.html","1eaafde9cd1e222576bf936e0d96b66b"],["/archives/2024/index.html","24fe1dbef0d9e49fcfd479f250892ac4"],["/archives/index.html","143855c714117004f8930ffd03d47629"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","171c5c899237e491d86a054b75174106"],["/categories/CTF/index.html","c5d3a04e50957026b7f2b18ce32d1b69"],["/categories/PHP伪协议/index.html","511851072f440f52443e9d4aa953debe"],["/categories/PWN/index.html","b2eabfae72cd5c1ea7ec0481bdc74cb5"],["/categories/RE/index.html","8e541bc7445e55fcb42377301ba730e5"],["/categories/Web/index.html","bf33f52efb44114ad1d284d0e90778b8"],["/categories/awd/index.html","e1c056923ce2df4ffd98b1c2340a5b3c"],["/categories/index.html","ae0d4ae3b0c5550a36b6e2083d251213"],["/categories/misc/index.html","616017369813b21af0e9fbf3e2eba9a8"],["/categories/sqlmap/index.html","61bf4e5d9d4f63b4dc1930bdee15c818"],["/categories/博客相关问题类/index.html","bf6e84fbd22e9e58d0d9cd4472181384"],["/categories/局域网攻击/index.html","593bb2b25c3d6fd5c6aaff114e7d4d6f"],["/categories/心得/index.html","f772db87dc046ff0c96041f5a145a766"],["/categories/流量分析/index.html","8b6881ee764aecb204614c9517a38174"],["/categories/渗透/index.html","6399417552093da3f8c61ecc06f16e74"],["/categories/渗透测试/index.html","089d2cab7c8d7a9c1a0806d8454d18fe"],["/categories/渗透认知/index.html","3afb447523f115789fbabeff980e43ac"],["/categories/漏洞复现/index.html","36f07624fbedf78bdeba66abb38a2012"],["/categories/漏洞测试环境搭建/index.html","b33c0c48e69da8dba23d5476d1a2fef1"],["/categories/赛后复盘/index.html","a358f37a72b416fdf01f0b3b4fa2d974"],["/categories/靶场训练/index.html","03c5fe7ca7b4d09c9e0cde8ad3d85f38"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","962572b5cd51c314099f715e1102d582"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","021cd0eccf8692a346018537c6206e37"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","9e9955f562cbbda3590b56494199b4fb"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d212cda06ecbb3b61d3dca7f346559e8"],["/page/10/index.html","6bb2dd43a7b9535a3fd729eba9449742"],["/page/11/index.html","6d0d62cb4d75c81830f8416867ae0c56"],["/page/2/index.html","af293d6893ff0cc589ca77bf279a8ffb"],["/page/3/index.html","98129ada0045a8f934fed83a9fc91247"],["/page/4/index.html","8eebc5022c7caa75a4f843014c636d68"],["/page/5/index.html","58eb5f4a3a14b53a1bdd368c66a92acc"],["/page/6/index.html","a04c43c53da3b9cf533889051f9601fb"],["/page/7/index.html","0bb2e78b3dd53f8db2a2f0e930cdb0c6"],["/page/8/index.html","3a9bd836089a7f4faf5469fea6bf5631"],["/page/9/index.html","2eef9c47007614ebd785c7376a9197a4"],["/sw-register.js","f172aae2cbbbbf144c7e3dbc27e9816f"],["/tags/C/index.html","cf0e5ed060800bbf2f9414645da6e102"],["/tags/CTF/index.html","83cd65d36dadb99000305d47c5f2e040"],["/tags/HTTP头部信息分析/index.html","b649bf9159aea2f3ccb60cb6f1254c21"],["/tags/PHP伪协议/index.html","04760cc8b17badb7b541ff387d8c8caa"],["/tags/PHP特性/index.html","823a001d985032d50bd03c7a8f01126a"],["/tags/PWN/index.html","22519dffc75a02e1fa78476749d260f8"],["/tags/RE/index.html","bcef2e501ff0499fe381984eba9b400a"],["/tags/SQL/index.html","2cfafc60928571f396669a6896a41ee7"],["/tags/Web/index.html","4e87566ffa0bb818460d8491cd02ec3b"],["/tags/Web工具包/index.html","1cdf30ca970aae6937ef0f3468c3a323"],["/tags/awd/index.html","521c8517a65bfd94a3cc03e270cdcb8d"],["/tags/ctfshow/index.html","c918e614b62ef72c94e9d0d7f3d50c2b"],["/tags/index.html","dcc73cedb252e93609e84280a1dc971f"],["/tags/misc/index.html","4b658787a288714c5965546be20d4e34"],["/tags/next主题失效/index.html","2e7df75f22386b3446b8c5e764d6108e"],["/tags/sqlmap/index.html","7073f5a1026c66c0cd511fff9224f248"],["/tags/wp/index.html","acd8d20edb2af3ade93386281b5c9ccb"],["/tags/xss/index.html","845b0101b457a753e4f3c63ceaf8c4db"],["/tags/xxe/index.html","fbc760afa1399bb4d9fc0f3879a2560a"],["/tags/不蒜子不显示/index.html","ba03b7ff8fc2a89051ca84c92383221b"],["/tags/博客/index.html","c30a217ad6c02ea50b44bb1b9b02d7a1"],["/tags/博客主题优化/index.html","64c61fdbf76556d62145e88fdfe96629"],["/tags/博客死循环框架问题/index.html","ecf3f7e285da99373169698b3e24f280"],["/tags/博客部分问题解决方法/index.html","de8dc6c844bf704e52834652e227985d"],["/tags/反序列化/index.html","ba8ae6d4979e1164cb6fbc830bab57c0"],["/tags/命令执行/index.html","c5a331a29d87902675714560083fc608"],["/tags/局域网攻击/index.html","8979b06bc840de07f7bdbe03a715a8b4"],["/tags/常用指令/index.html","530326c648106c9e488bcffbe356fc06"],["/tags/心得/index.html","92a797427689af3289a6ed3a33faf497"],["/tags/文件上传漏洞/index.html","c312352120b5dfc89fecdc547217cbf2"],["/tags/文件包含/index.html","97cac76abde2141e6570e4d6fbb681a7"],["/tags/流量分析/index.html","f61be6470609f699dbfc8ba9471ed332"],["/tags/渗透/index.html","7115731b3e25581881443cd4edc8f44e"],["/tags/渗透测试/index.html","0df88c2b0614ffd71150cfff5fa5d5fd"],["/tags/漏洞复现/index.html","a61c164a3e794cba23df4d12807ff498"],["/tags/留言板/index.html","08c8f80e0da9139eb37b92054e9656f3"],["/tags/赛后复盘/index.html","80396614a559ad34e8e01e39070b92af"],["/tags/靶场训练/index.html","7cd251234462f7f6c73b2be1e41e798c"],["/tags/黑盒测试/index.html","b09fccff44e2df01b3befd7460d6ee0a"]];
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
