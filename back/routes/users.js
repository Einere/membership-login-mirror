var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/signup', function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:63342',
        'Access-Control-Allow-Methods': 'GET'
    });
    res.json({
        value: 'hello'
    });
});

router.patch('/:id', function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:63342',
        'Access-Control-Allow-Methods': 'GET'
    });
    res.json({
        value: `${req.param('id')} : updated`
    });
});

router.delete('/:id', function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:63342',
        'Access-Control-Allow-Methods': 'GET'
    });
    res.status(200).json({
        result: `${req.param('id')} : deleted`
    });
});

module.exports = router;
