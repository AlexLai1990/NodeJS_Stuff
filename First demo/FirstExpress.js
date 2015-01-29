var express = require('express');
var bodyParser = require('body-parser');

var app = express(); 

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.urlencoded());

app.get('/', function(request,  response) {
	response.send({'hello from express' : '1'});
	
});

app.post('/doStuff', urlencodedParser, function(request, response) {
	if (!request.body)
		return response.sendStatus(400);
	else 	
		response.send( 'welcome : ' + request.body.foo);
	
	/*
	var param = request.param('foo');
	response.send(
		{foo:param}
	);
	*/
});

app.listen(3000);