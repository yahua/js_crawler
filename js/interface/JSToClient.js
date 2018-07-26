
//js调用客户端方法

/**
 * @method 爬取开始
 * @websiteUrl  网页对应的url
 */
function crawler_start(websiteUrl) {

    //客户端可重写
    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        android.crawler_start(websiteUrl);
    }
}

/**
 * @method 爬取结束
 * @websiteUrl  网页对应的url
 * @resourceInfoListJsonStr 资源数组对应的json格式
 */
function crawler_end(websiteUrl, resourceInfoListJsonStr) {

    //客户端可重写
    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        var list = JSON.parse(resourceInfoListJsonStr);
        var newList = [];
        if (list && list.length>0) {
            //剔除youtube视频资源
            for (var i=0; i<list.length; i++){
                var dict = list[i];
                var resourceUrlList = dict['resourceUrlList'];
                if (resourceUrlList && resourceUrlList.length>0) {
                    if (getUrlInfo(resourceUrlList[0]).host.indexOf('youtube') != -1) {
                        continue;
                    }
                }
                newList.push(dict)
            }
        }
        android.crawler_end(websiteUrl, JSON.stringify(newList, undefined, 4));
    }

}

/**
 * @method js每爬取到一个资源就会调用该函数
 * @websiteUrl  网页对应的url
 * @resourceInfo  资源对应的json格式
 */
function crawler_one_Resource(websiteUrl, resourceInfoJsonStr) {

    crawler_log('crawler_one_Resource');
    //客户端可重写
    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        android.crawler_one_Resource(websiteUrl, resourceInfoJsonStr);
    }
}

/**
 * @method 输出js爬取的log
 */
function crawler_log(log) {

    //客户端可重写
    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        android.crawler_log(log);
    }
    console.log(log)
}

/**
 * @method 请求客户端下载html  需同步返回
 * @websiteUrl  网页对应的url
 */
function getHtmlWithUrl(websiteUrl) {

    //客户端实现
    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        return android.getHtmlWithUrl(websiteUrl);
    }
    if (ClientType == CrawlerClientType.test) {
        //测试代码
        return downloadHtmlWithUrl(websiteUrl).html;
    }
}

/**
 * @method js需要做客户端请求，因为跨域的问题， js无法自己请求
 * @url  请求的url
 * @method 请求的方式  get、post等
 * @requestData 请求的数据，字典格式
 */
function httpRequest(url, method, requestData) {

    //客户端实现
    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        android.httpRequest(url, method, requestData);
    }
    if (ClientType == CrawlerClientType.test) {
        //默认返回
        return '';
    }
}

/**
 *
 * @param searchUrl
 */
function handleSearchStringFinish(searchUrl) {

    //客户端实现

    if (ClientType == CrawlerClientType.android) {  //安卓会注入android对象
        android.handleSearchStringFinish(searchUrl);
    }
}