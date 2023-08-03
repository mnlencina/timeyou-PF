const { User } = require("../db");

const userById = async (id) => {
  const userFound = await User.findByPk(id);

  return userFound;
};

module.exports = userById;
