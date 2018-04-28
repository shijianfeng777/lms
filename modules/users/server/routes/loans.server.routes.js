'use strict';

module.exports = function (app) {
  var loans = require('../controllers/loans.server.controller');

  app.route('/api/loans').get(loans.list);
  app.route('/api/loans/:id').put(loans.update);
  app.route('/api/loans/:id').delete(loans.delete);
  app.route('/api/loans').post(loans.create);
};
function routeConfig($stateProvider) {
  $stateProvider
    .state('loans.book', {
      url: '/loans',
      templateUrl: './modules/users/server/routes/loans.server.routes.js',
      controller: 'LoanProfileController',
      controllerAs: 'vm'
    });
}
