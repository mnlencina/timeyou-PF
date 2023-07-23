const { Color } = require("../db");

const createpostColor = async (color) => {
    const newColor= await Color.create({ name: color })

    return newColor;
    };    
    

module.exports = createpostColor;
