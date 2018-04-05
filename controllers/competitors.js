var Competitor = require('../models/competitor');

module.exports = {
  index,
  create,
};

function index(req, res) {
  Competitor.find({})
  .then(competitors => res.json(competitors));
}

function create(req, res) {
  Competitor.create(req.body)
  .then(competitor => res.json(competitor));
}