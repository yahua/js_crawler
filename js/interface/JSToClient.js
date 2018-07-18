
//js调用客户端方法

/**
 * @method 爬取开始
 * @websiteUrl  网页对应的url
 */
function crawler_start(websiteUrl) {

    //客户端可重写
    if (ClientType == 1) {  //安卓会注入andriod对象
        andriod.crawler_start(websiteUrl);
    }
}

/**
 * @method 爬取结束
 * @websiteUrl  网页对应的url
 * @resourceInfoListJsonStr 资源数组对应的json格式
 */
function crawler_end(websiteUrl, resourceInfoListJsonStr) {

    //客户端可重写
    if (ClientType == 1) {  //安卓会注入andriod对象
        var list = JSON.parse(resourceInfoListJsonStr);
        var newList = [];
        if (list && list.length>0) {
            //剔除youtube视频资源
            for (var i=0; i<list.length; i++){
                var dict = list[i];
                var videoUrlList = dict['videoUrlList'];
                if (videoUrlList && videoUrlList.length>0) {
                    if (getUrlInfo(videoUrlList[0]).host.indexOf('youtube') != -1) {
                        continue;
                    }
                }
                newList.push(dict)
            }
        }
        andriod.crawler_end(websiteUrl, JSON.stringify(newList, undefined, 4));
    }

}

/**
 * @method js每爬取到一个资源就会调用该函数
 * @websiteUrl  网页对应的url
 * @resourceInfo  资源对应的json格式
 */
function crawler_one_Resource(websiteUrl, resourceInfoJsonStr) {

    //客户端可重写
    if (ClientType == 1) {  //安卓会注入andriod对象
        andriod.crawler_one_Resource(websiteUrl, resourceInfoJsonStr);
    }
}

/**
 * @method 输出js爬取的log
 */
function crawler_log(log) {

    //客户端可重写
    if (ClientType == 1) {  //安卓会注入andriod对象
        andriod.crawler_log(log);
    }
    console.log(log)
}

/**
 * @method 请求客户端下载html  需同步返回
 * @websiteUrl  网页对应的url
 */
function getHtmlWithUrl(websiteUrl) {

    //客户端实现
    if (ClientType == 1) {  //安卓会注入andriod对象
        andriod.getHtmlWithUrl(websiteUrl);
    }
    //测试代码
    return downloadHtmlWithUrl(websiteUrl).html;
}

/**
 * @method js需要做客户端请求，因为跨域的问题， js无法自己请求
 * @url  请求的url
 * @method 请求的方式  get、post等
 * @requestData 请求的数据，字典格式
 */
function httpRequest(url, method, requestData) {

    //客户端实现
    if (ClientType == 1) {  //安卓会注入andriod对象
        andriod.httpRequest(url, method, requestData);
    }
    //默认返回
    return '';
}

/**
 *
 * @param searchUrl
 */
function handleSearchStringFinish(searchUrl) {

    //客户端实现

    if (ClientType == 1) {  //安卓会注入andriod对象
        andriod.handleSearchStringFinish(searchUrl);
    }
}