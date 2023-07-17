const { Strap, Watch} = require("../db");


const getStraps = async (strapName) => {
    const Straps= await Strap.findOne({
        where: { name: strapName },
        include: Watch // Incluir la relación de los relojes asociados al color
      });
    return Straps;
    };
    
    
    module.exports = getStraps;
