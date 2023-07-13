const express = require("express");

const router = express.Router();

router.get("/admin", (req, res) => {
  res.status(200).send("aca estara la primera ruta admin");
});

module.exports = router;
