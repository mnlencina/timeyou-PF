const { User } = require("../db");

const inabilitedUser = async (id, del) => {
  await User.update({ del: del }, { where: { id: id } });
  let userFound = await User.findByPk(id);
  return userFound;
};

module.exports = inabilitedUser;
