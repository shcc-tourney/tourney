var mongoose = require('mongoose');
var wagerSchema = require('./wagerSchema');
var utilities = require('../utils/utilities');

var eventSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: {type: Date, default: utilities.todayWithoutTime},
  payoutPositions: {type: Number, default: 3},
  betMin: {type: Number, default: 5},
  betMax: {type: Number, default: 500},
  betInc: {type: Number, default: 5},
  // must be within parent's (tourney) competitiors array
  competitors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Competitor'}],
  // index(s) ObjectId's within competitors above
  results: [Number],
  wagers:[wagerSchema]
}, {
  timestamps: true
});

module.exports = eventSchema;
