const { Brand } = require("../db");

const allBrands = async () => {
  const getBrands = await Brand.findAll();


  if (!getBrands) throw new Error("That brand does not exist");
  return getBrands;
};

module.exports = allBrands;
