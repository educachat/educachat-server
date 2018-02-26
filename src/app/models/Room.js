const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

let RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;