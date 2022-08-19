exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient_name: 'white wine', ingredient_unit: 'cup' },
    { ingredient_name: 'garlic', ingredient_unit: 'cloves' },
    { ingredient_name: 'parsley', ingredient_unit: 'cup' },
    { ingredient_name: 'butter', ingredient_unit: 'tbsp' }
  ]);
};