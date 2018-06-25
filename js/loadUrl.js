var http = require("http");
var https = require("https")

function download(url, callback) {
    var client = http;
// You can use url.protocol as well
    if (url.toString().indexOf("https") === 0){
        client = https;
    }
    client.get(url, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}

exports.download = download;
