module.exports = (app) => {
  let api = app.app.api.clients;

  app.route('/api/clients')
     .post(api.newClient)
     .get(api.getClients);

  app.route('/api/clients/:client')
     .get(api.getOneClient);
}
