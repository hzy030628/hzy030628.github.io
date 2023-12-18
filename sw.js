/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","bba5a926b2c12bcdf21aad50c752c57f"],["/2022/01/11/博客制作遇到的问题/index.html","c8fbc279f6db6b9c7cb1b83c54a47061"],["/2022/01/15/C/index.html","1248e7dbafa30d7571953161791aa39b"],["/2022/01/18/新版next置换/index.html","759e73a97b92799ba29fe7a0ba1cd114"],["/2022/01/19/不蒜子相关问题/index.html","a66751fec3a66212a2d908c550a8c7ba"],["/2022/01/19/框架问题/index.html","a94f60cd8f45dd48136d6707059717b1"],["/2022/01/20/ctf之reverse/index.html","612a2fe38fe4eb869514165c37bd4fcb"],["/2022/01/23/misc隐写题目总结/index.html","082f0a3b49f05f3c0ce16355aeb679d5"],["/2022/02/01/684/index.html","f38172c3aeda7ac4d7eb1e6f327ca439"],["/2022/02/03/留言板/index.html","2eaec6674a7cad0d8132877f7a199223"],["/2022/02/04/SQL简单注入/index.html","475fafad2b66e6456bc6fd4b3fb989ed"],["/2022/02/05/最全的HTTP头部信息分析/index.html","d464c257e23060026b3eed4e6b154c8d"],["/2022/02/08/ctfshow文件上传/index.html","cf07415f28e177007e2bcfc77804c87d"],["/2022/02/08/常见密码类型/index.html","842f1c905518344d75f8ed801828730b"],["/2022/02/12/VNCTF2022WP/index.html","a92d05f76df08641c19b6dc13a279779"],["/2022/02/20/ctfshowPHP特性/index.html","3ffe53ab90682369dff7c8054faa7e04"],["/2022/02/25/php伪协议/index.html","6dabf001189fb3cd9bb7b04ac2caa624"],["/2022/02/26/ctfshow文件包含78-117/index.html","24c3657f6e5361368f8d8917b989ab2f"],["/2022/03/02/Clash漏洞/index.html","a0bbbb5c18017a462a46c91cc08bf210"],["/2022/03/11/流量分析之题型解析/index.html","f167a6f95759dd11d9e4237f81611eca"],["/2022/03/15/ctfshow命令执行/index.html","3742e5fc96a47e9ee4ec5fb0427f9024"],["/2022/03/22/CGCTF/index.html","36dcaf3148582c1c4c2dba8a15fd66ad"],["/2022/03/24/ctfshowxss/index.html","8ae73171654cd62cd176643e17ddc81f"],["/2022/04/04/黑盒测试/index.html","aee571d6971f4e589b5b9b8a8a360ca3"],["/2022/04/11/nmap/index.html","40ff03b3c89ea598c977bb13e889f56c"],["/2022/04/12/渗透流程简要记录/index.html","3390c5aa1cb36d6f962178a8fd22f9a7"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a494337dcaed3a4b97245a3f0b80d8b4"],["/2022/04/14/xray扫描器/index.html","f7ed305b2f51b718b1f98a38ad4b8941"],["/2022/04/15/ctfshow反序列化/index.html","7e6b047804a506cb24e71815e7d80ddd"],["/2022/04/26/渗透测试实战/index.html","0508d69b9174af6843dea73431b7ee07"],["/2022/04/28/sqlmap教程/index.html","ccbdc656594712107b60b8d3c622da65"],["/2022/04/30/认知文件上传/index.html","68fd0d66a7a50d15230a15baa3cace64"],["/2022/05/03/nahamcon/index.html","e9cac558d8c4a81ac0fad1d684e549a9"],["/2022/05/15/awd/index.html","098efec7150ca195d7d7b5afbeff1dea"],["/2022/05/22/DASCTF/index.html","b0ccf1474fb7ee4becbfa568dab41803"],["/2022/05/27/520/index.html","df16ee74659a3a8cc30afbe36a524594"],["/2022/05/27/ISCC2022/index.html","99616a54bebc38b38b2bc5dc7def7c26"],["/2022/06/01/第五届世界智能大会/index.html","3bdec487dce165821bc7dedd93a98627"],["/2022/06/04/SEETF/index.html","1eb7818047fffe674c5a0b3f02647413"],["/2022/06/04/bcactf/index.html","2135013d9a7b75cf574110dabb6e009c"],["/2022/06/05/BSidesSF CTF/index.html","b3e6c72beb06e073cdebc0f13afb6a74"],["/2022/06/07/Docker部署web题目/index.html","4415ccf3299acf7e137337b3ce8e68c1"],["/2022/06/09/利用oj搭建C语言考核/index.html","4cd1b2d19c1d36594f8ac7a8d23992e7"],["/2022/06/13/限免题目/index.html","991be04cbb5aee63e560fd763a5b9611"],["/2022/06/14/钉钉rce/index.html","c6c616d681613392d616d24b83845c20"],["/2022/06/16/内部ctf/index.html","d40d073214b3207f4e4318da64f7d0ee"],["/2022/06/25/攻防世界高手区(一)/index.html","1da66747e046695108fada7246f6b694"],["/2022/07/01/两小时AK赛/index.html","dcd100be8045371edea0ab07e8796cf2"],["/2022/07/03/鹏城杯/index.html","7626b997ff900f05b587abd973d5bf76"],["/2022/07/04/XXE/index.html","3e68a955ffb3e7efa9748bb62bcfdcca"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","5e9ce1f6145b56ccfe4c089671c1bd64"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","37c4902ffaa649e36be5824807ce3bea"],["/2022/07/08/chinaz/index.html","c5bcafc987dc13d273ae7a97da1b5e36"],["/2022/07/09/蓝帽杯初赛wp/index.html","dcac4a852f0b7454376f26b87006cc88"],["/2022/07/17/NepCTF/index.html","a5d294a3b79b109d59f1b76a4d7d7aea"],["/2022/07/19/2022ImaginaryCTF/index.html","984ed06507ab36aaba31e0b4f4685638"],["/2022/07/20/局域网攻击/index.html","ae3742bb8be8e8ca47344e67509486ba"],["/2022/07/22/2022BDSecCTF/index.html","a5ba3ab62bff9fe540f5ede2130c196a"],["/2022/07/25/DiceCTF @ Hope/index.html","7780d5ecf991e9903f488fb39210e001"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","dc1472a2eb840e2384b177978581071f"],["/2022/07/31/TFCCTF/index.html","690a9e649f48bebb7751f354a1540479"],["/2022/08/03/NSSCTF/index.html","99aa33346ae3623a92750fd8cf3c0ec9"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","e502d59c78af4afb46bea9d95dafd5ed"],["/2022/08/12/T3N4CI0US CTF/index.html","98d1d5815cde4f599b6df98b59d7263c"],["/2022/08/14/SHELLCTF 2022/index.html","fb557bcca1ce6316bce8658888361364"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","b209e35fbd488f05aaae298b6dbd7a86"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","db342c8e39a3ac3f0a1e16db4f985077"],["/2022/09/16/柏鹭杯/index.html","fa1d4332b0d20ab9795eaca57f609eaa"],["/2022/09/20/HUBUCTF 新生赛/index.html","33addc416f60e2616446c64bba16e81f"],["/2022/09/27/NewStarCTF/index.html","573d3d4f5a0264dde6eb09a13255247f"],["/2022/09/27/bugku渗透1/index.html","2b05481a9aa05e399a40e3b11d62f2d6"],["/2022/09/29/tp6漏洞/index.html","57718a2ac6a6334e6fd3fd4db222c3d9"],["/2022/10/02/SWPU NSS新生赛/index.html","ca467d2ec9966a7d59036fc198218ab0"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","f8d6a26934f3e3a464a7061c85bca718"],["/2022/10/27/Moectf西电CTF新生赛/index.html","50a1986416467168285414872cd4ca0d"],["/2022/11/02/HNCTF/index.html","b9b0df0e0ebecddff8d4373f7494fcba"],["/2022/11/04/2022工控CTF/index.html","e8886dd030749dfa647ff498a4398170"],["/2022/11/21/极客大挑战2022/index.html","72fe63ccb3baa04bcf93e06bcd8a2bee"],["/2022/12/05/TUCTF 2022/index.html","b762fd64a17417ea7c96d81d03f70f4a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","b36529325599d04429d7a3a5e2709dd6"],["/2022/12/18/金盾2022/index.html","b5ddf9e6dddee974379c331087f483e2"],["/2023/01/01/CATCTF/index.html","d06db3387ccb7549410b31160722a55c"],["/2023/01/09/RW体验赛/index.html","278216b0f1b90b06763132ded8f928e9"],["/2023/01/10/铁三/index.html","003ba83ebb51cc728ac2a18098d31fc7"],["/2023/01/16/Ugra CTF Quals 2023/index.html","a400e93ab753df7e37a251016adbb6d6"],["/2023/01/18/山石2022冬令营/index.html","87341b03a30209cc6e3f032b73b3920d"],["/2023/01/19/SICTF/index.html","eca6ddf84db77412e81c7de1e6bdefd7"],["/2023/02/04/2023西湖论剑/index.html","9a0ed2ade1f95710f6822a783aa07c5e"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","7d77a2e6ba847f0b68e00a36b3720fd8"],["/2023/03/04/公安/index.html","f1b27bd4c8125d8c84a640fb6d6f8745"],["/2023/03/07/mysql之udf提权/index.html","3795845d15e0c7d542f8782f1ecc9deb"],["/2023/03/07/红日靶场练习/index.html","cdaca132f6a956717679c75d1be3543f"],["/2023/03/27/NKCTF/index.html","5770cd94fe4754b39b09c602bc39ed7d"],["/2023/03/31/楚慧杯/index.html","27c538b2c4466a2b46997ddbdb2377e9"],["/2023/04/23/HDCTF2023/index.html","eeb946fb5dcc9d67d50b414f9d5aed62"],["/2023/06/01/2023CISCN初赛/index.html","d7e6cd27ce10b94a87fc3a1d9f1a19aa"],["/2023/06/28/2023CISCN[华中决赛]/index.html","58897b415cd107ac7b36ca19d7165515"],["/2023/07/10/CyberSecurityRumble Quals/index.html","9e387cca458076e477b6c3530d47df6f"],["/2023/07/22/2023BDSecCTF/index.html","3d3a879316018def415100b89f1670ce"],["/2023/08/07/SQL手注小记/index.html","b4a432cecbf657c6ea02d042483a90c7"],["/2023/08/27/2023陇剑杯/index.html","a7bffb5e5fe1443d015a39015bfdaa88"],["/2023/09/17/2023蓝帽杯半决赛/index.html","03e4522ac7ddcb294871809c9ea4dc39"],["/2023/10/23/对于多层代理的研究/index.html","3aecc9e5043571de321e4033688cb74c"],["/2023/11/25/金盾2023/index.html","14d908316ebb1d51243de133369c684d"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","ad25e8942c6da37b8c79db507bfbe1a0"],["/2023/12/19/2023强网杯线上赛/index.html","105324d8a70ea6f837ff9a2bbb2babd2"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","55af6a2db258f5bc112faeb85282d251"],["/about/index.html","7a83ef0ca4937b9818b9ee2b1624cae8"],["/archives/2022/01/index.html","e751d6a9db04ed7bcf82cac96f43d670"],["/archives/2022/02/index.html","b4698f0094f2269f4e01a5936ddc0324"],["/archives/2022/03/index.html","275e027f9813e66a8bef456ef30b90ee"],["/archives/2022/04/index.html","37117724931ca7f1ddbe99d5403186a9"],["/archives/2022/05/index.html","bb23694cb8918ddf83601ad3fa464aa8"],["/archives/2022/06/index.html","df1b99b8995c1cd4b39e47800600e19e"],["/archives/2022/07/index.html","b6dbaaa6f24d9f370e89eba2a5065379"],["/archives/2022/08/index.html","88b53d1bbdd8be3428f5265bc01d6960"],["/archives/2022/09/index.html","f289545bc2da6f4272f13b18a6c16b42"],["/archives/2022/10/index.html","bcb1da69ea118c29d6c799c69c2322ec"],["/archives/2022/11/index.html","ea4a9425fed70ad0bca18f904ce47916"],["/archives/2022/12/index.html","76a0a818b246b9585c2701afc20c79d8"],["/archives/2022/index.html","fc499828a742a3af194f842a9317570f"],["/archives/2023/01/index.html","0bc4dac25305126391ea9fb7a60dfd65"],["/archives/2023/02/index.html","0672ce1427051d60c52cd235b22a7b2f"],["/archives/2023/03/index.html","5f2059918aaa6d54fdc04657d4d32b2f"],["/archives/2023/04/index.html","de1aba99fcd9dfc887c5d8758fab4fe8"],["/archives/2023/06/index.html","e25859394b3053a19805f94b75b3907d"],["/archives/2023/07/index.html","c0a971ca4ab4632463ceb3fa51698c53"],["/archives/2023/08/index.html","b8b7c64da16796483f040d7038e900ac"],["/archives/2023/09/index.html","f9aa491aa439a5e43f85df2266adf157"],["/archives/2023/10/index.html","48ee4c2522ad6dfa60be3292c0792c0c"],["/archives/2023/11/index.html","0232fa2cf2da0d3a9a6c562d3d1b4b44"],["/archives/2023/12/index.html","89b1b24976732d762b74fe49fc6a92d3"],["/archives/2023/index.html","83ad6a178131b9ce52bb1b42e5a4193d"],["/archives/index.html","9fcb6dc654f4a6092fa37a38bb73e1f1"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","27a435011dbc9f30f8fc4a8454d1da7a"],["/categories/CTF/index.html","4ac30c0a869899bf19b77b9def81eea7"],["/categories/PHP伪协议/index.html","0a9e94905a04bb55e699d67f4b07115d"],["/categories/RE/index.html","5872bb2d0d6a1929fb3a41a41671cf21"],["/categories/Web/index.html","cc23e4c5a85b9e0320bc9bc90be31a66"],["/categories/awd/index.html","871c8e3143dd000593efb453facdad2f"],["/categories/index.html","fdfe208a7f58598df46065cbc1a52bbd"],["/categories/misc/index.html","bdc582c349e7628cf59e07d512679c77"],["/categories/sqlmap/index.html","12a33db7d0d6da38aeb8e53b11dd1983"],["/categories/博客相关问题类/index.html","b89609b573b1cf831e3f5a24399a25e2"],["/categories/局域网攻击/index.html","e0b753ea7ea78164c0fedc9f478b27d3"],["/categories/心得/index.html","38c7eacd8c8c9df56809fe8ebd837cbc"],["/categories/流量分析/index.html","0e67b9638f1e09efe988828e7fdbd8ee"],["/categories/渗透/index.html","e3c40aac4160221dbc93c12f3cca66c3"],["/categories/渗透测试/index.html","d0337e9f2c2647cbc658b2019d8121d5"],["/categories/渗透认知/index.html","0fdc47844fb300095405a5d43e3c9d50"],["/categories/漏洞复现/index.html","999df4cb0cd3a85493c2f88384efb18d"],["/categories/漏洞测试环境搭建/index.html","ba4fa91609725583c1c0c1f04e817b36"],["/categories/赛后复盘/index.html","f3b244b437acefeae03a92337f575137"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","b0f95747bf254f382cbf3983c35b4f36"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","361b8126f8b8ee1da9b178a6cb609ddf"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","0c0ac2d24f9bf6fda054043cade77ba7"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","81a535fa5e92f7da9f5bae7426ef0b34"],["/page/10/index.html","28f20757fe1f2c011ce90ee6c5bf64ea"],["/page/11/index.html","a74ec9995b3aff8f41a20b62e10383eb"],["/page/2/index.html","8f1bc737135505ca48f9956591805e1e"],["/page/3/index.html","50ea8b6d403d522b0372c0bfb377e22b"],["/page/4/index.html","fc9110949f13104d49fc671b2e20b136"],["/page/5/index.html","2e3e65075b510e239641d5f886066461"],["/page/6/index.html","c743db697aaee75508ea13753bcebfe6"],["/page/7/index.html","66aaf4920b754aafbbbb0b5914f6a475"],["/page/8/index.html","fb61fe239c26a8c1fbcad26b1134942c"],["/page/9/index.html","9e9892750babeb75e428d96d15070d38"],["/sw-register.js","5da04ab5fd47aebe8c30e4646c95a353"],["/tags/C/index.html","0b377962fb6eea8bd165c1a02ae85480"],["/tags/CTF/index.html","0990b8f53ea9d892cde04b217b7cd0fe"],["/tags/HTTP头部信息分析/index.html","3f1b9638b7a4f977ece371922d23fb39"],["/tags/PHP伪协议/index.html","a0041d6477aef50cbf9f950e627a831f"],["/tags/PHP特性/index.html","75376842269a12d33c2236a544cee443"],["/tags/RE/index.html","4b421e1261c6d661fc16c981e66e968b"],["/tags/SQL/index.html","99580e987abcb70298320f776adddb92"],["/tags/Web/index.html","ed3b3d8ab273e3efc7a0a6c6836412d3"],["/tags/Web工具包/index.html","b5283615b1d5e3090349d92ffb6c1dff"],["/tags/awd/index.html","0e5483275f245f8f2ab67b24c44b6693"],["/tags/ctfshow/index.html","66bd862ecd291f15da1add3ce4de73a2"],["/tags/index.html","27e31b68fe415ea0689f16b2df2abde3"],["/tags/misc/index.html","6dc1d2a5e787c3497a6a191c35edc2f3"],["/tags/next主题失效/index.html","8eae6fc24f7221322aa098a7d0c03a74"],["/tags/sqlmap/index.html","f7c5f4ed90f8b9fad897bff731942eb9"],["/tags/wp/index.html","91285aa5d352933640aaee46def0aae1"],["/tags/xss/index.html","3fb53c1ff8de3b7aa29d2efceabed52e"],["/tags/xxe/index.html","088815488f6593dccfb0a337501d2a05"],["/tags/不蒜子不显示/index.html","568fb32a90d5fba1b7ae4da90be732fe"],["/tags/博客/index.html","a9a7bab734d95ddc0c687658c4d8de37"],["/tags/博客主题优化/index.html","151f3fb60d1948ce375fed1df923d17e"],["/tags/博客死循环框架问题/index.html","75c6b63a34862892877ccd34cb5a6897"],["/tags/博客部分问题解决方法/index.html","483e72be752da7e0ba906ee12cc0a7ca"],["/tags/反序列化/index.html","334776325edb3cb0baa2c92fe8907e74"],["/tags/命令执行/index.html","4f65cd0e44012216c23d022d1827a98d"],["/tags/局域网攻击/index.html","fde5fae0e1fe14645e17d5fe46afdc50"],["/tags/常用指令/index.html","f167d21ba48a7b28c2f4f2d069eb159c"],["/tags/心得/index.html","68cdd02c5fc0b8ba1403c7b82423f27b"],["/tags/文件上传漏洞/index.html","2c893ab466cffb505562d352d876e861"],["/tags/文件包含/index.html","8805af92cf2bea0d4bb3464ece84499c"],["/tags/流量分析/index.html","cfb6bbb60ab9a6b8ac967b544ef527ef"],["/tags/渗透/index.html","364b981428478895b7a57af7e8c1abd0"],["/tags/渗透测试/index.html","4ed501bf04041265996b9d67fd54cf16"],["/tags/漏洞复现/index.html","d3a47acd0893a02537447e44ec578c71"],["/tags/留言板/index.html","2d762b7793d7b645ee903fa5077e2f94"],["/tags/赛后复盘/index.html","ef5bdb5cacb1b9e038f8473247b3126c"],["/tags/黑盒测试/index.html","164d746b19f43055bb94c59a15bfd784"]];
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
