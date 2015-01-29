var express = require('express');
var bodyParser = require('body-parser');

var app = express(); 

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var m_middleware = function(req, res, next) {
	var user = {
		name: 'alex',
		position: 'SDE'
	};
	req.user = user;
	next();
}

app.use(m_middleware);

// deprecated
// app.use(express.urlencoded());

app.get('/', function(request,  response) {
	response.send({'hello from express' : '1'});
	
});

// or we can add a middle_ware list in the arguments
// app.post('/doStuff', urlencodedParser, m_middleware, function(request, response) {
app.post('/doStuff', urlencodedParser, function(request, response) {
	if (!request.body)
		return response.sendStatus(400);
	else 	
		response.send( {'welcome' : request.body.foo,
				'userName:' : request.user.name
			});
	
	/* deprecated
	var param = request.param('foo');
	response.send(
		{foo:param}
	);
	*/
});

app.listen(3000);