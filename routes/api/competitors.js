var express = require('express');
var router = express.Router();
var competitorsCtrl = require('../../controllers/competitors');
var checkAuth = require('../../config/auth').checkAuth;

/*-- Anonomous Routes --*/

/*-- Authenticated Routes --*/
router.get('/competitors', checkAuth, competitorsCtrl.index);

module.exports = router;