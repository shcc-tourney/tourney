var Tourney = require('../models/tourney');
var utilities = require('../utils/utilities');

module.exports = {
  getCurrent,
  getPast,
  assignCompetitor,
  enableCompetitorForEvent,
  updateEvent
};

function assignCompetitor(req, res, next) {
  Tourney.findOne({_id: req.params.tourneyId})
  .then(tourney => {
    tourney.assignCompetitor(req.params.competitorId, updatedTourney => {
      if (res.locals.realtime) {
        res.locals.updatedTourney = tourney;
        next();
      } else {
        res.json(tourney);
      }
    });
  });
}

function enableCompetitorForEvent(req, res, next) {
  Tourney.findOne({'events._id': req.params.eventId})
  .then(tourney => {
    let event = tourney.events.id(req.params.eventId);
    let exists = event.competitors.some(c => c.equals(req.params.competitorId));
    if (exists) return res.json(tourney);
    event.competitors.push(req.params.competitorId);
    event.competitors.sort((a, b) => {
      a = tourney.competitors.find(c => c._id.equals(a));
      b = tourney.competitors.find(c => c._id.equals(b));
      return a.competitorNo - b.competitorNo;
    });
    tourney.save().then(function() {
      if (res.locals.realtime) {
        res.locals.updatedTourney = tourney;
        next();
      } else {
        res.json(tourney);
      }
    });
  });
}

function updateEvent(req, res, next) {
  Tourney.findOne({'events._id': req.body._id})
  .then(tourney => {
    var event = tourney.events.id(req.body._id);
    Object.assign(event, req.body);
    tourney.save().then(function() {
      if (res.locals.realtime) {
        res.locals.updatedTourney = tourney;
        next();
      } else {
        res.json(tourney);
      }
    });
  });
}

function getCurrent(req, res) {
  Tourney.getCurrent()
  .then(tourney => res.json(tourney));
}

function getPast(req, res) {
  Tourney.getPast()
  .then(tourneys => res.json(tourneys));
}