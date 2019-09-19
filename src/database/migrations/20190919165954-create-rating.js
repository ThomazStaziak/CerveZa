module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('rating', {
    id: {
      type: Sequelize.INTEGER,
      autoIncriment: true,
      primaryKey: true,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_beershop: {
      type: Sequelize.INTEGER,
      references: {
        model: 'beershops',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
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
	  stars: {
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

  down: (queryInterface) => queryInterface.dropTable('rating'),
};
