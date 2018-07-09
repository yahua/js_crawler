
//资源数据结构
// {
//     "websiteUrl": 网站的url
//     "thumbUrl": 抓取资源的缩略图
//     "name": 资源名字
//     "videoUrlList": []  资源列表，array， ps：视频会有多个清晰度， 默认最高清的在前面
//     "isNeedParse": true   //是否需要再次解析，对于列表的视频需要再次解析，减少爬取时间，当是true时，videoUrlList为空
//     "resourceType" 0      //资源类型  视频是0，  图片是1  音频2
// }

/**
 * @method 爬取网页资源
 * @websiteUrl  网页对应的url
 * @html 网页对应的url
*/
function crawlerResource(websiteUrl, html) {

    //js实现
    reptileResource(websiteUrl, html)
}

/**
 * @method 爬取开始
 * @websiteUrl  网页对应的url
 */
function crawler_start(websiteUrl) {

    //客户端可重写
}

/**
 * @method 爬取结束
 * @websiteUrl  网页对应的url
 * @resourceInfoListJsonStr 资源数组对应的json格式
 */
function crawler_end(websiteUrl, resourceInfoListJsonStr) {

    //客户端可重写
}

/**
 * @method js每爬取到一个资源就会调用该函数
 * @websiteUrl  网页对应的url
 * @resourceInfo  资源对应的json格式
 */
function crawler_one_Resource(websiteUrl, resourceInfoJsonStr) {

    //客户端可重写
}

/**
 * @method 输出js爬取的log
 */
function crawler_log(log) {

    //客户端可重写

    console.log(log)
}


/**
 * @method 请求客户端下载html
 * @websiteUrl  网页对应的url
 */
function getHtmlWithUrl(websiteUrl) {

    //客户端实现

    //测试代码
    return downloadHtmlWithUrl(websiteUrl).html;
}