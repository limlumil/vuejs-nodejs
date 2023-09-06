var express = require('express');
var router = express.Router();
var User = require('../controller/user.controller');

/* GET users listing. */
router.get('/profile', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin',User.signin);
router.post('/signup',User.signup);

module.exports = router;
