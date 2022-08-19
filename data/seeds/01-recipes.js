exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'chicken scallopini' },
      { recipe_name: 'herb butter steak' }
    ]);
  };