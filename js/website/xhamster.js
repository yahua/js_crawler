function xhamster_crawler(websiteUrl, html) {

    var resultList = [];

    //获取详情的视频信息
    var title = getMiddleString(html, "property=\"og:title\" content=\"", "\"");
    var thumbUrl = getMiddleString(html, "\"thumbURL\":\"", "\"");
    //视频质量多种
    var videoList = [];
    var videoString = getMiddleString(html, "\"mp4\":{", "}");
    videoString = '{' + videoString + '}';
    var videoDict = JSON.parse(videoString);
    for (var key in videoDict) {
        videoList.push(videoDict[key]);
    }
    if (videoList.length >0 ){
        var object = {};
        object.websiteUrl = websiteUrl;
        object.thumbUrl = thumbUrl;
        object.name = title;
        object.videoUrlList = videoList;
        resultList.push(object);
    }
    var list = xhamster_list_crawler(websiteUrl, html);
    if (list.length>0) {
        resultList.push(list);
    }

    return resultList;
}

function xhamster_list_crawler(websiteUrl, html) {

    var resourceList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//div[@class='items clearfix']/div[@class='item-container']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var videoUrl;
            var videoName;
            var thumbUrl;
            var a_list = node.getElementsByTagName('a');
            if (a_list.length >= 0) {
                videoUrl = a_list[0].attributes['href'].nodeValue;
                //补全
                if (videoUrl && !getUrlInfo(videoUrl)['scheme']){
                    videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                        getUrlInfo(websiteUrl)['host'] + videoUrl;
                }
            }
            var img_list = node.getElementsByTagName('img');
            for (var i = 0; i < img_list.length; i++) {
                if (getNodeAttribute(img_list[i], 'class') == 'thumb') {
                    thumbUrl = getNodeAttribute(img_list[i], 'src');
                    videoName = getNodeAttribute(img_list[i], 'alt');
                }
            }
            var resourceInfo = {};
            resourceInfo.websiteUrl = websiteUrl;
            resourceInfo.thumbUrl = thumbUrl;
            resourceInfo.name = videoName;
            resourceInfo.videoUrlList = [videoUrl];
            resourceInfo.isNeedParse = true;
            resourceList.push(resourceInfo);

            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}