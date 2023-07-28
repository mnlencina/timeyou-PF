require("dotenv").config();
const jwt = require("jsonwebtoken"); // para verificar el token recibido
const { SECRET_TOKEN } = process.env;

const authRequest = (req, res, next) => {
  const { token } = req.headers; // verificar por donde llegara el token

  console.log(token);

  if (!token) return res.json({ message: "the token does not exist" });

  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });

    req.user = user;
    next();
  });
};

module.exports = authRequest;
