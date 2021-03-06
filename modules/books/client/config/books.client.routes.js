(function () {
  'use strict';

  angular
    .module('books.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('books', {
        abstract: true,
        url: '/books',
        template: '<ui-view/>'
      })
      .state('books.list', {
        url: '',
        templateUrl: '/modules/books/client/views/list-books.client.view.html',
        controller: 'BooksListController',
        controllerAs: 'vm'
      })
      .state('books.view', {
        url: '/:bookId',
        templateUrl: '/modules/books/client/views/view-book.client.view.html',
        controller: 'BooksController',
        controllerAs: 'vm',
        resolve: {
          bookResolve: getBook
        },
        data: {
          pageTitle: '{{ bookResolve.title }}'
        }
      });
  }

  getBook.$inject = ['$stateParams', 'BooksService'];

  function getBook($stateParams, BooksService) {
    return BooksService.get({
      bookId: $stateParams.bookId
    }).$promise;
  }
}());
