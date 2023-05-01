const mongoose = require('mongoose');


const { Schema } = mongoose;

const mealPlanSchema = new Schema({
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
    type: String,
    required: true,
  },
  recipe:  {
    type: Number,
    required: true,
      // type: Schema.Types.ObjectId,
      // ref: 'RecipeDetails'
    }
    //may want to change this to 'recipe' singular in order to have one recipe per slot/position instead of multiple - something to consider

});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;
