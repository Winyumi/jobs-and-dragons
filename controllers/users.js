const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.User.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User.findOne({ email: req.params.email })
      .then(user => {
        if (user) {
          return res.json({
            success: true,
            data: user
          });
        }
        return res.json({
          success: false
        });
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(user =>
        res.json({
          success: true,
          data: user
        })
      )
      .catch(err => res.status(422).json(err));
  },
  updateById: function(req, res) {
    db.User.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  updateByEmail: function(req, res) {
    db.User.findOneAndUpdate({ email: req.params.email }, req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findOneAndDelete({ id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
