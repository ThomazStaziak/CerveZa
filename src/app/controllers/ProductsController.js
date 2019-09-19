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
  store(req, res) {
    res.send('hello');
  },
  update(req, res) {
    res.send('testing update method');
  },
  remove(req, res) {
    res.send('tesnting remove method');
  },
};
