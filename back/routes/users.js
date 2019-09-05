const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const uuid = require('uuid/v4');

// prevent CORS error
function setHeader(res, options) {
    if (options.cors) {
        res.set({
            'Access-Control-Allow-Origin': options.cors.url ? options.cors.url : 'http://localhost:63342',
            'Access-Control-Allow-Methods': options.cors.method ? options.cors.method : 'GET, POST, PATCH, DELETE'
        });
    }
    if (options.cookie) {
        res.cookie('session-id', `${options.cookie.sessionId}`);
    }

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
db.defaults({sessions: {}})
    .write();


/* GET users listing. */
router.get('/', function (req, res, next) {
});

router.get('/checkId/:id', function (req, res) {
    setHeader(res, {
        cors: {}
    }).json({
        result: !isDuplicatedId(req.params.id)
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

    setHeader(res, {
        cors: {}
    }).json({
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

        let session = undefined;
        if (!sessionResult) {
            // 세션 생성, 저장
            session = uuid();
            db.get('sessions')
                .push({
                    id: req.body.id,
                    session
                })
                .write();
        } else {
            session = sessionResult.session;
        }

        // 쿠키를 이용해 세션 설정
        setHeader(res, {
            cors: {},
            cookie: {
                sessionId: session
            }
        }).json({
            result: !!userResult,
            name: userResult ? userResult.name : undefined
        });
    } else {
        setHeader(res, {
            cors: {},
        }).json({
            result: !!userResult,
            name: userResult ? userResult.name : undefined
        });
    }
});

router.patch('/:id', function (req, res) {
    setHeader(res, {
        cors: {}
    }).json({
        result: true,
        message: `${req.params.id} : updated`
    });
});

router.delete('/:id', function (req, res) {
    setHeader(res, {
        cors: {}
    }).json({
        result: true,
        message: `${req.params.id} : deleted`
    });
});

module.exports = router;
