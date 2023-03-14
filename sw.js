/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","834508d52bd4a158b898d793b7bb2626"],["/2022/01/02/Python程序运行常见错误总结/index.html","aed8ae9c4f7502de0658428ecc0388a7"],["/2022/01/08/ctf之web/index.html","83890fb1848cd874c14377fec5132581"],["/2022/01/11/博客制作遇到的问题/index.html","7c130fb04b2b0f1d2ffba3715811f835"],["/2022/01/15/C/index.html","f3ade4c63b608db09c7d90350fa7e55e"],["/2022/01/18/新版next置换/index.html","792cd9dc0efccc19a4bd530e86afa9b6"],["/2022/01/19/不蒜子相关问题/index.html","dc497f72820892768bd151ecdf52f94f"],["/2022/01/19/框架问题/index.html","b61bdad5f54c28f850475aac93e13deb"],["/2022/01/20/ctf之reverse/index.html","df277ee5806bdb50eecbaca40be4569b"],["/2022/01/23/misc部分解题软件命令记录/index.html","28c660a9890fda1648580625a4cf5e00"],["/2022/02/01/684/index.html","905945278024d9ce9df157722cab9a6f"],["/2022/02/03/留言板/index.html","9684d05a50ba9148ab5752cb04b8924e"],["/2022/02/04/SQL简单注入/index.html","c7228996ef9f17a6266f86082aa03cca"],["/2022/02/05/最全的HTTP头部信息分析/index.html","a2158f2ba4b48fcc599d6a8d046a4f8e"],["/2022/02/08/ctfshow文件上传/index.html","b26629f65dfb6a111689346a0f6d2699"],["/2022/02/08/常见密码类型/index.html","574b4f75f3d478931850ebff0bf42be5"],["/2022/02/12/VNCTF2022WP/index.html","0372239e0c1c6191fdbba715eff5985e"],["/2022/02/16/rce/index.html","3869c1b937b4e2b7f2097da00d97c81c"],["/2022/02/20/ctfshowPHP特性/index.html","6dff219e071a2ecc530cc8e8afc85b2d"],["/2022/02/25/php伪协议/index.html","429021ca4b49d0675a95cc9f0d071b8a"],["/2022/02/26/ctfshow文件包含78-117/index.html","8a9fe8ed12193510cfbc7a8d405913de"],["/2022/03/02/Clash漏洞/index.html","504ec0fc78af8340b0c2be63e7a48172"],["/2022/03/11/流量分析之题型解析/index.html","18cb8848d512c399d8d41b70e2cf7a24"],["/2022/03/15/ctfshow命令执行/index.html","6538c3ecb3df3f44de5acbbe39b7fcf1"],["/2022/03/22/CGCTF/index.html","a306afe88215c60b7754973bbf866a25"],["/2022/03/24/ctfshowxss/index.html","a970f1e61260b1e0ade096f2051f1ee8"],["/2022/04/04/黑盒测试/index.html","72351c96fad83fa740b2a840579289a1"],["/2022/04/11/nmap/index.html","44847a6e9f288c888d9164d19233f2f6"],["/2022/04/12/渗透流程简要记录/index.html","4f79180665d8b57d48940c8f6d0c2f9d"],["/2022/04/12/渗透测试之攻破登录页面/index.html","1f63eaa70e8eaac9a9edaab253ae4a93"],["/2022/04/14/xray扫描器/index.html","bf213bbd5709db038222b7449145af1d"],["/2022/04/15/ctfshow反序列化/index.html","279eead8e0adfe07f2fa9cd9cc629754"],["/2022/04/26/渗透测试实战/index.html","1d18e3e9b7356e973ec01c32fdda7028"],["/2022/04/26/网刃杯/index.html","1a2d3276993d461a5fffa577cb546db7"],["/2022/04/28/sqlmap教程/index.html","0d56fe5af296f02f39cbcfb79c05d744"],["/2022/04/30/认知文件上传/index.html","d1b2af3cc999c8bca8c75a735d54ba27"],["/2022/05/03/nahamcon/index.html","b99d9d1c8a49125a893194b42e1cb859"],["/2022/05/15/awd/index.html","74b65bcd256f5c5975d9b196d72dbafa"],["/2022/05/22/DASCTF/index.html","1a9445d1c9b219a021a48f7bb6103380"],["/2022/05/27/520/index.html","c013a33f86da516b3e1e5d8c23a8467d"],["/2022/05/27/ISCC2022/index.html","8e84fe0ca2804e1f812eef2af4571f23"],["/2022/06/01/第五届世界智能大会/index.html","577478bfe20bacf55c4b691aeabd7c7f"],["/2022/06/04/SEETF/index.html","cea330d35c3ae53dc8c12a2a0ae81d0e"],["/2022/06/04/bcactf/index.html","ae2b8b95ba82fb6020a6ed08252a36f5"],["/2022/06/05/BSidesSF CTF/index.html","ff1ca91140b253b71d47934fd45d2f9f"],["/2022/06/07/Docker部署web题目/index.html","09a8bc6911fb7223366e0aeff6d40908"],["/2022/06/09/利用oj搭建C语言考核/index.html","5de9c52071931f7c6d3cda0852d50617"],["/2022/06/09/论网站502/index.html","7c3c459080c48d26097c84fa41ebdefb"],["/2022/06/13/限免题目/index.html","bffc9ca64e1303ff93e7a04e03c7e8b7"],["/2022/06/14/钉钉rce/index.html","d51fb8e844fd9710fffd488b54070fcd"],["/2022/06/16/内部ctf/index.html","e628b4fa49ba0209ab6b0714615ae685"],["/2022/06/25/攻防世界高手区(一)/index.html","e5b13be4ce8679e5e6d8b509da167a28"],["/2022/07/01/两小时AK赛/index.html","b3685732ca9101fd6857468140e691fa"],["/2022/07/03/鹏城杯/index.html","3136ac89531fd79f5e74767339a4cfcb"],["/2022/07/04/XXE/index.html","523f239ccb7012dfcf4caf486f18235c"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","1594cc6976f450eb6fda4357a64804a3"],["/2022/07/08/chinaz/index.html","2b56fc7c243a93241070e36047234c74"],["/2022/07/09/蓝帽杯初赛wp/index.html","8ae60f9cbb6c3bf451ef5cb67459f5ae"],["/2022/07/17/NepCTF/index.html","6ec13e66b5513a38d1d5b374f1d241d6"],["/2022/07/19/ImaginaryCTF/index.html","7f0a59f721fee7ef23fdf09a8d88bcc5"],["/2022/07/20/局域网攻击/index.html","739872b00d7c98b4ac034f765787b3d1"],["/2022/07/22/BDSecCTF/index.html","3fee23a464cfb7a94399c656aac92091"],["/2022/07/25/DiceCTF @ Hope/index.html","6db6833f030af7f02f3af6269b237ccb"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","53201c83f4e8f02763858abcca040d8a"],["/2022/07/31/TFCCTF/index.html","a3fed10bf44ce4fe0de9737b770b0d78"],["/2022/08/03/NSSCTF/index.html","5c4574679362c52d2c2b7a9ad0c1cf8a"],["/2022/08/12/T3N4CI0US CTF/index.html","ced149ad41c61771e87b0c40057e9610"],["/2022/08/14/SHELLCTF 2022/index.html","43507b0fe1be68ae4c51e364ac5d47c2"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","20e65c0f8d7e499f6b7a7c15775b95d1"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","cc65624be480eb0f2b0890f4e2b45a26"],["/2022/09/16/柏鹭杯/index.html","605eb8c3bf1a8e8f1abda51b951e7949"],["/2022/09/20/HUBUCTF 新生赛/index.html","a51a0aa8a6733659959b29d9dd11ff1f"],["/2022/09/27/NewStarCTF/index.html","e14e2111dc9de9c0f07d7f557923666b"],["/2022/09/27/bugku渗透1/index.html","b6970399b29d969c0bd3d3d75fd521bf"],["/2022/09/29/tp6漏洞/index.html","3a4001cf5af542b9c2051c4b0def4760"],["/2022/10/02/SWPU NSS新生赛/index.html","0a0aecf5c2e341f64a939a8eb3dddf79"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","499d0123d8e7a340f3e76d2d6d5330f5"],["/2022/10/27/Moectf西电CTF新生赛/index.html","91e6fddcac9207f9744de3aad1e99dce"],["/2022/11/02/HNCTF/index.html","c0d61d1599fabfeb973c8a2724a1fa8e"],["/2022/11/04/2022工控CTF/index.html","3180fc585db47e362e290cedac9ed197"],["/2022/11/21/极客大挑战2022/index.html","038e17d4fb12df4cf81e60d069ec37fa"],["/2022/12/05/TUCTF 2022/index.html","64e7f7b6a9e12cd4a86bfb973121bfed"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","62b27fcfefcbdadbc0a0cb1f77f720d5"],["/2022/12/18/金盾2022/index.html","2a36772708804c691babd1e1fc67b2b8"],["/2023/01/01/CATCTF/index.html","2f24ae25136ff073cfba74e9bab7850c"],["/2023/01/09/RW体验赛/index.html","b9a49cbf55ae01ace162b7c51be21fa3"],["/2023/01/10/铁三/index.html","6d5e311a543d22f06e10a67b32ec335f"],["/2023/01/16/Ugra CTF Quals 2023/index.html","50f8de5b9ca2b2a371d68f71d9bede4d"],["/2023/01/18/山石2022冬令营/index.html","8708598d34accf4d79e413f5c13b5825"],["/2023/01/19/SICTF/index.html","de28d244dbfe04681045ea7dc287aa34"],["/2023/02/04/2023西湖论剑/index.html","467c4f52da6594ecd0b88801112fc07d"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","48e121e71935ef01373a83aec66d594b"],["/2023/03/04/公安/index.html","58dc0d0ac3d060e7059398f928010605"],["/2023/03/07/mysql之udf提权/index.html","2538d12727d4eb8535258f5e3198dcd5"],["/2023/03/07/红日靶场练习/index.html","fc5ac659f9ea9e44213f03911732cfb7"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","6d7b34717f0a3ec890e9cbceb3815505"],["/about/index.html","91415db5806406b4b647202cc5519621"],["/archives/2021/12/index.html","7953998cf84922761da65a2d3e3e824d"],["/archives/2021/index.html","715b6433e9829dca7d9b23c8d7c60669"],["/archives/2022/01/index.html","1bdd692058020a1d314238d02ea839e6"],["/archives/2022/02/index.html","8f5a8a2d4ffece968b44cc466b6c14a5"],["/archives/2022/03/index.html","857d0e3549bce0549cae1594b22f6f78"],["/archives/2022/04/index.html","30b8a13a2091453faeb2be4f996a4a5b"],["/archives/2022/05/index.html","6c75e055397525a1d2be973132f0a922"],["/archives/2022/06/index.html","bc08992b79073f620a9c8d71adf70deb"],["/archives/2022/07/index.html","cac5082b4591175f43bc828e83f9cb34"],["/archives/2022/08/index.html","1ba11e4008132adf969eeb48103d0a83"],["/archives/2022/09/index.html","932487718d4d0095ddf7f70341270dc1"],["/archives/2022/10/index.html","ee9bb69a0db4c3f9b59ea74362fdb5ba"],["/archives/2022/11/index.html","0fc3ce4ccb586d33f3e77de5d7b9ce43"],["/archives/2022/12/index.html","377a6f8cbbe1f57be45ff117c3ff4359"],["/archives/2022/index.html","e186db4844035f5a44c83723841f470f"],["/archives/2023/01/index.html","8b4630be05f281268096b6229c2d219d"],["/archives/2023/02/index.html","5323198df94058c87b9ffe9eccee073b"],["/archives/2023/03/index.html","2ced86c153f03b611d5dba3774c87878"],["/archives/2023/index.html","25fa0f6e1257c848de0cceac1f07c1fd"],["/archives/index.html","9feb54a1364ba84d04abac757d558777"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","aa436068044ed38cfdf4743bde940590"],["/categories/CTF/index.html","36ddf1f0e75954d64b4e48c24f1ed4d0"],["/categories/PHP伪协议/index.html","1f016b595153d645acb0389121bea828"],["/categories/Python/index.html","a5c6eeeffe8c43d8b63fa1b0596749aa"],["/categories/RE/index.html","c6265ce94725da745404503c0d90e54e"],["/categories/Web/index.html","3cec5c6aaaec98fc4f7a466ab587aaf3"],["/categories/awd/index.html","d48c3d000527d3466949618ade11c4d8"],["/categories/index.html","31131e941e04514b9ded286f1dd120b8"],["/categories/misc/index.html","e3425a6b5cc784d33bbc507d69728ef4"],["/categories/sqlmap/index.html","d61da63cd39b4f8f505247b74362e68a"],["/categories/博客相关问题类/index.html","f1fa8455917834f0b783eedabdb95d71"],["/categories/局域网攻击/index.html","a629c0a683b100af86af0f7500b2229b"],["/categories/心得/index.html","5f6838dca2474bcbe89036e29c42b817"],["/categories/流量分析/index.html","4582fa9eca160ff047f72e0c4f03998a"],["/categories/渗透/index.html","c6b40dd68c97a5c0a934168fa9b2ecea"],["/categories/渗透测试/index.html","9f1a5b3e4f7763d234399f403465e45d"],["/categories/渗透认知/index.html","65bfd508928ad2bdbf4e1b6c31ba76eb"],["/categories/漏洞复现/index.html","d17ae68e8dce7215dbbfa5dbbaea9b10"],["/categories/漏洞测试环境搭建/index.html","279255c10f758dd8053eff28de2eb522"],["/categories/赛后复盘/index.html","51288be0e9c50940c2d9066df783305d"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","cee272961032da399f43ec61f22d3ad6"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","d7a19afa143af4c58290e396f1bd2f50"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","6934c33298a748ee576363ad65f2a15e"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","22eb26fca64ea50eb27a74e17d2da354"],["/page/10/index.html","11612b90e49cfd8edc7c3c7468297ac9"],["/page/2/index.html","761352fbae43c61b936061a9f5036c9f"],["/page/3/index.html","0e86f7d48f8dcc092ba3e5b756c8e5a8"],["/page/4/index.html","eafe0b9470282ca88da7300c617f0d47"],["/page/5/index.html","7f571a2766eff1e2ee60705c9074fb76"],["/page/6/index.html","e5139bfc24d00669b93a26f637068d61"],["/page/7/index.html","9004d0ec7c04a57d3f9915dfde6dfd93"],["/page/8/index.html","af27cc965780a01d40a7b37c5c36cb0b"],["/page/9/index.html","4d28f0f2e9d0724a1777549bf0b665bc"],["/sw-register.js","100f813e8186df711123ddb24b81090d"],["/tags/C/index.html","54ec3adecf1adc471c68e19ed125ac9f"],["/tags/CTF/index.html","b7ca350057dfe3b526d7d44615a4fa16"],["/tags/HTTP头部信息分析/index.html","421c78f1026cbd7157c4e9f14b353cf2"],["/tags/PHP伪协议/index.html","338d43d3fc8a7536e86e5058f214441b"],["/tags/PHP特性/index.html","ed5f82cfcafa5aaf1323b1f643480bcd"],["/tags/Python/index.html","1e183518c4f53a652dcc121ca3b617c3"],["/tags/RCE/index.html","00791bf0b75f43322f29f51be59d332d"],["/tags/RE/index.html","21226474f989189567edfe77bd60a794"],["/tags/SQL/index.html","9ad3bb1018c1d2b27dad0fbc34d991aa"],["/tags/Web/index.html","e504f392edf7b19fdcb36f47a147ee10"],["/tags/Web工具包/index.html","db155bf60ba07c141598e7909f51ab2a"],["/tags/awd/index.html","3bca4d3a3c534e20604d07f7c0895dc7"],["/tags/bugctf/index.html","3912386635d29023a1a9483459fe47de"],["/tags/ctfshow/index.html","0fe005702fcd0a123c85165dcce4c497"],["/tags/index.html","745a6a78a2ea281160e31a317aafc58f"],["/tags/misc/index.html","38ae711916fedc1e717ceba215e23698"],["/tags/next主题失效/index.html","38ce4e7478bf94d1c1552e2a28aa5aa0"],["/tags/sqlmap/index.html","40025e61080690a80b1d5f7c13fbb2e2"],["/tags/wp/index.html","042ac6250cf45b6785417964133818dd"],["/tags/xss/index.html","36debc96ae228180031c6bebb17904f0"],["/tags/xxe/index.html","7168dc685d307d9a29a011471d94d863"],["/tags/不蒜子不显示/index.html","2ef80561724eb4b46c82ad9783076711"],["/tags/博客/index.html","fc12c0966130e476e66ed59a4543a4b6"],["/tags/博客主题优化/index.html","fa63ccfa03d420b0e0eb60ee8c061c45"],["/tags/博客死循环框架问题/index.html","bafc393e4de2b78cf27e3019a93197c4"],["/tags/博客部分问题解决方法/index.html","76a8869d9272e57b38f65584c53e7bf3"],["/tags/反序列化/index.html","49769e99c5ae972550dc8623bb21e507"],["/tags/命令执行/index.html","9e6b1c0572b19e61789d83194b3e682c"],["/tags/局域网攻击/index.html","a7857114df63db45fa6381b40fff15ab"],["/tags/常用指令/index.html","96dc497f3b020ae646b3e15fd2c09f3e"],["/tags/心得/index.html","0d77abc439fe1bed36241369127cada0"],["/tags/文件上传漏洞/index.html","8df92fe42f12b131efb9832b3b0d744d"],["/tags/文件包含/index.html","9e05c650b3740166655636e9e7e102b0"],["/tags/流量分析/index.html","9761bf645ad1c507a88f416bd7d6f84c"],["/tags/渗透/index.html","51626752b996aab1ad7e935f33ac847c"],["/tags/渗透测试/index.html","dcb606ee09d5767bc103abcb0cb3462d"],["/tags/漏洞复现/index.html","f8b29d6f61e300e032ed54de925a27d3"],["/tags/留言板/index.html","700db86987ca87adb2028053bd038120"],["/tags/赛后复盘/index.html","ac9b2c00e29f7cce72a53718cf5a32ec"],["/tags/黑盒测试/index.html","78863c3e02d79df2ffe39f82ebdfd607"]];
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
