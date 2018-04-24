var Competitor = require('../models/competitor');

module.exports = {
  index,
  create
};

function index(req, res) {
  Competitor.find({})
  .then(competitors => res.json(competitors));
}

function create(req, res, next) {
  Competitor.create(req.body)
  .then(competitor => {
    if (res.locals.realtime) {
      Competitor.find({}).sort({name: 1}).exec().then(competitors => {
        res.locals.competitors = competitors;
        next();
      });
    } else {
      res.json(competitor);
    }
  });
}
