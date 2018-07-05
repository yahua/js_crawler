
//开始爬取资源
function reptileResource(websiteUrl, html) {

    var resourceList = reptileWithHtml(websiteUrl, html);
    if (!resourceList || resourceList.length==0) {
        html = getHtmlWithUrl(websiteUrl);
        resourceList = reptileWithHtml(websiteUrl, html);
    }
    var jsonStr = JSON.stringify(resourceList, undefined, 4);

    return jsonStr;
}

function reptileWithHtml(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }
    //获取host
    var host = getUrlInfo(websiteUrl)['host'];
    var resourceList = [];
    if (host.indexOf('instagram') != -1) {
        resourceList = ins_crawler(websiteUrl, html);
    }else if (host.indexOf('facebook') != -1) {
        resourceList = facebook_crawler(websiteUrl, html);
    }else if (host.indexOf('xnxx') != -1 ||
        host.indexOf('xvideos') != -1) {
        resourceList = xnxx_xvideos_crawler(websiteUrl, html);
    }else if (host.indexOf('xhamster') != -1) {
        resourceList = xhamster_crawler(websiteUrl, html);
    }else if (host.indexOf('pornhub') != -1) {
        resourceList = pornhub_crawler(websiteUrl, html);
    }else if (host.indexOf('vimeo') != -1) {
        resourceList = vimeo_crawler(websiteUrl, html);
    }else if (host.indexOf('dailymotion') != -1) {
        resourceList = dailymotion_crawler(websiteUrl, html);
    }else if (host.indexOf('videos.pexels') != -1) {
        resourceList = videospexels_crawler(websiteUrl, html);
    }else if (host.indexOf('esm3') != -1) {
        resourceList = esm3_crawler(websiteUrl, html);
    }else {
        resourceList = other_crawler(websiteUrl, html);
    }

    return resourceList;
}