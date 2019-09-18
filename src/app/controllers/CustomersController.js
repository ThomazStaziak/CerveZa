const { customer } = require('../models');

module.exports = {
  store(req, res) {
    res.send(req.body.name);
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
