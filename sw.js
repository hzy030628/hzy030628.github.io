/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","e05294147f65ebdece3a7be3f78ce4c6"],["/2022/01/11/博客制作遇到的问题/index.html","5193b11fb1254a95e82f5ed951f1fbb7"],["/2022/01/15/C/index.html","ce5d59b4eb4a2ddd99861a0f032313ef"],["/2022/01/18/新版next置换/index.html","9057db23dea7ad86508c076c06d19b6e"],["/2022/01/19/不蒜子相关问题/index.html","f1f0c080a628e8759307fe5020e8ddcc"],["/2022/01/19/框架问题/index.html","a63eaae754dcdfc78aa14f1e5eaf47e1"],["/2022/01/20/ctf之reverse/index.html","b926aee19aee569a3aa891043b0d248e"],["/2022/01/23/misc隐写题目总结/index.html","95478cfe0f7ab4785b451f975a1b5e6f"],["/2022/02/01/684/index.html","1696245f4982465821c6dc8c9eac8fa1"],["/2022/02/03/留言板/index.html","59733d79e5cd3298a59448ba725938f2"],["/2022/02/04/SQL简单注入/index.html","442b7621695aae34abfd945b9d5992d7"],["/2022/02/05/最全的HTTP头部信息分析/index.html","40fdbac72c3df937c29e4ea2ef950a4e"],["/2022/02/08/ctfshow文件上传/index.html","25ee3d4edaf412d9974e8e7aaaab9437"],["/2022/02/08/常见密码类型/index.html","cfd055cce22d0cbc2b6a330a1ff9667a"],["/2022/02/12/VNCTF2022WP/index.html","a63ed3e42fe7e1510c99150030cab00b"],["/2022/02/20/ctfshowPHP特性/index.html","662bf559c806b384642964ab465bc12b"],["/2022/02/25/php伪协议/index.html","d1d95c557f4de34411d8c3f54a6ee6fa"],["/2022/02/26/ctfshow文件包含78-117/index.html","0c82db78710e19cab08f43dde16f3870"],["/2022/03/02/Clash漏洞/index.html","5d05f1bed1195d8009be7c0ca58dc5a4"],["/2022/03/11/流量分析之题型解析/index.html","44edacad13285b9af5995e38f26646d8"],["/2022/03/15/ctfshow命令执行/index.html","81aa2b78058fd4818fb2f6e98a0831fc"],["/2022/03/22/CGCTF/index.html","35926272b3831979a4755bc5e5337ada"],["/2022/03/24/ctfshowxss/index.html","1e1bb15ec9484b074da1ee387e40b61e"],["/2022/04/04/黑盒测试/index.html","25a1ccb84fb22e4f85392832e6321e3f"],["/2022/04/11/nmap/index.html","682b189e5fd2204a3aa9bd5f7fd581f7"],["/2022/04/12/渗透流程简要记录/index.html","1fe6a4b5cf046294ea8efec94e67c62c"],["/2022/04/12/渗透测试之攻破登录页面/index.html","e54fd81f600d9ededcf04dba87af13a4"],["/2022/04/14/xray扫描器/index.html","e8b7b081926c15815dec35fae7aad326"],["/2022/04/15/ctfshow反序列化/index.html","029819d3721fec3e1a3264215c06dd6e"],["/2022/04/26/渗透测试实战/index.html","9454ce21fd9fa61f0ee181e553211f58"],["/2022/04/28/sqlmap教程/index.html","a935da1ebcb2dcadd19796abdcf78c42"],["/2022/04/30/认知文件上传/index.html","0996b448f57ab27074454b73fa9262f3"],["/2022/05/03/nahamcon/index.html","40321d191778cf30ae44ff54d212f7f1"],["/2022/05/15/awd/index.html","d27acbf9bd2e508a9157ee2c3872264e"],["/2022/05/22/DASCTF/index.html","795316b05b766f228233e3c8f3044d27"],["/2022/05/27/520/index.html","15505a3c09e0e51133857c64c0952b3c"],["/2022/05/27/ISCC2022/index.html","d1eabbf7d3951db3bb3bfd244667249a"],["/2022/06/01/第五届世界智能大会/index.html","a1bfb239e93dcaa62782c3e2c050fd8e"],["/2022/06/04/SEETF/index.html","e09b89d4ba66fee2e1bba78be5d504bc"],["/2022/06/04/bcactf/index.html","8a0a5e8f2a40d4d178c5ad6ea23fa81e"],["/2022/06/05/BSidesSF CTF/index.html","17327d44c4b27260951acde957cfc791"],["/2022/06/07/Docker部署web题目/index.html","322a2ba3418ef2045c2aba446eb8207e"],["/2022/06/09/利用oj搭建C语言考核/index.html","e1ac1c81235eb700b1b820c71587f51b"],["/2022/06/13/限免题目/index.html","2ff693ae760e448da4e888814cd4bbaa"],["/2022/06/14/钉钉rce/index.html","7156d6399f96d332accc5afdec8d467c"],["/2022/06/16/内部ctf/index.html","59440d0b0d2600e8981d6acc9c9c871b"],["/2022/06/25/攻防世界高手区(一)/index.html","cc754e44f20a663e124eb8e878155553"],["/2022/07/01/两小时AK赛/index.html","4ac45c75641bcd4cb2f6771fe00b6500"],["/2022/07/03/鹏城杯/index.html","6b0aaed148b68e52dc1052208e5e0d81"],["/2022/07/04/XXE/index.html","d88c20a7fe03e03d4a06b1461cd57aed"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","c0b8f7a9890918c8e1efb2274fc348d3"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","a5011587407df73c9c9b99ed0d09ac0e"],["/2022/07/08/chinaz/index.html","b70f4ee58bf9d8847f0a30ab17405874"],["/2022/07/09/蓝帽杯初赛wp/index.html","20adc3080164eb5c5d12afdc9e232686"],["/2022/07/17/NepCTF/index.html","2bf113c084c83af2c8fb62be525eeb04"],["/2022/07/19/2022ImaginaryCTF/index.html","7b1e00ddba5e06bd74f39b9ea4a16294"],["/2022/07/20/局域网攻击/index.html","7f08c6f80fc10c3905e27caa0161c57d"],["/2022/07/22/2022BDSecCTF/index.html","8287b0fc11bce4546143d52a24e659cb"],["/2022/07/25/DiceCTF @ Hope/index.html","00373178775eaf8805e6f3726c35d058"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","5987b4b60ade65b97bc847583c4a0c2e"],["/2022/07/31/TFCCTF/index.html","24379c2348c48110bc6561648e9a570c"],["/2022/08/03/NSSCTF-r4/index.html","2e92ab69e9e3c424ad1d6f46f223106d"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","185ccf90d33edc44f55aa60a344b68ae"],["/2022/08/12/T3N4CI0US CTF/index.html","4043f6bd7c641aea22aea91c7fc617a6"],["/2022/08/14/SHELLCTF 2022/index.html","dfb04654a03a988e029b71f1a362208e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b6bdb0494b7c9b60b1bb9fa564216b04"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","846339540a177c2e78799e52e412219b"],["/2022/09/16/柏鹭杯/index.html","a4a55339e832f93d5f9ef2029b0d0586"],["/2022/09/20/HUBUCTF 新生赛/index.html","e6d0ef174d83f6cce3214b0faa087ed8"],["/2022/09/27/NewStarCTF/index.html","40449cdb97debf16ab5814651f2a5afb"],["/2022/09/27/bugku渗透1/index.html","d5670ead4ec5ecdd3e1f93cd0b5f990c"],["/2022/09/29/tp6漏洞/index.html","6df5c389f902e3661cd9fe8a18a75a60"],["/2022/10/02/SWPU NSS新生赛/index.html","ee77b8c9bdf7d8ac1c285e431d05a331"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","8d51d098595490f8465b1483139d2494"],["/2022/10/27/Moectf西电CTF新生赛/index.html","af61d2da86a7ad066e98b48757b35863"],["/2022/11/02/HNCTF/index.html","7f39ee84c89040885c77c8d1b32a73a6"],["/2022/11/04/2022工控CTF/index.html","185f65798001e45fb2c114d22febb599"],["/2022/11/21/极客大挑战2022/index.html","056dc5a9af3781936413950c21a483dd"],["/2022/12/05/TUCTF 2022/index.html","e9ed977f26b90ec0f124895a0e8f09d0"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","d4dda07b1002d0e79444403b483dc92b"],["/2022/12/18/金盾2022/index.html","b886f23023d2eacd12ee525096796daa"],["/2023/01/01/CATCTF/index.html","3d56d1352e72889a8ba7be4904e98732"],["/2023/01/09/RW体验赛/index.html","0df5d974c9f3b8a6b4dc3529cbdf2cc9"],["/2023/01/10/铁三/index.html","2f4ced31b4f08c7ba99dd1415dbd1a54"],["/2023/01/16/Ugra CTF Quals 2023/index.html","74081cc9f4d14b9c3cc22598be616fef"],["/2023/01/18/山石2022冬令营/index.html","b5e814eaf57866abb216efea20079e2b"],["/2023/01/19/SICTF/index.html","83d246961867ea136bd172a4e9e2c057"],["/2023/02/04/2023西湖论剑/index.html","4a0f23bdb59e5ad733ddd03b36215cb0"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","75c119cf93530a211768a4729b182d34"],["/2023/03/04/公安/index.html","705d3e51cedf84fefa52cceb78ede91e"],["/2023/03/07/mysql之udf提权/index.html","1c66e4da34db69dfcc7effd1813550d1"],["/2023/03/07/红日靶场练习/index.html","ee75e23ff1ee9f6bf7400848f75372d2"],["/2023/03/27/NKCTF/index.html","09b01c6a8b12df318808a7332046e39e"],["/2023/03/31/楚慧杯/index.html","85d1964d6d9aeee16c1ec12c72ace105"],["/2023/04/23/HDCTF2023/index.html","4d4760a119ea5aacb5ee1329d64e3a22"],["/2023/06/01/2023CISCN初赛/index.html","226ab7a6c5c9e05dfcf4b8f6b90111d8"],["/2023/06/28/2023CISCN[华中决赛]/index.html","c1fa76b994d2c1894d06e8281cd435d2"],["/2023/07/10/CyberSecurityRumble Quals/index.html","5a612869394063afd081991131ff087a"],["/2023/07/22/2023BDSecCTF/index.html","c1a78da7a61336838a15a194dd252167"],["/2023/08/07/SQL手注小记/index.html","f150eec6ded396c3444a0a89214f154b"],["/2023/08/27/2023陇剑杯/index.html","c795fce8ec3e25bc6709bf88fa9be712"],["/2023/09/17/2023蓝帽杯半决赛/index.html","86292816356e04bca178989f76bccc68"],["/2023/10/23/对于多层代理的研究/index.html","5da06b443e54f8f656dfc980f025ba64"],["/2023/11/25/金盾2023/index.html","d4a6281ea449516623182137e2d999cd"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","9f8c33a0160efbfb31f1a34a5a152a05"],["/2023/12/18/2023强网杯线上赛/index.html","41a7b357ee4eebd100f0fc7c91d8f64e"],["/2024/01/08/基础ROP/index.html","86b95241b4d767216b58939ff8d2e2df"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","55f305de90abc136c5cf0bfef39bf244"],["/2024/02/13/打靶-Tr0ll/index.html","94e531056e05c9ff26b020610696b6c1"],["/2024/02/14/NSSCTF-r18/index.html","d71bd7b779c10eb768ce33c8c44554b4"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","5f1ac8d518676f132464056e77912c62"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","6c76410a6d4681cc1c6ce1858794127d"],["/about/index.html","23a7d574d849b874633e3fb023084b10"],["/archives/2022/01/index.html","faab32add91fe73a1e3920dcc3aab116"],["/archives/2022/02/index.html","d07599879e58149026f37a631e22cd2c"],["/archives/2022/03/index.html","3c8d0e0e8343e4ca4fd5b706d07a74c7"],["/archives/2022/04/index.html","bb0f7e322410ffe606b401d3e0857ba2"],["/archives/2022/05/index.html","ed4732b1585fe6dab03aa895059de53f"],["/archives/2022/06/index.html","f16f5365e6d55c7218cd89c165ba51e8"],["/archives/2022/07/index.html","2c9c4b725dc2d053a7ab88f88179823b"],["/archives/2022/08/index.html","fed5aba990e7fda711f66e80b6344b3f"],["/archives/2022/09/index.html","da499c656934ab6df75f709e456102c3"],["/archives/2022/10/index.html","ff8583d22dc087a39bccf78b231c83d2"],["/archives/2022/11/index.html","45107bf38800d127bcdba05e90ccb22b"],["/archives/2022/12/index.html","43a93733b76c1b664d92d17a0addf7fe"],["/archives/2022/index.html","c80c9243b79c5df1bbae20e9884394a9"],["/archives/2023/01/index.html","ff64310ce6553b29cdb1dcf856c6c3ae"],["/archives/2023/02/index.html","e6f9f6fab0e7a3e7e866aea226f0e414"],["/archives/2023/03/index.html","19d8d0d8902e84bf05b1a59df82d6a76"],["/archives/2023/04/index.html","72b8b7f4559a2b46529099e92870d67b"],["/archives/2023/06/index.html","eaf876f1f67d898d7fd55af941577494"],["/archives/2023/07/index.html","3fc1b6b0e028f39b53aa222a7f3e20f2"],["/archives/2023/08/index.html","cff26c4615297d96803529c50cd7c94d"],["/archives/2023/09/index.html","761d1be879730396a6811c06b863908b"],["/archives/2023/10/index.html","9ea06b2dd1a91e3e203dc9d5949464cf"],["/archives/2023/11/index.html","3c60b67d2cfc44acf31b0304c9a01f0b"],["/archives/2023/12/index.html","6511f15a7efb05582d2d04ffdd6848fd"],["/archives/2023/index.html","11cfc1728ee82a29db1e0dd203551c5d"],["/archives/2024/01/index.html","59e8cf3a4781b50a642775fa50bdda66"],["/archives/2024/02/index.html","bd0ec213bd35a131c3412efd5aadb0cb"],["/archives/2024/index.html","e6b165426cc9c43367ea5f8505931b6d"],["/archives/index.html","2418d411f66dbcb11c58208b66be88a8"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","f21671c59f3c7e88cdc9a303226d452f"],["/categories/CTF/index.html","f501a50b49994d6e02c6e5320b04e7b8"],["/categories/PHP伪协议/index.html","d28608aada8db79e4d13da2daee76a8b"],["/categories/PWN/index.html","00834d996aaf1a662a806ab5e3d844c6"],["/categories/RE/index.html","1c66596746b9b1fbc0a87a8d4963c08a"],["/categories/Web/index.html","658b692d512f730555d7ed920c75d305"],["/categories/awd/index.html","aaa5e285423448a3fc6bf237173c3edc"],["/categories/index.html","67a841e67dd1af14d5fd6a819a2bfce1"],["/categories/misc/index.html","d6052bb8b78c5c8aa5d46553de9d3b76"],["/categories/sqlmap/index.html","c7c29d85b9d349cdea911ed6f72ff61f"],["/categories/博客相关问题类/index.html","cf2b8aef8bf78cfaf27cb90393793aea"],["/categories/局域网攻击/index.html","b47eece1eaa2ee82ea9c5b98a576e0cd"],["/categories/心得/index.html","ed08946e70d584b114e2d8df7daf619f"],["/categories/流量分析/index.html","2d3e1ff677a387fd6f29c33366bc85ca"],["/categories/渗透/index.html","16b15eff811ccf715fcf894b84908eb6"],["/categories/渗透测试/index.html","52818989ebf20e3106787e39f05eeaca"],["/categories/渗透认知/index.html","8d59437cf1c98d4b48c146df4c51344a"],["/categories/漏洞复现/index.html","521b6a4cce7c35844cb3884ab234e13f"],["/categories/漏洞测试环境搭建/index.html","62c731c7a34eb3de2070f885395111ac"],["/categories/赛后复盘/index.html","4fd5a4a276362746c369aff1b00f95d5"],["/categories/靶场训练/index.html","46eb947fda6861a22736e4c9afe9ee2b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","15ac2de9428b14533d31d51070ac8331"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","cf5613a89e90d6c0f8bdcbfe7b094fb7"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","be37efd8917a4bbd4490f9f836818f96"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","0c226fc4f00c4b317d849f1ae0978299"],["/page/10/index.html","15a617615e9414053be20c084c5bcd39"],["/page/11/index.html","5f5155ad138de875a77d35eb416fd911"],["/page/12/index.html","7309aac24018f85739a5e93d94418421"],["/page/2/index.html","2b0e22b9a88a625dad9ebcadabc57d0c"],["/page/3/index.html","eb9ac23864059b123de74aacf0807391"],["/page/4/index.html","de20dc57ce4cdf70d82e53ebf4e5f7b4"],["/page/5/index.html","13c955f3d76bf555912e83a34013bd80"],["/page/6/index.html","05657ce3722e0675f068411bd29b99e7"],["/page/7/index.html","a560effe57fafe7ff30ab2c0e477c882"],["/page/8/index.html","049d0c694e6fad390b2971165b1afc78"],["/page/9/index.html","a8c736a00f22826fff321993743372fc"],["/sw-register.js","5b140e4aa74fc5ffc04adf066ada79a6"],["/tags/C/index.html","44bf75b1b7f537dea02467acbfd6a467"],["/tags/CTF/index.html","e66889f57da8b7cd4e5274ebdc5b59a5"],["/tags/HTTP头部信息分析/index.html","5fec97c04bd0c560b6812526347ffe8c"],["/tags/PHP伪协议/index.html","bd5a12786f3886928bf53137555dae84"],["/tags/PHP特性/index.html","882a3c223567cc12d66cdf7dcb78c93e"],["/tags/PWN/index.html","5e439be2f737454bf40ae60293cd0ed4"],["/tags/RE/index.html","7befdd2252ea9130bb921d1d3c0d2084"],["/tags/SQL/index.html","1905b48b61576e62dbc5a3beda3a2d4a"],["/tags/Web/index.html","a3791a1a14dd2a3d23d850c259aa7a67"],["/tags/Web工具包/index.html","1fe1ae57a1bd2a273b824445b37b5504"],["/tags/awd/index.html","b5116ca0542758747fc94c180b94a31f"],["/tags/ctfshow/index.html","597fa598750973ceeee53ca5bb19efb2"],["/tags/index.html","e893f596ed4471392c55bdc17e90bbe4"],["/tags/misc/index.html","cd61939f6fc9d4fae29c13f3eaae300f"],["/tags/next主题失效/index.html","a1316f19463dd73ce62ecb9434e7c717"],["/tags/sqlmap/index.html","91bb8a573fb4f74c95bee43b20231cba"],["/tags/wp/index.html","6ff2458b0625e176c350e25b5fa102f0"],["/tags/xss/index.html","86226207c792de08d2a0a285de3b729d"],["/tags/xxe/index.html","c98f54237e6e24cec6b81ef4bb98afb2"],["/tags/不蒜子不显示/index.html","45ee0d09195b30a339b60a4ec2ceb9a3"],["/tags/博客/index.html","8fa078363cb862c37eb9b7e73586838c"],["/tags/博客主题优化/index.html","a483a0dd0587790fe4d3a1f3c525f75b"],["/tags/博客死循环框架问题/index.html","b51eca41ce2430c1e8a3640538869493"],["/tags/博客部分问题解决方法/index.html","e52abcabfd54660aa6657d32dfe960f3"],["/tags/反序列化/index.html","71b6db2df1044b267ff9f456fa09a435"],["/tags/命令执行/index.html","bca8ee3f683501f11926a1a9f4718955"],["/tags/局域网攻击/index.html","808f703e1a3a6aaa00d4d97004c54d0a"],["/tags/常用指令/index.html","23a6f2839ad984d5cbede046d3f92264"],["/tags/心得/index.html","130b88261fa08a64c91694f6e29b61f3"],["/tags/文件上传漏洞/index.html","343a7ffd3a89817fabf4fa77ef5696c9"],["/tags/文件包含/index.html","741fc4e8005f79b4ee94a5816023a871"],["/tags/流量分析/index.html","9c454fc84b52fbdfb418ed21053f8240"],["/tags/渗透/index.html","aceac7c57d880bfd1c1f4106970332a5"],["/tags/渗透测试/index.html","8f5b2d83f2053b67ff61c28f6af100f2"],["/tags/漏洞复现/index.html","0cdc9faa7ba36a89d7c5414eb43f886e"],["/tags/留言板/index.html","7f1d895c43b06fa46bd97ec87b86790b"],["/tags/赛后复盘/index.html","93c1fb8b7b6f7ea9a27dcceca6ea7855"],["/tags/靶场训练/index.html","80d90711319882b064c66b43d6e8a806"],["/tags/黑盒测试/index.html","6531f58122ca4ff09c57c35a21be8a52"]];
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
