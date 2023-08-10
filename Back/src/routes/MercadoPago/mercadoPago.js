require("dotenv").config();
const { MERCADO_PAGO } = process.env;
const { Buy } = require("../../db");
const axios = require("axios");
const express = require("express");
const mercadopago = require("mercadopago");
// const dataBuysMP = require("../../controllers/postNotificationMP");
const mercadoPagoRouter = express.Router();

mercadoPagoRouter.post("/create_preference", (req, res) => {
  const shoppingCart = req.body;
  console.log(shoppingCart);

  try {
    let preference = {
      items: shoppingCart.carrito.map((items) => ({
        title: items.description, //`${items.brandName} - ${items.model}`,
        unit_price: items.price, //Number(items.price),
        quantity: items.quantity, //Number(shoppingCart.quantity),
        currency_id: "ARS",
      })),

      external_reference: shoppingCart.userBuy,

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

mercadoPagoRouter.post("/notification", async (req, res) => {
  const transactionId = req.body.data.id;
  const url = `https://api.mercadopago.com/v1/payments/${transactionId}`;

  
  try {
    const { data } = await axios.get(url, {
      headers: { authorization: `Bearer ${MERCADO_PAGO}` },
    });
    
    const {
      id,
      card,
      description,
      order,
      payment_method,
      transaction_amount,
      external_reference,
    } = data;

    const datosCompra = {
      id: id,
      name: description,
      provider: order.type,
      card: { card, payment_method },
      UserId: external_reference,
      total: transaction_amount,
    };
    console.log(datosCompra);

    const createCompra = await Buy.create(datosCompra);

    res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error.message });
  }
});

module.exports = mercadoPagoRouter;
