"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsToMany(models.User, {
      through: "UserProduct",
      as: "users",
      foreignKey: "productId",
      otherKey: "userId",
    });
  };
  return Product;
};
