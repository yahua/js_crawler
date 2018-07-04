function vimeo_crawler(websiteUrl, html) {

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
            var videoName = getNodeAttributeOrHtml(node, 'img', ['src'], {"class":"player_thumb"},
                null, 'src');
            var thumbUrl = getNodeAttributeOrHtml(node, 'img', ['alt'], {"class":"player_thumb"},
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
                        var resourceInfo = {};
                        resourceInfo.websiteUrl = websiteUrl;
                        resourceInfo.thumbUrl = thumbUrl;
                        resourceInfo.name = videoName;
                        resourceInfo.videoUrlList = videoList;
                        resultList.push(resourceInfo);
                        break;
                    }
                }
            }

            node = xPathResult.iterateNext();
        }
    }

    //获取列表
    var list = vimeo_list_crawler(websiteUrl, el);
    if (list.length>0) {
        resultList = resultList.concat(list);
    }

    return resultList;
}

function vimeo_list_crawler(websiteUrl, el) {

    var resourceList = [];

    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//li[@class='item list ']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var videoUrl;
            var videoName;
            var thumbUrl;
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
            var img_list = node.getElementsByTagName('img');
            for (var i in img_list) {
                thumbUrl = getNodeAttribute(img_list[i], 'srcset');
                if (thumbUrl) {
                    var tmpList = thumbUrl.split(',').pop().split(' ');
                    if (tmpList.length > 2) {
                        thumbUrl = tmpList[1];
                        if (thumbUrl && !getUrlInfo(thumbUrl)['scheme']){
                            thumbUrl = null;
                        }
                    }
                }
                if (!thumbUrl) {
                    thumbUrl = getNodeAttribute(img_list[i], 'src');
                }
                if (thumbUrl) {
                    break;
                }
            }
            var text_list = node.getElementsByTagName('span');
            for (var i in text_list) {
                var className = getNodeAttribute(text_list[i], 'class');
                if (className == 'title_text') {
                    videoName = text_list[i].innerHTML;
                    if (videoName) {
                        break;
                    }
                }
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