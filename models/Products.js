const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 128,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  images: {
    type: [String],
  },
  availability: {
    type: Boolean,
    required: true,
  },
  technical_description: {
    type: String,
  },
  brand: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
