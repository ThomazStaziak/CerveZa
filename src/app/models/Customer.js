module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define(
    'Customer',
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
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
        allowNull: true,
        default: null,
      },
    }, {
      timestamps: true, // True já é a opção padrão.
      tableName: 'customers',
    },
  );
  return Customer;
};
