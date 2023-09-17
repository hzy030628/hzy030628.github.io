/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","4d98f6f34885922df920a473b1521136"],["/2022/01/08/ctf之web/index.html","9c6d795d7e0784aebf4bc359449dcedb"],["/2022/01/11/博客制作遇到的问题/index.html","f500429b9e517a2caf4d7ebf1fe5481f"],["/2022/01/15/C/index.html","94f4959bb6d7d2f35f4f530c8757e992"],["/2022/01/18/新版next置换/index.html","4ac35ba600579a668bdb4ae6089ab4d6"],["/2022/01/19/不蒜子相关问题/index.html","7f3a9a1e749507f23865f1dbbdacd279"],["/2022/01/19/框架问题/index.html","d951565958d88da87a8268c5fe9aa74c"],["/2022/01/20/ctf之reverse/index.html","fe6beb6692b14ca64252ef5fde057df2"],["/2022/01/23/misc部分解题软件命令记录/index.html","31b78b718599bd5125ba309b98aadf24"],["/2022/02/01/684/index.html","613d72602c92be17a8df9724697b2176"],["/2022/02/03/留言板/index.html","e9ab7dcb328b9c41f2b3450b905e9f81"],["/2022/02/04/SQL简单注入/index.html","e5a04191621d49d8b38ea708db2f9211"],["/2022/02/05/最全的HTTP头部信息分析/index.html","fa5a681f706e6c3313ebb52c610b0018"],["/2022/02/08/ctfshow文件上传/index.html","6c5c88ef8b34432501f72ff1f85130b8"],["/2022/02/08/常见密码类型/index.html","f27e74a3d41718eb1ca888216566bc12"],["/2022/02/12/VNCTF2022WP/index.html","299fb8e7802effa6f146b917f5097caa"],["/2022/02/20/ctfshowPHP特性/index.html","d00a3569b3e4076ca688dbb2c346bab6"],["/2022/02/25/php伪协议/index.html","77cba261be14868aee72d5f481aab255"],["/2022/02/26/ctfshow文件包含78-117/index.html","df6c195e9a5d36bbbda30d605c432d54"],["/2022/03/02/Clash漏洞/index.html","e9e76153c15f1e592ac57c9fe15f8f49"],["/2022/03/11/流量分析之题型解析/index.html","f44fc0fd8711b273903310f45b7ce1d7"],["/2022/03/15/ctfshow命令执行/index.html","9f17f74bf51be1d6bea1cc0fb06e519f"],["/2022/03/22/CGCTF/index.html","62047312c965091fa58816d95d5e64a5"],["/2022/03/24/ctfshowxss/index.html","2a867a16672dc84e34e5f4d91400dc21"],["/2022/04/04/黑盒测试/index.html","746b84f60bc84aec1a13b17712930bf5"],["/2022/04/11/nmap/index.html","30a6d241cc07c132b51500a973d9bba0"],["/2022/04/12/渗透流程简要记录/index.html","5b6eb6a348d3bee9bfe27d2d26cfb790"],["/2022/04/12/渗透测试之攻破登录页面/index.html","52db3f8b891e51d8837cd23bf91e685a"],["/2022/04/14/xray扫描器/index.html","349daa414838e6962cc5cafe3bfffb84"],["/2022/04/15/ctfshow反序列化/index.html","c965e6ef3b5ae25304a0c04a2d94bf52"],["/2022/04/26/渗透测试实战/index.html","312f72bb0364e083f1d68c8da61bb849"],["/2022/04/28/sqlmap教程/index.html","d3fde2723aa6545a4e7293a9b570bc74"],["/2022/04/30/认知文件上传/index.html","87876989997e9376de59d5387a4d90b9"],["/2022/05/03/nahamcon/index.html","d2c8d4bf3f58a04d28d3236da8e6fec1"],["/2022/05/15/awd/index.html","eef44a7237057ee61a0d4a966de1191c"],["/2022/05/22/DASCTF/index.html","44d39a1946248c0ec0678fc3705c5843"],["/2022/05/27/520/index.html","6a2316ef75a199dec6b69afa5d138f25"],["/2022/05/27/ISCC2022/index.html","125e7331b2e37cbfafe30f8eb46b9364"],["/2022/06/01/第五届世界智能大会/index.html","e6e2c0ccbb8a98ab3d6e7c2184aa300a"],["/2022/06/04/SEETF/index.html","4ad51a7e892ff34a33de60b7fbfadb23"],["/2022/06/04/bcactf/index.html","e5bbd341433adc0fbd7630eb12dafd69"],["/2022/06/05/BSidesSF CTF/index.html","53059487e2a9c137555aeb6ed04f82ad"],["/2022/06/07/Docker部署web题目/index.html","68756959f57f0c4f0b367bbb13f5bbc4"],["/2022/06/09/利用oj搭建C语言考核/index.html","e596bcadbb67adea69a2babae3fe4134"],["/2022/06/13/限免题目/index.html","f0a3fb20ad05bd2aee84c9f0034dc27e"],["/2022/06/14/钉钉rce/index.html","953f3056780caa64de78ad6c91f10f82"],["/2022/06/16/内部ctf/index.html","e3a932147e85d20d4498aa665fe43769"],["/2022/06/25/攻防世界高手区(一)/index.html","469d7c3a66f0eca9a2b11ced2cf94768"],["/2022/07/01/两小时AK赛/index.html","ea8b57fe32a1c9b2278452760bb5678c"],["/2022/07/03/鹏城杯/index.html","010314e7cb681677cd9df3be7def4944"],["/2022/07/04/XXE/index.html","a952c142c51223afa3291954375e188f"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","10a2a313a94fab6cf4cdc35fcd4b2a2b"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","b8c9532cffc5eef50f99d126aebc4cbc"],["/2022/07/08/chinaz/index.html","384c431fcd74686a6347998b455bcfad"],["/2022/07/09/蓝帽杯初赛wp/index.html","8e4febc002ea148bea84436f745e271e"],["/2022/07/17/NepCTF/index.html","50c0bcc04c6637518b7e66ce0c99736e"],["/2022/07/19/2022ImaginaryCTF/index.html","fac95c1219da5d2fffcddd35406d2808"],["/2022/07/20/局域网攻击/index.html","fc4dc5ef3b90882186d44bfd4ef6367d"],["/2022/07/22/2022BDSecCTF/index.html","3112bbe3bff52231f2cc63856bbc73ef"],["/2022/07/25/DiceCTF @ Hope/index.html","ea159e1b8acc2353c68421a9418afb99"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","bc1f1c0a0052db500b9082ada9ac5dce"],["/2022/07/31/TFCCTF/index.html","f16ff3f1420888efe37d53624bb68150"],["/2022/08/03/NSSCTF/index.html","2d1cdd35717b5217dfac6a32441fcee7"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","19ca6164d331efb3e3e35fccbca2dfa4"],["/2022/08/12/T3N4CI0US CTF/index.html","ba1afd40b6879a52fb8e88a6c24ea838"],["/2022/08/14/SHELLCTF 2022/index.html","4071facf6f0347081b2deade2ea706fa"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","c161a319b9c7634aecc72fb5996c8879"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","ffcba7530a88ecd9045bbba636abd890"],["/2022/09/16/柏鹭杯/index.html","01d1ceebf9a9b0f9897aee6d44c1cdde"],["/2022/09/20/HUBUCTF 新生赛/index.html","e752006d690e7fbc95c6d51619159540"],["/2022/09/27/NewStarCTF/index.html","ea85dde01ddeca37c7e8f2265336d416"],["/2022/09/27/bugku渗透1/index.html","901f938b9bbb85bd7dba49e80b75a0b3"],["/2022/09/29/tp6漏洞/index.html","79ab1a727ef0c32674e3cdd182761143"],["/2022/10/02/SWPU NSS新生赛/index.html","60ce1a7efcac9fc743731febdeb2e2c2"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","e4ab6202e9495b5cba0877ccd805cab5"],["/2022/10/27/Moectf西电CTF新生赛/index.html","4e7521f81edad37f81a8b1c1de0e0d35"],["/2022/11/02/HNCTF/index.html","cfdfd99491055161abd1e2bb9e439f97"],["/2022/11/04/2022工控CTF/index.html","51eb63642ec933b33dae383a8cc47448"],["/2022/11/21/极客大挑战2022/index.html","409af60373c1007eb4692c6cb6cd1499"],["/2022/12/05/TUCTF 2022/index.html","8a506a47206019b7ef13b68cd818689d"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","dbf2f35e32cfd9161a5be18a524a36d8"],["/2022/12/18/金盾2022/index.html","a6c47acb27e279d065023ccdd4ceeacf"],["/2023/01/01/CATCTF/index.html","8bf3263c99834f7b9e25e97659e4cf49"],["/2023/01/09/RW体验赛/index.html","58ea8f30e8f71c4c2183e3f93d0a6dba"],["/2023/01/10/铁三/index.html","65b8323cfe0ca7a8a88a807ecdf99485"],["/2023/01/16/Ugra CTF Quals 2023/index.html","481d56ffc711dd241b3b6f29507b2a83"],["/2023/01/18/山石2022冬令营/index.html","094689c101deb63a924966648c58fa83"],["/2023/01/19/SICTF/index.html","340cf43d2d2860def0984bf8c6abff4f"],["/2023/02/04/2023西湖论剑/index.html","e0b4d7c8aabd7dde82437c4b48a05fb6"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","148d9ba5b446bc5c8433a1e3fd003ae9"],["/2023/03/04/公安/index.html","020c5ff3233a4b8f06fdbc0487395c7f"],["/2023/03/07/mysql之udf提权/index.html","7f9d9bf95fda6577c655360c96744823"],["/2023/03/07/红日靶场练习/index.html","02c1522db13dda28382375d23682fc75"],["/2023/03/27/NKCTF/index.html","e26e1e24eadc94a372140db52a60800d"],["/2023/03/31/楚慧杯/index.html","5d93a0cfb00219974004c1220dc228c7"],["/2023/04/23/HDCTF2023/index.html","651bea565313bbc9430e446c63b90319"],["/2023/06/01/2023CISCN初赛/index.html","4fd211451b3cf57f691aef28115555c3"],["/2023/06/28/2023CISCN[华中决赛]/index.html","d9c0cf369af55fdbc1266a95c8d980f8"],["/2023/07/10/CyberSecurityRumble Quals/index.html","e16c11cfcbd46fe0eda202029466362e"],["/2023/07/22/2023BDSecCTF/index.html","31458264d0b92ed0a6a766e4cc43ad4c"],["/2023/08/07/SQL手注小记/index.html","6470741e238a3bc4a120684b44838326"],["/2023/08/27/2023陇剑杯/index.html","2bdaa51c318964234352318529f8a10e"],["/2023/09/17/2023蓝帽杯半决赛/index.html","9448390b1d937a71262130318a973834"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","6aa9eb0f91f65687f9d37bedf774f055"],["/about/index.html","07ca737a2ec331a2f7c8034449785176"],["/archives/2021/12/index.html","fb0b0d4881203612f7e44ead1379d7f0"],["/archives/2021/index.html","54a6dd8fa965fecf1fed2c21b8b54558"],["/archives/2022/01/index.html","20023a981dba89d739f2cc008c6169de"],["/archives/2022/02/index.html","499bc7c7c92a9dcf43db1c0fdc2838e9"],["/archives/2022/03/index.html","f121bd4564be377c5dbd86c1814f3f23"],["/archives/2022/04/index.html","923784c247bd695e8bef65f97b3d36e7"],["/archives/2022/05/index.html","1169ef0be3b04067db83cb4558e694ff"],["/archives/2022/06/index.html","5c545b106f71a644001f03299cdaaef1"],["/archives/2022/07/index.html","c24f972e19e1c55d736a97e7d9301d9e"],["/archives/2022/08/index.html","a88eed4c8e6a924c6553398c643eb7d3"],["/archives/2022/09/index.html","76a3652d42adb27b9dae5d64b772fe20"],["/archives/2022/10/index.html","178efb398d5a9e4f9a8750a397874fde"],["/archives/2022/11/index.html","892d19786fee205ac775c0b4d372b8d1"],["/archives/2022/12/index.html","367c74e277f7e8ba34e2a5058af3bd00"],["/archives/2022/index.html","ae634d6eca2f6bdb31b996567209e9e7"],["/archives/2023/01/index.html","1bdfeb4d1426e63622de59baca5d1ce4"],["/archives/2023/02/index.html","ac87b868c691315c070b31d4f66434f3"],["/archives/2023/03/index.html","c8ada694dc6a2c0a302a01cb0a09aa1b"],["/archives/2023/04/index.html","21868f0198e59f00121713101de6d8e6"],["/archives/2023/06/index.html","57c20cd97d74a87c1999c82610df7517"],["/archives/2023/07/index.html","0f752f092dcc62503c56facb91979dde"],["/archives/2023/08/index.html","a0fde13d563e8c7d0384044da29f7092"],["/archives/2023/09/index.html","a20afb59b4d4d3b2a33f96ccb9766896"],["/archives/2023/index.html","4d30035479e71c2f26b1da647eb1790d"],["/archives/index.html","15691734a72baa11eefd088d6adc975e"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","edb7ac8c0053ca4532e976541e76c3ea"],["/categories/CTF/index.html","43fe11e70979574a9f4980c23f76d00b"],["/categories/PHP伪协议/index.html","ae108391ded91764ff1b1bc0b8660510"],["/categories/RE/index.html","f59218adfd557d0ef701ac8d36cc0417"],["/categories/Web/index.html","805af1aeff1bd61e0254a9bf7fa2eddc"],["/categories/awd/index.html","475c9ef972cc773efa06462b2339498f"],["/categories/index.html","9e721d465a7cd4bc067c21e9794dd7b4"],["/categories/misc/index.html","6ae69e655ab8c60ce3614340cc351772"],["/categories/sqlmap/index.html","1212df59d78764dcb5cf2af899a99c62"],["/categories/博客相关问题类/index.html","d23a494c5bdeafa2d4b3392ef53fc4a8"],["/categories/局域网攻击/index.html","3018348b0b799c10c170064252fe92d4"],["/categories/心得/index.html","5098ce9b7995abada5abc6eee63c8102"],["/categories/流量分析/index.html","f29b9ba8aa84a4bb74ad4fb5ead622a5"],["/categories/渗透/index.html","82ae3a8dd19ae0f40393a0522a8908ee"],["/categories/渗透测试/index.html","4a08bb4aa9c77fb4395e1915da5650d6"],["/categories/渗透认知/index.html","af825706779a0beed67da90b5b783e5e"],["/categories/漏洞复现/index.html","8ef8d94b9e6792b8c3340f10f7f469af"],["/categories/漏洞测试环境搭建/index.html","2add9a1a33dc843e0d4fab984f20b3ca"],["/categories/赛后复盘/index.html","e328e59e0c1eb91ad518407774e85e5d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f4cf7ca074d596ecf5d392590c4e8f23"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","396d56c06b2d7394664dfe628cc0673e"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","5dc979fd825f45205d17113fd7c78fb6"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","8929296944078bdfa69b2599a79ab0c1"],["/page/10/index.html","8913c9bfaff4d2f1c21330f4b9b3436c"],["/page/11/index.html","b5caadf3ceef826cea39a5af4f3fb524"],["/page/2/index.html","a9b9715cbb1fd33a3a57bfca57638339"],["/page/3/index.html","b625865a6bedbc75b55be422c5605062"],["/page/4/index.html","27bb6e301b4cb983762d1bb817326726"],["/page/5/index.html","bf34565962559bdfe1d98ae89e19b182"],["/page/6/index.html","309d2bd39d2fde700e2ae3320bfd8f0c"],["/page/7/index.html","ad7709581956da808f15733f16d325f7"],["/page/8/index.html","f7f8fb72335b28a1c0ee5676a7119274"],["/page/9/index.html","fefd39a38eef2faf7cd4043a9aac5e9f"],["/sw-register.js","a5b5e7e684eee5312eaf59902c7237aa"],["/tags/C/index.html","13ca06033c7566a4ce043b261edd7edb"],["/tags/CTF/index.html","2ab030e80309e2e1fb2f44778f9a355e"],["/tags/HTTP头部信息分析/index.html","94bbeb618eecdee2fb340316c7bd67eb"],["/tags/PHP伪协议/index.html","ea2d1f15f1342fbe27e87ca71054dcc4"],["/tags/PHP特性/index.html","18a18064a78ea797a2b05a095f1c86d5"],["/tags/RE/index.html","52f279034b2d612b40f006849d585802"],["/tags/SQL/index.html","b8007e1055e913937ef83f59cc580dc9"],["/tags/Web/index.html","b654590d539c5786b80645e9d53550fe"],["/tags/Web工具包/index.html","13b40b50a73f0c8e9660ac96c825704e"],["/tags/awd/index.html","c50ba96f921c47c778dbf06d2eb3fcc5"],["/tags/ctfshow/index.html","c007655cb87aae1b2c81b10b03ebc233"],["/tags/index.html","6cfa856c66f6b5662a1770da478d8cd5"],["/tags/misc/index.html","e8f37cbb2e590fa752509b4be129715a"],["/tags/next主题失效/index.html","31298be471af754d7d0ff4176d7b0292"],["/tags/sqlmap/index.html","31818bd617c5a0f92687adc2fd2146b3"],["/tags/wp/index.html","80e3c88019b51eae947648f6c57722c0"],["/tags/xss/index.html","796bc4c87f2e1eb479213ceede089cf8"],["/tags/xxe/index.html","c081e914dfa9cd87a10b0023976ca4a1"],["/tags/不蒜子不显示/index.html","f72801cc91c43e448166d7d77534dfa8"],["/tags/博客/index.html","83815209daa62466d88ee5454c1708aa"],["/tags/博客主题优化/index.html","dc3b17b4f62d85f8101029304c7f4e83"],["/tags/博客死循环框架问题/index.html","1c94d7195ab755906a8e3a3d036c2657"],["/tags/博客部分问题解决方法/index.html","b1ebc92a0f12d22be0cddac7925a0e31"],["/tags/反序列化/index.html","17afb10e58b3b8a0058810dfc9210f55"],["/tags/命令执行/index.html","e68f8d38b36c4e513404f58700c8ae42"],["/tags/局域网攻击/index.html","e0998f40c3af3fb2e9d5ca05a785d8ae"],["/tags/常用指令/index.html","9e9a870adf02383b4c1cb886bc6accfc"],["/tags/心得/index.html","d04c47c9da01472668f9713cb0ce0d8e"],["/tags/文件上传漏洞/index.html","6882c0785ad73b078bafeae469e361b2"],["/tags/文件包含/index.html","f156090bc362750f7aac2b65a686115d"],["/tags/流量分析/index.html","797a99f0d65f569d0ebcbebaa599dc8c"],["/tags/渗透/index.html","f83dbe9bb9fefe1e3ac9a93c22634f3f"],["/tags/渗透测试/index.html","2f276e56ba5e467e9411989035d47296"],["/tags/漏洞复现/index.html","7899abc8025e37b788f9e4874766c7b0"],["/tags/留言板/index.html","5a3cc1bdf752adf64c853de3a4854271"],["/tags/赛后复盘/index.html","93be60ff0205ecf9f3a31f6dbaffcb2a"],["/tags/黑盒测试/index.html","90ea89e80c024c31d1af53ca6fc255f9"]];
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
