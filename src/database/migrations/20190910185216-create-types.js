module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('types', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('types'),
};
