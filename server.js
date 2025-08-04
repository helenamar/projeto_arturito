const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define a pasta pública onde ficam CSS, JS, imagens
app.use(express.static(path.join(__dirname, 'public')));

// Configura o EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Rota da página inicial
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Rota da página reservas
app.get('/booking', (req, res) => {
  res.render('pages/booking');
});

// Rota da página contato
app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

// Rota da página mapa
app.get('/map', (req, res) => {
  res.render('pages/map');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
