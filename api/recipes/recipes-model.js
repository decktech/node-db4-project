const db = require('../../data/db-congfig.js')

async function getRecipeById(recipe_id) {
    result = await db('recipe as re') 
        .leftjoin('')
}

module.exports = getRecipeById