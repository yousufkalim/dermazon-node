const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 128,
    },
    description: {
      type: String,
    },
    tags: {
      type: Array,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('News', newsSchema);
