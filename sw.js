/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","4eb3f5e40b420367d2613f559a42003e"],["/2022/01/02/Python程序运行常见错误总结/index.html","8c5e37a70a4f2c345ca802926fef372b"],["/2022/01/08/ctf之web/index.html","11806d04bfe7f069be37fa1d4f8a178c"],["/2022/01/11/博客制作遇到的问题/index.html","2dae7e87cb00580c5ae8501da527ad91"],["/2022/01/15/C/index.html","1d8deeb1bd7b95d43fbe71268e6e8f24"],["/2022/01/18/新版next置换/index.html","0d1eded029db9774acf47ca73aeb4cab"],["/2022/01/19/不蒜子相关问题/index.html","3712a767d1e91d678373f3b38da29e0d"],["/2022/01/19/框架问题/index.html","c2f60883f22495bcce75e8987846f7ad"],["/2022/01/20/ctf之reverse/index.html","e7a34e44b402923b6b7a1f6013c83052"],["/2022/01/23/misc部分解题软件命令记录/index.html","7dc0ae819f9625f21b0253de106d484b"],["/2022/02/01/684/index.html","0801e5d91be5b3f40690a5f01e325ad6"],["/2022/02/03/留言板/index.html","312b5919b5d2fdab79182194fc5d6b81"],["/2022/02/04/SQL简单注入/index.html","463e36fe09abf3e57955427db3bca1cd"],["/2022/02/05/最全的HTTP头部信息分析/index.html","0b8535b497127b042d70d954328728f5"],["/2022/02/08/ctfshow文件上传/index.html","0fe80a9c81367d2b39b1801452fc2c4b"],["/2022/02/08/常见密码类型/index.html","99affc6f6afbf0e15b20b87f6a2192a1"],["/2022/02/12/VNCTF2022WP/index.html","1b1239be05ba4705e14dad9cdf2c5f89"],["/2022/02/16/rce/index.html","dcc0a1fe0cc93dc6deb223c93ce432f4"],["/2022/02/20/ctfshowPHP特性/index.html","fd5e22e73bc2b510f500438cc57c1c8b"],["/2022/02/25/php伪协议/index.html","1955d036a880612cd4230a58e4529c92"],["/2022/02/26/ctfshow文件包含78-117/index.html","acc0b34fefb258c438add90bc873aa76"],["/2022/03/02/Clash漏洞/index.html","1527e58264f41d3d3406068ef6760873"],["/2022/03/11/流量分析之题型解析/index.html","4824ea02ed7b823fa2d64d7511f947b2"],["/2022/03/15/ctfshow命令执行/index.html","39be8c15dc2738fd61cd9f3f1b645717"],["/2022/03/22/CGCTF/index.html","a58e4ccb4958197e9541fa63069660f9"],["/2022/03/24/ctfshowxss/index.html","f16b4eca84e2ce28b6d7d8057dbec22c"],["/2022/04/04/黑盒测试/index.html","b896198c9d44688832e889624b30a236"],["/2022/04/11/nmap/index.html","afb613e1ecb3931579aecac287fb0e41"],["/2022/04/12/渗透流程简要记录/index.html","f14e8313e96821f3fa6c41f7acc60495"],["/2022/04/12/渗透测试之攻破登录页面/index.html","dfa75b0db59dc9e5fb8efb103de6b17a"],["/2022/04/14/xray扫描器/index.html","4d794b41f847cbf1de64666ea0bd0310"],["/2022/04/15/ctfshow反序列化/index.html","4ef4a7dca589d92845eaa4d33cd8e80f"],["/2022/04/26/渗透测试实战/index.html","d53eca2f7ddbf7745db291562bccd211"],["/2022/04/26/网刃杯/index.html","ae3af503ea8aecaf8d920186052c4334"],["/2022/04/28/sqlmap教程/index.html","738d23089cc1801fb93bbecf1ec58afb"],["/2022/04/30/认知文件上传/index.html","9015efe9a08aa29827183be23a7cf6c0"],["/2022/05/03/nahamcon/index.html","195bd953a04ed42155bd99d044e4b7a3"],["/2022/05/15/awd/index.html","e846c049c8ae70ee079ba8627a7f3913"],["/2022/05/22/DASCTF/index.html","d6d205eae14210636c8b329abedf9567"],["/2022/05/27/520/index.html","5e309bf70e97c596dacf161a80f871b0"],["/2022/05/27/ISCC2022/index.html","305f6c6407f6b83b539c9e3ebac1d761"],["/2022/06/01/第五届世界智能大会/index.html","f90258016d461c162dcec014c77254da"],["/2022/06/04/SEETF/index.html","727fb0cab9a54f12fb9a1bd39fd930da"],["/2022/06/04/bcactf/index.html","0fe53e689c598d64824b89a543b92cba"],["/2022/06/05/BSidesSF CTF/index.html","9711f9e2d246cc8bd86acf9ceee436a3"],["/2022/06/07/Docker部署web题目/index.html","07d56190b670eef8861f43153b436bb5"],["/2022/06/09/利用oj搭建C语言考核/index.html","b540adfc3c5e44d3e241ecd9a5e7696b"],["/2022/06/09/论网站502/index.html","dc6f1154e7501c085c0b4d7028542d0c"],["/2022/06/13/限免题目/index.html","568d631e8c1845b4b2a32ab4573c5162"],["/2022/06/14/钉钉rce/index.html","790f19114e6096c8a53dc595bd23c5ca"],["/2022/06/16/内部ctf/index.html","587bbb3e43ab2d0dc42bb70f1c94cb37"],["/2022/06/25/攻防世界高手区(一)/index.html","64ef63ef5e98c46ae739495c928ee554"],["/2022/07/01/两小时AK赛/index.html","8638538f8c6b383bde27cac4f22a7b82"],["/2022/07/03/鹏城杯/index.html","bacd56532b1d08fdab76957aa70267aa"],["/2022/07/04/XXE/index.html","281c87d018bb0946c76e18859b9bb355"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1be69c4c2f2bcb131f88fbabf8ca27e2"],["/2022/07/08/chinaz/index.html","02cdb8b8ab28d88fd1a04c8f4df93ad4"],["/2022/07/09/蓝帽杯初赛wp/index.html","3adebeee06bdfb3c838428d386a5a241"],["/2022/07/17/NepCTF/index.html","67ac5844512eea4ab2208bf4faea2522"],["/2022/07/19/ImaginaryCTF/index.html","c20349f058527995c1e73487793379bb"],["/2022/07/20/局域网攻击/index.html","4066d758675b9bd540d4f49a3c8795d7"],["/2022/07/22/BDSecCTF/index.html","17146573090ad3a12c62736b2ac65a96"],["/2022/07/25/DiceCTF @ Hope/index.html","5c7c727be7c762d56ded3373fe5ee296"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","c174c5603329fc9237982fa727cd3524"],["/2022/07/31/TFCCTF/index.html","7a2685dff4e9671ac4bcc00e7af10095"],["/2022/08/03/NSSCTF/index.html","ef6912cabf052162f380e75ab22588b4"],["/2022/08/12/T3N4CI0US CTF/index.html","3719758fa1b2b6b4078e8dc4ca912f4b"],["/2022/08/14/SHELLCTF 2022/index.html","87a5e34b286f580ff5a7efaa5e68fc4b"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","371ce50ba0092001d687c10e218676fe"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","1209d1dc90a62f1215c9a896441d6d73"],["/2022/09/16/柏鹭杯/index.html","ce4c626e221c7c1624ce896919e6f482"],["/2022/09/20/HUBUCTF 新生赛/index.html","d6ccd5db8157a9b68b702e35e4b8a4e4"],["/2022/09/27/NewStarCTF/index.html","30cbd1350e83c7b278e8fa4ba2b0b364"],["/2022/09/27/bugku渗透1/index.html","7882faf2f8ba05df7335c8004a8998e8"],["/2022/09/29/tp6漏洞/index.html","42c411175a16ceedc2e44eec850f1ade"],["/2022/10/02/SWPU NSS新生赛/index.html","a864f56c4cf476718db59030c2a3ade1"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","76229736db0781a997022747a667af70"],["/2022/10/27/Moectf西电CTF新生赛/index.html","95e1c0287cb3adc76a6cd2d96e9ad001"],["/2022/11/02/HNCTF/index.html","4d7432bdff0c4453fb47c42206c38a4a"],["/2022/11/04/2022工控CTF/index.html","0c8b80bfcef98d33b94ad03216216198"],["/2022/11/21/极客大挑战2022/index.html","a2657a70544b8025ede4f88556a0b300"],["/2022/12/05/TUCTF 2022/index.html","a1c59318fbdb1a14de4c515bcb722bfa"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","49a904392ba471b8ddf11cac5aa4cf9b"],["/2022/12/18/金盾2022/index.html","e9ba171a0ee10bcc6619e424d542036b"],["/2023/01/01/CATCTF/index.html","6f77867b203b4316fc8ce04e17293bcd"],["/2023/01/09/RW体验赛/index.html","45528bfcccf777addbb60ee27a860362"],["/2023/01/10/铁三/index.html","97dfc52557d27d166ac25677c9b5856b"],["/2023/01/16/Ugra CTF Quals 2023/index.html","c2b73836dd77ad8ab3a8917bd6dd0b5a"],["/2023/01/18/山石2022冬令营/index.html","ec0e1641cd1c574702a343746d04ac18"],["/2023/01/19/SICTF/index.html","fc49354c449e6ab5728f48a629bac587"],["/2023/02/04/2023西湖论剑/index.html","fff4a556677601ddaffd4c62fc6e100c"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","b366baa28043f48ff0a6fb517737671c"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","96fe24081364d0a9d455edfde1c0111e"],["/about/index.html","c96ed8818faa1be7ec7b76d283cedf6b"],["/archives/2021/12/index.html","5fec1efeac74b2290d4dc25129e53469"],["/archives/2021/index.html","5eceea9ebef45c825caebb8bb1c1c67c"],["/archives/2022/01/index.html","968771be2dc2924c084ead90776374f3"],["/archives/2022/02/index.html","6f82d1027e346e92131ade10010fa7d2"],["/archives/2022/03/index.html","0301a7efebe436b0f90ad88bad908e8c"],["/archives/2022/04/index.html","837501f7edc4c23895eba97606554d0a"],["/archives/2022/05/index.html","c2a3405b40971c396cc13e3ee1d1b4ec"],["/archives/2022/06/index.html","be828eacaa33c1ef117f67962da70624"],["/archives/2022/07/index.html","ff0a52ecfe214a430b0dc0ad91b59500"],["/archives/2022/08/index.html","85bc1f9b5e579369606876a38205e94d"],["/archives/2022/09/index.html","ff804f9681a18d6aed7d747f7f632eb1"],["/archives/2022/10/index.html","a7901f97f3c1d6f90bd8a059d3552b8c"],["/archives/2022/11/index.html","d8db7d5198cbbcb31512d1db2b63eb7f"],["/archives/2022/12/index.html","cce2fd45b875ff6bb5922234961d7cf6"],["/archives/2022/index.html","d34bfe2b76cbac7d6958a38517a234dd"],["/archives/2023/01/index.html","19034f99f104fda1a72bbe137f375867"],["/archives/2023/02/index.html","5f672f1ba2394a055f20fac480cef1b9"],["/archives/2023/index.html","a2f4bfee4801252823f1432c5c7b1672"],["/archives/index.html","25d219ee03022580f86e02a44b5f31e3"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","beb3ae2c6a334ab60956a8832111c424"],["/categories/CTF/index.html","0928056940032e74ca042d6e6fb52830"],["/categories/PHP伪协议/index.html","95901fac3e1842f73f09003b7fae2144"],["/categories/Python/index.html","d27293c276db636bfdbd545a0ec0f72c"],["/categories/RE/index.html","a38247b3ccfb2d131778bdc394a07452"],["/categories/Web/index.html","b5db538052eaa222b0664c7525365ed3"],["/categories/awd/index.html","a4ab41cf9c66b4d3bd54e2ba46e002c8"],["/categories/index.html","992661520c90a7f1ebb8ddaffd755256"],["/categories/misc/index.html","afed745f5ae734fab616b133d3620540"],["/categories/sqlmap/index.html","2f6b0e38bbd1eb37a162b1c1f7fa7052"],["/categories/博客相关问题类/index.html","a7603cd0ade2d43493ddc2eac8bb0c0d"],["/categories/局域网攻击/index.html","9e1d17dad776600e92da6b64d04e1d73"],["/categories/心得/index.html","fd9afd7499927845a443c31e995a806f"],["/categories/流量分析/index.html","cd8afd61b49defab228cc47a22fc232a"],["/categories/渗透/index.html","51c3dd6361c422ebf9ce050901ef9931"],["/categories/渗透测试/index.html","09eb7dd1761b93af7b255595490a032e"],["/categories/渗透认知/index.html","d14b5809115509b80b468fa4c75d1ab4"],["/categories/漏洞复现/index.html","7426e4e9f07b616e6cc826815ec9e5cb"],["/categories/漏洞测试环境搭建/index.html","7760d36b3fbeaf6202fe0aec51019acc"],["/categories/赛后复盘/index.html","a3271f12ff1c44af5e7010e940379f9b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","ad3da60ab5dc1c7aa36f0da3e0413404"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","39d6ec21ab47acdba3aa5d7e7f5eb15c"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","04503b2d44a0c516e38e90c64bf22e7b"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","9af0714cf9c50750ed042e42a530bb4e"],["/page/10/index.html","5be908b771aa7a5b07642f4e8ed10623"],["/page/2/index.html","f41da5c5fdcf94e5f905d9a31c93fd9c"],["/page/3/index.html","cb9d277866c00dc682514152a5c7412a"],["/page/4/index.html","9076a19b8b76adf4c3e3a4115287e958"],["/page/5/index.html","5011b438ad24cb9650b2c68e3a868878"],["/page/6/index.html","a7f13b1f5ecc2558ce6f780744ebd73d"],["/page/7/index.html","0e360b446c79ac1becc63def6ebb5327"],["/page/8/index.html","52fd9c98a6fc7b84c10366935358a6fb"],["/page/9/index.html","8f9a491e7dc6b33b0f1d1cdde082885c"],["/sw-register.js","001d7b7d1180092a0a27eadac430bf6b"],["/tags/C/index.html","4392168b86272a154d8df184d286b958"],["/tags/CTF/index.html","ad1b8fa7431f7a32945ecead4088e700"],["/tags/HTTP头部信息分析/index.html","8113d6fc34fecdb11f3e536ad385ee6b"],["/tags/PHP伪协议/index.html","849a2f7ab84c14a42197571f3ba4fd01"],["/tags/PHP特性/index.html","d0ff5f88b2d497ea87ba75f4ecf39911"],["/tags/Python/index.html","f233b94b41c0e03d83e5a1fa2fd0a544"],["/tags/RCE/index.html","885a26e1a43c7ba900de4531f6d720d1"],["/tags/RE/index.html","d7d4dc5867a363814ed1fb1e1909dee0"],["/tags/SQL/index.html","a25010a6ea1ee8306d72c6e4bab7f8ce"],["/tags/Web/index.html","bfb79626c5fee1ff57afd493ad8b461c"],["/tags/Web工具包/index.html","fbbe3c6ed1cdae3405ef3f4bdcff56ab"],["/tags/awd/index.html","12dc2c2c05b4ccb0bcbe0c2bbb9b7d2e"],["/tags/bugctf/index.html","f0095d057a3bdf0921b343622c162870"],["/tags/ctfshow/index.html","e138a421a4c14e1238550a42d3ca1e2f"],["/tags/index.html","25993f4c44513bff6e36431ff25fe6c5"],["/tags/misc/index.html","4f751276e370d22279d98809b32bc0c1"],["/tags/next主题失效/index.html","d228d0047ca5630df558b0a63042ec35"],["/tags/sqlmap/index.html","b4ea34a8e72f5267a58e45341b6f24a0"],["/tags/wp/index.html","16987bf4b31d06ddaa1b9c3225c5c8bf"],["/tags/xss/index.html","5769116a2ab7bf4264326dfe9241108a"],["/tags/xxe/index.html","f092ffdc9799fd305fbde0fa7e38a84f"],["/tags/不蒜子不显示/index.html","c699b72dcb05dc2edc68f961c7db5d88"],["/tags/博客/index.html","a13cc8d502035e2996c1341eebe47470"],["/tags/博客主题优化/index.html","c8ab2e183cc91844f678073090fb5117"],["/tags/博客死循环框架问题/index.html","f62cab64fe5e7a75ab2000bebd493a1e"],["/tags/博客部分问题解决方法/index.html","34f79cf6cf968ec752a98547eaeaa6d9"],["/tags/反序列化/index.html","28c4a071037f48b2dc246cfd39bac6c3"],["/tags/命令执行/index.html","af8bc2e7f9305a95c4f527cb94a3ee74"],["/tags/局域网攻击/index.html","0ef10ea0b423fa1d96b7deb7376b6482"],["/tags/常用指令/index.html","bea834b09cdcb9fe9c9fa1f9781dae2d"],["/tags/心得/index.html","bc59756da73b6369eb93a20fe163cdfb"],["/tags/文件上传漏洞/index.html","f7e8f9a1ef69b75aaad09aa36f8acc77"],["/tags/文件包含/index.html","861d1ad060f23a9c0323c381fbd49576"],["/tags/流量分析/index.html","7f0738a0bcd2862c57024b921580504f"],["/tags/渗透/index.html","64266cb3deea01f931b8c6330d673c9d"],["/tags/渗透测试/index.html","1a2bc5b81bf3540c91921282e96daaba"],["/tags/漏洞复现/index.html","c2e69794ca7dea4c68812b7029f958b1"],["/tags/留言板/index.html","13ef4dc623a8f8f3a50e68e931ea7e14"],["/tags/赛后复盘/index.html","42cd580545d0fa61673ba9363fbaed9b"],["/tags/黑盒测试/index.html","f148da27f94bee11a757166e846f988c"]];
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
