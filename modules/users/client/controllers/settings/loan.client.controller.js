(function () {
  'use strict';

  angular
    .module('users')
    .controller('LoanProfileController', LoanProfileController);

  LoanProfileController.$inject = ['$scope', '$http', '$location', 'UsersService', 'LoansService', 'Authentication', 'Notification'];

  function LoanProfileController($scope, $http, $location, UsersService, LoansService, Authentication, Notification) {
    var vm = this;
<<<<<<< HEAD
=======

>>>>>>> fa8ed7627f8de1a2044ca463007359744afd0268
    var loginUser = Authentication.user;
    init();
    function init() {
      LoansService.get().$promise.then(function (data) {
        vm.loans = data.loans;
<<<<<<< HEAD
      })
   }
   vm.repayBook = repayBook;
   function repayBook(loan) {
    debugger;
   LoansService.delete({loan: loan}).$promise.then(function (data) {
     console.log(loan);
   });
 }
=======
      });
    }
>>>>>>> fa8ed7627f8de1a2044ca463007359744afd0268
  }
}());
