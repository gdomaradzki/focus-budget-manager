var db = require('../../config/database');
var mongoose = require('mongoose');

var api = {};

var Tasks = mongoose.model('Tasks');

api.newTask = (req, res) => {
  var tasks = new Tasks();
  tasks.date = req.body.date;
  tasks.title = req.body.title;
  tasks.description = req.body.description;

  tasks.save(error => {
    if (error) {
      res.json(error);
    }
    res.json({ Message: 'Task created' })
    console.log('Task created');
  })
}

api.fetchTasks = (req, res) => {
  Tasks.find((error, tasks) => {
    if (error) {
      res.send(error);
    }
    res.status(200).json(tasks);
    return true;
  })
}

module.exports = api;
