const express = require("express");
const router = express.Router();

const watchRouter = require("./watch/watchRouter");
const brandRouter = require("./brand/brandRouter");
const strapRouter = require("./strap/strapRouter");
const colorRouter = require("./color/colorRouter");
const styleRouter = require("./style/styleRouter");
const functionRouter = require("./functions/functionRouter");
const genderRouter = require("./gender/genderRouter");
const userRouter = require("./users/userRouter");
const buyRouter = require("./buy/buyRouter");
const adminRouter = require("./admin/adminRouter");
const authRouter = require('./auth/authRouter');

// Rutas para el filtrado en la pagina
router.use("/colors", colorRouter);
router.use("/styles", styleRouter);
router.use("/functions", functionRouter);
router.use("/genders", genderRouter);
router.use("/straps", strapRouter);
// Rutas adicionales necesarias
router.use("/watches", watchRouter);
router.use("/brands", brandRouter);
router.use("/users", userRouter);
router.use("/buy", buyRouter);
router.use("/admin", adminRouter);
router.use("/auth",authRouter);

module.exports = router;
