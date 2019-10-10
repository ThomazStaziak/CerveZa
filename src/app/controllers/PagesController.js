const { type } = require('../models');
const { Product } = require('../models');

module.exports = {
  async home(req, res) {
    const products = await Product.findAll();
    res.render('home.hbs', {
      title: 'Home',
      info: products,
    });
  },

  async about(req, res) {
    const created = type.create({
      name: 'IPA',
      createdAt: '1990-09-09',
      updatedAt: '1990-09-09',
    });
    if (created) res.send({ message: true });
    else res.send({ message: false });
    // res.render('about.hbs', {
    //   title: 'Sobre nós',
    // });
  },

  async contact(req, res) {
    res.render('contact.hbs', {
      title: 'Contato',
    });
  },

  async login(req, res) {
    res.render('login.hbs', {
      title: 'Login',
    });
  },

  async register(req, res) {
    res.render('register.hbs', {
      title: 'Cadastro',
    });
  },
};
