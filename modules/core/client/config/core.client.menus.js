(function () {
  'use strict';

  angular
    .module('core')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenu('account', {
      roles: ['user']
    });

    menuService.addMenuItem('account', {
      title: '',
      state: 'settings',
      type: 'dropdown',
      roles: ['user']
    });

    menuService.addSubMenuItem('account', 'settings', {
      title: '修改信息',
      state: 'settings.profile'
    });

    menuService.addSubMenuItem('account', 'settings', {
      title: 'Loan',
      state: 'settings.loan'
    });
    
    menuService.addSubMenuItem('account', 'settings', {
      title: '修改头像',
      state: 'settings.picture'
    });

    menuService.addSubMenuItem('account', 'settings', {
      title: '修改密码',
      state: 'settings.password'
    });
  }
}());
