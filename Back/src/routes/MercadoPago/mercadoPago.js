const express = require("express");
const mercadopago = require("mercadopago");
const mercadoPagoRouter = express.Router();

mercadoPagoRouter.post("/create_preference", (req, res) => {
console.log("entro al post");
  const shoppingCart = req.body;
  console.log(shoppingCart);
  try {
    let preference = {
      items: shoppingCart.map((items) => ({
        title: items.description,//`${items.brandName} - ${items.model}`,
        unit_price: items.price, //Number(items.price),
        quantity: items.quantity,//Number(shoppingCart.quantity),
        currency_id: "ARS",
      })),
      /* let preference = {
        items: [
          {
            title: req.body.description,
            unit_price: Number(req.body.price),
            quantity: Number(req.body.quantity),
          },
        ], */
      back_urls: {
        success: "http://localhost:5173/home",
        failure: "http://localhost:5173/shopping",
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
