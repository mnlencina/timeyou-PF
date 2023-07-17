const { Color, Watch} = require("../db");


const getColors = async (colorName) => {
    const colors= await Color.findOne({
        where: { name: colorName },
        include: Watch // Incluir la relación de los relojes asociados al color
      });
    return colors;
    };
    
    
    module.exports = getColors;