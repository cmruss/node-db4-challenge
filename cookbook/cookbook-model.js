const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions

}

function getRecipes() {
    return db('recipes')
};

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri')
    .where('recipe_id', recipe_id)
    .join('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
    .join('recipes as r', 'r.id', '=', 'ri.recipe_id')
    .select('r.name as recipe_name', 'i.name as ingredient_name', 'ri.quantity', 'i.units')
};

function getInstructions(recipe_id) {
    return db('recipe_instructions as ri')
    .where('recipe_id', recipe_id)
    .join('recipes as r', 'r.id', '=', 'ri.recipe_id')
    .select( 'r.name as recipe_name', 'ri.instructions')
}