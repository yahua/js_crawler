
//var download = require(["js/demo/downloadhtml"])
require(["js/crawler"])
require(["js/demo/downloadhtml"])
require(["js/tools"])


var websiteDict = {'facebook':'https://www.facebook.com/JTKPages/videos/1410461019062584/',
    'ins':'https://www.instagram.com/p/BjMXP0wBdwZ/?tagged=video',
    'porhub_list':'https://www.pornhub.com/',
    'porhub_detail':'https://www.pornhub.com/view_video.php?viewkey=ph5aadc84d4920e',
    'xnxx_list':'https://www.xnxx.com/',
    'xnxx_detail':'https://www.xnxx.com/video-l5yrx93/gofuckagirl_-_cute_teen_brunette_lika_make_rimming_and_great_anal_sex',
    'xviodes_list':'https://www.xvideos.com/c/Asian+Woman-32',
    'xvideo_detail':'https://www.xvideos.com/video37269517/chau_dau_bon_chao_cho_cu_tokuda_bang_mom_full_http_bit.ly_2iilbt8',
    'xhamster_list':'https://xhamster.com/',
    'xhamster_detail':'https://xhamster.com/videos/swallowed-big-tit-chanel-and-dana-swallow-it-all-9522794',
    'vimeo_list':'https://vimeo.com/search?q=1',
    'vimeo_detail':'https://vimeo.com/268010875',
    'dailymotion':'http://www.dailymotion.com/video/x6i0oyq',
    'videospexels':'https://videos.pexels.com/videos/video-of-people-walking-855564'};

function runTestInput() {

    var url = document.getElementById("id_input").value;

    document.getElementById("id_status").innerHTML = '爬取中...';
    var result = runTestWithWebsiteUrl(url);
    if (result) {
        document.getElementById("id_status").innerHTML = '爬取成功';
    }else {
        document.getElementById("id_status").innerHTML = '爬取失败， 详情见log';
    }

}

function runTestSelect() {

    var selectValue = document.getElementById("id_select").value;
    if (!websiteDict.hasOwnProperty(selectValue)) {
        document.getElementById("id_status").innerHTML = '无法获取到website url，请检查配置是否有效';
        return;
    }
    var url = websiteDict[selectValue];
    document.getElementById("id_status").innerHTML = '爬取中...';
    var result = runTestWithWebsiteUrl(url);
    if (result) {
        document.getElementById("id_status").innerHTML = '爬取成功';
    }else {
        document.getElementById("id_status").innerHTML = '爬取失败， 详情见log';
    }

}


function runTestAll() {

    document.getElementById("id_status").innerHTML = '爬取中...';
    for (var key in websiteDict) {
        var websiteUrl = websiteDict[key];
        var result = runTestWithWebsiteUrl(websiteUrl);

        if (result) {
        }else {
            document.getElementById("id_status").innerHTML = '爬取失败， 详情见log';
            return;
        }
    }
    document.getElementById("id_status").innerHTML = '爬取成功';
}


function runTestWithWebsiteUrl(url) {

    var scheme = getUrlInfo(url).scheme;
    var host = getUrlInfo(url).host;
    if (!scheme || !host) {
        document.getElementById("id_status").innerHTML = '无效的url' + url;
        return false;
    }

    console.log(url + '  爬取中...');
    try {
        var htmlrequest = downloadHtmlWithUrl(url)
        if (!htmlrequest.success) {
            console.log(url + '  爬取失败, 无法获取website的html');
            console.log(htmlrequest.html);
            return false;
        }
        var result = reptileResource(url, htmlrequest.html);
        var obj = JSON.parse(result);
        if (obj && obj.length>0) {
            var output = {"websiteUrl":url, "resourceList":obj};
            console.log(url + '  共爬取到' + obj.length + '个资源');
            console.log(JSON.stringify(output, undefined, 4));
            return true;
        }else {
            console.log(url + '  共爬取到0个资源');
            console.log(url + '  爬取失败');
            return false;
        }
    } catch (error) {
        //在错误发生时怎么处理
        console.log(url + '  爬取错误，详情见log');
        console.log(error);
        return false;
    }
}



