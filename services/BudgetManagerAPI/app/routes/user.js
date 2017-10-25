const passport = require('passport'),
      config = require('@config'),
      models = require('@BudgetManager/app/setup');

module.exports = (app) => {
  const api = app.BudgetManagerAPI.app.api.user;

  app.route('/api/v1/users')
     .get(passport.authenticate('jwt', config.session), api.index(models.User, app.get('budgetsecret')));

  app.route('/api/v1/signup')
     .post(api.signup(models.User));
}
