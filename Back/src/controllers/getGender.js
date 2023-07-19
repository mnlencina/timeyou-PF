const getWatches = require("./getWatches");


const allGenders = async () => {
  try {
    const allWatches = await getWatches();
    const allGender = await allWatches.map((watch) => {
      return watch["gender"]
    });
    const genders = await allGender.filter((gender, index) => {
      return allGender.indexOf(gender) === index;
    })
    return genders;

  } catch (error) {
    console.log(error.message)
  }
}


const getGender = async (genderName) => {
  try {
    const allWatches = await getWatches();    
    const watchesGender = await allWatches.filter((watch) => 
      watch.gender === genderName
    )
    return watchesGender;
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {getGender, allGenders};