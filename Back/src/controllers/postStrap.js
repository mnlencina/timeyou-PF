const { Strap } = require("../db");

const createStrap = async (strap) => {
  if (!strap) throw new Error("Missing data");

  const newStrap = await Strap.create({ name: strap });
  return newStrap;
};

module.exports = createStrap;
