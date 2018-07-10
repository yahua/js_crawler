
var timeOutLength = 30 * 1000;  //超时时间 30s

//开始爬取资源
function reptileResource(websiteUrl, html) {

    //设置超时时间
    var timeId = setTimeout(function () {
        crawler_end(websiteUrl, JSON.stringify([], undefined, 4));
        return '';
    }, timeOutLength);

    //开始爬取
    crawler_start(websiteUrl);

    crawler_log('进入网站爬取')
    var resourceList = crawlerUseWebsite(websiteUrl, html);
    if (!resourceList || resourceList.length==0) {
        crawler_log('进入通用方法爬取')
        resourceList = crawlerUseCommon(websiteUrl, html);
    }
    //下载websiteUrl对应的html
    if (!resourceList || resourceList.length==0) {
        html = getHtmlWithUrl(websiteUrl);
        crawler_log('下载网页，进入网站爬取')
        resourceList = crawlerUseWebsite(websiteUrl, html);
        if (!resourceList || resourceList.length==0) {
            crawler_log('下载网页，进入通用爬取')
            resourceList = crawlerUseCommon(websiteUrl, html);
        }
    }
    var jsonStr = JSON.stringify(resourceList, undefined, 4);
    clearTimeout(timeId);

    //结束爬取
    crawler_end(websiteUrl, jsonStr);

    return jsonStr;
}

//爬取已知的网站
function crawlerUseWebsite(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }
    //获取host
    var host = getUrlInfo(websiteUrl)['host'];
    if (host.indexOf('instagram') != -1) {
        return ins_crawler(websiteUrl, html);
    }else if (host.indexOf('facebook') != -1) {
        return facebook_crawler(websiteUrl, html);
    }else if (host.indexOf('xnxx') != -1 ||
        host.indexOf('xvideos') != -1) {
        return xnxx_xvideos_crawler(websiteUrl, html);
    }else if (host.indexOf('xhamster') != -1) {
        return xhamster_crawler(websiteUrl, html);
    }else if (host.indexOf('pornhub') != -1) {
        return pornhub_crawler(websiteUrl, html);
    }else if (host.indexOf('vimeo') != -1) {
        return vimeo_crawler(websiteUrl, html);
    }else if (host.indexOf('dailymotion') != -1) {
        return dailymotion_crawler(websiteUrl, html);
    }else if (host.indexOf('videos.pexels') != -1) {
        return videospexels_crawler(websiteUrl, html);
    }else if (host.indexOf('esm3') != -1) {
        return esm3_crawler(websiteUrl, html);
    }
    return [];
}

function crawlerUseCommon(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }
    var resourceList = [];

    var videoList = other_crawler(websiteUrl, html);
    if (videoList && videoList.length>0) {
        resourceList = resourceList.concat(videoList);
    }
    var audioList = other_audio_crawler(websiteUrl, html);
    if (audioList && audioList.length>0) {
        resourceList = resourceList.concat(audioList);
    }

    return resourceList;
}