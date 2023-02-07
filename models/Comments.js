const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
    required: true,
  },
  comment: {
    type: String,
    reuiqred: true,
  },
});

module.exports = model('Comments', commentSchema);
