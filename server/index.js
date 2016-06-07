require('babel-register');
require('babel-polyfill');
var app = require('../app.js');
var http = require('http');

var port = 3000
var server = http.createServer(app);
server.listen(port);
