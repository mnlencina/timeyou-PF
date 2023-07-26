const { User, Buy } = require("../db");

const allUsers = async () => {
  const all = await User.findAll({ include: Buy });

  return all;
};

module.exports = allUsers;
