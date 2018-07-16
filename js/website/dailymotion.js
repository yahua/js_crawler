function dailymotion_crawler(websiteUrl, html) {

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
    //获取视频信息
    var videoString = getMiddleString(html, "\"qualities\":{", "}]}");
    if (videoString) {
        videoString = "\{" + videoString + "\}]}";
        var videoInfo = JSON.parse(videoString);
        if (videoInfo && videoInfo.hasOwnProperty('auto')) {
            delete videoInfo['auto'];
        }
        var videoUrlList = [];
        for (var key in videoInfo) {
            var object = videoInfo[key];
            if (Array.isArray(object)) {
                for (var i=object.length-1; i>=0; i--) {
                    var dict = object[i];
                    if (dict instanceof Object) {
                        var type = dict['type'];
                        if (type.indexOf('video') != -1 && dict.hasOwnProperty('url')) {
                            var videoUrl = dict['url'];
                            videoUrlList.push(videoUrl);
                        }
                    }
                }
                //倒序输出， 清晰的最高的在后面
                videoUrlList.reverse();
            }
        }
    }

    if (videoUrlList.length>0) {
        var json = [];
        var object = {};
        object.websiteUrl = websiteUrl;
        object.thumbUrl = thumbUrl;
        object.name = videoName;
        object.videoUrlList = videoUrlList;
        object.resourceType = ResourceType.video;
        json.push(object);
        return json;
    }
    return [];
}