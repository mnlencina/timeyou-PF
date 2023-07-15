const { Style } = require("../db");

const createNewStyle = async (style) => {
  if (!style) throw new Error("Missing data");

  const newStyle = await Style.create({ name: style });
  return newStyle;
};

module.exports = createNewStyle;
