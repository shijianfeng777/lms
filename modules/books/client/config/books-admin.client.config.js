(function () {
  'use strict';

  // Configuring the Books Admin module
  angular
    .module('books.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: '管理图书',
      state: 'admin.books.list'
    });
  }
}());
