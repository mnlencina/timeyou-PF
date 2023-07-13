const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "brand",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncremet: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        alloNull: false,
      },
    },
    { timestamps: false }
  );
};
