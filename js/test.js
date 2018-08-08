
var string1 = '123mm456';
var string2 = string1.replace('mm', 'xx');
console.log(string1);
console.log(string2);



var html = 'hlsManifestUrl\\&quot;:\\&quot;https://vd67.mycdn.me/video.m3u8?cmd=videoPlayerCdn\\\u0026expires=1533784885854\\\u0026srcIp=37.10.71.119\\\u0026srcAg=UNKNOWN_IOS\\\u0026type=4\\\u0026sig=KMbFwYt2ihQ\\\u0026ct=8\\\u0026clientType=0\\\u0026id=386805533281\\&quot;'
var reg = new RegExp('\\\\u0026' , "g" )
var html = html.replace(reg , '&' );
var mid = getMiddleString(html, 'hlsManifestUrl\\\\&quot;:\\\\&quot;', '\\\\&quot;')
console.log(mid);

function escape2Html(str) {
    var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
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