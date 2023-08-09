const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Buy",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        alloNull: false,
      },
      provider: {
        type: DataTypes.STRING,
        alloNull: false,
      },
      total: {
        type: DataTypes.INTEGER,        
        alloNull: false,
      },
      card: {
        type: DataTypes.STRING,        
        alloNull: false,
      },
    },
    { timestamps: false }
  );
};
