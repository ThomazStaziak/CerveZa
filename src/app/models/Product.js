module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('Product', {
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
    id_beershop: {
      type: Sequelize.INTEGER,
      references: {
        model: 'beershops',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    id_type: {
      type: Sequelize.INTEGER,
      references: {
        model: 'types',
        key: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    volume: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.CHAR,
      allowNull: true,
    },
  }, {
    timestamps: true, // True já é a opção padrão.
    tableName: 'products',
  });
  return Product;
};
