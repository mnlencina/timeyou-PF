const { Strap, Watch} = require("../db");



const getAllStraps = async () => {
  const allStraps = await Strap.findAll();
  if (!allStraps) throw new Error("That strap does not exist");
  return allStraps;
};





const getStraps = async (strapName) => {
    const Straps= await Strap.findOne({
        where: { name: strapName },
        include: Watch // Incluir la relación de los relojes asociados al color
      });
    return Straps;
    };
    
    
module.exports = { getStraps, getAllStraps };
