var express = require('express'); 
var expresssession = require('express-session');
var genuuid = require('uuid')

var app = express(); 
  
app.use(expresssession({
	/*
	genid: function(req) {
		genuuid(); // cannot work here 
	},
	*/
	secret: 'keyboard cat',  //session cookie is signed with this secret to prevent tampering
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 60000
	}
})); 

var router = express.Router();
 
router.get('/session/set/:value', function(req, res) {
	req.session.mySession = req.params.value;
	req.session.myGUID = genuuid(); 
	res.send('session write success \n ' + req.session.myGUID );
	// res.write('session write success' + req.session.mySession + req.session.genid);
});
 
app.get('/session/get/',function(req, res) {
	var sess = req.session 
	if(sess.mySession)
		res.send('the session value is: ' + sess.mySession);
	else
		res.send("no session value");
});
 
app.get('/radical', function(req, res) {
  if(req.session.lastPage) {
    res.send('Last page was: ' + req.session.lastPage + '. ');
  }

  req.session.lastPage = '/radical';
  res.send('What a radical visit!');
});

app.get('/tubular', function(req, res) {
  if(req.session.lastPage) {
    res.send('Last page was: ' + req.session.lastPage + '. ');
  }

  req.session.lastPage = '/tubular';
  res.send('Are you a surfer?');
});

app.use('/', router);
app.listen(process.env.PORT || 3000);