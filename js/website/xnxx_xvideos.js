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
            relateVideUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                getUrlInfo(websiteUrl)['host'] + relateVideUrl;
        }
        var relateThumbUrl = object['i'];
        var relateName = object['tf'];

        var resourceInfo = {};
        resourceInfo.websiteUrl = relateVideUrl;
        resourceInfo.thumbUrl = relateThumbUrl;
        resourceInfo.name = relateName;
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
            var videoUrl = getNodeAttributeOrHtml(node, 'a', ['href', 'title'], {'class':null},
                null, 'href');
            var videoName = getNodeAttributeOrHtml(node, 'a', ['href', 'title'], {'class':null},
                null, 'title');
            var thumbUrl = getNodeAttributeOrHtml(node, 'img', ['data-src'], null,
                null, 'data-src');
            if (!thumbUrl) {
                thumbUrl = getNodeAttributeOrHtml(node, 'img', ['src'], null,
                    null, 'src');
            }
            //补全
            if (videoUrl && !getUrlInfo(videoUrl)['scheme']){
                videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                    getUrlInfo(websiteUrl)['host'] + videoUrl;
            }
            if (videoUrl) {
                var resourceInfo = {};
                resourceInfo.websiteUrl = videoUrl;
                resourceInfo.thumbUrl = thumbUrl;
                resourceInfo.name = videoName;
                resourceInfo.isNeedParse = true;
                resourceList.push(resourceInfo);
            }


            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}