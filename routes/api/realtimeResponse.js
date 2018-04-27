var express = require('express');
var router = express.Router();
var checkAuth = require('../../config/auth').checkAuth;
var tourneysCtrl = require('../../controllers/tourneys');
var competitorsCtrl = require('../../controllers/competitors');
var ioServer = require('../../realtime/io');
var messages = require('../../realtime/socket-messages');

/*-- Anonomous Routes --*/

/*-- Authenticated Routes --*/

// assigns a competitor to a tourney
router.put('/tourneys/:tourneyId/competitors/:competitorId', checkAuth, markRealtimeResponse, tourneysCtrl.assignCompetitor, function(req, res) {
  var io = ioServer.get();
  io.in('auth').emit(messages.UPDATE_TOURNEY, res.locals.updatedTourney);
  res.json({ msg: 'successful' });
});

router.put('/events', checkAuth, markRealtimeResponse, tourneysCtrl.updateEvent, function(req, res) {
  var io = ioServer.get();
  io.in('auth').emit(messages.UPDATE_TOURNEY, res.locals.updatedTourney);
  res.json({ msg: 'successful' });
});

router.post('/competitors', checkAuth, markRealtimeResponse, competitorsCtrl.create, function (req, res) {
  var io = ioServer.get();
  io.in('auth').emit(messages.SET_COMPETITORS, res.locals.competitors);
  res.json({ msg: 'successful' });
});

module.exports = router;

function markRealtimeResponse(req, res, next) {
  res.locals.realtime = true;
  next();
}