const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  client: {
    type: String,
    required: true
  },

  state: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  total_price: {
    type: Number,
    required: true
  },

  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  items: [{}]
});

mongoose.model('Budget', Schema);
