module.exports = (app) => {
  let api = app.app.api.todos;

  app.route('/api/tasks')
     .post(api.newTask)
     .get(api.fetchTasks);
}
