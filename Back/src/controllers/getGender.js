const getWatches = require("./getWatches");


const getGender = async () => {
  try {
    const allWatches = await getWatches();
    const allGender = await allWatches.map((watch) => {
      return watch["gender "]
    });
    const genders = await allGender.filter((gender, index) => {
      return allGender.indexOf(gender) === index;
    })
    return genders;

  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getGender;