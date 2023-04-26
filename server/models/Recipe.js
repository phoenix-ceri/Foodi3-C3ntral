const mongoose = require('mongoose');
const Rating = require('./Rating');
const RecipeDetails = require('./RecipeDetails');
const { Schema } = mongoose;


const recipeSchema = new Schema({
  spoonRecipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RecipeDetails"
  },
  ratings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating"
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

