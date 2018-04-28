(function () {
  'use strict';

  angular
    .module('books')
    .controller('BooksListController', BooksListController);

  BooksListController.$inject = ['BooksService', 'LoansService'];

  function BooksListController(BooksService, LoansService) {
    var vm = this;

    vm.books = BooksService.query();
    vm.loanBook = loanBook;

    function loanBook(book) {
      console.log(LoansService.prototype);
      LoansService.create(book).$promise.then(function (data) {
        console.log(data);
      });
    }
  }
}());
