const { Watch,Function } = require("../db");

const getWatches = async () => {
  try {
    const watches = await Watch.findAll({
      include: [
        {
            model: Function,
            attributes: ["name"],
            through: { attributes: [] }, // Excluye la tabla intermedia
          },
      ],
    });

    return watches;
  } catch (error) {
    throw new Error("Error al obtener los relojes");
  }
};

module.exports = getWatches;