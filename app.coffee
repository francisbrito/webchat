// Library imports.
var express = require('express');

// Configuration.
var port    = process.env.PORT || 3000;

// Application setup.
var app = express();

app.listen(port);

console.log('Listening at port')
