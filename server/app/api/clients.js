let db = require('../../config/database');
let mongoose = require('mongoose');

let api = {};

let Clients = mongoose.model('Clients');

api.newClient = (req, res) => {
  let client = new Clients();
  client.client = req.body.client;
  client.state = req.body.state;

  client.save(error => {
    if (error) {
      res.json(error);
    }
    res.json({ Message: 'Task created' })
    console.log('Task created');
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

module.exports = api;
