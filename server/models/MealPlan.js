const mongoose = require('mongoose');


const { Schema } = mongoose;

const mealPlanSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  slot: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'RecipeDetails'
    }
    //may want to change this to 'recipe' singular in order to have one recipe per slot/position instead of multiple - something to consider
  ]
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;
