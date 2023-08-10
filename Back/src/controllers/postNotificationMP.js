require("dotenv").config();
const { MERCADO_PAGO } = process.env;
const { Buys } = require("../db");

const dataBuysMP = async (id) => {
  const url = `https://api.mercadopago.com/v1/payments/${id}`;
  try {
    const response = await axios.get(url, {
      headers: { authorization: `Bearer ${MERCADO_PAGO}` },
    });

    const { id, card, description, order, payment_method, transaction_amount } =
      response.data;
    
    const datosCompra = {
      id,
      name: description,
      provider: order.type,
      total: transaction_amount,
      card: { card, payment_method },
    };
    const createBuy = await Buys.create(datosCompra);
    return createBuy;
  } catch (error) {
    return error;
  }
};

module.exports = dataBuysMP;
