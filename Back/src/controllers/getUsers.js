const { User } = require("../db");

const getUsers = async () => {
  const allUsers = await User.findAll();
   if (!allUsers) throw new Error("Users not found")
  return allUsers;
};

module.exports = getUsers;
