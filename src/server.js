const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'seuSegredoAqui', // Troque por uma chave secreta mais segura em produção
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Deve ser true se usar HTTPS
}));

app.use(express.static(path.join(__dirname, '../public')));

// Rota para a página inicial (Home)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/templates', 'home.html'));
});

// Rota para a página de Login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/templates', 'login_cadastro.html'));
});

// Rota para a página de Index
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/templates', 'index.html'));
});

// Rota para a página de Scrims
app.get('/scrim', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/templates', 'scrim.html'));
});

// Rota para a página de Perfil
app.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/templates', 'perfil.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

});