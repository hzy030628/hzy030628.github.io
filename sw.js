/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","3940727b0e739c482ae9248caf985644"],["/2022/01/08/ctf之web/index.html","7fadf384faeabfef390e8de488ea80c2"],["/2022/01/11/博客制作遇到的问题/index.html","234772672f1638a58da18ebe03802fae"],["/2022/01/15/C/index.html","11b7307d632f576199fe38e6dc77d6b1"],["/2022/01/18/新版next置换/index.html","0dee00daf950befa38afdf88f212bd00"],["/2022/01/19/不蒜子相关问题/index.html","9d7baa91edba5f45444fbf56ef4efe13"],["/2022/01/19/框架问题/index.html","14dcb973c792b143ffd11754f6626e8d"],["/2022/01/20/ctf之reverse/index.html","9573fb3d2e51d49a298b3820ceac2bac"],["/2022/01/23/misc部分解题软件命令记录/index.html","019845721d5f0d294d08d33b25b0085a"],["/2022/02/01/684/index.html","b1365880b4724f7f31a5b2c182a1db1a"],["/2022/02/03/留言板/index.html","140d308f0f15eafe89f51c1dd3a88d1d"],["/2022/02/04/SQL简单注入/index.html","45ed3f5bbd3d2e38a70e3ecd2521dbed"],["/2022/02/05/最全的HTTP头部信息分析/index.html","024ebdff264e5cab0cf11ff6b12e3cb2"],["/2022/02/08/ctfshow文件上传/index.html","95c238efe078defc74822f4fee8194f6"],["/2022/02/08/常见密码类型/index.html","592baaac28b7460ed0d8785f9540c401"],["/2022/02/12/VNCTF2022WP/index.html","ce5d75ccbc185553d538b42812208c20"],["/2022/02/20/ctfshowPHP特性/index.html","70db3b97d26bd32a4a793d78b59b884b"],["/2022/02/25/php伪协议/index.html","9a29870c902794ac9d135ce94ca290ac"],["/2022/02/26/ctfshow文件包含78-117/index.html","41848a1a6785e2b844d28593d7ac8717"],["/2022/03/02/Clash漏洞/index.html","594aa3fa4852fa90f842a86e0037ea19"],["/2022/03/11/流量分析之题型解析/index.html","13957db9a289b14231cb2c07d6941709"],["/2022/03/15/ctfshow命令执行/index.html","a03393ebe461bc43d196d90f0feca899"],["/2022/03/22/CGCTF/index.html","b2c9df9ec1c8e587c0d8628709ff7641"],["/2022/03/24/ctfshowxss/index.html","d90f51dabf424c477ac131f48fe98a7e"],["/2022/04/04/黑盒测试/index.html","e0152773595a294af0921bff3eb2bb3f"],["/2022/04/11/nmap/index.html","fdb887c68eee60f2141fec25f391165d"],["/2022/04/12/渗透流程简要记录/index.html","ffc87a16d85396cd7a1d804637d49ae7"],["/2022/04/12/渗透测试之攻破登录页面/index.html","4fd5f16e61749e567b3f6882fde2b22e"],["/2022/04/14/xray扫描器/index.html","867d3ff82c78b34388ada1def028c4f4"],["/2022/04/15/ctfshow反序列化/index.html","6ed3e0d72ed1c53e37360631d85fbea6"],["/2022/04/26/渗透测试实战/index.html","e25791f0deb7cd2f301fc2db51246438"],["/2022/04/28/sqlmap教程/index.html","30c440c355ff324017f8f3d3ed9d29ad"],["/2022/04/30/认知文件上传/index.html","5eb79275b88e06e39ec696bf267d34af"],["/2022/05/03/nahamcon/index.html","e3303006e26838fae5daeff3ca3a8c4d"],["/2022/05/15/awd/index.html","70e0568e3b22551e93b1c55c9a86d687"],["/2022/05/22/DASCTF/index.html","843b3038791a690dd3dc573632a8e5d4"],["/2022/05/27/520/index.html","271ec5856ff5d84fbd33c76b44892a67"],["/2022/05/27/ISCC2022/index.html","8d95d8daf13996e0dc9f3a69a7704af1"],["/2022/06/01/第五届世界智能大会/index.html","f6918b49b7a1d41cfc52b16dd9fca4e5"],["/2022/06/04/SEETF/index.html","4a7aba38da1b88e3601e5162a561a190"],["/2022/06/04/bcactf/index.html","bba7184adf0b424cdb8d8bec5110c3c5"],["/2022/06/05/BSidesSF CTF/index.html","b6dc77f2d0e8fbd2519311b09416b29b"],["/2022/06/07/Docker部署web题目/index.html","84bd4d4c4385fbc77e51caa3c0bd3781"],["/2022/06/09/利用oj搭建C语言考核/index.html","07b717ec88853b5673ca87d03a9ae568"],["/2022/06/13/限免题目/index.html","c5c7c4e7a92c3c69c0197f5c7cc409a7"],["/2022/06/14/钉钉rce/index.html","bd22f81c50685f5cb370b09521e42a9e"],["/2022/06/16/内部ctf/index.html","061b98caaa367027ca8d07f000f5d420"],["/2022/06/25/攻防世界高手区(一)/index.html","7dff64443fdc144d666216b448218fe1"],["/2022/07/01/两小时AK赛/index.html","ef4ddc2c09d9a45d700b97480b806e86"],["/2022/07/03/鹏城杯/index.html","19dc8aa10f6faa874388863e9f109c3d"],["/2022/07/04/XXE/index.html","474c186e1aef4fa2709a5638bcd7c388"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","dbddfd1d802de4f2edddd4dfd1fe0690"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","6872e3ada7b78fdf1dc468277e4ef209"],["/2022/07/08/chinaz/index.html","c503036a92a2156a78b54ad43ccec06a"],["/2022/07/09/蓝帽杯初赛wp/index.html","778d2d6c0c1cb27ce1912798d46bcf9f"],["/2022/07/17/NepCTF/index.html","782345c9af0603438c4ca569f81859a5"],["/2022/07/19/2022ImaginaryCTF/index.html","9957915ebab1fdf309a320634224394d"],["/2022/07/20/局域网攻击/index.html","5cdec71bf42086eb2b4b22c06a5f469c"],["/2022/07/22/2022BDSecCTF/index.html","0b73fc3be7fa8490eca0980ff13cbcd7"],["/2022/07/25/DiceCTF @ Hope/index.html","a521f28dc636336668f471a156f1a867"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","9369aee194b466e580520a5df45aadff"],["/2022/07/31/TFCCTF/index.html","c8fba3125816f489d30cbf73be972eb7"],["/2022/08/03/NSSCTF/index.html","0cc85abc3ec93280588a0301fbf34a44"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","9ad632e0fa2018fec913685cc791a372"],["/2022/08/12/T3N4CI0US CTF/index.html","b06b3ce803677b90db0a70fa7a712ed7"],["/2022/08/14/SHELLCTF 2022/index.html","3d558545c1c2c9a3ba0d8fd1df0676a8"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","34797eeebb396c4a6d211af990670e90"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","5ca497268e1076e950eb388317916a49"],["/2022/09/16/柏鹭杯/index.html","83042e98971881266af5a233fb1c5578"],["/2022/09/20/HUBUCTF 新生赛/index.html","8429f3a7edffad9c2a43f3a7553ad5a9"],["/2022/09/27/NewStarCTF/index.html","be8c66c8df41adf709fbd737fb775a1b"],["/2022/09/27/bugku渗透1/index.html","c143baa1934ed79347119394aeeba259"],["/2022/09/29/tp6漏洞/index.html","dba5705504909178e12e4dc8133582b9"],["/2022/10/02/SWPU NSS新生赛/index.html","ba82837a5a34e55a09df3a0119122aba"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","1cbec44781b9e11922922f1b32dd5684"],["/2022/10/27/Moectf西电CTF新生赛/index.html","8f818890857b3698a5a7a49015e4267b"],["/2022/11/02/HNCTF/index.html","f7a40b11dad67829b2b180933b12e96a"],["/2022/11/04/2022工控CTF/index.html","2dd1c1ce704f2027bc8f2f2a8f18572d"],["/2022/11/21/极客大挑战2022/index.html","d5867a8d31cc6285c0c0e504be21c171"],["/2022/12/05/TUCTF 2022/index.html","68831fe0871447af1ac1e415e0b48209"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","cca2ded95cafbcdb83ab4c957a5a10a9"],["/2022/12/18/金盾2022/index.html","02e5118c83a8100e3e7318e7f6ce1c73"],["/2023/01/01/CATCTF/index.html","249915ada5c2d3358d971ffe5ddbd9e1"],["/2023/01/09/RW体验赛/index.html","036d72bd735fcabdfa7031619c6e6fd0"],["/2023/01/10/铁三/index.html","0127e7bc0c26d8d2fd0a0c08c796017d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","b2e672e294e504e2f1efcb2a11f1263d"],["/2023/01/18/山石2022冬令营/index.html","3a28d2ea65f33bb30be2ca8b93ab27db"],["/2023/01/19/SICTF/index.html","2954443ba6bdf68edb3fe4ac118ac54c"],["/2023/02/04/2023西湖论剑/index.html","f25bc9cd68d87c69fd01c75728271c13"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","abfb0bd743d9c7eb889287a58bfa6d59"],["/2023/03/04/公安/index.html","0e386f4719c8f20df27e17b13f043cf1"],["/2023/03/07/mysql之udf提权/index.html","fc7914fa02636edbd864eca543db2f42"],["/2023/03/07/红日靶场练习/index.html","2ce1d8cce474516630a2ee361523ef87"],["/2023/03/27/NKCTF/index.html","6f10493e2d7ff041caba933d265d32af"],["/2023/03/31/楚慧杯/index.html","6bf7c3f6e1d654bdb7c6e3848697c542"],["/2023/04/23/HDCTF2023/index.html","c370dfad055e6a609f41b07135c82f57"],["/2023/06/01/2023CISCN初赛/index.html","93a6e1068f6e6a4efddca81f8294cb24"],["/2023/06/28/2023CISCN[华中决赛]/index.html","5793467b1776147224fe0e72ae2c18e4"],["/2023/07/10/CyberSecurityRumble Quals/index.html","12b6b21647ff340d85bcdd0111aff226"],["/2023/07/22/2023BDSecCTF/index.html","37806a32e5f0bb2fcd7c07b0b37f7d60"],["/2023/08/07/SQL手注小记/index.html","b758dc844d55cb0d5f49108af8dd8f91"],["/2023/08/27/2023陇剑杯/index.html","6256e0bdd84834e1e040342be54b2883"],["/2023/09/17/2023蓝帽杯半决赛/index.html","2812ec002e84a5a9f31083914441e0aa"],["/2023/10/23/对于多层代理的研究/index.html","a28821f87cbd38ad4643399b96505cf2"],["/2023/11/25/金盾2023/index.html","1d05fe1940ab1a4426eeae8a33a85ec1"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","8451660bc7d099f891ce752a9f77546b"],["/about/index.html","0750ad1371768a92b020f67ad571b6a7"],["/archives/2021/12/index.html","9184e4a41fba2b085d70a1e0f12322b9"],["/archives/2021/index.html","77229ef9f1be3e04b8fa107ca8ce00b2"],["/archives/2022/01/index.html","15f14f126de629126590c1c9d35ebf3f"],["/archives/2022/02/index.html","aa05daed9855ea5ddcb78e96ba5c066a"],["/archives/2022/03/index.html","8dcb08db3dde4160a4577e34205b05df"],["/archives/2022/04/index.html","03301c3fcbbc7441f83ef899eaadbab9"],["/archives/2022/05/index.html","d7af4ba3ac3f049b5f544c3efa7e8257"],["/archives/2022/06/index.html","45f7359a68dc5f7e6d336465d180f3d0"],["/archives/2022/07/index.html","f0e6e78a289c39897fb5c77add490604"],["/archives/2022/08/index.html","a6f37905e3f909d3b93a5dc7f48c6bd0"],["/archives/2022/09/index.html","6eb707e4462c8f065117b443c4d09bb1"],["/archives/2022/10/index.html","f6d351b9e2c0d247ddb29c3b677cc1e3"],["/archives/2022/11/index.html","b720b81d546bdbde92f0bc342eedeeda"],["/archives/2022/12/index.html","5447ab8899f42f5a918f25b4bef0a397"],["/archives/2022/index.html","4496d8776ae353f789459ab5b17f5a0b"],["/archives/2023/01/index.html","abfb1ac8a331f194b4cd713dca732a4d"],["/archives/2023/02/index.html","beee956135429fc195474f6c4f94393b"],["/archives/2023/03/index.html","63f81a0f520b4f80af359c74c109db5a"],["/archives/2023/04/index.html","1060f4e69cb184e69575c0b6b18a189b"],["/archives/2023/06/index.html","b14355d0a86d1f1db5554370a322af9e"],["/archives/2023/07/index.html","a7618f4a386a36e660370dcbed245dfc"],["/archives/2023/08/index.html","cc460e3aee8eadac6b09e3a6e05adeb3"],["/archives/2023/09/index.html","107f1a619f64a56dcab0f6c4aa241dd4"],["/archives/2023/10/index.html","220a0bb2523ee5cbb31697dda332f617"],["/archives/2023/11/index.html","a0285835704aee147bc2890d0e4710c2"],["/archives/2023/index.html","1c13824a34aa806fcf36e3e030eaa1bf"],["/archives/index.html","280abf090eec7944b686eb78f04d1ec2"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","0ceb8193c527583d5ca64dd8e59ae20e"],["/categories/CTF/index.html","4e788e919b35205aa8cab574529e732e"],["/categories/PHP伪协议/index.html","89ab196e5e607c463d827bd19484cc47"],["/categories/RE/index.html","30d0544c13e0138f4dd928b385696fc6"],["/categories/Web/index.html","cf2f17d6ef7ab4449325096c65a20ded"],["/categories/awd/index.html","69a9beeb8a901ac36fcc9b162fb1345d"],["/categories/index.html","70988d56e4f2d8479524b7c9376dd22b"],["/categories/misc/index.html","2e6e1fc671be3e08446987276c3f7f5d"],["/categories/sqlmap/index.html","b4d55a86bf75bc8658585bf00da99649"],["/categories/博客相关问题类/index.html","60918257e62dd88fb8ae2b97fae29e68"],["/categories/局域网攻击/index.html","869a70c96ca84fb61c993c0f7e4c9fa7"],["/categories/心得/index.html","a0a719d34a91c417dafb57b03989bc8c"],["/categories/流量分析/index.html","3353b80a432040e100f2580e37947f20"],["/categories/渗透/index.html","59c2f689a0950a5cf1ee3c82db5c8f4b"],["/categories/渗透测试/index.html","97f08e3d730be3dbb533a790b756761b"],["/categories/渗透认知/index.html","525d6f1a3d9a680eeb44e526fd9c5f63"],["/categories/漏洞复现/index.html","a509179e66d6b97bab70847dc798b5f2"],["/categories/漏洞测试环境搭建/index.html","dbbc0ac06d3efdbd48104d29388a91cf"],["/categories/赛后复盘/index.html","f15985fc2762ed1f1ace3d62fbb73780"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","571a028e945e20a8600d28172c4d4936"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","39d7fde734c4c07bf7876a1149323a97"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","8b8713b1dd901fe33c218b69e19d6b53"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","3f551373a8c0a9262ac7169e550649ab"],["/page/10/index.html","27d06190e3175c565a9d5e1884c11dfe"],["/page/11/index.html","143cbe8478884b1fce1cac20ef1b9974"],["/page/2/index.html","349ee5e2b776710d6688c9a1bd4d1e5d"],["/page/3/index.html","a411b7ff91dd86d9d3aa56b9befe452e"],["/page/4/index.html","930ebb3f3bda9c1ac45ba107d42d8159"],["/page/5/index.html","cf5c0c85cbf7a48c3ce5c1f0b11fb038"],["/page/6/index.html","7769e5a61564d4b77a9a43c39881a1eb"],["/page/7/index.html","548bb4345cd285b4357e456f58f4f08a"],["/page/8/index.html","203615be34362209041de4a27a19ab33"],["/page/9/index.html","61c2fc7f826fbe55a50bd77a90bc9973"],["/sw-register.js","55fb4f7790ee4365ed6909208d9300bc"],["/tags/C/index.html","704d06c5b2a6cb279702b229eff85bfc"],["/tags/CTF/index.html","4a050074198948170c59d37bb4494664"],["/tags/HTTP头部信息分析/index.html","f9ab64274186a841aee882a6b5b41cb6"],["/tags/PHP伪协议/index.html","75f38ab137b8ea8fc60aba68a5df1ce7"],["/tags/PHP特性/index.html","8ac4cf016667a6e6de611cf4288d6f2e"],["/tags/RE/index.html","01723f84f8bd02985bcafb00b3dfc583"],["/tags/SQL/index.html","0d8b8c75ee8ccea128131ee4356a9924"],["/tags/Web/index.html","7a851c21874bb921a77aaec5d62d72f3"],["/tags/Web工具包/index.html","e7964cfdbbf790fb01bba73942af4aa1"],["/tags/awd/index.html","d110accf9a6f1c5c53e1868f6894cb08"],["/tags/ctfshow/index.html","ad7c7a96aa971f9b17838f91fd0a473e"],["/tags/index.html","7f1ee490dfd83dd26c59cde0d172fab0"],["/tags/misc/index.html","50526d0b7f1133ae8e7cda8741f386b8"],["/tags/next主题失效/index.html","0f00b2dbb4f310cf934d4b43f32f9ba3"],["/tags/sqlmap/index.html","a62a3c50442f55e0fab1b1b9ad37404c"],["/tags/wp/index.html","b38f38d30e6bfd628ed4fd203511f68f"],["/tags/xss/index.html","6dcbfa69d4288997e4015e634be51630"],["/tags/xxe/index.html","73464cc737ddb9bdb9e5801123da6544"],["/tags/不蒜子不显示/index.html","98057679e9fde1e1dabdc06335e78fe6"],["/tags/博客/index.html","5f185c1eceb1f84aba0eaf58bec695b9"],["/tags/博客主题优化/index.html","c4f40e960f76dc14ee8620fcc5077707"],["/tags/博客死循环框架问题/index.html","f77beafd99e008cbc6760e24f4e1fc3f"],["/tags/博客部分问题解决方法/index.html","a2af64a77dade972a55cae5532eed551"],["/tags/反序列化/index.html","07f9a4957504a576f269361b5522521b"],["/tags/命令执行/index.html","18d6a6c467afac4d8f7562b8f0586a85"],["/tags/局域网攻击/index.html","9efc870fde5d0695eeef4cecafbb6c47"],["/tags/常用指令/index.html","ebc877572a6e2c18920ca58ef992bb67"],["/tags/心得/index.html","0b6590f6d0025d5c7434dd91de9be233"],["/tags/文件上传漏洞/index.html","aa8b4ed3de4d870ee0b6d177e5ca2cdd"],["/tags/文件包含/index.html","ce2603f75242a7bdf2b4442e99f2ef07"],["/tags/流量分析/index.html","ee94ed3913effdb30e47fedaf666a72b"],["/tags/渗透/index.html","063db5a1f1069397dd71b80ca179f742"],["/tags/渗透测试/index.html","ed4afeab8280ea1573cef86a644cba00"],["/tags/漏洞复现/index.html","71389daeca8599ffdd57c67770e11983"],["/tags/留言板/index.html","00e18a95feeb7422e7e27b687354d8fb"],["/tags/赛后复盘/index.html","69893b90aceb3b95e5fe826bfde6cecb"],["/tags/黑盒测试/index.html","aeea327b5a827cecf04e118fb4add719"]];
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
