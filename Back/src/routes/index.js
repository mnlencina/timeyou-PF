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

module.exports = router;
