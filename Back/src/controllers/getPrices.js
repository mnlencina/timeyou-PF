const { Watch } = require("../db");

const getPrices = async () => {
const watches = await Watch.findAll();
const prices = watches.map((watch) => watch.price);
return prices;
};

module.exports = getPrices;