// Importando o express
const express = require('express');

// Instanciando roteador
const routes = express.Router();

// Declarando métodos dos controlles (desestruturado);
const {
  home, about, contact, login, register,
} = require('../app/controllers/PagesController');

// Criando rotas
routes.get('/home', home);
routes.get('/about', about);
routes.get('/contact', contact);
routes.get('/login', login);
routes.get('/register', register);

module.exports = routes;
