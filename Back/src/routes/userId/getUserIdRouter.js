const express = require("express");
const userEmail = require("../../controllers/getUserEmail")
const getUserIdRouter = express.Router();

getUserIdRouter.use("/", async (req, res) => {

const {email} = req.query;

    try {
      const emailUser = await userEmail(email);
      const userId = emailUser.id
      res.status(200).json(userId);
    } catch (error) {
      res.status(500).json({ Error: error.message });
    }
  });
  
  module.exports = getUserIdRouter;