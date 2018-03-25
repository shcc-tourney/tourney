var mongoose = require('mongoose');
var wagerSchema = require('./wagerSchema');

var eventSchema = new mongoose.Schema({
  title: {type: String, required: true},
  resultsDate: {type: Date},
  status: {type: String, default: 'OPEN', enum: ['OPEN', 'CLOSED', 'OFFICIAL']},
  payoutPositions: {type: Number, default: 3, min: 1, max: 3},
  betMin: {type: Number, default: 5},
  betMax: {type: Number, default: 500},
  betInc: {type: Number, default: 5},
  // must be within parent's (tourney) competitiors array
  competitors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Competitor'}],
  // first elem is Win, second is Place (optional), third is Show (optional)
  results: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Competitor' }],
  wagers:[wagerSchema]
}, {
  timestamps: true
});

module.exports = eventSchema;
