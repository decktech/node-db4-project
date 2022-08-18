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
            tbl.increments('step_id')
            tbl.varchar('step_instructions', 200)
                .notNullable()
            tbl.integer('step_number', 100)
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments('step_ingredients_id')
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('step_ingredients');
};
