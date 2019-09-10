module.exports = {
  async index(req, res) {
    res.render('customerForm.hbs', {
      layout: 'admMaster.hbs',
    });
  },
  async show(req, res) {
    res.send('wooow!');
  },
  async store(req, res) {
    res.send('wooow!');
  },
  async update(req, res) {
    res.send('wooow!');
  },
  async remove(req, res) {
    res.send('wooow!');
  },
};
