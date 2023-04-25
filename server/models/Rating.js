const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

// Schema to create a rating subdocument
const ratingSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
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
const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
