const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product's name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product's description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product's price"],
    maxlength: [8, "Price cannot exceed 8 figures"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Category required "],
  },
  stock: {
    type: Number,
    required: [true, "Please enter the stock"],
    maxlength: [4, "Stock cannot exceeds 4 figures"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  Reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
