/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","7de52d6b930b92dc0766c1c987e9af0f"],["/2022/01/11/博客制作遇到的问题/index.html","5a66a260d64067984c7a3e1ea881acc8"],["/2022/01/15/C/index.html","cd7bca70c0fbd652a6877a21c05a3fa3"],["/2022/01/18/新版next置换/index.html","e5053d7a828023457c4dc613132265b6"],["/2022/01/19/不蒜子相关问题/index.html","3a85b7c954186e596ea61e506fa2d63e"],["/2022/01/19/框架问题/index.html","1cc9f1f1f483188c4ca598ed370a6f3e"],["/2022/01/20/ctf之reverse/index.html","a55d84456eca909cbc97b55abd569913"],["/2022/01/23/misc隐写题目总结/index.html","2168d1f433ef4435b24f3044ebc39cd6"],["/2022/02/01/684/index.html","8e9eefe770f8b2f17dc50d94579cc22c"],["/2022/02/03/留言板/index.html","156b580e1e2ed3e4428cdd5ddf04d459"],["/2022/02/04/SQL简单注入/index.html","efd5f623a6b0b78274272c52d0ebb755"],["/2022/02/05/最全的HTTP头部信息分析/index.html","69976bc2464e4c6acff58b2fa473f453"],["/2022/02/08/ctfshow文件上传/index.html","e22165f2d02459c18cdb8b6466f34cbf"],["/2022/02/08/常见密码类型/index.html","46c521144c92dfdbdadb965a47eec927"],["/2022/02/12/VNCTF2022WP/index.html","0da8d0ca0ffe5a0b35859d11718f68e5"],["/2022/02/20/ctfshowPHP特性/index.html","4a555cbd04a11e73cc0171e5e2da0032"],["/2022/02/25/php伪协议/index.html","dece11456d24d7c341d09b21afee25e0"],["/2022/02/26/ctfshow文件包含78-117/index.html","bd961188bfa94a96d5519721f0457fe3"],["/2022/03/02/Clash漏洞/index.html","57544833ee22bef92d327a649371be24"],["/2022/03/11/流量分析之题型解析/index.html","2e8c36c059a9ab623fd1dcefe5540c6e"],["/2022/03/15/ctfshow命令执行/index.html","f44bb26043ae21f5035734cd17b43550"],["/2022/03/22/CGCTF/index.html","0ffbe38e867a60c2f37ef403eab86eb0"],["/2022/03/24/ctfshowxss/index.html","19500868d8ba8f8e53232d2240c492ad"],["/2022/04/04/黑盒测试/index.html","86d928dac161e6dd25bd9245007cceeb"],["/2022/04/11/nmap/index.html","18d96adb2f2ec69b4ca6a17762bc3499"],["/2022/04/12/渗透流程简要记录/index.html","a8e1f00ca096c29385d190e5a99b9262"],["/2022/04/12/渗透测试之攻破登录页面/index.html","266052b04b02db7704e0672c291595c4"],["/2022/04/14/xray扫描器/index.html","50cfefccc575083da42ca944486a5958"],["/2022/04/15/ctfshow反序列化/index.html","d3c108d0edacacad4fc44f9b866cba2f"],["/2022/04/26/渗透测试实战/index.html","ea1c26f468857500c78a31fa78ec1f67"],["/2022/04/28/sqlmap教程/index.html","5f22b14b162f5313cb4eee0b064587f2"],["/2022/04/30/认知文件上传/index.html","64d3f21eb386fe4bf18a821c18b26957"],["/2022/05/03/nahamcon/index.html","6e8ce4eec3c75fe7d10c836dff38bdf7"],["/2022/05/15/awd/index.html","773119f2473550a7c0e109597a2cdc8e"],["/2022/05/22/DASCTF/index.html","7a153ae791993753c5482461e6936092"],["/2022/05/27/520/index.html","ae4d17fca70ae7a6b71458b6e4479317"],["/2022/05/27/ISCC2022/index.html","e60be838633ab6cbac16b089d38ea7c9"],["/2022/06/01/第五届世界智能大会/index.html","483aef4f6558ac5bcdd505471fdee29c"],["/2022/06/04/SEETF/index.html","e382b4a9ede86ad33e21b4ab303621c7"],["/2022/06/04/bcactf/index.html","9076a1035f5c787fbe0743d561dacffe"],["/2022/06/05/BSidesSF CTF/index.html","790fd8170cec8341697a3104c87e088c"],["/2022/06/07/Docker部署web题目/index.html","11d2b442412eff8e212a3f7803894007"],["/2022/06/09/利用oj搭建C语言考核/index.html","c055ec3d9af885d90fdd3582a9e3beea"],["/2022/06/13/限免题目/index.html","02c1b6bca1359dc27f8e70839065df98"],["/2022/06/14/钉钉rce/index.html","6ecb645797a9f87ac1584d5b568e9521"],["/2022/06/16/内部ctf/index.html","dc6f0da1ffaf97689de98fd3920f2843"],["/2022/06/25/攻防世界高手区(一)/index.html","13abfa8c015a0851359a0293e0509b18"],["/2022/07/01/两小时AK赛/index.html","a1c448e9bd6ddc2d531cb746eb989aed"],["/2022/07/03/鹏城杯/index.html","2b2bb5aaf0d113b9b100485b6d2b15b1"],["/2022/07/04/XXE/index.html","f07586a0db3bfe51edfb22913ba35ee7"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","411565125a33b7a303da26d8b81806f2"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","a763959831e6edb3f41faf955cd9be4a"],["/2022/07/08/chinaz/index.html","fddfdb6fc590b6ae4819dc859f3283e6"],["/2022/07/09/蓝帽杯初赛wp/index.html","49ed104113a72f943115f058d50cb404"],["/2022/07/17/NepCTF/index.html","2a7ca735d04a8805ffd4ca8c49a263a2"],["/2022/07/19/2022ImaginaryCTF/index.html","2fb7a529e78a09bb6a8a05902f701294"],["/2022/07/20/局域网攻击/index.html","81d4de5adde84993761796a2b8a26371"],["/2022/07/22/2022BDSecCTF/index.html","03006a6d3b730bcc8691314e4b2f87eb"],["/2022/07/25/DiceCTF @ Hope/index.html","2654f7380950df8b51fa955af8f1eac2"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","318af033be77a274985abea2b88f9e11"],["/2022/07/31/TFCCTF/index.html","1deb220bac577c2fedc90797451dbde9"],["/2022/08/03/NSSCTF-r4/index.html","f948d97926850cd391a9c64caa30f6eb"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","f9e3283e21f570620b7df5367ef93b34"],["/2022/08/12/T3N4CI0US CTF/index.html","25679e2d76fc1b7c3ed2366539987f79"],["/2022/08/14/SHELLCTF 2022/index.html","41b3a3783289c9fc2fcb9b68e36f7b87"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","160271dfc398cbd0673afc1c79c31894"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","c26cce66e5eccca0b751a78703fa1017"],["/2022/09/16/柏鹭杯/index.html","b53c0ec205ef04e19a8e1eafd15fe48b"],["/2022/09/20/HUBUCTF 新生赛/index.html","c215d02c596ee0e5727fa33782a77080"],["/2022/09/27/NewStarCTF/index.html","8f03cbe25a746990327a79c486f60b1d"],["/2022/09/27/打靶-渗透测试1/index.html","51a795a393b80109dc42fdd15fd0cd77"],["/2022/09/29/tp6漏洞/index.html","c1566c9603de64756f1b83a0a2c5cfd5"],["/2022/10/02/SWPU NSS新生赛/index.html","2ba0ff7e8b9a9f708deb6c1932cb8a0d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","63e6706afba593665c0aa5641999a179"],["/2022/10/27/Moectf西电CTF新生赛/index.html","6849f46686e7a18db2f35578ba29c532"],["/2022/11/02/HNCTF/index.html","8712a135ac64461a00e784436370455d"],["/2022/11/04/2022工控CTF/index.html","56c9788b09003628f50017844de93b59"],["/2022/11/21/极客大挑战2022/index.html","6fba4374ac9abfc2f3cd052748339a46"],["/2022/12/05/TUCTF 2022/index.html","84f36adcd16f4c7e0d782d37bd66d980"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","aeb98db2df911e96a5c50b86c1bbdd7f"],["/2022/12/18/金盾2022/index.html","e8e4fb31cac03a8939c8adc35f033c35"],["/2023/01/01/CATCTF/index.html","720f0a506485d6d54ad50b3242a17b48"],["/2023/01/09/RW体验赛/index.html","ac4cad7ead8ef6d21a81b947db626b34"],["/2023/01/10/铁三/index.html","14732d6f724b51fb00dea3f79bc362a8"],["/2023/01/16/Ugra CTF Quals 2023/index.html","d53e73470e1327ea4fb732f35bb4060c"],["/2023/01/18/山石2022冬令营/index.html","1ea0c51676b62c6b1d81ad68dba15b64"],["/2023/01/19/SICTF/index.html","9e84465985823088a25ccb6db0cf566e"],["/2023/02/04/2023西湖论剑/index.html","ebf3be42b4daba659655b985e4fab78a"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","c167532a3d1fd512e97d2261ee85211f"],["/2023/03/04/公安/index.html","7e2e667fd2f724d24ee153e60d0a87f6"],["/2023/03/07/mysql之udf提权/index.html","434dd0ee26f2c319dc8482af47432846"],["/2023/03/07/红日靶场练习/index.html","71d6c96a9821a7937145e49c710a5fd5"],["/2023/03/27/NKCTF/index.html","0d434a7d122e1a2921b102bd2f2f733b"],["/2023/03/31/楚慧杯/index.html","c3e308267f078e245e5aba8fb454835e"],["/2023/04/23/HDCTF2023/index.html","f3f6d6aae1ec787c380ceb696f02f912"],["/2023/06/01/2023CISCN初赛/index.html","f5ddd8c7091325beb1e0d385efe42636"],["/2023/06/28/2023CISCN[华中决赛]/index.html","76cfe7cce6ad780024fa2f270707d60a"],["/2023/07/10/CyberSecurityRumble Quals/index.html","9713c2776631ef917a5c433d37451d8c"],["/2023/07/22/2023BDSecCTF/index.html","b6b0cd7c210dd4be50fae33efa3b45d8"],["/2023/08/07/SQL手注小记/index.html","fd365987159ed129603af99e886847ed"],["/2023/08/27/2023陇剑杯/index.html","a29012d64fbca3132a07da20d9c0fa71"],["/2023/09/17/2023蓝帽杯半决赛/index.html","986ac60d1595c503dcd10abef67d5fb3"],["/2023/10/23/对于多层代理的研究/index.html","d0c7bb23b80f6a5cedfa2fa48b2c7589"],["/2023/11/25/金盾2023/index.html","4faaec947a522468af5a6bba3e5d286e"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","d542dd784efb45c88fda06ac678c8317"],["/2023/12/18/2023强网杯线上赛/index.html","b492fdf5de7adc1bc8277f84628ac27e"],["/2024/01/08/基础ROP/index.html","9bd0fe7c95286b043c17f51ebed46df0"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","3f5f542c02303f1c194643e2b2acc100"],["/2024/02/13/打靶-Tr0ll/index.html","32abc73fbb76bba69d4e091e32e03568"],["/2024/02/14/NSSCTF-r18/index.html","874514e4fb047fde7641cf515acbc163"],["/2024/02/14/打靶-Vulnerable Docker1 Hard/index.html","3ce3849f32d07c0a6a7435ca639f7e50"],["/2024/02/15/打靶-CFS三层靶机/index.html","adf84d159947248792c51067ce721fb1"],["/2024/02/15/打靶-应急加固【简单】/index.html","f2694253da8fa40acc3ba6ec72b6d67e"],["/2024/02/17/2024VNCTF-WP/index.html","4a6c652f8cd969664b6e8af876e03962"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","c4a1a4d16058347a772a26e52d893d41"],["/about/index.html","1ac95f2c24c66c532d4738d320dc5127"],["/archives/2022/01/index.html","82682506bfc98ec830e26565f239b92d"],["/archives/2022/02/index.html","cef5c9aa1c910ad53395772bcffbf8b9"],["/archives/2022/03/index.html","6aeb88f3215326218c14e7fd2bc17a6a"],["/archives/2022/04/index.html","0fbf2e48a4b92cbc09e6a903edeb23b3"],["/archives/2022/05/index.html","5fe871fe66d843b568beedc12b347597"],["/archives/2022/06/index.html","700358b9d3a110009f414ce004908912"],["/archives/2022/07/index.html","f6763458daab8f12cd07acfdcbb0ee23"],["/archives/2022/08/index.html","65a68a8ae9a4a5fa4159b5f46ebca166"],["/archives/2022/09/index.html","13053fb92a786201ec735acb1fa07300"],["/archives/2022/10/index.html","0aedf5c4a7d712a86f517365775bc676"],["/archives/2022/11/index.html","603a631941e35a1a3383171b4715c692"],["/archives/2022/12/index.html","3e94fd38f1dcef72991d24517df487e1"],["/archives/2022/index.html","7aecd2743af2d658d6263a5ad2d4875c"],["/archives/2023/01/index.html","922a7d9889dea00f4200f103c4cac4f8"],["/archives/2023/02/index.html","64930b141c10a035948a96d5e6b00fc7"],["/archives/2023/03/index.html","a4514b7f5735a4cde11f1f6ba72eb403"],["/archives/2023/04/index.html","87283a2e6fbb1377c6f0c03e8ad765c0"],["/archives/2023/06/index.html","8cae0c41cb06b95c0e1ee2b45c58f1e9"],["/archives/2023/07/index.html","dd6876b1dca6d31f19cc2553c638fb26"],["/archives/2023/08/index.html","79a1e9a99d401fbb4ac46b824f35f5cc"],["/archives/2023/09/index.html","d73243adf4053eed4f5f53c886ed1c88"],["/archives/2023/10/index.html","096227772c38b401b966c54e9b53e663"],["/archives/2023/11/index.html","cee008de48a376b43dea6fa43b9bcd4b"],["/archives/2023/12/index.html","73ac749cf4a57c34e7de93c4c2d3ed8d"],["/archives/2023/index.html","d090189628231d5397b6bb0a5823bf5d"],["/archives/2024/01/index.html","ab33788cf1889909622287c404dbb5e7"],["/archives/2024/02/index.html","d75d4eaa2e981579a2f6d41a410d267c"],["/archives/2024/index.html","36b5dcb0c7cec8130e9680c67ab62bd5"],["/archives/index.html","8636433458d83bbd5fe3b46fef71b4ac"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","542ec8fb55e5665fbecc00605fd11603"],["/categories/CTF/index.html","77e40ae31111068a2733d74f364eeac9"],["/categories/PWN/index.html","fa159386a5c9975a979699178ed70571"],["/categories/RE/index.html","7890df59ebeebc50c8f89a6836ae6fc9"],["/categories/Web/index.html","e69900e6ac720795f5f41619db0198c0"],["/categories/awd/index.html","ac6db01337ba670e9c37682dcccc530c"],["/categories/index.html","59b75566c41bb29bd4764c57b65702dd"],["/categories/misc/index.html","76dcba68beb3301c83f0aad805147e2b"],["/categories/博客相关问题类/index.html","c2e3ededb04360ea5fe5e40d7b0523de"],["/categories/局域网攻击/index.html","685029afaa03006fb9cc2987fb773775"],["/categories/心得/index.html","99db279d97e8946582e499b3fe5b76f4"],["/categories/渗透认知/index.html","30690a76e3c3288fbbad6737e706c306"],["/categories/漏洞复现/index.html","495527980abd56ac06bdd2887a89d43c"],["/categories/漏洞测试环境搭建/index.html","a30253555b9ce5a22e7b618af6d0424e"],["/categories/赛后复盘/index.html","9962b1a5683944a00729faa903984055"],["/categories/靶场训练/index.html","1a705935fb3b95e9a8c5db36ee50a05f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","b7e166a806a81a38e83f57f7fdfa9d55"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","7fb7f2d9d2339b07fb1f4cc2485db0ac"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","8ce1fcbc01f8e9a399a4d310233a025a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","0a0c5d82083a53fb55d97cbb8e41d1fb"],["/page/10/index.html","2cab6b731b1b68c116d17e18c251f691"],["/page/11/index.html","6aff24b1154eab98bf679a08b4f386a2"],["/page/12/index.html","95e5bb48150f7887e63207467284b33f"],["/page/2/index.html","583269f8344b4c5878dc534384145223"],["/page/3/index.html","b982f6aa6364486070fd42bf9883a614"],["/page/4/index.html","ca5711edaf443cdc85a73accee2506f1"],["/page/5/index.html","946518e5a1d238a2dd511d550d2cd8b1"],["/page/6/index.html","0a2c04b80c826d05566687fa9764c847"],["/page/7/index.html","35bb01afdde732d642e1580865df0127"],["/page/8/index.html","52b9c5cf7eef97f5c4da5ec68197674a"],["/page/9/index.html","dd3fbbd2105d7cdadf4ad7d91a66e3d7"],["/sw-register.js","1e4a0c0661331fe45f7fe5fb0850eb08"],["/tags/C/index.html","f49fcd8be9676b0bd27c1fe582cd2754"],["/tags/CTF/index.html","183373293ecc4b73be18c149118da7f6"],["/tags/HTTP头部信息分析/index.html","3ae14380d6dd4b4db82e7645ca744728"],["/tags/PHP伪协议/index.html","ab99951fcef03f40b2ad0542b8b760ad"],["/tags/PHP特性/index.html","223bf30b9c04fdd8a041304bb71876a9"],["/tags/PWN/index.html","709b800fd44ec0eed93b8921e5425300"],["/tags/RE/index.html","1f3664cdc36c5e2c13e20055adadb0c4"],["/tags/SQL/index.html","c6c016d116d0f17c2bb071bc392ab159"],["/tags/Web/index.html","b3b1884bb8309eef5d82685df5b72ba2"],["/tags/Web工具包/index.html","061efe9e3caaf9379fcb183a76ad9f09"],["/tags/awd/index.html","7984792bbe1a32d8b92d79a620b1e0a5"],["/tags/ctfshow/index.html","28ffdb283b7183b6e759a522cc0a5320"],["/tags/index.html","9bfc98094e0adbe3b531ec8e9d4fa0e3"],["/tags/misc/index.html","d8c46d32cf4075c5e63a24a3596d9794"],["/tags/next主题失效/index.html","0081cdfe90d67af72492705ce03e36f5"],["/tags/wp/index.html","005d53dd75d1abe3ae222754590ee771"],["/tags/xss/index.html","cd81763ba8d9069ae66be4c6388af874"],["/tags/xxe/index.html","7571ccaca95eb48bdbb33750b27e66cf"],["/tags/不蒜子不显示/index.html","49ea68b5970906004ea5df9cdca51607"],["/tags/博客/index.html","5643bc06d3e3bc69f4ab856a17426301"],["/tags/博客主题优化/index.html","554b66ee747e981546b37b269ea3e4c9"],["/tags/博客死循环框架问题/index.html","83fc194426f823d1487e00bde8f24702"],["/tags/博客部分问题解决方法/index.html","9b0e640193b11958e54a64e016471e5d"],["/tags/反序列化/index.html","e784a310596d1bec388822ef3e7c8b93"],["/tags/命令执行/index.html","e134e2f2dbbcdefafa175968eec7c84c"],["/tags/局域网攻击/index.html","b6d7d3d5a958e458320bd053504f5e02"],["/tags/常用指令/index.html","85ef51903e795cb7e97d23add8120e09"],["/tags/心得/index.html","4c73f8ab67a3a0f57b199221d002d3d2"],["/tags/文件上传漏洞/index.html","f495657eb6b8be2e5fbd749b32148e54"],["/tags/文件包含/index.html","2706c27cea053e501bf16f1c7d7a502b"],["/tags/流量分析/index.html","f1fa857916264429ba2c01ca717bdbcc"],["/tags/渗透/index.html","0eb7d5e2ccb8a1c88896155bbd5d39ca"],["/tags/渗透认知/index.html","fca40c059489e01a00800a3a9d34ac9b"],["/tags/漏洞复现/index.html","2dcdf367b12f397f25e82e6673042dcb"],["/tags/留言板/index.html","8fc2dd1677259c3ebf7a4682a826c414"],["/tags/赛后复盘/index.html","31a1103eb1470b2d1a0e1b6f22ec3da2"],["/tags/靶场训练/index.html","11adcd1c95675fe5c310f0457454e65d"],["/tags/黑盒测试/index.html","a2faf2c128fdef2fa25503116a394c83"]];
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
