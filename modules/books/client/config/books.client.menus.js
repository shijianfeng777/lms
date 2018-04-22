(function () {
  'use strict';

  angular
    .module('books')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: '图书',
      state: 'books',
      type: 'dropdown',
      roles: ['*']
    });

    menuService.addMenuItem('topbar', {
      title: '借书',
      state: 'settings.loan',
      roles: ['user']
    });

    menuService.addMenuItem('topbar', {
      title: '规章',
      state: 'rule',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'books', {
      title: '图书列表',
      state: 'books.list',
      roles: ['*']
    });
  }
}());
