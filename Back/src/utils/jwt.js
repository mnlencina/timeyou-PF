require("dotenv").config();
const { SECRET_TOKEN } = process.env;
const jwt = require("jsonwebtoken");

const createAccessToken = (payload) => {
  // se crea una nueva promesa para luego poder usar async/await
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_TOKEN, //debe estar en un archivo que no tenga acceso HACKER esto tendran que crealo en su local para poder usar la ruta.
      {
        expiresIn: "1d", //tiempo en el que expra el token
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

module.exports = createAccessToken;
