var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 6900;
const website = 'Martin Comito´s chat app';

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const getOnlineUsers = () => {
  let clients = io.sockets.clients().connected;
  let sockets = Object.values(clients);
  let users = sockets.map(socket => socket.user);
  return users.filter(user => user != undefined);
};

io.on('connection', function(socket) {
  console.log('new user connected');

  const emitOnlineUsers = () => {
    socket.broadcast.emit('users', getOnlineUsers());
  };

  socket.on('add_user', user => {
    socket.emit('server_message', {
      name: 'Martín',
      message: `Welcome to ${website}!`,
    });
    emitOnlineUsers();
    socket.broadcast.emit('server_message', {
      name: website,
      message: `${user.name} just joined chatroom`,
    });

    socket.user = user;
    emitOnlineUsers();
  });

  socket.on('disconnect', () => {
    const { user } = socket;
    if (user) {
      socket.broadcast.emit('server_message', {
        name: website,
        message: `${user.name} just left chatroom`,
      });
    }
    emitOnlineUsers();
  });
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});
