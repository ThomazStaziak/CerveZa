// importando o faker
const faker = require('faker');

module.exports = {
  up: (queryInterface) => {
    // Definindo um vetor de produtos vazio
    const products = [];

    // Definindo número máximo de produtos
    const nProducts = 100;

    // Gerando produtos
    for (let i = 0; i < nProducts; i += 1) {
      const product = {
        id: i + 1,
        name: faker.name.firstName(),
        id_beershop: faker.random.number({ min: 1, max: 3 }),
        id_type: faker.random.number({ min: 1, max: 11 }),
        price: Math.round(1000 * Math.random()) / 100,
        stock: faker.random.number({ min: 0, max: 200 }),
        volume: faker.random.arrayElement([390, 600, 920, 1000]),
        image: faker.system.filePath(),
      };
      products.push(product);
    }

    // Inserindo dados
    return queryInterface.bulkInsert(
      'products',
      products,
      {},
    );
  },

  down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
