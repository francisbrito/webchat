// webchat-chat/index.js -- Webchat chat module.
var express = require('express'),
    app  = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    // TODO: Display a list of available channels.
    res.send('chat - it works!');
});

app.get('/channel/:cid', function (req, res) {
    // TODO: Display channel information such as channel name and users count.
    // NOTE: Channel ids are just slugs.
    var channelId = req.params.cid;

    res.send('chat - channel details - ' + channelId); 
});

app.post('/channel/:cid/join', function (req, res) {
    // TODO: Add user into `cid` channel's user list.
    //       Redirect users to `/message`.
    var channelId = req.params.cid;

    res.send('chat - channel join - ' + channelId);
});

app.get('/channel/:cid/message', function (req, res) {
    // TODO: Display all messages for this channel.
    //       If user has joined this channel allow it to post messages to it.
    var channelId  = req.params.cid;

    res.send('chat - channel messages - ' + channelId);
});

app.post('/channel/:cid/message/post', function (req, res) {
    // TODO: Save message to channel's message board.
    //       Only allow so if user has joined the channel.
    var channelId = req.params.cid,
        message   = req.body.message;

    res.send('chat - channel messages post - ' + channelId + ' - message - ' + message);
});
    
module.exports = app;
