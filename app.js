var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (request, response) {
	response.sendfile('index.html');	
});

http.listen(3000, function() {
	console.log('Listen on :3000');
});
