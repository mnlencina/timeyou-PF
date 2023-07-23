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
