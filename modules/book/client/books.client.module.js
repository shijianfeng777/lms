(function (app) {
  'use strict';

  app.registerModule('books', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('books.admin', ['core.admin']);
  app.registerModule('books.admin.routes', ['core.admin.routes']);
  app.registerModule('books.services');
  app.registerModule('books.routes', ['ui.router', 'core.routes', 'books.services']);
}(ApplicationConfiguration));
