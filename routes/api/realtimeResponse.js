var express = require('express');
var router = express.Router();
var checkAuth = require('../../config/auth').checkAuth;
var tourneysCtrl = require('../../controllers/tourneys');
var ioServer = require('../../realtime/io');
var messages = require('../../realtime/socket-messages');

/*-- Anonomous Routes --*/

/*-- Authenticated Routes --*/
router.put('/events', checkAuth, markRealtimeResponse, tourneysCtrl.updateEvent, function(req, res) {
  var io = ioServer.get();
  io.in('auth').emit(messages.UPDATE_TOURNEY, res.locals.updatedTourney);
  res.json({ msg: 'successful' });
});

module.exports = router;

function markRealtimeResponse(req, res, next) {
  res.locals.realtime = true;
  next();
}