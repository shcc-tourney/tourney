module.exports = {
  init,
  get
};

var io;

function get() {
  return io;
}

function init(httpServer) {

  io = require('socket.io')(httpServer);

  io.on('connection', function(socket) {
    console.log(`client connected to socket.io: ${socket}`);
  });

}