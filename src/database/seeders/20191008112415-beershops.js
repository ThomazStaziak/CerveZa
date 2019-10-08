// Importando bcryope para criptografar senhas das beershops
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'beershops',
    [
      {
        id: 1,
        name: 'Hugo Rojo',
        address: 'Rua Pontier Salvatore, 33',
        email: 'hugo@rojo.com',
        password: await bcrypt.hash('12345678', 8),
        image: 'xxxx.jpg',
      },
      {
        id: 2,
        name: 'Czar, o Grande!',
        address: 'Rua das Palmeiras, 55',
        email: 'cezar@michelin.com',
        password: await bcrypt.hash('12345678', 8),
        image: 'yyyy.jpg',
      },
      {
        id: 3,
        name: 'DeBeboir!',
        address: 'Av das Acácias, 55',
        email: 'teste@testee.com',
        password: await bcrypt.hash('12345678', 8),
        image: 'yyyy.jpg',
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('beershops', null, {}),
};
