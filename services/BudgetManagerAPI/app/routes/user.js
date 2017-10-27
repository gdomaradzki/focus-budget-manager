const models = require('@BudgetManager/app/setup');

module.exports = (app) => {
  const api = app.BudgetManagerAPI.app.api.user;

  app.route('/api/v1/signup')
     .post(api.signup(models.User));
}
