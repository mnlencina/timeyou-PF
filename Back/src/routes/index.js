const express = require("express");

const router = express.Router();

router.get("/admin", (req, res) => {
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

module.exports = router;
