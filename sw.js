/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","d2d2d0784a070485836600fb0b3b1636"],["/2022/01/11/博客制作遇到的问题/index.html","00801733cd9ed61114aff2c8e0864413"],["/2022/01/15/C/index.html","c3fc7b9511b51afafc0d50026e8e84a1"],["/2022/01/18/新版next置换/index.html","88f27db2ce0e82c81aaecc551fb86c76"],["/2022/01/19/不蒜子相关问题/index.html","f56f000fe788837ae2d56ad856826ab7"],["/2022/01/19/框架问题/index.html","923bcd2cb1106e9df3d1cc93b029760f"],["/2022/01/20/ctf之reverse/index.html","00c92f16699abc6b51dec23a1835d9b2"],["/2022/01/23/misc隐写题目总结/index.html","f7e969f1656c7ab7d2f71f7721f0e7d7"],["/2022/02/01/684/index.html","a0b0ed88c1041adc8c0bb1a69d0a97d6"],["/2022/02/03/留言板/index.html","c09816af342d78fddedc4e72926ffb98"],["/2022/02/04/SQL简单注入/index.html","7bb5e13244c8889009858b3d71c6559d"],["/2022/02/05/最全的HTTP头部信息分析/index.html","a8309ccf4a7c081e1ee53c7c2c9bc667"],["/2022/02/08/ctfshow文件上传/index.html","bdb8d7fbf00077fb7d921dae91eb1ed2"],["/2022/02/08/常见密码类型/index.html","1e7f7a18cc802487f66a27b06b109067"],["/2022/02/12/VNCTF2022WP/index.html","01378cb4a5d0c125b1617070fceed484"],["/2022/02/20/ctfshowPHP特性/index.html","d6f328ce7b98904a1892f7702a9ad11a"],["/2022/02/25/php伪协议/index.html","5e44eeb897d08e4d45fc56784941ea41"],["/2022/02/26/ctfshow文件包含78-117/index.html","0a0468494e77c8b50929c2e7179e4e6f"],["/2022/03/02/Clash漏洞/index.html","f718c8bbf2530bc48766740b48e794eb"],["/2022/03/11/流量分析之题型解析/index.html","e47ceb5648226521dcb67442af42b158"],["/2022/03/15/ctfshow命令执行/index.html","3f97ffa027f6f9875f44e64f411a0d92"],["/2022/03/22/CGCTF/index.html","5c44b25ebcb89235f8b363aa4e97a44d"],["/2022/03/24/ctfshowxss/index.html","a3a68bb7a33aa10eda8d539eb42fd2f6"],["/2022/04/04/黑盒测试/index.html","99b53ba41e125e906b5e752c0d464344"],["/2022/04/11/nmap/index.html","7388c3b0d3905d54cffaa472978b2a44"],["/2022/04/12/渗透流程简要记录/index.html","75d6f338ba5cc630a17ace06ceb69930"],["/2022/04/12/渗透测试之攻破登录页面/index.html","9abfa62fcb13a378d779c762db078a9b"],["/2022/04/14/xray扫描器/index.html","499ff1be6bab94247b0fece5d9941725"],["/2022/04/15/ctfshow反序列化/index.html","5a523be399d86794b30dc62dbb6495ae"],["/2022/04/26/渗透测试实战/index.html","8483d1992e832eca1dbc9100b7c27872"],["/2022/04/28/sqlmap教程/index.html","81775dda9fa8a4c5e9e877ae80674beb"],["/2022/04/30/认知文件上传/index.html","cf870def2e57804c79060c509786f598"],["/2022/05/03/nahamcon/index.html","0e08b895b61ca059c51c9492438eec59"],["/2022/05/15/awd/index.html","9e83bdf48ca0264f081fb511cc04f8ab"],["/2022/05/22/DASCTF/index.html","1759532be31e6afee63a513df39e523a"],["/2022/05/27/520/index.html","570dbc641e065101b24a1fda981bd4bf"],["/2022/05/27/ISCC2022/index.html","eea35284bfe07a650cd76589f94a16c1"],["/2022/06/01/第五届世界智能大会/index.html","bca78f5644c94df4a21e22ecefc0e6fa"],["/2022/06/04/SEETF/index.html","4a6479e63bbe8dc8c0d7994908d3cd52"],["/2022/06/04/bcactf/index.html","0ab17fe0981d5854acbd90b571c80fb8"],["/2022/06/05/BSidesSF CTF/index.html","43a8e3e9e4360d7ef69a1fb27bc3ed5b"],["/2022/06/07/Docker部署web题目/index.html","16ed1a4c8faba4e7e7e1ade29ca50bd4"],["/2022/06/09/利用oj搭建C语言考核/index.html","f27add753a4af47f6c400036c38bf276"],["/2022/06/13/限免题目/index.html","7cce438b8ff4f34bb7e8440834c25270"],["/2022/06/14/钉钉rce/index.html","d8cd00d6b93949de414d20e190f10a14"],["/2022/06/16/内部ctf/index.html","9fea72e80c7c2a347d13bfe69a2e71b0"],["/2022/06/25/攻防世界高手区(一)/index.html","0f046125ae72c355b5467ef181be172b"],["/2022/07/01/两小时AK赛/index.html","958c734fa6cf1f864489a9915ae0d6e2"],["/2022/07/03/鹏城杯/index.html","550192bbadf48cbabcb023436207fc55"],["/2022/07/04/XXE/index.html","249ce30f52e9e4b55402136619c1475b"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","a480350e090a057ad84742e2adc23896"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","d3b01df623176900d575f2c1ba105835"],["/2022/07/08/chinaz/index.html","a9a38d9e4fe23100d8ddeb1bcd63eb63"],["/2022/07/09/蓝帽杯初赛wp/index.html","654371a9787ea016d434b6379c332525"],["/2022/07/17/NepCTF/index.html","332f814e3ee8f2caae32395b239a3bf2"],["/2022/07/19/2022ImaginaryCTF/index.html","1f35029867fe132e8c36205cff619094"],["/2022/07/20/局域网攻击/index.html","b409fdd66ff34c1dbc605b53324b855e"],["/2022/07/22/2022BDSecCTF/index.html","7f8aee7ecf12b55a8dec9d409174c3d8"],["/2022/07/25/DiceCTF @ Hope/index.html","46ec27b93f544a6c1fa7166f7eb74ab4"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","65975080a45494850daec269dc404ea5"],["/2022/07/31/TFCCTF/index.html","b6d23885ce0fecffab99e0c65afb4446"],["/2022/08/03/NSSCTF-r4/index.html","057477492302b97fcfb0b63d38c4cfea"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","0eb23d761d8d19e7b9f530b964fd8234"],["/2022/08/12/T3N4CI0US CTF/index.html","dd1c215ce5b494b80e27387033004900"],["/2022/08/14/SHELLCTF 2022/index.html","6d3a523128be2bb3354ee7e15305eedc"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7d23d7536def9b6a0faeac3e061cc71d"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","bdf20d8da925298e94fa48504818c851"],["/2022/09/16/柏鹭杯/index.html","e4de33dbb6545615550992e23300b212"],["/2022/09/20/HUBUCTF 新生赛/index.html","c05d4db859b37d865e3d4f88eaac0566"],["/2022/09/27/NewStarCTF/index.html","72d77e8d530169efe8b5d1134160ed72"],["/2022/09/27/打靶-渗透测试1/index.html","e4062e1c5f7bd114a7d77c1807a72555"],["/2022/09/29/tp6漏洞/index.html","433157c414c630284380a4dbb8452c1d"],["/2022/10/02/SWPU NSS新生赛/index.html","630631e4993a0c4dae36f31efc9a4879"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","185fd1c9b680b7377d28b7685987aa0a"],["/2022/10/27/Moectf西电CTF新生赛/index.html","80763083ba113d5bc35e87e8e72b50f7"],["/2022/11/02/HNCTF/index.html","e7ccaf3cbedea0718a0beee5cacf580c"],["/2022/11/04/2022工控CTF/index.html","b54b85c0836ca4fbf9371a4229cee707"],["/2022/11/21/极客大挑战2022/index.html","5bd8591bd4d99e58b563ce44c2b83191"],["/2022/12/05/TUCTF 2022/index.html","cb9cc35573ab925e8ba901acf1b755e7"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","74642ba1f899b33b6814266c3b2e1ba3"],["/2022/12/18/金盾2022/index.html","c166de70eb848d090cc3b0b22f4aeef0"],["/2023/01/01/CATCTF/index.html","dabc83b78720d500d47e517069519790"],["/2023/01/09/RW体验赛/index.html","20dd3e4358165d5d51ad403406c53b3f"],["/2023/01/10/铁三/index.html","f67e543f36d9d710000efdc631e6af1d"],["/2023/01/16/Ugra CTF Quals 2023/index.html","8cc9e32daf847adca02b106889dee217"],["/2023/01/18/山石2022冬令营/index.html","192fd67b8dd41906515ffe497ae7116a"],["/2023/01/19/2023SICTF/index.html","d603de33b95de88f08e16f601e39ea7e"],["/2023/02/04/2023西湖论剑/index.html","8dd4fcc88234d8891884177bc703d420"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","9ec34cf2ab7d35393b02466243308910"],["/2023/03/04/公安/index.html","9c77a7a313ba71416565e0c674002269"],["/2023/03/07/mysql之udf提权/index.html","17cf2640dbdafc5c18fb7c2ad9ee38ee"],["/2023/03/07/红日靶场练习/index.html","d98b109d0bd982fb5af1b790d6041a07"],["/2023/03/27/NKCTF/index.html","9d9b308f0cef5b641295ff8e9aa89200"],["/2023/03/31/楚慧杯/index.html","4655bddae1c7b2e5248c3af8e61e093b"],["/2023/04/23/HDCTF2023/index.html","3695a047f492e6b0cbff39792fcf29e2"],["/2023/06/01/2023CISCN初赛/index.html","f4239b6902afc9b537a4c53b19a2c126"],["/2023/06/28/2023CISCN[华中决赛]/index.html","fe28f96de327015a5022a5d28b429fcc"],["/2023/07/10/CyberSecurityRumble Quals/index.html","438331bb62f3c84648326205c4b42163"],["/2023/07/22/2023BDSecCTF/index.html","238d1f3d2d8fbd314c8a778fb1ad4082"],["/2023/08/07/SQL手注小记/index.html","f14a6d6e5df09b751e4e6713991b7518"],["/2023/08/27/2023陇剑杯/index.html","b693a01e4a235e1807e97a3edbbd6b1f"],["/2023/09/17/2023蓝帽杯半决赛/index.html","e6fe20ce8611a9df2bf482c227b2ec92"],["/2023/10/23/对于多层代理的研究/index.html","974169655ee64bd43829ae427e3ffd4d"],["/2023/11/25/金盾2023/index.html","cd71e29b99178bdd53b0416b07458cc5"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","55a80f32ae08acd0fa79bf9ccd750ba7"],["/2023/12/18/2023强网杯线上赛/index.html","bf207a694ab314d8b05e7298f84f9c54"],["/2024/01/08/基础ROP/index.html","3fe93e0a02fb692e45459c248eca71c7"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","ca31f872feb75b8d54ef1cadca97c95d"],["/2024/02/13/打靶-Tr0ll/index.html","0eb24f245223bd48b24d72346aeafa95"],["/2024/02/14/NSSCTF-r18/index.html","b0f70b73cdd7061214c32514013fff20"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","4f31ba9b8c5146ecde7d359dfc8990d8"],["/2024/02/15/打靶-CFS三层靶机/index.html","8ba48f17b11062818a8cddfb64118626"],["/2024/02/15/打靶-应急加固【简单】/index.html","16822811290324b3994654f3795ee6c1"],["/2024/02/17/2024VNCTF-WP/index.html","06ae2eaef2c00315456f8bf6be19433c"],["/2024/02/18/打靶-JIS-CTF-VulnUpload/index.html","7f6f1b999b81d7150b36574dad0bc83d"],["/2024/02/19/2024SICTF Round#3/index.html","8c015be2a49477b52673bc7f1edcc2e1"],["/2024/02/19/打靶-铁三域控/index.html","eddd8ddbdec1812d477aee281e4381c7"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","5d03f4c9e5e724d38e7de388914f5090"],["/about/index.html","f9551e4bd89176d03ec6c6d1d298b463"],["/archives/2022/01/index.html","17e3f94a6acea762a6ba1e60b915b7b4"],["/archives/2022/02/index.html","9c07ea2091e7e67c14a69c0e00ef5107"],["/archives/2022/03/index.html","4c6106ed0564f311bbf4b4d756cb6ad7"],["/archives/2022/04/index.html","35f127a19692f34f3489df64f8df8ef9"],["/archives/2022/05/index.html","8a9e8ee755475f00bd26068a340887a6"],["/archives/2022/06/index.html","863d39fde89b4d8f3658cc925b636f18"],["/archives/2022/07/index.html","53370824370228224c9090a77091c44b"],["/archives/2022/08/index.html","124e629dbb16da1e2831022317df2a87"],["/archives/2022/09/index.html","53d2a80b13b7266fc2cb5fd758b1fefc"],["/archives/2022/10/index.html","c780e2b1496a8975f3302846944a00d9"],["/archives/2022/11/index.html","bc33311c72b84569633b2431544789ed"],["/archives/2022/12/index.html","66977a4cb132b9fecb96b93eb8b78a6c"],["/archives/2022/index.html","e6af05efb995588fd678a15c2091757e"],["/archives/2023/01/index.html","cf4cb5ea11a32708c248492200bbd50e"],["/archives/2023/02/index.html","1c30643b06a7fac5041ee124eac1256b"],["/archives/2023/03/index.html","b0d6ff6b91d5cf4de2a3d3b85291bd07"],["/archives/2023/04/index.html","3a593726ce951a1ba39abcb8628f7205"],["/archives/2023/06/index.html","08de9fc8d36e5885a212c5f0d3c96d84"],["/archives/2023/07/index.html","bf72c94712baa01d4940abd0c415767a"],["/archives/2023/08/index.html","b6a5ba0c6a85aa5b62d44cad8d82b34d"],["/archives/2023/09/index.html","8db0db567f46daf9af5251734dc5c599"],["/archives/2023/10/index.html","0bdabd763e2ef2c5770b959291084180"],["/archives/2023/11/index.html","32431c03b756eb1bd6650d14e8370fda"],["/archives/2023/12/index.html","c27a4ca4a4478109a28ec56a0d1550d6"],["/archives/2023/index.html","00a3ffc1af3ffded2e33d196adb521e7"],["/archives/2024/01/index.html","28c324711bb095f8e32c40bf5521de1d"],["/archives/2024/02/index.html","f985e40a05b8a5311e94af43482a4460"],["/archives/2024/index.html","6e897838a3ec72a479a60809d0ce3fa7"],["/archives/index.html","15a5d1f078fa7545eca8cca60026bffc"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","a30bd7f2359b0a37e391bee2cddbaab9"],["/categories/CTF/index.html","a69680b994ba0f10f8fc09a02bbea452"],["/categories/PWN/index.html","cf01b6107b161d086fbe63bf3e9ecac3"],["/categories/RE/index.html","268e36961a8b8f2b7237f6681a682049"],["/categories/Web/index.html","09f7ac5ef47c055a5823d68a1fa86cc7"],["/categories/awd/index.html","3d8b7f34fb66e6ca05aa3fa2ff2cdbbc"],["/categories/index.html","b50f544483f6c031b536e50c25f12232"],["/categories/misc/index.html","35b29b189492329cce1fbc14f77276b8"],["/categories/博客相关问题类/index.html","edadd9327cb91c9ab4085c35d43aee01"],["/categories/局域网攻击/index.html","7c549649d7cd698c7a0dcb0442b3f5cc"],["/categories/心得/index.html","5c83768dddbf967338761d5052e9fc73"],["/categories/渗透认知/index.html","fe60c72a0ade87133c8fd1a4613b4ee8"],["/categories/漏洞复现/index.html","047ccc2cec41025f81ac989be3f438dc"],["/categories/漏洞测试环境搭建/index.html","d2bd74493d7def48f7f6cf09fee34204"],["/categories/赛后复盘/index.html","c2dd4a896a628323a588e0f15fe43642"],["/categories/靶场训练/index.html","8a4937562cc3aeeeae734e239112af14"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","4824d72e30be71577f756571630ad4b4"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","3c8f12fda5b147ea4532f0e9d69a90b4"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","753df3a55a403aa782e7eb5e7e777424"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","89500def5f20870bba69f2d3b1b5d240"],["/page/10/index.html","b813375be4047976b13dd282fefb54e3"],["/page/11/index.html","f8834ee44982276a3555d3b4d97b6669"],["/page/12/index.html","8a813d0a0f387ff74402ec277e00a317"],["/page/2/index.html","b75e988fa0bdf3ce5f82bd9d093e3c1f"],["/page/3/index.html","d10e13142dda198bb9ae4fdd1b224dd5"],["/page/4/index.html","6f6d7330aafd1e4d6422994c3486fe84"],["/page/5/index.html","8ab72589488c2675c4d8d290f30d7153"],["/page/6/index.html","adab3c72703ff33416b879b51a00d1b3"],["/page/7/index.html","f81c00cec4c7910160e3be5f700961b8"],["/page/8/index.html","7ceafb0fbd90ac1ed7c2643e0d452b04"],["/page/9/index.html","3b67b71cb08977b62e6ba8e5a16d2049"],["/sw-register.js","46c0009c848302704c33cb33e34ded3f"],["/tags/C/index.html","97b94afc053ee6e5a59073a87c000cdf"],["/tags/CTF/index.html","3f6dfa8779aa5dc1de0ad281855ca0e4"],["/tags/HTTP头部信息分析/index.html","023f03dff4c1c485f28f19f190d2ff07"],["/tags/MSF/index.html","b55b3c5749e966fdf9df931d03acd451"],["/tags/PHP伪协议/index.html","87028378de71a2ee89139c2a9097f26a"],["/tags/PHP特性/index.html","fc64a360ff76d4270926dc984486f26a"],["/tags/PWN/index.html","e677d7a0b7bb90045485744ee8eb06a5"],["/tags/RE/index.html","e901cfc543d37d242c2b0ec903b78c7f"],["/tags/SQL/index.html","fd7a56c9ef93d1630d645f5f087bc0ba"],["/tags/Web/index.html","ec5a02660fc307c9c6fae07a1262f5a1"],["/tags/Web工具包/index.html","16881bd9005602c402597c3f1d437918"],["/tags/awd/index.html","4172dc6253b3d50f8979a25969792d03"],["/tags/ctfshow/index.html","22a6affd9a8445109b1acbdda132200b"],["/tags/index.html","02731f651bce498a9c3b84ddd3acfb7c"],["/tags/misc/index.html","d486b53e24e404941b0430c965a763ec"],["/tags/next主题失效/index.html","8cc5367e321ffd0f494f52bc2df383d9"],["/tags/wp/index.html","818165e66b227ffd89bb97058503c6fe"],["/tags/xss/index.html","87d7608c2d9d1d0190f6616189266b01"],["/tags/xxe/index.html","afdee15d3476211f217e2f8ffdaa613c"],["/tags/不蒜子不显示/index.html","4c3662225644f2034fdd79258b82b732"],["/tags/博客/index.html","8a38f65af30503e767b652c7eddab162"],["/tags/博客主题优化/index.html","b801a2091a32af0031c543595c0f52d1"],["/tags/博客死循环框架问题/index.html","ecde9ef03543345b30bb61841b8d543c"],["/tags/博客部分问题解决方法/index.html","2edb4657ae3e3a53e9174db5c5d9ff8e"],["/tags/反序列化/index.html","8d13fc0b7e4818afd60987cfc2aaa4fc"],["/tags/命令执行/index.html","13838b6609e6d0466ddb6be1cc55cb89"],["/tags/局域网攻击/index.html","5575027d24ed35dcd98e80510ca3df19"],["/tags/常用指令/index.html","7172b001dbdafd278d47fccc3d0545d5"],["/tags/心得/index.html","2a0d05f527b13eca6abbac7d8ce51bd0"],["/tags/文件上传漏洞/index.html","5568f3f54193406048a537ab0c58ce04"],["/tags/文件包含/index.html","8658a3960d27059b63c0c4a27f5e344f"],["/tags/流量分析/index.html","1918a4de0a2411b47ced56893178a1ec"],["/tags/渗透/index.html","4e9a53a06b4e078078d9cb727eb4fa13"],["/tags/渗透认知/index.html","b189452faef3150b849764c5bcec32fa"],["/tags/漏洞复现/index.html","43f7b55858aff3376d0beaca72444b5b"],["/tags/留言板/index.html","e6d0cf84ffc8755e3c1acfcbff364797"],["/tags/赛后复盘/index.html","d1cbb6504ccb03bcddc3438dfea9c75d"],["/tags/靶场训练/index.html","a41649c324fabe08e382b13c2fad6c80"],["/tags/黑盒测试/index.html","4218a579936effb56fb0b4cabdbec418"]];
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
