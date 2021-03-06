(function () {
  'use strict';

  angular
    .module('users.services')
    .factory('LoansService', LoansService);

  LoansService.$inject = ['$resource', '$log'];

  function LoansService($resource, $log) {
    // $resource has default http method $save
    var baseUrl = '/api/loans';
    var Loan = $resource(baseUrl + '/:loanId', {
      loanId: '@_id'
    }, {
      returnBook: {
        method: 'PUT'
      },
      create: {
        url: baseUrl,
        method: 'POST'
      },
      get: {
        method: 'GET'
      }
    });

    angular.extend(Loan.prototype, {
      createOrUpdate: function () {
        var loan = this;
        return createOrUpdate(loan);
      }
    });

    return Loan;

    function createOrUpdate(loan) {
      if (loan._id) {
        return loan.$update(onSuccess, onError);
      } else {
        return loan.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(loan) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
