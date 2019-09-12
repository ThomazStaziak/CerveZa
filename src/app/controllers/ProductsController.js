module.exports = {
  index(req, res) {
    res.render('view', {
      layout: 'caminhoLayout',
    });
  },
  show(req, res) {
    res.send('testing show method');
  },
  store(req, res) {
    res.send('testing store method');
  },
  update(req, res) {
    res.send('testing update method');
  },
  remove(req, res) {
    res.send('tesnting remove method');
  },
};
