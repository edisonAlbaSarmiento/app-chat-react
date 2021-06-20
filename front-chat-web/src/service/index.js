import socketIOClient from 'socket.io-client';

// backend port
const socket = socketIOClient('http://localhost:5000');

export default socket;
