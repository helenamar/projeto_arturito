const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define a pasta pública onde ficam CSS, JS, imagens
app.use(express.static(path.join(__dirname, 'public')));

// Configura o EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota da página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota da página reservas
app.get('/reservas', (req, res) => {
  res.render('reservas');
});

// Rota da página contato
app.get('/contato', (req, res) => {
  res.render('contato');
});

// Rota da página mapa
app.get('/mapa', (req, res) => {
  res.render('mapa');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
