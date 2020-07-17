const express = require('express');
const app = express(); 

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ extended: false }));

io.on('connection', socket => {
  socket.on('append', (data) => {
    console.log(data);
    socket.broadcast.emit('msg', data);
  });
});

server.listen(4000, () => console.log('Server running at port 4000'))
