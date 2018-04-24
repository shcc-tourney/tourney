var mongoose = require('mongoose');

var competitorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, {
    timestamps: true
});

competitorSchema.statics.create = function({name}) {
  // format name property: '  oh    boy-GEORGE ' -> 'Oh Boy-George'
  name = name.replace(/ +/, ' ').toLowerCase().replace(/(\b[a-z](?!\s))/g, function(char) {
    return char.toUpperCase();
  });
  var comp = new this({name});
  return comp.save();
};

module.exports = mongoose.model('Competitor', competitorSchema);