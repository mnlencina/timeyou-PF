const { Color } = require("../db");


const createNewColor = async (name) => {
    const newColor= await Color.Create({
        name
    })
    return newColor;
    };
    
    
    module.exports = createpostColor;