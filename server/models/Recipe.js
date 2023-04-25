const mongoose = require('mongoose');
const Rating = require('./Rating');
const RecipeDetails = require('./RecipeDetails');
const { Schema } = mongoose;

//was product model, started modifying to be recipe model, not fully completed yet. Thinking category will be 'plan' or 'mealplan'

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


// description: {
//   type: String
// },
// image: {
//   type: String
// },
// price: {
//   type: Number,
//   required: true,
//   min: 0.99
// },
// quantity: {
//   type: Number,
//   min: 0,
//   default: 0
// },
// category: {
//   type: Schema.Types.ObjectId,
//   ref: 'Category',
//   required: true
