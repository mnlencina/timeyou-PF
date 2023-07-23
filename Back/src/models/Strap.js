const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Strap",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
