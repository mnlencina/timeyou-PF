const { User } = require("../db");
const bcrypt = require("bcrypt");

const userLogin = async (userName, email, password, provider) => {
  if (!email || !provider) throw new Error("Missing  data to login");

  let found = await User.findOne({ where: { email: email } });

  if (!found && provider !== "local") {
    found = await User.create({ email, userName, password, provider });
  } else if (!found) throw new Error("User not found");

  if (provider === "local") {
    const isMatch = await bcrypt.compare(password, found.password);
    if (!isMatch) throw new Error("Password invalid");
  }

  const userFound = {
    id: found.id,
    userName: found.userName,
    email: found.email,
    role: found.role,
    del: found. del,
  };
  return userFound;
};

module.exports = userLogin;
