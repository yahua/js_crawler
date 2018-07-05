
var xmlHttp;
function GetXmlHttpObject(){
    if (window.XMLHttpRequest){
// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

function downloadHtmlWithUrl(data){
    var baseUrl = "http://localhost:8043";
    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null){
        alert('您的浏览器不支持AJAX！');
        return;
    }
    xmlhttp.open("POST",baseUrl,false);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
    if(xmlHttp.readyState==1||xmlHttp.readyState==2||xmlHttp.readyState==3){
// 本地提示：加载中/处理中
    }
    if (xmlHttp.readyState==4 && xmlHttp.status==200){
        return {'success':true,
        'html':xmlHttp.responseText};
// 处理返回值
    }else {
        return {'success':false,
            'html':xmlHttp.responseText};
    }
}

