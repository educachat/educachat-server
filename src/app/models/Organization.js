const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

let OrganizationSchema = new mongoose.Schema({
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
  rooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Organization = mongoose.model('Organization', OrganizationSchema);

module.exports = Organization;