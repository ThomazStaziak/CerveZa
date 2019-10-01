const bcrypt = require('bcryptjs');
const { Beershop } = require('../models');

module.exports = {
  async index(req, res) {
    if (!req.session.loggedUser) return res.send('não logado');

    return res.send(req.session.loggedUser.name);
  },

  async show(req, res) {
    res.send({ ok: true });
  },

  async store(req, res) {
    const {
      name, street, number, complement, email, password,
    } = req.body;

    // const beershopExists = await Beershop.findOne({
    //   where: {
    //     email,
    //   },
    // });

    // if (beershopExists) {
    //   return res.render('register.hbs', {
    //     title: 'Cadastro',
    //     error: 'O cadastro já existe',
    //   });
    // }

    const address = `${street}, ${number} - ${complement}`;
    const passwordHash = await bcrypt.hash(password, 8);

    const created = await Beershop.create({
      name,
      address,
      email,
      password: passwordHash,
    }).catch((err) => {
      res.render('register.hbs', {
        errors: err.errors,
      });
    });

    if (created) return res.send({ ok: true });
    return res.send({ ok: false });
  },

  async login(req, res) {
    const { email, password } = req.body;

    const beershopUser = await Beershop.findOne({
      where: {
        email,
      },
    });

    if (!beershopUser) {
      return res.render('login.hbs', {
        title: 'Login',
        error: 'A cervejaria não existe',
      });
    }

    if (await bcrypt.compare(password, beershopUser.password)) {
      req.session.loggedUser = beershopUser;
      return res.redirect('/beershops');
    }

    return res.render('login.hbs', {
      title: 'Login',
      error: 'O email ou senha estão incorretos',
    });
  },

  async update(req, res) {
    res.send({ ok: true });
  },

  async remove(req, res) {
    res.send({ ok: true });
  },
};
