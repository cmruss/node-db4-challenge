
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {
          id: 1, 
          recipe_id: 1,  
          instructions: 'Pour cereal into a bowl. Top off with milk. Enjoy with a spoon.'
        },
        {
          id: 2, 
          recipe_id: 2, 
          instructions: 'Put bread in toaster. when toaster is finished toasting, finish by spreading butter on toast.'
        },
        {
          id: 3, 
          recipe_id: 3, 
          instructions: 'Crack eggs into heated buttered skillet, cook for about two minutes, or to preffered consistency, stirring constantly with a wooden spoon.'
        }
      ]);
};
