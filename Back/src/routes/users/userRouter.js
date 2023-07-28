const express = require("express");
const createUser = require("../../controllers/postUsers");
const sendEmailConPlantilla = require("../../nodemailer/sendEmailConPlantilla");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { name, userName, password, email, age, phone_number, role } = req.body;
  try {
    const newUser = await createUser(
      name,
      userName,
      password,
      email,
      age,
      phone_number,
      role
    );
    if(newUser.email) {
      console.log(newUser.email)
      sendEmailConPlantilla(newUser.email, "newUser")
    }
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    if (error.message.includes("not available")) {
      return res.status(400).json({ Error: error.message });
    } else res.status(500).json({ Error: error.message });
  }
});

module.exports = userRouter;
