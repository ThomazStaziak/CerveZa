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
      const createdCustomer = await Customer.create({
        name,
        address,
        email,
        cpf,
        password: pass,
      });

      if (createdCustomer) {
        session.loggedUser = createdCustomer;
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
    if (req.session.loggedUser) {
      res.render('customerHome.hbs', {
        title: 'CerveZa!',
      });
    } else {
      res.redirect('/pages/login');
    }
  },

  async login(req, res) {
    // Levantando dados do form
    const { email, password } = req.body;

    // Definindo mensagem de erro
    const customerLoginError = 'Login inválido';

    // Buscando customer com o email dado
    const customer = await Customer.findOne({
      where: {
        email,
      },
    });

    // Verificando existência de customer na base
    if (!customer) {
      // Redirecionando para a tela de login com a mensagem de erro
      return res.render('login.hbs', {
        title: 'Login',
        customerLoginError,
      });
    }

    // Validando o password do usuário
    if (await bcrypt.compare(password, customer.password)) {
      req.session.loggedUser = customer;
      return res.redirect('/customers/home');
    }

    // Redirecionando para a tela de login com a mensagem de erro
    return res.render('login.hbs', {
      title: 'Login',
      customerLoginError,
    });
  },

};
