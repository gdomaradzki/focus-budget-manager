const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  budgets: [{}]
});

mongoose.model('Client', Schema);
