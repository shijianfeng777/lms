(function () {
  'use strict';

  angular
    .module('users')
    .controller('MyBooksProfileController', MyBooksProfileController);

    MyBooksProfileController.$inject = ['$scope', '$http', '$location', 'UsersService', 'Authentication', 'Notification'];

  function MyBooksProfileController($scope, $http, $location, UsersService, Authentication, Notification) {
    var vm = this;

    vm.user = Authentication.user;
    
  }
}());
