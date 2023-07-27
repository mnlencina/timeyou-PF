const { User } = require("../db");
const bcrypt = require("bcrypt");

const updateUser = async (id, upUser) => {
  if (upUser.password) {
    const saltRounds = 10; // numero de rounds de encriptacion
    let passBcrypt = await bcrypt.hash(upUser.password, saltRounds);
    upUser.password = passBcrypt;
  }
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("User not found.");
  }

  await user.update(upUser);

  return user;
};

module.exports = updateUser;
