const express = require("express");
const allGender = require("../../controllers/getGender");
const genderRouter = express.Router();

genderRouter.get("/", async (req, res) => {
  try {
    const allGenders = await allGender();
    res.status(200).json(allGenders);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = genderRouter;