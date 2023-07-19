const express = require("express");
const createFunction = require("../../controllers/postFunction");
const { getFunctions, getAllFunctions } = require("../../controllers/getFunction");
const functionRouter = express.Router();

functionRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newFunction = await createFunction(name);
    res.status(200).json(newFunction);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

functionRouter.get("/:functionName", async (req, res) => {
  const {functionName} = req.params;
  try {
    const allFunctions = await getFunctions(functionName);
    res.status(200).json(allFunctions);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

functionRouter.get("/", async (req, res) => {
  try {
    const allFunctions = await getAllFunctions();
    res.status(200).json(allFunctions);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
})

module.exports = functionRouter;