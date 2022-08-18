exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.varchar('recipe_name', 100)
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id')
            tbl.varchar('ingredient_name', 100)
                .notNullable()
                .unique();
            tbl.varchar('ingredient_unit', 100)
        })
        .createTable('steps', tbl => {
            tbl.increments()
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments()
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('step_ingredients');
};
