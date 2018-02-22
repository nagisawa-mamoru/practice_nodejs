const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer();

server.on('request', function(req, res) {

    << ここに追加 >>

    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.write(page);
    res.end();
});

server.listen(port, hostname, function() {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});

var data = {
    header: '今期お勧めのアニメ',
    animes: [
        {
            title: 'ゆるきゃん',
            image: 'http://yurucamp.jp/images/ogp3.jpg',
            production: 'C-Station'
        },
        {
            title: 'ポプテピピック',
            image: 'http://hoshiiro.jp/ogp.png',
            production: '神風動画'
        },
        {
            title: 'りゅうおうのおしごと',
            image: 'http://ryuoh-anime.com/template/sns.jpg',
            production: 'project No.9'
        },
        {
            title: 'からかい上手の高木さん',
            image: 'http://takagi3.me/images/ogp2.jpg',
            production: 'シンエイ動画'
        },
        {
            title: '宇宙よりも遠い場所',
            image: 'http://yorimoi.com/images/top-main-v2.jpg',
            production: 'マッドハウス'
        }
    ]
};