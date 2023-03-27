/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/29/test/index.html","83cbfb01c1ebc45cc5841dca24520682"],["/2022/01/02/Python程序运行常见错误总结/index.html","2140460a23d4b6d9569f851a7e64a9d5"],["/2022/01/08/ctf之web/index.html","c23b6251e6b09b88ccf3283f769f73ae"],["/2022/01/11/博客制作遇到的问题/index.html","0d0187063bc08ea1f85fa2812f2fa651"],["/2022/01/15/C/index.html","ca71f42fcbfe57e8a569976be1ded236"],["/2022/01/18/新版next置换/index.html","276d54bab1f4997855960f2352d41c94"],["/2022/01/19/不蒜子相关问题/index.html","4ad82cb0dcefd328e5f0cce70ce40888"],["/2022/01/19/框架问题/index.html","9f0058b545891ec68252b64a07e16725"],["/2022/01/20/ctf之reverse/index.html","fc10340711c749b03c2c23931afd1297"],["/2022/01/23/misc部分解题软件命令记录/index.html","3f9d398e7d5cb99697507a9d5b6083f3"],["/2022/02/01/684/index.html","95e1b900127322a34b1ff19d4780158a"],["/2022/02/03/留言板/index.html","3b55ba5a403a17715eb683bf9d65d8e0"],["/2022/02/04/SQL简单注入/index.html","dfb7ca7b5ea2d2dde9511310c69246ee"],["/2022/02/05/最全的HTTP头部信息分析/index.html","aa05d9b50350b3f48aa4e96b79f6b544"],["/2022/02/08/ctfshow文件上传/index.html","0fae898019920121134ce3c933fdf08f"],["/2022/02/08/常见密码类型/index.html","4527dfbcebb42e08473e89696de08076"],["/2022/02/12/VNCTF2022WP/index.html","ae16b8260b52bdeafe0a7689b964f159"],["/2022/02/16/rce/index.html","15278b287d1631b2cefa9f382611b48e"],["/2022/02/20/ctfshowPHP特性/index.html","7703ce0378fbc6d3d98ba0fbdfab1a40"],["/2022/02/25/php伪协议/index.html","1fbd16322f8bfea67835a14139c07ea8"],["/2022/02/26/ctfshow文件包含78-117/index.html","e1be49e1bd991a42e5eb2df3c478094b"],["/2022/03/02/Clash漏洞/index.html","d4257f251bd4fabbdabffd4adf85dab5"],["/2022/03/11/流量分析之题型解析/index.html","eba4f5ad1ec0b723ac4cf0baa0c4799e"],["/2022/03/15/ctfshow命令执行/index.html","9457712c684220af2252e213bcd88b26"],["/2022/03/22/CGCTF/index.html","27a653edc51983d7ce15021a992bcfea"],["/2022/03/24/ctfshowxss/index.html","00a07db854bdc721f16130e5cc570ba4"],["/2022/04/04/黑盒测试/index.html","d769b2b570cc8c79a7b709871018e33f"],["/2022/04/11/nmap/index.html","3c29efa07dd78e636f2db80af439d3f2"],["/2022/04/12/渗透流程简要记录/index.html","cb2f061d4e439d1199b18b7d00954c3d"],["/2022/04/12/渗透测试之攻破登录页面/index.html","0cf1d028ff08dd42d8a49a46c61eae30"],["/2022/04/14/xray扫描器/index.html","4012206e87bb021058b2a69500c65d9f"],["/2022/04/15/ctfshow反序列化/index.html","219a874ec553b0526c25284344d3ab87"],["/2022/04/26/渗透测试实战/index.html","158ef403d3f2b27d35f38cb84110eae7"],["/2022/04/26/网刃杯/index.html","f834a19c7f6d68d8a0f7cba623aa1de4"],["/2022/04/28/sqlmap教程/index.html","0285e1bfb17ac9d6a6b6a37e41b1aade"],["/2022/04/30/认知文件上传/index.html","8dba55babdc1cdb0107484d56e1deada"],["/2022/05/03/nahamcon/index.html","ca77bb7c38532293bc8331420cf1cee2"],["/2022/05/15/awd/index.html","2c7a41437aa9a5be022e9614d9f62759"],["/2022/05/22/DASCTF/index.html","4337ae04c9efd2578af05e089da13d94"],["/2022/05/27/520/index.html","514aaa906593805d97aeab2836a3048f"],["/2022/05/27/ISCC2022/index.html","45fd1b1dbc6ae245860d3f97edf9d7a5"],["/2022/06/01/第五届世界智能大会/index.html","c725fb2947565fd4aa80e41c71f069e5"],["/2022/06/04/SEETF/index.html","cefdcf4c6a53531866a2a29a3a547d6b"],["/2022/06/04/bcactf/index.html","8c4a0cc94b60d07f7604cfc44712ac4c"],["/2022/06/05/BSidesSF CTF/index.html","0b0a451e3a7240b3d26128199deb68da"],["/2022/06/07/Docker部署web题目/index.html","21296eee525a1682d6392eb513b2ea4a"],["/2022/06/09/利用oj搭建C语言考核/index.html","fbb61612f937e76b0f827eee1fa478d5"],["/2022/06/09/论网站502/index.html","9a7ce111fbd25eddab7dd31d4246838b"],["/2022/06/13/限免题目/index.html","45003a24e54cfe427b21a015df5519d2"],["/2022/06/14/钉钉rce/index.html","26ff3b353c019d9cafa38973600a3049"],["/2022/06/16/内部ctf/index.html","704be6fc52a61bf47dd581e99078f8c6"],["/2022/06/25/攻防世界高手区(一)/index.html","2aee0e110c4549e9c96328705798c659"],["/2022/07/01/两小时AK赛/index.html","ffef5277967678103736bbaff81f5187"],["/2022/07/03/鹏城杯/index.html","b070f4873ffe5cafed5b9126f2a736a1"],["/2022/07/04/XXE/index.html","5cc0156d6257c38377471d4a27977999"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","8735401428dff261dbd29f0949fa3f71"],["/2022/07/08/chinaz/index.html","1dacc757525af263019c4bba4285afc4"],["/2022/07/09/蓝帽杯初赛wp/index.html","67dff72a46c3a2c86e2391b184839ee2"],["/2022/07/17/NepCTF/index.html","07f7dd564ca667c3df571c23d7b1c4f8"],["/2022/07/19/ImaginaryCTF/index.html","04ee9240043977a933c56ae652a6583b"],["/2022/07/20/局域网攻击/index.html","bc17eec908c2264545977e35b3dc0eab"],["/2022/07/22/BDSecCTF/index.html","3e46f28d8bc0de7d68ea261c9f3d6ebd"],["/2022/07/25/DiceCTF @ Hope/index.html","c069153f932d57e4c676abdb2bc557fc"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","397badef5a20d3e1ad12a91458049a6b"],["/2022/07/31/TFCCTF/index.html","8dc7f57a72f760639f5c632bd1911726"],["/2022/08/03/NSSCTF/index.html","cfbb22c5a9f7ac7691c984b199c7c5cb"],["/2022/08/12/T3N4CI0US CTF/index.html","974f9838fb5873e9f370c69f0d47f1ed"],["/2022/08/14/SHELLCTF 2022/index.html","96aa0eba648037112f3b860d9a293fe3"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7bd94bb6dbc45edae3858e2b849ab246"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","2fc4ae1a41b10d15f7690eb499802dfe"],["/2022/09/16/柏鹭杯/index.html","4d8ce11ac9dab77829c3a32bb7ee5fc2"],["/2022/09/20/HUBUCTF 新生赛/index.html","5aad9a055b64e1935f5cd1c90254ae07"],["/2022/09/27/NewStarCTF/index.html","ddda5da14c29aeb947f1a166e6c2ef8a"],["/2022/09/27/bugku渗透1/index.html","8993d8c73d8a1def059635a20ed33cbc"],["/2022/09/29/tp6漏洞/index.html","2548075e789e3d0fae19d47d69a8b80a"],["/2022/10/02/SWPU NSS新生赛/index.html","9bb9303bba9bce3e762d0200553b820c"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","f015401e3cfbca543e398b8a0901aec8"],["/2022/10/27/Moectf西电CTF新生赛/index.html","606d1e3d3c622c4318b0795614106134"],["/2022/11/02/HNCTF/index.html","a45bce62394b56690158734cb9582001"],["/2022/11/04/2022工控CTF/index.html","93593c71a45dfa399ec42d7728947721"],["/2022/11/21/极客大挑战2022/index.html","1cee2f976d6eaa7f63913d6ff24c4af6"],["/2022/12/05/TUCTF 2022/index.html","806cc4c63fbf0d03d47044e2b9dc9974"],["/2022/12/14/首届“天权信安&catf1ag”网络安全联合公开赛/index.html","7559dc50585bbff37e4c0305f4e81692"],["/2022/12/18/金盾2022/index.html","2ac24aab1b420e93aba59b09512247ee"],["/2023/01/01/CATCTF/index.html","3bf0f8644c28342ae5dab10ccc1c6043"],["/2023/01/09/RW体验赛/index.html","e6e81d6f2f18bd1ec78ee96288c62de6"],["/2023/01/10/铁三/index.html","8ca428563d316b815638e6986b7d0e61"],["/2023/01/16/Ugra CTF Quals 2023/index.html","605c5a0f64af93a2e2828c71a7d78611"],["/2023/01/18/山石2022冬令营/index.html","02f51b42ab83e3d72a1de8038bfa9cd2"],["/2023/01/19/SICTF/index.html","3bb18d2396745acd62d3258f75c527ac"],["/2023/02/04/2023西湖论剑/index.html","dc9f936e06b15e17bcd4050dd582eaec"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","ba369bc9fc739aef7829a8c49c2d67c4"],["/2023/03/04/公安/index.html","f5ece620be807921609290bdfd87e9e8"],["/2023/03/07/mysql之udf提权/index.html","0570f6e1d01cdc7944ffd50e3637466f"],["/2023/03/07/红日靶场练习/index.html","587447c09792bf6285aaa1a41cf982be"],["/2023/03/27/NKCTF/index.html","ec687d07155e75bd8c0028d4dea4f6bd"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","e25924b8080c269cdf28e3e7b6b92287"],["/about/index.html","c15975db4ead70dbf034f948b7772b86"],["/archives/2021/12/index.html","58089d677fc9495e593d020ffef83e2e"],["/archives/2021/index.html","7622f29d734b4d57d7e6b7d77bd3530b"],["/archives/2022/01/index.html","4925c0fe797b8889b3625de5c530c68d"],["/archives/2022/02/index.html","2ba79a2621e04688db792b962c5ca84d"],["/archives/2022/03/index.html","de475946e99e7f1bd16e1ad69c74c220"],["/archives/2022/04/index.html","fb388a9a5188ee673bf08a237b3ffb33"],["/archives/2022/05/index.html","95164c30ec20ca40d02c09b6b4f440c4"],["/archives/2022/06/index.html","d1d339723c098fe98f46f2eb6619c7ec"],["/archives/2022/07/index.html","619288c016c2fe389e41df1918cb2bbe"],["/archives/2022/08/index.html","bec7ffa22d475433c02228e11f21ada4"],["/archives/2022/09/index.html","36394f950012a6c0da6a1d079c750e9f"],["/archives/2022/10/index.html","9990939b7090dbf5b301bb2fa5018e3e"],["/archives/2022/11/index.html","3a3528011019cc1d81ad96c1f6bb381d"],["/archives/2022/12/index.html","3e347cbbf2306e3cb8dd5df4b85a9da4"],["/archives/2022/index.html","e21fb9f17579224f3ab5308dab39d40a"],["/archives/2023/01/index.html","50d51eb8ad1674037c68a2ad956562fa"],["/archives/2023/02/index.html","61228e120b86be21d3b172d0f3f6372e"],["/archives/2023/03/index.html","9adae0245a16956e4e2dde11225fa75f"],["/archives/2023/index.html","eee1a7af200893ae5c4018ea78919e63"],["/archives/index.html","72d446bd932a6b5b21f357ce70dd53b8"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","78939d20971a8dfb14385c8fbd2396d9"],["/categories/CTF/index.html","3e1e354ed0ef57ce2c5e2e6e9eec9951"],["/categories/PHP伪协议/index.html","14780bef26c645340d314aad76e5ece5"],["/categories/Python/index.html","38e7e0ed0493fbee47db1f6aa2974c7c"],["/categories/RE/index.html","3c5860b013511567828ebde14f0d280c"],["/categories/Web/index.html","8bd3634e8668929d85549b649e4346c4"],["/categories/awd/index.html","1c3e7577dedb2641696dd3c957937bcc"],["/categories/index.html","016c62e781de1053b9aee90723027759"],["/categories/misc/index.html","1349e7fef9c095dfda34ec7ad5937cef"],["/categories/sqlmap/index.html","b028a3425575494c00c80de1ed614475"],["/categories/博客相关问题类/index.html","76c14c468b093a3f380392c9ab4ee5ec"],["/categories/局域网攻击/index.html","d5832790a421d137123fe05d55483cfd"],["/categories/心得/index.html","5f85f88911cb6a19c4630f9a284d36c9"],["/categories/流量分析/index.html","d0daad1475e98b5f66f49318b99136a9"],["/categories/渗透/index.html","351ecaa487a8986a799bb2c2ff193d03"],["/categories/渗透测试/index.html","d269b09db46cb2c2bf236c07ea6efe39"],["/categories/渗透认知/index.html","06ff5fdca7c689c4133c6c3d2677c771"],["/categories/漏洞复现/index.html","2bcbfa7cf57d1b80f3622e16ad447152"],["/categories/漏洞测试环境搭建/index.html","33d623b801494a6700335b31cccb1b7a"],["/categories/赛后复盘/index.html","e198a282584a064478056f35236b13b4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","7b64ee11f85baa247f80a89bd782b55b"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","17ffc0b12d95e9a70d215788a6dd4fe2"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","9a7f06a7daa525bd8f6a3737b3a470f3"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","482333c6823eedc2fe0eb5c601e652f9"],["/page/10/index.html","e32cb3ca3003e894cd7b49d4c934b6c4"],["/page/2/index.html","21894b7ea487b46ca798238336ee7d88"],["/page/3/index.html","2c0484700a9f7223cfef9ec4661c9a38"],["/page/4/index.html","9d412c128fefbe3103ee6f624b510655"],["/page/5/index.html","3a6a3493cd77034621835ed0dd60c41d"],["/page/6/index.html","e20dc682afe20fa472fb749be28bfbb9"],["/page/7/index.html","61e66d9fbd389d5deb105b43336b9d10"],["/page/8/index.html","7257f3ad0fbceec7f096c15ce9f90b6c"],["/page/9/index.html","4e8f2df8e991d16d9ed6f4c47e048eed"],["/sw-register.js","e5393a5f4cf6aac9af7219471f2b98f5"],["/tags/C/index.html","86995080b0f6a70a7b18df29edb80ee2"],["/tags/CTF/index.html","816de73747a698c700d7d2fa2256ec5f"],["/tags/HTTP头部信息分析/index.html","db56cc4172c059a4f9d24e3a5285723c"],["/tags/PHP伪协议/index.html","bb74efddf0e027afa7a8e74128603a3e"],["/tags/PHP特性/index.html","ca43b59d20ecc885449d35b94eb76daa"],["/tags/Python/index.html","5ce0a04bab111e0a6f5f89fb0111a23b"],["/tags/RCE/index.html","56b0fe1b48010ef850fad7de71bd7c30"],["/tags/RE/index.html","89b1c84b56d48265d0bfed6c2f276971"],["/tags/SQL/index.html","8c056946d14adab90cfff0cc7a1b702e"],["/tags/Web/index.html","a57c5f2224541fac2435f1161e537ee7"],["/tags/Web工具包/index.html","70b942fade83f8f2e87136e1d43f7568"],["/tags/awd/index.html","6cd7dd3d09d065b5c3beead1cb705625"],["/tags/bugctf/index.html","5e514ad76e2ffca474afd9d327243e8c"],["/tags/ctfshow/index.html","4dc1e20c08ee74feed89aa950e02ce88"],["/tags/index.html","59c96d4a336bc6fe6729f85c0f23c755"],["/tags/misc/index.html","0ec983747510541f9e78904001c558be"],["/tags/next主题失效/index.html","21257b7b0095c431786b6ca84bacd5de"],["/tags/sqlmap/index.html","2977a1475b99da6e6889d9c622b4def8"],["/tags/wp/index.html","837adff744ffcbd46c20201256796a5b"],["/tags/xss/index.html","ee7599e60835697ba169a8d07815002a"],["/tags/xxe/index.html","7ac59eee77b01d129ee15672a4f5f10b"],["/tags/不蒜子不显示/index.html","ada0f5b0399b0de550f7fb6f775c836e"],["/tags/博客/index.html","8c0988170025ff1c171019e9113cb0e7"],["/tags/博客主题优化/index.html","78c9776826bab9a11d65248499b02858"],["/tags/博客死循环框架问题/index.html","56a2bbe44cdb1e35796d1c86a5f5dc7c"],["/tags/博客部分问题解决方法/index.html","27da48c262792d722663d7784739c504"],["/tags/反序列化/index.html","a5843cef0aa5e4e583e54c3ff8de583c"],["/tags/命令执行/index.html","4b2e9219cc823222b2bcf5b411c3b396"],["/tags/局域网攻击/index.html","990a8590a98c96fed9fab1a6ec902bf3"],["/tags/常用指令/index.html","c8a259f8a5ef02a2a4c79b6876a4ce45"],["/tags/心得/index.html","196d73a1f82c99767ba6f0b35c62e981"],["/tags/文件上传漏洞/index.html","98641dc772e02d65adb6840c200e791d"],["/tags/文件包含/index.html","4dac317e61cfc2f786048dac34eefa4b"],["/tags/流量分析/index.html","86b0ab95a59778ec4b04a717cd298431"],["/tags/渗透/index.html","16b1c73bfae2fad12907f443785969cd"],["/tags/渗透测试/index.html","8d9488e846c250d9ae4964ff5c4b07cf"],["/tags/漏洞复现/index.html","5f582da8abde2f61adc9118c9ff9a7da"],["/tags/留言板/index.html","527e7ad601fc64bf73b7b6f63ae2665d"],["/tags/赛后复盘/index.html","6c8325b23ed48427b99ef74de29ad0d7"],["/tags/黑盒测试/index.html","4be9a951bb37d7b7b00371058e2891e9"]];
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
