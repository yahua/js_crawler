function xnxx_xvideos_crawler(websiteUrl, html) {

    if (html.indexOf('new HTML5Player') != -1) {
        var result = [];
        result = result.concat(xnxx_xvideos_detail_crawler(websiteUrl, html));
        result = result.concat(xnxx_xvideos_relate_list_crawler(websiteUrl, html));
        return result;
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
        var object = createResourceObject(websiteUrl, title, ResourceType.video,
            thumbUrl, videoList);
        resultList.push(object);
    }
    return resultList;
}

//获取视频详情页的关联列表
function xnxx_xvideos_relate_list_crawler(websiteUrl, html) {

    //获取相关列表的视频信息
    var resultList = [];
    var relateVideoString = getMiddleString(html, "video_related=\\[", "\\];");
    relateVideoString = "\[" + relateVideoString + "\]";
    var relateList = JSON.parse(relateVideoString);
    for (var i in relateList) {
        var object = relateList[i];
        if (!(object instanceof Object)) {
            continue;
        }
        var relateVideoUrl = object['u'];
        if (!relateVideoUrl) {
            continue;
        }
        if (relateVideoUrl && !getUrlInfo(relateVideoUrl)['scheme']){
            relateVideoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                getUrlInfo(websiteUrl)['host'] + relateVideoUrl;
        }
        var relateHtml = getHtmlWithUrl(relateVideoUrl);
        resultList = resultList.concat(xnxx_xvideos_detail_crawler(relateVideoUrl, relateHtml));
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
            //补全
            if (videoUrl && !getUrlInfo(videoUrl)['scheme']){
                videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                    getUrlInfo(websiteUrl)['host'] + videoUrl;
            }
            if (videoUrl) {
                var videoHtml = getHtmlWithUrl(videoUrl);
                resourceList = resourceList.concat(xnxx_xvideos_detail_crawler(videoUrl, videoHtml));
            }

            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}