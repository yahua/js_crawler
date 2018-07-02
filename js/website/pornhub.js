function pornhub_crawler(websiteUrl, html) {

    var resultList = [];

    //获取详情的视频信息
    var title = getMiddleString(html, "property=\"og:title\" content=\"", "\"");
    var thumbUrl = getMiddleString(html, "property=\"og:image\" content=\"", "\"");
    var videoString = getMiddleString(html, "\"mediaDefinitions\":[", "]");
    if (videoString) {
        videoString = '[' + videoString + ']';
        var videoJsonArray = JSON.parse(videoString);
        //视频质量多种
        var videoList = [];
        for (var i in videoJsonArray) {
            var videoUrl = videoJsonArray[i]['videoUrl'];
            if (videoUrl && !getUrlInfo(videoUrl)['scheme']){
                videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                    getUrlInfo(websiteUrl)['host'] + videoUrl;
            }
            if (videoUrl) {
                videoList.push(videoUrl);
            }
        }
        if (videoList.length >0 ){
            var object = {};
            object.websiteUrl = websiteUrl;
            object.thumbUrl = thumbUrl;
            object.name = title;
            object.videoUrlList = videoList;
            resultList.push(object);
        }
    }

    //获取列表
    var list = pornhub_list_crawler(websiteUrl, html);
    if (list.length>0) {
        resultList.push(list);
    }

    return resultList;
}

function pornhub_list_crawler(websiteUrl, html) {

    var resourceList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//div[@class='positionRelative singleVideo']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var videoUrl;
            var videoName;
            var thumbUrl;
            var a_list = node.getElementsByTagName('a');
            if (a_list.length > 0) {
                videoUrl = a_list[0].attributes['href'].nodeValue;
                //补全
                if (videoUrl && !getUrlInfo(videoUrl)['scheme']){
                    videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                        getUrlInfo(websiteUrl)['host'] + videoUrl;
                }
            }
            var img_list = node.getElementsByTagName('img');
            if (img_list.length > 0) {
                thumbUrl = getNodeAttribute(img_list[0], 'src');
                videoName = getNodeAttribute(img_list[0], 'alt');
            }

            var resourceInfo = {};
            resourceInfo.websiteUrl = videoUrl;
            resourceInfo.thumbUrl = thumbUrl;
            resourceInfo.name = videoName;
            resourceInfo.isNeedParse = true;
            resourceList.push(resourceInfo);

            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}