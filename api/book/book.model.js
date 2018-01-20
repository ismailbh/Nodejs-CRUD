const mongoose = require('bluebird').promisifyAll(require('mongoose'));

var BookSchema = new mongoose.Schema({
  uuid: String,
  name: String,
  author: String,
  active: Boolean,
  price: Number,
  category: String,
  image: String,
  isbn: String,
  weight: String,
  releaseDate: String,
  updatedAt: String,
  createdAt: String,
  modifiedBy: String
});

module.exports = mongoose.model('Book', BookSchema);