const mongoose = require('mongoose');
const RecipeDetails = require('./RecipeDetails');
const dateFormat = require('../utils/dateFormat');
const { Schema, Types } = mongoose;

// Schema to create a rating subdocument
const ratingSchema = new Schema(
  {
    _id: {
      type: String,
      required: true
    },
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    createdAt: {
      type: String,
      default: Date.now,
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = ratingSchema;
