(function () {
  'use strict';

  angular
    .module('books')
    .controller('BooksListController', BooksListController);

  BooksListController.$inject = ['BooksService'];

  function BooksListController(BooksService) {
    var vm = this;

    vm.books = BooksService.query();
    vm.loanBook = loanBook;

    function loanBook(book){
      LoansService.get().$promise.then(function(data){
        vm.loans = data.loans;
      loanBook = book;})
      
    }
  }
}());
