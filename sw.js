/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","3356bcb2c99957e7eff679883ead977b"],["/2022/01/11/博客制作遇到的问题/index.html","a6c89ff3fe056ea7c71b7a3f91c31500"],["/2022/01/15/C/index.html","d0f75438db0db2e5f3af5d19e5e7e98f"],["/2022/01/18/新版next置换/index.html","221ae44b4c0c160ef5545bfeb7229a56"],["/2022/01/19/不蒜子相关问题/index.html","96f202b400d4615317eb3bff5517d050"],["/2022/01/19/框架问题/index.html","b63ced47e97aaa843965eeb38182fd57"],["/2022/01/20/ctf之reverse/index.html","3bde4b4cf9c0372e688c0ad7993cb05a"],["/2022/01/23/misc隐写题目总结/index.html","89fb18fcc53aa01ce3dc4f918b0d48a5"],["/2022/02/01/684/index.html","ecd524bfcaa671ded218dfea79831bb6"],["/2022/02/03/留言板/index.html","afb9af19eeb8e9787b8e0b6b2a1f5230"],["/2022/02/04/SQL简单注入/index.html","124ab6b896f1f77766aa19240ba7d038"],["/2022/02/05/最全的HTTP头部信息分析/index.html","0b6554782949bd018c3725a2571b1e08"],["/2022/02/08/ctfshow文件上传/index.html","3315d9e2b2ceba67457103b2a7eaa6a3"],["/2022/02/08/常见密码类型/index.html","4d3a531c8a853021a96cb1f6da8b856b"],["/2022/02/12/VNCTF2022WP/index.html","090962c70933d2b6e0efb513213dbe54"],["/2022/02/20/ctfshowPHP特性/index.html","73b489a60468d983f80fce0f3b680521"],["/2022/02/25/php伪协议/index.html","0c74badbc44d319a06ed0f385c3ceead"],["/2022/02/26/ctfshow文件包含78-117/index.html","d68cb92c317024c879a0b1c778546520"],["/2022/03/02/Clash漏洞/index.html","5a46e40bcbf9fcdec1a5f26fca4724fa"],["/2022/03/11/流量分析之题型解析/index.html","02289041e6e3579373ca023b29e725ba"],["/2022/03/15/ctfshow命令执行/index.html","0e791e98caee0f9a321746963503a4b0"],["/2022/03/22/CGCTF/index.html","ebec4b00ee989ee6a56833be21635813"],["/2022/03/24/ctfshowxss/index.html","2d41ca21945ab38941b52cea8b928907"],["/2022/04/04/黑盒测试/index.html","73d0063bd695ee0e5541aec69d5d4697"],["/2022/04/11/nmap/index.html","a84c0740dbe6fd5328e3a184daa0117c"],["/2022/04/12/渗透流程简要记录/index.html","b64e05ce5720fc4a7238898d20421098"],["/2022/04/12/渗透测试之攻破登录页面/index.html","438fa12c243458258193a93e707abe6d"],["/2022/04/14/xray扫描器/index.html","d29368e031800f3d26e9761f7e917304"],["/2022/04/15/ctfshow反序列化/index.html","70dcd387dedeb32d95c5fd49095bee71"],["/2022/04/26/渗透测试实战/index.html","e9d366830f81ebedc619054f43aed2b3"],["/2022/04/28/sqlmap教程/index.html","c009c261326719644b104d0d9a16f5e5"],["/2022/04/30/认知文件上传/index.html","054c62a9c491f227ff5cdc5b4a6da66d"],["/2022/05/03/nahamcon/index.html","a67d27f4a3c6dc5e901aefa98df2150a"],["/2022/05/15/awd/index.html","98874cf48b9d97dfb86416dab7834a7e"],["/2022/05/22/DASCTF/index.html","3668b6219c0a3d707fe31cd829ea365e"],["/2022/05/27/520/index.html","4c6fc20445b5c369b587a247a7f946f1"],["/2022/05/27/ISCC2022/index.html","b6f6e67bed5c9e964993073e4101713a"],["/2022/06/01/第五届世界智能大会/index.html","73b4f4ce2cc722bb2c97f7d8d397cc3d"],["/2022/06/04/SEETF/index.html","af6acfa2139205d04872d73c6189b3f7"],["/2022/06/04/bcactf/index.html","758c8f48616e15be4b652ffa977bd31b"],["/2022/06/05/BSidesSF CTF/index.html","55818ef48773488c2c258a14b1337582"],["/2022/06/07/Docker部署web题目/index.html","ea40f8773d847f5626c0bfef5fe8ba23"],["/2022/06/09/利用oj搭建C语言考核/index.html","95f19ccdd52c641fbd7768793a6cfa45"],["/2022/06/13/限免题目/index.html","58aaab059e0284b50a583be46ccc76a4"],["/2022/06/14/钉钉rce/index.html","5f422413c1d8d3a7b862873c304beb85"],["/2022/06/16/内部ctf/index.html","25b98c2fe92e91ec76249d774fb5b793"],["/2022/06/25/攻防世界高手区(一)/index.html","6329e19749aa245044eb6d8cdfcb2073"],["/2022/07/01/两小时AK赛/index.html","8d6be0c0e66312a4edef12c117dc2f06"],["/2022/07/03/鹏城杯/index.html","a345d273d9c3ba26148f45c9326b7461"],["/2022/07/04/XXE/index.html","c0bf1beb9d056bebb573e762b5704969"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","292f317d7403bcee6ebc294fc405155f"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","244cf70c24221dcfc5f110b6ee29a69a"],["/2022/07/08/chinaz/index.html","002bdd8a3ac17979e051abda30f5976f"],["/2022/07/09/蓝帽杯初赛wp/index.html","46e1b1396634341e4c23ff6b7e322547"],["/2022/07/17/NepCTF/index.html","07658bd62ded4633343b16042a3b0067"],["/2022/07/19/2022ImaginaryCTF/index.html","e606500d380688ddaeeaefefdaf7c299"],["/2022/07/20/局域网攻击/index.html","f3b79d56c67b8bbccaa9047d96fb4d94"],["/2022/07/22/2022BDSecCTF/index.html","225f2d7266ce4e0a50a942c115217ee9"],["/2022/07/25/DiceCTF @ Hope/index.html","9944475f58a5bd7f628b1839a22acab4"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","4715c11d0f511c0f4a3b3e528c471241"],["/2022/07/31/TFCCTF/index.html","aa9ef6833240790ab3c8fbe33853193c"],["/2022/08/03/NSSCTF/index.html","0bd4906e2315ba8cbc9f7720f3904764"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","a0a7e327c40e4814e6af30ce076f487a"],["/2022/08/12/T3N4CI0US CTF/index.html","da5687b8df33782240a3d443cfac6191"],["/2022/08/14/SHELLCTF 2022/index.html","2f380a31ee0aa7c8b058fc2339814646"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","3ef12fc1901a018ef7491f93acccde5f"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","582a74c21efd6544bcc6f7b056a5238f"],["/2022/09/16/柏鹭杯/index.html","aae4bd5636149c184e2865312645c79b"],["/2022/09/20/HUBUCTF 新生赛/index.html","abb32904e0e73a118041cb4ad539c6bf"],["/2022/09/27/NewStarCTF/index.html","a1521187a8d4e74a3b83a2fbbdfa4080"],["/2022/09/27/bugku渗透1/index.html","ac092ee0015049d135f1ba60d9b6c4da"],["/2022/09/29/tp6漏洞/index.html","ea41f55f8397276cc83de5047591b638"],["/2022/10/02/SWPU NSS新生赛/index.html","58ac6790ee76a25542e5bebb3afd529f"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","dbe44e7e8aea03cb02ec5107f0868f65"],["/2022/10/27/Moectf西电CTF新生赛/index.html","d8decac02b2ca46cbfb2e1de8f9f0d70"],["/2022/11/02/HNCTF/index.html","d86e7da527f74610a365bddbde2a43cc"],["/2022/11/04/2022工控CTF/index.html","7a6920a65b8c2641917d89235b896438"],["/2022/11/21/极客大挑战2022/index.html","357e63cdeefd2113432dd2510f29b7ce"],["/2022/12/05/TUCTF 2022/index.html","20a7d6d10f39c03ab7623bc40d3ee833"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","b4c956dc6769e23252b0e61c4f80eb8d"],["/2022/12/18/金盾2022/index.html","b50154e86bb806bec4bc5e3f30b2325e"],["/2023/01/01/CATCTF/index.html","2d5ba1e0420b784d1d5aad79502b3342"],["/2023/01/09/RW体验赛/index.html","875c46a134f43b68a32a417a968d60d2"],["/2023/01/10/铁三/index.html","b89d5ae33dda5be88cddda2e14ea882d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","5ff2f105e7a421a720bfff51a363b766"],["/2023/01/18/山石2022冬令营/index.html","14977b224dd2b34ed9da6f9c44456ada"],["/2023/01/19/SICTF/index.html","ef8baf526e2b997d842cda3021504dc4"],["/2023/02/04/2023西湖论剑/index.html","4a576152686acf48ee67a51daf1fb7f0"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","793aa9fbb3927ca4398a490511c7b12a"],["/2023/03/04/公安/index.html","5cdb0981ffe1b22edc4492c7e05c9a64"],["/2023/03/07/mysql之udf提权/index.html","4f20a56ea99c8778c80714757768cf09"],["/2023/03/07/红日靶场练习/index.html","5661e47db29596735a31e98322dbdc08"],["/2023/03/27/NKCTF/index.html","e0b072364c582c02818cb7051c9468a2"],["/2023/03/31/楚慧杯/index.html","9c7515d9d83c006e313c3bc75bf12c17"],["/2023/04/23/HDCTF2023/index.html","b6d0b4d0b730ec4e902635061cddfee9"],["/2023/06/01/2023CISCN初赛/index.html","306294d87c7ee80e24f9266d7a458e5e"],["/2023/06/28/2023CISCN[华中决赛]/index.html","4d13dcab291c0baf2b80a300b7ca7f84"],["/2023/07/10/CyberSecurityRumble Quals/index.html","d760fd9c7c14ca6eefd430ed0419beae"],["/2023/07/22/2023BDSecCTF/index.html","1f6a128bac136127d6f866f814399d85"],["/2023/08/07/SQL手注小记/index.html","44ba025aa0ba089f38cafd24d1bddba2"],["/2023/08/27/2023陇剑杯/index.html","d29d021de0e2c8a6e309644ce0897e51"],["/2023/09/17/2023蓝帽杯半决赛/index.html","81e7a1ee9b75fceb5ad0a6ea60e538a9"],["/2023/10/23/对于多层代理的研究/index.html","a7e133d3248d78aaf066aa076b7c2354"],["/2023/11/25/金盾2023/index.html","ac173aed9bb5965224401d29d5e38bb4"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","4492b4f60d7ade83499063907486aa15"],["/2023/12/18/2023强网杯线上赛/index.html","48b0ddd658f1ed0a1f5aceb77173701a"],["/2024/01/08/基础ROP/index.html","96954eb6bb762508a89798d12aa61e3a"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","6e75ef70bf2c598a50d3be222b65edd1"],["/2024/02/13/打靶-Tr0ll/index.html","67e3dd5642cc49cb01240b1eec9190e9"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","9f8a9e169f170cadaba21697aa2d52cf"],["/about/index.html","cd365a2493450f9abcb1d75f5792eb2c"],["/archives/2022/01/index.html","38e2c442071df3740fc5fa9dfb4769c0"],["/archives/2022/02/index.html","3c8835b80f1c0fb5b39b6a843206e455"],["/archives/2022/03/index.html","53f2705e1b51ab8ddd02c1e35ad8cbb5"],["/archives/2022/04/index.html","ff077ad4986cb7ff1d71e5d4f2b971b0"],["/archives/2022/05/index.html","e48276174edc4bd665e0c429e08dbef3"],["/archives/2022/06/index.html","1b980bb53b208a448d24916c6dd6a06b"],["/archives/2022/07/index.html","ca35623a1de5397c57fa438c362e229d"],["/archives/2022/08/index.html","e7c81c8d8b9722c717653ef2e868f924"],["/archives/2022/09/index.html","dbdf6b5f6f22e9f33b47214ac024198e"],["/archives/2022/10/index.html","1217e36577695c133ca3e40268d609e8"],["/archives/2022/11/index.html","e51c310fbddddf1d635a092ac88b6bdf"],["/archives/2022/12/index.html","ef56e7f27ab466810ad2cc5d6fa16cae"],["/archives/2022/index.html","d31dc45f71f8a105985d207ffcb6d5d3"],["/archives/2023/01/index.html","50eb51c726752151b1b840f069d3dc0b"],["/archives/2023/02/index.html","6907ceb909c6292783299fcef97a36b6"],["/archives/2023/03/index.html","d6b956ae10d68b82b3ce19c700d97e47"],["/archives/2023/04/index.html","72aef1f4dac74cb3e2daf1c505f8b784"],["/archives/2023/06/index.html","e040cd55caba9b4ed0e2eb5114a0bddc"],["/archives/2023/07/index.html","6ca35e2945dec853ff4df550f40a030a"],["/archives/2023/08/index.html","ea495941b6d2271f69f2dbca23c8e48a"],["/archives/2023/09/index.html","7f0b6070bd605c3150437b4104f0471d"],["/archives/2023/10/index.html","be01521e58260f65fb9d58bda6636ccc"],["/archives/2023/11/index.html","ea1b70412b1c8a693a726d7bcd890afc"],["/archives/2023/12/index.html","b415c3389aa856da0199fadc090d0d0b"],["/archives/2023/index.html","e0d0330d4cf118aec56aced772a2047b"],["/archives/2024/01/index.html","25a81bf3c410effc9e061dbbd31754c3"],["/archives/2024/02/index.html","2730b125179859e5270f425111e423ac"],["/archives/2024/index.html","e5320c9052edd85225d4f89030a3aa56"],["/archives/index.html","02951c5322377e8d1cce2825610182a0"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","690f8fdbf424fb1cf5bf668dd0117a77"],["/categories/CTF/index.html","e45870d87443eecb71186947c32c2ad2"],["/categories/PHP伪协议/index.html","fb21a8fa05cf9f1347916c5cf968d27c"],["/categories/PWN/index.html","7bbed67dd770643e4d5714fdb0a70079"],["/categories/RE/index.html","2a0078c81862d88d4da4656468224452"],["/categories/Web/index.html","d6643318f950888d1087afd1808c36a2"],["/categories/awd/index.html","9534345a07dd9a138e83248f9066b1d5"],["/categories/index.html","cdbff5452e20e5d4118aeb4422132e49"],["/categories/misc/index.html","f360b59b75bbd33e6c015db63fc8b114"],["/categories/sqlmap/index.html","9ffa7b87260dc48fccb3c7b6971a3617"],["/categories/博客相关问题类/index.html","d101c7287bfc7911f0ff2a98960b1e2d"],["/categories/局域网攻击/index.html","80bb9719e31d95b221325d11dce5793a"],["/categories/心得/index.html","57e0736b9cfef3943bde6b928131150a"],["/categories/流量分析/index.html","5fe780eaf2561d569340a5a3d4cc9db4"],["/categories/渗透/index.html","12ee38de99c9afac91f64dc1cb0f7069"],["/categories/渗透测试/index.html","47080fff69b7b9d528edb74e1432a7d8"],["/categories/渗透认知/index.html","511a540e95c21f500dc174f936ec0b65"],["/categories/漏洞复现/index.html","dc98f3332514e0b10a7b019f2536f2fa"],["/categories/漏洞测试环境搭建/index.html","f487ccf17eeb6b4f33981cf6f93a0cdc"],["/categories/赛后复盘/index.html","cae92751809a097a79dd4cc5c8f0cec2"],["/categories/靶场训练/index.html","f741af511d46bbaede3a5509ef69fab7"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","184e12dfbaf8658dfe74112fc9a6ff5f"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","08d61abd7309100f9255e75791c704af"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","be7bf420cf22536b20ea4f29716446fb"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","102c270265481654592dcc892a508d99"],["/page/10/index.html","cf833a6e671883faab5a4cd87a9ac7ed"],["/page/11/index.html","781c02c78a045fa76f45a85bd369cbe5"],["/page/2/index.html","58572e5b25656194a67c21be835af2aa"],["/page/3/index.html","e1620f3ebe23e4e0b97940853c6ec08e"],["/page/4/index.html","eade2dfd51093b81cbacb64b6d1d4413"],["/page/5/index.html","0c6d3e14602669a163317054f25cd5df"],["/page/6/index.html","4fda17391c08c0ddea8be04cb028abc8"],["/page/7/index.html","8f87af44d3070961ddd23abc2aaf6deb"],["/page/8/index.html","1db05b5aa602d54ce537d9c9ebf74ad8"],["/page/9/index.html","d165fcb01c0fd590b27ed568e71de509"],["/sw-register.js","0607d594c256bba320edbf3d3feaab79"],["/tags/C/index.html","3529f5c5452e79fac25c41082fa592d8"],["/tags/CTF/index.html","097004f7c5a86517210e569e0290b32c"],["/tags/HTTP头部信息分析/index.html","abf1c2a7cb099b0f3213aa83a29b78b2"],["/tags/PHP伪协议/index.html","efd7ede6ef54b40885aeaa91862d3303"],["/tags/PHP特性/index.html","da1fe75bcc39884172611ebfbe14c56d"],["/tags/PWN/index.html","bce2b4a599863530b506881452272281"],["/tags/RE/index.html","1f0288e97264df1fa36a3b9657082818"],["/tags/SQL/index.html","09223b63b06f4b22fe481a3e225f08fc"],["/tags/Web/index.html","585ca77d44b6571d484e17d80c13e8ad"],["/tags/Web工具包/index.html","c85c54c6ece6d10ecdf6f4db7362c31b"],["/tags/awd/index.html","e7bbbf1fe047e20fdf48055260b29e16"],["/tags/ctfshow/index.html","dd12055b64ffc5801eb7a72d167c740b"],["/tags/index.html","f00422a4807c474005624651ca5890af"],["/tags/misc/index.html","00bcac7b8b6d0281403a7c52ae17becf"],["/tags/next主题失效/index.html","bbd9e8b452a289f75e96a1fe6ab1ea89"],["/tags/sqlmap/index.html","1b171958c45a09466c05e63a08f91906"],["/tags/wp/index.html","1726f7ae082dc26c92b9afda88859e01"],["/tags/xss/index.html","e0bd6683a2130b509c1af4c9d8dae991"],["/tags/xxe/index.html","7c7fbb0920f2e7a9503549aa961bd9c2"],["/tags/不蒜子不显示/index.html","eb46b7418c684ef651d095091355bbb4"],["/tags/博客/index.html","9f621973346c6c411916293ac3c24517"],["/tags/博客主题优化/index.html","ea1e2bc8dcf47cf617ed0e7bf3cc19f8"],["/tags/博客死循环框架问题/index.html","f30e78f6b4054499d432cf6b797ab028"],["/tags/博客部分问题解决方法/index.html","c6ab7badf958196d5b2d1ce64e6bb7c3"],["/tags/反序列化/index.html","8ac49826267c03784aa15f1efb487887"],["/tags/命令执行/index.html","c993aeba8bbcd7b14775174c8713402d"],["/tags/局域网攻击/index.html","40a0931a20f7a83e61e5c2313fb5ad89"],["/tags/常用指令/index.html","282837fbc2de2833a318bb9f034039a9"],["/tags/心得/index.html","f7c7635f49b0bbfcd019835ec7cd5a5c"],["/tags/文件上传漏洞/index.html","b4f486869c9b32302f19f12796e644c1"],["/tags/文件包含/index.html","bf5af570cbcb8d855a880c4c621da468"],["/tags/流量分析/index.html","0e8d6922ba81a3546b73130c837816ff"],["/tags/渗透/index.html","19c95c895d10637be86c5246f5f8365b"],["/tags/渗透测试/index.html","da64d353a0fd4e39da5f1805dbf219e2"],["/tags/漏洞复现/index.html","f824eed681793e143dabd077e6d9e8e0"],["/tags/留言板/index.html","0b46ed1f39c78859bd15d53f90f00472"],["/tags/赛后复盘/index.html","d0dec1ccb5aa2f561fa27b14b4c47c1a"],["/tags/靶场训练/index.html","de6ededda1bf20c9f6681de4e976a528"],["/tags/黑盒测试/index.html","14286de73f4712a9bd33abf79bc5d28f"]];
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
