module.exports = (app) => {
  let api = app.app.api.budgets;

  app.route('/api/budgets')
     .post(api.newBudget)
     .get(api.getBudgets);
}
