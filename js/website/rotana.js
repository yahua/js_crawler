function rotana_crawler(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }

    var resultList = [];
    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var resourceName = el.getElementsByTagName("title")[0].text;

    //缩略图
    var thumbUrl = null;
    var xPathResult = document.evaluate("//meta[@property='og:image']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while (node) {
            thumbUrl = getNodeAttribute(node, 'content');
            if (thumbUrl && thumbUrl.length>0) {
                break;
            }
            node = xPathResult.iterateNext();
        }
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
                var iframeHtml = getHtmlWithUrl(iframeUrl, {'referer':websiteUrl})
                el.innerHTML = iframeHtml;
                var xPathResult = document.evaluate("//input[@class='HiddenmyhHlsLink']", el, null,
                    XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                var m3u8URL = null;
                if (xPathResult) {
                    var node = xPathResult.iterateNext();
                    if(node) {
                        m3u8URL = getNodeAttribute(node, 'value');
                    }
                }
                if (m3u8URL) {
                    var object = createResourceObject(websiteUrl, resourceName, ResourceType.m3u8,
                        thumbUrl, [m3u8URL]);
                    resultList.push(object);
                }
            }
            node = xPathResult.iterateNext();
        }

    }

    return resultList;
}
