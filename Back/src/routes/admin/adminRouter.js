const express = require("express");
const inabilitedUser = require("../../controllers/putAdminUser");
const selectedUser = require("../../controllers/getUserName");
const adminRouter = express.Router();

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

adminRouter.get("/user-by-userName", async (req, res) => {
  const { userName } = req.query;
  try {
    const userFound = await selectedUser(userName);
    res.status(200).json(userFound);
  } catch (error) {
    if (error.message.includes("userName"))
      return res.status(404).json({ Error: error.message });
    else return res.status(500).json({ Error: error.message });
  }
});

module.exports = adminRouter;
