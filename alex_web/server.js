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