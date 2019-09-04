var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 8000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('join_room', room => {
    socket.join(room);
    console.log(`user ${socket.id} has joined ${room} chatroom`);
  });

  socket.on('message', ({ room, message }) => {
    socket.to(room).emit('message', {
      message,
      name: socket.id,
    });
  });

  socket.on('typing', ({ room }) => {
    socket.to(room).emit('typing', console.log('A VER'));
  });

  socket.on('stopped_typing', ({ room }) => {
    socket.to(room).emit('stopped_typing');
  });
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});
