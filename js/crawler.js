
//crawler();

function crawler() {
    //var object = xnxx_xvides_html();
    //var object = ins_html();
    //var object = facebook_html();
    var object = xhamster_html();
    var url = object['url'];
    var html = object['html'];
    reptileResource(url, html)
}


//开始爬取资源
function reptileResource(websiteUrl, html) {

    var resourceList = reptileWithHtml(websiteUrl, html);
    if (!resourceList || resourceList.length==0) {
        html = getHtmlWithUrl(websiteUrl);
        resourceList = reptileWithHtml(websiteUrl, html);
    }
    var jsonStr = JSON.stringify(resourceList, undefined, 4);
    console.log(jsonStr);

    return resourceList;
}

function reptileWithHtml(websiteUrl, html) {

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
    if (host.indexOf('xnxx') != -1 ||
        host.indexOf('xvideos') != -1) {
        resourceList = xnxx_xvideos_crawler(websiteUrl, html);
    }
    if (host.indexOf('xhamster') != -1) {
        resourceList = xhamster_crawler(websiteUrl, html);
    }
    if (host.indexOf('pornhub') != -1) {
        resourceList = pornhub_crawler(websiteUrl, html);
    }
    if (host.indexOf('vimeo') != -1) {
        resourceList = vimeo_crawler(websiteUrl, html);
    }

    return resourceList;
}




