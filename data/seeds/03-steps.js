exports.seed = function(knex, Promise) {
    return knex('steps').insert([   

      { step_instructions: 'add wine to pan', step_number: 2, recipe_id: 1 },
      { step_instructions: 'finely chop garlic', step_number: 1, recipe_id: 1 },

      { step_instructions: 'add butter to pan', step_number: 2, recipe_id: 2 },
      { step_instructions: 'chop parsley', step_number: 1, recipe_id: 2 }
      
    ]);
  };