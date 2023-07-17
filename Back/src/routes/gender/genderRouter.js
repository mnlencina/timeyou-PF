const express = require('express');

const getGender = require("../../controllers/getGender");


const genderRouter = express.Router();



genderRouter.get("/", async (req, res) => {

  try {
    const gender = await getGender(req)
    res.status(200).json(gender)

  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
})

module.exports = genderRouter;
