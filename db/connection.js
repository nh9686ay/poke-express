const mongoose = require("mongoose");

const mongoURI =
    process.env.NODE_ENV === "production" ?
    process.env.DB_URL :
    "mongodb+srv://nh9686ay:Hitman95@cluster0.0pdjw.mongodb.net/pokemondb?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(instance => console.log(`Successfully connected to ${instance.connections[0].name}`))
    .catch(err => console.log(err));

module.exports = mongoose;