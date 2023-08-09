require("dotenv").config();
const { MERCADO_PAGO } = process.env;
const { Buys } = require("../db");

const dataBuysMP = async (id) => {
  const url = `https://api.mercadopago.com/v1/payments/${id}`;
  try {
    const { data } = await axios.get(url, {
      headers: { authorization: `Bearer ${MERCADO_PAGO}` },
    });
    const { id, card, description, order, payment_method, transaction_amount } =
      data;
    const datosCompra = await Buys.create({
      id: id,
      name: description,
      provider: order.type,
      card: { card, payment_method },
      total: transaction_amount,
    });
    return datosCompra;
  } catch (error) {
    return error;
  }
};

module.exports = dataBuysMP;
