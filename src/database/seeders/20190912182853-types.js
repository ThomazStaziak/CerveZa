module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'types',
    [
      {
        name: 'Lager',
      },
      {
        name: 'Pilsen',
      },
      {
        name: 'Bock',
      },
      {
        name: 'Ale',
      },
      {
        name: 'Weissbier',
      },
      {
        name: 'Barley Wine',
      },
      {
        name: 'India Pale Ale',
      },
      {
        name: 'Amber Ale Red Ale',
      },
      {
        name: 'Stout',
      },
      {
        name: 'Strong Ale',
      },
      {
        name: 'Dubbel',
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('types', null, {}),
};
