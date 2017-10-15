const mongoose = require('mongoose'),
      UserModel = require('@BudgetManagerModels');

const models = {
  User: mongoose.model('User')
}

module.exports = models;
