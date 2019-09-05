const express = require('express');

const routes = express.Router();

const {
	index,
	show,
	store,
	update,
	remove,
} = require('../app/controllers/ProviderController');

routes.get('/', index);
routes.get('/:id', show);
routes.post('/', store);
routes.put('/:id', update);
routes.delete('/:id', remove);
