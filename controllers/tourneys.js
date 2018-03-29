var Tourney = require('../models/tourney');
var utilities = require('../utils/utilities');

module.exports = {
  getCurrent,
  getPast,
  updateEvent
};

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