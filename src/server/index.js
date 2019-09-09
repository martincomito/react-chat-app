var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 6700;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const getVisitors = () => {
  let clients = io.sockets.clients().connected;
  let sockets = Object.values(clients);
  let users = sockets.map(socket => socket.user);
  return users;
};

const emitVisitors = () => {
  io.emit('visitors', getVisitors());
};

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('new_visitor', user => {
    console.log('New visitor: ', user);
    socket.user = user;
    emitVisitors();
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    emitVisitors();
  });
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});
