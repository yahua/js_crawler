function dailymotion_crawler(websiteUrl, html) {

    //比较特殊，需要请求html  不需要客户端自带的html，  要不然一直爬取的是第一次打开的资源
    html = getHtmlWithUrl(websiteUrl);

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var metaList = el.getElementsByTagName("meta");
    //获取缩略图与视频地址
    var thumbUrl;
    var videoName;
    for (var i=0;i<metaList.length;i++)
    {
        var subElement = metaList[i];
        var property = subElement.getAttribute('property');
        if (property=='og:image') {
            thumbUrl = subElement.getAttribute('content');
        }
        if (property=='og:title') {
            videoName = subElement.getAttribute('content');
        }
    }
    var resourceUrlList = [];
    //获取视频信息
    var videoString = getMiddleString(html, "\"qualities\":{", "}]}");
    if (videoString) {
        videoString = "\{" + videoString + "\}]}";
        var videoInfo = JSON.parse(videoString);
        if (videoInfo && videoInfo.hasOwnProperty('auto')) {
            delete videoInfo['auto'];
        }
        for (var key in videoInfo) {
            var object = videoInfo[key];
            if (Array.isArray(object)) {
                for (var i=object.length-1; i>=0; i--) {
                    var dict = object[i];
                    if (dict instanceof Object) {
                        var type = dict['type'];
                        if (type.indexOf('video') != -1 && dict.hasOwnProperty('url')) {
                            var videoUrl = dict['url'];
                            resourceUrlList.push(videoUrl);
                        }
                    }
                }
                //倒序输出， 清晰的最高的在后面
                resourceUrlList.reverse();
            }
        }
    }

    if (resourceUrlList.length>0) {
        var object = createResourceObject(websiteUrl, videoName, ResourceType.video,
            thumbUrl, resourceUrlList);
        return [object];
    }
    return [];
}