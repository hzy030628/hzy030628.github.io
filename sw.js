/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","82e939c5f0f6504140798d2c7c5f240e"],["/2022/01/02/Python程序运行常见错误总结/index.html","3d1c5d1e4ac39713d3baa621c62bfe8c"],["/2022/01/08/ctf之web/index.html","e34cfc98c4f4d52bd2a643d54b3028a3"],["/2022/01/11/博客制作遇到的问题/index.html","cbaea4fb764791294be9e587edf27d79"],["/2022/01/15/C/index.html","a2fba16b835530489602f6a0db4197d3"],["/2022/01/18/新版next置换/index.html","7b3c49c332bd936919cc6efeb36a9fea"],["/2022/01/19/不蒜子相关问题/index.html","6e1f160bff6b363a9512b0d5a8c3ce5d"],["/2022/01/19/框架问题/index.html","738f27c1836e0af8ce24aef123d3f88f"],["/2022/01/20/ctf之reverse/index.html","625694f69328fb0873be21d4f961a737"],["/2022/01/23/misc部分解题软件命令记录/index.html","7477801e85f2d6cf9b26336d7265f3a4"],["/2022/02/01/684/index.html","58d7b202172263db0fcd4b6623db51f0"],["/2022/02/03/留言板/index.html","89aa2ddb33cdb69f08542b0db5253340"],["/2022/02/04/SQL简单注入/index.html","a57b217a17fa18dea2b2fa8ee912cf87"],["/2022/02/05/最全的HTTP头部信息分析/index.html","421b7aff1112be2bb78ceb2a8e7141a8"],["/2022/02/08/ctfshow文件上传/index.html","3bc724a8ad7c538615705265b6f93809"],["/2022/02/08/常见密码类型/index.html","d5dc2eab6e4d1f33e1e086553dac36cb"],["/2022/02/12/VNCTF2022WP/index.html","b8b53b5c63f255b8b50635458a8e828a"],["/2022/02/16/rce/index.html","2f8f87ec22332eba2305c09074596398"],["/2022/02/20/ctfshowPHP特性/index.html","02f4f1551b46c6b181317fb34bd77c48"],["/2022/02/25/php伪协议/index.html","87994ce9771d4abcc23ba1edc7eefcd0"],["/2022/02/26/ctfshow文件包含78-117/index.html","a21d074d02ab086c5d07876a8af680e6"],["/2022/03/02/Clash漏洞/index.html","75571c4f5ed00d0ef76c8736452ab0a6"],["/2022/03/11/流量分析之题型解析/index.html","ae7d2d76789eded61968e8b96767fe39"],["/2022/03/15/ctfshow命令执行/index.html","10c534e53465615ffbd6efd6b0cd1882"],["/2022/03/22/CGCTF/index.html","849e34fdf6f511a21458e15d6f8e81f0"],["/2022/03/24/ctfshowxss/index.html","94a6e75f3151b239ecffbe06edc5f6dd"],["/2022/04/04/黑盒测试/index.html","54220d9e49ed1785156e8e538b9a59b6"],["/2022/04/11/nmap/index.html","33a4bc6c41cdfd26bc20557195b3b510"],["/2022/04/12/渗透流程简要记录/index.html","3d312e2bc59ca058d2777f47875f59bd"],["/2022/04/12/渗透测试之攻破登录页面/index.html","b9a5ec94d7d6eac9676821cb447b47e7"],["/2022/04/14/xray扫描器/index.html","06ed86d36d6847b01496c0ab5b3e51fd"],["/2022/04/15/ctfshow反序列化/index.html","c191320f673226e833c2e0685c75ad01"],["/2022/04/26/渗透测试实战/index.html","7d6358029c3631047db2a84934e5287a"],["/2022/04/26/网刃杯/index.html","a9292dd9127f6b050ad5ade0dcd75681"],["/2022/04/28/sqlmap教程/index.html","8f2cc686ab62c7f5a5a9b8b4f49dbe55"],["/2022/04/30/认知文件上传/index.html","4344a11ed38965feea0758c8b3677046"],["/2022/05/03/nahamcon/index.html","d9afc1b20aaf6370e0f226edcbb528e7"],["/2022/05/15/awd/index.html","932efba6889cabf001df349fe0b3314c"],["/2022/05/22/DASCTF/index.html","6cb94985b75a203236b4e983e2420b0b"],["/2022/05/27/520/index.html","79704d6d4d6d53128e3e0aa9f2feed02"],["/2022/05/27/ISCC2022/index.html","c30c45a9ecc8d281d590b0a3d9e55ee9"],["/2022/06/01/第五届世界智能大会/index.html","66b66b3f66ce8ebc9c48eb24c72d926f"],["/2022/06/04/SEETF/index.html","c7a7f353cc6aa854a1f066ccea531f46"],["/2022/06/04/bcactf/index.html","caf0234096f5e94bbd86112f2b3fa330"],["/2022/06/05/BSidesSF CTF/index.html","3e2e0eaa8c4fa1404f854f21255e2626"],["/2022/06/07/Docker部署web题目/index.html","a06bd935e78562279dad7e3220efb618"],["/2022/06/09/利用oj搭建C语言考核/index.html","ceba8a56f390bc4cdba5e7206fed10c3"],["/2022/06/09/论网站502/index.html","e61e6b6a3e5a0399fb368ec30b7c7b1e"],["/2022/06/13/限免题目/index.html","b1fa7efd70e0099f1a2906e35806bfb0"],["/2022/06/14/钉钉rce/index.html","e0c46e14fffac2d1904b31b1c7fa0091"],["/2022/06/16/内部ctf/index.html","729ad2d55cefb2e502a1888abaf038c0"],["/2022/06/25/攻防世界高手区(一)/index.html","47ef48e7dec8bd853fe355b8d14d543d"],["/2022/07/01/两小时AK赛/index.html","03766fc7024f5db632ec349ae679d166"],["/2022/07/03/鹏城杯/index.html","a69d31ec8238fa5d3a2ef1e847c35eec"],["/2022/07/04/XXE/index.html","1f4f5ec7638cfcf09310f26a7420c722"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","eef36eaa39a5d1b3329d01dfaa43b038"],["/2022/07/08/chinaz/index.html","2e18384367d93783d6bb0f004788765f"],["/2022/07/09/蓝帽杯初赛wp/index.html","45f52de1253f62dea420336f6b4c3f7b"],["/2022/07/17/NepCTF/index.html","63b2bc352ce8ed60e96f87503d41c49f"],["/2022/07/19/ImaginaryCTF/index.html","31c959ed394c453e8d20037d131d84df"],["/2022/07/20/局域网攻击/index.html","96b5ee9b7669f54deb0006128093f62c"],["/2022/07/22/BDSecCTF/index.html","1240aa60665696e9966424a211ae377b"],["/2022/07/25/DiceCTF @ Hope/index.html","752bba8cf2d2c05b7dc44739a5231764"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","777dbd62cddf1575b81abe81c01a30a7"],["/2022/07/31/TFCCTF/index.html","1e38e267b984bab6c7018db70c38341e"],["/2022/08/03/NSSCTF/index.html","ef689289d484b202039babdb4817a6c1"],["/2022/08/12/T3N4CI0US CTF/index.html","4ad5c74921628979f649faf283fa99b3"],["/2022/08/14/SHELLCTF 2022/index.html","b0d95bc2f97c1ff78321d7cc17686b07"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","8cc2b481744d76aa79d35b738b057276"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","b8492990fd016ab1c46b55a97fe57438"],["/2022/09/16/柏鹭杯/index.html","d721dce0489612dda61794d9e2d28dc9"],["/2022/09/20/HUBUCTF 新生赛/index.html","1195c0ec7cf176caa66b3c005804bb00"],["/2022/09/27/NewStarCTF/index.html","8f3b04c2a5f08ce3c5e17fdcaef967be"],["/2022/09/27/bugku渗透1/index.html","a4c53d1fec094bd1447809010c5eb5ed"],["/2022/09/29/tp6漏洞/index.html","54b7abba797da0ec232cc414bbc8df1e"],["/2022/10/02/SWPU NSS新生赛/index.html","bacc8e590cbe1faeabe81bc505696b0f"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","4d3a5794bd947df39cc8fea6106f4730"],["/2022/10/27/Moectf西电CTF新生赛/index.html","610ebdd265d33f2d5462a85c2016688a"],["/2022/11/02/HNCTF/index.html","5d58ecad11a00e720faf41abd703a637"],["/2022/11/04/2022工控CTF/index.html","fcc46dc47d6be31cb8a29beeedc49451"],["/2022/11/21/极客大挑战2022/index.html","dafe5b85de7dcbd279ce35ffa4f8d5b8"],["/2022/12/05/TUCTF 2022/index.html","9cb10e67fb85cdebbb6dbf3366ea6f70"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","d9151b730a7e1839027ae76dadd1ae36"],["/2022/12/18/金盾2022/index.html","fd354dcc8398756a8c44253f9b743bee"],["/2023/01/01/CATCTF/index.html","7387d43f3eb404fc496ebec3f7096aef"],["/2023/01/09/RW体验赛/index.html","a1f6137f59c91176e2e790d20204977e"],["/2023/01/10/铁三/index.html","912e3fc2f589bce4fc3daac8eecf85f6"],["/2023/01/16/Ugra CTF Quals 2023/index.html","f7fe020a67bf2e1a34a6a13b8d5863cc"],["/2023/01/18/山石2022冬令营/index.html","6960ef467177a600bcf5353274c5c196"],["/2023/01/19/SICTF/index.html","20cbd494a75aea98e9c7feafb4d77d94"],["/2023/02/04/2023西湖论剑/index.html","d35e89ed8ed17d894a0881172b9a1cdd"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","2f75cfb0594814549e89c0ad214b979b"],["/2023/03/04/公安/index.html","0b5410dfa409cbdc8784fffe7893e65b"],["/2023/03/07/mysql之udf提权/index.html","6b470ce7195de6017bbced99bea52376"],["/2023/03/07/红日靶场练习/index.html","d3c6b4a7d8eb5f9c991099ba1bda37cd"],["/2023/03/27/NKCTF/index.html","b7ca2c2b5c70612c3ba4501f09f6b500"],["/2023/03/31/楚慧杯/index.html","fb2809ebf4937ab51dd2aba3a8ee6da0"],["/2023/04/23/HDCTF2023/index.html","bf6b1b44a0d95a307ce69f5f4f55a466"],["/2023/05/05/暂停/index.html","b9b22adf288e577f72cad29ef1b4526b"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","85c94cc1fea22fc2e8865de700fe31d9"],["/about/index.html","92ed13a9c316720d824b42c6c6059be4"],["/archives/2021/12/index.html","d972677c39e676386e30c6209a9661de"],["/archives/2021/index.html","fcec7cb17f81b320bd4db68fdabb7606"],["/archives/2022/01/index.html","ce643cde6bb0bc9d4021ecddbbaa830f"],["/archives/2022/02/index.html","2e6a16737ccafe2ae9a5c6d16c2dc635"],["/archives/2022/03/index.html","0f1337c683e6207d4452c9a59dc9a0e6"],["/archives/2022/04/index.html","c0ad292e26d413c21bade2ad0b105d2f"],["/archives/2022/05/index.html","80143db510e273b23371abbaa8ee37f1"],["/archives/2022/06/index.html","33b57acac5c0f90bac26aff7ea013301"],["/archives/2022/07/index.html","7fd45e5316a03401913259cc556299bd"],["/archives/2022/08/index.html","2e0d3c6458c39c1c5f7bd7eb59da9969"],["/archives/2022/09/index.html","a172d01a0dfaaf2de85d602ab2df877d"],["/archives/2022/10/index.html","cbe03e82030c505abc58b169c0e3dde2"],["/archives/2022/11/index.html","20b5828fc388fa7244113df19bc35b8c"],["/archives/2022/12/index.html","e8b9e6d0e59d67d7f320f266f6661cdb"],["/archives/2022/index.html","b76d48d00ae32018e75393bbcda17a59"],["/archives/2023/01/index.html","0fdc89249d9fdcb8bacc7ca93b6da757"],["/archives/2023/02/index.html","eef0f980202a18441a5779dd88cac7b6"],["/archives/2023/03/index.html","a210065677128fe080d583f72d294602"],["/archives/2023/04/index.html","39ec86864abb16d1ca7d9d1f8bf0d2b9"],["/archives/2023/05/index.html","04cf02946d212bd4134dccb800b8ce55"],["/archives/2023/index.html","d7745e298856284089ada5a21f241785"],["/archives/index.html","5202194cb1fac5f2a37df933dcfef45d"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","722ce138b46529f081983478f231e6ce"],["/categories/CTF/index.html","321e7eae0b538cecd4957ced312a0c6c"],["/categories/PHP伪协议/index.html","3d1e8d2d6143f2765c264fca27ea78bf"],["/categories/Python/index.html","5fcd590a39a74f077109368e1818f395"],["/categories/RE/index.html","4fcfc6af0c3649e0af6ef2c8ec879ceb"],["/categories/Web/index.html","4d9636f9ab8a24069afc9520e8699ab9"],["/categories/awd/index.html","027fc7fc0be2e4ae675d9a1788d1b3e3"],["/categories/index.html","f1c6989afcba98ad453329ef13d373ae"],["/categories/misc/index.html","8606a5f99ab909a75871c9050e26090f"],["/categories/sqlmap/index.html","2739fa25744df6356858c0d330200b19"],["/categories/博客相关问题类/index.html","d620e09ea1b4d66a092722e599a4227f"],["/categories/局域网攻击/index.html","1e5acdc5c8614773baceab43af5a742b"],["/categories/心得/index.html","b845a4d074cc1111d4789c7f823946eb"],["/categories/流量分析/index.html","0ee7171842d5c676922dad8ccd95d9b3"],["/categories/渗透/index.html","2d6698a51bd84bd8d818b524bd5567f4"],["/categories/渗透测试/index.html","fbb112e974ef3ee75598e083b26c3151"],["/categories/渗透认知/index.html","4d7fe50bb0488b8efbbbceeb0cb505d6"],["/categories/漏洞复现/index.html","72fcf00cfa158217a05cfac1c91a9c2e"],["/categories/漏洞测试环境搭建/index.html","c5ce5f3f8dc498e4261470864b46dd0c"],["/categories/赛后复盘/index.html","7b7a467f21e22d957a932d1a70b6b243"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","0250b6fd04588c8dcf5c8dd9c9123e6f"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","7fb2eacd80eb8b1c3c2afa90009825b5"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d1325034be2ddfbed377ffce1a1daab5"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5bec287bc2a11fbd6cf8e31df8fb523b"],["/page/10/index.html","5acd23abe6cd62e50266e582afc6d384"],["/page/2/index.html","0bcc61fbd39bacfbe2096b647797e40d"],["/page/3/index.html","13fc744bf90f2391f0cac60e02122e99"],["/page/4/index.html","9cb3869d5e046b5e34d636e8dffcee05"],["/page/5/index.html","e8ddb0f03a6564eca3d765842c31bd68"],["/page/6/index.html","99de787e072d9dd7c46b217c35f39bac"],["/page/7/index.html","38997f8b576cdacaa96a1c4721576283"],["/page/8/index.html","a25252dfba75637663e3412490269712"],["/page/9/index.html","588909187d96a87af88a161b24cfd061"],["/sw-register.js","6d08ff813bf01c0747e9372fb01683fb"],["/tags/C/index.html","42060b5730794209bbfd02b08f2e8904"],["/tags/CTF/index.html","d5c947d32df49ccff5671c5097657e70"],["/tags/HTTP头部信息分析/index.html","e076a77a51d32d22bec19821615143d4"],["/tags/PHP伪协议/index.html","1f4131e6eaf322437339f7ce15bac085"],["/tags/PHP特性/index.html","1b1a22e9ecbe7b7556d0db3897af94c2"],["/tags/Python/index.html","19af9397c2cae6a57dbf9c7d33c5fd10"],["/tags/RCE/index.html","84eb74362df9b1fe5f3a677784f12fcc"],["/tags/RE/index.html","646ee63fec6ded0b059c04be492b93b1"],["/tags/SQL/index.html","be89d99cddcda7af37b3b9dd12fd2a24"],["/tags/Web/index.html","a6679cca235a7da1afa71308cbfce977"],["/tags/Web工具包/index.html","5b3d9ffeb19e5b2440bdb15dc0ca5253"],["/tags/awd/index.html","ad06c588a4fb588419024867c127360b"],["/tags/bugctf/index.html","fe1ceaf8bc6c0f18f56224a0f3500520"],["/tags/ctfshow/index.html","319d705e1c2b99b151a16d87723bf577"],["/tags/index.html","ead35ec8f33985dab4cc39c16b27b3e2"],["/tags/misc/index.html","69862d5686c8f399ee07351106fc54df"],["/tags/next主题失效/index.html","db15d42161b66588aa52da84401445d7"],["/tags/sqlmap/index.html","34a08f3bc3f6c61c2cf30d0a7f5a3239"],["/tags/wp/index.html","579dd8d7378e76adbd096855b0717956"],["/tags/xss/index.html","d77400989ffcf9c84dbc25ab4d51076c"],["/tags/xxe/index.html","9c562f7b6c2f760c64759a876a8c48ca"],["/tags/不蒜子不显示/index.html","4ab27f52c0ad8f625ae4061e22cd19df"],["/tags/博客/index.html","89ce4a8def3889c89d4869af22a21619"],["/tags/博客主题优化/index.html","99be3efb565eaba04a864499b5a43d48"],["/tags/博客死循环框架问题/index.html","d7de302554f35d91ad30be9ce7335d8e"],["/tags/博客部分问题解决方法/index.html","37f6d79c90c6c8d9613fe92e0150c2df"],["/tags/反序列化/index.html","9be3f57392785192d5250bc39a057ab1"],["/tags/命令执行/index.html","51e9fa5030d12b9050dac981f7e64c84"],["/tags/局域网攻击/index.html","9facac9d4ce736375a101d254d635b37"],["/tags/常用指令/index.html","a84ab68846f48015f9becca59834ab5e"],["/tags/心得/index.html","3715dab9e345ad44a3d2792b450edc0b"],["/tags/文件上传漏洞/index.html","e82978866da72312750ea199b384e34f"],["/tags/文件包含/index.html","c884b170b5d73984499f2c3732a4dafc"],["/tags/流量分析/index.html","6f4b2d169ad1daabc3e96db996421ac0"],["/tags/渗透/index.html","68b9c42b8ac8b6f2a18ef40a439cee3b"],["/tags/渗透测试/index.html","6f53a66e2a17187576b58630bf85450a"],["/tags/漏洞复现/index.html","011f120d2ce8d10b546b358012a4aff3"],["/tags/留言板/index.html","cb247f52ef0412c86f04bad0fa034748"],["/tags/赛后复盘/index.html","180954e57ee40005a0247472165d2906"],["/tags/黑盒测试/index.html","c820c1c80956df840863516e3b600d2b"]];
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
