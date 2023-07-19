const { Style, Watch} = require("../db");


const getAllStyles = async () => {
  const allStyles = await Style.findAll();

  if (!allStyles) throw new Error("Styles not found");
  return allStyles;
};

const getStyles = async (styleName) => {
    const Styles= await Style.findOne({
        where: { name: styleName },
        include: Watch // Incluir la relación de los relojes asociados al color
      });
    return Styles;
    };
    
    
module.exports = { getStyles, getAllStyles };