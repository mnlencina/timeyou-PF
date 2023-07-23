const express = require("express");
const createBrand = require("../../controllers/postBrands");
const getBrand = require("../../controllers/getBrands");
const allBrands = require("../../controllers/allBrands");

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
console.log('ENTRA ALLGET');
  try {
    const getBrands = await allBrands();
    res.status(200).json(getBrands);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

brandRouter.get("/:brandName", async (req, res) => {
  const {brandName} = req.params;
  try {
    const allBrands = await getBrand(brandName);
    res.status(200).json(allBrands);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = brandRouter;
