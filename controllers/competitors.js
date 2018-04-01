var Competitor = require('../models/competitor');

module.exports = {
  create,
};

function create(req, res) {
  Competitor.create(req.body.name)
  .then(competitor => res.json(competitor));
}