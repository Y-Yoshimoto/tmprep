'use strict';
// express,bodyParser読み込み
// https://expressjs.com/ja/guide/routing.html
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');


// express起動
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

// urlencoded,jsonパース
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// ETagヘッダーをリクエストのたびに変更するために、etagミドルウェアをオーバーライドする
app.use((req, res, next) => {
    // リソースの内容に基づくハッシュ値を生成する代わりに、ランダムな文字列を使用する
    const etag = crypto.randomBytes(8).toString('hex');
    res.set('ETag', etag);
    next();
});


// アプリケーション
app.get('/', (req, res) => {
    res.send('This is Sample API.');
});

//関数読み込み
var functions = require("./functions");
// GET
app.get('/api', functions.get);
// POST
app.post('/api', functions.post);
// PUT
app.put('/api', functions.put);
// POST
app.delete('/api', functions.delete);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

