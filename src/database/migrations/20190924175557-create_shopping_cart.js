module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shopping_cart', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      default: 1,
    },
    id_product: {
      type: Sequelize.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
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
  }),

  down: (queryInterface) => queryInterface.dropTable('shopping_cart'),
};
