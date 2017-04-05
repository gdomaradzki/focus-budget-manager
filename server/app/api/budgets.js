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
  });
};

api.getBudgets = (req, res) => {
  Budgets.find((error, budget) => {
    if (error) {
      res.send(error);
    }
    res.status(200).json(budget);
    return true;
  });
};

api.putOneBudget = (req, res) => {
  Budgets.update({ _id: req.params._id }, req.body, function (error, replaced) {
    if (error) {
      return console.log(error);
    }
    if (replaced) {
      res.status(200).end();
    }
    console.log(req.body.client + ' atualizado com sucesso')
    res.status(200).end();
  });
};

api.getOneBudget = (req, res) => {
  Budgets.findOne({ _id: req.params._id }, (error, budget) => {
    if (error) {
      return res.send();
    }
    res.json(budget);
  })
}

api.deleteBudget = (req, res) => {
  Budgets.remove({ _id: req.params._id }, function (error, removed) {
    if (error) {
      return console.log(error);
    }
    if (removed) {
      res.status(200).end();
      console.log('Budget removed');
    }
    res.status(500).end();
 });
};

module.exports = api;
