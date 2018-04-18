(function () {
  'use strict';

  angular
    .module('books.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.books', {
        abstract: true,
        url: '/books',
        template: '<ui-view/>'
      })
      .state('admin.books.list', {
        url: '',
        templateUrl: '/modules/books/client/views/admin/list-books.client.view.html',
        controller: 'BooksAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.books.create', {
        url: '/create',
        templateUrl: '/modules/books/client/views/admin/form-book.client.view.html',
        controller: 'BooksAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          bookResolve: newBook
        }
      })
      .state('admin.books.edit', {
        url: '/:bookId/edit',
        templateUrl: '/modules/books/client/views/admin/form-book.client.view.html',
        controller: 'BooksAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ bookResolve.title }}'
        },
        resolve: {
          bookResolve: getBook
        }
      });
  }

  getBook.$inject = ['$stateParams', 'BooksService'];

  function getBook($stateParams, BooksService) {
    return BooksService.get({
      bookId: $stateParams.bookId
    }).$promise;
  }

  newBook.$inject = ['BooksService'];

  function newBook(BooksService) {
    return new BooksService();
  }
}());
