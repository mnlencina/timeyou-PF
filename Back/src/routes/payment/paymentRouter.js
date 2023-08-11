const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51NVgnTAYvuvU8SQ4X4AaFEBJy2S6AsB717XBQKlOXRbcJXyBwBWjZv2fN9LiQQdnkfUNt6hitIXDRPIbFYsgnoxB00MCKGgV7d"
); // Reemplaza con tu clave secreta de Stripe
const postNewBuy = require("../../controllers/postNewBuy");

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { userName, model, amount } = req.body;

    const YOUR_DOMAIN = "http://localhost:5173"; // Reemplaza con el dominio de tu aplicación
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: model, // Reemplaza con el nombre de tu producto
            },
            unit_amount: amount, // Reemplaza con el precio en centavos (por ejemplo, $10.00 serían 1000 centavos)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/shopping/resumen?success=true`,
      cancel_url: `${YOUR_DOMAIN}/shopping?canceled=true`,
    });

    res.json({ sessionId: session.id });

    const newBuy = await postNewBuy(
      userName,
      model,
      amount,
      (provider = "stripe")
    );
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

module.exports = router;
