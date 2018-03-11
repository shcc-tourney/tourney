var mongoose = require('mongoose');

var tourneyCompetitorSchema = new mongoose.Schema({
  competitorNo: {type: Number},
  // name is copied from cometitor doc
  name: String,
  competitor: {type: mongoose.Schema.Types.ObjectId, ref: 'Competitor'}
}, {
  timestamps: true
});

tourneyCompetitorSchema.pre('save', function(next) {
  if (this.isNew) {
    var tourneyDoc = this.parent();
    this.competitorNo = tourneyDoc.nextCompetitorNo;
    tourneyDoc.nextCompetitorNo = tourneyDoc.nextCompetitorNo + 1;
    return next();
  } else {
    return next();
  }
});

module.exports = tourneyCompetitorSchema;
