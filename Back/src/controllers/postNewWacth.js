const { Watch, Brand, Function, Strap, Style, Color } = require("../db");

const createNewWatch = async (
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
) => {
    
    // evaluamos que recibimos los datos completos para crear el nuevo reloj
    if (!brand || !model || !style || !color || !image || !strap || !price || !gender || !functions || !description ) throw new Error("missing data");
  
    const comprobacion = await Watch.findOne({
      where: { model: model },
      include: [
        {
          model: Color,
          where: { name: color },
          attributes: [],
        },
      ],
    });
    console.log(comprobacion);
  
    if (comprobacion) {
      const error = new Error("El modelo ya existe para ese color");
      error.status = 404; // Establece el código de estado a 404
      throw error;
    };
  
    const newWatch = await Watch.create({
      model,
      image,
      price,
      gender,
      review,
      description,
    });
  
    const brandModel = await Brand.findOne({ where: { name: brand } });
  
    const colorModel = await Color.findOne({ where: { name: color } });
  
    const styleModel = await Style.findOne({ where: { name: style } });
  
    const strapModel = await Strap.findOne({ where: { name: strap } });
  
    // const functModels = await functions.map((funct) => {
    //   return Function.findOne({ where: { name: funct } });
    // });
    const functModels = await Promise.all(functions.map( (funct) => {
          
      return  Function.findOne({ where: { name: funct} });
    }));
    
    
    await newWatch.setFunctions(functModels);
    await newWatch.setStyle(styleModel);
    await newWatch.setBrand(brandModel);
    await newWatch.setColor(colorModel);
    await newWatch.setStrap(strapModel);
  
    return newWatch;

};

module.exports = createNewWatch;
