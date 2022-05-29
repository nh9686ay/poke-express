const express = require("express");
const router = express.Router();

const Pokemon = require("../models/pokemon-model.js");

router.get("/", (req, res) => {
    Pokemon.find({})
        .then((pokemon) => res.render('index', {
            'pokemon': pokemon
        }))
        .catch(console.error)
});

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) => {
    Pokemon.create(req.body)
        .then((pokemon) => {
            res.redirect('/pokemon')
        })
        .catch(console)
});


router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Pokemon.findById(id)
        .then((pokemon) => {
            res.render('edit', pokemon);
        })
        .catch(console.error);
});

router.put("/:id", (req, res) => {
    Pokemon.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            img: req.body.url
        }, {
            new: true
        })
        .then(() => {
            res.redirect('/pokemon')
        })
});

router.delete('/:id', (req, res) => {
    Pokemon.findOneAndDelete({
            _id: req.params.id
        })
        .then(() => {
            res.redirect('/pokemon')
        })
})

// router.delete('/:id', (req, res) => {
//     Pokemon.findOneAndRemove({
//             _id: req.params.id
//         })
//         .then(() => res.redirect('/pokemon'))
//         .catch(console.error)
// });

module.exports = router;