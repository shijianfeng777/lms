(function () {
  'use strict';

  angular
    .module('users')
    .controller('LoanProfileController', LoanProfileController);

    LoanProfileController.$inject = ['$scope', '$http', '$location', 'UsersService', 'Authentication', 'Notification'];

  function LoanProfileController($scope, $http, $location, UsersService, Authentication, Notification) {
    var vm = this;

    vm.user = Authentication.user;
    
  }
}());
