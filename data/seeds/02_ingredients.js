
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'eggs', units: 'whole'},
        {id: 2, name: 'milk', units: 'cups'},
        {id: 3, name: 'butter',units: 'pats'},
        {id: 4, name: 'cereal', units: 'cups'},
        {id: 5, name: 'bread', units:'slices'}
      ]);
};
