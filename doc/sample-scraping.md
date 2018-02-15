# スクレイピング
webapiを呼び出し、取得した情報を成型して返します。

## 事前準備
cheerio-httpcliパッケージをインストールします。

### インストール
```
$ npm install cheerio-httpcli
npm WARN bootstrap@4.0.0 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.0.0 requires a peer of popper.js@^1.12.9 but none is installed. You must install peer dependencies yourself.
npm WARN sample@1.0.0 No description
npm WARN sample@1.0.0 No repository field.

+ cheerio-httpcli@0.7.2
updated 9 packages in 16.797s
```

## ソースコード
* sample-scraping.js
```
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
```


## 起動方法
`node sample-scraping`

## 実行結果
```
$ node sample_scraping.js
アニメ「ラーメン大好き小泉さん」公式サイト:http://ramen-koizumi.com/img/common/ogp2.png
undefined:undefined
TVアニメ「ゆるキャン△」公式サイト:http://yurucamp.jp/images/ogp3.jpg
TVアニメ『働くお兄さん！』公式サイト:http://www.hataoni.jp/img/og_share.jpg
TVアニメ「七つの大罪　戒めの復活」公式サイト:http://www.7-taizai.net/img/common/ogp.png
TVアニメ「グランクレスト戦記」:http://grancrest-anime.jp/ogp.jpg
DEVILMAN crybaby | 公式サイト:http://devilman-crybaby.com/ogp.png
ポプテピピック:http://hoshiiro.jp/ogp.png
TVアニメ「刻刻」公式サイト:http://kokkoku-anime.com/img/ogp.jpg
TVアニメ「ダーリン・イン・ザ・フランキス」:http://darli-fra.jp/ogp.jpg
TVアニメ「スロウスタート」:http://slow-start.com/shared/images/common/og.jpg
アニメ続『刀剣乱舞-花丸-』 公式サイト:http://touken-hanamaru.jp/images/ogp.jpg
TVアニメ「からかい上手の高木さん」公式サイト:http://takagi3.me/images/ogp2.jpg
TVアニメ「りゅうおうのおしごと！」公式サイト:http://ryuoh-anime.com/template/sns.jpg
undefined:undefined
TVアニメ「バジリスク ～桜花忍法帖～」公式サイト:http://basilisk-ouka.jp/og3.png
アニメ「まめねこ」公式:http://mameneko.club/img/twitter.jpg
TVアニメ『弱虫ペダル GLORY LINE』 公式サイト:http://yowapeda.com/assets/img/common/fb.jpg
undefined:undefined
TVアニメ「恋は雨上がりのように」｜ 公式サイト:http://koiame-anime.com/img/ogp.png
アニメ「メルヘン・メドヘン」公式サイト:http://maerchen-anime.com/core_sys/images/others/ogp.jpg
TVアニメ「デスマーチからはじまる異世界狂想曲」:http://deathma-anime.com/img/common/ogp2.png
undefined:http://hakumiko.com/ogp.jpg
TVアニメ「BEATLESS ビートレス」公式サイト:http://beatless-anime.jp/images/ogp3.jpg
TVアニメ「博多豚骨ラーメンズ」公式サイト:http://hakatatonkotsu-anime.com/wp/wp-content/themes/hakata_tonkotsu/pc/assets/siteinfo/og_image.jpg
undefined:undefined
TVアニメ『銀のガーディアン』:http://ginno-guardian.jp/img/ogp2.jpg
TVアニメ『citrus』公式サイト:http://citrus-anime.com/images/fb_img.png
TVアニメ「学園ベビーシッターズ」公式サイト:http://gakubaby-anime.com/ogp.png
TVアニメ「サンリオ男子」公式サイト:http://sdan-anime.com/images/sb_fbsum.jpg
NHK アニメワールド｜カードキャプターさくら クリアカード編:http://www.nhk.or.jp/anime/ccsakura/common/images/og_img3.jpg?date=20180108
『ヴァイオレット・エヴァーガーデン』公式サイト:http://violet-evergarden.jp/img/social.jpg
アニメ | ウルトラ怪獣擬人化計画:undefined
TVアニメ『だがしかし2』公式ホームページ｜TBSテレビ:http://www.tbs.co.jp/anime/dagashi/img/ogp.png
TVアニメ伊藤潤二「コレクション」:http://itojunji-anime.com/wordpress/wp-content/themes/itojunji/assets/images/sns_ogp.jpg
TVアニメ「ミイラの飼い方」公式ホームページ｜TBSテレビ:http://www.tbs.co.jp/anime/miira/img/ogp.jpg
たくのみ。公式ホームページ｜TBSテレビ:http://www.tbs.co.jp/anime/takunomi/img/ogp.png
『gdメン（ぐだメン） gdgd men’s party』公式サイト:http://gdmen.net/img/ogp_thumnail.jpg
TVアニメ『Fate/EXTRA Last Encore』公式サイト:http://fate-extra-lastencore.com/ogp.jpg
TVアニメ「覇穹 封神演義」公式サイト:http://tvhoushin-engi.com/core_sys/images/others/ogp.jpg
TVアニメ『ダメプリ ANIME CARAVAN』公式サイト://images.hangame.co.jp/anipani/etc/spn/web/r01/game/dame-prince/anime-https/release/img/official/ogp.png
TVアニメ「25歳の女子高生」公式 | にごじょ:https://nigojo.cf-anime.com/img/og_image.png
undefined:undefined
undefined:undefined
undefined:undefined
【公式】アニメ「アイドリッシュセブン」:http://idolish7.com/aninana/wp-content/themes/aninana_tpl_180130_00/assets/img/ogp_1.png
```