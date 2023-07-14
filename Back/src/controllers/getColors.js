const { watch } = require("../db");


const getColors = async (color) => {
    const watches = await watch.findAll()
    const colors= watches.map(w=>w.color)
    const allFilterOptionsColor = [];
    colors.map(c=> allFilterOptionsColor.push(...Object.keys(c)))
    const filterOptionsColor = []
    for (let index = 0; index < allFilterOptionsColor.length; index++) {
        const element = array[index];
        if(!filterOptionsColor.includes(element)){
            filterOptionsColor.push(element);
        }
    }
    return filterOptionsColor;
    };
    
    
    module.exports = getColors;