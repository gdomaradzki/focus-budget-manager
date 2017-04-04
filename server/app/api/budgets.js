let db = require('../../config/database');
let mongoose = require('mongoose');

let api = {};

let Budgets = mongoose.model('Budgets');

api.newBudget = (req, res) => {
  let budget = new Budgets();
  budget.client = req.body.client;
  budget.title = req.body.title;
  budget.total_price = req.body.total_price;
  budget.items = req.body.items;

  budget.save(error => {
    if (error) {
      return res.send();
    }
    res.json({ message: 'Budget created' })
    console.log('Budget created');
  })
}

api.getBudgets = (req, res) => {
  Budgets.find((error, budget) => {
    if (error) {
      res.send(error);
    }
    res.status(200).json(budget);
    return true;
  })
}

api.getOneBudget = (req, res) => {
  Budgets.findOne({ client: req.params.client }, (error, budget) => {
    if (error) {
      res.send(error);
    }
    res.json(budget);
  })
}

module.exports = api;
