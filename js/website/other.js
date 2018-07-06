function other_crawler(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }

    var resultList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;

    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//video", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var videoUrl = getNodeAttribute(node, 'src');
            if (!videoUrl) {
                var sourceResult = evaluator.evaluate("//video//source", el, null,
                    XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                if (sourceResult) {
                    var sourceNode = sourceResult.iterateNext();
                    while (sourceNode){
                        var type = getNodeAttribute(sourceNode, 'type');
                        if (type && type.indexOf('mp4')!=-1){
                            videoUrl = getNodeAttribute(sourceNode, 'src');
                            if (videoUrl) {
                                break;
                            }
                        }else {
                            if (!videoUrl) {//默认显示第一个
                                videoUrl = getNodeAttribute(sourceNode, 'src');
                            }
                        }
                        sourceNode = sourceResult.iterateNext();
                    }
                }
            }
            if (videoUrl) {
                if (!getUrlInfo(videoUrl)['scheme']) {
                    videoUrl = videoUrl.replace('//', '');
                    videoUrl = 'http://' + videoUrl;
                }
                var thumbUrl = getNodeAttribute(node, 'poster');
                var resourceInfo = {};
                resourceInfo.websiteUrl = websiteUrl;
                resourceInfo.thumbUrl = thumbUrl;
                resourceInfo.videoUrlList = [videoUrl];
                resultList.push(resourceInfo);
            }
            node = xPathResult.iterateNext();
        }
    }
    xPathResult = evaluator.evaluate("//iframe", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var iframeUrl = getNodeAttribute(node, 'src');
            if (iframeUrl) {
                var jsPath = 'js';
                var tmpArray = iframeUrl.split('.');
                if (tmpArray.length>=2 && tmpArray[tmpArray.length-1]==jsPath) { //js文件不处理
                    node = xPathResult.iterateNext();
                    continue;
                }
                if (!getUrlInfo(iframeUrl)['scheme']) {
                    iframeUrl = iframeUrl.replace('//', '');
                    iframeUrl = 'http://' + iframeUrl;
                }
                var iframeHtml = getHtmlWithUrl(iframeUrl);
                var iframeArray = other_crawler(iframeUrl, iframeHtml);
                if (iframeArray && iframeArray.length>0) {
                    resultList = resultList.concat(iframeArray);
                }
            }
            node = xPathResult.iterateNext();
        }
    }

    return resultList;
}