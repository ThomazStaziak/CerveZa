module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncriment: true,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_cervejaria: {
      type: Sequelize.INTEGER,
      references: {
        model: 'cervejaria',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    id_tipo: {
      type: Sequelize.INTEGER,
      references: {
        model: 'tipo',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    preco: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    volume: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.CHAR,
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
  },
  );
  return Product;
};
