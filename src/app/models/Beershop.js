module.exports = (sequelize, Sequelize) => {
  const Beershop = sequelize.define(
    'Beershop',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O campo nome não pode ser vazio',
          },
        },
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'O campo endereço não pode ser vazio',
          },
        },
      },
      email: {
        unique: {
          args: true,
          msg: 'O campo email deve ser único',
        },
        validate: {
          notEmpty: {
            msg: 'O campo endereço não pode ser vazio',
          },
        },
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'O campo endereço não pode ser vazio',
          },
          min: {
            args: 6,
            msg: 'O campo senha deve ter no minímo 6 caracteres',
          },
        },
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        defaultValue: 'beershop.jpg',
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'beershops',
    },
  );

  return Beershop;
};
