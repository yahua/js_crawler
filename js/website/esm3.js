function esm3_crawler(websiteUrl, html) {

    var resultList = [];

    var songHtmlUrlList = esm3_homePage_crawler(websiteUrl, html); //首页
    if (songHtmlUrlList.length==0) {
        //歌手列表
        songHtmlUrlList = esm3_artlist_crawler(websiteUrl, html);
    }
    if (songHtmlUrlList.length>0) {
        for (var i=0; i<songHtmlUrlList.length; i++) {
            var songHtmlUrl = songHtmlUrlList[i];
            //可以根据songHtmlUrl直接拼接downloadHtmlUrl
            var mp3Id = getMiddleString(songHtmlUrl, '-', '.html');
            var downloadHtmlUrl;
            if (mp3Id) {
                downloadHtmlUrl = 'https://www.esm3.com/mp3/get.asp?sid=' + mp3Id;
            }else {
                var songHtml = getHtmlWithUrl(songHtmlUrl);
                downloadHtmlUrl = esm3_song_crawler(songHtmlUrl, songHtml);
            }
            if (downloadHtmlUrl) {
                var downloadHtml = getHtmlWithUrl(downloadHtmlUrl);
                var resourceInfo = esm3_downloadPage_crawler(downloadHtmlUrl, downloadHtml);
                if (resourceInfo) {
                    resultList.push(resourceInfo);
                }
            }
        }
    }else {
        //歌曲详情
        var downloadHtmlUrl = esm3_song_crawler(websiteUrl, html);
        if (downloadHtmlUrl) {
            var downloadHtml = getHtmlWithUrl(downloadHtmlUrl);
            var resourceInfo = esm3_downloadPage_crawler(downloadHtmlUrl, downloadHtml);
            if (resourceInfo) {
                resultList.push(resourceInfo);
            }
        }else {
            //下载页
            var resourceInfo = esm3_downloadPage_crawler(websiteUrl, html);
            if (resourceInfo) {
                resultList.push(resourceInfo);
            }
        }
    }
    if (resultList.length > 0) {
        //补充缩略图
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
        for (var i=0; i<resultList.length; i++) {
            var resourceInfo = resultList[i];
            resourceInfo.thumbUrl = thumbUrl;
        }
    }

    return resultList;
}

function esm3_homePage_crawler(websiteUrl, html) {

    var resultList = [];
    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//li/a[@class='songlink']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var resourceUrl = getNodeAttribute(node, 'href');
            resourceUrl = supplementSchemeAndHost(resourceUrl, websiteUrl);
            resultList.push(resourceUrl);
            node = xPathResult.iterateNext();
        }
    }
    return resultList;
}

function esm3_artlist_crawler(websiteUrl, html) {

    var resultList = [];
    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//li[@class='songs row']/" +
        "span[@class='column large-6 medium-6 small-12']/a", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            var resourceUrl = getNodeAttribute(node, 'href');
            resourceUrl = supplementSchemeAndHost(resourceUrl, websiteUrl);
            if (resourceUrl) {
                resultList.push(resourceUrl);
            }
            node = xPathResult.iterateNext();
        }
    }
    return resultList;
}

function esm3_song_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();
    var xPathResult = evaluator.evaluate("//div[@id='download-song']/a", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var resourceUrl;
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            resourceUrl = getNodeAttribute(node, 'href');
            resourceUrl = supplementSchemeAndHost(resourceUrl, websiteUrl);
            if (resourceUrl) {
                break;
            }
            node = xPathResult.iterateNext();
        }
    }
    return resourceUrl;
}

function esm3_downloadPage_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var evaluator = new XPathEvaluator();

    var xPathResult = evaluator.evaluate("//a[@id='mp3_download_link']", el, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var resourceUrl;
    var name;
    if (xPathResult){
        var node = xPathResult.iterateNext();
        while(node) {
            resourceUrl = getNodeAttribute(node, 'href');
            resourceUrl = supplementSchemeAndHost(resourceUrl, websiteUrl);
            name = getMiddleString(node.innerHTML, "\\[ ", " \\]");
            if (resourceUrl) {
                break;
            }
            node = xPathResult.iterateNext();
        }
    }
    if (resourceUrl) {
        var thumbUrl;

        var resourceInfo = {};
        resourceInfo.websiteUrl = websiteUrl;
        resourceInfo.thumbUrl = thumbUrl;
        resourceInfo.name = name;
        resourceInfo.videoUrlList = [resourceUrl];
        resourceInfo.resourceType = ResourceType.audio;
        return resourceInfo;
    }else {
        console.log('爬取不到的网站:' + websiteUrl);
        return null;
    }
}