/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","cf74fdd0846a9df44a35c9f967a17b9b"],["/2022/01/11/博客制作遇到的问题/index.html","0688f1523a674751df5f4120f1dfc374"],["/2022/01/15/C/index.html","7cba4437d95d13f03c47d7167c2fa65e"],["/2022/01/18/新版next置换/index.html","448adeab7cae7ef683e7afcb4899b100"],["/2022/01/19/不蒜子相关问题/index.html","476489f07d212cc135534fbca7365e2c"],["/2022/01/19/框架问题/index.html","681f279199a25884a8bf8143faa1aa2d"],["/2022/01/20/ctf之reverse/index.html","6e6589281fdf62424ae51c2ff6e4359b"],["/2022/01/23/misc隐写题目总结/index.html","e81d5b248edf0ea4cb6c006b5c661ccd"],["/2022/02/01/684/index.html","1bdc8cf3b4c8c163c197c7ef391ca58f"],["/2022/02/03/留言板/index.html","bf3dc3150594e705c5cd9c626747e748"],["/2022/02/04/SQL简单注入/index.html","60c50d4f743611b4d9796278b2b27b80"],["/2022/02/05/最全的HTTP头部信息分析/index.html","c90e973e3153d4c7d945d7a03012f669"],["/2022/02/08/ctfshow文件上传/index.html","5efd8e4efdc5678983e4616460f570ea"],["/2022/02/08/常见密码类型/index.html","a99d3592537ec8b818defde11b8d8ff7"],["/2022/02/12/VNCTF2022WP/index.html","9e26d13825af5e2d73a607493b334783"],["/2022/02/20/ctfshowPHP特性/index.html","f57b92cbe42c68c5fad2e479ee7a43cc"],["/2022/02/25/php伪协议/index.html","ca28d40af3ad5483ba988c72c447fb98"],["/2022/02/26/ctfshow文件包含78-117/index.html","ce7ace8c0f3548f2e5a98a5a59d58e0b"],["/2022/03/02/Clash漏洞/index.html","bb69565a5376d2c7702db2a3d26eb097"],["/2022/03/11/流量分析之题型解析/index.html","e0bdd98dba856bec1d3c18569accf783"],["/2022/03/15/ctfshow命令执行/index.html","a24fde2e50a1045c0fe6045873b0f3d9"],["/2022/03/22/CGCTF/index.html","903a6c32fdf6147f9cb076c4c54420d5"],["/2022/03/24/ctfshowxss/index.html","722f062d70cda3cdb2b9877dff8c037c"],["/2022/04/04/黑盒测试/index.html","d618c080e86e276af3cfb5d56921ca50"],["/2022/04/11/nmap/index.html","219c5f8262f4847aca7b94db89421c1f"],["/2022/04/12/渗透流程简要记录/index.html","d524ef35a8844e9ab8ba2f1ad54ee68a"],["/2022/04/12/渗透测试之攻破登录页面/index.html","6fc90e2f1047b59e23b23add2d4ea647"],["/2022/04/14/xray扫描器/index.html","f6f11a91f906610c0bed5ac2b4a79893"],["/2022/04/15/ctfshow反序列化/index.html","a7ea54cdb69a8f846dcf23a2079a1c88"],["/2022/04/26/渗透测试实战/index.html","f0a361a803fcf9ba946e8ec868e277c2"],["/2022/04/28/sqlmap教程/index.html","cf76acf2d30ecbd71265f5193ea88a7a"],["/2022/04/30/认知文件上传/index.html","93bbac6f3c3f0ff9327b731958d4e9e5"],["/2022/05/03/nahamcon/index.html","6ed2144fb7102e430be4f770cabbcf0b"],["/2022/05/15/awd/index.html","8cefc0b367158a1d4a92a7f11b22a5ca"],["/2022/05/22/DASCTF/index.html","d912d4ed8809d7d05f807f3295300bbe"],["/2022/05/27/520/index.html","fbc50448e3274de1310b0234382a96bc"],["/2022/05/27/ISCC2022/index.html","28ab4d43233cabfbb413093c78982f5f"],["/2022/06/01/第五届世界智能大会/index.html","0d405b5387b691b2475d4e69ae6768df"],["/2022/06/04/SEETF/index.html","bcff1553777cb393322810bc1ed7a61e"],["/2022/06/04/bcactf/index.html","69ea7c237bdb5c3c59effc0347b59571"],["/2022/06/05/BSidesSF CTF/index.html","3e98f9da9dcf8872c09d6d5320956615"],["/2022/06/07/Docker部署web题目/index.html","6bf051258cdd7677ea5b90dcef3f0f14"],["/2022/06/09/利用oj搭建C语言考核/index.html","94ecc18400eddd83295e46f76386c163"],["/2022/06/13/限免题目/index.html","9506e9d01d1881e1a0d52c453d1b47c9"],["/2022/06/14/钉钉rce/index.html","166a6d144484a828e3d94d912e0bbb06"],["/2022/06/16/内部ctf/index.html","203fab9c53392e4dec1efd3a2012bdc3"],["/2022/06/25/攻防世界高手区(一)/index.html","1243c106bce4e405ec55a8e3885bc2ee"],["/2022/07/01/两小时AK赛/index.html","e17ede1389c607f4a714db89114254b7"],["/2022/07/03/鹏城杯/index.html","55db6e7ed7a5dcc0ea6ce2e00e25f11b"],["/2022/07/04/XXE/index.html","769abfae636c036cf85693cf50ee50ee"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","f690821f1b1e5e7abd5126d0694241f1"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","d874b37c2018c1aac905bb4a7831f120"],["/2022/07/08/chinaz/index.html","58e32263bd1cdbf66ba53f68e9d9f4c9"],["/2022/07/09/蓝帽杯初赛wp/index.html","5fa253c1927efcbc6be54a41ffa2a488"],["/2022/07/17/NepCTF/index.html","726a33bf024d804d3ba230f206c37d93"],["/2022/07/19/2022ImaginaryCTF/index.html","894c1feac4880b00f775cf7b5b53e18b"],["/2022/07/20/局域网攻击/index.html","c89ad0d0eae39e97308d57aad4777658"],["/2022/07/22/2022BDSecCTF/index.html","5825f0fc2f773fbd3db46418a149a7a0"],["/2022/07/25/DiceCTF @ Hope/index.html","d5f8405a12887e04d755a4570ba84e24"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","d51df95bf56fcb4acd5bea8cf7b32a12"],["/2022/07/31/TFCCTF/index.html","1de33cd621a99ac2df034a6d839e025b"],["/2022/08/03/NSSCTF-r4/index.html","23ac4785231480f4180f441bedf3f004"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","6b84acfe2c90873b0beb3a218bf194d6"],["/2022/08/12/T3N4CI0US CTF/index.html","762bdf20e567a8eed0ed9fc7744a817d"],["/2022/08/14/SHELLCTF 2022/index.html","465b04840a102ec5b019524411400e68"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","113726ea89a9e9cb6125e0431685f8e3"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","3b447f174fec8bae33f75928533f9d83"],["/2022/09/16/柏鹭杯/index.html","1ea6e69556c346f167d88dbed6d6bbd0"],["/2022/09/20/HUBUCTF 新生赛/index.html","ee4a8a81f8ae0fcf8a7cebccede33e7a"],["/2022/09/27/NewStarCTF/index.html","48d2b4864171c650dced45fcb9045bfd"],["/2022/09/27/打靶-渗透测试1/index.html","d4de03f08bed7f82b22b76417062a111"],["/2022/09/29/tp6漏洞/index.html","d6a61608b24c1dd561b7ad5565a5914c"],["/2022/10/02/SWPU NSS新生赛/index.html","e4696164f2c52ed265fc4afe773b5740"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","40ddf904c344ff50402ffe36746ec5d3"],["/2022/10/27/Moectf西电CTF新生赛/index.html","858c0948438003bf55740d0eb54166bc"],["/2022/11/02/HNCTF/index.html","6d51062ce83b111da2cb94a453a1fa0d"],["/2022/11/04/2022工控CTF/index.html","22473f371c43beda6c2fb084fccfee53"],["/2022/11/21/极客大挑战2022/index.html","e1089fb4d92d836ecf030f054303cc77"],["/2022/12/05/TUCTF 2022/index.html","ea3f6f70f77218c1336ca99020a229a9"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","0184eb6a1bcdba00aa981ee7315782c7"],["/2022/12/18/金盾2022/index.html","250ffeebf96d36036ab61e0a78ee0316"],["/2023/01/01/CATCTF/index.html","7454949c15460e5b3842d10017e5749f"],["/2023/01/09/RW体验赛/index.html","b2a976fefc9dd9230ca7ed9b8f246297"],["/2023/01/10/2023铁三初赛/index.html","95f0e35550c93d1c1b834c0a0ec9e556"],["/2023/01/16/Ugra CTF Quals 2023/index.html","acfbc5408a5d2ccba34973df1f89cccc"],["/2023/01/18/山石2022冬令营/index.html","fa38d65a82b7df05055931564998568e"],["/2023/01/19/2023SICTF/index.html","21234a45c49b60ac58276b63eb6513f1"],["/2023/02/04/2023西湖论剑/index.html","ac6d606d9ececd371187ad7ebcdd394b"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f96039821ca64df39ad603ffed417f5c"],["/2023/03/04/公安/index.html","dc3b08d5516d6e2ba09b912b10de0684"],["/2023/03/07/mysql之udf提权/index.html","6ebe215da403ec1a840c30e8fe7a8fb2"],["/2023/03/07/红日靶场练习/index.html","a8340bbdd7a0a8e8b09a9cc0db56836a"],["/2023/03/27/NKCTF/index.html","9aa871d10578947b2f1eb994cd31bd67"],["/2023/03/31/楚慧杯/index.html","31bbd6c114f60cb132d87d61cb570e25"],["/2023/04/23/HDCTF2023/index.html","9875d2d5d9654ac97abd6f33040c6f50"],["/2023/06/01/2023CISCN初赛/index.html","97ef80b271dd55de26edfc6cc320e043"],["/2023/06/28/2023CISCN[华中决赛]/index.html","ddb7d7ef49ea4f3c1d7e3a0027339ce7"],["/2023/07/10/CyberSecurityRumble Quals/index.html","255669ad4d9089fbedec7e99a3400af3"],["/2023/07/22/2023BDSecCTF/index.html","98e58560be15ae4ba68db27e8fc47fed"],["/2023/08/07/SQL手注小记/index.html","5c925a426e949b56cb1aceffed85118e"],["/2023/08/27/2023陇剑杯/index.html","9f2af3be4de0a0b699a0a3d47b432b58"],["/2023/09/17/2023蓝帽杯半决赛/index.html","3e0d57dbd36d3880e23578315372895b"],["/2023/10/23/对于多层代理的研究/index.html","fdc2de4d5373c9568bee06f9c85bd829"],["/2023/11/25/金盾2023/index.html","ac8dbf199dffa53b5c8cac4669cafe47"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","d38e312c3dff50dcbb1a575e357d158b"],["/2023/12/18/2023强网杯线上赛/index.html","f6f3f4f500bdf864200de6cae4a69c04"],["/2024/01/08/基础ROP/index.html","a65c7a20c7a930c62a7eefb8bcc0e346"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","c3f35e7559872dd9f3ffdfbd61084a41"],["/2024/02/13/打靶-Tr0ll/index.html","2aa1c760b298a317991e811168219954"],["/2024/02/14/NSSCTF-r18/index.html","e7ac17adc262d468e27a8907dd0d3af5"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","20ff6ae1c1798ec72c2fa57d9277f1db"],["/2024/02/15/打靶-CFS三层靶机/index.html","c862114a310cf1c0a964f801d6848dbc"],["/2024/02/15/打靶-应急加固【简单】/index.html","787e0b1d876c153fc65e083b9daa591c"],["/2024/02/17/2024VNCTF-WP/index.html","7652e68d77f0304713875c2665b3988c"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","73d8c0466864ae2fa3aa3474ce65998b"],["/2024/02/19/2024SICTF-Round3/index.html","14e0fb27d64a1a83b8d45343a59b21b3"],["/2024/02/19/打靶-铁三域控/index.html","d03c9e1756b4ec5e7439b6cf5d9f6ea8"],["/2024/02/23/ctfshow终极考核/index.html","a7550e52c04ef357537370a6610eaf1c"],["/2024/02/25/打靶-应急加固1/index.html","ee81ab308290941d1e4212464cce0364"],["/2024/03/13/2023第一届古剑山决赛/index.html","5471343b463c8c89ba3734b85605c21e"],["/2024/04/01/2024铁三初赛/index.html","4a92507e236ea6560315079ab2a336a8"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","87ab12bf8d7227ec1a62e0c8a1f42979"],["/about/index.html","c0f05b938347a9a1995748e4abfe8b08"],["/archives/2022/01/index.html","560b21fdae5b5c7356e429eaa2cd59d3"],["/archives/2022/02/index.html","fb7016235421390a52f9620cd95daa00"],["/archives/2022/03/index.html","e2a4681005259677fcad3f624bbfcc92"],["/archives/2022/04/index.html","381611a528dccbdaed4711e03d6b1197"],["/archives/2022/05/index.html","9f303735722b766cb931212a1462cae5"],["/archives/2022/06/index.html","bc066fd3ef535054a46cb3f5fb2d9ff9"],["/archives/2022/07/index.html","332ed8326b97cf20c0cb961584ef913b"],["/archives/2022/08/index.html","0683d32e60d94f1e42711791b1b71176"],["/archives/2022/09/index.html","355e0ce21aa7f61b0c6d8a5ceaaf263e"],["/archives/2022/10/index.html","b7cfdf37edc9c877840ad5ce9975d62e"],["/archives/2022/11/index.html","d44f195419f8c0dc80b2f5c628d4e8db"],["/archives/2022/12/index.html","9cd3755eb91eacbb088b53e9366eb2ce"],["/archives/2022/index.html","ecef8f6b7a7147d7f9452c1af855af54"],["/archives/2023/01/index.html","acb7923a0c9d15a17258f9572e595ef9"],["/archives/2023/02/index.html","ffcf63422f2abec83279ba5054d0c39c"],["/archives/2023/03/index.html","2f1c8dea77107513b2c266769fd1bd8a"],["/archives/2023/04/index.html","929827fb9f06e963b8a0989502c9c87f"],["/archives/2023/06/index.html","1d4e9dadfe5b2fb42f7a3a89c5ecc97f"],["/archives/2023/07/index.html","88f85beaca2fc6bb3f8d3eee73f97e28"],["/archives/2023/08/index.html","d226139ce62795f5cff11eb5c7329c12"],["/archives/2023/09/index.html","2cb4eb099bdeb3af6486fd829161ed8f"],["/archives/2023/10/index.html","ed7a84c8a6fb2ee885e8730ba3b48591"],["/archives/2023/11/index.html","702441c171474464e5f339d5cccb0b19"],["/archives/2023/12/index.html","fe92f4b9fc5a057181a91bf4d05e2d05"],["/archives/2023/index.html","315ce50725c5d59d1c04b8b3229b2547"],["/archives/2024/01/index.html","b83ab95315c2802740c49033dce929be"],["/archives/2024/02/index.html","48e2b374972222139340ae6ec5938adb"],["/archives/2024/03/index.html","67538b33f345feceb00998c1d68b7c64"],["/archives/2024/04/index.html","a1b062fec5927b30e75b7aa3d565d91d"],["/archives/2024/index.html","7d7168746ae7a1f89144e5a56e94f862"],["/archives/index.html","3263c8a36f5f9a8228201c3192fa80f6"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","8f708eaa27afff76946db7c0f058fa71"],["/categories/CTF/index.html","ea146f73370237059c75ef3ae4344131"],["/categories/PWN/index.html","34e6ca8d54ae5330d4fe12e7b0369cd9"],["/categories/RE/index.html","80d7c106b1cb0d094f15341c24b9634e"],["/categories/Web/index.html","bc5623dd6efe49deabdb67b245e9bb7d"],["/categories/awd/index.html","af6fff0bf5394d6662ec37a0a6a35a70"],["/categories/index.html","f8a781e5d3fd1086ce8d7a362c78ed0b"],["/categories/misc/index.html","6f9edead4c86d0f713aec228e2270dc0"],["/categories/博客相关问题类/index.html","5eaa0d29fe59ec381cb3a956c6cdb89e"],["/categories/局域网攻击/index.html","242f27a91cc9172c71f6e4308b0b1902"],["/categories/心得/index.html","e12ddb78213dddc0dcad584653adfad7"],["/categories/渗透认知/index.html","49ae5536c5002ac6654d7c64284a6a4a"],["/categories/漏洞复现/index.html","bd71add73c915ca4407719a5bbe83158"],["/categories/漏洞测试环境搭建/index.html","aaf3879cffb17e853c3efa671e4727d7"],["/categories/赛后复盘/index.html","c70e7c13798b461f7e1c5795445b1d24"],["/categories/靶场训练/index.html","2372a40b32c6b1f3786b805b6d6febce"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","68fe6d46a27d0e7ec7b84040ad6ae281"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","cbd544f8e6e4e0074c6446c488bbd957"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d64e99b26807713e8db89a0b538d6a48"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c4ddecf59b75051d169a24e916d127d4"],["/page/10/index.html","4aaf1e8d88aa77bd83ac8d848a76cf24"],["/page/11/index.html","f70f56cbe14131d87ebe51329967351f"],["/page/12/index.html","15e71a0edee6ee15f5b8502a72a430ab"],["/page/13/index.html","5bbbfd412b08128dc6ffb9631a4adff5"],["/page/2/index.html","ae1a73293c02e4976456c68741636909"],["/page/3/index.html","fcd9d258527ef13d279095eb06272361"],["/page/4/index.html","cbd6d59ba33d49354409e76458227d98"],["/page/5/index.html","ace6ff08e8749412d3db5ecd2f605c4d"],["/page/6/index.html","d22b51044e5cea124354379f7f2adfeb"],["/page/7/index.html","ec3aa1ce0fa9a27eb0645506a399b03e"],["/page/8/index.html","4297ddf033164dc16da81b549f7d678f"],["/page/9/index.html","4b017a4ff539dd6492e134bd1172325b"],["/sw-register.js","5298a1a16971b553d336f995e85edb9f"],["/tags/C/index.html","7e565c2e2e4826e9b087a1308f1ca8ae"],["/tags/CTF/index.html","5127b33a860145b4f9ca27ff196721af"],["/tags/HTTP头部信息分析/index.html","3b2f174eba4854b9535d85ab44826578"],["/tags/MSF/index.html","88ef5e15b2139f82d235cd446b3525d0"],["/tags/PHP伪协议/index.html","c787a55e81c095009f57ca026849bc96"],["/tags/PHP特性/index.html","194ecb953fec7547866689c47e88a013"],["/tags/PWN/index.html","a2a5e1f8394cb6eeb3f144a10feec232"],["/tags/RE/index.html","c0d0a858ac9b84ff067e0973cb4f3c2e"],["/tags/SQL/index.html","8107e688176f63319fdfccc60ae29728"],["/tags/Web/index.html","41c45398e7270f1c32f31aee765b6556"],["/tags/Web工具包/index.html","f9e65eee2d168a0742bc2609e39abe07"],["/tags/awd/index.html","bce41d9bb19b4a9c8b615e7bdc65704b"],["/tags/ctfshow/index.html","882338368074b8dea5b0b6b651c0c156"],["/tags/index.html","aa90e56768e6a5033c4dfb8a13be2403"],["/tags/misc/index.html","5ce204f562844041c76e0dd4128c1dd0"],["/tags/next主题失效/index.html","12fa5d8049dcf1dfacf6b78ec660d5f3"],["/tags/wp/index.html","31b6a30343ed0cb8fccf20d5930e51f4"],["/tags/xss/index.html","4934e11bb6ee7562df5db22782c3c6c2"],["/tags/xxe/index.html","a1d932950bf0d524ddd13d36aa7415ef"],["/tags/不蒜子不显示/index.html","aa61f63f2f555c6e51c4885d2872c67f"],["/tags/博客/index.html","cbc89b9254a86201030a3786c7df72d1"],["/tags/博客主题优化/index.html","c5719f5585cd7c0bf87e214932e1bdef"],["/tags/博客死循环框架问题/index.html","561d863c964650eed706c3d0c8b46a1b"],["/tags/博客部分问题解决方法/index.html","e2acffa28de0916deb61fd4f3758edb6"],["/tags/反序列化/index.html","83d51b942027ade853c89e5fdb7bef5c"],["/tags/命令执行/index.html","b24dd5c9630d65e6e133cc69e56d5aa5"],["/tags/局域网攻击/index.html","732faa66e1906c9945396349dcc0820f"],["/tags/常用指令/index.html","2003c9b5be1425e34c2a911aee027360"],["/tags/心得/index.html","e857465d103d40f52be2bfa447be524b"],["/tags/文件上传漏洞/index.html","319d97ca956dd89e696af87e974f042f"],["/tags/文件包含/index.html","84da86944bf8e33b2a6c0e3e0be5593d"],["/tags/流量分析/index.html","0ac27976762aed8441f7114f6a3ef0b9"],["/tags/渗透/index.html","657dae4e91e49a2a852f8942ae79d69e"],["/tags/渗透认知/index.html","27758e9a1ee5ac268a2e3b6a36d39759"],["/tags/漏洞复现/index.html","3c6805cd362e92b78b10ba920069c089"],["/tags/留言板/index.html","7b2b35f3d076c7ad5bbbb0f74b8e7e3e"],["/tags/赛后复盘/index.html","afa879dd95d986af4330d89ba23a90e4"],["/tags/靶场训练/index.html","7fd6befee95f27aa084e4b760950bc00"],["/tags/黑盒测试/index.html","5a507b4853501cb04389a801c30c87b7"]];
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
