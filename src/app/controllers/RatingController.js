const { rating } = require('../models');

module.exports = {
  async index(req, res) {
    res.render('providerForm.hbs', {
      title: 'Cadastro de Fornecedor',
    });
  },

  async show(req, res) {
    res.send({ ok: true });
  },

  async store(req, res) {
    const {
      name, street, number, complement, email, password,
    } = req.body;

    const address = `${street}, ${number} - ${complement}`;

    const created = await rating.create({
      name,
      address,
      email,
      password,
    });

    if (created) res.send({ ok: true });
    else res.send({ ok: false });
  },

  async update(req, res) {
    res.send({ ok: true });
  },

  async remove(req, res) {
    res.send({ ok: true });
  },
};
