const User = require('../models/user');

module.exports = {
  find(req, res, next) {
    const userId = req.params.id;
    User.findById({ _id: userId })
      .then(user => res.send(user))
      .catch(next);
  },

  edit(req, res, next) {
    const userId = req.params.id;
    const userProps = req.body;
    console.log(req);
    User.findOneAndUpdate({ _id: userId }, userProps)
      .then(() => User.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
  },

  delete(req, res, next) {
    const userId = req.params.id;
    User.findByIdAndRemove({ _id: userId })
      .then(user => res.status(204).send(user))
      .catch(next);
  }
};
