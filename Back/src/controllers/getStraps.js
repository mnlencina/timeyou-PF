const { Strap } = require("../db");

const allStrap = async () => {
  const allStraps = await Strap.findAll();
  if (!allStraps) throw new Error("That strap does not exist");
  return allStraps;
};

module.exports = allStrap;
