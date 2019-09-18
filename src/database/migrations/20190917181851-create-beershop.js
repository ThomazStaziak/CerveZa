module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('beershops', {
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
    address: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image: {
      allowNull: true,
      defaultValue: 'beershop.jpg',
      type: Sequelize.STRING,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('beershops'),
};
