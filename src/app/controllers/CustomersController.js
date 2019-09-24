// Importando bcrypt
const bcrypt = require('bcrypt');

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
      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        const created = await Customer.create({
          name,
          address,
          email,
          cpf,
          password,
        });
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
