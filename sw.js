/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","75a37cf1b0c16ef4bcc5a8245f5e2b9e"],["/2022/01/08/ctf之web/index.html","7e4c6e6edaae0930cef439cccb7fe1a7"],["/2022/01/11/博客制作遇到的问题/index.html","00ccdd09985972c1476592c9b627499f"],["/2022/01/15/C/index.html","aea92134dc6bd431b52490112f61834d"],["/2022/01/18/新版next置换/index.html","ccc391ca10c880e92bf34108ee5f9050"],["/2022/01/19/不蒜子相关问题/index.html","b03bfe10e09b8ea6e13dad11c9da42dc"],["/2022/01/19/框架问题/index.html","6da96ab0db334af9170cb026a5781a9b"],["/2022/01/20/ctf之reverse/index.html","73563d1a422c662dccc634df27f3c973"],["/2022/01/23/misc部分解题软件命令记录/index.html","04a829de0e313f6bf3e2ab18862ecd37"],["/2022/02/01/684/index.html","7e6c3557757008b4d5150a06e1133673"],["/2022/02/03/留言板/index.html","6037eae608261d783271963fd1b00777"],["/2022/02/04/SQL简单注入/index.html","bdc8ad6720e17293bebcfe0f00461b7b"],["/2022/02/05/最全的HTTP头部信息分析/index.html","7cd414a5a94b713830da7f7b1863ff3e"],["/2022/02/08/ctfshow文件上传/index.html","1a2ec05a6dd0d463b657d14a5fb5f678"],["/2022/02/08/常见密码类型/index.html","880d1c85710ec8d936d6240cc5801838"],["/2022/02/12/VNCTF2022WP/index.html","c0c2e40adb8e1420a55cf6c5c6a1e4d4"],["/2022/02/20/ctfshowPHP特性/index.html","732d9091fb53b83a078db17baad32628"],["/2022/02/25/php伪协议/index.html","3c9406850726fda6a189d2a779e0ec77"],["/2022/02/26/ctfshow文件包含78-117/index.html","0be98c7b860d7aa06209a3e34a12ac8e"],["/2022/03/02/Clash漏洞/index.html","37f2a9cf5f9d2923370125ea1db04d18"],["/2022/03/11/流量分析之题型解析/index.html","e4da04b65ae5f753090028fc89031413"],["/2022/03/15/ctfshow命令执行/index.html","7a36956273b6bb986619844114673b96"],["/2022/03/22/CGCTF/index.html","f21471e86511e4569bd6572f4fb28024"],["/2022/03/24/ctfshowxss/index.html","fb676905ab02ca2212a4390b55253d42"],["/2022/04/04/黑盒测试/index.html","c8242bb0a38fd35788be70797c29ee41"],["/2022/04/11/nmap/index.html","b33ba8449ca429b75db996421537a56b"],["/2022/04/12/渗透流程简要记录/index.html","b30341781d29e5a2c2576700228a42dd"],["/2022/04/12/渗透测试之攻破登录页面/index.html","97c7640ae7a0dde8d01983eb5fc301db"],["/2022/04/14/xray扫描器/index.html","b5e13eec4a059aebc3648c5249ddcb66"],["/2022/04/15/ctfshow反序列化/index.html","9f9b56f7733768e1e98fd4ad89dadbb4"],["/2022/04/26/渗透测试实战/index.html","81d6452297375d2625f7e53fe49e3d7a"],["/2022/04/28/sqlmap教程/index.html","2742e0cf86a1b3ea0ba73007dbb1a0d5"],["/2022/04/30/认知文件上传/index.html","3d78bf2a24999f5d6feef0796b34edb1"],["/2022/05/03/nahamcon/index.html","44f97842f01df9b64b15f96813ea6853"],["/2022/05/15/awd/index.html","a6c1587573f2270cad7f825500462eb0"],["/2022/05/22/DASCTF/index.html","289f712e7baa77659b769f0cfa1d52dd"],["/2022/05/27/520/index.html","d09889482b21aa4ba22b7c350ad955ac"],["/2022/05/27/ISCC2022/index.html","951ef808118dde60e9ec6984f20d76a5"],["/2022/06/01/第五届世界智能大会/index.html","1eb7f42a8cffa0686eaa8a82acc4219a"],["/2022/06/04/SEETF/index.html","51911057b62b96fae0df0e7eb022fd5b"],["/2022/06/04/bcactf/index.html","cf91a8f0e2a59d0615da91659587e186"],["/2022/06/05/BSidesSF CTF/index.html","13cbd40ed1fe88331ed8214336b14785"],["/2022/06/07/Docker部署web题目/index.html","a49e0f0a340574ed57b23f46f6f152b9"],["/2022/06/09/利用oj搭建C语言考核/index.html","9cf886e9f7f10bd2df557e9ad4ce3bf8"],["/2022/06/13/限免题目/index.html","79540fd789de4c91e804670b824f2b65"],["/2022/06/14/钉钉rce/index.html","a3df12b0da986e5d6f8f8a7a649545c5"],["/2022/06/16/内部ctf/index.html","29b4cb63132375ef84b6a3a0cf61f985"],["/2022/06/25/攻防世界高手区(一)/index.html","addb1279756bb0ac48589b9e3cf97144"],["/2022/07/01/两小时AK赛/index.html","1594443733212b161071e457617331a4"],["/2022/07/03/鹏城杯/index.html","f2b7b69593f465e1c82f3f79c2b9be45"],["/2022/07/04/XXE/index.html","f3f7c3500052a0612e12d68c670efff3"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","9b8bf1d850e7527f16a4695a43be8eac"],["/2022/07/08/chinaz/index.html","98880e11f85fd604f067de45eb934a98"],["/2022/07/09/蓝帽杯初赛wp/index.html","79e99a4afc17ee55ed1f9f892d8ea699"],["/2022/07/17/NepCTF/index.html","6a4ef0975172ecf3e0e4f9ebbc390a41"],["/2022/07/19/ImaginaryCTF/index.html","0d3d11b79b5644fb827029faba33d10f"],["/2022/07/20/局域网攻击/index.html","5f6af1e1260db46902e03ef7776d2548"],["/2022/07/22/BDSecCTF/index.html","62a73a41611cb02ee66ea59427537e27"],["/2022/07/25/DiceCTF @ Hope/index.html","eac43823c84b785b17bcba4151b03ed5"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","3900c0d1553ba0e02df38e0ec1e58cf0"],["/2022/07/31/TFCCTF/index.html","d2cd5f09eed0e8712b52cc2c31394625"],["/2022/08/03/NSSCTF/index.html","6dd825c1d624076f659046ace60b0e1c"],["/2022/08/12/T3N4CI0US CTF/index.html","cf8092ced897386850c9b288cc305f30"],["/2022/08/14/SHELLCTF 2022/index.html","160a276d22a67457496cafbfae525555"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","141f391521c9324e430e08af19ff885b"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","c68c5bb376d8cbb2e58a80ae82d4c601"],["/2022/09/16/柏鹭杯/index.html","58d81138077b2e6ef7ea44d04eea90d2"],["/2022/09/20/HUBUCTF 新生赛/index.html","9dfd307198df9ad60a658a9ab62a6938"],["/2022/09/27/NewStarCTF/index.html","545a3808ddacdf5ee7ebb91af74f914d"],["/2022/09/27/bugku渗透1/index.html","2c9c9067997df0d6cc0988f0cd00cbde"],["/2022/09/29/tp6漏洞/index.html","e4da9ff68ed5aaac2d6b79e2bb4c4116"],["/2022/10/02/SWPU NSS新生赛/index.html","50f16c242d0dc20cec8c142f18b94695"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","12f5af93ec5b59c486c56825178da6fe"],["/2022/10/27/Moectf西电CTF新生赛/index.html","23b17a029d6288db2d7adfd789890758"],["/2022/11/02/HNCTF/index.html","47e3117631ee6702658663f9282203be"],["/2022/11/04/2022工控CTF/index.html","d88143586b94d2a42f5596f067c2151b"],["/2022/11/21/极客大挑战2022/index.html","9430c62fbe4b106bb3e6b7e883fe4325"],["/2022/12/05/TUCTF 2022/index.html","368641f822fd78a77b5d248c126863d5"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","6e3c90c5bf8844cd3c9981074941eec4"],["/2022/12/18/金盾2022/index.html","a4fc98046a1c90aeaa0e74e0c3ea7e59"],["/2023/01/01/CATCTF/index.html","267afe90ff14ddac5d135d9a1d856a8c"],["/2023/01/09/RW体验赛/index.html","e0400b561dcca7497068dac1bb991136"],["/2023/01/10/铁三/index.html","50ea20df80f8228316f9d079c1fe4093"],["/2023/01/16/Ugra CTF Quals 2023/index.html","e2b85686062d71f4f379ce674afa856b"],["/2023/01/18/山石2022冬令营/index.html","584ad20766eceab61b5c419db015acea"],["/2023/01/19/SICTF/index.html","9c1c235963954e19f64cf32abdc30896"],["/2023/02/04/2023西湖论剑/index.html","fb39e81bea6bed9f773079baa5003b89"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","d38c16ba5eb03add16913f51a6ac6a25"],["/2023/03/04/公安/index.html","630cf70087674778f11cf2a29c5b99dd"],["/2023/03/07/mysql之udf提权/index.html","60e2b98a3afd41d4d7ad35685602c540"],["/2023/03/07/红日靶场练习/index.html","9d215e08329efb87e2373ad12cc6ecc9"],["/2023/03/27/NKCTF/index.html","f9236b81084b43cc713e2c222596ca5e"],["/2023/03/31/楚慧杯/index.html","06c651e9f4aa92669f79654e87ad4129"],["/2023/04/23/HDCTF2023/index.html","ac3bd832d91180de14e3df45884b13d7"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","9a7f7d451fd8539fdae7ab0aebcbaa1d"],["/about/index.html","e7676770cc598d8a41b852ad81b7aefa"],["/archives/2021/12/index.html","51a0a0b6b07da8c7861afff9a9dae324"],["/archives/2021/index.html","8c848bf968691b956860be9f7b7e10e3"],["/archives/2022/01/index.html","efe18f71561e52341007fb62c5ae58c1"],["/archives/2022/02/index.html","a569759f231586f29bc1ebfce1a42912"],["/archives/2022/03/index.html","7a17b80c1bbabc31a745d530eaa5a830"],["/archives/2022/04/index.html","e0465b60d5b15fc9d9714bc3bd716448"],["/archives/2022/05/index.html","2af5082b068fa8bb2ff81b912fcccba4"],["/archives/2022/06/index.html","8fe9017dcd24ba0cb927e44c2817cc4d"],["/archives/2022/07/index.html","22e23c05f5dfac4088cae5a2568c9c35"],["/archives/2022/08/index.html","037d0b3cad0ee5ea8343181ebf2cb899"],["/archives/2022/09/index.html","b0ac12d86427b784e79bc87f7d0d06e8"],["/archives/2022/10/index.html","7abf85ab9b093783b11020c197459fa6"],["/archives/2022/11/index.html","f46239dc3d9c030b304558aee8f596fb"],["/archives/2022/12/index.html","b329baec4ec38287fab8ae427f6bb1f2"],["/archives/2022/index.html","f15f8c1adba5bb2c0c9b628d129161f4"],["/archives/2023/01/index.html","67a4ec23cbfa3a43600ebfbe9c000393"],["/archives/2023/02/index.html","fa7f9b13b441a1336501b95905994d7e"],["/archives/2023/03/index.html","c7a7a9173218351294963cffd79803b5"],["/archives/2023/04/index.html","b04ac8f59f879cf5237319ccba926f1c"],["/archives/2023/index.html","e3f5228544e28fdb24ee8b606f285ab9"],["/archives/index.html","6a137788b7a531c9f9412920d8fd6683"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","deee72775db2cdeb17b2203ec97f5375"],["/categories/CTF/index.html","3ff71968a4de2f96098322254fd64c2a"],["/categories/PHP伪协议/index.html","03af9cfbd056fd5ceab006e91ff03ca6"],["/categories/RE/index.html","f312f9e5c7300f069006b6dfd88bff09"],["/categories/Web/index.html","d2e6b298b22286b06723bc564d5caf8e"],["/categories/awd/index.html","b9abc3feadd754fa8c2cdf6cd02a7cae"],["/categories/index.html","36b53a718acdbaaac18974126d5b1cdd"],["/categories/misc/index.html","e730f41be9c26d164af47a465cd41501"],["/categories/sqlmap/index.html","b45e4621d04351b3cec5e3021ed13e63"],["/categories/博客相关问题类/index.html","260fda514dcd26a34962278b7e0e136d"],["/categories/局域网攻击/index.html","2455be5faaf6d5577e94c6efe25c7309"],["/categories/心得/index.html","732547d222d0c51d6974fcda9023b751"],["/categories/流量分析/index.html","01ee7cbfab131524d27618de7fee6c79"],["/categories/渗透/index.html","44f02e2cb2afbb513848b4b59e089457"],["/categories/渗透测试/index.html","af56cfb379cf024643638b5e247850b9"],["/categories/渗透认知/index.html","86418aa5a8ee973069e165a036c97c2f"],["/categories/漏洞复现/index.html","99f80add2d6bde0757c9ab30663673d4"],["/categories/漏洞测试环境搭建/index.html","a4382978d8b3533dd5ee681c16897b6c"],["/categories/赛后复盘/index.html","2ada81e4e0c7a1a6f1c94812b2f06f58"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","88c5313dbaaa41a2a2c28bdacbf2c809"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","1f80cb2a490143bb898fc14bbe54f847"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","60e3b8572a24bb7cd8f9c0510298303b"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","55372e03a717ad8c214b4632078eb672"],["/page/10/index.html","b2548c1994380e4100b4ee35e9f29bcf"],["/page/2/index.html","550c5c2c53c3a655154810e9ce092be6"],["/page/3/index.html","f7f6538ca9a717d5840292c3c85ff7fc"],["/page/4/index.html","3bd86c4fe6efe4d902418f043cb67ec7"],["/page/5/index.html","ec9ca94c03bed8b0e4ab542ba5521838"],["/page/6/index.html","a1e9de1e9311f5b5529517724782e721"],["/page/7/index.html","8c764fdb41b8d816556b74e75ba2676a"],["/page/8/index.html","91ecf24ad6b025a91bf3e74eff15c41f"],["/page/9/index.html","d8c57c56279ebb03e3a5e17638c0068f"],["/sw-register.js","cff9660786591ab827266128e0e81e21"],["/tags/C/index.html","a42989e84dd0d2fe7a06b37397ed5425"],["/tags/CTF/index.html","93c2fc4fcf344f951541280880521dbc"],["/tags/HTTP头部信息分析/index.html","efc8e52ac57fd9c114cbe220c6a09062"],["/tags/PHP伪协议/index.html","974cf22d651fbaf7b17e975a17aa0240"],["/tags/PHP特性/index.html","dff15b34f34fb5cbc6d0528ea454d695"],["/tags/RE/index.html","043a134075c2e7b4d0672e5c3d8954eb"],["/tags/SQL/index.html","2e53bf03cba5073f3e4b777d42d07f44"],["/tags/Web/index.html","82284ceecf6f4e628369095b03c40fb1"],["/tags/Web工具包/index.html","fa843feaacf7fd25cdbbe1c3efd7d9aa"],["/tags/awd/index.html","47ff122462766ebdeb0833318e0f6994"],["/tags/bugctf/index.html","d98bc1456c08a10f1ab40d9866feab5c"],["/tags/ctfshow/index.html","dffeedb53036b13bfdf5c06f15806725"],["/tags/index.html","edb5d2bf262be88f418228477d63192e"],["/tags/misc/index.html","ac738dec3b1e4b1e8b397c22cccd926e"],["/tags/next主题失效/index.html","219b386ab68a68e438ec62f79ef2018f"],["/tags/sqlmap/index.html","96b030d54063dd50297c03b28b180e8a"],["/tags/wp/index.html","566e914cf531ef2465903f5d5eb00795"],["/tags/xss/index.html","4e50c1575c5b4b38e31424cc7b061a82"],["/tags/xxe/index.html","6e9bde9088a6d3b2955b016416d2bbe1"],["/tags/不蒜子不显示/index.html","780c2d9f7755892755ebd7b8655103a1"],["/tags/博客/index.html","7e67aaca3ed52dd9873321aab5fdc808"],["/tags/博客主题优化/index.html","cde57316311ff9e81f8057377c97f111"],["/tags/博客死循环框架问题/index.html","ade9307ecdc5da70613376bca1ae385a"],["/tags/博客部分问题解决方法/index.html","b0d405292e92f21ca4fde2b6c86c1f83"],["/tags/反序列化/index.html","b03778e633ec65c29653a57402c7ea18"],["/tags/命令执行/index.html","1c7eeae6fea2dd3106703a45cd6eed18"],["/tags/局域网攻击/index.html","d79208d0a4a15520663fca67307ed2d3"],["/tags/常用指令/index.html","08e145b964718bd5d296dcac1164aa46"],["/tags/心得/index.html","a7ac22fef6a714f31b7f860a0edd4f30"],["/tags/文件上传漏洞/index.html","37a65d66bad16b21dac8e0a6ad5e1907"],["/tags/文件包含/index.html","31b402894432b9fb922bbe64aa498a66"],["/tags/流量分析/index.html","3300fa3e756fe7d9593332b52ae6e2a0"],["/tags/渗透/index.html","8be3c498a29805c3c8bd5878237eabad"],["/tags/渗透测试/index.html","f1646af057a530d494cb54bed2ca382c"],["/tags/漏洞复现/index.html","9a53c37a82d30a08d426acd44a737d17"],["/tags/留言板/index.html","1d2230b7409282df2da7304c188e94e1"],["/tags/赛后复盘/index.html","865c72d91b0e235b1289fc56a5ff612b"],["/tags/黑盒测试/index.html","5ac8e437faf07a7eae7e432e338f782e"]];
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
