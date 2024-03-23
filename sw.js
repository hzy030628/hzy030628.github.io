/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","0a646d563629f45b3f6fbfe908221e41"],["/2022/01/11/博客制作遇到的问题/index.html","fb888e919d677be4a5c54581fc92775c"],["/2022/01/15/C/index.html","fd3307729024ef99df4eafe6fc031429"],["/2022/01/18/新版next置换/index.html","cab0eb83122864a5935867fac47a5576"],["/2022/01/19/不蒜子相关问题/index.html","3eb649a2028aa756e0d8fa7a735e2759"],["/2022/01/19/框架问题/index.html","57ba7075cd70698a7a60a310c8a368c9"],["/2022/01/20/ctf之reverse/index.html","3286713a6eba2b953fa1609398afda90"],["/2022/01/23/misc隐写题目总结/index.html","db66dd8aae293b7de736f8297e47b708"],["/2022/02/01/684/index.html","daabbe8e058879e7168c0c0a52dd7eff"],["/2022/02/03/留言板/index.html","d6e900b29615097647051fab34ce890a"],["/2022/02/04/SQL简单注入/index.html","daf3972882670f7760407a66ef637a87"],["/2022/02/05/最全的HTTP头部信息分析/index.html","6f2e0199dd732c9b4f022d7a66b0ccb4"],["/2022/02/08/ctfshow文件上传/index.html","0ea28a96b467cec6ecacfafba7c8320d"],["/2022/02/08/常见密码类型/index.html","83a6c3697f20a745eddbeac6ca3707c2"],["/2022/02/12/VNCTF2022WP/index.html","7be676eb177f9bb7f58014542470791c"],["/2022/02/20/ctfshowPHP特性/index.html","4bc6f9ef20014e841f8ba986291f7117"],["/2022/02/25/php伪协议/index.html","8840c32791ff3017d5c09ab7f39bf64c"],["/2022/02/26/ctfshow文件包含78-117/index.html","37f63ae266d470dbd59ea8fe4018d331"],["/2022/03/02/Clash漏洞/index.html","798bd8374e935c5716a50a9b8ade43d8"],["/2022/03/11/流量分析之题型解析/index.html","a666898b6897dc33c840e8b51ab0669e"],["/2022/03/15/ctfshow命令执行/index.html","a1477d68c5cec627a0d9fb17db188168"],["/2022/03/22/CGCTF/index.html","8a03d7beecc31d09caf03680ff3b292b"],["/2022/03/24/ctfshowxss/index.html","4cd7ec3f61598101cb4235b5cd0b1f73"],["/2022/04/04/黑盒测试/index.html","fa8e7a9b6f94dee91e82d90e7e3a73d5"],["/2022/04/11/nmap/index.html","1e573bef8e6b8620f76757a4a00a0e5c"],["/2022/04/12/渗透流程简要记录/index.html","ef454fbd1056eb19109b1ffa63150bad"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a178a71fba832853d34df14039f178de"],["/2022/04/14/xray扫描器/index.html","a6dc9faa2b6e04a9b69a27bbe63e6869"],["/2022/04/15/ctfshow反序列化/index.html","a68ddc279befa699318a2aa0772914ef"],["/2022/04/26/渗透测试实战/index.html","4abe8d1a1525d92fe16696dd85084b0f"],["/2022/04/28/sqlmap教程/index.html","4ae3728c693014a4da0e7c6c0eb897ce"],["/2022/04/30/认知文件上传/index.html","99037ad8c227bfd5a83ed55d25cd5678"],["/2022/05/03/nahamcon/index.html","dcc14b24f5d3f11e3ecf8877af153efd"],["/2022/05/15/awd/index.html","9b838ea33040866585f6c2c1f4c736b6"],["/2022/05/22/DASCTF/index.html","bf071344277e38012454cafda7c93312"],["/2022/05/27/520/index.html","8ad32790ca408ee4978a32f2227d8731"],["/2022/05/27/ISCC2022/index.html","5533522f42929f865806cd93442ebbd3"],["/2022/06/01/第五届世界智能大会/index.html","a5fe1bea3ee454385f704a0071796217"],["/2022/06/04/SEETF/index.html","e0f232ae8c95bde7939669384db8838a"],["/2022/06/04/bcactf/index.html","23155b17c6f8b9e4e0f182652a462868"],["/2022/06/05/BSidesSF CTF/index.html","ee82314aa75b77b5c542e32cbfaad7ec"],["/2022/06/07/Docker部署web题目/index.html","c8768200774a1b70a1f792999eb5d652"],["/2022/06/09/利用oj搭建C语言考核/index.html","ce1610aca3e7646cfbd940076eb7bb9d"],["/2022/06/13/限免题目/index.html","fe1ef0bfeacecd37f6ac8af2e6b83306"],["/2022/06/14/钉钉rce/index.html","d9273bfc253c8e5ffb285fa82a1004fb"],["/2022/06/16/内部ctf/index.html","32b45025e14c90c851b97ed68cd15e32"],["/2022/06/25/攻防世界高手区(一)/index.html","e0e7ecafedf7bdf937e2eec15e6fa5fc"],["/2022/07/01/两小时AK赛/index.html","c238a4b3693da0f93a45c3c244a1d554"],["/2022/07/03/鹏城杯/index.html","e6dead2c8ff124bb3609137284422c38"],["/2022/07/04/XXE/index.html","8420710228028edc5826261afc8c4548"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","781068980fb93e1bdb16b5bc87e2892d"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","8a1c2fde8038004d975117b50ad01768"],["/2022/07/08/chinaz/index.html","e3f490309577464792c1df39d2748897"],["/2022/07/09/蓝帽杯初赛wp/index.html","11c41adcda6061fef403fb1f5b58ff87"],["/2022/07/17/NepCTF/index.html","a36f538af4dfcc60a1c700887f93af1c"],["/2022/07/19/2022ImaginaryCTF/index.html","6920227e96a1fe223b14ee81ecdc61f1"],["/2022/07/20/局域网攻击/index.html","a559c915c0be9bf90bc8cc0f9ce5bce5"],["/2022/07/22/2022BDSecCTF/index.html","e4d6616d19d3c74bac896496c2361cdb"],["/2022/07/25/DiceCTF @ Hope/index.html","9a2ea346488373c552a91164045c9c9e"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","694ac45283b0fea48f9d52ecca46ee93"],["/2022/07/31/TFCCTF/index.html","907d0a365cd58fbd9f199889edac5e17"],["/2022/08/03/NSSCTF-r4/index.html","3c0cf346e899f272c2c51d1c4b7e6043"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","294824d1eb204186efe8c1d9d380a22b"],["/2022/08/12/T3N4CI0US CTF/index.html","a9293905a4ca3615e7345a23f4f95525"],["/2022/08/14/SHELLCTF 2022/index.html","ade0c3fce114c2ceebb839e81929a82c"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","ae201411b3eb3212d60bbba2fd62cfe0"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","87b1e6a6074d4e647cb682175c310eed"],["/2022/09/16/柏鹭杯/index.html","652b6308f2047a6a5ceb17fbdbaef918"],["/2022/09/20/HUBUCTF 新生赛/index.html","d6361508f905dde5e7d6a0d2948a2d70"],["/2022/09/27/NewStarCTF/index.html","18304b6f6ca49576e2669f2dcfe9d85b"],["/2022/09/27/打靶-渗透测试1/index.html","2cdde37defc85a989fc3570b4048a1cf"],["/2022/09/29/tp6漏洞/index.html","bedd1ec32f771efad5e1d7f45f7006a3"],["/2022/10/02/SWPU NSS新生赛/index.html","a72e0420013f4381a0d84ae3f1fb7b75"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","672b4c6d3f97ea689c4e9a425fad4bc3"],["/2022/10/27/Moectf西电CTF新生赛/index.html","370955aac17fa00d211bd97c273f0c42"],["/2022/11/02/HNCTF/index.html","400bde87537242b4bc992474a069884e"],["/2022/11/04/2022工控CTF/index.html","befede6c54268a703d6951f22f1014f3"],["/2022/11/21/极客大挑战2022/index.html","6f8be4850ed226e10a2e98836955c9ab"],["/2022/12/05/TUCTF 2022/index.html","aa05f94d6069ea5869720b741e3787e1"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","1e8a585652bc021bc3cb2d7da60f900d"],["/2022/12/18/金盾2022/index.html","2547dd91ccd3e3cd57dc09e3b21185b1"],["/2023/01/01/CATCTF/index.html","f6cb8bf4b660351b808d438d99d2db5d"],["/2023/01/09/RW体验赛/index.html","907e9119f741294a187ce02b91105b3c"],["/2023/01/10/铁三/index.html","5ba407f6f4120207161f08186915618a"],["/2023/01/16/Ugra CTF Quals 2023/index.html","c22f20ebd77a29bca5395e928183d629"],["/2023/01/18/山石2022冬令营/index.html","557caca26eef35e7d112cee2b6bc7544"],["/2023/01/19/2023SICTF/index.html","b9f1881526f83eb57fc6606c6ecc13a5"],["/2023/02/04/2023西湖论剑/index.html","934413f141c2de2d91738f7f87b14b91"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","ec2b1349985c49909d87e5cbc4797f4e"],["/2023/03/04/公安/index.html","50969f17bdbfb361561e0da1a377b135"],["/2023/03/07/mysql之udf提权/index.html","d07134d5fabc1410ce5ea01e20601b68"],["/2023/03/07/红日靶场练习/index.html","0f44dd042312fe53a35d24bdaadc5541"],["/2023/03/27/NKCTF/index.html","611cee2e4dc747bf2b394333ab203e1d"],["/2023/03/31/楚慧杯/index.html","b67e41068f26f934cba48df2da030d3a"],["/2023/04/23/HDCTF2023/index.html","ee9e1f82085cff0483b99a11d6439ce7"],["/2023/06/01/2023CISCN初赛/index.html","b55f4ede6ed9feed4b7c15cfc43716d3"],["/2023/06/28/2023CISCN[华中决赛]/index.html","f04280e0737f1f90fa1ebf13952080ab"],["/2023/07/10/CyberSecurityRumble Quals/index.html","ad62aa7feb41e271e6bd99be2138bfb3"],["/2023/07/22/2023BDSecCTF/index.html","fee63fd03baa301fb53c037ce5873550"],["/2023/08/07/SQL手注小记/index.html","093f891dce1cdd5264e9dde4a55bf3ab"],["/2023/08/27/2023陇剑杯/index.html","a942fec0813701c632be4026450ed846"],["/2023/09/17/2023蓝帽杯半决赛/index.html","ae155d6f899ee61529b984c2d7a251eb"],["/2023/10/23/对于多层代理的研究/index.html","6c6c30b136a7c940d0b0f545fbec09df"],["/2023/11/25/金盾2023/index.html","491f22e2314be8244d6c03b31a8fb10a"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","5e135ef19466b9bcbca4ec442b30e4e3"],["/2023/12/18/2023强网杯线上赛/index.html","2f146c77d117042420c223485c1e0d91"],["/2024/01/08/基础ROP/index.html","87b5f3d4d7c684b7fc4246cb6fd7d752"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","471e95de31d3083ac34f429f9d7ee71f"],["/2024/02/13/打靶-Tr0ll/index.html","1dc9c5de44db021fab1500295be7ad29"],["/2024/02/14/NSSCTF-r18/index.html","2123a3a03d47959f1c6a91e05989f1f2"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","b8c7e4744c1381045e441792672e492e"],["/2024/02/15/打靶-CFS三层靶机/index.html","76a0370e9488d15d4fd6e8a176a454b9"],["/2024/02/15/打靶-应急加固【简单】/index.html","7ac800e15988256b0ea3df4a5230da2a"],["/2024/02/17/2024VNCTF-WP/index.html","7cd3cdc6b7a2c0f1e09c7f2b484dcc72"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","671282ab0287df329df9d236b2931a36"],["/2024/02/19/2024SICTF-Round3/index.html","4a9e14eaadddc34da2efad42ad7646ef"],["/2024/02/19/打靶-铁三域控/index.html","a473e83bf392d3216979d0f974adce9b"],["/2024/02/23/ctfshow终极考核/index.html","9ddb0b836e1679840451235cd2ac1bd0"],["/2024/02/25/打靶-应急加固1/index.html","cae581c83532c291bb3a1f91ba000e96"],["/2024/03/13/2023第一届古剑山决赛/index.html","4df465293bfe35e5991b93ae9700aaa4"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","cd762344a53fa83c1cd837628234bf5f"],["/about/index.html","32357a5ac39d18d683371755f88b81aa"],["/archives/2022/01/index.html","181865100acc34b041cd68dc473b8bd5"],["/archives/2022/02/index.html","2483e244a8aa8485435b417c76d9ddb4"],["/archives/2022/03/index.html","d77be2344d656374eebfad003679f7b4"],["/archives/2022/04/index.html","97c0cc404214c0ae66b0c3756fab9d3f"],["/archives/2022/05/index.html","3d05efc5e1c29fbe87fa73dc63b48f8d"],["/archives/2022/06/index.html","df54202bb741511066252baca191a48b"],["/archives/2022/07/index.html","ae41ab1af6309f1c00f234c1f1167fe2"],["/archives/2022/08/index.html","baf3ea726e7f7a1a26cafe8a02e1aa66"],["/archives/2022/09/index.html","13a8c4d58b89fdaadabd4221aed38e73"],["/archives/2022/10/index.html","58328a20f42e32de3798e0e7572fc124"],["/archives/2022/11/index.html","e993811b320ec0bdacc953d179d5af9f"],["/archives/2022/12/index.html","c5ab7e6f87562d1cecf7e65ede7825ef"],["/archives/2022/index.html","6fb578f1af64e888bc402fae760b3cc2"],["/archives/2023/01/index.html","2022fa43802481046bb28d295081c699"],["/archives/2023/02/index.html","4eb6c07f9727f87d8ed0312b04ab5a1d"],["/archives/2023/03/index.html","e01a2801c9c28cc837efe55405565da4"],["/archives/2023/04/index.html","1c1324209af3172bc75d29f771898705"],["/archives/2023/06/index.html","28e896244c1c72ed50ad0490a6e42e73"],["/archives/2023/07/index.html","7783ded30ac7aa0fbf5b2d748e0993fc"],["/archives/2023/08/index.html","f393bef3dfad0be6c64460190cd9570f"],["/archives/2023/09/index.html","31de3c998b872fec4d1e86f807a94bb2"],["/archives/2023/10/index.html","ec7c402ac31e1d47eca50863bc204049"],["/archives/2023/11/index.html","e4df603fe44f9f6adc5033e97426fcae"],["/archives/2023/12/index.html","3254558e3919f0021abcdc2f3d76924f"],["/archives/2023/index.html","d5a9a70e2a9b3db1046430c212c28409"],["/archives/2024/01/index.html","127b9359b38a5128a8783e4cab0b992c"],["/archives/2024/02/index.html","60f81c477a7c7f91669d3e3d1879b86c"],["/archives/2024/03/index.html","c84501e6282c2b175bb3aa1659482f7b"],["/archives/2024/index.html","dae0ca94fee21641fb4169d19cee5917"],["/archives/index.html","5e447c20cb0e938a911e8a70ebe84e91"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","83231e4badf9a26b963471bc5c78c105"],["/categories/CTF/index.html","7a9c0fd46a868a05a61bacaba8f572d1"],["/categories/PWN/index.html","07225d70f5346f6fdbc8d80247608c4f"],["/categories/RE/index.html","feb460ef80203f4836bb8d09646afbe9"],["/categories/Web/index.html","0114c4ce050fe4a508669abb207130de"],["/categories/awd/index.html","ad07c2d9ab38418cdf3f8ccd543702fb"],["/categories/index.html","bfcf4a53a77bf994008574b20a663e22"],["/categories/misc/index.html","3842351e291ad96bd0e0b89d12ab9ab9"],["/categories/博客相关问题类/index.html","fe68123c7b0a1ed004f9a52850c6f63d"],["/categories/局域网攻击/index.html","e326205f0686013609424a80e3fc8a0b"],["/categories/心得/index.html","d355eddc524a3f925855680481f8ce79"],["/categories/渗透认知/index.html","04f1392f14f099cf64adcbe29bd7c557"],["/categories/漏洞复现/index.html","6996662c4dbbbfbbaa16f3b2678fff9b"],["/categories/漏洞测试环境搭建/index.html","04e77972ccd31253673fad962ad2a58a"],["/categories/赛后复盘/index.html","d32e438f0ea126fb46e28a9402119749"],["/categories/靶场训练/index.html","d37ccf2df875a48398cb63686b8b5c8d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","962572b5cd51c314099f715e1102d582"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","cc7ab5d6dacd83c155be581d66516a6f"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","eae64a58da5896da4e7f133bb056a35a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","cac5ed54bbb2c15431f1eb66afb4efee"],["/page/10/index.html","585ea91f23d201abc4aca8f5af178218"],["/page/11/index.html","0b35be1b51217eb080b31827b23e8a08"],["/page/12/index.html","ba8b30d8ddd168d08c8ec508be02116e"],["/page/2/index.html","d5094d73ee5e06627ac06f2744c88d62"],["/page/3/index.html","23000029923a5c7e7bb7165a88aeef52"],["/page/4/index.html","6791de629002463e71b8d53ae6a812ae"],["/page/5/index.html","9f825a48b772b3c81f307e655fff722e"],["/page/6/index.html","0afb10859776c252d53705459ce25608"],["/page/7/index.html","d8771cd5c8040ef7f47f2273e39ef99b"],["/page/8/index.html","a40004c2ba82341df9abe31621e9f9bb"],["/page/9/index.html","83d36823aa61412264b7689ed757d97d"],["/sw-register.js","257e4f119aa68e96aa6929f4c6f3a812"],["/tags/C/index.html","df4aca746301dbbf75c9d4e6469b9604"],["/tags/CTF/index.html","16587551dac6e5a220857cb7e60554b2"],["/tags/HTTP头部信息分析/index.html","275a421e8a3f325a741c17b244bb529c"],["/tags/MSF/index.html","9d6d1841cdf34f753da6879d2175e5f9"],["/tags/PHP伪协议/index.html","21c9ffb07b3dfaf91995a7725a0a65bb"],["/tags/PHP特性/index.html","4b8e0e167cc6f1d5c5e183a6acf7fd1d"],["/tags/PWN/index.html","10215c77b2c4eaa2958b4cee0ee6a815"],["/tags/RE/index.html","ce76fe5fb3f35aa2887265a798e9465f"],["/tags/SQL/index.html","f0eaf5306837e7b7243b8c968c0eec26"],["/tags/Web/index.html","bdef22c28df52308aac622450a9b3345"],["/tags/Web工具包/index.html","4b8266cad897b2200ac6f3dc1ca596a9"],["/tags/awd/index.html","7b903501cb402bc10a0835d860c34381"],["/tags/ctfshow/index.html","388516b7a2fc31797fad337a32cdaee5"],["/tags/index.html","965fa937887c6e697353a264ee07f3c4"],["/tags/misc/index.html","c9a7c7e3da5028f9a58f7e656189c168"],["/tags/next主题失效/index.html","2a7bc5b1ebfe3cf7883013ba623f6ff3"],["/tags/wp/index.html","65836652de090ddfbe5c9e00bd2678a0"],["/tags/xss/index.html","c5843a416ad11d5947acc8d0d9fc5470"],["/tags/xxe/index.html","9e1d1dfb68c6480daaeda6d46b032f3d"],["/tags/不蒜子不显示/index.html","c245820c93dc459b4f9817f45c515025"],["/tags/博客/index.html","8ea34d0c9a762ae9f43dcc1ffc85d2ca"],["/tags/博客主题优化/index.html","45da82e7cd5190b3608eb1f32269a2fa"],["/tags/博客死循环框架问题/index.html","424a2b69e7059007c96523350eb805d1"],["/tags/博客部分问题解决方法/index.html","8dd7e009da21e3706d34b60e92d73f64"],["/tags/反序列化/index.html","f560ac1f86de330e4cbbebde53fcad22"],["/tags/命令执行/index.html","2974e7fb108c2b89c46f141d42ff3528"],["/tags/局域网攻击/index.html","7ca18ebdbd17282e4895c42a1afb2e9d"],["/tags/常用指令/index.html","7e353a5db61718e00f9e6849ea0b2650"],["/tags/心得/index.html","cdaaa7d2e2febdc91f8a9eb6f45a599e"],["/tags/文件上传漏洞/index.html","1fe01476d33bf56d1ef60ef2a26e6b50"],["/tags/文件包含/index.html","5d21f0e5c9c0da12f69f395ba8e6e558"],["/tags/流量分析/index.html","3842351436070c76559a6b0125d8b4e2"],["/tags/渗透/index.html","f7fedd1aa5a549507d78b9b7131ef17a"],["/tags/渗透认知/index.html","e8430f99c67178902fd6bde7e223003d"],["/tags/漏洞复现/index.html","7ca8a61b23ebfd3017eb2f1f8296960c"],["/tags/留言板/index.html","d332a8e180ae7130f33d2da78a0da257"],["/tags/赛后复盘/index.html","4dc07c64d8a558219d32c9ccfb175249"],["/tags/靶场训练/index.html","30fd25b7951a201e6ebbea25dc0368dc"],["/tags/黑盒测试/index.html","b7c9ca103e4e179840022c373ac12f2f"]];
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
