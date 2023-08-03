const express = require("express");
const userLogin = require("../../controllers/postLoginUser");
const createAccessToken = require("../../utils/jwt");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    const email = req.user.emails[0].value;
    const userName = req.user.displayName;
    const password = req.user.id;
    const provider = req.user.provider;
    console.log(email, userName, password, provider);
    try {
      const userSession = await userLogin(userName, email, password, provider);
      const token = await createAccessToken({ id: userSession.id });

      const userCredentials = {
        userName: userSession.userName,
        email: userSession.email,
        token: token,
        role: userSession.role,
        del: userSession.del
      };
      const userData = JSON.stringify(userCredentials);
      console.log(userData);
      res.redirect(
        "http://localhost:5173/auth?data=" +
          encodeURIComponent(userData) +
          "&confirmation=true"
      );
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
  }
);

module.exports = authRouter;
