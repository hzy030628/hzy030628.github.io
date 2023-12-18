/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","4fddaa85c549958a63371c6b92f1b62e"],["/2022/01/11/博客制作遇到的问题/index.html","06bdb7ced6c37b445f5d2ea0aa10509f"],["/2022/01/15/C/index.html","9b3471cc4c0bdabf2f726645c737224a"],["/2022/01/18/新版next置换/index.html","ca33db5323edcb9f92cc46145ecfd441"],["/2022/01/19/不蒜子相关问题/index.html","176b7ad060fa4629bb5c72d65244ff0d"],["/2022/01/19/框架问题/index.html","6e487361877122033872e951fcd72a15"],["/2022/01/20/ctf之reverse/index.html","475e0b8ad4315f48be9a51e2ffa2f1b0"],["/2022/01/23/misc隐写题目总结/index.html","021647eed43b9e199b8970a0ef289343"],["/2022/02/01/684/index.html","526f1d039103cac0b9214199d123c625"],["/2022/02/03/留言板/index.html","1b13ec93409239605f5989c0780be9d5"],["/2022/02/04/SQL简单注入/index.html","384c697da36e0e8570eef22b6b4f7860"],["/2022/02/05/最全的HTTP头部信息分析/index.html","fb3c4e0a8b2fa16fae0e67702329a93d"],["/2022/02/08/ctfshow文件上传/index.html","e0170f2681c3e0db5a7f95ab80e9758e"],["/2022/02/08/常见密码类型/index.html","3a7d85a7ebe7cc4de0c17701fb0daa20"],["/2022/02/12/VNCTF2022WP/index.html","f0153ba6073675268eaa1d7e7c13ac33"],["/2022/02/20/ctfshowPHP特性/index.html","6b2f4b8a6ce89401c90d7d9a2526ac10"],["/2022/02/25/php伪协议/index.html","4638ea9dd980863c1bd0049d9196e0da"],["/2022/02/26/ctfshow文件包含78-117/index.html","0f3f990a86153ed03a1e24d51629073d"],["/2022/03/02/Clash漏洞/index.html","df9dabbc3a00bbd5b282f54054f10592"],["/2022/03/11/流量分析之题型解析/index.html","1991be383a080d930557f94af5b5ad9c"],["/2022/03/15/ctfshow命令执行/index.html","746cf92551dbdd41b2b651dc22d0e217"],["/2022/03/22/CGCTF/index.html","d64ca49fe061b59c75d2aaacd2a91c3a"],["/2022/03/24/ctfshowxss/index.html","34ca1413207fd4d9201d8b8b20babfdb"],["/2022/04/04/黑盒测试/index.html","0534d3bdc0bb04d9b74ec27ad8ed44d3"],["/2022/04/11/nmap/index.html","fb6d8f59b24c71ab195ee15cdd0d8788"],["/2022/04/12/渗透流程简要记录/index.html","34d30f25e52cb63d9b3ed979e1a6bd1f"],["/2022/04/12/渗透测试之攻破登录页面/index.html","419ca71329d06377ff9b4db3d5cfa520"],["/2022/04/14/xray扫描器/index.html","1fd1aed32db0ddbf4623e987cbc0e718"],["/2022/04/15/ctfshow反序列化/index.html","c9c88263b730c8f3c36f8224fb4bf9a2"],["/2022/04/26/渗透测试实战/index.html","8b9ad3c77af5c508a4292d87d2bf0712"],["/2022/04/28/sqlmap教程/index.html","446ffac691ee74da27bedda8b0a9aa20"],["/2022/04/30/认知文件上传/index.html","5695a720cb48097c0450b110e55c62dc"],["/2022/05/03/nahamcon/index.html","1939aab79e5d14fbd19edc5d46beac1e"],["/2022/05/15/awd/index.html","32d1c3fc3a59128cf123eb028a9c89f4"],["/2022/05/22/DASCTF/index.html","0fa2570f1488fb4f3812fce3ba3d69ac"],["/2022/05/27/520/index.html","574c2f5732167d9578f5df1c56ed4489"],["/2022/05/27/ISCC2022/index.html","77027319b0ba15ffe72966439288465a"],["/2022/06/01/第五届世界智能大会/index.html","3adf9aee772cadef770ab1a1eec019e2"],["/2022/06/04/SEETF/index.html","3d2d5be5ad444b8af4d75560f01ce047"],["/2022/06/04/bcactf/index.html","e193fae28dd0b879bb0456f3c3ddb7b2"],["/2022/06/05/BSidesSF CTF/index.html","95d75c457c9fbb307025ff70f450cfb3"],["/2022/06/07/Docker部署web题目/index.html","18bab54f55ecb98a23c0d8513fa8809f"],["/2022/06/09/利用oj搭建C语言考核/index.html","ede3cdf8708cbaefd7c5050b71cd84e1"],["/2022/06/13/限免题目/index.html","20cc0fb40de89585a08a72a1a0481378"],["/2022/06/14/钉钉rce/index.html","fc37018a845dc38ea8256cb38596404d"],["/2022/06/16/内部ctf/index.html","1f1be428a53c70a1c26913710ffa6de9"],["/2022/06/25/攻防世界高手区(一)/index.html","e5d263c5c7a6197031a80a92528d84fa"],["/2022/07/01/两小时AK赛/index.html","3449e31cdeff2e4d28921b328b7928b6"],["/2022/07/03/鹏城杯/index.html","ca6f79e706c6d7e0357655efd8362a85"],["/2022/07/04/XXE/index.html","f98ab16d14b89462a945228f5879b4a7"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","914a4b66e75eb9a5dabdc8aecfe6be2f"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","e4d2937741892d9737303828a88c9a45"],["/2022/07/08/chinaz/index.html","ef113f9e1cb4753576c1ba92c059a424"],["/2022/07/09/蓝帽杯初赛wp/index.html","8c65257992d068a9048115a2fb69f67d"],["/2022/07/17/NepCTF/index.html","a7c2fedce506b73b19477fa0d5638f12"],["/2022/07/19/2022ImaginaryCTF/index.html","6aa5b38cd617945fd7d5f599bdda7bf9"],["/2022/07/20/局域网攻击/index.html","96f705a4bce8e6bdf57e75d884a4aaf3"],["/2022/07/22/2022BDSecCTF/index.html","43ae3ef7e87d2932f3bd97a09ddb07ab"],["/2022/07/25/DiceCTF @ Hope/index.html","b9265cb77f43f97d5687b5fcc18a0ce6"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","0e0882acaf5314e6fb094de0bdc042b2"],["/2022/07/31/TFCCTF/index.html","43cc58a041f3f43b8f71409e9194112e"],["/2022/08/03/NSSCTF/index.html","dc90603699f9022a2f4ce6746409882a"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","1bb26322d5b252a789d8cdb6075e6336"],["/2022/08/12/T3N4CI0US CTF/index.html","da27dd5509a2424219af1f589e47c69d"],["/2022/08/14/SHELLCTF 2022/index.html","2d037486652b05191470afb393268a8e"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","107abd2ce1993ea95897daa8921927f4"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","a9f4f7caf6788dadf843c81da18cb166"],["/2022/09/16/柏鹭杯/index.html","ff86839077d97c3ab472784fbc9fcfb0"],["/2022/09/20/HUBUCTF 新生赛/index.html","008a4c6d947bca78dac7ef1be6edd853"],["/2022/09/27/NewStarCTF/index.html","2baa99d2f6fcb7475633c011911b4c63"],["/2022/09/27/bugku渗透1/index.html","8116832f538f76fda1640d2eb091afbd"],["/2022/09/29/tp6漏洞/index.html","23fb526ece1ab6e9994015e23ad55e67"],["/2022/10/02/SWPU NSS新生赛/index.html","c70bbe0e6d82b6b5e12f54b3c19cfd16"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","479bc1a7e93c24a4f181a3ee520166d1"],["/2022/10/27/Moectf西电CTF新生赛/index.html","f46598771ce2e963618500709846c07d"],["/2022/11/02/HNCTF/index.html","3cbb292b48e1ec2ad37ef651ffcf84ce"],["/2022/11/04/2022工控CTF/index.html","4418fccc1a2fa2601bb4fd6a58e76672"],["/2022/11/21/极客大挑战2022/index.html","d88432aa1f1bd4da5f60711e79b05a78"],["/2022/12/05/TUCTF 2022/index.html","a58bba4ecbbe409bc3e5fb55a38f4394"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","010e6524beafbce5c68ff251afdd4601"],["/2022/12/18/金盾2022/index.html","f4ae4f184c5fc24f2ae348d1f9271c9b"],["/2023/01/01/CATCTF/index.html","3b1f1aae961cc0dd97a6146c8fbc051f"],["/2023/01/09/RW体验赛/index.html","9be6c61cdb59b33c85bf225a0a66f638"],["/2023/01/10/铁三/index.html","3bee332e3a2fafd2d52da4ad67345fca"],["/2023/01/16/Ugra CTF Quals 2023/index.html","11aeb891d0ddcfd94b96cb2812da8ee0"],["/2023/01/18/山石2022冬令营/index.html","527e7db9d27a792aee512895f8630a00"],["/2023/01/19/SICTF/index.html","d2fb2fe46dd09f2ed8f37f60c8a3e3c0"],["/2023/02/04/2023西湖论剑/index.html","83fb3edc5bc9707ce6022858878152bb"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","034fe9c9ab0188c6290b356f64c11dd6"],["/2023/03/04/公安/index.html","9ce29682afbef1288324ac12b56d191b"],["/2023/03/07/mysql之udf提权/index.html","61994ee61adb2fcb5b1d7180b27b08fa"],["/2023/03/07/红日靶场练习/index.html","2bd869172294cd56144c3dd06e0ede44"],["/2023/03/27/NKCTF/index.html","5feb456cc852995aa0f2eca8b9002330"],["/2023/03/31/楚慧杯/index.html","c24c9c09d0ec0eddc1226604eb619e0e"],["/2023/04/23/HDCTF2023/index.html","39e3731f2bad2879c5b5a935d8cc0416"],["/2023/06/01/2023CISCN初赛/index.html","22ab6459935d626a88f021ba72fe4e42"],["/2023/06/28/2023CISCN[华中决赛]/index.html","8ed76c882e6d7a08f187dc7da2d8ef98"],["/2023/07/10/CyberSecurityRumble Quals/index.html","3576bcb50c227d3bfd2bb8ea2260e972"],["/2023/07/22/2023BDSecCTF/index.html","342a99dde2af8c64c832a94b26162057"],["/2023/08/07/SQL手注小记/index.html","d5e673ca1b2fcf99c4afc545d55f0391"],["/2023/08/27/2023陇剑杯/index.html","95effd7ca688cad52edaf0b247377385"],["/2023/09/17/2023蓝帽杯半决赛/index.html","ccd2c217ad905dfb9504b6b58d7daa5d"],["/2023/10/23/对于多层代理的研究/index.html","85a1e7fbab04012190b60eb95b963020"],["/2023/11/25/金盾2023/index.html","397da34262c4b976d7268d749b62a979"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","61937e978a2b61168ae9ea46b859d76a"],["/2023/12/18/2023强网杯线上赛/index.html","37b383165fabd1c9c9e97c7058ae3436"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","207d20dc01ead1cbc779ce3b6d18b30c"],["/about/index.html","dedde107da3535b6f435e15c4369a52d"],["/archives/2022/01/index.html","ceb65f7ebefe0e881b755e42adf4ad27"],["/archives/2022/02/index.html","0e3ab03811a1d179c37d68b7c2c3764f"],["/archives/2022/03/index.html","09a2331d6df31081583cae960239a252"],["/archives/2022/04/index.html","83e8e2aa6a16ace5adf7b2f6b82e00d3"],["/archives/2022/05/index.html","abd7ccfafc500f577ab12f3fa06d6835"],["/archives/2022/06/index.html","7166775f2e60eba98719599ad79afef4"],["/archives/2022/07/index.html","d01acbd64ec79389cfc9879c441a838d"],["/archives/2022/08/index.html","aa42cebf62baf330f82de555bdda1c3b"],["/archives/2022/09/index.html","4a39fb00819b43fa1dbb642847422c65"],["/archives/2022/10/index.html","59b4b3303d08fae5b612ec1a7748a241"],["/archives/2022/11/index.html","499206f6515a7f2773d81cb9139224b0"],["/archives/2022/12/index.html","9f2764d6cbf1249c221360c28388d557"],["/archives/2022/index.html","fb7971823ea4676d207d2e9f50d24252"],["/archives/2023/01/index.html","9b84350f1a40ab53776bef6b91cbe83a"],["/archives/2023/02/index.html","2b459a17aa22424a7bfdb2d5e1a81601"],["/archives/2023/03/index.html","9ebfa531a7702c67446875e6324c988e"],["/archives/2023/04/index.html","630cecc68d61182bf0ce383d69002a5d"],["/archives/2023/06/index.html","d29a95c5a2477bb3484c8e0149370b37"],["/archives/2023/07/index.html","c4df5a9d4a1b42457f5a3c5264b56e86"],["/archives/2023/08/index.html","fd6a438e221ab60e2a18c555f3f9c0e6"],["/archives/2023/09/index.html","49080aa0f0c8fa1edbf6dc38c087c5f1"],["/archives/2023/10/index.html","b63a4c19ca68aca01b90942a0da7e662"],["/archives/2023/11/index.html","0fddfed303811d8a4ecb6746c1ffd879"],["/archives/2023/12/index.html","592ba30efc0a93f4315a18153e639e95"],["/archives/2023/index.html","0dc511eb28c30e97bb3abd13418cc9b6"],["/archives/index.html","49e7662b67ce72e216d2118e1fc19130"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","7897b549f25f061689809d222b6e414b"],["/categories/CTF/index.html","2b24e597a6960049421e168d65d16761"],["/categories/PHP伪协议/index.html","8a30e2bd41c505419a765a6d546e50e4"],["/categories/RE/index.html","55e72d641daaa3dfbf8dfa77e45ffddb"],["/categories/Web/index.html","a18280348624179a3ff74bfa8171bbdc"],["/categories/awd/index.html","d25d868c54a89a38b0ae513303e44b94"],["/categories/index.html","e5c9d3f44a7589b5b6a3d2898fb98a96"],["/categories/misc/index.html","dd97918b48aae85cf5ece92ccc6afac9"],["/categories/sqlmap/index.html","fe773eb041ba00ee80fcb4df9dc20027"],["/categories/博客相关问题类/index.html","f4bab475fb12174d7b2737b29d89d9e9"],["/categories/局域网攻击/index.html","9b521bf74c3441f957c41f63820e60e8"],["/categories/心得/index.html","8a4820f9f771bf86aaab1dd24344249a"],["/categories/流量分析/index.html","b5d338c8825994d088c3ee1164954a1f"],["/categories/渗透/index.html","20bce539106f7e44125081feccfa0434"],["/categories/渗透测试/index.html","55b20dbe1a9159e2be2a253054d77cb8"],["/categories/渗透认知/index.html","76d8e2ddf445dc0b31e5b5b597c7ebdd"],["/categories/漏洞复现/index.html","f4dd04308d106682dfc0487ede3594aa"],["/categories/漏洞测试环境搭建/index.html","3e7a339edba4d9205ee3ecfa1c7180ab"],["/categories/赛后复盘/index.html","c34404dbbc54295065dc868b8de26f57"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","22c07def071bf3b06c7dffb83e3989bb"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","6f95a4303a10056d05bbd4ff188bd8f8"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","941da4f0313a84e67e20bfd2cf41d7d5"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5257c38c773831808fba86e7df75ba28"],["/page/10/index.html","609efc46732685bc132b5b7cf0741e4b"],["/page/11/index.html","8d82cc674d256ef28525dc3c51eacb03"],["/page/2/index.html","e8e6197afabc93bef2569ba7f6d1ca93"],["/page/3/index.html","dc3ab48c7c509a0fc8f854f4889e935c"],["/page/4/index.html","1ba1711ea31056bfdc3b43bf2a14576e"],["/page/5/index.html","25a570fb455a0b1011a3eb6d0909c425"],["/page/6/index.html","679a7f5b94f826fd97ff4a6a44c7596c"],["/page/7/index.html","abf7026c232124a1bbb703aa09812601"],["/page/8/index.html","cf0cbd6bf2c083cdfc2b62d06c232ae6"],["/page/9/index.html","a721478d83370486b5ba98e9eecb06cc"],["/sw-register.js","cd09ce5274b4201878e14d524273cdb8"],["/tags/C/index.html","5b35f483faf2b931fc99492e2fbada2f"],["/tags/CTF/index.html","161863f6688e346ca301dc0f78efa571"],["/tags/HTTP头部信息分析/index.html","e3a35541b40a6ee0c53a3a03992a39d7"],["/tags/PHP伪协议/index.html","214a349c5cd792b1b22e0d78367a3d45"],["/tags/PHP特性/index.html","cded05c6619bd8aa18ce218df3b8c8e0"],["/tags/RE/index.html","a1327496d1771988533682df17e3c4d5"],["/tags/SQL/index.html","233fd6a6e929306c792072292952d799"],["/tags/Web/index.html","412248c23aac6acce73f8aa69c79e26b"],["/tags/Web工具包/index.html","80bdd9c6c933648a632e6709958f87b3"],["/tags/awd/index.html","5af8455256d6c9ce208216c84faed5c2"],["/tags/ctfshow/index.html","2de031fb83ba7945296b23881998630e"],["/tags/index.html","c1f813126907e540156bba53587f944a"],["/tags/misc/index.html","69fdcab3234d2c80a0acd8f53cbb4200"],["/tags/next主题失效/index.html","edfb5c82a86d6be20e60076b0c1ea6e3"],["/tags/sqlmap/index.html","83564f103c700781a0e44c22a76ad3f1"],["/tags/wp/index.html","b3f8076647a083d123e15beca31c7683"],["/tags/xss/index.html","d83d9d65a298894df041cf6c2fd47b8d"],["/tags/xxe/index.html","7322ee6b048fa35b9afdb5d0f311e877"],["/tags/不蒜子不显示/index.html","a515b810e359eeb66178743b8129c92f"],["/tags/博客/index.html","06e8f241b8a52e730437e8d10495d6f0"],["/tags/博客主题优化/index.html","2160dc1ed9334bd869b18c5967b7dd03"],["/tags/博客死循环框架问题/index.html","418e43b91d252f0ca88ea8f851735fc7"],["/tags/博客部分问题解决方法/index.html","0e094ed5af40cef7cb19426ccd7145b8"],["/tags/反序列化/index.html","c6e10f2874e1633bc25a535dcd5ff635"],["/tags/命令执行/index.html","ad77d565d8f941c7d9fc17ef79ca3825"],["/tags/局域网攻击/index.html","4a814cdab44b5be1495b8cd0167f27d6"],["/tags/常用指令/index.html","8bfcdd590c9802771f59d208e4b7ce19"],["/tags/心得/index.html","075270ecae550bfc8de981b29e78a255"],["/tags/文件上传漏洞/index.html","30fa09bc74fb352a99a9988cdbaacc9f"],["/tags/文件包含/index.html","ad7ff4b93c04720931270f43e9c19702"],["/tags/流量分析/index.html","94cb67290fb7e3da48495a7ac607c7f6"],["/tags/渗透/index.html","48df0282de244dc4d837caa88d9e9721"],["/tags/渗透测试/index.html","ae7ba58fad092b162854d2223d8fd68f"],["/tags/漏洞复现/index.html","496f2d6246cda705a3685f82ea77826f"],["/tags/留言板/index.html","fcd714be5cfb5099ccd0c82f589fd7a6"],["/tags/赛后复盘/index.html","f91a11fe8ed363723449a5f0126670ac"],["/tags/黑盒测试/index.html","197b9201d061f6d36a3874075ff40a8b"]];
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
