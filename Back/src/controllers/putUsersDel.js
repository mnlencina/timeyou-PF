const { User } = require("../db");

const updateUser = async (id, del) => {
  let user = await User.findByPk(id);
  if (!user) throw new Error("User not found");
  await User.update({ del: del }, { where: { id: id } });
  user = await User.findByPk(id);
  return user;
};

module.exports = updateUser;
