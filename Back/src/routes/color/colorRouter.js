const express = require("express");
const getColor = require("../../controllers/getColors");
const createColor = require("../../controllers/postColor");
const colorRouter = express.Router();

colorRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newBrands = await createColor(name);
    res.status(200).json(newBrands);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

colorRouter.get("/:colorName", async (req, res) => {
  const {colorName} = req.params;
  try {
    const allColors = await getColor(colorName);
    res.status(200).json(allColors);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = colorRouter;