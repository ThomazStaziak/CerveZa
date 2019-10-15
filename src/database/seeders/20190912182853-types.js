module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'types',
    [
      {
        id: 1,
        name: 'Lager',
      },
      {
        id: 2,
        name: 'Pilsen',
      },
      {
        id: 3,
        name: 'Bock',
      },
      {
        id: 4,
        name: 'Ale',
      },
      {
        id: 5,
        name: 'Weissbier',
      },
      {
        id: 6,
        name: 'Barley Wine',
      },
      {
        id: 7,
        name: 'India Pale Ale',
      },
      {
        id: 8,
        name: 'Amber Ale Red Ale',
      },
      {
        id: 9,
        name: 'Stout',
      },
      {
        id: 10,
        name: 'Strong Ale',
      },
      {
        id: 11,
        name: 'Dubbel',
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('types', null, {}),
};
