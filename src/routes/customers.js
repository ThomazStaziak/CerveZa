// Importando o express
const express = require('express');

// Instanciando roteador
const routes = express.Router();

// Declarando métodos dos controlles (desestruturado);
const {
  index, show, store, update, remove,
} = require('../app/controllers/CustomersController');

// Criando rotas
routes.get('/', index);
routes.get('/:id', show);
routes.post('/', store);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;
