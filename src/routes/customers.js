// Importando o express
const express = require('express');

// Instanciando roteador
const routes = express.Router();

// Declarando métodos dos controlles (desestruturado);
const {
  store, edit, update, show, remove,
} = require('../app/controllers/CustomersController');

// Criando rotas
routes.post('/', store);
routes.get('/:id/edit', edit);
routes.put('/:id', update);
routes.get('/:id', show);
routes.delete('/:id', remove);

module.exports = routes;
