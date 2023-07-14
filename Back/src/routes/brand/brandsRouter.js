const express = require("express");
const brandsRouter = express.Router();

brandsRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newBrands = await createBrand(name);

    res.status(200).json(newBrands);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

brandsRouter.get("/", (req, res) => {
  const { brand } = req.params;
  try {
    res.status(200).json({ data: getBrands(brand) });
  } catch (error) {
    res.status(400).send({ err: "Esta Marca no existe" });
  }
});

module.exports = brandsRouter;
