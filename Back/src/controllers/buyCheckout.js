require('dotenv').config();
const { stripe_KEY } = process.env;
const Stripe = require('stripe');
const stripe = new Stripe(stripe_KEY);


const buyCheckout = async (id,model,colorName,amount)=>{

   return  await stripe.paymentIntents.create({

    amount,
    currency: "USD",
    payment_method: id,
    confirm: true,
    metadata: {
      model,
      colorName,
    }
})};

module.exports = buyCheckout;