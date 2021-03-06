var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

require('dotenv').config();
require('./config/database');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// Auth middleware to check for JWT and add user payload req
app.use(require('./config/auth').addUserFromToken);

// Put API routes here
app.use('/rt', require('./routes/api/realtimeResponse'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/tourneys', require('./routes/api/tourneys'));
app.use('/api/competitors', require('./routes/api/competitors'));

// a SPA's client-side routing to properly work
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
var port = process.env.PORT || 3001;

var server = app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});

require('./realtime/io').init(server);
