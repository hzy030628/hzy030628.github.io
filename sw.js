/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","690e6776d73339b96e276531ed0138b2"],["/2022/01/02/Python程序运行常见错误总结/index.html","e4df0709dec1d23c103ac78d551602c7"],["/2022/01/08/ctf之web/index.html","e80f089c59ecae0440c9c9ab164853b2"],["/2022/01/11/博客制作遇到的问题/index.html","4e20962880c97b9d2cf81ae438dc3748"],["/2022/01/15/C/index.html","d6f24ae3eccaf03aad59369b19d190a0"],["/2022/01/18/新版next置换/index.html","f5bad15962e5aa17a1e813bf26d64259"],["/2022/01/19/不蒜子相关问题/index.html","1814db465217cd442f9fcea917d85c94"],["/2022/01/19/框架问题/index.html","549cc7f49771ab91489171473e5a66b0"],["/2022/01/20/ctf之reverse/index.html","8c222c001ace13d85c10c0055cb57633"],["/2022/01/23/misc部分解题软件命令记录/index.html","d6aaa6bf0ebd8509ebe8839d4387ea0b"],["/2022/02/01/684/index.html","c9109f4e3ba2a6a60098d20b9efa29b4"],["/2022/02/03/留言板/index.html","94ff185bd9511401d2ef3a4a5af85dae"],["/2022/02/04/SQL简单注入/index.html","28be0aad05b699913ccff66409a61005"],["/2022/02/05/最全的HTTP头部信息分析/index.html","51bca983a351644a55c44b86e85d3361"],["/2022/02/08/ctfshow文件上传/index.html","168d1e1fd01406bff5614cfa46f36f36"],["/2022/02/08/常见密码类型/index.html","2d656f6074b374ffb87b5612876ed97a"],["/2022/02/12/VNCTF2022WP/index.html","4f6e9bdc74bacc333b807f318aa2a3d4"],["/2022/02/16/rce/index.html","3018f6a94e09133eb5692f8a70c91b4f"],["/2022/02/20/ctfshowPHP特性/index.html","e3472a87e3efd6e370b9af9a91931261"],["/2022/02/25/php伪协议/index.html","0530449919ed9495d92a7a5aee506aea"],["/2022/02/26/ctfshow文件包含78-117/index.html","8a660feec3de6828529decf37daac74c"],["/2022/03/02/Clash漏洞/index.html","6160e35da83e1797df0ad5651301b03c"],["/2022/03/11/流量分析之题型解析/index.html","2c9e1dc59d2c09f2afbee1b0e397fb9a"],["/2022/03/15/ctfshow命令执行/index.html","da9c77e59f23e7380ce83976f984e4e2"],["/2022/03/22/CGCTF/index.html","8b9162b50b5f879d079d4a807536e9e7"],["/2022/03/24/ctfshowxss/index.html","dd43299ab6e068e4501ba4158482167f"],["/2022/04/04/黑盒测试/index.html","aeeb555ae90a9a1d1384c270a2bc096d"],["/2022/04/11/nmap/index.html","264f624cd0fff2b6aa91a3f03a2f12ed"],["/2022/04/12/渗透流程简要记录/index.html","ac4c1597d12ad22c5066c31237852c7a"],["/2022/04/12/渗透测试之攻破登录页面/index.html","7dd387e5394c88219695a7b9c2885408"],["/2022/04/14/xray扫描器/index.html","703b49f5df7870022b1785f2ef749bd6"],["/2022/04/15/ctfshow反序列化/index.html","7d9adb47928ceab9bef68f0836b9a011"],["/2022/04/26/渗透测试实战/index.html","dc3462a6ee3eba34d7ababacdfb9970b"],["/2022/04/26/网刃杯/index.html","65df712f4b6076f38d6bb88a135302b2"],["/2022/04/28/sqlmap教程/index.html","bffd948e825e66cdf0985e54007a3657"],["/2022/04/30/认知文件上传/index.html","23795d2ed369dee069a93c7fe485fdfb"],["/2022/05/03/nahamcon/index.html","872d33a2ec68032fd6179684a5e65b5e"],["/2022/05/15/awd/index.html","50e21201e2bd6d83b58a146fbd276671"],["/2022/05/22/DASCTF/index.html","f8dfda4ccfbb5d2bd96e2afadb5b30b8"],["/2022/05/27/520/index.html","d1719d0e789b90f7ce692fed379f0139"],["/2022/05/27/ISCC2022/index.html","759ad40e2546f4513351862680e48c7c"],["/2022/06/01/第五届世界智能大会/index.html","042acb8e25acd1ff048495f3fa6cad14"],["/2022/06/04/SEETF/index.html","94f07b3bf00d7420db3d3910bbedf579"],["/2022/06/04/bcactf/index.html","3cef593b19a3fa3cbf6a828436f35575"],["/2022/06/05/BSidesSF CTF/index.html","3c1942900d61950d63c8a338e91b42e1"],["/2022/06/07/Docker部署web题目/index.html","1869e82555227f565025961e4e4b0d30"],["/2022/06/09/利用oj搭建C语言考核/index.html","49a665dab9a6311dac5b6f5e83b2fba1"],["/2022/06/09/论网站502/index.html","0b541cb7f271d5a1fc781459c9a4d46c"],["/2022/06/13/限免题目/index.html","53aa177c4476aa6110ebc3867939465b"],["/2022/06/14/钉钉rce/index.html","f02c8dad2f06bbb682be04459f383b43"],["/2022/06/16/内部ctf/index.html","e5c99ac69c2159b7fbac7a69878b2bce"],["/2022/06/25/攻防世界高手区(一)/index.html","51259fc7e7f183df8bcb17a92ea1eeee"],["/2022/07/01/两小时AK赛/index.html","cd55baf0dc3196ce816cf79eabdcd85d"],["/2022/07/03/鹏城杯/index.html","2bba56cc6463299643b990820d4d0718"],["/2022/07/04/XXE/index.html","7ed8752ffd1fbe646a74dbfc7a6f79b2"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1a0bb4cc7d7b46e5da52d4a6fa7db952"],["/2022/07/08/chinaz/index.html","40f30e951572429f8dd8aca076d8786b"],["/2022/07/09/蓝帽杯初赛wp/index.html","1d780e70977fec1a2c3a039c0f228ec1"],["/2022/07/17/NepCTF/index.html","96c65b22f3a084a0f0cd0eec04dcf97d"],["/2022/07/19/ImaginaryCTF/index.html","625d1ab445984f407b2bb69d6668c11b"],["/2022/07/20/局域网攻击/index.html","891b5d4d26b0fe35e8c98e444619fc19"],["/2022/07/22/BDSecCTF/index.html","088698c071456e2f1339de12c44eb439"],["/2022/07/25/DiceCTF @ Hope/index.html","8fbc94af470734f137fb602f93e9ded0"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","4426b22f8571ff0183b5c9ccc01a41e1"],["/2022/07/31/TFCCTF/index.html","9ae3ca1a2214a71df5b894f6c193d0e4"],["/2022/08/03/NSSCTF/index.html","993c81cf8d80523365e1afbeb9d717dc"],["/2022/08/12/T3N4CI0US CTF/index.html","b1c1e0712804a8d0c747e62960b03ffb"],["/2022/08/14/SHELLCTF 2022/index.html","1af9edf6c45667565537a285b1be1828"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","11b24612da8cd97cec2eb9b2233bae5f"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","b596ba8002a9c7b10cf1abd0788c7a1d"],["/2022/09/16/柏鹭杯/index.html","be4ca7c8d3015094b989aecc017933eb"],["/2022/09/20/HUBUCTF 新生赛/index.html","08fd44b076a49eeaea1d3cac34f3aa2c"],["/2022/09/27/NewStarCTF/index.html","9991145d4eb73fb2694f6e280f2b7d96"],["/2022/09/27/bugku渗透1/index.html","9d9b06a0e30e13ea697ee770a84d545b"],["/2022/09/29/tp6漏洞/index.html","675d697eb6326ca598441e22d45417be"],["/2022/10/02/SWPU NSS新生赛/index.html","74ad6b5568ac94622fedce8fba1df0d6"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","82ef4de5324fef527aa1d874e92346f5"],["/2022/10/27/Moectf西电CTF新生赛/index.html","b7c0731a98254f5db98caabc9d35a69f"],["/2022/11/02/HNCTF/index.html","0c35d5ef52341d7a16cfb0656ae2dc9b"],["/2022/11/04/2022工控CTF/index.html","27def1024407e391710ef07047c76fbd"],["/2022/11/21/极客大挑战2022/index.html","2af0fba1b1eaa854222f48a815fcf903"],["/2022/12/05/TUCTF 2022/index.html","281e697a14d3511b1c2be514961c5278"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","916477e89b3e239b61155fc9261f8cea"],["/2022/12/18/金盾2022/index.html","4b324b8520ecd0e234cd0965c5aa5e16"],["/2023/01/01/CATCTF/index.html","962a47ffa35ad9a3d14c5005e51825a0"],["/2023/01/09/RW体验赛/index.html","18a256c8275971cb85f7a382cc5e66c7"],["/2023/01/10/铁三/index.html","4d4d03dab033d67e2c98a3b5974712de"],["/2023/01/16/Ugra CTF Quals 2023/index.html","2039ecc90e9d42d1bf58b5c7b20a52f6"],["/2023/01/18/山石2022冬令营/index.html","27f525be66326f7637d1544d6449ce2a"],["/2023/01/19/SICTF/index.html","aa7ca8928e8a3285bd9f9f4d3e7e973a"],["/2023/02/04/2023西湖论剑/index.html","1453c764f0046ea101cf2027cc682082"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","34c6ba9727519047bdb700cdbbb48b57"],["/2023/03/04/公安/index.html","e969a12978a024bb4079f1c2abf7e2ce"],["/2023/03/07/mysql之udf提权/index.html","d5f79827b9a6f831366103f185aff8cc"],["/2023/03/07/红日靶场练习/index.html","eafbe46d05eedb149500fd1d50a662db"],["/2023/03/27/NKCTF/index.html","64a9b2ef5937d6666466ec1b0ac9d07a"],["/2023/03/31/楚慧杯/index.html","438e1643b5b48b5f3d9b376413aae009"],["/2023/04/23/HDCTF2023/index.html","66840c8a7f68445eaf55f4cb6140ff13"],["/2023/05/05/暂停/index.html","914832dd7da74bb6042e0f3d86d4701b"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","a271ce91ec9162dbcd8396662e06a979"],["/about/index.html","dd49b77e30fcb1405b941649f0add2a3"],["/archives/2021/12/index.html","05f860ee7a431e1ee2d3f49abb77ffad"],["/archives/2021/index.html","bb7bd5b086dabcd61c4a2bdb16bc81bf"],["/archives/2022/01/index.html","bca8a3452f8afcc5bb43ab5703a961d0"],["/archives/2022/02/index.html","86144ac1a1b7d60ad22eb93f45e820e6"],["/archives/2022/03/index.html","32ada58848a76d0257c2b147bc7f2fed"],["/archives/2022/04/index.html","1b0b21a5def6eff95b10d2b01ce88c0e"],["/archives/2022/05/index.html","fe63009e17c52985a808f10eda78b37d"],["/archives/2022/06/index.html","bc910bf85076067ef1a011ed33261d2a"],["/archives/2022/07/index.html","fb0de6d9481c24a00c00a522d63b8082"],["/archives/2022/08/index.html","11a85c3bc2e84f752faf10ed8b020dfd"],["/archives/2022/09/index.html","fa88e9670a3b39dec137f0242cd64883"],["/archives/2022/10/index.html","b0902fa452142c9a42cf9d45c3c72c50"],["/archives/2022/11/index.html","ba640822ec199d1523c9d9bad90ed235"],["/archives/2022/12/index.html","29a0b9e417b9e6225b1aa8d0dcd29f48"],["/archives/2022/index.html","a9ca0876c76a550337e9366de65e881e"],["/archives/2023/01/index.html","6acc367515518ce72e4aa497dc62d57f"],["/archives/2023/02/index.html","643f9a68f5fb626954ed25e0b22f8147"],["/archives/2023/03/index.html","2e06b59aac0feb00b2e02e8cd2b639e4"],["/archives/2023/04/index.html","3f2d123f9fd68dafa4427656695890a1"],["/archives/2023/05/index.html","000b5457665bda6219905e89067a5540"],["/archives/2023/index.html","3858180a3392a2b51ed34017d6bd83e1"],["/archives/index.html","b884f7e12ac101cd36906b37821238ec"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","51e4ca3961fb9a0c0469156e3caba099"],["/categories/CTF/index.html","f823b7749b0d631436c8cf3d7554977c"],["/categories/PHP伪协议/index.html","f98d4899b2a23867f4bf2e075c0db33e"],["/categories/Python/index.html","0fee8441a5260d145ef5707cf9170d43"],["/categories/RE/index.html","a17cdca5a1819aa8ad51703eed5b15b8"],["/categories/Web/index.html","5f7b62c032acb3540d96b00480d1ff7b"],["/categories/awd/index.html","f512604d8d80d15188bc97f9282ba833"],["/categories/index.html","ed6e881c675b828d860227f91f4fdd4c"],["/categories/misc/index.html","8448ca30b6d0342dd5c8fd262dd67167"],["/categories/sqlmap/index.html","8c16b1e4e6b9006b6bafad35d0d7e613"],["/categories/博客相关问题类/index.html","cd5b443cc7e51890f3d549edfd66662a"],["/categories/局域网攻击/index.html","3d2a7c65fea1b21f4b9de57897991f92"],["/categories/心得/index.html","3432d1a166fa42d3db3429b90f187589"],["/categories/流量分析/index.html","781a610d51bc3ac05e6cface468f0a50"],["/categories/渗透/index.html","32a0e6c4c1b43117c4c6896a5f228d94"],["/categories/渗透测试/index.html","5556b4576f49f21870a81cf56c58ca00"],["/categories/渗透认知/index.html","0d19b885d1251984998deb9b74cd6a0b"],["/categories/漏洞复现/index.html","b84b578dfd00750561b9499fc5fd3749"],["/categories/漏洞测试环境搭建/index.html","47dfdaff3f10f1971a2c324d99171f5b"],["/categories/赛后复盘/index.html","81bb0a7077e2226af73acecbaf59bcc7"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","c3b7bc0953e0ba9ba61c27065664688d"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","e125533f6af5eb8c4ba628457a89b776"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","5e030cbec0675d0ae9ebc9ce36e77e82"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","0bcc3b4063059ef36368a746fb787575"],["/page/10/index.html","3a7d470697cfc3d5ad4736b736502921"],["/page/2/index.html","a5bdca481144ca42fa9887584fb109d7"],["/page/3/index.html","f18d93d4ba6667bbce3c4740b514407a"],["/page/4/index.html","6757e3b14b069572a9e7ef5223b23ec0"],["/page/5/index.html","8658f26a98f679e542a579bbe6a4fe61"],["/page/6/index.html","c80b844169b86e52c8fdcc82bc9e36db"],["/page/7/index.html","7ca381d0749220c6184f2bbd6cec6eb1"],["/page/8/index.html","a4a9b5ff4b91b91e380a8cb388e0ab5f"],["/page/9/index.html","dbecdf293e6d1297a9a125856731ffb2"],["/sw-register.js","a472ad32a856f682c7dba0adaba6dcd8"],["/tags/C/index.html","59f9eeb41cfd90dc5c2da50f0449b9cd"],["/tags/CTF/index.html","d7c54bff6911b5bb66f7f62d63183258"],["/tags/HTTP头部信息分析/index.html","91e4b9524838183aeac00b767a0a0d65"],["/tags/PHP伪协议/index.html","575dc6006cde48eb56df9ff09a9fd85c"],["/tags/PHP特性/index.html","25b978e535d2cd785b66b5de6d2b84b4"],["/tags/Python/index.html","edbeff39b029feb4d8c4a6b77aca2c08"],["/tags/RCE/index.html","3daad4c6699ebd29cb63fc8b1fdbccec"],["/tags/RE/index.html","9955bbb5404a0ee4b8ad54f5bd4abaae"],["/tags/SQL/index.html","7b4d28cd7cf1119da813719c35930aec"],["/tags/Web/index.html","2387f47c01d103fabf24c42d05d1e84a"],["/tags/Web工具包/index.html","a6e172e54500634583c9a2b2ef7616cc"],["/tags/awd/index.html","3e4739cf60a8be6d6d2c9e1960193a8b"],["/tags/bugctf/index.html","e27052bad7a9b5840b3fb2829ad4c321"],["/tags/ctfshow/index.html","907c267a9892f57d1143602fdae0f92a"],["/tags/index.html","e8d5c6cbd8fd697c0ca7f41910d750c3"],["/tags/misc/index.html","3e7108046ec7f73bb4ded0b4cefe776f"],["/tags/next主题失效/index.html","c15f0ada46f298f0947a3d6bf60f4b7f"],["/tags/sqlmap/index.html","97698ab31107253961f4008a0fabc664"],["/tags/wp/index.html","ecfaabc8209b3a7a8dd4b6ad735e0df9"],["/tags/xss/index.html","828e49f205efaf81eda186c1ba0871cc"],["/tags/xxe/index.html","32c5a53d6fc74edf9ab244eb73b402d0"],["/tags/不蒜子不显示/index.html","1106eb2cd726efc71b144613afb4ec9e"],["/tags/博客/index.html","019db5a3dcbf0426ccd36e4bd398cfcf"],["/tags/博客主题优化/index.html","10a1c24ff0f293d3e0f4d6d9baaf7178"],["/tags/博客死循环框架问题/index.html","3d14e099af3c3a965639ee8f2a05818d"],["/tags/博客部分问题解决方法/index.html","5ad0b9d3fa1e48b1c1de3a833bed455a"],["/tags/反序列化/index.html","1976f54940a941a796f0e623533710b8"],["/tags/命令执行/index.html","13655885d27fbbda84a9360e96006aee"],["/tags/局域网攻击/index.html","2b10dd98325655a2fa8710750b335ae2"],["/tags/常用指令/index.html","a1b4aba64ab1ef0c65df10ac7a9567fb"],["/tags/心得/index.html","78f38104b9ca56dd0a0b3822daaffee2"],["/tags/文件上传漏洞/index.html","c925ec035ff5f9c97c2d38a7ac991f03"],["/tags/文件包含/index.html","4ea7b50f4afadf172d2b01c3b1b53f78"],["/tags/流量分析/index.html","67e7ee30ef9c460302c9d1f34129fed8"],["/tags/渗透/index.html","44e28f81ede593f7a62c551f77eb58bc"],["/tags/渗透测试/index.html","da3483d2c7b87e3c46b02d1be55c07be"],["/tags/漏洞复现/index.html","686bab75f9d0c42987b8a8a18dd03a1a"],["/tags/留言板/index.html","e147f1be6461ac49bd46ac23b834f0b7"],["/tags/赛后复盘/index.html","0b9c3a00c7316f02378500879585571f"],["/tags/黑盒测试/index.html","dbf3a3e50f184a23fe602f39316c01bf"]];
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
