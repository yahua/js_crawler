
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
    var jsonStr = JSON.stringify(resourceList, undefined, 4);
    console.log(jsonStr)

    //完成爬取
    //finishReptile(jsonStr);
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
    if (host.indexOf('twitter') != -1) {
        resourceList = twitter_crawler(websiteUrl, html);
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

//爬取成功，通知app
function finishReptile(content) {
    console.log(content);
    window.location = "yalla://finishReptile" + "/" + content;
}


