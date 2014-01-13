
var http = require('http');

var s = http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/plai'});
	res.end("Hello World");
	});

	s.listen(1234);
	console.log("server running di port 1234");
