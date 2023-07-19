const { Watch, Brand, Function, Strap, Style, Color } = require("../db");

const createNewWatches = async (watchesData) => {
  try {
    const brands = await Brand.findAll();
    const styles = await Style.findAll();
    const colors = await Color.findAll();
    const straps = await Strap.findAll();
    const functions = await Function.findAll();

    const createdWatches = await Watch.bulkCreate(watchesData);

    for (let i = 0; i < createdWatches.length; i++) {
      const watch = createdWatches[i];
      const { brand, style, color, strap } = watchesData[i];

      const brandModel = brands.find((b) => b.name === brand);
      const styleModel = styles.find((s) => s.name === style);
      const colorModel = colors.find((c) => c.name === color);
      const strapModel = straps.find((s) => s.name === strap);

      const functionModels = functions.filter((f) => {
        return watchesData[i].functions.includes(f.name);
      });

      await watch.setBrand(brandModel);
      await watch.setStyle(styleModel);
      await watch.setColor(colorModel);
      await watch.setStrap(strapModel);
      await watch.setFunctions(functionModels);
    }

    return createdWatches;
  } catch (error) {
    throw new Error("Error al crear los relojes");
  }
};

module.exports = createNewWatches;
