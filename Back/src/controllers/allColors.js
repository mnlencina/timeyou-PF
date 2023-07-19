const { Color } = require("../db");

const allColors = async () => {
  const getColors = await Color.findAll();

  if (!getColors) throw new Error("That Color does not exist");
  
  return getColors;
};

module.exports = allColors;
