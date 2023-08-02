const express = require("express");
require("dotenv").config();
//const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/index");
require("./db.js");
const server = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const mercadopago = require("mercadopago");
const { MERCADO_PAGO } = process.env;
//server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
//server.use(bodyParser.json({ limit: "50mb" }));
//server.use(cookieParser());
const cors = require('cors');

server.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Si es necesario, habilita el envío de cookies o credenciales
}));

server.use(
  session({
    secret: "tu_secreto_session", // Puedes cambiar esto por una cadena aleatoria más segura
    resave: false,
    saveUninitialized: true,
  })
);

// Configurar Passport y las estrategias de autenticación

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // Esta ruta debe coincidir con la configuración en la consola de desarrolladores de Google
      scope: ["profile", "email"], // Agregar 'phone' y 'age' al alcance
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile.provider);
      try {
        return done(null, profile);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Función de serialización vacía (no hace nada)
passport.serializeUser((user, done) => {
  done(null, user);
});

// Función de deserialización vacía (no hace nada)
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Iniciar Passport
server.use(passport.initialize());
// server.use(passport.session());

server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// ESTO DEBE SER UNA VARIABLE DE ENTORNO EN PRODUCCION "NO OLVIDAR"
mercadopago.configure({
  access_token:
    "TEST-5174571250804826-080209-a98c6644fc34e88aa289363ea5e52e10-425132488",
});
server.use("/", router);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
