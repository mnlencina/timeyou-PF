const { Function } = require("../db");

const createFunction = async (functionName) => {
  const newFunction= await Function.create({ name: functionName })
  return newFunction;
  };

module.exports = createFunction;
