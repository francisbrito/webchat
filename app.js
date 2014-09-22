// Library imports.
var koa = require('koa');
var path = require('path');
var jade = require('jade');

// Application setup.
var app = koa();
var views = path.join('.', 'views');

// Helpers
var view = path.join.bind(path, views);

// Middleware
app.use(function *() {
  this.body = jade.renderFile(view('log_in.jade'));
});

app.listen(3000);
