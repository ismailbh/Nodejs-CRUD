const uuid = require('uuid/v4');
const Book = require('./book.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return entity => {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return err => {
    res.status(statusCode).send(err);
  }
}

// Gets a list of Book
exports.index = (req, res) => {
  Book.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single User from DB with id
exports.show = (req, res) => {
  Book.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}