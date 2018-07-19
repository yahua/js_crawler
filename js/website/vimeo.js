function vimeo_crawler(websiteUrl, html) {

    var resultList = [];
    resultList = resultList.concat(vimeo_detail_crawler(websiteUrl, html));
    resultList = resultList.concat(vimeo_list_crawler(websiteUrl, html));

    return resultList;
}

function vimeo_detail_crawler(websiteUrl, html) {

    var resultList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;

    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//div[starts-with(@class, 'player_container')]", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var videoUrl = getNodeAttributeOrHtml(node, 'div', ['data-config-url'], null,
                {'id':'player_'}, 'data-config-url');
            var thumbUrl = getNodeAttributeOrHtml(node, 'img', ['src'], {"class":"player_thumb"},
                null, 'src');
            var videoName = getNodeAttributeOrHtml(node, 'img', ['alt'], {"class":"player_thumb"},
                null, 'alt');
            if (videoUrl) {
                //二级html
                var secondHtml = getHtmlWithUrl(videoUrl);
                var videoString = getMiddleString(secondHtml, "\"progressive\":\\[\\{", "\\}\\]");
                if (videoString) {
                    videoString = '[{' + videoString + '}]';
                    var videoJsonArray = JSON.parse(videoString);
                    //视频质量多种
                    var videoList = [];
                    for (var i in videoJsonArray) {
                        var videoUrl = videoJsonArray[i]['url'];
                        if (videoUrl && !getUrlInfo(videoUrl)['scheme']) {
                            videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                                getUrlInfo(websiteUrl)['host'] + videoUrl;
                        }
                        if (videoUrl) {
                            videoList.push(videoUrl);
                        }
                    }
                    if (videoList.length > 0) {
                        var object = createResourceObject(websiteUrl, videoName, ResourceType.video,
                            thumbUrl, videoList);
                        resultList.push(object);
                        break;
                    }
                }
            }

            node = xPathResult.iterateNext();
        }
    }
    return resultList;
}

function vimeo_list_crawler(websiteUrl, html) {

    var resourceList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//li[@class='item list ']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var videoUrl;
            var a_list = node.getElementsByTagName('a');
            for (var i in a_list) {
                var className = getNodeAttribute(a_list[i], 'class');
                if (className == 'item_thumb') {
                    videoUrl = getNodeAttribute(a_list[i], 'href');
                    //补全
                    if (videoUrl && !getUrlInfo(videoUrl)['scheme']){
                        videoUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
                            getUrlInfo(websiteUrl)['host'] + videoUrl;
                    }
                    break;
                }
            }

            var videoHtml = getHtmlWithUrl(videoUrl);
            resourceList = resourceList.concat(vimeo_detail_crawler(videoUrl, videoHtml));
0
            node = xPathResult.iterateNext();
        }
    }
    return resourceList;
}