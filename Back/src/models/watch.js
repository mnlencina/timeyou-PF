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
    color: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('Male','Female','Unisex'),
        allowNull: false,
    },
    reviews: {
        type: DataTypes.ENUM('0','1','2','3','4','5'),
        defaultValue: '0',
    },
    delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
  },{
    timestamps: false, // Desactivar timestamps
  });
};