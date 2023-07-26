const { User } = require("../db");
const bcrypt = require("bcrypt");

const newPassword = async (email, password) => {
  let updatePassword = await User.findOne({ where: { email: email } });
  if (!updatePassword) throw new Error("Email not registered in the system");

  const saltRounds = 10; // numero de rounds de encriptacion
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await User.update({ password: hashedPassword }, { where: { email: email } });
  return updatePassword;
};

module.exports = newPassword;
