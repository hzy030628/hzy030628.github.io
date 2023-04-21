/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","278b6ac04ad6d42be10e050b5a92746a"],["/2022/01/02/Python程序运行常见错误总结/index.html","d0be76614b27c4df19183512f1a5f56c"],["/2022/01/08/ctf之web/index.html","b8a6c8ad5faf65396411f8ebcdc02a89"],["/2022/01/11/博客制作遇到的问题/index.html","2cf10a8ccdf4c29db9f4811401e34d09"],["/2022/01/15/C/index.html","58bf26ab1093cd3ad38657c22d13b266"],["/2022/01/18/新版next置换/index.html","6294946196cee17ffb81ae9b6dbfc256"],["/2022/01/19/不蒜子相关问题/index.html","db75a06929d045bdf3e63ffe63dafb07"],["/2022/01/19/框架问题/index.html","35737f76ce0a4cfe52a863f79bd21c25"],["/2022/01/20/ctf之reverse/index.html","7cdf037e39e86d718193cef72ca5933d"],["/2022/01/23/misc部分解题软件命令记录/index.html","c31979722db22e87a9413964417f6c5b"],["/2022/02/01/684/index.html","8a727e07206c33bfa2d3478e18c276eb"],["/2022/02/03/留言板/index.html","478153348b5769ec92b08beeb7e03b74"],["/2022/02/04/SQL简单注入/index.html","19aed93fd29bb929c9e4ef9fa82de06a"],["/2022/02/05/最全的HTTP头部信息分析/index.html","1ee95648654aed27095289fa30756182"],["/2022/02/08/ctfshow文件上传/index.html","ebe17307b63f2fd9b13434255c608ea3"],["/2022/02/08/常见密码类型/index.html","37974025d5f143d366d31b0b36b0b008"],["/2022/02/12/VNCTF2022WP/index.html","80bc9d18e6b050fc37b08facd13d3216"],["/2022/02/16/rce/index.html","f852718571462b3ba4bcd0d1f3ae37ef"],["/2022/02/20/ctfshowPHP特性/index.html","cbf72e061eb828057869f278f2b6b8d4"],["/2022/02/25/php伪协议/index.html","c8ea7ce88d5a557a511513a058c9938e"],["/2022/02/26/ctfshow文件包含78-117/index.html","59fbda274ee57be1454d82f502f17cff"],["/2022/03/02/Clash漏洞/index.html","066d7dfafe40c1d2c5d0eedaa9b69b3d"],["/2022/03/11/流量分析之题型解析/index.html","1f786352e701774c84d24c7ead6fb972"],["/2022/03/15/ctfshow命令执行/index.html","c89b5818c5ad58047e040deb46629d83"],["/2022/03/22/CGCTF/index.html","26b3a93dccc350dc30664223c18e7ca6"],["/2022/03/24/ctfshowxss/index.html","15994f991e080de39e52e6a38ffda828"],["/2022/04/04/黑盒测试/index.html","fb8398d27e564d87387c41dcf6291b7e"],["/2022/04/11/nmap/index.html","bc869065d8470dbdfcc77fda535c5459"],["/2022/04/12/渗透流程简要记录/index.html","3f1970b729c06ff02555947cfcdf27d6"],["/2022/04/12/渗透测试之攻破登录页面/index.html","ec88e5742b810389b0a381838e5c4e52"],["/2022/04/14/xray扫描器/index.html","1256cfea5fba050282f2a1bfb0dc4c3a"],["/2022/04/15/ctfshow反序列化/index.html","080227d023a2d1d7ffe7f9e7ed64b2cf"],["/2022/04/26/渗透测试实战/index.html","1d94a813b8cfc09917169f41f9a3d89b"],["/2022/04/26/网刃杯/index.html","ae4518e5d53571689a57259022fc8ef0"],["/2022/04/28/sqlmap教程/index.html","b9d0102fc06b44219b4f8fbdb058cded"],["/2022/04/30/认知文件上传/index.html","be6c1b3aa211d04130335704a47881d5"],["/2022/05/03/nahamcon/index.html","27117476e41359d5961a37b72a4e02af"],["/2022/05/15/awd/index.html","ff13ed8e8d7cf9fb5d947549b462cf53"],["/2022/05/22/DASCTF/index.html","9fa26ea093e800e80d18aae6bc7d58e4"],["/2022/05/27/520/index.html","e82ff646b4e91531133b76e98daeb277"],["/2022/05/27/ISCC2022/index.html","89c2a8f17f21eae5264758ffe0f19697"],["/2022/06/01/第五届世界智能大会/index.html","f406223cf350dd160ac0c4e4914dfdfa"],["/2022/06/04/SEETF/index.html","56bdf7f89994809e6c7cfcaa5e395243"],["/2022/06/04/bcactf/index.html","e0e9bd757c257c2be3866549d7e02097"],["/2022/06/05/BSidesSF CTF/index.html","737883b9ffa1df6bcb2cc2bb36d8fec5"],["/2022/06/07/Docker部署web题目/index.html","f525f5ac378b97c63cd5844392e4c0b9"],["/2022/06/09/利用oj搭建C语言考核/index.html","aa38944d621b8f54793e48c5be54c917"],["/2022/06/09/论网站502/index.html","e96783337abd88337983e39562bbf90c"],["/2022/06/13/限免题目/index.html","2971b3714f1e18305363cf9a19c530d2"],["/2022/06/14/钉钉rce/index.html","784765b4ea9a72cb60853c5c712f7a6d"],["/2022/06/16/内部ctf/index.html","093dce36767782af8ddae72bda0a1e64"],["/2022/06/25/攻防世界高手区(一)/index.html","c13f03e756837110088151453ebf8ec3"],["/2022/07/01/两小时AK赛/index.html","5db22dc15b7b0ff5ba67c75ab5d3e745"],["/2022/07/03/鹏城杯/index.html","9844b7b36cd923353ee9debd8e753bce"],["/2022/07/04/XXE/index.html","9779f27dc80e3f69b2195087b2516015"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","f9bef41172b6846f9ccf9038f6d33686"],["/2022/07/08/chinaz/index.html","e798e991dfd34080c7d0e747c3c21d5b"],["/2022/07/09/蓝帽杯初赛wp/index.html","7a1d5aaab320c7808239ef26228933b8"],["/2022/07/17/NepCTF/index.html","db8e9f5686b92e4f0b782cfa09e3c4b5"],["/2022/07/19/ImaginaryCTF/index.html","f4231cfbfc91d48f66a6832d71c31fb2"],["/2022/07/20/局域网攻击/index.html","0f920f1ad8889201a51266a35277beba"],["/2022/07/22/BDSecCTF/index.html","70d70e5a4d53ac700edc891205192731"],["/2022/07/25/DiceCTF @ Hope/index.html","790d9fa695ab39f82810df0786d7c3d2"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","cd399a6b7fec95299b13a9be0e277865"],["/2022/07/31/TFCCTF/index.html","9bb5e31857a8664a38773011ddc5b5d9"],["/2022/08/03/NSSCTF/index.html","1b9bb9aafcaf7a515bb702d02db2f35d"],["/2022/08/12/T3N4CI0US CTF/index.html","95b9fe37e2cc450dc4ada926514d503f"],["/2022/08/14/SHELLCTF 2022/index.html","a9b33bda7d7b37728e32d4c2401d3b49"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","ccb696ad75a9e7bbf0dcdb453bbbb043"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","15b5966524dda09b15d0e7839864c7c0"],["/2022/09/16/柏鹭杯/index.html","3017ad151bfe5213242c848b50578a5b"],["/2022/09/20/HUBUCTF 新生赛/index.html","d31f05d08df7e5f7869c779bbde5f55e"],["/2022/09/27/NewStarCTF/index.html","ce0df2ef9d20fd92b8b5dced81a64e56"],["/2022/09/27/bugku渗透1/index.html","5507aa355f7caa890ba3b1f8e369a5e2"],["/2022/09/29/tp6漏洞/index.html","23c36e67071b57c1479d1ff163fcb98e"],["/2022/10/02/SWPU NSS新生赛/index.html","a46a5d7b1ad315121169291de60a03b7"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","548ed56fe663c63f150644e8d6891d6f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","7684cdaa220c497346476ef08fcb03f5"],["/2022/11/02/HNCTF/index.html","99d10d77e4271079d74a690317ba6da9"],["/2022/11/04/2022工控CTF/index.html","ee7106bcbdffa49448613f4f2384c767"],["/2022/11/21/极客大挑战2022/index.html","ac39708d7f8d5f42e1acbf9971e29269"],["/2022/12/05/TUCTF 2022/index.html","35e5da4e5175dc6d918a7daadeaf6c8b"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","8c23c629711689efa5206c5f16d4526b"],["/2022/12/18/金盾2022/index.html","57ca1e47f6370b6aef2a81ef7ddbe2f1"],["/2023/01/01/CATCTF/index.html","6b1920cd9808758dd3225e5d9d9b6533"],["/2023/01/09/RW体验赛/index.html","f927d67706d4dfe337b919810b840494"],["/2023/01/10/铁三/index.html","0ef5f2258e90528153140942918ea574"],["/2023/01/16/Ugra CTF Quals 2023/index.html","6c853814381af53bbbbffe0ab4ff1b45"],["/2023/01/18/山石2022冬令营/index.html","4970d36bc23fceec3c1cc8d41ed752a2"],["/2023/01/19/SICTF/index.html","bd02c724d7f3e846cddfe16f4ab761c8"],["/2023/02/04/2023西湖论剑/index.html","cc516459c3d4a9ab43dc2fd13e2e35ac"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","11b96a6d5784c4ae90b7ca7b0cfed63d"],["/2023/03/04/公安/index.html","28081c2abcb1199d3308d783b4eb7e18"],["/2023/03/07/mysql之udf提权/index.html","9a7a0d359166154fa4484f855bda34df"],["/2023/03/07/红日靶场练习/index.html","abfbbd2341810803bb77959439548ad3"],["/2023/03/27/NKCTF/index.html","5dba7691a9ed058389843b390167ccf7"],["/2023/03/31/楚慧杯/index.html","fa51daabaa2d3c55d037469a135902bb"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","8e348956f810eaaed83d2bad2573f390"],["/about/index.html","7dac06a785ff9a4d2b7cdcbbd8405a1a"],["/archives/2021/12/index.html","a52dea6e4aa0e655148eafa9c553f714"],["/archives/2021/index.html","55099a37d9c8072c3310b3abe17f96ff"],["/archives/2022/01/index.html","4853aa579f735d7dc747e3b2f560d004"],["/archives/2022/02/index.html","2dc893bd93d967cf8b13de929c42ed40"],["/archives/2022/03/index.html","26e98db9df4f94c6917bfd04dc03db27"],["/archives/2022/04/index.html","cd4282b2a09a3e0a7ebf0ba6a37c1752"],["/archives/2022/05/index.html","9af924675de1dcb6088b0659d121f64e"],["/archives/2022/06/index.html","97b6dc090dbb82b7c8b9f494160e0b52"],["/archives/2022/07/index.html","36d13f09e5104cc6442ebbaae915799b"],["/archives/2022/08/index.html","0ab5b7e74fe9e168b7b67868049e855f"],["/archives/2022/09/index.html","1e35417036882121b216ba06aa67f353"],["/archives/2022/10/index.html","3f4e6fce9141215041a6d25add78ae70"],["/archives/2022/11/index.html","9a948f895f67e80c226ec876a3055e34"],["/archives/2022/12/index.html","ed2eb13c8cd8449aa0ab91632cd74e8f"],["/archives/2022/index.html","df319727326ec9769adbc4e4c37fecba"],["/archives/2023/01/index.html","4d1b165819f963f636ddd42e883d10c1"],["/archives/2023/02/index.html","2046217605c1e0b726c8b03175f1c790"],["/archives/2023/03/index.html","c321496b749fdaadb8d14f8c4e6c4468"],["/archives/2023/index.html","3d2eb216b330ffb53f311967c3d97db9"],["/archives/index.html","26e3eaa188e5505c6ac7cf1b0f49e4b3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","39ade5b82f33f76fcf4ec51b8d465119"],["/categories/CTF/index.html","6eb562f942fa3c0be7a0605c34aee67f"],["/categories/PHP伪协议/index.html","997b81889c4670a49aa3189b89be0d57"],["/categories/Python/index.html","a3db40ec9dc72413ce04d86faf57511a"],["/categories/RE/index.html","87ffe00906868004d50069a03aee615c"],["/categories/Web/index.html","48abb774e95448bce13441d72e1e68e7"],["/categories/awd/index.html","62244a7f7a55da98ac1e480664e82f41"],["/categories/index.html","be9db5984524d1e6a13bb676c1a1e92f"],["/categories/misc/index.html","afb68ea20071d3084dc60d5b380a991f"],["/categories/sqlmap/index.html","c99f8fb7e61401d26d503a12798a87d0"],["/categories/博客相关问题类/index.html","e8028529646c1a4d6fbf9b62cab2add1"],["/categories/局域网攻击/index.html","d9b4eee4746a545f9b65d53d17181b54"],["/categories/心得/index.html","45849b9cdd1d4dba5d457daab57f98c1"],["/categories/流量分析/index.html","b488f0173b2773c0d6eede8dda53e94b"],["/categories/渗透/index.html","011f146af017520827fd6ed003ebfbd4"],["/categories/渗透测试/index.html","f457e36a1733034e7379ddce2991883e"],["/categories/渗透认知/index.html","e1259dd6eeb56ca5091ba9a9f78259e5"],["/categories/漏洞复现/index.html","e90f8e1e2f4f9703cd4cb83f8809ac90"],["/categories/漏洞测试环境搭建/index.html","29554361a4eea0659c2a0a80b1be1714"],["/categories/赛后复盘/index.html","167f2061ead32a3b97428d627a8f9771"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","2431c8249dd91cc94ab7ad216b878c9c"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","2e6ee6e3adee20bc764bd302c38452c0"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","3a00453f6e4f8fbc2ddf619c74c0286d"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","e25469f072723b1755dc487b0eeee7bb"],["/page/10/index.html","4d5bf97647e45e73f5f8153d93cd9613"],["/page/2/index.html","07e04918056639f155fd0373d72ecb99"],["/page/3/index.html","9e3bfb9e106124ace69c3c4eda6e4f1b"],["/page/4/index.html","ad1b55f7d9caf1080af5d5165a9b45b7"],["/page/5/index.html","a16e8184e16e37df1da3243837c08b1f"],["/page/6/index.html","eeaf07c1da8aade06ad8e3878e7fb762"],["/page/7/index.html","2751091c5dc62139c19ce668849dec2e"],["/page/8/index.html","595558e1b011b76769d261ae7dcc0f5b"],["/page/9/index.html","8c1723805700dc985ff5c80e95a89096"],["/sw-register.js","e361d0a92bfa9bbefd8544a9a5bd8521"],["/tags/C/index.html","54825fda4b6b31bc76b562fa29e822dc"],["/tags/CTF/index.html","1537d735efc58454f0576d3e68410d87"],["/tags/HTTP头部信息分析/index.html","c6ed2d42de7c8902702b6de73f9bdead"],["/tags/PHP伪协议/index.html","df337c438cf9dd93abd7f99b9e4b5724"],["/tags/PHP特性/index.html","4c223612782c6acf1b265adc7a9047bb"],["/tags/Python/index.html","1cf781e74d3e66b1ebd6ea5d015d75ee"],["/tags/RCE/index.html","2db4ada35a4b584df7ef6d8958a550c2"],["/tags/RE/index.html","b104a8b3deea2b124fe4cbe20ca4d0e4"],["/tags/SQL/index.html","4fedf96dcb2660d2cd970e5c6acda0dd"],["/tags/Web/index.html","f99c3f9851b52942de57be36ee1dcbba"],["/tags/Web工具包/index.html","f298fda7cb9708b42264a6c139a6a068"],["/tags/awd/index.html","737994e7b50666fdf694890d6e3ceb1c"],["/tags/bugctf/index.html","da17e46e37cd9aafb499686a0c2d0ba9"],["/tags/ctfshow/index.html","3fd10ebb0df2a2c76eb5adb469cace6a"],["/tags/index.html","e11416346b778be6e4b6f865328711a0"],["/tags/misc/index.html","a669303f458434ab15396006ecb44f67"],["/tags/next主题失效/index.html","6fb28b1bd260d0d0f7b0934a6684d94b"],["/tags/sqlmap/index.html","886e1db13f40cc613cb71336a6f848f7"],["/tags/wp/index.html","8463126a9a225629dcf42fcacd7ccf41"],["/tags/xss/index.html","8fe093ba1ba951277968485922756087"],["/tags/xxe/index.html","f6094d51a7aec5df3599de98fbd43fa1"],["/tags/不蒜子不显示/index.html","cbd0336b6aa9f1c868ff52401ad12d89"],["/tags/博客/index.html","76a164c9df3393ba4a932e22352c5b1a"],["/tags/博客主题优化/index.html","d222ab77376ef02bd9daa28e2022a630"],["/tags/博客死循环框架问题/index.html","c9851a92d71d7724cb635c6a6dab0d81"],["/tags/博客部分问题解决方法/index.html","34d387010f547cd274178cea5c8a5b4b"],["/tags/反序列化/index.html","bd3b30cf6d0ece4917368b4a2b5ca761"],["/tags/命令执行/index.html","cf815c1c1c1b90e6e8b0cccd089ccb10"],["/tags/局域网攻击/index.html","09cf0ec823edf4dd76ebe803af37ac56"],["/tags/常用指令/index.html","5edb6f064456f94d60ba89d456d7913d"],["/tags/心得/index.html","15a8ad03016072284dc1b16be98dca6a"],["/tags/文件上传漏洞/index.html","8f3dbd49bd67cb8a1b8156bf152a8d5e"],["/tags/文件包含/index.html","6719c8098bbd16fed1066e41c7ea88ed"],["/tags/流量分析/index.html","fda6887defb2137e8ec7fdbe8ed43262"],["/tags/渗透/index.html","0a8f6593bbf118b9a35b3383feacdff4"],["/tags/渗透测试/index.html","b4aa6c91a2e713b64c9d8dab1acceea4"],["/tags/漏洞复现/index.html","5be38a2c61e50032e6b724eaa4c0f81a"],["/tags/留言板/index.html","2f6b659ea13ef825c65b1fb05fc12c2b"],["/tags/赛后复盘/index.html","bb83cf99b1a64d49020553d3c0a50ed3"],["/tags/黑盒测试/index.html","e26cbf9fcd7dc34110145450d4979e08"]];
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
