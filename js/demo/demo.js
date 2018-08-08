
//var download = require(["js/demo/downloadhtml"])
require(["js/interface/clientToJS"])
require(["js/demo/downloadhtml"])
require(["js/tools"])


var websiteDict = {'facebook':'https://www.facebook.com/JTKPages/videos/1410461019062584/',
    'ins_video':'https://www.instagram.com/p/BjMXP0wBdwZ/?tagged=video',
    'ins_photo':'https://www.instagram.com/p/Bkukc40A48T/?utm_source=ig_share_sheet&igshid=tpuw95i95enm',
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
    'videospexels':'https://videos.pexels.com/videos/video-of-people-walking-855564',
    'esm3_list_page':'https://www.esm3.com/',
    'esm3_art_page':'https://www.esm3.com/artist-164',
    'esm3_song_page':'https://www.esm3.com/song-4173.html',
    'esm3_download_page':'https://www.esm3.com/mp3/get.asp?sid=4173',
    'shahidlive':'http://shahidlive.co/vidpage_1217749',
    'r2sa':'https://www.r2sa.net/file.php?f=14986',
    'mbc':'http://www.mbc.net/ar/programs/al-asouf/articles/%D9%84%D8%AD%D8%B8%D8%A9-%D8%A5%D8%B0%D8%A7%D8%B9%D8%A9-%D8%AE%D8%A8%D8%B1-%D9%88%D9%81%D8%A7%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D9%83-%D9%81%D9%8A%D8%B5%D9%84.html',
    'rotana':'http://rotana.net/vod-series-clips/%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A8%D9%88%D9%85%D8%A8-%D8%B9%D8%A7%D9%85%D8%B1-%D9%88%D8%B4%D9%83%D9%88%D8%B4-%D9%8A%D8%AD%D8%B5%D9%84%D8%A7%D9%86-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B1/'};

function runTestInputHtml() {

    var url = document.getElementById("id_input_websiteUrl").value;
    var html = document.getElementById("id_input_html").value;

    document.getElementById("id_status").innerHTML = '爬取中...';
    var result = runTestWithWebsiteUrl(url, html);
    if (result) {
        document.getElementById("id_status").innerHTML = '爬取成功';
    }else {
        document.getElementById("id_status").innerHTML = '爬取失败， 详情见log';
    }

}

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


function runTestWithWebsiteUrl(url, html) {

    var scheme = getUrlInfo(url).scheme;
    var host = getUrlInfo(url).host;
    if (!scheme || !host) {
        document.getElementById("id_status").innerHTML = '无效的url' + url;
        return false;
    }

    console.log(url + '  爬取中...');
    try {
        var crawlerHtml = html;
        if (!crawlerHtml) {
            var htmlRequest = downloadHtmlWithUrl(url);
            if (!htmlRequest.success) {
                console.log(url + '  爬取失败, 无法获取website的html');
                console.log(htmlRequest.html);
                return false;
            }
            crawlerHtml = htmlRequest.html;
        }
        initCrawlerConfig(CrawlerClientType.test)
        var result = crawlerResource(url, crawlerHtml);
        var obj = JSON.parse(result);
        if (obj && obj.length>0) {
            var output = {"websiteUrl":url, "resourceList":obj};
            console.log(url + '  共爬取到' + obj.length + '个资源');
            console.log(JSON.stringify(output, undefined, 4));
            //检查资源的有效性
            var validResource = true;
            for (var i=0; i<obj.length; i++){
                var dict = obj[i];
                if (!dict.hasOwnProperty('websiteUrl')) {
                    console.log('没有设置资源的websiteUrl');
                    validResource = false;
                    break;
                }
                if (!dict['websiteUrl'] ||dict['websiteUrl'].length==0) {
                    console.log('资源的websiteUrl为空');
                    validResource = false;
                    break;
                }
                if (!dict.hasOwnProperty('isNeedParse')) {
                    var resourceUrlList = dict['resourceUrlList'];
                    if (!resourceUrlList || resourceUrlList.length==0) {
                        console.log('没有获取到资源的url');
                        validResource = false;
                        break;
                    }
                }
            }
            return validResource;
        }else {
            console.log(url + '  无法爬取到资源，请检查url或者js的完整性');
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



