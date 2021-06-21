//Servidor con express
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

//Inicializamos socketio
const socketio = require('socket.io');
const io = socketio(server);

//Funcion del servidor
io.on('connection', (socket) => {
  let name;
  socket.on('connectUser', (nameUser) => {
    name = nameUser;
    //se envia el mensaje a los usuarios conectados menos al usuario que lo envio
    socket.broadcast.emit('messages', {
      nameUser: name,
      message: `${name} ha entrado en la sala del chat`,
    });
  });

  socket.on('message', (nameUser, message) => {
    //se envia el mensaje a los usuarios conectados
    io.emit('messages', { nameUser, message });
  });

  socket.on('disconnect', () => {
    io.emit('messages', {
      server: 'Server',
      message: `${name} ha abandonado la sala`,
    });
  });
});

server.listen(5000, () => console.log('Server Initialized'));
