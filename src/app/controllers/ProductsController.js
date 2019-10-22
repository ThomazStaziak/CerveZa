// exportando model
const multer = require('multer');
const { Product } = require('../models');
// exportando biblioteca multer e dizendo diretório para salvar no banco


module.exports = {
  async index(req, res) {
    const products = await Product.findAll();
    // res.send(products);
    res.render('products.hbs', {
      title: 'Produtos',
      // passando registros da tabela por info
      info: products,
    });
  },
  async show(req, res) {
    const product = await Product.findByPk(req.params.id);
    res.render('product-details.hbs', {
      title: 'Detalhes Produto',
      info: product,
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
      res.redirect('/products');
    } else {
      res.send({ ok: 'try again' });
    }
  },
  update(req, res) {
    res.send('testing update method');
  },
  remove(req, res) {
    res.send('tesnting remove method');
  },
};
