/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","702c2d619db24335b4900faa233588d7"],["/2022/01/08/ctf之web/index.html","c8b8fc4e522a853ab645c82ae1764c95"],["/2022/01/11/博客制作遇到的问题/index.html","d3459821aeb2026aebd3f657d0ebd41b"],["/2022/01/15/C/index.html","f555442b3d23be94dbb6d263bb2c8ed1"],["/2022/01/18/新版next置换/index.html","983d8f43ab92cb5ef10ba6cec027ef66"],["/2022/01/19/不蒜子相关问题/index.html","4b821d02e14b1bc6a75ebff3a188f265"],["/2022/01/19/框架问题/index.html","8b2867581c43c0a6c6904a000e1fcd62"],["/2022/01/20/ctf之reverse/index.html","93468344333a35b885cf71eced9a8408"],["/2022/01/23/misc部分解题软件命令记录/index.html","db8aeb3ec3affa0c67c4f7e860c5567a"],["/2022/02/01/684/index.html","34f1cf3c7517836475297f05c0c8021a"],["/2022/02/03/留言板/index.html","528f0e53fd89710b6166ddf2aa9a8f66"],["/2022/02/04/SQL简单注入/index.html","2daf3eb941fde47e1d8b3ff8710d9b9e"],["/2022/02/05/最全的HTTP头部信息分析/index.html","accafce0e140d9c831192b017e916fac"],["/2022/02/08/ctfshow文件上传/index.html","1d01c8fbe79bcbdce7b86b35209e8759"],["/2022/02/08/常见密码类型/index.html","a273f04ea85b67cd910b557f3eb72fce"],["/2022/02/12/VNCTF2022WP/index.html","6cf29a7837f8c35048850b5a0b11ad07"],["/2022/02/20/ctfshowPHP特性/index.html","a2bc05666b674abea3d4d0ddd27aa051"],["/2022/02/25/php伪协议/index.html","6e6607d102e8f99fd350e6571391414f"],["/2022/02/26/ctfshow文件包含78-117/index.html","f75de3a9cdebc3bc823edd76fcc2d146"],["/2022/03/02/Clash漏洞/index.html","2c8db86cdd8a1d2cc57b545520241945"],["/2022/03/11/流量分析之题型解析/index.html","c0aa3b16015e165d29b7b14bdf0de2b2"],["/2022/03/15/ctfshow命令执行/index.html","b6c78f34322b1ab23838db82fc759cd5"],["/2022/03/22/CGCTF/index.html","46dc00f69d12c2e38338a75b77299f4f"],["/2022/03/24/ctfshowxss/index.html","0d8bfe604c91aa06bf01f5c67631ceed"],["/2022/04/04/黑盒测试/index.html","c9c83f8184c4a1e13045268b8591e105"],["/2022/04/11/nmap/index.html","dd79421e74f54c50cf19d7fcb763246f"],["/2022/04/12/渗透流程简要记录/index.html","929240063a4eb0ff3191cc8f8ed258c0"],["/2022/04/12/渗透测试之攻破登录页面/index.html","0820b3583f97a498c753f89cf494df10"],["/2022/04/14/xray扫描器/index.html","f71e90b1d34169e1d24c0757f0818f3e"],["/2022/04/15/ctfshow反序列化/index.html","6fd6f2c43e762d96d173d50a5580729f"],["/2022/04/26/渗透测试实战/index.html","8fd28a072e7f39983f99f3a46119c55c"],["/2022/04/28/sqlmap教程/index.html","13b7669d1748d449415a6fc74b9cf8f7"],["/2022/04/30/认知文件上传/index.html","b5245d2eae7307d3e8bd09533812562f"],["/2022/05/03/nahamcon/index.html","97bded5ffdeed7d05f8148e49e23e9a3"],["/2022/05/15/awd/index.html","fcf73d033c1ca157edfd86f1484f4f96"],["/2022/05/22/DASCTF/index.html","bcf9c922a3475cb5e981dd3800dec1f6"],["/2022/05/27/520/index.html","71f37a0acaa20db9439dca43fcc68f8d"],["/2022/05/27/ISCC2022/index.html","63537d32c892475321a1ebb939703321"],["/2022/06/01/第五届世界智能大会/index.html","6dc96f2116102d603f38857845f71048"],["/2022/06/04/SEETF/index.html","7b62489346e35c2610b8d5e9281edf5a"],["/2022/06/04/bcactf/index.html","95f4ab7f55e2061d4bf966235a432092"],["/2022/06/05/BSidesSF CTF/index.html","4195ff37185771cd16b6b5c435bc6bc4"],["/2022/06/07/Docker部署web题目/index.html","14b0b0df389f93b0a00e363c85e0ab5f"],["/2022/06/09/利用oj搭建C语言考核/index.html","5296d0d153ed3516247ba34fbdf2ad77"],["/2022/06/13/限免题目/index.html","b84cdcfebbee97970e23c27368882747"],["/2022/06/14/钉钉rce/index.html","543822fac6ba3bcc853710744dffcadb"],["/2022/06/16/内部ctf/index.html","c786d7acb51417ebb5861eb467825275"],["/2022/06/25/攻防世界高手区(一)/index.html","ebe5750481c943bfaf7147d70175d7dd"],["/2022/07/01/两小时AK赛/index.html","a535fb2ca91f963cfa855be13eb86725"],["/2022/07/03/鹏城杯/index.html","85947f797536e4ae05e80addecab4f29"],["/2022/07/04/XXE/index.html","4551632f15c51b5a3a1d91d0b4b47fc5"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1d7fad269b2bb48b7e6e5cf73544ade9"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","1443de5c05733ddf6e0c6b718aa836cd"],["/2022/07/08/chinaz/index.html","222a935f8bc445edcdef28995c5dcb37"],["/2022/07/09/蓝帽杯初赛wp/index.html","bd50fbd95c71b4e65452254554fd056b"],["/2022/07/17/NepCTF/index.html","a83ce69ccb502a397c5a58b41defd7ca"],["/2022/07/19/ImaginaryCTF/index.html","450196c4c557e41887395a7af8e6f2a3"],["/2022/07/20/局域网攻击/index.html","fe592a24675f1c1066b0eec1b105d86d"],["/2022/07/22/BDSecCTF/index.html","4d50217ebb7b7da07bb4902c77133225"],["/2022/07/25/DiceCTF @ Hope/index.html","8aefa83020b66d3ac7c3191e78512367"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","c2b928feaba587fdf78da9e6bcf7f34a"],["/2022/07/31/TFCCTF/index.html","69929f2a64f42b8c1b4987b34a5eed46"],["/2022/08/03/NSSCTF/index.html","2b24a53d372c03581e0ba7a51df7ffb5"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","5e9d284023e31c17bcc863b82fc75772"],["/2022/08/12/T3N4CI0US CTF/index.html","77cb903ffa934dfc3b65e9ee4e369e86"],["/2022/08/14/SHELLCTF 2022/index.html","0be05ba48070a2ee596356a67d93fb5c"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","f75e9c60e2b65156d718042505f8be71"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","4c077063486d92ca61d1e1737d183791"],["/2022/09/16/柏鹭杯/index.html","d39a3633f4fe324c668d33351e4b68db"],["/2022/09/20/HUBUCTF 新生赛/index.html","dc442a693b2f3ed21dd41d25de51c36c"],["/2022/09/27/NewStarCTF/index.html","a7b4037f6c349fc577b122f5c1bb8266"],["/2022/09/27/bugku渗透1/index.html","b38918390acd59bfb492b0025a8ff717"],["/2022/09/29/tp6漏洞/index.html","db5f0a0a3b26fb0354d365af8f31341e"],["/2022/10/02/SWPU NSS新生赛/index.html","7e99901e88e97c5c85bfd513969ad3e2"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","0f0db14fcd7ca6e99afd5fda22cd333b"],["/2022/10/27/Moectf西电CTF新生赛/index.html","4c568db46373ae6f6ed2c8dbdbe79216"],["/2022/11/02/HNCTF/index.html","ad1f4081ee6c0e62a1c76abcc480917e"],["/2022/11/04/2022工控CTF/index.html","2686569c5ac40d6c5605519470783861"],["/2022/11/21/极客大挑战2022/index.html","8aa3b78dadc8adb11e47443906ab3540"],["/2022/12/05/TUCTF 2022/index.html","83e768a46aaa2305e927b4db2f0e5b39"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","deec21a9f3cbe501342e7ce38ac3a5e2"],["/2022/12/18/金盾2022/index.html","bc10bd398dc8dbfc6e5c44ea5b80825b"],["/2023/01/01/CATCTF/index.html","e0e4a8d10e4790d37eb8f097ac7d4c60"],["/2023/01/09/RW体验赛/index.html","04b95681309ab18fe49b135009c00abe"],["/2023/01/10/铁三/index.html","2f1d851f8ddd1bcdecb29806b66dd7d0"],["/2023/01/16/Ugra CTF Quals 2023/index.html","bae5d7a47e055ba9bc5483490dfab182"],["/2023/01/18/山石2022冬令营/index.html","5552e773a46a5da00eb18e6edaf98aeb"],["/2023/01/19/SICTF/index.html","b6620e0fa5c881148d68432d366eb564"],["/2023/02/04/2023西湖论剑/index.html","74861733ddb8a3bb1daf8f1bf749c8e6"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","4b75590af4358040c1de87f4f205972b"],["/2023/03/04/公安/index.html","76199136a692376fcb5096f8cf6fbb4c"],["/2023/03/07/mysql之udf提权/index.html","052835fcd310764925e9b90cd08e4f5d"],["/2023/03/07/红日靶场练习/index.html","0b323c350b4366101f253b86ae229dd9"],["/2023/03/27/NKCTF/index.html","78faa10e31ad98129815b5dd13b7f53f"],["/2023/03/31/楚慧杯/index.html","b220b13f20393eaf30aacce56036ef1b"],["/2023/04/23/HDCTF2023/index.html","da072cd6e1dd050d7d34da76ac3a3c6f"],["/2023/07/10/CyberSecurityRumble Quals/index.html","1c4c35ea47dbaa60edbeab6b264b9e16"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","1bc46fc0e65919841ba2b82813211182"],["/about/index.html","98996aaa9aff610796aa4d4ce9a35f93"],["/archives/2021/12/index.html","97977ed77fc502839d0dec4c7a156b1b"],["/archives/2021/index.html","ce345b9ec14b7a2d9e35a86cdd2cdf56"],["/archives/2022/01/index.html","d022f6cda766625736b4acc6ef3fb655"],["/archives/2022/02/index.html","561b570bf719b71c9bda957fae629d5b"],["/archives/2022/03/index.html","c694553abcc20a73c074ae3be8c3ec19"],["/archives/2022/04/index.html","e71f94b1a136a4ba2485390690b0b9e2"],["/archives/2022/05/index.html","adc4b433e7ead4e2ef8f8cfd531cc359"],["/archives/2022/06/index.html","ffe3a63e24f935f542f5f5f8ada11f7c"],["/archives/2022/07/index.html","05f4b7e0cdd5e5601cb25974d6bb6a60"],["/archives/2022/08/index.html","d9352f3ec4a8c49e77799e9564994b0c"],["/archives/2022/09/index.html","49b769409bc02c235d409c99d18d811a"],["/archives/2022/10/index.html","57f08b5b0b61578b197980ed31820d71"],["/archives/2022/11/index.html","3239bd132ac1340c2fd7ce1b3f161468"],["/archives/2022/12/index.html","e599414365a2ed65f30c61dc0965264c"],["/archives/2022/index.html","12d9de1610557d56f5b84f6f1233aa56"],["/archives/2023/01/index.html","496dc61cc3f293d4524686ad0881a380"],["/archives/2023/02/index.html","079aefa78afbba3b40eb2a3c8a6f6a1e"],["/archives/2023/03/index.html","f1005f46e3578080194e9cbfffbd2bd4"],["/archives/2023/04/index.html","2cdc52c42b31494c9ba57057f6e17c32"],["/archives/2023/07/index.html","847f38894bb0eb3e336f93d13ae851c4"],["/archives/2023/index.html","896ed75a4f4e7021836182c28aa3b711"],["/archives/index.html","222b8803facea20daf73ef8b763b6b9f"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","25cb105654214d57f46113afce430599"],["/categories/CTF/index.html","1bd2624c01dbe9840ab96d79e604e315"],["/categories/PHP伪协议/index.html","9ad57f2a7ad6573ee4ed90191a784a2e"],["/categories/RE/index.html","42c7eb54d27cc9bead1f7d39b596f05b"],["/categories/Web/index.html","e24a79a39aca8fc4ab2a2b298d54dab1"],["/categories/awd/index.html","ecff5726f9a32e4198f8f94f2c966e62"],["/categories/index.html","e8e1baaabafd07d42e8655b51ca8fe6e"],["/categories/misc/index.html","d821d112ea519a5bf4ba27f496ac71e1"],["/categories/sqlmap/index.html","78772800e7ef59f29f73b399249d51b2"],["/categories/博客相关问题类/index.html","8961aac1179fdec8ee78f8209990c33c"],["/categories/局域网攻击/index.html","9520def43ba8a725992ff7b86ab12965"],["/categories/心得/index.html","4408bc6e737ca7a8deff37f017e6bda9"],["/categories/流量分析/index.html","23b2ab22be677d2fa78aa4c5c69f10d1"],["/categories/渗透/index.html","4c546846c9149ed66788bdeaaf10db55"],["/categories/渗透测试/index.html","df5d0fa21b4081306101b9692cf0e1bf"],["/categories/渗透认知/index.html","734b0b54f5486c3b4e699f2df947cb5e"],["/categories/漏洞复现/index.html","4e68b710210ec3f2a17007969ac1686c"],["/categories/漏洞测试环境搭建/index.html","855029407988c8a9e6e19a54d3f58e14"],["/categories/赛后复盘/index.html","71a095067c6b3ff09a02eb0079fe4d0c"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","18ddcc5cddf01b0f11055a4c3b5f0321"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","f60ac76027a614fcab5b5ae768f5fe9f"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d99afd19db72f95e8d83132ddd4b77cc"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","8151d5812528c580e6f5454d70dff9e9"],["/page/10/index.html","9e679422ff2f49c5162b2578fc6537d0"],["/page/2/index.html","5a83459f2d016a419a0cf92e3ac6b7db"],["/page/3/index.html","60f62e0b7759b92309000933b122a425"],["/page/4/index.html","fc4e84ff0aa664b339d2204beac9bef1"],["/page/5/index.html","3e83bcb6e36cbab8b3173a1e9b3816e5"],["/page/6/index.html","d684bc8c34b987caf91b2329ac00b4e0"],["/page/7/index.html","739696c90ae51293e5d64f7d993d9340"],["/page/8/index.html","e10cd92a4bb9a2739a065ff9892dd17f"],["/page/9/index.html","306881312ec234aa4b975f54b64f5f53"],["/sw-register.js","dbc8aad017a7af3515d86c15c2bde120"],["/tags/C/index.html","5deebf1b04dfbf9288ad073729294f09"],["/tags/CTF/index.html","08b5507376772c91777519adc8b5669a"],["/tags/HTTP头部信息分析/index.html","fbb206f3432ba17c6235bea47337f17f"],["/tags/PHP伪协议/index.html","f09fe1c8d488cd8f426dbc5974d9fbff"],["/tags/PHP特性/index.html","df9e987b78dd20d8f16208e215bbd603"],["/tags/RE/index.html","3b36ee3a20fd671069cd7b6988cf656e"],["/tags/SQL/index.html","b8de4eca9d98238e5d10cf62de73514b"],["/tags/Web/index.html","b7c2bf88f4def31968fd90595b14fbdf"],["/tags/Web工具包/index.html","08476a66584753fb10df75c402babdc1"],["/tags/awd/index.html","f13196a45ef59fbce6af41f5320cf4d4"],["/tags/bugctf/index.html","573201ca0135dabaac2bf2a8d14a5cc8"],["/tags/ctfshow/index.html","7b0954a9a97999034b2e639d26a99700"],["/tags/index.html","1fb9be4d805551183dcd6933f52dad85"],["/tags/misc/index.html","ae5ef8b6d52e244c1be6877fd06226ce"],["/tags/next主题失效/index.html","e4cea3a5e795bab62a015923b3149246"],["/tags/sqlmap/index.html","c8dcae1ae29f79ecd830c19dc2e363ea"],["/tags/wp/index.html","acca6529e316abbe47d126e8952444f8"],["/tags/xss/index.html","8dda39f61a1ea31163943560a25a8c0e"],["/tags/xxe/index.html","c6f613d0357b1bed553a834fca2d1cf9"],["/tags/不蒜子不显示/index.html","ac57aa4f255625070be20bfd88caa919"],["/tags/博客/index.html","3d7a5766097da2b6a10c59290a36fd67"],["/tags/博客主题优化/index.html","c011eabab50b534d22950273e7268845"],["/tags/博客死循环框架问题/index.html","3db7c53e051e17769def1a1dcdd05abb"],["/tags/博客部分问题解决方法/index.html","88591d097ff85cc9d519aee56cbb7748"],["/tags/反序列化/index.html","aab362ba0f9cf6d291154964de29b80d"],["/tags/命令执行/index.html","400a93e6ee4e980f62d787cf2dffb892"],["/tags/局域网攻击/index.html","a95d5d700e2f10961f49d5721fb71ae6"],["/tags/常用指令/index.html","f6453c1119b5b9b9ec9f45cab85b0bea"],["/tags/心得/index.html","7335ae921a228fd22680f199259ced43"],["/tags/文件上传漏洞/index.html","1faaf0f8fe8117a7cf5fab4cccbacc0d"],["/tags/文件包含/index.html","ab2bddb05dde0fbbe1723b2157c73678"],["/tags/流量分析/index.html","dd030a3569a79b437706c3a5f9783aed"],["/tags/渗透/index.html","bcf790d3ed6bf4fa6d06d66fd1bbfee1"],["/tags/渗透测试/index.html","30412f9646245fa8e0a34c35a3b7ef51"],["/tags/漏洞复现/index.html","2d41c55cef8832fbd5a5a46ec447115c"],["/tags/留言板/index.html","e2c9e552bff903d30dba829d50eab91f"],["/tags/赛后复盘/index.html","045b959afecb5a1ed35e470b2d8cecc8"],["/tags/黑盒测试/index.html","06b009fc47691e349c43018347707572"]];
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
