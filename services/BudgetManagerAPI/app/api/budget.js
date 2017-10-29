const mongoose = require('mongoose');

const api = {};

api.store = (User, Budget, Client, Token) => (req, res) => {
  if (Token) {

    Client.findOne({ _id: req.body.client_id }, (error, client) => {
      if (error) res.status(400).json(error);

      if (client) {
        const budget = new Budget({
          client_id: req.body.client_id,
          user_id: req.body.user_id,
          client: client.name,
          state: req.body.state,
          title: req.body.title,
          total_price: req.body.total_price,
          items: req.body.items
        });

        budget.save(error => {
          if (error) res.status(400).json(error)
          res.status(200).json({ success: true, message: "Budget registered successfully" })
        })
      } else {
        res.status(400).json({ success: false, message: "Invalid client" })
      }
    })

  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.getAll = (User, Budget, Token) => (req, res) => {
  if (Token) {
    Budget.find({ user_id: req.query.user_id }, (error, budget) => {
      if (error) return res.status(400).json(error);
      res.status(200).json(budget);
      return true;
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.getAllFromClient = (User, Budget, Token) => (req, res) => {
  if (Token) {
    Budget.find({ client_id: req.query.client_id }, (error, budget) => {
      if (error) return res.status(400).json(error);
      res.status(200).json(budget);
      return true;
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

module.exports = api;
