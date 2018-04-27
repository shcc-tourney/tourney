var mongoose = require('mongoose');
var eventSchema = require('./eventSchema');
var tourneyCompetitorSchema = require('./tourneyCompetitorSchema');
var utilities = require('../utils/utilities');

var tourneySchema = new mongoose.Schema({
  name: {type: String, required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  nextWagerNo: {type: Number, default: 1},
  takePercentage: {type: Number, default: 10},
  nextCompetitorNo: {type: Number, default: 1},
  competitors: [tourneyCompetitorSchema],
  events: [eventSchema]
}, {
    timestamps: true
});

tourneySchema.virtual('numDays').get(function() {
  return utilities.dateDiff(this.startDate, this.endDate, 'days') + 1;
});

tourneySchema.virtual('isPending').get(function() {
  return (utilities.dateDiff(utilities.todayWithoutTime(), this.endDate, 'days') >= 0);
});

tourneySchema.methods.assignCompetitor = function(competitorId, cb) {
  if (this.competitors.some(c => c.competitor.equals(competitorId))) return cb(this);
  this.model('Competitor').findById(competitorId)
  .then(competitor => {
    // competitorNo is assigned and nextCompetitorNo is updated by pre-save hook in tourneyCompetitorSchema
    this.competitors.push({
      name: competitor.name,
      competitor: competitor._id
    });
    this.save().then(updatedTourney => {
      cb(updatedTourney);
    });
  });
};

tourneySchema.statics.getCurrent = function () {
  var today = utilities.todayWithoutTime();
  return this.findOne().where('endDate').gte(today).exec();
};

tourneySchema.statics.getPast = function () {
  var today = utilities.todayWithoutTime();
  today.setDate(today.getDate() + 1);
  return this.find({}).where('endDate').lt(today).exec();
};

module.exports = mongoose.model('Tourney', tourneySchema);