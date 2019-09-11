const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const uuid = require('uuid/v4');

function isDuplicatedId(id) {
    return db.get('users')
        .find({id: id})
        .value();
}

function isLoggedIn(sessionId) {
    return db.get('sessions')
        .find({sessionId})
        .value();
}

// set default db
db.defaults({users: []}).write();
db.defaults({sessions: {}}).write();


/* GET users listing. */
router.get('/', function (req, res, next) {
});

router.get('/checkId/:id', function (req, res) {
    res.json({
        result: !isDuplicatedId(req.params.id)
    });
});

router.get('/isLoggedIn', function (req, res) {
    res.send(!!isLoggedIn(req.session.sessionId));
});

router.get('/logout', function (req, res) {
    db.get('sessions')
        .remove({sessionId: req.session.sessionId})
        .write();

    req.session.destroy(err => {
        err ? res.send(true) : res.send(err);
    });
});

router.post('/signUp', function (req, res) {
    const isDuplicated = isDuplicatedId(req.body.id);

    if (!isDuplicated) {
        db.get('users')
            .push(Object.keys(req.body).reduce((acc, key) => {
                acc[key] = req.body[key];
                return acc;
            }, {}))
            .write();
    }

    res.json({
        result: !isDuplicated,
    });
});

router.post('/login', function (req, res) {
    const userResult = db.get('users')
        .find({
            id: req.body.id,
            pw: req.body.pw
        })
        .value();

    if (userResult) {
        // 세션 조회
        const sessionResult = db.get('sessions')
            .find({
                id: req.body.id
            })
            .value();

        let sessionId = undefined;
        if (!sessionResult) {
            // 세션 생성, 저장
            sessionId = uuid();
            db.get('sessions')
                .push({
                    id: req.body.id,
                    sessionId
                })
                .write();
        } else {
            sessionId = sessionResult.sessionId;
        }

        // express-session을 이용해 세션 설정
        req.session.sessionId = sessionId;
        res.send(userResult.name);
    } else {
        res.send(undefined);
    }
});

router.patch('/:id', function (req, res) {
    res.json({
        result: true,
        message: `${req.params.id} : updated`
    });
});

router.delete('/:id', function (req, res) {
    res.json({
        result: true,
        message: `${req.params.id} : deleted`
    });
});

module.exports = router;
