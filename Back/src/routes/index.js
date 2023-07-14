const express = require("express");
const createNewWatch = require("../controllers/postNewWacth");

const router = express.Router();

router.post("/admin", async (req, res) => {
  const { model, color, price, gender, brands, style, strap, functions } =
    req.body;
  try {
    const newWatch = await createNewWatch(
      model,
      color,
      price,
      gender,
      brands,
      style,
      strap,
      functions
    );
    res.status(200).json(newWatch);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
  res.status(200).send("aca estara la primera ruta admin");
});

router.post("/admin", (req, res) => {
  res.status(200).send("aca se creara el nuevo items");
});


router.post("/admin/addStyle", async (req, res) => {
  const { name } = req.body;
  try {
    const newStyle = await createNewStyle(name);
    res.status(200).json(newStyle);
    
    } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

router.post("/admin/addBrands", async (req, res) => {
  const { name } = req.body;
  try {
    const newBrands = await createBrand(name);
    console.log(newBrands);
    res.status(200).json(newBrands);

  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = router;
