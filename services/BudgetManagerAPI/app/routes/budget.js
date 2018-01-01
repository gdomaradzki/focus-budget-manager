const passport = require('passport'),
      config = require('@config'),
      models = require('@BudgetManager/app/setup');

module.exports = (app) => {
  const api = app.BudgetManagerAPI.app.api.budget;

  app.route('/api/v1/budget')
     .post(passport.authenticate('jwt', config.session), api.store(models.User, models.Budget, models.Client, app.get('budgetsecret')))
     .get(passport.authenticate('jwt', config.session), api.getAll(models.User, models.Budget, app.get('budgetsecret')))
     .get(passport.authenticate('jwt', config.session), api.getAllFromClient(models.User, models.Budget, app.get('budgetsecret')))
     .delete(passport.authenticate('jwt', config.session), api.remove(models.User, models.Budget, models.Client, app.get('budgetsecret')))

  app.route('/api/v1/budget/single')
     .get(passport.authenticate('jwt', config.session), api.index(models.User, models.Budget, models.Client, app.get('budgetsecret')))
     .put(passport.authenticate('jwt', config.session), api.edit(models.User, models.Budget, models.Client, app.get('budgetsecret')))

  app.route('/api/v1/budget/state')
     .get(passport.authenticate('jwt', config.session), api.getByState(models.User, models.Budget, models.Client, app.get('budgetsecret')))
}
