const mongoose = require('mongoose');
const ratingSchema = require('./Rating')
const { Schema } = mongoose;

//was product model, started modifying to be recipe model, not fully completed yet. Thinking category will be 'plan' or 'mealplan'

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  ratings: [ratingSchema]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;


