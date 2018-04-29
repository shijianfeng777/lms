(function () {
  'use strict';

  angular
    .module('users')
    .controller('LoanProfileController', LoanProfileController);

  LoanProfileController.$inject = ['$scope', '$window', 'LoansService', 'Notification'];

  function LoanProfileController($scope, $window, LoansService, Notification) {
    var vm = this;
    vm.returnBook = returnBook;

    init();
    function init() {
      LoansService.get().$promise.then(function (data) {
        vm.loans = data.loans;

      })
    }
    function returnBook(loan) {
      LoansService.returnBook(loan).$promise.then(function (data) {
        if(data && data.ok){
          $window.location.reload();
        }
      });
    }
  }
}());
