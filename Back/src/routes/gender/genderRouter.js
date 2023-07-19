const express = require('express');
const {getGender, allGenders} = require("../../controllers/getGender");
const genderRouter = express.Router();

genderRouter.get("/", async (req, res) => {
console.log(req.body);
  try {
    const gender = await allGenders()
    res.status(200).json(gender)

  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
})

genderRouter.get("/:genderName", async (req, res) => {
    const {genderName} = req.params;
    try {
      const gender = await getGender(genderName)
      res.status(200).json(gender)
  
    } catch (error) {
      res.status(500).json({ Error: error.message })
    }
  })

module.exports = genderRouter;