const { watch } = require("../db");

const createNewWatch = async (model, color, price, gender) => {
  // evaluamos que recibimos los datos completos para crear el nuevo reloj
  if (!model || !color || price || gender) throw new Error("missing data");

  const newWatch = await watch.Create({
    model,
    color,
    price,
    gender,
  });
  return newWatch;
};

module.exports = createNewWatch;
