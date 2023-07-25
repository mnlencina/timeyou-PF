const { User } = require("../db");

const allUserName = async () => {
  const allUser = await User.findAll({ attributes: ["userName"] });
  const nameDisabled = allUser.map((user) => user.userName);
  if (!nameDisabled) throw new Error("no usernames available");
  return nameDisabled;
};

module.exports = allUserName;
