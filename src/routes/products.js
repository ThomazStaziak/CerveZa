// importando express
const express = require('express');

// método router para criar roteador
const routes = express.Router();

// atribuicao desistruturada dos métodos dos controllers(atribui cada método às palavras que escrevemos, em ordem de apresentação)
const {
  index, show, edit, create, store, update, remove,
} = require('../app/controllers/ProductsController');

// routas e método usado em cada
routes.get('/', index);
routes.get('/:id', show);
routes.get('/edit/:id', edit);
routes.get('/create/:id', create);
routes.post('/', store);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;
