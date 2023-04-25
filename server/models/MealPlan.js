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
    type: Number,
    required: true,
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;
