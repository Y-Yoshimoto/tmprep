// Get
exports.get = function (req, res) {
    console.log(req.query.id)
    result = { "id": Number(req.query.id), "data": "testData", "other": "test" }
    console.log(result)
    //res.set('Cache-Control', 'no-store'); // レスポンスヘッダーにCache-Controlを追加
    res.set('Cache-Control', 'no-store'); // レスポンスヘッダーにCache-Controlを追加
    res.set('Content-Type', 'application/json'); // レスポンスヘッダーにContent-Typeを追加
    res.json(result);
};

// Post
exports.post = function (req, res) {
    console.log(req.body);
    console.log(req.body.id);
    res.set('Cache-Control', 'no-store'); // レスポンスヘッダーにCache-Controlを追加
    res.send('200 OK');
};

// Put
exports.put = function (req, res) {
    console.log(req.body);
    console.log(req.body.id);
    res.set('Cache-Control', 'no-store'); // レスポンスヘッダーにCache-Controlを追加
    res.send('200 OK');
};

// delete
exports.delete = function (req, res) {
    console.log(req.body);
    console.log(req.body.id);
    res.set('Cache-Control', 'no-store'); // レスポンスヘッダーにCache-Controlを追加
    res.send('200 OK');
};