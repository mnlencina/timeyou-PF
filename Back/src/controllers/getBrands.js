const { Brand } = require("../db");

const allBrand = async () => {
  const allBrands = await Brand.findAll();

  if (!allBrands) throw new Error("That brand does not exist");
  return allBrands;
};

module.exports = allBrand;
