/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","5979a12e0c5b988eb0522268b5787df4"],["/2022/01/11/博客制作遇到的问题/index.html","fd01be2fd4e240d134655b341b844fd4"],["/2022/01/15/C/index.html","a6b518c81c95fd9c67b0a2f5852aa29c"],["/2022/01/18/新版next置换/index.html","bc5d29f9f1c184f747c3387c3f3b8bba"],["/2022/01/19/不蒜子相关问题/index.html","af4497c024025d15b67524a3fb9c307f"],["/2022/01/19/框架问题/index.html","f8464105e4c1ceb671d31dd1c03804a0"],["/2022/01/20/ctf之reverse/index.html","e6e9cd07c21cfa80fac32715f43ded0e"],["/2022/01/23/misc隐写题目总结/index.html","24d687dcc6cfeceb204a1169e020272d"],["/2022/02/01/684/index.html","d1c08d6043178984cb09a8ab885e6e0f"],["/2022/02/03/留言板/index.html","9ce23e267a62d9c911375dd1acc7cc72"],["/2022/02/04/SQL简单注入/index.html","4b9c2bcb8d2117a658f37bef4b1965f6"],["/2022/02/05/最全的HTTP头部信息分析/index.html","6b51c577ace8a3d9087210ef5efa5587"],["/2022/02/08/ctfshow文件上传/index.html","60208d75d59bc38808162107de8a300b"],["/2022/02/08/常见密码类型/index.html","034159a8fcb2c8d1ee62b23370433a6a"],["/2022/02/12/VNCTF2022WP/index.html","801cf1c261e8f4f79ff47ed6c03a04af"],["/2022/02/20/ctfshowPHP特性/index.html","ad03e6da6ffb271e8cfc89827aef293b"],["/2022/02/25/php伪协议/index.html","31effafd18349831311e556ce9c26d9b"],["/2022/02/26/ctfshow文件包含78-117/index.html","4459ad005357821b8beb20f72636e116"],["/2022/03/02/Clash漏洞/index.html","dcc368c40b56865f7ee621cdd20605cf"],["/2022/03/11/流量分析之题型解析/index.html","4e04507d13017ac06cc26006326daae9"],["/2022/03/15/ctfshow命令执行/index.html","8350e913163f3c11c29574542dfe2ae4"],["/2022/03/22/CGCTF/index.html","7aa2086f1affffd18133958954765393"],["/2022/03/24/ctfshowxss/index.html","669983ddca38119b66c70561dd739748"],["/2022/04/04/黑盒测试/index.html","e05a758f1254625991b011322d8f7bae"],["/2022/04/11/nmap/index.html","686c8e2d396f855603e9105f543993e9"],["/2022/04/12/渗透流程简要记录/index.html","6089691f8e355a1e384ee29a3cae390b"],["/2022/04/12/渗透测试之攻破登录页面/index.html","ef1459edcce3d4b8292259a917c1c41e"],["/2022/04/14/xray扫描器/index.html","6a84255be24d0784e9e4c25377a6f492"],["/2022/04/15/ctfshow反序列化/index.html","1cac713900cd8846d3c08831f5eac7b2"],["/2022/04/26/渗透测试实战/index.html","274061561547555298ce83664d285d95"],["/2022/04/28/sqlmap教程/index.html","15582244b3699139478b308e3507767a"],["/2022/04/30/认知文件上传/index.html","d66b3d196b441d7810220cea894f49fb"],["/2022/05/03/nahamcon/index.html","8420bc73ad4abd106a7a8cf29a6f47dc"],["/2022/05/15/awd/index.html","915e42f2c9a707c39b14c8068ec1130c"],["/2022/05/22/DASCTF/index.html","3a56d40581daa09dab98b9f94e666561"],["/2022/05/27/520/index.html","c4b7f1ea0f9e3db3091ccbeaebce4242"],["/2022/05/27/ISCC2022/index.html","31cab4761220c28782e4762288d77620"],["/2022/06/01/第五届世界智能大会/index.html","f0909ad6afaa2d1a05ef55db6a387ef4"],["/2022/06/04/SEETF/index.html","c4e3edc7c2a5488cdf3eb763b8db3c1c"],["/2022/06/04/bcactf/index.html","e28484c858371cbb363942d50642e956"],["/2022/06/05/BSidesSF CTF/index.html","cfb2898e6dde099cede1f29cee86e084"],["/2022/06/07/Docker部署web题目/index.html","d87a7f33dcf102cc3a8ab22f039f76b3"],["/2022/06/09/利用oj搭建C语言考核/index.html","e2ca58ea2c5f10cdfb328648d844ddd3"],["/2022/06/13/限免题目/index.html","ec745db4e5b01a083e664ff8184e36c7"],["/2022/06/14/钉钉rce/index.html","b61b40f5b113e4d6dae1091722128906"],["/2022/06/16/内部ctf/index.html","65012120643df00fd01089472a4b2fc5"],["/2022/06/25/攻防世界高手区(一)/index.html","31328828b7a6b114ee790a7166bb1753"],["/2022/07/01/两小时AK赛/index.html","b42f29f2ca4d67e83e6d451c5dc5305e"],["/2022/07/03/鹏城杯/index.html","52561a20f98ea2c57a00f78b1cb1c28f"],["/2022/07/04/XXE/index.html","5ebfc94aeb05ed62223e01540423c9c7"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","0b8529b81c3baae8794906db2a8367ae"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","a30ac8cfb71bb0d62ad9b16e25827b86"],["/2022/07/08/chinaz/index.html","5b9b0c47035e1ae5fd2df490ab7ddb49"],["/2022/07/09/蓝帽杯初赛wp/index.html","5cdcb986f539c783e6b051576a12b445"],["/2022/07/17/NepCTF/index.html","1ee1b9e1192b4c489369f08388bfc464"],["/2022/07/19/2022ImaginaryCTF/index.html","355302d4076d09fe16feea3afa99531a"],["/2022/07/20/局域网攻击/index.html","223791f359264bbc04c3a9a6ebdc3009"],["/2022/07/22/2022BDSecCTF/index.html","7c2aeb58461687d9de6bf1488ca5a372"],["/2022/07/25/DiceCTF @ Hope/index.html","4f50dab471621f6e5595fdfb7935668a"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","a182b91873b2f3e86d7f419ecab7eb77"],["/2022/07/31/TFCCTF/index.html","a340fd52342423f3da5351970258b4b5"],["/2022/08/03/NSSCTF-r4/index.html","5015c0a8aafd020ed4fd7c916ca8e602"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","ceaa293a9eddf2ea2593e15bd3695a65"],["/2022/08/12/T3N4CI0US CTF/index.html","866b88646727c8a230ba0ceb859727a5"],["/2022/08/14/SHELLCTF 2022/index.html","ba31fe9b7fc9072d3c2a1030a2f54819"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","6065fe1685bf415fe6d9cdc317cea346"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","ee7f5940640b2c95a668bbebbab8cff6"],["/2022/09/16/柏鹭杯/index.html","8240324649da2a839d7db03566f62317"],["/2022/09/20/HUBUCTF 新生赛/index.html","a0638b86be555880dfb9550995e59404"],["/2022/09/27/NewStarCTF/index.html","8f0c09a8f44097e659daeb5cd019ebc8"],["/2022/09/27/打靶-渗透测试1/index.html","8b402127c732dc7741decfd927b0bb31"],["/2022/09/29/tp6漏洞/index.html","7bce5935c28a2dead184c3b453b23cd6"],["/2022/10/02/SWPU NSS新生赛/index.html","ba7efb4e874f3c2db5d2b416b12bd6b1"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","845493d90be3c915b7595d0c4db59bb4"],["/2022/10/27/Moectf西电CTF新生赛/index.html","dcbda91ae385a3c7abfa79660701ddbe"],["/2022/11/02/HNCTF/index.html","b44e988ae9aa10cd04607c73b9f13b68"],["/2022/11/04/2022工控CTF/index.html","4a1f8b5389d449dd0a03d17077d6a49f"],["/2022/11/21/极客大挑战2022/index.html","ae54127c4bfa7879c903a9b29edc6de6"],["/2022/12/05/TUCTF 2022/index.html","4dfb8e5c1f32197cb1c77628b50279a7"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","a26b7922ecdc265cbfebae4b77212308"],["/2022/12/18/金盾2022/index.html","449f7edb3297bf6cda884d516c459d78"],["/2023/01/01/CATCTF/index.html","25f1954941acba8f0309f767efe973eb"],["/2023/01/09/RW体验赛/index.html","f7ee9803f9a3d7c995068eb962fb2994"],["/2023/01/10/铁三/index.html","23ada385e0912d15df41e8dce1e16901"],["/2023/01/16/Ugra CTF Quals 2023/index.html","ce6d84b8d39479ca83cfba941c0b3408"],["/2023/01/18/山石2022冬令营/index.html","e8c325547aa301d92c1ea2cc80c30240"],["/2023/01/19/2023SICTF/index.html","fd2b5a040131e85b839dad7bcd4fe9ce"],["/2023/02/04/2023西湖论剑/index.html","25097d12d5cee18a25a79894f1ee741a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","3944c1e973332dc8ca4a8b8f3dd8f141"],["/2023/03/04/公安/index.html","bf9de9d646935bd7a2496904df178caf"],["/2023/03/07/mysql之udf提权/index.html","f8bba1c0cad887194a15a8ae1ce6e11e"],["/2023/03/07/红日靶场练习/index.html","562ddc24af413c866d6866b15b1e6f66"],["/2023/03/27/NKCTF/index.html","b2352086227caa393ab93575d6d80552"],["/2023/03/31/楚慧杯/index.html","bf6fa72238e1286b772bc4b309f319f0"],["/2023/04/23/HDCTF2023/index.html","999deb4e44d8806222418af2f5c88b11"],["/2023/06/01/2023CISCN初赛/index.html","933ec8f49d2856abe5a3de34c2c4923c"],["/2023/06/28/2023CISCN[华中决赛]/index.html","2a7c19065778371c82b8b5d5b9a6e84e"],["/2023/07/10/CyberSecurityRumble Quals/index.html","513f7c90401f72625d0f2a960ec2d837"],["/2023/07/22/2023BDSecCTF/index.html","a0a94ced3e04528968b836903d8bfd9f"],["/2023/08/07/SQL手注小记/index.html","a77345174e0982ac1d5a9e698145427f"],["/2023/08/27/2023陇剑杯/index.html","0bfbbc5c8bc7fd9ab9e814663f6271f8"],["/2023/09/17/2023蓝帽杯半决赛/index.html","aa84272110a1f970d7f2f89f1a31dfe1"],["/2023/10/23/对于多层代理的研究/index.html","a1873a0a2429587591e929407cc62010"],["/2023/11/25/金盾2023/index.html","054d8c0a46cfb42696e9bf26ea65c625"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","94ec67735cc9157dc12142b71094cb85"],["/2023/12/18/2023强网杯线上赛/index.html","8a661510c65d0864b40461f198902632"],["/2024/01/08/基础ROP/index.html","939e3931a09129d0917db5ca8f5c52d2"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","03abe9b1d1d371814ac98366a5a26170"],["/2024/02/13/打靶-Tr0ll/index.html","3fb0e4e10ae0af2f36de5d72cc53c86a"],["/2024/02/14/NSSCTF-r18/index.html","ac6c2add67f7e2fd6344bde9b7c49be1"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","eefce1e6558bad463dbb578fd9fff0e5"],["/2024/02/15/打靶-CFS三层靶机/index.html","316d710b683b9dd588711007a29f4314"],["/2024/02/15/打靶-应急加固【简单】/index.html","793af52621c7d15bb1afc96a4b17e7cf"],["/2024/02/17/2024VNCTF-WP/index.html","bba3fa24d9ca875dcdf2ad6346179207"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","8e5ce1a19b95098f1ab9af00da5c55dc"],["/2024/02/19/2024SICTF-Round3/index.html","8bc3e1dee7ca24e3705d5d85ad61302d"],["/2024/02/19/打靶-铁三域控/index.html","98c9879d76d64ff21c8c0a32e864b076"],["/2024/02/23/ctfshow终极考核/index.html","df953d545ba3b3ecc8e81711efe68727"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","766f14409c53877bc6f7d41f40bfed92"],["/about/index.html","ccda12cc7a3cb13d4f6b65ad9f23a7b8"],["/archives/2022/01/index.html","188453c98fcae839bddeef52bc8c530a"],["/archives/2022/02/index.html","027dbdbdb905ef1242fde26c08918598"],["/archives/2022/03/index.html","356b668ece7d44724ebca394d9c614be"],["/archives/2022/04/index.html","e2aefbe7654bc3d8185df9bee9c72ef2"],["/archives/2022/05/index.html","33dda4171d8c612c031bb2bea1e18341"],["/archives/2022/06/index.html","a366b49939e0897629e23665f5245683"],["/archives/2022/07/index.html","1ebabeec572e5eb40d6e608c276a1faa"],["/archives/2022/08/index.html","e2c82af315cb2dd4d27790096336d86b"],["/archives/2022/09/index.html","750f40c281a49af9fae81a858bc5713f"],["/archives/2022/10/index.html","0f8e76ffe934efa184e46c6a0a43f117"],["/archives/2022/11/index.html","06b047b5d3e94f1a0fead3b04af47d88"],["/archives/2022/12/index.html","bc95ce9b8574599d1b1a3fabc6996019"],["/archives/2022/index.html","2dcb10902bad6f0d04af479d3be8cfab"],["/archives/2023/01/index.html","fe3f15c14102aa337848bcc2b67002a8"],["/archives/2023/02/index.html","f1f855ce2db99bccee5317e4f840ccbd"],["/archives/2023/03/index.html","52931307ca0b9670ef39f8dd42a1971f"],["/archives/2023/04/index.html","a191fea5123b231c4b624f747ea67890"],["/archives/2023/06/index.html","cec229db85df20b1b6106861f0e2b6ad"],["/archives/2023/07/index.html","c507c88a2803ec25d9ee7733e5810678"],["/archives/2023/08/index.html","d70a38787b592fc0783e97ef4d6b15c2"],["/archives/2023/09/index.html","6ad9ad95446399fe93c1dfdf5c056689"],["/archives/2023/10/index.html","63c8e208eddad35430e89787896fe47a"],["/archives/2023/11/index.html","ccad945fc8f87e982bdc55ccb5782a42"],["/archives/2023/12/index.html","f0eda114879a2bf9726b77aa4718d2f1"],["/archives/2023/index.html","94431894d3ddcba53bb41495c6237754"],["/archives/2024/01/index.html","8ba1e00aaa59f47631ad26afe8c0548e"],["/archives/2024/02/index.html","62932a8617d4471fa5285caf33d05529"],["/archives/2024/index.html","a814513af91adc765ccea32271a70110"],["/archives/index.html","84982422bb459c56280978be0fd7419e"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","87ed7f7f2d1c89f68d6e591c60daf857"],["/categories/CTF/index.html","da71fb4fa68fdc68e5ba0f38568893bb"],["/categories/PWN/index.html","aa02ab45c23df60fc4028fd2b3484334"],["/categories/RE/index.html","d43a2a00ca91d5af2475bdfce6e2d3bb"],["/categories/Web/index.html","28f8b7f420fe9f6edb7eff553a199b89"],["/categories/awd/index.html","32e6f404de4f190baf4af44a77822b81"],["/categories/index.html","0f707f74ff8acc8b98fb3c4e683a086a"],["/categories/misc/index.html","92af3bcdf9a1023e25c1651160334383"],["/categories/博客相关问题类/index.html","c0cab93d55a8f7b57e2c38f321429c35"],["/categories/局域网攻击/index.html","97017d3da493b393b84ae354ac13c6de"],["/categories/心得/index.html","2acc736570f528acf5ddd31c486c209a"],["/categories/渗透认知/index.html","18986cda7765847c9c3e71cc44bcbb60"],["/categories/漏洞复现/index.html","138f586fdcfd4f3d98762fab3d5d3611"],["/categories/漏洞测试环境搭建/index.html","e00703292dc21d84a2b6148fd5980c15"],["/categories/赛后复盘/index.html","23ad38b04a701a217637655829e3ff78"],["/categories/靶场训练/index.html","6ea7227ac7cedf813f0ff1faeefc9634"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","8c2f4e495edd4e9b5753074499fdf55a"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","492b02f29141b9bc6a2967d9b30b2481"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","ca070cd2571b229600ac73367b5054f6"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","e2017ee70c73e0be67c96ebaef424946"],["/page/10/index.html","fdcb19203d43456b2c433f60ee3b7aba"],["/page/11/index.html","0151d60e5cec906d9db647bceb93b1d1"],["/page/12/index.html","d869f0af95c34212801e98618500253a"],["/page/2/index.html","e7b37cbade894520a58ccd90e4a8213e"],["/page/3/index.html","97f913be4067de30ef7264c5ed39c8dd"],["/page/4/index.html","4ca0e635ea225c2dd5ae0dca86c04a8a"],["/page/5/index.html","0a252624565b5df470c2420d89f6e72f"],["/page/6/index.html","a8ebbca6a962df713ea32ef34fee2821"],["/page/7/index.html","5d52a9d7c40c3af55e5a456de3bf056e"],["/page/8/index.html","83bc15cae6140647d953e47d27635e4f"],["/page/9/index.html","a2f6f425d3f9979256f922ecd0fa0e23"],["/sw-register.js","9468120b5db8901630e3c768916fa0d9"],["/tags/C/index.html","46625e91b544c6e9d970743f12db122e"],["/tags/CTF/index.html","bc79f77cf0da18e7a1331f83922ba018"],["/tags/HTTP头部信息分析/index.html","42a2fa2b2c3bedcd683816cb6afaade9"],["/tags/MSF/index.html","964e303444fd0d395f1b40a3566be2d1"],["/tags/PHP伪协议/index.html","af9567f0734d950ae5d2842c143600a4"],["/tags/PHP特性/index.html","de887d3b1df728e01e6ad529f9d85ff5"],["/tags/PWN/index.html","07bb39147363c76d0a566ca2239ec44d"],["/tags/RE/index.html","6973c0858ae5e8fe6abebbac51263a3d"],["/tags/SQL/index.html","2a6a08c3d4d426fe56bd05a4c20bf08d"],["/tags/Web/index.html","2b6a2973f97655cc7b475726e3a8555a"],["/tags/Web工具包/index.html","79541326e450f78e0499828597d9cc04"],["/tags/awd/index.html","bfa671d44c5b349fc75e29ae458da4d1"],["/tags/ctfshow/index.html","545a8a4023b70d3535af602534f821f8"],["/tags/index.html","7065e9d5204cd5ade2f5ff8faeb0d9e9"],["/tags/misc/index.html","0608c7d3d7ff3806a3fb763df42219b7"],["/tags/next主题失效/index.html","b211d6a7234e1196b1021f59aa78ffbc"],["/tags/wp/index.html","b9eed99b6fe03c6a12eacb8e697a7ef1"],["/tags/xss/index.html","1062f195b9ea193d57ada8ca4a45fd63"],["/tags/xxe/index.html","e2bfc7d04d90faa09c666ffa56ff31aa"],["/tags/不蒜子不显示/index.html","86f018445e9de2765038bd97d611a57d"],["/tags/博客/index.html","b2b4225997b522378de9e7605c2d6732"],["/tags/博客主题优化/index.html","1dcd2dcc64ddce669270ee2f49b84099"],["/tags/博客死循环框架问题/index.html","571a3f3e3f6752e0233d2deff108e061"],["/tags/博客部分问题解决方法/index.html","a9c83c5b796c118b69b975139f4ff107"],["/tags/反序列化/index.html","62f09adeaf12ad9fc5c1a15acae3f5c6"],["/tags/命令执行/index.html","a598394d6c69bc3edb5f34a484c2894e"],["/tags/局域网攻击/index.html","bfaba7b65d9ecefe88bd11bd29d83f95"],["/tags/常用指令/index.html","7dfd699d75e71980d6a14752f5e61b31"],["/tags/心得/index.html","e13b70aa4f7b6a7f3913516ee3b286a2"],["/tags/文件上传漏洞/index.html","4f4be6b7f71cacc9d56131e71d676bc5"],["/tags/文件包含/index.html","642d6cc90b27c62a1dac5c6520d14443"],["/tags/流量分析/index.html","a19e98b3c3ddec4d153e405b8c023685"],["/tags/渗透/index.html","0d6ec3fc64f6e665f966c6e61e4a3fa7"],["/tags/渗透认知/index.html","2d2395e63a746710f26fd21dbbfc9fed"],["/tags/漏洞复现/index.html","2fdc8b2e33e9792e40bf6f016171af9a"],["/tags/留言板/index.html","4bbdd088ddbc42f32b6c4247975123ad"],["/tags/赛后复盘/index.html","d9d8763cfbe51b9b81e8b33aaa8cb21a"],["/tags/靶场训练/index.html","7d917b3a28f577ab6c1005db4c1bf5fd"],["/tags/黑盒测试/index.html","aa76050cb5a4b76c7992ee33ad158bf9"]];
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
