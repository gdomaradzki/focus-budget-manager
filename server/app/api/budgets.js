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
  budget.items.item_title = req.body.items.item_title;
  budget.items.item_quantity = req.body.items.item_quantity;
  budget.items.item_price = req.body.items.item_price;
  budget.items.item_subtotal = req.body.items.item_subtotal;

  budget.save(error => {
    if (error) {
      return res.send();
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
  }).skip(1)
}

module.exports = api;
