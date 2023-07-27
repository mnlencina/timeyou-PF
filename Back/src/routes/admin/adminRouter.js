const express = require("express");
const inabilitedUser = require("../../controllers/putAdminUser");
const userEmail = require("../../controllers/getUserEmail");
const allUsers = require("../../controllers/getAllUsers");

const adminRouter = express.Router();

adminRouter.get("/allUsers", async (req, res) => {
  try {
    const userDataBase = await allUsers();
    res.status(200).json(userDataBase);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

adminRouter.put("/inabilited/:id", async (req, res) => {
  const { id } = req.params;
  const { del } = req.body;
  try {
    const inabilited = await inabilitedUser(id, del);
    res.status(200).json(inabilited);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

adminRouter.get("/users-by-email", async (req, res) => {
  const { email } = req.query;
  try {
    const userFound = await userEmail(email);
    res.status(200).json(userFound);
  } catch (error) {
    if (error.message.includes("Email"))
      return res.status(404).json({ Error: error.message });
    else return res.status(500).json({ Error: error.message });
  }
});
module.exports = adminRouter;
