/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","22492f54b1b096830c78911914bf17ad"],["/2022/01/11/博客制作遇到的问题/index.html","5ec1708a363953fe1f8a00f70dc1019e"],["/2022/01/15/C/index.html","61b605c6cd61bda63fd446f48e848da0"],["/2022/01/18/新版next置换/index.html","c1590260eaf727c3d5ea6a9e75353316"],["/2022/01/19/不蒜子相关问题/index.html","c208f423ba38df1923112afc5e8705fe"],["/2022/01/19/框架问题/index.html","842966f7ba580d8d3d2c4eddad3f058a"],["/2022/01/20/ctf之reverse/index.html","3e394447c71437f16f5acf0e073d4dad"],["/2022/01/23/misc隐写题目总结/index.html","2e66eb14f4c3e4ec5331291db26b101a"],["/2022/02/01/684/index.html","2733bf3ba0745e4d5e9dff10c2fcfa85"],["/2022/02/03/留言板/index.html","cf6cbeea7258ff640f9a689415d3ec7e"],["/2022/02/04/SQL简单注入/index.html","601746f1e0dfe30a12f63a12a13fb92e"],["/2022/02/05/最全的HTTP头部信息分析/index.html","c28d1d4394bfb1f442130839870adf76"],["/2022/02/08/ctfshow文件上传/index.html","4e1abe52b8ff826bd0de083ae62c34cd"],["/2022/02/08/常见密码类型/index.html","198762aff344b248b78868ab9fc606be"],["/2022/02/12/VNCTF2022WP/index.html","55e01525df02d81d39af8ca50eb238e4"],["/2022/02/20/ctfshowPHP特性/index.html","c8643372bd7f917ed4a99fe180ecdd8c"],["/2022/02/25/php伪协议/index.html","7c25b03f1fa07e1633a3dbaccb29deb7"],["/2022/02/26/ctfshow文件包含78-117/index.html","90866e3a018cd81d25d0d99f508d49fd"],["/2022/03/02/Clash漏洞/index.html","5390cbe348c911529ce5f1c38287e7cf"],["/2022/03/11/流量分析之题型解析/index.html","2cccff3b16df1521d34bc6a441b3503c"],["/2022/03/15/ctfshow命令执行/index.html","3b5b2f624ba729bf75834178abd02346"],["/2022/03/22/CGCTF/index.html","f903cf6b9a3e72404045d2e01a0a1467"],["/2022/03/24/ctfshowxss/index.html","84b1e8e9203a0137e4bd661997394f29"],["/2022/04/04/黑盒测试/index.html","06d3e2bcd49bf5d603857ec8d45ccdfd"],["/2022/04/11/nmap/index.html","e4daf4cd765ed9cbcd5f6a01d192b5ab"],["/2022/04/12/渗透流程简要记录/index.html","a872eaa5cbef9f49e9a483488c3bd5e2"],["/2022/04/12/渗透测试之攻破登录页面/index.html","b8431a079e85ddd84a4d98b96c039f21"],["/2022/04/14/xray扫描器/index.html","fd2dd8850d31a02b48c5feeaa8624109"],["/2022/04/15/ctfshow反序列化/index.html","55f8c2fdb680c1094eb0f89514e4873d"],["/2022/04/26/渗透测试实战/index.html","5838853677a91d6c88230676462d557d"],["/2022/04/28/sqlmap教程/index.html","937210555823effa257a997d0d261e09"],["/2022/04/30/认知文件上传/index.html","282e4606588c176f4aef46f3bbb2d849"],["/2022/05/03/nahamcon/index.html","c3412b1f64eaa21e962dd709b89efe32"],["/2022/05/15/awd/index.html","ff5d5a0205515261bc73b2ad4c0499e3"],["/2022/05/22/DASCTF/index.html","4bc3d9ecde21818de35d20f50031922a"],["/2022/05/27/520/index.html","c265973b09dc141df9a60243cf097ffb"],["/2022/05/27/ISCC2022/index.html","2ab64d8811c75cd765e9dce3274e901e"],["/2022/06/01/第五届世界智能大会/index.html","d301d4970bcc986b54222de57f732a3f"],["/2022/06/04/SEETF/index.html","252773dcafd0096ceba8cc89ce226002"],["/2022/06/04/bcactf/index.html","cea9f1b3c6ea3a54742b0216bccb74ac"],["/2022/06/05/BSidesSF CTF/index.html","3e04dc499c747dada1b09fa2fe2cdf52"],["/2022/06/07/Docker部署web题目/index.html","5f2891962022c9137f3fabac84bc8c06"],["/2022/06/09/利用oj搭建C语言考核/index.html","d0bca0ea2b3b04431cf678f26aff309d"],["/2022/06/13/限免题目/index.html","efd16b68da68a45d0955e2d50067cd34"],["/2022/06/14/钉钉rce/index.html","614771dfd09b1bd2e9717579d0cfcc0f"],["/2022/06/16/内部ctf/index.html","6e627893f49dc863ad35842603f94416"],["/2022/06/25/攻防世界高手区(一)/index.html","143416b0bc03367903fd99b442c485c5"],["/2022/07/01/两小时AK赛/index.html","883fd4cb9a6b6164e369c2b79bed914b"],["/2022/07/03/鹏城杯/index.html","8d9089d1ad2936a8e3a8d1983922b933"],["/2022/07/04/XXE/index.html","8185ef1e2a17b0aaa0047de0eea5a995"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","3a8e89f6bd39c612b3788aa1c0114fb8"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","45803b9c256c50541ebdf0de5694585e"],["/2022/07/08/chinaz/index.html","3470e67da3633e28ffa65f8b77d0b9b7"],["/2022/07/09/蓝帽杯初赛wp/index.html","6d376cd75b10106fc9ebdc37549d7559"],["/2022/07/17/NepCTF/index.html","6d5b7e6b36831fa01ee5fa7f930a069c"],["/2022/07/19/2022ImaginaryCTF/index.html","ed27b30e7998f8420d865e2c6a2eeaff"],["/2022/07/20/局域网攻击/index.html","8414ccbd0f04df4aa681d104a6ed8140"],["/2022/07/22/2022BDSecCTF/index.html","45b354e54e499e3ab5c25c7b353faac5"],["/2022/07/25/DiceCTF @ Hope/index.html","784efc0df15b73d50dbc4b4cc0ca68b7"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","29d18525f4bd396b3520f482da5854eb"],["/2022/07/31/TFCCTF/index.html","34979c570880800dced8a040a528447d"],["/2022/08/03/NSSCTF/index.html","695577450d80d510264e9bc71a354997"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","ca4e4db1d13232b694a00463df7b6f76"],["/2022/08/12/T3N4CI0US CTF/index.html","14dd6e5a946b263dade394a47ae9078e"],["/2022/08/14/SHELLCTF 2022/index.html","a4874e1d51e96c2d81dd174d49bd5d32"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","bbc94a2990cd87f703bff3e8285c1395"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","6673b552535fd1f49650cc4bbe148ed9"],["/2022/09/16/柏鹭杯/index.html","2f240294e0716361ba61bc3f100e2ea6"],["/2022/09/20/HUBUCTF 新生赛/index.html","c1eecb9cc195a59c719ed0a11bfeb2a3"],["/2022/09/27/NewStarCTF/index.html","b6108cc63915ffd3c18e24317fe835ff"],["/2022/09/27/bugku渗透1/index.html","a15c0e01e1684905eabe0820ae26ac86"],["/2022/09/29/tp6漏洞/index.html","4100af9dc37e7e6b84a451f0f46fed5d"],["/2022/10/02/SWPU NSS新生赛/index.html","c2f8b30157211be1f07b105dbd33ccfd"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","18dae34c9393a19e7b1c7c0c27c04905"],["/2022/10/27/Moectf西电CTF新生赛/index.html","dc9bbfcfdd5efd8d663c4c889e69a2ee"],["/2022/11/02/HNCTF/index.html","280a6ca1fafb84c00bc4d4fc5295bc0e"],["/2022/11/04/2022工控CTF/index.html","1e6053c2f485f6840e4810d520eb072a"],["/2022/11/21/极客大挑战2022/index.html","464c13a133690c0c19f77fceee52d7a6"],["/2022/12/05/TUCTF 2022/index.html","8a0c43968baf2512a9678929d0357759"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","1c519188002f9bb20182acbaa20ebb07"],["/2022/12/18/金盾2022/index.html","66f08685a7e0d16c98989538cca04150"],["/2023/01/01/CATCTF/index.html","33a1732d450aa164606c3809984f2afa"],["/2023/01/09/RW体验赛/index.html","32e7d50117c8dc2634cb850a07dcdcac"],["/2023/01/10/铁三/index.html","b27783a28c7e769942af8239f338d79c"],["/2023/01/16/Ugra CTF Quals 2023/index.html","6de69841d5523faf7611b39dbf322755"],["/2023/01/18/山石2022冬令营/index.html","c13c00549ca00d6937e9d90cfe7e3909"],["/2023/01/19/SICTF/index.html","b32121fe550334057b057aaf47751eef"],["/2023/02/04/2023西湖论剑/index.html","cfeeb9122651620f5d884fd691923fa1"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","370d5bd1ea77d023ebb2fda6eb9e097f"],["/2023/03/04/公安/index.html","b7c3bf1e2985b4fdadf7de3474f4c977"],["/2023/03/07/mysql之udf提权/index.html","b4a6de6390140c4022135514a3d13b77"],["/2023/03/07/红日靶场练习/index.html","036c1d55f3375bdcccb362196ebb8e6e"],["/2023/03/27/NKCTF/index.html","f006dd7101ea6d82dcf955ef3b911663"],["/2023/03/31/楚慧杯/index.html","f09cb259364dff512a66c1f492192dcc"],["/2023/04/23/HDCTF2023/index.html","20a5b1dbcbc21480dc06a34dcca9e8f7"],["/2023/06/01/2023CISCN初赛/index.html","c6dbbbefd1e316f518d149c43e22ae4a"],["/2023/06/28/2023CISCN[华中决赛]/index.html","74101849286cdbceb499575693a1bef1"],["/2023/07/10/CyberSecurityRumble Quals/index.html","6df5beb9120c980cae0dd35ad86cb63a"],["/2023/07/22/2023BDSecCTF/index.html","0a5f1d31329b6ad6cf795bb1597d0d85"],["/2023/08/07/SQL手注小记/index.html","6569713c35ada2c8ecd46a5f87d5ce6d"],["/2023/08/27/2023陇剑杯/index.html","bd9bf67d493632f1827e3951f7e3aade"],["/2023/09/17/2023蓝帽杯半决赛/index.html","68e4ba77c1e58425931555bd3c5f8fb7"],["/2023/10/23/对于多层代理的研究/index.html","4d9b2c200485101f807a1797c092b661"],["/2023/11/25/金盾2023/index.html","6085ed69d56e9a7f30d457907037812d"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","75b96b3ac8cb75a185b14c3870f312e5"],["/2023/12/18/2023强网杯线上赛/index.html","7c39d68aea23364bfeda5c1bd15ded4b"],["/2024/01/08/基础ROP/index.html","a9b9274d93a797c665ae201f47f4a5de"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","92bf8bacd1dcf15efe023f04b2b67c0e"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","2882f21385fcec5184e2d9802809209a"],["/about/index.html","562c6035577a08236f9097916978106f"],["/archives/2022/01/index.html","ad19b710265e64fc0992348f5e2f8a48"],["/archives/2022/02/index.html","1ccc27dd4cd6a5828ff44098e0fe43c0"],["/archives/2022/03/index.html","0692caff4b0afca4c4171541e6b79c68"],["/archives/2022/04/index.html","19a4e0532c8965a481efd86659a41fcb"],["/archives/2022/05/index.html","fe6852b632af34ffc3a00b715dd16bd7"],["/archives/2022/06/index.html","9db18251c58d82c2c65ba4a37a187e2b"],["/archives/2022/07/index.html","e7bc25d80aad14929c5c909538aa727d"],["/archives/2022/08/index.html","c087f5b15f7b29b2cbd77ae7d3afe9d9"],["/archives/2022/09/index.html","ceaf5361497925007b418689887f3bf1"],["/archives/2022/10/index.html","ba1f4e8a79a3fc276a7f161c81097445"],["/archives/2022/11/index.html","bfef224604c9e8a10f87f88c7e32a5f9"],["/archives/2022/12/index.html","eb22f5d6620bdeac3295e5d3d7dabbe2"],["/archives/2022/index.html","17848435437ee50947502334d7f72afd"],["/archives/2023/01/index.html","690c5bd5e53fa1dd56c7ad27550e4d35"],["/archives/2023/02/index.html","8dddd7ae8f11f82bedcef8d57d8bd0fc"],["/archives/2023/03/index.html","394672af26e97cc4ed89b9a3b5809aee"],["/archives/2023/04/index.html","2797a44b3c760d78bceae3901c338720"],["/archives/2023/06/index.html","ac987add7d447e717188757a589bd942"],["/archives/2023/07/index.html","05544284ef0c67819417ae5640ec9068"],["/archives/2023/08/index.html","50d5c6850279275c365f9508eccab108"],["/archives/2023/09/index.html","fa0c9b8254746a34ba8552961fd9c4e7"],["/archives/2023/10/index.html","3eb94669cef7494c6ef660f55080684c"],["/archives/2023/11/index.html","830ef835ba2c58c2ed38672d9c7fcade"],["/archives/2023/12/index.html","cd82b5f7cbae51eae0d3985149653227"],["/archives/2023/index.html","12dc0c5e6555452c6c1daf5904dca0e4"],["/archives/2024/01/index.html","8aaff65be4f2244b6f4d0c367f000604"],["/archives/2024/index.html","fbc5583afa6325d7d1b20e08f3b604e1"],["/archives/index.html","968e3db9c69434657ef0197d73519a02"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","da4b546529cbf46a4eda2730bb3c1d38"],["/categories/CTF/index.html","c5ba151013bbf7c05c9a71d189a231b0"],["/categories/PHP伪协议/index.html","4bb8060d6664c065be2bd1f03f75f51a"],["/categories/PWN/index.html","2acba1352af3a190a76738f5ead01ad7"],["/categories/RE/index.html","7a71673b24c18b2fa70236c0a037e959"],["/categories/Web/index.html","b716ccfc07c395f29e5072229ad423c3"],["/categories/awd/index.html","c8238637978a1d0ec574b103efa46495"],["/categories/index.html","c00121aa33f5747e667b701aa2479fe0"],["/categories/misc/index.html","3aa5117d559409d649e4dcecc1c17ed1"],["/categories/sqlmap/index.html","03dab549218bf7524866d76ef73060a5"],["/categories/博客相关问题类/index.html","bca12b4e688b05bffca532230ea4acbc"],["/categories/局域网攻击/index.html","4c39c39f8d75715e1e95949dd49870e6"],["/categories/心得/index.html","2fabe1bfc2cecd8f9522b229cad469a1"],["/categories/流量分析/index.html","849416176dee1c0867f7c70e1cb162ac"],["/categories/渗透/index.html","9754ccf693250d3b1ff5f12290085842"],["/categories/渗透测试/index.html","6d70c0ea236425f48cd2b06508506836"],["/categories/渗透认知/index.html","e8ab96f4352a84c1927991693dbf7978"],["/categories/漏洞复现/index.html","d626c582483cf3953d0e22e748ea3c58"],["/categories/漏洞测试环境搭建/index.html","b181fba25656107649252414f975e924"],["/categories/赛后复盘/index.html","956bdfc291be83b03587f024b62baa23"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","dee28b4767069c292cb606c58ea97a62"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","02c0df35603cfe7a43cda68ad8908d71"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","16bf5f4d26c99c05ea97d0d6a3ec44c2"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","90b44822279ff539b690f8a30075ad21"],["/page/10/index.html","c973058dfe49892f530e761cb819198e"],["/page/11/index.html","6ab804f9f223efdf4d198fc0547ffc34"],["/page/2/index.html","e2a578ecaf3e7ebe75eee21ec77d0455"],["/page/3/index.html","90091237ab07d99568b53a366dc81134"],["/page/4/index.html","b8d3edc593d711c7faccf95fba4c973d"],["/page/5/index.html","6436541dc3a0102d88ea05e159d53f98"],["/page/6/index.html","302f606e8c4d52b523a95ce43516b11f"],["/page/7/index.html","9501ec341a42388bf76cca340dfd379b"],["/page/8/index.html","08d892cd40067c1902fa3c3db79c94da"],["/page/9/index.html","406bff4d46103aa86a91bf7da466e308"],["/sw-register.js","f99c8c13d6fd2a9484c94b1768876d5e"],["/tags/C/index.html","c91ecf4cfadf636dad75fee0e34ede3a"],["/tags/CTF/index.html","521e83ef151686d20b1b2e701b9fbf4f"],["/tags/HTTP头部信息分析/index.html","f0d340ed69c76d175ba423927179a397"],["/tags/PHP伪协议/index.html","7780f85f543daa297415986c04521bd3"],["/tags/PHP特性/index.html","81e5d37236f754bb070c69de5603f85c"],["/tags/PWN/index.html","9bd451d4b909b31488936d2f42c29541"],["/tags/RE/index.html","c87d0a21df5101f27ad44b345ead8469"],["/tags/SQL/index.html","6e34b3abd563754a2cbee356f9cb1afb"],["/tags/Web/index.html","85504288ee377eea641db82bc86ca6d0"],["/tags/Web工具包/index.html","e2c03f1ee5bdf87bc6911125ddd73fed"],["/tags/awd/index.html","41cc37f0cc254e78ee3df60d8333fee2"],["/tags/ctfshow/index.html","33612d8bfc72b974309626198c2ffbcd"],["/tags/index.html","108634cefb6ec52083beff7db2b5ede1"],["/tags/misc/index.html","03acd99c147e3b4bcd8114cbbce55792"],["/tags/next主题失效/index.html","9b51c1222162ecaba40f9352f32ba04a"],["/tags/sqlmap/index.html","c2f89ddbbb63ac155ab1fdbdab031acd"],["/tags/wp/index.html","026f7d05d91187607c3cf5b18536a836"],["/tags/xss/index.html","619677f2c15bf6fc719dfd1db922e0d4"],["/tags/xxe/index.html","cbbee11b6b8da9e698cb9a57ef68c325"],["/tags/不蒜子不显示/index.html","f9d49421a9fd270d3506a00f25d4231f"],["/tags/博客/index.html","e75906dbcebd1af7c87c29c41d7256de"],["/tags/博客主题优化/index.html","349130101c9375e5a5bbe2a2f68562f4"],["/tags/博客死循环框架问题/index.html","18464358323878afe4abe737db707e76"],["/tags/博客部分问题解决方法/index.html","8806a72d37fc8e6141ae1fe553892b53"],["/tags/反序列化/index.html","999ecfb24b1536d287067fb10e6ba7f2"],["/tags/命令执行/index.html","9fc193fb3b7dd578687fe51420a21672"],["/tags/局域网攻击/index.html","4f0c52517558ac09e038dad6d1e41189"],["/tags/常用指令/index.html","3d4e4281a8e8842c45799aa48aa4db81"],["/tags/心得/index.html","9d23051ad54466a450a7c04787ce95f8"],["/tags/文件上传漏洞/index.html","e1ac164f30797256932d2a7cb5176a23"],["/tags/文件包含/index.html","65a54bb8bcf4732d1435323c69df0c2c"],["/tags/流量分析/index.html","1d64963ada47683f54e64f091ff305fb"],["/tags/渗透/index.html","81e1448025fce9270a2d5dda9c88ca9c"],["/tags/渗透测试/index.html","87289a5714bfc52a4482ddb4afea702d"],["/tags/漏洞复现/index.html","2984a0844c38cee485e3479cd81b47cc"],["/tags/留言板/index.html","14594ab7e474a64b3153f22ef03d3116"],["/tags/赛后复盘/index.html","13303f5209fbfcb574cf51a2240140b6"],["/tags/黑盒测试/index.html","fc9eebe59e4414224741985b84f376ce"]];
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
