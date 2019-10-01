// Importando o express
const express = require('express');

// Instanciando roteador
const routes = express.Router();

// Declarando métodos dos controlles (desestruturado);
const {
  index, show, store, update, remove, login,
} = require('../app/controllers/BeershopsController');

// Criando rotas
routes.get('/', index);
routes.get('/:id', show);
routes.post('/', store);
routes.post('/login', login);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;
