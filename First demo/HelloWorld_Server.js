var logger = require('./logger');
var Point = require('./Point')
var pt = new Point(12,12);
pt.print();

var http = require('http');

http.createServer(function(request, response) {
	response.writeHead({
		'Content-Type' : 'text/plain'
	});
	response.end('hello worldabcd');
	logger.info('test 1');
}).listen(3000);

logger.info('test 2');