// expressのルーティング設定
var express = require('express');
var router = express.Router();

// token取得API
router.post('/oauth2/token', function (req, res, next) {
    console.log(req.body);
    res.set('Cache-Control', 'no-store'); // レスポンスヘッダーにCache-Controlを追加
    const rebody = {
        "access_token": "access_token_code",
        "expires_in": 6000,
        "token_type": "bearer",
        "refresh_token": "refresh_token_code",
        "issued_token_type": "urn:ietf:params:oauth:token-type:access_token"
    }
    res.json(rebody);
};

router.get('/oauth2/revoke', function (req, res, next) {
    var param = { "result": "Hello World !" };
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

module.exports = router;
