function r2sa_crawler(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }

    var resultList = [];
    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var resourceName = el.getElementsByTagName("title")[0].text;

    //缩略图
    var thumbUrl = null;
    var videoUrl = null;
    var xPathResult = document.evaluate("//meta", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while (node) {
            var property = getNodeAttribute(node, 'property');
            if (property == 'og:image') {
                thumbUrl = getNodeAttribute(node, 'content');
            }else if (property == 'og:video') {
                videoUrl = getNodeAttribute(node, 'content');
            }
            node = xPathResult.iterateNext();
        }
    }
    if (videoUrl) {
        var object = createResourceObject(websiteUrl, resourceName, ResourceType.video,
            thumbUrl, [videoUrl]);
        resultList.push(object);
        return resultList;
    }

    var xPathResult = document.evaluate("//div/iframe[contains(@allowfullscreen,'')]", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            crawler_log('正在解析iframe标签');
            var iframeUrl = getNodeAttribute(node, 'src');
            if (iframeUrl && iframeUrl.length>0 && !getUrlInfo(iframeUrl)['scheme']) {
                iframeUrl = iframeUrl.replace('//', '');
                iframeUrl = 'http://' + iframeUrl;
            }
            if (iframeUrl && iframeUrl.length>0 ) {
                var iframeHtml = getHtmlWithUrl(iframeUrl)
                var m3u8URL = getMiddleString(iframeHtml, 'hlsManifestUrl\\\\&quot;:\\\\&quot;', '\\\\&quot;')
                if (m3u8URL) {
                    var reg = new RegExp('\\\\\\\\u0026' , "g" )
                    m3u8URL = m3u8URL.replace(reg , '&' );
                    var object = createResourceObject(websiteUrl, resourceName, ResourceType.m3u8,
                        thumbUrl, [m3u8URL]);
                    resultList.push(object);
                }else {
                    videoUrl = getMiddleString(iframeHtml, 'property="og:video" content="', '"')
                    if (videoUrl) {
                        var object = createResourceObject(websiteUrl, resourceName, ResourceType.video,
                            thumbUrl, [videoUrl]);
                        resultList.push(object);
                    }
                }
            }
            node = xPathResult.iterateNext();
        }

    }

    return resultList;
}
