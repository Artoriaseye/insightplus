'use strict';
var http = require('http');
var path = require('path');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    let filePath = path.join(__dirname, '/static/index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}).listen(port);
