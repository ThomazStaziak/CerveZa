module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define(
    'types',
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
      },
    },
    {
      timestamps: false,
    },
  );

  return Type;
};
