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
      title: '个人主页',
      state: 'settings.profile',
      roles: ['user']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'books', {
      title: '图书列表',
      state: 'books.list',
      roles: ['*']
    });
  }
}());
