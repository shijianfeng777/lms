(function () {
  'use strict';

  angular
    .module('books.admin')
    .controller('BooksAdminController', BooksAdminController);

  BooksAdminController.$inject = ['$scope', '$state', '$window', 'bookResolve', 'Authentication', 'Notification'];

  function BooksAdminController($scope, $state, $window, book, Authentication, Notification) {
    var vm = this;

    vm.book = book;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Book
    function remove() {
      if ($window.confirm('你确定删除该图书？')) {
        vm.book.$remove(function () {
          $state.go('admin.books.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Book deleted successfully!' });
        });
      }
    }

    // Save Book
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.bookForm');
        return false;
      }

      // Create a new book, or update the current instance
      vm.book.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.books.list'); // should we send the User to the list or the updated Book's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Book saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Book save error!' });
      }
    }
  }
}());
