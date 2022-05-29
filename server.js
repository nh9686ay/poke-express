const express = require("express");
const app = express();
const Pokemon = require('./models/pokemon-model');
const pokemonController = require("./controllers/pokemonController");
const methodOverride = require("method-override");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride("_method"));

const port = process.env.PORT || 5600;

app.use("/pokemon", pokemonController);


app.listen(port, () => console.log(`App is running on port ${port}`));