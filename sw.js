/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","73262fda6368af3eb1fcbcfbd144685f"],["/2022/01/08/ctf之web/index.html","724cc4eb4d7eb006fe9b067e1a8cd11f"],["/2022/01/11/博客制作遇到的问题/index.html","31b33afd738036705d1cb6422cc22351"],["/2022/01/15/C/index.html","b82527d1ad320ce17cb5aa5d0f6697a0"],["/2022/01/18/新版next置换/index.html","025ae7e70d74f22109ca89deec36f25a"],["/2022/01/19/不蒜子相关问题/index.html","5861c0507fbed2c8f20aeb859e8e3032"],["/2022/01/19/框架问题/index.html","703453c5a8a54b542c5766f1eed28caf"],["/2022/01/20/ctf之reverse/index.html","7828691c67580358683b3e515a1d98db"],["/2022/01/23/misc部分解题软件命令记录/index.html","269c192ff5d3f8d2b2b9f2959954e472"],["/2022/02/01/684/index.html","6eeafe3aa6cf9fc7378b70a434e03695"],["/2022/02/03/留言板/index.html","5ab3a5a1c9c846e5fd324afcb6ebac44"],["/2022/02/04/SQL简单注入/index.html","0252f0dbbe1d1c75989744e08c497bce"],["/2022/02/05/最全的HTTP头部信息分析/index.html","36f48c6fd5d015814522c89587550dac"],["/2022/02/08/ctfshow文件上传/index.html","e7646c144c7b5c6d7f52f18407794af3"],["/2022/02/08/常见密码类型/index.html","d9eab53668bc17c62410bd783b76967a"],["/2022/02/12/VNCTF2022WP/index.html","d4ee636a85d91151307f978373b4fe98"],["/2022/02/20/ctfshowPHP特性/index.html","73baaa9c7db4e93303c851ba06d03510"],["/2022/02/25/php伪协议/index.html","118ec879cfd6643242b785ea859f1d48"],["/2022/02/26/ctfshow文件包含78-117/index.html","30268b348dba9276ba0841d05a5fdc3b"],["/2022/03/02/Clash漏洞/index.html","3343a82b7110d9499005d222c732606d"],["/2022/03/11/流量分析之题型解析/index.html","08472b0a5583f30e51ccf487785a2479"],["/2022/03/15/ctfshow命令执行/index.html","2f1d9c6ce92db68459b5c3e7889215e4"],["/2022/03/22/CGCTF/index.html","27a5b776d79fd418829cfffb5c3357d0"],["/2022/03/24/ctfshowxss/index.html","02e2f109d87a6b372fe9d3e0df929dcf"],["/2022/04/04/黑盒测试/index.html","bc3df610e917d466299101df48dd8cc0"],["/2022/04/11/nmap/index.html","549aecf4251fc75c4c0614623253c51b"],["/2022/04/12/渗透流程简要记录/index.html","e948ed95577bc6db8c2b433af3c86d1c"],["/2022/04/12/渗透测试之攻破登录页面/index.html","e3fe8985ca56a47eea000971a43e74cb"],["/2022/04/14/xray扫描器/index.html","7e2e4dc9fc9c599d9e3499420e5fc87e"],["/2022/04/15/ctfshow反序列化/index.html","2773beed84767021495332fea2f76d9b"],["/2022/04/26/渗透测试实战/index.html","c5f7936fa5aa88fdf1f7735037a65ef8"],["/2022/04/28/sqlmap教程/index.html","ed6377c289f651c7612793f28fbd7a18"],["/2022/04/30/认知文件上传/index.html","3574b7d2371181a1eb0d31407d414ca6"],["/2022/05/03/nahamcon/index.html","c466fb8b0b900378e2c6b5a3465fd147"],["/2022/05/15/awd/index.html","81f436749c60839c758c02069a50216b"],["/2022/05/22/DASCTF/index.html","f4a2beea2fc30652018ba409f4078063"],["/2022/05/27/520/index.html","188cb7451b28fc66104a3aa3386c26ea"],["/2022/05/27/ISCC2022/index.html","4e500b1660242e30433c8a68f19c9a74"],["/2022/06/01/第五届世界智能大会/index.html","2ae63e1134afbeac443faeb4d9aca0b6"],["/2022/06/04/SEETF/index.html","95daf69d7fd1c3ab62226c77b57cd429"],["/2022/06/04/bcactf/index.html","ca5c3852b406c0297dc641dfa9523958"],["/2022/06/05/BSidesSF CTF/index.html","47c9c4dd54d987793ccc1b206580a991"],["/2022/06/07/Docker部署web题目/index.html","974abe4500733f35e2577e50ff232e43"],["/2022/06/09/利用oj搭建C语言考核/index.html","70cd38caa47b9d9829568380bc63a59b"],["/2022/06/13/限免题目/index.html","27b2535279ab3d6e00133fd788c7e053"],["/2022/06/14/钉钉rce/index.html","7454ba333bef090f7c796dece3bc8e2d"],["/2022/06/16/内部ctf/index.html","5f38f340ee18b013bd5325ca223309fb"],["/2022/06/25/攻防世界高手区(一)/index.html","0bd6dbd47225fbf9073ed68119bf4f39"],["/2022/07/01/两小时AK赛/index.html","e6e97f3666597f5190e5a48dc960769e"],["/2022/07/03/鹏城杯/index.html","ce515baf524c7d8cd402045008ba64aa"],["/2022/07/04/XXE/index.html","ac2ec205ea9f942736b5723d97519c85"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4b232c844d3bbe32ea76f4d37cab3905"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","b8f4203f90158e731b8c1e3c90a00510"],["/2022/07/08/chinaz/index.html","2281062c8089e15fc9cf87ce7b7f14a9"],["/2022/07/09/蓝帽杯初赛wp/index.html","ec9d9a5b39b042608b1503d67c1c9dee"],["/2022/07/17/NepCTF/index.html","d5e0e10b41a47c8b9073b621a5bbf689"],["/2022/07/19/ImaginaryCTF/index.html","b6bbc5b27deedd95cbdae8e22d3f344e"],["/2022/07/20/局域网攻击/index.html","6e46b6c540b732a7180ec04cb90ca86b"],["/2022/07/22/BDSecCTF/index.html","e570de84b4070f3d64cbf680a763058f"],["/2022/07/25/DiceCTF @ Hope/index.html","b7c27bec5d76183f800a2246df7435cd"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","af4f03bd5627dd9925ab49bd59ac3103"],["/2022/07/31/TFCCTF/index.html","7fd8f847e5131b35e6da857a29122f35"],["/2022/08/03/NSSCTF/index.html","b546b56784b2067c5ad2430472d3e34b"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","30d44413fb005aafac7d8e6bce1ae402"],["/2022/08/12/T3N4CI0US CTF/index.html","645075ee1c0844671823387475b765d3"],["/2022/08/14/SHELLCTF 2022/index.html","b6f39329f8f464552af3f796244980d9"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","a7f5186da867e7b5d1a3b5a112bc7b5d"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","db3274ebc601e9f3cb52f1a8cff00f39"],["/2022/09/16/柏鹭杯/index.html","3a503d529c345338eb26ad9467c9e18c"],["/2022/09/20/HUBUCTF 新生赛/index.html","91f5b95dc55f0a3d58009b28d5f6eae9"],["/2022/09/27/NewStarCTF/index.html","6d1e576c4c247be543a1182c1952a16e"],["/2022/09/27/bugku渗透1/index.html","8733d5210457865bba22e2c4e406d218"],["/2022/09/29/tp6漏洞/index.html","09b4387865d1ebd9bed806006395d912"],["/2022/10/02/SWPU NSS新生赛/index.html","e1e09393a131b9e12e307faf5f71d440"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","c0211800a622f7a12d5e6886fbbf156f"],["/2022/10/27/Moectf西电CTF新生赛/index.html","50cb8b860ba262c5a1d53d10eeb050aa"],["/2022/11/02/HNCTF/index.html","59aa3bb6924e0c0418884be08111a9ff"],["/2022/11/04/2022工控CTF/index.html","7204b38cc8b785b15e773539c4248543"],["/2022/11/21/极客大挑战2022/index.html","98b8e170f8752c4fbb5b57ac8cb88d19"],["/2022/12/05/TUCTF 2022/index.html","62225b77481d950d3a4bc3afa838bcef"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","767ffa994888061a921215a6d2ade333"],["/2022/12/18/金盾2022/index.html","6c1a0737a57e169cb57c431649cd038d"],["/2023/01/01/CATCTF/index.html","022a498a15edfa2d3dd3c9be6381feeb"],["/2023/01/09/RW体验赛/index.html","77186eecc7751b43a2feb0fe03d29404"],["/2023/01/10/铁三/index.html","73e7b0d5acef0dc2d58e0b7ebc4d2337"],["/2023/01/16/Ugra CTF Quals 2023/index.html","5bd79e9c21f2cfb99a387ff4e31f4779"],["/2023/01/18/山石2022冬令营/index.html","8406a69019a01d540b136c980e060e69"],["/2023/01/19/SICTF/index.html","541cd5e2c6843597f7d0d8a16ccab1f1"],["/2023/02/04/2023西湖论剑/index.html","c803b6ee5b7f4b240eda140e504f1bfe"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","53d5f83e9ec2c94ef7997784974fe0c7"],["/2023/03/04/公安/index.html","6ef1b726ba3d6746fde1d4b75d0964c1"],["/2023/03/07/mysql之udf提权/index.html","7b39644581a607f52fd4c9435805680c"],["/2023/03/07/红日靶场练习/index.html","ef43b8fa7bc11652073d361768a05bf2"],["/2023/03/27/NKCTF/index.html","1526d7e8c78a31ae3e309429a95b56a4"],["/2023/03/31/楚慧杯/index.html","05979f02fa03b3508d3aae8b52e8d183"],["/2023/04/23/HDCTF2023/index.html","602bb5ba15819d8a640a85a40f7b56ae"],["/2023/07/10/CyberSecurityRumble Quals/index.html","d6e7b6f5ba2d0552866f46619ab1b84e"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","9dff58512e3a0ef65df903f24cc2f8e0"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","12e185ddbd4cd3b8a02f275134bf6f8a"],["/about/index.html","8c22e0ba0eaf465d8f1aee9a7cbff498"],["/archives/2021/12/index.html","9acaebe379c55797ec24799e827b73e4"],["/archives/2021/index.html","bbbf0e0f6c893f03e7b04e78b5711890"],["/archives/2022/01/index.html","4ce324dda60ae0288f6590dbd6d6e909"],["/archives/2022/02/index.html","c3ca32d1bd74cb4631b4f81deda53ecd"],["/archives/2022/03/index.html","c04d64cc571ce16c58645b16802858bb"],["/archives/2022/04/index.html","98c51de29b8178e995c83e3b621db2be"],["/archives/2022/05/index.html","c17b979ae90227fbc8110f43c0c3fa45"],["/archives/2022/06/index.html","690b5ca717df5a17c1e9aac3eee86585"],["/archives/2022/07/index.html","119d9ef4c23fb39709a1578eb40c95aa"],["/archives/2022/08/index.html","7164f03ce6c35d18327cc6a4a891ae8f"],["/archives/2022/09/index.html","c76c6e2597d18dbbf11c1b7ab45c0a74"],["/archives/2022/10/index.html","89e7608659962a5f57ec22dfb70f458d"],["/archives/2022/11/index.html","45ce62de1b8ea427fd0b0e709f15561c"],["/archives/2022/12/index.html","50a639f5ab16d1786d233d29142db975"],["/archives/2022/index.html","852b0f3ef988924a02bc11184f7d6bdf"],["/archives/2023/01/index.html","3d92ef81757353a27857fce2419e64f0"],["/archives/2023/02/index.html","1c53bbc80bf6b97d012608f45e2f500b"],["/archives/2023/03/index.html","cc3a27a6694e7dbdb157b74816497104"],["/archives/2023/04/index.html","a3196217607da2e11ea0e14dba3309fe"],["/archives/2023/07/index.html","66732a0f7b6f100fd158c570b8a8ada4"],["/archives/2023/index.html","625285971da790cbd2cc906ab758ffc3"],["/archives/index.html","c4612fb0b6c9431991cf669055a0e609"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","599e43c6d8949ef4620efc74659936cf"],["/categories/CTF/index.html","cd6195550d95198f458984dcb3d0d1a9"],["/categories/PHP伪协议/index.html","95267f1d94e8c490f8fa36b33d5a09f2"],["/categories/RE/index.html","173ee92e41f6172e3e148c0b89b41a40"],["/categories/Web/index.html","50d2b2e8d9a27563787d9a6a2321177f"],["/categories/awd/index.html","bf8e6c2f54d65c5eb86fbc1bd9b2ee08"],["/categories/index.html","76cdcc48f29128cbf888193858359dbc"],["/categories/misc/index.html","b8ad05e9ab0c2b978fc12ec67f9a8aba"],["/categories/sqlmap/index.html","4d5f07880d8f378f7542f8d9d6d67293"],["/categories/博客相关问题类/index.html","9ada02db9cc367e7aff0f1cffe84a89b"],["/categories/局域网攻击/index.html","17f3b9fed221d79723e8855a5ab859b9"],["/categories/心得/index.html","86434ff0dbd492e833b813205f3e8968"],["/categories/流量分析/index.html","18264aacc6567d48507f6da0a982193f"],["/categories/渗透/index.html","65cc730a9c47fbd7b7aa32e52c5dcd1d"],["/categories/渗透测试/index.html","24785b68b724ffaebffa98c246629595"],["/categories/渗透认知/index.html","f294fc5fbee06ab6acaf0e440563863f"],["/categories/漏洞复现/index.html","fe91cca342786f1f58de76e221d3f86f"],["/categories/漏洞测试环境搭建/index.html","9f49e886022f9fac9a32f582f2c4a212"],["/categories/赛后复盘/index.html","5c66b0f7397986a5f0179dc526c1a1d3"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","309684a2bb7d2fe1ca41d204ad49f9f2"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","d34ef79e450a143674ce13b6f2327bef"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","02519fad56a4f82d7ec241bb15131135"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","a5021e0b3f27b6e904c919d33fed3053"],["/lib/pjax/example/index.html","ec66e912f6657c398a3adfa84fbfda97"],["/lib/pjax/example/page2.html","aed6728ee432ee341de16039fea4fa71"],["/lib/pjax/example/page3.html","1d517122b34601ac3c81d7b61f6b3272"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","d15b39a082a0003de61ad74ca55d0b44"],["/page/10/index.html","cb593a240825514337ee679a4ac0c465"],["/page/2/index.html","15eb4d3f4590412f8c4b07b5d427f512"],["/page/3/index.html","ee5f4f35bcb3c3a8f0987edc3382a3a2"],["/page/4/index.html","98480994628fcfd5fbf02c27f6bf8e1f"],["/page/5/index.html","2c3dab6c6cff99344c46562937e088dd"],["/page/6/index.html","58207691a14550c812606ed1b5ad980f"],["/page/7/index.html","298dfa4aa03c18d21cc0cf5af9d97879"],["/page/8/index.html","40105a22120ea36c4ba19de82baeab7e"],["/page/9/index.html","88a83c13f97fcf0af55f88ed65655693"],["/sw-register.js","0ea7056b90a41bed207cb45d2f5ef286"],["/tags/C/index.html","ca42d3dcdd23f69052fd11cd87bc4322"],["/tags/CTF/index.html","f0bf1d0642af321e0367e5300b8c0f32"],["/tags/HTTP头部信息分析/index.html","985e8f8bcc38ea357d1a1ccc8f2f7269"],["/tags/PHP伪协议/index.html","6da2ebb5db31e1230f03f497ebbc00c9"],["/tags/PHP特性/index.html","f0463d677c94e0135850c69feb50d956"],["/tags/RE/index.html","08be1c6f80e8659fb1da5fa43206ee64"],["/tags/SQL/index.html","11945930bfc4ec98094223d4fdca4cea"],["/tags/Web/index.html","897f7888434108ac3f5b5b77ac9dcdee"],["/tags/Web工具包/index.html","c90237f0a0d21de4c7b75cff24c06214"],["/tags/awd/index.html","224e595fcc66a51ffb4f6ff87c043a51"],["/tags/bugctf/index.html","156382ab8813926e681b6df18b400662"],["/tags/ctfshow/index.html","18653348e94dc84af06d918dd9d6c997"],["/tags/index.html","1bf8639a60717d4e78212f13f24d47a6"],["/tags/misc/index.html","a3d8eba218cd348b18673054e9f24b89"],["/tags/next主题失效/index.html","0608ecd5804b2d973ad3c9f43ead021b"],["/tags/sqlmap/index.html","ac6127107e01157b0c1866b2b22d59f3"],["/tags/wp/index.html","f4eb8c74cae1e926863bbdb73c62f79b"],["/tags/xss/index.html","de67d076cf74fbfadd97a0942a5a46b4"],["/tags/xxe/index.html","dd1e55676e54280c88277097f834e785"],["/tags/不蒜子不显示/index.html","9e32621fa7130fd095300b76459ab108"],["/tags/博客/index.html","6cee75dffc6c244c4edc177af264b2a8"],["/tags/博客主题优化/index.html","826edf3d018b7a18c67a42aba1771093"],["/tags/博客死循环框架问题/index.html","5e784e90c4ba67826de9991f3d063505"],["/tags/博客部分问题解决方法/index.html","f014684a389b757816f11f7e4e7b2480"],["/tags/反序列化/index.html","daa3dbfa94d5e428e3ed3d329984767a"],["/tags/命令执行/index.html","9def26ddaa46e5aa70d80c08e8755cf7"],["/tags/局域网攻击/index.html","7c3aab592286a5716dfb5fa8417c2977"],["/tags/常用指令/index.html","ae1cf97b967245165b55232f79e73be6"],["/tags/心得/index.html","97708cbfcbbfbc6a4aec19830d5f3ffe"],["/tags/文件上传漏洞/index.html","27120bd6033d1298067ff6e5e9a52238"],["/tags/文件包含/index.html","b05ebfbb1f7b0cfa2dd74a236cc1589b"],["/tags/流量分析/index.html","3b0637c5ca66709892d65313dd36b24a"],["/tags/渗透/index.html","f47b25b8b185645a6439a023b0a3a94c"],["/tags/渗透测试/index.html","130a0ced6ac9a37a3d932622347d4f75"],["/tags/漏洞复现/index.html","705d2e3c8dd7f5e0a1849469fea75e20"],["/tags/留言板/index.html","f749f39de488fff81381b7a630c27567"],["/tags/赛后复盘/index.html","c41ab41b033341da84242ec57abc9853"],["/tags/黑盒测试/index.html","0af96c7fa80c45b3a0597326a788c482"]];
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
