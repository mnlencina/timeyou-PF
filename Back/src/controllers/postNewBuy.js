const { User,Buy } = require("../db");

const createNewWatch = async (userName,model) => {
    
    // evaluamos que recibimos los datos completos para crear el nuevo reloj
    if (!model) throw new Error("missing data buy");

    const newBuy = await Buy.create({ name: model});
  
    const userModel = await User.findOne({ where: { userName: userName } });
  
    await newBuy.setUser(userModel);
  
    return newBuy;

};

module.exports = createNewWatch;