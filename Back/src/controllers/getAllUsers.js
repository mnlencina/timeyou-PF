const { User, Buy } = require("../db");

const allUsers = async () => {
  const users = await User.findAll({ include: Buy });
  return users;
};

module.exports = allUsers;
