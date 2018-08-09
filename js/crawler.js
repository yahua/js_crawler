
var timeOutLength = 30 * 1000;  //超时时间 30s
var httpDownloadUrl = 'http://downloadup.ios-works.com/api/download';

//开始爬取资源
function reptileResource(websiteUrl, html) {

    //开始爬取
    crawler_start(websiteUrl);

    //设置超时时间
    var timeId = setTimeout(function () {
        crawler_log('爬取超时了')
        return [];
    }, timeOutLength);

    //接口无法获取资源进入常规爬取
    crawler_log('进入网站爬取')
    var resourceList = crawlerUseWebsite(websiteUrl, html);
    if (!resourceList || resourceList.length==0) {
        crawler_log('进入通用方法爬取')
        resourceList = crawlerUseCommon(websiteUrl, html);
    }
    //下载websiteUrl对应的html
    if (!resourceList || resourceList.length==0) {
        html = getHtmlWithUrl(websiteUrl);
        crawler_log('下载网页，进入网站爬取')
        resourceList = crawlerUseWebsite(websiteUrl, html);
        if (!resourceList || resourceList.length==0) {
            crawler_log('下载网页，进入通用爬取')
            resourceList = crawlerUseCommon(websiteUrl, html);
        }
    }

    if (resourceList.length==0) {
        crawler_log('进入接口爬取资源');
        //将手机域名替换为正常域名
        var newWebsiteUrl = websiteUrl.replace('//m.', '//www.')
        newWebsiteUrl = newWebsiteUrl.replace('//mobile.', '//www.')
        var httpResponse = httpRequest(httpDownloadUrl, 'post', {'url':newWebsiteUrl});
        try {
            var obj = JSON.parse(httpResponse);
            if (obj.status == 1) {
                var title = obj.result.title;
                var thumbUrl = obj.result.thumbnail;
                var videoUrl = obj.result.streams[0].url;
                if (videoUrl && videoUrl.length>0) {
                    crawler_log('通过接口抓取到了资源');
                    if (!title ||title.length==0) {
                        title = getUrlInfo(websiteUrl).host + '-' + new Date().getTime();
                    }
                    var object = createResourceObject(websiteUrl, title, ResourceType.video,
                        thumbUrl, [videoUrl]);
                    return [object];
                }
            }
        }catch (e) {

        }
    }

    clearTimeout(timeId);

    return resourceList;
}

//爬取已知的网站
function crawlerUseWebsite(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }
    //获取host
    var host = getUrlInfo(websiteUrl)['host'];
    if (host.indexOf('instagram') != -1) {
        return ins_crawler(websiteUrl, html);
    }else if (host.indexOf('facebook') != -1) {
        return facebook_crawler(websiteUrl, html);
    }else if (host.indexOf('xnxx') != -1 ||
        host.indexOf('xvideos') != -1) {
        return xnxx_xvideos_crawler(websiteUrl, html);
    }else if (host.indexOf('xhamster') != -1) {
        return xhamster_crawler(websiteUrl, html);
    }else if (host.indexOf('pornhub') != -1) {
        return pornhub_crawler(websiteUrl, html);
    }else if (host.indexOf('vimeo') != -1) {
        return vimeo_crawler(websiteUrl, html);
    }else if (host.indexOf('dailymotion') != -1) {
        return dailymotion_crawler(websiteUrl, html);
    }else if (host.indexOf('videos.pexels') != -1) {
        return videospexels_crawler(websiteUrl, html);
    }else if (host.indexOf('esm3') != -1) {
        return esm3_crawler(websiteUrl, html);
    }else if (host.indexOf('shahidlive') != -1) {
        return shahidlive_crawler(websiteUrl, html);
    }else if (host.indexOf('r2sa') != -1) {
        return r2sa_crawler(websiteUrl, html);
    }else if (host.indexOf('rotana') != -1) {
        return rotana_crawler(websiteUrl, html);
    }else if (host.indexOf('mbc.net') != -1) {
        return mbc_crawler(websiteUrl, html);
    }
    return [];
}

function crawlerUseCommon(websiteUrl, html) {

    if (!html || html.length==0) {
        return [];
    }
    var resourceList = [];

    var videoList = other_crawler(websiteUrl, html);
    if (videoList && videoList.length>0) {
        resourceList = resourceList.concat(videoList);
    }
    var audioList = other_audio_crawler(websiteUrl, html);
    if (audioList && audioList.length>0) {
        resourceList = resourceList.concat(audioList);
    }

    return resourceList;
}
