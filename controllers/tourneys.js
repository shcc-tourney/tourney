var Tourney = require('../models/tourney');
var utilities = require('../utils/utilities');

module.exports = {
  getCurrent,
  getPast,
  update
};

function update(req, res) {
  console.log(req.body);
  Tourney.findOne({'events._id': req.body._id})
  .then(tourney => {
    var event = tourney.events.id(req.body._id);
    Object.assign(event, req.body);
    tourney.save().then(function() {
      res.json(tourney)
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