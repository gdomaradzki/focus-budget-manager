let mongoose = require('mongoose');

var schema = mongoose.Schema({
  client: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  }
}, { collection: 'clients' });

mongoose.model('Clients', schema);
