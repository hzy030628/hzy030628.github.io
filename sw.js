/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","3bd4e2f6709fe4b9f2a36a11f2430fb4"],["/2022/01/02/Python程序运行常见错误总结/index.html","9fa8322bd87662d2d3f0f004368aba01"],["/2022/01/08/ctf之web/index.html","829e248a14304bdd9ead5436b07b84f0"],["/2022/01/11/博客制作遇到的问题/index.html","5e675f168199f60b4d82ef62397d08e8"],["/2022/01/15/C/index.html","5ab641b4f3d32e632998001888ec0cb8"],["/2022/01/18/新版next置换/index.html","a77c606c765320809397f2343d70bcea"],["/2022/01/19/不蒜子相关问题/index.html","cecce2ef1af234f438d5552a9d92060e"],["/2022/01/19/框架问题/index.html","f9d5a211cd1701647b5b5412b70a2a68"],["/2022/01/20/ctf之reverse/index.html","f4d1773506eb5c7d88bb8b7024ba171e"],["/2022/01/23/misc部分解题软件命令记录/index.html","48c1e79952bacbef369920ce85c1423c"],["/2022/02/01/684/index.html","2959e34b2449e8afe2e3f373303ef706"],["/2022/02/03/留言板/index.html","72b0406e659a228b00d8efec4315d403"],["/2022/02/04/SQL简单注入/index.html","c3c611d7c4ab4665495d16ce30b3d7a0"],["/2022/02/05/最全的HTTP头部信息分析/index.html","76004f36d1ea5bf68a5fc86558d74173"],["/2022/02/08/ctfshow文件上传/index.html","c988564ae8e858a5974d79f5f31f1730"],["/2022/02/08/常见密码类型/index.html","916e30dc575897ace626574c944089e2"],["/2022/02/12/VNCTF2022WP/index.html","cc09239ad866cbc4a3f15b3ca9ad8b81"],["/2022/02/16/rce/index.html","9fac12afc24200a5ab53b0bfd11753e9"],["/2022/02/20/ctfshowPHP特性/index.html","c7b4725d068f1ea32668ae1b7ca1898e"],["/2022/02/25/php伪协议/index.html","2dd96834a1819ca103ccb79cab1ce3d9"],["/2022/02/26/ctfshow文件包含78-117/index.html","659e8ad4689e42faac183ce954dfda6e"],["/2022/03/02/Clash漏洞/index.html","1eddf432f623785e1a616ba719b973e1"],["/2022/03/11/流量分析之题型解析/index.html","dc5e90a8bd7878215e623f91c25a6bbf"],["/2022/03/15/ctfshow命令执行/index.html","33602494657c18506adc230beac34a69"],["/2022/03/22/CGCTF/index.html","8e59d014f95ada092107fd493e23f388"],["/2022/03/24/ctfshowxss/index.html","e6e48812b63bdaaf15e51e76a963e50b"],["/2022/04/04/黑盒测试/index.html","e9008fbef61691aabc95d54424cba119"],["/2022/04/11/nmap/index.html","137015191598fc2e9be669ef5b59ce4d"],["/2022/04/12/渗透流程简要记录/index.html","794448b853c8cf116a1a1f3ad53e69d3"],["/2022/04/12/渗透测试之攻破登录页面/index.html","cbc112310057657f2c64606b039ca593"],["/2022/04/14/xray扫描器/index.html","02eb14d9e363805291b4fddb6cec76d6"],["/2022/04/15/ctfshow反序列化/index.html","bef6e4fa09e5f1c026e79bf7cdd569cb"],["/2022/04/26/渗透测试实战/index.html","12e5f0538ecdd46cafea2700c8d18e79"],["/2022/04/26/网刃杯/index.html","b995307a9bea5a32b01efd93a7b1b3f9"],["/2022/04/28/sqlmap教程/index.html","dd53a2b45aba2632e045779ac9983472"],["/2022/04/30/认知文件上传/index.html","da95d76019997ae67f42cdbf56421297"],["/2022/05/03/nahamcon/index.html","530ab79c1a17259009e36d0517637653"],["/2022/05/15/awd/index.html","de90118539f2275d5e1be866d591d6f6"],["/2022/05/22/DASCTF/index.html","b70c5e3e38543c8e71524a7859087443"],["/2022/05/27/520/index.html","c84cdded8680065c500d01c86912bc0d"],["/2022/05/27/ISCC2022/index.html","67e9799a4b29db96b3456212b26e4e89"],["/2022/06/01/第五届世界智能大会/index.html","74cb012a4f6f8bf24927a56ce92b3277"],["/2022/06/04/SEETF/index.html","98572657d8c628c395b99dcd04b45606"],["/2022/06/04/bcactf/index.html","6cb4b37ce7056e4f92f6bdd109eea5fb"],["/2022/06/05/BSidesSF CTF/index.html","105a99c9aea6deb7cee8154825758dff"],["/2022/06/07/Docker部署web题目/index.html","ba03ba23aa61feb376be6603c7f4297d"],["/2022/06/09/利用oj搭建C语言考核/index.html","b935f74669eeacb58bbf4e57ef94731a"],["/2022/06/09/论网站502/index.html","0457934ccac3920e596b612816bbe800"],["/2022/06/13/限免题目/index.html","ddebe1ffb68cbc9ff30e946e099dffaa"],["/2022/06/14/钉钉rce/index.html","004bf208f50c6c919bbcb53308094951"],["/2022/06/16/内部ctf/index.html","b87811f690cc70cfd5d4d815682cabc9"],["/2022/06/25/攻防世界高手区(一)/index.html","683a4173fd4bc9b7341568770edd16a0"],["/2022/07/01/两小时AK赛/index.html","ee96df3c011b68efb71b3ce2077190b8"],["/2022/07/03/鹏城杯/index.html","d15fde4a056a8422e92d9c84e1ce77d9"],["/2022/07/04/XXE/index.html","3affa514b66587a65163a8088c90f211"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","e75e034302ba23ee40a57376a3f02c99"],["/2022/07/08/chinaz/index.html","52cf511fa58d2a2e92792fb9a8bc620c"],["/2022/07/09/蓝帽杯初赛wp/index.html","d6280c486860c6bf5272d8116ef5a905"],["/2022/07/17/NepCTF/index.html","4c47b24b5bbd1c0347edde25bc3d97e3"],["/2022/07/19/ImaginaryCTF/index.html","f38cfec7ada5dcf9fc8a134bc597d5cc"],["/2022/07/20/局域网攻击/index.html","df8bf775d2e840b873e7e2d2725f0dd6"],["/2022/07/22/BDSecCTF/index.html","3d9d19461066b422f72f7ff32b84114d"],["/2022/07/25/DiceCTF @ Hope/index.html","a49e26a55558b109ff32798ebd472a8b"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","e4082705cb92444089553d6190ca8315"],["/2022/07/31/TFCCTF/index.html","8d1d702ee3bddf3372e03d26bfb682bd"],["/2022/08/03/NSSCTF/index.html","94db69bbbb68fd024c7cb7a0995e9467"],["/2022/08/12/T3N4CI0US CTF/index.html","71b20c3bd480f705212c7cbfdc6b7627"],["/2022/08/14/SHELLCTF 2022/index.html","74e988a89c0214bd00a586f2002055c3"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","074be66d978bdda78ca5ba3f132d1195"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","5876cb9ac96a34938c646df25591bc4f"],["/2022/09/16/柏鹭杯/index.html","449303af0c07a51ad7288c4f94164c5f"],["/2022/09/20/HUBUCTF 新生赛/index.html","139aa502fb225bbae56e623a9ffd76d2"],["/2022/09/27/NewStarCTF/index.html","af78d617d226e85c6a369f00c6dd4112"],["/2022/09/27/bugku渗透1/index.html","0f3ec10dfb00b901a91cac508bb12ca4"],["/2022/09/29/tp6漏洞/index.html","ab90851f1f48850ceea8c9adf8bc7e4d"],["/2022/10/02/SWPU NSS新生赛/index.html","61500e48d16e3943ee561893ab9155f9"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","8d3549b8e932278c7b6ff253e95fc624"],["/2022/10/27/Moectf西电CTF新生赛/index.html","85038031d5f1863f897d0fa7876f100e"],["/2022/11/02/HNCTF/index.html","dee957a0874abf6aee6b5a4bab89358e"],["/2022/11/04/2022工控CTF/index.html","86c61fe7b26093c4acb7501aea8a3680"],["/2022/11/21/极客大挑战2022/index.html","da7cbfcf16dbb676aa4ff69248f73d2a"],["/2022/12/05/TUCTF 2022/index.html","134bcd8dd566320656380b4ff428a21b"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","10565d92f053b9277b1f3ba6da227a61"],["/2022/12/18/金盾2022/index.html","3617e88e045c416ffb37a8d403a84f84"],["/2023/01/01/CATCTF/index.html","23b72d22e03464c8d0a00149735a190d"],["/2023/01/09/RW体验赛/index.html","bf4bfa024d93273ee4e2687865670919"],["/2023/01/10/铁三/index.html","bd3847f4ff96c4603e122f9237bce076"],["/2023/01/16/Ugra CTF Quals 2023/index.html","8cd3320998404891831a3a6bebb4a121"],["/2023/01/18/山石2022冬令营/index.html","af2dc6655f87f8ee2afae28fb559f7cc"],["/2023/01/19/SICTF/index.html","27b6091d804caeef92838e0aed3fad43"],["/2023/02/04/2023西湖论剑/index.html","1505ed321e2c05b048746e04be1ec63e"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","b0ef8c513b5ac7b1a673653387df27a6"],["/2023/03/04/公安/index.html","20fe93e14e7d977bfa372d764de8c987"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","44cf25d3e5218ac34590de1f785b8412"],["/about/index.html","cd4e0f48df3c47a9a9aa8b3368576a90"],["/archives/2021/12/index.html","e5308380bbba539c99310d03b8381c34"],["/archives/2021/index.html","30be7e86b0d704f4bb80124b385abf76"],["/archives/2022/01/index.html","12f22f0195728fc1c53608518b6a73f2"],["/archives/2022/02/index.html","f01cf20ccdf349d35130e6f12f1a525e"],["/archives/2022/03/index.html","216e814ccc77bee15bdd2989470fe1ad"],["/archives/2022/04/index.html","9c45c99789fe1edc0c55e86247bade93"],["/archives/2022/05/index.html","f7161423710e49f37d2bf96fe5ec2946"],["/archives/2022/06/index.html","a79e4915028097c54bd9f538362d7c45"],["/archives/2022/07/index.html","8d98d92462db595a17440a5b299b6105"],["/archives/2022/08/index.html","f470f92d7d4355d98b1fb4a4474d3370"],["/archives/2022/09/index.html","7fc5e0180efd8525f4f84281c32fd0b9"],["/archives/2022/10/index.html","f167cb02db2b43875c5d7f2553b1408d"],["/archives/2022/11/index.html","5a5a5663c2e905537d08cc42d7ef1100"],["/archives/2022/12/index.html","7e5ba5556ff80766092bf0f154494022"],["/archives/2022/index.html","86f2e04632e38de4de0fadd1c5859bd5"],["/archives/2023/01/index.html","17fa7e698287692fe1350864dfa43be9"],["/archives/2023/02/index.html","7fff9b98c99f9d40e97b11d843fb3eee"],["/archives/2023/03/index.html","02321bd99a42177142a3d9099ca8e212"],["/archives/2023/index.html","e8d940dfa2530e4fd36c9f108b50b044"],["/archives/index.html","c875f74b349bef1479c8543c318aadf4"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","9e40f69c10b30c5a6c48d08ff435aba7"],["/categories/CTF/index.html","12797e31f269eb08b29e09f746969d4a"],["/categories/PHP伪协议/index.html","4910b2a45bf29c6a40db2c9e7c1fe49b"],["/categories/Python/index.html","4cda1296d755460c6fcfdc8f886ba4d4"],["/categories/RE/index.html","3dea8a0596b08b1fedcc4df72e09dca3"],["/categories/Web/index.html","39f03c5a12f29c268547d67e0b259b2f"],["/categories/awd/index.html","c13b86fbfeee71e96fb9390ac099bea9"],["/categories/index.html","88199f4f7db58ce365b56c9f72ff4915"],["/categories/misc/index.html","2b558046ebef7385951d1e1e4f2df628"],["/categories/sqlmap/index.html","9c87a5b8fa4cbbe55d49796df2127018"],["/categories/博客相关问题类/index.html","af5679c86512daf1f3e2c7442f099111"],["/categories/局域网攻击/index.html","9a552c75ee122b08d0ceb08cec8d1935"],["/categories/心得/index.html","793efe7bb64d9807725e87de9c997f0a"],["/categories/流量分析/index.html","abd58a82ac2e2085ca3f1f2a5d9412e3"],["/categories/渗透/index.html","3d4e53ab27628071d099ff84471017ca"],["/categories/渗透测试/index.html","aca5b72ba83b007a6700a94140ac1019"],["/categories/渗透认知/index.html","0b2b240c6984ba4073e6e56090688b24"],["/categories/漏洞复现/index.html","1a99bac691c70f84ab3787fa7ce13480"],["/categories/漏洞测试环境搭建/index.html","0a04689efdd2ce9bbc79d7856f1a6de5"],["/categories/赛后复盘/index.html","92c33d86a2b16ec2dd3d7024dd56959e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","2b3f5af1c532db0e50e5444026de2005"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","057f285f5f732acfeb833c3ffad29e97"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","eae4901b937881536a5bbe54e6123991"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","8069aeb32a36e52f6cd9c6eafcb6667b"],["/page/10/index.html","03a7dd066d22e975fd06436d5cdd6c22"],["/page/2/index.html","251903d92344cf79ec84158bf660e5cb"],["/page/3/index.html","d041e0af5afa3b46dbcf176302c45788"],["/page/4/index.html","dade53cae578953b6c51a72278400143"],["/page/5/index.html","652cc045cc6b9b5a26fb6346be90f6e1"],["/page/6/index.html","5878b03a3a51a4c9ea4d818166c24202"],["/page/7/index.html","f22611b67acf7f365c4ce414682091c9"],["/page/8/index.html","1201ebd8d50817cdc4da707eea5b57de"],["/page/9/index.html","3455b584ecee4c770f7e6c9c448a7bc9"],["/sw-register.js","de2f42c052c899db5fe027de6f8197ed"],["/tags/C/index.html","bd65addbecd156ce0eabec89a25e12c3"],["/tags/CTF/index.html","f4802455fa2c56f7ce0139ceca9a4931"],["/tags/HTTP头部信息分析/index.html","cd4de7d02d29e17025f94d765a020f11"],["/tags/PHP伪协议/index.html","8ad67498e325561cc7f7ea0dae187719"],["/tags/PHP特性/index.html","c323695fcccb477907ab891cbee0c980"],["/tags/Python/index.html","8edde3f0d9dc1a9d2f95d610471c7089"],["/tags/RCE/index.html","2af670baec3830f05ac7a696fc8c1506"],["/tags/RE/index.html","cae02993b33a99fe4d29def6ec538adb"],["/tags/SQL/index.html","8a3fc2a6f3605f20cba7051a180bd6c3"],["/tags/Web/index.html","2304d8f87eeba3e0efc5dfda304d9a3d"],["/tags/Web工具包/index.html","944631652add75a6c920efe99362259e"],["/tags/awd/index.html","9826e2ae01ecd4e9a966fd53a9e814a5"],["/tags/bugctf/index.html","9628b648b3c029341ff23ca372c065e1"],["/tags/ctfshow/index.html","5c0db9c8e5f8ddc0a78487ea903ad0aa"],["/tags/index.html","4c3d8154b2d3f08262d7c66213932fdd"],["/tags/misc/index.html","1ac5d2fcf5254bb63ce56810dc1f5c41"],["/tags/next主题失效/index.html","508c4bc328e8cfbd6bdf183645f44d4a"],["/tags/sqlmap/index.html","f6ecc57636ab2c6a786fbee934f7daa1"],["/tags/wp/index.html","ef67c5f3eef69228d0ff25a369da5b3f"],["/tags/xss/index.html","2418acf6d928d4f1321a5270a38fdf04"],["/tags/xxe/index.html","72cbe6130e7754dd64926ba4ed157917"],["/tags/不蒜子不显示/index.html","531ec36a977d1e77307c5f10c6479757"],["/tags/博客/index.html","ee5bbcf8697ac8dd066fabe2c6f48e76"],["/tags/博客主题优化/index.html","72713633906ee2918c99c88507445300"],["/tags/博客死循环框架问题/index.html","46b5673a9af0f76c6e6744df87878337"],["/tags/博客部分问题解决方法/index.html","0a4760b2e9dd30d20533ceb95f9cceb3"],["/tags/反序列化/index.html","b0e44173e64c215a7a5bb03307ce06a8"],["/tags/命令执行/index.html","c3b874a6b44bd4ac03aa508f2fa04ff5"],["/tags/局域网攻击/index.html","4d2dbfae3daf363924bf50f767000a31"],["/tags/常用指令/index.html","d8400802aee19997e78f02b8724cad2f"],["/tags/心得/index.html","04b1a564e5764806becad9ff7eed11af"],["/tags/文件上传漏洞/index.html","a52cffbf58bc1ded57eee6fab2772c05"],["/tags/文件包含/index.html","249e55632755e322ac9f6d129609e33d"],["/tags/流量分析/index.html","3e0b62941e99a796c938130700711ed8"],["/tags/渗透/index.html","efefb08d1bcac8b6002770a27e0fa396"],["/tags/渗透测试/index.html","09c42016412e5f18bb1235784d34f9ae"],["/tags/漏洞复现/index.html","dbbd18963cc89d15cf0b0209b1b9d0e2"],["/tags/留言板/index.html","6af7ba108a8a489a4775d7f5e3601b5c"],["/tags/赛后复盘/index.html","0d20f96cc4a82d0f5a563dd2c022ef19"],["/tags/黑盒测试/index.html","01e5e97b98e75b4659888d6370cd3d65"]];
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
