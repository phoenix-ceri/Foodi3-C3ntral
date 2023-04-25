const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const Recipe = require('./Recipe');

//Schema to create subdocument with recipe details from Spoonacular

const recipeDetailSchema = new Schema(
  {
    spoonId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      //have to double check what type this is
      type: String,
      required: false,
    },
    imageType: {
      //have to double check what type this is
      type: String,
      required: true,
    },
    servings: {
      type: Number,
    },
    readyInMinutes: {
      type: Number,
    },
    spoonacularSourceUrl: {
      type: String,
    },
    pricePerServing: {
      type: Number,
    },
    cheap: {
      type: Boolean,
      required: false,
    },
    dishTypes: {
      //I'm not sure what type this should be becuase it is choices/an array?
      type: Array,
    },
    extendedIngredients: {
      //is this another subdocument? or just leave it as is and it will populate correctly? 
      type: Array,
    },
    summary: {
      type: String,
    },
    winePairing: {
      //is this another subdocument? or just leave it as is and it will populate correctly? 
      type: Array,
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
const RecipeDetails = mongoose.model('RecipeDetails', recipeDetailSchema);

module.exports = RecipeDetails;