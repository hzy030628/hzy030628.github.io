/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","4eea0cea7a9b2b57c07565034fbfac68"],["/2022/01/02/Python程序运行常见错误总结/index.html","7216a7508db81cb79e418e93c527a5c8"],["/2022/01/08/ctf之web/index.html","99698da68450ae113543ac225b827a3b"],["/2022/01/11/博客制作遇到的问题/index.html","5bc5a6bf9c154b0ca4b2ca4b07d3dccd"],["/2022/01/15/C/index.html","c117e6c7dcd42b3fb7c57da33cbe58a1"],["/2022/01/18/新版next置换/index.html","6555e74a7bc6b9314b1bd2d0a5e5b662"],["/2022/01/19/不蒜子相关问题/index.html","0f8682e6bb08fca983ceb2400685765c"],["/2022/01/19/框架问题/index.html","39fd1f259e249cd29980bb74858a4292"],["/2022/01/20/ctf之reverse/index.html","3865d025d38ff5e71c3680b595f684e9"],["/2022/01/23/misc部分解题软件命令记录/index.html","4ccfe49c7a210697d54fb654f96f49ad"],["/2022/02/01/684/index.html","6d6016fa9d74a109c0f589d9cf3332ec"],["/2022/02/03/留言板/index.html","ff2e6862fc98f003b313c2a2c51a3816"],["/2022/02/04/SQL简单注入/index.html","f71ecda5c76e4910cc82cb339dec2622"],["/2022/02/05/最全的HTTP头部信息分析/index.html","828ecfa825e6d82363bc8a03c2bbf836"],["/2022/02/08/ctfshow文件上传/index.html","53db47fd392376376a233b7ff890e419"],["/2022/02/08/常见密码类型/index.html","363ce4439adb6eb414ffa203d29364e3"],["/2022/02/12/VNCTF2022WP/index.html","aabac68f85f086db6ad0b57ccc0008d6"],["/2022/02/16/rce/index.html","1ce0113ec4b262ad10fd508dbc8fb147"],["/2022/02/20/ctfshowPHP特性/index.html","692552076b4386ce609321a1fa70e4dc"],["/2022/02/25/php伪协议/index.html","ef7b0e55f06afefe9a5408c90ddf5543"],["/2022/02/26/ctfshow文件包含78-117/index.html","09cedfe399c2cac44042770e287107b1"],["/2022/03/02/Clash漏洞/index.html","3a7b440cbd660965b78fec68e1b8121b"],["/2022/03/11/流量分析之题型解析/index.html","7400ceb4c61fa36be48ee67f6b311d94"],["/2022/03/15/ctfshow命令执行/index.html","c67a2bc402660608fa19639701934a1e"],["/2022/03/22/CGCTF/index.html","e98419143a6ca730d3c277256dfd1d39"],["/2022/03/24/ctfshowxss/index.html","49b7715d2a5b47a946301291a0c87d6e"],["/2022/04/04/黑盒测试/index.html","f82b572060447a09915bbe9c474467d2"],["/2022/04/11/nmap/index.html","74946adf3bac2c7f08c89208138b9878"],["/2022/04/12/渗透流程简要记录/index.html","5b6a7c36c3832c35baf4fda2b534a98b"],["/2022/04/12/渗透测试之攻破登录页面/index.html","68301432741204796c3924eedb919366"],["/2022/04/14/xray扫描器/index.html","91bfd08fa4c2e101858f0efd986ab933"],["/2022/04/15/ctfshow反序列化/index.html","c0bc0e8e427b399d53838e05e1dd3538"],["/2022/04/26/渗透测试实战/index.html","50f47d63b3f1fef2226d7f853a0004e8"],["/2022/04/26/网刃杯/index.html","746286f722e5528cd8e9917675682e47"],["/2022/04/28/sqlmap教程/index.html","9845a29f245cb54e3c1cc14efb0aa98b"],["/2022/04/30/认知文件上传/index.html","438187191c078300498e3a62a8e81bd9"],["/2022/05/03/nahamcon/index.html","f16ea6a5140c63d3dd1e745b36d05876"],["/2022/05/15/awd/index.html","9f0ad860e56d12ea840a46372baa0448"],["/2022/05/22/DASCTF/index.html","3d2b125bffa777a9c346db572e3dc324"],["/2022/05/27/520/index.html","e8d11ab93abe7be66be766cac31ff1db"],["/2022/05/27/ISCC2022/index.html","aa80d8075dd6c557e36275e5419aaa1e"],["/2022/06/01/第五届世界智能大会/index.html","1e6ed9e7d0bd87b550db8638acccb30f"],["/2022/06/04/SEETF/index.html","63be20ff8ffa3216e018d5e5cfc64534"],["/2022/06/04/bcactf/index.html","28727560f5c7f71228065906d3cd0718"],["/2022/06/05/BSidesSF CTF/index.html","1409d3e42ec330e671bfda235086dd89"],["/2022/06/07/Docker部署web题目/index.html","e71d22445abc40d4cb79e0e59ee3c15e"],["/2022/06/09/利用oj搭建C语言考核/index.html","a8cc350928c622ffca1732b499151740"],["/2022/06/09/论网站502/index.html","15c915d6a9c3bcfaf997cd51d6cccd38"],["/2022/06/13/限免题目/index.html","e7b2ec7cbab0a2d3ee0062153923a5cb"],["/2022/06/14/钉钉rce/index.html","93e0e0bb97e470ddced028c3c1dd23bc"],["/2022/06/16/内部ctf/index.html","7715433b77c2a9354c0c9063cb88f4e4"],["/2022/06/25/攻防世界高手区(一)/index.html","d0899336a63ffff902911c343c2a1be7"],["/2022/07/01/两小时AK赛/index.html","94e362627931a1cfc5666b560854a157"],["/2022/07/03/鹏城杯/index.html","46621cfdc4f8319b3caea83a156a551b"],["/2022/07/04/XXE/index.html","14d3f440e248c1c0155b491c88d0d3c0"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","ffd8a445707b6c36140ac359b6f8a26c"],["/2022/07/08/chinaz/index.html","0c6f427e0d26d91d17cd2f45baee8842"],["/2022/07/09/蓝帽杯初赛wp/index.html","035fb2aaedd13f6b330deb8112a47dd9"],["/2022/07/17/NepCTF/index.html","c848bfaec1f80353f17a569e4d87c29b"],["/2022/07/19/ImaginaryCTF/index.html","256a30d7906f7e7552d4435cfcecc924"],["/2022/07/20/局域网攻击/index.html","c89b0c8f249ebe66638dbf1da5a899be"],["/2022/07/22/BDSecCTF/index.html","67a3f7d01146039ddb787835bb945345"],["/2022/07/25/DiceCTF @ Hope/index.html","d81bd9c60294d362be50627e1fdc5f28"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","33b578896135d8f49e84dbd6457f1f80"],["/2022/07/31/TFCCTF/index.html","c60103ee78abd31dbaef4809d4eb533e"],["/2022/08/03/NSSCTF/index.html","5297fdf0d9fd10085ad790e8b04d59ea"],["/2022/08/12/T3N4CI0US CTF/index.html","3e1baaecb9009a892c202f7dae2d290e"],["/2022/08/14/SHELLCTF 2022/index.html","2e122c5e4be40c6dc39b157ce5b99b64"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7dfff273cc16fc39cf2bb160002acf60"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","cceb4f2a9527f535c19dc1c90922010b"],["/2022/09/16/柏鹭杯/index.html","945ebba46f1806f016feb0e92272920c"],["/2022/09/20/HUBUCTF 新生赛/index.html","fa78d5aea14b41dc2ad70c9a996915bc"],["/2022/09/27/NewStarCTF/index.html","77dd9e024578b1703dbb333a05359c7b"],["/2022/09/27/bugku渗透1/index.html","46f88c12092fdce9f1325a3130ba8792"],["/2022/09/29/tp6漏洞/index.html","ae6b0a00a3975fda1074b3656cbd4955"],["/2022/10/02/SWPU NSS新生赛/index.html","74073212a5d0a9d0efc5c9b81f4b8a5d"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","02b902f63ebef5bded475fc9ba1b1cfa"],["/2022/10/27/Moectf西电CTF新生赛/index.html","389082ed7c7fc2a7b1ff253ab8659f38"],["/2022/11/02/HNCTF/index.html","6c692cb39bf402beab7fba0643ba018d"],["/2022/11/04/2022工控CTF/index.html","ac89721d9d0efa7812da75639117e35c"],["/2022/11/21/极客大挑战2022/index.html","7db1a44863eceaddd2e5ecabb1bc98fe"],["/2022/12/05/TUCTF 2022/index.html","1e200fccc148158ae362c9ac0c56b202"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","8b1c9b7d26aa4908b9ac7a2fd869641d"],["/2022/12/18/金盾2022/index.html","d422391b126feb020fdf2cd5c6c2ad33"],["/2023/01/01/CATCTF/index.html","c361f49e8043b6e64575835da0065198"],["/2023/01/09/RW体验赛/index.html","53f99ae03b8ca0fa9508b03a32211e5d"],["/2023/01/10/铁三/index.html","e9088860b2988f5f31b4f361c4795c0f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","1af312347da6bb6365350fc7b9afe893"],["/2023/01/18/山石2022冬令营/index.html","b9e41d24b2b3ce2db3434292dc764fae"],["/2023/01/19/SICTF/index.html","ba751d3582592d48cd410dfc6a2486ab"],["/2023/02/04/2023西湖论剑/index.html","6130b2edfae77a46fe8e80f48ca9035f"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","37cbb51be02ce5a8bcddb9116eceaa8c"],["/2023/03/04/公安/index.html","7ec363b95413781705e553efa6c050f0"],["/2023/03/07/mysql之udf提权/index.html","712864afda3e0519242c5fcf08606841"],["/2023/03/07/红日靶场练习/index.html","392503aba22e6058ab3585df669aaab4"],["/2023/03/27/NKCTF/index.html","2444cd60e8cb49ea10a2960a0c65233d"],["/2023/03/31/楚慧杯/index.html","5294996d9ffaa277826b4b4288259bfd"],["/2023/04/23/HDCTF2023/index.html","004d590299f63929ca36d21a9f9a1e1c"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","973e5287eba432a4e2f06fff74e1073a"],["/about/index.html","802b2e88ec3273257cc130d2a3a8e16a"],["/archives/2021/12/index.html","0b8c6a0ac3e2cc530a81315fbb9bdcde"],["/archives/2021/index.html","b6f18ccebe5c942fda29bc8a8aa997c5"],["/archives/2022/01/index.html","46184fdda6338a30d7d314d9c8974a10"],["/archives/2022/02/index.html","59e7f988503454342678723b902f6dee"],["/archives/2022/03/index.html","cb6dbde7d5ec422b697e72ab1f8779ce"],["/archives/2022/04/index.html","5a8cfd230074f897fcd9264da4c67132"],["/archives/2022/05/index.html","3476035a3f5fa769eaffe7f40195d8ba"],["/archives/2022/06/index.html","c3aa94462a5fdd098f8121adf1c32896"],["/archives/2022/07/index.html","3d1e3c0ab5d4b032841841a36f42fe38"],["/archives/2022/08/index.html","a1e76d5bbe95fc954f22fe4b449ddb66"],["/archives/2022/09/index.html","c831e787faca031bd4cfb391a4ce0b40"],["/archives/2022/10/index.html","1a8cab061c2c944217322d4fb2090c48"],["/archives/2022/11/index.html","cba949709398aad77bb002ce6329a221"],["/archives/2022/12/index.html","44319394e7933da29b550e0ad7971884"],["/archives/2022/index.html","12434a7e151dad51be058353c1619878"],["/archives/2023/01/index.html","ef17e9a3e4cb6926b172c6ecd001fcf4"],["/archives/2023/02/index.html","267ffefce72eea06f3921bc97d04d6c3"],["/archives/2023/03/index.html","249f3f8b74254ea499897940221cd7c2"],["/archives/2023/04/index.html","39fcea56af7696ad62fc50b89a3c6b08"],["/archives/2023/index.html","95778fe078f4bff174d79edb7d6155c6"],["/archives/index.html","c910aa05bc2811446ca5695d15694bcd"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","e8e6ae01444e936676f6da81ed0927c3"],["/categories/CTF/index.html","e64c1db93f9f110a7182187cf43632fe"],["/categories/PHP伪协议/index.html","0b143d4615bd3b9b97a899e6b586c339"],["/categories/Python/index.html","ba09749c4c538f94fbe342e0db9a78a2"],["/categories/RE/index.html","690122169bbd26e58d68e05e0beebcca"],["/categories/Web/index.html","80667b6cf468d0a6c767e2a2e29c2482"],["/categories/awd/index.html","39261e84e531a7c6209d9e11e3744477"],["/categories/index.html","53d892a0812dee39faa55c11eb0182d4"],["/categories/misc/index.html","39c6bbc07a83559744325b30bb835505"],["/categories/sqlmap/index.html","56e25b641dde70811bd8ed1e295a6d0e"],["/categories/博客相关问题类/index.html","19ab6c900024ce6da75bd8d21ed86aae"],["/categories/局域网攻击/index.html","aaf3cf25969c67464f4ff03bb4726e9d"],["/categories/心得/index.html","fc4b72f1d046d1d18de574e189dbb3cf"],["/categories/流量分析/index.html","580facd5d93f07af64f002944199ef3c"],["/categories/渗透/index.html","a45ccbc14fbd12758cf7fe6e64100b27"],["/categories/渗透测试/index.html","4d16d8ca37aaf3881e69576cdf0da81a"],["/categories/渗透认知/index.html","57583b264d6db2d20ba9564f9cd2d2a8"],["/categories/漏洞复现/index.html","d310612b3fbada1a9a8bbd87f27c7d44"],["/categories/漏洞测试环境搭建/index.html","fb88959a92b68d8f13a352b8a278f05b"],["/categories/赛后复盘/index.html","ae1b7a350d85895e477a0c90b29ed6bf"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","44b9340b54e5ac73f6c18f0b7bee79a8"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","bd614afaabc8dd3bac0c0dde00372799"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","1602e50bece76c4a9a1ec26286cd2a9a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","968798b50f392b9e17e3c793ef6c2069"],["/page/10/index.html","694760dfa0749f7c441dba9d88eaa3b2"],["/page/2/index.html","8e19b29d8adee9bb4e8dfb2f78bae8e3"],["/page/3/index.html","7bf1e39ffecd37839f293254de9b74ae"],["/page/4/index.html","3fc8251f3a977773bade6f3a10d6ceb0"],["/page/5/index.html","b3df8e37431e62707f6a997f6e7f3b98"],["/page/6/index.html","1aff62afaa8e5a6fd69ec17cf5c413f0"],["/page/7/index.html","43c14cf14a8e2d83f3268c84867a495a"],["/page/8/index.html","340d20c2132e0036bad450e84b460fa0"],["/page/9/index.html","81ecbc9508749dd432cff8a2c4e5326e"],["/sw-register.js","e03d915489cf4d58f491f3192fc7d018"],["/tags/C/index.html","6512452329210fd3efbf1434502c4e10"],["/tags/CTF/index.html","d6c73af924b1008258d2fb75a5d6cfce"],["/tags/HTTP头部信息分析/index.html","187fcd4e55d3f05d9a2f891e232cce7b"],["/tags/PHP伪协议/index.html","8b3c5520fcd9c852e84eea13ee8c9046"],["/tags/PHP特性/index.html","b3e707c34e6e8368a85d7dd8eb47e602"],["/tags/Python/index.html","b9e7c15d2b400165ee2ccd68c7c461d4"],["/tags/RCE/index.html","8b9748c71c4c5007261d6fe080d3cb80"],["/tags/RE/index.html","f58893026b3e85bff99a01f1544e63f4"],["/tags/SQL/index.html","92627fe8220fde022e41d71363424a00"],["/tags/Web/index.html","d64880f14db32fa7ceae2542b869dded"],["/tags/Web工具包/index.html","fd5df3abdb5fd9ebd6ace5069f05b5c7"],["/tags/awd/index.html","f590cf8b14570ca65425c03bba7ae3c3"],["/tags/bugctf/index.html","74be072fc0eaad9bf39f1c9c230676ee"],["/tags/ctfshow/index.html","5538deb3f905d7b13ebd5538f5f90515"],["/tags/index.html","a332781fd2737acf2fd047883158675c"],["/tags/misc/index.html","e41d983b2faff6466e4ed26578e6617c"],["/tags/next主题失效/index.html","0d6d5670759fa84f73915be3df6c1536"],["/tags/sqlmap/index.html","b16688549f50860bebd5781c1ea7ef75"],["/tags/wp/index.html","0ac83907634de57368b51d39473518f3"],["/tags/xss/index.html","189287ff6899ce3695c76202f55c9d14"],["/tags/xxe/index.html","28b4f358123afc2109cb20c0e93f0cff"],["/tags/不蒜子不显示/index.html","c9607286969249d7be74f860c0392dfd"],["/tags/博客/index.html","9af98abd7d7e1cd49b5a2f411021760e"],["/tags/博客主题优化/index.html","375e186c5f4b739f840ff15ca143da8d"],["/tags/博客死循环框架问题/index.html","31a42b7b96184ff502c72eaaf6d2fd2d"],["/tags/博客部分问题解决方法/index.html","dd1f5ccafbe821517b6ccb43768fb41b"],["/tags/反序列化/index.html","8122d57f19afafee068480b473250017"],["/tags/命令执行/index.html","818c820fac9b71279a8b8dbd8d09360e"],["/tags/局域网攻击/index.html","9daf2941d839c1d2dfe6cd511c03525b"],["/tags/常用指令/index.html","803273cfa695e301d80f7b0746d1a3f1"],["/tags/心得/index.html","15b7e50f2be9d6d0f937f76fb305cd46"],["/tags/文件上传漏洞/index.html","e08fbdbeafb63ee7c511a508c9594c18"],["/tags/文件包含/index.html","cceb8a060c665f81d2e3a6a81f4b7971"],["/tags/流量分析/index.html","ae497fadba6b46dd60e343657f9f3660"],["/tags/渗透/index.html","b39e9c6027e40cc50c1b027cdddc0882"],["/tags/渗透测试/index.html","2517d8dbc8ee688ce2c8a4baaaf83522"],["/tags/漏洞复现/index.html","f14b7cc25eae23c4181282ecdf45d1f4"],["/tags/留言板/index.html","8bc8ff31637fef992eb944f723c4e782"],["/tags/赛后复盘/index.html","7e39a8a8103ea4dcdccf7ccdf71af6a1"],["/tags/黑盒测试/index.html","91448744d5591dc41f1eab86126ead6e"]];
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
