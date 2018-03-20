var Tourney = require('../models/tourney');
var utilities = require('../utils/utilities');

module.exports = {
  getCurrent,
  getPast
};

function getCurrent(req, res) {
  Tourney.getCurrent()
  .then(tourney => res.json(tourney));
}

function getPast(req, res) {
  Tourney.getPast()
    .then(tourneys => res.json(tourneys));
}