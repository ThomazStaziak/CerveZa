module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('admin', {
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
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.CHAR,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('admin'),
};
