"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Product, {
      through: "UserProduct",
      as: "products",
      foreignKey: "userId",
      otherKey: "productId",
    });
  };
  return User;
};
