exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', function(recipes) {
        recipes.increments();
        recipes.string('name', 128).notNullable().index();
    })

    .createTable('ingredients', function(ingredients) {
        ingredients.increments();
        ingredients.string('name', 128).notNullable().index();
        ingredients.string('units', 128).notNullable();
    })

    .createTable('recipe_ingredients', function(recipe_ingredients) {
        recipe_ingredients.increments();
        recipe_ingredients
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        recipe_ingredients
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        recipe_ingredients
            .integer('quantity')
            .notNullable();
    })

    .createTable('recipe_instructions', function(recipe_instructions) {
        recipe_instructions.increments()
        recipe_instructions
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        recipe_instructions.text('instructions')
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};