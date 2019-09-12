const { type } = require('../models');

module.exports = {
  async home(req, res) {
    res.render('home.hbs', {
      title: 'Home',
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
};
