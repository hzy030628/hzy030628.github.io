/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/index.html","4eeb2ee8f58ce691fbc5fd83ebd25d8e"],["/2022/01/01/ctf之reverse/index.html","64acb90e0bb9596ace927055e4e5bece"],["/2022/01/02/Python程序运行常见错误总结/index.html","3207f1cad4effb0461dd57a3da7fd171"],["/2022/01/08/ctf之web/index.html","d8875829a20adf685e8039f56cd73028"],["/2022/01/11/Web刷题/index.html","6cbfca0f66e6ba99d629ac7d9529dd8d"],["/2022/01/11/reverse刷题/index.html","4268bc496d587d399f5bffcecacf9068"],["/2022/01/11/博客制作遇到的问题/index.html","1ad61e6c693cd18b5b2593a65e9818d2"],["/2022/01/15/C/index.html","4c8d1c0581c47877a6caf64dbd272d63"],["/2022/01/18/valine/index.html","feeb85ec16444f1a398ef05c2bdfaa95"],["/2022/01/18/新版next置换/index.html","1325dd817fd2c7b7ffed61ee7c05da99"],["/2022/01/19/不蒜子相关问题/index.html","b33f1802b09a9c413973c5ed8f8f358d"],["/2022/01/19/框架问题/index.html","b5e079acbd620013befde80a9b8176b2"],["/2022/01/23/misc部分解题软件命令记录/index.html","f574ace5d9b95be6dc29a734121d767a"],["/2022/01/25/DVWA下载、安装、使用的教程/index.html","f4b719ecd52249ffddf080f55435c747"],["/2022/02/01/684/index.html","aaf19ce79aa602f6c6854e721bac3086"],["/2022/02/03/留言板/index.html","94846f75fb2a3c48be90984291867c1d"],["/2022/02/04/SQL简单注入/index.html","7d3e2e582224992968b708f51d9a2ca1"],["/2022/02/05/最全的HTTP头部信息分析/index.html","dccd37eb828311d8e2ae4aee612578c6"],["/2022/02/08/ctfshow文件上传/index.html","a5258e1ca8c4f7c641bb2272b8fd8ad9"],["/2022/02/08/常见密码类型/index.html","c1463ed0ad20d6b405901b90fe1bdad6"],["/2022/02/12/VNCTF2022WP/index.html","947d39c24c2ecb36254ca606df6b803a"],["/2022/02/16/rce/index.html","37a8f4839bd5cc966eb33c679f09c7c5"],["/2022/02/18/hgame2022复现/index.html","ff3b071d4e8d2fc58b4715a30a059e98"],["/2022/02/20/ctfshowPHP特性/index.html","88f52b57d953471925e0d2556453c29f"],["/2022/02/25/php伪协议/index.html","dc4705c8f3a4eb1baf66d741fdb9ee53"],["/2022/02/26/ctfshow文件包含78-117/index.html","9a668bbd08cdf54020eb5dc4a9b3d4a1"],["/2022/02/26/ctfshow文件包含78-88/index.html","fc77551614b8241ffc05cc4af33c507b"],["/2022/03/02/Clash漏洞/index.html","34c1043cace27a906e594004b2e6c6f6"],["/2022/03/11/流量分析之题型解析/index.html","bc4e9eada396526c9e1a71101adb7878"],["/2022/03/15/ctfshow命令执行/index.html","854c765b24638e312cc73771a1d9a563"],["/2022/03/22/CGCTF/index.html","0621fc7b67877a44cf874f314d87c53f"],["/2022/03/24/ctfshowxss/index.html","352fd805617637d97db6dc32f7b11aae"],["/2022/04/04/黑盒测试/index.html","549b27e27a6f124d9a8c735b87c946d2"],["/2022/04/11/nmap/index.html","5f6eef687c25faeffb03e6b8507e6899"],["/2022/04/12/渗透流程简要记录/index.html","5515fd2b805e030986b2eb3df201cae6"],["/2022/04/12/渗透测试之攻破登录页面/index.html","080d3d8077649866b326a3fd15ac45bc"],["/2022/04/14/xray扫描器/index.html","25b2d7bbf7cac42e28c457696090bc16"],["/2022/04/15/ctfshow反序列化/index.html","96105f84d6861838f7119150a9772bfd"],["/2022/04/26/渗透测试实战/index.html","a28fd13cee15b4a7aafd2b8e4ae383a1"],["/2022/04/26/网刃杯/index.html","c8633db91e1c632c63083470432625a6"],["/2022/04/28/sqlmap教程/index.html","dcc067ef074d4fb5941936d6e53bbeb1"],["/2022/04/30/认知文件上传/index.html","fbcde779008615aafc4080b194cb0786"],["/2022/04/30/靶场上传练习/index.html","d14b94332a6deb7b079ca120b328da92"],["/2022/05/03/nahamcon/index.html","a7fa55c75b00b33336aa256db9437296"],["/2022/05/15/awd/index.html","48b781ede3fae7245e40e51b0e3b35fb"],["/2022/05/22/DASCTF/index.html","56c306f5bf828594191eb3e90f493453"],["/2022/05/27/520/index.html","c061467f1f4d3a3442c063996b83cb2b"],["/2022/05/27/ISCC2022/index.html","83d5e7df411531af3ad0ed6cbfc263a2"],["/2022/06/01/第五届世界智能大会/index.html","514c22c9868805ba55636edd380b5b3d"],["/2022/06/04/SEETF/index.html","c9f969002db11e9a18fc5dca24f55b86"],["/2022/06/04/bcactf/index.html","a590c3b355bdcb407a260f9b86f861ec"],["/2022/06/05/BSidesSF CTF/index.html","90a326cb07a73ea64458a745a324c1e1"],["/2022/06/07/Docker部署web题目/index.html","fb4416eabf8f2eb16fd0e2d0d0877feb"],["/2022/06/09/利用oj搭建C语言考核/index.html","93de768dd9ad84e64fbc25a59e4abcbc"],["/2022/06/09/论网站502/index.html","f5f68b8a604e6c6a3b46d65c64ad7405"],["/2022/06/13/限免题目/index.html","e6dd4b8ebaad1f866a6dab7541d97b22"],["/2022/06/14/钉钉rce/index.html","3b951b7cbe450503dcc03a322d3f5e65"],["/2022/06/16/内部ctf/index.html","174fb0e784df23ec430a56473fef739b"],["/2022/06/25/攻防世界高手区(一)/index.html","9fd8d562a5bfee1d6e3e2e0ad5f86339"],["/2022/07/01/两小时AK赛/index.html","f3546e1729d553bfc96656ca7de1e0dd"],["/2022/07/03/鹏城杯/index.html","722b9fca7495a6d1e248975e83558eca"],["/2022/07/04/XXE/index.html","345f77671ede9f25a52d3b8eae12b80d"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","03e1d6475cd5a296a67f067d5fd5e7a1"],["/2022/07/08/chinaz/index.html","ada805d2d80730f2c94b9c8460fba81e"],["/2022/07/09/蓝帽杯初赛wp/index.html","4cfaedf7d8728ef6defbdc501552f304"],["/2022/07/17/NepCTF/index.html","478325b495aba70c05c0164e60f04122"],["/2022/07/19/ImaginaryCTF/index.html","969edf6c5a3aeabf7a7777e9421a8803"],["/2022/07/20/局域网攻击/index.html","add6acc8c9b207aaa4689b2b00e6cf51"],["/2022/07/22/BDSecCTF/index.html","c49e526c90ba18d3ffab107b4d77ef28"],["/2022/07/25/DiceCTF @ Hope/index.html","b89c02907e527e65c9ab4bd0c3b1acd2"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","57b6aa7eea82da1d98ed7cfd791db91f"],["/2022/07/31/TFCCTF/index.html","fcc8e24bc7f0574aeec481b54ad12a58"],["/2022/08/03/NSSCTF/index.html","efc701dc7aeea3176403e656ee551351"],["/2022/08/12/T3N4CI0US CTF/index.html","eb3ed4d5de4251ce9f5e3ac65dd39e15"],["/2022/08/14/SHELLCTF 2022/index.html","3b4aecd31a0d2436354eda5214a63c08"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","087a7bb15f12cdeee483d8cb56f7bd7c"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","d4cd59a7b285ab53237c77242240211d"],["/2022/09/16/柏鹭杯/index.html","05943df785515e25a7604f221737da2a"],["/2022/09/20/HUBUCTF 新生赛/index.html","182a981360105e69d9d6bbed8d88606b"],["/2022/09/27/NewStarCTF/index.html","f461aed4633e17e03b7420b1277eedf3"],["/2022/09/27/bugku渗透1/index.html","3f4bc4705226b2809130c86ef7e4ff1b"],["/2022/09/29/tp6漏洞/index.html","bfe6764e55589a036d9d516f020cd3dd"],["/2022/10/02/SWPU NSS新生赛/index.html","a3e1c11a1a15efcadd82f5e11bcf8ea0"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","0c51d059db370590dac4528731dd3e41"],["/2022/10/27/Moectf西电CTF新生赛/index.html","bcbd1e9b3f64508a3ad447fe5ab22fb9"],["/2022/11/02/HNCTF/index.html","a7c0ba8ccf36e7708db2d6658c5f19a6"],["/2022/11/04/2022工控CTF/index.html","d3f3d8a0a8200f082127bf96a726acfd"],["/2022/11/21/极客大挑战2022/index.html","80a7873625734b2877aad5a9e773d2e6"],["/2022/11/27/实验室考核题目wp/index.html","b7d44b75b1557f172a67b5d23b4ecc30"],["/2022/12/05/TUCTF 2022/index.html","a7e7d0c365c4d0851b04d5b19e1e5494"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","48f645ec2a05bdfd5dce4aadb2836818"],["/2022/12/18/金盾2022/index.html","5f06f0962bf46748494edffd5d2c49fc"],["/2023/01/01/CATCTF/index.html","5d8b9ba62d400c0f769b0008ef979539"],["/2023/01/09/RW体验赛/index.html","c6d12c876eb12a29b6379f8b7f7d1b09"],["/2023/01/10/铁三/index.html","98029f812dd9da5cf87ca58d313bd286"],["/2023/01/16/Ugra CTF Quals 2023/index.html","c44d484fd75423ab188975b5ab7f450b"],["/2023/01/18/山石2022冬令营/index.html","ecd3b7f770e155f7a001d005debcd711"],["/2023/01/19/SICTF/index.html","0ec0437676ebefcb02613729ff47e4ea"],["/2023/02/04/2023西湖论剑/index.html","2c7d4388b6bdfb1b288403a783116ff4"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","ae53aeaac284933e83beebdb7a544587"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","aeae80d2100f6f1d929065d660b2d511"],["/about/index.html","808d2a375dea9509190b0dc7c48915be"],["/archives/2021/12/index.html","2394ffd9f6807580963a018accccd305"],["/archives/2021/index.html","6a22bf92fb7f0560d1f6a4383ab5deaa"],["/archives/2022/01/index.html","06617c2b6f395733c28ad52973ab724f"],["/archives/2022/02/index.html","abf05a4f4f52a8efd7bdbc548001c9c2"],["/archives/2022/03/index.html","59d4996336c547ef2e27ea660e095af7"],["/archives/2022/04/index.html","8be2c82d36788df514b967f40a8712c3"],["/archives/2022/05/index.html","4467861c71270db6769272d946d06969"],["/archives/2022/06/index.html","830e38418ea95c7238d7a41244161551"],["/archives/2022/07/index.html","a46b32dfd4755fc19e6f8aebf79f81b9"],["/archives/2022/08/index.html","98c4558b389d2866ebf6ade4fb0033ed"],["/archives/2022/09/index.html","a29af23228e2b1e941cd406fe09e9f18"],["/archives/2022/10/index.html","d01f10597301ab294c05647fe93d5333"],["/archives/2022/11/index.html","458eca7b1923a53e9b7e7eb674db6801"],["/archives/2022/12/index.html","093b98dd3ee1c4423f2a201de9673804"],["/archives/2022/index.html","22a6cbf50103143cb777dfa0b7561ea5"],["/archives/2023/01/index.html","c4ec410b96530736547bc3b6cfecdd77"],["/archives/2023/02/index.html","61f53d7466cfddba9e6f421f67a130ab"],["/archives/2023/index.html","fd4c1031c27e213cb3b53eb11e8d23e8"],["/archives/index.html","bfff89d7e4e6f802d1c73dc0381bc4f7"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","14684d2844f7c5bc0f1a50df2b899af5"],["/categories/CTF/index.html","016f33e5753a7abb0ec618f4380649c6"],["/categories/PHP伪协议/index.html","7568ca314e642cac00b27ff839673f17"],["/categories/Python/index.html","3a65c652a3b46d50b9c5e1bacd6b2c58"],["/categories/RE/index.html","3f2a56eba42ca877b3f62886d72cbd5a"],["/categories/Web/index.html","bc0f0433184ca6783cc683876b8e816d"],["/categories/awd/index.html","800dd2e97fdec09896637d0db1485280"],["/categories/index.html","17c2d41b9febdaa2ab7bfd03cf8f7869"],["/categories/misc/index.html","b5693e35551f9545802cf319bd08cb70"],["/categories/sqlmap/index.html","42e278119c57c9ac2168afd926714d31"],["/categories/博客相关问题类/index.html","6e96b9931bcf094c3a5596a42ecec8d1"],["/categories/局域网攻击/index.html","49fc95629893e3ca946b5eb709cbbba8"],["/categories/心得/index.html","7d08a960dd23024ad489b16c23224fcd"],["/categories/流量分析/index.html","7b1b372e93530247878d0e52b6376cea"],["/categories/渗透/index.html","814138c232ec880f4b67130e00a2ca3d"],["/categories/渗透测试/index.html","ef01e1161906287dff86dcf7de7650f5"],["/categories/渗透认知/index.html","ff4acca8104915a167386225bcc2ce89"],["/categories/漏洞复现/index.html","90752bb6589e2fc4fcf552fee1fbe7d7"],["/categories/漏洞测试环境搭建/index.html","1760155ff55ecc28a56d8f9c6f8d878d"],["/categories/赛后复盘/index.html","1cf79a8b79e854d3d37c40b879c01837"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","f2d7e744dcf68321368989b9a0e82ef9"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b9973e0df5739d6d4d6b3c6277a8f6c8"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","66ab9dfafcf0c4b9e2857b59f63f9789"],["/guestbook/index/E587BBE68E8C_2x.png","a44a04ce6494d4c7e6b1b80426d2e8d9"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","469efd91517a3598d243df9663889658"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5e14dcd28004bd83f391c2f98788bdf4"],["/page/10/index.html","8876e8d00748c521895c77951f04ee6e"],["/page/2/index.html","ab89154dca695233af3c0db3f147d2f0"],["/page/3/index.html","c80ec4e375d031615640e48c14aab9c5"],["/page/4/index.html","61a817aef5e39abe4c7ad5fe7ec18199"],["/page/5/index.html","4522cb23da3899f289b51ea7a474122c"],["/page/6/index.html","0053e278b9b58c523720e6eba7899833"],["/page/7/index.html","90dcb456ea56047257ddf5ee8dce393a"],["/page/8/index.html","bb10c8249a36095547d958da4ecb558a"],["/page/9/index.html","25a3a6fe9c1708da431dd60352095325"],["/sw-register.js","8952d2b12bf13ebf11266b755c850e1d"],["/tags/C/index.html","b8ca3d81f4b8642a298a1df820a39444"],["/tags/CTF/index.html","e12dfa28248772bdd1fde4908c1305e5"],["/tags/CTF刷题平台推荐/index.html","d6d243b1a99b751fa13d6717759d6790"],["/tags/HTTP头部信息分析/index.html","84b725109fc95f0db5face11e02c174a"],["/tags/PHP伪协议/index.html","e389d262aa756dda899a89cf92f3dc82"],["/tags/PHP特性/index.html","d38d48230ddc75565be28f9f968bcc88"],["/tags/Python/index.html","f4a972faedc485f9d8f4fc2862c81413"],["/tags/RCE/index.html","0d4e203fb8bbbeec2e3c031e83199674"],["/tags/RE/index.html","ca95352fd56c71646d91a78554bde66d"],["/tags/SQL/index.html","d6200b3af4767fdc29dbc57f94ebaa7b"],["/tags/Web/index.html","51c4644850e112d4711643ec6a4c4827"],["/tags/Web工具包/index.html","8c35333d9d65b18c1db8941c3d35964e"],["/tags/awd/index.html","2b9a267c1cbed4645b1d2e4a380271e9"],["/tags/bugctf/index.html","e0f47824de80979360878a5f41f27bf5"],["/tags/ctfshow/index.html","77bc39690e8bd8340a9cdd5c0613bca9"],["/tags/index.html","c70828f3891abe9f9aafdf23f237bbbc"],["/tags/misc/index.html","7fc7885e1dc35a7a1191f90105009f0b"],["/tags/next主题失效/index.html","8d9e4c240e172965b597e59654197d1a"],["/tags/sqlmap/index.html","805634cb6bc7411955a4a8d3b23475e5"],["/tags/wp/index.html","cfa52864ed26c2acb307015b51d76cee"],["/tags/xss/index.html","3c9a719b44c86b6592dae000cefd897f"],["/tags/xxe/index.html","43c4e616d77073b8ca3cfb81b6b13dec"],["/tags/不蒜子不显示/index.html","ebc73a2de3b2e04dbd80eb2d939d176e"],["/tags/博客/index.html","ad911cf17e6133f1f92ed91b2e134788"],["/tags/博客主题优化/index.html","2e4dc3108eb47d0d4997aff2ab2ed9b7"],["/tags/博客死循环框架问题/index.html","8892f01e487c5d2821383440c1a04043"],["/tags/博客部分问题解决方法/index.html","ff739f019fcebb18355219decb8801ee"],["/tags/反序列化/index.html","16fc84af2dac88705e4582ccf1fcec08"],["/tags/命令执行/index.html","fe2d856251907314f4b947859b57836b"],["/tags/局域网攻击/index.html","db00045958323abe6fa2ce5b2237e553"],["/tags/常用指令/index.html","064ce1574f47a985c2f702bbdb87b2bb"],["/tags/心得/index.html","4406922265574910eb2858bce7ec48a4"],["/tags/文件上传漏洞/index.html","73acc3eaf57af86eb70f7fcfa17370cd"],["/tags/文件包含/index.html","ffefd7a43ba8ec728835101d0895e75f"],["/tags/流量分析/index.html","e400215002604b679f98df5f7f88e37d"],["/tags/渗透/index.html","e49d384de43cb93f6826d176ddc165bc"],["/tags/渗透测试/index.html","4e0b82becb0a666b5a366ec966bea7a3"],["/tags/漏洞复现/index.html","7ad9d4c8c17ec187e1eb20b8a60595d2"],["/tags/留言板/index.html","96385875e11918178fd9d33d75be5ec3"],["/tags/评论系统/index.html","7000c9aa846b57358765f34647143d3f"],["/tags/赛后复盘/index.html","3fa51effd327abdd23d78869111e15fa"],["/tags/黑盒测试/index.html","af4cb4d8621681c91e72884169d1afd7"]];
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
