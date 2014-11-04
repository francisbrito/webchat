// webchat-chat/index.js -- Webchat chat module.
var express = require('express'),
    Router  = express.Router;

var router = new Router();

router.get('/', function (req, res) {
    res.send('chat - it works!');
});
    
module.exports = router;
