const express = require("express");
const buyCheckout = require('../../controllers/buyCheckout');
const postNewBuy = require('../../controllers/postNewBuy');

const buyRouter = express.Router();

buyRouter.post('/checkout', async (req,res)=>{
    try {
        const {userName,id,model,colorName,amount} = req.body;
        const payment = await buyCheckout(id,model,colorName,amount);
        const newBuy = await postNewBuy(userName,model);
        res.status(200).json({
            message: 'Successful payment',
            purchaseData: payment,
          });
    } catch (error) {
        console.log(error);
        res.json({message: error.raw.message})
    }
})


module.exports = buyRouter;