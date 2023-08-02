const express = require("express");
const mercadopago = require("mercadopago");
const mercadoPagoRouter = express.Router();

mercadoPagoRouter.post("/create_preference", (req, res) => {
  const shoppingCart = req.body;
  try {
    let preference = {
      items: shoppingCart.map((items) => ({
        title: shoppingCart.model,
        unit_price: Number(shoppingCart.price),
        quantity: Number(shoppingCart.quantity),
        currency_id: "ARS",
      })),
      back_urls: {
        success: "http://localhost:5173",
        failure: "http://localhost:5173",
        pending: "",
      },
      auto_return: "approved",
    };
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        res.status(500).json({ Error: error.message });
      });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = mercadoPagoRouter;
