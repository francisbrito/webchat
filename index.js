// index.js -- Application entry point.
var express = require('express'),
    app     = express(),
    chat    = require('./lib/webchat-chat');

// Configuration.
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('It works!');
});

app.use('/chat', chat);

app.listen(PORT, function () {
    console.log('Listening at http://localhost:' + PORT);
});
