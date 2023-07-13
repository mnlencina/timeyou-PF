const router = require("express").Router();
const addAnimal = require("../../Controllers/getBrands.js");


router.get("/brand", (req, res) => {
  const { brand } = req.params;
  try {
    res.status(200).json({ data: getBrands(brand) });
  } catch (error) {
    res.status(400).send({ err: "Esta Marca no existe" });
  }
});


module.exports = router;