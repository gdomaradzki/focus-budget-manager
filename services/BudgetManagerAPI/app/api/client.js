const mongoose = require('mongoose');

const api = {};

api.store = (User, Client, Token) => (req, res) => {
  if (Token) {
    const client = new Client({
      user_id: req.body.user_id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    client.save(error => {
      if (error) return res.status(400).json(error);
      res.status(200).json({ success: true, message: "Client registration successfull" });
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

api.getAll = (User, Client, Token) => (req, res) => {
  if (Token) {
    Client.find({ user_id: req.query.user_id }, (error, client) => {
      if (error) return res.status(400).json(error);
      res.status(200).json(client);
      return true;
    })
  } else return res.status(403).send({ success: false, message: 'Unauthorized' });
}

module.exports = api;
