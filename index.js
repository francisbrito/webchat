// index.js -- Application entry point.
var express = require('express'),
    app     = express();

// Configuration.
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('It works!');
});

app.listen(PORT, function () {
    console.log('Listening at http://localhost:' + PORT);
});
