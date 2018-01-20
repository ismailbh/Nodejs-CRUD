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

function handleEntityNotFound(res, statusCode) {
  return entity => {
    if (!entity) {
      res.status(404).end({})
      return null
    }
    return entity;
  }
}

function handleEntityNotFoundObject(res, uuid){
  return books => {
    const data = books.find(book => book.uuid === uuid);
    if(!data){
      res.status(404).end({});
      return null;
    }
    return data;
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

// Gets a single User from DB with uuid
exports.showUuid = (req, res) =>{
  Book.findAsync()
  .then(handleEntityNotFoundObject(res, req.params.uuid))
  .then(respondWithResult(res))
  .catch(handleError(res))
}

// Create a new Book in the DB
exports.create = (req, res) => {
  req.body.book.uuid = uuid();
  Book.createAsync(req.body.book)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}