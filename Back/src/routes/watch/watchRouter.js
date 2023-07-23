const express = require("express");
const createNewWatch = require("../../controllers/postNewWacth");
const getWatches = require("../../controllers/getWatches");
const createNewWatches = require('../../controllers/postBulkWatch');

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

watchRouter.post("/bulk", async (req, res) => {
  // console.log(req.body);
  const watchesData = req.body;
  try {
    const newbulk = await createNewWatches(watchesData);
    res.status(200).json(newbulk);
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


watchRouter.get("/:model", async (req, res) => {

  try {

    const {model} = req.params
    
    let allWatches = await getWatches();

    if (model || typeof model !== 'string' || model.trim() === '') {
      let watchByModel = await allWatches.filter(watch => watch.model == model)

      watchByModel.length ?
        res.status(200).send(watchByModel) :
        res.status(404).send('Watch not found!');
    }
    } catch (error) {
      if (error.status === 404) {
        res.status(404).json({ Error: error.message });
      } else {
        res.status(500).json({ Error: error.message });
      }
    }
  })

module.exports= watchRouter