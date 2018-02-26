var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
var db = mongoose.connection;

db.on('open', () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});