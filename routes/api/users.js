var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/users');

/*--- Public Routes ---*/


/*--- Protected Routes ---*/

router.get('/', usersCtrl.index);

module.exports = router;