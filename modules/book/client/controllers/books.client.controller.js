(function () {
  'use strict';

  angular
    .module('books')
    .controller('BooksController', BooksController);

  BooksController.$inject = ['$scope', 'bookResolve', 'Authentication'];

  function BooksController($scope, book, Authentication) {
    var vm = this;

    vm.book = book;
    vm.authentication = Authentication;

  }
}());
