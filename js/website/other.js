function other_crawler(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }

    var resultList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;

    var evaluator = new XPathEvaluator();
    var xPathResult = document.evaluate("//video", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            crawler_log('正在解析video标签');
            var videoUrl = getNodeAttribute(node, 'src');
            if (!videoUrl) {
                var sourceResult = document.evaluate("//video//source", el, null,
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
                var object = {};
                object.websiteUrl = websiteUrl;
                object.thumbUrl = thumbUrl;
                object.videoUrlList = [videoUrl];
                object.resourceType = ResourceType.video;
                resultList.push(object);
            }
            node = xPathResult.iterateNext();
        }
    }

    return resultList;
}