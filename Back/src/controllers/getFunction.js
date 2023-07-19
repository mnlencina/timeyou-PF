const { Function, Watch} = require("../db");


const getFunctions = async (functionName) => {
    const functions= await Function.findOne({
        where: { name: functionName },
        include: [
          {
            model: Watch
          }
        ] // Incluir la relación de los relojes asociados al color
      });
    return functions;
    };
    
    
    module.exports = getFunctions;