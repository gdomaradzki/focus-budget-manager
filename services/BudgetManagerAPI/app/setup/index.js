const mongoose = require('mongoose'),
      UserModel = require('@BudgetManagerModels/user'),
      BudgetModel = require('@BudgetManagerModels/budget'),
      ClientModel = require('@BudgetManagerModels/client');

const models = {
  User: mongoose.model('User'),
  Budget: mongoose.model('Budget'),
  Client: mongoose.model('Client')
}

module.exports = models;
