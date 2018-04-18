(function () {
  'use strict';

  angular
    .module('books.admin')
    .controller('BooksAdminListController', BooksAdminListController);

  BooksAdminListController.$inject = ['BooksService'];

  function BooksAdminListController(BooksService) {
    var vm = this;

    vm.books = BooksService.query();
  }
}());
