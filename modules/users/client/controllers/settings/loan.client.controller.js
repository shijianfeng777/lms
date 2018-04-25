(function () {
  'use strict';

  angular
    .module('users')
    .controller('LoanProfileController', LoanProfileController);

    LoanProfileController.$inject = ['$scope', '$http', '$location', 'UsersService', 'LoansService', 'Authentication', 'Notification'];

  function LoanProfileController($scope, $http, $location, UsersService, LoansService, Authentication, Notification) {
    var vm = this;
 
    var loginUser = Authentication.user;
    init();
    function init(){
      LoansService.get().$promise.then(function(data){
        vm.loans = data;
      })
    }
  }
}());
