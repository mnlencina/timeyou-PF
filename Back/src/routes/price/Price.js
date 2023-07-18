const { Router } = require('express');
const allPrice= require("../../controllers/getPrices");

PriceRouter.get("/", async (req, res) => {
    try {
    const allPrice = await allPrice();
    res.status(200).json(allPrice);
    } catch (error) {
    res.status(500).json({ Error: error.message });
    }
});

module.exports = PriceRouter;