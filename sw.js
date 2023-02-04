/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/index.html","56c78a94b26b514410b88e02f3d7c650"],["/2022/01/01/ctf之reverse/index.html","4e4f615f678b722a761a0ac251f82ccc"],["/2022/01/02/Python程序运行常见错误总结/index.html","cf184fecaadc8187b0c346dea8e3860e"],["/2022/01/08/ctf之web/index.html","65e4dd009fdddedcbd4f01325c46a005"],["/2022/01/11/Web刷题/index.html","4743cc86f28627ddae4eceb10f944bf2"],["/2022/01/11/reverse刷题/index.html","f6be4558004c4889efdc60a781e1c7bb"],["/2022/01/11/博客制作遇到的问题/index.html","615d194a5c5241bf95fefac06d19281e"],["/2022/01/15/C/index.html","2cbecc8ddb8e7d8abff41fb4b600d442"],["/2022/01/18/valine/index.html","d603915139f196d0918f65234fff25bd"],["/2022/01/18/新版next置换/index.html","c809590c1f51387b514cb097cd13ca32"],["/2022/01/19/不蒜子相关问题/index.html","46357fe43a0caf1b831b718a791b8250"],["/2022/01/19/框架问题/index.html","677b6659d9f31e0fdbd64f1ec4541253"],["/2022/01/23/misc部分解题软件命令记录/index.html","52b74d8f2393ad530651bf7cd9014d02"],["/2022/01/25/DVWA下载、安装、使用的教程/index.html","3559716e7c6114ccaa50bd8ac4e81050"],["/2022/02/01/684/index.html","ba3c82d729ad13bb69dc3d33bdb0088d"],["/2022/02/03/留言板/index.html","9ad845b139c6c0f501eb5f602e1997fa"],["/2022/02/04/SQL简单注入/index.html","77f3759c3cde5cf51fe9c593a06f0d4d"],["/2022/02/05/最全的HTTP头部信息分析/index.html","a251fc3e186678abcf153602c8af5e10"],["/2022/02/08/ctfshow文件上传/index.html","e06595fa52248b734769393825d308c9"],["/2022/02/08/常见密码类型/index.html","fcf4454ece4ee93d8bd8b3c98b16d13c"],["/2022/02/12/VNCTF2022WP/index.html","c02d0cb10f55b6428495b93594c25d2b"],["/2022/02/16/rce/index.html","1d6f5908c09ad3b635f8048d63c0d583"],["/2022/02/18/hgame2022复现/index.html","df2495e590c197907f6c4c962c66a1c7"],["/2022/02/20/ctfshowPHP特性/index.html","7de5391227caa9936f49753a0fb173c5"],["/2022/02/25/php伪协议/index.html","2ac829c7c7fc7f152b93d2873dca8ec4"],["/2022/02/26/ctfshow文件包含78-117/index.html","4e37e9ce83375b69201c0f0a6be6f5de"],["/2022/02/26/ctfshow文件包含78-88/index.html","8decc9dc7c84ca38ee77c6aeeebc7946"],["/2022/03/02/Clash漏洞/index.html","2b97d4ff16f135fdd902c3cb93bb5b0c"],["/2022/03/11/流量分析之题型解析/index.html","d5339311fab37685a337295e8c64d693"],["/2022/03/15/ctfshow命令执行/index.html","9cc1007eca982d094c01c8830698200c"],["/2022/03/22/CGCTF/index.html","f3aa56d1e24e3659da9590a7edb34754"],["/2022/03/24/ctfshowxss/index.html","f2ddba6418c68c0843a511b14ec6e62e"],["/2022/04/04/黑盒测试/index.html","925a5af55bfe6dfa08a181e639b943b7"],["/2022/04/11/nmap/index.html","e16c633f0e9ed34840c4af8b11ba12a6"],["/2022/04/12/渗透流程简要记录/index.html","657e24ba4df88eb8d4305334d1363404"],["/2022/04/12/渗透测试之攻破登录页面/index.html","9e216c99bd837bc83686595b71436189"],["/2022/04/14/xray扫描器/index.html","a291109f1f0a9e2957d3b864766c2f61"],["/2022/04/15/ctfshow反序列化/index.html","9f0ed0cf166734c3d37b5e8cabdece42"],["/2022/04/26/渗透测试实战/index.html","8c73143aa654c44e1121617d3c67590d"],["/2022/04/26/网刃杯/index.html","683630b099232ca03d5fac35ef0c0a14"],["/2022/04/28/sqlmap教程/index.html","ad90512833a508e7a9a7446faadbb2b3"],["/2022/04/30/认知文件上传/index.html","0cfac701ac0cb89ff80e74a06133b345"],["/2022/04/30/靶场上传练习/index.html","9215d7ee90d2a7b7d1e49c90db9a7ab2"],["/2022/05/03/nahamcon/index.html","9a0ea7ff71947901f883afc2cac891a6"],["/2022/05/15/awd/index.html","c53adcc47b25321eeb09596733d3f579"],["/2022/05/22/DASCTF/index.html","412743b35acf185df6871b3fe40bab39"],["/2022/05/27/520/index.html","d9cb3b56305e06940f653fbb37d70d87"],["/2022/05/27/ISCC2022/index.html","d7076697e8794f473064fa5b2d5b7002"],["/2022/06/01/第五届世界智能大会/index.html","dda9bffd2f7f34958b90acbf0195901f"],["/2022/06/04/SEETF/index.html","411618dd9f396f9c92251806e17a316d"],["/2022/06/04/bcactf/index.html","f77d0a1c9331fe84c96dfd8c97209ce5"],["/2022/06/05/BSidesSF CTF/index.html","508246817a9d1a2effd46c84ad408edc"],["/2022/06/07/Docker部署web题目/index.html","e3bbaf3b08a2ebb8134d1a7efcf4d2a9"],["/2022/06/09/利用oj搭建C语言考核/index.html","a0761804a4f8093710dec928a43dfb32"],["/2022/06/09/论网站502/index.html","4d104ba10849ef8809c6e4f82ca32543"],["/2022/06/13/限免题目/index.html","0acadb880cac35b24d70585299bf1db1"],["/2022/06/14/钉钉rce/index.html","3cc50fa1e0e9bb988818a3a7470a5a2b"],["/2022/06/16/内部ctf/index.html","c0369b2247cc2328d4fc243460c4cb28"],["/2022/06/25/攻防世界高手区(一)/index.html","06d10dfc32c4989a700b319a8d4a813d"],["/2022/07/01/两小时AK赛/index.html","f4e12d56c19900b2b1750e288c83c050"],["/2022/07/03/鹏城杯/index.html","2d0da11bb9cabcca8beffe376d8fe310"],["/2022/07/04/XXE/index.html","403168c92a3043188924af451ea29494"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","96558f9329993f75f97173c353cab9ce"],["/2022/07/08/chinaz/index.html","d6ec89df6a38eedee3e1c6ff8ebcafda"],["/2022/07/09/蓝帽杯初赛wp/index.html","b1485c2223bc0b716ab6f34460632a5e"],["/2022/07/17/NepCTF/index.html","23e38c355b6d6a41621ce55a06230eaf"],["/2022/07/19/ImaginaryCTF/index.html","711c3b35e15a39ccba27f00a3d6f3e92"],["/2022/07/20/局域网攻击/index.html","f45e72e5d3cd60a912ce4354ffe319c0"],["/2022/07/22/BDSecCTF/index.html","5854327b3bfcfa67f98b0ffea5e7a199"],["/2022/07/25/DiceCTF @ Hope/index.html","356a8c6abb0a88ed187341745ce3ee6d"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","21551cefe7b1d40302f9b83b3bdc0041"],["/2022/07/31/TFCCTF/index.html","6463cf118cb914870ac06c27779c22b9"],["/2022/08/03/NSSCTF/index.html","74d1cc281ed35a1c2b5a02e71669fa2d"],["/2022/08/12/T3N4CI0US CTF/index.html","dfe89a4de648ccc97593c98b075aa8ae"],["/2022/08/14/SHELLCTF 2022/index.html","2463933dcb033814bcab066bd52e41ef"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","2de7c8634d1c0a9ad9af7dfe1f2d465d"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","0c93c33dcb61cecb7da316a1fb29a153"],["/2022/09/16/柏鹭杯/index.html","e3ccec6d2b556e8bf8b9298004fff7a1"],["/2022/09/20/HUBUCTF 新生赛/index.html","95d43f1af9dcb699cc80fe0bfab55759"],["/2022/09/27/NewStarCTF/index.html","0e0a24586f578c17612f7ccb69c8dd91"],["/2022/09/27/bugku渗透1/index.html","379f927296e499fb183fa9b6e2fb5b05"],["/2022/09/29/tp6漏洞/index.html","1aec18658be78f604bd6d211c8e2766b"],["/2022/10/02/SWPU NSS新生赛/index.html","bdbe74ae7321cc14234b5b35bbd7fef6"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","2b011a0247da4c8f8e5f1fd9da5d1da5"],["/2022/10/27/Moectf西电CTF新生赛/index.html","37cc771fd9ab7881556c2f0624ba7e27"],["/2022/11/02/HNCTF/index.html","9b2fa910ed33871dfcc6e58ae405956a"],["/2022/11/04/2022工控CTF/index.html","407c0272eb52e29218b3ade945ae76b3"],["/2022/11/21/极客大挑战2022/index.html","141269a355bcf2ec49e2e26671fffb6a"],["/2022/11/27/实验室考核题目wp/index.html","0a22810170e66d0541e4186910204635"],["/2022/12/05/TUCTF 2022/index.html","52ffe3af57178adc0c90a8d346d9b2d3"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","68ba6703efa28442b48f7c037129c315"],["/2022/12/18/金盾2022/index.html","2ccfb8ca5a8117f732f1bcec2d5a2a0b"],["/2023/01/01/CATCTF/index.html","34a4fa285e2436ee50997f3d0a3017ae"],["/2023/01/09/RW体验赛/index.html","11773ccad29b8279929121e8aeeb01b7"],["/2023/01/10/铁三/index.html","5f2846018f7505f4f8d85a8594e1d17a"],["/2023/01/16/Ugra CTF Quals 2023/index.html","900cdc67c4267b7bef3080ff00103b9a"],["/2023/01/18/山石2022冬令营/index.html","b3aa2ef20c6b1c05c7566c6b09ff8b1a"],["/2023/01/19/SICTF/index.html","49abb87ffd47a3e2d15f09c9522fb283"],["/2023/02/04/2023西湖论剑/index.html","2a23da153a749b5769bb236310322980"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","f22913036a0a4219423b3880f3b906f2"],["/about/index.html","f16865b737676070af63fc2d3a1f0486"],["/archives/2021/12/index.html","f27f79382e7a6965fac42815b1da5641"],["/archives/2021/index.html","a3f68417978e1ef34f88717703c02998"],["/archives/2022/01/index.html","601ebf7a57935ae4f84aa42f3f71082f"],["/archives/2022/02/index.html","54cd1570429a4380422bd4ecbcaedd37"],["/archives/2022/03/index.html","817769162d4dacb5a49cd97c4dcc492e"],["/archives/2022/04/index.html","16101e2d456f73543b782b9c68c8a130"],["/archives/2022/05/index.html","fd23ba1236c3d311736b57a386b6957b"],["/archives/2022/06/index.html","9f02cdf7d52144c97d95b8fdc7c24b4c"],["/archives/2022/07/index.html","aa583c7ce9274b5941d7f30c7263df2c"],["/archives/2022/08/index.html","4ce9d5c45235459cacee4f80ffc9c7df"],["/archives/2022/09/index.html","1c51b5a94a759022c6f0814581e91a1d"],["/archives/2022/10/index.html","0f45f211b7e33502b328be93413f2cf7"],["/archives/2022/11/index.html","f07343e9c822ab465e88ea0dde2cd698"],["/archives/2022/12/index.html","81f427a1285740e59a1c0bf3a1460a3e"],["/archives/2022/index.html","16bfe1977036f346cbfc61b0eadbb9cb"],["/archives/2023/01/index.html","cdd49ed6d2c50e1bd6c84ac96b32b709"],["/archives/2023/02/index.html","3741bf75a3ddd75867e2ceb032ca0733"],["/archives/2023/index.html","d61792736729cb40007e2a25c8d42f2e"],["/archives/index.html","db10cfaf92b0c471477987e3d88ab093"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","e263e8638e0d75945fd94ace7e3b8e14"],["/categories/CTF/index.html","052b8ca976604fad119ad5d529ef7e64"],["/categories/PHP伪协议/index.html","55162993ee2f838595e1dcb65daf16fa"],["/categories/Python/index.html","6c2a778ef243128a244d5c105826ccbe"],["/categories/RE/index.html","0648e2457d23b16a4033d637e9a23d93"],["/categories/Web/index.html","dc05905923e7e089d34216a0cd25e8d0"],["/categories/awd/index.html","3586fe887206a3fb99c65d9f37711b22"],["/categories/index.html","36122d70d0ba3ed8066942eb939e47ae"],["/categories/misc/index.html","bc38a94d716003d76036309299be43d3"],["/categories/sqlmap/index.html","9f6d5356f8b4253647a808ffc65be7f6"],["/categories/博客相关问题类/index.html","15250ad958a54f36803d6bfac6900464"],["/categories/局域网攻击/index.html","eeb3be8f916142a841646dd3ece67b83"],["/categories/心得/index.html","0f0fa35a3e634ef21818e9d386e8f6a2"],["/categories/流量分析/index.html","eb58fc1e14b3e22a3c5e55456bdda79f"],["/categories/渗透/index.html","f947dab1a71703ee1ab742d006eac8d4"],["/categories/渗透测试/index.html","ce069554f23f75ef54bcfb6be7b9a5ed"],["/categories/渗透认知/index.html","1a9695f47db4b085ec8677ab0e31dfb5"],["/categories/漏洞复现/index.html","687e44b8a61eb63f45b1aa3642c9ed50"],["/categories/漏洞测试环境搭建/index.html","fb44b5a0a2b1801f96b8a147d34eed36"],["/categories/赛后复盘/index.html","e044ab971f2afc5219d6c5b6a7131bb1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f3ff0c0743a95af790de1ee831ea352e"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","c9d1694020b6c8f601d8bfda6a2be717"],["/guestbook/index/E587BBE68E8C_2x.png","a44a04ce6494d4c7e6b1b80426d2e8d9"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","b5181c230de6b4630007c056c79517d3"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","eb96acc0b85fd7f2166d0cac32467571"],["/page/10/index.html","237c8964111e0be40fbd583349393ae6"],["/page/2/index.html","6dff8aa68d521174d0da8ef3b8578b45"],["/page/3/index.html","02196f440efad380cc054c5e01413dbc"],["/page/4/index.html","52251618c0d24c94e261be5a841dbde0"],["/page/5/index.html","efa5da67a8de5f4ca8968942a5d789ad"],["/page/6/index.html","fbb484ee706163754320954befb95f79"],["/page/7/index.html","8298fffca8fdf0b201300fcaee40fa72"],["/page/8/index.html","23ed637968e5eb0cf78a679b97ba9f61"],["/page/9/index.html","61d0b6b06d1385b0aaed0627a6d9dd68"],["/sw-register.js","16d2583758feab48bc0ad88720796986"],["/tags/C/index.html","7200ce1b41123839e8a0da9c3d0cb456"],["/tags/CTF/index.html","729e2d60c846ce999288d723ce0bc5d9"],["/tags/CTF刷题平台推荐/index.html","070514f77b9918fb4d5f5234156f3541"],["/tags/HTTP头部信息分析/index.html","3925b2199787ea5806577410573a99f7"],["/tags/PHP伪协议/index.html","a0c0f521b94f2a433eb05281b78fd9b1"],["/tags/PHP特性/index.html","d32a34a92ec0c02ef1d23eb139a6b122"],["/tags/Python/index.html","2f7ac2f254c73addb334b5bedc08bdf2"],["/tags/RCE/index.html","043b81c1cc4e13dfa10151051aa90178"],["/tags/RE/index.html","9744cca2309736dd59e7cd63b7c91c17"],["/tags/SQL/index.html","40bba1584c8d6b90abf017a858e1c69d"],["/tags/Web/index.html","ac1af65e41413312021ace01aa5c8266"],["/tags/Web工具包/index.html","038962977dc39acae847c0c8fcb3f7d5"],["/tags/awd/index.html","a248fc5d748d983890885664d21311d3"],["/tags/bugctf/index.html","490907e1e4d0a35a11f74ce2713fa1d1"],["/tags/ctfshow/index.html","04b4962cf791839b1044ea4483021e3c"],["/tags/index.html","b02ddbecae9bb3f6723b57df4b95ccfb"],["/tags/misc/index.html","19f923c2b66cc91ad88259b4a424ea9d"],["/tags/next主题失效/index.html","57ad72feab1bb1ba77408202473979e8"],["/tags/sqlmap/index.html","c76de701b2000dec73df97bdb2286e45"],["/tags/wp/index.html","6d9de4073e5966909e2374e951ea754e"],["/tags/xss/index.html","fec5e40565b2bdf674507aee3ad59916"],["/tags/xxe/index.html","46e8da8dbba4e2da543b5163fc14bb66"],["/tags/不蒜子不显示/index.html","f58697fd42f33d5cf1fa1f5fe34445f2"],["/tags/博客/index.html","843a6100f371aba7712987f3c78c0c45"],["/tags/博客主题优化/index.html","acbf829c92f1ff353de4040e25fce810"],["/tags/博客死循环框架问题/index.html","2e9907e6ec9d28aad060bd22139d35af"],["/tags/博客部分问题解决方法/index.html","05c8e8985303178449dad0b6677f3e70"],["/tags/反序列化/index.html","a9181afee98355c55db1d5df7a2d1bf7"],["/tags/命令执行/index.html","cd24926356ff9e0dbcfcc602563e144f"],["/tags/局域网攻击/index.html","4c875e7914c6e22457d4f662ef806625"],["/tags/常用指令/index.html","d9c433b93403becf80a856178a3d7401"],["/tags/心得/index.html","fa36bc53d34bd11d867e19f4a0b9db4c"],["/tags/文件上传漏洞/index.html","83fbf12b64c00bcbd9f531980eb8e440"],["/tags/文件包含/index.html","ea9a32037a681f57a3ce00c83596e6f4"],["/tags/流量分析/index.html","09f653cfa24adfe00d1a7d8c1ab4c4fa"],["/tags/渗透/index.html","b57583d59d418e8e6a594baf99ce44a3"],["/tags/渗透测试/index.html","a51b5fcfd5c335c211b18849b6400bef"],["/tags/漏洞复现/index.html","dcfb770943fc80038e4e96626044e318"],["/tags/留言板/index.html","5a7ee9e868606b8e83fece9d2a0e9ac6"],["/tags/评论系统/index.html","495771f1d877249959043709872d824f"],["/tags/赛后复盘/index.html","141977dc4ecf201f12f093df2eff0499"],["/tags/黑盒测试/index.html","5798467bac67fd4054f2b9091c0e3dff"]];
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
