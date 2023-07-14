const { Color } = require("../db");


const getColors = async () => {
    const colors= await Color.findAll()
    return colors;
    };
    
    
    module.exports = getColors;