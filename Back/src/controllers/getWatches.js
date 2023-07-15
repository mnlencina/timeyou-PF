const Watches = require ('../../src/jsondb');

const getWatches = ()=>{

    const allWatches = Watches;
    return allWatches;
};

module.exports = getWatches;


// const getAllActivities = async () =>{

//     const allActivities = await TourActivity.findAll(
//       {include:{
//           model: Country,
//           attributes: ['Nombre'],
//           through: {
//               attributes: []
//           },
//       },
//       }
//   );
//     return allActivities;
//   };