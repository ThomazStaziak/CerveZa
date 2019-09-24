
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('order', {
    id: {
      type: Sequelize.INTEGER,
      autoIncriment: true,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: Sequelize.CHAR,
      allowNull: true,
      default: null,
    },
    entrega_prevista: {
      type: Sequelize.DATE,
      allowNull: true,
      default: null,
    },
    id_customer: {
      type: Sequelize.INTEGER,
      references: {
        model: 'customers',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    produtos: {
      type: Sequelize.STRING,
      allowNull: true,
      default: null,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('order'),
};
