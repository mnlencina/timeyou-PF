const express = require("express");
const createUser = require("../../controllers/postUsersRegister");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const newUser = await createUser;
    if (newUser) res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    if (error.message.includes("not available")) {
      return res.status(400).json({ Error: error.message });
    } else res.status(500).json({ Error: error.message });
  }
});

module.exports = userRouter;
