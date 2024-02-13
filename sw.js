/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/01/08/ctf之web/index.html","e35d9498e399e703884425f08f09c6bc"],["/2022/01/11/博客制作遇到的问题/index.html","110ae089fb3c11ffdeba4378c095a3ef"],["/2022/01/15/C/index.html","6fe177730f33124a5975ea2b5890a62b"],["/2022/01/18/新版next置换/index.html","b741554b2f85eaa804246a175183bc15"],["/2022/01/19/不蒜子相关问题/index.html","2933aaf9af2ddf703248fa5e656a3271"],["/2022/01/19/框架问题/index.html","51acfb8289fd6df7b33741b3197bcacc"],["/2022/01/20/ctf之reverse/index.html","fc9587c66effef366eacf5406fe8586c"],["/2022/01/23/misc隐写题目总结/index.html","d1767b28f22938d28dd4cb3c3e6a4c11"],["/2022/02/01/684/index.html","08e8f9a3600ce821e03fb781ed88f5f9"],["/2022/02/03/留言板/index.html","a1e5383b8d2a14b0e1c41045baf72389"],["/2022/02/04/SQL简单注入/index.html","69b9610c9487036c8b33fa99f57999fe"],["/2022/02/05/最全的HTTP头部信息分析/index.html","cba9653715c70b40ec4986ae2c187284"],["/2022/02/08/ctfshow文件上传/index.html","63880e6f56a23d988cc3135cb45b8ad2"],["/2022/02/08/常见密码类型/index.html","f2a8c38e8c205705fd709edf36b77d09"],["/2022/02/12/VNCTF2022WP/index.html","93682cff924692a050eb30a3970b7184"],["/2022/02/20/ctfshowPHP特性/index.html","8fad97a90d1891703ddc935a5c04938a"],["/2022/02/25/php伪协议/index.html","95f3b5dd40ccb9e89e9e6b534019adb9"],["/2022/02/26/ctfshow文件包含78-117/index.html","b66976bd3766b4398db321ad12aaa956"],["/2022/03/02/Clash漏洞/index.html","307ed0be78f55e90ae8f6dae7da91265"],["/2022/03/11/流量分析之题型解析/index.html","7a8f2c0f3747284f76335ed7920b3d83"],["/2022/03/15/ctfshow命令执行/index.html","ef7e7a317a84ce0967e7e89a44c47c1f"],["/2022/03/22/CGCTF/index.html","fdedaabf68044f7e026401aebabb66e8"],["/2022/03/24/ctfshowxss/index.html","184d02dcdda46375f1cfda3c30412964"],["/2022/04/04/黑盒测试/index.html","dd8d1287f450560267c25df91de855af"],["/2022/04/11/nmap/index.html","2797644e47f003eed069c4beaea7f008"],["/2022/04/12/渗透流程简要记录/index.html","66540bf5e0b9e70a654c4c94ed5d3a34"],["/2022/04/12/渗透测试之攻破登录页面/index.html","cad61b91df45cdaa73ec315b8005659c"],["/2022/04/14/xray扫描器/index.html","f484029d598929e7b55d3ba792e74cae"],["/2022/04/15/ctfshow反序列化/index.html","3ced19038270e36217e3dc4b004d0775"],["/2022/04/26/渗透测试实战/index.html","2d2e8442518ddad835d64168c3c28271"],["/2022/04/28/sqlmap教程/index.html","369fe391d77b8a0865ee343ef5a2e299"],["/2022/04/30/认知文件上传/index.html","3de27e774471b0fe2733e76ed8c16b22"],["/2022/05/03/nahamcon/index.html","ce545dfd461ea6de2981aaf59df9015c"],["/2022/05/15/awd/index.html","b8d559a82fd629c21ae2b9a4eae599f3"],["/2022/05/22/DASCTF/index.html","1040bf4e0888ab76923a94bdea472d77"],["/2022/05/27/520/index.html","d62a71b73e08de3f98d850b378ba9b85"],["/2022/05/27/ISCC2022/index.html","f6b95f49c0b348ac89a403f6b69283b1"],["/2022/06/01/第五届世界智能大会/index.html","9f4968c3d92611e38e8fb3e8d7e494fc"],["/2022/06/04/SEETF/index.html","344fbaee27f0ac6edb2de12378be8719"],["/2022/06/04/bcactf/index.html","3ca7c005518086fa843a3513c909b5de"],["/2022/06/05/BSidesSF CTF/index.html","e263ba4d3ab7799d6004f07e92d6912d"],["/2022/06/07/Docker部署web题目/index.html","9f71f2753d5e6ba1e4371dc5ce35e302"],["/2022/06/09/利用oj搭建C语言考核/index.html","d29af66eb6e5635351e89e9bbd4f7595"],["/2022/06/13/限免题目/index.html","d72d852c2a70493d2227956e1c84fd56"],["/2022/06/14/钉钉rce/index.html","954a9b50b6fabd868be8acc54225ba96"],["/2022/06/16/内部ctf/index.html","1603c0765e39c031840e2d4422237a5f"],["/2022/06/25/攻防世界高手区(一)/index.html","14ad913e3874b81767e7d2046ff6debb"],["/2022/07/01/两小时AK赛/index.html","bcefc3ff244cf269ec2d24d0044b73c2"],["/2022/07/03/鹏城杯/index.html","46d23589b776f1c25a4d8438797dc572"],["/2022/07/04/XXE/index.html","f425ca6d6e88733319a3ec74ecc85d69"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","2716594990762a945b072ec9d95178ed"],["/2022/07/08/buuctf-web刷题记录[第一页]/index.html","4a50f0b5f7c03959eff123feaf3addd0"],["/2022/07/08/chinaz/index.html","2bb6433adeeadd1b9fdbaa84827b8cef"],["/2022/07/09/蓝帽杯初赛wp/index.html","685254ad9f738af0a031cb17c07ed523"],["/2022/07/17/NepCTF/index.html","f9744f362a31763f4a66ac032676ec4e"],["/2022/07/19/2022ImaginaryCTF/index.html","b76575159fc82682d3670ef5472537c9"],["/2022/07/20/局域网攻击/index.html","b59c838c6fcc849a5e3e2c90dc71214d"],["/2022/07/22/2022BDSecCTF/index.html","e9f4ca100547e37f04b64ebf15ec5b04"],["/2022/07/25/DiceCTF @ Hope/index.html","0c872a6140210cedb27ac597d2042000"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","76477f22bbab14ca11924b4b8132531a"],["/2022/07/31/TFCCTF/index.html","54f82699762317905d49390505acf867"],["/2022/08/03/NSSCTF/index.html","847c753bf88d6e42aa2c2e2c07c48693"],["/2022/08/08/buuctf-web刷题记录[第二页]/index.html","d16b97141daf595f464d6110cdd5ae7b"],["/2022/08/12/T3N4CI0US CTF/index.html","4919bae467989c28056dce969995d099"],["/2022/08/14/SHELLCTF 2022/index.html","89ea32408076abce6d9cbf514efbf773"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","7c4b525b7a98c256c7ded572c9b25a26"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","9d9876178e01e5f037a9f001f42c96e3"],["/2022/09/16/柏鹭杯/index.html","7588b14419d5af2bc8da369800ad135b"],["/2022/09/20/HUBUCTF 新生赛/index.html","b937f128a0075253139aead48808e63a"],["/2022/09/27/NewStarCTF/index.html","1a67e828f8dec016a27355d7253ae904"],["/2022/09/27/bugku渗透1/index.html","2fb298607adf46ce61c57bc87359da9d"],["/2022/09/29/tp6漏洞/index.html","752e95c62fc1e1f3dbc9201f52fc4573"],["/2022/10/02/SWPU NSS新生赛/index.html","a6e29528507959c2afd39e8c01e143d4"],["/2022/10/21/XSCTF 联合招新赛(热身赛）/index.html","e7b972f916f900335fa8e6c5e82f8389"],["/2022/10/27/Moectf西电CTF新生赛/index.html","5f5b6041f5a423d202dd9544e83a1749"],["/2022/11/02/HNCTF/index.html","485c0d99f2e5846963ad8f0ddef66d30"],["/2022/11/04/2022工控CTF/index.html","95160e5cf7ad9863781391e760a48497"],["/2022/11/21/极客大挑战2022/index.html","04df7f2587c2ca2a375fd7ac3fca8e31"],["/2022/12/05/TUCTF 2022/index.html","98b5ae931d13177b2e5f2f4a5dee26e6"],["/2022/12/14/首届“天权信安catf1ag”网络安全联合公开赛/index.html","09ce222418ec1c31ce5b4d3420ead82c"],["/2022/12/18/金盾2022/index.html","5d7748a1bd046750866d46789f8e82af"],["/2023/01/01/CATCTF/index.html","7759c297b927ad072bef7eefef0b970c"],["/2023/01/09/RW体验赛/index.html","75d71fea91ad495a895a0b794bfea7a8"],["/2023/01/10/铁三/index.html","94fb583bfeb6eee3dec5d5fad9f0a659"],["/2023/01/16/Ugra CTF Quals 2023/index.html","53b091860cf4882c0cf594ac06814574"],["/2023/01/18/山石2022冬令营/index.html","539d6d27e318d18dbbfa8f0355adb833"],["/2023/01/19/SICTF/index.html","37aa4d9c2a8df2c99a03d5be572b2de6"],["/2023/02/04/2023西湖论剑/index.html","59c03f26c0515d466453e965caf6afa8"],["/2023/02/04/记一次由外网打点到内网横向的新年口令红包渗透比赛/index.html","f6abb23aaa7a2224c471e41b1270ba21"],["/2023/03/04/公安/index.html","1dcaf2ea2dafb0abc87dd3df061eb0b1"],["/2023/03/07/mysql之udf提权/index.html","ab09c1f102d960d081cde96b3b81088b"],["/2023/03/07/红日靶场练习/index.html","0bfa7ead9183f364b94d067041f0055b"],["/2023/03/27/NKCTF/index.html","0b4810d6631e637dbd6a007342d26985"],["/2023/03/31/楚慧杯/index.html","d94c1cccd975079f719007d972988770"],["/2023/04/23/HDCTF2023/index.html","5ef0687ce680ec2d17ed75b4710dcf41"],["/2023/06/01/2023CISCN初赛/index.html","6e486cd76e53c64a7ba4b3285ebb03d1"],["/2023/06/28/2023CISCN[华中决赛]/index.html","bb817865a4ff1e8777cc3078086f13a8"],["/2023/07/10/CyberSecurityRumble Quals/index.html","6ed0cdfba6de08d8b7677af366dfd71e"],["/2023/07/22/2023BDSecCTF/index.html","29ca8fbd8d4afead324d503576276f9c"],["/2023/08/07/SQL手注小记/index.html","37818fac192d150543fba6bb0223e1d4"],["/2023/08/27/2023陇剑杯/index.html","7c89a40d6a8a028966852234660b9c69"],["/2023/09/17/2023蓝帽杯半决赛/index.html","b2edafe64503ceafc603a632c67379a9"],["/2023/10/23/对于多层代理的研究/index.html","3e3781d179c9ce2b3db1211ae1b06619"],["/2023/11/25/金盾2023/index.html","a8d86c7319faef82cce0382284e6d73e"],["/2023/12/09/2023古剑山网络安全大赛初赛/index.html","c95edf80c8af0ef698eab931687b4071"],["/2023/12/18/2023强网杯线上赛/index.html","872413742020e4f3991a569c9f925615"],["/2024/01/08/基础ROP/index.html","446179f6195a534bb302810318012f61"],["/2024/01/11/2024-CTFshow元旦水友赛WP/index.html","5a33fc201747d0073bb60a9d625b2e71"],["/2024/02/13/打靶-Tr0ll/index.html","9ee74aef62238989bf05101b7ea03dfb"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","5705d731c632fce42208749fb15cc17b"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/LoveShow/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/LoveShow/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/LoveShow/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/LoveShow/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/LoveShow/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/LoveShow/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/LoveShow/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/LoveShow/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/LoveShow/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/LoveShow/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/LoveShow/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/LoveShow/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/LoveShow/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/LoveShow/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/LoveShow/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/LoveShow/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/LoveShow/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/LoveShow/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/LoveShow/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/LoveShow/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/LoveShow/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/LoveShow/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/LoveShow/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/LoveShow/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/LoveShow/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/LoveShow/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/LoveShow/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/LoveShow/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/LoveShow/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/LoveShow/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/LoveShow/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/LoveShow/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/LoveShow/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/LoveShow/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/LoveShow/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/LoveShow/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/LoveShow/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/LoveShow/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/LoveShow/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/LoveShow/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/LoveShow/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/LoveShow/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/LoveShow/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/LoveShow/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/LoveShow/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/LoveShow/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/LoveShow/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/LoveShow/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/LoveShow/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/LoveShow/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/LoveShow/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/LoveShow/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/LoveShow/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/LoveShow/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/LoveShow/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/LoveShow/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/LoveShow/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/LoveShow/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/LoveShow/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/LoveShow/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/LoveShow/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/LoveShow/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/LoveShow/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/LoveShow/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/LoveShow/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/LoveShow/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/LoveShow/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/LoveShow/index.html","1447eac0d7c724d0bf3e170e303d9714"],["/LoveShow/js/all.min.css","1c073396100e49ba7f979c5a661d2f63"],["/LoveShow/js/all.min.js","3b6f719cca657a4a8d26c131d2e2015f"],["/LoveShow/js/jquery.min.js","e1288116312e4728f98923c79b034b67"],["/LoveShow/js/love.min.js","98a427c2573b4799164f02f870f83972"],["/Whisper/index.html","284ba329f91d0a1618932e2224d88529"],["/about/index.html","81175b3a413cf3b551c3f2cb5bd061bf"],["/archives/2022/01/index.html","cdb49d45f91befc523ddd1c64055b134"],["/archives/2022/02/index.html","6cd180b15e9b6e0177a5c2085da6a963"],["/archives/2022/03/index.html","e7d8fc56e9445091250e9821a189425d"],["/archives/2022/04/index.html","6e48c34f5175455e3ec9af76ee037aa5"],["/archives/2022/05/index.html","18a339bf53f99a9b00fdb009fcac15f0"],["/archives/2022/06/index.html","9a79518d32848e7171795892a2d15d07"],["/archives/2022/07/index.html","f7aee0c9e2032b9aa98c6d061c11c31a"],["/archives/2022/08/index.html","af5369d8c54366336f74a004bd1a3eb0"],["/archives/2022/09/index.html","5cb9c5c74344398a481518c8804d5b55"],["/archives/2022/10/index.html","0999c40605a7617a1892e3c704a1cbc0"],["/archives/2022/11/index.html","e2f0264107eb3b330651e5ed5d37daa7"],["/archives/2022/12/index.html","4baf5ef9e43de2bd28ede2c4ebf23dbd"],["/archives/2022/index.html","ecefa41127382819a2940aa9458cc1fc"],["/archives/2023/01/index.html","c27e063c78a0d6b84082477749ee26db"],["/archives/2023/02/index.html","5118b489d766f9e631b0405c0d1b77ad"],["/archives/2023/03/index.html","5bb387ea1aaf91c1b02ba43334cf9275"],["/archives/2023/04/index.html","ecccb35033d9e49da031d14b6837a346"],["/archives/2023/06/index.html","ce276bf15d06f34ecb054ea8f2673992"],["/archives/2023/07/index.html","ab12e5422d025b16631b9e4d2f82520d"],["/archives/2023/08/index.html","8f63f8553e3ea1db146cc5344a387428"],["/archives/2023/09/index.html","13c8f15de92fae1e689aed209500b797"],["/archives/2023/10/index.html","d8cd6ce04b2f0af274b356121052aa2c"],["/archives/2023/11/index.html","fdfce52da0cb202bb997313067794cd0"],["/archives/2023/12/index.html","dd00a1b4886f4439e5df24c78d5d953c"],["/archives/2023/index.html","4d9d295350172bc1ce038caa6ce0e731"],["/archives/2024/01/index.html","6e6bdf681cae511eb43056fb122268a5"],["/archives/2024/02/index.html","c0579913e83f4a8f090cd60760c475cf"],["/archives/2024/index.html","f840149bc953cf1e2b445b7a89c14150"],["/archives/index.html","5965b15cec3d0e2dfc3e42f5efb37498"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","d97960e0218021a54ee7c79e2012aed4"],["/categories/CTF/index.html","ca5020a382706c22a4f05dd68eacb8bf"],["/categories/PHP伪协议/index.html","c83cb1b2fc4353eebbbcab1bf8b2eef3"],["/categories/PWN/index.html","d109ad9eb88a524fac21f0092ede8b72"],["/categories/RE/index.html","cb11b8a29e6739282f910275cf6c6361"],["/categories/Web/index.html","b4ab6c725543c6bfcd751d7517f45795"],["/categories/awd/index.html","ac45b50a97f9f391df58587272c7ac76"],["/categories/index.html","5a935515dc751a74a7abbbd2861b4f5d"],["/categories/misc/index.html","524aa930c02a5d44b275d21ce72e202c"],["/categories/sqlmap/index.html","7e93ee04ce415b441c0fb6bc47b35c2c"],["/categories/博客相关问题类/index.html","7ac53d6a4b1989721ec37b3a988fcf2b"],["/categories/局域网攻击/index.html","2005bec826fdbf261ddf2a2f75000f0a"],["/categories/心得/index.html","fa913eb7d8df97931987d28aa6ab5d54"],["/categories/流量分析/index.html","81ba83d5cf3a6d0d5f2ce33dfd9b1283"],["/categories/渗透/index.html","51e5b9537b6135c25254027b76f28579"],["/categories/渗透测试/index.html","4ecda71c0c43e7b265cbe30720da85bd"],["/categories/渗透认知/index.html","644b8c17a59ff35cc5d44ed5bc154e10"],["/categories/漏洞复现/index.html","2dec30fdadccf5045c74c417ae0c3006"],["/categories/漏洞测试环境搭建/index.html","51af4f52ab39a5ca85fa86c19cfdbfcc"],["/categories/赛后复盘/index.html","bb8724540f224c53932010ebba63fc26"],["/categories/靶场训练/index.html","63de3805b85c2fad409ecc59cceddc37"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","2cab3df8d6dece42731715a75b2305b0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1f37e0b8ce942e4c8b3afa5cf9b9cc54"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","28c382afa844f2e2e6d35b4c48762dd5"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","b909f159e22b19ba59b785f2029db40a"],["/js/Valine.min.js","b2737114166a5912df3fa4bf463b6b3b"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/src/clipboard-use.js","2df3e7b9ae71c15297cdd06cf0fade5c"],["/js/src/clipboard.js","908af414ab0d3801dc9e52194f409996"],["/js/src/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/pjax/CHANGELOG.html","b37b0b2bc837c2e2454fec6eaf9a3f24"],["/lib/pjax/README.html","423b39ab47b3a477eaca7fa0dce4916d"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","e507d705e53d43c1c9aef175bae113a6"],["/lib/pjax/example/index.html","4dcb35fd31bae63db2cf2581d203d791"],["/lib/pjax/example/page2.html","80399e1319c9aafde8bbd2d50e14dfbe"],["/lib/pjax/example/page3.html","678c434ed2008519caf19b1cef2c6794"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","eb7c2c878aaf7e40958477eaf9362fd1"],["/lib/pjax/pjax.min.js","5c48eff0fe69a3b607b51c597eb33951"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","c21c7b1bb512ecded2bba1a6a56b0975"],["/page/10/index.html","69e5c12b0b9a4f1c57f33bb0f226960f"],["/page/11/index.html","c781ae92248f0073660976ccc507adee"],["/page/2/index.html","a172aabd1b271b0878627f8d14f4454a"],["/page/3/index.html","1c497807e4d4179e84a2616b6581c080"],["/page/4/index.html","8769919472bffe2e5392bfefa9770c05"],["/page/5/index.html","9a8a27cdab8685bd279172149ae3bc6a"],["/page/6/index.html","391afed1ba4501e93ae67e6343f6ad8e"],["/page/7/index.html","d9e95a25cca2b82e995aa1b2aa722f60"],["/page/8/index.html","f99e1e97622116b7710d71548a9c005b"],["/page/9/index.html","6c9cc294d6fc80eefa68958892914a0b"],["/sw-register.js","9ede81a5dfd6cd22a51f63361b16f169"],["/tags/C/index.html","62cfc9250a866a99c8ce981414a7ddd2"],["/tags/CTF/index.html","f9b9d18f161cc19187e5e81469ba9558"],["/tags/HTTP头部信息分析/index.html","bd182bf679ac1869b400b0f68c62bbde"],["/tags/PHP伪协议/index.html","6aab04455e4d088e94a125bd837aa2e1"],["/tags/PHP特性/index.html","e77e6f9f94b6e2eb716087536e26211d"],["/tags/PWN/index.html","574bce97b0b0a25589fa24f0fbcaff10"],["/tags/RE/index.html","c6f735b950a54d1a4870f1944e8e78de"],["/tags/SQL/index.html","759f64a7e0460d151ef4bbdb353e16e9"],["/tags/Web/index.html","9ede274af013bd6d3f5691339155d404"],["/tags/Web工具包/index.html","6690888d44f1e283908dc66d900d9db3"],["/tags/awd/index.html","edf1955dc50d0c2e41494f210e4095f7"],["/tags/ctfshow/index.html","c935ce77814cae633f2659d25bd08220"],["/tags/index.html","94e96cf7be43486c4d01d31557ede1f3"],["/tags/misc/index.html","943178a64d9adf1b431040cb915293aa"],["/tags/next主题失效/index.html","8e272786576aac357c19c9bcb991ce17"],["/tags/sqlmap/index.html","86b5bcfd25511528e3353b09bf2d1d44"],["/tags/wp/index.html","9e38d8d13d754b1af43749d194bd8288"],["/tags/xss/index.html","76206fcd5d80848d6edef0164629a848"],["/tags/xxe/index.html","fa5fce2f365c9b7fb8a3aa8ffae05cbd"],["/tags/不蒜子不显示/index.html","61f5b245637b0a250c9aee7900f70b41"],["/tags/博客/index.html","681fa438b249ccfb01595cea5a624e4a"],["/tags/博客主题优化/index.html","c3db0db2b8d4b8618ae6be9361e02cc9"],["/tags/博客死循环框架问题/index.html","5a7dd9a7e20c18d2284ded660cae104f"],["/tags/博客部分问题解决方法/index.html","03a55fea8c65d769b7f49b9275535a31"],["/tags/反序列化/index.html","ce847c1a053365fbac8cb68b22381972"],["/tags/命令执行/index.html","00e0567b534790d28c4fffaad6935875"],["/tags/局域网攻击/index.html","2fb825cf469bd64637f88b53f720fbef"],["/tags/常用指令/index.html","a8e055f82d62dd657e977b9e6722de2e"],["/tags/心得/index.html","9b9b4e48ec8f5caa41f793465a3c3842"],["/tags/文件上传漏洞/index.html","699c19d588749ba5ecba622e9d2c693e"],["/tags/文件包含/index.html","ca98cbdedbd5f0f697d125c36b9a56c8"],["/tags/流量分析/index.html","3df3c054084b76fa5d27d0873720fc8e"],["/tags/渗透/index.html","9116b8bd90d8aef014bf8fb11dcb05a2"],["/tags/渗透测试/index.html","c17fb761a649476ad72e567f57f39e18"],["/tags/漏洞复现/index.html","287ba5d9f2c1625d816fe4dfea4cd2bd"],["/tags/留言板/index.html","447d4cf6b4cfb1855a2cd41c83e7861a"],["/tags/赛后复盘/index.html","54d5a0d6cbff0921bbd657499392ff74"],["/tags/靶场训练/index.html","e9301087633829a9d891d1c1b1a88a48"],["/tags/黑盒测试/index.html","935a573c4beddc7a6c3f87938b8b20ec"]];
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
