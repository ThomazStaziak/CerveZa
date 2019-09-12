module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define(
    'type',
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
