var mongoose = require('mongoose');

var competitorSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, {
    timestamps: true
});

competitorSchema.statics.create = function(name) {
  // ' oh    boy-GEORGE ' -> 'Oh Boy-George'
  name = name.replace(/ +/, ' ').toLowerCase().replace(/(\b[a-z](?!\s))/g, function(char) {
    return char.toUpperCase();
  });
  return this.create({name});
};

module.exports = mongoose.model('Competitor', competitorSchema);