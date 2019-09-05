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
    res.send({ ok: true });
  },

  async update(req, res) {
    res.send({ ok: true });
  },

  async remove(req, res) {
    res.send({ ok: true });
  },
};
