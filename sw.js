/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/30/test/cb139kgJROAuaeG.jpg","db1eab53ff269e5709d90f8b197fafb7"],["/2021/12/30/test/index.html","81dff5c4f19b4da40579b78463dd4853"],["/2022/01/01/ctf之reverse/index.html","59d6743a9206719e695bc24a1966d803"],["/2022/01/02/Python程序运行常见错误总结/index.html","5b6bec0ecac9b87f3237b8f04f937d16"],["/2022/01/08/ctf之web/index.html","706a7b0e3f5510d352fc7c3d9b1c457d"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/1.png","ab2851a47b7d226e173939113742e7a3"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/b5d8a99411384ceb91fc6a783ef60ca1.png","f89b982157a538a48ee59685a0dd9c00"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/e73eff4d3bef4ba0ae7cb1e9ff699660.png","c0d26a069dae544b053a41fffa1cbf2a"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113114247702.png","e1bc172087eaf58cd8b777ba464f2563"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113114626736.png","f8eab54624acd542a9c404f1d4b1c843"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113114830289.png","611e30fff2af38574159152c9f8199db"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113114930314.png","8b8422d5e677b000b9ce8e4aaa076604"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113120258881.png","d6bdbd02b51bf09a1d3b101cdc32d5c2"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113120501689.png","c172482fc56d67adee927db6c1df7d1a"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220113120703608.png","cb0c739f4b8fa23b2f450a238bde1f6d"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/image-20220115174547552.png","c198819bb0462e3171373e7018aac2b2"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/index.html","92d8acb80a34fa7d866e2ba2daeea7b0"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5Li2QS5SLg==,size_20,color_FFFFFF,t_70,g_se,x_16.png","488137bbca2267d064656e99686ab39c"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pivTXVtdXpp,size_20,color_FFFFFF,t_70,g_se,x_16-16418946537742.png","c797a45b73b46c4bc5917abcd5275ad7"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pivTXVtdXpp,size_20,color_FFFFFF,t_70,g_se,x_16-16418946676494.png","1fd334f0dbb3cf02c701c9656cbb81bf"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pivTXVtdXpp,size_20,color_FFFFFF,t_70,g_se,x_16-16418948450307.png","5abba3fef64f6992c1b0456a9398f873"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pivTXVtdXpp,size_20,color_FFFFFF,t_70,g_se,x_16-164189500212110.png","a776a1d0b54743322affe7f1b83aa0b2"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pivTXVtdXpp,size_20,color_FFFFFF,t_70,g_se,x_16-164189501844412.png","a3e40c2c52e94663c1e5f2e051c308da"],["/2022/01/08/长安“战疫”网络安全卫士守护赛wp/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5pivTXVtdXpp,size_20,color_FFFFFF,t_70,g_se,x_16.png","d00d262b5b4767abdf6545ba0d7b35f6"],["/2022/01/11/Web刷题/1.png","bee819b11267a5730954c6c98f5deb9a"],["/2022/01/11/Web刷题/2.png","68da811fad42f78629b27f3cf6ee836c"],["/2022/01/11/Web刷题/20170521231315.png","893e9f8ca0477a50635e9a80f60dd337"],["/2022/01/11/Web刷题/20210528104247407.png","869c09dcb466a88406c3115ea5d8fdff"],["/2022/01/11/Web刷题/20210707190048792.png","0d795f6944adbe8865fd1942f0f2fbe0"],["/2022/01/11/Web刷题/3.png","bc58cd0e14f13aa0acd07f33d424a9fa"],["/2022/01/11/Web刷题/4.png","474d67a8ddba56698f566dc3bddd7848"],["/2022/01/11/Web刷题/5.png","5912695d52fd16c0ca155d549335f51a"],["/2022/01/11/Web刷题/icon_weibo_24.png","c5fd93bfefed3def29aa5f58f5173174"],["/2022/01/11/Web刷题/index.html","8d9e501ac20ddbfd69a3fc671a43265b"],["/2022/01/11/Web刷题/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NtYWxsZm94MjMz,size_16,color_FFFFFF,t_70-16418967980484.png","9511cf2e67601e72d0a2569b547dae7d"],["/2022/01/11/Web刷题/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NtYWxsZm94MjMz,size_16,color_FFFFFF,t_70.png","99972840b8c6089c4bc2b2c50c829563"],["/2022/01/11/Web刷题/wechat.png","24de3321437f4bfd69e684e353f2b765"],["/2022/01/11/Web刷题/矛盾.png","330eb6cb1c69f678b3503d419a84c26f"],["/2022/01/11/Web刷题/矛盾答案.png","17096a463db578cf92f7d6bc7709bc58"],["/2022/01/11/reverse刷题/index.html","3cf793eeb5fc531df8644c9899e776eb"],["/2022/01/11/博客制作遇到的问题/MB5B%Y4VY`%V_WO7@1Y[W6B.jpg","26bfc9c47cbedc4f61eee15db4956351"],["/2022/01/11/博客制作遇到的问题/MO22Ie.png","adb5bd3861ebbb23a20dd5e23b06190d"],["/2022/01/11/博客制作遇到的问题/before-optimize.png","d0f8861e19600c34f10d19a8af852e6d"],["/2022/01/11/博客制作遇到的问题/image-20220112225927215.png","0dbfbb79e329a69ad62d4ece845345d4"],["/2022/01/11/博客制作遇到的问题/image-20220118100827859.png","86ee29d59a0198ecc1179e50d1e13631"],["/2022/01/11/博客制作遇到的问题/image-20220118100857169.png","f307c8ff0ced2204a23b5a52b831967c"],["/2022/01/11/博客制作遇到的问题/image-20220118100921527.png","bdf5a79aff9777bb0f15ff3b1f9d92eb"],["/2022/01/11/博客制作遇到的问题/index.html","0664bcf6122746b1dd6cad1317916afe"],["/2022/01/11/博客制作遇到的问题/pagespeed-insights.png","5773dcc9d245f359ca999ef5433297e6"],["/2022/01/11/博客制作遇到的问题/屏幕截图 2022-01-30 213339.png","60796dbe396ed6e76ef1e9e6d3cc1d19"],["/2022/01/15/C/020ed41347b2d78bde3cfa328867ccdb.gif","33a947c71ad62b254cab62e5364d2813"],["/2022/01/15/C/02442ae9685e56146470369e56ca18ab.png","303870c8fce74f8d79a99907e58ca705"],["/2022/01/15/C/0ec7f77ac94198f539e8fa2dce87ab82.png","25340e91f73b0b222fc211a6eed81c6f"],["/2022/01/15/C/13c0dd997ce619b1249220ce09610ad4.png","71ee9f1bd8aed3547fcedb0cccf52250"],["/2022/01/15/C/13eb965757dd130d813a953506335b89.png","f53a2d2d35440f378d9ebde3d58bd1e8"],["/2022/01/15/C/1a1d70de9ee22c638b43de8009048570-164225816352510.png","2e10a029e718d915e9a7d9dc7f0a5006"],["/2022/01/15/C/1a1d70de9ee22c638b43de8009048570.png","2e10a029e718d915e9a7d9dc7f0a5006"],["/2022/01/15/C/1d80c69a41198813f0bb19cef89b74ea.png","32dd5a31f37bdfb18bc8148828cdaac7"],["/2022/01/15/C/21a038cfb75cce739e0f1d333126db74.png","cefa941227391f6948a661f6f71471c1"],["/2022/01/15/C/2af92e78efb66b239f4ca96a99c6e228.png","92a2b5278728d67b784b922f1e4eaffe"],["/2022/01/15/C/2b8f50edb3b6449fb02a26a07c671ab4.png","c99cd51161face32137bb81520462862"],["/2022/01/15/C/2fb17f543aa500524932669a322cd57a.png","636c038e0db1ac4a926a2d9f5ec82de9"],["/2022/01/15/C/30dae0fb7fa2f93706031066d3cd99cf.png","42f4dc4d5c7557ff2b6c5255b498e84d"],["/2022/01/15/C/35f2d59e43f7964b22a3bce00ac0b704.png","860be34a651faabbfe324e7efb71dd99"],["/2022/01/15/C/362d51ee291b27f51140908a7244f463.png","5b00d2919c9a7ef983f71ae7b8ee43a2"],["/2022/01/15/C/385a1371f2859fbd2943203730eb3ba1.gif","671bd19a44faf77479d68805a083892c"],["/2022/01/15/C/3ac2c92b7d317d38441f3948865d98d0.png","a58f17ecccb947672137ab0c11935c1f"],["/2022/01/15/C/3d827d07e49b3a8714cb36dcb7d1ee68.png","0f0cc85b6652c7f18b5b47ca51703ebf"],["/2022/01/15/C/3f73cc45cf0a0bb4e4f0f1b9c972b2be.png","660404be17f9165fc5f7e399d2b4bcad"],["/2022/01/15/C/3f74e2788a1ccbaf1028b1360c514c70.png","c544ff096eb5c73ce39c6cf51055ac33"],["/2022/01/15/C/44a5722c917071e937da435fe5695a26.png","f9bd6ee73ee86f43672da6281cf29efd"],["/2022/01/15/C/4899d440537583bc28f3bc17bd2b7ae1.png","799f5ba2a7950abde80f017bf7e0690c"],["/2022/01/15/C/4f238221615ee2ef930526bd53cdc0ef.png","f4505d407a4f22fdea785683bb0961e1"],["/2022/01/15/C/540000371e0da0fb105248642ef9db24.png","c498b73a960fb73af24a909627d40a93"],["/2022/01/15/C/5515a7f3bbb5194db1f67b4f98de31c5.png","8a9ac8eafba04c64a08ceaa25c9ab6e6"],["/2022/01/15/C/56c97e103145e96707a17273cebcdf6a.png","7827a52bf92a0f81dcdf6d03af0c6b80"],["/2022/01/15/C/5ae3272e9f2f49988524b0e511a40287.png","56989a38200575f21691a320a6add5ab"],["/2022/01/15/C/5cdd2adc527c964fec76a5f55ed62d4d.png","ef3d59cc83f424ca6fdc81c0cb93c78b"],["/2022/01/15/C/5d2e966e95f1518585804e57779e7fe6.png","49a3bdcb00875e7b242bbd11b3c0de30"],["/2022/01/15/C/61ccbc31fd2ed870fde8de4598d52ee3.png","6ef42080d327864ad0ab11ddd34b8614"],["/2022/01/15/C/672ff35609edd25e6aa45a8adf1a6225.png","8ce9d239739752075849d6eaf57de267"],["/2022/01/15/C/68665a597da91a563b24cf3787665031.png","4f92f400c038f716ed6497122ca8cc1e"],["/2022/01/15/C/69b98c6401a04bf8fce52a78c80b9565.png","1468acfca61c7497f25a99b4dc90a906"],["/2022/01/15/C/6a20b54e83c2e2973ef46bd0cc015b72.png","8c594a48319d45ea85d9500e2a6bef56"],["/2022/01/15/C/6c563fff4c62724055337604c2d31623.png","1f1bcee03bf263cd171b23418946282b"],["/2022/01/15/C/6d73e8b907457511093f7bd71ec2b1f0.png","994ca8f8ef37b47d53b477b64f30815d"],["/2022/01/15/C/6f772a00140c7cf1676c8c20eb29a2e4.png","c5fab6e51f6dbbfc76954325e5c1168a"],["/2022/01/15/C/7331a7700b09543cef73fa0bbddc3c16.png","5cf87cd2a0a572c04bdffe32c750b9f1"],["/2022/01/15/C/73b03f1ce2062d094514e574bf3d0089.png","5b2fdd23dff949f8b0338c94ce92565a"],["/2022/01/15/C/7869895f908c7b3527c3f8421852a3fd.png","968a5bf395b42dbd512b65ac2b702c8b"],["/2022/01/15/C/85fd0abb9c2aab02e1c4563bc1ec9ef8.png","0d3bc3622ec7f515f89cd72be985764a"],["/2022/01/15/C/89de357c15677f49a7316c497a6d3fc7.png","3cbc3be1ee8e22bd7da0979597d701c7"],["/2022/01/15/C/8b7b4d0976ad6e192e3ad6e26282fa8a.png","db863980fa2f89b33da43876a3ea0717"],["/2022/01/15/C/8e87f83d4d2501a1c1248c61a786ccc5-16422551516922.png","129170804bc69b901f044332fa4c77e0"],["/2022/01/15/C/8e87f83d4d2501a1c1248c61a786ccc5.png","129170804bc69b901f044332fa4c77e0"],["/2022/01/15/C/912852ed05d5b35f881533a2187ed9f6.png","8740ca4ebf71624c208703264a9887cd"],["/2022/01/15/C/a19ef99bede1b3b0d689959881390bd0.png","1c9c4c7a0610f2b5a372d81ab5d5b79a"],["/2022/01/15/C/a44287edc332fab3fc13d7da196899a9.png","57046f25f5fab2f84f80ef6fa713a63e"],["/2022/01/15/C/a95f575889111ad8d64cc2c1aa8ecb1e.png","f79178cd614ab57b874166794f77cabf"],["/2022/01/15/C/af1fd05a523d9ba4e196e326f537589b.png","af36f599b04d5cd61730116e71d5803a"],["/2022/01/15/C/af331163ce03df7573810fc05ceb03c6.png","93222021d83e7094bb8ee91bd970779e"],["/2022/01/15/C/aff25b0d0e698d8790b640cb1acc332e.png","5018bbb04b007aa96a907f79a348c34c"],["/2022/01/15/C/b0f09e30dd95ab87c87a5b3a8568bdf9.png","16fa18d59c7c3805e11fb88eeb94541d"],["/2022/01/15/C/b394e0af450fe9756414a64877b3b0f3.png","b46a86fdb361672c0bf2f861a44c0d71"],["/2022/01/15/C/b3da2217fbaf93e346a390a47cad9a50.png","f59f8e284507ec37b71ae9dab416ea91"],["/2022/01/15/C/b519ba9d45ab584c43c991777d8e978a.png","f025d2a087ff6c9a0b9081c650f3b52d"],["/2022/01/15/C/bca554bbef13027b7dabc1bb67f47a6d.png","e38c19560e949eca946d578c4d5f37b9"],["/2022/01/15/C/bf4d5af2fc35c2fffaf62ee00a34c9d2.png","8bfd10d230b05d291b8e4bbfa05e6496"],["/2022/01/15/C/c051703dcae8535c264ef47c20881b53.png","60ba3bbdfb53285394c547440ddfb5f2"],["/2022/01/15/C/c15e330e2723191671e55b27cd9e4f1c.png","2e9d90da091a8a6b1981e8f9b8f9dcce"],["/2022/01/15/C/c336c50cce49b91c0088449099ebeb88.png","b8c56548fd4f9477df164e77cdb2bc65"],["/2022/01/15/C/c6c568069c9f5d7e162f250f7ea9e4fc.png","5876348df493d10e6ab6309191a4ed51"],["/2022/01/15/C/c716d53c6b228ea211a524645a5d13a5.png","0c3be9f171922a6d5db950282ebffdff"],["/2022/01/15/C/ca48b49abde038c455a5c4ea0789e2ee.png","20a93bbb4ffb733d75ff7a8aa8c59ce8"],["/2022/01/15/C/cb21fae540cb3290bbc41e7e223d3a41.png","e42566d5d15a0a71828cf1345e011347"],["/2022/01/15/C/cb273336e304bc40948bfacebbdf01ed.png","5df1888c22ecd7800c8a64ced5605a36"],["/2022/01/15/C/cd7728553a54887d4fc8f8d7be76ff3c.png","be582892db82ec3760956ec3d8b81039"],["/2022/01/15/C/d32037b3b82185eadb8c1f2ae4e2d160.png","73a4e26142c95bfec98cdb1789f530e1"],["/2022/01/15/C/d475ee4ee2d87374bd67b5f25152548c.png","323a57614755c5b522891ab6ebc627d3"],["/2022/01/15/C/d4c9b29d8ddb808d1a12252fdcdf538a.png","b4c0ecb9d339f3958dff4d0145e5f5ef"],["/2022/01/15/C/dcade1832cecd2072bd6d7e4b515ec2e.gif","91b76e8e4dab9b0cad9a017d7dd431e2"],["/2022/01/15/C/dd8a18bdb49031d24c98bc311e80ab78.png","4418598bb72a3d39375338a84be33ea4"],["/2022/01/15/C/de4aedd768012888dc7b2e70a744c86d-164283357464237.png","798d8e8d7f266d99d494eb4f21b6d9fa"],["/2022/01/15/C/de4aedd768012888dc7b2e70a744c86d.png","798d8e8d7f266d99d494eb4f21b6d9fa"],["/2022/01/15/C/dee64b6cb0f5c043402880d0062d2393.png","3ccdb6e78478ecb2dc293c0cb92f1957"],["/2022/01/15/C/e00312fbc775c04e2a449d7d8d473eb9.png","3ed4e4d0b668eca63c8503374bfb5033"],["/2022/01/15/C/e0aa63f597f92632c90cd1c5f6adc292.png","2d2a8e1e84b331020b781a6ad275b637"],["/2022/01/15/C/e0f0831ff1b110569a7e34440ab62e9e.png","2db2627db08cb3316415d2f99e4ea2ea"],["/2022/01/15/C/e38cdad483acddca8cfcd85e7ac0be78.png","bd67054c83031bdf6f872cc46aecde9f"],["/2022/01/15/C/e46d975be9e95178136726209b2c237f.png","5d3b6dcafd7f88e460de0631591ca7ee"],["/2022/01/15/C/eaed8e0890b2a50353ec24850941e789.png","3513c78af0f79f34cafa6e606c948194"],["/2022/01/15/C/eba20792779d9d9a99e7d4ff0d23ef13.png","a4100392ec00c130ff468c7cc63ef556"],["/2022/01/15/C/ed76e9a4a2ce06d0a3cd20192956f863.png","8f08e10fd64e2dee35185bd2856e005e"],["/2022/01/15/C/f351a6ed231c8a1a5e6379da6816fd1c.png","1c00ec40194b9c182b1f73483b02265b"],["/2022/01/15/C/f48a45d6d63c16e7415ff225b28681f2.png","aac151df02d053e5390cb8a18c2bcbd0"],["/2022/01/15/C/fe7b9e4e887e90b496fa9351b91f569c.gif","1c7e20f306ddc02eb4e3a50fa7817ff4"],["/2022/01/15/C/index.html","ebedb3fbc5ead179ec064c688f6a0931"],["/2022/01/18/valine/20200710121115583.png","321df38d5d0ef796cb11c2cd370bf83e"],["/2022/01/18/valine/20200710121318224.png","de6f848555190983fd02a52d9b9697a5"],["/2022/01/18/valine/image-20220203120812965.png","ef0e418f38d8a493f34c1ea930d031cb"],["/2022/01/18/valine/image-20220203122055181.png","8aafbef9497844056905ac36d9793851"],["/2022/01/18/valine/image-20220203122241800.png","723bb0689d21369290ed755629d34342"],["/2022/01/18/valine/image-20220203122844414.png","eb9d13c110f64de668e6fb9c0817fc6a"],["/2022/01/18/valine/image-20220203123121367.png","032a211eacb9e5e46933b6c291331649"],["/2022/01/18/valine/index.html","78cfd230e32e4911c2f109814ae2ec83"],["/2022/01/18/valine/valine_var_template.png","5f005786310fd93cde1fd066796d74be"],["/2022/01/18/新版next置换/index.html","6e7f6128ce9c903efc077e4e4123aa29"],["/2022/01/19/不蒜子相关问题/image-20220203205412286.png","6da9445d339b3409f686ddad0f6d012f"],["/2022/01/19/不蒜子相关问题/image-20220203205452405.png","0e7db93f871932ab3261d23ae4b74ffd"],["/2022/01/19/不蒜子相关问题/index.html","cfedaaa41b9c919aed67c1adafd389bf"],["/2022/01/19/框架问题/index.html","b0e0e5caf926d089dd1abe796f4f0b1e"],["/2022/01/23/misc部分解题软件命令记录/index.html","a639118859924852a7975d0ca6712e33"],["/2022/01/25/DVWA下载、安装、使用的教程/image-20220204233428295.png","d8be2a4b79648be2da80a01f763f9116"],["/2022/01/25/DVWA下载、安装、使用的教程/image-20220204233840685.png","3edcef937ff7d3feb6b77279a16f5845"],["/2022/01/25/DVWA下载、安装、使用的教程/index.html","20cc6b66e34d195277ab75481f5eb487"],["/2022/02/01/684/index.html","fbdd91fd5b720ff6091be523eab9faf7"],["/2022/02/03/留言板/index.html","794954eba51e974c7c83ba00af5ca825"],["/2022/02/04/SQL简单注入/image-20220204192950568.png","73d5d6d28001c20f3fa49b0ab2dcd8dd"],["/2022/02/04/SQL简单注入/image-20220204193042721.png","45a6c3598b63039c35fd9c89b52db344"],["/2022/02/04/SQL简单注入/image-20220204193404946.png","8367f25952d98e370cb0a81a0300fe1c"],["/2022/02/04/SQL简单注入/image-20220204193459549.png","83b49f20af548a2fec360fbfaac04758"],["/2022/02/04/SQL简单注入/image-20220204193859153.png","3649c25e3f90357264d59e845bea953b"],["/2022/02/04/SQL简单注入/image-20220204193934206.png","6d642227663a5a15b8bed3fb3c83fb20"],["/2022/02/04/SQL简单注入/image-20220204194415205.png","6703750b5f512af0fa4d3c3df571af17"],["/2022/02/04/SQL简单注入/image-20220204194828472.png","85b13b1237a9c5cbed83a7142c7f583a"],["/2022/02/04/SQL简单注入/image-20220204200949037.png","7724c521d2078f144cec03985e8aa8e3"],["/2022/02/04/SQL简单注入/image-20220204201124534.png","0dc6b4231fd8ed443c931a95f962db5d"],["/2022/02/04/SQL简单注入/image-20220204201353733.png","4e4893fd8ee43ae22ae5f71bcc9d75e6"],["/2022/02/04/SQL简单注入/image-20220215171031084.png","32ec5800ceac949c00395032ada685dc"],["/2022/02/04/SQL简单注入/image-20220215171141632.png","b64ab7da4e97a5506e993a2a90c62928"],["/2022/02/04/SQL简单注入/image-20220215171157502.png","b64ab7da4e97a5506e993a2a90c62928"],["/2022/02/04/SQL简单注入/image-20220215171256788.png","44887f6d3ac8da4d2e55c1965ec48705"],["/2022/02/04/SQL简单注入/image-20220215171320208.png","7cc80ddb9c133e7029c9953edf0b3f1d"],["/2022/02/04/SQL简单注入/image-20220215171433860.png","143a255da4aa90859d590a457d4f71d5"],["/2022/02/04/SQL简单注入/image-20220215171608940.png","4bc926e08bc0f6412fa33a9aaa270095"],["/2022/02/04/SQL简单注入/image-20220215171752124.png","bdaab89d87bbe590ae552f252f156fcf"],["/2022/02/04/SQL简单注入/image-20220215171840187.png","4eef1885a90010c0193b9b14a091e473"],["/2022/02/04/SQL简单注入/image-20220215171942844.png","18fcc5863b80e54cdef6f52df48168da"],["/2022/02/04/SQL简单注入/image-20220215172155435.png","f67c63407c14ff35834533082db27d18"],["/2022/02/04/SQL简单注入/image-20220215172245055.png","fe286b8c9f9783c9f3702b18fca65332"],["/2022/02/04/SQL简单注入/image-20220215172440795.png","cdfd66c2dc4aa8c338fca88ae7512a46"],["/2022/02/04/SQL简单注入/index.html","c28af25abf571345d0a4f4d4b4d60761"],["/2022/02/04/文件上传 上/index.html","49101093ed20f7f7baee5fae3efca578"],["/2022/02/05/最全的HTTP头部信息分析/index.html","dc684c5d9c51b22267ac39b0df254d25"],["/2022/02/08/常见密码类型/index.html","3c01b59948eac2af4ad5350032c2bfb8"],["/2022/02/08/文件上传 下/index.html","eccdd1f2cf50add62dcb37895fedd400"],["/2022/02/08/爆破/image-20220208204809215.png","42b90682bd9970fd3d0c2cc64366d2a5"],["/2022/02/08/爆破/image-20220208204903147.png","6419cc8a60cd0fba0075bf33ceaa362d"],["/2022/02/08/爆破/image-20220208205015430.png","e986de70526b336a4135335cd672c9d6"],["/2022/02/08/爆破/image-20220208205410206.png","45254b62c706d9ebde68b04ad961de3d"],["/2022/02/08/爆破/image-20220208205704686.png","eb2d288f1df0ab6028c96bdc1659615f"],["/2022/02/08/爆破/image-20220208205954050.png","1123dbe5571784a7e71d7f9a5dcd408c"],["/2022/02/08/爆破/index.html","6700d1199a96cd17c9284d9a3d2d6b56"],["/2022/02/12/VNCTF2022WP/image-20220212132916406.png","64844d428bcf866921b6d68377dd85af"],["/2022/02/12/VNCTF2022WP/image-20220212132943001.png","a43671c28f5e0d1ad693309a41bb5c8c"],["/2022/02/12/VNCTF2022WP/image-20220212133150686.png","c5c59df2f10a26d5d8f03bc28aa5c609"],["/2022/02/12/VNCTF2022WP/image-20220212133205891.png","fdf0e0843d0bb74f27ac42f0262aef39"],["/2022/02/12/VNCTF2022WP/image-20220212133234720.png","8d23fb247a0be56a12b9263c2b56243b"],["/2022/02/12/VNCTF2022WP/image-20220217215928285.png","9a6cc628810441c68472478f87e6f309"],["/2022/02/12/VNCTF2022WP/image-20220217215930565.png","9a6cc628810441c68472478f87e6f309"],["/2022/02/12/VNCTF2022WP/image-20220217220006414.png","1cfaf2c09e4321690da864f0ede90b3d"],["/2022/02/12/VNCTF2022WP/image-20220217220056349.png","51ac575e2003fca068b4798a14af9d9b"],["/2022/02/12/VNCTF2022WP/image-20220217220156892.png","080ae72dc4ebb8c833984b85c7603113"],["/2022/02/12/VNCTF2022WP/image-20220217222238456.png","216807e5f0765fdc4d00ab1627139a9a"],["/2022/02/12/VNCTF2022WP/image-20220217222805239.png","45567aa1c72797d45eb87849e2f7bfb2"],["/2022/02/12/VNCTF2022WP/index.html","7a75cbd44b8621ca18d37e5201e6ab14"],["/2022/02/16/rce/image-20220216223729477.png","4dc06bc1b420e10a9d9da3585ee23a14"],["/2022/02/16/rce/image-20220216224010950.png","364bb1cc82bba789d1dc3f88a3830c61"],["/2022/02/16/rce/image-20220216224237692.png","96fa63f8d6ec04076339eb7e0fb99c75"],["/2022/02/16/rce/image-20220216224433182.png","55b1f19f07acbc08ef16e7f2b8903309"],["/2022/02/16/rce/image-20220216224658663.png","056b0c00e3c36991bbeb5c7b49bcc3f5"],["/2022/02/16/rce/image-20220216224851279.png","8ccfd388f6e6035af21b8eafa71e9fcf"],["/2022/02/16/rce/image-20220216230251734.png","c11a904ebe94a95077eb08e8ba0a268f"],["/2022/02/16/rce/image-20220216230445443.png","83d9d8c3e8c690764436a86c536882cd"],["/2022/02/16/rce/image-20220216230549909.png","79cbe99a1c4b38257fbd06d4e1468d8b"],["/2022/02/16/rce/index.html","807ccba2bc622e7469c8c11a5c0d6f97"],["/2022/02/18/hgame2022复现/image-20220218121200922.png","51beea629e2d8c760571dfa7163a134f"],["/2022/02/18/hgame2022复现/image-20220218121311068.png","cfc60a4a3a16752b3d47e8df18f5a20b"],["/2022/02/18/hgame2022复现/image-20220218121352025.png","68b47295daba4f458ef279cc332796a7"],["/2022/02/18/hgame2022复现/image-20220218121558360.png","5052e78e0d59cb8468a226589d6119b0"],["/2022/02/18/hgame2022复现/image-20220218165405533.png","f26fd68674b3a81de993d085f8949d8d"],["/2022/02/18/hgame2022复现/image-20220218165503318.png","32f1ab41b7090ff606b8e6ea6c1a3d3e"],["/2022/02/18/hgame2022复现/image-20220218165632252.png","644fa2755527d0b6d10af7cb073e4115"],["/2022/02/18/hgame2022复现/image-20220218165712951.png","ba4da540a9ca7cff9d4f5236805c175e"],["/2022/02/18/hgame2022复现/image-20220218171919352.png","89a4d9623047ad9f4c3ee375c989c12b"],["/2022/02/18/hgame2022复现/index.html","73bbb296e8b7b65eefd048caa3efe43d"],["/2022/02/20/ctfshowPHP特性/image-20220220171134262.png","e1de243d3adc7d191af5e86430f80193"],["/2022/02/20/ctfshowPHP特性/image-20220220171451853.png","10c50967b666c5d0493ab32afc61d507"],["/2022/02/20/ctfshowPHP特性/image-20220220171752853.png","dd47a403b58def3587655895801c2dbb"],["/2022/02/20/ctfshowPHP特性/image-20220220172350545.png","6c5981af7c76e5ac20db4c97d8fb307a"],["/2022/02/20/ctfshowPHP特性/image-20220220172524756.png","4c59c449865e8e2846bc7b14db642c37"],["/2022/02/20/ctfshowPHP特性/image-20220220174250662.png","eda2069e57904fc0b4e1a2d5c338086b"],["/2022/02/20/ctfshowPHP特性/index.html","289b30f8e9ea6a71827997d99065ab50"],["/2022/02/25/php伪协议/index.html","7c2d0936edd3d7c32f0cb781fa295f66"],["/2022/02/26/ctfshow文件包含78-88/index.html","f57a7c7b2d16f716df7569b6979e35a1"],["/2022/03/02/Clash漏洞/image-20220302214318129.png","436daf3eda8e0eb4650430806ef9d564"],["/2022/03/02/Clash漏洞/index.html","b19e3b2808f9720ddf77cf8e42ece8fb"],["/2022/03/05/bugcf里的一个游戏题/image-20220305105426370.png","12035f05279536604b92445faad92060"],["/2022/03/05/bugcf里的一个游戏题/image-20220305105630196.png","ad55d055351e61e806fee9aaa1912876"],["/2022/03/05/bugcf里的一个游戏题/index.html","4a66f355330896ec964dd951d002c23f"],["/2022/03/11/流量分析之题型解析/index.html","d4a2643109f1ecffbd6ea30bf2bd1ff6"],["/2022/03/15/ctfshow命令执行/index.html","0792dff9541653f43e40c2669ab641a6"],["/2022/03/22/CGCTF/index.html","defd96e066c7cf0f2fdce9d2500dc3e4"],["/2022/03/23/ctfshow反序列化/index.html","f2f57cdef235da279c9039e58a3f7365"],["/2022/03/24/ctfshowxss/image-20220328194333496.png","f5fa5e6a1b704c04947e69b91fd398a7"],["/2022/03/24/ctfshowxss/image-20220328202214303.png","b964c3a3fce57fbe7c73bd4ecbcef8e5"],["/2022/03/24/ctfshowxss/image-20220328204939288.png","9896f0e3e74f5f63f110f430fb74900d"],["/2022/03/24/ctfshowxss/image-20220328205523748.png","b361f1869b36ae1d690112f657765204"],["/2022/03/24/ctfshowxss/index.html","5620ebcfe333b185c24c56d69c2496b7"],["/2022/04/04/黑盒测试/index.html","59b4c99d4409f55382fbf78b7768114c"],["/2022/04/11/nmap/index.html","9bb694f6b2ffb9908279965643058c7b"],["/2022/04/12/渗透流程简要记录/index.html","ef9477fc8f6ba662fa937134bff2bf2a"],["/2022/04/12/渗透测试之攻破登录页面/index.html","9d3a05317b26694330f5311c2c6b0773"],["/2022/04/14/xray扫描器/index.html","c19a61444b78a1b5111a30faba72418d"],["/2022/04/26/渗透测试实战/index.html","2bbcec2c64a2db99c210e5e39a46b977"],["/2022/04/26/网刃杯/index.html","3ba61922ff2b23735084bce8dbd9e1f0"],["/2022/04/28/sqlmap教程/index.html","c44f3e4e461f539dd24ee7d497db852c"],["/2022/04/30/文件上传靶场/index.html","a7763e58379da4458b739a442fc16231"],["/2022/04/30/认知文件上传/index.html","17712a35d932d3f1ad9c8a89cdb63d0f"],["/2022/04/30/靶场上传练习/index.html","4c934a478e21e334e32269cbbdf75a2d"],["/2022/05/03/nahamcon/index.html","2d8ca94110876ee3f83dbd9051a0b630"],["/2022/05/15/awd/index.html","c863db533264b6e222577625e36aaea7"],["/2022/05/22/DASCTF/index.html","0b02809247efa723799f5a15260d9f37"],["/2022/05/27/520/index.html","d56fe44d6e3395b4ce484a2f2f63c32f"],["/2022/06/01/第五届世界智能大会/index.html","7a189ce2b1bdf6b665b480bb2e78d741"],["/2022/06/04/SEETF/index.html","5a70f5018e700297b0cc9ac72a03a85e"],["/2022/06/04/bcactf/index.html","b1ee269770bacf35e5417ade3b3f9fd8"],["/2022/06/05/BSidesSF CTF/index.html","3ed6ae8a8202380f37f2c5835b4078d0"],["/2022/06/07/Docker部署web题目/index.html","fd7c6e19cd2607b45305cc471b18eaed"],["/2022/06/09/利用oj搭建C语言考核/index.html","e541b9fab6462a4de6d87a8ee421a3a3"],["/2022/06/09/论网站502/index.html","31efbab2b5642298ac8a8b7fedc0df69"],["/2022/06/13/限免题目/index.html","3759dae260db5db325ab092f93d1d2e9"],["/2022/06/14/钉钉rce/index.html","70120c61e3c72c539e37c8820089c88c"],["/2022/06/16/内部ctf/index.html","65faaf6ed64cccbb81b9fdf0912ccdc8"],["/2022/06/25/攻防世界高手区(一)/index.html","586a15e5f861ba9a05959af52cac8985"],["/2022/07/01/两小时AK赛/index.html","f280a1ea205eede12b0eb0fb1ef33092"],["/2022/07/03/鹏城杯/index.html","5392dd00b41362b3b4935b350d2e8eb7"],["/2022/07/04/XXE/index.html","86cb7b1a7c254c15ce0395758cbcebf6"],["/2022/07/07/攻防世界web高手进阶区(二)/index.html","4bb14723bdd9781eae81eb30ae894103"],["/2022/07/08/chinaz/index.html","872e08fdda84ff9d199ae7bc640c6e68"],["/2022/07/09/蓝帽杯初赛wp/index.html","d5e4ccea77ffe754b0a3dea8f849d672"],["/2022/07/17/NepCTF/index.html","3ad086dd1341e8821ecf5c9869356ace"],["/2022/07/19/ImaginaryCTF/index.html","25a9efcfe715423c353c600c538e5359"],["/2022/07/20/局域网攻击/index.html","261aee054b27010aba99507d0bbdd46c"],["/2022/07/22/BDSecCTF/index.html","98f9f816cb234d221f9cfd00c5a712e7"],["/2022/07/25/DiceCTF @ Hope/index.html","3d7a6b0e0529bfa8dd2273bdf1be08e1"],["/2022/07/25/Lexington Informatics Tournament CTF 2022/index.html","386347ecf319a7edbcb6a302783faf14"],["/2022/07/25/实验室考核题目wp/index.html","6e4a474d79680ae44e30b322faba2c34"],["/2022/07/31/TFCCTF/index.html","38e32c08714e41a200c590bdd3352fb6"],["/2022/08/03/NSSCTF/index.html","f06d0986c29dd50b8e6a7c75bbb5b1bb"],["/2022/08/12/T3N4CI0US CTF/index.html","b5035710cfd7305f801e80597b9c1c2a"],["/2022/08/14/SHELLCTF 2022/index.html","5d0095b29416107f1830f0d0d565be51"],["/2022/09/04/2022年“羊城杯”网络安全大赛/index.html","f92a8d183d04ec339c09ae400083dd05"],["/2022/09/11/第六届强网杯青少年专项赛/index.html","94946287f1dbebab2a57aa658ed82d0d"],["/2022/09/16/柏鹭杯/index.html","f7c25b4f301e720d889a4671151ce409"],["/2022/09/20/HUBUCTF 新生赛/index.html","c3204f29a9b4419ba24999177d8a18e4"],["/2022/09/25/Moectf西电CTF新生赛/index.html","1e04c6bcf04261d7cc16946806b1d0f0"],["/2022/09/27/NewStarCTF/index.html","d2cb10ad23142d315f6d58b883a8cf72"],["/2022/09/27/bugku渗透1/index.html","836ad5163e8c04ad2b87b7232734d853"],["/2022/09/29/SWPU NSS新生赛/index.html","888513fd09627f9be5b787111ba06239"],["/2022/09/29/tp6漏洞/index.html","8ec5f34e1a74e3e04769745ce691d755"],["/Love/css/default.css","3d5b01567b7d4f8f80d7ba950407a92d"],["/Love/img/apic11953.jpg","375ffbc1515780889460be0516f48ff3"],["/Love/index.html","efdab89f09590dd1e2433d88a49ac7d8"],["/Love/js/functions.js","302cf0c6933bedc3b8e03200a1aafb49"],["/Love/js/jquery.js","870d37e0411ad8ec5304c4929c05c0d5"],["/Love/js/star.js","52fe8e552e442f8ee7a80856e6daa6a9"],["/Love/js/yinghua.js","c7d8d766c4da8c1e7f5b5d3ca65b4a5b"],["/about/index.html","9e50feb3bcf15ff548a22d1d4cde8747"],["/archives/2021/12/index.html","244722d857f800a21dc190082eec821d"],["/archives/2021/index.html","180cf7c79c0cfc89f1eb342a6f2c7072"],["/archives/2022/01/index.html","951866c0d316c4235369b3bfec4f5f5b"],["/archives/2022/02/index.html","a325783927e3205b0c34154a130ae3bc"],["/archives/2022/03/index.html","55f67b0618f0301c682091b0a2340cbf"],["/archives/2022/04/index.html","32cd41bfcc49613f06140c3e2614a2cb"],["/archives/2022/05/index.html","074015b76b74c5d7e24ff5825da9ccef"],["/archives/2022/06/index.html","7b3f1e1924c5055073e977bdbd853e1c"],["/archives/2022/07/index.html","525767ce31e87031af979374a9afccdd"],["/archives/2022/08/index.html","88d6f426f62bc68043faf652a282440c"],["/archives/2022/09/index.html","171262b184bfa1a7b7dd349e1549b027"],["/archives/2022/index.html","0467b13f21e49b2ff7541e13fe69d180"],["/archives/index.html","d286a59b3fcad450ba4c6574b1d5daed"],["/baidu_verify_code-o6SHZ8MY1z.html","a4860ea59f0de7629ed72abc0f31b600"],["/categories/C/index.html","f0122ba4e31b47a204bebab26cb894aa"],["/categories/CTF/index.html","2ded5dcf1cbf685796c5a1a8a39bf338"],["/categories/PHP伪协议/index.html","80b7bb7bcba39e3d293b00d454d8ed08"],["/categories/Python/index.html","3b33fd256a912e360fcd3bc4de0b6263"],["/categories/RE/index.html","caa5a363d02cecf74e1912074e1c2178"],["/categories/Web/index.html","92f00712dffc69bfadd3decb02da22c4"],["/categories/awd/index.html","a6d73d3667e921399dcebea3bd2efb59"],["/categories/index.html","bf5785d1a98398d1c10f4a344d3a55f5"],["/categories/misc/index.html","96fd9091d77cb52630de2f05489b633a"],["/categories/sqlmap/index.html","c8a6b6d99fe6af6af5585cc9152f62e3"],["/categories/博客相关问题类/index.html","5f7eb6f2ad62ea86ae1b90efb5d7b05d"],["/categories/局域网攻击/index.html","cc426008ace2e87c5d4fb16012d28d76"],["/categories/心得/index.html","4b204189028c3236304f1a932e41ea71"],["/categories/流量分析/index.html","3790787f6450843103d4dd0964f1a48a"],["/categories/渗透/index.html","d1d04faf856392616cf1b6229da48a4d"],["/categories/渗透测试/index.html","87bb731e410fad5d6643baaca28daa11"],["/categories/渗透认知/index.html","23937dfa60d40646e45a717b63dc8c84"],["/categories/漏洞复现/index.html","22b45e39c08ced40fdce9f93e34fdc3d"],["/categories/漏洞测试环境搭建/index.html","86db92ab0a014c88699088580ec1ccc6"],["/categories/赛后复盘/index.html","e11b738888a971494f44cc8e3789777b"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","15cc4ce5a46126b220e53a3bfed584c6"],["/googlece228d1e2329e37e.html","8f2dc35b5725be8191e82f085fc8a15e"],["/guestbook/index.html","d0ba83fa6577fcc328ee28a4b3688337"],["/guestbook/index/E587BBE68E8C_2x.png","a44a04ce6494d4c7e6b1b80426d2e8d9"],["/images/a.jpg","5a861e70819b64f5b447dc4ff0676a30"],["/images/aixin.png","a605ec88f78a0c0205b7714e49d644e2"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","1dd6cff1c86b1d980212b245e8a28f75"],["/images/b.jpg","d7c52e6a092c9f1ef1faa3017f2f7c8e"],["/images/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/images/biaoti.jpg","0c5fc9ac19efe214da81f3fb1378f4f6"],["/images/c.jpg","ccde740ab19d66d236700b5061605dd3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/v2-eb23a54a322d3c797f277fb65b393c3f_b.gif","eb23a54a322d3c797f277fb65b393c3f"],["/images/wechat.jpg","4af095554a559f7bf5610772ffcd1e67"],["/images/zhifubao.jpg","29ae6e74b871eac9ddb062572dd4da08"],["/index.html","d3460c5db0e3fbdf51a2e619d090f650"],["/js/Valine.min.js","7c14a783dfeb3d238ccd3edd840d82ee"],["/js/activate-power-mode.min.js","b106ecb09811bf627fea68cdd9646222"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/functions.js","448292287c0ebba5b3593e804d9f88f8"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","6b33597b785af265a26d769db242173c"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/fancybox/README.html","9291648da5ad78d107321fb27f72862b"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","cfc7a2196aad58b79280f0b6c7141661"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b0cee04675bd8ebfdc7adda642819777"],["/page/2/index.html","fe747af76d5e4c26414174b0ec8ca1c7"],["/page/3/index.html","4d96b356b3069d6aa8ba9ea5ab7cabe9"],["/page/4/index.html","41d8e0c8103c928bebf875b6e3d9cb96"],["/page/5/index.html","7c8aba36c52e1400f203ba0529ad1e2b"],["/page/6/index.html","c366310bbea15df47be2a5a2a21fc930"],["/page/7/index.html","0265f262f4bfe0f913011972824fec07"],["/page/8/index.html","2474ba71a04fb0da24ed3e2d96489934"],["/page/9/index.html","be1c7e4ef826ad2e1abe6197793e57f4"],["/sw-register.js","9d4f8aac4275f9d705bb09ac789eee7c"],["/tags/C/index.html","60684920a8fcbaf48131d901d27176ac"],["/tags/CTF/index.html","6f76f8b897217688f419cda457ad48c6"],["/tags/CTF刷题平台推荐/index.html","28901b7feda2db803b5cb821bb55f372"],["/tags/HTTP头部信息分析/index.html","8e8cae00d3c5d2944b2bbecd6b49138d"],["/tags/PHP伪协议/index.html","29e31483ccf24f8cc3e65274dc81d171"],["/tags/PHP特性/index.html","4b191f28e33847cb6701d35ff5b1eb3c"],["/tags/Python/index.html","3b92f7ab0e2bd3949cd246f077974960"],["/tags/RCE/index.html","0c25e4782e5621c0e7f26d306331cc5a"],["/tags/RE/index.html","98c822cadc90a58a6db2bd7762efbbc6"],["/tags/SQL/index.html","3b709a904e8ec9be7922aaa5bb05cac5"],["/tags/Web/index.html","98e1685eb2d24cd96a9d63ad8d67e836"],["/tags/Web工具包/index.html","e840fbc2c556e90189dbb70c7ca118ae"],["/tags/awd/index.html","5af76d427e26b8f5b92a751ae706023c"],["/tags/bugctf/index.html","bbce0e46bd874f51170ca2d8163b5a55"],["/tags/ctfshow/index.html","99dcaa67d885926d1eef17e9acc100ee"],["/tags/index.html","8bec676d614519f684a9d30c90276ae1"],["/tags/misc/index.html","8a13add8f5fe9c8545f0e59619db83b8"],["/tags/next主题失效/index.html","a20122bb9a4c3d3fc9b8c7213b96fdca"],["/tags/sqlmap/index.html","c7e5656e242c421197ea1e16dd56fcfc"],["/tags/wp/index.html","ec1902ad966675cd038ccfa97705fffc"],["/tags/xss/index.html","5602687ac45fc6ecbb6bb9a761468928"],["/tags/xxe/index.html","2d63b35c8423549fc63bb4fb0d81400e"],["/tags/不蒜子不显示/index.html","77b9b492cd2c608ae6f272c5ff0f945c"],["/tags/博客/index.html","3759fdad207af63797e8a13d2da9e3b3"],["/tags/博客主题优化/index.html","c3dc7cd9bfd6c47d65dbbf02ce61975b"],["/tags/博客死循环框架问题/index.html","56dbac0e851361f7e9b1258c2085f27c"],["/tags/博客部分问题解决方法/index.html","b3f823227f639feee84b6170ff7b8721"],["/tags/反序列化/index.html","a1058e638027d47492e26ffcc8b6165f"],["/tags/命令执行/index.html","fb6bf84412607847b2fc10988b502169"],["/tags/局域网攻击/index.html","0046073ce53f8134b8757179a380bd05"],["/tags/常用指令/index.html","e6c493bc6dde858438a9719a5c9780f5"],["/tags/心得/index.html","6bc2cf493f16910450135f9d079180e4"],["/tags/文件上传漏洞/index.html","73848193bbdd72a93598d9b706fa2930"],["/tags/文件包含/index.html","6b3c8d2e547de273804cabd135fdf140"],["/tags/流量分析/index.html","2cacac3f786e8a94ef90459c7882360e"],["/tags/渗透/index.html","d34e18a892598d80665c9627820defcc"],["/tags/渗透测试/index.html","359a2002033649327cd1ff564a4a980c"],["/tags/漏洞复现/index.html","b22b97b3ba6cfd46eb1322d272fa755d"],["/tags/爆破/index.html","23bb66d933b8808840bad68563b30627"],["/tags/留言板/index.html","99339666b39d9ad783d7243caa985dd5"],["/tags/评论系统/index.html","3eba618f796dab29d08edcf999ba6dc0"],["/tags/赛后复盘/index.html","3faaeefa3790cc2ac0d0fdbfb7861240"],["/tags/黑盒测试/index.html","e7be95b314cda32893e7cb8f813a884b"]];
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
