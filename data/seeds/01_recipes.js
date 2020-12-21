
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, 
          name: 'A Bowl of Cereal'
        },
        {
          id: 2, 
          name: 'Buttered Toast'
        },
        {
          id: 3, 
          name: '2 Eggs, Scrambled'
        }
      ]);
};
