var express = require('express');
var browserify = require('browserify');

var app = express.createServer();
app.use(express.static(__dirname));

var bundle = browserify({ entry : __dirname + '/main.js' });
app.use(bundle);

console.log('Listening on :8080');
app.listen(8080);
