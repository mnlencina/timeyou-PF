const { Buy } = require("../db");

const allBuyUsers = async () => {
  const allBuy = await Buy.findAll();
  if (!allBuy.length) return { message: "there are no recorded purchases" };
  return allBuy;
};

module.exports = allBuyUsers;
