function getMiddleString(string, start, end) {
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