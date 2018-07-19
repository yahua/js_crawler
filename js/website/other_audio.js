function other_audio_crawler(websiteUrl, html) {

    var resultList = [];

    //缩略图
    var thumbUrl;
    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//meta[@name='twitter:image']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            thumbUrl = getNodeAttribute(node, 'content');
            if (thumbUrl) {
                break;
            }
            node = xPathResult.iterateNext();
        }
    }

    //mp3地址
    xPathResult = evaluator.evaluate("//audio", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var resourceUrl;
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            resourceUrl = getNodeAttribute(node, 'src');
            if (resourceUrl) {
                if(!getUrlInfo(resourceUrl).scheme) {
                    resourceUrl = resourceUrl.replace(':', '');
                    resourceUrl = 'http:' + resourceUrl;
                }
                break;
            }
            node = xPathResult.iterateNext();
        }
    }
    //name
    xPathResult = evaluator.evaluate("//title", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var name;
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            name = node.innerHTML;
            if (name) {
                break;
            }
            node = xPathResult.iterateNext();
        }
    }

    if (resourceUrl) {

        var object = createResourceObject(websiteUrl, name, ResourceType.audio,
            null, [resourceUrl]);
        resultList.push(object);
    }


    return resultList;
}