const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const dateFormat = require('../utils/dateFormat');
const ratingSchema = require('../models/Rating');

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
      type: String,
      required: false,
    },
    imageType: {
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
    dishTypes: [
      {
        //I'm not sure what type this should be because it is choices/an array?
        type: String,
      }
    ],
    extendedIngredients: [
      {
        //is this another subdocument? or just leave it as is and it will populate correctly? 
        type: String,
      }
    ],
    summary: {
      type: String,
    },
    winePairing: [
      {
        //is this another subdocument? or just leave it as is and it will populate correctly? 
        type: String,
      }
    ],
    reviews: [
      {
        stars: {
          type: Number,
          required: true,
        },
        commentBody: {
          type: String,
          required: true,
          maxlength: 280,
          minlength: 1,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        }
      }
    ]
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