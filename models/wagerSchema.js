var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wagerSchema = new Schema({
  wagerNo: Number,
  bettor: {type: Schema.Types.ObjectId, ref: 'Bettor'},
  amount: {type: Number},
}, {
  timestamps: true
});

module.exports = wagerSchema;
