const { Router } = require('express');
const createColor= require("../../controllers/postColor");
const getColors = require("../../controllers/getColors");
const allColors = require('../../controllers/allColors');

const colorRouter = Router();
colorRouter.post("/", async (req, res) => {
    const { name } = req.body;
    try {
    if (!name) res.status(400).json({ Error: error.message });
    const newColor = await createColor(name);
    res.status(200).json(newColor);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});

colorRouter.get("/", async (req, res) => {
    try {
    const getColors = await allColors();
    res.status(200).json(getColors);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});

colorRouter.get("/:colorName", async (req, res) => {
    const {colorName} = req.params;
    console.log(colorName);
    try {
    const allColors = await getColors(colorName);
    res.status(200).json(allColors);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});

module.exports = colorRouter;