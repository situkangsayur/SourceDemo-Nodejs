
var net = require('net');

var server = net.createServer(function(socket){
		socket.write("hello ");
		socket.end("world \n");
	});

	server.listen(2345);
	console.log("server tcp berjalan pada port 2345");
