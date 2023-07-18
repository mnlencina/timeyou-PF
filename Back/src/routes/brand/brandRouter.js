const express = require("express");
const allBrand = require("../../controllers/getBrands");
const createBrand = require("../../controllers/postBrands");

const brandRouter = express.Router();

brandRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newBrands = await createBrand(name);
    res.status(200).json(newBrands);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

brandRouter.get("/", async (req, res) => {
  try {
    const allBrands = await allBrand();
    res.status(200).json(allBrands);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = brandRouter;
