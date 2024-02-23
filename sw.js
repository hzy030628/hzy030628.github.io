/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","54661921e2c0685164b0a64657e88bfd"],["/2022/01/11/博客制作遇到的问题/index.html","8dcfa098271938c85403e7463a67b5e6"],["/2022/01/15/C/index.html","2cbf705a01ef0f44ec840e5a7d46868c"],["/2022/01/18/新版next置换/index.html","49e7c7c57434e0a6a68943a755a42d8d"],["/2022/01/19/不蒜子相关问题/index.html","3074029940b21395657f4b4be0f57a51"],["/2022/01/19/框架问题/index.html","2f3ce641a8f40535f20806ae56bdef0f"],["/2022/01/20/ctf之reverse/index.html","07342f14b07b4bbf1c6bc7183b2ac693"],["/2022/01/23/misc隐写题目总结/index.html","fbf64df4a77aa500fedd8dc735d50d49"],["/2022/02/01/684/index.html","aea1deea75e10623753765b58950ff2b"],["/2022/02/03/留言板/index.html","8da4895c5db993337699de1216fe2140"],["/2022/02/04/SQL简单注入/index.html","aec962f7c9e9ba79cd44c2744869ceeb"],["/2022/02/05/最全的HTTP头部信息分析/index.html","67c3850b9b5a8451c3ef7471bee14a12"],["/2022/02/08/ctfshow文件上传/index.html","9051ba5935bd02487b57ff4846d90bcd"],["/2022/02/08/常见密码类型/index.html","4cd46ced29320edd6e5ef10b4748842f"],["/2022/02/12/VNCTF2022WP/index.html","e15fe2382fe355fcb33b30d96012afc9"],["/2022/02/20/ctfshowPHP特性/index.html","70cc188527b16c023bda5c79881d69ac"],["/2022/02/25/php伪协议/index.html","cf6f1c6ad52c4ac26feedcdae1272559"],["/2022/02/26/ctfshow文件包含78-117/index.html","90bbf7d7ef528d90394186a95db2ecb6"],["/2022/03/02/Clash漏洞/index.html","5cd2fd1d61aaa31ed30a9f3f98da7466"],["/2022/03/11/流量分析之题型解析/index.html","9ca35f04dc3df2d82219c27a487979fa"],["/2022/03/15/ctfshow命令执行/index.html","4235d8e4749aed4553ff2dd95baf6f4f"],["/2022/03/22/CGCTF/index.html","7d746eb85bf8a2ee00835553c9ef5311"],["/2022/03/24/ctfshowxss/index.html","a3808d1b7c9d57d8084b534b4347672e"],["/2022/04/04/黑盒测试/index.html","7da056d8180dc2fba6d01c7279610cf5"],["/2022/04/11/nmap/index.html","b6a40cefa895022f9c533e06db1bfa46"],["/2022/04/12/渗透流程简要记录/index.html","3f8634e9efbd1e25d7df340847312d80"],["/2022/04/12/渗透测试之攻破登录页面/index.html","f3c1fb61196177ddc262132991ef85e1"],["/2022/04/14/xray扫描器/index.html","243a4dd4530cd61050fad5fc6b1c47c5"],["/2022/04/15/ctfshow反序列化/index.html","5e98ef25bb284675f34bd87365301b0e"],["/2022/04/26/渗透测试实战/index.html","1244fa6d5401b3472e08f58a8de6bf63"],["/2022/04/28/sqlmap教程/index.html","dd3857b2c61033e7e77058cb5e131703"],["/2022/04/30/认知文件上传/index.html","4d4d7069626e7bc32badd07fa4111444"],["/2022/05/03/nahamcon/index.html","a71c94f54f6ccea35f98442391d411ca"],["/2022/05/15/awd/index.html","fe0a6318b354bc9ca1c93f0da23d765c"],["/2022/05/22/DASCTF/index.html","a2e57017755c3e587da3bb9b8e4334f5"],["/2022/05/27/520/index.html","d7ae626a0d4c4df2bc98ec9eca352e99"],["/2022/05/27/ISCC2022/index.html","fb0e6b795d539403acd0b3f079a52063"],["/2022/06/01/第五届世界智能大会/index.html","b9315b7a8e0fad4adb7f060a3e6e350e"],["/2022/06/04/SEETF/index.html","eeb6e5a52fb7f34664b1a9e77c9aaa50"],["/2022/06/04/bcactf/index.html","337e0dc0a7492fea8da832cd76ee770a"],["/2022/06/05/BSidesSF CTF/index.html","603863e223c488cf74546cc4dba5ab6c"],["/2022/06/07/Docker部署web题目/index.html","34ed80043eacb185eca5aa82972c07f1"],["/2022/06/09/利用oj搭建C语言考核/index.html","f3a835fa6d1b06c58662a0bbdb5d8f93"],["/2022/06/13/限免题目/index.html","8ac660e316061b6f3ab4682b7cc7cc9c"],["/2022/06/14/钉钉rce/index.html","7ba1ea03a589c4dac0621e71b2e8cb33"],["/2022/06/16/内部ctf/index.html","14700830817cf014a97bff287b57d6c2"],["/2022/06/25/攻防世界高手区(一)/index.html","74e33176c49560da280cbf371bf87e69"],["/2022/07/01/两小时AK赛/index.html","096fa6ba3e8d0c0fc02efdbbe92c2e1b"],["/2022/07/03/鹏城杯/index.html","8b391a11e5af902da9309f87a5333e65"],["/2022/07/04/XXE/index.html","67a4c6c0dac95475eee2aaa2d6abfef7"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","8ebd81f7b8a826b3c3638aa86f4d463a"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","c868c9056ec5cacdd7f827c123a4d15a"],["/2022/07/08/chinaz/index.html","4904a6022438a15cd5efd9f8e5cb8a0c"],["/2022/07/09/蓝帽杯初赛wp/index.html","a590ae5f7fcf7844cc100d7e76e77e1e"],["/2022/07/17/NepCTF/index.html","e509ed85577ee84cb51b9ac5da338715"],["/2022/07/19/2022ImaginaryCTF/index.html","48cffff5da2d4c70eaa9351cd427f740"],["/2022/07/20/局域网攻击/index.html","fbe943f9feeca9c99dd6ae9a3bdcd1c1"],["/2022/07/22/2022BDSecCTF/index.html","451a102aac339498f8bc5b8344a251c9"],["/2022/07/25/DiceCTF @ Hope/index.html","a996205b15c19219fc3f1b3355e86eb9"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","b51a206700c16e0e1867dae1fd0f3aa0"],["/2022/07/31/TFCCTF/index.html","2a5c4656dd893dbb9a7c91672d78a74c"],["/2022/08/03/NSSCTF-r4/index.html","dbf9da7a067ad38e330f403898b3e35f"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","b2dbea1ec5faf163a38fcef16fb12c90"],["/2022/08/12/T3N4CI0US CTF/index.html","0f5f4e5f8403db4a2b390f7452d826b5"],["/2022/08/14/SHELLCTF 2022/index.html","26001f6566be1b1b816fe65273c13ba1"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","9f17803a1fb2ee71802dd0ccae057856"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","bbb2eae0e37297c7b5b6fad041b397cf"],["/2022/09/16/柏鹭杯/index.html","8f0f6e68957121c3c2179ce06d9f2125"],["/2022/09/20/HUBUCTF 新生赛/index.html","a7008394f9a4d41ca1c9484e8ed441db"],["/2022/09/27/NewStarCTF/index.html","c2539e7b4172446561eee0119bdd911f"],["/2022/09/27/打靶-渗透测试1/index.html","2534ae8bcc325490e418960555b3a2e3"],["/2022/09/29/tp6漏洞/index.html","7c3c6375620d59ec0cc853d1c5537363"],["/2022/10/02/SWPU NSS新生赛/index.html","59b20f37d41378c5b799d4e3200655ce"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","4234818c75a8e1730c5adc264c3c2c4a"],["/2022/10/27/Moectf西电CTF新生赛/index.html","24115fed7b53fc258a1c7bea39fe53ba"],["/2022/11/02/HNCTF/index.html","bbb15710213d0f31e8f61483c6f40aa3"],["/2022/11/04/2022工控CTF/index.html","dee854e616472b0cc0862c3ee576ab5b"],["/2022/11/21/极客大挑战2022/index.html","8acdee3e3b775bd0050a399d066e61f9"],["/2022/12/05/TUCTF 2022/index.html","83be5a83b80906b63c8e961129d0bf5f"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","608d1ceea6545b9fad1f8e3ad4d7512c"],["/2022/12/18/金盾2022/index.html","b611443dcbe194c33e25b3abd5f611a6"],["/2023/01/01/CATCTF/index.html","2369c277ad0203123bba8d9c1f0f8c02"],["/2023/01/09/RW体验赛/index.html","a29faa00c122c3b5903f4891ba4c86e7"],["/2023/01/10/铁三/index.html","92a231cd6529584d23ec8c50b329cc56"],["/2023/01/16/Ugra CTF Quals 2023/index.html","d66862167cef9765677a740d1ffd4ef3"],["/2023/01/18/山石2022冬令营/index.html","7d744226344f3ee27a515b82b50aa2e8"],["/2023/01/19/2023SICTF/index.html","5c35337a6cc318ffa04fabdc5406fd42"],["/2023/02/04/2023西湖论剑/index.html","162d704f88b8b267ab31273ba361488a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","45e92507f814a192b7e0bee22687c4fb"],["/2023/03/04/公安/index.html","e76b51b8712660271d866b95aeb641cb"],["/2023/03/07/mysql之udf提权/index.html","10dd35a941a54ffbbe15813d1ce86898"],["/2023/03/07/红日靶场练习/index.html","6203d63b072116dae792de7b3a5a653f"],["/2023/03/27/NKCTF/index.html","099de126d66b6235f41b26e088240ce9"],["/2023/03/31/楚慧杯/index.html","94b674212d05dcb24f0ad7c7bbf5df83"],["/2023/04/23/HDCTF2023/index.html","daf122ddaf5c8e97c32fe1e1778e70a0"],["/2023/06/01/2023CISCN初赛/index.html","9a699b23a8140e77860b320eac3beecb"],["/2023/06/28/2023CISCN[华中决赛]/index.html","63a4b1d031853d0176103e98d6f4289a"],["/2023/07/10/CyberSecurityRumble Quals/index.html","dc88a41ba3fab17d9bc89721ddbb0564"],["/2023/07/22/2023BDSecCTF/index.html","0021297cc5a7f71b7672d413684a03ef"],["/2023/08/07/SQL手注小记/index.html","4ccd220eea769e3fb023d4fa3683f76b"],["/2023/08/27/2023陇剑杯/index.html","a66445a2f8607d1d1641780a6ce47ebc"],["/2023/09/17/2023蓝帽杯半决赛/index.html","40bf880235fca24f9335c5dc87e18ff3"],["/2023/10/23/对于多层代理的研究/index.html","240a9dd442e2f9be998a6f2936997419"],["/2023/11/25/金盾2023/index.html","d718d55ddfd79086f2d61c1a44f70736"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","f60ffcf3869a37521845a83cf4802537"],["/2023/12/18/2023强网杯线上赛/index.html","c7432c6e92ac2c02508325bbaed881dc"],["/2024/01/08/基础ROP/index.html","66a8fabfef257906d49fc0853ec61ece"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","dcf9eba5dc70668f84d379e73412edcc"],["/2024/02/13/打靶-Tr0ll/index.html","dfc88a0aa92f5bc1d805232c12a3ed7c"],["/2024/02/14/NSSCTF-r18/index.html","023959cea5585a9058263cda90b03187"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","0715b8c86c700df4136937e536a5806b"],["/2024/02/15/打靶-CFS三层靶机/index.html","9288c324a44b00af32eed8d67806389a"],["/2024/02/15/打靶-应急加固【简单】/index.html","6e358cbd556e8a5da594c07ef0178449"],["/2024/02/17/2024VNCTF-WP/index.html","df44cc439134272720d78119a513e03f"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","5a728f63d5da9b66f5a03325fada0cee"],["/2024/02/19/2024SICTF-Round3/index.html","129dbd0ccfa62e1bd63f85fd689ae899"],["/2024/02/19/打靶-铁三域控/index.html","cc92aff86b4fee8e47d46748e2161acd"],["/2024/02/23/ctfshow终极考核/index.html","d9a3bcbdfd97fd0c699a6833fd1b978b"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","c12e865133cc1c5e60a4f40f08b8730a"],["/about/index.html","767d397a4009006374d27997af8ba094"],["/archives/2022/01/index.html","adba0c8d1a714df6370b74e4026d54b4"],["/archives/2022/02/index.html","dfa7dd14c6b0634a7d2f2cbd7672f8a4"],["/archives/2022/03/index.html","38fa114579bc5ba6e9a3898146b8fc5b"],["/archives/2022/04/index.html","6cde300de7e6dc221908adc18572e22d"],["/archives/2022/05/index.html","a8d680d09e5c71feb0eb16a0297f1b1b"],["/archives/2022/06/index.html","1d275b60509565df3d614e17b72855e9"],["/archives/2022/07/index.html","12cea81003e5b9d7b10460146c76a01e"],["/archives/2022/08/index.html","444521a44b83e63d8ef66c97757f057a"],["/archives/2022/09/index.html","4869edbb54d2b379f703d19c0d14bb36"],["/archives/2022/10/index.html","082e4b9e1f349057e1f54860bde641c7"],["/archives/2022/11/index.html","4e8d4ee8e72670785c72ad9c1d1cd052"],["/archives/2022/12/index.html","f5dea4b5ff743db4b02bafb730a6a8ee"],["/archives/2022/index.html","00279912b0ec6f0c0c18dcfd3194c176"],["/archives/2023/01/index.html","1d5690396599ea899b5998e0480df837"],["/archives/2023/02/index.html","7e9b43dccd27c7ee197786372a23fd48"],["/archives/2023/03/index.html","981ca0cc70dd44b60c3e8f3304c92332"],["/archives/2023/04/index.html","cff5c2385238f0077b8c015e274e47b4"],["/archives/2023/06/index.html","e7ccffc141ce3377a0bf016aaa111f49"],["/archives/2023/07/index.html","96229dfe98627d2cfe37df9352121f8f"],["/archives/2023/08/index.html","b5a9163146f0e36b45a88b9b8ecb0b04"],["/archives/2023/09/index.html","9fe589c7507bd57229f5312339a10f9a"],["/archives/2023/10/index.html","648bd2c8f9bb7b844029ae44a7dd060a"],["/archives/2023/11/index.html","a4cc76849327cc15bff02d84c25ae4e5"],["/archives/2023/12/index.html","561ff4a458dfec04295c13de26888664"],["/archives/2023/index.html","ccbaad97aa187d9e16817f0577fd0bfa"],["/archives/2024/01/index.html","da5ec448c59ee0a6185f0a63080724bd"],["/archives/2024/02/index.html","5e76f80753be7a5c2fac0bcaa428724f"],["/archives/2024/index.html","a4bf1504873d27ad14e07691d5d075e3"],["/archives/index.html","d1f2a2af6e7d5d6fbdccbbfc3c07c6b1"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","f0cd8da6addd6472637c24e4c103a933"],["/categories/CTF/index.html","009330ab2f035a48d1a0e00001daa5a7"],["/categories/PWN/index.html","46382c5440d8146f8c0ff0a560d4372f"],["/categories/RE/index.html","20a4868ec69b2657101a58e54e637492"],["/categories/Web/index.html","619c508fe9761d90a84b905dad379d8f"],["/categories/awd/index.html","bcc9eb2c20901c69029539f3b6f25502"],["/categories/index.html","2c3e123b89008aecfd8cee768e7082f9"],["/categories/misc/index.html","e48450164e2e05471f1a3c7dfa03f53d"],["/categories/博客相关问题类/index.html","586b23e08a7598e7c261e30d9616e05d"],["/categories/局域网攻击/index.html","70ff5dde70c8fe2a71c348a9232c1998"],["/categories/心得/index.html","10ae39c94b4f882667960c348fc419f6"],["/categories/渗透认知/index.html","fb60241f23d37f68fdcdc1d14cf96e19"],["/categories/漏洞复现/index.html","73342271584baa57a42cdabaa22d8a18"],["/categories/漏洞测试环境搭建/index.html","8bc7c141298b5a295fd4db98ac3e0525"],["/categories/赛后复盘/index.html","c0206a05cb9ee57ac53405e795b57951"],["/categories/靶场训练/index.html","d0307866a9192562e784c065eb975da1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","2dba2806219a867abc72c9f6b764e243"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","6df550e77e61553d6e94baab991372c2"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","486b695defbe9c3d9cd0915427614ac6"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","0b0553c7a06d5fd26d035157cd75e875"],["/page/10/index.html","5785713278d04c9c04a5173bac69edd3"],["/page/11/index.html","0dcf8c48a61d06819a922d55d3c4d74f"],["/page/12/index.html","b903ff4915261633fd45d9669c9c5ced"],["/page/2/index.html","5e9cbaa0d9d7e115b3b5f1d6a905a1bf"],["/page/3/index.html","4be03768aa612e82e8fdc814d070e10b"],["/page/4/index.html","f20ace92219ac97db33f87d981a54bda"],["/page/5/index.html","81bb16f736954010e6d4b41bcad4b663"],["/page/6/index.html","9085044456edb04275d6788079b5e6d8"],["/page/7/index.html","c0b7db8c7dfb324f3028f1c3b96c22a9"],["/page/8/index.html","ae16340424307d0da2fe6f7b5fc3ad8c"],["/page/9/index.html","89aeeacddf2cdc54b22dc7d13a05fd91"],["/sw-register.js","402363e236cab395a880731b68de9764"],["/tags/C/index.html","b40af65dc47cf1360f0253b94c9399e5"],["/tags/CTF/index.html","7b40f31739bf849b69dd7b6d2ff5c0b2"],["/tags/HTTP头部信息分析/index.html","0a925f045904f4c441649d466d0f144d"],["/tags/MSF/index.html","dd1217f1368c4f815ad68b5e3ce82fd9"],["/tags/PHP伪协议/index.html","0c7506393a2a02fa843670d0540844a8"],["/tags/PHP特性/index.html","d89f5ff093992da058f124326c362e45"],["/tags/PWN/index.html","8e3aa49dbc23f61fa69e6e15ece0f2ee"],["/tags/RE/index.html","2086fdb4898026dc203b283d07ed2de5"],["/tags/SQL/index.html","520a3d4e914bba848f3bb5ac345bc72d"],["/tags/Web/index.html","df224e61b7edf693abc866e4a2ceb37f"],["/tags/Web工具包/index.html","83884a82266a5aae76a2866bfef4a6a7"],["/tags/awd/index.html","9f2e50f1d3a24c32aa844b328a7c85d5"],["/tags/ctfshow/index.html","8991f82872b8b72098d4091fccd9f32e"],["/tags/index.html","1849af9e16ca0541983feb130a1dd058"],["/tags/misc/index.html","443347a6017b5fb5e434c790755a0ae2"],["/tags/next主题失效/index.html","87125ddeff0f6e1a06c4644f20302b98"],["/tags/wp/index.html","351593cdae1fd6f679a67f85b83fee06"],["/tags/xss/index.html","e16c0c4586d2527c2ccb488796fcede1"],["/tags/xxe/index.html","86205e1f52eeb2ed001f30c83209ad80"],["/tags/不蒜子不显示/index.html","7ea389b2d9158d87db0d33cf5e49b44c"],["/tags/博客/index.html","20dcc84dc69728a282c9a41b752caf98"],["/tags/博客主题优化/index.html","97e89e248834147a539b0b305b2e8b2b"],["/tags/博客死循环框架问题/index.html","38d2d3ca0b13aa822aa2bc09589f99e9"],["/tags/博客部分问题解决方法/index.html","5a208eb92f5cd473d266c754e2ef5584"],["/tags/反序列化/index.html","bb0df6fcbf2f37f2f241b5bbdb08ab9a"],["/tags/命令执行/index.html","8896a9b7ea3b1ea2491486d63f5cbdd8"],["/tags/局域网攻击/index.html","fc442da8fc931ee762f22d841782ceff"],["/tags/常用指令/index.html","2e66174fed6b808c4396324e88be7315"],["/tags/心得/index.html","b1b23fe894506e65adaa59d742aae2b9"],["/tags/文件上传漏洞/index.html","25ac697fc1f0ec98cb11821a78a37d11"],["/tags/文件包含/index.html","2f49f718d699aaf7cc6e33b4d719c79a"],["/tags/流量分析/index.html","b10268d1cb8c7ffb9081f30fdd931b37"],["/tags/渗透/index.html","ca45ff1ca4bb5e441c51e844d36239bc"],["/tags/渗透认知/index.html","1f7b64531ae24a3b9b9fd56863dc8d92"],["/tags/漏洞复现/index.html","14c95375a34434db02ea8e4354f96c0c"],["/tags/留言板/index.html","b06915b83964a8b0f7366108d606841c"],["/tags/赛后复盘/index.html","7ca7a21dee08a4d7b9fc8be2f70a0403"],["/tags/靶场训练/index.html","3f455c1cc3f0be9e4fc760afb365056b"],["/tags/黑盒测试/index.html","a3392e36bec80c310bfba61bd7379c41"]];
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
