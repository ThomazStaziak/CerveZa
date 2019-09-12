
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('avaliacoes', {
    id: {
      type: Sequelize.INTEGER,
      autoIncriment: true,
      primaryKey: true,
      allowNull: false,
    },
    texto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_cerveja: {
      type: Sequelize.INTEGER,
      references: {
        model: 'cerveja',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    id_cliente: {
      type: Sequelize.INTEGER,
      references: {
        model: 'cliente',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    n_estrelas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('avaliacoes'),
};
