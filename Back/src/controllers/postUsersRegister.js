const { Op } = require("sequelize");
const { User } = require("../db");
const bcrypt = require("bcrypt");

const createUser = async (userName, email, password) => {
  if (!userName || !email) throw new Error("Missing data for create user");

  const notAvailable = await User.findOne({
    where: {
      [Op.or]: [{ userName: userName }, { email: email }],
    },
  });
  if (notAvailable) {
    if (notAvailable.userName === userName)
      throw new Error("The UserName is not available");
    else if (notAvailable.email === email)
      throw new Error("The email is not available");
  }

  // generar el has del password

  const saltRounds = 10; // numero de rounds de encriptacion
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  return newUser;
};

module.exports = createUser;
