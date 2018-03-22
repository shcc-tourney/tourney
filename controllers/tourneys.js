var Tourney = require('../models/tourney');
var utilities = require('../utils/utilities');

module.exports = {
  getCurrent
};

function getCurrent(req, res) {
  var today = utilities.todayWithoutTime();
  Tourney.findOne().where('endDate').gte(today).exec()
    .then(tourney => res.json(tourney));
}