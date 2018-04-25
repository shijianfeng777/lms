'use strict';

module.exports = function (app) {
  // Loan Routes
  var loans = require('../controllers/loans.server.controller');
  var users = require('../controllers/users.server.controller');

  // Setting up the loans profile api
  app.route('/api/loans').get(loans.list);
  app.route('/api/loans/:id').put(loans.update);
  app.route('/api/loans/:id').delete(loans.delete);
  app.route('/api/loans').post(loans.create);

  // Finish by binding the user middleware
  app.param('userId', users.userByID);
};
