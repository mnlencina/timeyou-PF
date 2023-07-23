const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Watch', {

    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('male','female','unisex'),
        defaultValue:'unisex',
    },
    review: {
        type: DataTypes.ENUM('0','1','2','3','4','5'),
        defaultValue:'0',
    },
    del: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
  },{
    timestamps: false, // Desactivar timestamps
  });
};