const express = require("express");
const createNewWatch = require("../controllers/postNewWacth");
const watchRouter = require("../routes/watchs/watchRouter");
const brandsRouter = require("./brand/brandsRouter");

const router = express.Router();

router.use("/watches", watchRouter);
router.use("/brands", brandsRouter);

router.post("/admin/addFunction", (req, res) => {
  const { name } = req.body;
  try {
    const newFunction = createNewFunction(name);
    res.status(200).json(newFunction);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

router.post("/admin/addStrap", async (req, res) => {
  const { name } = req.body;
  try {
    const newStrap = await createStrap(name);
    res.status(200).json(newStrap);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

router.post("/admin/addStyle", async (req, res) => {
  const { name } = req.body;
  try {
    const newStyle = await createNewStyle(name);
    res.status(200).json(newStyle);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = router;
