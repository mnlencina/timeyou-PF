const { User } = require("../db");

const selectedUser = async (userName) => {
  const foundUser = await User.findOne({ where: { userName: userName } });
  if (!foundUser) throw new Error("userName not found");
  return foundUser;
};

module.exports = selectedUser;
