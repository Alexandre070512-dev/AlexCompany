const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if(username === 'user' && password === 'password') {
        res.status(200).json({message: 'Login bem-sucedido'});
    } else {
        res.status(401).json({message: 'Credenciais inválidas'});
    }
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
  
  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
