const express = require("express");
const createStrap = require("../../controllers/postStrap");
const { getStraps, getAllStraps } = require("../../controllers/getStraps");



const strapRouter = express.Router();

strapRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) res.status(404).json({ Error: error.message });
    const newStrap = await createStrap(name);
    res.status(200).json(newStrap);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

strapRouter.get("/:strapName", async (req, res) => {
  const { strapName } = req.params;
  try {
    const allFunctions = await getStraps(strapName);
    res.status(200).json(allFunctions);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});


strapRouter.get("/", async (req, res) => {
  try {
    const allStraps = await getAllStraps();
    res.status(200).json(allStraps);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = strapRouter;
