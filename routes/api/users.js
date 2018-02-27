var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/users');

/*--- Public Routes ---*/
router.get('/login', usersCtrl.login);

/*--- Protected Routes ---*/

module.exports = router;