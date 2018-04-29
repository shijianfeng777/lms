'use strict';

module.exports = function (app) {
  var loans = require('../controllers/loans.server.controller');

  app.route('/api/loans').get(loans.list);
  app.route('/api/loans/:loanId').put(loans.returnBook);
  app.route('/api/loans').delete(loans.delete);
  app.route('/api/loans').post(loans.create);
  // Finish by binding the user middleware
  app.param('loanId', loans.loanByID);
};
