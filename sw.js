/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","07b5237cad88a4cb9abf8b78eace7467"],["/2022/01/11/博客制作遇到的问题/index.html","03e27cd19312bf818f558d619bb01bbc"],["/2022/01/15/C/index.html","495e3a704636c6cd8d13548f543d4553"],["/2022/01/18/新版next置换/index.html","7b25063a10d4b0a49aff90a1f50e0a50"],["/2022/01/19/不蒜子相关问题/index.html","5c218283b31be7051b5610c8381fdcf2"],["/2022/01/19/框架问题/index.html","d38f0699652e3704770b23d64d7c45e4"],["/2022/01/20/ctf之reverse/index.html","2722ea7b2cd22b7f09f3d331a5bb9526"],["/2022/01/23/misc隐写题目总结/index.html","5b1a7461faab907fb513513c95294ab2"],["/2022/02/01/684/index.html","daa51b03405d0c763159705098203a3a"],["/2022/02/03/留言板/index.html","5d0aedfc89eb1beed1dfd3fe4b685732"],["/2022/02/04/SQL简单注入/index.html","410b68b6737683fc9e6fd3050c8fb6ae"],["/2022/02/05/最全的HTTP头部信息分析/index.html","9bb4149bbffebf8aa1f668deb1a5dd80"],["/2022/02/08/ctfshow文件上传/index.html","b10d0b1cb3efd6e9bf2c2d60504248ef"],["/2022/02/08/常见密码类型/index.html","ab59e24cd7cf18f1c1b2fcd5ad6fd16b"],["/2022/02/12/VNCTF2022WP/index.html","2d513c578ac817ce098fd3d78b47745c"],["/2022/02/20/ctfshowPHP特性/index.html","e2d26651dc0a1ca20592fb7e5c1a92d3"],["/2022/02/25/php伪协议/index.html","cda836bd518536aa8371c7d66a1c7174"],["/2022/02/26/ctfshow文件包含78-117/index.html","1fc1676f219b9aed5c8bec714182946e"],["/2022/03/02/Clash漏洞/index.html","a12b42c3db0e9e60da35cc18b5309fde"],["/2022/03/11/流量分析之题型解析/index.html","71fdb5e75b4ea55d1bf78f5bf1faf874"],["/2022/03/15/ctfshow命令执行/index.html","a4ae54c31bfba8651b6fce005ff682db"],["/2022/03/22/CGCTF/index.html","640b4f5fcc5ad72f265e3d43ab573f10"],["/2022/03/24/ctfshowxss/index.html","7a23b1eff90cf3ee09967b7a2d09a6f5"],["/2022/04/04/黑盒测试/index.html","fd702166607ba392ac7cd667bbbf6953"],["/2022/04/11/nmap/index.html","3d3a292e11c68a21c0ae8c4570c38cd1"],["/2022/04/12/渗透流程简要记录/index.html","a1023b41a599e73531fdb244372ef0e2"],["/2022/04/12/渗透测试之攻破登录页面/index.html","7265be0280d0b28fd6a4ecebc78bc94c"],["/2022/04/14/xray扫描器/index.html","aabfa32471b0c3ab4f0e087bb6e073c4"],["/2022/04/15/ctfshow反序列化/index.html","49650755311020db37be1015034b30aa"],["/2022/04/26/渗透测试实战/index.html","9886bcbf2888215ab3fd5bd20cb070e2"],["/2022/04/28/sqlmap教程/index.html","b24ba9cd84aae8a6bdf1cbb900c2eec4"],["/2022/04/30/认知文件上传/index.html","e607be56e3c28aaabb68aded03fcb5b5"],["/2022/05/03/nahamcon/index.html","d208c82c90a2c3af8c7a73cd0e5389a0"],["/2022/05/15/awd/index.html","fc39ca28bfa73b64a7e9dc7fbc932431"],["/2022/05/22/DASCTF/index.html","9056001685a5f946dacad72d91fe1645"],["/2022/05/27/520/index.html","a6f83218c1ec13d8d7c0374e8235b2ef"],["/2022/05/27/ISCC2022/index.html","4865f4dbc59cf377a9d60a58bb583a1f"],["/2022/06/01/第五届世界智能大会/index.html","1967fb7d5f9440203fd189888456ca38"],["/2022/06/04/SEETF/index.html","16f4ae2d42fd145dec3c92b68a962647"],["/2022/06/04/bcactf/index.html","b837c2bbd2ffd27a7cd648703636f7f4"],["/2022/06/05/BSidesSF CTF/index.html","a20a7442df95ff4ba40be73168141ef9"],["/2022/06/07/Docker部署web题目/index.html","de6fd9b384fc30438d9ecebe89ac6108"],["/2022/06/09/利用oj搭建C语言考核/index.html","7ad21fa85ad887f3a421804a71f63502"],["/2022/06/13/限免题目/index.html","e68c8e79124a2de25bc755b5cbacf41c"],["/2022/06/14/钉钉rce/index.html","d844494690d25a3ec4add0cc251e8cbd"],["/2022/06/16/内部ctf/index.html","2a860a4696adea9a708fb30dc6ff1b47"],["/2022/06/25/攻防世界高手区(一)/index.html","39008f885f731b8ccabf73f8c7653a63"],["/2022/07/01/两小时AK赛/index.html","c13e08a423a71d0b5901ccbde57fb181"],["/2022/07/03/鹏城杯/index.html","977c03c97b191c7bce13ede216716c2c"],["/2022/07/04/XXE/index.html","cc1c70123c17d4375d6853392c3dd2f0"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","3297430ff4177a1d9a199bfdad506b06"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","c360205c92b78a293779327a9b478163"],["/2022/07/08/chinaz/index.html","243a03b1de6a23f649bab8fcafd904e2"],["/2022/07/09/蓝帽杯初赛wp/index.html","c07614906edb83c3dfb2159b7bdafb80"],["/2022/07/17/NepCTF/index.html","be111f4950cce8de266e677209a24b61"],["/2022/07/19/2022ImaginaryCTF/index.html","4022ae95ab0d126127d5c4143003ddf1"],["/2022/07/20/局域网攻击/index.html","28f3469c4148fbde54691eddc2feaae4"],["/2022/07/22/2022BDSecCTF/index.html","4587d2c385a4fa3459be20f6223e0d2d"],["/2022/07/25/DiceCTF @ Hope/index.html","068cf43c45c2ec82747e892840fc3f47"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","16a541414304e543ed8017b7a40fbd4b"],["/2022/07/31/TFCCTF/index.html","07ef185c14bb00d494a49d6f7f100a9e"],["/2022/08/03/NSSCTF/index.html","0e4bb7735fec7b6e5f83d41e6604aa3e"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","dec951d57108a6b5844747bbb11fa8d9"],["/2022/08/12/T3N4CI0US CTF/index.html","d6e8683f00c880780ba2d973803e9c0b"],["/2022/08/14/SHELLCTF 2022/index.html","28ef26bff3a9a7756ebc6d0a4ea77279"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","c865ab8f49dc2f9518c16abb443ad438"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","9cd4e6ce0577409e9d5c61996a6b890f"],["/2022/09/16/柏鹭杯/index.html","2d5a1cbf84de9cee54cb991969bae85f"],["/2022/09/20/HUBUCTF 新生赛/index.html","134e5dd1ce4422ef9c77eb31a6c03428"],["/2022/09/27/NewStarCTF/index.html","ee6443e2b69487d1805bc47279860743"],["/2022/09/27/bugku渗透1/index.html","161d806fac46ae8e62bf03f7e7590977"],["/2022/09/29/tp6漏洞/index.html","824364122f2afde82b86ea1a2e13c1ae"],["/2022/10/02/SWPU NSS新生赛/index.html","6b9f58c2242dcd899cc14e53f60d6789"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","e7ecfc8ca3e3a627c53a847efa39ae79"],["/2022/10/27/Moectf西电CTF新生赛/index.html","63353098accb835db5e157ef15fa2481"],["/2022/11/02/HNCTF/index.html","92901fc3590e1fbbab818cc185347464"],["/2022/11/04/2022工控CTF/index.html","1571ded3ea0e4638de22f19d6419c1cd"],["/2022/11/21/极客大挑战2022/index.html","50bc5f69efb8a1b885cc52bc2382f166"],["/2022/12/05/TUCTF 2022/index.html","4f53c70a9a6ec7d1ff7bab53ea4a6d9d"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","230adad3e5d13cbeb958b8d6ebd10de5"],["/2022/12/18/金盾2022/index.html","248a12f95eefd1ff76d48acc4a92318d"],["/2023/01/01/CATCTF/index.html","a71d7016d67349d411d3874cbac233dd"],["/2023/01/09/RW体验赛/index.html","a0fef0ca7c38aff6f180ae8cc6d8560a"],["/2023/01/10/铁三/index.html","7ebb29c43252c6e8c20b5a72a37dccdb"],["/2023/01/16/Ugra CTF Quals 2023/index.html","7bdf8975178772cac4ee71f6841ae1c1"],["/2023/01/18/山石2022冬令营/index.html","8dff298e9c01917f1a04df64df3c74b1"],["/2023/01/19/SICTF/index.html","cf68360a33447b662bc7f29d1baffe6e"],["/2023/02/04/2023西湖论剑/index.html","9b7e3a85d5be9006d641a3a5b9784138"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","71a047787bb66a9d64f2a9477fcf96d2"],["/2023/03/04/公安/index.html","9e7c0ca210b7ed9429976ee08dd267ec"],["/2023/03/07/mysql之udf提权/index.html","55dedf363489aa4c79d5bdb70aa288d6"],["/2023/03/07/红日靶场练习/index.html","76e860ea520ff3cc78cc6fb93a148770"],["/2023/03/27/NKCTF/index.html","78f4933968ac4db8cb346cb943940324"],["/2023/03/31/楚慧杯/index.html","e434ce11ad3e362707707df1003b7a84"],["/2023/04/23/HDCTF2023/index.html","62e4c600922567c1ad6c93633d216226"],["/2023/06/01/2023CISCN初赛/index.html","f0f8d5ffebfbded2652897721bc5097c"],["/2023/06/28/2023CISCN[华中决赛]/index.html","08a31aa0e6050fd8c4e391112e022109"],["/2023/07/10/CyberSecurityRumble Quals/index.html","37a432129508e737b0c27bf748c2a46f"],["/2023/07/22/2023BDSecCTF/index.html","c3581debb5443d546aeb3b63c448dd5b"],["/2023/08/07/SQL手注小记/index.html","cf70c1fdb078e7cf6a7295098626fb4f"],["/2023/08/27/2023陇剑杯/index.html","8814b673d74d02c52a87312314d79256"],["/2023/09/17/2023蓝帽杯半决赛/index.html","52c1374a370a6baa1f267e24fb1cd938"],["/2023/10/23/对于多层代理的研究/index.html","03104def8e4249f643d2be6e295998dd"],["/2023/11/25/金盾2023/index.html","32bcdef368e33f664511a66c577c6034"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","48b8e81e86c1e7d09afd2ff29fefefef"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","0a7e5a8b0c296ceca59449d871bf20dc"],["/about/index.html","9b830b1be5a3ec8a7426e49608df093e"],["/archives/2022/01/index.html","888ec8e5a7504c031952c959dd5f116f"],["/archives/2022/02/index.html","850e520fda9e9570fdbf35c5879ec8ec"],["/archives/2022/03/index.html","e7603be5a4d9b331c22178487f5c57f8"],["/archives/2022/04/index.html","f48b5ea87b7cbe4d186d14bbf5cf28f9"],["/archives/2022/05/index.html","48be31bae789ceb4a77ff46903d7f084"],["/archives/2022/06/index.html","f9802152630d4a63c27b10dbdce45a0b"],["/archives/2022/07/index.html","442711644bd4718090411d2117e3128b"],["/archives/2022/08/index.html","d6a6489108cf25cac682d8ea6e3fcfb5"],["/archives/2022/09/index.html","6fa0ede4e60f0533ebfad5b34fdb0d63"],["/archives/2022/10/index.html","81125917a0701c53b28b7a71e9ea8507"],["/archives/2022/11/index.html","67dcebafbfab65351e389e3ea72f71ee"],["/archives/2022/12/index.html","3e3996e471829f55b10aa6ac034b79cd"],["/archives/2022/index.html","e533f61e6828d79d1daca44f0993bb28"],["/archives/2023/01/index.html","053a16b6f38671487fe014d2dd752d1a"],["/archives/2023/02/index.html","5822f7afe23d95ddf22dd49dc3f1231a"],["/archives/2023/03/index.html","e578638d9ae6fb021a54e6ec81c9b283"],["/archives/2023/04/index.html","141f6661dc1e798368b4d76236ed68d6"],["/archives/2023/06/index.html","e95ee4038ab30a9c977cbde58ce48d6c"],["/archives/2023/07/index.html","4656f0c9fd4f8fc38f5cb70b63d97614"],["/archives/2023/08/index.html","7baa322a17b47d4051ed450382f33434"],["/archives/2023/09/index.html","90b018e0c31c32d4ff4b13090d239824"],["/archives/2023/10/index.html","a30c30b0d5dddf894827a6657df9c670"],["/archives/2023/11/index.html","90bca08958625282f3ba3f2aef6b3999"],["/archives/2023/12/index.html","47dd3d39ff15c62b11cebac1f8710c54"],["/archives/2023/index.html","3f074e623a81648e1a9f10abc8963309"],["/archives/index.html","ee0320cc4a4531ea7b17a3bbffa2e144"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","77957df991962b776da9b85713060a24"],["/categories/CTF/index.html","adbb5578bad5fdf1aebdfeaf802f74eb"],["/categories/PHP伪协议/index.html","1bd72a8942e594830e076105045723fe"],["/categories/RE/index.html","9c9a106d2f4c28344b819d305175c3e5"],["/categories/Web/index.html","ca713c8e5ee25eeef14bc3820aa009ef"],["/categories/awd/index.html","23bc38e7f3da4b9b642355ded5761ffe"],["/categories/index.html","d0c38f988962bb389e3236ccf8d694dd"],["/categories/misc/index.html","0ab83813539fe1967c145e5f256fbba8"],["/categories/sqlmap/index.html","eb583be878120f8754ddab8b23712c90"],["/categories/博客相关问题类/index.html","99a4924383c2243a5dc1856dcb85cfff"],["/categories/局域网攻击/index.html","d83e3573d7db19db1e9043b6a9dbdbfd"],["/categories/心得/index.html","39b853d2487a8300972eedf5599371db"],["/categories/流量分析/index.html","876102d7b1e3988e68e5233bef88a8b6"],["/categories/渗透/index.html","e51f541ac934b9781d99bec52902091d"],["/categories/渗透测试/index.html","66c2039c7457796e90b54d0c288021df"],["/categories/渗透认知/index.html","6f23ceafe6e6e0b5b7f36a33ab3f8185"],["/categories/漏洞复现/index.html","752b8628bae082ad5ee34a301ccabf55"],["/categories/漏洞测试环境搭建/index.html","9508f988a70f49039996865f4d76888b"],["/categories/赛后复盘/index.html","f62c7db151ba7c6de296522848224dd1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","19796257b64b0a35d0286e8ab4b6bff1"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","2a1f3b5d9d9bcb158e6e2255db404982"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","ebc7f4cad3e579b5ca15d5a1fb895a66"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","44295178030df54cd37158dbece32023"],["/page/10/index.html","cf9815db6220c309b82c872e015cafd6"],["/page/11/index.html","ac3abb0fc69ce942e33efeac1283e65a"],["/page/2/index.html","f3c78af72698592781ba51785f1d7ca7"],["/page/3/index.html","1b9e1ef53aab35368ee9684724e6f041"],["/page/4/index.html","1679eaa90b088be98e3556be6f0aa15b"],["/page/5/index.html","b57114a6df6fc30784b0e2dfbc42db3f"],["/page/6/index.html","d902acdd11e0f2d8079b29e11e3fcea1"],["/page/7/index.html","3b99845f0d6dc7d6bc83f056dd22c6ed"],["/page/8/index.html","5cb1b75d12c05094f974055952263b2d"],["/page/9/index.html","a37aa5949bf209ebe070a6d84b2f8637"],["/sw-register.js","df234391960ffba8324041e7e576449b"],["/tags/C/index.html","2c454814c60becce275f791ee1286cda"],["/tags/CTF/index.html","c58fabe20b554d478a286884ade7c260"],["/tags/HTTP头部信息分析/index.html","d47cb263fbb94d7e7d43095e887ed09f"],["/tags/PHP伪协议/index.html","d470c8a25ca1dde5f3a762081160f80c"],["/tags/PHP特性/index.html","ee19fbe7ad210ec1262656534659a634"],["/tags/RE/index.html","ff004349fc3059bab75c6f4408cc2b31"],["/tags/SQL/index.html","273256b20877e313b5268a2f7c56e4b7"],["/tags/Web/index.html","6f8be2b3e40ec7bffa2a6a86ed15af44"],["/tags/Web工具包/index.html","97d680c34907bf17b4f8ac3c72bd081e"],["/tags/awd/index.html","fa6c52e9c5416724e07bea4092621549"],["/tags/ctfshow/index.html","7d8578d35e8ed0b104022d0872576428"],["/tags/index.html","5b4b5f582ddf5edd74d702fcaa9d4339"],["/tags/misc/index.html","b70033687406fb2be2b097ebdd79d3b2"],["/tags/next主题失效/index.html","a86ecc2e1a149b627ad812e9cc4c6f92"],["/tags/sqlmap/index.html","f1477f1aaa9715b75e70ed61b4a343f4"],["/tags/wp/index.html","d98a742da3e544a189798f2f4ae3f636"],["/tags/xss/index.html","8471c5a0a96fe4de9ef8badefd48074e"],["/tags/xxe/index.html","dba808eedbebda2e50d24ec53a272ace"],["/tags/不蒜子不显示/index.html","3cf841edaf2a22d7e2575d74fb51154d"],["/tags/博客/index.html","18540f5da62a90377476c32865fbbc74"],["/tags/博客主题优化/index.html","a4f880c671d49b7fc72614a45f09134b"],["/tags/博客死循环框架问题/index.html","0d13ae849b923c5b2c6fbaba47b32bcf"],["/tags/博客部分问题解决方法/index.html","1f02eabc0eb98b0bad7ea9c8c13e2f58"],["/tags/反序列化/index.html","5535e6444737892beba6539f9b2f8100"],["/tags/命令执行/index.html","f63236e404dcdc2944146dd96ddb5107"],["/tags/局域网攻击/index.html","2ce8c1730a6b7f02c08dbd4a6fb53789"],["/tags/常用指令/index.html","d65891996595940375a0708fb43e8e70"],["/tags/心得/index.html","ef2e0a0107a0f649c23b7bed3f5bcd0c"],["/tags/文件上传漏洞/index.html","b0f3620b0f1465cc532f5f00941bdcf1"],["/tags/文件包含/index.html","9fc007d0b1b9269c66c5968a62a658d2"],["/tags/流量分析/index.html","4afe76f84f1570c39521df3ff0c32900"],["/tags/渗透/index.html","f4569ddc2bfddd4542a31443597d15e7"],["/tags/渗透测试/index.html","4f2829c396c9dc943f87d26765bba66f"],["/tags/漏洞复现/index.html","14b3c69971307134e0aa0c00fd4275ce"],["/tags/留言板/index.html","3fec10062cd1b4f234e33a8d03ca3d5a"],["/tags/赛后复盘/index.html","efe4d0a3f8758d645313b73cf08aa5e7"],["/tags/黑盒测试/index.html","fba5d85868acfbec7be93059d9bd0a6a"]];
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
