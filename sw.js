/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","2cc5d2ba519ee11be3179fed1d481f16"],["/2022/01/11/博客制作遇到的问题/index.html","60750aa4915f0dca6a34d09ea1191df3"],["/2022/01/15/C/index.html","155fc8616b3520b733a0679a2c9dddde"],["/2022/01/18/新版next置换/index.html","fb79b50ca4b76aaeba44eced84a45fbb"],["/2022/01/19/不蒜子相关问题/index.html","4f038495797905fa8bf32d01df5645e0"],["/2022/01/19/框架问题/index.html","dd46296595f4662a6790a3961e1246fa"],["/2022/01/20/ctf之reverse/index.html","12c2401d24697bac1fdb7a6ac6b1b492"],["/2022/01/23/misc隐写题目总结/index.html","4b5ed2eb80c6a7ba2ba4694763c18e7e"],["/2022/02/01/684/index.html","50636e1cd2afe11a75c2d560b3cdbb27"],["/2022/02/03/留言板/index.html","34f2ae32f63fb034559f084ac3534b7e"],["/2022/02/04/SQL简单注入/index.html","537963ffdd56590f7079b9fe0d3d934b"],["/2022/02/05/最全的HTTP头部信息分析/index.html","960629bfa74ee8b8635a7626c6095a43"],["/2022/02/08/ctfshow文件上传/index.html","7d9e491975f04af2a8b2c5866573de24"],["/2022/02/08/常见密码类型/index.html","c79ff69245e4dc1fd1c0160e1cbc229a"],["/2022/02/12/VNCTF2022WP/index.html","121cb176f361a54431127f1d04fefa18"],["/2022/02/20/ctfshowPHP特性/index.html","81153532e9d226639d8f11f8069cd165"],["/2022/02/25/php伪协议/index.html","bf51526ecc973dc12987e60f2d8d5f49"],["/2022/02/26/ctfshow文件包含78-117/index.html","07c572aa2aa64e509a8fb2b66a84f26f"],["/2022/03/02/Clash漏洞/index.html","2a2417d8abdaf52e02aa18f2d288d342"],["/2022/03/11/流量分析之题型解析/index.html","e55aff786227fd4dc5feafbee9002fdf"],["/2022/03/15/ctfshow命令执行/index.html","670a5d5bc049cf554ffdb301bc8352f6"],["/2022/03/22/CGCTF/index.html","db49ce3330e840e3833897a3bd51cb3b"],["/2022/03/24/ctfshowxss/index.html","8398d6fc427baad7d9f8442e00ba25f8"],["/2022/04/04/黑盒测试/index.html","843fa060914f843e37d33148d1cb5018"],["/2022/04/11/nmap/index.html","423ea96c5b390aa9db1763116a81e584"],["/2022/04/12/渗透流程简要记录/index.html","05c26cfa1993a6e47a1ff0bd773f5e22"],["/2022/04/12/渗透测试之攻破登录页面/index.html","426e58b8b8931520bbb4607ef0e82b77"],["/2022/04/14/xray扫描器/index.html","3a3a79c6bddc3f29f1ad84c77e4baf6e"],["/2022/04/15/ctfshow反序列化/index.html","1401a8eb18082678e918991e58fe7b39"],["/2022/04/26/渗透测试实战/index.html","fc47f9cdcbde68b194133842012cab06"],["/2022/04/28/sqlmap教程/index.html","111a75271947da123b97773eda4e80dc"],["/2022/04/30/认知文件上传/index.html","564a0d85cb211e34861639f2ee56b8e9"],["/2022/05/03/nahamcon/index.html","890eaf197e9868b176797ce5693fe13f"],["/2022/05/15/awd/index.html","b9eb47b7d8cc19dd44911190acced0ac"],["/2022/05/22/DASCTF/index.html","1df6dd5207f9b3ee5019181453466352"],["/2022/05/27/520/index.html","56c6ed21d011ccee9414e57edccb2cc3"],["/2022/05/27/ISCC2022/index.html","0c83d644b81cdc09ea25338309a107e9"],["/2022/06/01/第五届世界智能大会/index.html","0f373947f4254cd5244f4c748776e613"],["/2022/06/04/SEETF/index.html","db0c5c1b18c74d5c0cc49c8a976c1414"],["/2022/06/04/bcactf/index.html","58b55f9e76fb5883a564e45bc83ec73b"],["/2022/06/05/BSidesSF CTF/index.html","760b972ef936eb73366005f301666e20"],["/2022/06/07/Docker部署web题目/index.html","234dfff761840a70419997604c9bb813"],["/2022/06/09/利用oj搭建C语言考核/index.html","5b927459922000a5d33135c4d02327af"],["/2022/06/13/限免题目/index.html","638a961cd28330b0a761f6715915a2f4"],["/2022/06/14/钉钉rce/index.html","54713762b302378f55a868c317f72293"],["/2022/06/16/内部ctf/index.html","ea53663b4d84006649d93024cd3d3752"],["/2022/06/25/攻防世界高手区(一)/index.html","64a48d6a0e60c012b8ebc8dcf49ed62e"],["/2022/07/01/两小时AK赛/index.html","103f5b7cc5a97924a4c5818e3afd6cf1"],["/2022/07/03/鹏城杯/index.html","c5f8a02fd76fd4a1973a51971a7a4b05"],["/2022/07/04/XXE/index.html","1af37c8787b9954d8af30060149a6b2c"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","572c1ee34fed104cab9aa671c8867e41"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","a130ce412146ba924501a2821cc8836c"],["/2022/07/08/chinaz/index.html","a9e37bf947d085be6211a90579f3829e"],["/2022/07/09/蓝帽杯初赛wp/index.html","30cc1522baa847d9e22efb8edda1f73b"],["/2022/07/17/NepCTF/index.html","96f47bc41841ad4309feb93189736ff7"],["/2022/07/19/2022ImaginaryCTF/index.html","43685d47cbde87649a2f12b7a845b661"],["/2022/07/20/局域网攻击/index.html","d4ebb10343f2f1618bc1780ce5a8554d"],["/2022/07/22/2022BDSecCTF/index.html","63f8f50a1da329ec68d8ddb0bac75993"],["/2022/07/25/DiceCTF @ Hope/index.html","810257e532a09f959318c3acf05ae4a1"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","fc7d688a2d6543d25557f7af329f7cd9"],["/2022/07/31/TFCCTF/index.html","b5f0b4e56f1e3dfcdc08465d5d91ed67"],["/2022/08/03/NSSCTF/index.html","1549ddacbc7efd3cfa98cec986c2500f"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","c9351b6e21a441549376ca8b7d9b96fa"],["/2022/08/12/T3N4CI0US CTF/index.html","c45dbcabda19bbbdd63c23c316e76922"],["/2022/08/14/SHELLCTF 2022/index.html","0f71e63f0b2702609513d2bac8ee770d"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","f311ef4ec9a1994341f8c0219e262777"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","4c97c65500ccce17d238c8579ea2b94c"],["/2022/09/16/柏鹭杯/index.html","935e0b165f989b720dd2b85764987ab1"],["/2022/09/20/HUBUCTF 新生赛/index.html","e6bf3920c7b4f36bbfc671ef711cc6b1"],["/2022/09/27/NewStarCTF/index.html","d1c9363af463fbc737d1b3da004cd53f"],["/2022/09/27/bugku渗透1/index.html","ce81dffb4a93418a39eeaa9ae9670e50"],["/2022/09/29/tp6漏洞/index.html","3c95b4dbad058ee035d493559f3df69d"],["/2022/10/02/SWPU NSS新生赛/index.html","e6bca2d4fdc37bfe2441e62db0981e85"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","e15b4f9c45732bc4d697eb22ec6a4b88"],["/2022/10/27/Moectf西电CTF新生赛/index.html","e076a17c024decf28d14e75417c02f5f"],["/2022/11/02/HNCTF/index.html","88269f9e347d55c3ac933202112e9bf4"],["/2022/11/04/2022工控CTF/index.html","6c691ba31487c22659933dbc3485aa83"],["/2022/11/21/极客大挑战2022/index.html","d18a760caca9a47f1241a3ac72a10bdd"],["/2022/12/05/TUCTF 2022/index.html","6126fecb079b4d14b3da529265b6f859"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","0cd65c9b1234b65a4e8b8b4a3276d71b"],["/2022/12/18/金盾2022/index.html","08708e758538e502dd15ecb4501b9cbc"],["/2023/01/01/CATCTF/index.html","4671f9ed242ffb90d751f3638dd5102a"],["/2023/01/09/RW体验赛/index.html","b22fd24c2386cc65024debd2a93a1197"],["/2023/01/10/铁三/index.html","8e5ab62e82dee505c1f593e5888ed959"],["/2023/01/16/Ugra CTF Quals 2023/index.html","83245bc527cab457e17d9ce0ccea288b"],["/2023/01/18/山石2022冬令营/index.html","d1e0b5f87338cc4caf2f3e53d11981b4"],["/2023/01/19/SICTF/index.html","39bf8cb45e04e20522b8497dc346facc"],["/2023/02/04/2023西湖论剑/index.html","950f0a4b4b88008d7bdda5b10a966efa"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","d968cd35ab41e0ac9cfbcd2ad974917c"],["/2023/03/04/公安/index.html","28a6342b82cb01620e1027cd1672efb8"],["/2023/03/07/mysql之udf提权/index.html","d2c2b75cf3a91fe32e06ab10c99422ec"],["/2023/03/07/红日靶场练习/index.html","54b455d0580d2ea8d6bbc8cd93ee923d"],["/2023/03/27/NKCTF/index.html","01a93823f5af43673434c8dddeeba450"],["/2023/03/31/楚慧杯/index.html","89177fe810a530bad336e503d3788063"],["/2023/04/23/HDCTF2023/index.html","e8e620358150a0817633b6c39c263afd"],["/2023/06/01/2023CISCN初赛/index.html","a136a5f7c51e0d7fb44e7a025147b6cc"],["/2023/06/28/2023CISCN[华中决赛]/index.html","ec7975fb44deb48c83c70865828a96fb"],["/2023/07/10/CyberSecurityRumble Quals/index.html","30d348561daee02103c130d277b35319"],["/2023/07/22/2023BDSecCTF/index.html","22bcbbea0bb91c40d31c6e1a7afa69eb"],["/2023/08/07/SQL手注小记/index.html","9094dec19dae88a73d86c5febc84c70e"],["/2023/08/27/2023陇剑杯/index.html","d8abb5f5dd0cac1b88a9aae291361ac2"],["/2023/09/17/2023蓝帽杯半决赛/index.html","8317f8b867c0a522ee9513a6dd3c5220"],["/2023/10/23/对于多层代理的研究/index.html","a4bdec28419cf77b98f64e1fad4d68c9"],["/2023/11/25/金盾2023/index.html","a32981c31dccb31bbed10d312560b248"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","4f2eb8f248cf6253c1352164cd862a77"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","3ab7f70e9b9871daecabc30a11876859"],["/about/index.html","bedcaec3ba5ae99e86db85f99739f5a1"],["/archives/2022/01/index.html","017b1f96acf918b4971327e822e8d40c"],["/archives/2022/02/index.html","414213d3470a0b750a0c826a412f8de3"],["/archives/2022/03/index.html","c977f42d03201bc1d7dd6de3e3dd2a19"],["/archives/2022/04/index.html","9d133c9cec9f183103b597271c3239b6"],["/archives/2022/05/index.html","78d54dcf573ff792beba5907542801ca"],["/archives/2022/06/index.html","f80f7687733228f7fa69c0eeff670dce"],["/archives/2022/07/index.html","fe2a690fede379c1877c3c2b922971e7"],["/archives/2022/08/index.html","3b13c4d4d824ef5a7517429930303bd1"],["/archives/2022/09/index.html","703f304433815315e9cd239cf63b85bc"],["/archives/2022/10/index.html","5eb111e0a08c49eb086755998d90bdcb"],["/archives/2022/11/index.html","52aa1e61c15ab58379029613468ef299"],["/archives/2022/12/index.html","d7e74cb1b0cc87c062f697921819dae6"],["/archives/2022/index.html","97be9da1a3e4ed50267afcdd2c8741ad"],["/archives/2023/01/index.html","09a78f8e83c096bce1c5053b36a459f7"],["/archives/2023/02/index.html","66d6ee8faf629afcbbe1fbf5aaf10261"],["/archives/2023/03/index.html","810d6dbabf0eafe48c3e8a4cf69f5651"],["/archives/2023/04/index.html","e51839085001b23e2ad637caa830fb98"],["/archives/2023/06/index.html","ce50c85197c5feb90e35de3444104218"],["/archives/2023/07/index.html","30c020e32099bc87c106e4aad5b5f693"],["/archives/2023/08/index.html","487210b5a8ba9af9908e386e580a20f7"],["/archives/2023/09/index.html","ebfb20a7341f61f37726ad5c83a43457"],["/archives/2023/10/index.html","b1fc713196fd5cdf4145134b140f2d33"],["/archives/2023/11/index.html","2d8d7dea1bec0c1d8dd59ebcaf1ab2d2"],["/archives/2023/12/index.html","60b1f9bdb5f366e7e921e3e5f733f853"],["/archives/2023/index.html","ea9b470529fb0f782b1b7ef4b0da3313"],["/archives/index.html","44ce0cd0aa40bc1528eec3bbd2e77fa2"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","35e8a580320a96ead2e7323f40912eb9"],["/categories/CTF/index.html","1bd39e76f38664c0c1a7c9d93730b00c"],["/categories/PHP伪协议/index.html","71cb13c57069ffc78f76b6e4741ed83d"],["/categories/RE/index.html","2c68e64b36fd8a193d85da0133e46342"],["/categories/Web/index.html","32f77c7c1e8ecf185aa786df0e0f02b9"],["/categories/awd/index.html","90dbaa6fcae1424c1ad49da143659ca6"],["/categories/index.html","d605b1162f463b5f508055fb4096c799"],["/categories/misc/index.html","b0852eaa1940c73f3db348c280fa5fee"],["/categories/sqlmap/index.html","b3b4efefd7cbf05842f514a32f6848d4"],["/categories/博客相关问题类/index.html","9deac8afc20eb5dfc0ffb828c77a5944"],["/categories/局域网攻击/index.html","1dece21d384f65c7b7d43f4e188ad9b6"],["/categories/心得/index.html","2f5abbffc51323d105bdccd256fdf753"],["/categories/流量分析/index.html","ed5d26ae0d9fe83d688bfd0a0054e14a"],["/categories/渗透/index.html","58f038193c9c40256f025e5a8483f508"],["/categories/渗透测试/index.html","47624dca37554a40ea48ab5f1e0ad426"],["/categories/渗透认知/index.html","6a1dd817367809a0cf38ee3e5465bbe7"],["/categories/漏洞复现/index.html","97c21a9b79cb82910e9a25a3d6ea1495"],["/categories/漏洞测试环境搭建/index.html","2adaf9242bf981ff64e359b47b4989f5"],["/categories/赛后复盘/index.html","c2f37afe1823e0e8e2ec6afe3ad10245"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","34e98f76543283adf6eea40cbc5885b7"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","9964b356ebff5140372979f1de7ebb8b"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","289f4b494362302b4579d7da35e5f085"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fb556a67241a8c36d4b1c9a7a1a7ea4c"],["/page/10/index.html","69d50e54c52d736deadc77dbc6fd37ec"],["/page/11/index.html","0dc58df119bcbac3385dcbfd989994dd"],["/page/2/index.html","6596f1f098fb03016a80c73d95df4a62"],["/page/3/index.html","2ec20f6caaac31f881d6b561ad9d2282"],["/page/4/index.html","3502ad2f67c4f6b811616b29201180f1"],["/page/5/index.html","9f85dc4a94ec59d36831d089e09b9878"],["/page/6/index.html","c669e74c62d6317ce021b30f878e77f8"],["/page/7/index.html","e9a796a2ed51132a9f7c90a698ef51fb"],["/page/8/index.html","f2eb90444acb9a0810936305419e4ea8"],["/page/9/index.html","d9ee592b9c12c830570750f509cf2486"],["/sw-register.js","1295d7f7c89b611a1418f5c8ee893cd7"],["/tags/C/index.html","c608f66774d26485dda5c997b75bd36d"],["/tags/CTF/index.html","a44fe21ba34238c79a81e1543f3d4e91"],["/tags/HTTP头部信息分析/index.html","c7287190695a19e03a4f0c9f46d4d3c7"],["/tags/PHP伪协议/index.html","d19bd72f146f56680968941803616778"],["/tags/PHP特性/index.html","1f95995e5773a48950b771f859940e8f"],["/tags/RE/index.html","988b08781ffd8b078f5e1e3e9d643431"],["/tags/SQL/index.html","f1164c7d8655bf9c18ae3a6aad50b753"],["/tags/Web/index.html","4ab8412d9c6c7bdcc6e2f86110bbb064"],["/tags/Web工具包/index.html","15e17e8cb0675eb504b4a1dcef507677"],["/tags/awd/index.html","714b037ab5e8c135d45e39328210d362"],["/tags/ctfshow/index.html","2009ae4e988f9d33b9827ee4bd7b4e21"],["/tags/index.html","198714e1a59733671ff96920ab1d40e4"],["/tags/misc/index.html","a199302021f0fc1e61298beb1f6867fd"],["/tags/next主题失效/index.html","03def850afc29956b0d80619bcf9aa19"],["/tags/sqlmap/index.html","fbfd60fa281769baba958e35aa2879b2"],["/tags/wp/index.html","c8d95d6ddfcfff52fc0e28300c32c216"],["/tags/xss/index.html","7b5993a72abbf301018622248aa44649"],["/tags/xxe/index.html","b3f5a392f961669be992cac030903fb3"],["/tags/不蒜子不显示/index.html","e68ea0c9ce402e9d301b48c5b5cfe968"],["/tags/博客/index.html","0e42761121bfd59c4bcbf455795281ac"],["/tags/博客主题优化/index.html","19d26423c112b630e0c283b3237f0f92"],["/tags/博客死循环框架问题/index.html","f7b6223d5f66ec332c4fcdea6b4edbca"],["/tags/博客部分问题解决方法/index.html","f81f31e9a523ba2ac8d40f267bb08ec8"],["/tags/反序列化/index.html","5bdbaf9ebd212ef8706b7ac78e5d7a0e"],["/tags/命令执行/index.html","196f379f031f3b3e34f6facb7ffad8cd"],["/tags/局域网攻击/index.html","11268fd9a3610f1f6acd4488a650dca7"],["/tags/常用指令/index.html","fcd82e8f7e41b0ee2f4eb2c3ee06cb62"],["/tags/心得/index.html","f9da2c5599c9abb9cd11387f61afda99"],["/tags/文件上传漏洞/index.html","8980b22f8a210aa6d716abd897e69e6c"],["/tags/文件包含/index.html","821356ac49a0127520ff2f86d0d9328d"],["/tags/流量分析/index.html","e06c634f11bee5695793706b453b66a9"],["/tags/渗透/index.html","a52f1df0138ba059f367c92c7e4da3c6"],["/tags/渗透测试/index.html","c0f0efb4b32b3cd594def41f8c26bb3f"],["/tags/漏洞复现/index.html","0f59afa14594fe66ca7beee08729adb8"],["/tags/留言板/index.html","ff1639d95b7f1e813dc6b1d1546832da"],["/tags/赛后复盘/index.html","a969e7e59f0d104110fdb582abb61087"],["/tags/黑盒测试/index.html","f3047a3daf5515ece7ddbb5a9b4282cc"]];
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
