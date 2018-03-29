var messages = require('./socket-messages');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

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
    
    socket.on(messages.SOCKET_JOIN_ROOMS, function(token) {
      if (token) {
        jwt.verify(token, SECRET, function (err, { user }) {
          if (!err) {
            // valid token
            var rooms = ['auth'];
            if (user.admin) rooms.push('admin');
            socket.join(rooms, () => {
              socket.emit('message', `client joined socket rooms: ${Object.keys(socket.rooms).join(', ')}`);
            });
          }
        });
      } else {
        socket.leave('auth');
        socket.leave('admin');
      }
    });

  });

}