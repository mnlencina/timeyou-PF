const express = require("express");
const inabilitedUser = require("../../controllers/putAdminUser");
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

module.exports = adminRouter;
