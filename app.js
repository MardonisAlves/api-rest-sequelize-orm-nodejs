var app  = require('./config/server');

var port = process.env.PORT;

if(port == null || port == ""){
	port = 3000
	console.log('O server esta online na porta' + port)
} 

app.listen(port);
