const { watch, Function, brand, Style, Strap } = require("../db");

const createNewWatch = async (
  model,
  color,
  price,
  gender,
  brands,
  style,
  strap,
  functions
) => {
  // evaluamos que recibimos los datos completos para crear el nuevo reloj
  if (!model || !color || price || gender) throw new Error("missing data");

  const newWatch = await watch.Create({
    model,
    color,
    price,
    gender,
  });

  const brandModel = await brand.findOne({ where: { name: brands } });

  const styleModel = await Style.findOne({ where: { name: style } });

  const strapModel = await Strap.findOne({ where: { name: strap } });

  const functModels = await functions.map((funct) => {
    return Function.findOne({ where: { name: funct } });
  });

  await newWatch.setFunctions(functModels);
  await newWatch.setStyles(styleModel);
  await newWatch.setBrands(brandModel);
  await newWatch.setStraps(strapModel);

  return newWatch;
};

module.exports = createNewWatch;
