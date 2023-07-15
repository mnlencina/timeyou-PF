const { Gender } = require("../db");

const allGender = async () => {
  const allGenders = await Gender.findAll();

  if (!allGenders) throw new Error("That brand does not exist");
  return allGenders;
};

module.exports = allGender;