// Importando bcrypt
const bcrypt = require('bcryptjs');

// Trazendo o model do Customer
const { Customer } = require('../models');

// Definindo métodos do crud
module.exports = {

  async store(req, res) {
    // Lendo request para variáveis locais
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

    // Ajeitando o endereço
    const address = `${street}, ${number} - ${complement}`;

    if (password === passconf) {
      const pass = await bcrypt.hash(password, 8);
      const created = await Customer.create({
        name,
        address,
        email,
        cpf,
        password: pass,
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
