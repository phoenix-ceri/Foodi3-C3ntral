const { Schema, Types } = require('mongoose');

// Schema to create a rating subdocument
const ratingSchema = new Schema(
  {
    ratingId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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
      type: Date,
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
