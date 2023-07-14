const express = require("express");
const createNewWatch = require("../../controllers/postNewWacth");
const getWatches = require("../../controllers/getWatches");

const watchRouter = express.Router();


watchRouter.post("/", async (req, res) => {
  const { model, color, price, gender, brands, style, strap, functions } =
    req.body;
  try {
    const newWatch = await createNewWatch(
      model,
      color,
      price,
      gender,
      brands,
      style,
      strap,
      functions
    );
    res.status(200).json(newWatch);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

watchRouter.get("/", async (req, res) => {
  try {
    const allWatch = await getWatches()
    res.status(200).json(allWatch)

  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
})

module.export= watchRouter