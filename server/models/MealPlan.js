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
  },
  // type: {
  //   //if this is always going to be recipe for us (isn't it always going to be recipe?), then do we need to specify this? 
  //   type: String,
  // },
  value: {
    type: Array,
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
