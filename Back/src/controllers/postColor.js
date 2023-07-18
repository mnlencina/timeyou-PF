const { Color } = require("../db");

<<<<<<< HEAD

const createNewColor = async (name) => {
    const newColor= await Color.Create({
        name
    })
=======
const createNewColor = async (color) => {
    const newColor= await Color.create({ name: color })
>>>>>>> dd3ee6f6bdeaed0197facdba810c20d143be946c
    return newColor;
    };
    
    
<<<<<<< HEAD
    module.exports = createpostColor;
=======
    module.exports = createNewColor;
>>>>>>> dd3ee6f6bdeaed0197facdba810c20d143be946c
