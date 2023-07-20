const express = require("express");
const getPrices = require("../../controllers/getPrices");

const priceRouter = express.Router();

priceRouter.get("/", async (req, res) => {
    
    try {
    const allPrice = await getPrices();
    res.status(200).json(allPrice);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});

module.exports = priceRouter;
