(function () {
  'use strict';

  angular
    .module('books')
    .controller('BooksListController', BooksListController);

  BooksListController.$inject = ['BooksService', 'LoansService', '$state'];

  function BooksListController(BooksService, LoansService, $state) {
    var vm = this;

    vm.books = BooksService.query();
    vm.loanBook = loanBook;

    function loanBook(book) {
<<<<<<< HEAD
       debugger;
=======
       
>>>>>>> fa8ed7627f8de1a2044ca463007359744afd0268
      LoansService.create({book: book}).$promise.then(function (data) {
         if(data && data.ok){
           $state.go('settings.loan');
         } else{
           console.log('Errrorrrr');
         }
      });
    }
  }
}());
