const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 128,
    },
    description: {
      type: String,
    },
    frenchDescription: {
      type: String,
    },
    price: {
      type: String,
      required: true,
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
    frenchTechnicalDescription: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Product', productSchema);
