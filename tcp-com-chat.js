
var net = require('net');

var sockets = []

var server = net.createServer(function(socket){
		//setiap socket yang masuk di push ke array
		sockets.push(socket);

		socket.on('data',function(data){
			for(var i=0; i < sockets.length;i++){
				if(sockets[i]== socket) continue;
				sockets[i].write(data);
			}
		});
		

	});

	server.listen(2345);
	console.log("server tcp berjalan pada port 2345");
