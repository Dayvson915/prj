const express = require('express');
const path = require('path');
const app = express();

// Definir a pasta 'public' para servir arquivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (Home)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'home.html'));
});


// Rota para a página de Login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'login_cadastro.html'));
});

// Rota para a página de index
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'index.html'));
});

// Rota para a página de Scrims
app.get('/scrim', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'scrim.html'));
});

// Rota para a página de Perfil
app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'templates', 'perfil.html'));
});

// Porta que o servidor vai escutar
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Acesse http://localhost:${port}`);
});



