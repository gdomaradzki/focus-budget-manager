const mongoose = require('mongoose'),
      UserModel = require('@BudgetManagerModels/user'),
      BudgetModel = require('@BudgetManagerModels/budget');

const models = {
  User: mongoose.model('User'),
  Budget: mongoose.model('Budget')
}

module.exports = models;
