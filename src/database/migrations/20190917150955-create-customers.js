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
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      enderecoEntrega: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enderecoCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    },
  ),

  down: (queryInterface) => queryInterface.dropTable('customers'),

};
