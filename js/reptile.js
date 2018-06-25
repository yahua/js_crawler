
var cheerio = require("cheerio");
var loadUrl = require('./loadUrl')

var url = "https://www.instagram.com/p/BjMXP0wBdwZ/?tagged=video"
loadUrl.download(url, function (html) {
    reptileResourceWithHtml(html);
});

//开始爬取资源
function reptileResourceWithHtml(html) {
    //测试
    instagram(html)




    var json = [];
    var object = {};
    object.id = "id";
    object.name = "123";
    json.push(object);
    var jsonStr = JSON.stringify(json, undefined, 4);
    finishReptile(jsonStr);

//    http.get(url, function(sres) {
//             var chunks = [];
//             sres.on('data', function(chunk) {
//                     chunks.push(chunk);
//                     });
//             // chunks里面存储着网页的 html 内容，将它zhuan ma传给 cheerio.load 之后
//             // 就可以得到一个实现了 jQuery 接口的变量，将它命名为 `$`
//             // 剩下就都是 jQuery 的内容了
//             sres.on('end', function() {
//                     var titles = [];
//                     //由于咱们发现此网页的编码格式为gb2312，所以需要对其进行转码，否则乱码
//                     //依据：“<meta http-equiv="Content-Type" content="text/html; charset=gb2312">”
//                     var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
//                     var $ = cheerio.load(html, {decodeEntities: false});
//                     $('.co_content8 .ulink').each(function (idx, element) {
//                                                   var $element = $(element);
//                                                   titles.push({
//                                                               title: $element.text()
//                                                               })
//                                                   })
//
//             });
}

function instagram(html) {
    $ = cheerio.load(html);
    var thumbUrl = $('meta[property="og:image"]').attr('content')
    console.log(thumbUrl)
}

//爬取成功，通知app
function finishReptile(content) {
    console.log(content);
    //window.location = "yalla://finishReptile" + "/" + content;
}
