const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// prevent CORS error
function setHeaderForCORS(res) {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:63342',
        'Access-Control-Allow-Methods': 'GET'
    });

    return res;
}

function isDuplicatedId(id) {
    return db.get('users')
        .find({id: id})
        .value();
}

// set default db
db.defaults({users: []})
    .write();


/* GET users listing. */
router.get('/', function (req, res, next) {
});

router.get('/checkId/:id', function (req, res) {
    setHeaderForCORS(res).json({
        result: !isDuplicatedId(req.params.id)
    });
});

router.post('/signUp', function (req, res) {
    const duplicated = isDuplicatedId(req.body.id);

    if (!duplicated) {
        db.get('users')
            .push(Object.keys(req.body).reduce((acc, key) => {
                acc[key] = req.body[key];
                return acc;
            }, {}))
            .write();
    }

    setHeaderForCORS(res).json({
        result: !duplicated,
    });
});

router.post('/login', function (req, res) {
    const result = db.get('users')
        .find({
            id: req.body.id,
            pw: req.body.pw
        })
        .value();

    setHeaderForCORS(res).json({
        result: !!result,
        name: result ? result.name : undefined
    });
});

router.patch('/:id', function (req, res) {
    setHeaderForCORS(res).json({
        result: true,
        message: `${req.params.id} : updated`
    });
});

router.delete('/:id', function (req, res) {
    setHeaderForCORS(res).json({
        result: true,
        message: `${req.params.id} : deleted`
    });
});

module.exports = router;
