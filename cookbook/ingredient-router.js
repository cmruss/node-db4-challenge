const express = require('express');

const Cookbook = require('./cookbook-model');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    Cookbook.getRecipesByIngredient(req.params.id)
    .then(recipes => {
        console.log(recipes)
        if (recipes.length > 0){
            res.json(recipes);
        } else {
            res.status(404).json({ message: 'Nothing found..'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Could not connect.'})
    })
})

module.exports = router;