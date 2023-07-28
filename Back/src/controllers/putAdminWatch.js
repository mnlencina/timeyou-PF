const { Watch } = require("../db");

const updateWatch = async (id, watch) => {
  const watchFound = await Watch.findByPk(id);
  if (!watchFound) throw new Error("watch not found");
  await watchFound.update(watch);
  return watchFound;
};

module.exports = updateWatch;
