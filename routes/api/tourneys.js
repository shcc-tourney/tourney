var express = require('express');
var router = express.Router();
var tourneysCtrl = require('../../controllers/tourneys');
var checkAuth = require('../../config/auth').checkAuth;

/*-- Anonomous Routes --*/

// GET /api/tourneys/current
router.get('/current', tourneysCtrl.getCurrent);

/*-- Authenticated Routes --*/
router.get('/past', checkAuth, tourneysCtrl.getPast);

module.exports = router;