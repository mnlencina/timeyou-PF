const { Watch, Function, Brand, Style, Strap, Color } = require("../db");

const createNewWatch = async ({
  brand,
  model,
  style,
  color,
  image,
  strap,
  price,
  gender,
  review,
  functions,
  description,
  del  
}) => {
  // evaluamos que recibimos los datos completos para crear el nuevo reloj
  if (!model || !color || !price ) throw new Error("missing data");

  const newWatch = await Watch.Create({
    model,
    image,
    price,
    gender,
    review,
    description,
    del
  });

  const brandModel = await Brand.findOne({ where: { name: brand } });
  
  const colorModel = await Color.findOne({ where: { name: color } });

  const styleModel = await Style.findOne({ where: { name: style } });

  const strapModel = await Strap.findOne({ where: { name: strap } });

  const functModels = await functions.map((funct) => {
    return Function.findOne({ where: { name: funct } });
  });

  await newWatch.setFunctions(functModels);
  await newWatch.setStyles(styleModel);
  await newWatch.setBrands(brandModel);
  await newWatch.setStraps(strapModel);
  await newWatch.setColor(colorModel);

  return newWatch;
};

module.exports = createNewWatch;
