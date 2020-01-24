const express = require('express');

const Cookbook = require('./cookbook-model');

const router = express.Router();

router.get('/', (req, res) => {
    Cookbook.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching recipes'})
    });
});

router.get('/:id/shoppingList', (req, res) => {
    Cookbook.getShoppingList(req.params.id)
    .then(list => {
        if (list) {
            res.json(list);
        } else {
            res.status(404).json({ message: 'Recipe not found.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Failure connecting to database.'})
    })
});

router.get('/:id/instructions', (req, res) => {
    Cookbook.getInstructions(req.params.id)
    .then(inst => {
        if (inst) {
            res.json(inst);
        } else {
            res.status(404).json({ message:'Instructions not found.' })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Failure connecting to database.'})
    })
});

module.exports = router;