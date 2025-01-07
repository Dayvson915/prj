const express = require('express');
const path = require('path');
const app = express();

// Definir a pasta 'public' para servir arquivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (Home)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de Scrims
app.get('/scrims', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'scrims.html'));
});

// Rota para a página de Perfil
app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

// Porta que o servidor vai escutar
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


// const express = require('express');
// const app = express();
// const port = 3000;

// // Definindo uma rota simples
// app.get('/', (req, res) => {
//   res.send('Olá, Mundo!');
// });

// // Configurando o servidor para rodar na porta 3000
// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });







// // Importa o Express
// const express = require('express');

// // Cria uma aplicação Express
// const app = express();

// // Define a porta onde o servidor vai rodar
// const PORT = 3000;

// // Rota para a página principal
// app.get('/', (req, res) => {
//   res.send('Olá, mundo!');
// });

// // Inicia o servidor
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

