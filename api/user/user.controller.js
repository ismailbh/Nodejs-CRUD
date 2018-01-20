const uuid = require('uuid/v4');
const User = require('./user.model');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return entity => {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  }
}

function handleEntityNotFound(res) {
  return entity => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  }
}

function handleEntityNotFoundObj(res, uuid) {
  return entity => {
    const data = entity.find(user => user.uuid === uuid)
    if (!data) {
      res.status(404).end({});
      return null;
    }
    return data;
  }
}

function removeEntity1(res) {
  return entity => {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        })
    }
  }
}

function removeEntity2(res) {
  return entity => {
    res.status(204).end();
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return err => {
    res.status(statusCode).send(err);
  }
}

// Gets a list of user
exports.index = (req, res) => {
  User.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single User from the DB
exports.show = (req, res) => {
  User.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//Gets a single User from the DB
exports.showUuid = (req, res) => {
  User.findAsync()
    .then(handleEntityNotFoundObj(res, req.params.uuid))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates new User
exports.create = (req, res) => {
  req.body.user.uuid = uuid();
  User.createAsync(req.body.user)
    .then(respondWithResult(res, 201))
    .then(handleError(res));
}

// Deletes User
exports.destroy1 = (req, res) => {
  User.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity1(res))
    .catch(handleError(res));
}
exports.destroy2 = (req, res) => {
  User.findByIdAndRemoveAsync(req.params.id)
    .then(removeEntity2(res))
    .catch(handleError(res));
}

// Updates User
exports.update = (req, res) => {
  User.findByIdAndUpdateAsync(req.params.id, req.body.user, {new: true})
    .then(respondWithResult(res))
    .catch(handleError(res));
}