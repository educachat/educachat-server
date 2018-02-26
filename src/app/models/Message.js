const mongoose = require('../../database');
// const bcrypt = require('bcryptjs');

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
