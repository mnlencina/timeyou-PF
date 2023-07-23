const express = require("express");
const createStyle = require("../../controllers/postStyle");
const { getAllStyles, getStyles } = require("../../controllers/getStyles");
const styleRouter = express.Router();

styleRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newStyle = await createStyle(name);
    res.status(200).json(newStyle);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

styleRouter.get("/:styleName", async (req, res) => {
  const {styleName} = req.params;
  try {
    const allStraps = await getStyles(styleName);
    res.status(200).json(allStraps);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

styleRouter.get("/", async (req, res) => { 
  try {
    const allStyles = await getAllStyles();
    res.status(200).json(allStyles);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
})

module.exports = styleRouter;