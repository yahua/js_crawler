
//资源类型
var ResourceType = {
    unKnow:-1,
    video:100,
    image:200,
    pdf:300,
    m3u8:400,
    audio:500,
}

function getMiddleString(string, start, end) {

    if (!string || string.length == 0) {
        return null;
    }
    var reg = ''+start+'\(.*?\)'+end+'';
    var result = string.match(reg);
    if (result && result.length > 0) {
        return result[1];
    }
    return null;
}

function getUrlInfo(url) {

    var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    var result = parse_url.exec(url);
    var names = ["url","scheme","slash","host","port","path","query","hash"];
    if (result && result.length == 8) {
        return {'scheme':result[1],'host':result[3]};
    }else {
        return {};
    }
}

function getNodeAttribute(node, attribute) {
    
    if (node.attributes.hasOwnProperty(attribute)) {
        return node.attributes[attribute].nodeValue;
    }else {
        return null;
    }
}

function getNodeAttributeOrHtml(node, tag, containAttributeArray, equalAttributeDict, containAttributeDict, attribute) {

    var tag_list = node.getElementsByTagName(tag);
    for (var i=0; i<tag_list.length; i++) {

        var isMeet = true; //是否符合条件
        //是否包含属性
        for (var j=0; j<containAttributeArray.length; j++) {
            var containAttribute = containAttributeArray[j];
            var value = getNodeAttribute(tag_list[i], containAttribute);
            if (!value) {
                isMeet = false;
            }
        }
        if (!isMeet) {
            continue;
        }
        //是否属性相等
        for (var k in equalAttributeDict) {
            var value1 = equalAttributeDict[k];
            var value2 = getNodeAttribute(tag_list[i], k);
            if (value1 != value2) {
                isMeet = false;
            }
        }
        if (!isMeet) {
            continue;
        }

        //是否属性的值包含了。。。
        for (var k in containAttributeDict) {
            var value1 = containAttributeDict[k];
            var value2 = getNodeAttribute(tag_list[i], k);
            if (value2.indexOf(value1) == -1) {
                isMeet = false;
            }
        }
        if (!isMeet) {
            continue;
        }

        if(attribute) {
            return getNodeAttribute(tag_list[i], attribute);
        }else {
            return tag_list[i].innerHTML;
        }
    }
    return null;
}

function supplementSchemeAndHost(resourceUrl, websiteUrl) {

    if (resourceUrl && !getUrlInfo(resourceUrl)['scheme']){
        resourceUrl = getUrlInfo(websiteUrl)['scheme'] + '://' +
            getUrlInfo(websiteUrl)['host'] + resourceUrl;
    }
    return resourceUrl;
}
