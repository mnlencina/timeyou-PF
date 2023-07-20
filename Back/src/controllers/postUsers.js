const { Op } = require("sequelize");
const { User } = require("../db");
const bcrypt = require("bcrypt");

const createUser = async (
  name,
  userName,
  password,
  email,
  age,
  phone_number,
  role
) => {
  if (!name || !userName || !password || !email)
    throw new Error("Missing data");

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
  const newUser = User.create({
    name,
    userName,
    password: hashedPassword,
    email,
    age,
    phone_number,
    role,
  });
  return newUser;
};

module.exports = createUser;
