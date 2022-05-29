const mongoose = require("../db/connection.js");

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: String
}, {
    timestamps: true
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;