var mongoose = require('mongoose');
var tourneyCompetitorSchema = require('./tourneyCompetitorSchema');
var utilities = require('../utils/utilities');

var tourneySchema = new mongoose.Schema({
  name: {type: String, required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  nextTicketNo: {type: Number, default: 1},
  takePercentage: {type: Number, default: 10},
  nextCompetitorNo: {type: Number, default: 1},
  competitors: [tourneyCompetitorSchema]
}, {
    timestamps: true
});

tourneySchema.virtual('numDays').get(function() {
  return utilities.dateDiff(this.startDate, this.endDate, 'days') + 1;
});

tourneySchema.virtual('isPending').get(function() {
  return (utilities.dateDiff(utilities.todayWithoutTime(), this.endDate, 'days') >= 0);
});

tourneySchema.statics.getPast = function () {
  var today = utilities.todayWithoutTime();
  today.setDate(today.getDate() + 1);
  return this.find({}).where('endDate').lt(today).exec();
};

module.exports = mongoose.model('Tourney', tourneySchema);