// Library imports.
var koa = require('koa');

// Application setup.
var app = koa();

// Middleware
app.use(function *() {
  this.body = 'Hello world!';
});

app.listen(3000);
