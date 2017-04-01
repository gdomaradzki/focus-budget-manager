let db = require('../../config/database');
let mongoose = require('mongoose');

let api = {};

let Budget = mongoose.model('Budgets');

api.newBudget = (req, res) => {
  let budget = new Budget();
  budget.client = req.body.client;
  budget.state = req.body.state;
  budget.title = req.body.title;
  budget.items = req.body.items;

  budget.save(error => {
    if (error) {
      res.json(error);
    }
    res.json({ Message: 'Budget created' })
    console.log('Budget created');
  })
}

api.getBudgets = (req, res) => {
  Budget.find((error, budget) => {
    if (error) {
      res.send(error);
    }
    res.status(200).json(budget);
    return true;
  })
}

module.exports = api;
