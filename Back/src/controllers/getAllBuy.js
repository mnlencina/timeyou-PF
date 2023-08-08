const { Buy, User } = require("../db");

const allBuyUsers = async () => {
  const allBuy = await Buy.findAll({ include: User });
  if (!allBuy.length) return { message: "there are no recorded purchases" };
  return allBuy;
};

module.exports = allBuyUsers;
