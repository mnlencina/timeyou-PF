const { Brand } = require("../db");

const createBrand = async (brand) => {
  if (!brand) throw new Error("Missing data");

  const newBrand = await Brand.create({ name: brand });
  return newBrand;
};

module.exports = createBrand;
