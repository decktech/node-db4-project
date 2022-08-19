exports.seed = function(knex, Promise) {
  return knex('step_ingredients').insert([

    { step_id: 1, ingredient_id: 1, quantity: 4 },
    { step_id: 2, ingredient_id: 2, quantity: 4 },

    { step_id: 1, ingredient_id: 3, quantity: 4 },
    { step_id: 2, ingredient_id: 4, quantity: 4 }
    
  ]);
};