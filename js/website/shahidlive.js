function shahidlive_crawler(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }

    var resultList = [];
    resultList = resultList.concat(shahidlive_video_tag_crawler(websiteUrl, html))

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var resourceName = el.getElementsByTagName("title")[0].text;
    var xPathResult = document.evaluate("//iframe", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            crawler_log('正在解析iframe标签');
            var className = getNodeAttribute(node, 'class');
            if (className == 'embed-responsive-item') {
                var iframeUrl = getNodeAttribute(node, 'src');
                if (iframeUrl && iframeUrl.length>0 && !getUrlInfo(iframeUrl)['scheme']) {
                    iframeUrl = iframeUrl.replace('//', '');
                    iframeUrl = 'http://shahidlive.co' + iframeUrl;
                }
                if (iframeUrl && iframeUrl.length>0 ) {
                    var iframeHtml = getHtmlWithUrl(iframeUrl)
                    el.innerHTML = iframeHtml;
                    var iframeResult = document.evaluate("//iframe", el, null,
                        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                    if (iframeResult) {
                        var iframeNode = iframeResult.iterateNext();
                        iframeUrl = getNodeAttribute(iframeNode, 'src');
                        if (iframeUrl) {
                            iframeHtml = getHtmlWithUrl(iframeUrl)
                            resultList = resultList.concat(shahidlive_video_tag_crawler(iframeUrl, iframeHtml, resourceName))
                            break;
                        }
                    }
                }
            }

            node = xPathResult.iterateNext();
        }
    }

    return resultList;
}

function shahidlive_video_tag_crawler(websiteUrl, html, resourceName) {

    if (!html || html.length==0) {
        return [];
    }

    var resultList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;

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
                var object = createResourceObject(websiteUrl, resourceName, ResourceType.video,
                    thumbUrl, [videoUrl]);
                resultList.push(object);
                break;
            }
            node = xPathResult.iterateNext();
        }
    }

    return resultList;
}