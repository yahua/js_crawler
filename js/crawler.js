
//crawler();

function crawler() {
    var url = 'http://www.xnxx.com';
    html = "<!doctype html>\n" +
        "<html class=\"xv-responsive\" lang=\"zh\">\n" +
        "<head>\n" +
        "<title>Asian Woman 視頻 - XVIDEOS.COM</title>\n" +
        "<meta charset=\"utf-8\">\n" +
        "<!--[if IE]><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><![endif]-->\n" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
        "<meta name=\"keywords\" content=\"xvideos,xvideos.com, x videos,x video,porn,video,videos,\"/>\n" +
        "<meta name=\"description\" content=\"XVIDEOS Asian Woman 視頻, 免費的\"/>\n" +
        "<meta name=\"verify-v1\" content=\"3Awl+ctS3GOag+hKJiSg9SQQ2MR/GwV8H/PAgMhGhcM=\"/>\n" +
        "<meta name=\"RATING\" content=\"RTA-5042-1996-1400-1577-RTA\"/>\n" +
        "<meta http-equiv=\"pics-Label\" content='(pics-1.1 \"http://www.icra.org/pics/vocabularyv03/\" l gen true for \"http://xvideos.com\" r (n 3 s 3 v 0 l 3 oa 0 ob 0 oc 0 od 0 oe 0 of 0 og 0 oh 0 c 3) gen true for \"http://www.xvideos.com\" r (n 3 s 3 v 0 l 3 oa 0 ob 0 oc 0 od 0 oe 0 of 0 og 0 oh 0 c 3))'/>\n" +
        "<link rel=\"meta\" href=\"https://www.xvideos.com/labels.rdf\" type=\"application/rdf xml\" title=\"ICRA labels\"/>\n" +
        "<link rel=\"search\" type=\"application/opensearchdescription+xml\" title=\"XVideos\" href=\"/rss/rss.xml\">\n" +
        "<meta name=\"format-detection\" content=\"telephone=no\">\n" +
        "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\">\n" +
        "<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\">\n" +
        "<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\">\n" +
        "<link rel=\"manifest\" href=\"/manifest.json\">\n" +
        "<link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg\" color=\"#de2600\">\n" +
        "<meta name=\"theme-color\" content=\"#000000\">\n" +
        "<link rel=\"stylesheet\" href=\"https://static.xvideos.com/v-ea96d0a1745/v3/css/default/main.css\">\n" +
        "<script>if(!window.xv){window.xv={};}window.xv.conf={\"sitename\":\"default\",\"domains\":{\"slave\":\"https://www.xvideos.com\",\"static\":\"https://static.xvideos.com\",\"premium\":\"https://www.xvideos.red\"},\"dyn\":{\"pagefilter\":\"straight\",\"i18nvers\":{\"front\":{\"en\":\"5ad734a86bb\",\"zh\":\"3d8ab2855c8\"},\"xvplayer\":{\"en\":\"d3727e17c96\",\"zh\":\"689d1bc994e\"}},\"nb_thumbs_cols\":[],\"premium_domain\":\"https:\\/\\/www.xvideos.red\",\"has_premium\":true,\"is_premium\":false,\"disp_removeads\":false,\"gentime\":1527579536,\"ip\":\"47.88.159.161\",\"country\":\"SG\",\"lazyloading\":false,\"is_mobile\":true,\"is_smartphone\":true,\"browser\":\"Safari\",\"chat\":{\"enabled\":true,\"firebase\":{\"apiKey\":\"AIzaSyBdA3GTILPUH3e5yaWr0uSlhhnqf-92dA8\",\"authDomain\":\"xv-chat.firebaseapp.com\",\"databaseURL\":\"https:\\/\\/xv-chat.firebaseio.com\",\"projectId\":\"xv-chat\",\"storageBucket\":\"xv-chat.appspot.com\",\"messagingSenderId\":\"241416482003\"},\"server_master\":\"chat-private-master.xvideos.com\",\"cookie_name\":\"HEXAVID_LOGIN\",\"prefs\":[],\"nb_friends\":0},\"forcedcountry\":false,\"vp\":{\"allowed\":true,\"codec\":\"ts\",\"disabled\":false},\"ls\":{\"buttons\":[{\"name\":\"nb_vids_per_row\"},{\"name\":\"video_preview\"}]},\"login_info\":{\"is_logged\":false,\"is_premium\":false,\"profile\":false,\"iptrusted\":0,\"recaptchakey\":\"6LeEkhMTAAAAAFrfG3CxNAT9JiM1oLIkyU7UuYYQ\",\"invrecaptchakey\":\"6LcM6ScUAAAAAHFxb4HmgMyNHrfi61bf_USRJ4uo\"},\"locale\":\"zh\",\"countries\":[[\"BT\",\"\u4e0d\u4e39\"],[\"TL\",\"\u4e1c\u5e1d\u6c76\"],[\"CN\",\"\u4e2d\u56fd\"],[\"CF\",\"\u4e2d\u975e\u5171\u548c\u56fd\"],[\"DK\",\"\u4e39\u9ea6\"],[\"UA\",\"\u4e4c\u514b\u5170\"],[\"UZ\",\"\u4e4c\u5179\u522b\u514b\u65af\u5766\"],[\"UG\",\"\u4e4c\u5e72\u8fbe\"],[\"UY\",\"\u4e4c\u62c9\u572d\"],[\"TD\",\"\u4e4d\u5f97\"],[\"YE\",\"\u4e5f\u95e8\"],[\"AP\",\"\u4e9a\u6d32\\/\u592a\u5e73\u6d0b\u533a\u57df\"],[\"AM\",\"\u4e9a\u7f8e\u5c3c\u4e9a\"],[\"IL\",\"\u4ee5\u8272\u5217\"],[\"IQ\",\"\u4f0a\u62c9\u514b\"],[\"IR\",\"\u4f0a\u6717\u4f0a\u65af\u5170\u5171\u548c\u56fd\"],[\"BZ\",\"\u4f2f\u5229\u5179\"],[\"CV\",\"\u4f5b\u5f97\u89d2\"],[\"RU\",\"\u4fc4\u7f57\u65af\"],[\"BG\",\"\u4fdd\u52a0\u5229\u4e9a\"],[\"HR\",\"\u514b\u7f57\u5730\u4e9a\"],[\"GU\",\"\u5173\u5c9b\"],[\"GM\",\"\u5188\u6bd4\u4e9a\"],[\"IS\",\"\u51b0\u5c9b\"],[\"GN\",\"\u51e0\u5185\u4e9a\"],[\"GW\",\"\u51e0\u5185\u4e9a\u6bd4\u7ecd\"],[\"LI\",\"\u5217\u652f\u6566\u58eb\u767b\"],[\"CG\",\"\u521a\u679c\"],[\"CD\",\"\u521a\u679c\u3001\u6c11\u4e3b\u5171\u548c\u56fd\"],[\"LY\",\"\u5229\u6bd4\u4e9a\"],[\"LR\",\"\u5229\u6bd4\u91cc\u4e9a\"],[\"CA\",\"\u52a0\u62ff\u5927\"],[\"GH\",\"\u52a0\u7eb3\"],[\"GA\",\"\u52a0\u84ec\"],[\"HU\",\"\u5308\u7259\u5229\"],[\"MP\",\"\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b\"],[\"AQ\",\"\u5357\u6781\u6d32\"],[\"SS\",\"\u5357\u82cf\u4e39\"],[\"ZA\",\"\u5357\u975e\"],[\"BW\",\"\u535a\u8328\u74e6\u7eb3\"],[\"QA\",\"\u5361\u5854\u5c14\"],[\"RW\",\"\u5362\u65fa\u8fbe\"],[\"LU\",\"\u5362\u68ee\u5821\"],[\"A2\",\"\u536b\u661f\"],[\"IN\",\"\u5370\u5ea6\"],[\"ID\",\"\u5370\u5ea6\u5c3c\u897f\u4e9a\"],[\"GT\",\"\u5371\u5730\u9a6c\u62c9\"],[\"EC\",\"\u5384\u74dc\u591a\u5c14\"],[\"ER\",\"\u5384\u7acb\u7279\u91cc\u4e9a\"],[\"CU\",\"\u53e4\u5df4\"],[\"CC\",\"\u53ef\u53ef\u7fa4\u5c9b\"],[\"TW\",\"\u53f0\u6e7e\"],[\"KG\",\"\u5409\u5c14\u5409\u65af\u65af\u5766\"],[\"DJ\",\"\u5409\u5e03\u63d0\"],[\"KZ\",\"\u54c8\u8428\u514b\u65af\u5766\"],[\"CO\",\"\u54e5\u4f26\u6bd4\u4e9a\"],[\"CR\",\"\u54e5\u65af\u8fbe\u9ece\u52a0\"],[\"CM\",\"\u5580\u9ea6\u9686\"],[\"RE\",\"\u56e2\u805a\"],[\"TV\",\"\u56fe\u74e6\u5362\"],[\"TM\",\"\u571f\u5e93\u66fc\u65af\u5766\"],[\"TR\",\"\u571f\u8033\u5176\"],[\"LC\",\"\u5723\u5362\u897f\u4e9a\"],[\"KN\",\"\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af\"],[\"ST\",\"\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4\"],[\"VC\",\"\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af\"],[\"VA\",\"\u5723\u6d01\u770b\u89c1 (\u68b5\u8482\u5188\u57ce\u5e02\u72b6\u6001)\"],[\"PM\",\"\u5723\u76ae\u57c3\u5c14\u548c\u5723\u76ae\u57c3\u5c14\"],[\"CX\",\"\u5723\u8bde\u5c9b\"],[\"SH\",\"\u5723\u8d6b\u52d2\u62ff\"],[\"SM\",\"\u5723\u9a6c\u529b\u8bfa\"],[\"GY\",\"\u572d\u4e9a\u90a3\"],[\"TZ\",\"\u5766\u6851\u5c3c\u4e9a\u8054\u5408\u5171\u548c\u56fd\"],[\"EG\",\"\u57c3\u53ca\"],[\"ET\",\"\u57c3\u585e\u4fc4\u6bd4\u4e9a\"],[\"KI\",\"\u57fa\u91cc\u5df4\u65af\"],[\"TJ\",\"\u5854\u5409\u514b\u65af\u5766\"],[\"SN\",\"\u585e\u5185\u52a0\u5c14\"],[\"RS\",\"\u585e\u5c14\u7ef4\u4e9a\"],[\"SL\",\"\u585e\u62c9\u5229\u6602\"],[\"CY\",\"\u585e\u6d66\u8def\u65af\"],[\"SC\",\"\u585e\u820c\u5c14\"],[\"MX\",\"\u58a8\u897f\u54e5\"],[\"TG\",\"\u591a\u54e5\"],[\"DM\",\"\u591a\u7c73\u5c3c\u52a0\"],[\"DO\",\"\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd\"],[\"AT\",\"\u5965\u5730\u5229\"],[\"VE\",\"\u59d4\u5185\u745e\u62c9\"],[\"BD\",\"\u5b5f\u52a0\u62c9\u56fd\"],[\"AO\",\"\u5b89\u54e5\u62c9\"],[\"AI\",\"\u5b89\u572d\u62c9\u5c9b\"],[\"AG\",\"\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe\"],[\"AD\",\"\u5b89\u9053\u5c14\"],[\"FM\",\"\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a\u3001\u8054\u90a6\"],[\"NI\",\"\u5c3c\u52a0\u62c9\u74dc\"],[\"NG\",\"\u5c3c\u65e5\u5229\u4e9a\"],[\"NE\",\"\u5c3c\u65e5\u5c14\"],[\"NP\",\"\u5c3c\u6cca\u5c14\"],[\"PS\",\"\u5df4\u52d2\u65af\u5766\u9886\u571f\"],[\"BS\",\"\u5df4\u54c8\u9a6c\"],[\"PK\",\"\u5df4\u57fa\u65af\u5766\"],[\"BB\",\"\u5df4\u5df4\u591a\u65af\"],[\"PG\",\"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a\"],[\"PY\",\"\u5df4\u62c9\u572d\"],[\"PA\",\"\u5df4\u62ff\u9a6c\"],[\"BH\",\"\u5df4\u6797\"],[\"BR\",\"\u5df4\u897f\"],[\"BF\",\"\u5e03\u57fa\u7eb3\u6cd5\u7d22\"],[\"BI\",\"\u5e03\u9686\u8fea\"],[\"GR\",\"\u5e0c\u814a\"],[\"PW\",\"\u5e15\u52b3\"],[\"CK\",\"\u5e93\u514b\u7fa4\u5c9b\"],[\"KY\",\"\u5f00\u66fc\u7fa4\u5c9b\"],[\"DE\",\"\u5fb7\u56fd\"],[\"IT\",\"\u610f\u5927\u5229\"],[\"SB\",\"\u6240\u7f57\u95e8\u7fa4\u5c9b\"],[\"TK\",\"\u6258\u514b\u52b3\"],[\"LV\",\"\u62c9\u6258\u7ef4\u4e9a\"],[\"NO\",\"\u632a\u5a01\"],[\"CZ\",\"\u6377\u514b\u5171\u548c\u56fd\"],[\"MD\",\"\u6469\u5c14\u591a\u74e6\u5171\u548c\u56fd\"],[\"MA\",\"\u6469\u6d1b\u54e5\"],[\"MC\",\"\u6469\u7eb3\u54e5\"],[\"BN\",\"\u6587\u83b1\u8fbe\u9c81\u8428\u5170\u56fd\"],[\"FJ\",\"\u6590\u6d4e\"],[\"SZ\",\"\u65af\u5a01\u58eb\u5170\"],[\"SK\",\"\u65af\u6d1b\u4f10\u514b\"],[\"SI\",\"\u65af\u6d1b\u6587\u5c3c\u4e9a\"],[\"LK\",\"\u65af\u91cc\u5170\u5361\"],[\"SG\",\"\u65b0\u52a0\u5761\"],[\"NC\",\"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a\"],[\"NZ\",\"\u65b0\u897f\u5170\"],[\"JP\",\"\u65e5\u672c\"],[\"CL\",\"\u667a\u5229\"],[\"KP\",\"\u671d\u9c9c\u6c11\u4e3b\u4eba\u6c11\u5171\u548c\u56fd\"],[\"KH\",\"\u67ec\u57d4\u5be8\"],[\"GG\",\"\u683c\u6069\u897f\u5c9b\"],[\"GD\",\"\u683c\u6797\u7eb3\u8fbe\"],[\"GL\",\"\u683c\u9675\u5170\"],[\"GE\",\"\u683c\u9c81\u5409\u4e9a\"],[\"EU\",\"\u6b27\u6d32\"],[\"BE\",\"\u6bd4\u5229\u65f6\"],[\"MR\",\"\u6bdb\u91cc\u5854\u5c3c\u4e9a\"],[\"MU\",\"\u6bdb\u91cc\u6c42\u65af\"],[\"TO\",\"\u6c64\u52a0\"],[\"WF\",\"\u6c83\u5229\u65af\u548c\u5bcc\u56fe\u7eb3\"],[\"SA\",\"\u6c99\u7279\u963f\u62c9\u4f2f\"],[\"FR\",\"\u6cd5\u56fd\"],[\"GF\",\"\u6cd5\u5c5e\u572d\u4e9a\u90a3\"],[\"PF\",\"\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a\"],[\"FO\",\"\u6cd5\u7f57\u7fa4\u5c9b\"],[\"PL\",\"\u6ce2\u5170\"],[\"PR\",\"\u6ce2\u591a\u9ece\u5404\"],[\"BA\",\"\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3\"],[\"TH\",\"\u6cf0\u56fd\"],[\"ZW\",\"\u6d25\u5df4\u5e03\u97e6\"],[\"HN\",\"\u6d2a\u90fd\u62c9\u65af\"],[\"HT\",\"\u6d77\u5730\"],[\"AU\",\"\u6fb3\u5927\u5229\u4e9a\"],[\"MO\",\"\u6fb3\u95e8\"],[\"IE\",\"\u7231\u5c14\u5170\"],[\"EE\",\"\u7231\u6c99\u5c3c\u4e9a\"],[\"JM\",\"\u7259\u4e70\u52a0\"],[\"TC\",\"\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b\"],[\"TT\",\"\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5\"],[\"BO\",\"\u73bb\u5229\u7ef4\u4e9a\"],[\"JE\",\"\u7403\u8863\"],[\"NR\",\"\u7459\u9c81\"],[\"SE\",\"\u745e\u5178\"],[\"CH\",\"\u745e\u58eb\"],[\"GP\",\"\u74dc\u5fb7\u7f57\u666e\"],[\"VU\",\"\u74e6\u52aa\u963f\u56fe\"],[\"BY\",\"\u767d\u4fc4\u7f57\u65af\"],[\"BM\",\"\u767e \u6155 \u5927\"],[\"GI\",\"\u76f4\u5e03\u7f57\u9640\"],[\"FK\",\"\u798f\u514b\u5170 (\u9a6c\u5c14\u7ef4\u7eb3\u65af) \u7fa4\u5c9b\"],[\"KW\",\"\u79d1\u5a01\u7279\"],[\"KM\",\"\u79d1\u6469\u7f57\"],[\"CI\",\"\u79d1\u7279\u8fea\u74e6\"],[\"PE\",\"\u79d8\u9c81\"],[\"TN\",\"\u7a81\u5c3c\u65af\"],[\"LT\",\"\u7acb\u9676\u5b9b\"],[\"SO\",\"\u7d22\u9a6c\u91cc\"],[\"JO\",\"\u7ea6\u65e6\"],[\"NA\",\"\u7eb3\u7c73\u6bd4\u4e9a\"],[\"NU\",\"\u7ebd\u57c3\"],[\"VI\",\"\u7ef4\u4eac\u7fa4\u5c9b, \u7f8e\u56fd\"],[\"VG\",\"\u7ef4\u4eac\u7fa4\u5c9b, \u82f1\u56fd\"],[\"MM\",\"\u7f05\u7538\"],[\"RO\",\"\u7f57\u9a6c\u5c3c\u4e9a\"],[\"US\",\"\u7f8e\u56fd\"],[\"AS\",\"\u7f8e\u5c5e\u8428\u6469\u4e9a\"],[\"LA\",\"\u8001\u631d\u4eba\u6c11\u6c11\u4e3b\u5171\u548c\u56fd\"],[\"KE\",\"\u80af\u5c3c\u4e9a\"],[\"FI\",\"\u82ac\u5170\"],[\"SD\",\"\u82cf\u4e39\"],[\"SR\",\"\u82cf\u91cc\u5357\"],[\"GB\",\"\u82f1\u56fd\"],[\"IO\",\"\u82f1\u5c5e\u5370\u5ea6\u6d0b\u9886\u5730\"],[\"NL\",\"\u8377\u5170\"],[\"AN\",\"\u8377\u5c5e\u5b89\u7684\u5217\u65af\u7fa4\u5c9b\"],[\"MZ\",\"\u83ab\u6851\u6bd4\u514b\"],[\"LS\",\"\u83b1\u7d22\u6258\"],[\"PH\",\"\u83f2\u5f8b\u5bbe\"],[\"SV\",\"\u8428\u5c14\u74e6\u591a\"],[\"WS\",\"\u8428\u6469\u4e9a\"],[\"PT\",\"\u8461\u8404\u7259\"],[\"MN\",\"\u8499\u53e4\"],[\"MS\",\"\u8499\u7279\u585e\u62c9\u7279\"],[\"EH\",\"\u897f\u6492\u54c8\u62c9\"],[\"ES\",\"\u897f\u73ed\u7259\"],[\"BJ\",\"\u8d1d\u5b81\"],[\"ZM\",\"\u8d5e\u6bd4\u4e9a\"],[\"GQ\",\"\u8d64\u9053\u51e0\u5185\u4e9a\"],[\"VN\",\"\u8d8a\u5357\"],[\"AZ\",\"\u963f\u585e\u62dc\u7586\"],[\"AF\",\"\u963f\u5bcc\u6c57\"],[\"DZ\",\"\u963f\u5c14\u53ca\u5229\u4e9a\"],[\"AL\",\"\u963f\u5c14\u5df4\u5c3c\u4e9a\"],[\"SY\",\"\u963f\u62c9\u4f2f\u53d9\u5229\u4e9a\u5171\u548c\u56fd\"],[\"AE\",\"\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd\"],[\"OM\",\"\u963f\u66fc\"],[\"AR\",\"\u963f\u6839\u5ef7\"],[\"AW\",\"\u963f\u9c81\u5df4\"],[\"KR\",\"\u97e9\u56fd\"],[\"HK\",\"\u9999\u6e2f\"],[\"MK\",\"\u9a6c\u5176\u987f\"],[\"MV\",\"\u9a6c\u5c14\u4ee3\u592b\"],[\"IM\",\"\u9a6c\u6069\u5c9b\"],[\"MW\",\"\u9a6c\u62c9\u7ef4\"],[\"MQ\",\"\u9a6c\u63d0\u5c3c\u514b\u5c9b\"],[\"MY\",\"\u9a6c\u6765\u897f\u4e9a\"],[\"YT\",\"\u9a6c\u7ea6\u7279\u5c9b\"],[\"MH\",\"\u9a6c\u7ecd\u5c14\u7fa4\u5c9b\"],[\"MT\",\"\u9a6c\u8033\u4ed6\"],[\"MG\",\"\u9a6c\u8fbe\u52a0\u65af\u52a0\"],[\"ML\",\"\u9a6c\u91cc\"],[\"LB\",\"\u9ece\u5df4\u5ae9\"],[\"ME\",\"\u9ed1\u5c71\"]]},\"data\":{\"action\":\"mozaique\",\"other_locales\":{\"cs\":{\"name\":\"Czech\",\"translated\":\"\u010ce\u0161tina\",\"country\":\"CZ\",\"rtl\":false},\"de\":{\"name\":\"German\",\"translated\":\"Deutsch\",\"country\":\"DE\",\"rtl\":false},\"en\":{\"name\":\"English\",\"translated\":\"English\",\"country\":\"GB\",\"rtl\":false},\"es\":{\"name\":\"Spanish\",\"translated\":\"Espa\u00f1ol\",\"country\":\"ES\",\"rtl\":false},\"fr\":{\"name\":\"French\",\"translated\":\"Fran\u00e7ais\",\"country\":\"FR\",\"rtl\":false},\"it\":{\"name\":\"Italian\",\"translated\":\"Italiano\",\"country\":\"IT\",\"rtl\":false},\"hu\":{\"name\":\"Hungarian\",\"translated\":\"Magyar\",\"country\":\"HU\",\"rtl\":false},\"nl\":{\"name\":\"Dutch\",\"translated\":\"Nederlandse\",\"country\":\"NL\",\"rtl\":false},\"no\":{\"name\":\"Norwegian\",\"translated\":\"Norsk\",\"country\":\"NO\",\"rtl\":false},\"pl\":{\"name\":\"Polish\",\"translated\":\"Polskie\",\"country\":\"PL\",\"rtl\":false},\"pt\":{\"name\":\"Portugese\",\"translated\":\"Portugu\u00eas\",\"country\":\"PT\",\"rtl\":false},\"ro\":{\"name\":\"Romanian\",\"translated\":\"Rom\u00e2n\u0103\",\"country\":\"RO\",\"rtl\":false},\"sv\":{\"name\":\"Swedish\",\"translated\":\"Svenska\",\"country\":\"SE\",\"rtl\":false},\"vi-VN\":{\"name\":\"Vietnamese\",\"translated\":\"Ti\u1ebfng Vi\u1ec7t\",\"country\":\"VN\",\"rtl\":false},\"tr\":{\"name\":\"Turkish\",\"translated\":\"T\u00fcrk\",\"country\":\"TR\",\"rtl\":false},\"el\":{\"name\":\"Greek\",\"translated\":\"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ae\",\"country\":\"GR\",\"rtl\":false},\"he\":{\"name\":\"Hebrew\",\"translated\":\"\u05e2\u05d1\u05e8\u05d9\u05ea\",\"country\":\"IL\",\"rtl\":true},\"ar\":{\"name\":\"Arabic\",\"translated\":\"\u0627\u0644\u0639\u0631\u0628\u064a\u0629\",\"country\":\"EG\",\"rtl\":true},\"hi\":{\"name\":\"Hindi\",\"translated\":\"\u0939\u093f\u0928\u094d\u0926\u0940\",\"country\":\"IN\",\"rtl\":false},\"ja\":{\"name\":\"Japenese\",\"translated\":\"\u65e5\u672c\u8a9e\",\"country\":\"JP\",\"rtl\":false}},\"show_disclaimer\":false,\"moz_type\":\"category\"}};</script>\n" +
        "<script src=\"https://static.xvideos.com/v-2382ff984f3/v3/js/skins/min/default.header.static.js\"></script>\n" +
        "</head>\n" +
        "<body class=\"should-have-side-tf-tower\">\n" +
        "<div id=\"page\">\n" +
        "<div id=\"header\">\n" +
        "<header>\n" +
        "<div class=\"stripe white-stripe\">\n" +
        "<h1 class=\"hidden\">XVIDEOS.COM</h1>\n" +
        "<div class=\"header-icons\" id=\"header-mobile-right\">\n" +
        "\n" +
        "<a href=\"#\" id=\"mobile-login-btn\" class=\"btn btn-default mobile-show-inline-block\"><span class=\"icon user logo-bg mobile-show-inline-block\">&nbsp;</span><span class=\"mobile-hide\">ACCOUNT</span></a><a href=\"/account/create\" class=\"btn btn-default menu-login-acct mobile-hide\" data-mode=\"signup\">Join for FREE</a> <a href=\"/account\" class=\"btn btn-login menu-login-acct mobile-hide\" data-mode=\"signin\">登入</a>\n" +
        "<a id=\"language-switcher\"><span class=\"flag flag-cn\" title=\"中文\"></span></a>\n" +
        "<a href=\"/switch-theme\" class=\"icon theme-dark\" id=\"theme-switcher-btn\" title=\"換到較暗的主題背景\"></a>\n" +
        "</div>\n" +
        "<a href=\"#\" class=\"animated-hamburger\" id=\"header-menu-toggle\" title=\"切换菜单\">\n" +
        "<span class=\"an-h-1\"></span>\n" +
        "<span class=\"an-h-2\"></span>\n" +
        "<span class=\"an-h-3\"></span>\n" +
        "<span class=\"an-h-4\"></span>\n" +
        "</a>\n" +
        "<a href=\"#\" class=\"icon-f icf-search mobile-show\" id=\"header-mobile-search-toggle\" title=\"切換搜索\"></a>\n" +
        "<a href=\"/\" class=\"logo not-premium\" id=\"site-logo-link\">\n" +
        "<svg id=\"site-logo-svg\" height=\"36\" width=\"144\">\n" +
        "<image xlink:href=\"https://static.xvideos.com/v3/img/skins/default/xvideos.com.svg\"\n" +
        "src=\"https://static.xvideos.com/v3/img/skins/default/xvideos.com.png\"\n" +
        "title=\"XVideos 主頁\"\n" +
        "height=\"36\" width=\"144\"\n" +
        "class=\"no-blur\" id=\"site-logo\"/>\n" +
        "</svg>\n" +
        "</a>\n" +
        "\n" +
        "<form action=\"/\" id=\"xv-search-form\" class=\"mobile-hide\">\n" +
        "<div class=\"cont\">\n" +
        "<div class=\"input-group\">\n" +
        "<input type=\"text\" name=\"k\" value=\"\" class=\"search-input form-control\" maxlength=\"2048\" placeholder=\"Search 8,192,975 videos\" /><span class=\"input-group-btn\"><button type=\"submit\" title=\"搜索\" class=\"search-submit btn btn-default\"><span class=\"icon-f icf-search\"></span><span class=\"mobile-show-inline-block\">搜索</span></button></span>\n" +
        "</div>\n" +
        "</div>\n" +
        "</form>\n" +
        "<h2 class=\"mobile-hide\">\t\t\t\t\t\t\t<span class=\"alt\"><span class=\"text-danger\">更大</span> <span class=\"text-danger\"> 更強 </span> <span class=\"text-danger\">X</span><strong>VIDEOS.COM</strong></span>\t\t\t</h2>\n" +
        "</div>\n" +
        "<h2 id=\"mobile-slogan\" class=\"mobile-show\">\t\t\t\t\t\t\t<span class=\"alt\"><span class=\"text-danger\">更大</span> <span class=\"text-danger\"> 更強 </span> <span class=\"text-danger\">X</span><strong>VIDEOS.COM</strong></span>\t\t\t\t\t\t</h2>\t</header>\n" +
        "</div>\n" +
        "<div id=\"nav\" class=\"forced-opened\">\n" +
        "<nav>\n" +
        "<div class=\"main-categories ordered-label-list\"><ul><li class=\"mobile-show\"><a class=\"btn btn-default label main\" id=\"main-cat-sub-list-btn\">分类</a></li>\n" +
        "<li class=\"mobile-hide\"><a class=\"country-switch btn btn-default main\" data-country=\"sg\">新加坡 <span class=\"flag-small flag-sg\"></span> &#9660;</a></li>\n" +
        "<li class=\"mobile-show\" id=\"version-country-switch-li\"><a id=\"version-country-switch-a\" class=\"mobile-country-switch btn btn-default\" data-country=\"sg\">Version : <span class=\"flag-small flag-sg\"></span> 新加坡</a></li>\n" +
        "<li><a class=\"btn btn-default label\" href=\"/best\">最佳影片</a></li>\n" +
        "<li><a class=\"btn btn-default label\" href=\"/pornstars-index\">色情明星</a></li>\n" +
        "<li><a class=\"btn btn-default label\" href=\"/channels-index\">頻道</a></li>\n" +
        "<li><a class=\"btn btn-default label\" href=\"/verified/videos\">100% 通过验证</a></li>\n" +
        "<li><a class=\"btn btn-default label\" href=\"/profileslist\">簡介</a></li>\n" +
        "<li class=\"sub-list\" id=\"main-cat-sub-list\"><ul><li class=\"dyn\"><a href=\"/lang/chinese\" class=\"btn btn-default\"><span class=\"flag-small flag-cn\"></span> 說中文的色情</a></li>\n" +
        "<li class=\"dyn\"><a href=\"/lang/japanese\" class=\"btn btn-default\"><span class=\"flag-small flag-jp\"></span> 日本のアダルト動画</a></li>\n" +
        "<li class=\"dyn\"><a href=\"/lang/korean\" class=\"btn btn-default\"><span class=\"flag-small flag-kr\"></span> 한국어 포르노</a></li>\n" +
        "<li class=\"dyn\"><a href=\"/lang/thai\" class=\"btn btn-default\"><span class=\"flag-small flag-th\"></span> หนังโป๊ไทย</a></li>\n" +
        "<li class=\"dyn\"><a href=\"/lang/viet_nam\" class=\"btn btn-default\"><span class=\"flag-small flag-vn\"></span> Khiêu dâm ở Việt Nam</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Arab-159\">Arab</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/ASMR-229\">ASMR</a></li>\n" +
        "<li class=\"dyn  topterm topterm-5\"><a class=\"btn btn-default\" href=\"/?k=china&top\">China</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Fisting-165\">Fisting</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Fucked+Up+Family-81\">Fucked Up Family</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Gapes-167\">Gapes</a></li>\n" +
        "<li class=\"dyn  topterm topterm-18\"><a class=\"btn btn-default\" href=\"/?k=japanese+forced&top\">Japanese forced</a></li>\n" +
        "<li class=\"dyn  topterm topterm-10\"><a class=\"btn btn-default\" href=\"/?k=japanese+massage&top\">Japanese massage</a></li>\n" +
        "<li class=\"dyn  topterm topterm-7\"><a class=\"btn btn-default\" href=\"/?k=japanese+mom&top\">Japanese mom</a></li>\n" +
        "<li class=\"dyn  topterm topterm-17\"><a class=\"btn btn-default\" href=\"/?k=japanese+teen&top\">Japanese teen</a></li>\n" +
        "<li class=\"dyn  topterm topterm-8\"><a class=\"btn btn-default\" href=\"/?k=japanese+wife&top\">Japanese wife</a></li>\n" +
        "<li class=\"dyn  topterm topterm-11\"><a class=\"btn btn-default\" href=\"/?k=jav&top\">Jav</a></li>\n" +
        "<li class=\"dyn  topterm topterm-4\"><a class=\"btn btn-default\" href=\"/?k=korea&top\">Korea</a></li>\n" +
        "<li class=\"dyn  topterm topterm-6\"><a class=\"btn btn-default\" href=\"/?k=korean+movie&top\">Korean movie</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Lingerie-83\">Lingerie</a></li>\n" +
        "<li class=\"dyn  topterm topterm-15\"><a class=\"btn btn-default\" href=\"/?k=malay&top\">Malay</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Mature-38\">Mature</a></li>\n" +
        "<li class=\"dyn  topterm topterm-9\"><a class=\"btn btn-default\" href=\"/?k=movie&top\">Movie</a></li>\n" +
        "<li class=\"dyn  topterm topterm-12\"><a class=\"btn btn-default\" href=\"/?k=myanmar&top\">Myanmar</a></li>\n" +
        "<li class=\"dyn  topterm topterm-20\"><a class=\"btn btn-default\" href=\"/?k=orgasm&top\">Orgasm</a></li>\n" +
        "<li class=\"dyn  topterm topterm-1\"><a class=\"btn btn-default\" href=\"/?k=singapore&top\">Singapore</a></li>\n" +
        "<li class=\"dyn  topterm topterm-19\"><a class=\"btn btn-default\" href=\"/?k=sleep&top\">Sleep</a></li>\n" +
        "<li class=\"dyn  topterm topterm-16\"><a class=\"btn btn-default\" href=\"/?k=sleeping&top\">Sleeping</a></li>\n" +
        "<li class=\"dyn  topterm topterm-13\"><a class=\"btn btn-default\" href=\"/?k=taiwan&top\">Taiwan</a></li>\n" +
        "<li class=\"dyn  topterm topterm-2\"><a class=\"btn btn-default\" href=\"/?k=tamil&top\">Tamil</a></li>\n" +
        "<li class=\"dyn  topterm topterm-14\"><a class=\"btn btn-default\" href=\"/?k=teacher&top\">Teacher</a></li>\n" +
        "<li class=\"dyn  topterm topterm-3\"><a class=\"btn btn-default\" href=\"/?k=thai&top\">Thai</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Anal-12\">肛交</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Brunette-25\">褐发</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Black+Woman-30\">黑人</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Redhead-31\">紅髮</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Blonde-20\">金髮</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Big+Cock-34\">巨屌</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Big+Tits-23\">巨乳</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Big+Ass-24\">巨臀</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Blowjob-15\">口交</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Latina-16\">拉丁裔</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Milf-19\">辣媽</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Ass-14\">美臀</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/gay\"><span class=\"icon rainbow\"></span> 男同</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Lesbian-26\">女同</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/bbw-51\">胖女</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Squirting-56\">喷出</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Gangbang-69\">羣交</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/shemale\"><span class=\"icon shemale\"></span> 人妖</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Teen-13\">少女</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Cumshot-18\">射顏</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Cam+Porn-58\">摄像頭</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Bi+Sexual-62\">雙性戀</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Stockings-28\">絲襪</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Oiled-22\">塗油</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Asian+Woman-32\">亞洲的</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Amateur-65\">业余</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Interracial-27\">異族</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Indian-89\">印度的</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Creampie-40\">中出</a></li>\n" +
        "<li class=\"dyn \"><a class=\"btn btn-default\" href=\"/c/Solo+%26+Masturbation-33\">自慰</a></li></ul></li>\n" +
        "<li><a class=\"btn btn-default\" href=\"/tags\">所有標簽</a></li>\n" +
        "<li class=\"mobile-hide\"><a class=\"view-more btn btn-default\">+</a></li></ul></div>\n" +
        "\n" +
        "<a id=\"nav-language-switcher\" class=\"btn main mobile-show\">语言 : <span class=\"flag-small flag-cn\"></span> 中文</a>\n" +
        "<div id=\"nav_subs\" class=\"mobile-show\"></div>\n" +
        "</nav>\n" +
        "</div>\n" +
        "<div id=\"mobile-login-menu\" class=\"hidden\"><a href=\"#\" class=\"btn btn-default menu-login-acct\" data-mode=\"signup\">Join for FREE</a><a href=\"#\" class=\"btn btn-default menu-login-acct\" data-mode=\"signin\">登入</a><a href=\"/my-subs/videos\" class=\"btn btn-default my-subs-nav-link\">我的訂閱</a><a href=\"/videos-i-like\" class=\"btn btn-default\">我喜愛的視頻</a></div>\n" +
        "<a href=\"#\" id=\"x-messages-btn\" class=\"hidden\">\n" +
        "<span class=\"ic\">\n" +
        "<span class=\"icon-f icf-info-circle\" title=\"來自%site%的消息\"></span>\n" +
        "<span class=\"icon-f icf-close\" title=\"关闭\"></span>\n" +
        "</span>\n" +
        "<span class=\"badge\">0</span>\n" +
        "</a>\n" +
        "\t\t<div id=\"main\">\n" +
        "<h2 class=\"page-title\">Asian Woman</h2>\n" +
        "<div class=\"ordered-label-list\">\n" +
        "<ul>\n" +
        "<li><a class=\"btn btn-default current\">17,264視頻</a></li>\n" +
        "<li><a href=\"/c/Asian Woman-32\" class=\"btn btn-default label\">所有時間</a></li>\n" +
        "<li><a href=\"/c/month/Asian Woman-32\" class=\"btn btn-default\">本月</a></li>\n" +
        "<li><a href=\"/c/week/Asian Woman-32\" class=\"btn btn-default\">本週</a></li>\n" +
        "<li><a href=\"/c/2daysago/Asian Woman-32\" class=\"btn btn-default\">2天之前</a></li>\n" +
        "<li><a href=\"/c/yesterday/Asian Woman-32\" class=\"btn btn-default\">昨天</a></li>\n" +
        "<li><a href=\"/c/day/Asian Woman-32\" class=\"btn btn-default\">今天</a></li>\n" +
        "<li id=\"listing-settings\"><a class=\"btn btn-default\" title=\"設置\"><span class=\"icon-f icf-cog\"></span></a></li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "<div id=\"ad-tower-div\" class=\"mobile-hide\">\n" +
        "<div id=\"ad-tower\"></div>\n" +
        "\n" +
        "</div>\n" +
        "<div class=\"pagination \"><ul><li><a class=\"active\" href=\"\">1</a></li><li><a href=\"/c/1/Asian Woman-32\">2</a></li><li><a href=\"/c/2/Asian Woman-32\">3</a></li><li><a href=\"/c/3/Asian Woman-32\">4</a></li><li><a href=\"/c/4/Asian Woman-32\">5</a></li><li><a href=\"/c/5/Asian Woman-32\">6</a></li><li><a href=\"/c/6/Asian Woman-32\">7</a></li><li><a href=\"/c/7/Asian Woman-32\">8</a></li><li><a href=\"/c/8/Asian Woman-32\">9</a></li><li><a href=\"/c/9/Asian Woman-32\">10</a></li><li><a href=\"/c/10/Asian Woman-32\">11</a></li><li><a href=\"/c/11/Asian Woman-32\">12</a></li><li><a href=\"/c/12/Asian Woman-32\">13</a></li><li><a href=\"/c/13/Asian Woman-32\">14</a></li><li><a href=\"/c/14/Asian Woman-32\">15</a></li><li><a href=\"/c/15/Asian Woman-32\">16</a></li><li><a href=\"/c/16/Asian Woman-32\">17</a></li><li><a href=\"/c/1/Asian Woman-32\" class=\"no-page next-page\">下一步</a></li></ul></div>\t\t\t\t\t\t\t\t\t\t<div id=\"content\">\n" +
        "<div class=\"mozaique\">\n" +
        "<div id=\"video_27897327\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video27897327/korean_movie_4\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://images-llnw.xvideos-cdn.com/videos/thumbs169/c7/bd/7c/c7bd7c32085ffbe2c8c9c6c28e173cf7/c7bd7c32085ffbe2c8c9c6c28e173cf7.4.jpg\" data-idcdn=\"1\" data-videoid=\"27897327\" id=\"pic_27897327\" /></a></div></div><p><a href=\"/video27897327/korean_movie_4\" title=\"korean movie 4\">korean movie 4</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/janetbenson61\">Janetbenson61</a><span> - 1.6M Views</span>\n" +
        "- <span class=\"duration\">43 min</span></span></p></div><script>xv.thumbs.prepareVideo(27897327);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_32526163\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video32526163/girl_big_tits_japan_-jav18hd.net\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/01/b0/27/01b02752397c93ce69e261f13c06b692/01b02752397c93ce69e261f13c06b692.22.jpg\" data-idcdn=\"7\" data-videoid=\"32526163\" id=\"pic_32526163\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video32526163/girl_big_tits_japan_-jav18hd.net\" title=\"girl big tits japan -Jav18HD.net\">girl big tits japan -Jav18HD.net</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/girlbigtits3\">Girlbigtits3</a><span> - 1M Views</span>\n" +
        "- <span class=\"duration\">4 min</span></span></p></div><script>xv.thumbs.prepareVideo(32526163);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_34955311\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video34955311/chinese_femdom_1458\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/c9/72/2d/c9722d2dc3cea68322eff7acf68823fc/c9722d2dc3cea68322eff7acf68823fc.20.jpg\" data-idcdn=\"7\" data-videoid=\"34955311\" id=\"pic_34955311\" /></a></div></div><p><a href=\"/video34955311/chinese_femdom_1458\" title=\"Chinese femdom 1458\">Chinese femdom 1458</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/slave-viet\">Slave-viet</a><span> - 97.1k Views</span>\n" +
        "- <span class=\"duration\">18 min</span></span></p></div><script>xv.thumbs.prepareVideo(34955311);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_27676379\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video27676379/cumshot_in_front_of_korean_girl\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/9e/63/9b/9e639ba82ca70a1fa443711a96bee4b4/9e639ba82ca70a1fa443711a96bee4b4.26.jpg\" data-idcdn=\"7\" data-videoid=\"27676379\" id=\"pic_27676379\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video27676379/cumshot_in_front_of_korean_girl\" title=\"cumshot in front of korean girl\">cumshot in front of korean girl</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/janetbenson61\">Janetbenson61</a><span> - 468.2k Views</span>\n" +
        "- <span class=\"duration\">52 sec</span></span></p></div><script>xv.thumbs.prepareVideo(27676379);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_36320301\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video36320301/blasting_the_sluts_in_a_very_hot_foursome\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/3f/fb/65/3ffb65a72c7a5126db5a7e5df4caf7b4/3ffb65a72c7a5126db5a7e5df4caf7b4.1.jpg\" data-idcdn=\"2\" data-videoid=\"36320301\" id=\"pic_36320301\" /></a></div><span class=\"video-hd-mark\">HD+</span></div><p><a href=\"/video36320301/blasting_the_sluts_in_a_very_hot_foursome\" title=\"Blasting the sluts in a very hot foursome\">Blasting the sluts in a very hot foursome</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/japan-hdv\">Japan Hdv</a><span> - 112.1k Views</span>\n" +
        "- <span class=\"duration\">8 min</span></span></p></div><script>xv.thumbs.prepareVideo(36320301);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_28549839\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video28549839/korean_schoolgirl_roleplay\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/0f/58/28/0f5828b9f31ebba5579811dccc20c124/0f5828b9f31ebba5579811dccc20c124.9.jpg\" data-idcdn=\"2\" data-videoid=\"28549839\" id=\"pic_28549839\" /></a></div></div><p><a href=\"/video28549839/korean_schoolgirl_roleplay\" title=\"korean schoolgirl roleplay\">korean schoolgirl roleplay</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/johnlee1954\">Johnlee1954</a><span> - 7M Views</span>\n" +
        "- <span class=\"duration\">41 sec</span></span></p></div><script>xv.thumbs.prepareVideo(28549839);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_28128807\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video28128807/cute_asian_teen_getting_her_pussy_fucked\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-l3.xvideos-cdn.com/videos/thumbs169/63/f7/27/63f727eaacff450a992d5b84b04846be/63f727eaacff450a992d5b84b04846be.18.jpg\" data-idcdn=\"3\" data-videoid=\"28128807\" id=\"pic_28128807\" /></a></div><span class=\"video-hd-mark\">HD+</span></div><p><a href=\"/video28128807/cute_asian_teen_getting_her_pussy_fucked\" title=\"Cute Asian teen getting her pussy fucked\">Cute Asian teen getting her pussy fucked</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/japan-hdv\">Japan Hdv</a><span> - 1.1M Views</span>\n" +
        "- <span class=\"duration\">8 min</span></span></p></div><script>xv.thumbs.prepareVideo(28128807);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_36082767\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video36082767/japanese_hottie_peeing\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/2c/b0/80/2cb080564e56e88204cd2612841bc316/2cb080564e56e88204cd2612841bc316.23.jpg\" data-idcdn=\"2\" data-videoid=\"36082767\" id=\"pic_36082767\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video36082767/japanese_hottie_peeing\" title=\"Japanese hottie peeing\">Japanese hottie peeing</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/peterfever\">Peter Fever</a><span> - 53.8k Views</span>\n" +
        "- <span class=\"duration\">10 min</span></span></p></div><script>xv.thumbs.prepareVideo(36082767);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_29913497\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video29913497/japan_stepmom_knows_best\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/17/d0/81/17d08142a3bb38e66128710a798279aa/17d08142a3bb38e66128710a798279aa.1.jpg\" data-idcdn=\"2\" data-videoid=\"29913497\" id=\"pic_29913497\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video29913497/japan_stepmom_knows_best\" title=\"Japan stepMom Knows Best\">Japan stepMom Knows Best</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/linda21104\">Linda21104</a><span> - 2.7M Views</span>\n" +
        "- <span class=\"duration\">22 min</span></span></p></div><script>xv.thumbs.prepareVideo(29913497);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_34510213\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video34510213/259luxu-931_sample_matome\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/d5/52/63/d552637b90185c9a2bf3ad6866509894/d552637b90185c9a2bf3ad6866509894.10.jpg\" data-idcdn=\"2\" data-videoid=\"34510213\" id=\"pic_34510213\" /></a></div><span class=\"video-hd-mark\">HD+</span></div><p><a href=\"/video34510213/259luxu-931_sample_matome\" title=\"259LUXU-931 sample matome\">259LUXU-931 sample matome</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/shiroutotv\">Shiroutotv</a><span> - 221.2k Views</span>\n" +
        "- <span class=\"duration\">50 sec</span></span></p></div><script>xv.thumbs.prepareVideo(34510213);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_35040095\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video35040095/korean_slut\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/66/5a/d0/665ad02e421e2d0ad4e5f038366da005/665ad02e421e2d0ad4e5f038366da005.12.jpg\" data-idcdn=\"2\" data-videoid=\"35040095\" id=\"pic_35040095\" /></a></div></div><p><a href=\"/video35040095/korean_slut\" title=\"korean slut\">korean slut</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/vikash991\">Vikash991</a><span> - 269.5k Views</span>\n" +
        "- <span class=\"duration\">2 min</span></span></p></div><script>xv.thumbs.prepareVideo(35040095);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_20749919\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video20749919/chinese_massage_in_park\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/6c/cc/40/6ccc40589fdac8a1d1eb4c3846bf2752/6ccc40589fdac8a1d1eb4c3846bf2752.14.jpg\" data-idcdn=\"2\" data-videoid=\"20749919\" id=\"pic_20749919\" /></a></div></div><p><a href=\"/video20749919/chinese_massage_in_park\" title=\"Chinese Massage in park\">Chinese Massage in park</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/jahid2700\">Jahid2700</a><span> - 2.4M Views</span>\n" +
        "- <span class=\"duration\">16 min</span></span></p></div><script>xv.thumbs.prepareVideo(20749919);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_31060491\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video31060491/japanese_music_teacher_abused_-_more_japanese_xxx_full_hd_porn_at_www.ifljapan.com\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/cd/e5/71/cde571fe08d5624fd66f95cea5091db5/cde571fe08d5624fd66f95cea5091db5.11.jpg\" data-idcdn=\"7\" data-videoid=\"31060491\" id=\"pic_31060491\" /></a></div></div><p><a href=\"/video31060491/japanese_music_teacher_abused_-_more_japanese_xxx_full_hd_porn_at_www.ifljapan.com\" title=\"Japanese Music Teacher Abused - More Japanese XXX Full HD Porn at www.IFLJAPAN.com\">Japanese Music Teacher Abused - More Japanese X...</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/best-japan-porn\">Best-japan-porn</a><span> - 3M Views</span>\n" +
        "- <span class=\"duration\">15 min</span></span></p></div><script>xv.thumbs.prepareVideo(31060491);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_31737563\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video31737563/busty_brunette_fucked_in_really_rough_manners\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/16/f2/a8/16f2a8f6f624f156ddcdf567b5c852c4/16f2a8f6f624f156ddcdf567b5c852c4.22.jpg\" data-idcdn=\"2\" data-videoid=\"31737563\" id=\"pic_31737563\" /></a></div></div><p><a href=\"/video31737563/busty_brunette_fucked_in_really_rough_manners\" title=\"Busty brunette fucked in really rough manners\">Busty brunette fucked in really rough manners</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/alljapanpass\">Alljapanpass</a><span> - 246.9k Views</span>\n" +
        "- <span class=\"duration\">5 min</span></span></p></div><script>xv.thumbs.prepareVideo(31737563);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_35984715\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video35984715/japanese_slut_pissing\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/ea/ed/95/eaed95b4099b4ff38eee8d0a3bb1509a/eaed95b4099b4ff38eee8d0a3bb1509a.15.jpg\" data-idcdn=\"2\" data-videoid=\"35984715\" id=\"pic_35984715\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video35984715/japanese_slut_pissing\" title=\"Japanese slut pissing\">Japanese slut pissing</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/peterfever\">Peter Fever</a><span> - 48.2k Views</span>\n" +
        "- <span class=\"duration\">10 min</span></span></p></div><script>xv.thumbs.prepareVideo(35984715);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_7184914\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video7184914/jap_gangbang_with_slim_doll_pounded_hardcore_outdoor\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/c3/b8/7d/c3b87dd62dd5d2685a539a0d9186d355/c3b87dd62dd5d2685a539a0d9186d355.4.jpg\" data-idcdn=\"7\" data-videoid=\"7184914\" id=\"pic_7184914\" /></a></div></div><p><a href=\"/video7184914/jap_gangbang_with_slim_doll_pounded_hardcore_outdoor\" title=\"Jap gangbang with slim doll pounded hardcore outdoor\">Jap gangbang with slim doll pounded hardcore ou...</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/avhotgirl\">Avhotgirl</a><span> - 2.2M Views</span>\n" +
        "- <span class=\"duration\">5 min</span></span></p></div><script>xv.thumbs.prepareVideo(7184914);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_25298151\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video25298151/korean_model_watch_moreat_asiangirls.cf\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/6b/17/54/6b175442ac528e7ebb634ecc276c0237/6b175442ac528e7ebb634ecc276c0237.12.jpg\" data-idcdn=\"7\" data-videoid=\"25298151\" id=\"pic_25298151\" /></a></div></div><p><a href=\"/video25298151/korean_model_watch_moreat_asiangirls.cf\" title=\"Korean model watch moreat asiangirls.cf\">Korean model watch moreat asiangirls.cf</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/asiangirlscf\">Asiangirlscf</a><span> - 1.4M Views</span>\n" +
        "- <span class=\"duration\">17 min</span></span></p></div><script>xv.thumbs.prepareVideo(25298151);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_16984425\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video16984425/asian_nurse_takes_a_brake_as_she_fucks\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/7b/30/e2/7b30e210deeb39dd436411d0f6af278a/7b30e210deeb39dd436411d0f6af278a.15.jpg\" data-idcdn=\"7\" data-videoid=\"16984425\" id=\"pic_16984425\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video16984425/asian_nurse_takes_a_brake_as_she_fucks\" title=\"Asian nurse takes a brake as she fucks\">Asian nurse takes a brake as she fucks</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/japan-hdv\">Japan Hdv</a><span> - 2M Views</span>\n" +
        "- <span class=\"duration\">8 min</span></span></p></div><script>xv.thumbs.prepareVideo(16984425);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_36366567\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video36366567/sniffing_her_bra_then_fucking_her_with_a_sloppy_creampie\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-hw.xvideos-cdn.com/videos/thumbs169/86/51/39/865139afbfef315fc36ef3fc5ba255b4/865139afbfef315fc36ef3fc5ba255b4.11.jpg\" data-idcdn=\"2\" data-videoid=\"36366567\" id=\"pic_36366567\" /></a></div></div><p><a href=\"/video36366567/sniffing_her_bra_then_fucking_her_with_a_sloppy_creampie\" title=\"Sniffing her bra then fucking her with a sloppy creampie\">Sniffing her bra then fucking her with a sloppy...</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/japan-hdv\">Japan Hdv</a><span> - 16k Views</span>\n" +
        "- <span class=\"duration\">1 min 5 sec</span></span></p></div><script>xv.thumbs.prepareVideo(36366567);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_26350809\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video26350809/german_amateur_jap_gros_seins3_mehr_auf_der_seite_frauenmeister\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://images-llnw.xvideos-cdn.com/videos/thumbs169/d9/c2/fe/d9c2fe9b0c580fea3dea4505b246f426/d9c2fe9b0c580fea3dea4505b246f426.16.jpg\" data-idcdn=\"1\" data-videoid=\"26350809\" id=\"pic_26350809\" /></a></div></div><p><a href=\"/video26350809/german_amateur_jap_gros_seins3_mehr_auf_der_seite_frauenmeister\" title=\"german amateur jap gros seins3 mehr auf der Seite  Frauenmeister\">german amateur jap gros seins3 mehr auf der Sei...</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/schau_auf_die_seite_frauenmeister\">Schau Auf Die Seite Frauenmeister</a><span> - 320.9k Views</span>\n" +
        "- <span class=\"duration\">6 min</span></span></p></div><script>xv.thumbs.prepareVideo(26350809);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_35058713\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video35058713/japanese_fuck\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-l3.xvideos-cdn.com/videos/thumbs169/7e/c4/5a/7ec45a1bfea8ed6c22663853ee71f6ff/7ec45a1bfea8ed6c22663853ee71f6ff.25.jpg\" data-idcdn=\"3\" data-videoid=\"35058713\" id=\"pic_35058713\" /></a></div></div><p><a href=\"/video35058713/japanese_fuck\" title=\"japanese fuck\">japanese fuck</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/vikash991\">Vikash991</a><span> - 734.1k Views</span>\n" +
        "- <span class=\"duration\">3 min</span></span></p></div><script>xv.thumbs.prepareVideo(35058713);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_27967277\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video27967277/more_korean_amateurs\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://images-llnw.xvideos-cdn.com/videos/thumbs169/01/0c/14/010c149ce0a4dcb07c4ebc67f14e6425/010c149ce0a4dcb07c4ebc67f14e6425.26.jpg\" data-idcdn=\"1\" data-videoid=\"27967277\" id=\"pic_27967277\" /></a></div></div><p><a href=\"/video27967277/more_korean_amateurs\" title=\"more korean amateurs\">more korean amateurs</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/janetbenson61\">Janetbenson61</a><span> - 1M Views</span>\n" +
        "- <span class=\"duration\">1h 20 min</span></span></p></div><script>xv.thumbs.prepareVideo(27967277);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_31919835\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video31919835/rubbing_on_her_clit_in_the_middle_of_the_road_with_integrity\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/cc/85/62/cc85624e71d5ded917f27a4f19eaaf86/cc85624e71d5ded917f27a4f19eaaf86.16.jpg\" data-idcdn=\"7\" data-videoid=\"31919835\" id=\"pic_31919835\" /></a></div></div><p><a href=\"/video31919835/rubbing_on_her_clit_in_the_middle_of_the_road_with_integrity\" title=\"Rubbing on her clit in the middle of the road with integrity\">Rubbing on her clit in the middle of the road w...</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/channels/japan-hdv\">Japan Hdv</a><span> - 372.6k Views</span>\n" +
        "- <span class=\"duration\">58 sec</span></span></p></div><script>xv.thumbs.prepareVideo(31919835);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n" +
        "<div id=\"video_29773983\" class=\"thumb-block \"><div class=\"thumb-inside\"><div class=\"thumb\"><a href=\"/video29773983/japan_frustrating_stepmom_creampie\"><img src=\"https://static.xvideos.com/img/lightbox/lightbox-blank.gif\" data-src=\"https://img-egc.xvideos-cdn.com/videos/thumbs169/96/6d/75/966d75a6642b25ea3af0b200516f9b2b/966d75a6642b25ea3af0b200516f9b2b.6.jpg\" data-idcdn=\"7\" data-videoid=\"29773983\" id=\"pic_29773983\" /></a></div><span class=\"video-hd-mark\">HD</span></div><p><a href=\"/video29773983/japan_frustrating_stepmom_creampie\" title=\"Japan frustrating stepmom creampie\">Japan frustrating stepmom creampie</a></p><p class=\"metadata\"><span class=\"bg\"><a href=\"/profiles/linda21104\">Linda21104</a><span> - 8.2M Views</span>\n" +
        "- <span class=\"duration\">1h 18 min</span></span></p></div><script>xv.thumbs.prepareVideo(29773983);</script>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "</div>\n" +
        "<div class=\"pagination \"><ul><li><a class=\"active\" href=\"\">1</a></li><li><a href=\"/c/1/Asian Woman-32\">2</a></li><li><a href=\"/c/2/Asian Woman-32\">3</a></li><li><a href=\"/c/3/Asian Woman-32\">4</a></li><li><a href=\"/c/4/Asian Woman-32\">5</a></li><li><a href=\"/c/5/Asian Woman-32\">6</a></li><li><a href=\"/c/6/Asian Woman-32\">7</a></li><li><a href=\"/c/7/Asian Woman-32\">8</a></li><li><a href=\"/c/8/Asian Woman-32\">9</a></li><li><a href=\"/c/9/Asian Woman-32\">10</a></li><li><a href=\"/c/10/Asian Woman-32\">11</a></li><li><a href=\"/c/11/Asian Woman-32\">12</a></li><li><a href=\"/c/12/Asian Woman-32\">13</a></li><li><a href=\"/c/13/Asian Woman-32\">14</a></li><li><a href=\"/c/14/Asian Woman-32\">15</a></li><li><a href=\"/c/15/Asian Woman-32\">16</a></li><li><a href=\"/c/16/Asian Woman-32\">17</a></li><li><a href=\"/c/1/Asian Woman-32\" class=\"no-page next-page\">下一步</a></li></ul></div>\t\t</div>\n" +
        "<div id=\"ad-footer\"></div>\n" +
        "<div class=\"remove-ads\">\n" +
        "<p>\n" +
        "\n" +
        "<span class=\"mobile-only-hide\">廣告網絡平臺 <a href=\"https://main.trafficfactory.biz/xvideos-signup\">TrafficFactory.biz</a></span>\n" +
        "</p>\n" +
        "</div>\n" +
        "<div id=\"footer\"><footer><div class=\"botLinks\"><a href=\"https://info.xvideos.com/legal/tos/\">服务条款</a> -\n" +
        "<a href=\"https://info.xvideos.com/\">上傳您的視頻</a> -\n" +
        "<span class=\"mobile-hide\"><a href=\"http://www.ant.com/video-downloader/\" target=\"_blank\">下載我們的視頻</a> - </span><a href=\"https://info.xvideos.com/content/\">刪除內容</a> - \n" +
        "<a href=\"https://main.trafficfactory.biz/xvideos-signup\">廣告投放</a> -\n" +
        "<a href=\"https://twitter.com/xvideoscom\" target=\"_blank\">XVideos on Twitter</a> -\n" +
        "<a href=\"/rss/rss.xml\">RSS 更新</a> -\n" +
        "<a href=\"/rss/del.xml\">RSS 刪除</a> - \t<a href=\"https://info.xvideos.com/\">更多選項</a></div><p class=\"slogan\">XVideos.com - 網絡上的最佳成人影視，100%免費</p></footer></div>\n" +
        "</div>\n" +
        "<script src=\"https://static.xvideos.com/v-36f20cfcd79/v3/js/skins/min/default.footer.static.js\"></script>\n" +
        "<script src=\"https://static.xvideos.com/v3/js/libs/jquery.min.js\"></script>\n" +
        "<script src=\"https://static.xvideos.com/v3/js/libs/jsmpeg.min.js\"></script>\n" +
        "<script>if(typeof(window.jQuery)==='undefined'){document.write('<script src=\"https://static.xvideos.com/v3/js/libs/jquery-1.7.2.min.js\"><\\/script>')}</script>\n" +
        "<script src=\"https://static.xvideos.com/v3/js/skins/min/require.static.js\"></script><script>require.onError=function(err){if(xv&&xv.console&&xv.console.logRJS){xv.console.logRJS(err);}else{throw err;}};require.config({\"waitSeconds\":300,\"baseUrl\":\"https:\\/\\/static.xvideos.com\\/v-687151260c2\\/v3\\/js\\/\",\"config\":{\"i18n\":{\"locale\":\"zh\"}}});define(\"config/main\",xv.conf);define(\"config/ads\",function(){return function(){return {\"site\":\"xvideos\",\"categories\":\"asian_woman\",\"tracker\":\"\",\"banners\":[{\"type\":\"tower\",\"nb_ban\":1,\"div_id\":\"ad-tower\",\"largescr\":true},{\"type\":\"footermobile\",\"nb_ban\":1,\"div_id\":\"ad-footer\"}]};};});require([\"skins/min/default\"]);</script>\n" +
        "<script>!function(){var e=function(){if(\"object\"!=typeof xv)return\"xv global namespace\";var e=\"/mobile\"===window.location.pathname.substring(0,7);if(!e&&\"object\"!=typeof xv.conf)return\"xv config\";var t=e?\"oldombile\":xv.conf.sitename||\"\",o=!e&&\"xnxx\"===t&&\"object\"==typeof xv.conf.data&&\"xnxx_contact\"===xv.conf.data.action;if(!o&&\"object\"!=typeof xv.utils)return\"header.js\";if(!e){var n=\"object\"==typeof xv.conf.data&&\"embed\"===xv.conf.data.action;if(!(\"xvideos\"!==t&&\"xnxx\"!==t||n||o||\"object\"==typeof xv.mobile))return\"footer.js\";if(!n&&\"function\"!=typeof jQuery)return\"jquery.js\";if(\"function\"!=typeof require)return\"require.js\";if(\"undefined\"==typeof html5player_onlyfake&&window.location.pathname.split(\"#\")[0].match(/^(\\/video(\\d+|-[\\da-z]+)\\/[-\\w\\.\\~]+|\\/embedframe\\/\\d+)$/)&&\"object\"!=typeof html5player)return\"player.js\"}var r=document.documentElement,a=r.currentStyle?r.currentStyle.fontFamily:!!window.getComputedStyle&&window.getComputedStyle(r,null).getPropertyValue(\"font-family\");return!1!==a&&\"sans-serif\"!==a&&\"skin.css\"}();if(!1!==e){var t=[\"hw\",\"l3\",\"st\"],o=\"st\";if(console.error(\"Failed to load \"+e+\" for CDN \"+o),t.length<2)return void console.warn(\"Not enough CDNs available\");for(var n in t)if(t[n]===o){n<t.length-1?(n++,o=t[n]):o=t[0];break}console.info(\"Switching to CDN \"+o);var r=new Date((new Date).getTime()+6048e5);document.cookie=\"hexavid_static=\"+o+\";expires=\"+r.toGMTString()+\";path=/;\"}}();</script>\n" +
        "\n" +
        "</body>\n" +
        "</html>\n";
    reptileResource(url, html)
}


//https://www.instagram.com/p/BjMXP0wBdwZ/?tagged=video
//开始爬取资源
function reptileResource(websiteUrl, html) {

    var resourceList = reptileWithHtml(websiteUrl, html);
    var jsonStr = JSON.stringify(resourceList, undefined, 4);
    console.log(jsonStr)

    //完成爬取
    //finishReptile(jsonStr);
}

function reptileWithHtml(websiteUrl, html) {

    console.log(html)
    if (!html) {
        return [];
    }
    //获取host
    var host = getUrlInfo(websiteUrl)['host'];
    var resourceList = [];
    if (host.indexOf('instagram') != -1) {
        resourceList = ins_crawler(websiteUrl, html);
    }
    if (host.indexOf('facebook') != -1) {
        resourceList = facebook_crawler(websiteUrl, html);
    }
    if (host.indexOf('twitter') != -1) {
        resourceList = twitter_crawler(websiteUrl, html);
    }
    if (host.indexOf('xnxx') != -1 ||
        host.indexOf('xvideos') != -1) {
        resourceList = xnxx_xvideos_crawler(websiteUrl, html);
    }

    return resourceList;
}

function xnxx_xvideos_crawler(websiteUrl, html) {

    if (html.indexOf('new HTML5Player') != -1) {
        return xnxx_xvideos_detail_crawler(websiteUrl, html);
    }else {
        return xnxx_xvideos_list_crawler(websiteUrl, html);
    }
}

function xnxx_xvideos_detail_crawler(websiteUrl, html) {

    var resultList = [];
    //获取详情的视频信息
    var title = getMiddleString(html, "html5player.setVideoTitle\\('", "'");
    var thumbUrl = getMiddleString(html, "html5player.setThumbUrl\\('", "'");
    //视频质量有两种
    var videoList = [];
    var highVideoUrl = getMiddleString(html, "html5player.setVideoUrlHigh\\('", "'");
    if (highVideoUrl) {
        videoList.push(highVideoUrl);
    }
    var lowVideoUrl = getMiddleString(html, "html5player.setVideoUrlLow\\('", "'");
    if (lowVideoUrl) {
        videoList.push(lowVideoUrl);
    }
    if (videoList.length >0 ){
        var object = {};
        object.websiteUrl = websiteUrl;
        object.thumbUrl = thumbUrl;
        object.name = title;
        object.videoUrlList = videoList;
        resultList.push(object);
    }

    //获取相关列表的视频信息
    var relateVideoString = getMiddleString(html, "video_related=\\[", "\\];");
    relateVideoString = "\[" + relateVideoString + "\]";
    var relateList = JSON.parse(relateVideoString);
    for (var i in relateList) {
        var object = relateList[i];
        if (!(object instanceof Object)) {
            continue;
        }
        var relateVideUrl = object['u'];
        if (!relateVideUrl) {
            continue;
        }
        if (relateVideUrl && !getUrlInfo(relateVideUrl)['scheme']){
            relateVideUrl = getUrlInfo(websiteUrl)['scheme'] + '://' + getUrlInfo(websiteUrl)['host'] + relateVideUrl;
        }
        var relateThumbUrl = object['i'];
        var relateName = object['tf'];

        var resourceInfo = {};
        resourceInfo.websiteUrl = websiteUrl;
        resourceInfo.thumbUrl = relateThumbUrl;
        resourceInfo.name = relateName;
        resourceInfo.videoUrlList = [relateVideUrl];
        resourceInfo.isNeedParse = true;
        resultList.push(resourceInfo);
    }

    return resultList;
}

function xnxx_xvideos_list_crawler(websiteUrl, html) {

    var resourceList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//div[@class='thumb-block '][starts-with(@id, 'video_')]", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
             // var nodeElement = document.createElement( 'html' );
             // nodeElement.innerHTML = node.innerHTML;
             var a_list = node.getElementsByTagName('a');
             console.log(a_list[0].attributes['href'].nodeValue);

            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}

function twitter_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var metaList = el.getElementsByTagName("meta");
    //获取缩略图与视频地址
    var thumbUrl;
    var videoUrl;
    for (var i=0;i<metaList.length;i++)
    {
        var subElement = metaList[i];
        var property = subElement.getAttribute('property');
        if (property=='og:image') {
            thumbUrl = subElement.getAttribute('content');
        }
        if (property=='og:video') {
            videoUrl = subElement.getAttribute('content');
        }
    }
    if (videoUrl) {
        //需要二次解析
        var json = [];
        var object = {};
        object.websiteUrl = websiteUrl;
        object.thumbUrl = thumbUrl;
        object.videoUrlList = [videoUrl];
        json.push(object);
        return json;
    }
    return [];
}

function facebook_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var metaList = el.getElementsByTagName("meta");
    //获取缩略图与视频地址
    var thumbUrl;
    var videoUrl;
    for (var i=0;i<metaList.length;i++)
    {
        var subElement = metaList[i];
        var property = subElement.getAttribute('property');
        if (property=='og:image') {
            thumbUrl = subElement.getAttribute('content');
        }
        if (property=='og:video') {
            videoUrl = subElement.getAttribute('content');
        }
    }
    if (videoUrl) {
        var json = [];
        var object = {};
        object.websiteUrl = websiteUrl;
        object.thumbUrl = thumbUrl;
        object.videoUrlList = [videoUrl];
        json.push(object);
        return json;
    }
    return [];
}

function ins_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var metaList = el.getElementsByTagName("meta");
    //获取type
    var type;
    for (var i=0;i<metaList.length;i++)
    {
        var subElement = metaList[i];
        var property = subElement.getAttribute('property');
        if (property=='og:type') {
            type = subElement.getAttribute('content');
        }
    }
    if (!type) {
        return [];
    }
    if (type.indexOf('video') != -1) {//视频类型
        //获取缩略图与视频地址
        var thumbUrl;
        var videoUrl;
        for (var i=0;i<metaList.length;i++)
        {
            var subElement = metaList[i];
            var property = subElement.getAttribute('property');
            if (property=='og:image') {
                thumbUrl = subElement.getAttribute('content');
            }
            if (property=='og:video') {
                videoUrl = subElement.getAttribute('content');
            }
        }
        if (videoUrl) {
            var json = [];
            var object = {};
            object.websiteUrl = websiteUrl;
            object.thumbUrl = thumbUrl;
            object.videoUrlList = [videoUrl];
            json.push(object);
            return json;
        }
    }else { //图集类型
        var reg = /window._sharedData = (.*?);</;
        var result = reg.exec(html);
        if (result.length > 0) {
            var imageJsonString = result[1];
            var object = JSON.parse(imageJsonString);
            var imageList = [];
            ins_findImageWithDict(object, imageList);
            if (imageList.length>0){
                var json = [];
                var object = {};
                object.websiteUrl = websiteUrl;
                object.thumbUrl = imageList.first;
                object.videoUrlList = imageList;
                object.resourceType = 1;
                json.push(object);
                return json;
            }
        }

    }

    return [];
}
function ins_findImageWithDict(dict, list) {

    for (var key in dict) {
        var object = dict[key];
        if (!object){
            continue;
        }
        if (Array.isArray(object)) {
            ins_findImageWithArray(object, list);
        }else if (object instanceof Object){
            if (object['__typename'] == 'GraphImage') {
                var imageUrl = object['display_url'];
                if (imageUrl) {
                    list.push(imageUrl);
                }
            }else  {
                ins_findImageWithDict(object, list);
            }
        }
    }
}
function ins_findImageWithArray(array, list) {

    for (var i in array) {
        var object = array[i];
        if (!object){
            continue;
        }
        if (Array.isArray(object)) {
            ins_findImageWithArray(object, list);
        }else if (object instanceof Object){
            ins_findImageWithDict(object, list);
        }
    }
}

//爬取成功，通知app
function finishReptile(content) {
    console.log(content);
    window.location = "yalla://finishReptile" + "/" + content;
}

function getMiddleString(string, start, end) {
    var reg = ''+start+'\(.*?\)'+end+'';
    var result = string.match(reg);
    if (result && result.length > 0) {
        return result[1];
    }
    return null;
}

function getUrlInfo(url) {

    var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    var result = parse_url.exec(url);
    var names = ["url","scheme","slash","host","port","path","query","hash"];
    if (result.length == 8) {
        return {'scheme':result[1],'host':result[3]};
    }else {
        return {};
    }
}
