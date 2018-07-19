function facebook_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var metaList = el.getElementsByTagName("meta");
    //获取缩略图与视频地址
    var thumbUrl;
    var videoUrl;
    for (var i=0;i<metaList.length;i++)
    {
        var subElement = metaList[i];
        var property = subElement.getAttribute('property');
        if (property=='og:image') {
            thumbUrl = subElement.getAttribute('content');
        }
        if (property=='og:video') {
            videoUrl = subElement.getAttribute('content');
        }
    }
    if (videoUrl) {
        var object = createResourceObject(websiteUrl, null, ResourceType.video,
            thumbUrl, [videoUrl]);
        return [object];
    }
    return [];
}