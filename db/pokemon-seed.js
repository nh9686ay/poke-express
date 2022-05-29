const Pokemon = require("../models/pokemon-model.js");
const seedData = require("./pokemon-seed.json");

Pokemon.deleteMany({})
    .then(() => Pokemon.insertMany(seedData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit());