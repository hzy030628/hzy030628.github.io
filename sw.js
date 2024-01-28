/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","d16368cb7da2378f658e24c025aa373a"],["/2022/01/11/博客制作遇到的问题/index.html","0fd73fd54735625c395f27643c8f7237"],["/2022/01/15/C/index.html","cbcf4a620ce4f572e0bff53b5a666b0a"],["/2022/01/18/新版next置换/index.html","41ab217d7fa5b0d30444c2acadd8e99a"],["/2022/01/19/不蒜子相关问题/index.html","17cfcd66523753dcbb66fff6bc0269c7"],["/2022/01/19/框架问题/index.html","9f656590cf0bb44a1a0c5160e96b36fa"],["/2022/01/20/ctf之reverse/index.html","1824ec782251bef9337a6828bf0057fd"],["/2022/01/23/misc隐写题目总结/index.html","bc0e28ce23ff15f46b6b9c7066768efd"],["/2022/02/01/684/index.html","69c51c6239c601244e9b23cce31ec551"],["/2022/02/03/留言板/index.html","b614ec4bcdeac729b4defafd715866bf"],["/2022/02/04/SQL简单注入/index.html","81b9c6d5e119fa32e6994f82dbe8e387"],["/2022/02/05/最全的HTTP头部信息分析/index.html","0b5cfa5072346cc5095e7025d5ec8637"],["/2022/02/08/ctfshow文件上传/index.html","3399c24b8405e6bbf141b2e08812ad2a"],["/2022/02/08/常见密码类型/index.html","dc0335a8ddbc766f96ff4a16a8cd4971"],["/2022/02/12/VNCTF2022WP/index.html","f8d0fb86832b47e7a386fcad44085fce"],["/2022/02/20/ctfshowPHP特性/index.html","b1ec12956f38edb0f88408a63e780e15"],["/2022/02/25/php伪协议/index.html","40a2752c3710092ce16d0d23fc945af9"],["/2022/02/26/ctfshow文件包含78-117/index.html","98733d96f935ddc1e5b4c95388e34de9"],["/2022/03/02/Clash漏洞/index.html","ac81fa1db739959564f6b60dd443efff"],["/2022/03/11/流量分析之题型解析/index.html","f1e744355cfaa17a871cd7ae3d5e2e56"],["/2022/03/15/ctfshow命令执行/index.html","b839509978bc037dd0e772ed0e5b95ee"],["/2022/03/22/CGCTF/index.html","ac5abd51e73efd31b623bbb25dbee3bc"],["/2022/03/24/ctfshowxss/index.html","dca283c62722707ae9cea00c426deb23"],["/2022/04/04/黑盒测试/index.html","2f1938dcabfe2f8b866e4970c982ab44"],["/2022/04/11/nmap/index.html","e43764d851b4eb99190dcb99303c7af0"],["/2022/04/12/渗透流程简要记录/index.html","681b69bfdc2487c1b72aeeadd246eaad"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a01fcde9cdcbd9d77af137ba84e93ac1"],["/2022/04/14/xray扫描器/index.html","17948690993bb7c5be7aa6a8e20d8bbd"],["/2022/04/15/ctfshow反序列化/index.html","5bd766ecb9479c9e7a37d4d2aefa83d7"],["/2022/04/26/渗透测试实战/index.html","8b3495c807e6d34804a678ce18595a63"],["/2022/04/28/sqlmap教程/index.html","88371de327804c82cfaff3f491028ee5"],["/2022/04/30/认知文件上传/index.html","5a0f690de7c17ae61baf33ed7110372d"],["/2022/05/03/nahamcon/index.html","0533cb2eb377c1e88f09e7733000fbd7"],["/2022/05/15/awd/index.html","ce67db0abadd585f174b9b032f6b7543"],["/2022/05/22/DASCTF/index.html","59e830bc3d2c026eb6a3a377c763676d"],["/2022/05/27/520/index.html","e3cfc3e36fa37f49626f58b04d0b1b16"],["/2022/05/27/ISCC2022/index.html","8219a70f6a9f517121683a9797378cd2"],["/2022/06/01/第五届世界智能大会/index.html","ca2ab9bd8712f7c3dad31df69936d2ae"],["/2022/06/04/SEETF/index.html","a919e1b4553a486a9753258b3f106925"],["/2022/06/04/bcactf/index.html","7c8a15b53250908e4d24f3420e6ef27e"],["/2022/06/05/BSidesSF CTF/index.html","aa54dc7ff37d67b08e6a78ec4c4bca70"],["/2022/06/07/Docker部署web题目/index.html","5079ee46c8f4ed5cf82cee2c4be9478f"],["/2022/06/09/利用oj搭建C语言考核/index.html","b3a2b15872e4866a5b5bbcc948637160"],["/2022/06/13/限免题目/index.html","881d58bd003af2fb0d622a50c123762f"],["/2022/06/14/钉钉rce/index.html","def2e1770bc4b22c5432367cde598c3e"],["/2022/06/16/内部ctf/index.html","7e045c71c4287fa375567809790c9513"],["/2022/06/25/攻防世界高手区(一)/index.html","12b370bdffc664226bec84cccf43bcf7"],["/2022/07/01/两小时AK赛/index.html","8281890e9764836e5ad554ff00a55810"],["/2022/07/03/鹏城杯/index.html","ff55503237bb4b5bb80eccd2a0ef3fdb"],["/2022/07/04/XXE/index.html","29a61b433213b21063bb461c3a4c4b89"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","8e5e503b158a1cae1de848b3d9680413"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","f7f012d433f1aeb03bf90ff206d844fc"],["/2022/07/08/chinaz/index.html","9fe4ac13225209c6c2e0b5ae9c212049"],["/2022/07/09/蓝帽杯初赛wp/index.html","45ab7cd2b5089b672aaf996203150245"],["/2022/07/17/NepCTF/index.html","a4da71fcf5914bc4a414a5cb2117717b"],["/2022/07/19/2022ImaginaryCTF/index.html","f6547851e7a9b9193c2b0bc5f2434345"],["/2022/07/20/局域网攻击/index.html","76a821b176c9bbbb2ef50cff943e7301"],["/2022/07/22/2022BDSecCTF/index.html","a87eae2737b38f075f4dc07c086841e7"],["/2022/07/25/DiceCTF @ Hope/index.html","4555891fe107234cc12a8247dbffada9"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","7e2176c4bfff73d2fd5f2bdad2f618f5"],["/2022/07/31/TFCCTF/index.html","a88aae0d118ae5696c04939a032b882b"],["/2022/08/03/NSSCTF/index.html","9110c764e576980b9634f2023ef1fe00"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","ca5bd94ae71aee962988cb05982e7c95"],["/2022/08/12/T3N4CI0US CTF/index.html","a87138137f8f0b732d747ba559d15c3e"],["/2022/08/14/SHELLCTF 2022/index.html","8e8ff096ce03a8e55ce5b808d32b99f6"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","e489c3e9172a3701cd059568e5891067"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","88ffed285dbeef5cee4fee5b02ed3daf"],["/2022/09/16/柏鹭杯/index.html","6a4a7a3a735a26c7afd2239a9dc5c844"],["/2022/09/20/HUBUCTF 新生赛/index.html","0359b32fc7f8b8a2b50a27bc2893b601"],["/2022/09/27/NewStarCTF/index.html","5d50b4e0c05dea85d60087064f3fc04f"],["/2022/09/27/bugku渗透1/index.html","f63d68a285721e92c3459959adcb223e"],["/2022/09/29/tp6漏洞/index.html","e62b48610b2aa6e2d7e62ac97f53fe95"],["/2022/10/02/SWPU NSS新生赛/index.html","cc89f005fbb5ae216f32f76f60b1551a"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","0656c36060bedb2a7c2b828100d3761f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","7efc1533fcded9bc2b862ca0efeb45b3"],["/2022/11/02/HNCTF/index.html","ed6a4beee649c077831e337c295e3393"],["/2022/11/04/2022工控CTF/index.html","bd983b8796923cd719bf41a2d4b4fbd6"],["/2022/11/21/极客大挑战2022/index.html","83b892c63152a75d0eca8abba0813875"],["/2022/12/05/TUCTF 2022/index.html","ccb36b141594c22b00e719d9a03bb461"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","3540ae6c0bb76130e27ab69bc77f12a3"],["/2022/12/18/金盾2022/index.html","1bc61c166961fb633d9e1f9ac6534cb0"],["/2023/01/01/CATCTF/index.html","45fa16e8364cf23f55b63524f9117c4d"],["/2023/01/09/RW体验赛/index.html","8d2e340658343b1628a8725ac22098fc"],["/2023/01/10/铁三/index.html","c5a76cce411d210bc6ed12f5be97e712"],["/2023/01/16/Ugra CTF Quals 2023/index.html","f215b74e2195433270782660c701a9a9"],["/2023/01/18/山石2022冬令营/index.html","9600c31ad71455d00b35801e948e345c"],["/2023/01/19/SICTF/index.html","966432c407ceb019783d517c7b4f2301"],["/2023/02/04/2023西湖论剑/index.html","97422a8a73469e6c0bf019b1d737a59d"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","d53d0c7f14cfdba56f83b0c37106b882"],["/2023/03/04/公安/index.html","ba271fff36cb428fb3e7898a24bec4e1"],["/2023/03/07/mysql之udf提权/index.html","46be4cc5276f5249879bb54bfe81f072"],["/2023/03/07/红日靶场练习/index.html","43c6574279910ee94e4e32cb258b3774"],["/2023/03/27/NKCTF/index.html","6e587bfad2ce7ec64713c49f0499c221"],["/2023/03/31/楚慧杯/index.html","91760a4fd5e7a56ca5ec07cf5ebb5cc8"],["/2023/04/23/HDCTF2023/index.html","a5f08f5b57f73065a1bf28182e15ebce"],["/2023/06/01/2023CISCN初赛/index.html","eefeb97889350edca594298c852cab90"],["/2023/06/28/2023CISCN[华中决赛]/index.html","ee65a851d75bb1477c194976e0baf10b"],["/2023/07/10/CyberSecurityRumble Quals/index.html","bc5e3c494889fdc6f74a56e97a2930ba"],["/2023/07/22/2023BDSecCTF/index.html","9380b839a54262279f29dcadf91b8b17"],["/2023/08/07/SQL手注小记/index.html","31b8d6084c1d1f8e5136a563a2be478e"],["/2023/08/27/2023陇剑杯/index.html","9943fb9c49d644982bd989ddb5d6651f"],["/2023/09/17/2023蓝帽杯半决赛/index.html","3eb7565ef8eab95c888e798760cd752f"],["/2023/10/23/对于多层代理的研究/index.html","99720498d66a61ef5f4df62f68b6f4d4"],["/2023/11/25/金盾2023/index.html","01e23d07f1ea43defa9c86a7407d32a0"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","3d8bd816963f2561aa52cdb3120f562e"],["/2023/12/18/2023强网杯线上赛/index.html","e0c08e08459d7cb18c61ba6bf41e542f"],["/2024/01/08/基础ROP/index.html","8baae1fcd1d4d2f9cb56a19659d7af19"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","c1edffdf34eeb9ad667661d21495583f"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","06432f772bfa65fb9347c57ff44b824a"],["/about/index.html","879d34893e6ab5f589f5696526d7eeca"],["/archives/2022/01/index.html","c11789544218dfcb0b439b9ccd7e6012"],["/archives/2022/02/index.html","45320bba291564590ea99be57d7dff75"],["/archives/2022/03/index.html","6d36cb03648b3d7dd1eff3dc23529d06"],["/archives/2022/04/index.html","d49947a5f03e6e8c69b3479459591bba"],["/archives/2022/05/index.html","8b3d97c8d4ebfee646a530682a890369"],["/archives/2022/06/index.html","7ec49dc0f918ed352d9319ce49315ca4"],["/archives/2022/07/index.html","7ded26dd3ec9d277a5dc13191505bb99"],["/archives/2022/08/index.html","f1f77c859a2faec68471b74ee573b3b0"],["/archives/2022/09/index.html","aff288de7866404db61164b1195d5451"],["/archives/2022/10/index.html","e6bc075538e4705bd3d7c5c1f52c9051"],["/archives/2022/11/index.html","1d515df099febb333de0fb7fe3f7e04a"],["/archives/2022/12/index.html","c7b3e9304ad7975881013d0714e81969"],["/archives/2022/index.html","f35cd6e9ea6379956d58d9b9fa4a8ca1"],["/archives/2023/01/index.html","40aeb42f74d67a7c13fdbaafcaad3cdd"],["/archives/2023/02/index.html","3bbf854f83c2cbb30c0fc21559d08c82"],["/archives/2023/03/index.html","35a80554d6c705828468d68b93865b40"],["/archives/2023/04/index.html","5a4af14029631bd626b9e2e22c28a334"],["/archives/2023/06/index.html","9f26ca2e9d4bd5cbf65fb01b8827d961"],["/archives/2023/07/index.html","66cb5cad45daf5d8c0ca74e3e74a0360"],["/archives/2023/08/index.html","d32a0395f5e2b53242d4680a4783b376"],["/archives/2023/09/index.html","c266f6a525226a04c1b60d2ebb9f5dca"],["/archives/2023/10/index.html","3b254c6f649232b1d9bc5a06f937d9be"],["/archives/2023/11/index.html","425cf7f0e600d9cc99c4f8914ff135af"],["/archives/2023/12/index.html","98b5b3985f431236872133a13c30f845"],["/archives/2023/index.html","4c25f193fb5a34a7c082cdec45f25e09"],["/archives/2024/01/index.html","d790315ee0a9d68bc3a40db1e34dc8e0"],["/archives/2024/index.html","a25cd67944b38b3665becd1a5535c326"],["/archives/index.html","b15f8345cbe7670edf174cd84b7da08c"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","ff02d75c8840f5a32aef48f3ba774537"],["/categories/CTF/index.html","5a5251dc0ac8018e5feb31d1b894b302"],["/categories/PHP伪协议/index.html","e2985ba1251c520ba1bcff0757868db0"],["/categories/PWN/index.html","02b01904597f7a02ed1791cb3414b4fa"],["/categories/RE/index.html","079d677cc8579f67b2b13c6c5afd0d25"],["/categories/Web/index.html","e29e191c83e6d4938afc7639e42967b0"],["/categories/awd/index.html","9a15ebbab540d4ade59e175b0a0ad026"],["/categories/index.html","80a840b90f2f2944f1ceba484204ddca"],["/categories/misc/index.html","a2b80dd95dd3ad0ff79175d246ee5c77"],["/categories/sqlmap/index.html","f8572b9ee2908ea0f3af2a44fd7d9d52"],["/categories/博客相关问题类/index.html","0ca5f1ac1b52263f7d1c4627c018af98"],["/categories/局域网攻击/index.html","85ffb4d081a5ca5d086b0f6d72930fa2"],["/categories/心得/index.html","21034b6614735c5f080d01d7c2cafc84"],["/categories/流量分析/index.html","0c545b728a5de55d84cc361ad85e14e8"],["/categories/渗透/index.html","c7c956b4f62160a1e9400ec80f51f318"],["/categories/渗透测试/index.html","949f383563d7a8c66869742551c97984"],["/categories/渗透认知/index.html","1aa4cb2afc4bc60579eb6f80406f7f9b"],["/categories/漏洞复现/index.html","8ceaadc93e4992c6374e998fc4defb52"],["/categories/漏洞测试环境搭建/index.html","50941c4b9d141c38d58ad64704d5f43b"],["/categories/赛后复盘/index.html","a0a9d46606d800fca1f58f66b5d4d85f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","69c06fbf1e975fe5828e83392f41ae7d"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","cd1674d2fe1ed13d77372a41c70a7ee0"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","81f8993fa5166324d3003cdcaad3f6fc"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d37ad55165adfefcff0584180005234f"],["/page/10/index.html","bd2f15acd98890f82899daccfe391a48"],["/page/11/index.html","99b713f73790098d25af0746187757b3"],["/page/2/index.html","eb96d0c342d835488329a11acdc090e2"],["/page/3/index.html","84a9c886df90aa8103a8afdfcc112f2a"],["/page/4/index.html","00f2cbb41ad9fa0f6fbdeaa97b11a301"],["/page/5/index.html","4625bb0c96d5b08e0d7baac92ac1cc13"],["/page/6/index.html","20bb70752a5d4eaa4c7b0277fc619e88"],["/page/7/index.html","3187b79d2db0ba24b8d8dc33580d4ae5"],["/page/8/index.html","e3ae4a1afb6cf76339ee3c12b7d8d754"],["/page/9/index.html","80cf80f7b952103d04e8cb19ee898f83"],["/sw-register.js","743f376c56a4800a9ced970d9eb81dbd"],["/tags/C/index.html","77c30f2793bc06b9cf589a346cb5978e"],["/tags/CTF/index.html","fb13bbd8585b659823a7a3891718386f"],["/tags/HTTP头部信息分析/index.html","2e118d7e4ae7b011799efa43c411fea1"],["/tags/PHP伪协议/index.html","81be1d7758d7f49ae928ccaf8e7eddb5"],["/tags/PHP特性/index.html","5f0ad31078e998ec01208f606d9acedd"],["/tags/PWN/index.html","d611bb86558c507d5cd44359605c7814"],["/tags/RE/index.html","e56506d5292b8cb14e75ccf7a9958166"],["/tags/SQL/index.html","77b37c8d2331a39c9966b292ca69dd69"],["/tags/Web/index.html","db13aefaff6afa18bb0f28ccdcef599a"],["/tags/Web工具包/index.html","1c937383565bcfbef774170adc82be31"],["/tags/awd/index.html","6197b8a0d7d49d9e2ea6277dd61adc65"],["/tags/ctfshow/index.html","677508aa1e364798ec8ae0fe1ea0b236"],["/tags/index.html","eb5aa8e30d3ca8b098df1ef06c5e73ca"],["/tags/misc/index.html","145c508afebf816fbf2393e41ef9f191"],["/tags/next主题失效/index.html","14e60758bc56f7a61bcd2fe4ac353f35"],["/tags/sqlmap/index.html","491f544319de26ef92b14deecb6351b8"],["/tags/wp/index.html","ae61426209ee2735c964aedd97788629"],["/tags/xss/index.html","4d6a56166c8c780b2d77699323d76ee0"],["/tags/xxe/index.html","b7ff90d3868772675c9c0f9b55d34173"],["/tags/不蒜子不显示/index.html","65d19fa02ea32a0942ef0876bfbeb5f1"],["/tags/博客/index.html","9840d6d910a2d2b4022e88245ac820ec"],["/tags/博客主题优化/index.html","365fb74e45cf42d5f6bfba21b7e97f20"],["/tags/博客死循环框架问题/index.html","0b26edcb33df6c07126515a7c2c9b501"],["/tags/博客部分问题解决方法/index.html","498b9fd90001fbb5cd4da1f3fdda83b5"],["/tags/反序列化/index.html","0fe5b1039094cb029652d5937f392a8e"],["/tags/命令执行/index.html","cc84320576818d0a414e68f70d61964b"],["/tags/局域网攻击/index.html","7e19e8ea325561617b3f20d4ae3d7215"],["/tags/常用指令/index.html","25518bc004fba9240e42e093fbd069a4"],["/tags/心得/index.html","af9d4a7944d554753b1e8c69fe0ac31b"],["/tags/文件上传漏洞/index.html","2358e92e2c55c52f18c9ff8640f71702"],["/tags/文件包含/index.html","89c4c439715db411a2616f133945ba69"],["/tags/流量分析/index.html","e4ef305a6076b16f2e57cc785a92e87f"],["/tags/渗透/index.html","0dc211e3342d9c64dfd2ef6e48979ff0"],["/tags/渗透测试/index.html","ed789db39b3bf1c233f9534b91fd923a"],["/tags/漏洞复现/index.html","e378887e0af8eacd68bb3e37c67f6f26"],["/tags/留言板/index.html","101920aa7f3ecc9abd0f980543f89bb7"],["/tags/赛后复盘/index.html","b8cd28152e952daa29342467712c4977"],["/tags/黑盒测试/index.html","bf16ea0db1e29a85c18d775550ec6556"]];
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
