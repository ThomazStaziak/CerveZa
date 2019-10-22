// importando express
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
// método router para criar roteador
const routes = express.Router();

// atribuicao desistruturada dos métodos dos controllers(atribui cada método às palavras que escrevemos, em ordem de apresentação)
const {
  index, show, edit, create, store, update, remove,
} = require('../app/controllers/ProductsController');

// routas e método usado em cada
routes.get('/', index);
routes.get('/details/:id', show);
routes.get('/edit/', edit);
routes.get('/create', create);
routes.post('/', upload.single(), store);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;
