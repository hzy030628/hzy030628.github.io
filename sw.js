/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","d082b32c3302680c155328c6876fbcc2"],["/2022/01/02/Python程序运行常见错误总结/index.html","81a4179e1815ff4a5604877d8b6e2952"],["/2022/01/08/ctf之web/index.html","a946414c7e69cd2c29b52f6ab0109b33"],["/2022/01/11/博客制作遇到的问题/index.html","18d27e354e710b3c5f7da232beb1b6e6"],["/2022/01/15/C/index.html","c36e87ab9a428001ce4771106e35b5a3"],["/2022/01/18/新版next置换/index.html","d237a1d372af0ca236548e7a5f7427b9"],["/2022/01/19/不蒜子相关问题/index.html","b58d2e46be0ba6f9a4ccb23d39c84fc5"],["/2022/01/19/框架问题/index.html","573834978098882ac466d0326a2db8d1"],["/2022/01/20/ctf之reverse/index.html","a7246d2c204b46637eb61acfe2437362"],["/2022/01/23/misc部分解题软件命令记录/index.html","61a1fcc58995795fb2c5c8335faf51b3"],["/2022/02/01/684/index.html","743b32150c47435e5bfb906f59f09276"],["/2022/02/03/留言板/index.html","af88efc2ae2d3e7f59d84095f2558ff7"],["/2022/02/04/SQL简单注入/index.html","665aa9f40318745080e1bc8eb01c5f17"],["/2022/02/05/最全的HTTP头部信息分析/index.html","67bf78608e7be168cc8da31d1e41624e"],["/2022/02/08/ctfshow文件上传/index.html","380b13c8d7b5081423e68c8ed278a5c8"],["/2022/02/08/常见密码类型/index.html","ddba09869ce5a5424d1229b11c5f04b8"],["/2022/02/12/VNCTF2022WP/index.html","e3b9c2c7f249a6726117a9e10995182c"],["/2022/02/16/rce/index.html","1a399b13d1c439c19fd77583dd1dd8f4"],["/2022/02/20/ctfshowPHP特性/index.html","a1d16ad49e5d310c26d1c792b2776c53"],["/2022/02/25/php伪协议/index.html","12cbfe01689f5917f7f23b9ed1ad9762"],["/2022/02/26/ctfshow文件包含78-117/index.html","1ec2d1cc7dd3562b17e857bbf9caaa32"],["/2022/03/02/Clash漏洞/index.html","e6cedb9f0dca8ffd1df839ca9a8cf405"],["/2022/03/11/流量分析之题型解析/index.html","8a7f4d5268f9c401870b694d1187df39"],["/2022/03/15/ctfshow命令执行/index.html","3b6b1cd3e034afd73efe1d1f66c887e8"],["/2022/03/22/CGCTF/index.html","e6b3dd7838bd729e1067239d90890437"],["/2022/03/24/ctfshowxss/index.html","ce7c43fbe8bb2104c215332f03121512"],["/2022/04/04/黑盒测试/index.html","f48641c6c1d8148e5da9cc634186bb03"],["/2022/04/11/nmap/index.html","5166a76a07bdce0d1805823a93f769f3"],["/2022/04/12/渗透流程简要记录/index.html","d4342dae1927f36c9a59394582a61646"],["/2022/04/12/渗透测试之攻破登录页面/index.html","5dd523bfd0b1c79b8474f7f9d42d8a29"],["/2022/04/14/xray扫描器/index.html","2eba68bb8ab7e4cf3b7376471ae49126"],["/2022/04/15/ctfshow反序列化/index.html","8ced64b1b382f70d825d27073f72c4d6"],["/2022/04/26/渗透测试实战/index.html","20f2bd81cc9ca522c09d70fdc4f6c5cb"],["/2022/04/26/网刃杯/index.html","a836f9cd857a142dd75bb7831bac2424"],["/2022/04/28/sqlmap教程/index.html","1007cb5f00d6787046e51cc25d1e3d6a"],["/2022/04/30/认知文件上传/index.html","adb7be1571bec738cceb0e4381bc1625"],["/2022/05/03/nahamcon/index.html","54da19fde1e4f33c9f6f2c9230106c59"],["/2022/05/15/awd/index.html","7e747a354ba3f4904e8b83ac9b162ecc"],["/2022/05/22/DASCTF/index.html","febf071d4227d8dc7f4e80213301689c"],["/2022/05/27/520/index.html","d9c102f275b1738210911a0c8ea0b48b"],["/2022/05/27/ISCC2022/index.html","1897057ad3335f30a28a840f80bed977"],["/2022/06/01/第五届世界智能大会/index.html","de17ce43595a140cfe4622fa3a005fd4"],["/2022/06/04/SEETF/index.html","1880baeda296390940572ce23c534807"],["/2022/06/04/bcactf/index.html","2a372ef8afa627e376558d688c68f736"],["/2022/06/05/BSidesSF CTF/index.html","e551275c45b45a276e3b2844f7e7467f"],["/2022/06/07/Docker部署web题目/index.html","9b23676cbf4f6c20b0df6a5ba9222b4e"],["/2022/06/09/利用oj搭建C语言考核/index.html","868d79cc81deccef1919c9595b41cb66"],["/2022/06/09/论网站502/index.html","07404d55b9979321ce0d775651b9e2db"],["/2022/06/13/限免题目/index.html","ba16d3b8c9e79467efb2c909c02c75ad"],["/2022/06/14/钉钉rce/index.html","70e094f6718ced7009de54d28a04d02d"],["/2022/06/16/内部ctf/index.html","202e2f480abf82e59fba40b240386f70"],["/2022/06/25/攻防世界高手区(一)/index.html","6cf87e7332b0f9e8ff6ad60ed0a5e104"],["/2022/07/01/两小时AK赛/index.html","fafc699635ab55259c4890b2bc20464f"],["/2022/07/03/鹏城杯/index.html","89d80abcad5a125607a1813f132dc167"],["/2022/07/04/XXE/index.html","918797c5437434165e7e8f0136731e01"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","12d4ccb61531b54d2706395f0874999c"],["/2022/07/08/chinaz/index.html","6b8ec78c038d9d661039ba1235865767"],["/2022/07/09/蓝帽杯初赛wp/index.html","2e76e36dac97f3cc066ed7418b3f93ff"],["/2022/07/17/NepCTF/index.html","3a2637a9f2b9643eaa06dabad6f75c06"],["/2022/07/19/ImaginaryCTF/index.html","251db8fd2a6181aaee3a7345ee5e4a9a"],["/2022/07/20/局域网攻击/index.html","f312f7c4622c2f0fe526eb7b6e60fcc0"],["/2022/07/22/BDSecCTF/index.html","e1a26157f20f26a9375ed486d2d8473e"],["/2022/07/25/DiceCTF @ Hope/index.html","e43bf89dfcf35a4c2f27911c61928530"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","98de84fceabbec56538550a401396564"],["/2022/07/31/TFCCTF/index.html","1988ddcc9bff500de42bc4d11070e080"],["/2022/08/03/NSSCTF/index.html","8b03c5f7ddfa2770b8142929f851245f"],["/2022/08/12/T3N4CI0US CTF/index.html","ffc00eca5f0f593d41ea20b4d8499063"],["/2022/08/14/SHELLCTF 2022/index.html","81f1beb5fa5ec5e84d76edb1e6e7026e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","0a3e1aee7bf1316342f7671ee2b05aa1"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","5ae90b1a02bc4a7c390d146de6268546"],["/2022/09/16/柏鹭杯/index.html","c1ffc1935217fe5294bbb1a53b5cd6c0"],["/2022/09/20/HUBUCTF 新生赛/index.html","972a1f57dbb9101b1cf8051b68c3183a"],["/2022/09/27/NewStarCTF/index.html","0c490eb7927ec6b0dc40c2d830afe4c7"],["/2022/09/27/bugku渗透1/index.html","6e4cdd0530eecd3e2a6d06569a8e71d4"],["/2022/09/29/tp6漏洞/index.html","94f0f29fdf0af1d8f8dc269cc39117e7"],["/2022/10/02/SWPU NSS新生赛/index.html","0b842b333126773bfca7c2a350d3182a"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","1b1f8c98ce1079f8c48820dbd12cc040"],["/2022/10/27/Moectf西电CTF新生赛/index.html","1de96454e7fac8a6a25f368f2b1470f6"],["/2022/11/02/HNCTF/index.html","b8d19f8424976533ea24d06b812372e5"],["/2022/11/04/2022工控CTF/index.html","8ab8feff311a5d6d776eff3d5fc2c150"],["/2022/11/21/极客大挑战2022/index.html","9586fe17a29e0e78f141e9dd66ce19f1"],["/2022/12/05/TUCTF 2022/index.html","3a1e5f6a541a68724c5943ad78905586"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","8c719ec4f9d93d69a11164b5b4edb7ef"],["/2022/12/18/金盾2022/index.html","b78dea8d848c4cab4724e1d053eff3be"],["/2023/01/01/CATCTF/index.html","9096b6d8d719ac968020ed3e4cbb0e79"],["/2023/01/09/RW体验赛/index.html","d58a893e77c4d8f4fa15739642aa9c77"],["/2023/01/10/铁三/index.html","26a36501bc01254c6c747478ebabb26c"],["/2023/01/16/Ugra CTF Quals 2023/index.html","e2e5308bcf7f50f6e1015e1fbe7a2ab8"],["/2023/01/18/山石2022冬令营/index.html","241966eb7c6eb4dd1d7692e859153021"],["/2023/01/19/SICTF/index.html","5904c3b36c752051c91e3bfcbb1a3701"],["/2023/02/04/2023西湖论剑/index.html","7a4235d4e701163e91d4f12c8dac97ee"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","3a088af3dd69c8863866cfad736be74a"],["/2023/03/04/公安/index.html","7c1c82b108688586f6e0f154b7dc0691"],["/2023/03/07/mysql之udf提权/index.html","80aa0ea47998ba34984b765c9b429536"],["/2023/03/07/红日靶场练习/index.html","32c956c04d28232a4ca41fa4393c2460"],["/2023/03/27/NKCTF/index.html","13a772783081a52a14c14109ab309acc"],["/2023/03/31/楚慧杯/index.html","aa25e313b3407e570bf9aa9150104a7a"],["/2023/04/23/HDCTF2023/index.html","2200f4f9b71dcdfa6c954e51a426bc8c"],["/2023/05/05/暂停/index.html","b468aa489ac92e9b20833b42789e1180"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","17bada1ea297d2db6fa1623e791e1293"],["/about/index.html","318c5c7db411765f9503bb2932d101b8"],["/archives/2021/12/index.html","3c8861725863e98ef33b35004aa9f32a"],["/archives/2021/index.html","35e4b43b68ae67a01b5c1af7b15571f3"],["/archives/2022/01/index.html","1fdebbecf3adcbf495594fbadf11e2f2"],["/archives/2022/02/index.html","924d9c0e14881ab375d4402f3d60a5dd"],["/archives/2022/03/index.html","9e8a72301c9ec1a8b11b1fd3a416403c"],["/archives/2022/04/index.html","bc8c421595ab873a9b6ce5d1e88b867f"],["/archives/2022/05/index.html","fd842f6846d3d185009159bbda470d5c"],["/archives/2022/06/index.html","ac909c6e5091151e71da856a94763cb4"],["/archives/2022/07/index.html","2439a82b0188afc807fa9334c0649b40"],["/archives/2022/08/index.html","ee16d4c30753b646fc9bc74b37f357f2"],["/archives/2022/09/index.html","aaa7626e50bcf4c696c8cea98390bcd5"],["/archives/2022/10/index.html","766939e3a5293cae6c61bf776f37feea"],["/archives/2022/11/index.html","fc2b22f090f855ac4d6198ceb4d3f3a2"],["/archives/2022/12/index.html","b83767cc3ef1b742a011c789eeee2665"],["/archives/2022/index.html","507e561af378f02705daadb8f69cd1b2"],["/archives/2023/01/index.html","8478ddfc05b8b8edce99a5d3860c7c95"],["/archives/2023/02/index.html","d4e38c6da6b2fa601fd4658411793d99"],["/archives/2023/03/index.html","24c2be6569449a59639da588dcfd661f"],["/archives/2023/04/index.html","e96b774df218f6079f7275a7d927b590"],["/archives/2023/05/index.html","b0edf477d031096708cad4420cfe9974"],["/archives/2023/index.html","af11d8c709c894997bf7d59648450064"],["/archives/index.html","ed6c2667ea350322c76a91feae176427"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","02e579713f9bdd3094783bbab2bcf9e2"],["/categories/CTF/index.html","cb7064f339de14ac0882f2629fc2286d"],["/categories/PHP伪协议/index.html","d2266cd0c90507653b3c0771f358b2cb"],["/categories/Python/index.html","2f30485a771a0f799a85c339f68411f2"],["/categories/RE/index.html","0a161a72101037de610f84076a2e093e"],["/categories/Web/index.html","cf803c806c965ec719262e54121a1d57"],["/categories/awd/index.html","6cd82042ea31483e7202cb8dce7b09fc"],["/categories/index.html","d99c740380cfb1c5d0d0058a2839265f"],["/categories/misc/index.html","6a7cfa8bd11ec6959b4e78019e44a78c"],["/categories/sqlmap/index.html","d2c530bf4a1e9d0284b0c6f4f4603d41"],["/categories/博客相关问题类/index.html","c2fa69df65ecc9c4f09bd564162049e9"],["/categories/局域网攻击/index.html","8e4c5781b2c97c7a0850041e81cdf476"],["/categories/心得/index.html","d066932b60afd7917e8c6edd11be39eb"],["/categories/流量分析/index.html","b0a1d0f183d5a4b437f54bea6c2985e3"],["/categories/渗透/index.html","36d167411dd17fb7f4c807eefb7d9e8f"],["/categories/渗透测试/index.html","ce2da78f4661ca4a55b0096d6df68351"],["/categories/渗透认知/index.html","24fe071d2b4079b882b46e285ec1482f"],["/categories/漏洞复现/index.html","dd8f96936e649e2edfb27353ba117a94"],["/categories/漏洞测试环境搭建/index.html","fa381b49a98354d6eb72ee3abaf8a692"],["/categories/赛后复盘/index.html","f655716b04524e54a3ff2f2feb62ea91"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","6932be2d8d2673fbcf1693c876a91343"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","b1f5c1ec4ee8536250b09830c9738409"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","f7bb00bc0e06511ade62a9dbd1f76acc"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","9a1490844ba8863873adc0682162b634"],["/page/10/index.html","e3c9626705c8213b82ea296468f2b1f9"],["/page/2/index.html","4f954a129634f67fcf3fbe43c6680c28"],["/page/3/index.html","bef3c0aec3c8b4ca28870e913beedce7"],["/page/4/index.html","e1b5a7b00369f8a362111e86b17ef6be"],["/page/5/index.html","3e33c3cee189baa24c03d9c5a789ad5d"],["/page/6/index.html","4a51b14a0a103b25242a6dcc53cc974f"],["/page/7/index.html","48654af633c29a47314004aa9d297a4c"],["/page/8/index.html","9b1278dd9e665e64e28400c6b9902db0"],["/page/9/index.html","13ab1e3ba1b2eb8d14e9d9d29bf798a6"],["/sw-register.js","52b25560cf284a642cd10d823dffa3b5"],["/tags/C/index.html","3b185d6a98396efa8ee75585b9a0c4c1"],["/tags/CTF/index.html","25c74648a1911475203c9dae1b9da4c1"],["/tags/HTTP头部信息分析/index.html","d3f8bc1e21f9509465a503d4076e9fbf"],["/tags/PHP伪协议/index.html","7e78e9c1ffd9024193820292b21c0e87"],["/tags/PHP特性/index.html","d451d5675aa1137e08be495d4a93cd6a"],["/tags/Python/index.html","781a38cd50290f5350ef153756cea67f"],["/tags/RCE/index.html","f1e2d09668a15df7b88be88c6ab73bbe"],["/tags/RE/index.html","66c0f8d9bdc4e6981839fd65b80e0b24"],["/tags/SQL/index.html","4330742a4266dff41b98347d65519035"],["/tags/Web/index.html","0c7bb842e49551997463ed19e198e2b4"],["/tags/Web工具包/index.html","e8f13730415563ef3f0f459899e53175"],["/tags/awd/index.html","2aece17d19c72841f093c32570b1fd41"],["/tags/bugctf/index.html","b9d494a67328f168944db030a6b85be8"],["/tags/ctfshow/index.html","7c605b0dc9c5f791b2477f1c49dede9f"],["/tags/index.html","9e2a18a0122d51cada5259265c46d7f8"],["/tags/misc/index.html","0355da586b98e598a153ff145f4fb2b5"],["/tags/next主题失效/index.html","3242f27e50d60dc295c7564423993b9b"],["/tags/sqlmap/index.html","f56f246c35944a849e71513d1de93ec6"],["/tags/wp/index.html","0c740657c80055746608623463de2c33"],["/tags/xss/index.html","2ede0cbae38892e861339eaa45043806"],["/tags/xxe/index.html","7b9a15fbdcbab86ff0d5a5ef5f6ca241"],["/tags/不蒜子不显示/index.html","e23a496f51722c95bc16a12e079ccc39"],["/tags/博客/index.html","2fb8f9db2b6bfef1ad99cc85be38feae"],["/tags/博客主题优化/index.html","e80ef9311d5c12123c7f42b84e608b50"],["/tags/博客死循环框架问题/index.html","5df70ba1e59169fcb4b0b0c1459d1cc7"],["/tags/博客部分问题解决方法/index.html","95947661a9aba4b2a6f68f89e7637fe0"],["/tags/反序列化/index.html","75cbf633eed922bd8d29e289af3bd92f"],["/tags/命令执行/index.html","d945534a4912b4eb9db18bc890af6335"],["/tags/局域网攻击/index.html","804c4c8fc09312bc5089b50b68efc521"],["/tags/常用指令/index.html","0e8c76604a43ab0c95aa86daabb238fc"],["/tags/心得/index.html","401c8b0ab5558370a885b951cd652e8f"],["/tags/文件上传漏洞/index.html","ffb6ada4ad861288cd693cda49633e2d"],["/tags/文件包含/index.html","0cca9e79230cd5b90e1840cae65d5967"],["/tags/流量分析/index.html","bbbf736c6915bc00e1626c058ca2f6c1"],["/tags/渗透/index.html","2272f5951a20b08398f4776b973af9d4"],["/tags/渗透测试/index.html","b76ba6431d976da3756a925102f38a54"],["/tags/漏洞复现/index.html","54434e8c91e111b00b0a7a6ea94a4838"],["/tags/留言板/index.html","56b0d9476a69ad5b86bb205df54029fc"],["/tags/赛后复盘/index.html","dc7e9efb3d38b7386e56e754677445c1"],["/tags/黑盒测试/index.html","fc575b2d3827de615902a301d35c6693"]];
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
