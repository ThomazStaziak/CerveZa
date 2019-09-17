module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define(
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
    }, {
      timestamps: true, // True já é a opção padrão.
    },
  );
  return Customer;
};
