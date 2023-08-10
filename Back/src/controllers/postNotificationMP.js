require("dotenv").config();
const { MERCADO_PAGO } = process.env;
const { Buys } = require("../db");

const dataBuysMP = async (id) => {
  const url = `https://api.mercadopago.com/v1/payments/${id}`;
  console.log(url);
  try {
    const response = await axios.get(url, {
      headers: { authorization: `Bearer ${MERCADO_PAGO}` },
    });
    const { id, card, description, order, payment_method, transaction_amount } =
      response.data;
    console.log(response.data);
    const datosCompra = {
      id: id,
      name: description,
      provider: order.type,
      card: { card, payment_method },
      total: transaction_amount,
    };
    const createCompra = await Buys.create(datosCompra);
    console.log(datosCompra);
  } catch (error) {
    return error;
  }
};

module.exports = dataBuysMP;
