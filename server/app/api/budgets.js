let db = require('../../config/database');
let mongoose = require('mongoose');

let api = {};

let Budget = mongoose.model('Budgets');

api.newBudget = (req, res) => {
  let budget = new Budget();
  budget.client = req.body.client;
  budget.clientEmail = req.body.client_email;
  budget.state = req.body.state;
  budget.title = req.body.title;
  budget.totalPrice = req.body.total_price;
  budget.items = req.body.items;
  budget.items.itemTitle = req.body.items.item_title;
  budget.items.itemQuantity = req.body.items.item_quantity;
  budget.items.itemPrice = req.body.items.item_price;
  budget.items.itemSubtotal = req.body.items.item_subtotal;

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
