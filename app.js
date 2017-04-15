var express = require('express');
var http = require('http');
var path = require('path')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
    res.sendfile('views/index.html');
});

var port = (process.env.PORT || '3000');
console.log("server is listening on port 3000! yay..");

var server = http.createServer(app);
server.listen(port);

module.exports = app;
