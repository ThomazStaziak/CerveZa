// exportando model
const { Product } = require('../models');

module.exports = {
  index(req, res) {
    res.render('products.hbs', {
      title: 'Produtos',
    });
  },
  show(req, res) {
    res.render('product-details.hbs', {
      title: 'Detalhes Produto',
    });
  },
  edit(req, res) {
    res.render('edit-product.hbs', {
      title: 'Editar Produto',
    });
  },
  create(req, res) {
    res.render('create-product.hbs', {
      title: 'Cadastrar Bebida',
    });
  },
  async store(req, res) {
    const {
      name,
      id_beershop,
	  id_type,
	  price,
	  stock,
      volume,
	  } = req.body;

    const created = await Product.create({
      name,
      id_beershop,
      id_type,
      price,
      stock,
      volume,
    });

    if (created) {
      res.send({ ok: true });
    } else {
      res.send({ ok: false });
    }
  },
  update(req, res) {
    res.send('testing update method');
  },
  remove(req, res) {
    res.send('tesnting remove method');
  },
};
