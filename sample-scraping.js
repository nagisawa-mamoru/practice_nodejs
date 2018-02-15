const http = require('http');
const client = require('cheerio-httpcli');
const url = 'http://api.moemoe.tokyo/anime/v1/master/2018/1';

// apiにリクエスト
http.get(url, function(res) {
    let body = '';
    res.setEncoding('utf8');

    // apiからデータ受信
    res.on('data', function(chunk) {
        body += chunk;
    });
    
    // apiからデータ受信完了
    res.on('end', function() {
        let animeDatas = JSON.parse(body);
        for (let anime of animeDatas) {
            client.fetch(anime.public_url, function(err, $, res, body) {
                let title = $("meta[property='og:title']").attr('content');
                let imgUrl = $("meta[property='og:image']").attr('content');
                console.log(`${title}:${imgUrl}`);
            });
        }
    });
});