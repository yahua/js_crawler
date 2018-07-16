//资源数据结构
// {
//     "websiteUrl": 网站的url
//     "thumbUrl": 抓取资源的缩略图
//     "name": 资源名字
//     "videoUrlList": []  资源列表，array， ps：视频会有多个清晰度， 默认最高清的在前面
//     "isNeedParse": true   //是否需要再次解析，对于列表的视频需要再次解析，减少爬取时间，当是true时，videoUrlList为空
//     "resourceType" -1      //资源类型
// -1:未知类型
// 100:视频
// 200:图片
// 300:PDF
// 400:m3u8格式的视频
// 500:音频
//
// }

/**
 * @method 爬取网页资源
 * @websiteUrl  网页对应的url
 * @html 网页对应的url
 * @clientType 0:ios   1:android
 */
function crawlerResource(websiteUrl, html, clientType) {

    //js实现
    reptileResource(websiteUrl, html, clientType)
}

/**
 * @method 根据输入的搜索内容生成url，
 * @input  用户输入
 */
function useJavaScriptHandleInputString(input) {

    input = decodeURI(input);
    input = encodeURI(input);
    if (getUrlInfo(input).scheme) {
        return input;
    }else  {
        //判断是否是huang wang
        var canParseWebsiteDict ={'xnxx':'http://www.xnxx.com',
            "xvideos":"http://www.xvideos.com",
            "xhamster":"http://www.xhamster.com",
            "pornhub":"http://www.pornhub.com"};
        var findUrl;
        for (var key in canParseWebsiteDict) {
            if (input.toLowerCase() == key) {
                findUrl = canParseWebsiteDict[key];
                break;
            }
        }
        if (!findUrl) {
            findUrl = 'https://www.google.com/search?q=' + input + '&tbm=vid';
        }
        return findUrl;
    }
}

/**
 * @method 根据用户点击生成爬取图片的js代码， 该代码返回点击处的image的url
 * @x   用户点击坐标x
 * @y   用户点击坐标y
 */
function getImageJsCode(x, y) {
    var jsCode = (function getImageUrl(x, y) {
        var imgUrlList = [];
        var el = document.elementFromPoint(x, y);
        //当前节点是img
        if (el.tagName.toLowerCase() == 'img') {
            imgUrlList.push(el.src);
            return imgUrlList;
        }
        //当前节点可获得backgroundImage
        var backImage = el.style.backgroundImage;
        if (backImage) {
            backImage = backImage.replace('url("', '');
            backImage = backImage.replace('")', '');
            imgUrlList.push(backImage);
            return imgUrlList;
        }
        //查找父节点
        var parentNode = el;
        while (parentNode.innerHTML.length == 0) {
            parentNode = parentNode.parentNode;
        }
        backImage = parentNode.style.backgroundImage;
        if (backImage) {
            backImage = backImage.replace('url("', '');
            backImage = backImage.replace('")', '')
            imgUrlList.push(backImage);
            return imgUrlList;
        }
        for (var i=0; i<parentNode.children.length; i++) {
            backImage = parentNode.children[i].style.backgroundImage;
            if (backImage) {
                backImage = backImage.replace('url("', '');
                backImage = backImage.replace('")', '')
                imgUrlList.push(backImage);
                return;
            }
        }
        var imgElementList =  parentNode.getElementsByTagName("img");
        for (var i=0; i<imgElementList.length; i++) {
            var imgElement = imgElementList[i];
            imgUrlList.push(imgElement.src);
        }
        return imgUrlList;
    }).toString() + 'getImageUrl(' + x + ',' + y + ')';


    return jsCode;
}