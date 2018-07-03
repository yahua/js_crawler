function videospexels_crawler(websiteUrl, html) {

    var resultList = [];

    var el = document.createElement( 'html' );
    el.innerHTML = html;

    var evaluator = new XPathEvaluator();
    var videoUrl;
    var thumbUrl;
    var videoName;
    var xPathResult = evaluator.evaluate("//meta[@itemprop='contentURL']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            videoUrl = getNodeAttribute(node, 'content');
            if (videoUrl) {
                break;
            }
            node = xPathResult.iterateNext();
        }
    }
    xPathResult = evaluator.evaluate("//meta[@itemprop='thumbnailUrl']", el, null,
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
    xPathResult = evaluator.evaluate("//h1[@class='box__title']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            videoName = node.innerHTML;
            if (videoName) {
                break;
            }
            node = xPathResult.iterateNext();
        }
    }
    if (videoUrl) {
        var object = {};
        object.websiteUrl = websiteUrl;
        object.thumbUrl = thumbUrl;
        object.name = videoName;
        object.videoUrlList = [videoUrl];
        resultList.push(object);
    }

    return resultList;
}
