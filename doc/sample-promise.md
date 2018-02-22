# プロミス化
アニメサイトPaserのPromise化です。

## ソースコード
* sample-promise.js
```
var http = require('http');
var client = require('cheerio-httpcli');
var url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

getHttpPromise(url)
.then(function(animedata) {
    return parseHtmlPromise(animedata);
});

function getHttpPromise(url) {
    return new Promise(function(resolve) {
        http.get(url, function(res) {

            var body = '';
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                resolve(JSON.parse(body)[1]);
            });
        });
    });
}

function parseHtmlPromise(animedata) {
    return new Promise(function(resolve) {
        client.fetch(animedata.public_url, function(err, $, res, body) {
            var title = $("meta[property='og:title']").attr('content');
            var image = $("meta[property='og:image']").attr('content');
            console.log(title);
            console.log(image);
        });
    })
}
```

## 起動方法
`node sample-promise.js`

## 実行結果
```
$ node promise2.js
【公式】アニメ「アイドリッシュセブン」
http://idolish7.com/aninana/wp-content/themes/aninana_tpl_180214_00/assets/img/ogp_1.png
```