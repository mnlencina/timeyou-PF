const express = require("express");
const router = express.Router();

const watchRouter = require("../routes/watchs/watchRouter");
const brandsRouter = require("./brand/brandsRouter");
const strapsRouter = require("./strap/strapsRouter");
const colorRouter = require("./color/colorRouter");
const styleRouter = require('./style/styleRouter');
const functionRouter = require('./Functions/functionRouter');
const genderRouter = require('./Gender/genderRouter');
const enviarCorreoUsuariosRouter = require("./Notificaciones/enviarCorreoUsuarios");

// Rutas para el filtrado en la pagina
router.use("/colors", colorRouter);
router.use("/styles", styleRouter);
router.use("/functions", functionRouter);
router.use("/gender", genderRouter);
router.use("/straps", strapsRouter);
// Rutas adicionales necesarias
router.use("/watches", watchRouter);
router.use("/brands", brandsRouter);
router.use('/enviar-mensaje', enviarCorreoUsuariosRouter);


// router.post("/admin/addFunction", (req, res) => {
//   const { name } = req.body;
//   try {
//     const newFunction = createNewFunction(name);
//     res.status(200).json(newFunction);
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// });

// router.post("/admin/addStyle", async (req, res) => {
//   const { name } = req.body;
//   try {
//     const newStyle = await createNewStyle(name);
//     res.status(200).json(newStyle);
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// });

module.exports = router;
