function xhamster_crawler(websiteUrl, html) {

    var resultList = [];

    //获取详情的视频信息
    var title = getMiddleString(html, "property=\"og:title\" content=\"", "\"");
    var thumbUrl = getMiddleString(html, "\"thumbURL\":\"", "\"");
    if (thumbUrl) {
        thumbUrl = thumbUrl.replace(/\\/g, "");
    }
    //视频质量多种
    var videoList = [];
    var videoString = getMiddleString(html, "\"mp4\":\\{", "\\}");
    if (videoString) {
        videoString = '{' + videoString + '}';
        var videoDict = JSON.parse(videoString);
        var keys = Object.keys(videoDict);
        keys.sort(function (a, b) {
            a = a.replace("p", "");
            b = b.replace("p", "");
            return b - a;
        })
        for (var i in keys) {
            var key = keys[i];
            videoList.push(videoDict[key]);
        }
        if (videoList.length >0 ){
            var object = {};
            object.websiteUrl = websiteUrl;
            object.thumbUrl = thumbUrl;
            object.name = title;
            object.videoUrlList = videoList;
            object.resourceType = ResourceType.video;
            resultList.push(object);
        }
    }
    
    //获取列表
    var list = xhamster_list_crawler(websiteUrl, html);
    if (list.length>0) {
        resultList = resultList.concat(list);
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
            var imgString = getNodeAttributeOrHtml(node, 'div', ['style'], null, null, 'style');
            if (imgString) {
                thumbUrl = getMiddleString(imgString, 'background-image: url\\(', '\\)');
            }
            videoName = getNodeAttributeOrHtml(node, 'div', [], {'class':'item_name'}, null, null);
            var object = {};
            object.websiteUrl = videoUrl;
            object.thumbUrl = thumbUrl;
            object.name = videoName;
            object.isNeedParse = true;
            object.resourceType = ResourceType.video;
            resourceList.push(object);

            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}