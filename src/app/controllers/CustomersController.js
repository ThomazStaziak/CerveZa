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

    const { session } = req;

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
        session.logado = true;
        res.redirect('/customers/home');
      } else {
        res.send({ ok: false });
      }
    } else {
      res.send({ ok: false });
    }
  },

  edit(req, res) {
    res.send('wooow1!');
  },

  update(req, res) {
    res.send('wooow2!');
  },

  show(req, res) {
    res.send('wooow3!');
  },

  remove(req, res) {
    res.send('wooow4!');
  },

  home(req, res) {
    // Verificando se o usuário está logado
    const teste = 'lá vai a bola!!!';
    if (req.session.logado) {
      res.render('customerHome.hbs', {
        title: 'CerveZa!',
        teste,
      });
    } else {
      res.redirect('/pages/login');
    }
  },

};
