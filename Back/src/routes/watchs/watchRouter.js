const express = require("express");
const createNewWatch = require("../../controllers/postNewWacth");
const getWatches = require("../../controllers/getWatches");

const watchRouter = express.Router();


watchRouter.post("/", async (req, res) => {
  // console.log(req.body);
  const { brand, model, style, color, image, strap, price, gender, review, functions, description, del} = req.body;
  try {
    const newWatch = await createNewWatch(
      brand,
      model,
      style,
      color,
      image,
      strap,
      price,
      gender,
      review,
      functions,
      description,
      del
    );
    res.status(200).json(newWatch);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
});

watchRouter.get("/", async (req, res) => {
  try {
    const allWatch = await getWatches()
    res.status(200).json(allWatch)

  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ Error: error.message });
    } else {
      res.status(500).json({ Error: error.message });
    }
  }
})

module.exports= watchRouter