const express = require("express");
const updateUser = require("../../controllers/putUsersDel");
const allUsers = require("../../controllers/getAllUsers");
const adminRouter = express.Router();

adminRouter.get("/allUsers", async (req, res) => {
  try {
    const all = await allUsers();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

adminRouter.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { del } = req.body;
  try {
    const update = await updateUser(id, del);
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = adminRouter;
