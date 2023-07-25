const express = require("express");
const createUser = require("../../controllers/postUsersRegister");
const userLogin = require("../../controllers/postLoginUser");
const createAccessToken = require("../../utils/jwt");
const allUserName = require("../../controllers/getAllUserName");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const newUser = await createUser(userName, email, password);
    if (newUser) res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    if (error.message.includes("not available")) {
      return res.status(400).json({ Error: error.message });
    } else res.status(500).json({ Error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { userName, email, password, provider } = req.body;
  try {
    const userSession = await userLogin(userName, email, password, provider);
    const token = await createAccessToken({ id: userSession.id });

    const userCredentials = {
      userName: userSession.userName,
      email: userSession.email,
      token: token,
    };
    res.status(200).json(userCredentials);
  } catch (error) {
    if (
      error.message.includes("to login") ||
      error.message.includes("invalid") ||
      error.message.includes("not found")
    ) {
      res.status(404).json({ Error: error.message });
      // console.log(error.message);
    } else res.status(500).json({ Error: error.message });
  }
});

userRouter.get("/allUserName", async (req, res) => {
  try {
    const allName = await allUserName();
    res.status(200).json(allName);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = userRouter;
