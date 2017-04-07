module.exports = (app) => {
  let api = app.app.api.budgets;

  app.route('/api/budgets')
     .post(api.newBudget)
     .get(api.getBudgets);

  app.route('/api/budgets/:_id')
     .delete(api.deleteBudget)
     .put(api.putOneBudget)
     .get(api.getOneBudget);

  app.route('/api/budgets/status/:state')
     .get(api.getStatus);
}
