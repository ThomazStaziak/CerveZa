module.exports = {

  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'customers',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
  ),

  down: (queryInterface) => queryInterface.dropTable('customers'),

};
