let db = require('../../config/database');
let mongoose = require('mongoose');

let api = {};

let Clients = mongoose.model('Clients');

api.newClient = (req, res) => {
  let client = new Clients();
  client.client = req.body.client;
  client.client_email = req.body.client_email;

  client.save(error => {
    if (error) {
      return res.send();
    }
    res.json({ Message: 'Client created' })
    console.log('Client created');
  })
}

api.getClients = (req, res) => {
  Clients.find((error, client) => {
    if (error) {
      res.send(error);
    }
    res.status(200).json(client);
    return true;
  })
}

api.getOneClient = (req, res) => {
  Clients.findOne({ client: req.params.client }, (error, client) => {
    if (error) {
      res.send(error);
    }
    res.json(client);
  })
}

module.exports = api;
