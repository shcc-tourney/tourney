var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var payoutSchema = new Schema({
  amount: Number,
  paidBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

var wagerSchema = new Schema({
  wagerNo: Number,
  bettor: String,
  amount: {type: Number, required: true},
  position: {type: Number, required: true},
  competitor: {type: Schema.Types.ObjectId, required: true},
  inTheMoney: {type: Boolean, default: false},
  payout: payoutSchema,
  enteredBy: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

wagerSchema.pre('save', function (next) {
  var eventDoc = this.parent();
  // validate that 'position' is within event's range
  if (this.position < 1 || this.position > eventDoc.payoutPositions) return next(new Error('The position for this wager is invalid'));
  // validate that 'competitor' ObjectId is in event's competitor array
  if (!eventDoc.competitors.some(c => c.equals(this.competitor))) return next(new Error('The competitor for this wager is invalid'));
  if (this.isNew) {
    var tourneyDoc = this.parent().parent();
    this.wagerNo = tourneyDoc.nextWagerNo;
    tourneyDoc.nextWagerNo = tourneyDoc.nextWagerNo + 1;
    return next();
  } else {
    return next();
  }
});

module.exports = wagerSchema;
