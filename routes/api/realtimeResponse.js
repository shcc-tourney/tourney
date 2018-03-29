var express = require('express');
var router = express.Router();
var checkAuth = require('../../config/auth').checkAuth;
var tourneysCtrl = require('../../controllers/tourneys');

/*-- Anonomous Routes --*/

/*-- Authenticated Routes --*/
router.put('/events', checkAuth, tourneysCtrl.update);

module.exports = router;