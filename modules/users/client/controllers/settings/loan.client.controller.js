(function () {
  'use strict';

  angular
    .module('users')
    .controller('LoanProfileController', LoanProfileController);

    LoanProfileController.$inject = ['$scope', '$http', '$location', 'UsersService', 'LoansService', 'Authentication', 'Notification'];

  function LoanProfileController($scope, $http, $location, UsersService, LoansService, Authentication, Notification) {
    var vm = this;
 
    console.log(Authentication.user);
    init();
    function init(){
      LoansService.get().then(function(data){
        debugger;
        vm.loans = data;
      })
    }
  }
}());
