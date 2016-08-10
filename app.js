var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/', function (request, response) {
	response.sendfile('index.html');	
});



io.on('connection', function(mofiz){
		console.log('A user connected');

			//Send a message after a timeout of 4seconds
	  setTimeout(function(){
	    mofiz.send('Sent a message 1 seconds after connection!');
	  }, 1000);

		mofiz.on('disconnect', function () {
			console.log('Hello Disconnectd');
		});
});

http.listen(3000, function() {
	console.log('Listen on :3000');
});


