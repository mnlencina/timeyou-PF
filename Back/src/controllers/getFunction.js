const { Function, Watch } = require("../db");

const getAllFunctions = async () => {
  const allFunctions = await Function.findAll();

  if (!allFunctions) throw new Error("Functions not found");
  return allFunctions;
}



const getFunctions = async (functionName) => {
  const functions = await Function.findOne({
    where: { name: functionName },
    include: [
      {
        model: Watch
      }
    ] // Incluir la relación de los relojes asociados al color
  });
  return functions;
};


module.exports = { getFunctions, getAllFunctions };