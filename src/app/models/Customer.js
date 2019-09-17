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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
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
    }, {
      timestamps: true, // True já é a opção padrão.
    },
  );
  return Customer;
};
