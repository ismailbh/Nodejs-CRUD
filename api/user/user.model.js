const mongoose = require('bluebird').promisifyAll(require('mongoose'));

const UserSchema = new mongoose.Schema({
  uuid: String,
  provider: String,
  name: String,
  role: {
    type: String,
    default: 'user'
  },
  email: {
    type: String,
    lowercase: true
  },
  password: String,
});

module.exports = momgoose.module('User', UserSchema);