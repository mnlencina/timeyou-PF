const { Color } = require("../db");

const createNewColor = async (color) => {
    const newColor= await Color.create({ name: color })
    return newColor;
    };
    
    
    module.exports = createNewColor;