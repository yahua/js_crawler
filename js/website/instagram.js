
function ins_crawler(websiteUrl, html) {

    var el = document.createElement( 'html' );
    el.innerHTML = html;
    var metaList = el.getElementsByTagName("meta");
    //获取type
    var type;
    for (var i=0;i<metaList.length;i++)
    {
        var subElement = metaList[i];
        var property = subElement.getAttribute('property');
        if (property=='og:type') {
            type = subElement.getAttribute('content');
        }
    }
    if (!type) {
        return [];
    }
    if (type.indexOf('video') != -1) {//视频类型
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
            var json = [];
            var object = {};
            object.websiteUrl = websiteUrl;
            object.thumbUrl = thumbUrl;
            object.videoUrlList = [videoUrl];
            object.resourceType = ResourceType.video;
            json.push(object);
            return json;
        }
    }else { //图集类型
        var reg = /window._sharedData = (.*?);</;
        var result = reg.exec(html);
        if (result && result.length > 0) {
            var imageJsonString = result[1];
            var object = JSON.parse(imageJsonString);
            var imageList = [];
            ins_findImageWithDict(object, imageList);
            if (imageList.length>0){
                var json = [];
                var object = {};
                object.websiteUrl = websiteUrl;
                object.thumbUrl = imageList[0];
                object.videoUrlList = imageList;
                object.resourceType = ResourceType.image;
                json.push(object);
                return json;
            }
        }

    }

    return [];
}
function ins_findImageWithDict(dict, list) {

    for (var key in dict) {
        var object = dict[key];
        if (!object){
            continue;
        }
        if (Array.isArray(object)) {
            ins_findImageWithArray(object, list);
        }else if (object instanceof Object){
            if (object['__typename'] == 'GraphImage') {
                var imageUrl = object['display_url'];
                if (imageUrl) {
                    list.push(imageUrl);
                }
            }else  {
                ins_findImageWithDict(object, list);
            }
        }
    }
}
function ins_findImageWithArray(array, list) {

    for (var i in array) {
        var object = array[i];
        if (!object){
            continue;
        }
        if (Array.isArray(object)) {
            ins_findImageWithArray(object, list);
        }else if (object instanceof Object){
            ins_findImageWithDict(object, list);
        }
    }
}
