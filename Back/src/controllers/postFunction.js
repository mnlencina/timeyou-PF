const { Function } = require("../db");

const createNewFunction = (functions) => {
  if (functions.length == 0) throw new Error("Missing data");
  const newFuntions = functions.map(e => {
    return {

      name:e
    }
  });
  return Function.bulkCreate(newFuntions);
};

module.exports = createNewFunction;
