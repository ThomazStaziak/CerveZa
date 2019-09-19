const { Customer } = require('../models');

module.exports = {

  async store(req, res) {
    const {
      name,
      email,
      cpf,
      street,
      number,
      complement,
      password,
      passconf,
    } = req.body;

    const address = `${street}, ${number} - ${complement}`;

    if (password === passconf) {
      const created = await Customer.create({
        name,
        address,
        email,
        cpf,
        password,
      });

      if (created) {
        res.send({ ok: true });
      } else {
        res.send({ ok: false });
      }
    } else {
      res.send({ ok: false });
    }
  },

  edit(req, res) {
    res.send('wooow!');
  },

  update(req, res) {
    res.send('wooow!');
  },

  show(req, res) {
    res.send('wooow!');
  },
  remove(req, res) {
    res.send('wooow!');
  },
};
