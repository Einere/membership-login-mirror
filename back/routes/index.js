var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('home.html', {title: 'Express'});
    // next();
    res.send('home');
});

module.exports = router;
