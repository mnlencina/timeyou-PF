const { Brand, Watch } = require("../db");

const getBrand = async (brandName) => {
  const allBrands = await Brand.findOne({
    where: {name: brandName},
    include: Watch
    });
  return allBrands;
};

module.exports = getBrand;
