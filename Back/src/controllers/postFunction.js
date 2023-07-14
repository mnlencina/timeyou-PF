const { Function } = require("../db");

const createNewFunction = (functions) => {
  if (!functions) throw new Error("Missing data");
  const newFuntion = Function.create({ name: functions });
  return newFuntion;
};

module.exports = createNewFunction;
