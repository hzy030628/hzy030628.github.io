/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","3dda2b55bf4dcecc9f56c3efb9beab51"],["/2022/01/11/博客制作遇到的问题/index.html","c41efb7041b4628e4e9597a223eb589c"],["/2022/01/15/C/index.html","9d7381443e0e09bcacbf61f3de984383"],["/2022/01/18/新版next置换/index.html","5d865c8d15eeefc199954d34cef6053d"],["/2022/01/19/不蒜子相关问题/index.html","cbab00767610a81b022166d43d2d4c84"],["/2022/01/19/框架问题/index.html","7353870b5d00ac0e4b34dee6cf488f52"],["/2022/01/20/ctf之reverse/index.html","4724511b56f2a61b4ac07eef1c8e1462"],["/2022/01/23/misc隐写题目总结/index.html","5874f314315e58d5c2e5e2ce224a0254"],["/2022/02/01/684/index.html","1fd3d869e9243be5f3194bec00b9ecbe"],["/2022/02/03/留言板/index.html","4a6caa2af2a5ca6836c614396a5942af"],["/2022/02/04/SQL简单注入/index.html","d387a18fdff16cee162a7a615ce3c00a"],["/2022/02/05/最全的HTTP头部信息分析/index.html","ddbd60397c7f09cf06e7439618973848"],["/2022/02/08/ctfshow文件上传/index.html","6c6eb485dccf3449e20f9d7a776c2c58"],["/2022/02/08/常见密码类型/index.html","958f569b058863a587ecbb657a4dbe28"],["/2022/02/12/VNCTF2022WP/index.html","2ad3c775816d746cccfdb07a4863fb79"],["/2022/02/20/ctfshowPHP特性/index.html","c9c9cf3f3079afe787817a2359e79ca7"],["/2022/02/25/php伪协议/index.html","ab6ecd71c0c81039c65af137e5737e48"],["/2022/02/26/ctfshow文件包含78-117/index.html","2db70f50f666ebfe74ac1923a12a573f"],["/2022/03/02/Clash漏洞/index.html","5fd781fc357e0787dd2d539f61284815"],["/2022/03/11/流量分析之题型解析/index.html","42d096a8ec7d936d6b2061d67e8cf511"],["/2022/03/15/ctfshow命令执行/index.html","3fcc449a638f825603e7a307bd42e090"],["/2022/03/22/CGCTF/index.html","677c2fdc4c698b08b443268d03686d32"],["/2022/03/24/ctfshowxss/index.html","a51bf2e42e3e63db1928ba8c19f0c7c5"],["/2022/04/04/黑盒测试/index.html","c845176af53471d79b3a51a89f83de63"],["/2022/04/11/nmap/index.html","1e09a9a2f5f7759851b77d900225be8c"],["/2022/04/12/渗透流程简要记录/index.html","2dfb619d3d100a0a4db8a2694e068de3"],["/2022/04/12/渗透测试之攻破登录页面/index.html","a87db5a84913c8c1fa4f28788b0d0927"],["/2022/04/14/xray扫描器/index.html","d419c9f856a996593b430fbc9b6fa02e"],["/2022/04/15/ctfshow反序列化/index.html","ddc11bf89d0815415eda848bf0d59421"],["/2022/04/26/渗透测试实战/index.html","4e932ad1f3cdee7f4355a987e7fa6345"],["/2022/04/28/sqlmap教程/index.html","270846e29d41846392c7b030cbd2abe5"],["/2022/04/30/认知文件上传/index.html","480c4996577f4790afce4ed98a74e63b"],["/2022/05/03/nahamcon/index.html","3220cfa575e8484e21c3b450f8629f99"],["/2022/05/15/awd/index.html","43c13d887b437dc78f64023ea9ea69cd"],["/2022/05/22/DASCTF/index.html","60aa8e43ebd52f253d2677097dd0f2da"],["/2022/05/27/520/index.html","e14dd6181f9b70a6cd1df03f6a2342ba"],["/2022/05/27/ISCC2022/index.html","fd9527e8e64a6b8cf437fb62eebede42"],["/2022/06/01/第五届世界智能大会/index.html","285feb3245a1229ce91c1a6ebf394029"],["/2022/06/04/SEETF/index.html","4923665539fd00f7a15313b351238562"],["/2022/06/04/bcactf/index.html","58dd424ee90390d016aca23f9d904fbd"],["/2022/06/05/BSidesSF CTF/index.html","f579fe915d1415a2ad5b1e54a32f8c5d"],["/2022/06/07/Docker部署web题目/index.html","e6d80119c33279efdb1d1dbee892fa9e"],["/2022/06/09/利用oj搭建C语言考核/index.html","0a0a91d066c11ad996194731b92ec221"],["/2022/06/13/限免题目/index.html","ad81f4f05c81ad8f08bb4d44aa809d6b"],["/2022/06/14/钉钉rce/index.html","bae635cab5d08c03b393f88b90938d6b"],["/2022/06/16/内部ctf/index.html","613e272943617a064ff2269c01018945"],["/2022/06/25/攻防世界高手区(一)/index.html","fb75970108dbbbdf74448c94bf56c1e5"],["/2022/07/01/两小时AK赛/index.html","3e1dc9d801646067fcbe0898a1ee23a3"],["/2022/07/03/鹏城杯/index.html","6f0fdc9ac059d1f3d821ca6c43fbb03c"],["/2022/07/04/XXE/index.html","e400a81757c3d6f8fd3432fb090dd9f1"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","6cd900318aa35b6725138e623a1018a4"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","e0ab9290ed80d80f681b82890e852406"],["/2022/07/08/chinaz/index.html","46843774275806ec3cf3922e3365419b"],["/2022/07/09/蓝帽杯初赛wp/index.html","e2626ac0824e6700efb702f14ac8ce15"],["/2022/07/17/NepCTF/index.html","6390a624935aac576ec1748ec27f638e"],["/2022/07/19/2022ImaginaryCTF/index.html","3348094561aee493615b016112db14d7"],["/2022/07/20/局域网攻击/index.html","603433345e728a5a153dae9c86090eff"],["/2022/07/22/2022BDSecCTF/index.html","4acc0c2851b5a6f72750b9d3f7212eb1"],["/2022/07/25/DiceCTF @ Hope/index.html","7df75d02fea240d49b42e9d208ea47e6"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","57083809f09d7c17cd8e2eeb82b627f2"],["/2022/07/31/TFCCTF/index.html","0e628bb9c04e5824b805fe49b0a04276"],["/2022/08/03/NSSCTF/index.html","6e8c09c135c3b1779990265110c737f9"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","c87325879d2994759dab297d8395ec07"],["/2022/08/12/T3N4CI0US CTF/index.html","067aebae9c4735de3aa987b9255cc95f"],["/2022/08/14/SHELLCTF 2022/index.html","b80693b6f11c140e352710cf16637db5"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","44be9d4c2fc750a9401dc2a2a88961fd"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","9f68cbdc218d1227dcab17f0d07f241f"],["/2022/09/16/柏鹭杯/index.html","fcf0343e7447805978600e96662f1c09"],["/2022/09/20/HUBUCTF 新生赛/index.html","555993b4a5766293fa441fed902c5e70"],["/2022/09/27/NewStarCTF/index.html","14a400ce9546b54ec36d5885a83113f3"],["/2022/09/27/bugku渗透1/index.html","467c56b8c0c7f6ae8391fd52b00e1c3e"],["/2022/09/29/tp6漏洞/index.html","270590492f91e5257bfda925036df432"],["/2022/10/02/SWPU NSS新生赛/index.html","1ecf12f43b803afc13fe78b2a1439b06"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","7932376fac9a794484a7d7b5ffd541d8"],["/2022/10/27/Moectf西电CTF新生赛/index.html","51287a341863d8f321fef64b6685d04e"],["/2022/11/02/HNCTF/index.html","0d7edea80dd0dd426e48248f25055827"],["/2022/11/04/2022工控CTF/index.html","0a9c229a5734f839cdfbf4c9dc3dfc4d"],["/2022/11/21/极客大挑战2022/index.html","0b74a10a05a26aad456681b656612e4a"],["/2022/12/05/TUCTF 2022/index.html","eb60b31f21ef2f1cd66a2aa18a95095a"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","21b64f1bedbbf1753012dac8186e35cb"],["/2022/12/18/金盾2022/index.html","f0b3df903fa80d3c233cd959ad95c1c5"],["/2023/01/01/CATCTF/index.html","c91bbd7a4ab1692e521f7575eac0ad0b"],["/2023/01/09/RW体验赛/index.html","54b98ba3873b7e9352c8a6da08b30389"],["/2023/01/10/铁三/index.html","8e59e28fa772e56852ebfd10cd673afd"],["/2023/01/16/Ugra CTF Quals 2023/index.html","d8109cf1b0e54047f7cd27f9c9867e9d"],["/2023/01/18/山石2022冬令营/index.html","13a1ef6f6646f88881d2dedae0570f91"],["/2023/01/19/SICTF/index.html","cecdffb1b50c5b2edcbeebc7e7ed9669"],["/2023/02/04/2023西湖论剑/index.html","ccac9d616afac70fde9cc2ad89220084"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","33dc465ca06160a0660010f7308ce714"],["/2023/03/04/公安/index.html","e475818399c06b6f52d7f2eb1306a9f0"],["/2023/03/07/mysql之udf提权/index.html","97a72ca09cafe846c1e3e8ff4fddd7a0"],["/2023/03/07/红日靶场练习/index.html","f17e52292fa1e36d3f03b555226a7d7c"],["/2023/03/27/NKCTF/index.html","5c444c056cb83f628ab3b5ee41f94777"],["/2023/03/31/楚慧杯/index.html","1760318b6763e9062b0e31f21fb4b872"],["/2023/04/23/HDCTF2023/index.html","a7953a216ecd59b12f5d7d1fc70a226a"],["/2023/06/01/2023CISCN初赛/index.html","c5261912b380f09ed8d29560485b2506"],["/2023/06/28/2023CISCN[华中决赛]/index.html","f9209f5c76c65bfb61eaeaa2a5579910"],["/2023/07/10/CyberSecurityRumble Quals/index.html","66185e3113458c172f447498b177ef86"],["/2023/07/22/2023BDSecCTF/index.html","47ebfbbe6ed1edce6147c414366102ff"],["/2023/08/07/SQL手注小记/index.html","44538a57d910190ce17996dc492a9faa"],["/2023/08/27/2023陇剑杯/index.html","989a432ef2c81abd1d23b8d0deacdcf4"],["/2023/09/17/2023蓝帽杯半决赛/index.html","c51b866eeda98f44a0bf5694acd6dc25"],["/2023/10/23/对于多层代理的研究/index.html","64fe7396d16a814a8922fedb14830b00"],["/2023/11/25/金盾2023/index.html","8c59029ab45a103d9cbb39b82f5397cf"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","980b8bd7cc0034c82949d9e3b35df241"],["/2023/12/18/2023强网杯线上赛/index.html","a717ef94e6f259299a1bfeeedc7aab34"],["/2024/01/08/基础ROP/index.html","5ac7ab40a8b94936056da47bfa8677b3"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","5eae950d474e72a722b5e2c297081f02"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","8db1c69f3039ebc07c7c140a820af89e"],["/about/index.html","58ebacb17767b6d5117e110023b38913"],["/archives/2022/01/index.html","fe6af27ec2ed461c87f663d6742c6676"],["/archives/2022/02/index.html","e81b80556ade51dd3636e4845d54c0e5"],["/archives/2022/03/index.html","a169c6d371b2b997d0f8838f00320a15"],["/archives/2022/04/index.html","715e3e7144ae1519e2eb3cf408e00728"],["/archives/2022/05/index.html","736b2f08be04d83fd907f1aa797aa3a2"],["/archives/2022/06/index.html","92372e71702e307e9888a79d6d437f16"],["/archives/2022/07/index.html","fd81a9d4f1a6b4013634c4790467454f"],["/archives/2022/08/index.html","5731dc3b4595850335fc42dacceae982"],["/archives/2022/09/index.html","4ec3e882d77dbbeecf594670ec657d3a"],["/archives/2022/10/index.html","e488aac2ebb7084f3bd10da9e5353d77"],["/archives/2022/11/index.html","e083753ce1bf38ade14ff37c3561464a"],["/archives/2022/12/index.html","a693ee2edf308701d11821aa2bb95f5e"],["/archives/2022/index.html","a56b114a9eae336a92057d2a89a43f67"],["/archives/2023/01/index.html","27060a184656fa91eae105e0e1b2cc6f"],["/archives/2023/02/index.html","7e8083b8c30c5f444ba4acf8084546ba"],["/archives/2023/03/index.html","6c4afe001d463f04a27db14f6bc6780d"],["/archives/2023/04/index.html","1867bbc03a11f78a3aee260d772f24f2"],["/archives/2023/06/index.html","0ce2d7689a1464229268213d05661d0b"],["/archives/2023/07/index.html","664cce5e020ef1844fca0511c38a5aad"],["/archives/2023/08/index.html","91326de32b1069b36a537b5fea915f6d"],["/archives/2023/09/index.html","b9ce1d94d837a3c923960aca694d9696"],["/archives/2023/10/index.html","19ea600ae9424350cae9065e8bbe1e1d"],["/archives/2023/11/index.html","f02c2f4660598c3eeab86998424fd55b"],["/archives/2023/12/index.html","17cd9132b108a643bbbb61fdea121fc2"],["/archives/2023/index.html","38a138547bcb9f40b5ae9c579c0f898a"],["/archives/2024/01/index.html","e08e662515977c46ede4651ff817c23f"],["/archives/2024/index.html","da4814c10e72fde6f6664da42a255b0a"],["/archives/index.html","5e77775ad0564967302888b22767cb4f"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","637aed10d3c6b757a2c344c5f71a1c75"],["/categories/CTF/index.html","30246d3087eb9f956622b4a601a90f70"],["/categories/PHP伪协议/index.html","a30b13eb1b00154aec4e75e43e602a1a"],["/categories/PWN/index.html","2ebf354c479992c1de9bfa7a1a58648b"],["/categories/RE/index.html","cead72e8031c6cfbecf21b63497ea7a4"],["/categories/Web/index.html","aab78177a3c9029c81cacca12f4a32af"],["/categories/awd/index.html","0c1975e1c6b0e57f88a90b98b41f6679"],["/categories/index.html","0fa52230cc09b10e21e5be6f2d0a6274"],["/categories/misc/index.html","3d0997a0b0e3f404b5ceffd795abe8a2"],["/categories/sqlmap/index.html","f363b10852a0923c5c8e1341c087b83e"],["/categories/博客相关问题类/index.html","6acde2910fb7dcf00a8619b3d6317309"],["/categories/局域网攻击/index.html","07285aa6cfd12f7618072bce8bfd3d63"],["/categories/心得/index.html","f1c3d25745af0bf64fed2a6da65012b6"],["/categories/流量分析/index.html","262a0d39735fc2f4af1209e0678f845a"],["/categories/渗透/index.html","0ac67951593ec12d2334250fd380e1e2"],["/categories/渗透测试/index.html","2e1542bca5610f950afb6f817b53f29d"],["/categories/渗透认知/index.html","fcef0eb3240d4d6a31ab4f7ad3bc6876"],["/categories/漏洞复现/index.html","e06b0aa89cd08215bd1f98141baf40f4"],["/categories/漏洞测试环境搭建/index.html","7d45dcf0f953900ffa4c286d3469553a"],["/categories/赛后复盘/index.html","44bdc2b8b52c39e37e6ece35db7cd3a9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","4671fede00abec5790026b35b4bc1a88"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","fb66c77c710ba394f654549edfb7beba"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","bf66674546556e1895639736322671b6"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fc9f342f958c54dce04562e088ecb827"],["/page/10/index.html","740a41e7dd066028346a46309dcb6956"],["/page/11/index.html","5b11d8836329f04b77b24b36828d0dc1"],["/page/2/index.html","d2f1362c3d3daa13207d62687f137e39"],["/page/3/index.html","f9976f02086c0505924b287a7d658914"],["/page/4/index.html","48a0671d453f4214098ea9ee699b3f54"],["/page/5/index.html","7c192cb12c41afad9b54a86aa27d776a"],["/page/6/index.html","aba0c6f3d896726e63dc0fc4ea8c95ad"],["/page/7/index.html","cb3bc706c464bfad734917f8c38a10c2"],["/page/8/index.html","bf6851b6db38e9282a689bf2aeb1a0f2"],["/page/9/index.html","97df07447ae95bbb6d049dba8262411f"],["/sw-register.js","d06e6fd3d3526174adda2f43c694e973"],["/tags/C/index.html","0000b614169e4d6af5c5ccfb9473372f"],["/tags/CTF/index.html","35f5c3e2ba12c4e7b2aef26214797881"],["/tags/HTTP头部信息分析/index.html","02b24715ee3e6952b216ddcfa898cf07"],["/tags/PHP伪协议/index.html","8991cec91eace21ee3adb31967de864d"],["/tags/PHP特性/index.html","7ef6d6769a076b625721d5c8c78e17d2"],["/tags/PWN/index.html","2c7bc9e6e0aca8b3164bfaf436ae1009"],["/tags/RE/index.html","4d6af76bc5d159cec43bed0a3ee1b189"],["/tags/SQL/index.html","4b60729bef8f8afd855d8c5eff8114a8"],["/tags/Web/index.html","5446da647f30d5ce85421bc6661e6e73"],["/tags/Web工具包/index.html","c9872f52671955e5e3c2a0b1e7a83f22"],["/tags/awd/index.html","7f9e5edc48d9ebdfb2a02b1726d0f982"],["/tags/ctfshow/index.html","d962ba2e2a34d92943cc7436f42f5bf3"],["/tags/index.html","76fd70944d22e0b22a2a5bee3dfd082d"],["/tags/misc/index.html","7fbefc72374df07b6edec6327a570144"],["/tags/next主题失效/index.html","1501123c68483b28277c9da80a6ca499"],["/tags/sqlmap/index.html","303d1dfeffc03b32e6ae31be4ba2a253"],["/tags/wp/index.html","bc26bb18f1ae2855e918c2c5e6b0902b"],["/tags/xss/index.html","9fd16ea79f6f919801472190173df154"],["/tags/xxe/index.html","a4fe75bfe51e346a99b34413bbb6877c"],["/tags/不蒜子不显示/index.html","7b1c78deb578c8298c98380fb1a4a7b6"],["/tags/博客/index.html","7da57e6f4159644ae67ed45ac434737c"],["/tags/博客主题优化/index.html","84de18974f353ab206347a029c29a8c2"],["/tags/博客死循环框架问题/index.html","da8d57732bb17af5a494588f160fcfa4"],["/tags/博客部分问题解决方法/index.html","78f38d40cf1f14caea998ee2efb9c3ae"],["/tags/反序列化/index.html","09199e04d9c7bd4e14174a5275049609"],["/tags/命令执行/index.html","a0ce1262880eef0e8d0356297af761b7"],["/tags/局域网攻击/index.html","b281e4d9f95d982c804e683e8521e7e5"],["/tags/常用指令/index.html","56a50ccae56c7e060491d99284b2df99"],["/tags/心得/index.html","e20e11efe28c2670ee2c5c6d71cdb5e3"],["/tags/文件上传漏洞/index.html","51fd4c7302b2358c2ae0a243866aa06c"],["/tags/文件包含/index.html","ca3a457163e641cd872c120d6171f839"],["/tags/流量分析/index.html","8fd6c082f8223876ae19265e3498c381"],["/tags/渗透/index.html","2111661baa953085bc77df29fe9f2f5b"],["/tags/渗透测试/index.html","1c6f20d7318149c7c242774a835cfac2"],["/tags/漏洞复现/index.html","5fff2554f4d33692b1d651f41f7a319e"],["/tags/留言板/index.html","85042302dac480a5b1e3785a2dcd2e94"],["/tags/赛后复盘/index.html","a13dd76ad57dd0dee6f3cd42e292a16e"],["/tags/黑盒测试/index.html","f086005b152770cc491fe86cfece75f4"]];
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
