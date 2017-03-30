let mongoose = require('mongoose');

var schema = mongoose.Schema({
  task_date: {
    type: String,
    required: true
  },

  task_title: {
    type: String,
    required: true
  },

  task_description: {
    type: String,
    required: true
  }
}, { collection: 'todos' });

mongoose.model('Tasks', schema);
