// Importando bcrypt
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'customers',
    [
      {
        name: 'Sérgio Moura',
        cpf: '802.828.065-04',
        address: 'Rua das flores 2222',
        email: 'smouracalmon@gmail.com',
        password: bcrypt.hash('12345678', 8),
        image: 'xxxx.jpg',
      },
      {
        name: 'Natália Lira',
        cpf: '702.828.065-03',
        address: 'Cravos 111',
        email: 'natalia@gmail.com',
        password: bcrypt.hash('12345678', 8),
        image: 'xxxx.jpg',
      },
      {
        name: 'Thomáz Staziak',
        cpf: '602.828.065-03',
        address: 'Força 55',
        email: 'thomaz@gmail.com',
        password: bcrypt.hash('12345678', 8),
        image: 'xxxx.jpg',
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('customers', null, {}),
};
