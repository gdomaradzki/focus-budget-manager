let mongoose = require('mongoose');

var schema = mongoose.Schema({
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

  total_price: {
    type: Number,
    required: true
  },

  items: [
    {
      item_title: {
        type: String,
        required: true
      },

      item_quantity: {
        type: Number,
        required: true
      },

      item_price: {
        type: Number,
        required: true
      },

      item_subtotal: {
        type: Number,
        required: true
      }
    }
  ]


}, { collection: 'budgets' });

mongoose.model('Budgets', schema);
