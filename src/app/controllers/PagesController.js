module.exports = {
  async home(req, res) {
    res.render('home.hbs', {
      title: 'Home',
    });
  },

  async about(req, res) {
    res.render('about.hbs', {
      title: 'Sobre nós',
    });
  },

  async contact(req, res) {
    res.render('contact.hbs', {
      title: 'Contato',
    });
  },
};
